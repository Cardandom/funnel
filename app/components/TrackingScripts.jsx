import Script from "next/script";
import { GA_MEASUREMENT_ID, GOOGLE_ADS_ID, GTM_ID } from "../lib/tracking";

export default function TrackingScripts() {
  return (
    <>
      {GTM_ID ? (
        <Script
          id="gtm-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      ) : null}

      {GA_MEASUREMENT_ID || GOOGLE_ADS_ID ? (
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${
            GA_MEASUREMENT_ID || GOOGLE_ADS_ID
          }`}
        />
      ) : null}

      {GA_MEASUREMENT_ID || GOOGLE_ADS_ID ? (
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${
                GA_MEASUREMENT_ID
                  ? `gtag('config', '${GA_MEASUREMENT_ID}');`
                  : ""
              }
              ${
                GOOGLE_ADS_ID
                  ? `gtag('config', '${GOOGLE_ADS_ID}');`
                  : ""
              }
            `,
          }}
        />
      ) : null}

      {GTM_ID ? (
        <noscript>
          <iframe
            title="Google Tag Manager"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      ) : null}
    </>
  );
}
