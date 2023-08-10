import { inject, ref, watch, onMounted, resolveComponent, resolveDirective, mergeProps, unref, withCtx, createVNode, withKeys, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, withDirectives, withModifiers, useSSRContext, createElementBlock, createElementVNode, renderSlot, normalizeProps, guardReactiveProps } from 'vue';
import { f as useStyle, _ as _export_sfc, l as useToast, e as useRuntimeConfig, d as useState, a as useRoute, b as useRouter, g as script$4$3, U as UniqueComponentId, s as script$6$3 } from '../server.mjs';
import { u as useCookie, d as decr, H as HeadBar, S as SideBar, f as script$a, c as script$b, g as script$6$1, L as LoginView, h as getParent } from './LoginView-36c4fae0.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as script$9, s as script$4$2 } from './dialog.esm-d5eb41c3.mjs';
import { s as script$4, a as script$2$1 } from './dataview.esm-c98c1808.mjs';
import { s as script$6 } from './toolbar.esm-5b0c3172.mjs';
import { s as script$4$1, a as script$8, b as script$3$1 } from './checkbox.esm-05dfc993.mjs';
import { s as script$i, a as script$e } from './paginator.esm-79cc5f95.mjs';
import { s as script$6$2, a as script$c } from './fileupload.esm-880463ee.mjs';
import { s as script$7 } from './treeselect.esm-9543014b.mjs';
import { s as script$5 } from './chip.esm-ac1c03e2.mjs';
import { required, maxLength, minLength, email } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './index.esm-a1c6b8ad.mjs';
import './index.esm-5b5a4d3f.mjs';

var script$3 = {
  name: "ThLargeIcon",
  "extends": script$4$3,
  computed: {
    pathId: function pathId() {
      return "pv_icon_clip_".concat(UniqueComponentId());
    }
  }
};
var _hoisted_1$2 = ["clipPath"];
var _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M1.90909 6.36364H4.45455C4.96087 6.36364 5.44645 6.1625 5.80448 5.80448C6.1625 5.44645 6.36364 4.96087 6.36364 4.45455V1.90909C6.36364 1.40277 6.1625 0.917184 5.80448 0.55916C5.44645 0.201136 4.96087 0 4.45455 0H1.90909C1.40277 0 0.917184 0.201136 0.55916 0.55916C0.201136 0.917184 0 1.40277 0 1.90909V4.45455C0 4.96087 0.201136 5.44645 0.55916 5.80448C0.917184 6.1625 1.40277 6.36364 1.90909 6.36364ZM1.46154 1.46154C1.58041 1.34268 1.741 1.27492 1.90909 1.27273H4.45455C4.62264 1.27492 4.78322 1.34268 4.90209 1.46154C5.02096 1.58041 5.08871 1.741 5.09091 1.90909V4.45455C5.08871 4.62264 5.02096 4.78322 4.90209 4.90209C4.78322 5.02096 4.62264 5.08871 4.45455 5.09091H1.90909C1.741 5.08871 1.58041 5.02096 1.46154 4.90209C1.34268 4.78322 1.27492 4.62264 1.27273 4.45455V1.90909C1.27492 1.741 1.34268 1.58041 1.46154 1.46154ZM1.90909 14H4.45455C4.96087 14 5.44645 13.7989 5.80448 13.4408C6.1625 13.0828 6.36364 12.5972 6.36364 12.0909V9.54544C6.36364 9.03912 6.1625 8.55354 5.80448 8.19551C5.44645 7.83749 4.96087 7.63635 4.45455 7.63635H1.90909C1.40277 7.63635 0.917184 7.83749 0.55916 8.19551C0.201136 8.55354 0 9.03912 0 9.54544V12.0909C0 12.5972 0.201136 13.0828 0.55916 13.4408C0.917184 13.7989 1.40277 14 1.90909 14ZM1.46154 9.0979C1.58041 8.97903 1.741 8.91128 1.90909 8.90908H4.45455C4.62264 8.91128 4.78322 8.97903 4.90209 9.0979C5.02096 9.21677 5.08871 9.37735 5.09091 9.54544V12.0909C5.08871 12.259 5.02096 12.4196 4.90209 12.5384C4.78322 12.6573 4.62264 12.7251 4.45455 12.7273H1.90909C1.741 12.7251 1.58041 12.6573 1.46154 12.5384C1.34268 12.4196 1.27492 12.259 1.27273 12.0909V9.54544C1.27492 9.37735 1.34268 9.21677 1.46154 9.0979ZM12.0909 6.36364H9.54544C9.03912 6.36364 8.55354 6.1625 8.19551 5.80448C7.83749 5.44645 7.63635 4.96087 7.63635 4.45455V1.90909C7.63635 1.40277 7.83749 0.917184 8.19551 0.55916C8.55354 0.201136 9.03912 0 9.54544 0H12.0909C12.5972 0 13.0828 0.201136 13.4408 0.55916C13.7989 0.917184 14 1.40277 14 1.90909V4.45455C14 4.96087 13.7989 5.44645 13.4408 5.80448C13.0828 6.1625 12.5972 6.36364 12.0909 6.36364ZM9.54544 1.27273C9.37735 1.27492 9.21677 1.34268 9.0979 1.46154C8.97903 1.58041 8.91128 1.741 8.90908 1.90909V4.45455C8.91128 4.62264 8.97903 4.78322 9.0979 4.90209C9.21677 5.02096 9.37735 5.08871 9.54544 5.09091H12.0909C12.259 5.08871 12.4196 5.02096 12.5384 4.90209C12.6573 4.78322 12.7251 4.62264 12.7273 4.45455V1.90909C12.7251 1.741 12.6573 1.58041 12.5384 1.46154C12.4196 1.34268 12.259 1.27492 12.0909 1.27273H9.54544ZM9.54544 14H12.0909C12.5972 14 13.0828 13.7989 13.4408 13.4408C13.7989 13.0828 14 12.5972 14 12.0909V9.54544C14 9.03912 13.7989 8.55354 13.4408 8.19551C13.0828 7.83749 12.5972 7.63635 12.0909 7.63635H9.54544C9.03912 7.63635 8.55354 7.83749 8.19551 8.19551C7.83749 8.55354 7.63635 9.03912 7.63635 9.54544V12.0909C7.63635 12.5972 7.83749 13.0828 8.19551 13.4408C8.55354 13.7989 9.03912 14 9.54544 14ZM9.0979 9.0979C9.21677 8.97903 9.37735 8.91128 9.54544 8.90908H12.0909C12.259 8.91128 12.4196 8.97903 12.5384 9.0979C12.6573 9.21677 12.7251 9.37735 12.7273 9.54544V12.0909C12.7251 12.259 12.6573 12.4196 12.5384 12.5384C12.4196 12.6573 12.259 12.7251 12.0909 12.7273H9.54544C9.37735 12.7251 9.21677 12.6573 9.0979 12.5384C8.97903 12.4196 8.91128 12.259 8.90908 12.0909V9.54544C8.91128 9.37735 8.97903 9.21677 9.0979 9.0979Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3 = [_hoisted_2$1];
var _hoisted_4 = ["id"];
var _hoisted_5 = /* @__PURE__ */ createElementVNode("rect", {
  width: "14",
  height: "14",
  fill: "white"
}, null, -1);
var _hoisted_6 = [_hoisted_5];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), [createElementVNode("g", {
    clipPath: "url(#".concat($options.pathId, ")")
  }, _hoisted_3, 8, _hoisted_1$2), createElementVNode("defs", null, [createElementVNode("clipPath", {
    id: "".concat($options.pathId)
  }, _hoisted_6, 8, _hoisted_4)])], 16);
}
script$3.render = render$2;
var classes$1 = {
  root: "p-dataview-layout-options p-selectbutton p-buttonset",
  listButton: function listButton(_ref) {
    var props = _ref.props;
    return ["p-button p-button-icon-only", {
      "p-highlight": props.modelValue === "list"
    }];
  },
  gridButton: function gridButton(_ref2) {
    var props = _ref2.props;
    return ["p-button p-button-icon-only", {
      "p-highlight": props.modelValue === "grid"
    }];
  }
};
var script$1$1 = {
  name: "BaseDataViewLayoutOptions",
  "extends": script$6$3,
  props: {
    modelValue: String
  },
  css: {
    classes: classes$1
  },
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script$2 = {
  name: "DataViewLayoutOptions",
  "extends": script$1$1,
  emits: ["update:modelValue"],
  data: function data() {
    return {
      isListButtonPressed: false,
      isGridButtonPressed: false
    };
  },
  methods: {
    changeLayout: function changeLayout(layout) {
      this.$emit("update:modelValue", layout);
      if (layout === "list") {
        this.isListButtonPressed = true;
        this.isGridButtonPressed = false;
      } else if (layout === "grid") {
        this.isGridButtonPressed = true;
        this.isListButtonPressed = false;
      }
    }
  },
  computed: {
    listViewAriaLabel: function listViewAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listView : void 0;
    },
    gridViewAriaLabel: function gridViewAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.gridView : void 0;
    }
  },
  components: {
    BarsIcon: script$3$1,
    ThLargeIcon: script$3
  }
};
var _hoisted_1$1 = ["aria-label", "aria-pressed"];
var _hoisted_2 = ["aria-label", "aria-pressed"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BarsIcon = resolveComponent("BarsIcon");
  var _component_ThLargeIcon = resolveComponent("ThLargeIcon");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "group"
  }, _ctx.ptm("root")), [createElementVNode("button", mergeProps({
    "aria-label": $options.listViewAriaLabel,
    "class": _ctx.cx("listButton"),
    onClick: _cache[0] || (_cache[0] = function($event) {
      return $options.changeLayout("list");
    }),
    type: "button",
    "aria-pressed": $data.isListButtonPressed
  }, _ctx.ptm("listButton")), [renderSlot(_ctx.$slots, "listicon", {}, function() {
    return [createVNode(_component_BarsIcon, normalizeProps(guardReactiveProps(_ctx.ptm("listIcon"))), null, 16)];
  })], 16, _hoisted_1$1), createElementVNode("button", mergeProps({
    "aria-label": $options.gridViewAriaLabel,
    "class": _ctx.cx("gridButton"),
    onClick: _cache[1] || (_cache[1] = function($event) {
      return $options.changeLayout("grid");
    }),
    type: "button",
    "aria-pressed": $data.isGridButtonPressed
  }, _ctx.ptm("gridButton")), [renderSlot(_ctx.$slots, "gridicon", {}, function() {
    return [createVNode(_component_ThLargeIcon, normalizeProps(guardReactiveProps(_ctx.ptm("gridIcon"))), null, 16)];
  })], 16, _hoisted_2)], 16);
}
script$2.render = render$1;
var styles = "\n.p-divider-horizontal {\n    display: flex;\n    width: 100%;\n    position: relative;\n    align-items: center;\n}\n\n.p-divider-horizontal:before {\n    position: absolute;\n    display: block;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    content: '';\n}\n\n.p-divider-horizontal.p-divider-left {\n    justify-content: flex-start;\n}\n\n.p-divider-horizontal.p-divider-right {\n    justify-content: flex-end;\n}\n\n.p-divider-horizontal.p-divider-center {\n    justify-content: center;\n}\n\n.p-divider-content {\n    z-index: 1;\n}\n\n.p-divider-vertical {\n    min-height: 100%;\n    margin: 0 1rem;\n    display: flex;\n    position: relative;\n    justify-content: center;\n}\n\n.p-divider-vertical:before {\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 50%;\n    height: 100%;\n    content: '';\n}\n\n.p-divider-vertical.p-divider-top {\n    align-items: flex-start;\n}\n\n.p-divider-vertical.p-divider-center {\n    align-items: center;\n}\n\n.p-divider-vertical.p-divider-bottom {\n    align-items: flex-end;\n}\n\n.p-divider-solid.p-divider-horizontal:before {\n    border-top-style: solid;\n}\n\n.p-divider-solid.p-divider-vertical:before {\n    border-left-style: solid;\n}\n\n.p-divider-dashed.p-divider-horizontal:before {\n    border-top-style: dashed;\n}\n\n.p-divider-dashed.p-divider-vertical:before {\n    border-left-style: dashed;\n}\n\n.p-divider-dotted.p-divider-horizontal:before {\n    border-top-style: dotted;\n}\n\n.p-divider-dotted.p-divider-vertical:before {\n    border-left-style: dotted;\n}\n";
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-divider p-component", "p-divider-" + props.layout, "p-divider-" + props.type, {
      "p-divider-left": props.layout === "horizontal" && (!props.align || props.align === "left")
    }, {
      "p-divider-center": props.layout === "horizontal" && props.align === "center"
    }, {
      "p-divider-right": props.layout === "horizontal" && props.align === "right"
    }, {
      "p-divider-top": props.layout === "vertical" && props.align === "top"
    }, {
      "p-divider-center": props.layout === "vertical" && (!props.align || props.align === "center")
    }, {
      "p-divider-bottom": props.layout === "vertical" && props.align === "bottom"
    }];
  },
  content: "p-divider-content"
};
var _useStyle = useStyle(styles, {
  name: "divider",
  manual: true
}), loadStyle = _useStyle.load;
var script$1 = {
  name: "BaseDivider",
  "extends": script$6$3,
  props: {
    align: {
      type: String,
      "default": null
    },
    layout: {
      type: String,
      "default": "horizontal"
    },
    type: {
      type: String,
      "default": "solid"
    }
  },
  css: {
    classes,
    loadStyle
  },
  provide: function provide2() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Divider",
  "extends": script$1
};
var _hoisted_1 = ["aria-orientation"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "separator",
    "aria-orientation": _ctx.layout
  }, _ctx.ptm("root"), {
    "data-pc-name": "divider"
  }), [_ctx.$slots["default"] ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("content")
  }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default")], 16)) : createCommentVNode("", true)], 16, _hoisted_1);
}
script.render = render;
const item = "/Portals/Mau Excel/M\u1EABu Excel Ng\u01B0\u1EDDi D\xF9ng.xlsx";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
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
    const storeUser = useState("user");
    const storeToken = useState("token");
    const storeLogin = useState("islogin");
    ref(false);
    ref(true);
    ref();
    const user = ref({
      full_name: "",
      is_order: 1,
      is_admin: true,
      status: 1,
      party_position_id: ""
    });
    const submitted = ref(false);
    const rules = {
      user_id: {
        required,
        maxLength: maxLength(50)
      },
      full_name: {
        required,
        maxLength: maxLength(250)
      },
      is_psword: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(100)
      },
      email: {
        email
      }
    };
    const v$ = useVuelidate(rules, user);
    const is_coppy_module = ref(false);
    const isPasteModule = ref(false);
    ref();
    const different_module_move = ref(false);
    ref();
    ref();
    ref();
    const checkFilter = ref(false);
    const filterButs = ref();
    const isDisplayAvt = ref(false);
    const isChuky = ref(false);
    const isKynhay = ref(false);
    ref({});
    const isAdd = ref(true);
    ref();
    const selectedNodes = ref([]);
    ref({});
    const isPaginator = ref(false);
    const opition = ref({
      search: "",
      PageNo: 1,
      PageSize: 20,
      Filteruser_id: null,
      user_id: storeUser.value.user_id,
      status: null,
      is_role: false
    });
    const bgColor = ref([
      "#F8E69A",
      "#AFDFCF",
      "#F4B2A3",
      "#9A97EC",
      "#CAE2B0",
      "#8BCFFB",
      "#CCADD7"
    ]);
    const selectCapcha = ref();
    selectCapcha.value = {};
    selectCapcha.value[storeUser.value.organization_id] = true;
    const selectCap = ref();
    selectCap.value = {};
    selectCap.value[storeUser.value.is_super ? -1 : storeUser.value.organization_id] = true;
    const users = ref();
    const isShowBtnDel = ref(false);
    const displayAddUser = ref(false);
    const isFirst = ref(true);
    let files = [];
    const swal = inject("$swal");
    const basedomainURL = useRuntimeConfig().public.apiBase;
    const layout = ref("grid");
    ({
      headers: { Authorization: `Bearer ${storeToken.value}` }
    });
    const tdstatuss = ref([
      { value: 0, text: "Kho\xE1" },
      { value: 1, text: "K\xEDch ho\u1EA1t" },
      { value: 2, text: "\u0110\u1EE3i x\xE1c th\u1EF1c" }
    ]);
    const tdCheckquyens = ref([
      { value: 0, text: "Quy\u1EC1n theo nh\xF3m ng\u01B0\u1EDDi d\xF9ng" },
      { value: 1, text: "Quy\u1EC1n c\xE1 nh\xE2n" }
    ]);
    const genders = ref([
      { value: 1, text: "Nam" },
      { value: 0, text: "N\u1EEF" }
    ]);
    const tdRoles = ref([
      {
        role_name: "Admin",
        role_id: "admin"
      },
      {
        role_name: "Nh\xE2n vi\xEAn",
        role_id: "nhanvien"
      },
      {
        role_name: "Kho",
        role_id: "kho"
      }
    ]);
    const chucvus = ref([
      {
        position_name: "Admin",
        position_id: 1
      },
      {
        position_name: "Nh\xE2n vi\xEAn",
        position_id: 2
      },
      {
        position_name: "Kho",
        position_id: 3
      }
    ]);
    const menuButs = ref();
    const menuButMores = ref();
    const itemButs = ref([
      {
        label: "Xu\u1EA5t Excel",
        icon: "pi pi-file-excel",
        command: (event) => {
          exportUser("ExportExcel");
        }
      },
      {
        label: "Nh\u1EADp Excel",
        icon: "pi pi-file-excel",
        command: (event) => {
          ImportExcel();
        }
      }
    ]);
    const displayImport = ref(false);
    const ImportExcel = () => {
      displayImport.value = true;
      file_import = [];
    };
    let file_import = [];
    const removeFile = (event) => {
      file_import = [];
    };
    const selectFile = (event) => {
      event.files.forEach((element) => {
        file_import.push(element);
      });
    };
    const Upload = () => {
      displayImport.value = false;
      let formData = new FormData();
      swal.fire({
        width: 110,
        didOpen: () => {
          swal.showLoading();
        }
      });
      for (var i = 0; i < file_import.length; i++) {
        let file = file_import[i];
        formData.append("url_file", file);
      }
      formData.append("id", JSON.stringify("1234"));
      $fetch("/api/ImportExcel/Import_User", {
        method: "POST",
        baseURL: basedomainURL,
        formData: {
          formData
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        if (response.err != "1") {
          swal.close();
          var mss = response.count ? "\u0110\xE3 th\xEAm th\xE0nh c\xF4ng " + (response.count || 0) + " ng\u01B0\u1EDDi d\xF9ng" : "Nh\u1EADp d\u1EEF li\u1EC7u th\xE0nh c\xF4ng";
          toast.success(mss);
          loadUser(true);
        } else {
          swal.fire({
            title: "Th\xF4ng b\xE1o",
            html: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      }).catch((error) => {
        swal.close();
        swal.fire({
          title: "Th\xF4ng b\xE1o",
          text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
          icon: "error",
          confirmButtonText: "OK"
        });
      });
    };
    const itemButMores = ref([
      {
        label: "S\u1EEDa th\xF4ng tin",
        icon: "pi pi-user-edit",
        command: (event) => {
          editUser(user.value);
        }
      },
      // {
      //   label: "Cấu hình môn học",
      //   icon: "pi pi-book",
      //   command: (event) => {
      //     configMonhoc(user.value);
      //   },
      // },
      {
        label: "Xo\xE1",
        icon: "pi pi-trash",
        command: (event) => {
          delUser(user.value);
        }
      }
    ]);
    const toggleFilter = (event) => {
      filterButs.value.toggle(event);
    };
    const filterUser = () => {
      checkFilter.value = true;
      loadUser(true);
    };
    const reFilterUser = () => {
      opition.value.position_id = null;
      opition.value.role_id = null;
      opition.value.status = null;
      opition.value.check_quyen = null;
      checkFilter.value = false;
      selectCapcha.value = {};
      selectCapcha.value[-1] = true;
      loadUser(true);
    };
    watch(opition, () => {
      if (opition.value.position_id !== null || opition.value.role_id !== null || opition.value.status !== null || opition.value.check_quyen !== null || Object.keys(selectCap.value)[0] !== "-1") {
        checkFilter.value = true;
      }
      if (opition.value.position_id == null && opition.value.role_id == null && opition.value.check_quyen == null && opition.value.status == null && Object.keys(selectCap.value)[0] == "-1") {
        checkFilter.value = false;
      }
    });
    watch(selectCapcha, () => {
      if (opition.value.position_id !== null || opition.value.role_id !== null || opition.value.status !== null || opition.value.check_quyen !== null || Object.keys(selectCap.value)[0] !== "-1") {
        checkFilter.value = true;
      }
      if (opition.value.position_id == null && opition.value.role_id == null && opition.value.status == null && opition.value.check_quyen == null && Object.keys(selectCapcha.value)[0] == "-1") {
        checkFilter.value = false;
      }
    });
    ref([]);
    const handleFileUpload = (event, type) => {
      switch (type) {
        case "Anhdaidien":
          isDisplayAvt.value = true;
          break;
        case "Chuky":
          isChuky.value = true;
          break;
        case "Kynhay":
          isKynhay.value = true;
          break;
      }
      files[type] = event.target.files[0];
      var output = document.getElementById(type);
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function() {
        URL.revokeObjectURL(output.src);
      };
    };
    const showModalAddUser = () => {
      files = [];
      isAdd.value = true;
      submitted.value = false;
      files = [];
      user.value = {
        full_name: null,
        is_psword: null,
        is_order: opition.value.totalrecords + 1,
        status: 1,
        role_id: "nhanvien",
        is_admin: false,
        organization_id: storeUser.value.organization_id,
        display_birthday: true,
        email: null,
        is_booking: true
      };
      user.value.old_ps = user.value.is_psword;
      displayAddUser.value = true;
      if (document.querySelector("#AnhUser"))
        document.querySelector("#AnhUser").value = "";
      if (document.querySelector("#UserKynhay"))
        document.querySelector("#UserKynhay").value = "";
      if (document.querySelector("#UserChuky"))
        document.querySelector("#UserChuky").value = "";
    };
    const chonanh = (id) => {
      document.getElementById(id).click();
    };
    const closedisplayAddUser = () => {
      displayAddUser.value = false;
    };
    const delImg = (id) => {
      files[id] = [];
      var output = document.getElementById(id);
      output.src = basedomainURL + "/Portals/Image/noimg.jpg";
      switch (id) {
        case "Anhdaidien":
          isDisplayAvt.value = false;
          user.value.avatar = null;
          break;
        case "Chuky":
          isChuky.value = false;
          user.value.signature = null;
          break;
        case "Kynhay":
          isKynhay.value = false;
          user.value.flash_signature = null;
          break;
      }
    };
    const onRefersh = () => {
      isPasteModule.value = false;
      is_coppy_module.value = false;
      different_module_move.value = false;
      opition.value = {
        search: "",
        PageNo: 1,
        PageSize: 20,
        Filteruser_id: null,
        user_id: storeUser.value.user_id,
        status: null,
        tenstatus: "",
        filter_department: -1,
        check_quyen: null
      };
      layout.value = "grid";
      displayPhongban.value = false;
      loadUser(true);
    };
    const onSearch = () => {
      opition.value.PageNo = 1;
      loadUser(true);
    };
    const donvis = ref();
    const treedonvis = ref();
    const renderTreeDV = (data2, id, name, title) => {
      let arrChils = [];
      let arrtreeChils = [];
      data2.filter((x) => x.parent_id == null).forEach((m, i) => {
        m.IsOrder = i + 1;
        let om = { key: m[id], data: m };
        const rechildren = (mm, pid) => {
          let dts = data2.filter((x) => x.parent_id == pid);
          if (dts.length > 0) {
            if (!mm.children)
              mm.children = [];
            dts.forEach((em) => {
              let om1 = { key: em[id], data: em };
              rechildren(om1, em[id]);
              mm.children.push(om1);
            });
          }
        };
        rechildren(om, m[id]);
        arrChils.push(om);
        om = { key: m[id], data: m[id], label: m[name] };
        const retreechildren = (mm, pid) => {
          let dts = data2.filter((x) => x.parent_id == pid);
          if (dts.length > 0) {
            if (!mm.children)
              mm.children = [];
            dts.forEach((em) => {
              let om1 = { key: em[id], data: em[id], label: em[name] };
              retreechildren(om1, em[id]);
              mm.children.push(om1);
            });
          }
        };
        retreechildren(om, m[id]);
        arrtreeChils.push(om);
      });
      arrtreeChils.unshift({
        key: -1,
        data: -1,
        label: "-----Ch\u1ECDn " + title + "----"
      });
      return { arrChils, arrtreeChils };
    };
    const loadCount = (f) => {
      $fetch("/api/Proc/CallProc", {
        method: "POST",
        baseURL: basedomainURL,
        body: {
          proc: "sys_users_count_1",
          par: [
            { par: "search", va: opition.value.search },
            { par: "user_id", va: opition.value.user_id },
            { par: "organization_id", va: opition.value.organization_id },
            { par: "department_id", va: opition.value.department_id },
            { par: "position_id", va: opition.value.position_id },
            { par: "pageno", va: opition.value.PageNo },
            { par: "pagesize", va: opition.value.PageSize },
            { par: "status", va: opition.value.status }
          ]
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let data2 = JSON.parse(response.data)[0];
        if (data2.length > 0) {
          opition.value.totalrecords = data2[0].totalrecords;
          if (f)
            opition.value.totalrecords > opition.value.PageSize ? isPaginator.value = true : isPaginator.value = false;
          opition.value.totalrecords > 0 ? isPaginator.value = true : isPaginator.value = false;
        }
      }).catch((error) => {
      });
    };
    const onPage = (event) => {
      isPaginator.value = true;
      opition.value.PageNo = event.page + 1;
      opition.value.PageSize = event.rows;
      loadUser(true);
    };
    const goDonvi = (u) => {
      selectCapcha.value = {};
      if (u) {
        opition.value.department_id = u.department_id;
        opition.value.organization_id = u.organization_id;
        opition.value.organization_name = u.organization_name;
        selectCapcha.value[opition.value.department_id] = true;
      } else {
        opition.value.department_id = null;
        opition.value.organization_name = null;
        opition.value.organization_id = null;
        selectCapcha.value[storeUser.value.organization_id] = true;
      }
      opition.value.PageNo = 1;
      loadUser(true);
    };
    const goChucvu = (u) => {
      if (u) {
        opition.value.position_id = u.position_id;
        opition.value.position_name = u.position_name;
      } else {
        opition.value.position_id = null;
        opition.value.position_name = null;
      }
      opition.value.PageNo = 1;
      loadUser(true);
    };
    const goRole = (u) => {
      if (u) {
        opition.value.role_id = u.role_id;
        opition.value.role_name = u.role_name;
        opition.value.text_color = u.text_color;
        opition.value.background_color = u.background_color;
      } else {
        opition.value.role_id = null;
        opition.value.role_name = null;
      }
      opition.value.PageNo = 1;
      loadUser(true);
    };
    const gostatus = (u) => {
      if (u) {
        opition.value.status = u.status;
        opition.value.tenstatus = u.tenstatus;
      } else {
        opition.value.status = null;
        opition.value.tenstatus = null;
      }
      opition.value.PageNo = 1;
      loadUser(true);
    };
    const goQuyen = (u) => {
      if (u) {
        opition.value.check_quyen = u.check_quyen;
        opition.value.check_quyen_label = u.check_quyen_label;
      } else {
        opition.value.check_quyen = null;
        opition.value.check_quyen_label = null;
      }
      opition.value.PageNo = 1;
      loadUser(true);
    };
    const drd_Doc_Ca_positions = ref([]);
    const loadUser = (rf, rfpb) => {
      if (opition.value.role_id != null)
        opition.value.role_name = tdRoles.value.filter(
          (x) => x.role_id == opition.value.role_id
        )[0].role_name;
      else
        opition.value.role_name = null;
      if (opition.value.status != null)
        opition.value.tenstatus = tdstatuss.value.filter(
          (x) => x.value == opition.value.status
        )[0].text;
      else
        opition.value.tenstatus = null;
      if (opition.value.position_id != null)
        opition.value.position_name = chucvus.value.filter(
          (x) => x.position_id == opition.value.position_id
        )[0].position_name;
      else
        opition.value.position_name = null;
      if (selectCap.value !== null) {
        opition.value.filter_department = parseInt(Object.keys(selectCap.value)[0]);
      }
      if (opition.value.check_quyen != null)
        opition.value.check_quyen_label = tdCheckquyens.value.filter(
          (x) => x.value == opition.value.check_quyen
        )[0].text;
      else
        opition.value.check_quyen_label = null;
      if (rf) {
        opition.value.loading = true;
        swal.fire({
          width: 110,
          didOpen: () => {
            swal.showLoading();
          }
        });
        loadCount();
      }
      $fetch("/api/Proc/CallProc", {
        method: "POST",
        baseURL: basedomainURL,
        body: {
          proc: "sys_users_list_3",
          par: [
            { par: "search", va: opition.value.search },
            { par: "user_id", va: opition.value.user_id },
            { par: "organization_id", va: opition.value.organization_id },
            { par: "department_id", va: opition.value.department_id },
            { par: "position_id", va: opition.value.position_id },
            { par: "pageno", va: opition.value.PageNo || 1 },
            { par: "pagesize", va: opition.value.PageSize || 20 },
            { par: "status", va: opition.value.status }
          ]
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let data2 = JSON.parse(response.data)[0];
        let listSelect = JSON.parse(response.data)[1];
        drd_Doc_Ca_positions.value = listSelect != null ? listSelect : [];
        if (data2.length > 0) {
          data2.forEach((item2, index2) => {
            let fullName = item2.full_name.split(" ");
            item2.lastName = fullName[fullName.length - 1];
            item2.stt = index2 + 1;
          });
          users.value = data2;
        } else {
          users.value = [];
        }
        if (isFirst.value)
          isFirst.value = false;
        if (rf) {
          opition.value.loading = false;
          swal.close();
        }
        if (rfpb || displayPhongban.value == true) {
          initUserPhongban();
        }
      }).catch((error) => {
        console.log(error);
        if (error && error.status === 401) {
          swal.fire({
            text: "M\xE3 token \u0111\xE3 h\u1EBFt h\u1EA1n ho\u1EB7c kh\xF4ng h\u1EE3p l\u1EC7, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
            confirmButtonText: "OK"
          });
        }
      });
    };
    const editUser = (md) => {
      files = [];
      submitted.value = false;
      isAdd.value = false;
      swal.fire({
        width: 110,
        didOpen: () => {
          swal.showLoading();
        }
      });
      displayAddUser.value = true;
      $fetch("/api/Proc/CallProc", {
        method: "POST",
        baseURL: basedomainURL,
        body: {
          proc: "sys_users_get",
          par: [{ par: "user_id", va: md.user_id }]
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        swal.close();
        let data2 = JSON.parse(response.data);
        if (data2.length > 0) {
          user.value = data2[0][0];
          user.value.old_ps = user.value.is_psword;
          if (user.value.birthday) {
            var dt = new Date(user.value.birthday);
            user.value.birthday = new Date(
              dt.getFullYear(),
              dt.getMonth(),
              dt.getDate()
            );
          }
          selectCapcha.value = {};
          selectCapcha.value[user.value.department_id || "-1"] = true;
        }
      }).catch((error) => {
        if (error.status === 401) {
          swal.fire({
            text: "M\xE3 token \u0111\xE3 h\u1EBFt h\u1EA1n ho\u1EB7c kh\xF4ng h\u1EE3p l\u1EC7, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
            confirmButtonText: "OK"
          });
        }
      });
    };
    const handleSubmit = (isFormValid) => {
      submitted.value = true;
      if (!isFormValid) {
        return;
      }
      if (user.value.user_id.length > 50) {
        swal.fire({
          title: "Th\xF4ng b\xE1o!",
          text: "Vui l\xF2ng ch\u1ECDn t\xEAn \u0111\u0103ng nh\u1EADp kh\xF4ng qu\xE1 50 k\xFD t\u1EF1!",
          icon: "error",
          confirmButtonText: "OK"
        });
        return;
      }
      if (user.value.full_name.length > 500) {
        swal.fire({
          title: "Th\xF4ng b\xE1o!",
          text: "Vui l\xF2ng ch\u1ECDn h\u1ECD t\xEAn kh\xF4ng qu\xE1 500 k\xFD t\u1EF1!",
          icon: "error",
          confirmButtonText: "OK"
        });
        return;
      }
      if (user.value.is_psword.length < 8) {
        swal.fire({
          title: "Th\xF4ng b\xE1o!",
          text: "Vui l\xF2ng ch\u1ECDn m\u1EADt kh\u1EA9u c\xF3 \xEDt nh\u1EA5t 8 k\xFD t\u1EF1!",
          icon: "error",
          confirmButtonText: "OK"
        });
        return;
      }
      if (!user.value.role_id) {
        swal.fire({
          title: "Th\xF4ng b\xE1o!",
          text: "Vui l\xF2ng ch\u1ECDn nh\xF3m ng\u01B0\u1EDDi d\xF9ng!",
          icon: "error",
          confirmButtonText: "OK"
        });
        return;
      }
      let pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?!.* ).{8,}$/;
      if (isAdd.value == false) {
        if (user.value.is_psword != user.value.old_ps && !pattern.test(user.value.is_psword)) {
          swal.fire({
            title: "Th\xF4ng b\xE1o!",
            text: "Vui l\xF2ng ch\u1ECDn m\u1EADt kh\u1EA9u c\xF3 \xEDt nh\u1EA5t 8 k\xFD t\u1EF1, c\xF3 ch\u1EE9a t\u1ED1i thi\u1EC3u 1 ch\u1EEF c\xE1i, 1 ch\u1EEF s\u1ED1 v\xE0 1 k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t!",
            icon: "error",
            confirmButtonText: "OK"
          });
          return;
        }
      } else {
        if (user.value.is_psword != user.value.old_ps && !pattern.test(user.value.is_psword)) {
          swal.fire({
            title: "Th\xF4ng b\xE1o!",
            text: "Vui l\xF2ng ch\u1ECDn m\u1EADt kh\u1EA9u c\xF3 \xEDt nh\u1EA5t 8 k\xFD t\u1EF1, c\xF3 ch\u1EE9a t\u1ED1i thi\u1EC3u 1 ch\u1EEF c\xE1i, 1 ch\u1EEF s\u1ED1 v\xE0 1 k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t!",
            icon: "error",
            confirmButtonText: "OK"
          });
          return;
        }
      }
      let keys = Object.keys(selectCapcha.value);
      user.value.department_id = keys[0];
      if (user.value.department_id == -1) {
        user.value.department_id = null;
        user.value.organization_id = null;
      }
      if (user.value.department_id) {
        const result = getParent(treedonvis.value, user.value.department_id, "key");
        user.value.organization_id = result.key;
      }
      user.value.organization_id = storeUser.value.organization_id;
      if (user.value.full_name) {
        user.value.last_name = user.value.full_name.split(" ").slice(-1).join(" ");
        user.value.full_name_en = removeVietnameseTones(user.value.full_name);
      }
      addUser();
    };
    const addUser = () => {
      let formData = new FormData();
      for (var k in files) {
        let file = files[k];
        formData.append(k, file);
      }
      formData.append("model", JSON.stringify(user.value));
      swal.fire({
        width: 110,
        didOpen: () => {
          swal.showLoading();
        }
      });
      $fetch(`/api/Users/${isAdd.value == false ? "Update_Users" : "Add_Users"}`, {
        method: isAdd.value == false ? "put" : "post",
        baseURL: basedomainURL,
        body: formData,
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        if (response.err != "1") {
          swal.close();
          toast.success("C\u1EADp nh\u1EADt User th\xE0nh c\xF4ng!");
          loadUser(true);
          closedisplayAddUser();
        } else {
          swal.fire({
            title: "Th\xF4ng b\xE1o!",
            text: response.ms,
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      }).catch((error) => {
        console.log("as", error);
        swal.close();
        swal.fire({
          title: "Th\xF4ng b\xE1o!",
          text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
          icon: "error",
          confirmButtonText: "OK"
        });
      });
    };
    const delUser = (md) => {
      swal.fire({
        title: "Th\xF4ng b\xE1o",
        text: "B\u1EA1n c\xF3 mu\u1ED1n xo\xE1 ng\u01B0\u1EDDi d\xF9ng n\xE0y kh\xF4ng!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "C\xF3",
        cancelButtonText: "Kh\xF4ng"
      }).then((result) => {
        if (result.isConfirmed) {
          swal.fire({
            width: 110,
            didOpen: () => {
              swal.showLoading();
            }
          });
          let ar = null;
          if (md != null)
            ar = [md.user_id];
          else
            ar = selectedNodes.value;
          if (Array.isArray(ar) != true)
            ar = [ar];
          $fetch(`/api/Users/Del_Users`, {
            method: "delete",
            baseURL: basedomainURL,
            body: ar,
            headers: { Authorization: `Bearer ${storeToken.value}` }
          }).then((response) => {
            if (response.err != "1") {
              swal.close();
              toast.success("Xo\xE1 User th\xE0nh c\xF4ng!");
              loadUser(true);
              if (!md)
                selectedNodes.value = [];
            } else {
              swal.fire({
                title: "Th\xF4ng b\xE1o!",
                text: "X\xF3a kh\xF4ng th\xE0nh c\xF4ng, vui l\xF2ng th\u1EED l\u1EA1i",
                icon: "error",
                confirmButtonText: "OK"
              });
            }
          }).catch((error) => {
            swal.close();
            if (error.status === 401) {
              swal.fire({
                text: "M\xE3 token \u0111\xE3 h\u1EBFt h\u1EA1n ho\u1EB7c kh\xF4ng h\u1EE3p l\u1EC7, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
                confirmButtonText: "OK"
              });
            }
          });
        }
      });
    };
    const delListUsers = () => {
      swal.fire({
        title: "Th\xF4ng b\xE1o",
        text: "B\u1EA1n c\xF3 mu\u1ED1n x\xF3a danh s\xE1ch ng\u01B0\u1EDDi d\xF9ng n\xE0y kh\xF4ng!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "C\xF3",
        cancelButtonText: "Kh\xF4ng"
      }).then((result) => {
        if (result.isConfirmed) {
          swal.fire({
            width: 110,
            didOpen: () => {
              swal.showLoading();
            }
          });
          let listId = users.value.filter((x) => x.chon == true).map((x) => x.user_id);
          let send = listId != null ? listId : 1;
          $fetch(`/api/Users/Del_Users`, {
            method: "delete",
            baseURL: basedomainURL,
            body: { send },
            headers: { Authorization: `Bearer ${storeToken.value}` }
          }).then((response) => {
            swal.close();
            if (response.err != "1") {
              swal.close();
              toast.success("Xo\xE1 ng\u01B0\u1EDDi d\xF9ng th\xE0nh c\xF4ng!");
              loadUser(true);
            } else {
              swal.fire({
                title: "Th\xF4ng b\xE1o!",
                text: "X\xF3a kh\xF4ng th\xE0nh c\xF4ng, vui l\xF2ng th\u1EED l\u1EA1i",
                icon: "error",
                confirmButtonText: "OK"
              });
            }
          }).catch((error) => {
            swal.close();
            if (error.status === 401) {
              swal.fire({
                text: "M\xE3 token \u0111\xE3 h\u1EBFt h\u1EA1n ho\u1EB7c kh\xF4ng h\u1EE3p l\u1EC7, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
                confirmButtonText: "OK"
              });
            }
          });
        }
      });
    };
    const exportUser = (method) => {
      swal.fire({
        width: 110,
        didOpen: () => {
          swal.showLoading();
        }
      });
      let proc = "sys_users_listexport1";
      if (method == "ExportExcelMau") {
        proc = "sys_users_listexport_mau";
      }
      $fetch("/api/Excel/" + method, {
        method: "post",
        baseURL: basedomainURL,
        body: {
          excelname: "DANH S\xC1CH NG\u01AF\u1EDCI D\xD9NG",
          proc,
          par: [
            { par: "search", va: opition.value.search },
            { par: "user_id", va: opition.value.user_id },
            { par: "role_id", va: opition.value.role_id },
            { par: "organization_id", va: opition.value.organization_id },
            { par: "department_id", va: opition.value.department_id },
            { par: "position_id", va: opition.value.position_id },
            { par: "filter_department", va: opition.value.filter_department },
            { par: "filter_permission", va: opition.value.check_quyen },
            { par: "status", va: opition.value.status }
          ]
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        swal.close();
        if (response.err != "1") {
          swal.close();
          toast.success("K\u1EBFt xu\u1EA5t Data th\xE0nh c\xF4ng!");
          if (response.path != null) {
            let pathReplace = response.path.replace(/\\+/g, "/").replace(/\/+/g, "/").replace(/^\//g, "");
            var listPath = pathReplace.split("/");
            var pathFile = "";
            listPath.forEach((item2) => {
              if (item2.trim() != "") {
                pathFile += "/" + item2;
              }
            });
            window.open(baseURL + pathFile);
          }
        } else {
          swal.fire({
            title: "Th\xF4ng b\xE1o!",
            text: response.ms,
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      }).catch((error) => {
        if (error.status === 401) {
          swal.fire({
            text: "M\xE3 token \u0111\xE3 h\u1EBFt h\u1EA1n ho\u1EB7c kh\xF4ng h\u1EE3p l\u1EC7, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
            confirmButtonText: "OK"
          });
        }
      });
    };
    ref(false);
    ref([]);
    const clickDelUser = () => {
      if (users.value.filter((x) => x.chon == true).length > 0) {
        isShowBtnDel.value = true;
      } else
        isShowBtnDel.value = false;
    };
    const displayPhongban = ref(false);
    const initUserPhongban = () => {
      const ipb = (dv) => {
        if (dv.children) {
          dv.children.forEach((el) => {
            ipb(el);
          });
        }
        let us = users.value.filter((x) => x.organization_id == dv.key);
        if (us.length > 0) {
          if (!dv.children)
            dv.children = [];
          dv.children = [];
          dv.children = dv.children.concat({
            data: { organization_name: "", IsDonvi: false },
            users: us
          });
          if (!dv.data.organization_name.includes("(")) {
            dv.data.organization_name = dv.data.organization_name + " (" + us.length + ")";
          } else {
            let idx1 = dv.data.organization_name.indexOf("(");
            let idx2 = dv.data.organization_name.length;
            let getString = dv.data.organization_name.substring(idx1, idx2);
            dv.data.organization_name = dv.data.organization_name.replace(
              getString,
              " (" + us.length + ")"
            );
          }
        } else {
          dv.children = [];
          if (!dv.data.organization_name.includes("(")) {
            dv.data.organization_name = dv.data.organization_name + " (" + us.length + ")";
          } else {
            let idx1 = dv.data.organization_name.indexOf("(");
            let idx2 = dv.data.organization_name.length;
            let getString = dv.data.organization_name.substring(idx1, idx2);
            dv.data.organization_name = dv.data.organization_name.replace(
              getString,
              " (" + us.length + ")"
            );
          }
        }
      };
      donvis.value.forEach((dv) => {
        ipb(dv);
      });
    };
    function removeVietnameseTones(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
      str = str.replace(/\u02C6|\u0306|\u031B/g, "");
      str = str.replace(/ + /g, " ");
      str = str.trim();
      str = str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
        " "
      );
      return str;
    }
    const loadDonvi = (rf) => {
      if (rf) {
        opition.value.loading = true;
      }
      $fetch("/api/Proc/CallProc", {
        method: "post",
        baseURL: basedomainURL,
        body: {
          proc: "sys_organization_list_main",
          par: [
            { par: "pageno", va: 0 },
            { par: "pagesize", va: 1e4 },
            { par: "search", va: null },
            { par: "user_id", va: storeUser.value.user_id }
          ]
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let data2 = JSON.parse(response.data);
        if (data2.length > 0) {
          let obj = renderTreeDV(
            data2[0],
            "organization_id",
            "organization_name",
            "\u0111\u01A1n v\u1ECB"
          );
          treedonvis.value = obj.arrtreeChils;
        }
        if (isFirst.value)
          isFirst.value = false;
        if (rf) {
          opition.value.loading = false;
        }
      }).catch((error) => {
        if (error && error.status === 401) {
          swal.fire({
            text: "M\xE3 token \u0111\xE3 h\u1EBFt h\u1EA1n ho\u1EB7c kh\xF4ng h\u1EE3p l\u1EC7, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
            confirmButtonText: "OK"
          });
        }
      });
    };
    const toggleMores = (event, u, type) => {
      user.value = u;
      user.value.old_ps = user.value.is_psword;
      menuButMores.value.toggle(event);
    };
    onMounted(() => {
      loadUser(true);
      loadDonvi(true);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      const _directive_tooltip = resolveDirective("tooltip");
      const _directive_ripple = resolveDirective("ripple");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-column flex-grow-1 h-full" }, _attrs))} data-v-b462cd7f>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(HeadBar, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="body-layout flex flex-grow-1 w-full h-full" data-v-b462cd7f>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(SideBar, { class: "shadow-1 h-full" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(storeLogin)) {
        _push(`<div class="w-full main-layout" data-v-b462cd7f><div class="main-layout true flex-grow-1 p-2" id="sys_users" style="${ssrRenderStyle({ "height": "100vh" })}" data-v-b462cd7f>`);
        if (!displayPhongban.value) {
          _push(ssrRenderComponent(unref(script$4), {
            class: "w-full d-dataview-user h-full flex flex-column",
            lazy: true,
            value: users.value,
            layout: layout.value,
            loading: opition.value.loading,
            paginator: isPaginator.value,
            rows: opition.value.PageSize,
            totalRecords: opition.value.totalrecords,
            pageLinkSize: opition.value.PageSize,
            onPage: ($event) => onPage($event),
            paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
            rowsPerPageOptions: [20, 30, 50, 100, 200],
            currentPageReportTemplate: "",
            responsiveLayout: "scroll",
            scrollable: true
          }, {
            header: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="module-title module-title-hidden mt-0 ml-1 mb-2" data-v-b462cd7f${_scopeId}><i class="pi pi-users" data-v-b462cd7f${_scopeId}></i> Ng\u01B0\u1EDDi d\xF9ng `);
                if (opition.value.totalrecords > 0) {
                  _push2(`<span data-v-b462cd7f${_scopeId}>(${ssrInterpolate(opition.value.totalrecords)})</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (opition.value.role_name) {
                  _push2(ssrRenderComponent(unref(script$5), {
                    class: "custom-chip ml-2 mr-1",
                    onRemove: ($event) => goRole(),
                    label: opition.value.role_name,
                    style: {
                      background: opition.value.background_color,
                      color: opition.value.text_color
                    },
                    removable: ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (opition.value.position_name) {
                  _push2(ssrRenderComponent(unref(script$5), {
                    class: "custom-chip ml-2 mr-1",
                    onRemove: ($event) => goChucvu(),
                    label: opition.value.position_name,
                    removable: ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (opition.value.department_id || opition.value.organization_id) {
                  _push2(ssrRenderComponent(unref(script$5), {
                    class: "custom-chip chippb ml-2 mr-1",
                    onRemove: ($event) => goDonvi(),
                    label: opition.value.organization_name,
                    removable: ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (opition.value.tenstatus) {
                  _push2(ssrRenderComponent(unref(script$5), {
                    class: [
                      "custom-chip ml-2 mr-1",
                      "chip-" + (opition.value.status == 0 ? "danger" : opition.value.status == 1 ? "success" : "warning")
                    ],
                    onRemove: ($event) => gostatus(),
                    label: opition.value.tenstatus,
                    removable: ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (opition.value.check_quyen_label) {
                  _push2(ssrRenderComponent(unref(script$5), {
                    class: "custom-chip chippb ml-2 mr-1",
                    onRemove: ($event) => goQuyen(),
                    label: opition.value.check_quyen_label,
                    removable: ""
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</h3>`);
                _push2(ssrRenderComponent(unref(script$6), { class: "w-full custoolbar" }, {
                  start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="p-input-icon-left" data-v-b462cd7f${_scopeId2}><i class="pi pi-search" data-v-b462cd7f${_scopeId2}></i>`);
                      _push3(ssrRenderComponent(_component_InputText, {
                        type: "text",
                        spellcheck: "false",
                        modelValue: opition.value.search,
                        "onUpdate:modelValue": ($event) => opition.value.search = $event,
                        placeholder: "T\xECm ki\u1EBFm",
                        onKeyup: onSearch
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                      _push3(ssrRenderComponent(_component_Button, {
                        class: checkFilter.value ? "ml-2" : "ml-2 p-button-secondary p-button-outlined",
                        icon: "pi pi-filter",
                        onClick: toggleFilter,
                        "aria-haspopup": "true",
                        "aria-controls": "overlay_panelS"
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(script$4$1), {
                        ref_key: "filterButs",
                        ref: filterButs,
                        appendTo: "body",
                        showCloseIcon: false,
                        id: "overlay_panelS",
                        style: { "width": "350px" },
                        breakpoints: { "960px": "20vw" }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="grid formgrid m-2" data-v-b462cd7f${_scopeId3}><div class="field col-12 md:col-12 flex align-items-center" data-v-b462cd7f${_scopeId3}><div class="col-4 p-0" data-v-b462cd7f${_scopeId3}>Ph\xF2ng ban:</div>`);
                            _push4(ssrRenderComponent(unref(script$7), {
                              class: "col-8 p-0",
                              modelValue: selectCap.value,
                              "onUpdate:modelValue": ($event) => selectCap.value = $event,
                              options: treedonvis.value,
                              showClear: true,
                              "max-height": 200,
                              placeholder: "Ch\u1ECDn ph\xF2ng ban",
                              optionLabel: "organization_name",
                              optionValue: "organization_id"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div><div class="field col-12 md:col-12 flex align-items-center" data-v-b462cd7f${_scopeId3}><div class="col-4 p-0" data-v-b462cd7f${_scopeId3}>Ch\u1EE9c v\u1EE5:</div>`);
                            _push4(ssrRenderComponent(unref(script$i), {
                              showClear: true,
                              modelValue: opition.value.position_id,
                              "onUpdate:modelValue": ($event) => opition.value.position_id = $event,
                              options: chucvus.value,
                              optionLabel: "position_name",
                              optionValue: "position_id",
                              placeholder: "Ch\u1ECDn ch\u1EE9c v\u1EE5",
                              class: "p-dropdown-sm col-8 p-0"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div><div class="field col-12 md:col-12 flex align-items-center" data-v-b462cd7f${_scopeId3}><div class="col-4 p-0" data-v-b462cd7f${_scopeId3}>Nh\xF3m ng\u01B0\u1EDDi d\xF9ng:</div>`);
                            _push4(ssrRenderComponent(unref(script$i), {
                              showClear: true,
                              modelValue: opition.value.role_id,
                              "onUpdate:modelValue": ($event) => opition.value.role_id = $event,
                              options: tdRoles.value,
                              optionLabel: "role_name",
                              optionValue: "role_id",
                              placeholder: "Ch\u1ECDn nh\xF3m ng\u01B0\u1EDDi d\xF9ng",
                              class: "p-dropdown-sm col-8 p-0"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div><div class="field col-12 md:col-12 flex align-items-center" data-v-b462cd7f${_scopeId3}><div class="col-4 p-0" data-v-b462cd7f${_scopeId3}>Tr\u1EA1ng th\xE1i:</div>`);
                            _push4(ssrRenderComponent(unref(script$i), {
                              showClear: true,
                              modelValue: opition.value.status,
                              "onUpdate:modelValue": ($event) => opition.value.status = $event,
                              options: tdstatuss.value,
                              optionLabel: "text",
                              optionValue: "value",
                              placeholder: "Ch\u1ECDn tr\u1EA1ng th\xE1i",
                              class: "p-dropdown-sm col-8 p-0"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div><div class="field col-12 md:col-12 flex align-items-center" data-v-b462cd7f${_scopeId3}><div class="col-4 p-0" data-v-b462cd7f${_scopeId3}>Quy\u1EC1n Module:</div>`);
                            _push4(ssrRenderComponent(unref(script$i), {
                              showClear: true,
                              modelValue: opition.value.check_quyen,
                              "onUpdate:modelValue": ($event) => opition.value.check_quyen = $event,
                              options: tdCheckquyens.value,
                              optionLabel: "text",
                              optionValue: "value",
                              placeholder: "Ch\u1ECDn lo\u1EA1i quy\u1EC1n",
                              class: "p-dropdown-sm col-8 p-0"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div><div class="col-12 field p-0" data-v-b462cd7f${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(script$6), { class: "toolbar-filter" }, {
                              start: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Button, {
                                    onClick: reFilterUser,
                                    class: "p-button-outlined",
                                    label: "X\xF3a"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Button, {
                                      onClick: reFilterUser,
                                      class: "p-button-outlined",
                                      label: "X\xF3a"
                                    })
                                  ];
                                }
                              }),
                              end: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Button, {
                                    onClick: filterUser,
                                    label: "L\u1ECDc"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Button, {
                                      onClick: filterUser,
                                      label: "L\u1ECDc"
                                    })
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`</div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "grid formgrid m-2" }, [
                                createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                                  createVNode("div", { class: "col-4 p-0" }, "Ph\xF2ng ban:"),
                                  createVNode(unref(script$7), {
                                    class: "col-8 p-0",
                                    modelValue: selectCap.value,
                                    "onUpdate:modelValue": ($event) => selectCap.value = $event,
                                    options: treedonvis.value,
                                    showClear: true,
                                    "max-height": 200,
                                    placeholder: "Ch\u1ECDn ph\xF2ng ban",
                                    optionLabel: "organization_name",
                                    optionValue: "organization_id"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                                  createVNode("div", { class: "col-4 p-0" }, "Ch\u1EE9c v\u1EE5:"),
                                  createVNode(unref(script$i), {
                                    showClear: true,
                                    modelValue: opition.value.position_id,
                                    "onUpdate:modelValue": ($event) => opition.value.position_id = $event,
                                    options: chucvus.value,
                                    optionLabel: "position_name",
                                    optionValue: "position_id",
                                    placeholder: "Ch\u1ECDn ch\u1EE9c v\u1EE5",
                                    class: "p-dropdown-sm col-8 p-0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                                  createVNode("div", { class: "col-4 p-0" }, "Nh\xF3m ng\u01B0\u1EDDi d\xF9ng:"),
                                  createVNode(unref(script$i), {
                                    showClear: true,
                                    modelValue: opition.value.role_id,
                                    "onUpdate:modelValue": ($event) => opition.value.role_id = $event,
                                    options: tdRoles.value,
                                    optionLabel: "role_name",
                                    optionValue: "role_id",
                                    placeholder: "Ch\u1ECDn nh\xF3m ng\u01B0\u1EDDi d\xF9ng",
                                    class: "p-dropdown-sm col-8 p-0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                                  createVNode("div", { class: "col-4 p-0" }, "Tr\u1EA1ng th\xE1i:"),
                                  createVNode(unref(script$i), {
                                    showClear: true,
                                    modelValue: opition.value.status,
                                    "onUpdate:modelValue": ($event) => opition.value.status = $event,
                                    options: tdstatuss.value,
                                    optionLabel: "text",
                                    optionValue: "value",
                                    placeholder: "Ch\u1ECDn tr\u1EA1ng th\xE1i",
                                    class: "p-dropdown-sm col-8 p-0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                                  createVNode("div", { class: "col-4 p-0" }, "Quy\u1EC1n Module:"),
                                  createVNode(unref(script$i), {
                                    showClear: true,
                                    modelValue: opition.value.check_quyen,
                                    "onUpdate:modelValue": ($event) => opition.value.check_quyen = $event,
                                    options: tdCheckquyens.value,
                                    optionLabel: "text",
                                    optionValue: "value",
                                    placeholder: "Ch\u1ECDn lo\u1EA1i quy\u1EC1n",
                                    class: "p-dropdown-sm col-8 p-0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                createVNode("div", { class: "col-12 field p-0" }, [
                                  createVNode(unref(script$6), { class: "toolbar-filter" }, {
                                    start: withCtx(() => [
                                      createVNode(_component_Button, {
                                        onClick: reFilterUser,
                                        class: "p-button-outlined",
                                        label: "X\xF3a"
                                      })
                                    ]),
                                    end: withCtx(() => [
                                      createVNode(_component_Button, {
                                        onClick: filterUser,
                                        label: "L\u1ECDc"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("div", { class: "p-input-icon-left" }, [
                          createVNode("i", { class: "pi pi-search" }),
                          createVNode(_component_InputText, {
                            type: "text",
                            spellcheck: "false",
                            modelValue: opition.value.search,
                            "onUpdate:modelValue": ($event) => opition.value.search = $event,
                            placeholder: "T\xECm ki\u1EBFm",
                            onKeyup: withKeys(onSearch, ["enter"])
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                        ]),
                        createVNode(_component_Button, {
                          class: checkFilter.value ? "ml-2" : "ml-2 p-button-secondary p-button-outlined",
                          icon: "pi pi-filter",
                          onClick: toggleFilter,
                          "aria-haspopup": "true",
                          "aria-controls": "overlay_panelS"
                        }, null, 8, ["class"]),
                        createVNode(unref(script$4$1), {
                          ref_key: "filterButs",
                          ref: filterButs,
                          appendTo: "body",
                          showCloseIcon: false,
                          id: "overlay_panelS",
                          style: { "width": "350px" },
                          breakpoints: { "960px": "20vw" }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid formgrid m-2" }, [
                              createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                                createVNode("div", { class: "col-4 p-0" }, "Ph\xF2ng ban:"),
                                createVNode(unref(script$7), {
                                  class: "col-8 p-0",
                                  modelValue: selectCap.value,
                                  "onUpdate:modelValue": ($event) => selectCap.value = $event,
                                  options: treedonvis.value,
                                  showClear: true,
                                  "max-height": 200,
                                  placeholder: "Ch\u1ECDn ph\xF2ng ban",
                                  optionLabel: "organization_name",
                                  optionValue: "organization_id"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                                createVNode("div", { class: "col-4 p-0" }, "Ch\u1EE9c v\u1EE5:"),
                                createVNode(unref(script$i), {
                                  showClear: true,
                                  modelValue: opition.value.position_id,
                                  "onUpdate:modelValue": ($event) => opition.value.position_id = $event,
                                  options: chucvus.value,
                                  optionLabel: "position_name",
                                  optionValue: "position_id",
                                  placeholder: "Ch\u1ECDn ch\u1EE9c v\u1EE5",
                                  class: "p-dropdown-sm col-8 p-0"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                                createVNode("div", { class: "col-4 p-0" }, "Nh\xF3m ng\u01B0\u1EDDi d\xF9ng:"),
                                createVNode(unref(script$i), {
                                  showClear: true,
                                  modelValue: opition.value.role_id,
                                  "onUpdate:modelValue": ($event) => opition.value.role_id = $event,
                                  options: tdRoles.value,
                                  optionLabel: "role_name",
                                  optionValue: "role_id",
                                  placeholder: "Ch\u1ECDn nh\xF3m ng\u01B0\u1EDDi d\xF9ng",
                                  class: "p-dropdown-sm col-8 p-0"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                                createVNode("div", { class: "col-4 p-0" }, "Tr\u1EA1ng th\xE1i:"),
                                createVNode(unref(script$i), {
                                  showClear: true,
                                  modelValue: opition.value.status,
                                  "onUpdate:modelValue": ($event) => opition.value.status = $event,
                                  options: tdstatuss.value,
                                  optionLabel: "text",
                                  optionValue: "value",
                                  placeholder: "Ch\u1ECDn tr\u1EA1ng th\xE1i",
                                  class: "p-dropdown-sm col-8 p-0"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                                createVNode("div", { class: "col-4 p-0" }, "Quy\u1EC1n Module:"),
                                createVNode(unref(script$i), {
                                  showClear: true,
                                  modelValue: opition.value.check_quyen,
                                  "onUpdate:modelValue": ($event) => opition.value.check_quyen = $event,
                                  options: tdCheckquyens.value,
                                  optionLabel: "text",
                                  optionValue: "value",
                                  placeholder: "Ch\u1ECDn lo\u1EA1i quy\u1EC1n",
                                  class: "p-dropdown-sm col-8 p-0"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              createVNode("div", { class: "col-12 field p-0" }, [
                                createVNode(unref(script$6), { class: "toolbar-filter" }, {
                                  start: withCtx(() => [
                                    createVNode(_component_Button, {
                                      onClick: reFilterUser,
                                      class: "p-button-outlined",
                                      label: "X\xF3a"
                                    })
                                  ]),
                                  end: withCtx(() => [
                                    createVNode(_component_Button, {
                                      onClick: filterUser,
                                      label: "L\u1ECDc"
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        }, 512)
                      ];
                    }
                  }),
                  end: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Button, {
                        label: "Th\xEAm ng\u01B0\u1EDDi d\xF9ng",
                        icon: "pi pi-plus",
                        class: "mr-2",
                        onClick: showModalAddUser
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(script$2), {
                        modelValue: layout.value,
                        "onUpdate:modelValue": ($event) => layout.value = $event
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Button, {
                        class: "mr-2 ml-2 p-button p-button-outlined p-button-secondary",
                        icon: "pi pi-refresh",
                        onClick: onRefersh
                      }, null, _parent3, _scopeId2));
                      if (isShowBtnDel.value) {
                        _push3(ssrRenderComponent(_component_Button, {
                          label: "Xo\xE1",
                          icon: "pi pi-trash",
                          class: "mr-2 p-button-danger",
                          onClick: delListUsers
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(ssrRenderComponent(_component_Button, {
                        label: "Ti\u1EC7n \xEDch",
                        icon: "pi pi-file-excel",
                        class: "mr-2 p-button p-button-outlined p-button-secondary",
                        "aria-haspopup": "true",
                        "aria-controls": "overlay_Export"
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(script$a), {
                        id: "overlay_Export",
                        ref_key: "menuButs",
                        ref: menuButs,
                        model: itemButs.value,
                        popup: true
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Button, {
                          label: "Th\xEAm ng\u01B0\u1EDDi d\xF9ng",
                          icon: "pi pi-plus",
                          class: "mr-2",
                          onClick: showModalAddUser
                        }),
                        createVNode(unref(script$2), {
                          modelValue: layout.value,
                          "onUpdate:modelValue": ($event) => layout.value = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_Button, {
                          class: "mr-2 ml-2 p-button p-button-outlined p-button-secondary",
                          icon: "pi pi-refresh",
                          onClick: onRefersh
                        }),
                        isShowBtnDel.value ? (openBlock(), createBlock(_component_Button, {
                          key: 0,
                          label: "Xo\xE1",
                          icon: "pi pi-trash",
                          class: "mr-2 p-button-danger",
                          onClick: delListUsers
                        })) : createCommentVNode("", true),
                        createVNode(_component_Button, {
                          label: "Ti\u1EC7n \xEDch",
                          icon: "pi pi-file-excel",
                          class: "mr-2 p-button p-button-outlined p-button-secondary",
                          "aria-haspopup": "true",
                          "aria-controls": "overlay_Export"
                        }),
                        createVNode(unref(script$a), {
                          id: "overlay_Export",
                          ref_key: "menuButs",
                          ref: menuButs,
                          model: itemButs.value,
                          popup: true
                        }, null, 8, ["model"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode("h3", { class: "module-title module-title-hidden mt-0 ml-1 mb-2" }, [
                    createVNode("i", { class: "pi pi-users" }),
                    createTextVNode(" Ng\u01B0\u1EDDi d\xF9ng "),
                    opition.value.totalrecords > 0 ? (openBlock(), createBlock("span", { key: 0 }, "(" + toDisplayString(opition.value.totalrecords) + ")", 1)) : createCommentVNode("", true),
                    opition.value.role_name ? (openBlock(), createBlock(unref(script$5), {
                      key: 1,
                      class: "custom-chip ml-2 mr-1",
                      onRemove: ($event) => goRole(),
                      label: opition.value.role_name,
                      style: {
                        background: opition.value.background_color,
                        color: opition.value.text_color
                      },
                      removable: ""
                    }, null, 8, ["onRemove", "label", "style"])) : createCommentVNode("", true),
                    opition.value.position_name ? (openBlock(), createBlock(unref(script$5), {
                      key: 2,
                      class: "custom-chip ml-2 mr-1",
                      onRemove: ($event) => goChucvu(),
                      label: opition.value.position_name,
                      removable: ""
                    }, null, 8, ["onRemove", "label"])) : createCommentVNode("", true),
                    opition.value.department_id || opition.value.organization_id ? (openBlock(), createBlock(unref(script$5), {
                      key: 3,
                      class: "custom-chip chippb ml-2 mr-1",
                      onRemove: ($event) => goDonvi(),
                      label: opition.value.organization_name,
                      removable: ""
                    }, null, 8, ["onRemove", "label"])) : createCommentVNode("", true),
                    opition.value.tenstatus ? (openBlock(), createBlock(unref(script$5), {
                      key: 4,
                      class: [
                        "custom-chip ml-2 mr-1",
                        "chip-" + (opition.value.status == 0 ? "danger" : opition.value.status == 1 ? "success" : "warning")
                      ],
                      onRemove: ($event) => gostatus(),
                      label: opition.value.tenstatus,
                      removable: ""
                    }, null, 8, ["class", "onRemove", "label"])) : createCommentVNode("", true),
                    opition.value.check_quyen_label ? (openBlock(), createBlock(unref(script$5), {
                      key: 5,
                      class: "custom-chip chippb ml-2 mr-1",
                      onRemove: ($event) => goQuyen(),
                      label: opition.value.check_quyen_label,
                      removable: ""
                    }, null, 8, ["onRemove", "label"])) : createCommentVNode("", true)
                  ]),
                  createVNode(unref(script$6), { class: "w-full custoolbar" }, {
                    start: withCtx(() => [
                      createVNode("div", { class: "p-input-icon-left" }, [
                        createVNode("i", { class: "pi pi-search" }),
                        createVNode(_component_InputText, {
                          type: "text",
                          spellcheck: "false",
                          modelValue: opition.value.search,
                          "onUpdate:modelValue": ($event) => opition.value.search = $event,
                          placeholder: "T\xECm ki\u1EBFm",
                          onKeyup: withKeys(onSearch, ["enter"])
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                      ]),
                      createVNode(_component_Button, {
                        class: checkFilter.value ? "ml-2" : "ml-2 p-button-secondary p-button-outlined",
                        icon: "pi pi-filter",
                        onClick: toggleFilter,
                        "aria-haspopup": "true",
                        "aria-controls": "overlay_panelS"
                      }, null, 8, ["class"]),
                      createVNode(unref(script$4$1), {
                        ref_key: "filterButs",
                        ref: filterButs,
                        appendTo: "body",
                        showCloseIcon: false,
                        id: "overlay_panelS",
                        style: { "width": "350px" },
                        breakpoints: { "960px": "20vw" }
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid formgrid m-2" }, [
                            createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                              createVNode("div", { class: "col-4 p-0" }, "Ph\xF2ng ban:"),
                              createVNode(unref(script$7), {
                                class: "col-8 p-0",
                                modelValue: selectCap.value,
                                "onUpdate:modelValue": ($event) => selectCap.value = $event,
                                options: treedonvis.value,
                                showClear: true,
                                "max-height": 200,
                                placeholder: "Ch\u1ECDn ph\xF2ng ban",
                                optionLabel: "organization_name",
                                optionValue: "organization_id"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                              createVNode("div", { class: "col-4 p-0" }, "Ch\u1EE9c v\u1EE5:"),
                              createVNode(unref(script$i), {
                                showClear: true,
                                modelValue: opition.value.position_id,
                                "onUpdate:modelValue": ($event) => opition.value.position_id = $event,
                                options: chucvus.value,
                                optionLabel: "position_name",
                                optionValue: "position_id",
                                placeholder: "Ch\u1ECDn ch\u1EE9c v\u1EE5",
                                class: "p-dropdown-sm col-8 p-0"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                              createVNode("div", { class: "col-4 p-0" }, "Nh\xF3m ng\u01B0\u1EDDi d\xF9ng:"),
                              createVNode(unref(script$i), {
                                showClear: true,
                                modelValue: opition.value.role_id,
                                "onUpdate:modelValue": ($event) => opition.value.role_id = $event,
                                options: tdRoles.value,
                                optionLabel: "role_name",
                                optionValue: "role_id",
                                placeholder: "Ch\u1ECDn nh\xF3m ng\u01B0\u1EDDi d\xF9ng",
                                class: "p-dropdown-sm col-8 p-0"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                              createVNode("div", { class: "col-4 p-0" }, "Tr\u1EA1ng th\xE1i:"),
                              createVNode(unref(script$i), {
                                showClear: true,
                                modelValue: opition.value.status,
                                "onUpdate:modelValue": ($event) => opition.value.status = $event,
                                options: tdstatuss.value,
                                optionLabel: "text",
                                optionValue: "value",
                                placeholder: "Ch\u1ECDn tr\u1EA1ng th\xE1i",
                                class: "p-dropdown-sm col-8 p-0"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            createVNode("div", { class: "field col-12 md:col-12 flex align-items-center" }, [
                              createVNode("div", { class: "col-4 p-0" }, "Quy\u1EC1n Module:"),
                              createVNode(unref(script$i), {
                                showClear: true,
                                modelValue: opition.value.check_quyen,
                                "onUpdate:modelValue": ($event) => opition.value.check_quyen = $event,
                                options: tdCheckquyens.value,
                                optionLabel: "text",
                                optionValue: "value",
                                placeholder: "Ch\u1ECDn lo\u1EA1i quy\u1EC1n",
                                class: "p-dropdown-sm col-8 p-0"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            createVNode("div", { class: "col-12 field p-0" }, [
                              createVNode(unref(script$6), { class: "toolbar-filter" }, {
                                start: withCtx(() => [
                                  createVNode(_component_Button, {
                                    onClick: reFilterUser,
                                    class: "p-button-outlined",
                                    label: "X\xF3a"
                                  })
                                ]),
                                end: withCtx(() => [
                                  createVNode(_component_Button, {
                                    onClick: filterUser,
                                    label: "L\u1ECDc"
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      }, 512)
                    ]),
                    end: withCtx(() => [
                      createVNode(_component_Button, {
                        label: "Th\xEAm ng\u01B0\u1EDDi d\xF9ng",
                        icon: "pi pi-plus",
                        class: "mr-2",
                        onClick: showModalAddUser
                      }),
                      createVNode(unref(script$2), {
                        modelValue: layout.value,
                        "onUpdate:modelValue": ($event) => layout.value = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_Button, {
                        class: "mr-2 ml-2 p-button p-button-outlined p-button-secondary",
                        icon: "pi pi-refresh",
                        onClick: onRefersh
                      }),
                      isShowBtnDel.value ? (openBlock(), createBlock(_component_Button, {
                        key: 0,
                        label: "Xo\xE1",
                        icon: "pi pi-trash",
                        class: "mr-2 p-button-danger",
                        onClick: delListUsers
                      })) : createCommentVNode("", true),
                      createVNode(_component_Button, {
                        label: "Ti\u1EC7n \xEDch",
                        icon: "pi pi-file-excel",
                        class: "mr-2 p-button p-button-outlined p-button-secondary",
                        "aria-haspopup": "true",
                        "aria-controls": "overlay_Export"
                      }),
                      createVNode(unref(script$a), {
                        id: "overlay_Export",
                        ref_key: "menuButs",
                        ref: menuButs,
                        model: itemButs.value,
                        popup: true
                      }, null, 8, ["model"])
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            grid: withCtx((slotProps, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="md:col-3 p-2 card-content" data-v-b462cd7f${_scopeId}>`);
                _push2(ssrRenderComponent(unref(script$2$1), { class: "no-paddcontent" }, {
                  title: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div style="${ssrRenderStyle({ "position": "relative" })}" data-v-b462cd7f${_scopeId2}><div class="align-items-center justify-content-center text-center" style="${ssrRenderStyle({ "position": "relative" })}" data-v-b462cd7f${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(script$b), {
                        label: slotProps.data.avatar ? "" : slotProps.data.lastName.substring(0, 1).toUpperCase(),
                        image: unref(basedomainURL) + slotProps.data.avatar,
                        style: [{ "background-color": "#2196f3", "color": "#ffffff", "width": "8rem", "height": "8rem" }, {
                          background: bgColor.value[slotProps.data.stt % 7]
                        }],
                        class: "mr-2",
                        size: "xlarge",
                        shape: "circle"
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Button, {
                        onClick: ($event) => gostatus(slotProps.data),
                        class: "p-button p-button-" + (slotProps.data.status == 0 ? "danger" : slotProps.data.status == 1 ? "success" : "warning") + " p-button-rounded dot-status"
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Button, {
                        onClick: ($event) => gostatus(slotProps.data),
                        class: "p-button p-button-" + (slotProps.data.status == 0 ? "danger" : slotProps.data.status == 1 ? "success" : "warning") + " p-button-rounded dot-status"
                      }, null, _parent3, _scopeId2));
                      if (slotProps.data.check_quyen == 1) {
                        _push3(`<i${ssrRenderAttrs(mergeProps({ class: "pi pi-star-fill icon-quyen" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, slotProps.data.check_quyen_label, void 0, { top: true })))} data-v-b462cd7f${_scopeId2}></i>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                      _push3(ssrRenderComponent(_component_Button, {
                        style: { "position": "absolute", "right": "0px", "top": "0px" },
                        icon: "pi pi-ellipsis-h",
                        class: "p-button-rounded p-button-text ml-2",
                        onClick: ($event) => toggleMores($event, slotProps.data),
                        "aria-haspopup": "true",
                        "aria-controls": "overlay_More"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { style: { "position": "relative" } }, [
                          createVNode("div", {
                            class: "align-items-center justify-content-center text-center",
                            style: { "position": "relative" }
                          }, [
                            createVNode(unref(script$b), {
                              label: slotProps.data.avatar ? "" : slotProps.data.lastName.substring(0, 1).toUpperCase(),
                              image: unref(basedomainURL) + slotProps.data.avatar,
                              style: [{ "background-color": "#2196f3", "color": "#ffffff", "width": "8rem", "height": "8rem" }, {
                                background: bgColor.value[slotProps.data.stt % 7]
                              }],
                              class: "mr-2",
                              size: "xlarge",
                              shape: "circle"
                            }, null, 8, ["label", "image", "style"]),
                            createVNode(_component_Button, {
                              onClick: ($event) => gostatus(slotProps.data),
                              class: "p-button p-button-" + (slotProps.data.status == 0 ? "danger" : slotProps.data.status == 1 ? "success" : "warning") + " p-button-rounded dot-status"
                            }, null, 8, ["onClick", "class"]),
                            createVNode(_component_Button, {
                              onClick: ($event) => gostatus(slotProps.data),
                              class: "p-button p-button-" + (slotProps.data.status == 0 ? "danger" : slotProps.data.status == 1 ? "success" : "warning") + " p-button-rounded dot-status"
                            }, null, 8, ["onClick", "class"]),
                            slotProps.data.check_quyen == 1 ? withDirectives((openBlock(), createBlock("i", {
                              key: 0,
                              onClick: ($event) => goQuyen(slotProps.data),
                              class: "pi pi-star-fill icon-quyen"
                            }, null, 8, ["onClick"])), [
                              [
                                _directive_tooltip,
                                slotProps.data.check_quyen_label,
                                void 0,
                                { top: true }
                              ]
                            ]) : createCommentVNode("", true)
                          ]),
                          createVNode(_component_Button, {
                            style: { "position": "absolute", "right": "0px", "top": "0px" },
                            icon: "pi pi-ellipsis-h",
                            class: "p-button-rounded p-button-text ml-2",
                            onClick: ($event) => toggleMores($event, slotProps.data),
                            "aria-haspopup": "true",
                            "aria-controls": "overlay_More"
                          }, null, 8, ["onClick"])
                        ])
                      ];
                    }
                  }),
                  content: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="text-center" data-v-b462cd7f${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Button, {
                        class: "p-button-text m-auto block",
                        style: { "color": "inherit" },
                        onClick: ($event) => editUser(slotProps.data)
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<h3 class="m-0" data-v-b462cd7f${_scopeId3}>${ssrInterpolate(slotProps.data.full_name)}</h3>`);
                          } else {
                            return [
                              createVNode("h3", { class: "m-0" }, toDisplayString(slotProps.data.full_name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(script$5), mergeProps({
                        onClick: ($event) => goDonvi(slotProps.data),
                        class: "m-1 chippb p-ripple",
                        label: slotProps.data.organization_name
                      }, ssrGetDirectiveProps(_ctx, _directive_ripple)), null, _parent3, _scopeId2));
                      if (slotProps.data.position_name) {
                        _push3(`<div class="mb-1" data-v-b462cd7f${_scopeId2}>`);
                        _push3(ssrRenderComponent(unref(script$5), mergeProps({
                          onClick: ($event) => goChucvu(slotProps.data),
                          class: "p-ripple chip2",
                          label: slotProps.data.position_name
                        }, ssrGetDirectiveProps(_ctx, _directive_ripple)), null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<div class="mb-1" data-v-b462cd7f${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(script$5), mergeProps({
                        onClick: ($event) => goRole(slotProps.data),
                        class: "p-ripple",
                        style: {
                          background: slotProps.data.background_color,
                          color: slotProps.data.text_color
                        },
                        label: slotProps.data.role_name
                      }, ssrGetDirectiveProps(_ctx, _directive_ripple)), null, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "text-center" }, [
                          createVNode(_component_Button, {
                            class: "p-button-text m-auto block",
                            style: { "color": "inherit" },
                            onClick: ($event) => editUser(slotProps.data)
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "m-0" }, toDisplayString(slotProps.data.full_name), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          withDirectives(createVNode(unref(script$5), {
                            onClick: ($event) => goDonvi(slotProps.data),
                            class: "m-1 chippb p-ripple",
                            label: slotProps.data.organization_name
                          }, null, 8, ["onClick", "label"]), [
                            [_directive_ripple]
                          ]),
                          slotProps.data.position_name ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mb-1"
                          }, [
                            withDirectives(createVNode(unref(script$5), {
                              onClick: ($event) => goChucvu(slotProps.data),
                              class: "p-ripple chip2",
                              label: slotProps.data.position_name
                            }, null, 8, ["onClick", "label"]), [
                              [_directive_ripple]
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "mb-1" }, [
                            withDirectives(createVNode(unref(script$5), {
                              onClick: ($event) => goRole(slotProps.data),
                              class: "p-ripple",
                              style: {
                                background: slotProps.data.background_color,
                                color: slotProps.data.text_color
                              },
                              label: slotProps.data.role_name
                            }, null, 8, ["onClick", "style", "label"]), [
                              [_directive_ripple]
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "md:col-3 p-2 card-content" }, [
                    createVNode(unref(script$2$1), { class: "no-paddcontent" }, {
                      title: withCtx(() => [
                        createVNode("div", { style: { "position": "relative" } }, [
                          createVNode("div", {
                            class: "align-items-center justify-content-center text-center",
                            style: { "position": "relative" }
                          }, [
                            createVNode(unref(script$b), {
                              label: slotProps.data.avatar ? "" : slotProps.data.lastName.substring(0, 1).toUpperCase(),
                              image: unref(basedomainURL) + slotProps.data.avatar,
                              style: [{ "background-color": "#2196f3", "color": "#ffffff", "width": "8rem", "height": "8rem" }, {
                                background: bgColor.value[slotProps.data.stt % 7]
                              }],
                              class: "mr-2",
                              size: "xlarge",
                              shape: "circle"
                            }, null, 8, ["label", "image", "style"]),
                            createVNode(_component_Button, {
                              onClick: ($event) => gostatus(slotProps.data),
                              class: "p-button p-button-" + (slotProps.data.status == 0 ? "danger" : slotProps.data.status == 1 ? "success" : "warning") + " p-button-rounded dot-status"
                            }, null, 8, ["onClick", "class"]),
                            createVNode(_component_Button, {
                              onClick: ($event) => gostatus(slotProps.data),
                              class: "p-button p-button-" + (slotProps.data.status == 0 ? "danger" : slotProps.data.status == 1 ? "success" : "warning") + " p-button-rounded dot-status"
                            }, null, 8, ["onClick", "class"]),
                            slotProps.data.check_quyen == 1 ? withDirectives((openBlock(), createBlock("i", {
                              key: 0,
                              onClick: ($event) => goQuyen(slotProps.data),
                              class: "pi pi-star-fill icon-quyen"
                            }, null, 8, ["onClick"])), [
                              [
                                _directive_tooltip,
                                slotProps.data.check_quyen_label,
                                void 0,
                                { top: true }
                              ]
                            ]) : createCommentVNode("", true)
                          ]),
                          createVNode(_component_Button, {
                            style: { "position": "absolute", "right": "0px", "top": "0px" },
                            icon: "pi pi-ellipsis-h",
                            class: "p-button-rounded p-button-text ml-2",
                            onClick: ($event) => toggleMores($event, slotProps.data),
                            "aria-haspopup": "true",
                            "aria-controls": "overlay_More"
                          }, null, 8, ["onClick"])
                        ])
                      ]),
                      content: withCtx(() => [
                        createVNode("div", { class: "text-center" }, [
                          createVNode(_component_Button, {
                            class: "p-button-text m-auto block",
                            style: { "color": "inherit" },
                            onClick: ($event) => editUser(slotProps.data)
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "m-0" }, toDisplayString(slotProps.data.full_name), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          withDirectives(createVNode(unref(script$5), {
                            onClick: ($event) => goDonvi(slotProps.data),
                            class: "m-1 chippb p-ripple",
                            label: slotProps.data.organization_name
                          }, null, 8, ["onClick", "label"]), [
                            [_directive_ripple]
                          ]),
                          slotProps.data.position_name ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mb-1"
                          }, [
                            withDirectives(createVNode(unref(script$5), {
                              onClick: ($event) => goChucvu(slotProps.data),
                              class: "p-ripple chip2",
                              label: slotProps.data.position_name
                            }, null, 8, ["onClick", "label"]), [
                              [_directive_ripple]
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "mb-1" }, [
                            withDirectives(createVNode(unref(script$5), {
                              onClick: ($event) => goRole(slotProps.data),
                              class: "p-ripple",
                              style: {
                                background: slotProps.data.background_color,
                                color: slotProps.data.text_color
                              },
                              label: slotProps.data.role_name
                            }, null, 8, ["onClick", "style", "label"]), [
                              [_directive_ripple]
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ];
              }
            }),
            list: withCtx((slotProps, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="p-2 w-full" style="${ssrRenderStyle({ "background-color": "#fff" })}" data-v-b462cd7f${_scopeId}><div class="flex align-items-center justify-content-center" data-v-b462cd7f${_scopeId}><div class="mx-2" data-v-b462cd7f${_scopeId}>`);
                _push2(ssrRenderComponent(unref(script$8), {
                  id: "IsIdentity",
                  modelValue: slotProps.data.chon,
                  "onUpdate:modelValue": ($event) => slotProps.data.chon = $event,
                  binary: true,
                  onChange: clickDelUser
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(unref(script$b), {
                  label: slotProps.data.avatar ? "" : slotProps.data.lastName.substring(0, 1).toUpperCase(),
                  image: unref(basedomainURL) + slotProps.data.avatar,
                  style: [{ "background-color": "#2196f3", "color": "#ffffff" }, {
                    background: bgColor.value[slotProps.data.stt % 7]
                  }],
                  class: "mr-2",
                  size: "xlarge",
                  shape: "circle"
                }, null, _parent2, _scopeId));
                _push2(`<div class="flex flex-column flex-grow-1" data-v-b462cd7f${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Button, {
                  class: "p-button-text p-0",
                  style: { "color": "inherit", "padding": "0 !important" },
                  onClick: ($event) => editUser(slotProps.data)
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<h3 class="mb-1 mt-0" data-v-b462cd7f${_scopeId2}>${ssrInterpolate(slotProps.data.full_name)}</h3>`);
                    } else {
                      return [
                        createVNode("h3", { class: "mb-1 mt-0" }, toDisplayString(slotProps.data.full_name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<i style="${ssrRenderStyle({ "font-size": "10pt", "color": "#999" })}" data-v-b462cd7f${_scopeId}>${ssrInterpolate(slotProps.data.user_id)} ${ssrInterpolate(slotProps.data.phone ? "| " + slotProps.data.phone : "")}</i><i style="${ssrRenderStyle({ "font-size": "10pt", "color": "#999" })}" data-v-b462cd7f${_scopeId}>${ssrInterpolate(slotProps.data.email)}</i></div>`);
                _push2(ssrRenderComponent(unref(script$5), {
                  onClick: ($event) => goDonvi(slotProps.data),
                  class: "ml-2 mr-2 chippb",
                  label: slotProps.data.organization_name
                }, null, _parent2, _scopeId));
                if (slotProps.data.position_name) {
                  _push2(ssrRenderComponent(unref(script$5), {
                    onClick: ($event) => goChucvu(slotProps.data),
                    class: "ml-2 mr-2 chip2",
                    label: slotProps.data.position_name
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(ssrRenderComponent(unref(script$5), {
                  onClick: ($event) => goRole(slotProps.data),
                  class: "ml-2 mr-2",
                  style: {
                    background: slotProps.data.background_color,
                    color: slotProps.data.text_color
                  },
                  label: slotProps.data.role_name
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Button, {
                  onClick: ($event) => gostatus(slotProps.data),
                  label: slotProps.data.tenstatus,
                  class: "ml-2 mr-2 p-button p-button-" + (slotProps.data.status == 0 ? "danger" : slotProps.data.status == 1 ? "success" : "warning") + " p-button-rounded"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Button, {
                  icon: "pi pi-ellipsis-h",
                  class: "p-button-outlined p-button-secondary ml-2",
                  onClick: ($event) => toggleMores($event, slotProps.data),
                  "aria-haspopup": "true",
                  "aria-controls": "overlay_More"
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "p-2 w-full",
                    style: { "background-color": "#fff" }
                  }, [
                    createVNode("div", { class: "flex align-items-center justify-content-center" }, [
                      createVNode("div", { class: "mx-2" }, [
                        createVNode(unref(script$8), {
                          id: "IsIdentity",
                          modelValue: slotProps.data.chon,
                          "onUpdate:modelValue": ($event) => slotProps.data.chon = $event,
                          binary: true,
                          onChange: clickDelUser
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode(unref(script$b), {
                        label: slotProps.data.avatar ? "" : slotProps.data.lastName.substring(0, 1).toUpperCase(),
                        image: unref(basedomainURL) + slotProps.data.avatar,
                        style: [{ "background-color": "#2196f3", "color": "#ffffff" }, {
                          background: bgColor.value[slotProps.data.stt % 7]
                        }],
                        class: "mr-2",
                        size: "xlarge",
                        shape: "circle"
                      }, null, 8, ["label", "image", "style"]),
                      createVNode("div", { class: "flex flex-column flex-grow-1" }, [
                        createVNode(_component_Button, {
                          class: "p-button-text p-0",
                          style: { "color": "inherit", "padding": "0 !important" },
                          onClick: ($event) => editUser(slotProps.data)
                        }, {
                          default: withCtx(() => [
                            createVNode("h3", { class: "mb-1 mt-0" }, toDisplayString(slotProps.data.full_name), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode("i", { style: { "font-size": "10pt", "color": "#999" } }, toDisplayString(slotProps.data.user_id) + " " + toDisplayString(slotProps.data.phone ? "| " + slotProps.data.phone : ""), 1),
                        createVNode("i", { style: { "font-size": "10pt", "color": "#999" } }, toDisplayString(slotProps.data.email), 1)
                      ]),
                      createVNode(unref(script$5), {
                        onClick: ($event) => goDonvi(slotProps.data),
                        class: "ml-2 mr-2 chippb",
                        label: slotProps.data.organization_name
                      }, null, 8, ["onClick", "label"]),
                      slotProps.data.position_name ? (openBlock(), createBlock(unref(script$5), {
                        key: 0,
                        onClick: ($event) => goChucvu(slotProps.data),
                        class: "ml-2 mr-2 chip2",
                        label: slotProps.data.position_name
                      }, null, 8, ["onClick", "label"])) : createCommentVNode("", true),
                      createVNode(unref(script$5), {
                        onClick: ($event) => goRole(slotProps.data),
                        class: "ml-2 mr-2",
                        style: {
                          background: slotProps.data.background_color,
                          color: slotProps.data.text_color
                        },
                        label: slotProps.data.role_name
                      }, null, 8, ["onClick", "style", "label"]),
                      createVNode(_component_Button, {
                        onClick: ($event) => gostatus(slotProps.data),
                        label: slotProps.data.tenstatus,
                        class: "ml-2 mr-2 p-button p-button-" + (slotProps.data.status == 0 ? "danger" : slotProps.data.status == 1 ? "success" : "warning") + " p-button-rounded"
                      }, null, 8, ["onClick", "label", "class"]),
                      createVNode(_component_Button, {
                        icon: "pi pi-ellipsis-h",
                        class: "p-button-outlined p-button-secondary ml-2",
                        onClick: ($event) => toggleMores($event, slotProps.data),
                        "aria-haspopup": "true",
                        "aria-controls": "overlay_More"
                      }, null, 8, ["onClick"])
                    ])
                  ])
                ];
              }
            }),
            empty: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (!isFirst.value) {
                  _push2(`<div class="align-items-center justify-content-center p-4 text-center" data-v-b462cd7f${_scopeId}><img${ssrRenderAttr("src", _imports_0)} height="144" data-v-b462cd7f${_scopeId}><h3 class="m-1" data-v-b462cd7f${_scopeId}>Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u</h3></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  !isFirst.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "align-items-center justify-content-center p-4 text-center"
                  }, [
                    createVNode("img", {
                      src: _imports_0,
                      height: "144"
                    }),
                    createVNode("h3", { class: "m-1" }, "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u")
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(unref(script$a), {
          id: "overlay_More",
          ref_key: "menuButMores",
          ref: menuButMores,
          model: itemButMores.value,
          popup: true
        }, null, _parent));
        _push(ssrRenderComponent(unref(script$9), {
          header: "C\u1EADp nh\u1EADt ng\u01B0\u1EDDi d\xF9ng",
          visible: displayAddUser.value,
          "onUpdate:visible": ($event) => displayAddUser.value = $event,
          style: { width: "55vw" },
          maximizable: true,
          closable: true,
          modal: true
        }, {
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                label: "Hu\u1EF7",
                icon: "pi pi-times",
                onClick: closedisplayAddUser,
                class: "p-button-raised p-button-secondary"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                label: "C\u1EADp nh\u1EADt",
                icon: "pi pi-save",
                onClick: ($event) => handleSubmit(!unref(v$).$invalid)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Button, {
                  label: "Hu\u1EF7",
                  icon: "pi pi-times",
                  onClick: closedisplayAddUser,
                  class: "p-button-raised p-button-secondary"
                }),
                createVNode(_component_Button, {
                  label: "C\u1EADp nh\u1EADt",
                  icon: "pi pi-save",
                  onClick: ($event) => handleSubmit(!unref(v$).$invalid)
                }, null, 8, ["onClick"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form name="submitform" data-v-b462cd7f${_scopeId}><div class="grid formgrid m-2" data-v-b462cd7f${_scopeId}><div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}>H\u1ECD t\xEAn <span class="redsao" data-v-b462cd7f${_scopeId}>(*)</span></label>`);
              _push2(ssrRenderComponent(_component_InputText, {
                spellcheck: "false",
                class: ["col-10 ip32 text-transform", { "p-invalid": unref(v$).full_name.$invalid && submitted.value }],
                modelValue: user.value.full_name,
                "onUpdate:modelValue": ($event) => user.value.full_name = $event,
                autocomplete: "username",
                name: "full_name"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(v$).full_name.required.$invalid && submitted.value || unref(v$).full_name.required.$pending.$response) {
                _push2(`<small class="col-10 p-error" data-v-b462cd7f${_scopeId}><div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}></label><span class="col-10 pl-3" data-v-b462cd7f${_scopeId}>${ssrInterpolate(unref(v$).full_name.required.$message.replace("Value", "T\xEAn ng\u01B0\u1EDDi d\xF9ng").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"))}</span></div></small>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(v$).full_name.maxLength.$invalid && submitted.value || unref(v$).full_name.maxLength.$pending.$response) {
                _push2(`<small class="col-10 p-error" data-v-b462cd7f${_scopeId}><div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}></label><span class="col-10 pl-3" data-v-b462cd7f${_scopeId}>${ssrInterpolate(unref(v$).full_name.maxLength.$message.replace(
                  "The maximum length allowed is",
                  "T\xEAn ng\u01B0\u1EDDi d\xF9ng kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1"
                ))} k\xFD t\u1EF1</span></div></small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}>T\xEAn \u0111\u0103ng nh\u1EADp <span class="redsao" data-v-b462cd7f${_scopeId}>(*)</span></label>`);
              _push2(ssrRenderComponent(_component_InputText, {
                spellcheck: "false",
                disabled: !isAdd.value,
                class: ["col-10 ip32", { "p-invalid": unref(v$).user_id.$invalid && submitted.value }],
                modelValue: user.value.user_id,
                "onUpdate:modelValue": ($event) => user.value.user_id = $event
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(v$).user_id.required.$invalid && submitted.value || unref(v$).user_id.required.$pending.$response) {
                _push2(`<small class="col-10 p-error" data-v-b462cd7f${_scopeId}><div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}></label><span class="col-10 pl-3" data-v-b462cd7f${_scopeId}>${ssrInterpolate(unref(v$).user_id.required.$message.replace("Value", "T\xEAn \u0111\u0103ng nh\u1EADp").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"))}</span></div></small>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(v$).user_id.maxLength.$invalid && submitted.value || unref(v$).user_id.maxLength.$pending.$response) {
                _push2(`<small class="col-10 p-error" data-v-b462cd7f${_scopeId}><div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}></label><span class="col-10 pl-3" data-v-b462cd7f${_scopeId}>${ssrInterpolate(unref(v$).user_id.maxLength.$message.replace(
                  "The maximum length allowed is",
                  "T\xEAn \u0111\u0103ng nh\u1EADp kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1"
                ))} k\xFD t\u1EF1</span></div></small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}>M\u1EADt kh\u1EA9u <span class="redsao" data-v-b462cd7f${_scopeId}>(*)</span></label>`);
              _push2(ssrRenderComponent(unref(script$6$1), {
                style: { "cursor": "pointer", "width": "33.33%" },
                modelValue: user.value.is_psword,
                "onUpdate:modelValue": ($event) => user.value.is_psword = $event,
                autocomplete: "new-password",
                class: "ip32"
              }, {
                header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h6 data-v-b462cd7f${_scopeId2}>Ch\u1ECDn m\u1EADt kh\u1EA9u</h6>`);
                  } else {
                    return [
                      createVNode("h6", null, "Ch\u1ECDn m\u1EADt kh\u1EA9u")
                    ];
                  }
                }),
                footer: withCtx((sp, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(sp.level)} `);
                    _push3(ssrRenderComponent(unref(script), null, null, _parent3, _scopeId2));
                    _push3(`<p class="mt-2" data-v-b462cd7f${_scopeId2}>G\u1EE3i \xFD</p><ul class="pl-2 ml-2 mt-0" style="${ssrRenderStyle({ "line-height": "1.5" })}" data-v-b462cd7f${_scopeId2}><li data-v-b462cd7f${_scopeId2}>C\xF3 \xEDt nh\u1EA5t 1 ch\u1EEF th\u01B0\u1EDDng</li><li data-v-b462cd7f${_scopeId2}>C\xF3 \xEDt nh\u1EA5t 1 ch\u1EEF hoa</li><li data-v-b462cd7f${_scopeId2}>C\xF3 \xEDt nh\u1EA5t 1 k\xFD t\u1EF1 s\u1ED1</li><li data-v-b462cd7f${_scopeId2}>T\u1ED1i thi\u1EC3u 8 k\xFD t\u1EF1</li></ul>`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(sp.level) + " ", 1),
                      createVNode(unref(script)),
                      createVNode("p", { class: "mt-2" }, "G\u1EE3i \xFD"),
                      createVNode("ul", {
                        class: "pl-2 ml-2 mt-0",
                        style: { "line-height": "1.5" }
                      }, [
                        createVNode("li", null, "C\xF3 \xEDt nh\u1EA5t 1 ch\u1EEF th\u01B0\u1EDDng"),
                        createVNode("li", null, "C\xF3 \xEDt nh\u1EA5t 1 ch\u1EEF hoa"),
                        createVNode("li", null, "C\xF3 \xEDt nh\u1EA5t 1 k\xFD t\u1EF1 s\u1ED1"),
                        createVNode("li", null, "T\u1ED1i thi\u1EC3u 8 k\xFD t\u1EF1")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(v$).is_psword.required.$invalid && submitted.value || unref(v$).is_psword.required.$pending.$response) {
                _push2(`<small class="col-10 p-error" data-v-b462cd7f${_scopeId}><div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}></label><span class="col-10 pl-3" data-v-b462cd7f${_scopeId}>${ssrInterpolate(unref(v$).is_psword.required.$message.replace("Value", "M\u1EADt kh\u1EA9u").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"))}</span></div></small>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(v$).is_psword.minLength.$invalid && submitted.value) {
                _push2(`<small class="col-10 p-error" data-v-b462cd7f${_scopeId}><div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}></label><span class="col-10 pl-3" data-v-b462cd7f${_scopeId}>${ssrInterpolate(unref(v$).is_psword.minLength.$message.replace(
                  "This field should be at least",
                  "M\u1EADt kh\u1EA9u kh\xF4ng \u0111\u01B0\u1EE3c \xEDt h\u01A1n"
                ).replace("long", "k\xFD t\u1EF1"))}</span></div></small>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(v$).is_psword.maxLength.$invalid && submitted.value) {
                _push2(`<small class="col-10 p-error" data-v-b462cd7f${_scopeId}><div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}></label><span class="col-10 pl-3" data-v-b462cd7f${_scopeId}>${ssrInterpolate(unref(v$).is_psword.maxLength.$message.replace(
                  "The maximum length allowed is",
                  "M\u1EADt kh\u1EA9u kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1"
                ))} k\xFD t\u1EF1</span></div></small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}>Ph\xF2ng ban</label>`);
              _push2(ssrRenderComponent(unref(script$7), {
                class: "col-10 ip32",
                modelValue: selectCapcha.value,
                "onUpdate:modelValue": ($event) => selectCapcha.value = $event,
                options: treedonvis.value,
                showClear: true,
                "max-height": 200,
                placeholder: "",
                optionLabel: "data.organization_name",
                optionValue: "data.department_id"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}>Nh\xF3m</label>`);
              _push2(ssrRenderComponent(unref(script$i), {
                class: "col-4 ip32",
                modelValue: user.value.role_id,
                "onUpdate:modelValue": ($event) => user.value.role_id = $event,
                options: tdRoles.value,
                optionLabel: "role_name",
                optionValue: "role_id",
                placeholder: "Ch\u1ECDn nh\xF3m",
                showClear: true
              }, null, _parent2, _scopeId));
              _push2(`<label class="col-2 text-left pl-7" data-v-b462cd7f${_scopeId}>Ch\u1EE9c v\u1EE5</label>`);
              _push2(ssrRenderComponent(unref(script$i), {
                class: "col-4 ip32",
                modelValue: user.value.position_id,
                "onUpdate:modelValue": ($event) => user.value.position_id = $event,
                options: chucvus.value,
                optionLabel: "position_name",
                optionValue: "position_id",
                placeholder: "Ch\u1ECDn ch\u1EE9c v\u1EE5",
                showClear: true
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}>Ng\xE0y sinh</label>`);
              _push2(ssrRenderComponent(unref(script$6$2), {
                class: "col-4 ip32",
                id: "icon",
                modelValue: user.value.birthday,
                "onUpdate:modelValue": ($event) => user.value.birthday = $event,
                showIcon: true
              }, null, _parent2, _scopeId));
              _push2(`<label class="col-2 text-left pl-7" data-v-b462cd7f${_scopeId}>Admin</label>`);
              _push2(ssrRenderComponent(unref(script$4$2), {
                class: "col-1 w-4rem lck-checked",
                modelValue: user.value.is_admin,
                "onUpdate:modelValue": ($event) => user.value.is_admin = $event
              }, null, _parent2, _scopeId));
              if (user.value.is_super) {
                _push2(`<label class="col-1" data-v-b462cd7f${_scopeId}></label>`);
              } else {
                _push2(`<!---->`);
              }
              if (user.value.is_super) {
                _push2(`<label class="col-2 text-right" data-v-b462cd7f${_scopeId}>Is Super</label>`);
              } else {
                _push2(`<!---->`);
              }
              if (user.value.is_super) {
                _push2(ssrRenderComponent(unref(script$4$2), {
                  modelValue: user.value.is_super,
                  "onUpdate:modelValue": ($event) => user.value.is_super = $event
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}>\u0110i\u1EC7n tho\u1EA1i</label>`);
              _push2(ssrRenderComponent(_component_InputText, {
                class: "col-4 ip32",
                spellcheck: "false",
                modelValue: user.value.phone,
                "onUpdate:modelValue": ($event) => user.value.phone = $event
              }, null, _parent2, _scopeId));
              _push2(`<label class="col-2 text-left pl-7" data-v-b462cd7f${_scopeId}>Email</label>`);
              _push2(ssrRenderComponent(_component_InputText, {
                class: "col-4 ip32",
                spellcheck: "false",
                modelValue: user.value.email,
                "onUpdate:modelValue": ($event) => user.value.email = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="field col-12 md:col-12" data-v-b462cd7f${_scopeId}><label class="col-2 text-left" data-v-b462cd7f${_scopeId}>Tr\u1EA1ng th\xE1i</label>`);
              _push2(ssrRenderComponent(unref(script$i), {
                class: "col-4 ip32",
                modelValue: user.value.status,
                "onUpdate:modelValue": ($event) => user.value.status = $event,
                options: tdstatuss.value,
                optionLabel: "text",
                optionValue: "value",
                placeholder: "Ch\u1ECDn tr\u1EA1ng th\xE1i"
              }, null, _parent2, _scopeId));
              _push2(`<label class="col-2 text-left pl-7" data-v-b462cd7f${_scopeId}>Gi\u1EDBi t\xEDnh</label>`);
              _push2(ssrRenderComponent(unref(script$i), {
                class: "col-4 ip32",
                modelValue: user.value.gender,
                "onUpdate:modelValue": ($event) => user.value.gender = $event,
                options: genders.value,
                optionLabel: "text",
                optionValue: "value",
                placeholder: "Ch\u1ECDn gi\u1EDBi t\xEDnh"
              }, null, _parent2, _scopeId));
              _push2(`</div><label class="col-2" data-v-b462cd7f${_scopeId}></label><div class="field col-12 flex align-items-center md:col-12" data-v-b462cd7f${_scopeId}><div class="col-2" data-v-b462cd7f${_scopeId}></div><div class="col-4" data-v-b462cd7f${_scopeId}><div class="col-12 text-center" data-v-b462cd7f${_scopeId}>\u1EA2nh \u0111\u1EA1i di\u1EC7n</div><div class="inputanh relative" style="${ssrRenderStyle({ "margin": "0 auto" })}" data-v-b462cd7f${_scopeId}><img id="Anhdaidien"${ssrRenderAttr(
                "src",
                user.value.avatar ? unref(basedomainURL) + user.value.avatar : unref(basedomainURL) + "/Portals/Image/noimg.jpg"
              )} data-v-b462cd7f${_scopeId}>`);
              if (user.value.avatar || isDisplayAvt.value) {
                _push2(ssrRenderComponent(_component_Button, {
                  style: { "width": "1.5rem", "height": "1.5rem" },
                  icon: "pi pi-times",
                  onClick: ($event) => delImg("Anhdaidien"),
                  class: "p-button-rounded absolute top-0 right-0 cursor-pointer"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<input class="ipnone" id="AnhUser" type="file" accept="image/*" data-v-b462cd7f${_scopeId}></div></div><div class="col-2 pl-7 text-left" data-v-b462cd7f${_scopeId}>STT</div>`);
              _push2(ssrRenderComponent(unref(script$e), {
                class: "w-full ip32 p-0",
                modelValue: user.value.is_order,
                "onUpdate:modelValue": ($event) => user.value.is_order = $event
              }, null, _parent2, _scopeId));
              _push2(`</div></div></form>`);
            } else {
              return [
                createVNode("form", {
                  onSubmit: withModifiers(($event) => handleSubmit(!unref(v$).$invalid), ["prevent"]),
                  name: "submitform"
                }, [
                  createVNode("div", { class: "grid formgrid m-2" }, [
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, [
                        createTextVNode("H\u1ECD t\xEAn "),
                        createVNode("span", { class: "redsao" }, "(*)")
                      ]),
                      createVNode(_component_InputText, {
                        spellcheck: "false",
                        class: ["col-10 ip32 text-transform", { "p-invalid": unref(v$).full_name.$invalid && submitted.value }],
                        modelValue: user.value.full_name,
                        "onUpdate:modelValue": ($event) => user.value.full_name = $event,
                        autocomplete: "username",
                        name: "full_name"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    unref(v$).full_name.required.$invalid && submitted.value || unref(v$).full_name.required.$pending.$response ? (openBlock(), createBlock("small", {
                      key: 0,
                      class: "col-10 p-error"
                    }, [
                      createVNode("div", { class: "field col-12 md:col-12" }, [
                        createVNode("label", { class: "col-2 text-left" }),
                        createVNode("span", { class: "col-10 pl-3" }, toDisplayString(unref(v$).full_name.required.$message.replace("Value", "T\xEAn ng\u01B0\u1EDDi d\xF9ng").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng")), 1)
                      ])
                    ])) : createCommentVNode("", true),
                    unref(v$).full_name.maxLength.$invalid && submitted.value || unref(v$).full_name.maxLength.$pending.$response ? (openBlock(), createBlock("small", {
                      key: 1,
                      class: "col-10 p-error"
                    }, [
                      createVNode("div", { class: "field col-12 md:col-12" }, [
                        createVNode("label", { class: "col-2 text-left" }),
                        createVNode("span", { class: "col-10 pl-3" }, toDisplayString(unref(v$).full_name.maxLength.$message.replace(
                          "The maximum length allowed is",
                          "T\xEAn ng\u01B0\u1EDDi d\xF9ng kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1"
                        )) + " k\xFD t\u1EF1", 1)
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, [
                        createTextVNode("T\xEAn \u0111\u0103ng nh\u1EADp "),
                        createVNode("span", { class: "redsao" }, "(*)")
                      ]),
                      createVNode(_component_InputText, {
                        spellcheck: "false",
                        disabled: !isAdd.value,
                        class: ["col-10 ip32", { "p-invalid": unref(v$).user_id.$invalid && submitted.value }],
                        modelValue: user.value.user_id,
                        "onUpdate:modelValue": ($event) => user.value.user_id = $event
                      }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    unref(v$).user_id.required.$invalid && submitted.value || unref(v$).user_id.required.$pending.$response ? (openBlock(), createBlock("small", {
                      key: 2,
                      class: "col-10 p-error"
                    }, [
                      createVNode("div", { class: "field col-12 md:col-12" }, [
                        createVNode("label", { class: "col-2 text-left" }),
                        createVNode("span", { class: "col-10 pl-3" }, toDisplayString(unref(v$).user_id.required.$message.replace("Value", "T\xEAn \u0111\u0103ng nh\u1EADp").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng")), 1)
                      ])
                    ])) : createCommentVNode("", true),
                    unref(v$).user_id.maxLength.$invalid && submitted.value || unref(v$).user_id.maxLength.$pending.$response ? (openBlock(), createBlock("small", {
                      key: 3,
                      class: "col-10 p-error"
                    }, [
                      createVNode("div", { class: "field col-12 md:col-12" }, [
                        createVNode("label", { class: "col-2 text-left" }),
                        createVNode("span", { class: "col-10 pl-3" }, toDisplayString(unref(v$).user_id.maxLength.$message.replace(
                          "The maximum length allowed is",
                          "T\xEAn \u0111\u0103ng nh\u1EADp kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1"
                        )) + " k\xFD t\u1EF1", 1)
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, [
                        createTextVNode("M\u1EADt kh\u1EA9u "),
                        createVNode("span", { class: "redsao" }, "(*)")
                      ]),
                      createVNode(unref(script$6$1), {
                        style: { "cursor": "pointer", "width": "33.33%" },
                        modelValue: user.value.is_psword,
                        "onUpdate:modelValue": ($event) => user.value.is_psword = $event,
                        autocomplete: "new-password",
                        class: "ip32"
                      }, {
                        header: withCtx(() => [
                          createVNode("h6", null, "Ch\u1ECDn m\u1EADt kh\u1EA9u")
                        ]),
                        footer: withCtx((sp) => [
                          createTextVNode(toDisplayString(sp.level) + " ", 1),
                          createVNode(unref(script)),
                          createVNode("p", { class: "mt-2" }, "G\u1EE3i \xFD"),
                          createVNode("ul", {
                            class: "pl-2 ml-2 mt-0",
                            style: { "line-height": "1.5" }
                          }, [
                            createVNode("li", null, "C\xF3 \xEDt nh\u1EA5t 1 ch\u1EEF th\u01B0\u1EDDng"),
                            createVNode("li", null, "C\xF3 \xEDt nh\u1EA5t 1 ch\u1EEF hoa"),
                            createVNode("li", null, "C\xF3 \xEDt nh\u1EA5t 1 k\xFD t\u1EF1 s\u1ED1"),
                            createVNode("li", null, "T\u1ED1i thi\u1EC3u 8 k\xFD t\u1EF1")
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    unref(v$).is_psword.required.$invalid && submitted.value || unref(v$).is_psword.required.$pending.$response ? (openBlock(), createBlock("small", {
                      key: 4,
                      class: "col-10 p-error"
                    }, [
                      createVNode("div", { class: "field col-12 md:col-12" }, [
                        createVNode("label", { class: "col-2 text-left" }),
                        createVNode("span", { class: "col-10 pl-3" }, toDisplayString(unref(v$).is_psword.required.$message.replace("Value", "M\u1EADt kh\u1EA9u").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng")), 1)
                      ])
                    ])) : createCommentVNode("", true),
                    unref(v$).is_psword.minLength.$invalid && submitted.value ? (openBlock(), createBlock("small", {
                      key: 5,
                      class: "col-10 p-error"
                    }, [
                      createVNode("div", { class: "field col-12 md:col-12" }, [
                        createVNode("label", { class: "col-2 text-left" }),
                        createVNode("span", { class: "col-10 pl-3" }, toDisplayString(unref(v$).is_psword.minLength.$message.replace(
                          "This field should be at least",
                          "M\u1EADt kh\u1EA9u kh\xF4ng \u0111\u01B0\u1EE3c \xEDt h\u01A1n"
                        ).replace("long", "k\xFD t\u1EF1")), 1)
                      ])
                    ])) : createCommentVNode("", true),
                    unref(v$).is_psword.maxLength.$invalid && submitted.value ? (openBlock(), createBlock("small", {
                      key: 6,
                      class: "col-10 p-error"
                    }, [
                      createVNode("div", { class: "field col-12 md:col-12" }, [
                        createVNode("label", { class: "col-2 text-left" }),
                        createVNode("span", { class: "col-10 pl-3" }, toDisplayString(unref(v$).is_psword.maxLength.$message.replace(
                          "The maximum length allowed is",
                          "M\u1EADt kh\u1EA9u kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1"
                        )) + " k\xFD t\u1EF1", 1)
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, "Ph\xF2ng ban"),
                      createVNode(unref(script$7), {
                        class: "col-10 ip32",
                        modelValue: selectCapcha.value,
                        "onUpdate:modelValue": ($event) => selectCapcha.value = $event,
                        options: treedonvis.value,
                        showClear: true,
                        "max-height": 200,
                        placeholder: "",
                        optionLabel: "data.organization_name",
                        optionValue: "data.department_id"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, "Nh\xF3m"),
                      createVNode(unref(script$i), {
                        class: "col-4 ip32",
                        modelValue: user.value.role_id,
                        "onUpdate:modelValue": ($event) => user.value.role_id = $event,
                        options: tdRoles.value,
                        optionLabel: "role_name",
                        optionValue: "role_id",
                        placeholder: "Ch\u1ECDn nh\xF3m",
                        showClear: true
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                      createVNode("label", { class: "col-2 text-left pl-7" }, "Ch\u1EE9c v\u1EE5"),
                      createVNode(unref(script$i), {
                        class: "col-4 ip32",
                        modelValue: user.value.position_id,
                        "onUpdate:modelValue": ($event) => user.value.position_id = $event,
                        options: chucvus.value,
                        optionLabel: "position_name",
                        optionValue: "position_id",
                        placeholder: "Ch\u1ECDn ch\u1EE9c v\u1EE5",
                        showClear: true
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, "Ng\xE0y sinh"),
                      createVNode(unref(script$6$2), {
                        class: "col-4 ip32",
                        id: "icon",
                        modelValue: user.value.birthday,
                        "onUpdate:modelValue": ($event) => user.value.birthday = $event,
                        showIcon: true
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("label", { class: "col-2 text-left pl-7" }, "Admin"),
                      createVNode(unref(script$4$2), {
                        class: "col-1 w-4rem lck-checked",
                        modelValue: user.value.is_admin,
                        "onUpdate:modelValue": ($event) => user.value.is_admin = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      user.value.is_super ? (openBlock(), createBlock("label", {
                        key: 0,
                        class: "col-1"
                      })) : createCommentVNode("", true),
                      user.value.is_super ? (openBlock(), createBlock("label", {
                        key: 1,
                        class: "col-2 text-right"
                      }, "Is Super")) : createCommentVNode("", true),
                      user.value.is_super ? (openBlock(), createBlock(unref(script$4$2), {
                        key: 2,
                        modelValue: user.value.is_super,
                        "onUpdate:modelValue": ($event) => user.value.is_super = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, "\u0110i\u1EC7n tho\u1EA1i"),
                      createVNode(_component_InputText, {
                        class: "col-4 ip32",
                        spellcheck: "false",
                        modelValue: user.value.phone,
                        "onUpdate:modelValue": ($event) => user.value.phone = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("label", { class: "col-2 text-left pl-7" }, "Email"),
                      createVNode(_component_InputText, {
                        class: "col-4 ip32",
                        spellcheck: "false",
                        modelValue: user.value.email,
                        "onUpdate:modelValue": ($event) => user.value.email = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, "Tr\u1EA1ng th\xE1i"),
                      createVNode(unref(script$i), {
                        class: "col-4 ip32",
                        modelValue: user.value.status,
                        "onUpdate:modelValue": ($event) => user.value.status = $event,
                        options: tdstatuss.value,
                        optionLabel: "text",
                        optionValue: "value",
                        placeholder: "Ch\u1ECDn tr\u1EA1ng th\xE1i"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                      createVNode("label", { class: "col-2 text-left pl-7" }, "Gi\u1EDBi t\xEDnh"),
                      createVNode(unref(script$i), {
                        class: "col-4 ip32",
                        modelValue: user.value.gender,
                        "onUpdate:modelValue": ($event) => user.value.gender = $event,
                        options: genders.value,
                        optionLabel: "text",
                        optionValue: "value",
                        placeholder: "Ch\u1ECDn gi\u1EDBi t\xEDnh"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    createVNode("label", { class: "col-2" }),
                    createVNode("div", { class: "field col-12 flex align-items-center md:col-12" }, [
                      createVNode("div", { class: "col-2" }),
                      createVNode("div", { class: "col-4" }, [
                        createVNode("div", { class: "col-12 text-center" }, "\u1EA2nh \u0111\u1EA1i di\u1EC7n"),
                        createVNode("div", {
                          class: "inputanh relative",
                          style: { "margin": "0 auto" }
                        }, [
                          createVNode("img", {
                            onClick: ($event) => chonanh("AnhUser"),
                            id: "Anhdaidien",
                            src: user.value.avatar ? unref(basedomainURL) + user.value.avatar : unref(basedomainURL) + "/Portals/Image/noimg.jpg"
                          }, null, 8, ["onClick", "src"]),
                          user.value.avatar || isDisplayAvt.value ? (openBlock(), createBlock(_component_Button, {
                            key: 0,
                            style: { "width": "1.5rem", "height": "1.5rem" },
                            icon: "pi pi-times",
                            onClick: ($event) => delImg("Anhdaidien"),
                            class: "p-button-rounded absolute top-0 right-0 cursor-pointer"
                          }, null, 8, ["onClick"])) : createCommentVNode("", true),
                          createVNode("input", {
                            class: "ipnone",
                            id: "AnhUser",
                            type: "file",
                            accept: "image/*",
                            onChange: ($event) => handleFileUpload($event, "Anhdaidien")
                          }, null, 40, ["onChange"])
                        ])
                      ]),
                      createVNode("div", { class: "col-2 pl-7 text-left" }, "STT"),
                      createVNode(unref(script$e), {
                        class: "w-full ip32 p-0",
                        modelValue: user.value.is_order,
                        "onUpdate:modelValue": ($event) => user.value.is_order = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ], 40, ["onSubmit"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(script$9), {
          header: "T\u1EA3i l\xEAn file Excel",
          visible: displayImport.value,
          "onUpdate:visible": ($event) => displayImport.value = $event,
          style: { width: "40vw" },
          closable: true
        }, {
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                label: "L\u01B0u",
                icon: "pi pi-check",
                onClick: Upload
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Button, {
                  label: "L\u01B0u",
                  icon: "pi pi-check",
                  onClick: Upload
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 data-v-b462cd7f${_scopeId}><label data-v-b462cd7f${_scopeId}><a${ssrRenderAttr("href", unref(basedomainURL) + item)} download data-v-b462cd7f${_scopeId}>Nh\u1EA5n v\xE0o \u0111\xE2y</a> \u0111\u1EC3 t\u1EA3i xu\u1ED1ng t\u1EC7p m\u1EABu. </label></h3><form data-v-b462cd7f${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$c), {
                accept: ".xls,.xlsx",
                onRemove: removeFile,
                onSelect: selectFile,
                "show-upload-button": false,
                "choose-label": "Ch\u1ECDn t\u1EC7p",
                "cancel-label": "H\u1EE7y",
                fileLimit: 1,
                invalidFileTypeMessage: "Ch\u1EC9 ch\u1EA5p nh\u1EADn file d\u1EA1ng .xsl,.xlsx,.slsm,.csv"
              }, {
                empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-b462cd7f${_scopeId2}>K\xE9o v\xE0 th\u1EA3 t\u1EC7p v\xE0o \u0111\xE2y \u0111\u1EC3 t\u1EA3i l\xEAn.</p>`);
                  } else {
                    return [
                      createVNode("p", null, "K\xE9o v\xE0 th\u1EA3 t\u1EC7p v\xE0o \u0111\xE2y \u0111\u1EC3 t\u1EA3i l\xEAn.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form>`);
            } else {
              return [
                createVNode("h3", null, [
                  createVNode("label", null, [
                    createVNode("a", {
                      href: unref(basedomainURL) + item,
                      download: ""
                    }, "Nh\u1EA5n v\xE0o \u0111\xE2y", 8, ["href"]),
                    createTextVNode(" \u0111\u1EC3 t\u1EA3i xu\u1ED1ng t\u1EC7p m\u1EABu. ")
                  ])
                ]),
                createVNode("form", null, [
                  createVNode(unref(script$c), {
                    accept: ".xls,.xlsx",
                    onRemove: removeFile,
                    onSelect: selectFile,
                    "show-upload-button": false,
                    "choose-label": "Ch\u1ECDn t\u1EC7p",
                    "cancel-label": "H\u1EE7y",
                    fileLimit: 1,
                    invalidFileTypeMessage: "Ch\u1EC9 ch\u1EA5p nh\u1EADn file d\u1EA1ng .xsl,.xlsx,.slsm,.csv"
                  }, {
                    empty: withCtx(() => [
                      createVNode("p", null, "K\xE9o v\xE0 th\u1EA3 t\u1EC7p v\xE0o \u0111\xE2y \u0111\u1EC3 t\u1EA3i l\xEAn.")
                    ]),
                    _: 1
                  }, 8, ["invalidFileTypeMessage"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/system/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b462cd7f"]]);

export { index as default };
//# sourceMappingURL=index-0dc8fb8b.mjs.map
