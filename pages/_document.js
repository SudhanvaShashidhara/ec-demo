import { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(){
            var gTag = document.createElement('script');
            gTag.async=1;
            gTag.src="https://www.googletagmanager.com/gtag/js?id=AW-10852928527";
            firstScript=document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(gTag,firstScript);
            window.dataLayer = window.dataLayer || [];
          })();
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10852928527');
          `,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCXRF7J');
`,
          }}
        ></script>

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCXRF7J"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.addEventListener('load', function(){
            var timer = setInterval(function(){
              if(document.querySelector('.form-submit-success')){
                gtag('event', 'conversion', {'send_to': 'AW-10852928527/fS2-CIuT38cYEI-Yirco'});
                clearInterval(timer);
              }
            }, 1000);
          });
          `,
          }}
        ></script>
      </body>
    </Html>
  );
}
