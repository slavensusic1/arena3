/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, g as renderSlot, e as addAttribute, h as renderTransition, i as renderHead } from '../astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';
import { g as getLangFromUrl, $ as $$Footer, a as $$Navbar, b as $$ViewTransitions } from './about_ab3ebde2.mjs';
/* empty css                                *//* empty css                           */
const $$Astro$4 = createAstro("https://example.com");
const $$ServicesDetailsHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ServicesDetailsHeader;
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-[500px] bg" data-astro-cid-dzqjdc4t><div class="w-full h-full " data-astro-cid-dzqjdc4t><div class="flex flex-col items-center justify-center z-20 pt-52" data-astro-cid-dzqjdc4t><h1 class="top-0 font-bold text-5xl text-white z-20 " data-astro-cid-dzqjdc4t>Services</h1><ul class=" font-bold text-base text-white  flex justify-center items-center gap-5" data-astro-cid-dzqjdc4t><li class="font-bold text-xl text-white z-20" data-astro-cid-dzqjdc4t><a href="/" data-astro-cid-dzqjdc4t>Home</a></li><li class="font-bold text-xl text-white z-20 relative" data-astro-cid-dzqjdc4t>•</li><li class="font-bold text-xl text-white z-20 whitespace-nowrap" data-astro-cid-dzqjdc4t>Services detail</li></ul></div></div><div class="absolute bg-black/20 h-full w-full z-10" style="transform: translate(-50%, -50%); left: 50%; top: 50%;" data-astro-cid-dzqjdc4t></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/ServicesDetails/ServicesDetailsHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://example.com");
const $$ServicesDetailLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServicesDetailLayout;
  const lang = getLangFromUrl(Astro2.url);
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", "><head>", '<script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js" defer><\/script><meta charset="UTF-8"><meta name="description" content="Astro description"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", '</head><body class=""><main', '></main><div class="z-0">', '</div><div class="-z-20 ">', "</div>", "", "</body></html>"])), addAttribute(lang, "lang"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), addAttribute(Astro2.generator, "content"), title, renderHead(), addAttribute(renderTransition($$result, "h77hqnx3", "initial", ""), "data-astro-transition-scope"), renderComponent($$result, "Navbar", $$Navbar, {}), renderComponent($$result, "ServicesDetailsHeader", $$ServicesDetailsHeader, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/layouts/ServicesDetailLayout.astro", "self");

const servicesDetails = {"src":"/_astro/energy-detail.58ddbc06.jpg","width":6000,"height":4000,"format":"jpg"};

const $$Astro$2 = createAstro("https://example.com");
const $$Energetics$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Energetics$2;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="p-5 lg:flex items-start justify-start gap-10 lg:py-20 md:max-w-3xl lg:max-w-7xl md:pt-20 mx-auto"><div class="space-y-5 lg:w-2/3"><img${addAttribute(servicesDetails.src, "src")} alt="it"><h2 class="text-2xl font-bold">Transforming the Energy Sector with Efficient Energy Use</h2><p>Digital arena is dedicated to revolutionizing the energy sector through strategic consulting and cutting-edge technology solutions. We focus on optimizing energy consumption and fostering innovation to create a sustainable future.</p><h2 class="text-2xl font-bold">Our Commitment to Sustainable Energy Solutions</h2><p>At Green, we provide our clients with the best software and IT solutions tailored for the energy industry. Our services are designed to enhance operational efficiency, reduce environmental impact, and drive positive change in the way energy is produced and consumed.</p><p>With a passion for sustainable practices, Green strives to deliver top-notch software development consulting to address the unique challenges and opportunities in the energy sector. We leverage technology to propel our clients towards a greener and more sustainable future.</p><p>Join us in our mission to transform the energy landscape. Together, let's innovate, optimize, and create a more sustainable world for future generations.</p></div><div class=" bg-gray-200 p-3 mt-4 lg:mt-0 rounded-md lg:w-1/3"><p class="text-left font-bold text-2xl md:text-xl py-5 border-b-2 border-white"><span class="border-b-2 border-green-500   py-[21px]">Our Se</span>rvices</p><div><div><ul class="p-4 space-y-3"><li><a${addAttribute(`/${lang}/services/it`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">IT Solutions</a></li><li><a${addAttribute(`/${lang}/services/energetics`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">Energetics</a></li><li><a${addAttribute(`/${lang}/services/ict`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">ICT</a></li><li><a${addAttribute(`/${lang}/services/isoGdprCisco`, "href")} class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">ISO standards, GDPR compliance and CISO externalization</a></li><!-- <li>
              <a href="#" class="text-white bg-green-500 py-3 rounded-lg p-5 hover:bg-green-600 block">Software Development</a>
            </li> --></ul></div></div></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/ServicesDetails/Energetics.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Energetics$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Energetics$1;
  return renderTemplate`${renderComponent($$result, "ServicesDetailLayout", $$ServicesDetailLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Energetics", $$Energetics$2, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services/energetics.astro", void 0);

const $$file$1 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services/energetics.astro";
const $$url$1 = "/en/services/energetics";

const energetics$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Energetics$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$Energetics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Energetics;
  return renderTemplate`${renderComponent($$result, "ServicesDetailLayout", $$ServicesDetailLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Energetics", $$Energetics$2, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services/energetics.astro", void 0);

const $$file = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services/energetics.astro";
const $$url = "/hr/services/energetics";

const energetics = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Energetics,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ServicesDetailLayout as $, energetics as a, energetics$1 as e };
