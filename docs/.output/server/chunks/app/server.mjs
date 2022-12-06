import { getCurrentInstance, ref, onServerPrefetch, toRef, isRef, inject, reactive, defineAsyncComponent, version, computed, useSSRContext, defineComponent, createElementBlock, unref, watch, h, Suspense, nextTick, Transition, provide, resolveComponent, shallowRef, mergeProps, createVNode, resolveDynamicComponent, withCtx, renderSlot, withAsyncContext, openBlock, createBlock, createCommentVNode, toDisplayString, createElementVNode, createTextVNode, Fragment as Fragment$1, renderList, createApp, onErrorCaptured, onScopeDispose } from 'vue';
import { $fetch as $fetch$1 } from 'ofetch';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import destr from 'destr';
import { withLeadingSlash, joinURL, withoutTrailingSlash, hasProtocol, isEqual as isEqual$1, withBase, parseURL } from 'ufo';
import { createError as createError$1, appendHeader, sendRedirect } from 'h3';
import { useHead as useHead$1, createHead as createHead$1 } from '@unhead/vue';
import { renderDOMHead, debouncedRenderDOMHead } from '@unhead/dom';
import { RouterView, createMemoryHistory, createRouter } from 'vue-router';
import { hash, isEqual } from 'ohash';
import { parse, serialize } from 'cookie-es';
import { nanoid } from 'nanoid';
import { kebabCase } from 'scule';
import { defu } from 'defu';
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderTeleport, ssrRenderAttr, ssrRenderSuspense } from 'vue/server-renderer';
import { Icon as Icon$1 } from '@iconify/vue/dist/offline';
import { loadIcon } from '@iconify/vue';
import { a as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'unenv/runtime/fetch/index';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'html-tags';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';

var _a, _b;
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a2;
      if (prop === "public") {
        return target.public;
      }
      return (_a2 = target[prop]) != null ? _a2 : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin2, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin2 of plugins2) {
    await applyPlugin(nuxtApp, plugin2);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin2) => {
    if (typeof plugin2 !== "function") {
      return null;
    }
    if (plugin2.length > 1) {
      return (nuxtApp) => plugin2(nuxtApp, nuxtApp.provide);
    }
    return plugin2;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin2) {
  plugin2[NuxtPluginIndicator] = true;
  return plugin2;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config) {
  return config;
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const getDefault = () => null;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.lazy = (_c = options.lazy) != null ? _c : false;
  options.immediate = (_d = options.immediate) != null ? _d : true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref((_g = (_f = getCachedData()) != null ? _f : (_e = options.default) == null ? void 0 : _e.call(options)) != null ? _g : null),
      pending: ref(!hasCachedData()),
      error: ref(nuxt.payload._errors[key] ? createError(nuxt.payload._errors[key]) : null)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a3, _b3;
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref((_b3 = (_a3 = options.default) == null ? void 0 : _a3.call(options)) != null ? _b3 : null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
async function refreshNuxtData(keys) {
  {
    return Promise.resolve();
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useRouter = () => {
  var _a2;
  return (_a2 = useNuxtApp()) == null ? void 0 : _a2.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a2;
  return (_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.event;
}
const CookieDefaults = {
  path: "/",
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2, _b2;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref((_b2 = cookies[name]) != null ? _b2 : (_a2 = opts.default) == null ? void 0 : _a2.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a2;
  {
    return parse(((_a2 = useRequestEvent()) == null ? void 0 : _a2.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName2 = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName2,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      const prefetched = ref(false);
      const el = void 0;
      return () => {
        var _a2, _b2, _c;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              ref: void 0,
              to: to.value,
              ...prefetched.value && !props.custom ? { class: props.prefetchedClass || options.prefetchedClass } : {},
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b2 = (_a2 = router.resolve(to.value)) == null ? void 0 : _a2.href) != null ? _b2 : null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$5 = defineNuxtLink({ componentName: "NuxtLink" });
const nuxtLink = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  defineNuxtLink,
  default: __nuxt_component_0$5
}, Symbol.toStringTag, { value: "Module" }));
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(value, object[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => arguments_.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defuFn = createDefu((object, key, currentValue, _namespace) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const cfg0 = defineAppConfig({
  docus: {
    socials: {
      twitter: "@nuxt_js",
      github: "nuxt-community/ackee-module"
    },
    header: {
      title: "Nuxt Ackee",
      logo: true
    },
    title: "Nuxt Ackee",
    url: "https://ackee.nuxtjs.org"
  }
});
const cfg1 = defineAppConfig({
  docus: {
    title: "Docus",
    description: "The best place to start your documentation.",
    image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {},
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    header: {
      title: "",
      logo: false,
      showLinkIcon: false,
      exclude: []
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev"
      },
      icons: []
    }
  }
});
const cfg2 = defineAppConfig({});
const inlineConfig = {
  "prose": {
    "copyButton": {
      "iconCopy": "ph:copy",
      "iconCopied": "ph:check"
    },
    "headings": {
      "icon": "ph:link"
    },
    "h1": {
      "icon": ""
    },
    "h2": {
      "icon": ""
    },
    "h3": {
      "icon": ""
    },
    "h4": {
      "icon": ""
    },
    "h5": {
      "icon": ""
    },
    "h6": {
      "icon": ""
    }
  }
};
const __appConfig = defuFn(cfg0, cfg1, cfg2, inlineConfig);
function deepAssign(obj, newObj) {
  for (const key in newObj) {
    const val = newObj[key];
    if (val !== null && typeof val === "object") {
      deepAssign(obj[key], val);
    } else {
      obj[key] = val;
    }
  }
}
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = reactive(__appConfig);
  }
  return nuxtApp._appConfig;
}
function updateAppConfig(appConfig2) {
  const _appConfig = useAppConfig();
  deepAssign(_appConfig, appConfig2);
}
const components = {
  AppFooter: defineAsyncComponent(() => Promise.resolve().then(() => AppFooter).then((c) => c.default || c)),
  AppHeader: defineAsyncComponent(() => Promise.resolve().then(() => AppHeader).then((c) => c.default || c)),
  AppHeaderDialog: defineAsyncComponent(() => Promise.resolve().then(() => AppHeaderDialog).then((c) => c.default || c)),
  AppHeaderLogo: defineAsyncComponent(() => Promise.resolve().then(() => AppHeaderLogo).then((c) => c.default || c)),
  AppHeaderNavigation: defineAsyncComponent(() => Promise.resolve().then(() => AppHeaderNavigation).then((c) => c.default || c)),
  AppLayout: defineAsyncComponent(() => Promise.resolve().then(() => AppLayout).then((c) => c.default || c)),
  AppLoadingBar: defineAsyncComponent(() => Promise.resolve().then(() => AppLoadingBar).then((c) => c.default || c)),
  AppSearch: defineAsyncComponent(() => Promise.resolve().then(() => AppSearch).then((c) => c.default || c)),
  AppSocialIcons: defineAsyncComponent(() => Promise.resolve().then(() => AppSocialIcons).then((c) => c.default || c)),
  DocumentDrivenNotFound: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/document-driven-not-found" */
    './_nuxt/DocumentDrivenNotFound.3c7c8475.mjs'
  ).then((c) => c.default || c)),
  ThemeSelect: defineAsyncComponent(() => Promise.resolve().then(() => ThemeSelect).then((c) => c.default || c)),
  DocsAside: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/docs-aside" */
    './_nuxt/DocsAside.fc51b58c.mjs'
  ).then((c) => c.default || c)),
  DocsAsideTree: defineAsyncComponent(() => Promise.resolve().then(() => DocsAsideTree).then((c) => c.default || c)),
  DocsPageBottom: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/docs-page-bottom" */
    './_nuxt/DocsPageBottom.a103644d.mjs'
  ).then((c) => c.default || c)),
  DocsPageContent: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/docs-page-content" */
    './_nuxt/DocsPageContent.b4a1a799.mjs'
  ).then((c) => c.default || c)),
  DocsPrevNext: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/docs-prev-next" */
    './_nuxt/DocsPrevNext.21ecd651.mjs'
  ).then((c) => c.default || c)),
  DocsToc: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/docs-toc" */
    './_nuxt/DocsToc.36e3a161.mjs'
  ).then((c) => c.default || c)),
  DocsTocLinks: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/docs-toc-links" */
    './_nuxt/DocsTocLinks.af7c0f54.mjs'
  ).then((c) => c.default || c)),
  EditOnLink: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/edit-on-link" */
    './_nuxt/EditOnLink.05122ebe.mjs'
  ).then((c) => c.default || c)),
  ProseA: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-a" */
    './_nuxt/ProseA.88eb3037.mjs'
  ).then((c) => c.default || c)),
  ProseBlockquote: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-blockquote" */
    './_nuxt/ProseBlockquote.1eb6f3e0.mjs'
  ).then((c) => c.default || c)),
  ProseCode: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-code" */
    './_nuxt/ProseCode.4702cbeb.mjs'
  ).then((n) => n.a).then((c) => c.default || c)),
  ProseCodeInline: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-code-inline" */
    './_nuxt/ProseCodeInline.87339755.mjs'
  ).then((c) => c.default || c)),
  ProseEm: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-em" */
    './_nuxt/ProseEm.19b6dfcd.mjs'
  ).then((c) => c.default || c)),
  ProseH1: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-h1" */
    './_nuxt/ProseH1.b9f9cfb1.mjs'
  ).then((c) => c.default || c)),
  ProseH2: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-h2" */
    './_nuxt/ProseH2.41b7f01a.mjs'
  ).then((c) => c.default || c)),
  ProseH3: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-h3" */
    './_nuxt/ProseH3.d3320df9.mjs'
  ).then((c) => c.default || c)),
  ProseH4: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-h4" */
    './_nuxt/ProseH4.9dc22177.mjs'
  ).then((c) => c.default || c)),
  ProseH5: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-h5" */
    './_nuxt/ProseH5.ccd9eccc.mjs'
  ).then((c) => c.default || c)),
  ProseH6: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-h6" */
    './_nuxt/ProseH6.1e901a8e.mjs'
  ).then((c) => c.default || c)),
  ProseHr: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-hr" */
    './_nuxt/ProseHr.a7c10fd0.mjs'
  ).then((c) => c.default || c)),
  ProseImg: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-img" */
    './_nuxt/ProseImg.6c321868.mjs'
  ).then((c) => c.default || c)),
  ProseLi: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-li" */
    './_nuxt/ProseLi.1cb34fff.mjs'
  ).then((c) => c.default || c)),
  ProseOl: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-ol" */
    './_nuxt/ProseOl.86bc60e1.mjs'
  ).then((c) => c.default || c)),
  ProseP: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-p" */
    './_nuxt/ProseP.7362eafc.mjs'
  ).then((c) => c.default || c)),
  ProseStrong: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-strong" */
    './_nuxt/ProseStrong.63307b77.mjs'
  ).then((c) => c.default || c)),
  ProseTable: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-table" */
    './_nuxt/ProseTable.8bf4b26a.mjs'
  ).then((c) => c.default || c)),
  ProseTbody: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-tbody" */
    './_nuxt/ProseTbody.32578b1c.mjs'
  ).then((c) => c.default || c)),
  ProseTd: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-td" */
    './_nuxt/ProseTd.39825a71.mjs'
  ).then((c) => c.default || c)),
  ProseTh: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-th" */
    './_nuxt/ProseTh.ab6da822.mjs'
  ).then((c) => c.default || c)),
  ProseThead: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-thead" */
    './_nuxt/ProseThead.84680fda.mjs'
  ).then((c) => c.default || c)),
  ProseTr: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-tr" */
    './_nuxt/ProseTr.72eb65cc.mjs'
  ).then((c) => c.default || c)),
  ProseUl: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/prose-ul" */
    './_nuxt/ProseUl.156919f7.mjs'
  ).then((c) => c.default || c)),
  Alert: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/alert" */
    './_nuxt/Alert.7ae1ec10.mjs'
  ).then((c) => c.default || c)),
  Badge: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/badge" */
    './_nuxt/Badge.b1032521.mjs'
  ).then((c) => c.default || c)),
  ButtonLink: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/button-link" */
    './_nuxt/ButtonLink.40bde43c.mjs'
  ).then((c) => c.default || c)),
  Callout: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/callout" */
    './_nuxt/Callout.cdef55e8.mjs'
  ).then((c) => c.default || c)),
  CodeBlock: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/code-block" */
    './_nuxt/CodeBlock.6517f33a.mjs'
  ).then((c) => c.default || c)),
  CodeGroup: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/code-group" */
    './_nuxt/CodeGroup.0d59a989.mjs'
  ).then((c) => c.default || c)),
  Container: defineAsyncComponent(() => Promise.resolve().then(() => Container).then((c) => c.default || c)),
  CopyButton: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/copy-button" */
    './_nuxt/CopyButton.022d92d3.mjs'
  ).then((c) => c.default || c)),
  Ellipsis: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/ellipsis" */
    './_nuxt/Ellipsis.7d93ba64.mjs'
  ).then((c) => c.default || c)),
  List: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/list" */
    './_nuxt/List.14ff8843.mjs'
  ).then((c) => c.default || c)),
  NuxtImg: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/nuxt-img" */
    './_nuxt/NuxtImg.3a48767a.mjs'
  ).then((c) => c.default || c)),
  Props: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/props" */
    './_nuxt/Props.d54a6ca9.mjs'
  ).then((c) => c.default || c)),
  Sandbox: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/sandbox" */
    './_nuxt/Sandbox.e2406183.mjs'
  ).then((c) => c.default || c)),
  SourceLink: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/source-link" */
    './_nuxt/SourceLink.d0ecf000.mjs'
  ).then((c) => c.default || c)),
  TabsHeader: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/tabs-header" */
    './_nuxt/TabsHeader.8481728f.mjs'
  ).then((c) => c.default || c)),
  Terminal: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/terminal" */
    './_nuxt/Terminal.4a5b2283.mjs'
  ).then((c) => c.default || c)),
  VideoPlayer: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/video-player" */
    './_nuxt/VideoPlayer.cbf74da3.mjs'
  ).then((c) => c.default || c)),
  IconCodeSandBox: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/icon-code-sand-box" */
    './_nuxt/IconCodeSandBox.17f65b51.mjs'
  ).then((c) => c.default || c)),
  IconDocus: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/icon-docus" */
    './_nuxt/IconDocus.58ad8cf8.mjs'
  ).then((c) => c.default || c)),
  IconNuxt: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/icon-nuxt" */
    './_nuxt/IconNuxt.6c0caad2.mjs'
  ).then((c) => c.default || c)),
  IconNuxtContent: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/icon-nuxt-content" */
    './_nuxt/IconNuxtContent.ccf424b1.mjs'
  ).then((c) => c.default || c)),
  IconNuxtLabs: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/icon-nuxt-labs" */
    './_nuxt/IconNuxtLabs.f418efd1.mjs'
  ).then((c) => c.default || c)),
  IconNuxtStudio: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/icon-nuxt-studio" */
    './_nuxt/IconNuxtStudio.8ba1061d.mjs'
  ).then((c) => c.default || c)),
  IconStackBlitz: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/icon-stack-blitz" */
    './_nuxt/IconStackBlitz.81546da2.mjs'
  ).then((c) => c.default || c)),
  IconVueTelescope: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/icon-vue-telescope" */
    './_nuxt/IconVueTelescope.5e59447c.mjs'
  ).then((c) => c.default || c)),
  BlockHero: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/block-hero" */
    './_nuxt/BlockHero.32ff2cb7.mjs'
  ).then((c) => c.default || c)),
  Card: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/card" */
    './_nuxt/Card.33a4d400.mjs'
  ).then((c) => c.default || c)),
  CardGrid: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/card-grid" */
    './_nuxt/CardGrid.d3cf1567.mjs'
  ).then((c) => c.default || c)),
  VoltaBoard: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/volta-board" */
    './_nuxt/VoltaBoard.9d839b8d.mjs'
  ).then((c) => c.default || c)),
  ContentDoc: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/content-doc" */
    './_nuxt/ContentDoc.dba02406.mjs'
  ).then((c) => c.default || c)),
  ContentList: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/content-list" */
    './_nuxt/ContentList.aa6e4051.mjs'
  ).then((c) => c.default || c)),
  ContentNavigation: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/content-navigation" */
    './_nuxt/ContentNavigation.8806b2bd.mjs'
  ).then((c) => c.default || c)),
  ContentQuery: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/content-query" */
    './_nuxt/ContentQuery.b19bed81.mjs'
  ).then((c) => c.default || c)),
  ContentRenderer: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/content-renderer" */
    './_nuxt/ContentRenderer.6d9245de.mjs'
  ).then((c) => c.default || c)),
  ContentRendererMarkdown: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/content-renderer-markdown" */
    './_nuxt/ContentRendererMarkdown.15ebda63.mjs'
  ).then((c) => c.default || c)),
  ContentSlot: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/content-slot" */
    './_nuxt/ContentSlot.b077559a.mjs'
  ).then((c) => c.default || c)),
  DocumentDrivenEmpty: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/document-driven-empty" */
    './_nuxt/DocumentDrivenEmpty.b1426f16.mjs'
  ).then((c) => c.default || c)),
  Markdown: defineAsyncComponent(() => import(
    /* webpackChunkName: "components/markdown" */
    './_nuxt/Markdown.bc4077bb.mjs'
  ).then((c) => c.default || c)),
  Icon: defineAsyncComponent(() => Promise.resolve().then(() => Icon).then((c) => c.default || c))
};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
function createHead(initHeadObject) {
  const unhead = createHead$1();
  const legacyHead = {
    unhead,
    install(app) {
      if (version.startsWith("3")) {
        app.config.globalProperties.$head = unhead;
        app.provide("usehead", unhead);
      }
    },
    resolveTags() {
      return unhead.resolveTags();
    },
    headEntries() {
      return unhead.headEntries();
    },
    headTags() {
      return unhead.resolveTags();
    },
    push(input, options) {
      return unhead.push(input, options);
    },
    addEntry(input, options) {
      return unhead.push(input, options);
    },
    addHeadObjs(input, options) {
      return unhead.push(input, options);
    },
    addReactiveEntry(input, options) {
      const api = useHead$1(input, options);
      if (typeof api !== "undefined")
        return api.dispose;
      return () => {
      };
    },
    removeHeadObjs() {
    },
    updateDOM(document2, force) {
      if (force)
        renderDOMHead(unhead, { document: document2 });
      else
        debouncedRenderDOMHead(unhead, { delayFn: (fn) => setTimeout(() => fn(), 50), document: document2 });
    },
    internalHooks: unhead.hooks,
    hooks: {
      "before:dom": [],
      "resolved:tags": [],
      "resolved:entries": []
    }
  };
  unhead.addHeadObjs = legacyHead.addHeadObjs;
  unhead.updateDOM = legacyHead.updateDOM;
  unhead.hooks.hook("dom:beforeRender", (ctx) => {
    for (const hook of legacyHead.hooks["before:dom"]) {
      if (hook() === false)
        ctx.shouldRender = false;
    }
  });
  if (initHeadObject)
    legacyHead.addHeadObjs(initHeadObject);
  return legacyHead;
}
version.startsWith("2.");
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  head.push(appHead);
  nuxtApp.vueApp.use(head);
  nuxtApp._useHead = useHead$1;
  {
    nuxtApp.ssrContext.renderMeta = async () => {
      const { renderSSRHead } = await import('@unhead/ssr');
      const meta = await renderSSRHead(head.unhead);
      return {
        ...meta,
        bodyScriptsPrepend: meta.bodyTagsOpen,
        bodyScripts: meta.bodyTags
      };
    };
  }
});
const __nuxt_page_meta = {};
const _routes = [
  {
    name: (_a = __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) != null ? _a : "slug",
    path: (_b = __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) != null ? _b : "/:slug(.*)*",
    file: "/Users/yaelguilloux/Code/pull-requests/nuxt-ackee-module/docs/node_modules/@nuxt/content/dist/runtime/pages/document-driven.vue",
    children: [],
    meta: __nuxt_page_meta,
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./_nuxt/document-driven.bb2d086a.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, _form, savedPosition) {
    if (history.state.stop) {
      return;
    }
    if (history.state.smooth) {
      return {
        el: history.state.smooth,
        behavior: "smooth"
      };
    }
    if (to.hash) {
      const el = document.querySelector(to.hash);
      if (!el) {
        return;
      }
      const { marginTop } = getComputedStyle(el);
      const marginTopValue = parseInt(marginTop);
      const offset = document.querySelector(to.hash).offsetTop - marginTopValue;
      return {
        top: offset,
        behavior: "smooth"
      };
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
};
const routerOptions1 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => {
      var _a2;
      return !!((_a2 = route.meta.pageTransition) != null ? _a2 : appPageTransition);
    };
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions1,
  ...routerOptions0
};
const validate = defineNuxtRouteMiddleware(async (to) => {
  var _a2;
  let __temp, __restore;
  if (!((_a2 = to.meta) == null ? void 0 : _a2.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (typeof result === "boolean") {
    return result;
  }
  return createError(result);
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB = defineNuxtPlugin(async (nuxtApp) => {
  var _a2, _b2, _c, _d;
  let __temp, __restore;
  let routerBase = useRuntimeConfig().app.baseURL;
  if (routerOptions.hashMode && !routerBase.includes("#")) {
    routerBase += "#";
  }
  const history2 = (_b2 = (_a2 = routerOptions.history) == null ? void 0 : _a2.call(routerOptions, routerBase)) != null ? _b2 : createMemoryHistory(routerBase);
  const routes = (_d = (_c = routerOptions.routes) == null ? void 0 : _c.call(routerOptions, _routes)) != null ? _d : _routes;
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history: history2,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a3, _b3, _c2, _d2;
    if (((_b3 = (_a3 = to.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b3.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  const initialLayout = useState("_layout");
  router.beforeEach(async (to, from) => {
    var _a3, _b3;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a3 = initialLayout.value) != null ? _a3 : to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b3 = namedMiddleware[entry2]) == null ? void 0 : _b3.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusCode: 404,
            statusMessage: `Page Not Found: ${initialURL}`
          });
          await callWithNuxt(nuxtApp, showError, [error2]);
          return false;
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual$1(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const get$1 = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
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
      const values = [get$1(a, key), get$1(b, key)].map((value) => {
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
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
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
function unwrap(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
function flatUnwrap(vnodes, tags = ["p"]) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
const withContentBase = (url) => withBase(url, "/api/" + useRuntimeConfig().public.content.base);
const useUnwrap = () => ({
  unwrap,
  flatUnwrap
});
const addPrerenderPath = (path) => {
  const event = useRequestEvent();
  event.res.setHeader(
    "x-nitro-prerender",
    [
      event.res.getHeader("x-nitro-prerender"),
      path
    ].filter(Boolean).join(",")
  );
};
const shouldUseClientDB = () => {
  useRuntimeConfig().content;
  {
    return false;
  }
};
const createQueryFetch = (path) => async (query) => {
  var _a2;
  if (path) {
    if (query.params().first && (query.params().where || []).length === 0) {
      query.where({ _path: withoutTrailingSlash(path) });
    } else {
      query.where({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
    }
  }
  if (!((_a2 = query.params().sort) == null ? void 0 : _a2.length)) {
    query.sort({ _file: 1, $numeric: true });
  }
  const params = query.params();
  const apiPath = withContentBase(`/query/${hash(params)}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const db = await import('./_nuxt/client-db.5de23239.mjs').then((m) => m.useContentDatabase());
    return db.fetch(query);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params),
      previewToken: useCookie("previewToken").value
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
function queryContent(query, ...pathParts) {
  if (typeof query === "string") {
    return createQuery(createQueryFetch(withLeadingSlash(joinURL(query, ...pathParts))));
  }
  return createQuery(createQueryFetch(), query);
}
const navBottomLink = (link) => {
  if (!link.children) {
    return link._path;
  }
  for (const child of (link == null ? void 0 : link.children) || []) {
    const result = navBottomLink(child);
    if (result) {
      return result;
    }
  }
};
const navDirFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path && !file._id) {
      return file.children;
    }
    if (file.children) {
      const result = navDirFromPath(path, file.children);
      if (result) {
        return result;
      }
    }
  }
};
const navPageFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path) {
      return file;
    }
    if (file.children) {
      const result = navPageFromPath(path, file.children);
      if (result) {
        return result;
      }
    }
  }
};
const navKeyFromPath = (path, key, tree) => {
  let value;
  const goDeep = (path2, tree2) => {
    for (const file of tree2) {
      if ((path2 == null ? void 0 : path2.startsWith(file._path)) && file[key]) {
        value = file[key];
      }
      if (file._path === path2) {
        return;
      }
      if (file.children) {
        goDeep(path2, file.children);
      }
    }
  };
  goDeep(path, tree);
  return value;
};
const useContentHelpers = () => {
  return {
    navBottomLink,
    navDirFromPath,
    navPageFromPath,
    navKeyFromPath
  };
};
const useContentState = () => {
  const pages = useState("dd-pages", () => ({}));
  const surrounds = useState("dd-surrounds", () => ({}));
  const navigation = useState("dd-navigation");
  const globals = useState("dd-globals", () => ({}));
  return {
    pages,
    surrounds,
    navigation,
    globals
  };
};
const useContent = () => {
  const { navigation, pages, surrounds, globals } = useContentState();
  const _path = computed(() => withoutTrailingSlash(useRoute().path));
  const page2 = computed(() => pages.value[_path.value]);
  const surround = computed(() => surrounds.value[_path.value]);
  const toc = computed(() => {
    var _a2, _b2;
    return (_b2 = (_a2 = page2 == null ? void 0 : page2.value) == null ? void 0 : _a2.body) == null ? void 0 : _b2.toc;
  });
  const type = computed(() => {
    var _a2;
    return (_a2 = page2.value) == null ? void 0 : _a2.type;
  });
  const excerpt = computed(() => {
    var _a2;
    return (_a2 = page2.value) == null ? void 0 : _a2.excerpt;
  });
  const layout = computed(() => {
    var _a2;
    return (_a2 = page2.value) == null ? void 0 : _a2.layout;
  });
  const next = computed(() => {
    var _a2;
    return (_a2 = surround.value) == null ? void 0 : _a2[1];
  });
  const prev = computed(() => {
    var _a2;
    return (_a2 = surround.value) == null ? void 0 : _a2[0];
  });
  return {
    globals,
    navigation,
    surround,
    page: page2,
    excerpt,
    toc,
    type,
    layout,
    next,
    prev
  };
};
const fetchContentNavigation = async (queryBuilder) => {
  let params = queryBuilder;
  if (typeof (params == null ? void 0 : params.params) === "function") {
    params = params.params();
  }
  const apiPath = withContentBase(params ? `/navigation/${hash(params)}.json` : "/navigation");
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const generateNavigation = await import('./_nuxt/client-db.5de23239.mjs').then((m) => m.generateNavigation);
    return generateNavigation(params || {});
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params || {}),
      previewToken: useCookie("previewToken").value
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
const layouts = {
  default: () => import('./_nuxt/default.70e741ea.mjs').then((m) => m.default || m),
  page: () => import('./_nuxt/page.de1562e2.mjs').then((m) => m.default || m)
};
const node_modules__64nuxt_content_dist_runtime_plugins_documentDriven_mjs_9cX98v59ZY = defineNuxtPlugin((nuxt) => {
  var _a2, _b2;
  const { documentDriven: moduleOptions, clientDB } = (_b2 = (_a2 = useRuntimeConfig()) == null ? void 0 : _a2.public) == null ? void 0 : _b2.content;
  const findLayout = (to, page2, navigation, globals) => {
    var _a3;
    if (page2 && (page2 == null ? void 0 : page2.layout)) {
      return page2.layout;
    }
    if (to.matched.length && ((_a3 = to.matched[0].meta) == null ? void 0 : _a3.layout)) {
      return to.matched[0].meta.layout;
    }
    if (navigation && page2) {
      const { navKeyFromPath: navKeyFromPath2 } = useContentHelpers();
      const layoutFromNav = navKeyFromPath2(page2._path, "layout", navigation);
      if (layoutFromNav) {
        return layoutFromNav;
      }
    }
    if (moduleOptions.layoutFallbacks && globals) {
      let layoutFallback;
      for (const fallback of moduleOptions.layoutFallbacks) {
        if (globals[fallback] && globals[fallback].layout) {
          layoutFallback = globals[fallback].layout;
          break;
        }
      }
      if (layoutFallback) {
        return layoutFallback;
      }
    }
    return "default";
  };
  const refresh = async (to, force = false) => {
    const routeConfig = to.meta.documentDriven || {};
    if (to.meta.documentDriven === false) {
      return;
    }
    !force && nuxt.callHook("content:middleware:start");
    const { navigation, pages, globals, surrounds } = useContentState();
    const _path = withoutTrailingSlash(to.path);
    const promises = [];
    if (moduleOptions.navigation && routeConfig.navigation !== false) {
      const navigationQuery = () => {
        const { navigation: navigation2 } = useContentState();
        if (navigation2.value && !force) {
          return navigation2.value;
        }
        return fetchContentNavigation().then((_navigation) => {
          navigation2.value = _navigation;
          return _navigation;
        }).catch((_) => {
        });
      };
      promises.push(navigationQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.globals) {
      const globalsQuery = () => {
        const { globals: globals2 } = useContentState();
        if (typeof moduleOptions.globals === "object" && Array.isArray(moduleOptions.globals)) {
          console.log("Globals must be a list of keys with QueryBuilderParams as a value.");
          return;
        }
        return Promise.all(
          Object.entries(moduleOptions.globals).map(
            ([key, query]) => {
              if (!force && globals2.value[key]) {
                return globals2.value[key];
              }
              let type = "findOne";
              if (query == null ? void 0 : query.type) {
                type = query.type;
              }
              return queryContent(query)[type]().catch(() => {
              });
            }
          )
        ).then(
          (values) => {
            return values.reduce(
              (acc, value, index) => {
                const key = Object.keys(moduleOptions.globals)[index];
                acc[key] = value;
                return acc;
              },
              {}
            );
          }
        );
      };
      promises.push(globalsQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.page && routeConfig.page !== false) {
      let where = { _path };
      if (typeof routeConfig.page === "string") {
        where = { _path: routeConfig.page };
      }
      if (typeof routeConfig.page === "object") {
        where = routeConfig.page;
      }
      const pageQuery = () => {
        const { pages: pages2 } = useContentState();
        if (!force && pages2.value[_path] && pages2.value[_path]._path === _path) {
          return pages2.value[_path];
        }
        return queryContent().where(where).findOne().catch(() => {
        });
      };
      promises.push(pageQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.surround && routeConfig.surround !== false) {
      let surround = _path;
      if (["string", "object"].includes(typeof routeConfig.page)) {
        surround = routeConfig.page;
      }
      if (["string", "object"].includes(typeof routeConfig.surround)) {
        surround = routeConfig.surround;
      }
      const surroundQuery = () => {
        const { surrounds: surrounds2 } = useContentState();
        if (!force && surrounds2.value[_path]) {
          return surrounds2.value[_path];
        }
        return queryContent().where({
          _partial: { $not: true },
          navigation: { $not: false }
        }).without(["body"]).findSurround(surround).catch(() => {
        });
      };
      promises.push(surroundQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    return await Promise.all(promises.map((promise) => promise())).then(async ([
      _navigation,
      _globals,
      _page,
      _surround
    ]) => {
      var _a3, _b3, _c, _d;
      if (_navigation) {
        navigation.value = _navigation;
      }
      if (_globals) {
        globals.value = _globals;
      }
      if (_page == null ? void 0 : _page.redirect) {
        return _page == null ? void 0 : _page.redirect;
      }
      if ((_b3 = (_a3 = _page == null ? void 0 : _page._dir) == null ? void 0 : _a3.navigation) == null ? void 0 : _b3.redirect) {
        return (_d = (_c = _page == null ? void 0 : _page._dir) == null ? void 0 : _c.navigation) == null ? void 0 : _d.redirect;
      }
      if (_page) {
        const layoutName = findLayout(to, _page, _navigation, _globals);
        const layout = layouts[layoutName];
        if (layout && typeof layout === "function") {
          await layout();
        }
        to.meta.layout = layoutName;
        _page.layout = layoutName;
        pages.value[_path] = _page;
      }
      if (_surround) {
        surrounds.value[_path] = _surround;
      }
    });
  };
  addRouteMiddleware(async (to, from) => {
    if (to.path.includes("favicon.ico")) {
      return;
    }
    const redirect = await refresh(to, false);
    if (redirect) {
      if (hasProtocol(redirect)) {
        return callWithNuxt(nuxt, navigateTo, [redirect, { external: true }]);
      } else {
        return redirect;
      }
    }
  });
  {
    delete nuxt.payload.prerenderedAt;
  }
  nuxt.hook("app:data:refresh", async () => false);
});
const node_modules__64nuxt_content_dist_runtime_plugins_ws_mjs_JuoSZH52OQ = defineNuxtPlugin(() => {
  useRuntimeConfig().public;
});
const node_modules__64nuxthq_studio_dist_runtime_plugins_app_config_server_mjs_3EJd2il4WQ = defineNuxtPlugin(() => {
  const event = useRequestEvent();
  if (event.path === "/__app_config.json") {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.statusCode = 200;
    event.node.res.end(JSON.stringify(useAppConfig(), null, 2));
  }
});
const contentStorage = ref(null);
const node_modules__64nuxthq_studio_dist_runtime_plugins_preview_detector_mjs_wuXocrN5Sn = defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig().public.studio || {};
  const route = useRoute();
  const previewToken = useCookie("previewToken", { sameSite: "none", secure: true });
  async function initializePreview() {
    nuxtApp.hook("page:finish", () => {
      refreshNuxtData();
      nuxtApp.hook("content:storage", (storage) => {
        contentStorage.value = storage;
      });
    });
    const useStudio = await import('./_nuxt/useStudio.d0d08bd7.mjs').then((m) => m.useStudio);
    const { mountPreviewUI } = useStudio();
    mountPreviewUI(contentStorage);
  }
  if (runtimeConfig.apiURL) {
    if (Object.prototype.hasOwnProperty.call(route.query, "preview") && !route.query.preview) {
      return false;
    }
    if (!route.query.preview && !previewToken.value) {
      return false;
    }
    if (route.query.preview && previewToken.value !== route.query.preview) {
      previewToken.value = String(route.query.preview);
    }
    nuxtApp.hook("app:mounted", async () => {
      await initializePreview();
    });
  }
});
const theme = {
  "color": {
    "primary": {
      "50": {
        "value": "#e0f8ef",
        "variable": "var(--color-primary-50)",
        "original": "#e0f8ef"
      },
      "100": {
        "value": "#c5f3e2",
        "variable": "var(--color-primary-100)",
        "original": "#c5f3e2"
      },
      "200": {
        "value": "#a9edd4",
        "variable": "var(--color-primary-200)",
        "original": "#a9edd4"
      },
      "300": {
        "value": "#8ee7c6",
        "variable": "var(--color-primary-300)",
        "original": "#8ee7c6"
      },
      "400": {
        "value": "#73e1b8",
        "variable": "var(--color-primary-400)",
        "original": "#73e1b8"
      },
      "500": {
        "value": "#65deb1",
        "variable": "var(--color-primary-500)",
        "original": "#65deb1"
      },
      "600": {
        "value": "#4aa382",
        "variable": "var(--color-primary-600)",
        "original": "#4aa382"
      },
      "700": {
        "value": "#387b62",
        "variable": "var(--color-primary-700)",
        "original": "#387b62"
      },
      "800": {
        "value": "#265443",
        "variable": "var(--color-primary-800)",
        "original": "#265443"
      },
      "900": {
        "value": "#142c23",
        "variable": "var(--color-primary-900)",
        "original": "#142c23"
      }
    },
    "white": {
      "value": "#ffffff",
      "variable": "var(--color-white)",
      "original": "#ffffff"
    },
    "black": {
      "value": "#0c0c0d",
      "variable": "var(--color-black)",
      "original": "#0c0c0d"
    },
    "gray": {
      "50": {
        "value": "#fafafa",
        "variable": "var(--color-gray-50)",
        "original": "#fafafa"
      },
      "100": {
        "value": "#f4f4f5",
        "variable": "var(--color-gray-100)",
        "original": "#f4f4f5"
      },
      "200": {
        "value": "#e4e4e7",
        "variable": "var(--color-gray-200)",
        "original": "#e4e4e7"
      },
      "300": {
        "value": "#D4d4d8",
        "variable": "var(--color-gray-300)",
        "original": "#D4d4d8"
      },
      "400": {
        "value": "#a1a1aa",
        "variable": "var(--color-gray-400)",
        "original": "#a1a1aa"
      },
      "500": {
        "value": "#71717A",
        "variable": "var(--color-gray-500)",
        "original": "#71717A"
      },
      "600": {
        "value": "#52525B",
        "variable": "var(--color-gray-600)",
        "original": "#52525B"
      },
      "700": {
        "value": "#3f3f46",
        "variable": "var(--color-gray-700)",
        "original": "#3f3f46"
      },
      "800": {
        "value": "#27272A",
        "variable": "var(--color-gray-800)",
        "original": "#27272A"
      },
      "900": {
        "value": "#18181B",
        "variable": "var(--color-gray-900)",
        "original": "#18181B"
      }
    },
    "green": {
      "50": {
        "value": "#d6ffee",
        "variable": "var(--color-green-50)",
        "original": "#d6ffee"
      },
      "100": {
        "value": "#acffdd",
        "variable": "var(--color-green-100)",
        "original": "#acffdd"
      },
      "200": {
        "value": "#83ffcc",
        "variable": "var(--color-green-200)",
        "original": "#83ffcc"
      },
      "300": {
        "value": "#30ffaa",
        "variable": "var(--color-green-300)",
        "original": "#30ffaa"
      },
      "400": {
        "value": "#00dc82",
        "variable": "var(--color-green-400)",
        "original": "#00dc82"
      },
      "500": {
        "value": "#00bd6f",
        "variable": "var(--color-green-500)",
        "original": "#00bd6f"
      },
      "600": {
        "value": "#009d5d",
        "variable": "var(--color-green-600)",
        "original": "#009d5d"
      },
      "700": {
        "value": "#007e4a",
        "variable": "var(--color-green-700)",
        "original": "#007e4a"
      },
      "800": {
        "value": "#005e38",
        "variable": "var(--color-green-800)",
        "original": "#005e38"
      },
      "900": {
        "value": "#003f25",
        "variable": "var(--color-green-900)",
        "original": "#003f25"
      }
    },
    "yellow": {
      "50": {
        "value": "#fdf6db",
        "variable": "var(--color-yellow-50)",
        "original": "#fdf6db"
      },
      "100": {
        "value": "#fcedb7",
        "variable": "var(--color-yellow-100)",
        "original": "#fcedb7"
      },
      "200": {
        "value": "#fae393",
        "variable": "var(--color-yellow-200)",
        "original": "#fae393"
      },
      "300": {
        "value": "#f8da70",
        "variable": "var(--color-yellow-300)",
        "original": "#f8da70"
      },
      "400": {
        "value": "#f7d14c",
        "variable": "var(--color-yellow-400)",
        "original": "#f7d14c"
      },
      "500": {
        "value": "#f5c828",
        "variable": "var(--color-yellow-500)",
        "original": "#f5c828"
      },
      "600": {
        "value": "#daac0a",
        "variable": "var(--color-yellow-600)",
        "original": "#daac0a"
      },
      "700": {
        "value": "#a38108",
        "variable": "var(--color-yellow-700)",
        "original": "#a38108"
      },
      "800": {
        "value": "#6d5605",
        "variable": "var(--color-yellow-800)",
        "original": "#6d5605"
      },
      "900": {
        "value": "#362b03",
        "variable": "var(--color-yellow-900)",
        "original": "#362b03"
      }
    },
    "orange": {
      "50": {
        "value": "#ffe9d9",
        "variable": "var(--color-orange-50)",
        "original": "#ffe9d9"
      },
      "100": {
        "value": "#ffd3b3",
        "variable": "var(--color-orange-100)",
        "original": "#ffd3b3"
      },
      "200": {
        "value": "#ffbd8d",
        "variable": "var(--color-orange-200)",
        "original": "#ffbd8d"
      },
      "300": {
        "value": "#ffa666",
        "variable": "var(--color-orange-300)",
        "original": "#ffa666"
      },
      "400": {
        "value": "#ff9040",
        "variable": "var(--color-orange-400)",
        "original": "#ff9040"
      },
      "500": {
        "value": "#ff7a1a",
        "variable": "var(--color-orange-500)",
        "original": "#ff7a1a"
      },
      "600": {
        "value": "#e15e00",
        "variable": "var(--color-orange-600)",
        "original": "#e15e00"
      },
      "700": {
        "value": "#a94700",
        "variable": "var(--color-orange-700)",
        "original": "#a94700"
      },
      "800": {
        "value": "#702f00",
        "variable": "var(--color-orange-800)",
        "original": "#702f00"
      },
      "900": {
        "value": "#381800",
        "variable": "var(--color-orange-900)",
        "original": "#381800"
      }
    },
    "red": {
      "50": {
        "value": "#ffdbd9",
        "variable": "var(--color-red-50)",
        "original": "#ffdbd9"
      },
      "100": {
        "value": "#ffb7b3",
        "variable": "var(--color-red-100)",
        "original": "#ffb7b3"
      },
      "200": {
        "value": "#ff948d",
        "variable": "var(--color-red-200)",
        "original": "#ff948d"
      },
      "300": {
        "value": "#ff7066",
        "variable": "var(--color-red-300)",
        "original": "#ff7066"
      },
      "400": {
        "value": "#ff4c40",
        "variable": "var(--color-red-400)",
        "original": "#ff4c40"
      },
      "500": {
        "value": "#ff281a",
        "variable": "var(--color-red-500)",
        "original": "#ff281a"
      },
      "600": {
        "value": "#e10e00",
        "variable": "var(--color-red-600)",
        "original": "#e10e00"
      },
      "700": {
        "value": "#a90a00",
        "variable": "var(--color-red-700)",
        "original": "#a90a00"
      },
      "800": {
        "value": "#700700",
        "variable": "var(--color-red-800)",
        "original": "#700700"
      },
      "900": {
        "value": "#380300",
        "variable": "var(--color-red-900)",
        "original": "#380300"
      }
    },
    "pear": {
      "50": {
        "value": "#f7f8dc",
        "variable": "var(--color-pear-50)",
        "original": "#f7f8dc"
      },
      "100": {
        "value": "#eff0ba",
        "variable": "var(--color-pear-100)",
        "original": "#eff0ba"
      },
      "200": {
        "value": "#e8e997",
        "variable": "var(--color-pear-200)",
        "original": "#e8e997"
      },
      "300": {
        "value": "#e0e274",
        "variable": "var(--color-pear-300)",
        "original": "#e0e274"
      },
      "400": {
        "value": "#d8da52",
        "variable": "var(--color-pear-400)",
        "original": "#d8da52"
      },
      "500": {
        "value": "#d0d32f",
        "variable": "var(--color-pear-500)",
        "original": "#d0d32f"
      },
      "600": {
        "value": "#a8aa24",
        "variable": "var(--color-pear-600)",
        "original": "#a8aa24"
      },
      "700": {
        "value": "#7e801b",
        "variable": "var(--color-pear-700)",
        "original": "#7e801b"
      },
      "800": {
        "value": "#545512",
        "variable": "var(--color-pear-800)",
        "original": "#545512"
      },
      "900": {
        "value": "#2a2b09",
        "variable": "var(--color-pear-900)",
        "original": "#2a2b09"
      }
    },
    "teal": {
      "50": {
        "value": "#d7faf8",
        "variable": "var(--color-teal-50)",
        "original": "#d7faf8"
      },
      "100": {
        "value": "#aff4f0",
        "variable": "var(--color-teal-100)",
        "original": "#aff4f0"
      },
      "200": {
        "value": "#87efe9",
        "variable": "var(--color-teal-200)",
        "original": "#87efe9"
      },
      "300": {
        "value": "#5fe9e1",
        "variable": "var(--color-teal-300)",
        "original": "#5fe9e1"
      },
      "400": {
        "value": "#36e4da",
        "variable": "var(--color-teal-400)",
        "original": "#36e4da"
      },
      "500": {
        "value": "#1cd1c6",
        "variable": "var(--color-teal-500)",
        "original": "#1cd1c6"
      },
      "600": {
        "value": "#16a79e",
        "variable": "var(--color-teal-600)",
        "original": "#16a79e"
      },
      "700": {
        "value": "#117d77",
        "variable": "var(--color-teal-700)",
        "original": "#117d77"
      },
      "800": {
        "value": "#0b544f",
        "variable": "var(--color-teal-800)",
        "original": "#0b544f"
      },
      "900": {
        "value": "#062a28",
        "variable": "var(--color-teal-900)",
        "original": "#062a28"
      }
    },
    "lightblue": {
      "50": {
        "value": "#d9f8ff",
        "variable": "var(--color-lightblue-50)",
        "original": "#d9f8ff"
      },
      "100": {
        "value": "#b3f1ff",
        "variable": "var(--color-lightblue-100)",
        "original": "#b3f1ff"
      },
      "200": {
        "value": "#8deaff",
        "variable": "var(--color-lightblue-200)",
        "original": "#8deaff"
      },
      "300": {
        "value": "#66e4ff",
        "variable": "var(--color-lightblue-300)",
        "original": "#66e4ff"
      },
      "400": {
        "value": "#40ddff",
        "variable": "var(--color-lightblue-400)",
        "original": "#40ddff"
      },
      "500": {
        "value": "#1ad6ff",
        "variable": "var(--color-lightblue-500)",
        "original": "#1ad6ff"
      },
      "600": {
        "value": "#00b9e1",
        "variable": "var(--color-lightblue-600)",
        "original": "#00b9e1"
      },
      "700": {
        "value": "#008aa9",
        "variable": "var(--color-lightblue-700)",
        "original": "#008aa9"
      },
      "800": {
        "value": "#005c70",
        "variable": "var(--color-lightblue-800)",
        "original": "#005c70"
      },
      "900": {
        "value": "#002e38",
        "variable": "var(--color-lightblue-900)",
        "original": "#002e38"
      }
    },
    "blue": {
      "50": {
        "value": "#d9f1ff",
        "variable": "var(--color-blue-50)",
        "original": "#d9f1ff"
      },
      "100": {
        "value": "#b3e4ff",
        "variable": "var(--color-blue-100)",
        "original": "#b3e4ff"
      },
      "200": {
        "value": "#8dd6ff",
        "variable": "var(--color-blue-200)",
        "original": "#8dd6ff"
      },
      "300": {
        "value": "#66c8ff",
        "variable": "var(--color-blue-300)",
        "original": "#66c8ff"
      },
      "400": {
        "value": "#40bbff",
        "variable": "var(--color-blue-400)",
        "original": "#40bbff"
      },
      "500": {
        "value": "#1aadff",
        "variable": "var(--color-blue-500)",
        "original": "#1aadff"
      },
      "600": {
        "value": "#0090e1",
        "variable": "var(--color-blue-600)",
        "original": "#0090e1"
      },
      "700": {
        "value": "#006ca9",
        "variable": "var(--color-blue-700)",
        "original": "#006ca9"
      },
      "800": {
        "value": "#004870",
        "variable": "var(--color-blue-800)",
        "original": "#004870"
      },
      "900": {
        "value": "#002438",
        "variable": "var(--color-blue-900)",
        "original": "#002438"
      }
    },
    "indigoblue": {
      "50": {
        "value": "#d9e5ff",
        "variable": "var(--color-indigoblue-50)",
        "original": "#d9e5ff"
      },
      "100": {
        "value": "#b3cbff",
        "variable": "var(--color-indigoblue-100)",
        "original": "#b3cbff"
      },
      "200": {
        "value": "#8db0ff",
        "variable": "var(--color-indigoblue-200)",
        "original": "#8db0ff"
      },
      "300": {
        "value": "#6696ff",
        "variable": "var(--color-indigoblue-300)",
        "original": "#6696ff"
      },
      "400": {
        "value": "#407cff",
        "variable": "var(--color-indigoblue-400)",
        "original": "#407cff"
      },
      "500": {
        "value": "#1a62ff",
        "variable": "var(--color-indigoblue-500)",
        "original": "#1a62ff"
      },
      "600": {
        "value": "#0047e1",
        "variable": "var(--color-indigoblue-600)",
        "original": "#0047e1"
      },
      "700": {
        "value": "#0035a9",
        "variable": "var(--color-indigoblue-700)",
        "original": "#0035a9"
      },
      "800": {
        "value": "#002370",
        "variable": "var(--color-indigoblue-800)",
        "original": "#002370"
      },
      "900": {
        "value": "#001238",
        "variable": "var(--color-indigoblue-900)",
        "original": "#001238"
      }
    },
    "royalblue": {
      "50": {
        "value": "#dfdbfb",
        "variable": "var(--color-royalblue-50)",
        "original": "#dfdbfb"
      },
      "100": {
        "value": "#c0b7f7",
        "variable": "var(--color-royalblue-100)",
        "original": "#c0b7f7"
      },
      "200": {
        "value": "#a093f3",
        "variable": "var(--color-royalblue-200)",
        "original": "#a093f3"
      },
      "300": {
        "value": "#806ff0",
        "variable": "var(--color-royalblue-300)",
        "original": "#806ff0"
      },
      "400": {
        "value": "#614bec",
        "variable": "var(--color-royalblue-400)",
        "original": "#614bec"
      },
      "500": {
        "value": "#4127e8",
        "variable": "var(--color-royalblue-500)",
        "original": "#4127e8"
      },
      "600": {
        "value": "#2c15c4",
        "variable": "var(--color-royalblue-600)",
        "original": "#2c15c4"
      },
      "700": {
        "value": "#211093",
        "variable": "var(--color-royalblue-700)",
        "original": "#211093"
      },
      "800": {
        "value": "#160a62",
        "variable": "var(--color-royalblue-800)",
        "original": "#160a62"
      },
      "900": {
        "value": "#0b0531",
        "variable": "var(--color-royalblue-900)",
        "original": "#0b0531"
      }
    },
    "purple": {
      "50": {
        "value": "#ead9ff",
        "variable": "var(--color-purple-50)",
        "original": "#ead9ff"
      },
      "100": {
        "value": "#d5b3ff",
        "variable": "var(--color-purple-100)",
        "original": "#d5b3ff"
      },
      "200": {
        "value": "#c08dff",
        "variable": "var(--color-purple-200)",
        "original": "#c08dff"
      },
      "300": {
        "value": "#ab66ff",
        "variable": "var(--color-purple-300)",
        "original": "#ab66ff"
      },
      "400": {
        "value": "#9640ff",
        "variable": "var(--color-purple-400)",
        "original": "#9640ff"
      },
      "500": {
        "value": "#811aff",
        "variable": "var(--color-purple-500)",
        "original": "#811aff"
      },
      "600": {
        "value": "#6500e1",
        "variable": "var(--color-purple-600)",
        "original": "#6500e1"
      },
      "700": {
        "value": "#4c00a9",
        "variable": "var(--color-purple-700)",
        "original": "#4c00a9"
      },
      "800": {
        "value": "#330070",
        "variable": "var(--color-purple-800)",
        "original": "#330070"
      },
      "900": {
        "value": "#190038",
        "variable": "var(--color-purple-900)",
        "original": "#190038"
      }
    },
    "pink": {
      "50": {
        "value": "#ffd9f2",
        "variable": "var(--color-pink-50)",
        "original": "#ffd9f2"
      },
      "100": {
        "value": "#ffb3e5",
        "variable": "var(--color-pink-100)",
        "original": "#ffb3e5"
      },
      "200": {
        "value": "#ff8dd8",
        "variable": "var(--color-pink-200)",
        "original": "#ff8dd8"
      },
      "300": {
        "value": "#ff66cc",
        "variable": "var(--color-pink-300)",
        "original": "#ff66cc"
      },
      "400": {
        "value": "#ff40bf",
        "variable": "var(--color-pink-400)",
        "original": "#ff40bf"
      },
      "500": {
        "value": "#ff1ab2",
        "variable": "var(--color-pink-500)",
        "original": "#ff1ab2"
      },
      "600": {
        "value": "#e10095",
        "variable": "var(--color-pink-600)",
        "original": "#e10095"
      },
      "700": {
        "value": "#a90070",
        "variable": "var(--color-pink-700)",
        "original": "#a90070"
      },
      "800": {
        "value": "#70004b",
        "variable": "var(--color-pink-800)",
        "original": "#70004b"
      },
      "900": {
        "value": "#380025",
        "variable": "var(--color-pink-900)",
        "original": "#380025"
      }
    },
    "ruby": {
      "50": {
        "value": "#ffd9e4",
        "variable": "var(--color-ruby-50)",
        "original": "#ffd9e4"
      },
      "100": {
        "value": "#ffb3c9",
        "variable": "var(--color-ruby-100)",
        "original": "#ffb3c9"
      },
      "200": {
        "value": "#ff8dae",
        "variable": "var(--color-ruby-200)",
        "original": "#ff8dae"
      },
      "300": {
        "value": "#ff6694",
        "variable": "var(--color-ruby-300)",
        "original": "#ff6694"
      },
      "400": {
        "value": "#ff4079",
        "variable": "var(--color-ruby-400)",
        "original": "#ff4079"
      },
      "500": {
        "value": "#ff1a5e",
        "variable": "var(--color-ruby-500)",
        "original": "#ff1a5e"
      },
      "600": {
        "value": "#e10043",
        "variable": "var(--color-ruby-600)",
        "original": "#e10043"
      },
      "700": {
        "value": "#a90032",
        "variable": "var(--color-ruby-700)",
        "original": "#a90032"
      },
      "800": {
        "value": "#700021",
        "variable": "var(--color-ruby-800)",
        "original": "#700021"
      },
      "900": {
        "value": "#380011",
        "variable": "var(--color-ruby-900)",
        "original": "#380011"
      }
    }
  },
  "container": {
    "maxWidth": {
      "value": "80rem",
      "variable": "var(--container-max-width)",
      "original": "80rem"
    },
    "padding": {
      "mobile": {
        "value": "1rem",
        "variable": "var(--container-padding-mobile)",
        "original": "{space.4}"
      },
      "sm": {
        "value": "1.5rem",
        "variable": "var(--container-padding-sm)",
        "original": "{space.6}"
      }
    }
  },
  "backdrop": {
    "filter": {
      "value": "saturate(200%) blur(20px)",
      "variable": "var(--backdrop-filter)",
      "original": "saturate(200%) blur(20px)"
    },
    "background": {
      "value": "#fffc",
      "variable": "var(--backdrop-background)",
      "original": {
        "initial": "#fffc",
        "dark": "#0c0d0ccc"
      }
    }
  },
  "text": {
    "color": {
      "primary": {
        "value": "#18181B",
        "variable": "var(--text-color-primary)",
        "original": {
          "initial": "{color.gray.900}",
          "dark": "{color.gray.50}"
        }
      },
      "secondary": {
        "value": "#71717A",
        "variable": "var(--text-color-secondary)",
        "original": {
          "initial": "{color.gray.500}",
          "dark": "{color.gray.400}"
        }
      },
      "secondaryHover": {
        "value": "#3f3f46",
        "variable": "var(--text-color-secondary-hover)",
        "original": {
          "initial": "{color.gray.700}",
          "dark": "{color.gray.200}"
        }
      }
    },
    "xs": {
      "fontSize": {
        "value": "0.75rem",
        "variable": "var(--text-xs-font-size)",
        "original": "{fontSize.xs}"
      },
      "lineHeight": {
        "value": "1rem",
        "variable": "var(--text-xs-line-height)",
        "original": "{lead.4}"
      }
    },
    "sm": {
      "fontSize": {
        "value": "0.875rem",
        "variable": "var(--text-sm-font-size)",
        "original": "{fontSize.sm}"
      },
      "lineHeight": {
        "value": "1.25rem",
        "variable": "var(--text-sm-line-height)",
        "original": "{lead.5}"
      }
    },
    "base": {
      "fontSize": {
        "value": "1rem",
        "variable": "var(--text-base-font-size)",
        "original": "{fontSize.base}"
      },
      "lineHeight": {
        "value": "1.5rem",
        "variable": "var(--text-base-line-height)",
        "original": "{lead.6}"
      }
    },
    "lg": {
      "fontSize": {
        "value": "1.125rem",
        "variable": "var(--text-lg-font-size)",
        "original": "{fontSize.lg}"
      },
      "lineHeight": {
        "value": "1.75rem",
        "variable": "var(--text-lg-line-height)",
        "original": "{lead.7}"
      }
    },
    "2xl": {
      "fontSize": {
        "value": "1.5rem",
        "variable": "var(--text-2xl-font-size)",
        "original": "{fontSize.2xl}"
      },
      "lineHeight": {
        "value": "2rem",
        "variable": "var(--text-2xl-line-height)",
        "original": "{lead.8}"
      }
    },
    "3xl": {
      "fontSize": {
        "value": "1.875rem",
        "variable": "var(--text-3xl-font-size)",
        "original": "{fontSize.3xl}"
      },
      "lineHeight": {
        "value": "2.25rem",
        "variable": "var(--text-3xl-line-height)",
        "original": "{lead.9}"
      }
    },
    "4xl": {
      "fontSize": {
        "value": "2.25rem",
        "variable": "var(--text-4xl-font-size)",
        "original": "{fontSize.4xl}"
      },
      "lineHeight": {
        "value": "2.5rem",
        "variable": "var(--text-4xl-line-height)",
        "original": "{lead.10}"
      }
    },
    "5xl": {
      "fontSize": {
        "value": "3rem",
        "variable": "var(--text-5xl-font-size)",
        "original": "{fontSize.5xl}"
      },
      "lineHeight": {
        "value": "1",
        "variable": "var(--text-5xl-line-height)",
        "original": "{lead.none}"
      }
    },
    "6xl": {
      "fontSize": {
        "value": "3.75rem",
        "variable": "var(--text-6xl-font-size)",
        "original": "{fontSize.6xl}"
      },
      "lineHeight": {
        "value": "1",
        "variable": "var(--text-6xl-line-height)",
        "original": "{lead.none}"
      }
    }
  },
  "borders": {
    "primary": {
      "default": {
        "value": "#f4f4f5",
        "variable": "var(--borders-primary-default)",
        "original": {
          "initial": "{color.gray.100}",
          "dark": "{color.gray.800}"
        }
      },
      "hover": {
        "value": "#e4e4e7",
        "variable": "var(--borders-primary-hover)",
        "original": {
          "initial": "{color.gray.200}",
          "dark": "{color.gray.700}"
        }
      }
    },
    "secondary": {
      "default": {
        "value": "#e4e4e7",
        "variable": "var(--borders-secondary-default)",
        "original": {
          "initial": "{color.gray.200}",
          "dark": "{color.gray.700}"
        }
      },
      "hover": {
        "original": {
          "value": {
            "initial": "",
            "dark": ""
          }
        },
        "attributes": {},
        "path": {}
      }
    }
  },
  "surfaces": {
    "background": {
      "base": {
        "value": "#f4f4f5",
        "variable": "var(--surfaces-background-base)",
        "original": {
          "initial": "{color.gray.100}",
          "dark": "{color.gray.900}"
        }
      }
    }
  },
  "states": {
    "primary": {
      "color": {
        "primary": {
          "value": "#4aa382",
          "variable": "var(--states-primary-color-primary)",
          "original": {
            "initial": "{color.primary.600}",
            "dark": "{color.primary.400}"
          }
        },
        "secondary": {
          "value": "#387b62",
          "variable": "var(--states-primary-color-secondary)",
          "original": {
            "initial": "{color.primary.700}",
            "dark": "{color.primary.200}"
          }
        }
      },
      "backgroundColor": {
        "primary": {
          "value": "#e0f8ef",
          "variable": "var(--states-primary-background-color-primary)",
          "original": {
            "initial": "{color.primary.50}",
            "dark": "{color.primary.900}"
          }
        },
        "secondary": {
          "value": "#c5f3e2",
          "variable": "var(--states-primary-background-color-secondary)",
          "original": {
            "initial": "{color.primary.100}",
            "dark": "{color.primary.800}"
          }
        }
      },
      "borderColor": {
        "primary": {
          "value": "#c5f3e2",
          "variable": "var(--states-primary-border-color-primary)",
          "original": {
            "initial": "{color.primary.100}",
            "dark": "{color.primary.800}"
          }
        },
        "secondary": {}
      }
    },
    "info": {
      "color": {
        "primary": {
          "value": "#1aadff",
          "variable": "var(--states-info-color-primary)",
          "original": {
            "initial": "{color.blue.500}",
            "dark": "{color.blue.400}"
          }
        },
        "secondary": {
          "value": "#0090e1",
          "variable": "var(--states-info-color-secondary)",
          "original": {
            "initial": "{color.blue.600}",
            "dark": "{color.blue.200}"
          }
        }
      },
      "backgroundColor": {
        "primary": {
          "value": "#d9f1ff",
          "variable": "var(--states-info-background-color-primary)",
          "original": {
            "initial": "{color.blue.50}",
            "dark": "{color.blue.900}"
          }
        },
        "secondary": {
          "value": "#b3e4ff",
          "variable": "var(--states-info-background-color-secondary)",
          "original": {
            "initial": "{color.blue.100}",
            "dark": "{color.blue.800}"
          }
        }
      },
      "borderColor": {
        "primary": {
          "value": "#b3e4ff",
          "variable": "var(--states-info-border-color-primary)",
          "original": {
            "initial": "{color.blue.100}",
            "dark": "{color.blue.800}"
          }
        },
        "secondary": {}
      }
    },
    "success": {
      "color": {
        "primary": {
          "value": "#00bd6f",
          "variable": "var(--states-success-color-primary)",
          "original": {
            "initial": "{color.green.500}",
            "dark": "{color.green.400}"
          }
        },
        "secondary": {
          "value": "#009d5d",
          "variable": "var(--states-success-color-secondary)",
          "original": {
            "initial": "{color.green.600}",
            "dark": "{color.green.200}"
          }
        }
      },
      "backgroundColor": {
        "primary": {
          "value": "#d6ffee",
          "variable": "var(--states-success-background-color-primary)",
          "original": {
            "initial": "{color.green.50}",
            "dark": "{color.green.900}"
          }
        },
        "secondary": {
          "value": "#acffdd",
          "variable": "var(--states-success-background-color-secondary)",
          "original": {
            "initial": "{color.green.100}",
            "dark": "{color.green.800}"
          }
        }
      },
      "borderColor": {
        "primary": {
          "value": "#acffdd",
          "variable": "var(--states-success-border-color-primary)",
          "original": {
            "initial": "{color.green.100}",
            "dark": "{color.green.800}"
          }
        },
        "secondary": {}
      }
    },
    "warning": {
      "color": {
        "primary": {
          "value": "#daac0a",
          "variable": "var(--states-warning-color-primary)",
          "original": {
            "initial": "{color.yellow.600}",
            "dark": "{color.yellow.400}"
          }
        },
        "secondary": {
          "value": "#a38108",
          "variable": "var(--states-warning-color-secondary)",
          "original": {
            "initial": "{color.yellow.700}",
            "dark": "{color.yellow.200}"
          }
        }
      },
      "backgroundColor": {
        "primary": {
          "value": "#fdf6db",
          "variable": "var(--states-warning-background-color-primary)",
          "original": {
            "initial": "{color.yellow.50}",
            "dark": "{color.yellow.900}"
          }
        },
        "secondary": {
          "value": "#fcedb7",
          "variable": "var(--states-warning-background-color-secondary)",
          "original": {
            "initial": "{color.yellow.100}",
            "dark": "{color.yellow.800}"
          }
        }
      },
      "borderColor": {
        "primary": {
          "value": "#fcedb7",
          "variable": "var(--states-warning-border-color-primary)",
          "original": {
            "initial": "{color.yellow.100}",
            "dark": "{color.yellow.800}"
          }
        },
        "secondary": {}
      }
    },
    "danger": {
      "color": {
        "primary": {
          "value": "#ff281a",
          "variable": "var(--states-danger-color-primary)",
          "original": {
            "initial": "{color.red.500}",
            "dark": "{color.red.300}"
          }
        },
        "secondary": {
          "value": "#e10e00",
          "variable": "var(--states-danger-color-secondary)",
          "original": {
            "initial": "{color.red.600}",
            "dark": "{color.red.200}"
          }
        }
      },
      "backgroundColor": {
        "primary": {
          "value": "#ffdbd9",
          "variable": "var(--states-danger-background-color-primary)",
          "original": {
            "initial": "{color.red.50}",
            "dark": "{color.red.900}"
          }
        },
        "secondary": {
          "value": "#ffb7b3",
          "variable": "var(--states-danger-background-color-secondary)",
          "original": {
            "initial": "{color.red.100}",
            "dark": "{color.red.800}"
          }
        }
      },
      "borderColor": {
        "primary": {
          "value": "#ffb7b3",
          "variable": "var(--states-danger-border-color-primary)",
          "original": {
            "initial": "{color.red.100}",
            "dark": "{color.red.800}"
          }
        },
        "secondary": {}
      }
    }
  },
  "typography": {
    "verticalMargin": {
      "sm": {
        "value": "16px",
        "variable": "var(--typography-vertical-margin-sm)",
        "original": "16px"
      },
      "base": {
        "value": "32px",
        "variable": "var(--typography-vertical-margin-base)",
        "original": "32px"
      }
    },
    "letterSpacing": {
      "tight": {
        "value": "-0.025em",
        "variable": "var(--typography-letter-spacing-tight)",
        "original": "-0.025em"
      },
      "wide": {
        "value": "0.025em",
        "variable": "var(--typography-letter-spacing-wide)",
        "original": "0.025em"
      }
    },
    "fontSize": {
      "xs": {
        "value": "12px",
        "variable": "var(--typography-font-size-xs)",
        "original": "12px"
      },
      "sm": {
        "value": "14px",
        "variable": "var(--typography-font-size-sm)",
        "original": "14px"
      },
      "base": {
        "value": "16px",
        "variable": "var(--typography-font-size-base)",
        "original": "16px"
      },
      "lg": {
        "value": "18px",
        "variable": "var(--typography-font-size-lg)",
        "original": "18px"
      },
      "xl": {
        "value": "20px",
        "variable": "var(--typography-font-size-xl)",
        "original": "20px"
      },
      "2xl": {
        "value": "24px",
        "variable": "var(--typography-font-size-2xl)",
        "original": "24px"
      },
      "3xl": {
        "value": "30px",
        "variable": "var(--typography-font-size-3xl)",
        "original": "30px"
      },
      "4xl": {
        "value": "36px",
        "variable": "var(--typography-font-size-4xl)",
        "original": "36px"
      },
      "5xl": {
        "value": "48px",
        "variable": "var(--typography-font-size-5xl)",
        "original": "48px"
      },
      "6xl": {
        "value": "60px",
        "variable": "var(--typography-font-size-6xl)",
        "original": "60px"
      },
      "7xl": {
        "value": "72px",
        "variable": "var(--typography-font-size-7xl)",
        "original": "72px"
      },
      "8xl": {
        "value": "96px",
        "variable": "var(--typography-font-size-8xl)",
        "original": "96px"
      },
      "9xl": {
        "value": "128px",
        "variable": "var(--typography-font-size-9xl)",
        "original": "128px"
      }
    },
    "fontWeight": {
      "thin": {
        "value": "100",
        "variable": "var(--typography-font-weight-thin)",
        "original": "100"
      },
      "extralight": {
        "value": "200",
        "variable": "var(--typography-font-weight-extralight)",
        "original": "200"
      },
      "light": {
        "value": "300",
        "variable": "var(--typography-font-weight-light)",
        "original": "300"
      },
      "normal": {
        "value": "400",
        "variable": "var(--typography-font-weight-normal)",
        "original": "400"
      },
      "medium": {
        "value": "500",
        "variable": "var(--typography-font-weight-medium)",
        "original": "500"
      },
      "semibold": {
        "value": "600",
        "variable": "var(--typography-font-weight-semibold)",
        "original": "600"
      },
      "bold": {
        "value": "700",
        "variable": "var(--typography-font-weight-bold)",
        "original": "700"
      },
      "extrabold": {
        "value": "800",
        "variable": "var(--typography-font-weight-extrabold)",
        "original": "800"
      },
      "black": {
        "value": "900",
        "variable": "var(--typography-font-weight-black)",
        "original": "900"
      }
    },
    "lead": {
      "none": {
        "value": "1",
        "variable": "var(--typography-lead-none)",
        "original": "1"
      },
      "tight": {
        "value": "1.25",
        "variable": "var(--typography-lead-tight)",
        "original": "1.25"
      },
      "snug": {
        "value": "1.375",
        "variable": "var(--typography-lead-snug)",
        "original": "1.375"
      },
      "normal": {
        "value": "1.5",
        "variable": "var(--typography-lead-normal)",
        "original": "1.5"
      },
      "relaxed": {
        "value": "1.625",
        "variable": "var(--typography-lead-relaxed)",
        "original": "1.625"
      },
      "loose": {
        "value": "2",
        "variable": "var(--typography-lead-loose)",
        "original": "2"
      }
    },
    "color": {
      "primary": {
        "50": {
          "value": "#e0f8ef",
          "variable": "var(--typography-color-primary-50)",
          "original": "{color.primary.50}"
        },
        "100": {
          "value": "#c5f3e2",
          "variable": "var(--typography-color-primary-100)",
          "original": "{color.primary.100}"
        },
        "200": {
          "value": "#a9edd4",
          "variable": "var(--typography-color-primary-200)",
          "original": "{color.primary.200}"
        },
        "300": {
          "value": "#8ee7c6",
          "variable": "var(--typography-color-primary-300)",
          "original": "{color.primary.300}"
        },
        "400": {
          "value": "#73e1b8",
          "variable": "var(--typography-color-primary-400)",
          "original": "{color.primary.400}"
        },
        "500": {
          "value": "#65deb1",
          "variable": "var(--typography-color-primary-500)",
          "original": "{color.primary.500}"
        },
        "600": {
          "value": "#4aa382",
          "variable": "var(--typography-color-primary-600)",
          "original": "{color.primary.600}"
        },
        "700": {
          "value": "#387b62",
          "variable": "var(--typography-color-primary-700)",
          "original": "{color.primary.700}"
        },
        "800": {
          "value": "#265443",
          "variable": "var(--typography-color-primary-800)",
          "original": "{color.primary.800}"
        },
        "900": {
          "value": "#142c23",
          "variable": "var(--typography-color-primary-900)",
          "original": "{color.primary.900}"
        }
      },
      "secondary": {
        "50": {
          "value": "#fafafa",
          "variable": "var(--typography-color-secondary-50)",
          "original": "{color.gray.50}"
        },
        "100": {
          "value": "#f4f4f5",
          "variable": "var(--typography-color-secondary-100)",
          "original": "{color.gray.100}"
        },
        "200": {
          "value": "#e4e4e7",
          "variable": "var(--typography-color-secondary-200)",
          "original": "{color.gray.200}"
        },
        "300": {
          "value": "#D4d4d8",
          "variable": "var(--typography-color-secondary-300)",
          "original": "{color.gray.300}"
        },
        "400": {
          "value": "#a1a1aa",
          "variable": "var(--typography-color-secondary-400)",
          "original": "{color.gray.400}"
        },
        "500": {
          "value": "#71717A",
          "variable": "var(--typography-color-secondary-500)",
          "original": "{color.gray.500}"
        },
        "600": {
          "value": "#52525B",
          "variable": "var(--typography-color-secondary-600)",
          "original": "{color.gray.600}"
        },
        "700": {
          "value": "#3f3f46",
          "variable": "var(--typography-color-secondary-700)",
          "original": "{color.gray.700}"
        },
        "800": {
          "value": "#27272A",
          "variable": "var(--typography-color-secondary-800)",
          "original": "{color.gray.800}"
        },
        "900": {
          "value": "#18181B",
          "variable": "var(--typography-color-secondary-900)",
          "original": "{color.gray.900}"
        }
      }
    }
  },
  "prose": {
    "p": {
      "fontSize": {
        "value": "16px",
        "variable": "var(--prose-p-font-size)",
        "original": "{typography.fontSize.base}"
      },
      "lineHeight": {
        "value": "1.5",
        "variable": "var(--prose-p-line-height)",
        "original": "{typography.lead.normal}"
      },
      "margin": {
        "value": "32px 0",
        "variable": "var(--prose-p-margin)",
        "original": "{typography.verticalMargin.base} 0"
      },
      "br": {
        "margin": {
          "value": "32px 0 0 0",
          "variable": "var(--prose-p-br-margin)",
          "original": "{typography.verticalMargin.base} 0 0 0"
        }
      }
    },
    "h1": {
      "margin": {
        "value": "0 0 2rem",
        "variable": "var(--prose-h1-margin)",
        "original": "0 0 2rem"
      },
      "fontSize": {
        "value": "48px",
        "variable": "var(--prose-h1-font-size)",
        "original": "{typography.fontSize.5xl}"
      },
      "lineHeight": {
        "value": "1.25",
        "variable": "var(--prose-h1-line-height)",
        "original": "{typography.lead.tight}"
      },
      "fontWeight": {
        "value": "700",
        "variable": "var(--prose-h1-font-weight)",
        "original": "{typography.fontWeight.bold}"
      },
      "letterSpacing": {
        "value": "-0.025em",
        "variable": "var(--prose-h1-letter-spacing)",
        "original": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "30px",
        "variable": "var(--prose-h1-icon-size)",
        "original": "{typography.fontSize.3xl}"
      }
    },
    "h2": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h2-margin)",
        "original": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "36px",
        "variable": "var(--prose-h2-font-size)",
        "original": "{typography.fontSize.4xl}"
      },
      "lineHeight": {
        "value": "1.25",
        "variable": "var(--prose-h2-line-height)",
        "original": "{typography.lead.tight}"
      },
      "fontWeight": {
        "value": "600",
        "variable": "var(--prose-h2-font-weight)",
        "original": "{typography.fontWeight.semibold}"
      },
      "letterSpacing": {
        "value": "-0.025em",
        "variable": "var(--prose-h2-letter-spacing)",
        "original": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "24px",
        "variable": "var(--prose-h2-icon-size)",
        "original": "{typography.fontSize.2xl}"
      }
    },
    "h3": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h3-margin)",
        "original": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "30px",
        "variable": "var(--prose-h3-font-size)",
        "original": "{typography.fontSize.3xl}"
      },
      "lineHeight": {
        "value": "1.375",
        "variable": "var(--prose-h3-line-height)",
        "original": "{typography.lead.snug}"
      },
      "fontWeight": {
        "value": "600",
        "variable": "var(--prose-h3-font-weight)",
        "original": "{typography.fontWeight.semibold}"
      },
      "letterSpacing": {
        "value": "-0.025em",
        "variable": "var(--prose-h3-letter-spacing)",
        "original": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "20px",
        "variable": "var(--prose-h3-icon-size)",
        "original": "{typography.fontSize.xl}"
      }
    },
    "h4": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h4-margin)",
        "original": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "24px",
        "variable": "var(--prose-h4-font-size)",
        "original": "{typography.fontSize.2xl}"
      },
      "lineHeight": {
        "value": "1.375",
        "variable": "var(--prose-h4-line-height)",
        "original": "{typography.lead.snug}"
      },
      "fontWeight": {
        "value": "600",
        "variable": "var(--prose-h4-font-weight)",
        "original": "{typography.fontWeight.semibold}"
      },
      "letterSpacing": {
        "value": "-0.025em",
        "variable": "var(--prose-h4-letter-spacing)",
        "original": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "18px",
        "variable": "var(--prose-h4-icon-size)",
        "original": "{typography.fontSize.lg}"
      }
    },
    "h5": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h5-margin)",
        "original": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "20px",
        "variable": "var(--prose-h5-font-size)",
        "original": "{typography.fontSize.xl}"
      },
      "lineHeight": {
        "value": "1.375",
        "variable": "var(--prose-h5-line-height)",
        "original": "{typography.lead.snug}"
      },
      "fontWeight": {
        "value": "600",
        "variable": "var(--prose-h5-font-weight)",
        "original": "{typography.fontWeight.semibold}"
      },
      "iconSize": {
        "value": "18px",
        "variable": "var(--prose-h5-icon-size)",
        "original": "{typography.fontSize.lg}"
      }
    },
    "h6": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h6-margin)",
        "original": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "18px",
        "variable": "var(--prose-h6-font-size)",
        "original": "{typography.fontSize.lg}"
      },
      "lineHeight": {
        "value": "1.5",
        "variable": "var(--prose-h6-line-height)",
        "original": "{typography.lead.normal}"
      },
      "fontWeight": {
        "value": "600",
        "variable": "var(--prose-h6-font-weight)",
        "original": "{typography.fontWeight.semibold}"
      },
      "iconSize": {
        "value": "16px",
        "variable": "var(--prose-h6-icon-size)",
        "original": "{typography.fontSize.base}"
      }
    },
    "strong": {
      "fontWeight": {
        "value": "600",
        "variable": "var(--prose-strong-font-weight)",
        "original": "{typography.fontWeight.semibold}"
      }
    },
    "img": {
      "margin": {
        "value": "32px 0",
        "variable": "var(--prose-img-margin)",
        "original": "{typography.verticalMargin.base} 0"
      }
    },
    "a": {
      "textDecoration": {
        "value": "none",
        "variable": "var(--prose-a-text-decoration)",
        "original": "none"
      },
      "color": {
        "light": {
          "default": {
            "value": "inherit",
            "variable": "var(--prose-a-color-light-default)",
            "original": "inherit"
          },
          "hover": {
            "value": "#65deb1",
            "variable": "var(--prose-a-color-light-hover)",
            "original": "{typography.color.primary.500}"
          }
        },
        "dark": {
          "default": {
            "value": "inherit",
            "variable": "var(--prose-a-color-dark-default)",
            "original": "inherit"
          },
          "hover": {
            "value": "#73e1b8",
            "variable": "var(--prose-a-color-dark-hover)",
            "original": "{typography.color.primary.400}"
          }
        }
      },
      "borderBottom": {
        "value": "1px dashed #a1a1aa",
        "variable": "var(--prose-a-border-bottom)",
        "original": "{prose.a.borderWidth} {prose.a.borderStyle.default} {prose.a.borderColor.light.default}"
      },
      "borderWidth": {
        "value": "1px",
        "variable": "var(--prose-a-border-width)",
        "original": "1px"
      },
      "borderColor": {
        "light": {
          "default": {
            "value": "#a1a1aa",
            "variable": "var(--prose-a-border-color-light-default)",
            "original": "{typography.color.secondary.400}"
          },
          "hover": {
            "value": "#65deb1",
            "variable": "var(--prose-a-border-color-light-hover)",
            "original": "{typography.color.primary.500}"
          }
        },
        "dark": {
          "default": {
            "value": "#a1a1aa",
            "variable": "var(--prose-a-border-color-dark-default)",
            "original": "{typography.color.secondary.400}"
          },
          "hover": {
            "value": "#65deb1",
            "variable": "var(--prose-a-border-color-dark-hover)",
            "original": "{typography.color.primary.500}"
          }
        }
      },
      "borderStyle": {
        "default": {
          "value": "dashed",
          "variable": "var(--prose-a-border-style-default)",
          "original": "dashed"
        },
        "hover": {
          "value": "solid",
          "variable": "var(--prose-a-border-style-hover)",
          "original": "solid"
        }
      },
      "borderDistance": {
        "value": "2px",
        "variable": "var(--prose-a-border-distance)",
        "original": "2px"
      },
      "fontWeight": {
        "value": "500",
        "variable": "var(--prose-a-font-weight)",
        "original": "{typography.fontWeight.medium}"
      },
      "hasCode": {
        "borderBottom": {
          "value": "none",
          "variable": "var(--prose-a-has-code-border-bottom)",
          "original": "none"
        }
      },
      "code": {
        "border": {
          "value": {
            "default": {
              "value": "dashed",
              "original": {
                "value": "dashed"
              },
              "name": "prose-a-border-style-default",
              "attributes": {
                "variable": "var(--prose-a-border-style-default)"
              },
              "path": [
                "prose",
                "a",
                "borderStyle",
                "default"
              ]
            },
            "hover": {
              "value": "solid",
              "original": {
                "value": "solid"
              },
              "name": "prose-a-border-style-hover",
              "attributes": {
                "variable": "var(--prose-a-border-style-hover)"
              },
              "path": [
                "prose",
                "a",
                "borderStyle",
                "hover"
              ]
            }
          },
          "variable": "var(--prose-a-code-border)",
          "original": "{prose.a.borderWidth} {prose.a.borderStyle} {prose.a.code.borderColor.light.default}"
        },
        "borderColor": {
          "light": {
            "default": {
              "value": "#a1a1aa",
              "variable": "var(--prose-a-code-border-color-light-default)",
              "original": "{typography.color.secondary.400}"
            },
            "hover": {
              "value": "#65deb1",
              "variable": "var(--prose-a-code-border-color-light-hover)",
              "original": "{typography.color.primary.500}"
            }
          },
          "dark": {
            "default": {
              "value": "#52525B",
              "variable": "var(--prose-a-code-border-color-dark-default)",
              "original": "{typography.color.secondary.600}"
            },
            "hover": {
              "value": "#4aa382",
              "variable": "var(--prose-a-code-border-color-dark-hover)",
              "original": "{typography.color.primary.600}"
            }
          }
        },
        "color": {
          "light": {
            "hover": {
              "value": "#65deb1",
              "variable": "var(--prose-a-code-color-light-hover)",
              "original": "{typography.color.primary.500}"
            }
          },
          "dark": {
            "hover": {
              "value": "#8ee7c6",
              "variable": "var(--prose-a-code-color-dark-hover)",
              "original": "{typography.color.primary.300}"
            }
          }
        },
        "background": {
          "light": {
            "hover": {
              "value": "#e0f8ef",
              "variable": "var(--prose-a-code-background-light-hover)",
              "original": "{typography.color.primary.50}"
            }
          },
          "dark": {
            "hover": {
              "value": "#142c23",
              "variable": "var(--prose-a-code-background-dark-hover)",
              "original": "{typography.color.primary.900}"
            }
          }
        }
      }
    },
    "blockquote": {
      "margin": {
        "value": "32px 0",
        "variable": "var(--prose-blockquote-margin)",
        "original": "{typography.verticalMargin.base} 0"
      },
      "padding": {
        "value": "0 0 0 24px",
        "variable": "var(--prose-blockquote-padding)",
        "original": "0 0 0 24px"
      },
      "quotes": {
        "value": "'201C' '201D' '2018' '2019'",
        "variable": "var(--prose-blockquote-quotes)",
        "original": "'201C' '201D' '2018' '2019'"
      },
      "color": {
        "light": {
          "value": "#71717A",
          "variable": "var(--prose-blockquote-color-light)",
          "original": "{typography.color.secondary.500}"
        },
        "dark": {
          "value": "#a1a1aa",
          "variable": "var(--prose-blockquote-color-dark)",
          "original": "{typography.color.secondary.400}"
        }
      },
      "borderLeft": {
        "value": "1px solid #e4e4e7",
        "variable": "var(--prose-blockquote-border-left)",
        "original": "1px solid {prose.blockquote.borderColor.light}"
      },
      "borderColor": {
        "light": {
          "value": "#e4e4e7",
          "variable": "var(--prose-blockquote-border-color-light)",
          "original": "{typography.color.secondary.200}"
        },
        "dark": {
          "value": "#3f3f46",
          "variable": "var(--prose-blockquote-border-color-dark)",
          "original": "{typography.color.secondary.700}"
        }
      }
    },
    "ul": {
      "listStyleType": {
        "value": "disc",
        "variable": "var(--prose-ul-list-style-type)",
        "original": "disc"
      },
      "margin": {
        "value": "32px 0",
        "variable": "var(--prose-ul-margin)",
        "original": "{typography.verticalMargin.base} 0"
      },
      "li": {
        "markerColor": {
          "light": {
            "value": "#D4d4d8",
            "variable": "var(--prose-ul-li-marker-color-light)",
            "original": "{typography.color.secondary.300}"
          },
          "dark": {
            "value": "#27272A",
            "variable": "var(--prose-ul-li-marker-color-dark)",
            "original": "{typography.color.secondary.800}"
          }
        }
      }
    },
    "ol": {
      "listStyleType": {
        "value": "decimal",
        "variable": "var(--prose-ol-list-style-type)",
        "original": "decimal"
      },
      "margin": {
        "value": "32px 0",
        "variable": "var(--prose-ol-margin)",
        "original": "{typography.verticalMargin.base} 0"
      },
      "li": {
        "markerColor": {
          "light": {
            "value": "#71717A",
            "variable": "var(--prose-ol-li-marker-color-light)",
            "original": "{typography.color.secondary.500}"
          },
          "dark": {
            "value": "#71717A",
            "variable": "var(--prose-ol-li-marker-color-dark)",
            "original": "{typography.color.secondary.500}"
          }
        }
      }
    },
    "li": {
      "margin": {
        "value": "16px 0",
        "variable": "var(--prose-li-margin)",
        "original": "{typography.verticalMargin.sm} 0"
      },
      "listStylePosition": {
        "value": "inside",
        "variable": "var(--prose-li-list-style-position)",
        "original": "inside"
      }
    },
    "hr": {
      "margin": {
        "value": "32px 0",
        "variable": "var(--prose-hr-margin)",
        "original": "{typography.verticalMargin.base} 0"
      },
      "style": {
        "value": "solid",
        "variable": "var(--prose-hr-style)",
        "original": "solid"
      },
      "width": {
        "value": "1px",
        "variable": "var(--prose-hr-width)",
        "original": "1px"
      },
      "color": {
        "light": {
          "value": "#e4e4e7",
          "variable": "var(--prose-hr-color-light)",
          "original": "{typography.color.secondary.200}"
        },
        "dark": {
          "value": "#27272A",
          "variable": "var(--prose-hr-color-dark)",
          "original": "{typography.color.secondary.800}"
        }
      }
    },
    "table": {
      "margin": {
        "value": "32px 0",
        "variable": "var(--prose-table-margin)",
        "original": "{typography.verticalMargin.base} 0"
      },
      "textAlign": {
        "value": "left",
        "variable": "var(--prose-table-text-align)",
        "original": "left"
      },
      "fontSize": {
        "value": "14px",
        "variable": "var(--prose-table-font-size)",
        "original": "{typography.fontSize.sm}"
      },
      "lineHeight": {
        "value": "inherit",
        "variable": "var(--prose-table-line-height)",
        "original": "inherit"
      }
    },
    "thead": {
      "border": {
        "value": "none",
        "variable": "var(--prose-thead-border)",
        "original": "none"
      },
      "borderBottom": {
        "value": "1px solid #D4d4d8",
        "variable": "var(--prose-thead-border-bottom)",
        "original": "1px solid {prose.thead.borderColor.light}"
      },
      "borderColor": {
        "light": {
          "value": "#D4d4d8",
          "variable": "var(--prose-thead-border-color-light)",
          "original": "{typography.color.secondary.300}"
        },
        "dark": {
          "value": "#52525B",
          "variable": "var(--prose-thead-border-color-dark)",
          "original": "{typography.color.secondary.600}"
        }
      }
    },
    "th": {
      "color": {
        "light": {
          "value": "#52525B",
          "variable": "var(--prose-th-color-light)",
          "original": "{typography.color.secondary.600}"
        },
        "dark": {
          "value": "#a1a1aa",
          "variable": "var(--prose-th-color-dark)",
          "original": "{typography.color.secondary.400}"
        }
      },
      "padding": {
        "value": "0 16px 16px 16px",
        "variable": "var(--prose-th-padding)",
        "original": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
      },
      "fontWeight": {
        "value": "600",
        "variable": "var(--prose-th-font-weight)",
        "original": "{typography.fontWeight.semibold}"
      }
    },
    "tbody": {
      "tr": {
        "borderBottom": {
          "value": "1px dashed #D4d4d8",
          "variable": "var(--prose-tbody-tr-border-bottom)",
          "original": "1px dashed {prose.tbody.tr.borderColor.light}"
        },
        "borderColor": {
          "light": {
            "value": "#D4d4d8",
            "variable": "var(--prose-tbody-tr-border-color-light)",
            "original": "{typography.color.secondary.300}"
          },
          "dark": {
            "value": "#3f3f46",
            "variable": "var(--prose-tbody-tr-border-color-dark)",
            "original": "{typography.color.secondary.700}"
          }
        }
      },
      "td": {
        "padding": {
          "value": "16px",
          "variable": "var(--prose-tbody-td-padding)",
          "original": "{typography.verticalMargin.sm}"
        }
      },
      "code": {
        "inline": {
          "fontSize": {
            "value": "14px",
            "variable": "var(--prose-tbody-code-inline-font-size)",
            "original": "{typography.fontSize.sm}"
          }
        }
      }
    },
    "code": {
      "block": {
        "fontSize": {
          "value": "14px",
          "variable": "var(--prose-code-block-font-size)",
          "original": "{typography.fontSize.sm}"
        },
        "margin": {
          "value": "32px 0",
          "variable": "var(--prose-code-block-margin)",
          "original": "{typography.verticalMargin.base} 0"
        },
        "borderColor": {
          "light": {
            "value": "#D4d4d8",
            "variable": "var(--prose-code-block-border-color-light)",
            "original": "{typography.color.secondary.300}"
          },
          "dark": {
            "value": "#3f3f46",
            "variable": "var(--prose-code-block-border-color-dark)",
            "original": "{typography.color.secondary.700}"
          }
        },
        "color": {
          "light": {
            "value": "#3f3f46",
            "variable": "var(--prose-code-block-color-light)",
            "original": "{typography.color.secondary.700}"
          },
          "dark": {
            "value": "#e4e4e7",
            "variable": "var(--prose-code-block-color-dark)",
            "original": "{typography.color.secondary.200}"
          }
        },
        "backgroundColor": {
          "light": {
            "value": "#f4f4f5",
            "variable": "var(--prose-code-block-background-color-light)",
            "original": "{typography.color.secondary.100}"
          },
          "dark": {
            "value": "#27272A",
            "variable": "var(--prose-code-block-background-color-dark)",
            "original": "{typography.color.secondary.800}"
          }
        },
        "pre": {
          "padding": {
            "value": "16px",
            "variable": "var(--prose-code-block-pre-padding)",
            "original": "{typography.verticalMargin.sm}"
          }
        }
      },
      "inline": {
        "borderRadius": {
          "value": "0.375rem",
          "variable": "var(--prose-code-inline-border-radius)",
          "original": "0.375rem"
        },
        "padding": {
          "value": "0.25rem 0.375rem 0.25rem 0.375rem",
          "variable": "var(--prose-code-inline-padding)",
          "original": "0.25rem 0.375rem 0.25rem 0.375rem"
        },
        "fontSize": {
          "value": "14px",
          "variable": "var(--prose-code-inline-font-size)",
          "original": "{typography.fontSize.sm}"
        },
        "fontWeight": {
          "value": "400",
          "variable": "var(--prose-code-inline-font-weight)",
          "original": "{typography.fontWeight.normal}"
        },
        "color": {
          "light": {
            "value": "#3f3f46",
            "variable": "var(--prose-code-inline-color-light)",
            "original": "{typography.color.secondary.700}"
          },
          "dark": {
            "value": "#e4e4e7",
            "variable": "var(--prose-code-inline-color-dark)",
            "original": "{typography.color.secondary.200}"
          }
        },
        "backgroundColor": {
          "light": {
            "value": "#f4f4f5",
            "variable": "var(--prose-code-inline-background-color-light)",
            "original": "{typography.color.secondary.100}"
          },
          "dark": {
            "value": "#27272A",
            "variable": "var(--prose-code-inline-background-color-dark)",
            "original": "{typography.color.secondary.800}"
          }
        }
      }
    }
  },
  "docus": {
    "page": {
      "height": {
        "value": "calc(100vh - calc(calc(64px + 50px)))",
        "variable": "var(--docus-page-height)",
        "original": "calc(100vh - calc(calc({docus.header.height} + {docus.footer.height})))"
      },
      "maxWidth": {
        "value": "90rem",
        "variable": "var(--docus-page-max-width)",
        "original": "90rem"
      }
    },
    "header": {
      "height": {
        "value": "64px",
        "variable": "var(--docus-header-height)",
        "original": "64px"
      }
    },
    "footer": {
      "height": {
        "value": "50px",
        "variable": "var(--docus-footer-height)",
        "original": "50px"
      }
    }
  },
  "width": {
    "screen": {
      "value": "100vw",
      "variable": "var(--width-screen)",
      "original": "100vw"
    }
  },
  "height": {
    "screen": {
      "value": "100vh",
      "variable": "var(--height-screen)",
      "original": "100vh"
    }
  },
  "shadow": {
    "xs": {
      "value": "0px 0px 2px 0px #000",
      "variable": "var(--shadow-xs)",
      "original": {
        "type": "dropShadow",
        "offset-x": 0,
        "offset-y": 1,
        "blur": 2,
        "spread": 0,
        "color": "#000",
        "opacity": "0.05"
      }
    },
    "sm": {
      "value": "0px 0px 3px 0px #000, 0px 0px 2px -1px #000",
      "variable": "var(--shadow-sm)",
      "original": [
        {
          "type": "dropShadow",
          "offset-x": 0,
          "offset-y": 1,
          "blur": 3,
          "spread": 0,
          "color": "#000",
          "opacity": "0.1"
        },
        {
          "type": "dropShadow",
          "offset-x": 0,
          "offset-y": 1,
          "blur": 2,
          "spread": -1,
          "color": "#000",
          "opacity": "0.1"
        }
      ]
    },
    "md": {
      "value": "0px 0px 6px -1px #000, 0px 0px 4px -2px #000",
      "variable": "var(--shadow-md)",
      "original": [
        {
          "type": "dropShadow",
          "offset-x": 0,
          "offset-y": 4,
          "blur": 6,
          "spread": -1,
          "color": "#000",
          "opacity": 0.1
        },
        {
          "type": "dropShadow",
          "offset-x": 0,
          "offset-y": 2,
          "blur": 4,
          "spread": -2,
          "color": "#000",
          "opacity": 0.1
        }
      ]
    },
    "lg": {
      "value": "0px 0px 15px -3px #000, 0px 0px 6px -4px #000",
      "variable": "var(--shadow-lg)",
      "original": [
        {
          "type": "dropShadow",
          "offset-x": 0,
          "offset-y": 10,
          "blur": 15,
          "spread": -3,
          "color": "#000",
          "opacity": "0.1"
        },
        {
          "type": "dropShadow",
          "offset-x": 0,
          "offset-y": 4,
          "blur": 6,
          "spread": -4,
          "color": "#000",
          "opacity": "0.1"
        }
      ]
    },
    "xl": {
      "value": "0px 0px 25px -5px #a1a1aa, 0px 0px 10px -6px #000",
      "variable": "var(--shadow-xl)",
      "original": [
        {
          "type": "dropShadow",
          "offset-x": 0,
          "offset-y": 20,
          "blur": 25,
          "spread": -5,
          "color": "{color.gray.400}",
          "opacity": "0.1"
        },
        {
          "type": "dropShadow",
          "offset-x": 0,
          "offset-y": 8,
          "blur": 10,
          "spread": -6,
          "color": "#000",
          "opacity": "0.1"
        }
      ]
    },
    "2xl": {
      "value": "0px 0px 50px -12px #18181B",
      "variable": "var(--shadow-2xl)",
      "original": {
        "type": "dropShadow",
        "offset-x": 0,
        "offset-y": 25,
        "blur": 50,
        "spread": -12,
        "color": "{color.gray.900}",
        "opacity": "0.25"
      }
    },
    "none": {
      "value": "0px 0px 0px 0px transparent",
      "variable": "var(--shadow-none)",
      "original": "0px 0px 0px 0px transparent"
    }
  },
  "radii": {
    "none": {
      "value": "0px",
      "variable": "var(--radii-none)",
      "original": "0px"
    },
    "2xs": {
      "value": "0.125rem",
      "variable": "var(--radii-2xs)",
      "original": "0.125rem"
    },
    "xs": {
      "value": "0.25rem",
      "variable": "var(--radii-xs)",
      "original": "0.25rem"
    },
    "sm": {
      "value": "0.375rem",
      "variable": "var(--radii-sm)",
      "original": "0.375rem"
    },
    "md": {
      "value": "0.5rem",
      "variable": "var(--radii-md)",
      "original": "0.5rem"
    },
    "lg": {
      "value": "0.75rem",
      "variable": "var(--radii-lg)",
      "original": "0.75rem"
    },
    "xl": {
      "value": "1rem",
      "variable": "var(--radii-xl)",
      "original": "1rem"
    },
    "2xl": {
      "value": "1.5rem",
      "variable": "var(--radii-2xl)",
      "original": "1.5rem"
    },
    "3xl": {
      "value": "1.75rem",
      "variable": "var(--radii-3xl)",
      "original": "1.75rem"
    },
    "full": {
      "value": "9999px",
      "variable": "var(--radii-full)",
      "original": "9999px"
    }
  },
  "size": {
    "0": {
      "value": "0px",
      "variable": "var(--size-0)",
      "original": "0px"
    },
    "2": {
      "value": "2px",
      "variable": "var(--size-2)",
      "original": "2px"
    },
    "4": {
      "value": "4px",
      "variable": "var(--size-4)",
      "original": "4px"
    },
    "6": {
      "value": "6px",
      "variable": "var(--size-6)",
      "original": "6px"
    },
    "8": {
      "value": "8px",
      "variable": "var(--size-8)",
      "original": "8px"
    },
    "12": {
      "value": "12px",
      "variable": "var(--size-12)",
      "original": "12px"
    },
    "16": {
      "value": "16px",
      "variable": "var(--size-16)",
      "original": "16px"
    },
    "20": {
      "value": "20px",
      "variable": "var(--size-20)",
      "original": "20px"
    },
    "24": {
      "value": "24px",
      "variable": "var(--size-24)",
      "original": "24px"
    },
    "32": {
      "value": "32px",
      "variable": "var(--size-32)",
      "original": "32px"
    },
    "40": {
      "value": "40px",
      "variable": "var(--size-40)",
      "original": "40px"
    },
    "48": {
      "value": "48px",
      "variable": "var(--size-48)",
      "original": "48px"
    },
    "56": {
      "value": "56px",
      "variable": "var(--size-56)",
      "original": "56px"
    },
    "64": {
      "value": "64px",
      "variable": "var(--size-64)",
      "original": "64px"
    },
    "80": {
      "value": "80px",
      "variable": "var(--size-80)",
      "original": "80px"
    },
    "104": {
      "value": "104px",
      "variable": "var(--size-104)",
      "original": "104px"
    },
    "200": {
      "value": "200px",
      "variable": "var(--size-200)",
      "original": "200px"
    },
    "xs": {
      "value": "20rem",
      "variable": "var(--size-xs)",
      "original": "20rem"
    },
    "sm": {
      "value": "24rem",
      "variable": "var(--size-sm)",
      "original": "24rem"
    },
    "md": {
      "value": "28rem",
      "variable": "var(--size-md)",
      "original": "28rem"
    },
    "lg": {
      "value": "32rem",
      "variable": "var(--size-lg)",
      "original": "32rem"
    },
    "xl": {
      "value": "36rem",
      "variable": "var(--size-xl)",
      "original": "36rem"
    },
    "2xl": {
      "value": "42rem",
      "variable": "var(--size-2xl)",
      "original": "42rem"
    },
    "3xl": {
      "value": "48rem",
      "variable": "var(--size-3xl)",
      "original": "48rem"
    },
    "4xl": {
      "value": "56rem",
      "variable": "var(--size-4xl)",
      "original": "56rem"
    },
    "5xl": {
      "value": "64rem",
      "variable": "var(--size-5xl)",
      "original": "64rem"
    },
    "6xl": {
      "value": "72rem",
      "variable": "var(--size-6xl)",
      "original": "72rem"
    },
    "7xl": {
      "value": "80rem",
      "variable": "var(--size-7xl)",
      "original": "80rem"
    },
    "full": {
      "value": "100%",
      "variable": "var(--size-full)",
      "original": "100%"
    }
  },
  "space": {
    "0": {
      "value": "0px",
      "variable": "var(--space-0)",
      "original": "0px"
    },
    "1": {
      "value": "0.25rem",
      "variable": "var(--space-1)",
      "original": "0.25rem"
    },
    "2": {
      "value": "0.5rem",
      "variable": "var(--space-2)",
      "original": "0.5rem"
    },
    "3": {
      "value": "0.75rem",
      "variable": "var(--space-3)",
      "original": "0.75rem"
    },
    "4": {
      "value": "1rem",
      "variable": "var(--space-4)",
      "original": "1rem"
    },
    "5": {
      "value": "1.25rem",
      "variable": "var(--space-5)",
      "original": "1.25rem"
    },
    "6": {
      "value": "1.5rem",
      "variable": "var(--space-6)",
      "original": "1.5rem"
    },
    "7": {
      "value": "1.75rem",
      "variable": "var(--space-7)",
      "original": "1.75rem"
    },
    "8": {
      "value": "2rem",
      "variable": "var(--space-8)",
      "original": "2rem"
    },
    "9": {
      "value": "2.25rem",
      "variable": "var(--space-9)",
      "original": "2.25rem"
    },
    "10": {
      "value": "2.5rem",
      "variable": "var(--space-10)",
      "original": "2.5rem"
    },
    "11": {
      "value": "2.75rem",
      "variable": "var(--space-11)",
      "original": "2.75rem"
    },
    "12": {
      "value": "3rem",
      "variable": "var(--space-12)",
      "original": "3rem"
    },
    "14": {
      "value": "3.5rem",
      "variable": "var(--space-14)",
      "original": "3.5rem"
    },
    "16": {
      "value": "4rem",
      "variable": "var(--space-16)",
      "original": "4rem"
    },
    "20": {
      "value": "5rem",
      "variable": "var(--space-20)",
      "original": "5rem"
    },
    "24": {
      "value": "6rem",
      "variable": "var(--space-24)",
      "original": "6rem"
    },
    "28": {
      "value": "7rem",
      "variable": "var(--space-28)",
      "original": "7rem"
    },
    "32": {
      "value": "8rem",
      "variable": "var(--space-32)",
      "original": "8rem"
    },
    "36": {
      "value": "9rem",
      "variable": "var(--space-36)",
      "original": "9rem"
    },
    "40": {
      "value": "10rem",
      "variable": "var(--space-40)",
      "original": "10rem"
    },
    "44": {
      "value": "11rem",
      "variable": "var(--space-44)",
      "original": "11rem"
    },
    "48": {
      "value": "12rem",
      "variable": "var(--space-48)",
      "original": "12rem"
    },
    "52": {
      "value": "13rem",
      "variable": "var(--space-52)",
      "original": "13rem"
    },
    "56": {
      "value": "14rem",
      "variable": "var(--space-56)",
      "original": "14rem"
    },
    "60": {
      "value": "15rem",
      "variable": "var(--space-60)",
      "original": "15rem"
    },
    "64": {
      "value": "16rem",
      "variable": "var(--space-64)",
      "original": "16rem"
    },
    "72": {
      "value": "18rem",
      "variable": "var(--space-72)",
      "original": "18rem"
    },
    "80": {
      "value": "20rem",
      "variable": "var(--space-80)",
      "original": "20rem"
    },
    "96": {
      "value": "24rem",
      "variable": "var(--space-96)",
      "original": "24rem"
    },
    "px": {
      "value": "1px",
      "variable": "var(--space-px)",
      "original": "1px"
    },
    "0-5": {
      "value": "0.125rem",
      "variable": "var(--space-0-5)",
      "original": "0.125rem"
    },
    "1-5": {
      "value": "0.375rem",
      "variable": "var(--space-1-5)",
      "original": "0.375rem"
    },
    "2-5": {
      "value": "0.625rem",
      "variable": "var(--space-2-5)",
      "original": "0.625rem"
    },
    "3-5": {
      "value": "0.875rem",
      "variable": "var(--space-3-5)",
      "original": "0.875rem"
    }
  },
  "borderWidth": {
    "noBorder": {
      "value": "0",
      "variable": "var(--border-width-no-border)",
      "original": "0"
    },
    "sm": {
      "value": "1px",
      "variable": "var(--border-width-sm)",
      "original": "1px"
    },
    "md": {
      "value": "2px",
      "variable": "var(--border-width-md)",
      "original": "2px"
    },
    "lg": {
      "value": "3px",
      "variable": "var(--border-width-lg)",
      "original": "3px"
    }
  },
  "opacity": {
    "noOpacity": {
      "value": "0",
      "variable": "var(--opacity-no-opacity)",
      "original": "0"
    },
    "bright": {
      "value": "0.1",
      "variable": "var(--opacity-bright)",
      "original": "0.1"
    },
    "light": {
      "value": "0.15",
      "variable": "var(--opacity-light)",
      "original": "0.15"
    },
    "soft": {
      "value": "0.3",
      "variable": "var(--opacity-soft)",
      "original": "0.3"
    },
    "medium": {
      "value": "0.5",
      "variable": "var(--opacity-medium)",
      "original": "0.5"
    },
    "high": {
      "value": "0.8",
      "variable": "var(--opacity-high)",
      "original": "0.8"
    },
    "total": {
      "value": "1",
      "variable": "var(--opacity-total)",
      "original": "1"
    }
  },
  "font": {
    "sans": {
      "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      "variable": "var(--font-sans)",
      "original": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
    },
    "serif": {
      "value": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif",
      "variable": "var(--font-serif)",
      "original": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
    },
    "mono": {
      "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
      "variable": "var(--font-mono)",
      "original": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    }
  },
  "fontWeight": {
    "thin": {
      "value": "100",
      "variable": "var(--font-weight-thin)",
      "original": "100"
    },
    "extralight": {
      "value": "200",
      "variable": "var(--font-weight-extralight)",
      "original": "200"
    },
    "light": {
      "value": "300",
      "variable": "var(--font-weight-light)",
      "original": "300"
    },
    "normal": {
      "value": "400",
      "variable": "var(--font-weight-normal)",
      "original": "400"
    },
    "medium": {
      "value": "500",
      "variable": "var(--font-weight-medium)",
      "original": "500"
    },
    "semibold": {
      "value": "600",
      "variable": "var(--font-weight-semibold)",
      "original": "600"
    },
    "bold": {
      "value": "700",
      "variable": "var(--font-weight-bold)",
      "original": "700"
    },
    "extrabold": {
      "value": "800",
      "variable": "var(--font-weight-extrabold)",
      "original": "800"
    },
    "black": {
      "value": "900",
      "variable": "var(--font-weight-black)",
      "original": "900"
    }
  },
  "fontSize": {
    "xs": {
      "value": "0.75rem",
      "variable": "var(--font-size-xs)",
      "original": "0.75rem"
    },
    "sm": {
      "value": "0.875rem",
      "variable": "var(--font-size-sm)",
      "original": "0.875rem"
    },
    "base": {
      "value": "1rem",
      "variable": "var(--font-size-base)",
      "original": "1rem"
    },
    "lg": {
      "value": "1.125rem",
      "variable": "var(--font-size-lg)",
      "original": "1.125rem"
    },
    "xl": {
      "value": "1.25rem",
      "variable": "var(--font-size-xl)",
      "original": "1.25rem"
    },
    "2xl": {
      "value": "1.5rem",
      "variable": "var(--font-size-2xl)",
      "original": "1.5rem"
    },
    "3xl": {
      "value": "1.875rem",
      "variable": "var(--font-size-3xl)",
      "original": "1.875rem"
    },
    "4xl": {
      "value": "2.25rem",
      "variable": "var(--font-size-4xl)",
      "original": "2.25rem"
    },
    "5xl": {
      "value": "3rem",
      "variable": "var(--font-size-5xl)",
      "original": "3rem"
    },
    "6xl": {
      "value": "3.75rem",
      "variable": "var(--font-size-6xl)",
      "original": "3.75rem"
    },
    "7xl": {
      "value": "4.5rem",
      "variable": "var(--font-size-7xl)",
      "original": "4.5rem"
    },
    "8xl": {
      "value": "6rem",
      "variable": "var(--font-size-8xl)",
      "original": "6rem"
    },
    "9xl": {
      "value": "8rem",
      "variable": "var(--font-size-9xl)",
      "original": "8rem"
    }
  },
  "letterSpacing": {
    "tighter": {
      "value": "-0.05em",
      "variable": "var(--letter-spacing-tighter)",
      "original": "-0.05em"
    },
    "tight": {
      "value": "-0.025em",
      "variable": "var(--letter-spacing-tight)",
      "original": "-0.025em"
    },
    "normal": {
      "value": "0em",
      "variable": "var(--letter-spacing-normal)",
      "original": "0em"
    },
    "wide": {
      "value": "0.025em",
      "variable": "var(--letter-spacing-wide)",
      "original": "0.025em"
    },
    "wider": {
      "value": "0.05em",
      "variable": "var(--letter-spacing-wider)",
      "original": "0.05em"
    },
    "widest": {
      "value": "0.1em",
      "variable": "var(--letter-spacing-widest)",
      "original": "0.1em"
    }
  },
  "lead": {
    "1": {
      "value": ".025rem",
      "variable": "var(--lead-1)",
      "original": ".025rem"
    },
    "2": {
      "value": ".5rem",
      "variable": "var(--lead-2)",
      "original": ".5rem"
    },
    "3": {
      "value": ".75rem",
      "variable": "var(--lead-3)",
      "original": ".75rem"
    },
    "4": {
      "value": "1rem",
      "variable": "var(--lead-4)",
      "original": "1rem"
    },
    "5": {
      "value": "1.25rem",
      "variable": "var(--lead-5)",
      "original": "1.25rem"
    },
    "6": {
      "value": "1.5rem",
      "variable": "var(--lead-6)",
      "original": "1.5rem"
    },
    "7": {
      "value": "1.75rem",
      "variable": "var(--lead-7)",
      "original": "1.75rem"
    },
    "8": {
      "value": "2rem",
      "variable": "var(--lead-8)",
      "original": "2rem"
    },
    "9": {
      "value": "2.25rem",
      "variable": "var(--lead-9)",
      "original": "2.25rem"
    },
    "10": {
      "value": "2.5rem",
      "variable": "var(--lead-10)",
      "original": "2.5rem"
    },
    "none": {
      "value": "1",
      "variable": "var(--lead-none)",
      "original": "1"
    },
    "tight": {
      "value": "1.25",
      "variable": "var(--lead-tight)",
      "original": "1.25"
    },
    "snug": {
      "value": "1.375",
      "variable": "var(--lead-snug)",
      "original": "1.375"
    },
    "normal": {
      "value": "1.5",
      "variable": "var(--lead-normal)",
      "original": "1.5"
    },
    "relaxed": {
      "value": "1.625",
      "variable": "var(--lead-relaxed)",
      "original": "1.625"
    },
    "loose": {
      "value": "2",
      "variable": "var(--lead-loose)",
      "original": "2"
    }
  },
  "media": {
    "xs": {
      "value": "(min-width: 475px)",
      "variable": "var(--media-xs)",
      "original": "(min-width: 475px)"
    },
    "sm": {
      "value": "(min-width: 640px)",
      "variable": "var(--media-sm)",
      "original": "(min-width: 640px)"
    },
    "md": {
      "value": "(min-width: 768px)",
      "variable": "var(--media-md)",
      "original": "(min-width: 768px)"
    },
    "lg": {
      "value": "(min-width: 1024px)",
      "variable": "var(--media-lg)",
      "original": "(min-width: 1024px)"
    },
    "xl": {
      "value": "(min-width: 1280px)",
      "variable": "var(--media-xl)",
      "original": "(min-width: 1280px)"
    },
    "2xl": {
      "value": "(min-width: 1536px)",
      "variable": "var(--media-2xl)",
      "original": "(min-width: 1536px)"
    },
    "rm": {
      "value": "(prefers-reduced-motion: reduce)",
      "variable": "var(--media-rm)",
      "original": "(prefers-reduced-motion: reduce)"
    },
    "landscape": {
      "value": "only screen and (orientation: landscape)",
      "variable": "var(--media-landscape)",
      "original": "only screen and (orientation: landscape)"
    },
    "portrait": {
      "value": "only screen and (orientation: portrait)",
      "variable": "var(--media-portrait)",
      "original": "only screen and (orientation: portrait)"
    }
  }
};
const customProperties = {
  "stateColors": (value) => {
    return {
      color: `{states.${value}.color.primary}`,
      backgroundColor: `{states.${value}.backgroundColor.primary}`,
      borderColor: `{states.${value}.borderColor.primary}`,
      ":deep(code)": {
        color: `{states.${value}.color.secondary}`,
        backgroundColor: `{states.${value}.backgroundColor.secondary}`
      },
      ":deep(a)": {
        borderColor: "currentColor",
        "&:hover": {
          color: `{states.${value}.color.secondary}`,
          borderColor: "currentColor"
        }
      }
    };
  },
  "my": (value) => {
    return {
      marginTop: value,
      marginBottom: value
    };
  },
  "mx": (value) => {
    return {
      marginLeft: value,
      marginRight: value
    };
  },
  "py": (value) => {
    return {
      paddingTop: value,
      paddingBottom: value
    };
  },
  "px": (value) => {
    return {
      paddingLeft: value,
      paddingRight: value
    };
  }
};
const theme$1 = { theme, customProperties };
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var chroma$1 = { exports: {} };
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    var limit$2 = function(x, min2, max2) {
      if (min2 === void 0)
        min2 = 0;
      if (max2 === void 0)
        max2 = 1;
      return x < min2 ? min2 : x > max2 ? max2 : x;
    };
    var limit$1 = limit$2;
    var clip_rgb$3 = function(rgb2) {
      rgb2._clipped = false;
      rgb2._unclipped = rgb2.slice(0);
      for (var i2 = 0; i2 <= 3; i2++) {
        if (i2 < 3) {
          if (rgb2[i2] < 0 || rgb2[i2] > 255) {
            rgb2._clipped = true;
          }
          rgb2[i2] = limit$1(rgb2[i2], 0, 255);
        } else if (i2 === 3) {
          rgb2[i2] = limit$1(rgb2[i2], 0, 1);
        }
      }
      return rgb2;
    };
    var classToType = {};
    for (var i$1 = 0, list$1 = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; i$1 < list$1.length; i$1 += 1) {
      var name = list$1[i$1];
      classToType["[object " + name + "]"] = name.toLowerCase();
    }
    var type$p = function(obj) {
      return classToType[Object.prototype.toString.call(obj)] || "object";
    };
    var type$o = type$p;
    var unpack$B = function(args, keyOrder) {
      if (keyOrder === void 0)
        keyOrder = null;
      if (args.length >= 3) {
        return Array.prototype.slice.call(args);
      }
      if (type$o(args[0]) == "object" && keyOrder) {
        return keyOrder.split("").filter(function(k) {
          return args[0][k] !== void 0;
        }).map(function(k) {
          return args[0][k];
        });
      }
      return args[0];
    };
    var type$n = type$p;
    var last$4 = function(args) {
      if (args.length < 2) {
        return null;
      }
      var l = args.length - 1;
      if (type$n(args[l]) == "string") {
        return args[l].toLowerCase();
      }
      return null;
    };
    var PI$2 = Math.PI;
    var utils2 = {
      clip_rgb: clip_rgb$3,
      limit: limit$2,
      type: type$p,
      unpack: unpack$B,
      last: last$4,
      PI: PI$2,
      TWOPI: PI$2 * 2,
      PITHIRD: PI$2 / 3,
      DEG2RAD: PI$2 / 180,
      RAD2DEG: 180 / PI$2
    };
    var input$h = {
      format: {},
      autodetect: []
    };
    var last$3 = utils2.last;
    var clip_rgb$2 = utils2.clip_rgb;
    var type$m = utils2.type;
    var _input = input$h;
    var Color$D = function Color2() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var me = this;
      if (type$m(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
        return args[0];
      }
      var mode = last$3(args);
      var autodetect = false;
      if (!mode) {
        autodetect = true;
        if (!_input.sorted) {
          _input.autodetect = _input.autodetect.sort(function(a, b) {
            return b.p - a.p;
          });
          _input.sorted = true;
        }
        for (var i2 = 0, list2 = _input.autodetect; i2 < list2.length; i2 += 1) {
          var chk = list2[i2];
          mode = chk.test.apply(chk, args);
          if (mode) {
            break;
          }
        }
      }
      if (_input.format[mode]) {
        var rgb2 = _input.format[mode].apply(null, autodetect ? args : args.slice(0, -1));
        me._rgb = clip_rgb$2(rgb2);
      } else {
        throw new Error("unknown format: " + args);
      }
      if (me._rgb.length === 3) {
        me._rgb.push(1);
      }
    };
    Color$D.prototype.toString = function toString2() {
      if (type$m(this.hex) == "function") {
        return this.hex();
      }
      return "[" + this._rgb.join(",") + "]";
    };
    var Color_1 = Color$D;
    var chroma$k = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(chroma$k.Color, [null].concat(args)))();
    };
    chroma$k.Color = Color_1;
    chroma$k.version = "2.4.2";
    var chroma_1 = chroma$k;
    var unpack$A = utils2.unpack;
    var max$2 = Math.max;
    var rgb2cmyk$1 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var ref2 = unpack$A(args, "rgb");
      var r = ref2[0];
      var g = ref2[1];
      var b = ref2[2];
      r = r / 255;
      g = g / 255;
      b = b / 255;
      var k = 1 - max$2(r, max$2(g, b));
      var f = k < 1 ? 1 / (1 - k) : 0;
      var c = (1 - r - k) * f;
      var m = (1 - g - k) * f;
      var y = (1 - b - k) * f;
      return [c, m, y, k];
    };
    var rgb2cmyk_1 = rgb2cmyk$1;
    var unpack$z = utils2.unpack;
    var cmyk2rgb = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      args = unpack$z(args, "cmyk");
      var c = args[0];
      var m = args[1];
      var y = args[2];
      var k = args[3];
      var alpha = args.length > 4 ? args[4] : 1;
      if (k === 1) {
        return [0, 0, 0, alpha];
      }
      return [
        c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
        m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
        y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
        alpha
      ];
    };
    var cmyk2rgb_1 = cmyk2rgb;
    var chroma$j = chroma_1;
    var Color$C = Color_1;
    var input$g = input$h;
    var unpack$y = utils2.unpack;
    var type$l = utils2.type;
    var rgb2cmyk = rgb2cmyk_1;
    Color$C.prototype.cmyk = function() {
      return rgb2cmyk(this._rgb);
    };
    chroma$j.cmyk = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$C, [null].concat(args, ["cmyk"])))();
    };
    input$g.format.cmyk = cmyk2rgb_1;
    input$g.autodetect.push({
      p: 2,
      test: function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$y(args, "cmyk");
        if (type$l(args) === "array" && args.length === 4) {
          return "cmyk";
        }
      }
    });
    var unpack$x = utils2.unpack;
    var last$2 = utils2.last;
    var rnd = function(a) {
      return Math.round(a * 100) / 100;
    };
    var hsl2css$1 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var hsla = unpack$x(args, "hsla");
      var mode = last$2(args) || "lsa";
      hsla[0] = rnd(hsla[0] || 0);
      hsla[1] = rnd(hsla[1] * 100) + "%";
      hsla[2] = rnd(hsla[2] * 100) + "%";
      if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
        hsla[3] = hsla.length > 3 ? hsla[3] : 1;
        mode = "hsla";
      } else {
        hsla.length = 3;
      }
      return mode + "(" + hsla.join(",") + ")";
    };
    var hsl2css_1 = hsl2css$1;
    var unpack$w = utils2.unpack;
    var rgb2hsl$3 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      args = unpack$w(args, "rgba");
      var r = args[0];
      var g = args[1];
      var b = args[2];
      r /= 255;
      g /= 255;
      b /= 255;
      var min2 = Math.min(r, g, b);
      var max2 = Math.max(r, g, b);
      var l = (max2 + min2) / 2;
      var s, h2;
      if (max2 === min2) {
        s = 0;
        h2 = Number.NaN;
      } else {
        s = l < 0.5 ? (max2 - min2) / (max2 + min2) : (max2 - min2) / (2 - max2 - min2);
      }
      if (r == max2) {
        h2 = (g - b) / (max2 - min2);
      } else if (g == max2) {
        h2 = 2 + (b - r) / (max2 - min2);
      } else if (b == max2) {
        h2 = 4 + (r - g) / (max2 - min2);
      }
      h2 *= 60;
      if (h2 < 0) {
        h2 += 360;
      }
      if (args.length > 3 && args[3] !== void 0) {
        return [h2, s, l, args[3]];
      }
      return [h2, s, l];
    };
    var rgb2hsl_1 = rgb2hsl$3;
    var unpack$v = utils2.unpack;
    var last$1 = utils2.last;
    var hsl2css = hsl2css_1;
    var rgb2hsl$2 = rgb2hsl_1;
    var round$6 = Math.round;
    var rgb2css$1 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var rgba = unpack$v(args, "rgba");
      var mode = last$1(args) || "rgb";
      if (mode.substr(0, 3) == "hsl") {
        return hsl2css(rgb2hsl$2(rgba), mode);
      }
      rgba[0] = round$6(rgba[0]);
      rgba[1] = round$6(rgba[1]);
      rgba[2] = round$6(rgba[2]);
      if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
        rgba[3] = rgba.length > 3 ? rgba[3] : 1;
        mode = "rgba";
      }
      return mode + "(" + rgba.slice(0, mode === "rgb" ? 3 : 4).join(",") + ")";
    };
    var rgb2css_1 = rgb2css$1;
    var unpack$u = utils2.unpack;
    var round$5 = Math.round;
    var hsl2rgb$1 = function() {
      var assign;
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      args = unpack$u(args, "hsl");
      var h2 = args[0];
      var s = args[1];
      var l = args[2];
      var r, g, b;
      if (s === 0) {
        r = g = b = l * 255;
      } else {
        var t3 = [0, 0, 0];
        var c = [0, 0, 0];
        var t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var t1 = 2 * l - t2;
        var h_ = h2 / 360;
        t3[0] = h_ + 1 / 3;
        t3[1] = h_;
        t3[2] = h_ - 1 / 3;
        for (var i2 = 0; i2 < 3; i2++) {
          if (t3[i2] < 0) {
            t3[i2] += 1;
          }
          if (t3[i2] > 1) {
            t3[i2] -= 1;
          }
          if (6 * t3[i2] < 1) {
            c[i2] = t1 + (t2 - t1) * 6 * t3[i2];
          } else if (2 * t3[i2] < 1) {
            c[i2] = t2;
          } else if (3 * t3[i2] < 2) {
            c[i2] = t1 + (t2 - t1) * (2 / 3 - t3[i2]) * 6;
          } else {
            c[i2] = t1;
          }
        }
        assign = [round$5(c[0] * 255), round$5(c[1] * 255), round$5(c[2] * 255)], r = assign[0], g = assign[1], b = assign[2];
      }
      if (args.length > 3) {
        return [r, g, b, args[3]];
      }
      return [r, g, b, 1];
    };
    var hsl2rgb_1 = hsl2rgb$1;
    var hsl2rgb = hsl2rgb_1;
    var input$f = input$h;
    var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
    var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var round$4 = Math.round;
    var css2rgb$1 = function(css) {
      css = css.toLowerCase().trim();
      var m;
      if (input$f.format.named) {
        try {
          return input$f.format.named(css);
        } catch (e) {
        }
      }
      if (m = css.match(RE_RGB)) {
        var rgb2 = m.slice(1, 4);
        for (var i2 = 0; i2 < 3; i2++) {
          rgb2[i2] = +rgb2[i2];
        }
        rgb2[3] = 1;
        return rgb2;
      }
      if (m = css.match(RE_RGBA)) {
        var rgb$1 = m.slice(1, 5);
        for (var i$12 = 0; i$12 < 4; i$12++) {
          rgb$1[i$12] = +rgb$1[i$12];
        }
        return rgb$1;
      }
      if (m = css.match(RE_RGB_PCT)) {
        var rgb$2 = m.slice(1, 4);
        for (var i$2 = 0; i$2 < 3; i$2++) {
          rgb$2[i$2] = round$4(rgb$2[i$2] * 2.55);
        }
        rgb$2[3] = 1;
        return rgb$2;
      }
      if (m = css.match(RE_RGBA_PCT)) {
        var rgb$3 = m.slice(1, 5);
        for (var i$3 = 0; i$3 < 3; i$3++) {
          rgb$3[i$3] = round$4(rgb$3[i$3] * 2.55);
        }
        rgb$3[3] = +rgb$3[3];
        return rgb$3;
      }
      if (m = css.match(RE_HSL)) {
        var hsl2 = m.slice(1, 4);
        hsl2[1] *= 0.01;
        hsl2[2] *= 0.01;
        var rgb$4 = hsl2rgb(hsl2);
        rgb$4[3] = 1;
        return rgb$4;
      }
      if (m = css.match(RE_HSLA)) {
        var hsl$1 = m.slice(1, 4);
        hsl$1[1] *= 0.01;
        hsl$1[2] *= 0.01;
        var rgb$5 = hsl2rgb(hsl$1);
        rgb$5[3] = +m[4];
        return rgb$5;
      }
    };
    css2rgb$1.test = function(s) {
      return RE_RGB.test(s) || RE_RGBA.test(s) || RE_RGB_PCT.test(s) || RE_RGBA_PCT.test(s) || RE_HSL.test(s) || RE_HSLA.test(s);
    };
    var css2rgb_1 = css2rgb$1;
    var chroma$i = chroma_1;
    var Color$B = Color_1;
    var input$e = input$h;
    var type$k = utils2.type;
    var rgb2css = rgb2css_1;
    var css2rgb = css2rgb_1;
    Color$B.prototype.css = function(mode) {
      return rgb2css(this._rgb, mode);
    };
    chroma$i.css = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$B, [null].concat(args, ["css"])))();
    };
    input$e.format.css = css2rgb;
    input$e.autodetect.push({
      p: 5,
      test: function(h2) {
        var rest = [], len = arguments.length - 1;
        while (len-- > 0)
          rest[len] = arguments[len + 1];
        if (!rest.length && type$k(h2) === "string" && css2rgb.test(h2)) {
          return "css";
        }
      }
    });
    var Color$A = Color_1;
    var chroma$h = chroma_1;
    var input$d = input$h;
    var unpack$t = utils2.unpack;
    input$d.format.gl = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var rgb2 = unpack$t(args, "rgba");
      rgb2[0] *= 255;
      rgb2[1] *= 255;
      rgb2[2] *= 255;
      return rgb2;
    };
    chroma$h.gl = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$A, [null].concat(args, ["gl"])))();
    };
    Color$A.prototype.gl = function() {
      var rgb2 = this._rgb;
      return [rgb2[0] / 255, rgb2[1] / 255, rgb2[2] / 255, rgb2[3]];
    };
    var unpack$s = utils2.unpack;
    var rgb2hcg$1 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var ref2 = unpack$s(args, "rgb");
      var r = ref2[0];
      var g = ref2[1];
      var b = ref2[2];
      var min2 = Math.min(r, g, b);
      var max2 = Math.max(r, g, b);
      var delta = max2 - min2;
      var c = delta * 100 / 255;
      var _g = min2 / (255 - delta) * 100;
      var h2;
      if (delta === 0) {
        h2 = Number.NaN;
      } else {
        if (r === max2) {
          h2 = (g - b) / delta;
        }
        if (g === max2) {
          h2 = 2 + (b - r) / delta;
        }
        if (b === max2) {
          h2 = 4 + (r - g) / delta;
        }
        h2 *= 60;
        if (h2 < 0) {
          h2 += 360;
        }
      }
      return [h2, c, _g];
    };
    var rgb2hcg_1 = rgb2hcg$1;
    var unpack$r = utils2.unpack;
    var floor$3 = Math.floor;
    var hcg2rgb = function() {
      var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      args = unpack$r(args, "hcg");
      var h2 = args[0];
      var c = args[1];
      var _g = args[2];
      var r, g, b;
      _g = _g * 255;
      var _c = c * 255;
      if (c === 0) {
        r = g = b = _g;
      } else {
        if (h2 === 360) {
          h2 = 0;
        }
        if (h2 > 360) {
          h2 -= 360;
        }
        if (h2 < 0) {
          h2 += 360;
        }
        h2 /= 60;
        var i2 = floor$3(h2);
        var f = h2 - i2;
        var p = _g * (1 - c);
        var q = p + _c * (1 - f);
        var t = p + _c * f;
        var v = p + _c;
        switch (i2) {
          case 0:
            assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2];
            break;
          case 1:
            assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2];
            break;
          case 2:
            assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2];
            break;
          case 3:
            assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2];
            break;
          case 4:
            assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2];
            break;
          case 5:
            assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2];
            break;
        }
      }
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
    var hcg2rgb_1 = hcg2rgb;
    var unpack$q = utils2.unpack;
    var type$j = utils2.type;
    var chroma$g = chroma_1;
    var Color$z = Color_1;
    var input$c = input$h;
    var rgb2hcg = rgb2hcg_1;
    Color$z.prototype.hcg = function() {
      return rgb2hcg(this._rgb);
    };
    chroma$g.hcg = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$z, [null].concat(args, ["hcg"])))();
    };
    input$c.format.hcg = hcg2rgb_1;
    input$c.autodetect.push({
      p: 1,
      test: function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$q(args, "hcg");
        if (type$j(args) === "array" && args.length === 3) {
          return "hcg";
        }
      }
    });
    var unpack$p = utils2.unpack;
    var last = utils2.last;
    var round$3 = Math.round;
    var rgb2hex$2 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var ref2 = unpack$p(args, "rgba");
      var r = ref2[0];
      var g = ref2[1];
      var b = ref2[2];
      var a = ref2[3];
      var mode = last(args) || "auto";
      if (a === void 0) {
        a = 1;
      }
      if (mode === "auto") {
        mode = a < 1 ? "rgba" : "rgb";
      }
      r = round$3(r);
      g = round$3(g);
      b = round$3(b);
      var u = r << 16 | g << 8 | b;
      var str = "000000" + u.toString(16);
      str = str.substr(str.length - 6);
      var hxa = "0" + round$3(a * 255).toString(16);
      hxa = hxa.substr(hxa.length - 2);
      switch (mode.toLowerCase()) {
        case "rgba":
          return "#" + str + hxa;
        case "argb":
          return "#" + hxa + str;
        default:
          return "#" + str;
      }
    };
    var rgb2hex_1 = rgb2hex$2;
    var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
    var hex2rgb$1 = function(hex) {
      if (hex.match(RE_HEX)) {
        if (hex.length === 4 || hex.length === 7) {
          hex = hex.substr(1);
        }
        if (hex.length === 3) {
          hex = hex.split("");
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        var u = parseInt(hex, 16);
        var r = u >> 16;
        var g = u >> 8 & 255;
        var b = u & 255;
        return [r, g, b, 1];
      }
      if (hex.match(RE_HEXA)) {
        if (hex.length === 5 || hex.length === 9) {
          hex = hex.substr(1);
        }
        if (hex.length === 4) {
          hex = hex.split("");
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        }
        var u$1 = parseInt(hex, 16);
        var r$1 = u$1 >> 24 & 255;
        var g$1 = u$1 >> 16 & 255;
        var b$1 = u$1 >> 8 & 255;
        var a = Math.round((u$1 & 255) / 255 * 100) / 100;
        return [r$1, g$1, b$1, a];
      }
      throw new Error("unknown hex color: " + hex);
    };
    var hex2rgb_1 = hex2rgb$1;
    var chroma$f = chroma_1;
    var Color$y = Color_1;
    var type$i = utils2.type;
    var input$b = input$h;
    var rgb2hex$1 = rgb2hex_1;
    Color$y.prototype.hex = function(mode) {
      return rgb2hex$1(this._rgb, mode);
    };
    chroma$f.hex = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$y, [null].concat(args, ["hex"])))();
    };
    input$b.format.hex = hex2rgb_1;
    input$b.autodetect.push({
      p: 4,
      test: function(h2) {
        var rest = [], len = arguments.length - 1;
        while (len-- > 0)
          rest[len] = arguments[len + 1];
        if (!rest.length && type$i(h2) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(h2.length) >= 0) {
          return "hex";
        }
      }
    });
    var unpack$o = utils2.unpack;
    var TWOPI$2 = utils2.TWOPI;
    var min$2 = Math.min;
    var sqrt$4 = Math.sqrt;
    var acos = Math.acos;
    var rgb2hsi$1 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var ref2 = unpack$o(args, "rgb");
      var r = ref2[0];
      var g = ref2[1];
      var b = ref2[2];
      r /= 255;
      g /= 255;
      b /= 255;
      var h2;
      var min_ = min$2(r, g, b);
      var i2 = (r + g + b) / 3;
      var s = i2 > 0 ? 1 - min_ / i2 : 0;
      if (s === 0) {
        h2 = NaN;
      } else {
        h2 = (r - g + (r - b)) / 2;
        h2 /= sqrt$4((r - g) * (r - g) + (r - b) * (g - b));
        h2 = acos(h2);
        if (b > g) {
          h2 = TWOPI$2 - h2;
        }
        h2 /= TWOPI$2;
      }
      return [h2 * 360, s, i2];
    };
    var rgb2hsi_1 = rgb2hsi$1;
    var unpack$n = utils2.unpack;
    var limit = utils2.limit;
    var TWOPI$1 = utils2.TWOPI;
    var PITHIRD = utils2.PITHIRD;
    var cos$4 = Math.cos;
    var hsi2rgb = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      args = unpack$n(args, "hsi");
      var h2 = args[0];
      var s = args[1];
      var i2 = args[2];
      var r, g, b;
      if (isNaN(h2)) {
        h2 = 0;
      }
      if (isNaN(s)) {
        s = 0;
      }
      if (h2 > 360) {
        h2 -= 360;
      }
      if (h2 < 0) {
        h2 += 360;
      }
      h2 /= 360;
      if (h2 < 1 / 3) {
        b = (1 - s) / 3;
        r = (1 + s * cos$4(TWOPI$1 * h2) / cos$4(PITHIRD - TWOPI$1 * h2)) / 3;
        g = 1 - (b + r);
      } else if (h2 < 2 / 3) {
        h2 -= 1 / 3;
        r = (1 - s) / 3;
        g = (1 + s * cos$4(TWOPI$1 * h2) / cos$4(PITHIRD - TWOPI$1 * h2)) / 3;
        b = 1 - (r + g);
      } else {
        h2 -= 2 / 3;
        g = (1 - s) / 3;
        b = (1 + s * cos$4(TWOPI$1 * h2) / cos$4(PITHIRD - TWOPI$1 * h2)) / 3;
        r = 1 - (g + b);
      }
      r = limit(i2 * r * 3);
      g = limit(i2 * g * 3);
      b = limit(i2 * b * 3);
      return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
    };
    var hsi2rgb_1 = hsi2rgb;
    var unpack$m = utils2.unpack;
    var type$h = utils2.type;
    var chroma$e = chroma_1;
    var Color$x = Color_1;
    var input$a = input$h;
    var rgb2hsi = rgb2hsi_1;
    Color$x.prototype.hsi = function() {
      return rgb2hsi(this._rgb);
    };
    chroma$e.hsi = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$x, [null].concat(args, ["hsi"])))();
    };
    input$a.format.hsi = hsi2rgb_1;
    input$a.autodetect.push({
      p: 2,
      test: function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$m(args, "hsi");
        if (type$h(args) === "array" && args.length === 3) {
          return "hsi";
        }
      }
    });
    var unpack$l = utils2.unpack;
    var type$g = utils2.type;
    var chroma$d = chroma_1;
    var Color$w = Color_1;
    var input$9 = input$h;
    var rgb2hsl$1 = rgb2hsl_1;
    Color$w.prototype.hsl = function() {
      return rgb2hsl$1(this._rgb);
    };
    chroma$d.hsl = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$w, [null].concat(args, ["hsl"])))();
    };
    input$9.format.hsl = hsl2rgb_1;
    input$9.autodetect.push({
      p: 2,
      test: function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$l(args, "hsl");
        if (type$g(args) === "array" && args.length === 3) {
          return "hsl";
        }
      }
    });
    var unpack$k = utils2.unpack;
    var min$1 = Math.min;
    var max$1 = Math.max;
    var rgb2hsl = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      args = unpack$k(args, "rgb");
      var r = args[0];
      var g = args[1];
      var b = args[2];
      var min_ = min$1(r, g, b);
      var max_ = max$1(r, g, b);
      var delta = max_ - min_;
      var h2, s, v;
      v = max_ / 255;
      if (max_ === 0) {
        h2 = Number.NaN;
        s = 0;
      } else {
        s = delta / max_;
        if (r === max_) {
          h2 = (g - b) / delta;
        }
        if (g === max_) {
          h2 = 2 + (b - r) / delta;
        }
        if (b === max_) {
          h2 = 4 + (r - g) / delta;
        }
        h2 *= 60;
        if (h2 < 0) {
          h2 += 360;
        }
      }
      return [h2, s, v];
    };
    var rgb2hsv$1 = rgb2hsl;
    var unpack$j = utils2.unpack;
    var floor$2 = Math.floor;
    var hsv2rgb = function() {
      var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      args = unpack$j(args, "hsv");
      var h2 = args[0];
      var s = args[1];
      var v = args[2];
      var r, g, b;
      v *= 255;
      if (s === 0) {
        r = g = b = v;
      } else {
        if (h2 === 360) {
          h2 = 0;
        }
        if (h2 > 360) {
          h2 -= 360;
        }
        if (h2 < 0) {
          h2 += 360;
        }
        h2 /= 60;
        var i2 = floor$2(h2);
        var f = h2 - i2;
        var p = v * (1 - s);
        var q = v * (1 - s * f);
        var t = v * (1 - s * (1 - f));
        switch (i2) {
          case 0:
            assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2];
            break;
          case 1:
            assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2];
            break;
          case 2:
            assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2];
            break;
          case 3:
            assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2];
            break;
          case 4:
            assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2];
            break;
          case 5:
            assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2];
            break;
        }
      }
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
    var hsv2rgb_1 = hsv2rgb;
    var unpack$i = utils2.unpack;
    var type$f = utils2.type;
    var chroma$c = chroma_1;
    var Color$v = Color_1;
    var input$8 = input$h;
    var rgb2hsv = rgb2hsv$1;
    Color$v.prototype.hsv = function() {
      return rgb2hsv(this._rgb);
    };
    chroma$c.hsv = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$v, [null].concat(args, ["hsv"])))();
    };
    input$8.format.hsv = hsv2rgb_1;
    input$8.autodetect.push({
      p: 2,
      test: function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$i(args, "hsv");
        if (type$f(args) === "array" && args.length === 3) {
          return "hsv";
        }
      }
    });
    var labConstants = {
      Kn: 18,
      Xn: 0.95047,
      Yn: 1,
      Zn: 1.08883,
      t0: 0.137931034,
      t1: 0.206896552,
      t2: 0.12841855,
      t3: 8856452e-9
    };
    var LAB_CONSTANTS$3 = labConstants;
    var unpack$h = utils2.unpack;
    var pow$a = Math.pow;
    var rgb2lab$2 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var ref2 = unpack$h(args, "rgb");
      var r = ref2[0];
      var g = ref2[1];
      var b = ref2[2];
      var ref$1 = rgb2xyz(r, g, b);
      var x = ref$1[0];
      var y = ref$1[1];
      var z = ref$1[2];
      var l = 116 * y - 16;
      return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
    };
    var rgb_xyz = function(r) {
      if ((r /= 255) <= 0.04045) {
        return r / 12.92;
      }
      return pow$a((r + 0.055) / 1.055, 2.4);
    };
    var xyz_lab = function(t) {
      if (t > LAB_CONSTANTS$3.t3) {
        return pow$a(t, 1 / 3);
      }
      return t / LAB_CONSTANTS$3.t2 + LAB_CONSTANTS$3.t0;
    };
    var rgb2xyz = function(r, g, b) {
      r = rgb_xyz(r);
      g = rgb_xyz(g);
      b = rgb_xyz(b);
      var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS$3.Xn);
      var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.072175 * b) / LAB_CONSTANTS$3.Yn);
      var z = xyz_lab((0.0193339 * r + 0.119192 * g + 0.9503041 * b) / LAB_CONSTANTS$3.Zn);
      return [x, y, z];
    };
    var rgb2lab_1 = rgb2lab$2;
    var LAB_CONSTANTS$2 = labConstants;
    var unpack$g = utils2.unpack;
    var pow$9 = Math.pow;
    var lab2rgb$1 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      args = unpack$g(args, "lab");
      var l = args[0];
      var a = args[1];
      var b = args[2];
      var x, y, z, r, g, b_;
      y = (l + 16) / 116;
      x = isNaN(a) ? y : y + a / 500;
      z = isNaN(b) ? y : y - b / 200;
      y = LAB_CONSTANTS$2.Yn * lab_xyz(y);
      x = LAB_CONSTANTS$2.Xn * lab_xyz(x);
      z = LAB_CONSTANTS$2.Zn * lab_xyz(z);
      r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
      g = xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z);
      b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
      return [r, g, b_, args.length > 3 ? args[3] : 1];
    };
    var xyz_rgb = function(r) {
      return 255 * (r <= 304e-5 ? 12.92 * r : 1.055 * pow$9(r, 1 / 2.4) - 0.055);
    };
    var lab_xyz = function(t) {
      return t > LAB_CONSTANTS$2.t1 ? t * t * t : LAB_CONSTANTS$2.t2 * (t - LAB_CONSTANTS$2.t0);
    };
    var lab2rgb_1 = lab2rgb$1;
    var unpack$f = utils2.unpack;
    var type$e = utils2.type;
    var chroma$b = chroma_1;
    var Color$u = Color_1;
    var input$7 = input$h;
    var rgb2lab$1 = rgb2lab_1;
    Color$u.prototype.lab = function() {
      return rgb2lab$1(this._rgb);
    };
    chroma$b.lab = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$u, [null].concat(args, ["lab"])))();
    };
    input$7.format.lab = lab2rgb_1;
    input$7.autodetect.push({
      p: 2,
      test: function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$f(args, "lab");
        if (type$e(args) === "array" && args.length === 3) {
          return "lab";
        }
      }
    });
    var unpack$e = utils2.unpack;
    var RAD2DEG = utils2.RAD2DEG;
    var sqrt$3 = Math.sqrt;
    var atan2$2 = Math.atan2;
    var round$2 = Math.round;
    var lab2lch$2 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var ref2 = unpack$e(args, "lab");
      var l = ref2[0];
      var a = ref2[1];
      var b = ref2[2];
      var c = sqrt$3(a * a + b * b);
      var h2 = (atan2$2(b, a) * RAD2DEG + 360) % 360;
      if (round$2(c * 1e4) === 0) {
        h2 = Number.NaN;
      }
      return [l, c, h2];
    };
    var lab2lch_1 = lab2lch$2;
    var unpack$d = utils2.unpack;
    var rgb2lab = rgb2lab_1;
    var lab2lch$1 = lab2lch_1;
    var rgb2lch$1 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var ref2 = unpack$d(args, "rgb");
      var r = ref2[0];
      var g = ref2[1];
      var b = ref2[2];
      var ref$1 = rgb2lab(r, g, b);
      var l = ref$1[0];
      var a = ref$1[1];
      var b_ = ref$1[2];
      return lab2lch$1(l, a, b_);
    };
    var rgb2lch_1 = rgb2lch$1;
    var unpack$c = utils2.unpack;
    var DEG2RAD = utils2.DEG2RAD;
    var sin$3 = Math.sin;
    var cos$3 = Math.cos;
    var lch2lab$2 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var ref2 = unpack$c(args, "lch");
      var l = ref2[0];
      var c = ref2[1];
      var h2 = ref2[2];
      if (isNaN(h2)) {
        h2 = 0;
      }
      h2 = h2 * DEG2RAD;
      return [l, cos$3(h2) * c, sin$3(h2) * c];
    };
    var lch2lab_1 = lch2lab$2;
    var unpack$b = utils2.unpack;
    var lch2lab$1 = lch2lab_1;
    var lab2rgb = lab2rgb_1;
    var lch2rgb$1 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      args = unpack$b(args, "lch");
      var l = args[0];
      var c = args[1];
      var h2 = args[2];
      var ref2 = lch2lab$1(l, c, h2);
      var L = ref2[0];
      var a = ref2[1];
      var b_ = ref2[2];
      var ref$1 = lab2rgb(L, a, b_);
      var r = ref$1[0];
      var g = ref$1[1];
      var b = ref$1[2];
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
    var lch2rgb_1 = lch2rgb$1;
    var unpack$a = utils2.unpack;
    var lch2rgb = lch2rgb_1;
    var hcl2rgb = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var hcl = unpack$a(args, "hcl").reverse();
      return lch2rgb.apply(void 0, hcl);
    };
    var hcl2rgb_1 = hcl2rgb;
    var unpack$9 = utils2.unpack;
    var type$d = utils2.type;
    var chroma$a = chroma_1;
    var Color$t = Color_1;
    var input$6 = input$h;
    var rgb2lch = rgb2lch_1;
    Color$t.prototype.lch = function() {
      return rgb2lch(this._rgb);
    };
    Color$t.prototype.hcl = function() {
      return rgb2lch(this._rgb).reverse();
    };
    chroma$a.lch = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$t, [null].concat(args, ["lch"])))();
    };
    chroma$a.hcl = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$t, [null].concat(args, ["hcl"])))();
    };
    input$6.format.lch = lch2rgb_1;
    input$6.format.hcl = hcl2rgb_1;
    ["lch", "hcl"].forEach(function(m) {
      return input$6.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$9(args, m);
          if (type$d(args) === "array" && args.length === 3) {
            return m;
          }
        }
      });
    });
    var w3cx11$1 = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    };
    var w3cx11_1 = w3cx11$1;
    var Color$s = Color_1;
    var input$5 = input$h;
    var type$c = utils2.type;
    var w3cx11 = w3cx11_1;
    var hex2rgb = hex2rgb_1;
    var rgb2hex = rgb2hex_1;
    Color$s.prototype.name = function() {
      var hex = rgb2hex(this._rgb, "rgb");
      for (var i2 = 0, list2 = Object.keys(w3cx11); i2 < list2.length; i2 += 1) {
        var n = list2[i2];
        if (w3cx11[n] === hex) {
          return n.toLowerCase();
        }
      }
      return hex;
    };
    input$5.format.named = function(name2) {
      name2 = name2.toLowerCase();
      if (w3cx11[name2]) {
        return hex2rgb(w3cx11[name2]);
      }
      throw new Error("unknown color name: " + name2);
    };
    input$5.autodetect.push({
      p: 5,
      test: function(h2) {
        var rest = [], len = arguments.length - 1;
        while (len-- > 0)
          rest[len] = arguments[len + 1];
        if (!rest.length && type$c(h2) === "string" && w3cx11[h2.toLowerCase()]) {
          return "named";
        }
      }
    });
    var unpack$8 = utils2.unpack;
    var rgb2num$1 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var ref2 = unpack$8(args, "rgb");
      var r = ref2[0];
      var g = ref2[1];
      var b = ref2[2];
      return (r << 16) + (g << 8) + b;
    };
    var rgb2num_1 = rgb2num$1;
    var type$b = utils2.type;
    var num2rgb = function(num2) {
      if (type$b(num2) == "number" && num2 >= 0 && num2 <= 16777215) {
        var r = num2 >> 16;
        var g = num2 >> 8 & 255;
        var b = num2 & 255;
        return [r, g, b, 1];
      }
      throw new Error("unknown num color: " + num2);
    };
    var num2rgb_1 = num2rgb;
    var chroma$9 = chroma_1;
    var Color$r = Color_1;
    var input$4 = input$h;
    var type$a = utils2.type;
    var rgb2num = rgb2num_1;
    Color$r.prototype.num = function() {
      return rgb2num(this._rgb);
    };
    chroma$9.num = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$r, [null].concat(args, ["num"])))();
    };
    input$4.format.num = num2rgb_1;
    input$4.autodetect.push({
      p: 5,
      test: function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        if (args.length === 1 && type$a(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
          return "num";
        }
      }
    });
    var chroma$8 = chroma_1;
    var Color$q = Color_1;
    var input$3 = input$h;
    var unpack$7 = utils2.unpack;
    var type$9 = utils2.type;
    var round$1 = Math.round;
    Color$q.prototype.rgb = function(rnd2) {
      if (rnd2 === void 0)
        rnd2 = true;
      if (rnd2 === false) {
        return this._rgb.slice(0, 3);
      }
      return this._rgb.slice(0, 3).map(round$1);
    };
    Color$q.prototype.rgba = function(rnd2) {
      if (rnd2 === void 0)
        rnd2 = true;
      return this._rgb.slice(0, 4).map(function(v, i2) {
        return i2 < 3 ? rnd2 === false ? v : round$1(v) : v;
      });
    };
    chroma$8.rgb = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$q, [null].concat(args, ["rgb"])))();
    };
    input$3.format.rgb = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var rgba = unpack$7(args, "rgba");
      if (rgba[3] === void 0) {
        rgba[3] = 1;
      }
      return rgba;
    };
    input$3.autodetect.push({
      p: 3,
      test: function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$7(args, "rgba");
        if (type$9(args) === "array" && (args.length === 3 || args.length === 4 && type$9(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
          return "rgb";
        }
      }
    });
    var log$1 = Math.log;
    var temperature2rgb$1 = function(kelvin) {
      var temp = kelvin / 100;
      var r, g, b;
      if (temp < 66) {
        r = 255;
        g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log$1(g);
        b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log$1(b);
      } else {
        r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log$1(r);
        g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log$1(g);
        b = 255;
      }
      return [r, g, b, 1];
    };
    var temperature2rgb_1 = temperature2rgb$1;
    var temperature2rgb = temperature2rgb_1;
    var unpack$6 = utils2.unpack;
    var round = Math.round;
    var rgb2temperature$1 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var rgb2 = unpack$6(args, "rgb");
      var r = rgb2[0], b = rgb2[2];
      var minTemp = 1e3;
      var maxTemp = 4e4;
      var eps = 0.4;
      var temp;
      while (maxTemp - minTemp > eps) {
        temp = (maxTemp + minTemp) * 0.5;
        var rgb$1 = temperature2rgb(temp);
        if (rgb$1[2] / rgb$1[0] >= b / r) {
          maxTemp = temp;
        } else {
          minTemp = temp;
        }
      }
      return round(temp);
    };
    var rgb2temperature_1 = rgb2temperature$1;
    var chroma$7 = chroma_1;
    var Color$p = Color_1;
    var input$2 = input$h;
    var rgb2temperature = rgb2temperature_1;
    Color$p.prototype.temp = Color$p.prototype.kelvin = Color$p.prototype.temperature = function() {
      return rgb2temperature(this._rgb);
    };
    chroma$7.temp = chroma$7.kelvin = chroma$7.temperature = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$p, [null].concat(args, ["temp"])))();
    };
    input$2.format.temp = input$2.format.kelvin = input$2.format.temperature = temperature2rgb_1;
    var unpack$5 = utils2.unpack;
    var cbrt = Math.cbrt;
    var pow$8 = Math.pow;
    var sign$1 = Math.sign;
    var rgb2oklab$2 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var ref2 = unpack$5(args, "rgb");
      var r = ref2[0];
      var g = ref2[1];
      var b = ref2[2];
      var ref$1 = [rgb2lrgb(r / 255), rgb2lrgb(g / 255), rgb2lrgb(b / 255)];
      var lr = ref$1[0];
      var lg = ref$1[1];
      var lb = ref$1[2];
      var l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
      var m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
      var s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
      return [
        0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
        1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
        0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
      ];
    };
    var rgb2oklab_1 = rgb2oklab$2;
    function rgb2lrgb(c) {
      var abs2 = Math.abs(c);
      if (abs2 < 0.04045) {
        return c / 12.92;
      }
      return (sign$1(c) || 1) * pow$8((abs2 + 0.055) / 1.055, 2.4);
    }
    var unpack$4 = utils2.unpack;
    var pow$7 = Math.pow;
    var sign = Math.sign;
    var oklab2rgb$1 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      args = unpack$4(args, "lab");
      var L = args[0];
      var a = args[1];
      var b = args[2];
      var l = pow$7(L + 0.3963377774 * a + 0.2158037573 * b, 3);
      var m = pow$7(L - 0.1055613458 * a - 0.0638541728 * b, 3);
      var s = pow$7(L - 0.0894841775 * a - 1.291485548 * b, 3);
      return [
        255 * lrgb2rgb(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
        255 * lrgb2rgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
        255 * lrgb2rgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
        args.length > 3 ? args[3] : 1
      ];
    };
    var oklab2rgb_1 = oklab2rgb$1;
    function lrgb2rgb(c) {
      var abs2 = Math.abs(c);
      if (abs2 > 31308e-7) {
        return (sign(c) || 1) * (1.055 * pow$7(abs2, 1 / 2.4) - 0.055);
      }
      return c * 12.92;
    }
    var unpack$3 = utils2.unpack;
    var type$8 = utils2.type;
    var chroma$6 = chroma_1;
    var Color$o = Color_1;
    var input$1 = input$h;
    var rgb2oklab$1 = rgb2oklab_1;
    Color$o.prototype.oklab = function() {
      return rgb2oklab$1(this._rgb);
    };
    chroma$6.oklab = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$o, [null].concat(args, ["oklab"])))();
    };
    input$1.format.oklab = oklab2rgb_1;
    input$1.autodetect.push({
      p: 3,
      test: function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$3(args, "oklab");
        if (type$8(args) === "array" && args.length === 3) {
          return "oklab";
        }
      }
    });
    var unpack$2 = utils2.unpack;
    var rgb2oklab = rgb2oklab_1;
    var lab2lch = lab2lch_1;
    var rgb2oklch$1 = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var ref2 = unpack$2(args, "rgb");
      var r = ref2[0];
      var g = ref2[1];
      var b = ref2[2];
      var ref$1 = rgb2oklab(r, g, b);
      var l = ref$1[0];
      var a = ref$1[1];
      var b_ = ref$1[2];
      return lab2lch(l, a, b_);
    };
    var rgb2oklch_1 = rgb2oklch$1;
    var unpack$1 = utils2.unpack;
    var lch2lab = lch2lab_1;
    var oklab2rgb = oklab2rgb_1;
    var oklch2rgb = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      args = unpack$1(args, "lch");
      var l = args[0];
      var c = args[1];
      var h2 = args[2];
      var ref2 = lch2lab(l, c, h2);
      var L = ref2[0];
      var a = ref2[1];
      var b_ = ref2[2];
      var ref$1 = oklab2rgb(L, a, b_);
      var r = ref$1[0];
      var g = ref$1[1];
      var b = ref$1[2];
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };
    var oklch2rgb_1 = oklch2rgb;
    var unpack = utils2.unpack;
    var type$7 = utils2.type;
    var chroma$5 = chroma_1;
    var Color$n = Color_1;
    var input = input$h;
    var rgb2oklch = rgb2oklch_1;
    Color$n.prototype.oklch = function() {
      return rgb2oklch(this._rgb);
    };
    chroma$5.oklch = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      return new (Function.prototype.bind.apply(Color$n, [null].concat(args, ["oklch"])))();
    };
    input.format.oklch = oklch2rgb_1;
    input.autodetect.push({
      p: 3,
      test: function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack(args, "oklch");
        if (type$7(args) === "array" && args.length === 3) {
          return "oklch";
        }
      }
    });
    var Color$m = Color_1;
    var type$6 = utils2.type;
    Color$m.prototype.alpha = function(a, mutate) {
      if (mutate === void 0)
        mutate = false;
      if (a !== void 0 && type$6(a) === "number") {
        if (mutate) {
          this._rgb[3] = a;
          return this;
        }
        return new Color$m([this._rgb[0], this._rgb[1], this._rgb[2], a], "rgb");
      }
      return this._rgb[3];
    };
    var Color$l = Color_1;
    Color$l.prototype.clipped = function() {
      return this._rgb._clipped || false;
    };
    var Color$k = Color_1;
    var LAB_CONSTANTS$1 = labConstants;
    Color$k.prototype.darken = function(amount) {
      if (amount === void 0)
        amount = 1;
      var me = this;
      var lab2 = me.lab();
      lab2[0] -= LAB_CONSTANTS$1.Kn * amount;
      return new Color$k(lab2, "lab").alpha(me.alpha(), true);
    };
    Color$k.prototype.brighten = function(amount) {
      if (amount === void 0)
        amount = 1;
      return this.darken(-amount);
    };
    Color$k.prototype.darker = Color$k.prototype.darken;
    Color$k.prototype.brighter = Color$k.prototype.brighten;
    var Color$j = Color_1;
    Color$j.prototype.get = function(mc) {
      var ref2 = mc.split(".");
      var mode = ref2[0];
      var channel = ref2[1];
      var src = this[mode]();
      if (channel) {
        var i2 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
        if (i2 > -1) {
          return src[i2];
        }
        throw new Error("unknown channel " + channel + " in mode " + mode);
      } else {
        return src;
      }
    };
    var Color$i = Color_1;
    var type$5 = utils2.type;
    var pow$6 = Math.pow;
    var EPS = 1e-7;
    var MAX_ITER = 20;
    Color$i.prototype.luminance = function(lum) {
      if (lum !== void 0 && type$5(lum) === "number") {
        if (lum === 0) {
          return new Color$i([0, 0, 0, this._rgb[3]], "rgb");
        }
        if (lum === 1) {
          return new Color$i([255, 255, 255, this._rgb[3]], "rgb");
        }
        var cur_lum = this.luminance();
        var mode = "rgb";
        var max_iter = MAX_ITER;
        var test = function(low, high) {
          var mid = low.interpolate(high, 0.5, mode);
          var lm = mid.luminance();
          if (Math.abs(lum - lm) < EPS || !max_iter--) {
            return mid;
          }
          return lm > lum ? test(low, mid) : test(mid, high);
        };
        var rgb2 = (cur_lum > lum ? test(new Color$i([0, 0, 0]), this) : test(this, new Color$i([255, 255, 255]))).rgb();
        return new Color$i(rgb2.concat([this._rgb[3]]));
      }
      return rgb2luminance.apply(void 0, this._rgb.slice(0, 3));
    };
    var rgb2luminance = function(r, g, b) {
      r = luminance_x(r);
      g = luminance_x(g);
      b = luminance_x(b);
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    var luminance_x = function(x) {
      x /= 255;
      return x <= 0.03928 ? x / 12.92 : pow$6((x + 0.055) / 1.055, 2.4);
    };
    var interpolator$1 = {};
    var Color$h = Color_1;
    var type$4 = utils2.type;
    var interpolator = interpolator$1;
    var mix$1 = function(col1, col2, f) {
      if (f === void 0)
        f = 0.5;
      var rest = [], len = arguments.length - 3;
      while (len-- > 0)
        rest[len] = arguments[len + 3];
      var mode = rest[0] || "lrgb";
      if (!interpolator[mode] && !rest.length) {
        mode = Object.keys(interpolator)[0];
      }
      if (!interpolator[mode]) {
        throw new Error("interpolation mode " + mode + " is not defined");
      }
      if (type$4(col1) !== "object") {
        col1 = new Color$h(col1);
      }
      if (type$4(col2) !== "object") {
        col2 = new Color$h(col2);
      }
      return interpolator[mode](col1, col2, f).alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
    };
    var Color$g = Color_1;
    var mix = mix$1;
    Color$g.prototype.mix = Color$g.prototype.interpolate = function(col2, f) {
      if (f === void 0)
        f = 0.5;
      var rest = [], len = arguments.length - 2;
      while (len-- > 0)
        rest[len] = arguments[len + 2];
      return mix.apply(void 0, [this, col2, f].concat(rest));
    };
    var Color$f = Color_1;
    Color$f.prototype.premultiply = function(mutate) {
      if (mutate === void 0)
        mutate = false;
      var rgb2 = this._rgb;
      var a = rgb2[3];
      if (mutate) {
        this._rgb = [rgb2[0] * a, rgb2[1] * a, rgb2[2] * a, a];
        return this;
      } else {
        return new Color$f([rgb2[0] * a, rgb2[1] * a, rgb2[2] * a, a], "rgb");
      }
    };
    var Color$e = Color_1;
    var LAB_CONSTANTS = labConstants;
    Color$e.prototype.saturate = function(amount) {
      if (amount === void 0)
        amount = 1;
      var me = this;
      var lch2 = me.lch();
      lch2[1] += LAB_CONSTANTS.Kn * amount;
      if (lch2[1] < 0) {
        lch2[1] = 0;
      }
      return new Color$e(lch2, "lch").alpha(me.alpha(), true);
    };
    Color$e.prototype.desaturate = function(amount) {
      if (amount === void 0)
        amount = 1;
      return this.saturate(-amount);
    };
    var Color$d = Color_1;
    var type$3 = utils2.type;
    Color$d.prototype.set = function(mc, value, mutate) {
      if (mutate === void 0)
        mutate = false;
      var ref2 = mc.split(".");
      var mode = ref2[0];
      var channel = ref2[1];
      var src = this[mode]();
      if (channel) {
        var i2 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
        if (i2 > -1) {
          if (type$3(value) == "string") {
            switch (value.charAt(0)) {
              case "+":
                src[i2] += +value;
                break;
              case "-":
                src[i2] += +value;
                break;
              case "*":
                src[i2] *= +value.substr(1);
                break;
              case "/":
                src[i2] /= +value.substr(1);
                break;
              default:
                src[i2] = +value;
            }
          } else if (type$3(value) === "number") {
            src[i2] = value;
          } else {
            throw new Error("unsupported value for Color.set");
          }
          var out = new Color$d(src, mode);
          if (mutate) {
            this._rgb = out._rgb;
            return this;
          }
          return out;
        }
        throw new Error("unknown channel " + channel + " in mode " + mode);
      } else {
        return src;
      }
    };
    var Color$c = Color_1;
    var rgb = function(col1, col2, f) {
      var xyz0 = col1._rgb;
      var xyz1 = col2._rgb;
      return new Color$c(
        xyz0[0] + f * (xyz1[0] - xyz0[0]),
        xyz0[1] + f * (xyz1[1] - xyz0[1]),
        xyz0[2] + f * (xyz1[2] - xyz0[2]),
        "rgb"
      );
    };
    interpolator$1.rgb = rgb;
    var Color$b = Color_1;
    var sqrt$2 = Math.sqrt;
    var pow$5 = Math.pow;
    var lrgb = function(col1, col2, f) {
      var ref2 = col1._rgb;
      var x1 = ref2[0];
      var y1 = ref2[1];
      var z1 = ref2[2];
      var ref$1 = col2._rgb;
      var x2 = ref$1[0];
      var y2 = ref$1[1];
      var z2 = ref$1[2];
      return new Color$b(
        sqrt$2(pow$5(x1, 2) * (1 - f) + pow$5(x2, 2) * f),
        sqrt$2(pow$5(y1, 2) * (1 - f) + pow$5(y2, 2) * f),
        sqrt$2(pow$5(z1, 2) * (1 - f) + pow$5(z2, 2) * f),
        "rgb"
      );
    };
    interpolator$1.lrgb = lrgb;
    var Color$a = Color_1;
    var lab = function(col1, col2, f) {
      var xyz0 = col1.lab();
      var xyz1 = col2.lab();
      return new Color$a(
        xyz0[0] + f * (xyz1[0] - xyz0[0]),
        xyz0[1] + f * (xyz1[1] - xyz0[1]),
        xyz0[2] + f * (xyz1[2] - xyz0[2]),
        "lab"
      );
    };
    interpolator$1.lab = lab;
    var Color$9 = Color_1;
    var _hsx = function(col1, col2, f, m) {
      var assign, assign$1;
      var xyz0, xyz1;
      if (m === "hsl") {
        xyz0 = col1.hsl();
        xyz1 = col2.hsl();
      } else if (m === "hsv") {
        xyz0 = col1.hsv();
        xyz1 = col2.hsv();
      } else if (m === "hcg") {
        xyz0 = col1.hcg();
        xyz1 = col2.hcg();
      } else if (m === "hsi") {
        xyz0 = col1.hsi();
        xyz1 = col2.hsi();
      } else if (m === "lch" || m === "hcl") {
        m = "hcl";
        xyz0 = col1.hcl();
        xyz1 = col2.hcl();
      } else if (m === "oklch") {
        xyz0 = col1.oklch().reverse();
        xyz1 = col2.oklch().reverse();
      }
      var hue0, hue1, sat0, sat1, lbv0, lbv1;
      if (m.substr(0, 1) === "h" || m === "oklch") {
        assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2];
        assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2];
      }
      var sat, hue, lbv, dh;
      if (!isNaN(hue0) && !isNaN(hue1)) {
        if (hue1 > hue0 && hue1 - hue0 > 180) {
          dh = hue1 - (hue0 + 360);
        } else if (hue1 < hue0 && hue0 - hue1 > 180) {
          dh = hue1 + 360 - hue0;
        } else {
          dh = hue1 - hue0;
        }
        hue = hue0 + f * dh;
      } else if (!isNaN(hue0)) {
        hue = hue0;
        if ((lbv1 == 1 || lbv1 == 0) && m != "hsv") {
          sat = sat0;
        }
      } else if (!isNaN(hue1)) {
        hue = hue1;
        if ((lbv0 == 1 || lbv0 == 0) && m != "hsv") {
          sat = sat1;
        }
      } else {
        hue = Number.NaN;
      }
      if (sat === void 0) {
        sat = sat0 + f * (sat1 - sat0);
      }
      lbv = lbv0 + f * (lbv1 - lbv0);
      return m === "oklch" ? new Color$9([lbv, sat, hue], m) : new Color$9([hue, sat, lbv], m);
    };
    var interpolate_hsx$5 = _hsx;
    var lch = function(col1, col2, f) {
      return interpolate_hsx$5(col1, col2, f, "lch");
    };
    interpolator$1.lch = lch;
    interpolator$1.hcl = lch;
    var Color$8 = Color_1;
    var num = function(col1, col2, f) {
      var c1 = col1.num();
      var c2 = col2.num();
      return new Color$8(c1 + f * (c2 - c1), "num");
    };
    interpolator$1.num = num;
    var interpolate_hsx$4 = _hsx;
    var hcg = function(col1, col2, f) {
      return interpolate_hsx$4(col1, col2, f, "hcg");
    };
    interpolator$1.hcg = hcg;
    var interpolate_hsx$3 = _hsx;
    var hsi = function(col1, col2, f) {
      return interpolate_hsx$3(col1, col2, f, "hsi");
    };
    interpolator$1.hsi = hsi;
    var interpolate_hsx$2 = _hsx;
    var hsl = function(col1, col2, f) {
      return interpolate_hsx$2(col1, col2, f, "hsl");
    };
    interpolator$1.hsl = hsl;
    var interpolate_hsx$1 = _hsx;
    var hsv = function(col1, col2, f) {
      return interpolate_hsx$1(col1, col2, f, "hsv");
    };
    interpolator$1.hsv = hsv;
    var Color$7 = Color_1;
    var oklab = function(col1, col2, f) {
      var xyz0 = col1.oklab();
      var xyz1 = col2.oklab();
      return new Color$7(
        xyz0[0] + f * (xyz1[0] - xyz0[0]),
        xyz0[1] + f * (xyz1[1] - xyz0[1]),
        xyz0[2] + f * (xyz1[2] - xyz0[2]),
        "oklab"
      );
    };
    interpolator$1.oklab = oklab;
    var interpolate_hsx = _hsx;
    var oklch = function(col1, col2, f) {
      return interpolate_hsx(col1, col2, f, "oklch");
    };
    interpolator$1.oklch = oklch;
    var Color$6 = Color_1;
    var clip_rgb$1 = utils2.clip_rgb;
    var pow$4 = Math.pow;
    var sqrt$1 = Math.sqrt;
    var PI$1 = Math.PI;
    var cos$2 = Math.cos;
    var sin$2 = Math.sin;
    var atan2$1 = Math.atan2;
    var average = function(colors, mode, weights) {
      if (mode === void 0)
        mode = "lrgb";
      if (weights === void 0)
        weights = null;
      var l = colors.length;
      if (!weights) {
        weights = Array.from(new Array(l)).map(function() {
          return 1;
        });
      }
      var k = l / weights.reduce(function(a, b) {
        return a + b;
      });
      weights.forEach(function(w, i3) {
        weights[i3] *= k;
      });
      colors = colors.map(function(c) {
        return new Color$6(c);
      });
      if (mode === "lrgb") {
        return _average_lrgb(colors, weights);
      }
      var first = colors.shift();
      var xyz = first.get(mode);
      var cnt = [];
      var dx = 0;
      var dy = 0;
      for (var i2 = 0; i2 < xyz.length; i2++) {
        xyz[i2] = (xyz[i2] || 0) * weights[0];
        cnt.push(isNaN(xyz[i2]) ? 0 : weights[0]);
        if (mode.charAt(i2) === "h" && !isNaN(xyz[i2])) {
          var A = xyz[i2] / 180 * PI$1;
          dx += cos$2(A) * weights[0];
          dy += sin$2(A) * weights[0];
        }
      }
      var alpha = first.alpha() * weights[0];
      colors.forEach(function(c, ci) {
        var xyz2 = c.get(mode);
        alpha += c.alpha() * weights[ci + 1];
        for (var i3 = 0; i3 < xyz.length; i3++) {
          if (!isNaN(xyz2[i3])) {
            cnt[i3] += weights[ci + 1];
            if (mode.charAt(i3) === "h") {
              var A2 = xyz2[i3] / 180 * PI$1;
              dx += cos$2(A2) * weights[ci + 1];
              dy += sin$2(A2) * weights[ci + 1];
            } else {
              xyz[i3] += xyz2[i3] * weights[ci + 1];
            }
          }
        }
      });
      for (var i$12 = 0; i$12 < xyz.length; i$12++) {
        if (mode.charAt(i$12) === "h") {
          var A$1 = atan2$1(dy / cnt[i$12], dx / cnt[i$12]) / PI$1 * 180;
          while (A$1 < 0) {
            A$1 += 360;
          }
          while (A$1 >= 360) {
            A$1 -= 360;
          }
          xyz[i$12] = A$1;
        } else {
          xyz[i$12] = xyz[i$12] / cnt[i$12];
        }
      }
      alpha /= l;
      return new Color$6(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
    };
    var _average_lrgb = function(colors, weights) {
      var l = colors.length;
      var xyz = [0, 0, 0, 0];
      for (var i2 = 0; i2 < colors.length; i2++) {
        var col = colors[i2];
        var f = weights[i2] / l;
        var rgb2 = col._rgb;
        xyz[0] += pow$4(rgb2[0], 2) * f;
        xyz[1] += pow$4(rgb2[1], 2) * f;
        xyz[2] += pow$4(rgb2[2], 2) * f;
        xyz[3] += rgb2[3] * f;
      }
      xyz[0] = sqrt$1(xyz[0]);
      xyz[1] = sqrt$1(xyz[1]);
      xyz[2] = sqrt$1(xyz[2]);
      if (xyz[3] > 0.9999999) {
        xyz[3] = 1;
      }
      return new Color$6(clip_rgb$1(xyz));
    };
    var chroma$4 = chroma_1;
    var type$2 = utils2.type;
    var pow$3 = Math.pow;
    var scale$2 = function(colors) {
      var _mode = "rgb";
      var _nacol = chroma$4("#ccc");
      var _spread = 0;
      var _domain = [0, 1];
      var _pos = [];
      var _padding = [0, 0];
      var _classes = false;
      var _colors = [];
      var _out = false;
      var _min = 0;
      var _max = 1;
      var _correctLightness = false;
      var _colorCache = {};
      var _useCache = true;
      var _gamma = 1;
      var setColors = function(colors2) {
        colors2 = colors2 || ["#fff", "#000"];
        if (colors2 && type$2(colors2) === "string" && chroma$4.brewer && chroma$4.brewer[colors2.toLowerCase()]) {
          colors2 = chroma$4.brewer[colors2.toLowerCase()];
        }
        if (type$2(colors2) === "array") {
          if (colors2.length === 1) {
            colors2 = [colors2[0], colors2[0]];
          }
          colors2 = colors2.slice(0);
          for (var c = 0; c < colors2.length; c++) {
            colors2[c] = chroma$4(colors2[c]);
          }
          _pos.length = 0;
          for (var c$1 = 0; c$1 < colors2.length; c$1++) {
            _pos.push(c$1 / (colors2.length - 1));
          }
        }
        resetCache();
        return _colors = colors2;
      };
      var getClass = function(value) {
        if (_classes != null) {
          var n = _classes.length - 1;
          var i2 = 0;
          while (i2 < n && value >= _classes[i2]) {
            i2++;
          }
          return i2 - 1;
        }
        return 0;
      };
      var tMapLightness = function(t) {
        return t;
      };
      var tMapDomain = function(t) {
        return t;
      };
      var getColor = function(val, bypassMap) {
        var col, t;
        if (bypassMap == null) {
          bypassMap = false;
        }
        if (isNaN(val) || val === null) {
          return _nacol;
        }
        if (!bypassMap) {
          if (_classes && _classes.length > 2) {
            var c = getClass(val);
            t = c / (_classes.length - 2);
          } else if (_max !== _min) {
            t = (val - _min) / (_max - _min);
          } else {
            t = 1;
          }
        } else {
          t = val;
        }
        t = tMapDomain(t);
        if (!bypassMap) {
          t = tMapLightness(t);
        }
        if (_gamma !== 1) {
          t = pow$3(t, _gamma);
        }
        t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
        t = Math.min(1, Math.max(0, t));
        var k = Math.floor(t * 1e4);
        if (_useCache && _colorCache[k]) {
          col = _colorCache[k];
        } else {
          if (type$2(_colors) === "array") {
            for (var i2 = 0; i2 < _pos.length; i2++) {
              var p = _pos[i2];
              if (t <= p) {
                col = _colors[i2];
                break;
              }
              if (t >= p && i2 === _pos.length - 1) {
                col = _colors[i2];
                break;
              }
              if (t > p && t < _pos[i2 + 1]) {
                t = (t - p) / (_pos[i2 + 1] - p);
                col = chroma$4.interpolate(_colors[i2], _colors[i2 + 1], t, _mode);
                break;
              }
            }
          } else if (type$2(_colors) === "function") {
            col = _colors(t);
          }
          if (_useCache) {
            _colorCache[k] = col;
          }
        }
        return col;
      };
      var resetCache = function() {
        return _colorCache = {};
      };
      setColors(colors);
      var f = function(v) {
        var c = chroma$4(getColor(v));
        if (_out && c[_out]) {
          return c[_out]();
        } else {
          return c;
        }
      };
      f.classes = function(classes) {
        if (classes != null) {
          if (type$2(classes) === "array") {
            _classes = classes;
            _domain = [classes[0], classes[classes.length - 1]];
          } else {
            var d = chroma$4.analyze(_domain);
            if (classes === 0) {
              _classes = [d.min, d.max];
            } else {
              _classes = chroma$4.limits(d, "e", classes);
            }
          }
          return f;
        }
        return _classes;
      };
      f.domain = function(domain) {
        if (!arguments.length) {
          return _domain;
        }
        _min = domain[0];
        _max = domain[domain.length - 1];
        _pos = [];
        var k = _colors.length;
        if (domain.length === k && _min !== _max) {
          for (var i2 = 0, list2 = Array.from(domain); i2 < list2.length; i2 += 1) {
            var d = list2[i2];
            _pos.push((d - _min) / (_max - _min));
          }
        } else {
          for (var c = 0; c < k; c++) {
            _pos.push(c / (k - 1));
          }
          if (domain.length > 2) {
            var tOut = domain.map(function(d2, i3) {
              return i3 / (domain.length - 1);
            });
            var tBreaks = domain.map(function(d2) {
              return (d2 - _min) / (_max - _min);
            });
            if (!tBreaks.every(function(val, i3) {
              return tOut[i3] === val;
            })) {
              tMapDomain = function(t) {
                if (t <= 0 || t >= 1) {
                  return t;
                }
                var i3 = 0;
                while (t >= tBreaks[i3 + 1]) {
                  i3++;
                }
                var f2 = (t - tBreaks[i3]) / (tBreaks[i3 + 1] - tBreaks[i3]);
                var out = tOut[i3] + f2 * (tOut[i3 + 1] - tOut[i3]);
                return out;
              };
            }
          }
        }
        _domain = [_min, _max];
        return f;
      };
      f.mode = function(_m) {
        if (!arguments.length) {
          return _mode;
        }
        _mode = _m;
        resetCache();
        return f;
      };
      f.range = function(colors2, _pos2) {
        setColors(colors2);
        return f;
      };
      f.out = function(_o) {
        _out = _o;
        return f;
      };
      f.spread = function(val) {
        if (!arguments.length) {
          return _spread;
        }
        _spread = val;
        return f;
      };
      f.correctLightness = function(v) {
        if (v == null) {
          v = true;
        }
        _correctLightness = v;
        resetCache();
        if (_correctLightness) {
          tMapLightness = function(t) {
            var L0 = getColor(0, true).lab()[0];
            var L1 = getColor(1, true).lab()[0];
            var pol = L0 > L1;
            var L_actual = getColor(t, true).lab()[0];
            var L_ideal = L0 + (L1 - L0) * t;
            var L_diff = L_actual - L_ideal;
            var t0 = 0;
            var t1 = 1;
            var max_iter = 20;
            while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
              (function() {
                if (pol) {
                  L_diff *= -1;
                }
                if (L_diff < 0) {
                  t0 = t;
                  t += (t1 - t) * 0.5;
                } else {
                  t1 = t;
                  t += (t0 - t) * 0.5;
                }
                L_actual = getColor(t, true).lab()[0];
                return L_diff = L_actual - L_ideal;
              })();
            }
            return t;
          };
        } else {
          tMapLightness = function(t) {
            return t;
          };
        }
        return f;
      };
      f.padding = function(p) {
        if (p != null) {
          if (type$2(p) === "number") {
            p = [p, p];
          }
          _padding = p;
          return f;
        } else {
          return _padding;
        }
      };
      f.colors = function(numColors, out) {
        if (arguments.length < 2) {
          out = "hex";
        }
        var result = [];
        if (arguments.length === 0) {
          result = _colors.slice(0);
        } else if (numColors === 1) {
          result = [f(0.5)];
        } else if (numColors > 1) {
          var dm = _domain[0];
          var dd = _domain[1] - dm;
          result = __range__(0, numColors, false).map(function(i3) {
            return f(dm + i3 / (numColors - 1) * dd);
          });
        } else {
          colors = [];
          var samples = [];
          if (_classes && _classes.length > 2) {
            for (var i2 = 1, end = _classes.length, asc = 1 <= end; asc ? i2 < end : i2 > end; asc ? i2++ : i2--) {
              samples.push((_classes[i2 - 1] + _classes[i2]) * 0.5);
            }
          } else {
            samples = _domain;
          }
          result = samples.map(function(v) {
            return f(v);
          });
        }
        if (chroma$4[out]) {
          result = result.map(function(c) {
            return c[out]();
          });
        }
        return result;
      };
      f.cache = function(c) {
        if (c != null) {
          _useCache = c;
          return f;
        } else {
          return _useCache;
        }
      };
      f.gamma = function(g) {
        if (g != null) {
          _gamma = g;
          return f;
        } else {
          return _gamma;
        }
      };
      f.nodata = function(d) {
        if (d != null) {
          _nacol = chroma$4(d);
          return f;
        } else {
          return _nacol;
        }
      };
      return f;
    };
    function __range__(left, right, inclusive) {
      var range = [];
      var ascending = left < right;
      var end = !inclusive ? right : ascending ? right + 1 : right - 1;
      for (var i2 = left; ascending ? i2 < end : i2 > end; ascending ? i2++ : i2--) {
        range.push(i2);
      }
      return range;
    }
    var Color$5 = Color_1;
    var scale$1 = scale$2;
    var binom_row = function(n) {
      var row = [1, 1];
      for (var i2 = 1; i2 < n; i2++) {
        var newrow = [1];
        for (var j = 1; j <= row.length; j++) {
          newrow[j] = (row[j] || 0) + row[j - 1];
        }
        row = newrow;
      }
      return row;
    };
    var bezier = function(colors) {
      var assign, assign$1, assign$2;
      var I, lab0, lab1, lab2;
      colors = colors.map(function(c) {
        return new Color$5(c);
      });
      if (colors.length === 2) {
        assign = colors.map(function(c) {
          return c.lab();
        }), lab0 = assign[0], lab1 = assign[1];
        I = function(t) {
          var lab4 = [0, 1, 2].map(function(i2) {
            return lab0[i2] + t * (lab1[i2] - lab0[i2]);
          });
          return new Color$5(lab4, "lab");
        };
      } else if (colors.length === 3) {
        assign$1 = colors.map(function(c) {
          return c.lab();
        }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2];
        I = function(t) {
          var lab4 = [0, 1, 2].map(function(i2) {
            return (1 - t) * (1 - t) * lab0[i2] + 2 * (1 - t) * t * lab1[i2] + t * t * lab2[i2];
          });
          return new Color$5(lab4, "lab");
        };
      } else if (colors.length === 4) {
        var lab3;
        assign$2 = colors.map(function(c) {
          return c.lab();
        }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3];
        I = function(t) {
          var lab4 = [0, 1, 2].map(function(i2) {
            return (1 - t) * (1 - t) * (1 - t) * lab0[i2] + 3 * (1 - t) * (1 - t) * t * lab1[i2] + 3 * (1 - t) * t * t * lab2[i2] + t * t * t * lab3[i2];
          });
          return new Color$5(lab4, "lab");
        };
      } else if (colors.length >= 5) {
        var labs, row, n;
        labs = colors.map(function(c) {
          return c.lab();
        });
        n = colors.length - 1;
        row = binom_row(n);
        I = function(t) {
          var u = 1 - t;
          var lab4 = [0, 1, 2].map(function(i2) {
            return labs.reduce(function(sum, el, j) {
              return sum + row[j] * Math.pow(u, n - j) * Math.pow(t, j) * el[i2];
            }, 0);
          });
          return new Color$5(lab4, "lab");
        };
      } else {
        throw new RangeError("No point in running bezier with only one color.");
      }
      return I;
    };
    var bezier_1 = function(colors) {
      var f = bezier(colors);
      f.scale = function() {
        return scale$1(f);
      };
      return f;
    };
    var chroma$3 = chroma_1;
    var blend = function(bottom, top, mode) {
      if (!blend[mode]) {
        throw new Error("unknown blend mode " + mode);
      }
      return blend[mode](bottom, top);
    };
    var blend_f = function(f) {
      return function(bottom, top) {
        var c0 = chroma$3(top).rgb();
        var c1 = chroma$3(bottom).rgb();
        return chroma$3.rgb(f(c0, c1));
      };
    };
    var each = function(f) {
      return function(c0, c1) {
        var out = [];
        out[0] = f(c0[0], c1[0]);
        out[1] = f(c0[1], c1[1]);
        out[2] = f(c0[2], c1[2]);
        return out;
      };
    };
    var normal = function(a) {
      return a;
    };
    var multiply = function(a, b) {
      return a * b / 255;
    };
    var darken = function(a, b) {
      return a > b ? b : a;
    };
    var lighten = function(a, b) {
      return a > b ? a : b;
    };
    var screen = function(a, b) {
      return 255 * (1 - (1 - a / 255) * (1 - b / 255));
    };
    var overlay = function(a, b) {
      return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
    };
    var burn = function(a, b) {
      return 255 * (1 - (1 - b / 255) / (a / 255));
    };
    var dodge = function(a, b) {
      if (a === 255) {
        return 255;
      }
      a = 255 * (b / 255) / (1 - a / 255);
      return a > 255 ? 255 : a;
    };
    blend.normal = blend_f(each(normal));
    blend.multiply = blend_f(each(multiply));
    blend.screen = blend_f(each(screen));
    blend.overlay = blend_f(each(overlay));
    blend.darken = blend_f(each(darken));
    blend.lighten = blend_f(each(lighten));
    blend.dodge = blend_f(each(dodge));
    blend.burn = blend_f(each(burn));
    var blend_1 = blend;
    var type$1 = utils2.type;
    var clip_rgb = utils2.clip_rgb;
    var TWOPI = utils2.TWOPI;
    var pow$2 = Math.pow;
    var sin$1 = Math.sin;
    var cos$1 = Math.cos;
    var chroma$2 = chroma_1;
    var cubehelix = function(start, rotations, hue, gamma, lightness) {
      if (start === void 0)
        start = 300;
      if (rotations === void 0)
        rotations = -1.5;
      if (hue === void 0)
        hue = 1;
      if (gamma === void 0)
        gamma = 1;
      if (lightness === void 0)
        lightness = [0, 1];
      var dh = 0, dl;
      if (type$1(lightness) === "array") {
        dl = lightness[1] - lightness[0];
      } else {
        dl = 0;
        lightness = [lightness, lightness];
      }
      var f = function(fract) {
        var a = TWOPI * ((start + 120) / 360 + rotations * fract);
        var l = pow$2(lightness[0] + dl * fract, gamma);
        var h2 = dh !== 0 ? hue[0] + fract * dh : hue;
        var amp = h2 * l * (1 - l) / 2;
        var cos_a = cos$1(a);
        var sin_a = sin$1(a);
        var r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
        var g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
        var b = l + amp * (1.97294 * cos_a);
        return chroma$2(clip_rgb([r * 255, g * 255, b * 255, 1]));
      };
      f.start = function(s) {
        if (s == null) {
          return start;
        }
        start = s;
        return f;
      };
      f.rotations = function(r) {
        if (r == null) {
          return rotations;
        }
        rotations = r;
        return f;
      };
      f.gamma = function(g) {
        if (g == null) {
          return gamma;
        }
        gamma = g;
        return f;
      };
      f.hue = function(h2) {
        if (h2 == null) {
          return hue;
        }
        hue = h2;
        if (type$1(hue) === "array") {
          dh = hue[1] - hue[0];
          if (dh === 0) {
            hue = hue[1];
          }
        } else {
          dh = 0;
        }
        return f;
      };
      f.lightness = function(h2) {
        if (h2 == null) {
          return lightness;
        }
        if (type$1(h2) === "array") {
          lightness = h2;
          dl = h2[1] - h2[0];
        } else {
          lightness = [h2, h2];
          dl = 0;
        }
        return f;
      };
      f.scale = function() {
        return chroma$2.scale(f);
      };
      f.hue(hue);
      return f;
    };
    var Color$4 = Color_1;
    var digits = "0123456789abcdef";
    var floor$1 = Math.floor;
    var random = Math.random;
    var random_1 = function() {
      var code = "#";
      for (var i2 = 0; i2 < 6; i2++) {
        code += digits.charAt(floor$1(random() * 16));
      }
      return new Color$4(code, "hex");
    };
    var type = type$p;
    var log = Math.log;
    var pow$1 = Math.pow;
    var floor = Math.floor;
    var abs$1 = Math.abs;
    var analyze = function(data, key2) {
      if (key2 === void 0)
        key2 = null;
      var r = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      if (type(data) === "object") {
        data = Object.values(data);
      }
      data.forEach(function(val) {
        if (key2 && type(val) === "object") {
          val = val[key2];
        }
        if (val !== void 0 && val !== null && !isNaN(val)) {
          r.values.push(val);
          r.sum += val;
          if (val < r.min) {
            r.min = val;
          }
          if (val > r.max) {
            r.max = val;
          }
          r.count += 1;
        }
      });
      r.domain = [r.min, r.max];
      r.limits = function(mode, num2) {
        return limits(r, mode, num2);
      };
      return r;
    };
    var limits = function(data, mode, num2) {
      if (mode === void 0)
        mode = "equal";
      if (num2 === void 0)
        num2 = 7;
      if (type(data) == "array") {
        data = analyze(data);
      }
      var min2 = data.min;
      var max2 = data.max;
      var values = data.values.sort(function(a, b) {
        return a - b;
      });
      if (num2 === 1) {
        return [min2, max2];
      }
      var limits2 = [];
      if (mode.substr(0, 1) === "c") {
        limits2.push(min2);
        limits2.push(max2);
      }
      if (mode.substr(0, 1) === "e") {
        limits2.push(min2);
        for (var i2 = 1; i2 < num2; i2++) {
          limits2.push(min2 + i2 / num2 * (max2 - min2));
        }
        limits2.push(max2);
      } else if (mode.substr(0, 1) === "l") {
        if (min2 <= 0) {
          throw new Error("Logarithmic scales are only possible for values > 0");
        }
        var min_log = Math.LOG10E * log(min2);
        var max_log = Math.LOG10E * log(max2);
        limits2.push(min2);
        for (var i$12 = 1; i$12 < num2; i$12++) {
          limits2.push(pow$1(10, min_log + i$12 / num2 * (max_log - min_log)));
        }
        limits2.push(max2);
      } else if (mode.substr(0, 1) === "q") {
        limits2.push(min2);
        for (var i$2 = 1; i$2 < num2; i$2++) {
          var p = (values.length - 1) * i$2 / num2;
          var pb = floor(p);
          if (pb === p) {
            limits2.push(values[pb]);
          } else {
            var pr = p - pb;
            limits2.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
          }
        }
        limits2.push(max2);
      } else if (mode.substr(0, 1) === "k") {
        var cluster;
        var n = values.length;
        var assignments = new Array(n);
        var clusterSizes = new Array(num2);
        var repeat = true;
        var nb_iters = 0;
        var centroids = null;
        centroids = [];
        centroids.push(min2);
        for (var i$3 = 1; i$3 < num2; i$3++) {
          centroids.push(min2 + i$3 / num2 * (max2 - min2));
        }
        centroids.push(max2);
        while (repeat) {
          for (var j = 0; j < num2; j++) {
            clusterSizes[j] = 0;
          }
          for (var i$4 = 0; i$4 < n; i$4++) {
            var value = values[i$4];
            var mindist = Number.MAX_VALUE;
            var best = void 0;
            for (var j$1 = 0; j$1 < num2; j$1++) {
              var dist = abs$1(centroids[j$1] - value);
              if (dist < mindist) {
                mindist = dist;
                best = j$1;
              }
              clusterSizes[best]++;
              assignments[i$4] = best;
            }
          }
          var newCentroids = new Array(num2);
          for (var j$2 = 0; j$2 < num2; j$2++) {
            newCentroids[j$2] = null;
          }
          for (var i$5 = 0; i$5 < n; i$5++) {
            cluster = assignments[i$5];
            if (newCentroids[cluster] === null) {
              newCentroids[cluster] = values[i$5];
            } else {
              newCentroids[cluster] += values[i$5];
            }
          }
          for (var j$3 = 0; j$3 < num2; j$3++) {
            newCentroids[j$3] *= 1 / clusterSizes[j$3];
          }
          repeat = false;
          for (var j$4 = 0; j$4 < num2; j$4++) {
            if (newCentroids[j$4] !== centroids[j$4]) {
              repeat = true;
              break;
            }
          }
          centroids = newCentroids;
          nb_iters++;
          if (nb_iters > 200) {
            repeat = false;
          }
        }
        var kClusters = {};
        for (var j$5 = 0; j$5 < num2; j$5++) {
          kClusters[j$5] = [];
        }
        for (var i$6 = 0; i$6 < n; i$6++) {
          cluster = assignments[i$6];
          kClusters[cluster].push(values[i$6]);
        }
        var tmpKMeansBreaks = [];
        for (var j$6 = 0; j$6 < num2; j$6++) {
          tmpKMeansBreaks.push(kClusters[j$6][0]);
          tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length - 1]);
        }
        tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
          return a - b;
        });
        limits2.push(tmpKMeansBreaks[0]);
        for (var i$7 = 1; i$7 < tmpKMeansBreaks.length; i$7 += 2) {
          var v = tmpKMeansBreaks[i$7];
          if (!isNaN(v) && limits2.indexOf(v) === -1) {
            limits2.push(v);
          }
        }
      }
      return limits2;
    };
    var analyze_1 = { analyze, limits };
    var Color$3 = Color_1;
    var contrast = function(a, b) {
      a = new Color$3(a);
      b = new Color$3(b);
      var l1 = a.luminance();
      var l2 = b.luminance();
      return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    };
    var Color$2 = Color_1;
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    var min = Math.min;
    var max = Math.max;
    var atan2 = Math.atan2;
    var abs = Math.abs;
    var cos = Math.cos;
    var sin = Math.sin;
    var exp = Math.exp;
    var PI = Math.PI;
    var deltaE = function(a, b, Kl, Kc, Kh) {
      if (Kl === void 0)
        Kl = 1;
      if (Kc === void 0)
        Kc = 1;
      if (Kh === void 0)
        Kh = 1;
      var rad2deg = function(rad) {
        return 360 * rad / (2 * PI);
      };
      var deg2rad = function(deg) {
        return 2 * PI * deg / 360;
      };
      a = new Color$2(a);
      b = new Color$2(b);
      var ref2 = Array.from(a.lab());
      var L1 = ref2[0];
      var a1 = ref2[1];
      var b1 = ref2[2];
      var ref$1 = Array.from(b.lab());
      var L2 = ref$1[0];
      var a2 = ref$1[1];
      var b2 = ref$1[2];
      var avgL = (L1 + L2) / 2;
      var C1 = sqrt(pow(a1, 2) + pow(b1, 2));
      var C2 = sqrt(pow(a2, 2) + pow(b2, 2));
      var avgC = (C1 + C2) / 2;
      var G = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
      var a1p = a1 * (1 + G);
      var a2p = a2 * (1 + G);
      var C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
      var C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
      var avgCp = (C1p + C2p) / 2;
      var arctan1 = rad2deg(atan2(b1, a1p));
      var arctan2 = rad2deg(atan2(b2, a2p));
      var h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
      var h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
      var avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
      var T = 1 - 0.17 * cos(deg2rad(avgHp - 30)) + 0.24 * cos(deg2rad(2 * avgHp)) + 0.32 * cos(deg2rad(3 * avgHp + 6)) - 0.2 * cos(deg2rad(4 * avgHp - 63));
      var deltaHp = h2p - h1p;
      deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
      deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
      var deltaL = L2 - L1;
      var deltaCp = C2p - C1p;
      var sl = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
      var sc = 1 + 0.045 * avgCp;
      var sh = 1 + 0.015 * avgCp * T;
      var deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
      var Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
      var Rt = -Rc * sin(2 * deg2rad(deltaTheta));
      var result = sqrt(pow(deltaL / (Kl * sl), 2) + pow(deltaCp / (Kc * sc), 2) + pow(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh)));
      return max(0, min(100, result));
    };
    var Color$1 = Color_1;
    var distance = function(a, b, mode) {
      if (mode === void 0)
        mode = "lab";
      a = new Color$1(a);
      b = new Color$1(b);
      var l1 = a.get(mode);
      var l2 = b.get(mode);
      var sum_sq = 0;
      for (var i2 in l1) {
        var d = (l1[i2] || 0) - (l2[i2] || 0);
        sum_sq += d * d;
      }
      return Math.sqrt(sum_sq);
    };
    var Color = Color_1;
    var valid = function() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      try {
        new (Function.prototype.bind.apply(Color, [null].concat(args)))();
        return true;
      } catch (e) {
        return false;
      }
    };
    var chroma$12 = chroma_1;
    var scale2 = scale$2;
    var scales = {
      cool: function cool() {
        return scale2([chroma$12.hsl(180, 1, 0.9), chroma$12.hsl(250, 0.7, 0.4)]);
      },
      hot: function hot() {
        return scale2(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
      }
    };
    var colorbrewer = {
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    };
    for (var i = 0, list = Object.keys(colorbrewer); i < list.length; i += 1) {
      var key = list[i];
      colorbrewer[key.toLowerCase()] = colorbrewer[key];
    }
    var colorbrewer_1 = colorbrewer;
    var chroma2 = chroma_1;
    chroma2.average = average;
    chroma2.bezier = bezier_1;
    chroma2.blend = blend_1;
    chroma2.cubehelix = cubehelix;
    chroma2.mix = chroma2.interpolate = mix$1;
    chroma2.random = random_1;
    chroma2.scale = scale$2;
    chroma2.analyze = analyze_1.analyze;
    chroma2.contrast = contrast;
    chroma2.deltaE = deltaE;
    chroma2.distance = distance;
    chroma2.limits = analyze_1.limits;
    chroma2.valid = valid;
    chroma2.scales = scales;
    chroma2.colors = w3cx11_1;
    chroma2.brewer = colorbrewer_1;
    var chroma_js = chroma2;
    return chroma_js;
  });
})(chroma$1);
const chroma = chroma$1.exports;
const get = (obj, path, defValue = void 0) => {
  if (!path) {
    return void 0;
  }
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);
  const result = (pathArray || []).reduce(
    (prevObj, key) => prevObj && prevObj[key],
    obj
  );
  return result === void 0 ? defValue : result;
};
const createTokensHelper = (theme2 = {}, options = {}) => {
  const defaultHelperOptions = Object.assign(
    {
      key: "attributes.variable",
      onNotFound: false
    },
    options
  );
  const $tokens = (path = void 0, options2) => {
    const $tokensOptions = Object.assign(defaultHelperOptions, options2);
    const { key, onNotFound } = $tokensOptions;
    if (!path) {
      return theme2;
    }
    const token = get(theme2, path);
    if (!token && typeof onNotFound === "function") {
      onNotFound(path, $tokensOptions);
      return;
    }
    return key ? token ? token[key] ? token[key] : get(token, key) : token : token;
  };
  return $tokens;
};
const referencesRegex = new RegExp(
  "\\{([^}]+)\\}",
  "g"
);
const keyRegex = /{(.*)}/g;
const rgbaRegex = /rgb[a?]?\(([^\)]+)(,[^\)]+?)\)/mg;
const calcRegex = /calc\((.*?)\)/mg;
const DARK = "@dark";
const LIGHT = "@light";
const INITIAL = "@initial";
function resolveCssProperty(property, value, style, selectors, ctx, loc) {
  const directive = resolveCustomDirectives(property, value, selectors, ctx, loc);
  if (directive) {
    return directive;
  }
  if (ctx.customProperties[property]) {
    if (typeof ctx.customProperties[property] === "function") {
      return ctx.customProperties[property](value);
    }
    return value ? ctx.customProperties[property] : {};
  }
  value = castValues(property, value, ctx, loc);
  return {
    [property]: value
  };
}
function castValues(property, value, ctx, loc) {
  if (Array.isArray(value) || typeof value === "string" || typeof value === "number") {
    if (Array.isArray(value)) {
      value = value.map((v) => castValue(property, v, ctx, loc)).join(",");
    } else {
      value = castValue(property, value, ctx, loc);
    }
  }
  return value;
}
function castValue(property, value, ctx, loc) {
  if (typeof value === "number") {
    return value;
  }
  if (value.match(/rgb/g)) {
    value = resolveRgbaTokens(property, value, ctx, loc);
  }
  if (value.match(/calc/g)) {
    value = resolveCalcTokens(property, value, ctx, loc);
  }
  if (value.match(referencesRegex)) {
    value = resolveReferences(property, value, ctx, loc);
  }
  if (value === "{}") {
    return "";
  }
  return value;
}
function resolveReferences(_, value, ctx, loc) {
  if (!(typeof value === "string")) {
    return value;
  }
  value = value.replace(
    referencesRegex,
    (...parts) => {
      var _a2, _b2;
      const [, tokenPath] = parts;
      const token = ctx.$tokens(tokenPath, { key: void 0, loc });
      const tokenValue = typeof token === "string" ? token : ((_a2 = token == null ? void 0 : token.attributes) == null ? void 0 : _a2.variable) || (token == null ? void 0 : token.value) || ((_b2 = token == null ? void 0 : token.original) == null ? void 0 : _b2.value);
      if (!tokenValue) {
        return "";
      }
      return tokenValue;
    }
  );
  return value;
}
function resolveRgbaTokens(_, value, ctx, loc) {
  if (!(typeof value === "string")) {
    return value;
  }
  value = value.replace(
    rgbaRegex,
    (...parts) => {
      let newValue = parts[0];
      newValue = newValue.replace(
        referencesRegex,
        (...reference) => {
          const token = ctx.$tokens(reference[1], { key: "original", loc });
          let tokenValue = (token == null ? void 0 : token.value) || token;
          if (!tokenValue) {
            return "0,0,0";
          }
          tokenValue = chroma(tokenValue).rgb();
          return `${tokenValue[0]},${tokenValue[1]},${tokenValue[2]}`;
        }
      );
      return newValue;
    }
  );
  return value;
}
function resolveCalcTokens(_, value, ctx, loc) {
  if (!(typeof value === "string")) {
    return value;
  }
  value = value.replace(
    calcRegex,
    (...parts) => {
      let newValue = parts[0];
      newValue = newValue.replace(
        referencesRegex,
        (...reference) => {
          const token = ctx.$tokens(reference[1], { key: "original", loc });
          return (token == null ? void 0 : token.value) || token;
        }
      );
      return newValue;
    }
  );
  return value;
}
function resolveCustomDirectives(property, value, selectors, ctx, loc) {
  if (property.startsWith("@")) {
    const resolveColorScheme = (scheme) => {
      scheme = ctx.options.colorSchemeMode === "class" ? (selectors == null ? void 0 : selectors[0]) === "html" ? `&.${scheme}` : `:root.${scheme} &` : `@media (prefers-color-scheme: ${scheme})`;
      return {
        [scheme]: value
      };
    };
    if (property === DARK) {
      return resolveColorScheme("dark");
    }
    if (property === LIGHT) {
      return resolveColorScheme("light");
    }
    if (property === INITIAL) {
      let token = ctx.$tokens("media.initial", { key: "value", onNotFound: false, loc });
      if (!token) {
        token = "(min-width: 0px)";
      }
      return {
        [`@media ${token}`]: value
      };
    }
    const mediaQueries = ctx.$tokens("media", { key: void 0, loc });
    if (mediaQueries) {
      const query = property.replace("@", "");
      if (mediaQueries[query]) {
        return {
          [`@media ${mediaQueries[query].value}`]: value
        };
      }
    }
    return {
      [property]: value
    };
  }
}
const comma = /\s*,\s*(?![^()]*\))/;
const getResolvedSelectors = (parentSelectors, nestedSelectors) => parentSelectors.reduce(
  (resolvedSelectors, parentSelector) => {
    resolvedSelectors.push(
      ...nestedSelectors.map(
        (selector) => selector.includes("&") ? selector.replace(
          /&/g,
          /[ +>|~]/.test(parentSelector) && /&.*&/.test(selector) ? `:is(${parentSelector})` : parentSelector
        ) : `${parentSelector} ${selector}`
      )
    );
    return resolvedSelectors;
  },
  []
);
const { prototype: { toString } } = Object;
const stringify = (value, replacer = void 0) => {
  const used = /* @__PURE__ */ new WeakSet();
  const write = (cssText, selectors, conditions, name, data, isAtRuleLike, isRawLike) => {
    for (let i = 0; i < conditions.length; ++i) {
      if (!used.has(conditions[i])) {
        used.add(conditions[i]);
        cssText += `${conditions[i]}{`;
      }
    }
    if (selectors.length && !used.has(selectors)) {
      used.add(selectors);
      cssText += `${selectors}{`;
    }
    if (isRawLike) {
      name = "";
    } else if (isAtRuleLike) {
      name = `${name} `;
    } else {
      name = `${kebabCase(name)}:`;
    }
    cssText += `${name + String(data)}${!isRawLike ? ";" : ""}`;
    return cssText;
  };
  const parse2 = (style, selectors, conditions, prevName, prevData) => {
    let cssText = "";
    if (typeof style === "string" && style.startsWith("$raw\\")) {
      const isAtRuleLike = (prevName || "").charCodeAt(0) === 64;
      cssText = write(cssText, selectors, conditions, prevName, style.replace(/\$raw\\/g, ""), isAtRuleLike, true);
      return cssText;
    }
    for (let name in style) {
      const isAtRuleLike = name.charCodeAt(0) === 64;
      const is$RuleLike = name.charCodeAt(0) === 36;
      for (const data of isAtRuleLike && Array.isArray(style[name]) ? style[name] : [style[name]]) {
        if (replacer && (name !== prevName || data !== prevData)) {
          const next = replacer(name, data, style, selectors);
          if (next !== null) {
            cssText += typeof next === "object" && next ? parse2(next, selectors, conditions, name, data) : next == null ? "" : next;
            continue;
          }
        }
        const isObjectLike = typeof data === "object" && data && data.toString === toString;
        const isRawLike = typeof data === "string" && data.startsWith("$raw\\");
        if (isObjectLike || isRawLike) {
          if (used.has(selectors)) {
            used.delete(selectors);
            cssText += "}";
          }
          const usedName = Object(name);
          let nextSelectors;
          if (isAtRuleLike || is$RuleLike) {
            nextSelectors = selectors;
            if (isAtRuleLike) {
              cssText += parse2(
                data,
                nextSelectors,
                conditions.concat(usedName)
              );
            }
            if (is$RuleLike) {
              name = name.replace("$", "");
            }
          } else {
            nextSelectors = selectors.length ? getResolvedSelectors(selectors, name.split(comma)) : name.split(comma);
            cssText += parse2(
              data,
              nextSelectors,
              conditions
            );
          }
          if (used.has(usedName)) {
            used.delete(usedName);
            cssText += "}";
          }
          if (used.has(nextSelectors)) {
            used.delete(nextSelectors);
            cssText += "}";
          }
        } else {
          cssText = write(cssText, selectors, conditions, name, data, isAtRuleLike, false);
        }
      }
    }
    return cssText;
  };
  return parse2(value, [], []);
};
function isToken(token) {
  return typeof token === "string" && keyRegex.test(token);
}
function scale(type, prop, scales, valueTransform) {
  if (typeof prop === "object") {
    return prop;
  }
  if (typeof prop === "string") {
    const to_ret = {};
    if (isToken(prop)) {
      to_ret.initial = prop;
      return to_ret;
    }
    if (typeof scales === "string") {
      to_ret.initial = `{${type}.${prop}.${scales}}`;
    }
    if (typeof scales === "object") {
      Object.entries(scales).forEach(
        ([mqId, scaleValue]) => {
          if (typeof prop === "string") {
            to_ret[mqId] = `{${type}.${prop}.${scaleValue}}`;
          }
        }
      );
    }
    return valueTransform ? Object.entries(to_ret).reduce(
      (acc, [key, value]) => {
        acc[key] = valueTransform(value);
        return acc;
      },
      {}
    ) : to_ret;
  }
}
const utils = {
  isToken,
  scale
};
function usePinceauStylesheet($tokens, customProperties2, colorSchemeMode, appId) {
  const sheet = ref();
  const declarationToCss = (decl) => stringify(decl, (property, value, style, selectors) => resolveCssProperty(property, value, style, selectors, { $tokens, customProperties: customProperties2, options: { colorSchemeMode } }));
  function resolveStylesheet() {
    if (sheet.value) {
      return sheet.value;
    }
    const global2 = globalThis || window;
    let isHydratable = false;
    let style;
    if (global2 && global2.document) {
      const doc = global2.document;
      style = doc.querySelector(`style#pinceau${appId ? `-${appId}` : ""}`);
      if (!style) {
        const styleTag = doc.createElement("style");
        styleTag.id = `pinceau${appId ? `-${appId}` : ""}`;
        styleTag.type = "text/css";
        style = styleTag;
      }
      if (style.attributes.getNamedItem("data-hydratable")) {
        isHydratable = true;
      }
      doc.head.appendChild(style);
    }
    sheet.value = (style == null ? void 0 : style.sheet) || {
      cssRules: [],
      insertRule(cssText, index = this.cssRules.length) {
        this.cssRules.splice(index, 1, { cssText });
        return index;
      },
      deleteRule(index) {
        delete this.cssRules[index];
      }
    };
    return isHydratable ? hydrateStylesheet() : void 0;
  }
  function hydrateStylesheet() {
    const hydratableRules2 = {};
    const resolveUid = (rule) => {
      const uidRule = rule.cssRules && rule.cssRules.length ? Object.entries(rule == null ? void 0 : rule.cssRules).find(
        ([_, rule2]) => {
          if (rule2.selectorText !== ":--p") {
            return false;
          }
          return true;
        }
      ) : void 0;
      if (!uidRule) {
        return;
      }
      const uidRegex = /--puid:(.*)?-(c|v|p)?/m;
      const [, uid, type] = uidRule[1].cssText.match(uidRegex);
      if (!uid) {
        return;
      }
      return { uid, type };
    };
    for (const _rule of Object.entries(sheet.value.cssRules)) {
      const [, rule] = _rule;
      const uids = resolveUid(rule);
      if (!uids || !uids.uid) {
        continue;
      }
      if (!hydratableRules2[uids.uid]) {
        hydratableRules2[uids.uid] = {};
      }
      hydratableRules2[uids.uid][uids.type] = rule;
    }
    return hydratableRules2;
  }
  function toString2() {
    if (!sheet.value) {
      return "";
    }
    return Object.entries(sheet.value.cssRules).reduce(
      (acc, [, rule]) => {
        acc += `${rule == null ? void 0 : rule.cssText}
` || "";
        return acc;
      },
      ""
    );
  }
  function pushDeclaration(uid, type, declaration, previousRule) {
    if (!Object.keys(declaration).length) {
      return;
    }
    const cssText = declarationToCss({
      "@media": {
        ...declaration,
        ":--p": {
          "--puid": `${uid}-${type}`
        }
      }
    });
    if (!cssText) {
      return;
    }
    if (previousRule) {
      deleteRule(previousRule);
    }
    const ruleId = sheet.value.insertRule(cssText);
    return sheet.value.cssRules[ruleId];
  }
  function deleteRule(rule) {
    const ruleIndex = Object.values(sheet.value.cssRules).indexOf(rule);
    if (typeof ruleIndex === "undefined" || isNaN(ruleIndex)) {
      return;
    }
    try {
      sheet.value.deleteRule(ruleIndex);
    } catch (e) {
    }
  }
  const hydratableRules = resolveStylesheet();
  return {
    declarationToCss,
    pushDeclaration,
    deleteRule,
    sheet,
    toString: toString2,
    hydratableRules
  };
}
function usePinceauRuntimeIds(instance, classes, _) {
  var _a2, _b2, _c;
  let uid;
  const el = (_a2 = instance == null ? void 0 : instance.vnode) == null ? void 0 : _a2.el;
  if (el && el.classList) {
    el.classList.forEach(
      (elClass) => {
        if (uid) {
          return;
        }
        if (elClass.startsWith("pc-")) {
          uid = elClass.split("pc-")[1];
        }
      }
    );
  } else {
    uid = nanoid(6);
  }
  const scopeId = (_c = (_b2 = instance == null ? void 0 : instance.vnode) == null ? void 0 : _b2.type) == null ? void 0 : _c.__scopeId;
  const ids = {
    uid,
    componentId: scopeId ? `[${scopeId}]` : "",
    uniqueClassName: `pc-${uid}`
  };
  classes.value.c = ids.uniqueClassName;
  return computed(() => ids);
}
function usePinceauComputedStyles(ids, computedStyles, sheet) {
  var _a2, _b2;
  let rule = (_b2 = (_a2 = sheet.hydratableRules) == null ? void 0 : _a2[ids.value.uid]) == null ? void 0 : _b2.p;
  watch(
    computedStyles,
    (newComputedStyles) => {
      newComputedStyles = transformComputedStylesToDeclaration(ids.value, newComputedStyles);
      rule = sheet.pushDeclaration(
        ids.value.uid,
        "c",
        newComputedStyles,
        rule
      );
    },
    {
      immediate: !rule,
      deep: true
    }
  );
  onScopeDispose(() => rule && sheet.deleteRule(rule));
}
function transformComputedStylesToDeclaration(ids, computedStyles) {
  const declaration = {};
  const targetId = `.${ids.uniqueClassName}${ids.componentId}`;
  if (computedStyles && Object.keys(computedStyles).length) {
    declaration[targetId] = declaration[targetId] || {};
    for (const [varName, _value] of Object.entries(computedStyles)) {
      const value = unref(_value);
      if (varName === "css") {
        declaration[targetId] = Object.assign(declaration[targetId], value);
        continue;
      }
      if (typeof value === "object") {
        for (const [mqId, mqPropValue] of Object.entries(value)) {
          const _value2 = unref(mqPropValue);
          if (!_value2) {
            continue;
          }
          if (mqId === "initial") {
            if (!declaration[targetId]) {
              declaration[targetId] = {};
            }
            if (!declaration[targetId]) {
              declaration[targetId] = {};
            }
            declaration[targetId][`--${varName}`] = _value2;
          }
          const mediaId = `@${mqId}`;
          if (!declaration[mediaId]) {
            declaration[mediaId] = {};
          }
          if (!declaration[mediaId][targetId]) {
            declaration[mediaId][targetId] = {};
          }
          declaration[mediaId][targetId][`--${kebabCase(varName)}`] = _value2;
        }
      } else {
        const _value2 = unref(value);
        if (_value2) {
          declaration[targetId][`--${kebabCase(varName)}`] = _value2;
        }
      }
    }
  }
  return declaration;
}
const usePinceauVariants = (ids, variants, props, sheet, classes, cache2) => {
  var _a2, _b2;
  let rule = (_b2 = (_a2 = sheet.hydratableRules) == null ? void 0 : _a2[ids.value.uid]) == null ? void 0 : _b2.p;
  const variantsState = computed(() => variants && (variants == null ? void 0 : variants.value) ? resolveVariantsState(ids.value, props.value, variants.value) : {});
  watch(
    variantsState,
    ({ cacheId, variantsProps }) => {
      let variantClass;
      if (cache2[cacheId]) {
        const cachedRule = cache2[cacheId];
        rule = cachedRule.rule;
        variantClass = cachedRule.variantClass;
        cachedRule.count++;
      } else {
        variantClass = `pv-${nanoid(6)}`;
        const transformed = transformVariantsToDeclaration(variantClass, ids.value, variants.value, variantsProps);
        rule = sheet.pushDeclaration(ids.value.uid, "v", transformed);
        cache2[cacheId] = { rule, variantClass, count: 1 };
      }
      classes.value.v = variantClass;
    },
    {
      immediate: true
    }
  );
  onScopeDispose(
    () => {
      const state = variantsState == null ? void 0 : variantsState.value;
      const cachedRule = cache2 == null ? void 0 : cache2[state.cacheId];
      if (cachedRule) {
        cachedRule.count--;
        if (cachedRule.count <= 0) {
          sheet.deleteRule(cachedRule.rule);
          delete cache2[state.cacheId];
        }
      }
    }
  );
};
function transformVariantsToDeclaration(variantClass, ids, variants, props) {
  var _a2, _b2;
  const declaration = {};
  if (props && Object.keys(props).length) {
    const targetId = `.${variantClass}`;
    for (const [propName, propValue] of Object.entries(props)) {
      if (typeof propValue === "object") {
        for (const [mqId, mqPropValue] of Object.entries(propValue)) {
          const _value = (mqPropValue == null ? void 0 : mqPropValue.toString()) || mqPropValue;
          const variantValue = variants[propName][_value];
          if (!variantValue) {
            continue;
          }
          if (!declaration[targetId]) {
            declaration[targetId] = {};
          }
          if (mqId === "initial") {
            if (!declaration[targetId]) {
              declaration[targetId] = {};
            }
            declaration[targetId] = defu(declaration[targetId], variantValue);
          }
          const mediaId = `@${mqId}`;
          if (!declaration[mediaId]) {
            declaration[mediaId] = {};
          }
          if (!declaration[mediaId][targetId]) {
            declaration[mediaId][targetId] = {};
          }
          declaration[mediaId][targetId] = defu(declaration[mediaId][targetId], variantValue);
        }
      } else {
        const _value = ((_a2 = propValue == null ? void 0 : propValue.toString) == null ? void 0 : _a2.call(propValue)) || propValue;
        const variantValue = (_b2 = variants == null ? void 0 : variants[propName]) == null ? void 0 : _b2[_value];
        if (!variantValue) {
          continue;
        }
        if (!declaration[targetId]) {
          declaration[targetId] = {};
        }
        declaration[targetId] = defu(declaration[targetId], variantValue);
      }
    }
  }
  return declaration;
}
function resolveVariantsState(ids, props, variants) {
  if (!props || !variants) {
    return {};
  }
  let cacheId = ids.componentId;
  const variantsProps = Object.entries(props).reduce(
    (acc, [propName, propValue]) => {
      if (!variants[propName]) {
        return acc;
      }
      if (typeof propValue === "object") {
        Object.entries(propValue).forEach(
          ([key, value]) => {
            cacheId += `${propName}:${key}:${value}|`;
          }
        );
      } else {
        cacheId += `${propName}:${propValue}|`;
      }
      acc[propName] = propValue;
      return acc;
    },
    {}
  );
  return { cacheId, variantsProps };
}
function usePinceauCssProp(ids, props, sheet) {
  var _a2, _b2;
  let rule = (_b2 = (_a2 = sheet.hydratableRules) == null ? void 0 : _a2[ids.value.uid]) == null ? void 0 : _b2.p;
  const css = computed(() => {
    var _a3;
    return (_a3 = props.value) == null ? void 0 : _a3.css;
  });
  watch(
    css,
    (newCss) => {
      newCss = transformCssPropToDeclaration(ids.value, newCss);
      if (rule) {
        sheet.deleteRule(rule);
      }
      rule = sheet.pushDeclaration(
        ids.value.uid,
        "p",
        newCss
      );
    },
    {
      immediate: !rule
    }
  );
  onScopeDispose(() => rule && sheet.deleteRule(rule));
}
function transformCssPropToDeclaration(ids, css) {
  const declaration = {};
  if (css) {
    const targetId = `.${ids.uniqueClassName}${ids.componentId}`;
    declaration[targetId] = Object.assign(declaration[targetId] || {}, css);
  }
  return declaration;
}
const plugin = {
  install(app, {
    theme: theme2,
    tokensHelperConfig,
    multiApp = false,
    colorSchemeMode = "media",
    dev = "production" !== "production"
  }) {
    let cache2 = {};
    const $tokens = createTokensHelper(
      theme2.theme,
      Object.assign(
        {
          key: "variable"
        },
        tokensHelperConfig
      )
    );
    const multiAppId = multiApp ? nanoid(6) : void 0;
    const sheet = usePinceauStylesheet($tokens, theme2.customProperties, colorSchemeMode, multiAppId);
    const setupPinceauRuntime = (props, variants, computedStyles) => {
      const instance = getCurrentInstance();
      const classes = ref({
        v: "",
        c: ""
      });
      const ids = usePinceauRuntimeIds(instance, classes);
      if (computedStyles && (computedStyles == null ? void 0 : computedStyles.value) && Object.keys(computedStyles.value).length > 0) {
        usePinceauComputedStyles(ids, computedStyles, sheet);
      }
      if (variants && (variants == null ? void 0 : variants.value) && Object.keys(variants.value).length > 0) {
        usePinceauVariants(ids, variants, props, sheet, classes, cache2);
      }
      if (props.value.css && Object.keys(props.value.css).length > 0) {
        usePinceauCssProp(ids, props, sheet);
      }
      return {
        $pinceau: computed(() => `${classes.value.v} ${classes.value.c}`)
      };
    };
    app.config.globalProperties.$pinceauRuntime = setupPinceauRuntime;
    app.config.globalProperties.$pinceauSsr = { get: () => sheet.toString() };
    app.provide("pinceauRuntime", setupPinceauRuntime);
  }
};
function usePinceauRuntime(props, variants, computedStyles) {
  return inject("pinceauRuntime")(props, variants, computedStyles);
}
function computedStyle(attribute, defaultValue, required = false) {
  return {
    type: [String, Object],
    required,
    default: defaultValue
  };
}
const _nuxt_pinceau_imports_mjs_8K3h7hEN4C = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin, { colorSchemeMode: "class", theme: theme$1 });
  nuxtApp.hook("app:rendered", (app) => {
    const content = app.ssrContext.nuxt.vueApp.config.globalProperties.$pinceauSsr.get();
    app.ssrContext.event.pinceauContent = content;
  });
});
const preference = "system";
const componentName = "ColorScheme";
const dataValue = "theme";
const node_modules__64nuxtjs_color_mode_dist_runtime_plugin_server_mjs_XNCxeHyTuP = defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      {
        htmlAttrs[`data-${dataValue}`] = colorMode.value;
      }
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const node_modules__64nuxt_themes_docus_plugins_menu_ts_13PGuw7IWk = defineNuxtPlugin((ctx) => {
  const visible = ref(false);
  const open = () => visible.value = true;
  const close = () => visible.value = false;
  const toggle = () => visible.value = !visible.value;
  ctx.$router.afterEach(() => setTimeout(close, 50));
  return {
    provide: {
      menu: {
        visible,
        close,
        open,
        toggle
      }
    }
  };
});
const _plugins = [
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_D7WGfuP1A0,
  node_modules_nuxt_dist_pages_runtime_router_mjs_qNv5Ky2ZmB,
  node_modules__64nuxt_content_dist_runtime_plugins_documentDriven_mjs_9cX98v59ZY,
  node_modules__64nuxt_content_dist_runtime_plugins_ws_mjs_JuoSZH52OQ,
  node_modules__64nuxthq_studio_dist_runtime_plugins_app_config_server_mjs_3EJd2il4WQ,
  node_modules__64nuxthq_studio_dist_runtime_plugins_preview_detector_mjs_wuXocrN5Sn,
  _nuxt_pinceau_imports_mjs_8K3h7hEN4C,
  node_modules__64nuxtjs_color_mode_dist_runtime_plugin_server_mjs_XNCxeHyTuP,
  node_modules__64nuxt_themes_docus_plugins_menu_ts_13PGuw7IWk
];
const _sfc_main$g = {
  __name: "AppLoadingBar",
  __ssrInlineRender: true,
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    }
  },
  setup(__props) {
    const props = __props;
    const nuxtApp = useNuxtApp();
    const data = reactive({
      percent: 0,
      show: false,
      canSucceed: true
    });
    let _timer = null;
    let _throttle = null;
    let _cut;
    function clear() {
      _timer && clearInterval(_timer);
      _throttle && clearTimeout(_throttle);
      _timer = null;
    }
    function start() {
      if (data.show) {
        return;
      }
      clear();
      data.percent = 0;
      data.canSucceed = true;
      if (props.throttle) {
        _throttle = setTimeout(startTimer, props.throttle);
      } else {
        startTimer();
      }
    }
    function increase(num) {
      data.percent = Math.min(100, Math.floor(data.percent + num));
    }
    function finish() {
      data.percent = 100;
      hide();
    }
    function hide() {
      clear();
      setTimeout(() => {
        data.show = false;
        setTimeout(() => {
          data.percent = 0;
        }, 400);
      }, 500);
    }
    function startTimer() {
      data.show = true;
      _cut = 1e4 / Math.floor(props.duration);
      _timer = setInterval(() => {
        increase(_cut);
      }, 100);
    }
    nuxtApp.hook("content:middleware:start", start);
    nuxtApp.hook("page:start", start);
    nuxtApp.hook("page:finish", finish);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nuxt-progress", {
          "nuxt-progress-failed": !unref(data).canSucceed
        }],
        style: {
          width: `${unref(data).percent}%`,
          left: unref(data).left,
          height: `${props.height}px`,
          opacity: unref(data).show ? 1 : 0,
          backgroundSize: `${100 / unref(data).percent * 100}% auto`
        }
      }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const AppLoadingBar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "Container",
  __ssrInlineRender: true,
  props: {
    as: {
      type: String,
      required: false,
      default: "div"
    },
    ...{ "padded": { "required": false, "type": [Boolean, Object], "default": true }, "fluid": { "required": false, "type": [Boolean, Object], "default": false } }
  },
  setup(__props) {
    const __$pProps = __props;
    const __$pVariants = ref({ "padded": { "true": { "px": "{container.padding.mobile}", "@sm": { "px": "{container.padding.sm}" } } }, "fluid": { "true": { "overflowX": "hidden" }, "false": { "maxWidth": "{container.maxWidth}" } } });
    const { $pinceau } = usePinceauRuntime(computed(() => __$pProps), __$pVariants, void 0);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
        class: ["container", [unref($pinceau)]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Container.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-a354a3fa"]]);
const Container = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const nuxtApp = useNuxtApp();
    const nuxtIcon = useAppConfig().nuxtIcon;
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => ((nuxtIcon == null ? void 0 : nuxtIcon.aliases) || {})[props.name] || props.name);
    const icon = computed(() => {
      var _a2;
      return (_a2 = state.value) == null ? void 0 : _a2[iconName.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      const size = props.size || (nuxtIcon == null ? void 0 : nuxtIcon.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    async function loadIconComponent() {
      var _a2;
      if (component.value) {
        return;
      }
      if (!((_a2 = state.value) == null ? void 0 : _a2[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isFetching)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: "icon",
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs))} data-v-047565da></span>`);
      } else if (unref(icon)) {
        _push(ssrRenderComponent(unref(Icon$1), mergeProps({
          icon: unref(icon),
          class: "icon",
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null, _parent));
      } else if (unref(component)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
          class: "icon",
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: "icon",
          style: { fontSize: unref(sSize), lineHeight: unref(sSize), width: unref(sSize), height: unref(sSize) }
        }, _attrs))} data-v-047565da>${ssrInterpolate(__props.name)}</span>`);
      }
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-047565da"]]);
const Icon = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0$3
}, Symbol.toStringTag, { value: "Module" }));
const useDocus = () => computed(() => useAppConfig().docus);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "AppSocialIcons",
  __ssrInlineRender: true,
  setup(__props) {
    const socials = ["twitter", "facebook", "instagram", "youtube", "github", "medium"];
    const docus = useDocus();
    const icons = computed(() => {
      return Object.entries(docus.value.socials || {}).map(([key, value]) => {
        if (typeof value === "object") {
          return value;
        } else if (typeof value === "string" && value && socials.includes(key)) {
          return {
            href: `https://${key}.com/${value}`,
            icon: `fa-brands:${key}`,
            label: value
          };
        } else {
          return null;
        }
      }).filter(Boolean);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_0$3;
      _push(`<!--[-->`);
      ssrRenderList(unref(icons), (icon) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: icon.label,
          rel: "noopener noreferrer",
          title: icon.label,
          "aria-label": icon.label,
          href: icon.href,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (icon.icon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: icon.icon
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                icon.icon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: icon.icon
                }, null, 8, ["name"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-05e7d8b4"]]);
const AppSocialIcons = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_2$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "DocsAsideTree",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: null
    },
    parent: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    var _a2;
    const props = __props;
    const route = useRoute();
    const docus = useDocus();
    const collapsedMap = useState(`docus-docs-aside-collapse-map-${((_a2 = props.parent) == null ? void 0 : _a2._path) || "/"}`, () => {
      if (props.level === 0) {
        return {};
      }
      return props.links.filter((link) => !!link.children).reduce((map, link) => {
        map[link._path] = true;
        return map;
      }, {});
    });
    const isActive = (link) => {
      return route.path === link._path;
    };
    const isCollapsed = (link) => {
      var _a3, _b2;
      if (link.children) {
        if (typeof collapsedMap.value[link._path] !== "undefined") {
          return collapsedMap.value[link._path];
        }
        if (link == null ? void 0 : link.collapsed) {
          return link == null ? void 0 : link.collapsed;
        }
        if ((_a3 = docus.value.aside) == null ? void 0 : _a3.collapsed) {
          return (_b2 = docus.value.aside) == null ? void 0 : _b2.collapsed;
        }
      }
      return false;
    };
    const hasNesting = computed(() => props.links.some((link) => link.children));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$3;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_DocsAsideTree = __nuxt_component_0$2;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "docs-aside-tree" }, _attrs))} data-v-d55eabc6><!--[-->`);
      ssrRenderList(__props.links, (link) => {
        var _a3, _b2, _c, _d, _e;
        _push(`<li class="${ssrRenderClass({
          "has-parent-icon": (_a3 = __props.parent) == null ? void 0 : _a3.icon,
          "has-children": __props.level > 0 && link.children,
          "bordered": __props.level > 0 || !unref(hasNesting),
          "active": isActive(link)
        })}" data-v-d55eabc6>`);
        if (link.children) {
          _push(`<button class="title-collapsible-button" data-v-d55eabc6><span class="content" data-v-d55eabc6>`);
          if (((_b2 = link == null ? void 0 : link.navigation) == null ? void 0 : _b2.icon) || link.icon) {
            _push(ssrRenderComponent(_component_Icon, {
              name: ((_c = link == null ? void 0 : link.navigation) == null ? void 0 : _c.icon) || link.icon,
              class: "icon"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span data-v-d55eabc6>${ssrInterpolate(((_d = link == null ? void 0 : link.navigation) == null ? void 0 : _d.title) || link.title || link._path)}</span></span><span data-v-d55eabc6>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: isCollapsed(link) ? "lucide:chevrons-up-down" : "lucide:chevrons-down-up",
            class: "collapsible-icon"
          }, null, _parent));
          _push(`</span></button>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.redirect ? link.redirect : link._path,
            class: ["link", {
              "padded": __props.level > 0 || !unref(hasNesting),
              "active": isActive(link)
            }],
            exact: link.exact
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a4, _b3, _c2, _d2, _e2, _f;
              if (_push2) {
                _push2(`<span class="content" data-v-d55eabc6${_scopeId}>`);
                if (((_a4 = link == null ? void 0 : link.navigation) == null ? void 0 : _a4.icon) || link.icon) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: ((_b3 = link == null ? void 0 : link.navigation) == null ? void 0 : _b3.icon) || link.icon,
                    class: "icon"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span data-v-d55eabc6${_scopeId}>${ssrInterpolate(((_c2 = link == null ? void 0 : link.navigation) == null ? void 0 : _c2.title) || link.title || link._path)}</span></span>`);
              } else {
                return [
                  createVNode("span", { class: "content" }, [
                    ((_d2 = link == null ? void 0 : link.navigation) == null ? void 0 : _d2.icon) || link.icon ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: ((_e2 = link == null ? void 0 : link.navigation) == null ? void 0 : _e2.icon) || link.icon,
                      class: "icon"
                    }, null, 8, ["name"])) : createCommentVNode("", true),
                    createVNode("span", null, toDisplayString(((_f = link == null ? void 0 : link.navigation) == null ? void 0 : _f.title) || link.title || link._path), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        if (((_e = link.children) == null ? void 0 : _e.length) && (__props.max === null || __props.level + 1 < __props.max)) {
          _push(ssrRenderComponent(_component_DocsAsideTree, {
            style: !isCollapsed(link) ? null : { display: "none" },
            links: link.children,
            level: __props.level + 1,
            parent: link,
            max: __props.max,
            class: "recursive"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-d55eabc6"]]);
const DocsAsideTree = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0$2
}, Symbol.toStringTag, { value: "Module" }));
const useMenu = () => {
  const { $menu } = useNuxtApp();
  return $menu;
};
const __nuxt_component_0$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a2;
      if (mounted.value) {
        return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const cache = /* @__PURE__ */ new WeakMap();
function createClientOnly(component) {
  if (cache.has(component)) {
    return cache.get(component);
  }
  const clone = { ...component };
  if (clone.render) {
    clone.render = (ctx, ...args) => {
      var _a2;
      if (ctx.mounted$) {
        const res = component.render(ctx, ...args);
        return res.children === null || typeof res.children === "string" ? createElementVNode(res.type, res.props, res.children, res.patchFlag, res.dynamicProps, res.shapeFlag) : h(res);
      } else {
        return h("div", (_a2 = ctx.$attrs) != null ? _a2 : ctx._.attrs);
      }
    };
  } else if (clone.template) {
    clone.template = `
      <template v-if="mounted$">${component.template}</template>
      <template v-else><div></div></template>
    `;
  }
  clone.setup = (props, ctx) => {
    var _a2;
    const mounted$ = ref(false);
    return Promise.resolve(((_a2 = component.setup) == null ? void 0 : _a2.call(component, props, ctx)) || {}).then((setupState) => {
      return typeof setupState !== "function" ? { ...setupState, mounted$ } : (...args) => {
        if (mounted$.value) {
          const res = setupState(...args);
          return res.children === null || typeof res.children === "string" ? createElementVNode(res.type, res.props, res.children, res.patchFlag, res.dynamicProps, res.shapeFlag) : h(res);
        } else {
          return h("div", ctx.attrs);
        }
      };
    });
  };
  cache.set(component, clone);
  return clone;
}
const clientOnly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0$1,
  createClientOnly
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  name: componentName,
  props: {
    placeholder: String,
    tag: {
      type: String,
      default: "span"
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_ClientOnly, mergeProps({
    placeholder: $props.placeholder,
    "placeholder-tag": $props.tag
  }, _attrs), null, _parent));
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$2]]);
const component_vue3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_0
}, Symbol.toStringTag, { value: "Module" }));
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ThemeSelect",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ColorScheme = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$3;
      _push(`<button${ssrRenderAttrs(mergeProps({ "aria-label": "Color Mode" }, _attrs))} data-v-be392968>`);
      _push(ssrRenderComponent(_component_ColorScheme, { placeholder: "..." }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(colorMode).preference === "dark") {
              _push2(ssrRenderComponent(_component_Icon, { name: "uil:moon" }, null, _parent2, _scopeId));
            } else if (unref(colorMode).preference === "light") {
              _push2(ssrRenderComponent(_component_Icon, { name: "uil:sun" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Icon, { name: "uil:desktop" }, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(colorMode).preference === "dark" ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: "uil:moon"
              })) : unref(colorMode).preference === "light" ? (openBlock(), createBlock(_component_Icon, {
                key: 1,
                name: "uil:sun"
              })) : (openBlock(), createBlock(_component_Icon, {
                key: 2,
                name: "uil:desktop"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-be392968"]]);
const ThemeSelect = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AppHeaderDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const { navigation } = useContent();
    const docus = useDocus();
    const filtered = computed(() => {
      var _a2;
      return ((_a2 = docus.value.header) == null ? void 0 : _a2.exclude) || [];
    });
    const links = computed(() => {
      return (navigation.value || []).filter((item) => {
        if (filtered.value.includes(item._path)) {
          return false;
        }
        return true;
      });
    });
    const { visible, open, close } = useMenu();
    watch(visible, (v) => v ? open() : close());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$3;
      const _component_AppSocialIcons = __nuxt_component_2$2;
      const _component_DocsAsideTree = __nuxt_component_0$2;
      _push(`<!--[--><button aria-label="Menu" data-v-551a39a6>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons-outline:menu",
        "aria-hidden": "\u201Dtrue\u201D"
      }, null, _parent));
      _push(`</button>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(visible)) {
          _push2(`<nav class="dialog" data-v-551a39a6><div data-v-551a39a6><div data-v-551a39a6><button aria-label="Menu" data-v-551a39a6>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "heroicons-outline:x",
            "aria-hidden": "\u201Dtrue\u201D"
          }, null, _parent));
          _push2(`</button><div class="icons" data-v-551a39a6>`);
          _push2(ssrRenderComponent(_component_AppSocialIcons, null, null, _parent));
          _push2(ssrRenderComponent(__nuxt_component_5, null, null, _parent));
          _push2(`</div></div>`);
          _push2(ssrRenderComponent(_component_DocsAsideTree, { links: unref(links) }, null, _parent));
          _push2(`</div></nav>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-551a39a6"]]);
const AppHeaderDialog = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_1$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "200",
    height: "40",
    viewBox: "0 0 200 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))} data-v-bff705c5><g clip-path="url(#clip0)" data-v-bff705c5><path d="M47.82 30V16.112H50.984L51.264 18.464C51.6933 17.6427 52.3093 16.9893 53.112 16.504C53.9333 16.0187 54.8947 15.776 55.996 15.776C57.7133 15.776 59.048 16.3173 60 17.4C60.952 18.4827 61.428 20.0693 61.428 22.16V30H57.844V22.496C57.844 21.3013 57.6013 20.3867 57.116 19.752C56.6307 19.1173 55.8747 18.8 54.848 18.8C53.84 18.8 53.0093 19.1547 52.356 19.864C51.7213 20.5733 51.404 21.5627 51.404 22.832V30H47.82ZM70.0632 30.336C68.3272 30.336 66.9832 29.7947 66.0312 28.712C65.0978 27.6293 64.6312 26.0427 64.6312 23.952V16.112H68.1872V23.616C68.1872 24.8107 68.4298 25.7253 68.9152 26.36C69.4005 26.9947 70.1658 27.312 71.2112 27.312C72.2005 27.312 73.0125 26.9573 73.6472 26.248C74.3005 25.5387 74.6272 24.5493 74.6272 23.28V16.112H78.2112V30H75.0472L74.7672 27.648C74.3378 28.4693 73.7125 29.1227 72.8912 29.608C72.0885 30.0933 71.1458 30.336 70.0632 30.336ZM80.5743 30L85.6143 23.056L80.5743 16.112H84.4103L87.9383 21.04L91.4383 16.112H95.3023L90.2343 23.056L95.3023 30H91.4383L87.9383 25.072L84.4103 30H80.5743ZM103.774 30C102.318 30 101.151 29.6453 100.274 28.936C99.3963 28.2267 98.9576 26.9667 98.9576 25.156V19.108H96.5776V16.112H98.9576L99.3776 12.388H102.542V16.112H106.294V19.108H102.542V25.184C102.542 25.856 102.682 26.3227 102.962 26.584C103.26 26.8267 103.764 26.948 104.474 26.948H106.21V30H103.774ZM108.195 33.108L115.195 8.244H118.695L111.667 33.108H108.195Z" fill="var(--logo-fill-color)" data-v-bff705c5></path><path d="M125.944 30.336C124.749 30.336 123.769 30.1493 123.004 29.776C122.239 29.384 121.669 28.8707 121.296 28.236C120.923 27.6013 120.736 26.9013 120.736 26.136C120.736 24.848 121.24 23.8027 122.248 23C123.256 22.1973 124.768 21.796 126.784 21.796H130.312V21.46C130.312 20.508 130.041 19.808 129.5 19.36C128.959 18.912 128.287 18.688 127.484 18.688C126.756 18.688 126.121 18.8653 125.58 19.22C125.039 19.556 124.703 20.06 124.572 20.732H121.072C121.165 19.724 121.501 18.8467 122.08 18.1C122.677 17.3533 123.443 16.784 124.376 16.392C125.309 15.9813 126.355 15.776 127.512 15.776C129.491 15.776 131.049 16.2707 132.188 17.26C133.327 18.2493 133.896 19.6493 133.896 21.46V30H130.844L130.508 27.76C130.097 28.5067 129.519 29.1227 128.772 29.608C128.044 30.0933 127.101 30.336 125.944 30.336ZM126.756 27.536C127.783 27.536 128.576 27.2 129.136 26.528C129.715 25.856 130.079 25.0253 130.228 24.036H127.176C126.224 24.036 125.543 24.2133 125.132 24.568C124.721 24.904 124.516 25.324 124.516 25.828C124.516 26.3693 124.721 26.7893 125.132 27.088C125.543 27.3867 126.084 27.536 126.756 27.536ZM144.12 30.336C142.701 30.336 141.451 30.028 140.368 29.412C139.285 28.796 138.427 27.9373 137.792 26.836C137.176 25.7347 136.868 24.4747 136.868 23.056C136.868 21.6373 137.176 20.3773 137.792 19.276C138.427 18.1747 139.285 17.316 140.368 16.7C141.451 16.084 142.701 15.776 144.12 15.776C145.893 15.776 147.387 16.2427 148.6 17.176C149.813 18.0907 150.588 19.36 150.924 20.984H147.144C146.957 20.312 146.584 19.7893 146.024 19.416C145.483 19.024 144.839 18.828 144.092 18.828C143.103 18.828 142.263 19.2013 141.572 19.948C140.881 20.6947 140.536 21.7307 140.536 23.056C140.536 24.3813 140.881 25.4173 141.572 26.164C142.263 26.9107 143.103 27.284 144.092 27.284C144.839 27.284 145.483 27.0973 146.024 26.724C146.584 26.3507 146.957 25.8187 147.144 25.128H150.924C150.588 26.696 149.813 27.956 148.6 28.908C147.387 29.86 145.893 30.336 144.12 30.336ZM154.105 30V9.84H157.689V21.74L162.617 16.112H166.873L161.189 22.44L167.797 30H163.317L157.689 23.028V30H154.105ZM175.619 30.336C174.219 30.336 172.977 30.0373 171.895 29.44C170.812 28.8427 169.963 28.0027 169.347 26.92C168.731 25.8373 168.423 24.5867 168.423 23.168C168.423 21.7307 168.721 20.452 169.319 19.332C169.935 18.212 170.775 17.344 171.839 16.728C172.921 16.0933 174.191 15.776 175.647 15.776C177.009 15.776 178.213 16.0747 179.259 16.672C180.304 17.2693 181.116 18.0907 181.695 19.136C182.292 20.1627 182.591 21.3107 182.591 22.58C182.591 22.7853 182.581 23 182.563 23.224C182.563 23.448 182.553 23.6813 182.535 23.924H171.979C172.053 25.0067 172.427 25.856 173.099 26.472C173.789 27.088 174.62 27.396 175.591 27.396C176.319 27.396 176.925 27.2373 177.411 26.92C177.915 26.584 178.288 26.1547 178.531 25.632H182.171C181.909 26.5093 181.471 27.312 180.855 28.04C180.257 28.7493 179.511 29.3093 178.615 29.72C177.737 30.1307 176.739 30.336 175.619 30.336ZM175.647 18.688C174.769 18.688 173.995 18.94 173.323 19.444C172.651 19.9293 172.221 20.676 172.035 21.684H178.951C178.895 20.7693 178.559 20.0413 177.943 19.5C177.327 18.9587 176.561 18.688 175.647 18.688ZM192.353 30.336C190.953 30.336 189.712 30.0373 188.629 29.44C187.546 28.8427 186.697 28.0027 186.081 26.92C185.465 25.8373 185.157 24.5867 185.157 23.168C185.157 21.7307 185.456 20.452 186.053 19.332C186.669 18.212 187.509 17.344 188.573 16.728C189.656 16.0933 190.925 15.776 192.381 15.776C193.744 15.776 194.948 16.0747 195.993 16.672C197.038 17.2693 197.85 18.0907 198.429 19.136C199.026 20.1627 199.325 21.3107 199.325 22.58C199.325 22.7853 199.316 23 199.297 23.224C199.297 23.448 199.288 23.6813 199.269 23.924H188.713C188.788 25.0067 189.161 25.856 189.833 26.472C190.524 27.088 191.354 27.396 192.325 27.396C193.053 27.396 193.66 27.2373 194.145 26.92C194.649 26.584 195.022 26.1547 195.265 25.632H198.905C198.644 26.5093 198.205 27.312 197.589 28.04C196.992 28.7493 196.245 29.3093 195.349 29.72C194.472 30.1307 193.473 30.336 192.353 30.336ZM192.381 18.688C191.504 18.688 190.729 18.94 190.057 19.444C189.385 19.9293 188.956 20.676 188.769 21.684H195.685C195.629 20.7693 195.293 20.0413 194.677 19.5C194.061 18.9587 193.296 18.688 192.381 18.688Z" fill="#73FAC8" data-v-bff705c5></path><circle cx="17" cy="20" r="17" fill="url(#paint0_linear)" data-v-bff705c5></circle></g><defs data-v-bff705c5><linearGradient id="paint0_linear" x1="0" y1="3" x2="34" y2="37" gradientUnits="userSpaceOnUse" data-v-bff705c5><stop stop-color="#73FAC8" data-v-bff705c5></stop><stop offset="1" stop-color="#00BEE1" data-v-bff705c5></stop></linearGradient><clipPath id="clip0" data-v-bff705c5><rect width="200" height="40" fill="white" data-v-bff705c5></rect></clipPath></defs></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-bff705c5"]]);
const Logo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_1$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AppHeaderLogo",
  __ssrInlineRender: true,
  setup(__props) {
    const docus = useDocus();
    const logo = computed(() => {
      var _a2;
      return ((_a2 = docus.value.header) == null ? void 0 : _a2.logo) || false;
    });
    const title = computed(() => {
      var _a2;
      return ((_a2 = docus.value.header) == null ? void 0 : _a2.title) || docus.value.title;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Logo = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "navbar-logo",
        to: "/",
        "aria-label": (_b2 = (_a2 = unref(docus)) == null ? void 0 : _a2.header) == null ? void 0 : _b2.title
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(logo) && typeof unref(logo) === "string") {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(logo)), null, null), _parent2, _scopeId);
            } else if (unref(logo)) {
              _push2(ssrRenderComponent(_component_Logo, null, null, _parent2, _scopeId));
            } else {
              _push2(`<span data-v-24bf8c55${_scopeId}>${ssrInterpolate(unref(title))}</span>`);
            }
          } else {
            return [
              unref(logo) && typeof unref(logo) === "string" ? (openBlock(), createBlock(resolveDynamicComponent(unref(logo)), { key: 0 })) : unref(logo) ? (openBlock(), createBlock(_component_Logo, { key: 1 })) : (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(title)), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-24bf8c55"]]);
const AppHeaderLogo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_2$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AppHeaderNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { navBottomLink: navBottomLink2 } = useContentHelpers();
    const { navigation } = useContent();
    const docus = useDocus();
    const hasNavigation = computed(() => {
      var _a2;
      return !!((_a2 = docus.value.aside) == null ? void 0 : _a2.level);
    });
    const filtered = computed(() => {
      var _a2;
      return ((_a2 = docus.value.header) == null ? void 0 : _a2.exclude) || [];
    });
    const tree = computed(() => {
      return (navigation.value || []).filter((item) => {
        if (filtered.value.includes(item._path)) {
          return false;
        }
        return true;
      });
    });
    const isActive = (link) => link.exact ? route.fullPath === link._path : route.fullPath.startsWith(link._path);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_0$3;
      if (unref(hasNavigation)) {
        _push(`<nav${ssrRenderAttrs(_attrs)} data-v-42e8efe9><ul data-v-42e8efe9><!--[-->`);
        ssrRenderList(unref(tree), (link) => {
          _push(`<li data-v-42e8efe9>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: ["link", { active: isActive(link) }],
            to: link.redirect ? link.redirect : unref(navBottomLink2)(link)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (link.icon && unref(docus).header.showLinkIcon) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: link.icon
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(` ${ssrInterpolate(link.title)}`);
              } else {
                return [
                  link.icon && unref(docus).header.showLinkIcon ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: link.icon
                  }, null, 8, ["name"])) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(link.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-42e8efe9"]]);
const AppHeaderNavigation = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_3
}, Symbol.toStringTag, { value: "Module" }));
const useDocSearch = () => {
  const { $docSearch } = useNuxtApp();
  if (!$docSearch) {
    return {
      hasDocSearch: ref(false)
    };
  }
  return $docSearch;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AppSearch",
  __ssrInlineRender: true,
  setup(__props) {
    useDocSearch();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "doc-search" }, _attrs))} data-v-40050a13><button type="button" aria-label="Search" data-v-40050a13>`);
      _push(ssrRenderComponent(_component_Icon, { name: "heroicons-outline:search" }, null, _parent));
      _push(`<span data-v-40050a13>Search</span><span data-v-40050a13><kbd data-v-40050a13>\u2318</kbd><kbd data-v-40050a13>K</kbd></span></button></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppSearch.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-40050a13"]]);
const AppSearch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { navigation } = useContent();
    const { hasDocSearch } = useDocSearch();
    const hasDialog = computed(() => {
      var _a2;
      return ((_a2 = navigation.value) == null ? void 0 : _a2.length) > 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Container = __nuxt_component_0$4;
      const _component_AppHeaderDialog = __nuxt_component_1$3;
      const _component_AppHeaderLogo = __nuxt_component_2$1;
      const _component_AppHeaderNavigation = __nuxt_component_3;
      const _component_AppSearch = __nuxt_component_4;
      const _component_ThemeSelect = __nuxt_component_5;
      const _component_AppSocialIcons = __nuxt_component_2$2;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: { "has-dialog": unref(hasDialog), "has-doc-search": unref(hasDocSearch) }
      }, _attrs))} data-v-a7990989>`);
      _push(ssrRenderComponent(_component_Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="left" data-v-a7990989${_scopeId}>`);
            if (unref(hasDialog)) {
              _push2(ssrRenderComponent(_component_AppHeaderDialog, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_AppHeaderLogo, null, null, _parent2, _scopeId));
            _push2(`</section><section class="center" data-v-a7990989${_scopeId}>`);
            if (unref(hasDialog)) {
              _push2(ssrRenderComponent(_component_AppHeaderLogo, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_AppHeaderNavigation, null, null, _parent2, _scopeId));
            _push2(`</section><section class="right" data-v-a7990989${_scopeId}>`);
            if (unref(hasDocSearch)) {
              _push2(ssrRenderComponent(_component_AppSearch, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_ThemeSelect, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_AppSocialIcons, null, null, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { class: "left" }, [
                unref(hasDialog) ? (openBlock(), createBlock(_component_AppHeaderDialog, { key: 0 })) : createCommentVNode("", true),
                createVNode(_component_AppHeaderLogo)
              ]),
              createVNode("section", { class: "center" }, [
                unref(hasDialog) ? (openBlock(), createBlock(_component_AppHeaderLogo, { key: 0 })) : createCommentVNode("", true),
                createVNode(_component_AppHeaderNavigation)
              ]),
              createVNode("section", { class: "right" }, [
                unref(hasDocSearch) ? (openBlock(), createBlock(_component_AppSearch, { key: 0 })) : createCommentVNode("", true),
                createVNode(_component_ThemeSelect),
                createVNode(_component_AppSocialIcons)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a7990989"]]);
const AppHeader = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_1$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const docus = useDocus();
    const socialIcons = ref(null);
    const icons = computed(() => {
      var _a2;
      return ((_a2 = docus.value.footer) == null ? void 0 : _a2.iconLinks) || [];
    });
    const socialIconsCount = computed(() => Object.entries(docus.value.socials).filter(([_, v]) => v).length);
    const nbSocialIcons = computed(() => socialIcons.value ? socialIconsCount.value : 0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Container = __nuxt_component_0$4;
      const _component_Icon = __nuxt_component_0$3;
      const _component_AppSocialIcons = __nuxt_component_2$2;
      _push(`<footer${ssrRenderAttrs(_attrs)} data-v-c8072d0a>`);
      _push(ssrRenderComponent(_component_Container, {
        padded: "",
        class: "footer-container"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            if ((_a2 = unref(docus).footer) == null ? void 0 : _a2.credits) {
              _push2(`<a${ssrRenderAttr("href", unref(docus).footer.credits.href)} rel="noopener" target="_blank" class="left" data-v-c8072d0a${_scopeId}>`);
              if (unref(docus).footer.credits.icon) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(docus).footer.credits.icon), { class: "left-icon" }, null), _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p data-v-c8072d0a${_scopeId}>${ssrInterpolate(unref(docus).footer.credits.text)}</p></a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="right" data-v-c8072d0a${_scopeId}><!--[-->`);
            ssrRenderList(unref(icons).slice(0, 6 - unref(nbSocialIcons)), (icon) => {
              _push2(`<a rel="noopener"${ssrRenderAttr("aria-label", icon.label)}${ssrRenderAttr("href", icon.href)} target="_blank" data-v-c8072d0a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: icon.icon || icon.component
              }, null, _parent2, _scopeId));
              _push2(`</a>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_AppSocialIcons, {
              ref_key: "socialIcons",
              ref: socialIcons
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              ((_b2 = unref(docus).footer) == null ? void 0 : _b2.credits) ? (openBlock(), createBlock("a", {
                key: 0,
                href: unref(docus).footer.credits.href,
                rel: "noopener",
                target: "_blank",
                class: "left"
              }, [
                unref(docus).footer.credits.icon ? (openBlock(), createBlock(resolveDynamicComponent(unref(docus).footer.credits.icon), {
                  key: 0,
                  class: "left-icon"
                })) : createCommentVNode("", true),
                createVNode("p", null, toDisplayString(unref(docus).footer.credits.text), 1)
              ], 8, ["href"])) : createCommentVNode("", true),
              createVNode("div", { class: "right" }, [
                (openBlock(true), createBlock(Fragment$1, null, renderList(unref(icons).slice(0, 6 - unref(nbSocialIcons)), (icon) => {
                  return openBlock(), createBlock("a", {
                    key: icon.label,
                    rel: "noopener",
                    "aria-label": icon.label,
                    href: icon.href,
                    target: "_blank"
                  }, [
                    createVNode(_component_Icon, {
                      name: icon.icon || icon.component
                    }, null, 8, ["name"])
                  ], 8, ["aria-label", "href"]);
                }), 128)),
                createVNode(_component_AppSocialIcons, {
                  ref_key: "socialIcons",
                  ref: socialIcons
                }, null, 512)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c8072d0a"]]);
const AppFooter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_2
}, Symbol.toStringTag, { value: "Module" }));
const useContentHead = (_content, to = useRoute()) => {
  const content = unref(_content);
  const refreshHead = (data = content) => {
    if (!to.path || !data) {
      return;
    }
    const head = Object.assign({}, (data == null ? void 0 : data.head) || {});
    const title = head.title || (data == null ? void 0 : data.title);
    if (title) {
      head.title = title;
    }
    head.meta = [...head.meta || []];
    const description = (head == null ? void 0 : head.description) || (data == null ? void 0 : data.description);
    if (description && head.meta.filter((m) => m.name === "description").length === 0) {
      head.meta.push({
        name: "description",
        content: description
      });
    }
    const image = (head == null ? void 0 : head.image) || (data == null ? void 0 : data.image);
    if (image && head.meta.filter((m) => m.property === "og:image").length === 0) {
      if (typeof image === "string") {
        head.meta.push({
          property: "og:image",
          content: image
        });
      }
      if (typeof image === "object") {
        const imageKeys = [
          "src",
          "secure_url",
          "type",
          "width",
          "height",
          "alt"
        ];
        for (const key of imageKeys) {
          if (key === "src" && image.src) {
            head.meta.push({
              property: "og:image",
              content: image[key]
            });
          } else if (image[key]) {
            head.meta.push({
              property: `og:image:${key}`,
              content: image[key]
            });
          }
        }
      }
    }
    {
      useHead(head);
    }
  };
  watch(() => unref(_content), refreshHead, { immediate: true });
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    padded: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const docus = useDocus();
    const { navigation, page: page2 } = useContent();
    const { navKeyFromPath: navKeyFromPath2 } = useContentHelpers();
    const titleTemplate = computed(() => {
      var _a2, _b2;
      const appTitleTemplate = ((_a2 = docus.value.head) == null ? void 0 : _a2.titleTemplate) || `%s \xB7 ${docus.value.title}`;
      if (page2.value) {
        return ((_b2 = page2.value.head) == null ? void 0 : _b2.titleTemplate) || navKeyFromPath2(page2.value._path, "titleTemplate", navigation.value || []) || appTitleTemplate;
      }
      return appTitleTemplate;
    });
    useHead({
      titleTemplate: titleTemplate.value,
      meta: [
        { name: "twitter:card", content: "summary_large_image" }
      ]
    });
    watch(titleTemplate, () => {
      useHead({ titleTemplate: titleTemplate.value });
    });
    useContentHead(docus.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppLoadingBar = _sfc_main$g;
      const _component_AppHeader = __nuxt_component_1$1;
      const _component_AppFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppLoadingBar, null, null, _parent));
      if (unref(docus).header) {
        _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (unref(docus).footer) {
        _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppLayout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a2;
    return ((_a2 = route.params[r.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a2;
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a3;
    return ((_a3 = m.components) == null ? void 0 : _a3.default) === routeProps.Component.type;
  });
  const source = (_a2 = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a2 : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a2;
      return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a2, _b2, _c, _d;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props.pageKey, routeProps);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!((_b2 = (_a2 = props.transition) != null ? _a2 : routeProps.route.meta.pageTransition) != null ? _b2 : appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              (_d = (_c = props.keepalive) != null ? _c : routeProps.route.meta.keepalive) != null ? _d : appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(Component, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppLayout = _sfc_main$2;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_AppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./_nuxt/error-component.93bff883.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { AppSearch as $, useCookie as A, callWithNuxt as B, updateAppConfig as C, refreshNuxtData as D, useRequestEvent as E, get$1 as F, assertArray as G, ensureArray as H, sortList as I, apply as J, withoutKeys as K, withKeys as L, createQuery as M, nuxtLink as N, AppLoadingBar as O, Container as P, Icon as Q, AppSocialIcons as R, DocsAsideTree as S, clientOnly as T, component_vue3 as U, ThemeSelect as V, AppHeaderDialog as W, Logo as X, AppHeaderLogo as Y, AppHeaderNavigation as Z, _export_sfc as _, usePinceauRuntime as a, AppHeader as a0, AppFooter as a1, AppLayout as a2, page as a3, __nuxt_component_0$5 as b, computedStyle as c, __nuxt_component_0$3 as d, entry$1 as default, useUnwrap as e, useContent as f, useDocus as g, useRoute as h, useContentHelpers as i, __nuxt_component_0$2 as j, useAppConfig as k, useState as l, __nuxt_component_0$4 as m, useRouter as n, useAsyncData as o, useColorMode as p, useContentHead as q, queryContent as r, useRuntimeConfig as s, useHead as t, utils as u, useNuxtApp as v, fetchContentNavigation as w, layouts as x, appLayoutTransition as y, _wrapIf as z };
//# sourceMappingURL=server.mjs.map
