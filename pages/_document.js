import { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCXRF7J');`,
          }}
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GT-KFNPS8T"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'GT-KFNPS8T');`,
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
      (function(){
        var listen = false;
        function listen_to_form_submit(){
          if(!listen){
            var timer = setInterval(function(){
              if(document.querySelector('.form-submit-success')){
                gtag('set', 'user_data', {
                  "email": document.querySelector('.ec-form-email') ? document.querySelector('.ec-form-email').innerText.trim() : ''
                });
                gtag('event', 'conversion', {'send_to': 'AW-863193958/GRKUCPTnyZIYEOaWzZsD'});
                clearInterval(timer);
              }
            }, 1000);
          }
        }
        document.addEventListener('click', function(e){
          if(e.target.closest('button[type="submit"]') && window.location.pathname.includes('/form')){
            listen_to_form_submit();
          }
        });
      })();
      `,
          }}
        ></script>
      </body>
    </Html>
  );
}
