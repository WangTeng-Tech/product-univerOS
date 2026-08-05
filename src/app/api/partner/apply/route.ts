import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { companyName, contactName, phone, email, tier, region, notes } = body

        if (!contactName || (!phone && !email)) {
            return NextResponse.json({ error: "请提供有效的联系人及联系方式" }, { status: 400 })
        }

        const feishuWebhook = process.env.FEISHU_WEBHOOK_URL
        const resendApiKey = process.env.RESEND_API_KEY
        const adminEmail = process.env.ADMIN_EMAIL || "partner@univeros.cn"

        if (resendApiKey) {
            try {
                await fetch("https://api.resend.com/emails", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${resendApiKey}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        from: "univerOS Partner <onboarding@resend.dev>",
                        to: [adminEmail],
                        subject: `🤝 新代理商加盟申请通知 - ${companyName || contactName}`,
                        html: `
                            <div style="font-family: sans-serif; padding: 20px; line-height: 1.6;">
                                <h2>🤝 新代理商加盟申请通知</h2>
                                <p><strong>🏢 公司/机构名称：</strong>${companyName || "个人/未填"}</p>
                                <p><strong>👤 联系人姓名：</strong>${contactName}</p>
                                <p><strong>📞 手机/微信：</strong>${phone || "未填"}</p>
                                <p><strong>✉️ 电子邮箱：</strong>${email || "未填"}</p>
                                <p><strong>💎 意向合作级别：</strong>${tier || "标准合伙人"}</p>
                                <p><strong>📍 意向覆盖区域：</strong>${region || "全国"}</p>
                                <p><strong>📝 团队简介/备注：</strong>${notes || "无"}</p>
                            </div>
                        `
                    })
                })
            } catch (resendErr) {
                console.error("Resend email notify error:", resendErr)
            }
        }

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
                                            { tag: "text", text: `📝 备注：${notes || "无"}` }
                                        ]
                                    ]
                                }
                            }
                        }
                    })
                })
            } catch (fsErr) {
                console.error("Feishu webhook notify error:", fsErr)
            }
        } else {
            console.log("[Partner Application Received]:", { companyName, contactName, phone, email, tier, region, notes })
        }

        return NextResponse.json({ 
            success: true, 
            message: "加盟申请提交成功！专属渠道经理将在 24 小时内与您联系对接。" 
        })
    } catch (err: any) {
        console.error("Partner apply API error:", err)
        return NextResponse.json({ error: err.message || "提交失败" }, { status: 500 })
    }
}
