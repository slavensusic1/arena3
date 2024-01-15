/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, g as renderSlot, e as addAttribute, h as renderTransition, i as renderHead } from '../astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';
import { g as getLangFromUrl, u as useTranslations, $ as $$Footer, a as $$Navbar, b as $$ViewTransitions } from './about_ab3ebde2.mjs';
/* empty css                               *//* empty css                           */import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const $$Astro$3 = createAstro("https://example.com");
const $$PortfolioHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PortfolioHeader;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-[500px] bg" data-astro-cid-3p2aemnv><div class="w-full h-full " data-astro-cid-3p2aemnv><div class="flex flex-col items-center justify-center z-20 pt-52" data-astro-cid-3p2aemnv><h1 class="top-0 font-bold text-5xl text-white z-20 " data-astro-cid-3p2aemnv>${t("nav.portfolio")}</h1><ul class=" font-bold text-base text-white  flex justify-center items-center gap-5" data-astro-cid-3p2aemnv><li class="font-bold text-xl text-white z-20" data-astro-cid-3p2aemnv><a href="/" data-astro-cid-3p2aemnv>${t("nav.home")}</a></li><li class="font-bold text-xl text-white z-20 relative" data-astro-cid-3p2aemnv>•</li><li class="font-bold text-xl text-white z-20 whitespace-nowrap" data-astro-cid-3p2aemnv>${t("nav.portfolio")}</li></ul></div></div><div class="absolute bg-black/20 h-full w-full z-10" style="transform: translate(-50%, -50%); left: 50%; top: 50%;" data-astro-cid-3p2aemnv></div></div>`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/PortfolioHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://example.com");
const $$PortfolioLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioLayout;
  const lang = getLangFromUrl(Astro2.url);
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", "><head>", '<script src="https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js" defer><\/script><meta charset="UTF-8"><meta name="description" content="Astro description"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", "</title>", '</head><body class=""><main', '></main><div class="z-0">', '</div><div class="-z-20">', "</div>", "", "</body></html>"])), addAttribute(lang, "lang"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), addAttribute(Astro2.generator, "content"), title, renderHead(), addAttribute(renderTransition($$result, "fbr7r2az", "initial", ""), "data-astro-transition-scope"), renderComponent($$result, "Navbar", $$Navbar, {}), renderComponent($$result, "PortfolioHeader", $$PortfolioHeader, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/layouts/PortfolioLayout.astro", "self");

const tabsData = [
    {
      title: 'Banke',
      content: [
        'Modul za narudžbu gotovine',
        'Modul za gotovinske zajmove',
        'Mobilno bankarstvo i Omnichannel (razvoj frontend-a)',
        'Projekt implementacije čarobnjaka koji prikazuje generičke zaslone definirane konfiguracijom koristeći tehnologiju React. Aplikacija koja crta zaslone iz dizajna koji se povlači s BE-a i ima prijenos podataka poslanih natrag na BE.',
        'Projekt na modulu za "ca-onboarding", na proširenom kyc obrascu.',
        'Razvoj aplikacija za unos podataka o bankama. Dio frontend-a, aplikacija u angularu (CPM unutar EMA).',
      ],
      category: ['Banke'],
    },
    {
      title: 'Državni sektor',
      content: [
        'Aplikacija porezne uprave',
        'Aplikacija skladišta za područja pogođena potresom za vladu',
        'Aplikacija za obračun plaće za drugi dohodak vlade',
      ],
      category: ['Državni sektor'],
    },
    {
      title: 'Trgovina',
      content: [
        'Implementacija ERP/POS u maloprodaji',
        'Automatske narudžbe za POS',
        'Mjenjačnice za male trgovine',
        'WEB integracija blagajne sa ERP-om',
        'Automatski unos radnog vremena i izvoz izvješća',
        'Integracija s tvrtkom za distribuciju paketa',
        'Integracija za EDI razmjenu',
        'Integracija za aplikaciju plaćanja računa',
      ],
      category: ['Trgovina'],
    },
    {
      title: 'Telekomunikacije',
      content: [
        'LH1E – Implementacija svjetionika 1e',
        'LCM alat 2.0 – Održavanje legacy komponenti',
        'CSDP - Platforma za podršku korisnicima',
      ],
      category: ['Telekomunikacije'],
    },
  ];

const pvSmartclick = {"src":"/_astro/pvc-logo-color.a3fda4ec.svg","width":341,"height":100,"format":"svg"};

const market = {"src":"/_astro/kmarket.f340ea49.png","width":700,"height":300,"format":"png"};

const eduvizija = {"src":"/_astro/Eduvizija.8ec1a2fb.jpg","width":180,"height":180,"format":"jpg"};

function Blogs({ lang, subHeadline, headline, apps, miss, energetics }) {
  const blogContent = [
    { id: 1, headline: "PV Smart Click", category: [apps, " | ", energetics], src: pvSmartclick },
    { id: 2, headline: "Kaufland marke(t)", category: [apps], src: market },
    { id: 2, headline: "Eduvizija", category: [apps], src: eduvizija }
  ];
  const [filteredItems, setFilteredItems] = useState(blogContent);
  const [filteredTabs, setFilteredTabs] = useState(tabsData);
  const [activeAll, setActiveAll] = useState(true);
  const [activeBranding, setActiveBranding] = useState(false);
  const [razno, setActiverazno] = useState(false);
  const [activePhotography, setActivePhotography] = useState(false);
  const handleFilterAll = () => {
    setFilteredItems(blogContent);
    setActiveAll(true);
    setActiveBranding(false);
    setActiverazno(false);
    setActivePhotography(false);
  };
  const handleRazno = () => {
    const filteredItems2 = blogContent.filter(
      (item) => item.category.includes("Web Design")
    );
    setFilteredItems(filteredItems2);
    setActiveAll(false);
    setActiveBranding(false);
    setActiverazno(true);
    setActivePhotography(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative bg-gray-200", children: [
    /* @__PURE__ */ jsx("div", { className: "px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24", children: /* @__PURE__ */ jsx("div", { className: "sm:pe-6 lg:pe-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-green-500 text-left font-bold text-lg md:text-2xl", children: headline }),
      /* @__PURE__ */ jsx("h2", { className: "text-left font-bold text-4xl md:text-4xl", children: subHeadline })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 max-w-lg mx-auto pb-20 px-5", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleFilterAll,
          className: `flex-1 duration-all duration-300  ${activeAll ? "bg-green-500 " : "border-black border"} ${activeAll ? "text-white" : "text-black"}  font-bold py-2 px-4 rounded shadow-2xl `,
          children: apps
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleRazno,
          className: `flex-1 duration-300 ${razno ? "bg-green-500 " : "border-black border"} ${razno ? "text-white" : "text-black"} font-bold py-2 px-4 rounded shadow-2xl`,
          children: miss
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 max-w-5xl mx-auto gap-20 w-full px-5", children: filteredItems.map((item) => /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: (lang === void 0 ? `/hr/portfolio/${item.headline}` : `/en/portfolio/${item.headline}`).toLowerCase().replace(/\s/g, "-").replaceAll(",", "").replaceAll("ć", "c").replaceAll("š", "s").replaceAll("!", "").replaceAll("?", ""),
          className: "block rounded-md overflow-hidden",
          children: /* @__PURE__ */ jsx("div", { className: "bg-gray-200 border border-gray-300 shadow-md p-5", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item.src.src,
              alt: "images",
              className: "w-full h-[20rem] object-contain"
            }
          ) })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-col items-start justify-start opacity-0 bg-white transition-all duration-500 transform translate-y-[-4rem] \r\n              group-hover:opacity-100 group-hover:translate-y-[-7rem] mx-2 py-4 rounded-lg ease-in", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg text-center opacity-0 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-5 duration-500 delay-200 text-green-500 font-semibold", children: item.category }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `/${lang}/portfolio/${item.headline.toLowerCase().replace(/\s/g, "-").replaceAll(",", "").replaceAll("ć", "c").replaceAll("š", "s").replaceAll("!", "").replaceAll("?", "")}`,
            className: "text-lg text-black transform translate-x-20 group-hover:translate-x-5 duration-500 delay-500",
            children: /* @__PURE__ */ jsx("p", { className: "text-base text-start opacity-0 group-hover:opacity-100 translate-x-20 group-hover:-translate-x-0 duration-500 delay-200 text-black font-semibold ", children: item.headline })
          }
        )
      ] })
    ] }, item.id)) }),
    /* @__PURE__ */ jsx("div", { className: "grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2", children: razno ? filteredTabs.map((tab) => /* @__PURE__ */ jsxs("div", { className: "border p-4 m-4", children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold mb-2 text-left text-2xl", children: tab.category }),
      /* @__PURE__ */ jsx("ul", { className: "list-disc ", children: tab.content.map((item, index) => /* @__PURE__ */ jsx("li", { className: "mb-2", children: item }, index)) })
    ] }, tab.id)) : "" })
  ] });
}

const $$Astro$1 = createAstro("https://example.com");
const $$Portfolio$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Portfolio$1;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "PortfolioLayout", $$PortfolioLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Portfolio", Blogs, { "client:load": true, "lang": lang, "headline": t("portfolio.headline"), "subHeadline": t("portfolio.subHeadline"), "apps": t("portfolio.apps"), "miss": t("portfolio.Miscellaneous"), "energetics": t("footer.energetika"), "client:component-hydration": "load", "client:component-path": "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/Portfolio.jsx", "client:component-export": "default" })}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/portfolio.astro", void 0);

const $$file$1 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/portfolio.astro";
const $$url$1 = "/en/portfolio";

const portfolio$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "PortfolioLayout", $$PortfolioLayout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Portfolio", Blogs, { "client:load": true, "lang": lang, "headline": t("portfolio.headline"), "subHeadline": t("portfolio.subHeadline"), "apps": t("portfolio.apps"), "miss": t("portfolio.Miscellaneous"), "energetics": t("footer.energetika"), "client:component-hydration": "load", "client:component-path": "C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/Portfolio.jsx", "client:component-export": "default" })}` })}`;
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/portfolio.astro", void 0);

const $$file = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/portfolio.astro";
const $$url = "/hr/portfolio";

const portfolio = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { portfolio as a, portfolio$1 as p };
