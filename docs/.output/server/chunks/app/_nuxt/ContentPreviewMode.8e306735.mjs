import { _ as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, onUnmounted } from 'vue';
import { ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "ContentPreviewMode",
  __ssrInlineRender: true,
  props: {
    previewToken: {
      type: Object,
      required: true
    },
    apiURL: {
      type: String,
      required: true
    },
    storageReady: {
      type: Object,
      required: true
    },
    refresh: {
      type: Function,
      required: true
    },
    init: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const previewClasses = ["__nuxt_preview", "__preview_enabled"];
    const open = ref(true);
    const refreshing = ref(false);
    const apiReady = ref(false);
    const previewReady = ref(false);
    watch(() => apiReady.value, () => {
      if (props.storageReady.value) {
        props.refresh().then(() => {
          previewReady.value = true;
        });
      }
    });
    watch(() => props.storageReady.value, () => {
      if (apiReady.value) {
        props.refresh().then(() => {
          previewReady.value = true;
        });
      }
    });
    onUnmounted(() => {
      document.body.classList.remove(...previewClasses);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-efa0593f>`);
      if (open.value) {
        _push(`<div id="__nuxt_preview" class="${ssrRenderClass({ __preview_ready: previewReady.value, __preview_refreshing: refreshing.value })}" data-v-efa0593f>`);
        if (previewReady.value) {
          _push(`<!--[--><svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-efa0593f><path d="M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z" fill="currentColor" data-v-efa0593f></path></svg><span data-v-efa0593f>Preview mode enabled</span><button data-v-efa0593f> Close </button><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (open.value && !previewReady.value) {
        _push(`<div data-v-efa0593f><div id="__preview_background" data-v-efa0593f></div><div id="__preview_loader" data-v-efa0593f><svg id="__preview_loading_icon" width="32" height="32" viewBox="0 0 24 24" data-v-efa0593f><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15" data-v-efa0593f></path></svg><p data-v-efa0593f>Initializing the preview...</p><button data-v-efa0593f> Cancel </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxthq/studio/dist/runtime/components/ContentPreviewMode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentPreviewMode = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-efa0593f"]]);

export { ContentPreviewMode as default };
//# sourceMappingURL=ContentPreviewMode.8e306735.mjs.map
