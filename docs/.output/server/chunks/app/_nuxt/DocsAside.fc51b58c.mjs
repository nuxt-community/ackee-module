import { _ as _export_sfc, f as useContent, g as useDocus, h as useRoute, j as __nuxt_component_0$2, b as __nuxt_component_0$5, d as __nuxt_component_0$3, i as useContentHelpers } from '../server.mjs';
import { useSSRContext, defineComponent, unref, withCtx, createVNode, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'ohash';
import 'cookie-es';
import 'nanoid';
import 'scule';
import 'defu';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '../../nitro/node-server.mjs';
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

const useCurrentNavigation = () => {
  const { navPageFromPath, navDirFromPath, navKeyFromPath } = useContentHelpers();
  const { navigation, page } = useContent();
  const docus = useDocus();
  const route = useRoute();
  const asideConfig = computed(() => {
    return navKeyFromPath(route.path, "aside", navigation.value || []);
  });
  const level = computed(() => {
    var _a, _b, _c;
    if (typeof ((_a = asideConfig.value) == null ? void 0 : _a.level) !== "undefined") {
      return (_b = asideConfig.value) == null ? void 0 : _b.level;
    }
    return ((_c = docus.value.aside) == null ? void 0 : _c.level) || 0;
  });
  const filtered = computed(() => {
    var _a;
    return ((_a = docus.value.aside) == null ? void 0 : _a.exclude) || [];
  });
  const tree = computed(() => {
    var _a, _b, _c;
    let nav = navigation.value || [];
    let _path = route.path;
    if ((_a = asideConfig.value) == null ? void 0 : _a.root) {
      _path = (_b = asideConfig.value) == null ? void 0 : _b.root;
      nav = navDirFromPath(_path, nav);
    }
    if (level.value) {
      const path = _path.split("/");
      const leveledPath = path.splice(0, 1 + level.value).join("/");
      nav = navDirFromPath(leveledPath, nav) || [];
      if (!Array.isArray(nav)) {
        nav = [nav];
      }
    }
    if (nav.length === 0) {
      nav = navPageFromPath(((_c = page.value) == null ? void 0 : _c._path) || "/", navigation.value || []);
      if (!nav) {
        return [];
      }
      if (!Array.isArray(nav)) {
        nav = [nav];
      }
    }
    return nav.filter((item) => {
      if (filtered.value.includes(item._path)) {
        return false;
      }
      return true;
    });
  });
  return { tree, asideConfig };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { tree } = useCurrentNavigation();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_DocsAsideTree = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_0$3;
      _push(`<nav${ssrRenderAttrs(_attrs)} data-v-80d2edd1>`);
      if (((_a = unref(tree)) == null ? void 0 : _a.length) > 0) {
        _push(ssrRenderComponent(_component_DocsAsideTree, { links: unref(tree) }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "go-back-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons-outline:arrow-left",
                class: "icon"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text" data-v-80d2edd1${_scopeId}>Go back</span>`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "heroicons-outline:arrow-left",
                  class: "icon"
                }),
                createVNode("span", { class: "text" }, "Go back")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80d2edd1"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=DocsAside.fc51b58c.mjs.map
