import { v as useNuxtApp, k as useAppConfig, s as useRuntimeConfig, A as useCookie, B as callWithNuxt, C as updateAppConfig, D as refreshNuxtData } from '../server.mjs';
import { computed, createApp } from 'vue';
import ContentPreviewMode from './ContentPreviewMode.8e306735.mjs';
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
import 'vue/server-renderer';
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

const mergeDraft = (dbFiles, draftAdditions, draftDeletions) => {
  const additions = [...draftAdditions || []];
  const deletions = [...draftDeletions || []];
  const mergedFiles = [...dbFiles || []];
  for (const addition of additions) {
    if (addition.oldPath) {
      deletions.splice(deletions.findIndex((d) => d.path === addition.oldPath), 1);
      const oldPathExistInCache = additions.find((a) => a.path === addition.oldPath);
      if (oldPathExistInCache) {
        mergedFiles.push({ path: addition.path, parsed: addition.parsed });
      } else {
        const file = mergedFiles.find((f) => f.path === addition.oldPath);
        if (file) {
          file.path = addition.path;
          if (addition.parsed) {
            file.parsed = addition.parsed;
          } else if (addition.pathMeta) {
            ["_file", "_path", "_id", "_locale"].forEach((key) => {
              file.parsed[key] = addition.pathMeta[key];
            });
          }
        }
      }
    } else if (addition.new) {
      mergedFiles.push({ path: addition.path, parsed: addition.parsed });
    } else {
      const file = mergedFiles.find((f) => f.path === addition.path);
      if (file) {
        Object.assign(file, { path: addition.path, parsed: addition.parsed });
      }
    }
  }
  for (const deletion of deletions) {
    mergedFiles.splice(mergedFiles.findIndex((f) => f.path === deletion.path), 1);
  }
  return mergedFiles;
};
const createSingleton = (fn) => {
  let instance;
  return (...args) => {
    if (!instance) {
      instance = fn();
    }
    return instance;
  };
};
const useStudio = createSingleton(() => {
  const nuxtApp = useNuxtApp();
  const initialAppConfig = { ...useAppConfig() };
  const runtimeConfig = useRuntimeConfig().public.studio || {};
  const previewToken = useCookie("previewToken", { sameSite: "none", secure: true });
  const syncPreviewFiles = async (contentStorage, files, ignoreBuiltContents = true) => {
    const keys = await contentStorage.getKeys(`${previewToken.value}:`);
    await Promise.all(keys.map((key) => contentStorage.removeItem(key)));
    await contentStorage.setItem(
      `${previewToken.value}$`,
      JSON.stringify({
        ignoreBuiltContents
      })
    );
    await Promise.all(
      files.map((item) => {
        var _a;
        return contentStorage.setItem(`${previewToken.value}:${(_a = item.parsed) == null ? void 0 : _a._id}`, JSON.stringify(item.parsed));
      })
    );
  };
  const syncPreviewAppConfig = (appConfig) => {
    callWithNuxt(nuxtApp, updateAppConfig, [appConfig || initialAppConfig]);
  };
  const syncPreview = async (contentStorage) => {
    const data = await $fetch("api/projects/preview", {
      baseURL: runtimeConfig.apiURL,
      params: {
        token: previewToken.value
      }
    });
    const mergedFiles = mergeDraft(data.files, data.additions, data.deletions);
    const contentFiles = mergedFiles.filter((item) => item.path.startsWith("content"));
    await syncPreviewFiles(contentStorage, contentFiles, (data.files || []).length !== 0);
    const dotStudioFiles = mergedFiles.filter((item) => item.path.startsWith(".studio"));
    const appConfig = dotStudioFiles.find((item) => item.path === ".studio/app.config.json");
    syncPreviewAppConfig(appConfig == null ? void 0 : appConfig.parsed);
  };
  const requestPreviewSynchronization = async () => {
    await $fetch("api/projects/preview/sync", {
      baseURL: runtimeConfig.apiURL,
      method: "POST",
      params: {
        token: previewToken.value
      }
    });
  };
  const mountPreviewUI = (storage) => {
    const storageReady = computed(() => !!storage.value);
    const el = document.createElement("div");
    el.id = "__nuxt_preview_wrapper";
    document.body.appendChild(el);
    createApp(ContentPreviewMode, {
      previewToken,
      apiURL: runtimeConfig.apiURL,
      storageReady,
      refresh: () => syncPreview(storage.value).then(() => refreshNuxtData()),
      init: requestPreviewSynchronization
    }).mount(el);
  };
  return {
    apiURL: runtimeConfig.apiURL,
    previewToken,
    syncPreview,
    syncPreviewFiles,
    syncPreviewAppConfig,
    requestPreviewSynchronization,
    mountPreviewUI
  };
});

export { useStudio };
//# sourceMappingURL=useStudio.d0d08bd7.mjs.map
