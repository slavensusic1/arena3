/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$ProjectLayout, S as SwiperReact } from './eduvizija_e3c036cb.mjs';
import { g as getLangFromUrl, u as useTranslations } from './about_ab3ebde2.mjs';

const kmarket = {"src":"/_astro/KAUFLAND-market.19a21168.png","width":1900,"height":810,"format":"png"};

const pic1 = {"src":"/_astro/kmsc6.540de721.png","width":460,"height":720,"format":"png"};

const pic2 = {"src":"/_astro/kmsc2.21a512aa.png","width":460,"height":720,"format":"png"};

const pic3 = {"src":"/_astro/kmsc3.53046b0f.png","width":460,"height":720,"format":"png"};

const pic4 = {"src":"/_astro/kmsc4.691df983.png","width":460,"height":720,"format":"png"};

const pic5 = {"src":"/_astro/kmsc1.5be197fc.png","width":460,"height":720,"format":"png"};

const pic6 = {"src":"/_astro/kmsc7.2748d995.png","width":460,"height":720,"format":"png"};

const $$Astro$2 = createAstro("https://example.com");
const $$Kmt = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Kmt;
  let lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const link = "https://demo.kaufland.digitalarena.hr/";
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="p-8 space-y-5 max-w-7xl mx-auto"><div><img${addAttribute(kmarket.src, "src")} alt="pannel" class="rounded-lg w-full"></div><div class="space-y-5"><h1 class=" text-4xl font-bold pb-5">${t("kauflandTitle")}</h1><p class="text-gray-600 text-xl">${t("kauflandText1")}</p><p class="text-gray-500 text-xl">${t("kauflandText2")}</p><div class="flex flex-col justify-center md:flex-row md:items-center md:justify-between gap-10"><div><h3 class="font-bold text-2xl">${t("Category")}:</h3><span class="text-lg">${t("category.app")}</span></div><div><a${addAttribute(link, "href")} target="_blank"><button class="bg-green-500 text-white font-bold py-4 px-8 text-lg rounded-md">${t("live.project")}</button></a></div></div></div></div>` })}<div class="py-10 px-2">${renderComponent($$result, "SwiperReact", SwiperReact, { "slides": 3, "pic1": pic1, "pic2": pic2, "pic3": pic3, "pic4": pic4, "pic5": pic5, "pic6": pic6, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/SwiperReact.jsx", "client:component-export": "default" })}</div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/Kmt.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$KauflandMarket$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$KauflandMarket$1;
  return renderTemplate`${renderComponent($$result, "Kmt", $$Kmt, {})}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/portfolio/kaufland-marke(t).astro", void 0);

const $$file$1 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/portfolio/kaufland-marke(t).astro";
const $$url$1 = "/en/portfolio/kaufland-marke(t)";

const kauflandMarke_t_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$KauflandMarket$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$KauflandMarket = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$KauflandMarket;
  return renderTemplate`${renderComponent($$result, "Kmt", $$Kmt, {})}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/portfolio/kaufland-marke(t).astro", void 0);

const $$file = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/portfolio/kaufland-marke(t).astro";
const $$url = "/hr/portfolio/kaufland-marke(t)";

const kauflandMarke_t_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$KauflandMarket,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { kauflandMarke_t_ as a, kauflandMarke_t_$1 as k };
