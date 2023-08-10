import { inject, ref, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { _ as _export_sfc, e as useRuntimeConfig, d as useState, a as useRoute, b as useRouter } from '../server.mjs';
import { u as useCookie, d as decr, H as HeadBar, S as SideBar, L as LoginView } from './LoginView-36c4fae0.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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
import './asyncData-ff2c63f7.mjs';
import './index.esm-c4d8e664.mjs';
import './index.esm-2c744238.mjs';
import 'cookie-es';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const SecretKey = useRuntimeConfig().public.SecretKey;
    const cryoptojs = inject("cryptojs");
    const cookiesusl = useCookie("usl");
    const cookiesjwt = useCookie("jwt");
    const cookiesu = useCookie("u");
    if (cookiesu.value != null && cookiesu.value != "undefined") {
      let u = decr(cookiesu.value, SecretKey, cryoptojs);
      if (u != null) {
        useState(
          "user",
          () => JSON.parse(decr(cookiesu.value, SecretKey, cryoptojs))
        );
        useState("islogin", () => true);
      }
    }
    if (cookiesusl.value != null && cookiesjwt.value != null) {
      useState("token", () => decr(cookiesjwt.value, SecretKey, cryoptojs));
    }
    useRoute();
    useRouter();
    useState("user");
    const storeToken = useState("token");
    const storeLogin = useState("islogin");
    inject("$swal");
    ref(false);
    ({
      headers: { Authorization: `Bearer ${storeToken.value}` }
    });
    const images = ref([]);
    const responsiveOptions = ref([
      {
        breakpoint: "991px",
        numVisible: 4
      },
      {
        breakpoint: "767px",
        numVisible: 3
      },
      {
        breakpoint: "575px",
        numVisible: 1
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Galleria = resolveComponent("Galleria");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-column flex-grow-1 h-full" }, _attrs))} data-v-a595f3de>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(HeadBar, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="body-layout flex flex-grow-1 w-full h-full" data-v-a595f3de>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(SideBar, { class: "shadow-1 h-full" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(storeLogin)) {
        _push(`<div data-v-a595f3de><div class="main-layout true flex-grow-1 p-2 mt-3 pb-0 pr-0" data-v-a595f3de><div data-v-a595f3de><h3 class="module-title mt-0 ml-1 mb-2 align-items-center" data-v-a595f3de><i class="pi pi-home" style="${ssrRenderStyle({ "font-size": "large" })}" data-v-a595f3de></i> Thi\u1EBFt l\u1EADp trang ch\u1EE7 </h3></div><div class="card flex justify-content-center" data-v-a595f3de>`);
        _push(ssrRenderComponent(_component_Galleria, {
          value: images.value,
          responsiveOptions: responsiveOptions.value,
          numVisible: 5,
          containerStyle: "max-width: 640px",
          showThumbnails: false,
          showIndicators: true
        }, {
          item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", slotProps.item.itemImageSrc)}${ssrRenderAttr("alt", slotProps.item.alt)} style="${ssrRenderStyle({ "width": "100%", "display": "block" })}" data-v-a595f3de${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: slotProps.item.itemImageSrc,
                  alt: slotProps.item.alt,
                  style: { "width": "100%", "display": "block" }
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(storeLogin)) {
        _push(ssrRenderComponent(LoginView, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/system/config/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a595f3de"]]);

export { index as default };
//# sourceMappingURL=index-60501949.mjs.map
