import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { companyName, contactName, phone, email, tier, region, notes } = body

        if (!contactName || (!phone && !email)) {
            return NextResponse.json({ error: "请提供有效的联系人及联系方式" }, { status: 400 })
        }

        const feishuWebhook = process.env.FEISHU_WEBHOOK_URL

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
