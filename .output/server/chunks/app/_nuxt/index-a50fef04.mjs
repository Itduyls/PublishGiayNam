import { inject, watch, mergeProps, unref, useSSRContext } from 'vue';
import { a as useRoute, b as useRouter, d as useState, e as useRuntimeConfig } from '../server.mjs';
import { u as useAsyncData } from './asyncData-ff2c63f7.mjs';
import { u as useCookie, d as decr, H as HeadBar, S as SideBar, L as LoginView, e as encr } from './LoginView-36c4fae0.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './index.esm-c4d8e664.mjs';
import './index.esm-2c744238.mjs';
import 'cookie-es';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const storeUser = useState("user");
    const storeToken = useState("token");
    const storeLogin = useState("islogin");
    const cryoptojs = inject("cryptojs");
    const basedomainURL = useRuntimeConfig().public.apiBase;
    const SecretKey = useRuntimeConfig().public.SecretKey;
    useCookie("tk");
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
    ({
      headers: { Authorization: `Bearer ${storeToken.value}` }
    });
    const passModuleToSidebar = async () => {
      var link = route.fullPath;
      if (!link)
        return false;
      var module_name = link.split("/")[1];
      await useAsyncData(
        "sys_modules_getmodulefromlink_1",
        () => $fetch("/api/Proc/getData", {
          method: "POST",
          baseURL: basedomainURL,
          body: {
            str: encr(
              JSON.stringify({
                proc: "sys_modules_getmodulefromlink_1",
                par: [
                  { par: "link", va: module_name },
                  { par: "user_id", va: storeUser.value.user_id }
                ]
              }),
              SecretKey,
              cryoptojs
            ).toString()
          },
          headers: { Authorization: `Bearer ${storeToken.value}` }
        }).then((response) => {
          let data = JSON.parse(response.data);
          let root_path = route.fullPath;
          let arr_params = Object.values(route.params);
          if (arr_params.length > 0) {
            arr_params.forEach((item) => {
              let idx = root_path.lastIndexOf("/" + item);
              if (idx != -1) {
                root_path = root_path.substring(0, idx);
              }
            });
          }
          let path_system = ["/options", "/helperview"];
          if (data[1].filter((x) => x.is_link == root_path).length == 0 && !path_system.includes(root_path))
            router.push({ path: "/admin" });
        })
      );
    };
    watch(storeLogin, () => {
      if (route.fullPath && route.fullPath.length > 1 && storeLogin.value)
        passModuleToSidebar();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-column flex-grow-1 h-full" }, _attrs))}>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(HeadBar, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="body-layout flex flex-grow-1 w-full h-full">`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(SideBar, { class: "shadow-1 h-full" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(storeLogin)) {
        _push(`<div><div class="format-center w-full"><h1>Ch\xE0o m\u1EEBng b\u1EA1n \u0111\u1EBFn v\u1EDBi ph\u1EA7n m\u1EC1m qu\u1EA3n tr\u1ECB GIAYNAM.COM</h1></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-a50fef04.mjs.map
