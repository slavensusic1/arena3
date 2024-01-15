import { serialize, parse } from 'cookie';
import { bold } from 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import { A as AstroError, x as ResponseSentError, D as MiddlewareNoDataOrNextCalled, F as MiddlewareNotAResponse, H as ASTRO_VERSION, C as ClientAddressNotAvailable, S as StaticClientAddressNotAvailable, J as renderEndpoint, t as LocalsNotAnObject } from './chunks/astro_e165efc1.mjs';
import mime from 'mime';
import { compile } from 'path-to-regexp';

const DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
const DELETED_VALUE = "deleted";
const responseSentSymbol = Symbol.for("astro.responseSent");
class AstroCookie {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
}
class AstroCookies {
  #request;
  #requestValues;
  #outgoing;
  constructor(request) {
    this.#request = request;
    this.#requestValues = null;
    this.#outgoing = null;
  }
  /**
   * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
   * in a Set-Cookie header added to the response.
   * @param key The cookie to delete
   * @param options Options related to this deletion, such as the path of the cookie.
   */
  delete(key, options) {
    const serializeOptions = {
      expires: DELETED_EXPIRATION
    };
    if (options?.domain) {
      serializeOptions.domain = options.domain;
    }
    if (options?.path) {
      serializeOptions.path = options.path;
    }
    this.#ensureOutgoingMap().set(key, [
      DELETED_VALUE,
      serialize(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  /**
   * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
   * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
   * from that set call, overriding any values already part of the request.
   * @param key The cookie to get.
   * @returns An object containing the cookie value as well as convenience methods for converting its value.
   */
  get(key) {
    if (this.#outgoing?.has(key)) {
      let [serializedValue, , isSetValue] = this.#outgoing.get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return void 0;
      }
    }
    const values = this.#ensureParsed();
    if (key in values) {
      const value = values[key];
      return new AstroCookie(value);
    }
  }
  /**
   * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
   * part of the initial request or set via Astro.cookies.set(key)
   * @param key The cookie to check for.
   * @returns
   */
  has(key) {
    if (this.#outgoing?.has(key)) {
      let [, , isSetValue] = this.#outgoing.get(key);
      return isSetValue;
    }
    const values = this.#ensureParsed();
    return !!values[key];
  }
  /**
   * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
   * an object it will be stringified via JSON.stringify(value). Additionally you
   * can provide options customizing how this cookie will be set, such as setting httpOnly
   * in order to prevent the cookie from being read in client-side JavaScript.
   * @param key The name of the cookie to set.
   * @param value A value, either a string or other primitive or an object.
   * @param options Options for the cookie, such as the path and security settings.
   */
  set(key, value, options) {
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    this.#ensureOutgoingMap().set(key, [
      serializedValue,
      serialize(key, serializedValue, serializeOptions),
      true
    ]);
    if (this.#request[responseSentSymbol]) {
      throw new AstroError({
        ...ResponseSentError
      });
    }
  }
  /**
   * Astro.cookies.header() returns an iterator for the cookies that have previously
   * been set by either Astro.cookies.set() or Astro.cookies.delete().
   * This method is primarily used by adapters to set the header on outgoing responses.
   * @returns
   */
  *headers() {
    if (this.#outgoing == null)
      return;
    for (const [, value] of this.#outgoing) {
      yield value[1];
    }
  }
  #ensureParsed() {
    if (!this.#requestValues) {
      this.#parse();
    }
    if (!this.#requestValues) {
      this.#requestValues = {};
    }
    return this.#requestValues;
  }
  #ensureOutgoingMap() {
    if (!this.#outgoing) {
      this.#outgoing = /* @__PURE__ */ new Map();
    }
    return this.#outgoing;
  }
  #parse() {
    const raw = this.#request.headers.get("cookie");
    if (!raw) {
      return;
    }
    this.#requestValues = parse(raw);
  }
}

const astroCookiesSymbol = Symbol.for("astro.cookies");
function attachCookiesToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function responseHasCookies(response) {
  return Reflect.has(response, astroCookiesSymbol);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return [];
  }
  for (const headerValue of cookies.headers()) {
    yield headerValue;
  }
  return [];
}

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function info(opts, label, message) {
  return log(opts, "info", label, message);
}
function warn(opts, label, message) {
  return log(opts, "warn", label, message);
}
function error(opts, label, message) {
  return log(opts, "error", label, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message) {
    info(this.options, label, message);
  }
  warn(label, message) {
    warn(this.options, label, message);
  }
  error(label, message) {
    error(this.options, label, message);
  }
  debug(label, message, ...args) {
    debug(this.options, label, message, args);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.options, this.label, message);
  }
}

async function callMiddleware(logger, onRequest, apiContext, responseFunction) {
  let nextCalled = false;
  let responseFunctionPromise = void 0;
  const next = async () => {
    nextCalled = true;
    responseFunctionPromise = responseFunction();
    return responseFunctionPromise;
  };
  let middlewarePromise = onRequest(apiContext, next);
  return await Promise.resolve(middlewarePromise).then(async (value) => {
    if (isEndpointOutput(value)) {
      logger.warn(
        "middleware",
        `Using simple endpoints can cause unexpected issues in the chain of middleware functions.
It's strongly suggested to use full ${bold("Response")} objects.`
      );
    }
    if (nextCalled) {
      if (typeof value !== "undefined") {
        if (value instanceof Response === false) {
          throw new AstroError(MiddlewareNotAResponse);
        }
        return ensureCookiesAttached(apiContext, value);
      } else {
        if (responseFunctionPromise) {
          return responseFunctionPromise;
        } else {
          throw new AstroError(MiddlewareNotAResponse);
        }
      }
    } else if (typeof value === "undefined") {
      throw new AstroError(MiddlewareNoDataOrNextCalled);
    } else if (value instanceof Response === false) {
      throw new AstroError(MiddlewareNotAResponse);
    } else {
      return ensureCookiesAttached(apiContext, value);
    }
  });
}
function ensureCookiesAttached(apiContext, response) {
  if (apiContext.cookies !== void 0 && !responseHasCookies(response)) {
    attachCookiesToResponse(response, apiContext.cookies);
  }
  return response;
}
function isEndpointOutput(endpointResult) {
  return !(endpointResult instanceof Response) && typeof endpointResult === "object" && typeof endpointResult.body === "string";
}

const encoder = new TextEncoder();
const clientAddressSymbol = Symbol.for("astro.clientAddress");
const clientLocalsSymbol = Symbol.for("astro.locals");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName
}) {
  const context = {
    cookies: new AstroCookies(request),
    request,
    params,
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    props,
    redirect(path, status) {
      return new Response(null, {
        status: status || 302,
        headers: {
          Location: path
        }
      });
    },
    ResponseWithEncoding,
    url: new URL(request.url),
    get clientAddress() {
      if (!(clientAddressSymbol in request)) {
        if (adapterName) {
          throw new AstroError({
            ...ClientAddressNotAvailable,
            message: ClientAddressNotAvailable.message(adapterName)
          });
        } else {
          throw new AstroError(StaticClientAddressNotAvailable);
        }
      }
      return Reflect.get(request, clientAddressSymbol);
    }
  };
  Object.defineProperty(context, "locals", {
    enumerable: true,
    get() {
      return Reflect.get(request, clientLocalsSymbol);
    },
    set(val) {
      if (typeof val !== "object") {
        throw new AstroError(LocalsNotAnObject);
      } else {
        Reflect.set(request, clientLocalsSymbol, val);
      }
    }
  });
  return context;
}
class ResponseWithEncoding extends Response {
  constructor(body, init, encoding) {
    if (typeof body === "string") {
      if (typeof Buffer !== "undefined" && Buffer.from) {
        body = Buffer.from(body, encoding);
      } else if (encoding == null || encoding === "utf8" || encoding === "utf-8") {
        body = encoder.encode(body);
      }
    }
    super(body, init);
    if (encoding) {
      this.headers.set("X-Astro-Encoding", encoding);
    }
  }
}
async function callEndpoint(mod, env, ctx, onRequest) {
  const context = createAPIContext({
    request: ctx.request,
    params: ctx.params,
    props: ctx.props,
    site: env.site,
    adapterName: env.adapterName
  });
  let response;
  if (onRequest) {
    response = await callMiddleware(
      env.logger,
      onRequest,
      context,
      async () => {
        return await renderEndpoint(mod, context, env.ssr, env.logger);
      }
    );
  } else {
    response = await renderEndpoint(mod, context, env.ssr, env.logger);
  }
  const isEndpointSSR = env.ssr && !ctx.route?.prerender;
  if (response instanceof Response) {
    if (isEndpointSSR && response.headers.get("X-Astro-Encoding")) {
      env.logger.warn(
        "ssr",
        "`ResponseWithEncoding` is ignored in SSR. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
    attachCookiesToResponse(response, context.cookies);
    return response;
  }
  env.logger.warn(
    "astro",
    `${ctx.route.component} returns a simple object which is deprecated. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information.`
  );
  if (isEndpointSSR) {
    if (response.hasOwnProperty("headers")) {
      env.logger.warn(
        "ssr",
        "Setting headers is not supported when returning an object. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
    if (response.encoding) {
      env.logger.warn(
        "ssr",
        "`encoding` is ignored in SSR. To return a charset other than UTF-8, please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
  }
  let body;
  const headers = new Headers();
  const pathname = ctx.route ? (
    // Try the static route `pathname`
    ctx.route.pathname ?? // Dynamic routes don't include `pathname`, so synthesize a path for these (e.g. 'src/pages/[slug].svg')
    ctx.route.segments.map((s) => s.map((p) => p.content).join("")).join("/")
  ) : (
    // Fallback to pathname of the request
    ctx.pathname
  );
  const mimeType = mime.getType(pathname) || "text/plain";
  headers.set("Content-Type", `${mimeType};charset=utf-8`);
  if (response.encoding) {
    headers.set("X-Astro-Encoding", response.encoding);
  }
  if (response.body instanceof Uint8Array) {
    body = response.body;
    headers.set("Content-Length", body.byteLength.toString());
  } else if (typeof Buffer !== "undefined" && Buffer.from) {
    body = Buffer.from(response.body, response.encoding);
    headers.set("Content-Length", body.byteLength.toString());
  } else if (response.encoding == null || response.encoding === "utf8" || response.encoding === "utf-8") {
    body = encoder.encode(response.body);
    headers.set("Content-Length", body.byteLength.toString());
  } else {
    body = response.body;
  }
  response = new Response(body, {
    status: 200,
    headers
  });
  attachCookiesToResponse(response, context.cookies);
  return response;
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;0,600;0,800;0,900;1,500;1,600;1,700;1,800;1,900&display=swap\";html{font-family:Dosis,sans-serif}body{background:white}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"},{"type":"external","src":"/_astro/index.2680f104.css"},{"type":"inline","content":".bg[data-astro-cid-na57dh63]{background-image:url(/_astro/banner.df306216.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;background-attachment:fixed}.bg[data-astro-cid-na57dh63]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#03030c}\n.bg[data-astro-cid-2zrqbp5n]{background-image:url(/_astro/banner.df306216.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative}.bg[data-astro-cid-2zrqbp5n]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}.bg[data-astro-cid-2zrqbp5n]:hover:before{opacity:0}\n"}],"routeData":{"route":"/en","type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"external","src":"/_astro/eduvizija.d1a0269e.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/en/portfolio/kaufland-marke(t)","type":"page","pattern":"^\\/en\\/portfolio\\/kaufland-marke\\(t\\)\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"kaufland-marke(t)","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/portfolio/kaufland-marke(t).astro","pathname":"/en/portfolio/kaufland-marke(t)","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"external","src":"/_astro/eduvizija.d1a0269e.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/en/portfolio/pv-smart-click","type":"page","pattern":"^\\/en\\/portfolio\\/pv-smart-click\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"pv-smart-click","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/portfolio/pv-smart-click.astro","pathname":"/en/portfolio/pv-smart-click","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"external","src":"/_astro/eduvizija.d1a0269e.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/en/portfolio/eduvizija","type":"page","pattern":"^\\/en\\/portfolio\\/eduvizija\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"eduvizija","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/portfolio/eduvizija.astro","pathname":"/en/portfolio/eduvizija","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-3p2aemnv]{background-image:url(/_astro/laptop.263fc8fd.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-3p2aemnv]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/en/portfolio","type":"page","pattern":"^\\/en\\/portfolio\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/portfolio.astro","pathname":"/en/portfolio","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-dzqjdc4t]{background-image:url(/_astro/servicesPhoto.c7ba1ce3.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-dzqjdc4t]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/en/services/isogdprcisco","type":"page","pattern":"^\\/en\\/services\\/isoGdprCisco\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}],[{"content":"isoGdprCisco","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/services/isoGdprCisco.astro","pathname":"/en/services/isoGdprCisco","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-dzqjdc4t]{background-image:url(/_astro/servicesPhoto.c7ba1ce3.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-dzqjdc4t]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/en/services/energetics","type":"page","pattern":"^\\/en\\/services\\/energetics\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}],[{"content":"energetics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/services/energetics.astro","pathname":"/en/services/energetics","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-dzqjdc4t]{background-image:url(/_astro/servicesPhoto.c7ba1ce3.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-dzqjdc4t]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/en/services/ict","type":"page","pattern":"^\\/en\\/services\\/ict\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}],[{"content":"ict","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/services/ict.astro","pathname":"/en/services/ict","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-dzqjdc4t]{background-image:url(/_astro/servicesPhoto.c7ba1ce3.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-dzqjdc4t]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/en/services/it","type":"page","pattern":"^\\/en\\/services\\/it\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}],[{"content":"it","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/services/it.astro","pathname":"/en/services/it","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-2zrqbp5n]{background-image:url(/_astro/banner.df306216.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative}.bg[data-astro-cid-2zrqbp5n]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}.bg[data-astro-cid-2zrqbp5n]:hover:before{opacity:0}\n"},{"type":"external","src":"/_astro/index.2680f104.css"},{"type":"inline","content":".bg[data-astro-cid-eonlwxmq]{background-image:url(/_astro/servicesPhoto.c7ba1ce3.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-eonlwxmq]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/en/services","type":"page","pattern":"^\\/en\\/services\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/services.astro","pathname":"/en/services","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"}],"routeData":{"route":"/en/contact","type":"page","pattern":"^\\/en\\/contact\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/contact.astro","pathname":"/en/contact","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-2zrqbp5n]{background-image:url(/_astro/banner.df306216.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative}.bg[data-astro-cid-2zrqbp5n]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}.bg[data-astro-cid-2zrqbp5n]:hover:before{opacity:0}\n.bg[data-astro-cid-6kukzym3]{background-image:url(/_astro/laptop.263fc8fd.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-6kukzym3]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.bg[data-astro-cid-na57dh63]{background-image:url(/_astro/banner.df306216.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;background-attachment:fixed}.bg[data-astro-cid-na57dh63]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#03030c}\n"}],"routeData":{"route":"/en/about","type":"page","pattern":"^\\/en\\/about\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/about.astro","pathname":"/en/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;0,600;0,800;0,900;1,500;1,600;1,700;1,800;1,900&display=swap\";html{font-family:Dosis,sans-serif}body{background:white}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"},{"type":"external","src":"/_astro/index.2680f104.css"},{"type":"inline","content":".bg[data-astro-cid-na57dh63]{background-image:url(/_astro/banner.df306216.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;background-attachment:fixed}.bg[data-astro-cid-na57dh63]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#03030c}\n.bg[data-astro-cid-2zrqbp5n]{background-image:url(/_astro/banner.df306216.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative}.bg[data-astro-cid-2zrqbp5n]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}.bg[data-astro-cid-2zrqbp5n]:hover:before{opacity:0}\n"}],"routeData":{"route":"/hr","type":"page","pattern":"^\\/hr\\/?$","segments":[[{"content":"hr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hr/index.astro","pathname":"/hr","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"external","src":"/_astro/eduvizija.d1a0269e.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/hr/portfolio/kaufland-marke(t)","type":"page","pattern":"^\\/hr\\/portfolio\\/kaufland-marke\\(t\\)\\/?$","segments":[[{"content":"hr","dynamic":false,"spread":false}],[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"kaufland-marke(t)","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hr/portfolio/kaufland-marke(t).astro","pathname":"/hr/portfolio/kaufland-marke(t)","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"external","src":"/_astro/eduvizija.d1a0269e.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/hr/portfolio/pv-smart-click","type":"page","pattern":"^\\/hr\\/portfolio\\/pv-smart-click\\/?$","segments":[[{"content":"hr","dynamic":false,"spread":false}],[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"pv-smart-click","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hr/portfolio/pv-smart-click.astro","pathname":"/hr/portfolio/pv-smart-click","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"external","src":"/_astro/eduvizija.d1a0269e.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/hr/portfolio/eduvizija","type":"page","pattern":"^\\/hr\\/portfolio\\/eduvizija\\/?$","segments":[[{"content":"hr","dynamic":false,"spread":false}],[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"eduvizija","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hr/portfolio/eduvizija.astro","pathname":"/hr/portfolio/eduvizija","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-3p2aemnv]{background-image:url(/_astro/laptop.263fc8fd.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-3p2aemnv]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/hr/portfolio","type":"page","pattern":"^\\/hr\\/portfolio\\/?$","segments":[[{"content":"hr","dynamic":false,"spread":false}],[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hr/portfolio.astro","pathname":"/hr/portfolio","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-dzqjdc4t]{background-image:url(/_astro/servicesPhoto.c7ba1ce3.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-dzqjdc4t]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/hr/services/isogdprcisco","type":"page","pattern":"^\\/hr\\/services\\/isoGdprCisco\\/?$","segments":[[{"content":"hr","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}],[{"content":"isoGdprCisco","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hr/services/isoGdprCisco.astro","pathname":"/hr/services/isoGdprCisco","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-dzqjdc4t]{background-image:url(/_astro/servicesPhoto.c7ba1ce3.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-dzqjdc4t]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/hr/services/energetics","type":"page","pattern":"^\\/hr\\/services\\/energetics\\/?$","segments":[[{"content":"hr","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}],[{"content":"energetics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hr/services/energetics.astro","pathname":"/hr/services/energetics","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-dzqjdc4t]{background-image:url(/_astro/servicesPhoto.c7ba1ce3.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-dzqjdc4t]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/hr/services/ict","type":"page","pattern":"^\\/hr\\/services\\/ict\\/?$","segments":[[{"content":"hr","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}],[{"content":"ict","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hr/services/ict.astro","pathname":"/hr/services/ict","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-dzqjdc4t]{background-image:url(/_astro/servicesPhoto.c7ba1ce3.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-dzqjdc4t]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/hr/services/it","type":"page","pattern":"^\\/hr\\/services\\/it\\/?$","segments":[[{"content":"hr","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}],[{"content":"it","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hr/services/it.astro","pathname":"/hr/services/it","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-2zrqbp5n]{background-image:url(/_astro/banner.df306216.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative}.bg[data-astro-cid-2zrqbp5n]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}.bg[data-astro-cid-2zrqbp5n]:hover:before{opacity:0}\n"},{"type":"external","src":"/_astro/index.2680f104.css"},{"type":"inline","content":".bg[data-astro-cid-eonlwxmq]{background-image:url(/_astro/servicesPhoto.c7ba1ce3.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-eonlwxmq]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/hr/services","type":"page","pattern":"^\\/hr\\/services\\/?$","segments":[[{"content":"hr","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hr/services.astro","pathname":"/hr/services","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"}],"routeData":{"route":"/hr/contact","type":"page","pattern":"^\\/hr\\/contact\\/?$","segments":[[{"content":"hr","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hr/contact.astro","pathname":"/hr/contact","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.bd7fdfe4.js"}],"styles":[{"type":"external","src":"/_astro/about.2f722a29.css"},{"type":"inline","content":".bg[data-astro-cid-2zrqbp5n]{background-image:url(/_astro/banner.df306216.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative}.bg[data-astro-cid-2zrqbp5n]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}.bg[data-astro-cid-2zrqbp5n]:hover:before{opacity:0}\n.bg[data-astro-cid-6kukzym3]{background-image:url(/_astro/laptop.263fc8fd.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;z-index:10}.bg[data-astro-cid-6kukzym3]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#000;transition:opacity .5s ease}html{font-family:Dosis,sans-serif}code{font-family:Dosis,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.bg[data-astro-cid-na57dh63]{background-image:url(/_astro/banner.df306216.jpg);background-repeat:no-repeat;background-size:cover;background-position:center;background-attachment:fixed}.bg[data-astro-cid-na57dh63]:before{content:\"\";position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;opacity:.6;background-color:#03030c}\n"}],"routeData":{"route":"/hr/about","type":"page","pattern":"^\\/hr\\/about\\/?$","segments":[[{"content":"hr","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hr/about.astro","pathname":"/hr/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","compressHTML":true,"componentMetadata":[["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/about.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/about.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/layouts/AboutLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/hr/about@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/portfolio/eduvizija.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/portfolio/eduvizija.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/portfolio/kaufland-marke(t).astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/portfolio/kaufland-marke(t).astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/portfolio/pv-smart-click.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/portfolio/pv-smart-click.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/layouts/ProjectLayout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/Eduv.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/portfolio/eduvizija@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/hr/portfolio/eduvizija@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/Kmt.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/portfolio/kaufland-marke(t)@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/hr/portfolio/kaufland-marke(t)@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/Psc.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/portfolio/pv-smart-click@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/hr/portfolio/pv-smart-click@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services/energetics.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services/ict.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services/isoGdprCisco.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services/it.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services/energetics.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services/ict.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services/isoGdprCisco.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services/it.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/layouts/ServicesDetailLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/services/energetics@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/services/ict@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/services/isoGdprCisco@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/services/it@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/hr/services/energetics@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/hr/services/ict@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/hr/services/isoGdprCisco@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/hr/services/it@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/hr/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/portfolio.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/portfolio.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/layouts/PortfolioLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/portfolio@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/hr/portfolio@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/en/services.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/pages/hr/services.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/38599/Desktop/Slaven/arena/arena3/src/layouts/ServicesLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/en/services@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/hr/services@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_ca937060.mjs","\u0000@astrojs-manifest":"manifest_4c2551b0.mjs","C:/Users/38599/Desktop/Slaven/arena/arena3/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3769332a.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_4712d31a.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_c9a97921.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"chunks/index_5c14b971.mjs","\u0000@astro-page:src/pages/en/portfolio/kaufland-marke(t)@_@astro":"chunks/kaufland-marke(t)_4545c0f2.mjs","\u0000@astro-page:src/pages/en/portfolio/pv-smart-click@_@astro":"chunks/pv-smart-click_976336ba.mjs","\u0000@astro-page:src/pages/en/portfolio/eduvizija@_@astro":"chunks/eduvizija_a8d23421.mjs","\u0000@astro-page:src/pages/en/portfolio@_@astro":"chunks/portfolio_29ee4a67.mjs","\u0000@astro-page:src/pages/en/services/isoGdprCisco@_@astro":"chunks/isoGdprCisco_29eee2b0.mjs","\u0000@astro-page:src/pages/en/services/energetics@_@astro":"chunks/energetics_59781684.mjs","\u0000@astro-page:src/pages/en/services/ict@_@astro":"chunks/ict_a955c898.mjs","\u0000@astro-page:src/pages/en/services/it@_@astro":"chunks/it_ce713e3a.mjs","\u0000@astro-page:src/pages/en/services@_@astro":"chunks/services_1f436355.mjs","\u0000@astro-page:src/pages/en/contact@_@astro":"chunks/contact_79d1e6a2.mjs","\u0000@astro-page:src/pages/en/about@_@astro":"chunks/about_0c6bf897.mjs","\u0000@astro-page:src/pages/hr/index@_@astro":"chunks/index_7e328b22.mjs","\u0000@astro-page:src/pages/hr/portfolio/kaufland-marke(t)@_@astro":"chunks/kaufland-marke(t)_1d63c4d1.mjs","\u0000@astro-page:src/pages/hr/portfolio/pv-smart-click@_@astro":"chunks/pv-smart-click_807bee8c.mjs","\u0000@astro-page:src/pages/hr/portfolio/eduvizija@_@astro":"chunks/eduvizija_b6f63ac6.mjs","\u0000@astro-page:src/pages/hr/portfolio@_@astro":"chunks/portfolio_433ed700.mjs","\u0000@astro-page:src/pages/hr/services/isoGdprCisco@_@astro":"chunks/isoGdprCisco_142be2ef.mjs","\u0000@astro-page:src/pages/hr/services/energetics@_@astro":"chunks/energetics_6bd4ea04.mjs","\u0000@astro-page:src/pages/hr/services/ict@_@astro":"chunks/ict_95cad529.mjs","\u0000@astro-page:src/pages/hr/services/it@_@astro":"chunks/it_108361b0.mjs","\u0000@astro-page:src/pages/hr/services@_@astro":"chunks/services_af6cc158.mjs","\u0000@astro-page:src/pages/hr/contact@_@astro":"chunks/contact_4c98ceba.mjs","\u0000@astro-page:src/pages/hr/about@_@astro":"chunks/about_7480cb55.mjs","C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/Navbar.jsx":"_astro/Navbar.4fd44b99.js","C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/Portfolio.jsx":"_astro/Portfolio.db13bf81.js","C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/FooterJs":"_astro/FooterJs.94b8dc11.js","@astrojs/react/client.js":"_astro/client.fff18ba4.js","C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/portfolio/SwiperReact.jsx":"_astro/SwiperReact.ddf03c03.js","/astro/hoisted.js?q=0":"_astro/hoisted.bd7fdfe4.js","C:/Users/38599/Desktop/Slaven/arena/arena3/src/components/frontpage/Counters":"_astro/Counters.8cce3d0e.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/banner.df306216.jpg","/_astro/idea.b903b417.svg","/_astro/code.4300f119.svg","/_astro/solar.6adccbd3.svg","/_astro/iso.80a51796.svg","/_astro/gdpr.fce4022c.svg","/_astro/ciso.0f98ada8.svg","/_astro/KAUFLAND-market.19a21168.png","/_astro/kmsc6.540de721.png","/_astro/kmsc2.21a512aa.png","/_astro/kmsc3.53046b0f.png","/_astro/home-font.f345c269.png","/_astro/kmsc1.5be197fc.png","/_astro/kmsc4.691df983.png","/_astro/kmsc7.2748d995.png","/_astro/services-details.311d7af1.jpg","/_astro/whychooseus.3b2f37b0.svg","/_astro/pvc-logo-color.a3fda4ec.svg","/_astro/kmarket.f340ea49.png","/_astro/Eduvizija.8ec1a2fb.jpg","/_astro/croz2.9180bc32.png","/_astro/rba.111e5da2.png","/_astro/kaufland.4fab3207.png","/_astro/apis2.d791cf93.jpg","/_astro/Zaba.ef08b9a4.svg","/_astro/Addiko.739dc000.svg","/_astro/pbz3.028965fb.jpg","/_astro/ericson.7e10a622.svg","/_astro/HRT.c21e4aed.png","/_astro/posta.75457d47.svg","/_astro/A1.a642a8f1.png","/_astro/kingICT.e21c0fd8.png","/_astro/iskon.dcdacba8.png","/_astro/combis.3cc4042d.png","/_astro/ict-photo.c134f24c.jpg","/_astro/bilog.b1874022.svg","/_astro/laptop.263fc8fd.jpg","/_astro/cert.6ca9086b.svg","/_astro/about-ilustration.0cbe60c9.svg","/_astro/pvsc1.55629255.png","/_astro/pvsc2.c4059f15.png","/_astro/pvsc3.44d4f349.png","/_astro/pvsc4.e2f97519.png","/_astro/pvsc5.e2660302.png","/_astro/pvsc6.46139b3e.png","/_astro/edusc1.7231b7b2.png","/_astro/edusc2.43fbc87e.png","/_astro/edusc3.1211d56c.png","/_astro/edusc4.aac7abc8.png","/_astro/EDUV-.36ddca30.png","/_astro/edusc5.a43a63c9.png","/_astro/edusc6.9ac0386a.png","/_astro/solar.a093423e.jpg","/_astro/it-security.1c677531.jpg","/_astro/energy-detail.58ddbc06.jpg","/_astro/servicesPhoto.c7ba1ce3.jpg","/_astro/digitalarena.258bdcdb.png","/_astro/project.40295585.jpg","/_astro/about.2f722a29.css","/_astro/eduvizija.d1a0269e.css","/_astro/index.2680f104.css","/favicon.svg","/_astro/client.fff18ba4.js","/_astro/Counters.8cce3d0e.js","/_astro/digitalarena.09a724ce.js","/_astro/eduvizija.1c8dbbc4.css","/_astro/FooterJs.94b8dc11.js","/_astro/hoisted.bd7fdfe4.js","/_astro/index.03be2d59.js","/_astro/index.840e397f.js","/_astro/jsx-runtime.b9e88e07.js","/_astro/Navbar.4fd44b99.js","/_astro/Portfolio.db13bf81.js","/_astro/SwiperReact.ddf03c03.js"]});

export { AstroCookies as A, Logger as L, attachCookiesToResponse as a, callEndpoint as b, createAPIContext as c, dateTimeFormat as d, callMiddleware as e, AstroIntegrationLogger as f, getSetCookiesFromResponse as g, levels as l, manifest };
