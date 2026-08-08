import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const eventType = body.type;

    // 处理 Stripe checkout.session.completed 充值事件
    if (eventType === "checkout.session.completed") {
      const session = body.data?.object || {};
      const tenantId = session.client_reference_id || session.metadata?.tenant_id || "default";
      const amountTotal = session.amount_total || 0;
      const points = Math.floor(amountTotal / 100) * 100; // 1 USD = 100 Points

      // 调用 Brain 后端完成积分划拨入账
      const brainUrl = process.env.BRAIN_HTTP_URL || "http://127.0.0.1:8000";
      await fetch(`${brainUrl}/api/v1/finance/recharge-callback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tenant_id: tenantId,
          session_id: session.id,
          amount_cents: amountTotal,
          points_added: points,
        }),
      }).catch((err) => console.error("Failed to notify brain recharge-callback:", err));

      return NextResponse.json({ received: true, status: "CREDITED", tenant_id: tenantId, points });
    }

    return NextResponse.json({ received: true, event: eventType });
  } catch (err: any) {
    console.error("Stripe Webhook Error:", err);
    return NextResponse.json({ error: err.message || "Webhook processing failed" }, { status: 400 });
  }
}
