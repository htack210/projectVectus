import Script from "next/script";

const kitFormHtml = String.raw`<form action="https://app.kit.com/forms/9175880/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="9175880" data-uid="e89090b98b" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;recaptcha&quot;:{&quot;enabled&quot;:false}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800" style="background-color: rgb(255, 255, 255); border-radius: 6px;">
  <div data-style="full">
    <div data-element="column" class="formkit-background" style="background-image: url(&quot;https://embed.filekitcdn.com/e/vpQ2ZcnA2djAENMhGtmzJN/eg9REcwZbEyhBHwBTLQkym&quot;);"></div>
    <div data-element="column" class="formkit-column">
      <div class="formkit-header" data-element="header" style="color: rgb(83, 83, 83); font-size: 24px; font-weight: 700;">
        <h2>Project Vectus Access Request</h2>
      </div>
      <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
      <div data-element="fields" class="seva-fields formkit-fields">
        <div class="formkit-field">
          <input class="formkit-input" aria-label="First Name" name="fields[first_name]" required="" placeholder="First Name" type="text" style="color: rgb(139, 139, 139); border-color: rgb(221, 224, 228); font-weight: 400;">
        </div>
        <div class="formkit-field">
          <input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email" style="color: rgb(139, 139, 139); border-color: rgb(221, 224, 228); font-weight: 400;">
        </div>
        <button data-element="submit" class="formkit-submit formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(246, 166, 171); border-radius: 3px; font-weight: 700;">
          <div class="formkit-spinner"><div></div><div></div><div></div></div>
          <span>Request Access</span>
        </button>
      </div>
      <div class="formkit-disclaimer" data-element="disclaimer" style="color: rgb(139, 139, 139); font-size: 13px;">We respect your privacy. Unsubscribe at anytime.</div>
      <div class="formkit-powered-by-convertkit-container">
        <a href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic" data-element="powered-by" class="formkit-powered-by-convertkit" data-variant="dark" target="_blank" rel="nofollow">Built with Kit</a>
      </div>
    </div>
  </div>
  <style>
    .formkit-form[data-uid="e89090b98b"] { box-shadow: 0 0px 2px rgba(0,0,0,0.15); max-width: 700px; overflow: hidden; }
    .formkit-form[data-uid="e89090b98b"] * { box-sizing: border-box; }
    .formkit-form[data-uid="e89090b98b"] .formkit-column { padding: 20px; position: relative; }
    .formkit-form[data-uid="e89090b98b"] .formkit-background { background-position: center center; background-size: cover; min-height: 200px; }
    .formkit-form[data-uid="e89090b98b"] .formkit-field { margin: 0 0 10px 0; }
    .formkit-form[data-uid="e89090b98b"] .formkit-input { width: 100%; border-left: none; border-right: none; border-top: none; padding: 12px 0; border-bottom: 1px solid #dde0e4; }
    .formkit-form[data-uid="e89090b98b"] .formkit-fields .formkit-submit { margin-top: 15px; width: 100%; border: none; padding: 12px 20px; cursor: pointer; }
    .formkit-form[data-uid="e89090b98b"] .formkit-disclaimer { margin: 0 0 15px 0; }
    .formkit-form[data-uid="e89090b98b"] .formkit-powered-by-convertkit-container { margin-bottom: 0; margin-top: 20px; }
    @media only screen and (min-width: 600px) {
      .formkit-form[data-uid="e89090b98b"] [data-style="full"] { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px,1fr)); }
      .formkit-form[data-uid="e89090b98b"] .formkit-column { padding: 40px; }
    }
  </style>
</form>`;

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-[#0b0a0d] px-6 pb-24 pt-28 text-[#efe9dc]">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="mb-6 font-(--font-display) text-4xl text-[#f7e9cf] sm:text-5xl">
          Project Vectus
        </h1>
        <h2>Authorized Access Request</h2>
        <Script
          src="https://f.convertkit.com/ckjs/ck.5.js"
          strategy="afterInteractive"
        />
        <div dangerouslySetInnerHTML={{ __html: kitFormHtml }} />
        <div className="mt-6 text-sm leading-6 text-white sm:text-base">
          <p>
            <span className="mr-2 inline-block rounded-md bg-white px-2 py-1 font-bold text-red-700">
              WARNING
            </span>
            Ascentive Dynamics has been known to intercept and reroute
            communications.
            <br />
            <strong>
              If our confirmation email does not appear in your inbox, please
              check your junk folder.
            </strong>
          </p>
          <br />

          <p>Once you have received your dossier: Read. Memorize. Destroy.</p>
        </div>
        <Script id="kit-submit-state" strategy="afterInteractive">{`
          (() => {
            const uid = "e89090b98b";
            const lightColor = "rgb(246, 166, 171)";
            const darkColor = "rgb(187, 103, 111)";

            function init() {
              const form = document.querySelector('form.formkit-form[data-uid="' + uid + '"]');
              if (!form) return false;

              const submit = form.querySelector('button[data-element="submit"]');
              const requiredFields = Array.from(
                form.querySelectorAll("input[required], textarea[required], select[required]")
              );

              if (!submit || requiredFields.length === 0) return false;

              const updateButton = () => {
                const ready = requiredFields.every((field) => {
                  const value = (field.value || "").trim();
                  return value.length > 0 && field.checkValidity();
                });
                submit.style.backgroundColor = ready ? darkColor : lightColor;
                submit.style.transition = "background-color 180ms ease";
              };

              requiredFields.forEach((field) => {
                field.addEventListener("input", updateButton);
                field.addEventListener("change", updateButton);
                field.addEventListener("blur", updateButton);
              });

              updateButton();
              return true;
            }

            let attempts = 0;
            const timer = setInterval(() => {
              attempts += 1;
              if (init() || attempts > 20) {
                clearInterval(timer);
              }
            }, 200);
          })();
        `}</Script>
      </div>
    </main>
  );
}
