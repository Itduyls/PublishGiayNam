import { ref, inject, withAsyncContext, useSSRContext } from 'vue';
import { _ as _export_sfc, e as useRuntimeConfig } from '../server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { H as Headbar } from './Headbar-2094d305.mjs';
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
import './nuxt-link-563b35af.mjs';
import './asyncData-ff2c63f7.mjs';
import './favicon-f3de5ccb.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './toolbar.esm-5b0c3172.mjs';
import './sidebar.esm-b64f0d19.mjs';
import './paginator.esm-79cc5f95.mjs';
import './index.esm-c4d8e664.mjs';

const _sfc_main = {
  __name: "[tag]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const basedomainURL = useRuntimeConfig().public.apiBase;
    ref([
      {
        src: "/Portals/thumbnails/background1s.png",
        alt: "background-1",
        title: "Title 1"
      },
      {
        src: "/Portals/thumbnails/background2s.png",
        alt: "background-2",
        title: "Title 2"
      },
      {
        src: "/Portals/thumbnails/background3s.png",
        alt: "background-3",
        title: "Title 3"
      }
    ]);
    const datalists = ref([]);
    useRuntimeConfig().public.SecretKey;
    inject("cryptojs");
    ref();
    const publicToken = useRuntimeConfig().public.publictoken;
    [__temp, __restore] = withAsyncContext(() => $fetch("/api/Proc/CallPublicProc", {
      method: "POST",
      baseURL: basedomainURL,
      body: {
        proc: "home_list",
        par: [{ par: "status", va: true }],
        publictoken: publicToken
      }
    }).then((response) => {
      let data = JSON.parse(response.data);
      if (data[0].length > 0) {
        datalists.value = data[0];
      }
    }).catch((error) => {
      console.log("l\u1ED7i", error);
      swal.fire({
        title: "Error!",
        text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
        icon: "error",
        confirmButtonText: "OK"
      });
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="w-full" data-v-b7c5b987>`);
      _push(ssrRenderComponent(Headbar, null, null, _parent));
      _push(`</div><div class="w-full" data-v-b7c5b987><div class="p-grid" data-v-b7c5b987><div class="col-12 p-0" data-v-b7c5b987> s </div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/danh-muc/[tag].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _tag_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b7c5b987"]]);

export { _tag_ as default };
//# sourceMappingURL=_tag_-f182c215.mjs.map
