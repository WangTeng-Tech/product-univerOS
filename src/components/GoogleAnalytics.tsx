"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-UNIVEROS2026";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !(window as any).gtag) {
      return;
    }

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    
    // 发送页面浏览事件
    (window as any).gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });

    // 捕获 UTM 获客来源参数
    const utmSource = searchParams?.get("utm_source");
    const utmMedium = searchParams?.get("utm_medium");
    const utmCampaign = searchParams?.get("utm_campaign");

    if (utmSource || utmCampaign) {
      (window as any).gtag("event", "campaign_landing", {
        campaign_source: utmSource || "direct",
        campaign_medium: utmMedium || "organic",
        campaign_name: utmCampaign || "none",
        event_category: "Acquisition",
        event_label: `Source: ${utmSource} | Campaign: ${utmCampaign}`,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
