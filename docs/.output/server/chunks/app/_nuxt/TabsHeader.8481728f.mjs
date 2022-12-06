import { useSSRContext, defineComponent, ref, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TabsHeader",
  __ssrInlineRender: true,
  props: {
    tabs: {
      type: Array,
      required: true
    },
    activeTabIndex: {
      type: Number,
      required: true
    }
  },
  emits: ["update:activeTabIndex"],
  setup(__props, { emit }) {
    const props = __props;
    const tabsRef = ref();
    const highlightUnderline = ref();
    const updateHighlightUnderlinePosition = (activeTab) => {
      if (!activeTab) {
        return;
      }
      highlightUnderline.value.style.left = `${activeTab.offsetLeft}px`;
      highlightUnderline.value.style.width = `${activeTab.clientWidth}px`;
    };
    watch(
      tabsRef,
      (newVal) => {
        if (!newVal) {
          return;
        }
        setTimeout(() => {
          updateHighlightUnderlinePosition(tabsRef.value.children[props.activeTabIndex]);
        }, 50);
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs-header" }, _attrs))} data-v-d8e7023c>`);
      if (__props.tabs) {
        _push(`<div class="tabs" data-v-d8e7023c><!--[-->`);
        ssrRenderList(__props.tabs, ({ label }, i) => {
          _push(`<button class="${ssrRenderClass([__props.activeTabIndex === i ? "active" : "not-active"])}" data-v-d8e7023c>${ssrInterpolate(label)}</button>`);
        });
        _push(`<!--]--><span class="highlight-underline" data-v-d8e7023c><span class="tab" data-v-d8e7023c></span></span></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d8e7023c"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=TabsHeader.8481728f.mjs.map
