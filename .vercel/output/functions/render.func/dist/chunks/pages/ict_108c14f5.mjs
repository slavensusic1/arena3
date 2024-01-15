/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$ServicesDetailLayout } from './energetics_e6fccde8.mjs';
import { g as getLangFromUrl } from './about_ab3ebde2.mjs';

const servicesDetails = {"src":"/_astro/ict-photo.c134f24c.jpg","width":6016,"height":4016,"format":"jpg"};

const $$Astro$2 = createAstro("https://example.com");
const $$Ict$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Ict$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="p-5 lg:flex items-start justify-start gap-10 lg:py-20 md:max-w-3xl lg:max-w-7xl md:pt-20 mx-auto"><div class="space-y-5 lg:w-2/3"><img${addAttribute(servicesDetails.src, "src")} alt="it"><h2 class="text-2xl font-bold">Empowering Businesses with Robust ICT Infrastructure</h2><p>At digital arena, we specialize in the construction and maintenance of state-of-the-art ICT infrastructure. Our dedicated team is committed to building and sustaining all types of infrastructure necessary for seamless data services.</p><h2 class="text-2xl font-bold">Comprehensive Solutions for Data Services Infrastructure</h2><p>digital arena excels in providing end-to-end solutions for ICT infrastructure, ensuring that businesses have a solid foundation for their data services. From design and construction to ongoing maintenance, we prioritize reliability, scalability, and efficiency in every project.</p><p>Our expertise extends to the construction of robust networks, data centers, and other critical components of ICT infrastructure. We understand the importance of a well-maintained and secure environment for the smooth operation of your information and communication technologies.</p><p>Partner with digital arenas to elevate your ICT infrastructure, improve operational efficiency, and stay at the forefront of technological advancements. Let us contribute to the success of your business through cutting-edge ICT solutions.</p></div><div class=" bg-gray-200 p-3 mt-4 lg:mt-0 rounded-md lg:w-1/3"><p class="text-left font-bold text-2xl md:text-xl py-5 border-b-2 border-white"><span class="border-b-2 border-green-500   py-[21px]">Our Se</span>rvices</p><div><div><ul class="p-4 space-y-3"><li><a${addAttribute(`/${lang}/services/it`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">IT Solutions</a></li><li><a${addAttribute(`/${lang}/services/energetics`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">Energetics</a></li><li><a${addAttribute(`/${lang}/services/ict`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">ICT</a></li><li><a${addAttribute(`/${lang}/services/isoGdprCisco`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">ISO standards, GDPR compliance and CISO externalization</a></li><!-- <li>
              <a href="#" class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">Software Development</a>
            </li> --></ul></div></div></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/ServicesDetails/Ict.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Ict$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Ict$1;
  return renderTemplate`${renderComponent($$result, "ServicesDetailLayout", $$ServicesDetailLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Ict", $$Ict$2, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services/ict.astro", void 0);

const $$file$1 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services/ict.astro";
const $$url$1 = "/en/services/ict";

const ict$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ict$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$Ict = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ict;
  return renderTemplate`${renderComponent($$result, "ServicesDetailLayout", $$ServicesDetailLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Ict", $$Ict$2, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services/ict.astro", void 0);

const $$file = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services/ict.astro";
const $$url = "/hr/services/ict";

const ict = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ict,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ict as a, ict$1 as i };
