/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, g as renderSlot, e as addAttribute, h as renderTransition, i as renderHead, m as maybeRenderHead } from '../astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';
import { g as getLangFromUrl, $ as $$Footer, a as $$Navbar, b as $$ViewTransitions, u as useTranslations, c as $$Contact, d as $$FrontAbout, e as $$NumbersBanner, f as $$WorkWithUs, h as $$Partners } from './about_ab3ebde2.mjs';
/* empty css                           *//* empty css                           *//* empty css                           */
const $$Astro$7 = createAstro("https://example.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`<meta http-equiv="refresh" content="0;url=/en/">`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/index.astro", void 0);

const $$file$2 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://example.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const lang = getLangFromUrl(Astro2.url);
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", "><head>", '<script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js" defer><\/script><meta charset="UTF-8"><meta name="description" content="Astro description"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", '</head><body class=" "><main', "></main>", "", "", "</body></html>"])), addAttribute(lang, "lang"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), addAttribute(Astro2.generator, "content"), title, renderHead(), addAttribute(renderTransition($$result, "2ufxhwun", "initial", ""), "data-astro-transition-scope"), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/layouts/Layout.astro", "self");

const hero = {"src":"/_astro/home-font.f345c269.png","width":600,"height":593,"format":"png"};

const $$Astro$5 = createAstro("https://example.com");
const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeroSection;
  let lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<section class="mr-auto text-3xl font-bold space-y-5  pt-20 bg-gradient-to-b from-green-800 via-green-500 to-green-100 z-50 "><div class="max-w-3xl p-5 lg:max-w-7xl mx-auto flex flex-col lg:flex-row space-y-8 items-center"><div class="flex flex-col lg:items-start space-y-10 lg:w-1/2"><h1 class="text-center text-4xl md:text-5xl  font-bold text-white  lg:text-left">${t("hero.headline")}<span class="whitespace-nowrap">${t("hero.digiralArena")}</span></h1><p class="text-base text-center text-white md:text-lg lg:text-left">${t("hero.sub")}</p><div class="flex items-center justify-center gap-3"><button class="bg-white whitespace-nowrap text-green-600 hover:bg-gray-200 duration-300 text-lg px-6 py-2 rounded-md md:text-xl md:px-8 md:py-3 "><a${addAttribute(`/${lang}/services`, "href")}>${t("button.services")}<a></a></a></button><button></button>${renderComponent($$result, "Contact", $$Contact, {})}</div></div><div><img${addAttribute(hero.src, "src")} alt="" class="lg:w-full"></div></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFF" fill-opacity="1" d="M0,0L30,32C60,64,120,128,180,165.3C240,203,300,213,360,202.7C420,192,480,160,540,144C600,128,660,128,720,160C780,192,840,256,900,266.7C960,277,1020,235,1080,202.7C1140,171,1200,149,1260,149.3C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg></section>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/frontpage/HeroSection.astro", void 0);

const idea = {"src":"/_astro/idea.b903b417.svg","width":256,"height":256,"format":"svg"};

const solar = {"src":"/_astro/solar.6adccbd3.svg","width":111.34,"height":122.88,"format":"svg"};

const code = {"src":"/_astro/code.4300f119.svg","width":256,"height":256,"format":"svg"};

const iso = {"src":"/_astro/iso.80a51796.svg","width":256,"height":256,"format":"svg"};

const gdpr = {"src":"/_astro/gdpr.fce4022c.svg","width":256,"height":256,"format":"svg"};

const ciso = {"src":"/_astro/ciso.0f98ada8.svg","width":256,"height":256,"format":"svg"};

const $$Astro$4 = createAstro("https://example.com");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Services;
  let lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const services = [
    {
      category: t("ser.it"),
      description: t("ser.it-text"),
      readMoreLink: t("read-more"),
      svg: idea.src,
      link: "services/it"
    },
    {
      category: t("ser.ict"),
      description: t("ser.ict-text"),
      readMoreLink: t("read-more"),
      svg: code.src,
      link: `/${lang}/services/ict`
    },
    {
      category: t("ser.Energetics"),
      description: t("ser.Energetics-text"),
      readMoreLink: t("read-more"),
      svg: solar.src,
      link: `/${lang}/services/energetics`
    },
    {
      category: "GDPR",
      description: t("ser.gdpr-text"),
      readMoreLink: t("read-more"),
      svg: gdpr.src,
      link: `/${lang}/services/isoGdprCisco`
    },
    {
      category: "CISO",
      description: t("ser.ciso-text"),
      readMoreLink: "read-more",
      svg: ciso.src,
      link: `/${lang}/services/isoGdprCisco`
    },
    {
      category: "ISO",
      description: t("ser.iso-text"),
      readMoreLink: t("read-more"),
      svg: iso.src,
      link: `/${lang}/services/isoGdprCisco`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-white pt-20"><p class="text-green-500 text-center font-bold text-lg md:text-2xl">${t("ser.sub")}</p><h2 class="text-center font-bold text-3xl md:text-4xl">${t("ser.headline")}</h2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 py-10 gap-y-10 max-w-7xl mx-auto px-5 xl:px-5">${services.map((service) => {
    return renderTemplate`<div class="shadow-xl maw-w-sm mx-auto p-5 group space-y-10 hover:-translate-y-2 duration-300"><img${addAttribute(service.svg, "src")} class="w-1/6 group-hover:transform group-hover:scale-x-[-1] transition duration-500"><h4 class="text-2xl font-bold">${service.category}</h4><p class="text-lg ">${service.description}</p><p class="text-green-500 font-bold flex gap-5 items-center"><span class="hover:translate-x-2 duration-300 text-2xl font-bold">&rarr;</span><a${addAttribute(service.link, "href")}>${t("read-more")}</a></p></div>`;
  })}</div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/frontpage/Services.astro", void 0);

const whychooseus = {"src":"/_astro/whychooseus.3b2f37b0.svg","width":850.53801,"height":740.82953,"format":"svg"};

const $$Astro$3 = createAstro("https://example.com");
const $$WhyChooseUS = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WhyChooseUS;
  let lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="pt-20 py-20 lg:px-20 px-5  " data-astro-cid-bvzfv3m5><div class="w-full grid grid-cols-1 lg:grid-cols-2 md:gap-x-20 justify-items-center" data-astro-cid-bvzfv3m5><div class="w-full flex justify-center items-center" data-astro-cid-bvzfv3m5><img${addAttribute(whychooseus.src, "src")} alt="about image w-full" class="w-2/3" data-astro-cid-bvzfv3m5></div><div data-astro-cid-bvzfv3m5><div data-astro-cid-bvzfv3m5><p class="text-green-500 text-left font-bold text-lg md:text-2xl" data-astro-cid-bvzfv3m5>${t("why.headline")}</p><h2 class="text-left font-bold text-4xl py-5 md:text-4xl leading-[50px]" data-astro-cid-bvzfv3m5>${t("why.subheadline")}</h2><p class="text-xl" data-astro-cid-bvzfv3m5>${t("why.parag")}</p></div><nav class="max-w-7xl mx-auto pt-5 duration-500" data-astro-cid-bvzfv3m5><ul class="gap-5 grid grid-cols-1 md:grid-cols-2 " data-astro-cid-bvzfv3m5><li class="roundex-xl bg-white" data-astro-cid-bvzfv3m5><a class="text-lg font-bold" data-astro-cid-bvzfv3m5>Angular</a></li><li class="roundex-xl" data-astro-cid-bvzfv3m5><a class="roundex-xl text-lg font-bold" data-astro-cid-bvzfv3m5>MySql</a></li><li class="roundex-xl" data-astro-cid-bvzfv3m5><a class="roundex-xl text-lg font-bold" data-astro-cid-bvzfv3m5>Python</a></li><li class="roundex-xl" data-astro-cid-bvzfv3m5><a class="roundex-xl text-lg font-bold" data-astro-cid-bvzfv3m5>Amazon Web Services</a></li><li class="roundex-xl" data-astro-cid-bvzfv3m5><a class="roundex-xl text-lg font-bold" data-astro-cid-bvzfv3m5>Vue</a></li><li class="roundex-xl" data-astro-cid-bvzfv3m5><a class="roundex-xl text-lg font-bold" data-astro-cid-bvzfv3m5>PostgreSQL</a></li><li class="roundex-xl" data-astro-cid-bvzfv3m5><a class="roundex-xl text-lg font-bold" data-astro-cid-bvzfv3m5>Java</a></li><li class="roundex-xl" data-astro-cid-bvzfv3m5><a class="roundex-xl text-lg font-bold" data-astro-cid-bvzfv3m5>Oracle</a></li></ul></nav></div></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/frontpage/WhyChooseUS.astro", void 0);

const trust = {"src":"/_astro/cert.6ca9086b.svg","width":575.45508,"height":668.31863,"format":"svg"};

const $$Astro$2 = createAstro("https://example.com");
const $$WhyTrustUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WhyTrustUs;
  let lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="pt-20 py-20 lg:px-20 px-5  " data-astro-cid-qlsnqgny><div class="w-full grid grid-cols-1 lg:grid-cols-2 md:gap-x-20 justify-items-center" data-astro-cid-qlsnqgny><div data-astro-cid-qlsnqgny><div data-astro-cid-qlsnqgny><p class="text-green-500 text-left font-bold text-lg md:text-2xl" data-astro-cid-qlsnqgny>${t("why.trustus.headline")}</p><h2 class="text-left font-bold text-4xl md:text-4xl leading-[50px]" data-astro-cid-qlsnqgny>${t("why.trustus.subheadline")}</h2><p class="text-lg py-10" data-astro-cid-qlsnqgny>${t("why.trustus.parag")}</p></div><nav class="max-w-7xl mx-auto" data-astro-cid-qlsnqgny><ul class="gap-5 grid grid-cols-1 md:grid-cols-2" data-astro-cid-qlsnqgny><li class="rounded-xl" data-astro-cid-qlsnqgny><a class=" text-lg font-bold" data-astro-cid-qlsnqgny>IBM BPM Analyst</a></li><li class="rounded-xl" data-astro-cid-qlsnqgny><a class="rounded-xl text-lg font-bold" data-astro-cid-qlsnqgny>IBM Manager Express</a></li><li class="rounded-xl" data-astro-cid-qlsnqgny><a class="rounded-xl text-lg font-bold" data-astro-cid-qlsnqgny>Oracle Certified Associate</a></li><li class="rounded-xl" data-astro-cid-qlsnqgny><a class="rounded-xl text-lg font-bold" data-astro-cid-qlsnqgny>Oracle Java SE 8</a></li><li class="rounded-xl" data-astro-cid-qlsnqgny><a class="rounded-md text-lg font-bold" data-astro-cid-qlsnqgny>IBM Application Developer</a></li><li class="rounded-xl" data-astro-cid-qlsnqgny><a class="rounded-md text-lg font-bold" data-astro-cid-qlsnqgny>MuleSoft Developer</a></li></ul></nav></div><div class="w-full flex justify-center items-center" data-astro-cid-qlsnqgny><img${addAttribute(trust.src, "src")} alt="about image" class="w-1/2" data-astro-cid-qlsnqgny></div></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/frontpage/WhyTrustUs.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "digital arena" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$HeroSection, {})}${renderComponent($$result2, "Services", $$Services, {})}${renderComponent($$result2, "FrontAbout", $$FrontAbout, {})}${renderComponent($$result2, "WhyChooseUS", $$WhyChooseUS, {})}${renderComponent($$result2, "WhyTrustUs", $$WhyTrustUs, {})}${maybeRenderHead()}<div class="py-20">${renderComponent($$result2, "NumbersBanner", $$NumbersBanner, {})}</div>${renderComponent($$result2, "WorkWithUs", $$WorkWithUs, {})}${renderComponent($$result2, "Partners", $$Partners, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/index.astro", void 0);

const $$file$1 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/index.astro";
const $$url$1 = "/en";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "digital arena" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$HeroSection, {})}${renderComponent($$result2, "Services", $$Services, {})}${renderComponent($$result2, "FrontAbout", $$FrontAbout, {})}${renderComponent($$result2, "WhyChooseUS", $$WhyChooseUS, {})}${renderComponent($$result2, "WhyTrustUs", $$WhyTrustUs, {})}${maybeRenderHead()}<div class="py-20">${renderComponent($$result2, "NumbersBanner", $$NumbersBanner, {})}</div>${renderComponent($$result2, "WorkWithUs", $$WorkWithUs, {})}${renderComponent($$result2, "Partners", $$Partners, {})}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/index.astro", void 0);

const $$file = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/index.astro";
const $$url = "/hr";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Services as $, $$WhyChooseUS as a, $$WhyTrustUs as b, index$1 as c, index as d, index$2 as i };
