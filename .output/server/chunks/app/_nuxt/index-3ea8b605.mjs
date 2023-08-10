import { e as useRuntimeConfig } from '../server.mjs';
import { withAsyncContext, resolveComponent, unref, useSSRContext } from 'vue';
import { c as clearNuxtData, u as useAsyncData } from './asyncData-ff2c63f7.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-cryptojs';
import 'vue-sweetalert2';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const baseURL = useRuntimeConfig().public;
    [__temp, __restore] = withAsyncContext(() => clearNuxtData("home")), await __temp, __restore();
    const datalists = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "home",
      () => $fetch(
        baseURL.apiBase + "/api/Cache/GetPublicToken?StrToken=" + baseURL.toKen
      )
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      _push(`<!--[--><div>`);
      _push(ssrRenderComponent(_component_Button, {
        label: "sos",
        icon: "pi pi-plus"
      }, null, _parent));
      _push(`</div><div>${ssrInterpolate(unref(datalists))}</div><div>${ssrInterpolate(unref(baseURL).apiBase)}</div><div>${ssrInterpolate(unref(baseURL).toKen)}</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3ea8b605.mjs.map
