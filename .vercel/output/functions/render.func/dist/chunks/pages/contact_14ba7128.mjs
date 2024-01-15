/* empty css                           */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_e165efc1.mjs';
import 'html-escaper';
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://example.com");
const $$Contact$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact$1;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<button onclick="openEmail()">Contact Us</button><script>
    function openEmail() {
        // Replace 'company@info.com' with your desired email address
        window.location.href = 'mailto:company@info.com';
    }
<\/script>`])), maybeRenderHead());
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/contact.astro", void 0);

const $$file$1 = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/contact.astro";
const $$url$1 = "/en/contact";

const contact$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate(_a || (_a = __template(["", `<button onclick="openEmail()">Contact Us</button><script>
    function openEmail() {
        // Replace 'company@info.com' with your desired email address
        window.location.href = 'mailto:company@info.com';
    }
<\/script>`])), maybeRenderHead());
}, "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/contact.astro", void 0);

const $$file = "C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/contact.astro";
const $$url = "/hr/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { contact as a, contact$1 as c };
