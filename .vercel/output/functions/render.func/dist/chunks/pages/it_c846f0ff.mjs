/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$ServicesDetailLayout } from './energetics_e6fccde8.mjs';
import { g as getLangFromUrl } from './about_ab3ebde2.mjs';

const servicesDetails = {"src":"/_astro/services-details.311d7af1.jpg","width":800,"height":450,"format":"jpg"};

const $$Astro$2 = createAstro("https://example.com");
const $$It$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$It$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="p-5 lg:flex items-start justify-start gap-10 lg:py-20 md:max-w-3xl lg:max-w-7xl md:pt-20 mx-auto"><div class="space-y-5 lg:w-2/3"><img${addAttribute(servicesDetails.src, "src")} alt="it"><h2 class="text-2xl font-bold">Unleashing Innovation for Technological Excellence</h2><p>Embark on a journey of continuous improvement as we seamlessly integrate groundbreaking technologies into your operations. Our commitment to staying on the leading edge ensures that your experience with us is not just a service but a transformative partnership.</p><h2 class="text-2xl font-bold">Pioneering the Future of Business</h2><p>Embracing innovation at its core, we empower you to navigate the ever-evolving landscape of possibilities, making your business a beacon of progress in the competitive market. Our dedication to pushing boundaries ensures that you are not merely keeping up with industry trends but actively shaping them.</p><p>Join us in revolutionizing your approach to business with our cutting-edge solutions. As your strategic partner, we are committed to propelling your organization into a future where technology and processes converge for unparalleled success.</p></div><div class=" bg-gray-200 p-3 mt-4 lg:mt-0 rounded-md lg:w-1/3"><p class="text-left font-bold text-2xl md:text-xl py-5 border-b-2 border-white"><span class="border-b-2 border-green-500   py-[21px]">Our Se</span>rvices</p><div><ul class="p-4 space-y-3"><li><a${addAttribute(`/${lang}/services/it`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">IT Solutions</a></li><li><a${addAttribute(`/${lang}/services/energetics`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">Energetics</a></li><li><a${addAttribute(`/${lang}/services/ict`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">ICT</a></li><li><a${addAttribute(`/${lang}/services/isoGdprCisco`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">ISO standards, GDPR compliance and CISO externalization</a></li><!-- <li>
              <a href="#" class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">Software Development</a>
            </li> --></ul></div></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/ServicesDetails/It.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$It$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$It$1;
  return renderTemplate`${renderComponent($$result, "ServicesDetailLayout", $$ServicesDetailLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "It", $$It$2, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services/it.astro", void 0);

const $$file$1 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services/it.astro";
const $$url$1 = "/en/services/it";

const it$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$It$1,
   file: $$file$1,
   url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$It = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$It;
  return renderTemplate`${renderComponent($$result, "ServicesDetailLayout", $$ServicesDetailLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "It", $$It$2, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services/it.astro", void 0);

const $$file = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services/it.astro";
const $$url = "/hr/services/it";

const it = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$It,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { it as a, it$1 as i };
