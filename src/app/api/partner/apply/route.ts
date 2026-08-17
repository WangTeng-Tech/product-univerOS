import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { companyName, contactName, phone, email, tier, region, notes } = body;

    if (!contactName || (!phone && !email)) {
      return NextResponse.json({ error: "请提供有效的联系人及联系方式（手机或邮箱）" }, { status: 400 });
    }

    const adminEmail = process.env.ADMIN_EMAIL || "root@wangteng.tech";
    const resendApiKey = process.env.RESEND_API_KEY;
    const feishuWebhook = process.env.FEISHU_WEBHOOK_URL;
    const submitTime = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

    // 1. 优先通过 Resend API 发送邮件至指定邮箱 (root@wangteng.tech)
    let emailSent = false;
    if (resendApiKey) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            from: "univerOS Partner <onboarding@resend.dev>",
            to: [adminEmail],
            reply_to: email || undefined,
            subject: `🤝 新代理商加盟申请 - ${companyName || contactName} (${tier || "标准合伙人"})`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff; color: #0f172a;">
                <div style="border-bottom: 2px solid #00c981; padding-bottom: 12px; margin-bottom: 20px;">
                  <h2 style="margin: 0; color: #0f172a; font-size: 20px;">🤝 univerOS 官网新代理商加盟申请</h2>
                  <p style="margin: 4px 0 0 0; color: #64748b; font-size: 13px;">来自 univerOS 官网 partner#apply-form 表单提交</p>
                </div>
                
                <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; width: 130px;"><strong>👤 联系人姓名：</strong></td>
                    <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${contactName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b;"><strong>🏢 公司/团队：</strong></td>
                    <td style="padding: 8px 0; color: #0f172a;">${companyName || "未填写 / 个人创业者"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b;"><strong>📞 手机/微信：</strong></td>
                    <td style="padding: 8px 0; color: #0f172a;">${phone || "未填写"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b;"><strong>✉️ 电子邮箱：</strong></td>
                    <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email || ""}" style="color: #00c981;">${email || "未填写"}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b;"><strong>💎 意向合作级别：</strong></td>
                    <td style="padding: 8px 0; color: #00c981; font-weight: 700;">${tier || "标准合伙人"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b;"><strong>📍 覆盖区域：</strong></td>
                    <td style="padding: 8px 0; color: #0f172a;">${region || "全国"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b; vertical-align: top;"><strong>📝 团队简介/备注：</strong></td>
                    <td style="padding: 8px 0; color: #334155; white-space: pre-wrap; background: #f8fafc; padding: 10px; border-radius: 6px;">${notes || "无"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #64748b;"><strong>⏱️ 提交时间：</strong></td>
                    <td style="padding: 8px 0; color: #94a3b8; font-size: 12px;">${submitTime}</td>
                  </tr>
                </table>

                <div style="margin-top: 24px; padding-top: 16px; border-top: 1px dashed #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
                  ©2026 univerOS · 合作伙伴生态中枢 (Target: ${adminEmail})
                </div>
              </div>
            `
          })
        });

        if (emailRes.ok) {
          emailSent = true;
          console.log(`[Partner Apply] Email notification sent successfully to ${adminEmail}`);
        } else {
          const errText = await emailRes.text();
          console.warn("[Partner Apply] Resend API response:", errText);
        }
      } catch (resendErr) {
        console.error("[Partner Apply] Resend email send error:", resendErr);
      }
    }

    // 2. 飞书 Webhook 实时通知（如配置）
    if (feishuWebhook) {
      try {
        await fetch(feishuWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            msg_type: "post",
            content: {
              post: {
                zh_cn: {
                  title: "🤝 新代理商加盟申请通知",
                  content: [
                    [
                      { tag: "text", text: `🏢 公司/机构：${companyName || "个人/未填"}\n` },
                      { tag: "text", text: `👤 联系人：${contactName}\n` },
                      { tag: "text", text: `📞 电话：${phone || "未填"}\n` },
                      { tag: "text", text: `✉️ 邮箱：${email || "未填"}\n` },
                      { tag: "text", text: `💎 意向级别：${tier || "标准合伙人"}\n` },
                      { tag: "text", text: `📍 意向区域：${region || "全国"}\n` },
                      { tag: "text", text: `📝 备注：${notes || "无"}\n` },
                      { tag: "text", text: `⏱️ 时间：${submitTime}` }
                    ]
                  ]
                }
              }
            }
          })
        });
      } catch (fsErr) {
        console.error("[Partner Apply] Feishu webhook notify error:", fsErr);
      }
    }

    // 3. 服务端持久化日志留痕
    console.log(`[Partner Apply Form Captured] Contact: ${contactName}, Phone: ${phone}, Email: ${email}, Company: ${companyName}, Tier: ${tier}, Target: ${adminEmail}, Status: ${emailSent ? "EMAIL_SENT" : "LOGGED"}`);

    return NextResponse.json({ 
      success: true, 
      message: "加盟申请提交成功！专属渠道经理将在 24 小时内与您联系对接。" 
    });
  } catch (err: any) {
    console.error("Partner apply API error:", err);
    return NextResponse.json({ error: err.message || "提交失败" }, { status: 500 });
  }
}
