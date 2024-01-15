/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, g as renderSlot, e as addAttribute, h as renderTransition, i as renderHead } from '../astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';
import { g as getLangFromUrl, u as useTranslations, $ as $$Footer, a as $$Navbar, b as $$ViewTransitions } from './about_ab3ebde2.mjs';
/* empty css                               *//* empty css                           */import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

const $$Astro$4 = createAstro("https://example.com");
const $$PortfolioDetailHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PortfolioDetailHeader;
  let lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-[500px] bg" data-astro-cid-apfjjy74><div class="w-full h-full " data-astro-cid-apfjjy74><div class="flex flex-col items-center justify-center z-20 pt-52" data-astro-cid-apfjjy74><h1 class="top-0 font-bold text-5xl text-white z-20 " data-astro-cid-apfjjy74>${t("nav.project")}</h1><ul class=" font-bold text-base text-white  flex justify-center items-center gap-5" data-astro-cid-apfjjy74><li class="font-bold text-xl text-white z-20" data-astro-cid-apfjjy74><a href="/" data-astro-cid-apfjjy74>${t("nav.home")}</a></li><li class="font-bold text-xl text-white z-20 relative" data-astro-cid-apfjjy74>•</li><li class="font-bold text-xl text-white z-20 whitespace-nowrap" data-astro-cid-apfjjy74>${t("nav.projectDetail")}</li></ul></div></div><div class="absolute bg-black/20 h-full w-full z-10" style="transform: translate(-50%, -50%); left: 50%; top: 50%;" data-astro-cid-apfjjy74></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/PortfolioDetailHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://example.com");
const $$ProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectLayout;
  const lang = getLangFromUrl(Astro2.url);
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", "><head>", '<script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js" defer><\/script><meta charset="UTF-8"><meta name="description" content="Astro description"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", '</head><body class=""><main', '></main><div class="z-0">', '</div><div class="-z-20">', "</div>", "", "</body></html>"])), addAttribute(lang, "lang"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), addAttribute(Astro2.generator, "content"), title, renderHead(), addAttribute(renderTransition($$result, "nntwqy4d", "initial", ""), "data-astro-transition-scope"), renderComponent($$result, "Navbar", $$Navbar, {}), renderComponent($$result, "PortfolioDetailHeader", $$PortfolioDetailHeader, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/layouts/ProjectLayout.astro", "self");

const SwiperReact = ({ pic1, pic2, pic3, pic4, pic5, pic6, slides }) => {
  return /* @__PURE__ */ jsxs(
    Swiper,
    {
      slidesPerView: slides,
      spaceBetween: 20,
      freeMode: true,
      pagination: {
        clickable: true
      },
      modules: [FreeMode, Pagination],
      className: "mySwiper",
      children: [
        /* @__PURE__ */ jsxs(SwiperSlide, { children: [
          " ",
          /* @__PURE__ */ jsx("img", { src: pic1.src }),
          " "
        ] }),
        /* @__PURE__ */ jsxs(SwiperSlide, { children: [
          " ",
          /* @__PURE__ */ jsx("img", { src: pic2.src }),
          " "
        ] }),
        /* @__PURE__ */ jsxs(SwiperSlide, { children: [
          " ",
          /* @__PURE__ */ jsx("img", { src: pic4.src }),
          " "
        ] }),
        /* @__PURE__ */ jsxs(SwiperSlide, { children: [
          " ",
          /* @__PURE__ */ jsx("img", { src: pic5.src }),
          " "
        ] }),
        /* @__PURE__ */ jsxs(SwiperSlide, { children: [
          " ",
          /* @__PURE__ */ jsx("img", { src: pic6.src }),
          " "
        ] })
      ]
    }
  );
};

const eduv = {"src":"/_astro/EDUV-.36ddca30.png","width":1016,"height":591,"format":"png"};

const pic1 = {"src":"/_astro/edusc1.7231b7b2.png","width":460,"height":720,"format":"png"};

const pic2 = {"src":"/_astro/edusc2.43fbc87e.png","width":460,"height":720,"format":"png"};

const pic3 = {"src":"/_astro/edusc3.1211d56c.png","width":460,"height":720,"format":"png"};

const pic4 = {"src":"/_astro/edusc4.aac7abc8.png","width":460,"height":720,"format":"png"};

const pic5 = {"src":"/_astro/edusc5.a43a63c9.png","width":460,"height":720,"format":"png"};

const pic6 = {"src":"/_astro/edusc6.9ac0386a.png","width":460,"height":720,"format":"png"};

const $$Astro$2 = createAstro("https://example.com");
const $$Eduv = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Eduv;
  const link = "https://demo.kaufland.digitalarena.hr/";
  let lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="p-8 space-y-5 max-w-7xl mx-auto"><div><img${addAttribute(eduv.src, "src")} alt="pannel" class="rounded-lg w-full max-h-1/3"></div><h1 class=" text-4xl font-bold pb-5">${t("edu.headline")}</h1><p class="text-gray-600 text-xl">${t("edu.text1")}</p><div class="space-y-5"><h1 class=" text-2xl font-bold ">${t("edu.subheadline")}</h1><p class="text-gray-600 text-xl">${t("edu.text2")}</p><!-- <p class="text-gray-600 text-xl">{text3}</p> --><div class="flex gap-10 flex-col justify-center md:flex-row items-center md:justify-between"><div><h3 class="font-bold text-2xl">${t("Category")}:</h3><span class="text-lg">${t("category.app")}</span></div><div><div class="flex flex-col"><a${addAttribute(link, "href")} target="_blank"><button class="bg-green-500 text-white font-bold py-4 px-8 text-lg rounded-md">${t("live.project")}</button></a></div></div></div><div class="py-10 px-2">${renderComponent($$result2, "SwiperReact", SwiperReact, { "slides": 2, "pic1": pic1, "pic2": pic2, "pic3": pic3, "pic4": pic4, "pic5": pic5, "pic6": pic6, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/SwiperReact.jsx", "client:component-export": "default" })}</div></div></div>` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/Eduv.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Eduvizija$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Eduvizija$1;
  return renderTemplate`${renderComponent($$result, "Eduv", $$Eduv, {})}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/portfolio/eduvizija.astro", void 0);

const $$file$1 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/portfolio/eduvizija.astro";
const $$url$1 = "/en/portfolio/eduvizija";

const eduvizija$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Eduvizija$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$Eduvizija = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Eduvizija;
  return renderTemplate`${renderComponent($$result, "Eduv", $$Eduv, {})}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/portfolio/eduvizija.astro", void 0);

const $$file = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/portfolio/eduvizija.astro";
const $$url = "/hr/portfolio/eduvizija";

const eduvizija = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Eduvizija,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ProjectLayout as $, SwiperReact as S, eduvizija as a, eduvizija$1 as e };
