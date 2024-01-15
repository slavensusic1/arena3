/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$ServicesDetailLayout } from './energetics_e6fccde8.mjs';
import { g as getLangFromUrl } from './about_ab3ebde2.mjs';

const servicesDetails = {"src":"/_astro/it-security.1c677531.jpg","width":5184,"height":2920,"format":"jpg"};

const $$Astro$2 = createAstro("https://example.com");
const $$ISOGDPRCISCO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ISOGDPRCISCO;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="p-5 lg:flex items-start justify-start gap-10 lg:py-20 md:max-w-3xl lg:max-w-7xl md:pt-20 mx-auto"><div class="space-y-5 lg:w-2/3"><img${addAttribute(servicesDetails.src, "src")} alt="it"><h2 class="text-2xl font-bold">Ensuring Compliance and Security in the Digital Era</h2><p>At digital arena, we specialize in providing comprehensive information system audit services, ensuring your systems adhere to the highest international standards, including ISO 27001 and ISO 22301.</p><h2 class="text-2xl font-bold">Protecting Personal Data with GDPR Compliance</h2><p>Our commitment extends to GDPR compliance, safeguarding the personal data of all stakeholders in your business, including employees, customers, partners, and suppliers. We prioritize the security and privacy of sensitive information to meet regulatory requirements.</p><h2 class="text-2xl font-bold">Outsourcing CISO for Robust Security Measures</h2><p>Digital arena offers CISO outsourcing services to strengthen your cybersecurity posture. Our comprehensive approach includes risk assessment, business impact analysis, and the development of strategies tailored to your organization. Additionally, we provide IT security education services to empower your team with the knowledge needed to mitigate potential threats.</p><p>Partner with digital arena to harmonize your systems according to industry-leading standards, achieve GDPR compliance, and enhance your cybersecurity resilience through CISO outsourcing. Let us navigate the complexities of information security, so you can focus on the core aspects of your business.</p></div><div class=" bg-gray-200 p-3 mt-4 lg:mt-0 rounded-md lg:w-1/3"><p class="text-left font-bold text-2xl md:text-xl py-5 border-b-2 border-white"><span class="border-b-2 border-green-500   py-[21px]">Our Se</span>rvices</p><div><div><ul class="p-4 space-y-3"><li><a${addAttribute(`/${lang}/services/it`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">IT Solutions</a></li><li><a${addAttribute(`/${lang}/services/energetics`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">Energetics</a></li><li><a${addAttribute(`/${lang}/services/ict`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">ICT</a></li><li><a${addAttribute(`/${lang}/services/isoGdprCisco`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">ISO standards, GDPR compliance and CISO externalization</a></li><!-- <li>
              <a href="#" class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">Software Development</a>
            </li> --></ul></div></div></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/ServicesDetails/ISOGDPRCISCO.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$IsoGdprCisco$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IsoGdprCisco$1;
  return renderTemplate`${renderComponent($$result, "ServicesDetailLayout", $$ServicesDetailLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ISOGDPRCISCO", $$ISOGDPRCISCO, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services/isoGdprCisco.astro", void 0);

const $$file$1 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services/isoGdprCisco.astro";
const $$url$1 = "/en/services/isoGdprCisco";

const isoGdprCisco$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IsoGdprCisco$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$IsoGdprCisco = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IsoGdprCisco;
  return renderTemplate`${renderComponent($$result, "ServicesDetailLayout", $$ServicesDetailLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ISOGDPRCISCO", $$ISOGDPRCISCO, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services/isoGdprCisco.astro", void 0);

const $$file = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services/isoGdprCisco.astro";
const $$url = "/hr/services/isoGdprCisco";

const isoGdprCisco = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IsoGdprCisco,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { isoGdprCisco as a, isoGdprCisco$1 as i };
