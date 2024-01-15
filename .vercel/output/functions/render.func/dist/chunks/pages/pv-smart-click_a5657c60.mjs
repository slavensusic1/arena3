/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';
import { S as SwiperReact, $ as $$ProjectLayout } from './eduvizija_e3c036cb.mjs';
import { g as getLangFromUrl, u as useTranslations } from './about_ab3ebde2.mjs';

const solar = {"src":"/_astro/solar.a093423e.jpg","width":2366,"height":1217,"format":"jpg","orientation":1};

const pic1 = {"src":"/_astro/pvsc1.55629255.png","width":460,"height":720,"format":"png"};

const pic2 = {"src":"/_astro/pvsc2.c4059f15.png","width":460,"height":720,"format":"png"};

const pic3 = {"src":"/_astro/pvsc3.44d4f349.png","width":460,"height":720,"format":"png"};

const pic4 = {"src":"/_astro/pvsc4.e2f97519.png","width":460,"height":720,"format":"png"};

const pic5 = {"src":"/_astro/pvsc5.e2660302.png","width":460,"height":720,"format":"png"};

const pic6 = {"src":"/_astro/pvsc6.46139b3e.png","width":460,"height":720,"format":"png"};

const $$Astro$2 = createAstro("https://example.com");
const $$Psc = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Psc;
  let lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const link = "https://pvsmartclick.com/home";
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="p-8 space-y-5 max-w-7xl mx-auto"><div><img${addAttribute(solar.src, "src")} alt="pannel" class="rounded-lg w-full max-h-1/3"></div><div class="space-y-5"><h1 class=" text-2xl font-bold ">${t("pvsc.headline")}</h1><p class="text-gray-600 text-xl">${t("pvsc.text1")}</p><h1 class=" text-2xl font-bold ">${t("pvsc.subheadline")}</h1><p class="text-gray-600 text-xl">${t("pvsc.text2")}</p><p class="text-gray-600 text-xl">${t("pvsc.text3")}</p><div class="flex gap-10 flex-col justify-center md:flex-row items-center md:justify-between"><div><h3 class="font-bold text-2xl">${t("Category")}:</h3><span class="text-lg">${t("category.app")} , ${t("category.ener")}</span></div><div><div class="flex flex-col"><a${addAttribute(link, "href")} target="_blank"><button class="bg-green-500 text-white font-bold py-4 px-8 text-lg rounded-md">${t("live.project")}</button></a></div></div></div></div></div><div class="py-10 px-2">${renderComponent($$result2, "SwiperReact", SwiperReact, { "slides": 3, "pic1": pic1, "pic2": pic2, "pic3": pic3, "pic4": pic4, "pic5": pic5, "pic6": pic6, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/SwiperReact.jsx", "client:component-export": "default" })}</div>` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/Psc.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$PvSmartClick$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PvSmartClick$1;
  return renderTemplate`${renderComponent($$result, "Psc", $$Psc, {})}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/portfolio/pv-smart-click.astro", void 0);

const $$file$1 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/portfolio/pv-smart-click.astro";
const $$url$1 = "/en/portfolio/pv-smart-click";

const pvSmartClick$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PvSmartClick$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$PvSmartClick = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PvSmartClick;
  return renderTemplate`${renderComponent($$result, "Psc", $$Psc, {})}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/portfolio/pv-smart-click.astro", void 0);

const $$file = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/portfolio/pv-smart-click.astro";
const $$url = "/hr/portfolio/pv-smart-click";

const pvSmartClick = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PvSmartClick,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { pvSmartClick as a, pvSmartClick$1 as p };
