/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, g as renderSlot, e as addAttribute, h as renderTransition, i as renderHead } from '../astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Services$2, a as $$WhyChooseUS, b as $$WhyTrustUs } from './index_5348fa6f.mjs';
import { g as getLangFromUrl, u as useTranslations, $ as $$Footer, a as $$Navbar, b as $$ViewTransitions, f as $$WorkWithUs } from './about_ab3ebde2.mjs';
/* empty css                              *//* empty css                           */
const $$Astro$3 = createAstro("https://example.com");
const $$ServicesHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServicesHeader;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-[500px] bg" data-astro-cid-eonlwxmq><div class="w-full h-full " data-astro-cid-eonlwxmq><div class="flex flex-col items-center justify-center z-20 pt-52" data-astro-cid-eonlwxmq><h1 class="top-0 font-bold text-5xl text-white z-20 " data-astro-cid-eonlwxmq>${t("nav.services")}</h1><ul class=" font-bold text-base text-white  flex justify-center items-center gap-5 pt-2" data-astro-cid-eonlwxmq><li class="font-bold text-xl text-white z-20" data-astro-cid-eonlwxmq><a href="/" data-astro-cid-eonlwxmq>${t("nav.home")}</a></li><li class="font-bold text-xl text-white z-20 relative" data-astro-cid-eonlwxmq>•</li><li class="font-bold text-xl text-white z-20 whitespace-nowrap" data-astro-cid-eonlwxmq>${t("nav.services")}</li></ul></div></div><div class="absolute bg-black/20 h-full w-full z-10" style="transform: translate(-50%, -50%); left: 50%; top: 50%;" data-astro-cid-eonlwxmq></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/services/ServicesHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://example.com");
const $$ServicesLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServicesLayout;
  const lang = getLangFromUrl(Astro2.url);
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", "><head>", '<script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js" defer><\/script><meta charset="UTF-8"><meta name="description" content="Astro description"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", '</head><body class=""><main', '></main><div class="z-0">', '</div><div class="-z-20">', "</div>", "", "</body></html>"])), addAttribute(lang, "lang"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), addAttribute(Astro2.generator, "content"), title, renderHead(), addAttribute(renderTransition($$result, "zeofz55e", "initial", ""), "data-astro-transition-scope"), renderComponent($$result, "Navbar", $$Navbar, {}), renderComponent($$result, "ServicesHeader", $$ServicesHeader, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/layouts/ServicesLayout.astro", "self");

const $$Astro$1 = createAstro("https://example.com");
const $$Services$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Services$1;
  return renderTemplate`${renderComponent($$result, "ServicesLayout", $$ServicesLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Services", $$Services$2, {})}${renderComponent($$result2, "WorkWithUs", $$WorkWithUs, {})}${renderComponent($$result2, "WhyChooseUS", $$WhyChooseUS, {})}${renderComponent($$result2, "WhyTrustUs", $$WhyTrustUs, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services.astro", void 0);

const $$file$1 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services.astro";
const $$url$1 = "/en/services";

const services$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "ServicesLayout", $$ServicesLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Services", $$Services$2, {})}${renderComponent($$result2, "WorkWithUs", $$WorkWithUs, {})}${renderComponent($$result2, "WhyChooseUS", $$WhyChooseUS, {})}${renderComponent($$result2, "WhyTrustUs", $$WhyTrustUs, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services.astro", void 0);

const $$file = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services.astro";
const $$url = "/hr/services";

const services = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { services as a, services$1 as s };
