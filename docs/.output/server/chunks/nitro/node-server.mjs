globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, appendHeader, getQuery, getCookie, lazyEventHandler, readBody, createApp, createRouter as createRouter$1, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase, pascalCase, kebabCase, camelCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash, isRelative } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import overlay from 'unstorage/drivers/overlay';
import memory$1 from 'unstorage/drivers/memory';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname, join } from 'pathe';
import { unified } from 'unified';
import { toString } from 'mdast-util-to-string';
import { preprocess } from 'micromark/lib/preprocess.js';
import { postprocess } from 'micromark/lib/postprocess.js';
import { stringifyPosition } from 'unist-util-stringify-position';
import { markdownLineEnding, markdownSpace } from 'micromark-util-character';
import { push, splice } from 'micromark-util-chunked';
import { resolveAll } from 'micromark-util-resolve-all';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import remarkMDC, { parseFrontMatter } from 'remark-mdc';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { all } from 'mdast-util-to-hast';
import { detab } from 'detab';
import { u } from 'unist-builder';
import { encode } from 'mdurl';
import slugify from 'slugify';
import { position } from 'unist-util-position';
import htmlTags from 'html-tags';
import { visit } from 'unist-util-visit';
import { getHighlighter, BUNDLED_LANGUAGES, BUNDLED_THEMES } from 'shiki-es';
import consola from 'unenv/runtime/npm/consola';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{"plausible":{"hashMode":false,"trackLocalhost":false,"domain":"ackee.nuxtjs.org","apiHost":"https://plausible.io","autoPageviews":true,"autoOutboundTracking":false},"studio":{"apiURL":"https://api.nuxt.studio"},"content":{"clientDB":{"isSPA":false,"integrity":1670366594014},"navigation":{"fields":["icon","titleTemplate","aside","layout"]},"base":"_content","tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"highlight":{"theme":{"dark":"github-dark","default":"github-light"},"preload":["json","js","ts","html","css","vue","diff","shell","markdown","yaml","bash","ini"],"apiURL":"/api/_content/highlight"},"wsUrl":"","documentDriven":{"page":true,"navigation":true,"surround":true,"globals":{},"layoutFallbacks":["theme"],"injectPage":true},"anchorLinks":{"depth":4,"exclude":[1]}}},"studio":{},"content":{"cacheVersion":2,"cacheIntegrity":"gBavU1FhN5","transformers":["/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/content/dist/runtime/transformers/shiki.mjs"],"base":"_content","watch":{"ws":{"port":4000,"hostname":"localhost","showURL":false}},"sources":{},"ignores":["\\.","-"],"locales":[],"highlight":{"theme":{"dark":"github-dark","default":"github-light"},"preload":["json","js","ts","html","css","vue","diff","shell","markdown","yaml","bash","ini"],"apiURL":"/api/_content/highlight"},"markdown":{"tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"anchorLinks":{"depth":4,"exclude":[1]},"remarkPlugins":{},"rehypePlugins":{}},"yaml":{},"csv":{"delimeter":",","json":true},"navigation":{"fields":["icon","titleTemplate","aside","layout"]},"documentDriven":true,"experimental":{"clientDB":false}},"appConfigSchema":{"properties":{"id":"#appConfig","properties":{"prose":{"title":"Prose configuration from Nuxt Typography","description":"","tags":[],"id":"#appConfig/prose","properties":{"copyButton":{"title":"Copy button (used in code blocks)","description":"","tags":[],"id":"#appConfig/prose/copyButton","properties":{"iconCopy":{"title":"Icon displayed to copy","description":"","tags":[],"id":"#appConfig/prose/copyButton/iconCopy","default":"ph:copy","type":"string"},"iconCopied":{"title":"Icon displayed when copied","description":"","tags":[],"id":"#appConfig/prose/copyButton/iconCopied","default":"ph:check","type":"string"}},"default":{"iconCopy":"ph:copy","iconCopied":"ph:check"},"type":"object"},"headings":{"title":"Default configuration for all headings (h1, h2, h3, h4, h5 and h6)","description":"","tags":[],"id":"#appConfig/prose/headings","properties":{"icon":{"title":"Default icon for anchor link on hover","description":"","tags":[],"tsType":"string|false","id":"#appConfig/prose/headings/icon","default":"ph:link","type":"string"}},"default":{"icon":"ph:link"},"type":"object"},"h1":{"title":"First heading configuration","description":"","tags":[],"id":"#appConfig/prose/h1","properties":{"icon":{"title":"Icon displayed for anchor link on hover","description":"","tags":[],"tsType":"string|false","id":"#appConfig/prose/h1/icon","default":"","type":"string"}},"default":{"icon":""},"type":"object"},"h2":{"title":"Second heading configuration","description":"","tags":[],"id":"#appConfig/prose/h2","properties":{"icon":{"title":"Icon displayed for anchor link on hover","description":"","tags":[],"tsType":"string|false","id":"#appConfig/prose/h2/icon","default":"","type":"string"}},"default":{"icon":""},"type":"object"},"h3":{"title":"Third heading configuration","description":"","tags":[],"id":"#appConfig/prose/h3","properties":{"icon":{"title":"Icon displayed for anchor link on hover","description":"","tags":[],"tsType":"string|false","id":"#appConfig/prose/h3/icon","default":"","type":"string"}},"default":{"icon":""},"type":"object"},"h4":{"title":"Fourth heading configuration","description":"","tags":[],"id":"#appConfig/prose/h4","properties":{"icon":{"title":"Icon displayed for anchor link on hover","description":"","tags":[],"tsType":"string|false","id":"#appConfig/prose/h4/icon","default":"","type":"string"}},"default":{"icon":""},"type":"object"},"h5":{"title":"Fifth heading configuration","description":"","tags":[],"id":"#appConfig/prose/h5","properties":{"icon":{"title":"Icon displayed for anchor link on hover","description":"","tags":[],"tsType":"string|false","id":"#appConfig/prose/h5/icon","default":"","type":"string"}},"default":{"icon":""},"type":"object"},"h6":{"title":"Sixth heading configuration","description":"","tags":[],"id":"#appConfig/prose/h6","properties":{"icon":{"title":"Icon displayed for anchor link on hover","description":"","tags":[],"tsType":"string|false","id":"#appConfig/prose/h6/icon","default":"","type":"string"}},"default":{"icon":""},"type":"object"}},"default":{"copyButton":{"iconCopy":"ph:copy","iconCopied":"ph:check"},"headings":{"icon":"ph:link"},"h1":{"icon":""},"h2":{"icon":""},"h3":{"icon":""},"h4":{"icon":""},"h5":{"icon":""},"h6":{"icon":""}},"type":"object"}},"default":{"prose":{"copyButton":{"iconCopy":"ph:copy","iconCopied":"ph:check"},"headings":{"icon":"ph:link"},"h1":{"icon":""},"h2":{"icon":""},"h3":{"icon":""},"h4":{"icon":""},"h5":{"icon":""},"h6":{"icon":""}}},"type":"object"},"default":{"prose":{"copyButton":{"iconCopy":"ph:copy","iconCopied":"ph:check"},"headings":{"icon":"ph:link"},"h1":{"icon":""},"h2":{"icon":""},"h3":{"icon":""},"h4":{"icon":""},"h5":{"icon":""},"h6":{"icon":""}}}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject$1(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject$1(obj[key])) {
      if (isObject$1(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {
  ["nitro:bundled:cache:content:content-index.json"]: {
    import: () => import('../raw/content-index.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"18-c6AMmqpF79c3lLwJPxXk0d15bLY\"","mtime":"2022-12-06T22:43:36.834Z"}
  },
  ["nitro:bundled:cache:content:content-navigation.json"]: {
    import: () => import('../raw/content-navigation.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"48-vCB1C+5Iwffsp6TxuYteBnuEkbo\"","mtime":"2022-12-06T22:43:36.834Z"}
  },
  ["nitro:bundled:cache:content:parsed:content:index.md"]: {
    import: () => import('../raw/index.mjs').then(r => r.default || r),
    meta: {"type":"text/markdown; charset=utf-8","etag":"\"194ec-cyrXfhihq3dNVysVINfJYV5u8xU\"","mtime":"2022-12-06T22:43:36.835Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const bundledStorage = ["/cache/content"];
for (const base of bundledStorage) {
  storage.mount(base, overlay({
    layers: [
      memory$1(),
      // TODO
      // prefixStorage(storage, base),
      prefixStorage(storage, 'assets:nitro:bundled:' + base)
    ]
  }));
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const nitro = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    const content = event?.pinceauContent || "";
    htmlContext.head.push(`<style id="pinceau" data-hydratable>${content}</style>`);
  });
});

const script = "\"use strict\";const w=window,de=document.documentElement,knownColorSchemes=[\"dark\",\"light\"],preference=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let value=preference===\"system\"?getColorScheme():preference;const forcedColorMode=de.getAttribute(\"data-color-mode-forced\");forcedColorMode&&(value=forcedColorMode),addColorScheme(value),w[\"__NUXT_COLOR_MODE__\"]={preference,value,getColorScheme,addColorScheme,removeColorScheme};function addColorScheme(e){const o=\"\"+e+\"\",t=\"theme\";de.classList?de.classList.add(o):de.className+=\" \"+o,t&&de.setAttribute(\"data-\"+t,e)}function removeColorScheme(e){const o=\"\"+e+\"\",t=\"theme\";de.classList?de.classList.remove(o):de.className=de.className.replace(new RegExp(o,\"g\"),\"\"),t&&de.removeAttribute(\"data-\"+t)}function prefersColorScheme(e){return w.matchMedia(\"(prefers-color-scheme\"+e+\")\")}function getColorScheme(){if(w.matchMedia&&prefersColorScheme(\"\").media!==\"not all\"){for(const e of knownColorSchemes)if(prefersColorScheme(\":\"+e).matches)return e}return\"light\"}\n";

const _46YGTFgVEl = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  nitro,
_46YGTFgVEl
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/__studio.json": {
    "type": "application/json",
    "etag": "\"10989-z0Zw96GOthiGMLczm/oC1Zfw2dw\"",
    "mtime": "2022-12-06T22:43:36.825Z",
    "size": 67977,
    "path": "../public/__studio.json"
  },
  "/icon.png": {
    "type": "image/png",
    "etag": "\"1da98-j1ltxNzauh50uliaHy0aihVZRH8\"",
    "mtime": "2022-12-06T22:43:32.785Z",
    "size": 121496,
    "path": "../public/icon.png"
  },
  "/logo-dark.svg": {
    "type": "image/svg+xml",
    "etag": "\"17aa-/nNJ+cS96DgKQqY8TubI6L+/72w\"",
    "mtime": "2022-12-06T22:43:32.785Z",
    "size": 6058,
    "path": "../public/logo-dark.svg"
  },
  "/logo-light.svg": {
    "type": "image/svg+xml",
    "etag": "\"17ac-i1To3oicMIR8UHA1Rki90ZmG4H4\"",
    "mtime": "2022-12-06T22:43:32.784Z",
    "size": 6060,
    "path": "../public/logo-light.svg"
  },
  "/preview-dark.png": {
    "type": "image/png",
    "etag": "\"81a1-NUah33KYN0K1t+Lwb57IwsQ9yjk\"",
    "mtime": "2022-12-06T22:43:32.784Z",
    "size": 33185,
    "path": "../public/preview-dark.png"
  },
  "/preview.png": {
    "type": "image/png",
    "etag": "\"821c-eUITggPDHE0yv0zTq77KpEZChWs\"",
    "mtime": "2022-12-06T22:43:32.784Z",
    "size": 33308,
    "path": "../public/preview.png"
  },
  "/_nuxt/Alert.5ee2027e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ac2-Y3g9RPEfgIy/ythZByHeNlOL8KA\"",
    "mtime": "2022-12-06T22:43:32.783Z",
    "size": 2754,
    "path": "../public/_nuxt/Alert.5ee2027e.css"
  },
  "/_nuxt/Alert.75bd781c.js": {
    "type": "application/javascript",
    "etag": "\"263-5/7I5CQrIxH/xn/3DvFhoD/HsK4\"",
    "mtime": "2022-12-06T22:43:32.783Z",
    "size": 611,
    "path": "../public/_nuxt/Alert.75bd781c.js"
  },
  "/_nuxt/AppLayout.e1106843.js": {
    "type": "application/javascript",
    "etag": "\"5a-xcsRHAtccpWZKZwbHfkf6wCoYMU\"",
    "mtime": "2022-12-06T22:43:32.783Z",
    "size": 90,
    "path": "../public/_nuxt/AppLayout.e1106843.js"
  },
  "/_nuxt/Badge.24779238.js": {
    "type": "application/javascript",
    "etag": "\"231-Djs0xea2Vne0wvK8+NCvmz08hnc\"",
    "mtime": "2022-12-06T22:43:32.783Z",
    "size": 561,
    "path": "../public/_nuxt/Badge.24779238.js"
  },
  "/_nuxt/Badge.50912b4a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ae3-IpacL2mhfUW3FxEv9TuW4KY4nvU\"",
    "mtime": "2022-12-06T22:43:32.783Z",
    "size": 2787,
    "path": "../public/_nuxt/Badge.50912b4a.css"
  },
  "/_nuxt/BlockHero.b08e53fb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8ef-Nsk5wd9tKHtmyK/MWblIeAJh05I\"",
    "mtime": "2022-12-06T22:43:32.783Z",
    "size": 2287,
    "path": "../public/_nuxt/BlockHero.b08e53fb.css"
  },
  "/_nuxt/BlockHero.c34d3ef3.js": {
    "type": "application/javascript",
    "etag": "\"7ba-ZNvqcDfAUiCZ3ooZAzRhMPJIemY\"",
    "mtime": "2022-12-06T22:43:32.783Z",
    "size": 1978,
    "path": "../public/_nuxt/BlockHero.c34d3ef3.js"
  },
  "/_nuxt/ButtonLink.30b6d117.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1cb-2BtF2Vsq1RGQMoH7JTesMqdiuls\"",
    "mtime": "2022-12-06T22:43:32.782Z",
    "size": 459,
    "path": "../public/_nuxt/ButtonLink.30b6d117.css"
  },
  "/_nuxt/ButtonLink.77a8b0ca.js": {
    "type": "application/javascript",
    "etag": "\"609-zpyii1GFnHu3xOpzCzCnGcZH8iE\"",
    "mtime": "2022-12-06T22:43:32.782Z",
    "size": 1545,
    "path": "../public/_nuxt/ButtonLink.77a8b0ca.js"
  },
  "/_nuxt/Callout.c17c2a99.js": {
    "type": "application/javascript",
    "etag": "\"40a-/Ox4jfTUIOGs0Vm7bhPM6O+Datk\"",
    "mtime": "2022-12-06T22:43:32.782Z",
    "size": 1034,
    "path": "../public/_nuxt/Callout.c17c2a99.js"
  },
  "/_nuxt/Callout.d172185a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d51-KKBGt/I+Qkr3Dpz/LpxR9K4agGY\"",
    "mtime": "2022-12-06T22:43:32.782Z",
    "size": 3409,
    "path": "../public/_nuxt/Callout.d172185a.css"
  },
  "/_nuxt/Card.2037d2ce.js": {
    "type": "application/javascript",
    "etag": "\"3a0-mfsm2BrJkOGnJJq5bTx5iOcdjF4\"",
    "mtime": "2022-12-06T22:43:32.782Z",
    "size": 928,
    "path": "../public/_nuxt/Card.2037d2ce.js"
  },
  "/_nuxt/Card.ff22cf2b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"394-VLsHpZBdEkkhv2ogjLO2Z8hF698\"",
    "mtime": "2022-12-06T22:43:32.781Z",
    "size": 916,
    "path": "../public/_nuxt/Card.ff22cf2b.css"
  },
  "/_nuxt/CardGrid.097da1d2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"444-/B5/veh7y7SgwPJubLeTbr9goOs\"",
    "mtime": "2022-12-06T22:43:32.781Z",
    "size": 1092,
    "path": "../public/_nuxt/CardGrid.097da1d2.css"
  },
  "/_nuxt/CardGrid.c88011d0.js": {
    "type": "application/javascript",
    "etag": "\"27a-I05uTPzusrgGd+wfZ3lmPHY+SBc\"",
    "mtime": "2022-12-06T22:43:32.781Z",
    "size": 634,
    "path": "../public/_nuxt/CardGrid.c88011d0.js"
  },
  "/_nuxt/CodeBlock.b2310eb9.js": {
    "type": "application/javascript",
    "etag": "\"1f9-ZSwz7KbFbsG1J30MXJJg69goiWg\"",
    "mtime": "2022-12-06T22:43:32.781Z",
    "size": 505,
    "path": "../public/_nuxt/CodeBlock.b2310eb9.js"
  },
  "/_nuxt/CodeBlock.e4cadaca.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d-Bx0Xxb29hd822FZyW0gdZyI/vHo\"",
    "mtime": "2022-12-06T22:43:32.781Z",
    "size": 93,
    "path": "../public/_nuxt/CodeBlock.e4cadaca.css"
  },
  "/_nuxt/CodeGroup.733e1569.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"225-hXG4JIBAEH5qcDJhGgRGvYz2nwQ\"",
    "mtime": "2022-12-06T22:43:32.780Z",
    "size": 549,
    "path": "../public/_nuxt/CodeGroup.733e1569.css"
  },
  "/_nuxt/CodeGroup.c0d2e95f.js": {
    "type": "application/javascript",
    "etag": "\"fb-YQ8sSAeS6BNEPPvrI1BnSdK5zlA\"",
    "mtime": "2022-12-06T22:43:32.780Z",
    "size": 251,
    "path": "../public/_nuxt/CodeGroup.c0d2e95f.js"
  },
  "/_nuxt/CodeGroup.vue_vue_type_style_index_0_scoped_5b9c3794_transformed_true_lang.927dfac3.js": {
    "type": "application/javascript",
    "etag": "\"43f-qlnC6koabDE8fnTNYeXYn6j1Hxs\"",
    "mtime": "2022-12-06T22:43:32.780Z",
    "size": 1087,
    "path": "../public/_nuxt/CodeGroup.vue_vue_type_style_index_0_scoped_5b9c3794_transformed_true_lang.927dfac3.js"
  },
  "/_nuxt/ContentDoc.765fbaa2.js": {
    "type": "application/javascript",
    "etag": "\"576-ig60xrDr5isDBbFYKI4lXGIDHPk\"",
    "mtime": "2022-12-06T22:43:32.780Z",
    "size": 1398,
    "path": "../public/_nuxt/ContentDoc.765fbaa2.js"
  },
  "/_nuxt/ContentList.9ee01eb0.js": {
    "type": "application/javascript",
    "etag": "\"355-iWqNpeU/qJM3JvRghMaYbWLioHs\"",
    "mtime": "2022-12-06T22:43:32.780Z",
    "size": 853,
    "path": "../public/_nuxt/ContentList.9ee01eb0.js"
  },
  "/_nuxt/ContentNavigation.5635bf0e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3bb7-q3/2NEXrHjt7SM/jY/mlYmhYODo\"",
    "mtime": "2022-12-06T22:43:32.779Z",
    "size": 15287,
    "path": "../public/_nuxt/ContentNavigation.5635bf0e.css"
  },
  "/_nuxt/ContentNavigation.820db6e5.js": {
    "type": "application/javascript",
    "etag": "\"7b12-w6Ba7aGK2jLl5JyxKleea198LrI\"",
    "mtime": "2022-12-06T22:43:32.779Z",
    "size": 31506,
    "path": "../public/_nuxt/ContentNavigation.820db6e5.js"
  },
  "/_nuxt/ContentPreviewMode.94464bfe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ca5-tNHMz8jTUO+RUHjhmttTqbF0PLI\"",
    "mtime": "2022-12-06T22:43:32.779Z",
    "size": 3237,
    "path": "../public/_nuxt/ContentPreviewMode.94464bfe.css"
  },
  "/_nuxt/ContentPreviewMode.d997095e.js": {
    "type": "application/javascript",
    "etag": "\"d3b-FrUW81sa7hRRh6As6s63slZjY1Q\"",
    "mtime": "2022-12-06T22:43:32.779Z",
    "size": 3387,
    "path": "../public/_nuxt/ContentPreviewMode.d997095e.js"
  },
  "/_nuxt/ContentQuery.3b069c55.js": {
    "type": "application/javascript",
    "etag": "\"897-mhzpXiBqeWRxzMPowAAtLMw52qc\"",
    "mtime": "2022-12-06T22:43:32.778Z",
    "size": 2199,
    "path": "../public/_nuxt/ContentQuery.3b069c55.js"
  },
  "/_nuxt/ContentRenderer.5534ee92.js": {
    "type": "application/javascript",
    "etag": "\"4cb-QK7DkOA38KjMZe96wpE5vA4+Uik\"",
    "mtime": "2022-12-06T22:43:32.778Z",
    "size": 1227,
    "path": "../public/_nuxt/ContentRenderer.5534ee92.js"
  },
  "/_nuxt/ContentRendererMarkdown.02ea67bf.js": {
    "type": "application/javascript",
    "etag": "\"5665-wna0TN00PvIaCnhxpSqk55c9LwM\"",
    "mtime": "2022-12-06T22:43:32.778Z",
    "size": 22117,
    "path": "../public/_nuxt/ContentRendererMarkdown.02ea67bf.js"
  },
  "/_nuxt/ContentSlot.89ad86a3.js": {
    "type": "application/javascript",
    "etag": "\"3c7-F3OTjc3OeiBMfO3c83dzQExWvY4\"",
    "mtime": "2022-12-06T22:43:32.778Z",
    "size": 967,
    "path": "../public/_nuxt/ContentSlot.89ad86a3.js"
  },
  "/_nuxt/CopyButton.587b4720.js": {
    "type": "application/javascript",
    "etag": "\"2d3-XPHDMO2kenXnervw/4YC7L7FPek\"",
    "mtime": "2022-12-06T22:43:32.778Z",
    "size": 723,
    "path": "../public/_nuxt/CopyButton.587b4720.js"
  },
  "/_nuxt/DocsAside.6b3b1439.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"186-PhLUJIf1iU4UyB60vR8g52cFpRM\"",
    "mtime": "2022-12-06T22:43:32.778Z",
    "size": 390,
    "path": "../public/_nuxt/DocsAside.6b3b1439.css"
  },
  "/_nuxt/DocsAside.d657d938.js": {
    "type": "application/javascript",
    "etag": "\"5f1-kM2DPG5YuTS/KtO7aA7UsebGL/8\"",
    "mtime": "2022-12-06T22:43:32.777Z",
    "size": 1521,
    "path": "../public/_nuxt/DocsAside.d657d938.js"
  },
  "/_nuxt/DocsPageBottom.8bb38a5d.js": {
    "type": "application/javascript",
    "etag": "\"344-bcZ/8SZXPLEowNM6lTNNoa8dQ8s\"",
    "mtime": "2022-12-06T22:43:32.777Z",
    "size": 836,
    "path": "../public/_nuxt/DocsPageBottom.8bb38a5d.js"
  },
  "/_nuxt/DocsPageBottom.a5fe455d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"239-DJLMTNgHl5x+L+WOsQpX8InOhp0\"",
    "mtime": "2022-12-06T22:43:32.777Z",
    "size": 569,
    "path": "../public/_nuxt/DocsPageBottom.a5fe455d.css"
  },
  "/_nuxt/DocsPageContent.621f1200.js": {
    "type": "application/javascript",
    "etag": "\"d9d-Ep1Aw/R+InIJ6Fqg6zW9/F3PJSk\"",
    "mtime": "2022-12-06T22:43:32.777Z",
    "size": 3485,
    "path": "../public/_nuxt/DocsPageContent.621f1200.js"
  },
  "/_nuxt/DocsPageContent.c4493a51.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"104f-45f+u+CPRcey/8bVM7MwBf93qSA\"",
    "mtime": "2022-12-06T22:43:32.777Z",
    "size": 4175,
    "path": "../public/_nuxt/DocsPageContent.c4493a51.css"
  },
  "/_nuxt/DocsPrevNext.5d9e1392.js": {
    "type": "application/javascript",
    "etag": "\"4fc-2Mkb/5Qqrkm95lhZB5vUphvjrBc\"",
    "mtime": "2022-12-06T22:43:32.777Z",
    "size": 1276,
    "path": "../public/_nuxt/DocsPrevNext.5d9e1392.js"
  },
  "/_nuxt/DocsPrevNext.b9a7b8b1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"55f-DPYM+6/UmcvE3gXCocxQ7gDiD6E\"",
    "mtime": "2022-12-06T22:43:32.777Z",
    "size": 1375,
    "path": "../public/_nuxt/DocsPrevNext.b9a7b8b1.css"
  },
  "/_nuxt/DocsToc.1acfa7f1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"155-n8tY/4elGEIgh0PTn6Safjo93ZY\"",
    "mtime": "2022-12-06T22:43:32.776Z",
    "size": 341,
    "path": "../public/_nuxt/DocsToc.1acfa7f1.css"
  },
  "/_nuxt/DocsToc.6eb5efba.js": {
    "type": "application/javascript",
    "etag": "\"35a-UOO+YY9kKD12A7u9ZeK+PXZjAVU\"",
    "mtime": "2022-12-06T22:43:32.776Z",
    "size": 858,
    "path": "../public/_nuxt/DocsToc.6eb5efba.js"
  },
  "/_nuxt/DocsTocLinks.4249941f.js": {
    "type": "application/javascript",
    "etag": "\"677-F6Ocz9r2boB4SOttfnRX/B7jfJo\"",
    "mtime": "2022-12-06T22:43:32.776Z",
    "size": 1655,
    "path": "../public/_nuxt/DocsTocLinks.4249941f.js"
  },
  "/_nuxt/DocsTocLinks.fe29d1a5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2ca-AZQTZthR8gPBJWUqIT6EzKiX9dg\"",
    "mtime": "2022-12-06T22:43:32.776Z",
    "size": 714,
    "path": "../public/_nuxt/DocsTocLinks.fe29d1a5.css"
  },
  "/_nuxt/DocumentDrivenEmpty.3fe2e731.js": {
    "type": "application/javascript",
    "etag": "\"120-xaZM9d+8cr4xcF9afPXA9JAqGl4\"",
    "mtime": "2022-12-06T22:43:32.776Z",
    "size": 288,
    "path": "../public/_nuxt/DocumentDrivenEmpty.3fe2e731.js"
  },
  "/_nuxt/DocumentDrivenNotFound.2dc65275.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8ae-LZbtURn7KU1/a6UFjRpr/zDN90U\"",
    "mtime": "2022-12-06T22:43:32.775Z",
    "size": 2222,
    "path": "../public/_nuxt/DocumentDrivenNotFound.2dc65275.css"
  },
  "/_nuxt/DocumentDrivenNotFound.445a4df6.js": {
    "type": "application/javascript",
    "etag": "\"3b6-a4GY1Ir0+voi85rowxqyaAyfOyo\"",
    "mtime": "2022-12-06T22:43:32.775Z",
    "size": 950,
    "path": "../public/_nuxt/DocumentDrivenNotFound.445a4df6.js"
  },
  "/_nuxt/EditOnLink.9f6457b3.js": {
    "type": "application/javascript",
    "etag": "\"b2-Nnunl6+1ZcQjQYlW9YdJldrsvfA\"",
    "mtime": "2022-12-06T22:43:32.775Z",
    "size": 178,
    "path": "../public/_nuxt/EditOnLink.9f6457b3.js"
  },
  "/_nuxt/EditOnLink.vue_vue_type_script_lang.2a688be2.js": {
    "type": "application/javascript",
    "etag": "\"796-NiJKx0Ig+jQAyGBozvVuwCcrQJ0\"",
    "mtime": "2022-12-06T22:43:32.775Z",
    "size": 1942,
    "path": "../public/_nuxt/EditOnLink.vue_vue_type_script_lang.2a688be2.js"
  },
  "/_nuxt/Ellipsis.0b25b02e.js": {
    "type": "application/javascript",
    "etag": "\"451-J64yqtEbjzb5hhumSJgMFsIz8HQ\"",
    "mtime": "2022-12-06T22:43:32.775Z",
    "size": 1105,
    "path": "../public/_nuxt/Ellipsis.0b25b02e.js"
  },
  "/_nuxt/Ellipsis.7dd2380f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ca-aqBUWcD+2uMunx2fJ22nBgcXngw\"",
    "mtime": "2022-12-06T22:43:32.775Z",
    "size": 458,
    "path": "../public/_nuxt/Ellipsis.7dd2380f.css"
  },
  "/_nuxt/IconCodeSandBox.fcd12bd4.js": {
    "type": "application/javascript",
    "etag": "\"1a9-2jI7iNPvYfjkCZp5IF6mZpTLpVI\"",
    "mtime": "2022-12-06T22:43:32.774Z",
    "size": 425,
    "path": "../public/_nuxt/IconCodeSandBox.fcd12bd4.js"
  },
  "/_nuxt/IconDocus.74409d5b.js": {
    "type": "application/javascript",
    "etag": "\"31a-bSowzFXA7AI1UhXGtYNA5qDV2Go\"",
    "mtime": "2022-12-06T22:43:32.774Z",
    "size": 794,
    "path": "../public/_nuxt/IconDocus.74409d5b.js"
  },
  "/_nuxt/IconNuxt.b9e6502c.js": {
    "type": "application/javascript",
    "etag": "\"308-MiutVUggkx0sDF8iO5wGrdp0gSk\"",
    "mtime": "2022-12-06T22:43:32.774Z",
    "size": 776,
    "path": "../public/_nuxt/IconNuxt.b9e6502c.js"
  },
  "/_nuxt/IconNuxtContent.65e7e021.js": {
    "type": "application/javascript",
    "etag": "\"4a5-M7Xe37XVjSK0RUMO4ZmeBv+kBUk\"",
    "mtime": "2022-12-06T22:43:32.774Z",
    "size": 1189,
    "path": "../public/_nuxt/IconNuxtContent.65e7e021.js"
  },
  "/_nuxt/IconNuxtLabs.8cdeded8.js": {
    "type": "application/javascript",
    "etag": "\"566-Mfv7sNjzlQZzwUsQuZ9dmspbQOc\"",
    "mtime": "2022-12-06T22:43:32.774Z",
    "size": 1382,
    "path": "../public/_nuxt/IconNuxtLabs.8cdeded8.js"
  },
  "/_nuxt/IconNuxtStudio.62c227bc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"66-wWbOMIbQerWVgdQqRY2l3b9gucU\"",
    "mtime": "2022-12-06T22:43:32.774Z",
    "size": 102,
    "path": "../public/_nuxt/IconNuxtStudio.62c227bc.css"
  },
  "/_nuxt/IconNuxtStudio.634c25a4.js": {
    "type": "application/javascript",
    "etag": "\"617-vMSGCXUa2zvqOUlWuR4Vsp/LrYc\"",
    "mtime": "2022-12-06T22:43:32.774Z",
    "size": 1559,
    "path": "../public/_nuxt/IconNuxtStudio.634c25a4.js"
  },
  "/_nuxt/IconStackBlitz.99ee5fd3.js": {
    "type": "application/javascript",
    "etag": "\"160-+gPGSZL5JW0GtgIdrDUk7rjqWgI\"",
    "mtime": "2022-12-06T22:43:32.773Z",
    "size": 352,
    "path": "../public/_nuxt/IconStackBlitz.99ee5fd3.js"
  },
  "/_nuxt/IconVueTelescope.0cc87adb.js": {
    "type": "application/javascript",
    "etag": "\"2cf-sf9dllXO0KCoqnt0/ETOpAGeo0Q\"",
    "mtime": "2022-12-06T22:43:32.773Z",
    "size": 719,
    "path": "../public/_nuxt/IconVueTelescope.0cc87adb.js"
  },
  "/_nuxt/List.45aa062b.js": {
    "type": "application/javascript",
    "etag": "\"f7-X7PUK3ayilXSFVw9ErLQ80ijLlk\"",
    "mtime": "2022-12-06T22:43:32.773Z",
    "size": 247,
    "path": "../public/_nuxt/List.45aa062b.js"
  },
  "/_nuxt/List.7ec09818.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"278-RXfDNstSlr3J37Gh+BmWtIc+8U4\"",
    "mtime": "2022-12-06T22:43:32.773Z",
    "size": 632,
    "path": "../public/_nuxt/List.7ec09818.css"
  },
  "/_nuxt/List.vue_vue_type_style_index_0_scoped_f077aa3d_transformed_true_lang.730f4709.js": {
    "type": "application/javascript",
    "etag": "\"32a-ikp0oP6f7L8jeEiSeVjpGPblPaw\"",
    "mtime": "2022-12-06T22:43:32.773Z",
    "size": 810,
    "path": "../public/_nuxt/List.vue_vue_type_style_index_0_scoped_f077aa3d_transformed_true_lang.730f4709.js"
  },
  "/_nuxt/Markdown.167ab9ff.js": {
    "type": "application/javascript",
    "etag": "\"149-nwILuBcYV/peS1uoGv8aN/G9Urc\"",
    "mtime": "2022-12-06T22:43:32.773Z",
    "size": 329,
    "path": "../public/_nuxt/Markdown.167ab9ff.js"
  },
  "/_nuxt/NuxtImg.e0b7b822.js": {
    "type": "application/javascript",
    "etag": "\"ac-bLUOn9oZvosREWawzqFYnjpCI/A\"",
    "mtime": "2022-12-06T22:43:32.773Z",
    "size": 172,
    "path": "../public/_nuxt/NuxtImg.e0b7b822.js"
  },
  "/_nuxt/NuxtImg.vue_vue_type_script_lang.0e945d24.js": {
    "type": "application/javascript",
    "etag": "\"236-EfqVpffw1z9VGLAh3NV5+19P1DE\"",
    "mtime": "2022-12-06T22:43:32.772Z",
    "size": 566,
    "path": "../public/_nuxt/NuxtImg.vue_vue_type_script_lang.0e945d24.js"
  },
  "/_nuxt/Props.0c03bad1.js": {
    "type": "application/javascript",
    "etag": "\"c2a-f2ETWf6gPpy8pIn+9bnEHmWwWU0\"",
    "mtime": "2022-12-06T22:43:32.772Z",
    "size": 3114,
    "path": "../public/_nuxt/Props.0c03bad1.js"
  },
  "/_nuxt/ProseA.62024f9c.js": {
    "type": "application/javascript",
    "etag": "\"224-RhSkzXJHNbaQNNd4UbFC+BHbLGE\"",
    "mtime": "2022-12-06T22:43:32.772Z",
    "size": 548,
    "path": "../public/_nuxt/ProseA.62024f9c.js"
  },
  "/_nuxt/ProseA.64ec70fd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5aa-Gdd7e3a8Q4XFz8btcHRM3bd5kRo\"",
    "mtime": "2022-12-06T22:43:32.772Z",
    "size": 1450,
    "path": "../public/_nuxt/ProseA.64ec70fd.css"
  },
  "/_nuxt/ProseBlockquote.202c0acd.js": {
    "type": "application/javascript",
    "etag": "\"156-5t9HvrCxfToDy4uffV/if25XKAs\"",
    "mtime": "2022-12-06T22:43:32.772Z",
    "size": 342,
    "path": "../public/_nuxt/ProseBlockquote.202c0acd.js"
  },
  "/_nuxt/ProseBlockquote.29c52c64.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e1-Chsq42wwviixXiP3kOGLwK5di20\"",
    "mtime": "2022-12-06T22:43:32.772Z",
    "size": 481,
    "path": "../public/_nuxt/ProseBlockquote.29c52c64.css"
  },
  "/_nuxt/ProseCode.6c49c522.js": {
    "type": "application/javascript",
    "etag": "\"39e-XIAJqVYZedCwtprPYczUDB/1cQY\"",
    "mtime": "2022-12-06T22:43:32.771Z",
    "size": 926,
    "path": "../public/_nuxt/ProseCode.6c49c522.js"
  },
  "/_nuxt/ProseCode.6f021032.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bec-OVL55+jzc3HG1x0wDlXhI3E9pKI\"",
    "mtime": "2022-12-06T22:43:32.771Z",
    "size": 3052,
    "path": "../public/_nuxt/ProseCode.6f021032.css"
  },
  "/_nuxt/ProseCodeCopyButton.14ab3734.js": {
    "type": "application/javascript",
    "etag": "\"4ad-HsGyUR5kXcERACtFIVkS8efoS88\"",
    "mtime": "2022-12-06T22:43:32.771Z",
    "size": 1197,
    "path": "../public/_nuxt/ProseCodeCopyButton.14ab3734.js"
  },
  "/_nuxt/ProseCodeInline.654c05dc.js": {
    "type": "application/javascript",
    "etag": "\"e9-26gB/yquKTumUetiKxpyR5o2idc\"",
    "mtime": "2022-12-06T22:43:32.771Z",
    "size": 233,
    "path": "../public/_nuxt/ProseCodeInline.654c05dc.js"
  },
  "/_nuxt/ProseCodeInline.8dac291c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"480-1ZrPTzTdbqDJ7aIqe6U/IrjYS6w\"",
    "mtime": "2022-12-06T22:43:32.771Z",
    "size": 1152,
    "path": "../public/_nuxt/ProseCodeInline.8dac291c.css"
  },
  "/_nuxt/ProseEm.08155f3c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"27-NOCXTJ1M/R2RMdRtz+HIelag4Cg\"",
    "mtime": "2022-12-06T22:43:32.770Z",
    "size": 39,
    "path": "../public/_nuxt/ProseEm.08155f3c.css"
  },
  "/_nuxt/ProseEm.90f4cb3c.js": {
    "type": "application/javascript",
    "etag": "\"146-D8cxEqC2LbfhsyH0Bn6Gdy9jRnw\"",
    "mtime": "2022-12-06T22:43:32.770Z",
    "size": 326,
    "path": "../public/_nuxt/ProseEm.90f4cb3c.js"
  },
  "/_nuxt/ProseH1.0d18c3ea.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1af-Cke7b4hL05DqaSvcmKk9zd3jzwQ\"",
    "mtime": "2022-12-06T22:43:32.770Z",
    "size": 431,
    "path": "../public/_nuxt/ProseH1.0d18c3ea.css"
  },
  "/_nuxt/ProseH1.91afd230.js": {
    "type": "application/javascript",
    "etag": "\"312-LbUNpEkX7O86CC807x9e0zhki/E\"",
    "mtime": "2022-12-06T22:43:32.770Z",
    "size": 786,
    "path": "../public/_nuxt/ProseH1.91afd230.js"
  },
  "/_nuxt/ProseH2.952dc7f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1af-YA2mO0UbCWe14rQPtFk9aEGYHMc\"",
    "mtime": "2022-12-06T22:43:32.770Z",
    "size": 431,
    "path": "../public/_nuxt/ProseH2.952dc7f8.css"
  },
  "/_nuxt/ProseH2.fb61e9f2.js": {
    "type": "application/javascript",
    "etag": "\"312-wjWFqxikAmZ63f3+1BOh2d1Hs5Y\"",
    "mtime": "2022-12-06T22:43:32.769Z",
    "size": 786,
    "path": "../public/_nuxt/ProseH2.fb61e9f2.js"
  },
  "/_nuxt/ProseH3.46398f99.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1af-uqFx0CBXbymZiEaA+t/+YBGOq/0\"",
    "mtime": "2022-12-06T22:43:32.769Z",
    "size": 431,
    "path": "../public/_nuxt/ProseH3.46398f99.css"
  },
  "/_nuxt/ProseH3.885b7fb8.js": {
    "type": "application/javascript",
    "etag": "\"312-Zch5CC0eC2rCHON8vy8spxdU2XA\"",
    "mtime": "2022-12-06T22:43:32.769Z",
    "size": 786,
    "path": "../public/_nuxt/ProseH3.885b7fb8.js"
  },
  "/_nuxt/ProseH4.638a3c01.js": {
    "type": "application/javascript",
    "etag": "\"312-IzYdObOwTa21FQ+07tpX0PmUiYs\"",
    "mtime": "2022-12-06T22:43:32.769Z",
    "size": 786,
    "path": "../public/_nuxt/ProseH4.638a3c01.js"
  },
  "/_nuxt/ProseH4.d17f59ab.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1af-gPN6t3qVkwn+RNnwgBmmK9roAa8\"",
    "mtime": "2022-12-06T22:43:32.769Z",
    "size": 431,
    "path": "../public/_nuxt/ProseH4.d17f59ab.css"
  },
  "/_nuxt/ProseH5.64397514.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"180-WADS6zuZQWEu4OK0a0J1Qc2OHiY\"",
    "mtime": "2022-12-06T22:43:32.769Z",
    "size": 384,
    "path": "../public/_nuxt/ProseH5.64397514.css"
  },
  "/_nuxt/ProseH5.afa41de2.js": {
    "type": "application/javascript",
    "etag": "\"312-IblzVy5j0GoamXY37F/KfaNEW2k\"",
    "mtime": "2022-12-06T22:43:32.769Z",
    "size": 786,
    "path": "../public/_nuxt/ProseH5.afa41de2.js"
  },
  "/_nuxt/ProseH6.79d03471.js": {
    "type": "application/javascript",
    "etag": "\"312-xYPJcsryuDkv9Omtjykdf7/uiRo\"",
    "mtime": "2022-12-06T22:43:32.769Z",
    "size": 786,
    "path": "../public/_nuxt/ProseH6.79d03471.js"
  },
  "/_nuxt/ProseH6.f7eb2e7a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"180-r9hhh8riXiQf6timfLfQUGNRCzg\"",
    "mtime": "2022-12-06T22:43:32.768Z",
    "size": 384,
    "path": "../public/_nuxt/ProseH6.f7eb2e7a.css"
  },
  "/_nuxt/ProseHr.7f3ea8bf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d1-QczOjtYD7tFnpyL79rLo88j2ny0\"",
    "mtime": "2022-12-06T22:43:32.768Z",
    "size": 209,
    "path": "../public/_nuxt/ProseHr.7f3ea8bf.css"
  },
  "/_nuxt/ProseHr.ded3a097.js": {
    "type": "application/javascript",
    "etag": "\"115-ItuKTjzp/8VVDranULXfFVtm7xs\"",
    "mtime": "2022-12-06T22:43:32.768Z",
    "size": 277,
    "path": "../public/_nuxt/ProseHr.ded3a097.js"
  },
  "/_nuxt/ProseImg.1b12ee83.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"35-NMB1Bf4vbd9tg0KNcgShP0KhFGg\"",
    "mtime": "2022-12-06T22:43:32.768Z",
    "size": 53,
    "path": "../public/_nuxt/ProseImg.1b12ee83.css"
  },
  "/_nuxt/ProseImg.9c365819.js": {
    "type": "application/javascript",
    "etag": "\"22f-g1qKILxYwT2APcLBiQMBHOXhwZc\"",
    "mtime": "2022-12-06T22:43:32.768Z",
    "size": 559,
    "path": "../public/_nuxt/ProseImg.9c365819.js"
  },
  "/_nuxt/ProseLi.56d7d461.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6b-cMTRZoFGy4JWehWIO586DsG3RUg\"",
    "mtime": "2022-12-06T22:43:32.768Z",
    "size": 107,
    "path": "../public/_nuxt/ProseLi.56d7d461.css"
  },
  "/_nuxt/ProseLi.765aa273.js": {
    "type": "application/javascript",
    "etag": "\"146-EsfulKRDqwbaipcIN+lQZQh2GSE\"",
    "mtime": "2022-12-06T22:43:32.767Z",
    "size": 326,
    "path": "../public/_nuxt/ProseLi.765aa273.js"
  },
  "/_nuxt/ProseOl.54037390.js": {
    "type": "application/javascript",
    "etag": "\"146-acleuCkk1CRxbs0xhLsEBsP9Ics\"",
    "mtime": "2022-12-06T22:43:32.767Z",
    "size": 326,
    "path": "../public/_nuxt/ProseOl.54037390.js"
  },
  "/_nuxt/ProseOl.ca2082aa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"103-urqZHbeB1yRVYk6NAMOH2O+VrWQ\"",
    "mtime": "2022-12-06T22:43:32.767Z",
    "size": 259,
    "path": "../public/_nuxt/ProseOl.ca2082aa.css"
  },
  "/_nuxt/ProseP.183eae26.js": {
    "type": "application/javascript",
    "etag": "\"144-2ci76hKfScCeb84+8pvEo/4PfpE\"",
    "mtime": "2022-12-06T22:43:32.767Z",
    "size": 324,
    "path": "../public/_nuxt/ProseP.183eae26.js"
  },
  "/_nuxt/ProseP.593226fa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ca-FhBAmS4fIaaIk6hU8jPrvW1Uvb0\"",
    "mtime": "2022-12-06T22:43:32.767Z",
    "size": 202,
    "path": "../public/_nuxt/ProseP.593226fa.css"
  },
  "/_nuxt/ProseStrong.a75a4cd1.js": {
    "type": "application/javascript",
    "etag": "\"14e-1fKewQ6acxVwOw5JMZ/Gmj+EOnQ\"",
    "mtime": "2022-12-06T22:43:32.767Z",
    "size": 334,
    "path": "../public/_nuxt/ProseStrong.a75a4cd1.js"
  },
  "/_nuxt/ProseStrong.c5091eab.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"45-VV2KPK58xLTqVDGCgdtVTWEVW1M\"",
    "mtime": "2022-12-06T22:43:32.766Z",
    "size": 69,
    "path": "../public/_nuxt/ProseStrong.c5091eab.css"
  },
  "/_nuxt/ProseTable.0f2fcd74.js": {
    "type": "application/javascript",
    "etag": "\"118-dEegqp9bCYbQmDSLLAO+WJGPduc\"",
    "mtime": "2022-12-06T22:43:32.766Z",
    "size": 280,
    "path": "../public/_nuxt/ProseTable.0f2fcd74.js"
  },
  "/_nuxt/ProseTable.e86987a4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13f-Kwe7JVMzUIPM+5F1EhQHZIv0HkQ\"",
    "mtime": "2022-12-06T22:43:32.766Z",
    "size": 319,
    "path": "../public/_nuxt/ProseTable.e86987a4.css"
  },
  "/_nuxt/ProseTbody.78c4dec7.js": {
    "type": "application/javascript",
    "etag": "\"bd-rbeWd2sBB2HXTBKYZsZlhF9ZaHs\"",
    "mtime": "2022-12-06T22:43:32.766Z",
    "size": 189,
    "path": "../public/_nuxt/ProseTbody.78c4dec7.js"
  },
  "/_nuxt/ProseTd.1f05f416.js": {
    "type": "application/javascript",
    "etag": "\"e7-Wb0q1D+N1zzuCQE2Y3wWN9rmZe8\"",
    "mtime": "2022-12-06T22:43:32.766Z",
    "size": 231,
    "path": "../public/_nuxt/ProseTd.1f05f416.js"
  },
  "/_nuxt/ProseTd.8bba0d9d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ab-RC6WmEuY+jNA+HrLefvZ/ZKb6NU\"",
    "mtime": "2022-12-06T22:43:32.766Z",
    "size": 171,
    "path": "../public/_nuxt/ProseTd.8bba0d9d.css"
  },
  "/_nuxt/ProseTh.10d8ddf1.js": {
    "type": "application/javascript",
    "etag": "\"e7-zGLeBCSTpcK0o4N7f1rYFxskjRI\"",
    "mtime": "2022-12-06T22:43:32.765Z",
    "size": 231,
    "path": "../public/_nuxt/ProseTh.10d8ddf1.js"
  },
  "/_nuxt/ProseTh.c149ea7b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11d-7UqQ8pimmZhpG41ujpFsNgT/Tpw\"",
    "mtime": "2022-12-06T22:43:32.765Z",
    "size": 285,
    "path": "../public/_nuxt/ProseTh.c149ea7b.css"
  },
  "/_nuxt/ProseThead.78551253.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bc-8zggL06p2RLRl67Ri+yp0giAhJY\"",
    "mtime": "2022-12-06T22:43:32.765Z",
    "size": 188,
    "path": "../public/_nuxt/ProseThead.78551253.css"
  },
  "/_nuxt/ProseThead.adeca5ef.js": {
    "type": "application/javascript",
    "etag": "\"ea-X5ReeUrkzq22bDaQjBXy629xUXE\"",
    "mtime": "2022-12-06T22:43:32.765Z",
    "size": 234,
    "path": "../public/_nuxt/ProseThead.adeca5ef.js"
  },
  "/_nuxt/ProseTr.71b8301d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a7-e/AYUl4hUlLFE3eJlymSbLw1ExI\"",
    "mtime": "2022-12-06T22:43:32.764Z",
    "size": 167,
    "path": "../public/_nuxt/ProseTr.71b8301d.css"
  },
  "/_nuxt/ProseTr.c2e5f2ec.js": {
    "type": "application/javascript",
    "etag": "\"e7-G2pLfavzgHblC+ElqpBOSbHe614\"",
    "mtime": "2022-12-06T22:43:32.764Z",
    "size": 231,
    "path": "../public/_nuxt/ProseTr.c2e5f2ec.js"
  },
  "/_nuxt/ProseUl.a37a0bf5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"103-lVx4jz6PG0F6T5WgLlGVVqMM2yY\"",
    "mtime": "2022-12-06T22:43:32.764Z",
    "size": 259,
    "path": "../public/_nuxt/ProseUl.a37a0bf5.css"
  },
  "/_nuxt/ProseUl.d54e2451.js": {
    "type": "application/javascript",
    "etag": "\"146-a+RpYYKa+4sJGm2jl+tt7ZV9GLU\"",
    "mtime": "2022-12-06T22:43:32.764Z",
    "size": 326,
    "path": "../public/_nuxt/ProseUl.d54e2451.js"
  },
  "/_nuxt/Sandbox.35c47b76.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"199-cIRFX5vlvvLIKxxa4INE0wwqSQs\"",
    "mtime": "2022-12-06T22:43:32.763Z",
    "size": 409,
    "path": "../public/_nuxt/Sandbox.35c47b76.css"
  },
  "/_nuxt/Sandbox.a38c3645.js": {
    "type": "application/javascript",
    "etag": "\"66e-WeFDLqodlfRZntDp9Rekbx4KVEQ\"",
    "mtime": "2022-12-06T22:43:32.763Z",
    "size": 1646,
    "path": "../public/_nuxt/Sandbox.a38c3645.js"
  },
  "/_nuxt/SourceLink.be07808e.js": {
    "type": "application/javascript",
    "etag": "\"14b-6+LTYRVnFXOwUwd4u3P/fRgQoMc\"",
    "mtime": "2022-12-06T22:43:32.763Z",
    "size": 331,
    "path": "../public/_nuxt/SourceLink.be07808e.js"
  },
  "/_nuxt/TabsHeader.4748eed5.js": {
    "type": "application/javascript",
    "etag": "\"481-vXKmHsjraTTGRCd3y+618l03VmU\"",
    "mtime": "2022-12-06T22:43:32.763Z",
    "size": 1153,
    "path": "../public/_nuxt/TabsHeader.4748eed5.js"
  },
  "/_nuxt/TabsHeader.dfc736bf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"697-CVK/OkUz9z3ctNRS3cAX9g5k23U\"",
    "mtime": "2022-12-06T22:43:32.762Z",
    "size": 1687,
    "path": "../public/_nuxt/TabsHeader.dfc736bf.css"
  },
  "/_nuxt/Terminal.368bdeaa.js": {
    "type": "application/javascript",
    "etag": "\"49b-WQhy4EdIjpe2dm87zrMpzFv9vI0\"",
    "mtime": "2022-12-06T22:43:32.762Z",
    "size": 1179,
    "path": "../public/_nuxt/Terminal.368bdeaa.js"
  },
  "/_nuxt/Terminal.e516d05e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"955-WWSyv4oZv6PRSv4ZlC/M9ijs2mQ\"",
    "mtime": "2022-12-06T22:43:32.762Z",
    "size": 2389,
    "path": "../public/_nuxt/Terminal.e516d05e.css"
  },
  "/_nuxt/VideoPlayer.9965c212.js": {
    "type": "application/javascript",
    "etag": "\"7cc-aDnNeG3TfWzKPV6/ysGSxpMmeeg\"",
    "mtime": "2022-12-06T22:43:32.761Z",
    "size": 1996,
    "path": "../public/_nuxt/VideoPlayer.9965c212.js"
  },
  "/_nuxt/VideoPlayer.e2296f21.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5ae-ghBYKA63UNWF+O4/hx/uW+DAl74\"",
    "mtime": "2022-12-06T22:43:32.761Z",
    "size": 1454,
    "path": "../public/_nuxt/VideoPlayer.e2296f21.css"
  },
  "/_nuxt/VoltaBoard.13b75625.js": {
    "type": "application/javascript",
    "etag": "\"183-ZOlvMywKsFGYUv0OmV4lMt5XflQ\"",
    "mtime": "2022-12-06T22:43:32.760Z",
    "size": 387,
    "path": "../public/_nuxt/VoltaBoard.13b75625.js"
  },
  "/_nuxt/VoltaBoard.412c8322.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1fc-+BWOvqmssUhw41VdmfB3W4rNGiw\"",
    "mtime": "2022-12-06T22:43:32.760Z",
    "size": 508,
    "path": "../public/_nuxt/VoltaBoard.412c8322.css"
  },
  "/_nuxt/client-db.662f7d79.js": {
    "type": "application/javascript",
    "etag": "\"4df3-OH+R9+zbA6p0ubn5QHf9gZzMGt0\"",
    "mtime": "2022-12-06T22:43:32.760Z",
    "size": 19955,
    "path": "../public/_nuxt/client-db.662f7d79.js"
  },
  "/_nuxt/default.38485a35.js": {
    "type": "application/javascript",
    "etag": "\"503-HI84aB0uRWluMADF8RykZPl3sKY\"",
    "mtime": "2022-12-06T22:43:32.759Z",
    "size": 1283,
    "path": "../public/_nuxt/default.38485a35.js"
  },
  "/_nuxt/document-driven.706a34bb.js": {
    "type": "application/javascript",
    "etag": "\"3f2-wnysgC4/76NIYPAN8CkyC52XLFI\"",
    "mtime": "2022-12-06T22:43:32.759Z",
    "size": 1010,
    "path": "../public/_nuxt/document-driven.706a34bb.js"
  },
  "/_nuxt/entry.a3eeb5c2.js": {
    "type": "application/javascript",
    "etag": "\"52d68-4rWKUK6xpqUNoOwey+p2R281Hb0\"",
    "mtime": "2022-12-06T22:43:32.759Z",
    "size": 339304,
    "path": "../public/_nuxt/entry.a3eeb5c2.js"
  },
  "/_nuxt/entry.ec66a7af.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7b30-4bSOz4XxN1VTeEAmhSdDSjXMAN0\"",
    "mtime": "2022-12-06T22:43:32.758Z",
    "size": 31536,
    "path": "../public/_nuxt/entry.ec66a7af.css"
  },
  "/_nuxt/error-404.8b92ce39.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1021-WiYdc8h9tTxynTiXx5Xl0k6/vQw\"",
    "mtime": "2022-12-06T22:43:32.758Z",
    "size": 4129,
    "path": "../public/_nuxt/error-404.8b92ce39.css"
  },
  "/_nuxt/error-404.fe7913c5.js": {
    "type": "application/javascript",
    "etag": "\"8a9-ZNrsO9bBvchVgOT7xopY3ETbY08\"",
    "mtime": "2022-12-06T22:43:32.758Z",
    "size": 2217,
    "path": "../public/_nuxt/error-404.fe7913c5.js"
  },
  "/_nuxt/error-500.7f5dde77.js": {
    "type": "application/javascript",
    "etag": "\"757-OwjIbUDWHYwZE4sNQToFZgP6ntM\"",
    "mtime": "2022-12-06T22:43:32.758Z",
    "size": 1879,
    "path": "../public/_nuxt/error-500.7f5dde77.js"
  },
  "/_nuxt/error-500.fb0c9a57.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"89f-vOc3DZlhsA1JRA9Oi/mv9bO8Ja0\"",
    "mtime": "2022-12-06T22:43:32.757Z",
    "size": 2207,
    "path": "../public/_nuxt/error-500.fb0c9a57.css"
  },
  "/_nuxt/error-component.52f38607.js": {
    "type": "application/javascript",
    "etag": "\"475-R+IDceOMpsU0TkXw6WHKpNINBf0\"",
    "mtime": "2022-12-06T22:43:32.757Z",
    "size": 1141,
    "path": "../public/_nuxt/error-component.52f38607.js"
  },
  "/_nuxt/index.47f399c2.js": {
    "type": "application/javascript",
    "etag": "\"d95-/kkvv9mt7Vr5s6nqZqMiIhkJ2A8\"",
    "mtime": "2022-12-06T22:43:32.757Z",
    "size": 3477,
    "path": "../public/_nuxt/index.47f399c2.js"
  },
  "/_nuxt/index.d304a3a2.js": {
    "type": "application/javascript",
    "etag": "\"8af0-/jsGCr6QnOMUX7FSbk75ITyhETs\"",
    "mtime": "2022-12-06T22:43:32.757Z",
    "size": 35568,
    "path": "../public/_nuxt/index.d304a3a2.js"
  },
  "/_nuxt/layout.8b1c6f3c.js": {
    "type": "application/javascript",
    "etag": "\"294-0bgUS9XZ6cZ85x9HNUpfMMY00fU\"",
    "mtime": "2022-12-06T22:43:32.756Z",
    "size": 660,
    "path": "../public/_nuxt/layout.8b1c6f3c.js"
  },
  "/_nuxt/page.0de4ab20.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"78-zZW/sslwMPmXtBQnWL6RaSNcsrQ\"",
    "mtime": "2022-12-06T22:43:32.756Z",
    "size": 120,
    "path": "../public/_nuxt/page.0de4ab20.css"
  },
  "/_nuxt/page.ea49e57a.js": {
    "type": "application/javascript",
    "etag": "\"1ff-EIs9ufcmMZ51P26arXrNinplW6s\"",
    "mtime": "2022-12-06T22:43:32.756Z",
    "size": 511,
    "path": "../public/_nuxt/page.ea49e57a.js"
  },
  "/_nuxt/useStudio.66729e13.js": {
    "type": "application/javascript",
    "etag": "\"870-+4heZCMtuDrHzomld7qBgco3WNY\"",
    "mtime": "2022-12-06T22:43:32.756Z",
    "size": 2160,
    "path": "../public/_nuxt/useStudio.66729e13.js"
  },
  "/_nuxt/web-socket.7df6f879.js": {
    "type": "application/javascript",
    "etag": "\"32b-iEz19EBlPk3Ls9gGtO5kFHEXw5I\"",
    "mtime": "2022-12-06T22:43:32.756Z",
    "size": 811,
    "path": "../public/_nuxt/web-socket.7df6f879.js"
  },
  "/_nuxt/welcome.ff526085.js": {
    "type": "application/javascript",
    "etag": "\"18750-EhwGcoBdwKad8iI0hIA01FUIhXI\"",
    "mtime": "2022-12-06T22:43:32.755Z",
    "size": 100176,
    "path": "../public/_nuxt/welcome.ff526085.js"
  },
  "/api/_content/cache.json": {
    "type": "application/json",
    "etag": "\"19561-+6J5EElRTNmcctkqv8RO69qbAhQ\"",
    "mtime": "2022-12-06T22:43:36.492Z",
    "size": 103777,
    "path": "../public/api/_content/cache.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

var version$1 = "0.3.3";

const components = {
  "Logo": {
    "mode": "all",
    "prefetch": false,
    "preload": false,
    "filePath": "/components/Logo.vue",
    "pascalName": "Logo",
    "kebabName": "logo",
    "chunkName": "components/logo",
    "shortPath": "components/Logo.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/components/Logo.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppFooter": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "pascalName": "AppFooter",
    "kebabName": "app-footer",
    "chunkName": "components/app-footer",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "pascalName": "AppHeader",
    "kebabName": "app-header",
    "chunkName": "components/app-header",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderDialog": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "pascalName": "AppHeaderDialog",
    "kebabName": "app-header-dialog",
    "chunkName": "components/app-header-dialog",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderLogo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "pascalName": "AppHeaderLogo",
    "kebabName": "app-header-logo",
    "chunkName": "components/app-header-logo",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "pascalName": "AppHeaderNavigation",
    "kebabName": "app-header-navigation",
    "chunkName": "components/app-header-navigation",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "pascalName": "AppLayout",
    "kebabName": "app-layout",
    "chunkName": "components/app-layout",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "meta": {
      "props": [
        {
          "name": "padded",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "true"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "padded",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "AppLoadingBar": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "pascalName": "AppLoadingBar",
    "kebabName": "app-loading-bar",
    "chunkName": "components/app-loading-bar",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "meta": {
      "props": [
        {
          "name": "throttle",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "200"
        },
        {
          "name": "duration",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "2000"
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "3"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppSearch": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "pascalName": "AppSearch",
    "kebabName": "app-search",
    "chunkName": "components/app-search",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppSocialIcons": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "pascalName": "AppSocialIcons",
    "kebabName": "app-social-icons",
    "chunkName": "components/app-social-icons",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocumentDrivenNotFound": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "pascalName": "DocumentDrivenNotFound",
    "kebabName": "document-driven-not-found",
    "chunkName": "components/document-driven-not-found",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ThemeSelect": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "pascalName": "ThemeSelect",
    "kebabName": "theme-select",
    "chunkName": "components/theme-select",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAside": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "pascalName": "DocsAside",
    "kebabName": "docs-aside",
    "chunkName": "components/docs-aside",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAsideTree": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "pascalName": "DocsAsideTree",
    "kebabName": "docs-aside-tree",
    "chunkName": "components/docs-aside-tree",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "meta": {
      "props": [
        {
          "name": "links",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "[]"
        },
        {
          "name": "level",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "0"
        },
        {
          "name": "max",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "null"
        },
        {
          "name": "parent",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "null"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "links",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "level",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "max",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "parent",
          "type": "any",
          "description": "",
          "schema": "any"
        }
      ]
    }
  },
  "DocsPageBottom": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "pascalName": "DocsPageBottom",
    "kebabName": "docs-page-bottom",
    "chunkName": "components/docs-page-bottom",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsPageContent": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsPageContent.vue",
    "pascalName": "DocsPageContent",
    "kebabName": "docs-page-content",
    "chunkName": "components/docs-page-content",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageContent.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/docs/DocsPageContent.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "DocsPrevNext": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "pascalName": "DocsPrevNext",
    "kebabName": "docs-prev-next",
    "chunkName": "components/docs-prev-next",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsToc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "pascalName": "DocsToc",
    "kebabName": "docs-toc",
    "chunkName": "components/docs-toc",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [
        {
          "name": "move",
          "type": "any[]",
          "signature": "(event: \"move\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": []
    }
  },
  "DocsTocLinks": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "pascalName": "DocsTocLinks",
    "kebabName": "docs-toc-links",
    "chunkName": "components/docs-toc-links",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "meta": {
      "props": [
        {
          "name": "links",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "TocLink[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "TocLink[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "TocLink[]",
                "schema": [
                  {
                    "kind": "object",
                    "type": "TocLink",
                    "schema": {
                      "id": {
                        "name": "id",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": true,
                        "type": "string",
                        "schema": "string"
                      },
                      "text": {
                        "name": "text",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": true,
                        "type": "string",
                        "schema": "string"
                      },
                      "depth": {
                        "name": "depth",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": true,
                        "type": "number",
                        "schema": "number"
                      },
                      "children": {
                        "name": "children",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": false,
                        "type": "TocLink[] | undefined",
                        "schema": "TocLink[] | undefined"
                      }
                    }
                  }
                ]
              }
            ]
          },
          "default": "[]"
        }
      ],
      "slots": [],
      "events": [
        {
          "name": "move",
          "type": "any[]",
          "signature": "(event: \"move\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "links",
          "type": "TocLink[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "TocLink[]",
            "schema": [
              {
                "kind": "object",
                "type": "TocLink",
                "schema": {
                  "id": {
                    "name": "id",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "text": {
                    "name": "text",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "depth": {
                    "name": "depth",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "number",
                    "schema": "number"
                  },
                  "children": {
                    "name": "children",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "TocLink[] | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "TocLink[] | undefined",
                      "schema": [
                        "undefined",
                        "TocLink[]"
                      ]
                    }
                  }
                }
              }
            ]
          }
        }
      ]
    }
  },
  "EditOnLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "pascalName": "EditOnLink",
    "kebabName": "edit-on-link",
    "chunkName": "components/edit-on-link",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "meta": {
      "props": [
        {
          "name": "owner",
          "global": false,
          "description": "Repository owner.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.github?.owner"
        },
        {
          "name": "repo",
          "global": false,
          "description": "Repository name.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.github?.repo"
        },
        {
          "name": "branch",
          "global": false,
          "description": "The branch to use for the edit link.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.github?.branch"
        },
        {
          "name": "dir",
          "global": false,
          "description": "A base directory to append to the source path.\n\nWon't be used if `page` is set.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "useAppConfig()?.github?.dir"
        },
        {
          "name": "source",
          "global": false,
          "description": "Source file path.\n\nWon't be used if `page` is set.",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "undefined"
        },
        {
          "name": "page",
          "global": false,
          "description": "Use page from @nuxt/content.",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "undefined"
        },
        {
          "name": "contentDir",
          "global": false,
          "description": "Content directory (to be used with `page`)",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"content\""
        },
        {
          "name": "edit",
          "global": false,
          "description": "Send to an edit page or not.",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "true"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "contentDir",
          "type": "string",
          "description": "Content directory (to be used with `page`)",
          "schema": "string"
        },
        {
          "name": "edit",
          "type": "boolean",
          "description": "Send to an edit page or not.",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "owner",
          "type": "string | undefined",
          "description": "Repository owner.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "repo",
          "type": "string | undefined",
          "description": "Repository name.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "branch",
          "type": "string | undefined",
          "description": "The branch to use for the edit link.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "dir",
          "type": "string | undefined",
          "description": "A base directory to append to the source path.\n\nWon't be used if `page` is set.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "source",
          "type": "string | undefined",
          "description": "Source file path.\n\nWon't be used if `page` is set.",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "page",
          "type": "any",
          "description": "Use page from @nuxt/content.",
          "schema": "any"
        },
        {
          "name": "url",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseA": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "pascalName": "ProseA",
    "kebabName": "prose-a",
    "chunkName": "components/prose-a",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "meta": {
      "props": [
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "blank",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "static",
          "global": false,
          "description": "`true` if `href` points to a static file",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "href",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "blank",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "static",
          "type": "boolean",
          "description": "`true` if `href` points to a static file",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "ProseBlockquote": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "pascalName": "ProseBlockquote",
    "kebabName": "prose-blockquote",
    "chunkName": "components/prose-blockquote",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseCode": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "pascalName": "ProseCode",
    "kebabName": "prose-code",
    "chunkName": "components/prose-code",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "meta": {
      "props": [
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "language",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Lang | undefined",
          "schema": {
            "kind": "enum",
            "type": "Lang | undefined",
            "schema": [
              "undefined",
              "\"vue\"",
              "\"abap\"",
              "\"actionscript-3\"",
              "\"ada\"",
              "\"apache\"",
              "\"apex\"",
              "\"apl\"",
              "\"applescript\"",
              "\"asm\"",
              "\"astro\"",
              "\"awk\"",
              "\"ballerina\"",
              "\"bat\"",
              "\"batch\"",
              "\"berry\"",
              "\"be\"",
              "\"bibtex\"",
              "\"bicep\"",
              "\"c\"",
              "\"clojure\"",
              "\"clj\"",
              "\"cobol\"",
              "\"codeql\"",
              "\"ql\"",
              "\"coffee\"",
              "\"cpp\"",
              "\"crystal\"",
              "\"csharp\"",
              "\"c#\"",
              "\"css\"",
              "\"cue\"",
              "\"d\"",
              "\"dart\"",
              "\"diff\"",
              "\"docker\"",
              "\"dream-maker\"",
              "\"elixir\"",
              "\"elm\"",
              "\"erb\"",
              "\"erlang\"",
              "\"fish\"",
              "\"fsharp\"",
              "\"f#\"",
              "\"gherkin\"",
              "\"git-commit\"",
              "\"git-rebase\"",
              "\"gnuplot\"",
              "\"go\"",
              "\"graphql\"",
              "\"groovy\"",
              "\"hack\"",
              "\"haml\"",
              "\"handlebars\"",
              "\"hbs\"",
              "\"haskell\"",
              "\"hcl\"",
              "\"hlsl\"",
              "\"html\"",
              "\"ini\"",
              "\"java\"",
              "\"javascript\"",
              "\"js\"",
              "\"jinja-html\"",
              "\"json\"",
              "\"jsonc\"",
              "\"jsonnet\"",
              "\"jssm\"",
              "\"fsl\"",
              "\"jsx\"",
              "\"julia\"",
              "\"jupyter\"",
              "\"kotlin\"",
              "\"latex\"",
              "\"less\"",
              "\"lisp\"",
              "\"logo\"",
              "\"lua\"",
              "\"make\"",
              "\"makefile\"",
              "\"markdown\"",
              "\"md\"",
              "\"matlab\"",
              "\"mdx\"",
              "\"nginx\"",
              "\"nim\"",
              "\"nix\"",
              "\"objective-c\"",
              "\"objc\"",
              "\"objective-cpp\"",
              "\"ocaml\"",
              "\"pascal\"",
              "\"perl\"",
              "\"php\"",
              "\"plsql\"",
              "\"postcss\"",
              "\"powershell\"",
              "\"ps\"",
              "\"ps1\"",
              "\"prisma\"",
              "\"prolog\"",
              "\"pug\"",
              "\"jade\"",
              "\"puppet\"",
              "\"purescript\"",
              "\"python\"",
              "\"py\"",
              "\"r\"",
              "\"raku\"",
              "\"perl6\"",
              "\"razor\"",
              "\"riscv\"",
              "\"ruby\"",
              "\"rb\"",
              "\"rust\"",
              "\"rs\"",
              "\"sas\"",
              "\"sass\"",
              "\"scala\"",
              "\"scheme\"",
              "\"scss\"",
              "\"shaderlab\"",
              "\"shader\"",
              "\"shellscript\"",
              "\"shell\"",
              "\"bash\"",
              "\"sh\"",
              "\"zsh\"",
              "\"smalltalk\"",
              "\"solidity\"",
              "\"sparql\"",
              "\"sql\"",
              "\"ssh-config\"",
              "\"stylus\"",
              "\"styl\"",
              "\"svelte\"",
              "\"swift\"",
              "\"system-verilog\"",
              "\"tasl\"",
              "\"tcl\"",
              "\"tex\"",
              "\"toml\"",
              "\"tsx\"",
              "\"turtle\"",
              "\"twig\"",
              "\"typescript\"",
              "\"ts\"",
              "\"vb\"",
              "\"cmd\"",
              "\"verilog\"",
              "\"vhdl\"",
              "\"viml\"",
              "\"vim\"",
              "\"vimscript\"",
              "\"vue-html\"",
              "\"wasm\"",
              "\"wenyan\"",
              "\"文言\"",
              "\"xml\"",
              "\"xsl\"",
              "\"yaml\""
            ]
          },
          "default": "null"
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "null"
        },
        {
          "name": "highlights",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "number[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "number[]",
                "schema": [
                  "number"
                ]
              }
            ]
          },
          "default": "[]"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "code",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "language",
          "type": "Lang",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Lang",
            "schema": [
              "\"vue\"",
              "\"abap\"",
              "\"actionscript-3\"",
              "\"ada\"",
              "\"apache\"",
              "\"apex\"",
              "\"apl\"",
              "\"applescript\"",
              "\"asm\"",
              "\"astro\"",
              "\"awk\"",
              "\"ballerina\"",
              "\"bat\"",
              "\"batch\"",
              "\"berry\"",
              "\"be\"",
              "\"bibtex\"",
              "\"bicep\"",
              "\"c\"",
              "\"clojure\"",
              "\"clj\"",
              "\"cobol\"",
              "\"codeql\"",
              "\"ql\"",
              "\"coffee\"",
              "\"cpp\"",
              "\"crystal\"",
              "\"csharp\"",
              "\"c#\"",
              "\"css\"",
              "\"cue\"",
              "\"d\"",
              "\"dart\"",
              "\"diff\"",
              "\"docker\"",
              "\"dream-maker\"",
              "\"elixir\"",
              "\"elm\"",
              "\"erb\"",
              "\"erlang\"",
              "\"fish\"",
              "\"fsharp\"",
              "\"f#\"",
              "\"gherkin\"",
              "\"git-commit\"",
              "\"git-rebase\"",
              "\"gnuplot\"",
              "\"go\"",
              "\"graphql\"",
              "\"groovy\"",
              "\"hack\"",
              "\"haml\"",
              "\"handlebars\"",
              "\"hbs\"",
              "\"haskell\"",
              "\"hcl\"",
              "\"hlsl\"",
              "\"html\"",
              "\"ini\"",
              "\"java\"",
              "\"javascript\"",
              "\"js\"",
              "\"jinja-html\"",
              "\"json\"",
              "\"jsonc\"",
              "\"jsonnet\"",
              "\"jssm\"",
              "\"fsl\"",
              "\"jsx\"",
              "\"julia\"",
              "\"jupyter\"",
              "\"kotlin\"",
              "\"latex\"",
              "\"less\"",
              "\"lisp\"",
              "\"logo\"",
              "\"lua\"",
              "\"make\"",
              "\"makefile\"",
              "\"markdown\"",
              "\"md\"",
              "\"matlab\"",
              "\"mdx\"",
              "\"nginx\"",
              "\"nim\"",
              "\"nix\"",
              "\"objective-c\"",
              "\"objc\"",
              "\"objective-cpp\"",
              "\"ocaml\"",
              "\"pascal\"",
              "\"perl\"",
              "\"php\"",
              "\"plsql\"",
              "\"postcss\"",
              "\"powershell\"",
              "\"ps\"",
              "\"ps1\"",
              "\"prisma\"",
              "\"prolog\"",
              "\"pug\"",
              "\"jade\"",
              "\"puppet\"",
              "\"purescript\"",
              "\"python\"",
              "\"py\"",
              "\"r\"",
              "\"raku\"",
              "\"perl6\"",
              "\"razor\"",
              "\"riscv\"",
              "\"ruby\"",
              "\"rb\"",
              "\"rust\"",
              "\"rs\"",
              "\"sas\"",
              "\"sass\"",
              "\"scala\"",
              "\"scheme\"",
              "\"scss\"",
              "\"shaderlab\"",
              "\"shader\"",
              "\"shellscript\"",
              "\"shell\"",
              "\"bash\"",
              "\"sh\"",
              "\"zsh\"",
              "\"smalltalk\"",
              "\"solidity\"",
              "\"sparql\"",
              "\"sql\"",
              "\"ssh-config\"",
              "\"stylus\"",
              "\"styl\"",
              "\"svelte\"",
              "\"swift\"",
              "\"system-verilog\"",
              "\"tasl\"",
              "\"tcl\"",
              "\"tex\"",
              "\"toml\"",
              "\"tsx\"",
              "\"turtle\"",
              "\"twig\"",
              "\"typescript\"",
              "\"ts\"",
              "\"vb\"",
              "\"cmd\"",
              "\"verilog\"",
              "\"vhdl\"",
              "\"viml\"",
              "\"vim\"",
              "\"vimscript\"",
              "\"vue-html\"",
              "\"wasm\"",
              "\"wenyan\"",
              "\"文言\"",
              "\"xml\"",
              "\"xsl\"",
              "\"yaml\""
            ]
          }
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "highlights",
          "type": "number[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": [
              "number"
            ]
          }
        }
      ]
    }
  },
  "ProseCodeInline": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "pascalName": "ProseCodeInline",
    "kebabName": "prose-code-inline",
    "chunkName": "components/prose-code-inline",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseEm": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "pascalName": "ProseEm",
    "kebabName": "prose-em",
    "chunkName": "components/prose-em",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseH1": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "pascalName": "ProseH1",
    "kebabName": "prose-h1",
    "chunkName": "components/prose-h1",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH2": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "pascalName": "ProseH2",
    "kebabName": "prose-h2",
    "chunkName": "components/prose-h2",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH3": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "pascalName": "ProseH3",
    "kebabName": "prose-h3",
    "chunkName": "components/prose-h3",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH4": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "pascalName": "ProseH4",
    "kebabName": "prose-h4",
    "chunkName": "components/prose-h4",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH5": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "pascalName": "ProseH5",
    "kebabName": "prose-h5",
    "chunkName": "components/prose-h5",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseH6": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "pascalName": "ProseH6",
    "kebabName": "prose-h6",
    "chunkName": "components/prose-h6",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "meta": {
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "id",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseHr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "pascalName": "ProseHr",
    "kebabName": "prose-hr",
    "chunkName": "components/prose-hr",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "pascalName": "ProseImg",
    "kebabName": "prose-img",
    "chunkName": "components/prose-img",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "meta": {
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "alt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": [
              "undefined",
              "string",
              "number"
            ]
          },
          "default": "undefined"
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": [
              "undefined",
              "string",
              "number"
            ]
          },
          "default": "undefined"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "alt",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "width",
          "type": "string | number | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": [
              "undefined",
              "string",
              "number"
            ]
          }
        },
        {
          "name": "height",
          "type": "string | number | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": [
              "undefined",
              "string",
              "number"
            ]
          }
        }
      ]
    }
  },
  "ProseLi": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "pascalName": "ProseLi",
    "kebabName": "prose-li",
    "chunkName": "components/prose-li",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseOl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "pascalName": "ProseOl",
    "kebabName": "prose-ol",
    "chunkName": "components/prose-ol",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseP": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "pascalName": "ProseP",
    "kebabName": "prose-p",
    "chunkName": "components/prose-p",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseStrong": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "pascalName": "ProseStrong",
    "kebabName": "prose-strong",
    "chunkName": "components/prose-strong",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseTable": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "pascalName": "ProseTable",
    "kebabName": "prose-table",
    "chunkName": "components/prose-table",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseTbody": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "pascalName": "ProseTbody",
    "kebabName": "prose-tbody",
    "chunkName": "components/prose-tbody",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseTd": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "pascalName": "ProseTd",
    "kebabName": "prose-td",
    "chunkName": "components/prose-td",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseTh": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "pascalName": "ProseTh",
    "kebabName": "prose-th",
    "chunkName": "components/prose-th",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseThead": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "pascalName": "ProseThead",
    "kebabName": "prose-thead",
    "chunkName": "components/prose-thead",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseTr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "pascalName": "ProseTr",
    "kebabName": "prose-tr",
    "chunkName": "components/prose-tr",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseUl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "pascalName": "ProseUl",
    "kebabName": "prose-ul",
    "chunkName": "components/prose-ul",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "meta": {
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": []
    }
  },
  "ProseCodeCopyButton": {
    "mode": "all",
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue",
    "pascalName": "ProseCodeCopyButton",
    "kebabName": "prose-code-copy-button",
    "chunkName": "components/prose-code-copy-button",
    "shortPath": "node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue",
    "meta": {
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "show",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "show",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "Alert": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "pascalName": "Alert",
    "kebabName": "alert",
    "chunkName": "components/alert",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "meta": {
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"info\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "type",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "Badge": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "pascalName": "Badge",
    "kebabName": "badge",
    "chunkName": "components/badge",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "meta": {
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"info\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "type",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ButtonLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "pascalName": "ButtonLink",
    "kebabName": "button-link",
    "chunkName": "components/button-link",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "meta": {
      "props": [
        {
          "name": "color",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "ComputedStyleProp | undefined",
          "schema": {
            "kind": "enum",
            "type": "ComputedStyleProp | undefined",
            "schema": [
              "undefined",
              "\"{color.primary.50}\"",
              "\"{color.primary.100}\"",
              "\"{color.primary.200}\"",
              "\"{color.primary.300}\"",
              "\"{color.primary.400}\"",
              "\"{color.primary.500}\"",
              "\"{color.primary.600}\"",
              "\"{color.primary.700}\"",
              "\"{color.primary.800}\"",
              "\"{color.primary.900}\"",
              "\"{color.white}\"",
              "\"{color.black}\"",
              "\"{color.gray.50}\"",
              "\"{color.gray.100}\"",
              "\"{color.gray.200}\"",
              "\"{color.gray.300}\"",
              "\"{color.gray.400}\"",
              "\"{color.gray.500}\"",
              "\"{color.gray.600}\"",
              "\"{color.gray.700}\"",
              "\"{color.gray.800}\"",
              "\"{color.gray.900}\"",
              "\"{color.green.50}\"",
              "\"{color.green.100}\"",
              "\"{color.green.200}\"",
              "\"{color.green.300}\"",
              "\"{color.green.400}\"",
              "\"{color.green.500}\"",
              "\"{color.green.600}\"",
              "\"{color.green.700}\"",
              "\"{color.green.800}\"",
              "\"{color.green.900}\"",
              "\"{color.yellow.50}\"",
              "\"{color.yellow.100}\"",
              "\"{color.yellow.200}\"",
              "\"{color.yellow.300}\"",
              "\"{color.yellow.400}\"",
              "\"{color.yellow.500}\"",
              "\"{color.yellow.600}\"",
              "\"{color.yellow.700}\"",
              "\"{color.yellow.800}\"",
              "\"{color.yellow.900}\"",
              "\"{color.orange.50}\"",
              "\"{color.orange.100}\"",
              "\"{color.orange.200}\"",
              "\"{color.orange.300}\"",
              "\"{color.orange.400}\"",
              "\"{color.orange.500}\"",
              "\"{color.orange.600}\"",
              "\"{color.orange.700}\"",
              "\"{color.orange.800}\"",
              "\"{color.orange.900}\"",
              "\"{color.red.50}\"",
              "\"{color.red.100}\"",
              "\"{color.red.200}\"",
              "\"{color.red.300}\"",
              "\"{color.red.400}\"",
              "\"{color.red.500}\"",
              "\"{color.red.600}\"",
              "\"{color.red.700}\"",
              "\"{color.red.800}\"",
              "\"{color.red.900}\"",
              "\"{color.pear.50}\"",
              "\"{color.pear.100}\"",
              "\"{color.pear.200}\"",
              "\"{color.pear.300}\"",
              "\"{color.pear.400}\"",
              "\"{color.pear.500}\"",
              "\"{color.pear.600}\"",
              "\"{color.pear.700}\"",
              "\"{color.pear.800}\"",
              "\"{color.pear.900}\"",
              "\"{color.teal.50}\"",
              "\"{color.teal.100}\"",
              "\"{color.teal.200}\"",
              "\"{color.teal.300}\"",
              "\"{color.teal.400}\"",
              "\"{color.teal.500}\"",
              "\"{color.teal.600}\"",
              "\"{color.teal.700}\"",
              "\"{color.teal.800}\"",
              "\"{color.teal.900}\"",
              "\"{color.lightblue.50}\"",
              "\"{color.lightblue.100}\"",
              "\"{color.lightblue.200}\"",
              "\"{color.lightblue.300}\"",
              "\"{color.lightblue.400}\"",
              "\"{color.lightblue.500}\"",
              "\"{color.lightblue.600}\"",
              "\"{color.lightblue.700}\"",
              "\"{color.lightblue.800}\"",
              "\"{color.lightblue.900}\"",
              "\"{color.blue.50}\"",
              "\"{color.blue.100}\"",
              "\"{color.blue.200}\"",
              "\"{color.blue.300}\"",
              "\"{color.blue.400}\"",
              "\"{color.blue.500}\"",
              "\"{color.blue.600}\"",
              "\"{color.blue.700}\"",
              "\"{color.blue.800}\"",
              "\"{color.blue.900}\"",
              "\"{color.indigoblue.50}\"",
              "\"{color.indigoblue.100}\"",
              "\"{color.indigoblue.200}\"",
              "\"{color.indigoblue.300}\"",
              "\"{color.indigoblue.400}\"",
              "\"{color.indigoblue.500}\"",
              "\"{color.indigoblue.600}\"",
              "\"{color.indigoblue.700}\"",
              "\"{color.indigoblue.800}\"",
              "\"{color.indigoblue.900}\"",
              "\"{color.royalblue.50}\"",
              "\"{color.royalblue.100}\"",
              "\"{color.royalblue.200}\"",
              "\"{color.royalblue.300}\"",
              "\"{color.royalblue.400}\"",
              "\"{color.royalblue.500}\"",
              "\"{color.royalblue.600}\"",
              "\"{color.royalblue.700}\"",
              "\"{color.royalblue.800}\"",
              "\"{color.royalblue.900}\"",
              "\"{color.purple.50}\"",
              "\"{color.purple.100}\"",
              "\"{color.purple.200}\"",
              "\"{color.purple.300}\"",
              "\"{color.purple.400}\"",
              "\"{color.purple.500}\"",
              "\"{color.purple.600}\"",
              "\"{color.purple.700}\"",
              "\"{color.purple.800}\"",
              "\"{color.purple.900}\"",
              "\"{color.pink.50}\"",
              "\"{color.pink.100}\"",
              "\"{color.pink.200}\"",
              "\"{color.pink.300}\"",
              "\"{color.pink.400}\"",
              "\"{color.pink.500}\"",
              "\"{color.pink.600}\"",
              "\"{color.pink.700}\"",
              "\"{color.pink.800}\"",
              "\"{color.pink.900}\"",
              "\"{color.ruby.50}\"",
              "\"{color.ruby.100}\"",
              "\"{color.ruby.200}\"",
              "\"{color.ruby.300}\"",
              "\"{color.ruby.400}\"",
              "\"{color.ruby.500}\"",
              "\"{color.ruby.600}\"",
              "\"{color.ruby.700}\"",
              "\"{color.ruby.800}\"",
              "\"{color.ruby.900}\"",
              "\"{container.maxWidth}\"",
              "\"{container.padding.mobile}\"",
              "\"{container.padding.sm}\"",
              "\"{backdrop.filter}\"",
              "\"{backdrop.background}\"",
              "\"{text.color.primary}\"",
              "\"{text.color.secondary}\"",
              "\"{text.color.secondaryHover}\"",
              "\"{text.xs.fontSize}\"",
              "\"{text.xs.lineHeight}\"",
              "\"{text.sm.fontSize}\"",
              "\"{text.sm.lineHeight}\"",
              "\"{text.base.fontSize}\"",
              "\"{text.base.lineHeight}\"",
              "\"{text.lg.fontSize}\"",
              "\"{text.lg.lineHeight}\"",
              "\"{text.2xl.fontSize}\"",
              "\"{text.2xl.lineHeight}\"",
              "\"{text.3xl.fontSize}\"",
              "\"{text.3xl.lineHeight}\"",
              "\"{text.4xl.fontSize}\"",
              "\"{text.4xl.lineHeight}\"",
              "\"{text.5xl.fontSize}\"",
              "\"{text.5xl.lineHeight}\"",
              "\"{text.6xl.fontSize}\"",
              "\"{text.6xl.lineHeight}\"",
              "\"{borders.primary.default}\"",
              "\"{borders.primary.hover}\"",
              "\"{borders.secondary.default}\"",
              "\"{borders.secondary.hover.original.initial}\"",
              "\"{borders.secondary.hover.original.dark}\"",
              "\"{surfaces.background.base}\"",
              "\"{states.primary.color.primary}\"",
              "\"{states.primary.color.secondary}\"",
              "\"{states.primary.backgroundColor.primary}\"",
              "\"{states.primary.backgroundColor.secondary}\"",
              "\"{states.primary.borderColor.primary}\"",
              "\"{states.info.color.primary}\"",
              "\"{states.info.color.secondary}\"",
              "\"{states.info.backgroundColor.primary}\"",
              "\"{states.info.backgroundColor.secondary}\"",
              "\"{states.info.borderColor.primary}\"",
              "\"{states.success.color.primary}\"",
              "\"{states.success.color.secondary}\"",
              "\"{states.success.backgroundColor.primary}\"",
              "\"{states.success.backgroundColor.secondary}\"",
              "\"{states.success.borderColor.primary}\"",
              "\"{states.warning.color.primary}\"",
              "\"{states.warning.color.secondary}\"",
              "\"{states.warning.backgroundColor.primary}\"",
              "\"{states.warning.backgroundColor.secondary}\"",
              "\"{states.warning.borderColor.primary}\"",
              "\"{states.danger.color.primary}\"",
              "\"{states.danger.color.secondary}\"",
              "\"{states.danger.backgroundColor.primary}\"",
              "\"{states.danger.backgroundColor.secondary}\"",
              "\"{states.danger.borderColor.primary}\"",
              "\"{typography.verticalMargin.sm}\"",
              "\"{typography.verticalMargin.base}\"",
              "\"{typography.letterSpacing.tight}\"",
              "\"{typography.letterSpacing.wide}\"",
              "\"{typography.fontSize.xs}\"",
              "\"{typography.fontSize.sm}\"",
              "\"{typography.fontSize.base}\"",
              "\"{typography.fontSize.lg}\"",
              "\"{typography.fontSize.xl}\"",
              "\"{typography.fontSize.2xl}\"",
              "\"{typography.fontSize.3xl}\"",
              "\"{typography.fontSize.4xl}\"",
              "\"{typography.fontSize.5xl}\"",
              "\"{typography.fontSize.6xl}\"",
              "\"{typography.fontSize.7xl}\"",
              "\"{typography.fontSize.8xl}\"",
              "\"{typography.fontSize.9xl}\"",
              "\"{typography.fontWeight.thin}\"",
              "\"{typography.fontWeight.extralight}\"",
              "\"{typography.fontWeight.light}\"",
              "\"{typography.fontWeight.normal}\"",
              "\"{typography.fontWeight.medium}\"",
              "\"{typography.fontWeight.semibold}\"",
              "\"{typography.fontWeight.bold}\"",
              "\"{typography.fontWeight.extrabold}\"",
              "\"{typography.fontWeight.black}\"",
              "\"{typography.lead.none}\"",
              "\"{typography.lead.tight}\"",
              "\"{typography.lead.snug}\"",
              "\"{typography.lead.normal}\"",
              "\"{typography.lead.relaxed}\"",
              "\"{typography.lead.loose}\"",
              "\"{typography.color.primary.50}\"",
              "\"{typography.color.primary.100}\"",
              "\"{typography.color.primary.200}\"",
              "\"{typography.color.primary.300}\"",
              "\"{typography.color.primary.400}\"",
              "\"{typography.color.primary.500}\"",
              "\"{typography.color.primary.600}\"",
              "\"{typography.color.primary.700}\"",
              "\"{typography.color.primary.800}\"",
              "\"{typography.color.primary.900}\"",
              "\"{typography.color.secondary.50}\"",
              "\"{typography.color.secondary.100}\"",
              "\"{typography.color.secondary.200}\"",
              "\"{typography.color.secondary.300}\"",
              "\"{typography.color.secondary.400}\"",
              "\"{typography.color.secondary.500}\"",
              "\"{typography.color.secondary.600}\"",
              "\"{typography.color.secondary.700}\"",
              "\"{typography.color.secondary.800}\"",
              "\"{typography.color.secondary.900}\"",
              "\"{prose.p.fontSize}\"",
              "\"{prose.p.lineHeight}\"",
              "\"{prose.p.margin}\"",
              "\"{prose.p.br.margin}\"",
              "\"{prose.h1.margin}\"",
              "\"{prose.h1.fontSize}\"",
              "\"{prose.h1.lineHeight}\"",
              "\"{prose.h1.fontWeight}\"",
              "\"{prose.h1.letterSpacing}\"",
              "\"{prose.h1.iconSize}\"",
              "\"{prose.h2.margin}\"",
              "\"{prose.h2.fontSize}\"",
              "\"{prose.h2.lineHeight}\"",
              "\"{prose.h2.fontWeight}\"",
              "\"{prose.h2.letterSpacing}\"",
              "\"{prose.h2.iconSize}\"",
              "\"{prose.h3.margin}\"",
              "\"{prose.h3.fontSize}\"",
              "\"{prose.h3.lineHeight}\"",
              "\"{prose.h3.fontWeight}\"",
              "\"{prose.h3.letterSpacing}\"",
              "\"{prose.h3.iconSize}\"",
              "\"{prose.h4.margin}\"",
              "\"{prose.h4.fontSize}\"",
              "\"{prose.h4.lineHeight}\"",
              "\"{prose.h4.fontWeight}\"",
              "\"{prose.h4.letterSpacing}\"",
              "\"{prose.h4.iconSize}\"",
              "\"{prose.h5.margin}\"",
              "\"{prose.h5.fontSize}\"",
              "\"{prose.h5.lineHeight}\"",
              "\"{prose.h5.fontWeight}\"",
              "\"{prose.h5.iconSize}\"",
              "\"{prose.h6.margin}\"",
              "\"{prose.h6.fontSize}\"",
              "\"{prose.h6.lineHeight}\"",
              "\"{prose.h6.fontWeight}\"",
              "\"{prose.h6.iconSize}\"",
              "\"{prose.strong.fontWeight}\"",
              "\"{prose.img.margin}\"",
              "\"{prose.a.textDecoration}\"",
              "\"{prose.a.color.light.default}\"",
              "\"{prose.a.color.light.hover}\"",
              "\"{prose.a.color.dark.default}\"",
              "\"{prose.a.color.dark.hover}\"",
              "\"{prose.a.borderBottom}\"",
              "\"{prose.a.borderWidth}\"",
              "\"{prose.a.borderColor.light.default}\"",
              "\"{prose.a.borderColor.light.hover}\"",
              "\"{prose.a.borderColor.dark.default}\"",
              "\"{prose.a.borderColor.dark.hover}\"",
              "\"{prose.a.borderStyle.default}\"",
              "\"{prose.a.borderStyle.hover}\"",
              "\"{prose.a.borderDistance}\"",
              "\"{prose.a.fontWeight}\"",
              "\"{prose.a.hasCode.borderBottom}\"",
              "\"{prose.a.code.border.default}\"",
              "\"{prose.a.code.border.hover}\"",
              "\"{prose.a.code.borderColor.light.default}\"",
              "\"{prose.a.code.borderColor.light.hover}\"",
              "\"{prose.a.code.borderColor.dark.default}\"",
              "\"{prose.a.code.borderColor.dark.hover}\"",
              "\"{prose.a.code.color.light.hover}\"",
              "\"{prose.a.code.color.dark.hover}\"",
              "\"{prose.a.code.background.light.hover}\"",
              "\"{prose.a.code.background.dark.hover}\"",
              "\"{prose.blockquote.margin}\"",
              "\"{prose.blockquote.padding}\"",
              "\"{prose.blockquote.quotes}\"",
              "\"{prose.blockquote.color.light}\"",
              "\"{prose.blockquote.color.dark}\"",
              "\"{prose.blockquote.borderLeft}\"",
              "\"{prose.blockquote.borderColor.light}\"",
              "\"{prose.blockquote.borderColor.dark}\"",
              "\"{prose.ul.listStyleType}\"",
              "\"{prose.ul.margin}\"",
              "\"{prose.ul.li.markerColor.light}\"",
              "\"{prose.ul.li.markerColor.dark}\"",
              "\"{prose.ol.listStyleType}\"",
              "\"{prose.ol.margin}\"",
              "\"{prose.ol.li.markerColor.light}\"",
              "\"{prose.ol.li.markerColor.dark}\"",
              "\"{prose.li.margin}\"",
              "\"{prose.li.listStylePosition}\"",
              "\"{prose.hr.margin}\"",
              "\"{prose.hr.style}\"",
              "\"{prose.hr.width}\"",
              "\"{prose.hr.color.light}\"",
              "\"{prose.hr.color.dark}\"",
              "\"{prose.table.margin}\"",
              "\"{prose.table.textAlign}\"",
              "\"{prose.table.fontSize}\"",
              "\"{prose.table.lineHeight}\"",
              "\"{prose.thead.border}\"",
              "\"{prose.thead.borderBottom}\"",
              "\"{prose.thead.borderColor.light}\"",
              "\"{prose.thead.borderColor.dark}\"",
              "\"{prose.th.color.light}\"",
              "\"{prose.th.color.dark}\"",
              "\"{prose.th.padding}\"",
              "\"{prose.th.fontWeight}\"",
              "\"{prose.tbody.tr.borderBottom}\"",
              "\"{prose.tbody.tr.borderColor.light}\"",
              "\"{prose.tbody.tr.borderColor.dark}\"",
              "\"{prose.tbody.td.padding}\"",
              "\"{prose.tbody.code.inline.fontSize}\"",
              "\"{prose.code.block.fontSize}\"",
              "\"{prose.code.block.margin}\"",
              "\"{prose.code.block.borderColor.light}\"",
              "\"{prose.code.block.borderColor.dark}\"",
              "\"{prose.code.block.color.light}\"",
              "\"{prose.code.block.color.dark}\"",
              "\"{prose.code.block.backgroundColor.light}\"",
              "\"{prose.code.block.backgroundColor.dark}\"",
              "\"{prose.code.block.pre.padding}\"",
              "\"{prose.code.inline.borderRadius}\"",
              "\"{prose.code.inline.padding}\"",
              "\"{prose.code.inline.fontSize}\"",
              "\"{prose.code.inline.fontWeight}\"",
              "\"{prose.code.inline.color.light}\"",
              "\"{prose.code.inline.color.dark}\"",
              "\"{prose.code.inline.backgroundColor.light}\"",
              "\"{prose.code.inline.backgroundColor.dark}\"",
              "\"{docus.page.height}\"",
              "\"{docus.page.maxWidth}\"",
              "\"{docus.header.height}\"",
              "\"{docus.footer.height}\"",
              "\"{width.screen}\"",
              "\"{height.screen}\"",
              "\"{shadow.xs}\"",
              "\"{shadow.sm}\"",
              "\"{shadow.md}\"",
              "\"{shadow.lg}\"",
              "\"{shadow.xl}\"",
              "\"{shadow.2xl}\"",
              "\"{shadow.none}\"",
              "\"{radii.none}\"",
              "\"{radii.2xs}\"",
              "\"{radii.xs}\"",
              "\"{radii.sm}\"",
              "\"{radii.md}\"",
              "\"{radii.lg}\"",
              "\"{radii.xl}\"",
              "\"{radii.2xl}\"",
              "\"{radii.3xl}\"",
              "\"{radii.full}\"",
              "\"{size.0}\"",
              "\"{size.2}\"",
              "\"{size.4}\"",
              "\"{size.6}\"",
              "\"{size.8}\"",
              "\"{size.12}\"",
              "\"{size.16}\"",
              "\"{size.20}\"",
              "\"{size.24}\"",
              "\"{size.32}\"",
              "\"{size.40}\"",
              "\"{size.48}\"",
              "\"{size.56}\"",
              "\"{size.64}\"",
              "\"{size.80}\"",
              "\"{size.104}\"",
              "\"{size.200}\"",
              "\"{size.xs}\"",
              "\"{size.sm}\"",
              "\"{size.md}\"",
              "\"{size.lg}\"",
              "\"{size.xl}\"",
              "\"{size.2xl}\"",
              "\"{size.3xl}\"",
              "\"{size.4xl}\"",
              "\"{size.5xl}\"",
              "\"{size.6xl}\"",
              "\"{size.7xl}\"",
              "\"{size.full}\"",
              "\"{space.0}\"",
              "\"{space.1}\"",
              "\"{space.2}\"",
              "\"{space.3}\"",
              "\"{space.4}\"",
              "\"{space.5}\"",
              "\"{space.6}\"",
              "\"{space.7}\"",
              "\"{space.8}\"",
              "\"{space.9}\"",
              "\"{space.10}\"",
              "\"{space.11}\"",
              "\"{space.12}\"",
              "\"{space.14}\"",
              "\"{space.16}\"",
              "\"{space.20}\"",
              "\"{space.24}\"",
              "\"{space.28}\"",
              "\"{space.32}\"",
              "\"{space.36}\"",
              "\"{space.40}\"",
              "\"{space.44}\"",
              "\"{space.48}\"",
              "\"{space.52}\"",
              "\"{space.56}\"",
              "\"{space.60}\"",
              "\"{space.64}\"",
              "\"{space.72}\"",
              "\"{space.80}\"",
              "\"{space.96}\"",
              "\"{space.px}\"",
              "\"{space.0-5}\"",
              "\"{space.1-5}\"",
              "\"{space.2-5}\"",
              "\"{space.3-5}\"",
              "\"{borderWidth.noBorder}\"",
              "\"{borderWidth.sm}\"",
              "\"{borderWidth.md}\"",
              "\"{borderWidth.lg}\"",
              "\"{opacity.noOpacity}\"",
              "\"{opacity.bright}\"",
              "\"{opacity.light}\"",
              "\"{opacity.soft}\"",
              "\"{opacity.medium}\"",
              "\"{opacity.high}\"",
              "\"{opacity.total}\"",
              "\"{font.sans}\"",
              "\"{font.serif}\"",
              "\"{font.mono}\"",
              "\"{fontWeight.thin}\"",
              "\"{fontWeight.extralight}\"",
              "\"{fontWeight.light}\"",
              "\"{fontWeight.normal}\"",
              "\"{fontWeight.medium}\"",
              "\"{fontWeight.semibold}\"",
              "\"{fontWeight.bold}\"",
              "\"{fontWeight.extrabold}\"",
              "\"{fontWeight.black}\"",
              "\"{fontSize.xs}\"",
              "\"{fontSize.sm}\"",
              "\"{fontSize.base}\"",
              "\"{fontSize.lg}\"",
              "\"{fontSize.xl}\"",
              "\"{fontSize.2xl}\"",
              "\"{fontSize.3xl}\"",
              "\"{fontSize.4xl}\"",
              "\"{fontSize.5xl}\"",
              "\"{fontSize.6xl}\"",
              "\"{fontSize.7xl}\"",
              "\"{fontSize.8xl}\"",
              "\"{fontSize.9xl}\"",
              "\"{letterSpacing.tighter}\"",
              "\"{letterSpacing.tight}\"",
              "\"{letterSpacing.normal}\"",
              "\"{letterSpacing.wide}\"",
              "\"{letterSpacing.wider}\"",
              "\"{letterSpacing.widest}\"",
              "\"{lead.1}\"",
              "\"{lead.2}\"",
              "\"{lead.3}\"",
              "\"{lead.4}\"",
              "\"{lead.5}\"",
              "\"{lead.6}\"",
              "\"{lead.7}\"",
              "\"{lead.8}\"",
              "\"{lead.9}\"",
              "\"{lead.10}\"",
              "\"{lead.none}\"",
              "\"{lead.tight}\"",
              "\"{lead.snug}\"",
              "\"{lead.normal}\"",
              "\"{lead.relaxed}\"",
              "\"{lead.loose}\"",
              "\"{media.xs}\"",
              "\"{media.sm}\"",
              "\"{media.md}\"",
              "\"{media.lg}\"",
              "\"{media.xl}\"",
              "\"{media.2xl}\"",
              "\"{media.rm}\"",
              "\"{media.landscape}\"",
              "\"{media.portrait}\"",
              {
                "kind": "object",
                "type": "string & {}",
                "schema": {
                  "toString": {
                    "name": "toString",
                    "global": false,
                    "description": "Returns a string representation of a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "charAt": {
                    "name": "charAt",
                    "global": false,
                    "description": "Returns the character at the specified index.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "pos The zero-based index of the desired character."
                      }
                    ],
                    "required": true,
                    "type": "(pos: number) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(pos: number): string",
                      "schema": []
                    }
                  },
                  "charCodeAt": {
                    "name": "charCodeAt",
                    "global": false,
                    "description": "Returns the Unicode value of the character at the specified location.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned."
                      }
                    ],
                    "required": true,
                    "type": "(index: number) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(index: number): number",
                      "schema": []
                    }
                  },
                  "concat": {
                    "name": "concat",
                    "global": false,
                    "description": "Returns a string that contains the concatenation of two or more strings.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "strings The strings to append to the end of the string."
                      }
                    ],
                    "required": true,
                    "type": "(...strings: string[]) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(...strings: string[]): string",
                      "schema": [
                        "string"
                      ]
                    }
                  },
                  "indexOf": {
                    "name": "indexOf",
                    "global": false,
                    "description": "Returns the position of the first occurrence of a substring.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString The substring to search for in the string"
                      },
                      {
                        "name": "param",
                        "text": "position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): number",
                      "schema": []
                    }
                  },
                  "lastIndexOf": {
                    "name": "lastIndexOf",
                    "global": false,
                    "description": "Returns the last occurrence of a substring in the string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString The substring to search for."
                      },
                      {
                        "name": "param",
                        "text": "position The index at which to begin searching. If omitted, the search begins at the end of the string."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => number",
                    "schema": "(searchString: string, position?: number | undefined) => number"
                  },
                  "localeCompare": {
                    "name": "localeCompare",
                    "global": false,
                    "description": "Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "that String to compare to target string"
                      },
                      {
                        "name": "param",
                        "text": "that String to compare to target string"
                      },
                      {
                        "name": "param",
                        "text": "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details."
                      },
                      {
                        "name": "param",
                        "text": "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details."
                      }
                    ],
                    "required": true,
                    "type": "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }",
                    "schema": "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"
                  },
                  "match": {
                    "name": "match",
                    "global": false,
                    "description": "Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string or an object that supports being matched against, and returns an array\r\ncontaining the results of that search, or null if no matches are found.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp A variable name or string literal containing the regular expression pattern and flags."
                      },
                      {
                        "name": "param",
                        "text": "matcher An object that supports being matched against."
                      }
                    ],
                    "required": true,
                    "type": "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }",
                    "schema": "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchValue A string or regular expression to search for."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      },
                      {
                        "name": "param",
                        "text": "searchValue An object that supports searching for and replacing matches within a string."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue The replacement text."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A object can search for and replace matches within a string."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      }
                    ],
                    "required": true,
                    "type": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }",
                    "schema": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"
                  },
                  "search": {
                    "name": "search",
                    "global": false,
                    "description": "Finds the first substring match in a regular expression search.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp The regular expression pattern and applicable flags."
                      },
                      {
                        "name": "param",
                        "text": "searcher An object which supports searching within a string."
                      }
                    ],
                    "required": true,
                    "type": "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }",
                    "schema": "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"
                  },
                  "slice": {
                    "name": "slice",
                    "global": false,
                    "description": "Returns a section of a string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "start The index to the beginning of the specified portion of stringObj."
                      },
                      {
                        "name": "param",
                        "text": "end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\r\nIf this value is not specified, the substring continues to the end of stringObj."
                      }
                    ],
                    "required": true,
                    "type": "(start?: number | undefined, end?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(start?: number | undefined, end?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "split": {
                    "name": "split",
                    "global": false,
                    "description": "Split a string into substrings using the specified separator and return them as an array.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned."
                      },
                      {
                        "name": "param",
                        "text": "limit A value used to limit the number of elements returned in the array."
                      },
                      {
                        "name": "param",
                        "text": "splitter An object that can split a string."
                      },
                      {
                        "name": "param",
                        "text": "limit A value used to limit the number of elements returned in the array."
                      }
                    ],
                    "required": true,
                    "type": "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }",
                    "schema": "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"
                  },
                  "substring": {
                    "name": "substring",
                    "global": false,
                    "description": "Returns the substring at the specified location within a String object.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "start The zero-based index number indicating the beginning of the substring."
                      },
                      {
                        "name": "param",
                        "text": "end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\r\nIf end is omitted, the characters from start through the end of the original string are returned."
                      }
                    ],
                    "required": true,
                    "type": "(start: number, end?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(start: number, end?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "toLowerCase": {
                    "name": "toLowerCase",
                    "global": false,
                    "description": "Converts all the alphabetic characters in a string to lowercase.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "toLocaleLowerCase": {
                    "name": "toLocaleLowerCase",
                    "global": false,
                    "description": "Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",
                    "tags": [],
                    "required": true,
                    "type": "(locales?: string | string[] | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(locales?: string | string[] | undefined): string",
                      "schema": []
                    }
                  },
                  "toUpperCase": {
                    "name": "toUpperCase",
                    "global": false,
                    "description": "Converts all the alphabetic characters in a string to uppercase.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "toLocaleUpperCase": {
                    "name": "toLocaleUpperCase",
                    "global": false,
                    "description": "Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",
                    "tags": [],
                    "required": true,
                    "type": "(locales?: string | string[] | undefined) => string",
                    "schema": "(locales?: string | string[] | undefined) => string"
                  },
                  "trim": {
                    "name": "trim",
                    "global": false,
                    "description": "Removes the leading and trailing white space and line terminator characters from a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "length": {
                    "name": "length",
                    "global": false,
                    "description": "Returns the length of a String object.",
                    "tags": [],
                    "required": true,
                    "type": "number",
                    "schema": "number"
                  },
                  "substr": {
                    "name": "substr",
                    "global": false,
                    "description": "Gets a substring beginning at the specified location and having the specified length.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "param",
                        "text": "from The starting position of the desired substring. The index of the first character in the string is zero."
                      },
                      {
                        "name": "param",
                        "text": "length The number of characters to include in the returned substring."
                      }
                    ],
                    "required": true,
                    "type": "(from: number, length?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(from: number, length?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "valueOf": {
                    "name": "valueOf",
                    "global": false,
                    "description": "Returns the primitive value of the specified object.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "codePointAt": {
                    "name": "codePointAt",
                    "global": false,
                    "description": "Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\r\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\r\nthe String resulting from converting this object to a String.\r\nIf there is no element at that position, the result is undefined.\r\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",
                    "tags": [],
                    "required": true,
                    "type": "(pos: number) => number | undefined",
                    "schema": {
                      "kind": "event",
                      "type": "(pos: number): number | undefined",
                      "schema": []
                    }
                  },
                  "includes": {
                    "name": "includes",
                    "global": false,
                    "description": "Returns true if searchString appears as a substring of the result of converting this\r\nobject to a String, at one or more positions that are\r\ngreater than or equal to position; otherwise, returns false.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString search string"
                      },
                      {
                        "name": "param",
                        "text": "position If position is undefined, 0 is assumed, so as to search all of the String."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "endsWith": {
                    "name": "endsWith",
                    "global": false,
                    "description": "Returns true if the sequence of elements of searchString converted to a String is the\r\nsame as the corresponding elements of this object (converted to a String) starting at\r\nendPosition – length(this). Otherwise returns false.",
                    "tags": [],
                    "required": true,
                    "type": "(searchString: string, endPosition?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, endPosition?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "normalize": {
                    "name": "normalize",
                    "global": false,
                    "description": "Returns the String value result of normalizing the string into the normalization form\r\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\r\nis \"NFC\""
                      },
                      {
                        "name": "param",
                        "text": "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\r\nis \"NFC\""
                      }
                    ],
                    "required": true,
                    "type": "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }",
                    "schema": "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }"
                  },
                  "repeat": {
                    "name": "repeat",
                    "global": false,
                    "description": "Returns a String value that is made from count copies appended together. If count is 0,\r\nthe empty string is returned.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "count number of copies to append"
                      }
                    ],
                    "required": true,
                    "type": "(count: number) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(count: number): string",
                      "schema": []
                    }
                  },
                  "startsWith": {
                    "name": "startsWith",
                    "global": false,
                    "description": "Returns true if the sequence of elements of searchString converted to a String is the\r\nsame as the corresponding elements of this object (converted to a String) starting at\r\nposition. Otherwise returns false.",
                    "tags": [],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => boolean",
                    "schema": "(searchString: string, position?: number | undefined) => boolean"
                  },
                  "anchor": {
                    "name": "anchor",
                    "global": false,
                    "description": "Returns an `<a>` HTML anchor element and sets the name attribute to the text value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "param",
                        "text": "name"
                      }
                    ],
                    "required": true,
                    "type": "(name: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(name: string): string",
                      "schema": []
                    }
                  },
                  "big": {
                    "name": "big",
                    "global": false,
                    "description": "Returns a `<big>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "blink": {
                    "name": "blink",
                    "global": false,
                    "description": "Returns a `<blink>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "bold": {
                    "name": "bold",
                    "global": false,
                    "description": "Returns a `<b>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "fixed": {
                    "name": "fixed",
                    "global": false,
                    "description": "Returns a `<tt>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "fontcolor": {
                    "name": "fontcolor",
                    "global": false,
                    "description": "Returns a `<font>` HTML element and sets the color attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "(color: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(color: string): string",
                      "schema": []
                    }
                  },
                  "fontsize": {
                    "name": "fontsize",
                    "global": false,
                    "description": "Returns a `<font>` HTML element and sets the size attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "{ (size: number): string; (size: string): string; }",
                    "schema": "{ (size: number): string; (size: string): string; }"
                  },
                  "italics": {
                    "name": "italics",
                    "global": false,
                    "description": "Returns an `<i>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "link": {
                    "name": "link",
                    "global": false,
                    "description": "Returns an `<a>` HTML element and sets the href attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "(url: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(url: string): string",
                      "schema": []
                    }
                  },
                  "small": {
                    "name": "small",
                    "global": false,
                    "description": "Returns a `<small>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "strike": {
                    "name": "strike",
                    "global": false,
                    "description": "Returns a `<strike>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "sub": {
                    "name": "sub",
                    "global": false,
                    "description": "Returns a `<sub>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "sup": {
                    "name": "sup",
                    "global": false,
                    "description": "Returns a `<sup>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "padStart": {
                    "name": "padStart",
                    "global": false,
                    "description": "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r\nThe padding is applied from the start (left) of the current string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "maxLength The length of the resulting string once the current string has been padded.\r\nIf this parameter is smaller than the current string's length, the current string will be returned as it is."
                      },
                      {
                        "name": "param",
                        "text": "fillString The string to pad the current string with.\r\nIf this string is too long, it will be truncated and the left-most part will be applied.\r\nThe default value for this parameter is \" \" (U+0020)."
                      }
                    ],
                    "required": true,
                    "type": "(maxLength: number, fillString?: string | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(maxLength: number, fillString?: string | undefined): string",
                      "schema": []
                    }
                  },
                  "padEnd": {
                    "name": "padEnd",
                    "global": false,
                    "description": "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r\nThe padding is applied from the end (right) of the current string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "maxLength The length of the resulting string once the current string has been padded.\r\nIf this parameter is smaller than the current string's length, the current string will be returned as it is."
                      },
                      {
                        "name": "param",
                        "text": "fillString The string to pad the current string with.\r\nIf this string is too long, it will be truncated and the left-most part will be applied.\r\nThe default value for this parameter is \" \" (U+0020)."
                      }
                    ],
                    "required": true,
                    "type": "(maxLength: number, fillString?: string | undefined) => string",
                    "schema": "(maxLength: number, fillString?: string | undefined) => string"
                  },
                  "trimEnd": {
                    "name": "trimEnd",
                    "global": false,
                    "description": "Removes the trailing white space and line terminator characters from a string.\nReturns a copy with trailing whitespace removed.",
                    "tags": [],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "trimStart": {
                    "name": "trimStart",
                    "global": false,
                    "description": "Removes the leading white space and line terminator characters from a string.\nReturns a copy with leading whitespace removed.",
                    "tags": [],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "trimLeft": {
                    "name": "trimLeft",
                    "global": false,
                    "description": "Removes the leading white space and line terminator characters from a string.\nRemoves whitespace from the left end of a string.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility. Use `trimStart` instead"
                      }
                    ],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "trimRight": {
                    "name": "trimRight",
                    "global": false,
                    "description": "Removes the trailing white space and line terminator characters from a string.\nRemoves whitespace from the right end of a string.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility. Use `trimEnd` instead"
                      }
                    ],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "matchAll": {
                    "name": "matchAll",
                    "global": false,
                    "description": "Matches a string with a regular expression, and returns an iterable of matches\r\ncontaining the results of that search.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp A variable name or string literal containing the regular expression pattern and flags."
                      }
                    ],
                    "required": true,
                    "type": "(regexp: RegExp) => IterableIterator<RegExpMatchArray>",
                    "schema": {
                      "kind": "event",
                      "type": "(regexp: RegExp): IterableIterator<RegExpMatchArray>",
                      "schema": []
                    }
                  },
                  "replaceAll": {
                    "name": "replaceAll",
                    "global": false,
                    "description": "Replace all instances of a substring in a string, using a regular expression or search string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue A string containing the text to replace for every successful match of searchValue in this string."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      }
                    ],
                    "required": true,
                    "type": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }",
                    "schema": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"
                  },
                  "at": {
                    "name": "at",
                    "global": false,
                    "description": "Returns a new String consisting of the single UTF-16 code unit located at the specified index.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "index The zero-based index of the desired code unit. A negative index will count back from the last item."
                      }
                    ],
                    "required": true,
                    "type": "(index: number) => string | undefined",
                    "schema": {
                      "kind": "event",
                      "type": "(index: number): string | undefined",
                      "schema": []
                    }
                  },
                  "__@iterator@647": {
                    "name": "__@iterator@647",
                    "global": false,
                    "description": "Iterator",
                    "tags": [],
                    "required": true,
                    "type": "() => IterableIterator<string>",
                    "schema": {
                      "kind": "event",
                      "type": "(): IterableIterator<string>"
                    }
                  }
                }
              },
              "{ dark: UsableTokens | (string & {}); light: UsableTokens | (string & {}); initial: UsableTokens | (string & {}); }"
            ]
          }
        },
        {
          "name": "size",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "any",
          "schema": "any"
        },
        {
          "name": "transparent",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "any",
          "schema": "any"
        },
        {
          "name": "blank",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "color",
          "type": "ComputedStyleProp",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "ComputedStyleProp",
            "schema": [
              "\"{color.primary.50}\"",
              "\"{color.primary.100}\"",
              "\"{color.primary.200}\"",
              "\"{color.primary.300}\"",
              "\"{color.primary.400}\"",
              "\"{color.primary.500}\"",
              "\"{color.primary.600}\"",
              "\"{color.primary.700}\"",
              "\"{color.primary.800}\"",
              "\"{color.primary.900}\"",
              "\"{color.white}\"",
              "\"{color.black}\"",
              "\"{color.gray.50}\"",
              "\"{color.gray.100}\"",
              "\"{color.gray.200}\"",
              "\"{color.gray.300}\"",
              "\"{color.gray.400}\"",
              "\"{color.gray.500}\"",
              "\"{color.gray.600}\"",
              "\"{color.gray.700}\"",
              "\"{color.gray.800}\"",
              "\"{color.gray.900}\"",
              "\"{color.green.50}\"",
              "\"{color.green.100}\"",
              "\"{color.green.200}\"",
              "\"{color.green.300}\"",
              "\"{color.green.400}\"",
              "\"{color.green.500}\"",
              "\"{color.green.600}\"",
              "\"{color.green.700}\"",
              "\"{color.green.800}\"",
              "\"{color.green.900}\"",
              "\"{color.yellow.50}\"",
              "\"{color.yellow.100}\"",
              "\"{color.yellow.200}\"",
              "\"{color.yellow.300}\"",
              "\"{color.yellow.400}\"",
              "\"{color.yellow.500}\"",
              "\"{color.yellow.600}\"",
              "\"{color.yellow.700}\"",
              "\"{color.yellow.800}\"",
              "\"{color.yellow.900}\"",
              "\"{color.orange.50}\"",
              "\"{color.orange.100}\"",
              "\"{color.orange.200}\"",
              "\"{color.orange.300}\"",
              "\"{color.orange.400}\"",
              "\"{color.orange.500}\"",
              "\"{color.orange.600}\"",
              "\"{color.orange.700}\"",
              "\"{color.orange.800}\"",
              "\"{color.orange.900}\"",
              "\"{color.red.50}\"",
              "\"{color.red.100}\"",
              "\"{color.red.200}\"",
              "\"{color.red.300}\"",
              "\"{color.red.400}\"",
              "\"{color.red.500}\"",
              "\"{color.red.600}\"",
              "\"{color.red.700}\"",
              "\"{color.red.800}\"",
              "\"{color.red.900}\"",
              "\"{color.pear.50}\"",
              "\"{color.pear.100}\"",
              "\"{color.pear.200}\"",
              "\"{color.pear.300}\"",
              "\"{color.pear.400}\"",
              "\"{color.pear.500}\"",
              "\"{color.pear.600}\"",
              "\"{color.pear.700}\"",
              "\"{color.pear.800}\"",
              "\"{color.pear.900}\"",
              "\"{color.teal.50}\"",
              "\"{color.teal.100}\"",
              "\"{color.teal.200}\"",
              "\"{color.teal.300}\"",
              "\"{color.teal.400}\"",
              "\"{color.teal.500}\"",
              "\"{color.teal.600}\"",
              "\"{color.teal.700}\"",
              "\"{color.teal.800}\"",
              "\"{color.teal.900}\"",
              "\"{color.lightblue.50}\"",
              "\"{color.lightblue.100}\"",
              "\"{color.lightblue.200}\"",
              "\"{color.lightblue.300}\"",
              "\"{color.lightblue.400}\"",
              "\"{color.lightblue.500}\"",
              "\"{color.lightblue.600}\"",
              "\"{color.lightblue.700}\"",
              "\"{color.lightblue.800}\"",
              "\"{color.lightblue.900}\"",
              "\"{color.blue.50}\"",
              "\"{color.blue.100}\"",
              "\"{color.blue.200}\"",
              "\"{color.blue.300}\"",
              "\"{color.blue.400}\"",
              "\"{color.blue.500}\"",
              "\"{color.blue.600}\"",
              "\"{color.blue.700}\"",
              "\"{color.blue.800}\"",
              "\"{color.blue.900}\"",
              "\"{color.indigoblue.50}\"",
              "\"{color.indigoblue.100}\"",
              "\"{color.indigoblue.200}\"",
              "\"{color.indigoblue.300}\"",
              "\"{color.indigoblue.400}\"",
              "\"{color.indigoblue.500}\"",
              "\"{color.indigoblue.600}\"",
              "\"{color.indigoblue.700}\"",
              "\"{color.indigoblue.800}\"",
              "\"{color.indigoblue.900}\"",
              "\"{color.royalblue.50}\"",
              "\"{color.royalblue.100}\"",
              "\"{color.royalblue.200}\"",
              "\"{color.royalblue.300}\"",
              "\"{color.royalblue.400}\"",
              "\"{color.royalblue.500}\"",
              "\"{color.royalblue.600}\"",
              "\"{color.royalblue.700}\"",
              "\"{color.royalblue.800}\"",
              "\"{color.royalblue.900}\"",
              "\"{color.purple.50}\"",
              "\"{color.purple.100}\"",
              "\"{color.purple.200}\"",
              "\"{color.purple.300}\"",
              "\"{color.purple.400}\"",
              "\"{color.purple.500}\"",
              "\"{color.purple.600}\"",
              "\"{color.purple.700}\"",
              "\"{color.purple.800}\"",
              "\"{color.purple.900}\"",
              "\"{color.pink.50}\"",
              "\"{color.pink.100}\"",
              "\"{color.pink.200}\"",
              "\"{color.pink.300}\"",
              "\"{color.pink.400}\"",
              "\"{color.pink.500}\"",
              "\"{color.pink.600}\"",
              "\"{color.pink.700}\"",
              "\"{color.pink.800}\"",
              "\"{color.pink.900}\"",
              "\"{color.ruby.50}\"",
              "\"{color.ruby.100}\"",
              "\"{color.ruby.200}\"",
              "\"{color.ruby.300}\"",
              "\"{color.ruby.400}\"",
              "\"{color.ruby.500}\"",
              "\"{color.ruby.600}\"",
              "\"{color.ruby.700}\"",
              "\"{color.ruby.800}\"",
              "\"{color.ruby.900}\"",
              "\"{container.maxWidth}\"",
              "\"{container.padding.mobile}\"",
              "\"{container.padding.sm}\"",
              "\"{backdrop.filter}\"",
              "\"{backdrop.background}\"",
              "\"{text.color.primary}\"",
              "\"{text.color.secondary}\"",
              "\"{text.color.secondaryHover}\"",
              "\"{text.xs.fontSize}\"",
              "\"{text.xs.lineHeight}\"",
              "\"{text.sm.fontSize}\"",
              "\"{text.sm.lineHeight}\"",
              "\"{text.base.fontSize}\"",
              "\"{text.base.lineHeight}\"",
              "\"{text.lg.fontSize}\"",
              "\"{text.lg.lineHeight}\"",
              "\"{text.2xl.fontSize}\"",
              "\"{text.2xl.lineHeight}\"",
              "\"{text.3xl.fontSize}\"",
              "\"{text.3xl.lineHeight}\"",
              "\"{text.4xl.fontSize}\"",
              "\"{text.4xl.lineHeight}\"",
              "\"{text.5xl.fontSize}\"",
              "\"{text.5xl.lineHeight}\"",
              "\"{text.6xl.fontSize}\"",
              "\"{text.6xl.lineHeight}\"",
              "\"{borders.primary.default}\"",
              "\"{borders.primary.hover}\"",
              "\"{borders.secondary.default}\"",
              "\"{borders.secondary.hover.original.initial}\"",
              "\"{borders.secondary.hover.original.dark}\"",
              "\"{surfaces.background.base}\"",
              "\"{states.primary.color.primary}\"",
              "\"{states.primary.color.secondary}\"",
              "\"{states.primary.backgroundColor.primary}\"",
              "\"{states.primary.backgroundColor.secondary}\"",
              "\"{states.primary.borderColor.primary}\"",
              "\"{states.info.color.primary}\"",
              "\"{states.info.color.secondary}\"",
              "\"{states.info.backgroundColor.primary}\"",
              "\"{states.info.backgroundColor.secondary}\"",
              "\"{states.info.borderColor.primary}\"",
              "\"{states.success.color.primary}\"",
              "\"{states.success.color.secondary}\"",
              "\"{states.success.backgroundColor.primary}\"",
              "\"{states.success.backgroundColor.secondary}\"",
              "\"{states.success.borderColor.primary}\"",
              "\"{states.warning.color.primary}\"",
              "\"{states.warning.color.secondary}\"",
              "\"{states.warning.backgroundColor.primary}\"",
              "\"{states.warning.backgroundColor.secondary}\"",
              "\"{states.warning.borderColor.primary}\"",
              "\"{states.danger.color.primary}\"",
              "\"{states.danger.color.secondary}\"",
              "\"{states.danger.backgroundColor.primary}\"",
              "\"{states.danger.backgroundColor.secondary}\"",
              "\"{states.danger.borderColor.primary}\"",
              "\"{typography.verticalMargin.sm}\"",
              "\"{typography.verticalMargin.base}\"",
              "\"{typography.letterSpacing.tight}\"",
              "\"{typography.letterSpacing.wide}\"",
              "\"{typography.fontSize.xs}\"",
              "\"{typography.fontSize.sm}\"",
              "\"{typography.fontSize.base}\"",
              "\"{typography.fontSize.lg}\"",
              "\"{typography.fontSize.xl}\"",
              "\"{typography.fontSize.2xl}\"",
              "\"{typography.fontSize.3xl}\"",
              "\"{typography.fontSize.4xl}\"",
              "\"{typography.fontSize.5xl}\"",
              "\"{typography.fontSize.6xl}\"",
              "\"{typography.fontSize.7xl}\"",
              "\"{typography.fontSize.8xl}\"",
              "\"{typography.fontSize.9xl}\"",
              "\"{typography.fontWeight.thin}\"",
              "\"{typography.fontWeight.extralight}\"",
              "\"{typography.fontWeight.light}\"",
              "\"{typography.fontWeight.normal}\"",
              "\"{typography.fontWeight.medium}\"",
              "\"{typography.fontWeight.semibold}\"",
              "\"{typography.fontWeight.bold}\"",
              "\"{typography.fontWeight.extrabold}\"",
              "\"{typography.fontWeight.black}\"",
              "\"{typography.lead.none}\"",
              "\"{typography.lead.tight}\"",
              "\"{typography.lead.snug}\"",
              "\"{typography.lead.normal}\"",
              "\"{typography.lead.relaxed}\"",
              "\"{typography.lead.loose}\"",
              "\"{typography.color.primary.50}\"",
              "\"{typography.color.primary.100}\"",
              "\"{typography.color.primary.200}\"",
              "\"{typography.color.primary.300}\"",
              "\"{typography.color.primary.400}\"",
              "\"{typography.color.primary.500}\"",
              "\"{typography.color.primary.600}\"",
              "\"{typography.color.primary.700}\"",
              "\"{typography.color.primary.800}\"",
              "\"{typography.color.primary.900}\"",
              "\"{typography.color.secondary.50}\"",
              "\"{typography.color.secondary.100}\"",
              "\"{typography.color.secondary.200}\"",
              "\"{typography.color.secondary.300}\"",
              "\"{typography.color.secondary.400}\"",
              "\"{typography.color.secondary.500}\"",
              "\"{typography.color.secondary.600}\"",
              "\"{typography.color.secondary.700}\"",
              "\"{typography.color.secondary.800}\"",
              "\"{typography.color.secondary.900}\"",
              "\"{prose.p.fontSize}\"",
              "\"{prose.p.lineHeight}\"",
              "\"{prose.p.margin}\"",
              "\"{prose.p.br.margin}\"",
              "\"{prose.h1.margin}\"",
              "\"{prose.h1.fontSize}\"",
              "\"{prose.h1.lineHeight}\"",
              "\"{prose.h1.fontWeight}\"",
              "\"{prose.h1.letterSpacing}\"",
              "\"{prose.h1.iconSize}\"",
              "\"{prose.h2.margin}\"",
              "\"{prose.h2.fontSize}\"",
              "\"{prose.h2.lineHeight}\"",
              "\"{prose.h2.fontWeight}\"",
              "\"{prose.h2.letterSpacing}\"",
              "\"{prose.h2.iconSize}\"",
              "\"{prose.h3.margin}\"",
              "\"{prose.h3.fontSize}\"",
              "\"{prose.h3.lineHeight}\"",
              "\"{prose.h3.fontWeight}\"",
              "\"{prose.h3.letterSpacing}\"",
              "\"{prose.h3.iconSize}\"",
              "\"{prose.h4.margin}\"",
              "\"{prose.h4.fontSize}\"",
              "\"{prose.h4.lineHeight}\"",
              "\"{prose.h4.fontWeight}\"",
              "\"{prose.h4.letterSpacing}\"",
              "\"{prose.h4.iconSize}\"",
              "\"{prose.h5.margin}\"",
              "\"{prose.h5.fontSize}\"",
              "\"{prose.h5.lineHeight}\"",
              "\"{prose.h5.fontWeight}\"",
              "\"{prose.h5.iconSize}\"",
              "\"{prose.h6.margin}\"",
              "\"{prose.h6.fontSize}\"",
              "\"{prose.h6.lineHeight}\"",
              "\"{prose.h6.fontWeight}\"",
              "\"{prose.h6.iconSize}\"",
              "\"{prose.strong.fontWeight}\"",
              "\"{prose.img.margin}\"",
              "\"{prose.a.textDecoration}\"",
              "\"{prose.a.color.light.default}\"",
              "\"{prose.a.color.light.hover}\"",
              "\"{prose.a.color.dark.default}\"",
              "\"{prose.a.color.dark.hover}\"",
              "\"{prose.a.borderBottom}\"",
              "\"{prose.a.borderWidth}\"",
              "\"{prose.a.borderColor.light.default}\"",
              "\"{prose.a.borderColor.light.hover}\"",
              "\"{prose.a.borderColor.dark.default}\"",
              "\"{prose.a.borderColor.dark.hover}\"",
              "\"{prose.a.borderStyle.default}\"",
              "\"{prose.a.borderStyle.hover}\"",
              "\"{prose.a.borderDistance}\"",
              "\"{prose.a.fontWeight}\"",
              "\"{prose.a.hasCode.borderBottom}\"",
              "\"{prose.a.code.border.default}\"",
              "\"{prose.a.code.border.hover}\"",
              "\"{prose.a.code.borderColor.light.default}\"",
              "\"{prose.a.code.borderColor.light.hover}\"",
              "\"{prose.a.code.borderColor.dark.default}\"",
              "\"{prose.a.code.borderColor.dark.hover}\"",
              "\"{prose.a.code.color.light.hover}\"",
              "\"{prose.a.code.color.dark.hover}\"",
              "\"{prose.a.code.background.light.hover}\"",
              "\"{prose.a.code.background.dark.hover}\"",
              "\"{prose.blockquote.margin}\"",
              "\"{prose.blockquote.padding}\"",
              "\"{prose.blockquote.quotes}\"",
              "\"{prose.blockquote.color.light}\"",
              "\"{prose.blockquote.color.dark}\"",
              "\"{prose.blockquote.borderLeft}\"",
              "\"{prose.blockquote.borderColor.light}\"",
              "\"{prose.blockquote.borderColor.dark}\"",
              "\"{prose.ul.listStyleType}\"",
              "\"{prose.ul.margin}\"",
              "\"{prose.ul.li.markerColor.light}\"",
              "\"{prose.ul.li.markerColor.dark}\"",
              "\"{prose.ol.listStyleType}\"",
              "\"{prose.ol.margin}\"",
              "\"{prose.ol.li.markerColor.light}\"",
              "\"{prose.ol.li.markerColor.dark}\"",
              "\"{prose.li.margin}\"",
              "\"{prose.li.listStylePosition}\"",
              "\"{prose.hr.margin}\"",
              "\"{prose.hr.style}\"",
              "\"{prose.hr.width}\"",
              "\"{prose.hr.color.light}\"",
              "\"{prose.hr.color.dark}\"",
              "\"{prose.table.margin}\"",
              "\"{prose.table.textAlign}\"",
              "\"{prose.table.fontSize}\"",
              "\"{prose.table.lineHeight}\"",
              "\"{prose.thead.border}\"",
              "\"{prose.thead.borderBottom}\"",
              "\"{prose.thead.borderColor.light}\"",
              "\"{prose.thead.borderColor.dark}\"",
              "\"{prose.th.color.light}\"",
              "\"{prose.th.color.dark}\"",
              "\"{prose.th.padding}\"",
              "\"{prose.th.fontWeight}\"",
              "\"{prose.tbody.tr.borderBottom}\"",
              "\"{prose.tbody.tr.borderColor.light}\"",
              "\"{prose.tbody.tr.borderColor.dark}\"",
              "\"{prose.tbody.td.padding}\"",
              "\"{prose.tbody.code.inline.fontSize}\"",
              "\"{prose.code.block.fontSize}\"",
              "\"{prose.code.block.margin}\"",
              "\"{prose.code.block.borderColor.light}\"",
              "\"{prose.code.block.borderColor.dark}\"",
              "\"{prose.code.block.color.light}\"",
              "\"{prose.code.block.color.dark}\"",
              "\"{prose.code.block.backgroundColor.light}\"",
              "\"{prose.code.block.backgroundColor.dark}\"",
              "\"{prose.code.block.pre.padding}\"",
              "\"{prose.code.inline.borderRadius}\"",
              "\"{prose.code.inline.padding}\"",
              "\"{prose.code.inline.fontSize}\"",
              "\"{prose.code.inline.fontWeight}\"",
              "\"{prose.code.inline.color.light}\"",
              "\"{prose.code.inline.color.dark}\"",
              "\"{prose.code.inline.backgroundColor.light}\"",
              "\"{prose.code.inline.backgroundColor.dark}\"",
              "\"{docus.page.height}\"",
              "\"{docus.page.maxWidth}\"",
              "\"{docus.header.height}\"",
              "\"{docus.footer.height}\"",
              "\"{width.screen}\"",
              "\"{height.screen}\"",
              "\"{shadow.xs}\"",
              "\"{shadow.sm}\"",
              "\"{shadow.md}\"",
              "\"{shadow.lg}\"",
              "\"{shadow.xl}\"",
              "\"{shadow.2xl}\"",
              "\"{shadow.none}\"",
              "\"{radii.none}\"",
              "\"{radii.2xs}\"",
              "\"{radii.xs}\"",
              "\"{radii.sm}\"",
              "\"{radii.md}\"",
              "\"{radii.lg}\"",
              "\"{radii.xl}\"",
              "\"{radii.2xl}\"",
              "\"{radii.3xl}\"",
              "\"{radii.full}\"",
              "\"{size.0}\"",
              "\"{size.2}\"",
              "\"{size.4}\"",
              "\"{size.6}\"",
              "\"{size.8}\"",
              "\"{size.12}\"",
              "\"{size.16}\"",
              "\"{size.20}\"",
              "\"{size.24}\"",
              "\"{size.32}\"",
              "\"{size.40}\"",
              "\"{size.48}\"",
              "\"{size.56}\"",
              "\"{size.64}\"",
              "\"{size.80}\"",
              "\"{size.104}\"",
              "\"{size.200}\"",
              "\"{size.xs}\"",
              "\"{size.sm}\"",
              "\"{size.md}\"",
              "\"{size.lg}\"",
              "\"{size.xl}\"",
              "\"{size.2xl}\"",
              "\"{size.3xl}\"",
              "\"{size.4xl}\"",
              "\"{size.5xl}\"",
              "\"{size.6xl}\"",
              "\"{size.7xl}\"",
              "\"{size.full}\"",
              "\"{space.0}\"",
              "\"{space.1}\"",
              "\"{space.2}\"",
              "\"{space.3}\"",
              "\"{space.4}\"",
              "\"{space.5}\"",
              "\"{space.6}\"",
              "\"{space.7}\"",
              "\"{space.8}\"",
              "\"{space.9}\"",
              "\"{space.10}\"",
              "\"{space.11}\"",
              "\"{space.12}\"",
              "\"{space.14}\"",
              "\"{space.16}\"",
              "\"{space.20}\"",
              "\"{space.24}\"",
              "\"{space.28}\"",
              "\"{space.32}\"",
              "\"{space.36}\"",
              "\"{space.40}\"",
              "\"{space.44}\"",
              "\"{space.48}\"",
              "\"{space.52}\"",
              "\"{space.56}\"",
              "\"{space.60}\"",
              "\"{space.64}\"",
              "\"{space.72}\"",
              "\"{space.80}\"",
              "\"{space.96}\"",
              "\"{space.px}\"",
              "\"{space.0-5}\"",
              "\"{space.1-5}\"",
              "\"{space.2-5}\"",
              "\"{space.3-5}\"",
              "\"{borderWidth.noBorder}\"",
              "\"{borderWidth.sm}\"",
              "\"{borderWidth.md}\"",
              "\"{borderWidth.lg}\"",
              "\"{opacity.noOpacity}\"",
              "\"{opacity.bright}\"",
              "\"{opacity.light}\"",
              "\"{opacity.soft}\"",
              "\"{opacity.medium}\"",
              "\"{opacity.high}\"",
              "\"{opacity.total}\"",
              "\"{font.sans}\"",
              "\"{font.serif}\"",
              "\"{font.mono}\"",
              "\"{fontWeight.thin}\"",
              "\"{fontWeight.extralight}\"",
              "\"{fontWeight.light}\"",
              "\"{fontWeight.normal}\"",
              "\"{fontWeight.medium}\"",
              "\"{fontWeight.semibold}\"",
              "\"{fontWeight.bold}\"",
              "\"{fontWeight.extrabold}\"",
              "\"{fontWeight.black}\"",
              "\"{fontSize.xs}\"",
              "\"{fontSize.sm}\"",
              "\"{fontSize.base}\"",
              "\"{fontSize.lg}\"",
              "\"{fontSize.xl}\"",
              "\"{fontSize.2xl}\"",
              "\"{fontSize.3xl}\"",
              "\"{fontSize.4xl}\"",
              "\"{fontSize.5xl}\"",
              "\"{fontSize.6xl}\"",
              "\"{fontSize.7xl}\"",
              "\"{fontSize.8xl}\"",
              "\"{fontSize.9xl}\"",
              "\"{letterSpacing.tighter}\"",
              "\"{letterSpacing.tight}\"",
              "\"{letterSpacing.normal}\"",
              "\"{letterSpacing.wide}\"",
              "\"{letterSpacing.wider}\"",
              "\"{letterSpacing.widest}\"",
              "\"{lead.1}\"",
              "\"{lead.2}\"",
              "\"{lead.3}\"",
              "\"{lead.4}\"",
              "\"{lead.5}\"",
              "\"{lead.6}\"",
              "\"{lead.7}\"",
              "\"{lead.8}\"",
              "\"{lead.9}\"",
              "\"{lead.10}\"",
              "\"{lead.none}\"",
              "\"{lead.tight}\"",
              "\"{lead.snug}\"",
              "\"{lead.normal}\"",
              "\"{lead.relaxed}\"",
              "\"{lead.loose}\"",
              "\"{media.xs}\"",
              "\"{media.sm}\"",
              "\"{media.md}\"",
              "\"{media.lg}\"",
              "\"{media.xl}\"",
              "\"{media.2xl}\"",
              "\"{media.rm}\"",
              "\"{media.landscape}\"",
              "\"{media.portrait}\"",
              {
                "kind": "object",
                "type": "string & {}",
                "schema": {
                  "toString": {
                    "name": "toString",
                    "global": false,
                    "description": "Returns a string representation of a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "charAt": {
                    "name": "charAt",
                    "global": false,
                    "description": "Returns the character at the specified index.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "pos The zero-based index of the desired character."
                      }
                    ],
                    "required": true,
                    "type": "(pos: number) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(pos: number): string",
                      "schema": []
                    }
                  },
                  "charCodeAt": {
                    "name": "charCodeAt",
                    "global": false,
                    "description": "Returns the Unicode value of the character at the specified location.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned."
                      }
                    ],
                    "required": true,
                    "type": "(index: number) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(index: number): number",
                      "schema": []
                    }
                  },
                  "concat": {
                    "name": "concat",
                    "global": false,
                    "description": "Returns a string that contains the concatenation of two or more strings.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "strings The strings to append to the end of the string."
                      }
                    ],
                    "required": true,
                    "type": "(...strings: string[]) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(...strings: string[]): string",
                      "schema": [
                        "string"
                      ]
                    }
                  },
                  "indexOf": {
                    "name": "indexOf",
                    "global": false,
                    "description": "Returns the position of the first occurrence of a substring.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString The substring to search for in the string"
                      },
                      {
                        "name": "param",
                        "text": "position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): number",
                      "schema": []
                    }
                  },
                  "lastIndexOf": {
                    "name": "lastIndexOf",
                    "global": false,
                    "description": "Returns the last occurrence of a substring in the string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString The substring to search for."
                      },
                      {
                        "name": "param",
                        "text": "position The index at which to begin searching. If omitted, the search begins at the end of the string."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => number",
                    "schema": "(searchString: string, position?: number | undefined) => number"
                  },
                  "localeCompare": {
                    "name": "localeCompare",
                    "global": false,
                    "description": "Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "that String to compare to target string"
                      },
                      {
                        "name": "param",
                        "text": "that String to compare to target string"
                      },
                      {
                        "name": "param",
                        "text": "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details."
                      },
                      {
                        "name": "param",
                        "text": "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details."
                      }
                    ],
                    "required": true,
                    "type": "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }",
                    "schema": "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"
                  },
                  "match": {
                    "name": "match",
                    "global": false,
                    "description": "Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string or an object that supports being matched against, and returns an array\r\ncontaining the results of that search, or null if no matches are found.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp A variable name or string literal containing the regular expression pattern and flags."
                      },
                      {
                        "name": "param",
                        "text": "matcher An object that supports being matched against."
                      }
                    ],
                    "required": true,
                    "type": "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }",
                    "schema": "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchValue A string or regular expression to search for."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      },
                      {
                        "name": "param",
                        "text": "searchValue An object that supports searching for and replacing matches within a string."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue The replacement text."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A object can search for and replace matches within a string."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      }
                    ],
                    "required": true,
                    "type": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }",
                    "schema": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"
                  },
                  "search": {
                    "name": "search",
                    "global": false,
                    "description": "Finds the first substring match in a regular expression search.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp The regular expression pattern and applicable flags."
                      },
                      {
                        "name": "param",
                        "text": "searcher An object which supports searching within a string."
                      }
                    ],
                    "required": true,
                    "type": "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }",
                    "schema": "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"
                  },
                  "slice": {
                    "name": "slice",
                    "global": false,
                    "description": "Returns a section of a string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "start The index to the beginning of the specified portion of stringObj."
                      },
                      {
                        "name": "param",
                        "text": "end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\r\nIf this value is not specified, the substring continues to the end of stringObj."
                      }
                    ],
                    "required": true,
                    "type": "(start?: number | undefined, end?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(start?: number | undefined, end?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "split": {
                    "name": "split",
                    "global": false,
                    "description": "Split a string into substrings using the specified separator and return them as an array.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned."
                      },
                      {
                        "name": "param",
                        "text": "limit A value used to limit the number of elements returned in the array."
                      },
                      {
                        "name": "param",
                        "text": "splitter An object that can split a string."
                      },
                      {
                        "name": "param",
                        "text": "limit A value used to limit the number of elements returned in the array."
                      }
                    ],
                    "required": true,
                    "type": "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }",
                    "schema": "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"
                  },
                  "substring": {
                    "name": "substring",
                    "global": false,
                    "description": "Returns the substring at the specified location within a String object.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "start The zero-based index number indicating the beginning of the substring."
                      },
                      {
                        "name": "param",
                        "text": "end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\r\nIf end is omitted, the characters from start through the end of the original string are returned."
                      }
                    ],
                    "required": true,
                    "type": "(start: number, end?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(start: number, end?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "toLowerCase": {
                    "name": "toLowerCase",
                    "global": false,
                    "description": "Converts all the alphabetic characters in a string to lowercase.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "toLocaleLowerCase": {
                    "name": "toLocaleLowerCase",
                    "global": false,
                    "description": "Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",
                    "tags": [],
                    "required": true,
                    "type": "(locales?: string | string[] | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(locales?: string | string[] | undefined): string",
                      "schema": []
                    }
                  },
                  "toUpperCase": {
                    "name": "toUpperCase",
                    "global": false,
                    "description": "Converts all the alphabetic characters in a string to uppercase.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "toLocaleUpperCase": {
                    "name": "toLocaleUpperCase",
                    "global": false,
                    "description": "Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",
                    "tags": [],
                    "required": true,
                    "type": "(locales?: string | string[] | undefined) => string",
                    "schema": "(locales?: string | string[] | undefined) => string"
                  },
                  "trim": {
                    "name": "trim",
                    "global": false,
                    "description": "Removes the leading and trailing white space and line terminator characters from a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "length": {
                    "name": "length",
                    "global": false,
                    "description": "Returns the length of a String object.",
                    "tags": [],
                    "required": true,
                    "type": "number",
                    "schema": "number"
                  },
                  "substr": {
                    "name": "substr",
                    "global": false,
                    "description": "Gets a substring beginning at the specified location and having the specified length.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "param",
                        "text": "from The starting position of the desired substring. The index of the first character in the string is zero."
                      },
                      {
                        "name": "param",
                        "text": "length The number of characters to include in the returned substring."
                      }
                    ],
                    "required": true,
                    "type": "(from: number, length?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(from: number, length?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "valueOf": {
                    "name": "valueOf",
                    "global": false,
                    "description": "Returns the primitive value of the specified object.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "codePointAt": {
                    "name": "codePointAt",
                    "global": false,
                    "description": "Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\r\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\r\nthe String resulting from converting this object to a String.\r\nIf there is no element at that position, the result is undefined.\r\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",
                    "tags": [],
                    "required": true,
                    "type": "(pos: number) => number | undefined",
                    "schema": {
                      "kind": "event",
                      "type": "(pos: number): number | undefined",
                      "schema": []
                    }
                  },
                  "includes": {
                    "name": "includes",
                    "global": false,
                    "description": "Returns true if searchString appears as a substring of the result of converting this\r\nobject to a String, at one or more positions that are\r\ngreater than or equal to position; otherwise, returns false.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString search string"
                      },
                      {
                        "name": "param",
                        "text": "position If position is undefined, 0 is assumed, so as to search all of the String."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "endsWith": {
                    "name": "endsWith",
                    "global": false,
                    "description": "Returns true if the sequence of elements of searchString converted to a String is the\r\nsame as the corresponding elements of this object (converted to a String) starting at\r\nendPosition – length(this). Otherwise returns false.",
                    "tags": [],
                    "required": true,
                    "type": "(searchString: string, endPosition?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, endPosition?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "normalize": {
                    "name": "normalize",
                    "global": false,
                    "description": "Returns the String value result of normalizing the string into the normalization form\r\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\r\nis \"NFC\""
                      },
                      {
                        "name": "param",
                        "text": "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\r\nis \"NFC\""
                      }
                    ],
                    "required": true,
                    "type": "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }",
                    "schema": "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }"
                  },
                  "repeat": {
                    "name": "repeat",
                    "global": false,
                    "description": "Returns a String value that is made from count copies appended together. If count is 0,\r\nthe empty string is returned.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "count number of copies to append"
                      }
                    ],
                    "required": true,
                    "type": "(count: number) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(count: number): string",
                      "schema": []
                    }
                  },
                  "startsWith": {
                    "name": "startsWith",
                    "global": false,
                    "description": "Returns true if the sequence of elements of searchString converted to a String is the\r\nsame as the corresponding elements of this object (converted to a String) starting at\r\nposition. Otherwise returns false.",
                    "tags": [],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => boolean",
                    "schema": "(searchString: string, position?: number | undefined) => boolean"
                  },
                  "anchor": {
                    "name": "anchor",
                    "global": false,
                    "description": "Returns an `<a>` HTML anchor element and sets the name attribute to the text value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "param",
                        "text": "name"
                      }
                    ],
                    "required": true,
                    "type": "(name: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(name: string): string",
                      "schema": []
                    }
                  },
                  "big": {
                    "name": "big",
                    "global": false,
                    "description": "Returns a `<big>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "blink": {
                    "name": "blink",
                    "global": false,
                    "description": "Returns a `<blink>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "bold": {
                    "name": "bold",
                    "global": false,
                    "description": "Returns a `<b>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "fixed": {
                    "name": "fixed",
                    "global": false,
                    "description": "Returns a `<tt>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "fontcolor": {
                    "name": "fontcolor",
                    "global": false,
                    "description": "Returns a `<font>` HTML element and sets the color attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "(color: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(color: string): string",
                      "schema": []
                    }
                  },
                  "fontsize": {
                    "name": "fontsize",
                    "global": false,
                    "description": "Returns a `<font>` HTML element and sets the size attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "{ (size: number): string; (size: string): string; }",
                    "schema": "{ (size: number): string; (size: string): string; }"
                  },
                  "italics": {
                    "name": "italics",
                    "global": false,
                    "description": "Returns an `<i>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "link": {
                    "name": "link",
                    "global": false,
                    "description": "Returns an `<a>` HTML element and sets the href attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "(url: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(url: string): string",
                      "schema": []
                    }
                  },
                  "small": {
                    "name": "small",
                    "global": false,
                    "description": "Returns a `<small>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "strike": {
                    "name": "strike",
                    "global": false,
                    "description": "Returns a `<strike>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "sub": {
                    "name": "sub",
                    "global": false,
                    "description": "Returns a `<sub>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "sup": {
                    "name": "sup",
                    "global": false,
                    "description": "Returns a `<sup>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "padStart": {
                    "name": "padStart",
                    "global": false,
                    "description": "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r\nThe padding is applied from the start (left) of the current string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "maxLength The length of the resulting string once the current string has been padded.\r\nIf this parameter is smaller than the current string's length, the current string will be returned as it is."
                      },
                      {
                        "name": "param",
                        "text": "fillString The string to pad the current string with.\r\nIf this string is too long, it will be truncated and the left-most part will be applied.\r\nThe default value for this parameter is \" \" (U+0020)."
                      }
                    ],
                    "required": true,
                    "type": "(maxLength: number, fillString?: string | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(maxLength: number, fillString?: string | undefined): string",
                      "schema": []
                    }
                  },
                  "padEnd": {
                    "name": "padEnd",
                    "global": false,
                    "description": "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r\nThe padding is applied from the end (right) of the current string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "maxLength The length of the resulting string once the current string has been padded.\r\nIf this parameter is smaller than the current string's length, the current string will be returned as it is."
                      },
                      {
                        "name": "param",
                        "text": "fillString The string to pad the current string with.\r\nIf this string is too long, it will be truncated and the left-most part will be applied.\r\nThe default value for this parameter is \" \" (U+0020)."
                      }
                    ],
                    "required": true,
                    "type": "(maxLength: number, fillString?: string | undefined) => string",
                    "schema": "(maxLength: number, fillString?: string | undefined) => string"
                  },
                  "trimEnd": {
                    "name": "trimEnd",
                    "global": false,
                    "description": "Removes the trailing white space and line terminator characters from a string.\nReturns a copy with trailing whitespace removed.",
                    "tags": [],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "trimStart": {
                    "name": "trimStart",
                    "global": false,
                    "description": "Removes the leading white space and line terminator characters from a string.\nReturns a copy with leading whitespace removed.",
                    "tags": [],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "trimLeft": {
                    "name": "trimLeft",
                    "global": false,
                    "description": "Removes the leading white space and line terminator characters from a string.\nRemoves whitespace from the left end of a string.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility. Use `trimStart` instead"
                      }
                    ],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "trimRight": {
                    "name": "trimRight",
                    "global": false,
                    "description": "Removes the trailing white space and line terminator characters from a string.\nRemoves whitespace from the right end of a string.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility. Use `trimEnd` instead"
                      }
                    ],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "matchAll": {
                    "name": "matchAll",
                    "global": false,
                    "description": "Matches a string with a regular expression, and returns an iterable of matches\r\ncontaining the results of that search.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp A variable name or string literal containing the regular expression pattern and flags."
                      }
                    ],
                    "required": true,
                    "type": "(regexp: RegExp) => IterableIterator<RegExpMatchArray>",
                    "schema": {
                      "kind": "event",
                      "type": "(regexp: RegExp): IterableIterator<RegExpMatchArray>",
                      "schema": []
                    }
                  },
                  "replaceAll": {
                    "name": "replaceAll",
                    "global": false,
                    "description": "Replace all instances of a substring in a string, using a regular expression or search string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue A string containing the text to replace for every successful match of searchValue in this string."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      }
                    ],
                    "required": true,
                    "type": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }",
                    "schema": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"
                  },
                  "at": {
                    "name": "at",
                    "global": false,
                    "description": "Returns a new String consisting of the single UTF-16 code unit located at the specified index.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "index The zero-based index of the desired code unit. A negative index will count back from the last item."
                      }
                    ],
                    "required": true,
                    "type": "(index: number) => string | undefined",
                    "schema": {
                      "kind": "event",
                      "type": "(index: number): string | undefined",
                      "schema": []
                    }
                  },
                  "__@iterator@647": {
                    "name": "__@iterator@647",
                    "global": false,
                    "description": "Iterator",
                    "tags": [],
                    "required": true,
                    "type": "() => IterableIterator<string>",
                    "schema": {
                      "kind": "event",
                      "type": "(): IterableIterator<string>"
                    }
                  }
                }
              },
              "{ dark: UsableTokens | (string & {}); light: UsableTokens | (string & {}); initial: UsableTokens | (string & {}); }"
            ]
          }
        },
        {
          "name": "blank",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "href",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "size",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "transparent",
          "type": "any",
          "description": "",
          "schema": "any"
        }
      ]
    }
  },
  "Callout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "pascalName": "Callout",
    "kebabName": "callout",
    "chunkName": "components/callout",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "meta": {
      "props": [
        {
          "name": "type",
          "global": false,
          "description": "",
          "tags": [
            {
              "name": "values",
              "text": "info, success, warning, danger"
            }
          ],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"info\""
        },
        {
          "name": "modelValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any",
          "default": "ref(false)"
        }
      ],
      "slots": [
        {
          "name": "summary",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "content",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [
        {
          "name": "update:modelValue",
          "type": "any[]",
          "signature": "(event: \"update:modelValue\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "type",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "modelValue",
          "type": "any",
          "description": "",
          "schema": "any"
        }
      ]
    }
  },
  "CodeBlock": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "pascalName": "CodeBlock",
    "kebabName": "code-block",
    "chunkName": "components/code-block",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "meta": {
      "props": [
        {
          "name": "label",
          "global": false,
          "description": "Label to display for the tab",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "active",
          "global": false,
          "description": "Select which tab should be active",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        },
        {
          "name": "preview",
          "global": false,
          "description": "Preiew block are bordered and have small padding.",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "label",
          "type": "string",
          "description": "Label to display for the tab",
          "schema": "string"
        },
        {
          "name": "active",
          "type": "boolean",
          "description": "Select which tab should be active",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        },
        {
          "name": "preview",
          "type": "boolean",
          "description": "Preiew block are bordered and have small padding.",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "CodeGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "pascalName": "CodeGroup",
    "kebabName": "code-group",
    "chunkName": "components/code-group",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Container": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "pascalName": "Container",
    "kebabName": "container",
    "chunkName": "components/container",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "meta": {
      "props": [
        {
          "name": "padded",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "boolean | { dark: boolean; light: boolean; initial: boolean; } | { [key: string]: boolean; } | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | { dark: boolean; light: boolean; initial: boolean; } | { [key: string]: boolean; } | undefined",
            "schema": [
              "undefined",
              "false",
              "true",
              "{ dark: boolean; light: boolean; initial: boolean; }",
              {
                "kind": "object",
                "type": "{ [key: string]: boolean; }",
                "schema": {}
              }
            ]
          }
        },
        {
          "name": "fluid",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "boolean | { dark: boolean; light: boolean; initial: boolean; } | { [key: string]: boolean; } | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | { dark: boolean; light: boolean; initial: boolean; } | { [key: string]: boolean; } | undefined",
            "schema": [
              "undefined",
              "false",
              "true",
              "{ dark: boolean; light: boolean; initial: boolean; }",
              {
                "kind": "object",
                "type": "{ [key: string]: boolean; }",
                "schema": {}
              }
            ]
          }
        },
        {
          "name": "as",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "keyof HTMLElementTagNameMap | undefined",
          "schema": {
            "kind": "enum",
            "type": "keyof HTMLElementTagNameMap | undefined",
            "schema": [
              "undefined",
              "\"object\"",
              "\"map\"",
              "\"style\"",
              "\"label\"",
              "\"a\"",
              "\"abbr\"",
              "\"address\"",
              "\"area\"",
              "\"article\"",
              "\"aside\"",
              "\"audio\"",
              "\"b\"",
              "\"base\"",
              "\"bdi\"",
              "\"bdo\"",
              "\"blockquote\"",
              "\"body\"",
              "\"br\"",
              "\"button\"",
              "\"canvas\"",
              "\"caption\"",
              "\"cite\"",
              "\"code\"",
              "\"col\"",
              "\"colgroup\"",
              "\"data\"",
              "\"datalist\"",
              "\"dd\"",
              "\"del\"",
              "\"details\"",
              "\"dfn\"",
              "\"dialog\"",
              "\"div\"",
              "\"dl\"",
              "\"dt\"",
              "\"em\"",
              "\"embed\"",
              "\"fieldset\"",
              "\"figcaption\"",
              "\"figure\"",
              "\"footer\"",
              "\"form\"",
              "\"h1\"",
              "\"h2\"",
              "\"h3\"",
              "\"h4\"",
              "\"h5\"",
              "\"h6\"",
              "\"head\"",
              "\"header\"",
              "\"hgroup\"",
              "\"hr\"",
              "\"html\"",
              "\"i\"",
              "\"iframe\"",
              "\"img\"",
              "\"input\"",
              "\"ins\"",
              "\"kbd\"",
              "\"legend\"",
              "\"li\"",
              "\"link\"",
              "\"main\"",
              "\"mark\"",
              "\"menu\"",
              "\"meta\"",
              "\"meter\"",
              "\"nav\"",
              "\"noscript\"",
              "\"ol\"",
              "\"optgroup\"",
              "\"option\"",
              "\"output\"",
              "\"p\"",
              "\"picture\"",
              "\"pre\"",
              "\"progress\"",
              "\"q\"",
              "\"rp\"",
              "\"rt\"",
              "\"ruby\"",
              "\"s\"",
              "\"samp\"",
              "\"script\"",
              "\"section\"",
              "\"select\"",
              "\"slot\"",
              "\"small\"",
              "\"source\"",
              "\"span\"",
              "\"strong\"",
              "\"sub\"",
              "\"summary\"",
              "\"sup\"",
              "\"table\"",
              "\"tbody\"",
              "\"td\"",
              "\"template\"",
              "\"textarea\"",
              "\"tfoot\"",
              "\"th\"",
              "\"thead\"",
              "\"time\"",
              "\"title\"",
              "\"tr\"",
              "\"track\"",
              "\"u\"",
              "\"ul\"",
              "\"var\"",
              "\"video\"",
              "\"wbr\""
            ]
          },
          "default": "\"div\""
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "as",
          "type": "keyof HTMLElementTagNameMap",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "keyof HTMLElementTagNameMap",
            "schema": [
              "\"object\"",
              "\"map\"",
              "\"style\"",
              "\"label\"",
              "\"a\"",
              "\"abbr\"",
              "\"address\"",
              "\"area\"",
              "\"article\"",
              "\"aside\"",
              "\"audio\"",
              "\"b\"",
              "\"base\"",
              "\"bdi\"",
              "\"bdo\"",
              "\"blockquote\"",
              "\"body\"",
              "\"br\"",
              "\"button\"",
              "\"canvas\"",
              "\"caption\"",
              "\"cite\"",
              "\"code\"",
              "\"col\"",
              "\"colgroup\"",
              "\"data\"",
              "\"datalist\"",
              "\"dd\"",
              "\"del\"",
              "\"details\"",
              "\"dfn\"",
              "\"dialog\"",
              "\"div\"",
              "\"dl\"",
              "\"dt\"",
              "\"em\"",
              "\"embed\"",
              "\"fieldset\"",
              "\"figcaption\"",
              "\"figure\"",
              "\"footer\"",
              "\"form\"",
              "\"h1\"",
              "\"h2\"",
              "\"h3\"",
              "\"h4\"",
              "\"h5\"",
              "\"h6\"",
              "\"head\"",
              "\"header\"",
              "\"hgroup\"",
              "\"hr\"",
              "\"html\"",
              "\"i\"",
              "\"iframe\"",
              "\"img\"",
              "\"input\"",
              "\"ins\"",
              "\"kbd\"",
              "\"legend\"",
              "\"li\"",
              "\"link\"",
              "\"main\"",
              "\"mark\"",
              "\"menu\"",
              "\"meta\"",
              "\"meter\"",
              "\"nav\"",
              "\"noscript\"",
              "\"ol\"",
              "\"optgroup\"",
              "\"option\"",
              "\"output\"",
              "\"p\"",
              "\"picture\"",
              "\"pre\"",
              "\"progress\"",
              "\"q\"",
              "\"rp\"",
              "\"rt\"",
              "\"ruby\"",
              "\"s\"",
              "\"samp\"",
              "\"script\"",
              "\"section\"",
              "\"select\"",
              "\"slot\"",
              "\"small\"",
              "\"source\"",
              "\"span\"",
              "\"strong\"",
              "\"sub\"",
              "\"summary\"",
              "\"sup\"",
              "\"table\"",
              "\"tbody\"",
              "\"td\"",
              "\"template\"",
              "\"textarea\"",
              "\"tfoot\"",
              "\"th\"",
              "\"thead\"",
              "\"time\"",
              "\"title\"",
              "\"tr\"",
              "\"track\"",
              "\"u\"",
              "\"ul\"",
              "\"var\"",
              "\"video\"",
              "\"wbr\""
            ]
          }
        },
        {
          "name": "padded",
          "type": "boolean | { dark: boolean; light: boolean; initial: boolean; } | { [key: string]: boolean; }",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | { dark: boolean; light: boolean; initial: boolean; } | { [key: string]: boolean; }",
            "schema": [
              "false",
              "true",
              "{ dark: boolean; light: boolean; initial: boolean; }",
              {
                "kind": "object",
                "type": "{ [key: string]: boolean; }",
                "schema": {}
              }
            ]
          }
        },
        {
          "name": "fluid",
          "type": "boolean | { dark: boolean; light: boolean; initial: boolean; } | { [key: string]: boolean; }",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | { dark: boolean; light: boolean; initial: boolean; } | { [key: string]: boolean; }",
            "schema": [
              "false",
              "true",
              "{ dark: boolean; light: boolean; initial: boolean; }",
              {
                "kind": "object",
                "type": "{ [key: string]: boolean; }",
                "schema": {}
              }
            ]
          }
        }
      ]
    }
  },
  "CopyButton": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "pascalName": "CopyButton",
    "kebabName": "copy-button",
    "chunkName": "components/copy-button",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "meta": {
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "Ellipsis": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Ellipsis.vue",
    "pascalName": "Ellipsis",
    "kebabName": "ellipsis",
    "chunkName": "components/ellipsis",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Ellipsis.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/Ellipsis.vue",
    "meta": {
      "props": [
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"10rem\""
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"10rem\""
        },
        {
          "name": "zIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"10\""
        },
        {
          "name": "top",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"0\""
        },
        {
          "name": "left",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"auto\""
        },
        {
          "name": "right",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"auto\""
        },
        {
          "name": "blur",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"50px\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "width",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "height",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "zIndex",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "top",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "left",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "right",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "blur",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "List": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "pascalName": "List",
    "kebabName": "list",
    "chunkName": "components/list",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "pascalName": "NuxtImg",
    "kebabName": "nuxt-img",
    "chunkName": "components/nuxt-img",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Props": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "pascalName": "Props",
    "kebabName": "props",
    "chunkName": "components/props",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Sandbox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "pascalName": "Sandbox",
    "kebabName": "sandbox",
    "chunkName": "components/sandbox",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "meta": {
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "repo",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "branch",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "dir",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "file",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"app.vue\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "repo",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "branch",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "dir",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "file",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "SourceLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/SourceLink.vue",
    "pascalName": "SourceLink",
    "kebabName": "source-link",
    "chunkName": "components/source-link",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/SourceLink.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/SourceLink.vue",
    "meta": {
      "props": [
        {
          "name": "source",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "source",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "TabsHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "pascalName": "TabsHeader",
    "kebabName": "tabs-header",
    "chunkName": "components/tabs-header",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "meta": {
      "props": [
        {
          "name": "tabs",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "{ label: string; }[]",
          "schema": {
            "kind": "array",
            "type": "{ label: string; }[]",
            "schema": [
              {
                "kind": "object",
                "type": "{ label: string; }",
                "schema": {
                  "label": {
                    "name": "label",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "activeTabIndex",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "number",
          "schema": "number"
        }
      ],
      "slots": [
        {
          "name": "footer",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [
        {
          "name": "update:activeTabIndex",
          "type": "any[]",
          "signature": "(event: \"update:activeTabIndex\", ...args: any[]): void",
          "schema": [
            "any"
          ]
        }
      ],
      "exposed": [
        {
          "name": "tabs",
          "type": "{ label: string; }[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "{ label: string; }[]",
            "schema": [
              {
                "kind": "object",
                "type": "{ label: string; }",
                "schema": {
                  "label": {
                    "name": "label",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "activeTabIndex",
          "type": "number",
          "description": "",
          "schema": "number"
        }
      ]
    }
  },
  "Terminal": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "pascalName": "Terminal",
    "kebabName": "terminal",
    "chunkName": "components/terminal",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "meta": {
      "props": [
        {
          "name": "content",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "content",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "VideoPlayer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "pascalName": "VideoPlayer",
    "kebabName": "video-player",
    "chunkName": "components/video-player",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "meta": {
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "poster",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "sources",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "any[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "any[]",
                "schema": [
                  "any"
                ]
              }
            ]
          },
          "default": "[]"
        },
        {
          "name": "autoplay",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "poster",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "sources",
          "type": "any[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "any[]",
            "schema": [
              "any"
            ]
          }
        },
        {
          "name": "autoplay",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "IconCodeSandBox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "pascalName": "IconCodeSandBox",
    "kebabName": "icon-code-sand-box",
    "chunkName": "components/icon-code-sand-box",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconDocus": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "pascalName": "IconDocus",
    "kebabName": "icon-docus",
    "chunkName": "components/icon-docus",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxt": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "pascalName": "IconNuxt",
    "kebabName": "icon-nuxt",
    "chunkName": "components/icon-nuxt",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtContent": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "pascalName": "IconNuxtContent",
    "kebabName": "icon-nuxt-content",
    "chunkName": "components/icon-nuxt-content",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtLabs": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "pascalName": "IconNuxtLabs",
    "kebabName": "icon-nuxt-labs",
    "chunkName": "components/icon-nuxt-labs",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtStudio": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "pascalName": "IconNuxtStudio",
    "kebabName": "icon-nuxt-studio",
    "chunkName": "components/icon-nuxt-studio",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconStackBlitz": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "pascalName": "IconStackBlitz",
    "kebabName": "icon-stack-blitz",
    "chunkName": "components/icon-stack-blitz",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconVueTelescope": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "pascalName": "IconVueTelescope",
    "kebabName": "icon-vue-telescope",
    "chunkName": "components/icon-vue-telescope",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "BlockHero": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "pascalName": "BlockHero",
    "kebabName": "block-hero",
    "chunkName": "components/block-hero",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "meta": {
      "props": [
        {
          "name": "cta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        },
        {
          "name": "secondary",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        },
        {
          "name": "snippet",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "video",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        }
      ],
      "slots": [
        {
          "name": "announce",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "title",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "description",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "extra",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "actions",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "support",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "cta",
          "type": "string[] | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        },
        {
          "name": "secondary",
          "type": "string[] | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        },
        {
          "name": "snippet",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "video",
          "type": "string[] | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string[] | undefined",
            "schema": [
              "undefined",
              {
                "kind": "array",
                "type": "string[]",
                "schema": [
                  "string"
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "Card": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "pascalName": "Card",
    "kebabName": "card",
    "chunkName": "components/card",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "meta": {
      "props": [
        {
          "name": "icon",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "iconClass",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "blurry",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          },
          "default": "true"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "icon",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "iconClass",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "blurry",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": [
              "false",
              "true"
            ]
          }
        }
      ]
    }
  },
  "CardGrid": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "pascalName": "CardGrid",
    "kebabName": "card-grid",
    "chunkName": "components/card-grid",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "meta": {
      "props": [
        {
          "name": "title",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Features\""
        }
      ],
      "slots": [
        {
          "name": "root",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "title",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        },
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "title",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "VoltaBoard": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "pascalName": "VoltaBoard",
    "kebabName": "volta-board",
    "chunkName": "components/volta-board",
    "shortPath": "node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "meta": {
      "props": [
        {
          "name": "token",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "token",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ContentPreviewMode": {
    "mode": "all",
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxthq/studio/dist/runtime/components/ContentPreviewMode.vue",
    "pascalName": "ContentPreviewMode",
    "kebabName": "content-preview-mode",
    "chunkName": "components/content-preview-mode",
    "shortPath": "node_modules/@nuxthq/studio/dist/runtime/components/ContentPreviewMode.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxthq/studio/dist/runtime/components/ContentPreviewMode.vue",
    "meta": {
      "props": [
        {
          "name": "previewToken",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "schema": "Record<string, any>"
        },
        {
          "name": "apiURL",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "string",
          "schema": "string"
        },
        {
          "name": "storageReady",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Ref<boolean>",
          "schema": "Ref<boolean>"
        },
        {
          "name": "refresh",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Function",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {
              "apply": {
                "name": "apply",
                "global": false,
                "description": "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the this object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A set of arguments to be passed to the function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, argArray?: any) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, argArray?: any): any",
                  "schema": []
                }
              },
              "call": {
                "name": "call",
                "global": false,
                "description": "Calls a method of an object, substituting another object for the current object.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the current object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the method."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "bind": {
                "name": "bind",
                "global": false,
                "description": "For a given function, creates a bound function that has the same body as the original function.\r\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg An object to which the this keyword can refer inside the new function."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the new function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": "(this: Function, thisArg: any, ...argArray: any[]) => any"
              },
              "toString": {
                "name": "toString",
                "global": false,
                "description": "Returns a string representation of a function.",
                "tags": [],
                "required": true,
                "type": "() => string",
                "schema": {
                  "kind": "event",
                  "type": "(): string"
                }
              },
              "prototype": {
                "name": "prototype",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "length": {
                "name": "length",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "number",
                "schema": "number"
              },
              "arguments": {
                "name": "arguments",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "caller": {
                "name": "caller",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "Function",
                "schema": "Function"
              },
              "name": {
                "name": "name",
                "global": false,
                "description": "Returns the name of the function. Function names are read-only and can not be changed.",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              },
              "__@hasInstance@797": {
                "name": "__@hasInstance@797",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\r\nas a constructor function.\r\n\r\nA constructor function can control which objects are recognized as its instances by\r\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "schema": {
                  "kind": "event",
                  "type": "(value: any): boolean",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "init",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "Function",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {
              "apply": {
                "name": "apply",
                "global": false,
                "description": "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the this object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A set of arguments to be passed to the function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, argArray?: any) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, argArray?: any): any",
                  "schema": []
                }
              },
              "call": {
                "name": "call",
                "global": false,
                "description": "Calls a method of an object, substituting another object for the current object.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the current object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the method."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "bind": {
                "name": "bind",
                "global": false,
                "description": "For a given function, creates a bound function that has the same body as the original function.\r\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg An object to which the this keyword can refer inside the new function."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the new function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": "(this: Function, thisArg: any, ...argArray: any[]) => any"
              },
              "toString": {
                "name": "toString",
                "global": false,
                "description": "Returns a string representation of a function.",
                "tags": [],
                "required": true,
                "type": "() => string",
                "schema": {
                  "kind": "event",
                  "type": "(): string"
                }
              },
              "prototype": {
                "name": "prototype",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "length": {
                "name": "length",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "number",
                "schema": "number"
              },
              "arguments": {
                "name": "arguments",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "caller": {
                "name": "caller",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "Function",
                "schema": "Function"
              },
              "name": {
                "name": "name",
                "global": false,
                "description": "Returns the name of the function. Function names are read-only and can not be changed.",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              },
              "__@hasInstance@797": {
                "name": "__@hasInstance@797",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\r\nas a constructor function.\r\n\r\nA constructor function can control which objects are recognized as its instances by\r\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "schema": {
                  "kind": "event",
                  "type": "(value: any): boolean",
                  "schema": []
                }
              }
            }
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "previewToken",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        },
        {
          "name": "apiURL",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "storageReady",
          "type": "Ref<boolean>",
          "description": "",
          "schema": "Ref<boolean>"
        },
        {
          "name": "refresh",
          "type": "Function",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {
              "apply": {
                "name": "apply",
                "global": false,
                "description": "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the this object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A set of arguments to be passed to the function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, argArray?: any) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, argArray?: any): any",
                  "schema": []
                }
              },
              "call": {
                "name": "call",
                "global": false,
                "description": "Calls a method of an object, substituting another object for the current object.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the current object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the method."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "bind": {
                "name": "bind",
                "global": false,
                "description": "For a given function, creates a bound function that has the same body as the original function.\r\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg An object to which the this keyword can refer inside the new function."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the new function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": "(this: Function, thisArg: any, ...argArray: any[]) => any"
              },
              "toString": {
                "name": "toString",
                "global": false,
                "description": "Returns a string representation of a function.",
                "tags": [],
                "required": true,
                "type": "() => string",
                "schema": {
                  "kind": "event",
                  "type": "(): string"
                }
              },
              "prototype": {
                "name": "prototype",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "length": {
                "name": "length",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "number",
                "schema": "number"
              },
              "arguments": {
                "name": "arguments",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "caller": {
                "name": "caller",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "Function",
                "schema": "Function"
              },
              "name": {
                "name": "name",
                "global": false,
                "description": "Returns the name of the function. Function names are read-only and can not be changed.",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              },
              "__@hasInstance@797": {
                "name": "__@hasInstance@797",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\r\nas a constructor function.\r\n\r\nA constructor function can control which objects are recognized as its instances by\r\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "schema": {
                  "kind": "event",
                  "type": "(value: any): boolean",
                  "schema": []
                }
              }
            }
          }
        },
        {
          "name": "init",
          "type": "Function",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {
              "apply": {
                "name": "apply",
                "global": false,
                "description": "Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the this object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A set of arguments to be passed to the function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, argArray?: any) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, argArray?: any): any",
                  "schema": []
                }
              },
              "call": {
                "name": "call",
                "global": false,
                "description": "Calls a method of an object, substituting another object for the current object.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg The object to be used as the current object."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the method."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": {
                  "kind": "event",
                  "type": "(this: Function, thisArg: any, ...argArray: any[]): any",
                  "schema": []
                }
              },
              "bind": {
                "name": "bind",
                "global": false,
                "description": "For a given function, creates a bound function that has the same body as the original function.\r\nThe this object of the bound function is associated with the specified object, and has the specified initial parameters.",
                "tags": [
                  {
                    "name": "param",
                    "text": "thisArg An object to which the this keyword can refer inside the new function."
                  },
                  {
                    "name": "param",
                    "text": "argArray A list of arguments to be passed to the new function."
                  }
                ],
                "required": true,
                "type": "(this: Function, thisArg: any, ...argArray: any[]) => any",
                "schema": "(this: Function, thisArg: any, ...argArray: any[]) => any"
              },
              "toString": {
                "name": "toString",
                "global": false,
                "description": "Returns a string representation of a function.",
                "tags": [],
                "required": true,
                "type": "() => string",
                "schema": {
                  "kind": "event",
                  "type": "(): string"
                }
              },
              "prototype": {
                "name": "prototype",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "length": {
                "name": "length",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "number",
                "schema": "number"
              },
              "arguments": {
                "name": "arguments",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "any",
                "schema": "any"
              },
              "caller": {
                "name": "caller",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "Function",
                "schema": "Function"
              },
              "name": {
                "name": "name",
                "global": false,
                "description": "Returns the name of the function. Function names are read-only and can not be changed.",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              },
              "__@hasInstance@797": {
                "name": "__@hasInstance@797",
                "global": false,
                "description": "Determines whether the given value inherits from this function if this function was used\r\nas a constructor function.\r\n\r\nA constructor function can control which objects are recognized as its instances by\r\n'instanceof' by overriding this method.",
                "tags": [],
                "required": true,
                "type": "(value: any) => boolean",
                "schema": {
                  "kind": "event",
                  "type": "(value: any): boolean",
                  "schema": []
                }
              }
            }
          }
        }
      ]
    }
  },
  "ContentDoc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "pascalName": "ContentDoc",
    "kebabName": "content-doc",
    "chunkName": "components/content-doc",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentList": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "pascalName": "ContentList",
    "kebabName": "content-list",
    "chunkName": "components/content-list",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "pascalName": "ContentNavigation",
    "kebabName": "content-navigation",
    "chunkName": "components/content-navigation",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentQuery": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "pascalName": "ContentQuery",
    "kebabName": "content-query",
    "chunkName": "components/content-query",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentRenderer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "pascalName": "ContentRenderer",
    "kebabName": "content-renderer",
    "chunkName": "components/content-renderer",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentRendererMarkdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "pascalName": "ContentRendererMarkdown",
    "kebabName": "content-renderer-markdown",
    "chunkName": "components/content-renderer-markdown",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentSlot": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "pascalName": "ContentSlot",
    "kebabName": "content-slot",
    "chunkName": "components/content-slot",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocumentDrivenEmpty": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "pascalName": "DocumentDrivenEmpty",
    "kebabName": "document-driven-empty",
    "chunkName": "components/document-driven-empty",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Markdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "pascalName": "Markdown",
    "kebabName": "markdown",
    "chunkName": "components/markdown",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "export": "default",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtWelcome": {
    "export": "default",
    "chunkName": "components/nuxt-welcome",
    "global": false,
    "kebabName": "nuxt-welcome",
    "pascalName": "NuxtWelcome",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue",
    "name": "NuxtWelcome",
    "filePath": "/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue",
    "meta": {
      "props": [
        {
          "name": "title",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Welcome to Nuxt!\""
        },
        {
          "name": "appName",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Nuxt\""
        },
        {
          "name": "version",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"\""
        },
        {
          "name": "readDocs",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework.\""
        },
        {
          "name": "followTwitter",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips.\""
        },
        {
          "name": "starGitHub",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"Nuxt is open source and the code is available on GitHub, feel free to star it, participate in discussions or dive into the source.\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtLayout": {
    "export": "default",
    "chunkName": "components/nuxt-layout",
    "global": false,
    "kebabName": "nuxt-layout",
    "pascalName": "NuxtLayout",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/layout",
    "name": "NuxtLayout",
    "filePath": "/node_modules/nuxt/dist/app/components/layout.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/layout.mjs",
    "meta": {
      "props": [
        {
          "name": "name",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | false | Ref<string | false> | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | false | Ref<string | false> | undefined",
            "schema": [
              "undefined",
              "string",
              "false",
              "Ref<string | false>"
            ]
          },
          "default": "null"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "name",
          "type": "string | false | Ref<string | false>",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | false | Ref<string | false>",
            "schema": [
              "string",
              "false",
              "Ref<string | false>"
            ]
          }
        }
      ]
    }
  },
  "NuxtErrorBoundary": {
    "export": "default",
    "chunkName": "components/nuxt-error-boundary",
    "global": false,
    "kebabName": "nuxt-error-boundary",
    "pascalName": "NuxtErrorBoundary",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/nuxt-error-boundary",
    "name": "NuxtErrorBoundary",
    "filePath": "/node_modules/nuxt/dist/app/components/nuxt-error-boundary.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/nuxt-error-boundary.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [
        {
          "name": "error",
          "type": "[_error: unknown]",
          "signature": "(event: \"error\", _error: unknown): void",
          "schema": [
            "unknown"
          ]
        }
      ],
      "exposed": []
    }
  },
  "ClientOnly": {
    "export": "default",
    "chunkName": "components/client-only",
    "global": false,
    "kebabName": "client-only",
    "pascalName": "ClientOnly",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/client-only",
    "name": "ClientOnly",
    "filePath": "/node_modules/nuxt/dist/app/components/client-only.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/client-only.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DevOnly": {
    "export": "default",
    "chunkName": "components/dev-only",
    "global": false,
    "kebabName": "dev-only",
    "pascalName": "DevOnly",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/dev-only",
    "name": "DevOnly",
    "filePath": "/node_modules/nuxt/dist/app/components/dev-only.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/dev-only.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ServerPlaceholder": {
    "export": "default",
    "chunkName": "components/server-placeholder",
    "global": false,
    "kebabName": "server-placeholder",
    "pascalName": "ServerPlaceholder",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/server-placeholder",
    "name": "ServerPlaceholder",
    "filePath": "/node_modules/nuxt/dist/app/components/server-placeholder.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/server-placeholder.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtLink": {
    "export": "default",
    "chunkName": "components/nuxt-link",
    "global": false,
    "kebabName": "nuxt-link",
    "pascalName": "NuxtLink",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/nuxt-link",
    "name": "NuxtLink",
    "filePath": "/node_modules/nuxt/dist/app/components/nuxt-link.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/nuxt-link.mjs",
    "meta": {
      "props": [
        {
          "name": "to",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "RouteLocationRaw | undefined",
          "schema": {
            "kind": "enum",
            "type": "RouteLocationRaw | undefined",
            "schema": [
              "undefined",
              "string",
              {
                "kind": "object",
                "type": "RouteLocationPathRaw",
                "schema": {
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "LocationQueryRaw | undefined",
                      "schema": [
                        "undefined",
                        "LocationQueryRaw"
                      ]
                    }
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "string | undefined",
                      "schema": [
                        "undefined",
                        "string"
                      ]
                    }
                  },
                  "path": {
                    "name": "path",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "boolean | undefined",
                      "schema": [
                        "undefined",
                        "false",
                        "true"
                      ]
                    }
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "HistoryState | undefined",
                      "schema": [
                        "undefined",
                        {
                          "kind": "object",
                          "type": "HistoryState",
                          "schema": {}
                        }
                      ]
                    }
                  }
                }
              },
              {
                "kind": "object",
                "type": "RouteLocationNamedRaw",
                "schema": {
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": "LocationQueryRaw | undefined"
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": "string | undefined"
                  },
                  "name": {
                    "name": "name",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteRecordName | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteRecordName | undefined",
                      "schema": [
                        "undefined",
                        "string",
                        "symbol"
                      ]
                    }
                  },
                  "params": {
                    "name": "params",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteParamsRaw | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteParamsRaw | undefined",
                      "schema": [
                        "undefined",
                        "RouteParamsRaw"
                      ]
                    }
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": "HistoryState | undefined"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "RouteLocationRaw | undefined",
          "schema": {
            "kind": "enum",
            "type": "RouteLocationRaw | undefined",
            "schema": [
              "undefined",
              "string",
              {
                "kind": "object",
                "type": "RouteLocationPathRaw",
                "schema": {
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "LocationQueryRaw | undefined",
                      "schema": [
                        "undefined",
                        "LocationQueryRaw"
                      ]
                    }
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "string | undefined",
                      "schema": [
                        "undefined",
                        "string"
                      ]
                    }
                  },
                  "path": {
                    "name": "path",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "boolean | undefined",
                      "schema": [
                        "undefined",
                        "false",
                        "true"
                      ]
                    }
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "HistoryState | undefined",
                      "schema": [
                        "undefined",
                        {
                          "kind": "object",
                          "type": "HistoryState",
                          "schema": {}
                        }
                      ]
                    }
                  }
                }
              },
              {
                "kind": "object",
                "type": "RouteLocationNamedRaw",
                "schema": {
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": "LocationQueryRaw | undefined"
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": "string | undefined"
                  },
                  "name": {
                    "name": "name",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteRecordName | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteRecordName | undefined",
                      "schema": [
                        "undefined",
                        "string",
                        "symbol"
                      ]
                    }
                  },
                  "params": {
                    "name": "params",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteParamsRaw | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteParamsRaw | undefined",
                      "schema": [
                        "undefined",
                        "RouteParamsRaw"
                      ]
                    }
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": "HistoryState | undefined"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "external",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "replace",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "custom",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "\"_blank\"",
              "\"_parent\"",
              "\"_self\"",
              "\"_top\"",
              {
                "kind": "object",
                "type": "string & {}",
                "schema": {
                  "toString": {
                    "name": "toString",
                    "global": false,
                    "description": "Returns a string representation of a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "charAt": {
                    "name": "charAt",
                    "global": false,
                    "description": "Returns the character at the specified index.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "pos The zero-based index of the desired character."
                      }
                    ],
                    "required": true,
                    "type": "(pos: number) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(pos: number): string",
                      "schema": []
                    }
                  },
                  "charCodeAt": {
                    "name": "charCodeAt",
                    "global": false,
                    "description": "Returns the Unicode value of the character at the specified location.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned."
                      }
                    ],
                    "required": true,
                    "type": "(index: number) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(index: number): number",
                      "schema": []
                    }
                  },
                  "concat": {
                    "name": "concat",
                    "global": false,
                    "description": "Returns a string that contains the concatenation of two or more strings.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "strings The strings to append to the end of the string."
                      }
                    ],
                    "required": true,
                    "type": "(...strings: string[]) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(...strings: string[]): string",
                      "schema": [
                        "string"
                      ]
                    }
                  },
                  "indexOf": {
                    "name": "indexOf",
                    "global": false,
                    "description": "Returns the position of the first occurrence of a substring.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString The substring to search for in the string"
                      },
                      {
                        "name": "param",
                        "text": "position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): number",
                      "schema": []
                    }
                  },
                  "lastIndexOf": {
                    "name": "lastIndexOf",
                    "global": false,
                    "description": "Returns the last occurrence of a substring in the string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString The substring to search for."
                      },
                      {
                        "name": "param",
                        "text": "position The index at which to begin searching. If omitted, the search begins at the end of the string."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => number",
                    "schema": "(searchString: string, position?: number | undefined) => number"
                  },
                  "localeCompare": {
                    "name": "localeCompare",
                    "global": false,
                    "description": "Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "that String to compare to target string"
                      },
                      {
                        "name": "param",
                        "text": "that String to compare to target string"
                      },
                      {
                        "name": "param",
                        "text": "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details."
                      },
                      {
                        "name": "param",
                        "text": "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details."
                      }
                    ],
                    "required": true,
                    "type": "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }",
                    "schema": "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"
                  },
                  "match": {
                    "name": "match",
                    "global": false,
                    "description": "Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string or an object that supports being matched against, and returns an array\r\ncontaining the results of that search, or null if no matches are found.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp A variable name or string literal containing the regular expression pattern and flags."
                      },
                      {
                        "name": "param",
                        "text": "matcher An object that supports being matched against."
                      }
                    ],
                    "required": true,
                    "type": "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }",
                    "schema": "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchValue A string or regular expression to search for."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      },
                      {
                        "name": "param",
                        "text": "searchValue An object that supports searching for and replacing matches within a string."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue The replacement text."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A object can search for and replace matches within a string."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      }
                    ],
                    "required": true,
                    "type": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }",
                    "schema": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"
                  },
                  "search": {
                    "name": "search",
                    "global": false,
                    "description": "Finds the first substring match in a regular expression search.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp The regular expression pattern and applicable flags."
                      },
                      {
                        "name": "param",
                        "text": "searcher An object which supports searching within a string."
                      }
                    ],
                    "required": true,
                    "type": "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }",
                    "schema": "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"
                  },
                  "slice": {
                    "name": "slice",
                    "global": false,
                    "description": "Returns a section of a string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "start The index to the beginning of the specified portion of stringObj."
                      },
                      {
                        "name": "param",
                        "text": "end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\r\nIf this value is not specified, the substring continues to the end of stringObj."
                      }
                    ],
                    "required": true,
                    "type": "(start?: number | undefined, end?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(start?: number | undefined, end?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "split": {
                    "name": "split",
                    "global": false,
                    "description": "Split a string into substrings using the specified separator and return them as an array.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned."
                      },
                      {
                        "name": "param",
                        "text": "limit A value used to limit the number of elements returned in the array."
                      },
                      {
                        "name": "param",
                        "text": "splitter An object that can split a string."
                      },
                      {
                        "name": "param",
                        "text": "limit A value used to limit the number of elements returned in the array."
                      }
                    ],
                    "required": true,
                    "type": "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }",
                    "schema": "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"
                  },
                  "substring": {
                    "name": "substring",
                    "global": false,
                    "description": "Returns the substring at the specified location within a String object.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "start The zero-based index number indicating the beginning of the substring."
                      },
                      {
                        "name": "param",
                        "text": "end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\r\nIf end is omitted, the characters from start through the end of the original string are returned."
                      }
                    ],
                    "required": true,
                    "type": "(start: number, end?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(start: number, end?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "toLowerCase": {
                    "name": "toLowerCase",
                    "global": false,
                    "description": "Converts all the alphabetic characters in a string to lowercase.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "toLocaleLowerCase": {
                    "name": "toLocaleLowerCase",
                    "global": false,
                    "description": "Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",
                    "tags": [],
                    "required": true,
                    "type": "(locales?: string | string[] | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(locales?: string | string[] | undefined): string",
                      "schema": []
                    }
                  },
                  "toUpperCase": {
                    "name": "toUpperCase",
                    "global": false,
                    "description": "Converts all the alphabetic characters in a string to uppercase.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "toLocaleUpperCase": {
                    "name": "toLocaleUpperCase",
                    "global": false,
                    "description": "Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",
                    "tags": [],
                    "required": true,
                    "type": "(locales?: string | string[] | undefined) => string",
                    "schema": "(locales?: string | string[] | undefined) => string"
                  },
                  "trim": {
                    "name": "trim",
                    "global": false,
                    "description": "Removes the leading and trailing white space and line terminator characters from a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "length": {
                    "name": "length",
                    "global": false,
                    "description": "Returns the length of a String object.",
                    "tags": [],
                    "required": true,
                    "type": "number",
                    "schema": "number"
                  },
                  "substr": {
                    "name": "substr",
                    "global": false,
                    "description": "Gets a substring beginning at the specified location and having the specified length.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "param",
                        "text": "from The starting position of the desired substring. The index of the first character in the string is zero."
                      },
                      {
                        "name": "param",
                        "text": "length The number of characters to include in the returned substring."
                      }
                    ],
                    "required": true,
                    "type": "(from: number, length?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(from: number, length?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "valueOf": {
                    "name": "valueOf",
                    "global": false,
                    "description": "Returns the primitive value of the specified object.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "codePointAt": {
                    "name": "codePointAt",
                    "global": false,
                    "description": "Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\r\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\r\nthe String resulting from converting this object to a String.\r\nIf there is no element at that position, the result is undefined.\r\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",
                    "tags": [],
                    "required": true,
                    "type": "(pos: number) => number | undefined",
                    "schema": {
                      "kind": "event",
                      "type": "(pos: number): number | undefined",
                      "schema": []
                    }
                  },
                  "includes": {
                    "name": "includes",
                    "global": false,
                    "description": "Returns true if searchString appears as a substring of the result of converting this\r\nobject to a String, at one or more positions that are\r\ngreater than or equal to position; otherwise, returns false.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString search string"
                      },
                      {
                        "name": "param",
                        "text": "position If position is undefined, 0 is assumed, so as to search all of the String."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "endsWith": {
                    "name": "endsWith",
                    "global": false,
                    "description": "Returns true if the sequence of elements of searchString converted to a String is the\r\nsame as the corresponding elements of this object (converted to a String) starting at\r\nendPosition – length(this). Otherwise returns false.",
                    "tags": [],
                    "required": true,
                    "type": "(searchString: string, endPosition?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, endPosition?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "normalize": {
                    "name": "normalize",
                    "global": false,
                    "description": "Returns the String value result of normalizing the string into the normalization form\r\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\r\nis \"NFC\""
                      },
                      {
                        "name": "param",
                        "text": "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\r\nis \"NFC\""
                      }
                    ],
                    "required": true,
                    "type": "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }",
                    "schema": "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }"
                  },
                  "repeat": {
                    "name": "repeat",
                    "global": false,
                    "description": "Returns a String value that is made from count copies appended together. If count is 0,\r\nthe empty string is returned.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "count number of copies to append"
                      }
                    ],
                    "required": true,
                    "type": "(count: number) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(count: number): string",
                      "schema": []
                    }
                  },
                  "startsWith": {
                    "name": "startsWith",
                    "global": false,
                    "description": "Returns true if the sequence of elements of searchString converted to a String is the\r\nsame as the corresponding elements of this object (converted to a String) starting at\r\nposition. Otherwise returns false.",
                    "tags": [],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => boolean",
                    "schema": "(searchString: string, position?: number | undefined) => boolean"
                  },
                  "anchor": {
                    "name": "anchor",
                    "global": false,
                    "description": "Returns an `<a>` HTML anchor element and sets the name attribute to the text value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "param",
                        "text": "name"
                      }
                    ],
                    "required": true,
                    "type": "(name: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(name: string): string",
                      "schema": []
                    }
                  },
                  "big": {
                    "name": "big",
                    "global": false,
                    "description": "Returns a `<big>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "blink": {
                    "name": "blink",
                    "global": false,
                    "description": "Returns a `<blink>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "bold": {
                    "name": "bold",
                    "global": false,
                    "description": "Returns a `<b>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "fixed": {
                    "name": "fixed",
                    "global": false,
                    "description": "Returns a `<tt>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "fontcolor": {
                    "name": "fontcolor",
                    "global": false,
                    "description": "Returns a `<font>` HTML element and sets the color attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "(color: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(color: string): string",
                      "schema": []
                    }
                  },
                  "fontsize": {
                    "name": "fontsize",
                    "global": false,
                    "description": "Returns a `<font>` HTML element and sets the size attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "{ (size: number): string; (size: string): string; }",
                    "schema": "{ (size: number): string; (size: string): string; }"
                  },
                  "italics": {
                    "name": "italics",
                    "global": false,
                    "description": "Returns an `<i>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "link": {
                    "name": "link",
                    "global": false,
                    "description": "Returns an `<a>` HTML element and sets the href attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "(url: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(url: string): string",
                      "schema": []
                    }
                  },
                  "small": {
                    "name": "small",
                    "global": false,
                    "description": "Returns a `<small>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "strike": {
                    "name": "strike",
                    "global": false,
                    "description": "Returns a `<strike>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "sub": {
                    "name": "sub",
                    "global": false,
                    "description": "Returns a `<sub>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "sup": {
                    "name": "sup",
                    "global": false,
                    "description": "Returns a `<sup>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "padStart": {
                    "name": "padStart",
                    "global": false,
                    "description": "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r\nThe padding is applied from the start (left) of the current string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "maxLength The length of the resulting string once the current string has been padded.\r\nIf this parameter is smaller than the current string's length, the current string will be returned as it is."
                      },
                      {
                        "name": "param",
                        "text": "fillString The string to pad the current string with.\r\nIf this string is too long, it will be truncated and the left-most part will be applied.\r\nThe default value for this parameter is \" \" (U+0020)."
                      }
                    ],
                    "required": true,
                    "type": "(maxLength: number, fillString?: string | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(maxLength: number, fillString?: string | undefined): string",
                      "schema": []
                    }
                  },
                  "padEnd": {
                    "name": "padEnd",
                    "global": false,
                    "description": "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r\nThe padding is applied from the end (right) of the current string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "maxLength The length of the resulting string once the current string has been padded.\r\nIf this parameter is smaller than the current string's length, the current string will be returned as it is."
                      },
                      {
                        "name": "param",
                        "text": "fillString The string to pad the current string with.\r\nIf this string is too long, it will be truncated and the left-most part will be applied.\r\nThe default value for this parameter is \" \" (U+0020)."
                      }
                    ],
                    "required": true,
                    "type": "(maxLength: number, fillString?: string | undefined) => string",
                    "schema": "(maxLength: number, fillString?: string | undefined) => string"
                  },
                  "trimEnd": {
                    "name": "trimEnd",
                    "global": false,
                    "description": "Removes the trailing white space and line terminator characters from a string.\nReturns a copy with trailing whitespace removed.",
                    "tags": [],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "trimStart": {
                    "name": "trimStart",
                    "global": false,
                    "description": "Removes the leading white space and line terminator characters from a string.\nReturns a copy with leading whitespace removed.",
                    "tags": [],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "trimLeft": {
                    "name": "trimLeft",
                    "global": false,
                    "description": "Removes the leading white space and line terminator characters from a string.\nRemoves whitespace from the left end of a string.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility. Use `trimStart` instead"
                      }
                    ],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "trimRight": {
                    "name": "trimRight",
                    "global": false,
                    "description": "Removes the trailing white space and line terminator characters from a string.\nRemoves whitespace from the right end of a string.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility. Use `trimEnd` instead"
                      }
                    ],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "matchAll": {
                    "name": "matchAll",
                    "global": false,
                    "description": "Matches a string with a regular expression, and returns an iterable of matches\r\ncontaining the results of that search.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp A variable name or string literal containing the regular expression pattern and flags."
                      }
                    ],
                    "required": true,
                    "type": "(regexp: RegExp) => IterableIterator<RegExpMatchArray>",
                    "schema": {
                      "kind": "event",
                      "type": "(regexp: RegExp): IterableIterator<RegExpMatchArray>",
                      "schema": []
                    }
                  },
                  "replaceAll": {
                    "name": "replaceAll",
                    "global": false,
                    "description": "Replace all instances of a substring in a string, using a regular expression or search string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue A string containing the text to replace for every successful match of searchValue in this string."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      }
                    ],
                    "required": true,
                    "type": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }",
                    "schema": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"
                  },
                  "at": {
                    "name": "at",
                    "global": false,
                    "description": "Returns a new String consisting of the single UTF-16 code unit located at the specified index.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "index The zero-based index of the desired code unit. A negative index will count back from the last item."
                      }
                    ],
                    "required": true,
                    "type": "(index: number) => string | undefined",
                    "schema": {
                      "kind": "event",
                      "type": "(index: number): string | undefined",
                      "schema": []
                    }
                  },
                  "__@iterator@647": {
                    "name": "__@iterator@647",
                    "global": false,
                    "description": "Iterator",
                    "tags": [],
                    "required": true,
                    "type": "() => IterableIterator<string>",
                    "schema": {
                      "kind": "event",
                      "type": "(): IterableIterator<string>"
                    }
                  }
                }
              }
            ]
          }
        },
        {
          "name": "rel",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | null | undefined",
            "schema": [
              "undefined",
              "null",
              "string"
            ]
          }
        },
        {
          "name": "noRel",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "prefetch",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "noPrefetch",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "activeClass",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "exactActiveClass",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "ariaCurrentValue",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "to",
          "type": "RouteLocationRaw | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "RouteLocationRaw | undefined",
            "schema": [
              "undefined",
              "string",
              {
                "kind": "object",
                "type": "RouteLocationPathRaw",
                "schema": {
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "LocationQueryRaw | undefined",
                      "schema": [
                        "undefined",
                        "LocationQueryRaw"
                      ]
                    }
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "string | undefined",
                      "schema": [
                        "undefined",
                        "string"
                      ]
                    }
                  },
                  "path": {
                    "name": "path",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "boolean | undefined",
                      "schema": [
                        "undefined",
                        "false",
                        "true"
                      ]
                    }
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "HistoryState | undefined",
                      "schema": [
                        "undefined",
                        {
                          "kind": "object",
                          "type": "HistoryState",
                          "schema": {}
                        }
                      ]
                    }
                  }
                }
              },
              {
                "kind": "object",
                "type": "RouteLocationNamedRaw",
                "schema": {
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": "LocationQueryRaw | undefined"
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": "string | undefined"
                  },
                  "name": {
                    "name": "name",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteRecordName | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteRecordName | undefined",
                      "schema": [
                        "undefined",
                        "string",
                        "symbol"
                      ]
                    }
                  },
                  "params": {
                    "name": "params",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteParamsRaw | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteParamsRaw | undefined",
                      "schema": [
                        "undefined",
                        "RouteParamsRaw"
                      ]
                    }
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": "HistoryState | undefined"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "href",
          "type": "RouteLocationRaw | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "RouteLocationRaw | undefined",
            "schema": [
              "undefined",
              "string",
              {
                "kind": "object",
                "type": "RouteLocationPathRaw",
                "schema": {
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "LocationQueryRaw | undefined",
                      "schema": [
                        "undefined",
                        "LocationQueryRaw"
                      ]
                    }
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "string | undefined",
                      "schema": [
                        "undefined",
                        "string"
                      ]
                    }
                  },
                  "path": {
                    "name": "path",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "string",
                    "schema": "string"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "boolean | undefined",
                      "schema": [
                        "undefined",
                        "false",
                        "true"
                      ]
                    }
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "HistoryState | undefined",
                      "schema": [
                        "undefined",
                        {
                          "kind": "object",
                          "type": "HistoryState",
                          "schema": {}
                        }
                      ]
                    }
                  }
                }
              },
              {
                "kind": "object",
                "type": "RouteLocationNamedRaw",
                "schema": {
                  "query": {
                    "name": "query",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "LocationQueryRaw | undefined",
                    "schema": "LocationQueryRaw | undefined"
                  },
                  "hash": {
                    "name": "hash",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string | undefined",
                    "schema": "string | undefined"
                  },
                  "name": {
                    "name": "name",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteRecordName | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteRecordName | undefined",
                      "schema": [
                        "undefined",
                        "string",
                        "symbol"
                      ]
                    }
                  },
                  "params": {
                    "name": "params",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "RouteParamsRaw | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "RouteParamsRaw | undefined",
                      "schema": [
                        "undefined",
                        "RouteParamsRaw"
                      ]
                    }
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replace the entry in the history instead of pushing a new entry",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "force": {
                    "name": "force",
                    "global": false,
                    "description": "Triggers the navigation even if the location is the same as the current one.\r\nNote this will also add a new entry to the history unless `replace: true`\r\nis passed.",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": "boolean | undefined"
                  },
                  "state": {
                    "name": "state",
                    "global": false,
                    "description": "State to save using the History API. This cannot contain any reactive\r\nvalues and some primitives like Symbols are forbidden. More info at\r\nhttps://developer.mozilla.org/en-US/docs/Web/API/History/state",
                    "tags": [],
                    "required": false,
                    "type": "HistoryState | undefined",
                    "schema": "HistoryState | undefined"
                  }
                }
              }
            ]
          }
        },
        {
          "name": "external",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "replace",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "custom",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "target",
          "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | (string & {}) | null | undefined",
            "schema": [
              "undefined",
              "null",
              "\"_blank\"",
              "\"_parent\"",
              "\"_self\"",
              "\"_top\"",
              {
                "kind": "object",
                "type": "string & {}",
                "schema": {
                  "toString": {
                    "name": "toString",
                    "global": false,
                    "description": "Returns a string representation of a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": {
                      "kind": "event",
                      "type": "(): string"
                    }
                  },
                  "charAt": {
                    "name": "charAt",
                    "global": false,
                    "description": "Returns the character at the specified index.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "pos The zero-based index of the desired character."
                      }
                    ],
                    "required": true,
                    "type": "(pos: number) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(pos: number): string",
                      "schema": []
                    }
                  },
                  "charCodeAt": {
                    "name": "charCodeAt",
                    "global": false,
                    "description": "Returns the Unicode value of the character at the specified location.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned."
                      }
                    ],
                    "required": true,
                    "type": "(index: number) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(index: number): number",
                      "schema": []
                    }
                  },
                  "concat": {
                    "name": "concat",
                    "global": false,
                    "description": "Returns a string that contains the concatenation of two or more strings.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "strings The strings to append to the end of the string."
                      }
                    ],
                    "required": true,
                    "type": "(...strings: string[]) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(...strings: string[]): string",
                      "schema": [
                        "string"
                      ]
                    }
                  },
                  "indexOf": {
                    "name": "indexOf",
                    "global": false,
                    "description": "Returns the position of the first occurrence of a substring.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString The substring to search for in the string"
                      },
                      {
                        "name": "param",
                        "text": "position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => number",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): number",
                      "schema": []
                    }
                  },
                  "lastIndexOf": {
                    "name": "lastIndexOf",
                    "global": false,
                    "description": "Returns the last occurrence of a substring in the string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString The substring to search for."
                      },
                      {
                        "name": "param",
                        "text": "position The index at which to begin searching. If omitted, the search begins at the end of the string."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => number",
                    "schema": "(searchString: string, position?: number | undefined) => number"
                  },
                  "localeCompare": {
                    "name": "localeCompare",
                    "global": false,
                    "description": "Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "that String to compare to target string"
                      },
                      {
                        "name": "param",
                        "text": "that String to compare to target string"
                      },
                      {
                        "name": "param",
                        "text": "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details."
                      },
                      {
                        "name": "param",
                        "text": "options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details."
                      }
                    ],
                    "required": true,
                    "type": "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }",
                    "schema": "{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"
                  },
                  "match": {
                    "name": "match",
                    "global": false,
                    "description": "Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string or an object that supports being matched against, and returns an array\r\ncontaining the results of that search, or null if no matches are found.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp A variable name or string literal containing the regular expression pattern and flags."
                      },
                      {
                        "name": "param",
                        "text": "matcher An object that supports being matched against."
                      }
                    ],
                    "required": true,
                    "type": "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }",
                    "schema": "{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"
                  },
                  "replace": {
                    "name": "replace",
                    "global": false,
                    "description": "Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchValue A string or regular expression to search for."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      },
                      {
                        "name": "param",
                        "text": "searchValue An object that supports searching for and replacing matches within a string."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue The replacement text."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A object can search for and replace matches within a string."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      }
                    ],
                    "required": true,
                    "type": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }",
                    "schema": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"
                  },
                  "search": {
                    "name": "search",
                    "global": false,
                    "description": "Finds the first substring match in a regular expression search.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp The regular expression pattern and applicable flags."
                      },
                      {
                        "name": "param",
                        "text": "searcher An object which supports searching within a string."
                      }
                    ],
                    "required": true,
                    "type": "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }",
                    "schema": "{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"
                  },
                  "slice": {
                    "name": "slice",
                    "global": false,
                    "description": "Returns a section of a string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "start The index to the beginning of the specified portion of stringObj."
                      },
                      {
                        "name": "param",
                        "text": "end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\r\nIf this value is not specified, the substring continues to the end of stringObj."
                      }
                    ],
                    "required": true,
                    "type": "(start?: number | undefined, end?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(start?: number | undefined, end?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "split": {
                    "name": "split",
                    "global": false,
                    "description": "Split a string into substrings using the specified separator and return them as an array.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned."
                      },
                      {
                        "name": "param",
                        "text": "limit A value used to limit the number of elements returned in the array."
                      },
                      {
                        "name": "param",
                        "text": "splitter An object that can split a string."
                      },
                      {
                        "name": "param",
                        "text": "limit A value used to limit the number of elements returned in the array."
                      }
                    ],
                    "required": true,
                    "type": "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }",
                    "schema": "{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"
                  },
                  "substring": {
                    "name": "substring",
                    "global": false,
                    "description": "Returns the substring at the specified location within a String object.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "start The zero-based index number indicating the beginning of the substring."
                      },
                      {
                        "name": "param",
                        "text": "end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\r\nIf end is omitted, the characters from start through the end of the original string are returned."
                      }
                    ],
                    "required": true,
                    "type": "(start: number, end?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(start: number, end?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "toLowerCase": {
                    "name": "toLowerCase",
                    "global": false,
                    "description": "Converts all the alphabetic characters in a string to lowercase.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "toLocaleLowerCase": {
                    "name": "toLocaleLowerCase",
                    "global": false,
                    "description": "Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",
                    "tags": [],
                    "required": true,
                    "type": "(locales?: string | string[] | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(locales?: string | string[] | undefined): string",
                      "schema": []
                    }
                  },
                  "toUpperCase": {
                    "name": "toUpperCase",
                    "global": false,
                    "description": "Converts all the alphabetic characters in a string to uppercase.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "toLocaleUpperCase": {
                    "name": "toLocaleUpperCase",
                    "global": false,
                    "description": "Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",
                    "tags": [],
                    "required": true,
                    "type": "(locales?: string | string[] | undefined) => string",
                    "schema": "(locales?: string | string[] | undefined) => string"
                  },
                  "trim": {
                    "name": "trim",
                    "global": false,
                    "description": "Removes the leading and trailing white space and line terminator characters from a string.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "length": {
                    "name": "length",
                    "global": false,
                    "description": "Returns the length of a String object.",
                    "tags": [],
                    "required": true,
                    "type": "number",
                    "schema": "number"
                  },
                  "substr": {
                    "name": "substr",
                    "global": false,
                    "description": "Gets a substring beginning at the specified location and having the specified length.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "param",
                        "text": "from The starting position of the desired substring. The index of the first character in the string is zero."
                      },
                      {
                        "name": "param",
                        "text": "length The number of characters to include in the returned substring."
                      }
                    ],
                    "required": true,
                    "type": "(from: number, length?: number | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(from: number, length?: number | undefined): string",
                      "schema": []
                    }
                  },
                  "valueOf": {
                    "name": "valueOf",
                    "global": false,
                    "description": "Returns the primitive value of the specified object.",
                    "tags": [],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "codePointAt": {
                    "name": "codePointAt",
                    "global": false,
                    "description": "Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\r\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\r\nthe String resulting from converting this object to a String.\r\nIf there is no element at that position, the result is undefined.\r\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",
                    "tags": [],
                    "required": true,
                    "type": "(pos: number) => number | undefined",
                    "schema": {
                      "kind": "event",
                      "type": "(pos: number): number | undefined",
                      "schema": []
                    }
                  },
                  "includes": {
                    "name": "includes",
                    "global": false,
                    "description": "Returns true if searchString appears as a substring of the result of converting this\r\nobject to a String, at one or more positions that are\r\ngreater than or equal to position; otherwise, returns false.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchString search string"
                      },
                      {
                        "name": "param",
                        "text": "position If position is undefined, 0 is assumed, so as to search all of the String."
                      }
                    ],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, position?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "endsWith": {
                    "name": "endsWith",
                    "global": false,
                    "description": "Returns true if the sequence of elements of searchString converted to a String is the\r\nsame as the corresponding elements of this object (converted to a String) starting at\r\nendPosition – length(this). Otherwise returns false.",
                    "tags": [],
                    "required": true,
                    "type": "(searchString: string, endPosition?: number | undefined) => boolean",
                    "schema": {
                      "kind": "event",
                      "type": "(searchString: string, endPosition?: number | undefined): boolean",
                      "schema": []
                    }
                  },
                  "normalize": {
                    "name": "normalize",
                    "global": false,
                    "description": "Returns the String value result of normalizing the string into the normalization form\r\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\r\nis \"NFC\""
                      },
                      {
                        "name": "param",
                        "text": "form Applicable values: \"NFC\", \"NFD\", \"NFKC\", or \"NFKD\", If not specified default\r\nis \"NFC\""
                      }
                    ],
                    "required": true,
                    "type": "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }",
                    "schema": "{ (form: \"NFC\" | \"NFD\" | \"NFKC\" | \"NFKD\"): string; (form?: string | undefined): string; }"
                  },
                  "repeat": {
                    "name": "repeat",
                    "global": false,
                    "description": "Returns a String value that is made from count copies appended together. If count is 0,\r\nthe empty string is returned.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "count number of copies to append"
                      }
                    ],
                    "required": true,
                    "type": "(count: number) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(count: number): string",
                      "schema": []
                    }
                  },
                  "startsWith": {
                    "name": "startsWith",
                    "global": false,
                    "description": "Returns true if the sequence of elements of searchString converted to a String is the\r\nsame as the corresponding elements of this object (converted to a String) starting at\r\nposition. Otherwise returns false.",
                    "tags": [],
                    "required": true,
                    "type": "(searchString: string, position?: number | undefined) => boolean",
                    "schema": "(searchString: string, position?: number | undefined) => boolean"
                  },
                  "anchor": {
                    "name": "anchor",
                    "global": false,
                    "description": "Returns an `<a>` HTML anchor element and sets the name attribute to the text value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "param",
                        "text": "name"
                      }
                    ],
                    "required": true,
                    "type": "(name: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(name: string): string",
                      "schema": []
                    }
                  },
                  "big": {
                    "name": "big",
                    "global": false,
                    "description": "Returns a `<big>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "blink": {
                    "name": "blink",
                    "global": false,
                    "description": "Returns a `<blink>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "bold": {
                    "name": "bold",
                    "global": false,
                    "description": "Returns a `<b>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "fixed": {
                    "name": "fixed",
                    "global": false,
                    "description": "Returns a `<tt>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "fontcolor": {
                    "name": "fontcolor",
                    "global": false,
                    "description": "Returns a `<font>` HTML element and sets the color attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "(color: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(color: string): string",
                      "schema": []
                    }
                  },
                  "fontsize": {
                    "name": "fontsize",
                    "global": false,
                    "description": "Returns a `<font>` HTML element and sets the size attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      },
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "{ (size: number): string; (size: string): string; }",
                    "schema": "{ (size: number): string; (size: string): string; }"
                  },
                  "italics": {
                    "name": "italics",
                    "global": false,
                    "description": "Returns an `<i>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "link": {
                    "name": "link",
                    "global": false,
                    "description": "Returns an `<a>` HTML element and sets the href attribute value",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "(url: string) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(url: string): string",
                      "schema": []
                    }
                  },
                  "small": {
                    "name": "small",
                    "global": false,
                    "description": "Returns a `<small>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "strike": {
                    "name": "strike",
                    "global": false,
                    "description": "Returns a `<strike>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "sub": {
                    "name": "sub",
                    "global": false,
                    "description": "Returns a `<sub>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "sup": {
                    "name": "sup",
                    "global": false,
                    "description": "Returns a `<sup>` HTML element",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility"
                      }
                    ],
                    "required": true,
                    "type": "() => string",
                    "schema": "() => string"
                  },
                  "padStart": {
                    "name": "padStart",
                    "global": false,
                    "description": "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r\nThe padding is applied from the start (left) of the current string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "maxLength The length of the resulting string once the current string has been padded.\r\nIf this parameter is smaller than the current string's length, the current string will be returned as it is."
                      },
                      {
                        "name": "param",
                        "text": "fillString The string to pad the current string with.\r\nIf this string is too long, it will be truncated and the left-most part will be applied.\r\nThe default value for this parameter is \" \" (U+0020)."
                      }
                    ],
                    "required": true,
                    "type": "(maxLength: number, fillString?: string | undefined) => string",
                    "schema": {
                      "kind": "event",
                      "type": "(maxLength: number, fillString?: string | undefined): string",
                      "schema": []
                    }
                  },
                  "padEnd": {
                    "name": "padEnd",
                    "global": false,
                    "description": "Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r\nThe padding is applied from the end (right) of the current string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "maxLength The length of the resulting string once the current string has been padded.\r\nIf this parameter is smaller than the current string's length, the current string will be returned as it is."
                      },
                      {
                        "name": "param",
                        "text": "fillString The string to pad the current string with.\r\nIf this string is too long, it will be truncated and the left-most part will be applied.\r\nThe default value for this parameter is \" \" (U+0020)."
                      }
                    ],
                    "required": true,
                    "type": "(maxLength: number, fillString?: string | undefined) => string",
                    "schema": "(maxLength: number, fillString?: string | undefined) => string"
                  },
                  "trimEnd": {
                    "name": "trimEnd",
                    "global": false,
                    "description": "Removes the trailing white space and line terminator characters from a string.\nReturns a copy with trailing whitespace removed.",
                    "tags": [],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "trimStart": {
                    "name": "trimStart",
                    "global": false,
                    "description": "Removes the leading white space and line terminator characters from a string.\nReturns a copy with leading whitespace removed.",
                    "tags": [],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "trimLeft": {
                    "name": "trimLeft",
                    "global": false,
                    "description": "Removes the leading white space and line terminator characters from a string.\nRemoves whitespace from the left end of a string.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility. Use `trimStart` instead"
                      }
                    ],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "trimRight": {
                    "name": "trimRight",
                    "global": false,
                    "description": "Removes the trailing white space and line terminator characters from a string.\nRemoves whitespace from the right end of a string.",
                    "tags": [
                      {
                        "name": "deprecated",
                        "text": "A legacy feature for browser compatibility. Use `trimEnd` instead"
                      }
                    ],
                    "required": true,
                    "type": "{ (): string; (): string; }",
                    "schema": "{ (): string; (): string; }"
                  },
                  "matchAll": {
                    "name": "matchAll",
                    "global": false,
                    "description": "Matches a string with a regular expression, and returns an iterable of matches\r\ncontaining the results of that search.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "regexp A variable name or string literal containing the regular expression pattern and flags."
                      }
                    ],
                    "required": true,
                    "type": "(regexp: RegExp) => IterableIterator<RegExpMatchArray>",
                    "schema": {
                      "kind": "event",
                      "type": "(regexp: RegExp): IterableIterator<RegExpMatchArray>",
                      "schema": []
                    }
                  },
                  "replaceAll": {
                    "name": "replaceAll",
                    "global": false,
                    "description": "Replace all instances of a substring in a string, using a regular expression or search string.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replaceValue A string containing the text to replace for every successful match of searchValue in this string."
                      },
                      {
                        "name": "param",
                        "text": "searchValue A string to search for."
                      },
                      {
                        "name": "param",
                        "text": "replacer A function that returns the replacement text."
                      }
                    ],
                    "required": true,
                    "type": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }",
                    "schema": "{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"
                  },
                  "at": {
                    "name": "at",
                    "global": false,
                    "description": "Returns a new String consisting of the single UTF-16 code unit located at the specified index.",
                    "tags": [
                      {
                        "name": "param",
                        "text": "index The zero-based index of the desired code unit. A negative index will count back from the last item."
                      }
                    ],
                    "required": true,
                    "type": "(index: number) => string | undefined",
                    "schema": {
                      "kind": "event",
                      "type": "(index: number): string | undefined",
                      "schema": []
                    }
                  },
                  "__@iterator@647": {
                    "name": "__@iterator@647",
                    "global": false,
                    "description": "Iterator",
                    "tags": [],
                    "required": true,
                    "type": "() => IterableIterator<string>",
                    "schema": {
                      "kind": "event",
                      "type": "(): IterableIterator<string>"
                    }
                  }
                }
              }
            ]
          }
        },
        {
          "name": "rel",
          "type": "string | null | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | null | undefined",
            "schema": [
              "undefined",
              "null",
              "string"
            ]
          }
        },
        {
          "name": "noRel",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "prefetch",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "noPrefetch",
          "type": "boolean | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": [
              "undefined",
              "false",
              "true"
            ]
          }
        },
        {
          "name": "activeClass",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "exactActiveClass",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        },
        {
          "name": "ariaCurrentValue",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          }
        }
      ]
    }
  },
  "NuxtLoadingIndicator": {
    "export": "default",
    "chunkName": "components/nuxt-loading-indicator",
    "global": false,
    "kebabName": "nuxt-loading-indicator",
    "pascalName": "NuxtLoadingIndicator",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/nuxt-loading-indicator",
    "name": "NuxtLoadingIndicator",
    "filePath": "/node_modules/nuxt/dist/app/components/nuxt-loading-indicator.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/app/components/nuxt-loading-indicator.mjs",
    "meta": {
      "props": [
        {
          "name": "throttle",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "200"
        },
        {
          "name": "duration",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "2000"
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number | undefined",
          "schema": {
            "kind": "enum",
            "type": "number | undefined",
            "schema": [
              "undefined",
              "number"
            ]
          },
          "default": "3"
        },
        {
          "name": "color",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": [
              "undefined",
              "string"
            ]
          },
          "default": "\"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "throttle",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "duration",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "height",
          "type": "number",
          "description": "",
          "schema": "number"
        },
        {
          "name": "color",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ColorScheme": {
    "export": "default",
    "chunkName": "components/color-scheme",
    "global": false,
    "kebabName": "color-scheme",
    "pascalName": "ColorScheme",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue",
    "name": "ColorScheme",
    "filePath": "/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Icon": {
    "export": "default",
    "chunkName": "components/icon",
    "global": true,
    "kebabName": "icon",
    "pascalName": "Icon",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt-icon/dist/runtime/Icon.vue",
    "name": "Icon",
    "filePath": "/node_modules/nuxt-icon/dist/runtime/Icon.vue",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt-icon/dist/runtime/Icon.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtPage": {
    "export": "default",
    "chunkName": "components/nuxt-page",
    "global": false,
    "kebabName": "nuxt-page",
    "pascalName": "NuxtPage",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/pages/runtime/page",
    "name": "NuxtPage",
    "filePath": "/node_modules/nuxt/dist/pages/runtime/page.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/pages/runtime/page.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NoScript": {
    "export": "NoScript",
    "chunkName": "components/no-script",
    "global": false,
    "kebabName": "NoScript",
    "pascalName": "NoScript",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components",
    "name": "NoScript",
    "filePath": "/node_modules/nuxt/dist/head/runtime/components.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Link": {
    "export": "Link",
    "chunkName": "components/link",
    "global": false,
    "kebabName": "Link",
    "pascalName": "Link",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components",
    "name": "Link",
    "filePath": "/node_modules/nuxt/dist/head/runtime/components.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Base": {
    "export": "Base",
    "chunkName": "components/base",
    "global": false,
    "kebabName": "Base",
    "pascalName": "Base",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components",
    "name": "Base",
    "filePath": "/node_modules/nuxt/dist/head/runtime/components.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Title": {
    "export": "Title",
    "chunkName": "components/title",
    "global": false,
    "kebabName": "Title",
    "pascalName": "Title",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components",
    "name": "Title",
    "filePath": "/node_modules/nuxt/dist/head/runtime/components.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Meta": {
    "export": "Meta",
    "chunkName": "components/meta",
    "global": false,
    "kebabName": "Meta",
    "pascalName": "Meta",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components",
    "name": "Meta",
    "filePath": "/node_modules/nuxt/dist/head/runtime/components.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Style": {
    "export": "Style",
    "chunkName": "components/style",
    "global": false,
    "kebabName": "Style",
    "pascalName": "Style",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components",
    "name": "Style",
    "filePath": "/node_modules/nuxt/dist/head/runtime/components.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Head": {
    "export": "Head",
    "chunkName": "components/head",
    "global": false,
    "kebabName": "Head",
    "pascalName": "Head",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components",
    "name": "Head",
    "filePath": "/node_modules/nuxt/dist/head/runtime/components.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Html": {
    "export": "Html",
    "chunkName": "components/html",
    "global": false,
    "kebabName": "Html",
    "pascalName": "Html",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components",
    "name": "Html",
    "filePath": "/node_modules/nuxt/dist/head/runtime/components.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Body": {
    "export": "Body",
    "chunkName": "components/body",
    "global": false,
    "kebabName": "Body",
    "pascalName": "Body",
    "prefetch": false,
    "preload": false,
    "mode": "all",
    "shortPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components",
    "name": "Body",
    "filePath": "/node_modules/nuxt/dist/head/runtime/components.mjs",
    "fullPath": "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/nuxt/dist/head/runtime/components.mjs",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  }
};

const _SH5Pd6 = eventHandler(async () => {
  const filteredComponents = Object.values(components).filter((c) => c.global).filter((c) => !c.pascalName.startsWith("Content")).filter((c) => !c.pascalName.startsWith("DocumentDriven")).filter((c) => !c.pascalName.startsWith("Markdown")).filter((c) => !c.pascalName.startsWith("Prose")).map(({ pascalName, filePath, meta }) => {
    return {
      name: pascalName,
      path: filePath,
      meta: {
        props: meta.props,
        slots: meta.slots,
        events: meta.events
      }
    };
  });
  const appConfig = await $fetch.native("/__app_config.json").then((r) => r.json());
  const { appConfigSchema, content: { sources, ignores, locales, highlight, navigation, documentDriven, experiment } } = useRuntimeConfig();
  return {
    version: version$1,
    appConfigSchema: appConfigSchema || {},
    appConfig,
    content: { sources, ignores, locales, highlight, navigation, documentDriven, experiment },
    components: filteredComponents
  };
});

const _gArUXm = defineEventHandler((event) => {
  appendHeader(event, "Access-Control-Allow-Origin", "*");
  const componentName = event.context.params["component?"];
  if (componentName) {
    const meta = components[pascalCase(componentName)];
    if (!meta) {
      throw createError({
        statusMessage: "Components not found!",
        statusCode: 404,
        data: {
          description: "Please make sure you are looking for correct component"
        }
      });
    }
    return meta;
  }
  return components;
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => queryParams,
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    $not: (item, condition) => !match(item, condition),
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    $type: (item, condition) => typeof item === String(condition),
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    $lt: (item, condition) => {
      return item < condition;
    },
    $lte: (item, condition) => {
      return item <= condition;
    },
    $gt: (item, condition) => {
      return item > condition;
    },
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before || 1;
    after = after || 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    (data, params) => params.surround ? surround(data, params.surround) : data,
    (data, params) => params.skip ? data.slice(params.skip) : data,
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    (data, params) => apply(withoutKeys(params.without))(data),
    (data, params) => apply(withKeys(params.only))(data)
  ];
  return async (query) => {
    const data = await getContentsList();
    const params = query.params();
    const filteredData = pipelines.reduce(($data, pipe) => pipe($data, params) || $data, data);
    if (params.first) {
      return filteredData[0];
    }
    return filteredData;
  };
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? handleListOfConstructs(constructs) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse$1 = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler$1()(
    postprocess(
      parse$1(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler$1() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(
    node.position,
    "code",
    {
      language,
      filename,
      highlights,
      code
    },
    [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]
  );
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en" } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"));
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}
function normalizeLink(link2) {
  if (link2.endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(/\.md$/, ""), { forceLeadingSlash: false });
  } else {
    return link2;
  }
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    props.className = ["contains-task-list"];
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(
      h({}, "input", {
        type: "checkbox",
        checked: node.checked,
        disabled: true
      })
    );
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h(
    {
      start: position(result[1]).start,
      end: position(result[result.length - 1]).end
    },
    "tbody",
    wrap(result.slice(1), true)
  );
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return null;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return null;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => {
  for (const plugin of Object.values(plugins)) {
    if (plugin) {
      const { instance, ...options } = plugin;
      stream.use(instance, options);
    }
  }
};
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process(
      {
        value: content,
        data: options.data
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        Object.assign(options.data, file?.data || {});
        resolve(file?.result);
      }
    );
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: {
    "remark-emoji": {
      instance: remarkEmoji
    },
    "remark-squeeze-paragraphs": {
      instance: remarkSqueezeParagraphs
    },
    "remark-gfm": {
      instance: remarkGfm
    }
  },
  rehypePlugins: {
    "rehype-slug": {
      instance: rehypeSlug
    },
    "rehype-external-links": {
      instance: rehypeExternalLinks
    },
    "rehype-sort-attribute-values": {
      instance: rehypeSortAttributeValues
    },
    "rehype-sort-attributes": {
      instance: rehypeSortAttributes
    },
    "rehype-raw": {
      instance: rehypeRaw,
      passThrough: ["element"]
    }
  }
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
  return content;
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        ...plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('json5').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)] || {};
    return cur.transform(next, transformOptions);
  }, Promise.resolve(parsed));
  return result;
}

const isPreview = (event) => {
  const previewToken = getQuery(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await serverQueryContent(event).find();
    contentIndex = data.reduce((acc, item) => {
      if (!acc[item._path]) {
        acc[item._path] = item._id;
      } else if (item._id.startsWith("content:")) {
        acc[item._path] = item._id;
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).map((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const node_modules__64nuxt_content_dist_runtime_transformers_shiki_mjs_Xkm5Cexq6R = defineTransformer({
  name: "highlight",
  extensions: [".md"],
  transform: async (content, options = {}) => {
    const tokenColors = {};
    const codeBlocks = [];
    const inlineCodes = [];
    visit(
      content.body,
      (node) => node.tag === "code" && node?.props.code || node.tag === "code-inline" && (node.props?.lang || node.props?.language),
      (node) => {
        if (node.tag === "code") {
          codeBlocks.push(node);
        } else if (node.tag === "code-inline") {
          inlineCodes.push(node);
        }
      }
    );
    await Promise.all(codeBlocks.map(highlightBlock));
    await Promise.all(inlineCodes.map(highlightInline));
    if (Object.values(tokenColors).length) {
      const colors = [];
      for (const colorClass of Object.values(tokenColors)) {
        Object.entries(colorClass.colors).forEach(([variant, color]) => {
          if (variant === "default") {
            colors.unshift(`.${colorClass.className}{color:${color}}`);
          } else {
            colors.push(`.${variant} .${colorClass.className}{color:${color}}`);
          }
        });
      }
      content.body.children.push({
        type: "element",
        tag: "style",
        children: [{ type: "text", value: colors.join("") }]
      });
    }
    return content;
    async function highlightInline(node) {
      const code = node.children[0].value;
      const lines = await $fetch(options.apiURL, {
        method: "POST",
        body: {
          code,
          lang: node.props.lang || node.props.language,
          theme: options.theme
        }
      });
      node.children = lines[0].map(tokenSpan);
      node.props = node.props || {};
      node.props.class = "colored";
      return node;
    }
    async function highlightBlock(node) {
      const { code, language: lang, highlights = [] } = node.props;
      const lines = await $fetch(options.apiURL, {
        method: "POST",
        body: {
          code,
          lang,
          theme: options.theme
        }
      });
      const innerCodeNode = node.children[0].children[0];
      innerCodeNode.children = lines.map((line, lineIndex) => ({
        type: "element",
        tag: "span",
        props: { class: ["line", highlights.includes(lineIndex + 1) ? "highlight" : ""].join(" ").trim() },
        children: line.map(tokenSpan)
      }));
      return node;
    }
    function getColorProps(token) {
      if (!token.color) {
        return {};
      }
      if (typeof token.color === "string") {
        return { style: { color: token.color } };
      }
      const key = Object.values(token.color).join("");
      if (!tokenColors[key]) {
        tokenColors[key] = {
          colors: token.color,
          className: "ct-" + Math.random().toString(16).substring(2, 8)
        };
      }
      return { class: tokenColors[key].className };
    }
    function tokenSpan(token) {
      return {
        type: "element",
        tag: "span",
        props: getColorProps(token),
        children: [{ type: "text", value: token.content }]
      };
    }
  }
});

const transformers = [node_modules__64nuxt_content_dist_runtime_transformers_shiki_mjs_Xkm5Cexq6R];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const contentIgnores = contentConfig.ignores.map(
  (p) => typeof p === "string" ? new RegExp(`^${p}|:${p}`) : p
);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || contentIgnores.some((prefix) => prefix.test(key))) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  {
    keys = await cacheParsedStorage.getKeys(prefix);
  }
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  if (cached) {
    return cached.parsed;
  }
  const meta = await sourceStorage.getMeta(id);
  const hash$1 = hash({
    meta,
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
async function parseContent(id, content, opts = {}) {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: contentConfig.markdown,
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      highlight: contentConfig.highlight,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales
      }
    }
  );
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}
const createServerQueryFetch = (event, path) => (query) => {
  if (path) {
    if (query.params().first) {
      query.where({ _path: withoutTrailingSlash(path) });
    } else {
      query.where({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
    }
  }
  if (!query.params().sort?.length) {
    query.sort({ _file: 1, $numeric: true });
  }
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, path, ...pathParts) {
  if (typeof path === "string") {
    path = withLeadingSlash(joinURL(path, ...pathParts));
    return createQuery(createServerQueryFetch(event, path));
  }
  return createQuery(createServerQueryFetch(event), path || {});
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const memory = {};
const getContentQuery = (event) => {
  const qid = event.context.params.qid?.replace(/.json$/, "");
  const query = getQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseQueryParams(query._params);
    return memory[qid];
  }
  if (memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseQueryParams(query._params);
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = query.sort.split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _I0AJAF = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (query.first) {
    const content = await serverQueryContent(event, query).findOne();
    const path = content?._path || query.where?.find((w) => w._path)?._path;
    if (path) {
      const _dir = await serverQueryContent(event).where({ _path: join(path, "_dir") }).without("_").findOne();
      if (!Array.isArray(_dir)) {
        return {
          _path: path,
          ...content || {},
          _dir
        };
      }
    }
    if (!content) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  const contents = await serverQueryContent(event, query).find();
  return contents;
});

const _1rVPgP = defineEventHandler(async (event) => {
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch("/api/_content/navigation");
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents,
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _j2eW3z = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    _partial: false,
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

var information_for_contributors = [
	"This file has been converted from https://github.com/docusgen/vscode-extension/blob/main/syntaxes/mdc.tmLanguage.json",
	"If you want to provide a fix or improvement, please create a pull request against the original repository.",
	"Once accepted there, we are happy to receive an update request."
];
var version = "https://github.com/docusgen/vscode-extension/blob/1303abd16342880a42a4d143a660da049c79ea6c/syntaxes/mdc.tmLanguage.json";
var name = "markdown";
var injectionSelector = "L:text.html.markdown";
var scopeName = "text.markdown.mdc";
var patterns = [
	{
		include: "text.html.markdown#frontMatter"
	},
	{
		include: "#component_block"
	},
	{
		include: "#block"
	}
];
var repository = {
	block: {
		comment: "Same as `text.html.markdown#block`, but without `raw_block`",
		patterns: [
			{
				include: "#component_block"
			},
			{
				include: "text.html.markdown#separator"
			},
			{
				include: "#heading"
			},
			{
				include: "#blockquote"
			},
			{
				include: "#lists"
			},
			{
				include: "#paragraph"
			},
			{
				include: "text.html.markdown#fenced_code_block"
			},
			{
				include: "text.html.markdown#link-def"
			},
			{
				include: "text.html.markdown#html"
			}
		]
	},
	inline: {
		patterns: [
			{
				include: "#component_inline"
			},
			{
				include: "#span"
			},
			{
				include: "#markdown_attributes"
			}
		]
	},
	markdown_attributes: {
		match: "(?x)([^ ])(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
		name: "markup.component.attribute",
		captures: {
			"4": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		}
	},
	span: {
		match: "(?x)\n  (\\[)           # Open\n    ([^]]*)\n  (\\])\n  (               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )?",
		name: "markup.component.span",
		captures: {
			"2": {
				name: "string.other.link.description.title.markdown"
			},
			"4": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			}
		}
	},
	attributes: {
		match: "(?x)(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
		name: "markup.attributes",
		captures: {
			"3": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		}
	},
	component_inline: {
		match: "(?x)\n  (^|\\G|\\s+)\n  (:)           # component colon\n  (?i:             # component name\n    (\\w[\\w\\d-]*)\n  )\n  (\n      ({[^}]*})        # attributes\n      (\\[[^\\]]*\\]?) # slot\n      # reverse order\n    | (\\[[^\\]]*\\])  # slot\n      ({[^}]*})?       # attributes\n  )?",
		name: "markup.component.inline",
		captures: {
			"2": {
				name: "punctuation.definition.tag.start.component"
			},
			"3": {
				name: "entity.name.tag.component"
			},
			"5": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			},
			"6": {
				patterns: [
					{
						include: "#span"
					}
				]
			},
			"7": {
				patterns: [
					{
						include: "#span"
					}
				]
			},
			"8": {
				patterns: [
					{
						include: "#attributes"
					}
				]
			}
		}
	},
	component_block: {
		begin: "(?x)\n  (^|\\G)(\\s*)\n  (:{2,})     # component colons\n  (?i:\n    (\\w[\\w\\d-]+)   # component name\n    (                 # folowing spaces or attributes\n        \\s*\n      | {([^{]*)}\n    )\n    $\n  )",
		name: "markup.component.block",
		end: "(^|\\G)(\\2)(\\3)\\s*$",
		beginCaptures: {
			"4": {
				name: "entity.name.tag.component"
			},
			"5": {
				patterns: [
					{
						include: "#attribute"
					}
				]
			}
		},
		patterns: [
			{
				include: "#content"
			}
		]
	},
	content: {
		begin: "(^|\\G)(\\s*)(.*)",
		"while": "(^|\\G)(?!\\s*([:]{2,})\\s*$)",
		contentName: "meta.embedded.block.component",
		patterns: [
			{
				begin: "(^|\\G)(\\s*)(-{3})(\\s*)$",
				end: "(^|\\G)(\\s*(-{3})(\\s*)$)",
				patterns: [
					{
						include: "source.yaml"
					}
				]
			},
			{
				match: "^(\\s*)(#[\\w\\-\\_]*)\\s*(<!--(.*)-->)?$",
				captures: {
					"2": {
						name: "entity.other.attribute-name.html"
					},
					"3": {
						name: "comment.block.html"
					}
				}
			},
			{
				comment: "Block Repository created to disable 4-space raw block inside components",
				include: "#block"
			}
		]
	},
	attribute: {
		patterns: [
			{
				match: "(?x)\n  (\n    ([^=><\\s]*)  # attribute name\n    (             # attribute value\n        =[\"]([^\"]*)([\"])|[']([^']*)(['])\n      | =[^\\s'\"]*\n    )?\n    \\s*\n  )",
				captures: {
					"2": {
						name: "entity.other.attribute-name.html"
					},
					"3": {
						patterns: [
							{
								include: "#attribute-interior"
							}
						]
					}
				}
			}
		]
	},
	"attribute-interior": {
		comment: "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L376",
		patterns: [
			{
				begin: "=",
				beginCaptures: {
					"0": {
						name: "punctuation.separator.key-value.html"
					}
				},
				end: "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
				patterns: [
					{
						match: "([^\\s\"'=<>`/]|/(?!>))+",
						name: "string.unquoted.html"
					},
					{
						begin: "\"",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.html"
							}
						},
						end: "\"",
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.html"
							}
						},
						name: "string.quoted.double.html",
						patterns: [
							{
								include: "#entities"
							}
						]
					},
					{
						begin: "'",
						beginCaptures: {
							"0": {
								name: "punctuation.definition.string.begin.html"
							}
						},
						end: "'",
						endCaptures: {
							"0": {
								name: "punctuation.definition.string.end.html"
							}
						},
						name: "string.quoted.single.html",
						patterns: [
							{
								include: "#entities"
							}
						]
					},
					{
						match: "=",
						name: "invalid.illegal.unexpected-equals-sign.html"
					}
				]
			}
		]
	},
	entities: {
		comment: "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L532",
		patterns: [
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"912": {
						name: "punctuation.definition.entity.html"
					}
				},
				comment: "Yes this is a bit ridiculous, there are quite a lot of these",
				match: "(?x)\n\t\t\t\t\t\t(&)\t(?=[a-zA-Z])\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))\n\t\t\t\t\t\t  | (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))\n\t\t\t\t\t\t  | (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))\n\t\t\t\t\t\t  | (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))\n\t\t\t\t\t\t  | (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))\n\t\t\t\t\t\t  | (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))\n\t\t\t\t\t\t  | (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))\n\t\t\t\t\t\t  | (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))\n\t\t\t\t\t\t  | (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))\n\t\t\t\t\t\t  | (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))\n\t\t\t\t\t\t  | (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))\n\t\t\t\t\t\t  | (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))\n\t\t\t\t\t\t  | (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))\n\t\t\t\t\t\t  | (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))\n\t\t\t\t\t\t  | (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))\n\t\t\t\t\t\t  | (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))\n\t\t\t\t\t\t  | (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))\n\t\t\t\t\t\t  | (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))\n\t\t\t\t\t\t  | (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))\n\t\t\t\t\t\t  | (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))\n\t\t\t\t\t\t  | (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))\n\t\t\t\t\t\t  | (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))\n\t\t\t\t\t\t  | (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))\n\t\t\t\t\t\t  | (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))\n\t\t\t\t\t\t  | (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))\n\t\t\t\t\t\t  | (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(;)\n\t\t\t\t\t",
				name: "constant.character.entity.named.$2.html"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"3": {
						name: "punctuation.definition.entity.html"
					}
				},
				match: "(&)#[0-9]+(;)",
				name: "constant.character.entity.numeric.decimal.html"
			},
			{
				captures: {
					"1": {
						name: "punctuation.definition.entity.html"
					},
					"3": {
						name: "punctuation.definition.entity.html"
					}
				},
				match: "(&)#[xX][0-9a-fA-F]+(;)",
				name: "constant.character.entity.numeric.hexadecimal.html"
			},
			{
				match: "&(?=[a-zA-Z0-9]+;)",
				name: "invalid.illegal.ambiguous-ampersand.html"
			}
		]
	},
	heading: {
		match: "(?:^|\\G)[ ]*(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
		captures: {
			"1": {
				patterns: [
					{
						match: "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.6.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.5.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.4.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.3.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.2.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					},
					{
						match: "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
						name: "heading.1.markdown",
						captures: {
							"1": {
								name: "punctuation.definition.heading.markdown"
							},
							"2": {
								name: "entity.name.section.markdown",
								patterns: [
									{
										include: "text.html.markdown#inline"
									},
									{
										include: "text.html.derivative"
									}
								]
							},
							"3": {
								name: "punctuation.definition.heading.markdown"
							}
						}
					}
				]
			}
		},
		name: "markup.heading.markdown",
		patterns: [
			{
				include: "text.html.markdown#inline"
			}
		]
	},
	"heading-setext": {
		patterns: [
			{
				match: "^(={3,})(?=[ \\t]*$\\n?)",
				name: "markup.heading.setext.1.markdown"
			},
			{
				match: "^(-{3,})(?=[ \\t]*$\\n?)",
				name: "markup.heading.setext.2.markdown"
			}
		]
	},
	lists: {
		patterns: [
			{
				begin: "(^|\\G)([ ]*)([*+-])([ \\t])",
				beginCaptures: {
					"3": {
						name: "punctuation.definition.list.begin.markdown"
					}
				},
				comment: "Currently does not support un-indented second lines.",
				name: "markup.list.unnumbered.markdown",
				patterns: [
					{
						include: "#block"
					},
					{
						include: "text.html.markdown#list_paragraph"
					}
				],
				"while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
			},
			{
				begin: "(^|\\G)([ ]*)([0-9]+\\.)([ \\t])",
				beginCaptures: {
					"3": {
						name: "punctuation.definition.list.begin.markdown"
					}
				},
				name: "markup.list.numbered.markdown",
				patterns: [
					{
						include: "#block"
					},
					{
						include: "text.html.markdown#list_paragraph"
					}
				],
				"while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
			}
		]
	},
	paragraph: {
		begin: "(^|\\G)[ ]*(?=\\S)",
		name: "meta.paragraph.markdown",
		patterns: [
			{
				include: "#inline"
			},
			{
				include: "text.html.markdown#inline"
			},
			{
				include: "text.html.derivative"
			},
			{
				include: "#heading-setext"
			}
		],
		"while": "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=\\S))"
	},
	blockquote: {
		begin: "(^|\\G)[ ]*(>) ?",
		captures: {
			"2": {
				name: "punctuation.definition.quote.begin.markdown"
			}
		},
		name: "markup.quote.markdown",
		patterns: [
			{
				include: "#block"
			}
		],
		"while": "(^|\\G)\\s*(>) ?"
	}
};
const mdcTMLanguage = {
	information_for_contributors: information_for_contributors,
	version: version,
	name: name,
	injectionSelector: injectionSelector,
	scopeName: scopeName,
	patterns: patterns,
	repository: repository
};

const logger = consola.withScope("@nuxt/content");
const resolveLang = (lang) => BUNDLED_LANGUAGES.find((l) => l.id === lang || l.aliases?.includes(lang))?.id;
const resolveTheme = (theme) => {
  if (!theme) {
    return;
  }
  if (typeof theme === "string") {
    theme = {
      default: theme
    };
  }
  return Object.entries(theme).reduce((acc, [key, value]) => {
    acc[key] = BUNDLED_THEMES.find((t) => t === value);
    return acc;
  }, {});
};
const resolveBody = (body) => {
  if (typeof body.code !== "string") {
    body.code = "";
  }
  return {
    code: body.code.replace(/\n+$/, ""),
    lang: resolveLang(body.lang || ""),
    theme: resolveTheme(body.theme || "")
  };
};
const _Xh0jyT = lazyEventHandler(async () => {
  const { theme, preload } = useRuntimeConfig().content.highlight;
  const highlighter = await getHighlighter({
    theme: theme?.default || theme || "dark-plus",
    langs: [
      ...preload || [],
      "diff",
      "json",
      "js",
      "ts",
      "css",
      "shell",
      "html",
      "md",
      "yaml",
      {
        id: "md",
        scopeName: "text.markdown.mdc",
        path: "mdc.tmLanguage.json",
        aliases: ["markdown"],
        grammar: mdcTMLanguage
      }
    ]
  });
  return defineEventHandler(async (event) => {
    const params = await readBody(event);
    const { code, lang, theme: theme2 = { default: highlighter.getTheme() } } = resolveBody(params);
    if (!lang) {
      return [[{ content: code }]];
    }
    if (!highlighter.getLoadedLanguages().includes(lang)) {
      let message = "Content Highlighter Error\n\n";
      message = message + `Language "${lang}" is not loaded Shiki. Falling back to plain code.

`;
      message = message + `Please make sure you add "${lang}" to the 'preload' list in your Nuxt config.

`;
      message = message + "See: https://content.nuxtjs.org/api/configuration#highlight";
      logger.warn(message);
      return [[{ content: code }]];
    }
    await Promise.all(
      Object.values(theme2).map(async (theme3) => {
        if (!highlighter.getLoadedThemes().includes(theme3)) {
          await highlighter.loadTheme(theme3);
        }
      })
    );
    const coloredTokens = Object.entries(theme2).map(([key, theme3]) => {
      const tokens = highlighter.codeToThemedTokens(code, lang, theme3);
      return {
        key,
        theme: theme3,
        tokens
      };
    });
    const highlightedCode = [];
    for (const line in coloredTokens[0].tokens) {
      highlightedCode[line] = coloredTokens.reduce((acc, color) => {
        return mergeLines({
          key: coloredTokens[0].key,
          tokens: acc
        }, {
          key: color.key,
          tokens: color.tokens[line]
        });
      }, coloredTokens[0].tokens[line]);
    }
    return highlightedCode;
  });
});
function mergeLines(line1, line2) {
  const mergedTokens = [];
  const getColors = (h, i) => typeof h.tokens[i].color === "string" ? { [h.key]: h.tokens[i].color } : h.tokens[i].color;
  const [big, small] = line1.tokens.length > line2.tokens.length ? [line1, line2] : [line2, line1];
  let targetToken = 0;
  let targetTokenCharIndex = 0;
  big.tokens.forEach((t, i) => {
    if (targetTokenCharIndex === 0) {
      if (t.content === small.tokens[i]?.content) {
        mergedTokens.push({
          content: t.content,
          color: {
            ...getColors(big, i),
            ...getColors(small, i)
          }
        });
        targetToken = i + 1;
        return;
      }
      if (t.content === small.tokens[targetToken]?.content) {
        mergedTokens.push({
          content: t.content,
          color: {
            ...getColors(big, i),
            ...getColors(small, targetToken)
          }
        });
        targetToken += 1;
        return;
      }
    }
    if (small.tokens[targetToken]?.content?.substring(targetTokenCharIndex, targetTokenCharIndex + t.content.length) === t.content) {
      targetTokenCharIndex += t.content.length;
      mergedTokens.push({
        content: t.content,
        color: {
          ...getColors(big, i),
          ...getColors(small, targetToken)
        }
      });
    }
    if (small.tokens[targetToken]?.content.length <= targetTokenCharIndex) {
      targetToken += 1;
      targetTokenCharIndex = 0;
    }
  });
  return mergedTokens;
}

const _lazy_QuxpMU = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_QuxpMU, lazy: true, middleware: false, method: undefined },
  { route: '/__studio.json', handler: _SH5Pd6, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta', handler: _gArUXm, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta/:component?', handler: _gArUXm, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _I0AJAF, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _I0AJAF, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.json', handler: _1rVPgP, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _j2eW3z, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _j2eW3z, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/highlight', handler: _Xh0jyT, lazy: false, middleware: false, method: "post" },
  { route: '/**', handler: _lazy_QuxpMU, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
