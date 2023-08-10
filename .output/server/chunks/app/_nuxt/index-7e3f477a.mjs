import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { inject, ref, watch, resolveComponent, resolveDirective, mergeProps, unref, withCtx, createVNode, withKeys, openBlock, createBlock, createCommentVNode, toDisplayString, withDirectives, createTextVNode, Fragment, renderList, useSSRContext, createElementBlock, createElementVNode, renderSlot, resolveDynamicComponent, normalizeProps, guardReactiveProps, Transition, normalizeStyle, normalizeClass, withModifiers, vShow, createSlots } from 'vue';
import { f as useStyle, _ as _export_sfc, e as useRuntimeConfig, d as useState, a as useRoute, b as useRouter, i as FilterMatchMode, j as FilterOperator, Z as ZIndexUtils, D as DomHandler, U as UniqueComponentId, O as ObjectUtils, C as ConnectedOverlayScrollHandler, F as FilterService, R as Ripple, h as script$3$1, s as script$6$2, g as script$4$3 } from '../server.mjs';
import { u as useCookie, d as decr, H as HeadBar, S as SideBar, L as LoginView, s as script$8$1, a as script$2$1, b as script$5$1, e as encr } from './LoginView-36c4fae0.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { s as script$4$2, _ as _imports_0, a as script$e } from './dialog.esm-d5eb41c3.mjs';
import { s as script$9 } from './toolbar.esm-5b0c3172.mjs';
import { s as script$4$1, a as script$c } from './checkbox.esm-05dfc993.mjs';
import { s as script$i, a as script$e$1, b as script$l, F as FocusTrap, c as script$j } from './paginator.esm-79cc5f95.mjs';
import { s as script$6$1, a as script$f } from './fileupload.esm-880463ee.mjs';
import { s as script$b } from './index.esm-ab832c47.mjs';
import { s as script$a } from './datatable.esm-ad1df276.mjs';
import { s as script$d } from './sidebar.esm-b64f0d19.mjs';
import { s as script$1$4, O as OverlayEventBus, a as script$h } from './index.esm-c4d8e664.mjs';
import { s as script$g } from './index.esm-5b5a4d3f.mjs';
import { required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import moment from 'moment';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-cryptojs';
import 'vue-sweetalert2';
import './asyncData-ff2c63f7.mjs';
import './index.esm-2c744238.mjs';
import 'cookie-es';
import './index.esm-a1c6b8ad.mjs';

const _imports_1 = "" + buildAssetsURL("new.e5fa6eff.jpg");
var styles$3 = "\n.p-inputtextarea-resizable {\n    overflow: hidden;\n    resize: none;\n}\n\n.p-fluid .p-inputtextarea {\n    width: 100%;\n}\n";
var classes$3 = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-inputtextarea p-inputtext p-component", {
      "p-filled": instance.filled,
      "p-inputtextarea-resizable ": props.autoResize
    }];
  }
};
var _useStyle$3 = useStyle(styles$3, {
  name: "textarea",
  manual: true
}), loadStyle$3 = _useStyle$3.load;
var script$1$3 = {
  name: "BaseTextarea",
  "extends": script$6$2,
  props: {
    modelValue: null,
    autoResize: Boolean
  },
  css: {
    classes: classes$3,
    loadStyle: loadStyle$3
  },
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script$8 = {
  name: "Textarea",
  "extends": script$1$3,
  emits: ["update:modelValue"],
  mounted: function mounted() {
    if (this.$el.offsetParent && this.autoResize) {
      this.resize();
    }
  },
  updated: function updated() {
    if (this.$el.offsetParent && this.autoResize) {
      this.resize();
    }
  },
  methods: {
    resize: function resize() {
      var style = window.getComputedStyle(this.$el);
      this.$el.style.height = "auto";
      this.$el.style.height = "calc(".concat(style.borderTopWidth, " + ").concat(style.borderBottomWidth, " + ").concat(this.$el.scrollHeight, "px)");
      if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {
        this.$el.style.overflowY = "scroll";
        this.$el.style.height = this.$el.style.maxHeight;
      } else {
        this.$el.style.overflow = "hidden";
      }
    },
    onInput: function onInput(event) {
      if (this.autoResize) {
        this.resize();
      }
      this.$emit("update:modelValue", event.target.value);
    }
  },
  computed: {
    filled: function filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    ptmParams: function ptmParams() {
      return {
        context: {
          disabled: this.$attrs.disabled || this.$attrs.disabled === ""
        }
      };
    }
  }
};
var _hoisted_1$7 = ["value"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("textarea", mergeProps({
    "class": _ctx.cx("root"),
    value: _ctx.modelValue,
    onInput: _cache[0] || (_cache[0] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, _ctx.ptm("root", $options.ptmParams), {
    "data-pc-name": "textarea"
  }), null, 16, _hoisted_1$7);
}
script$8.render = render$7;
var script$7 = {
  name: "RefreshIcon",
  "extends": script$4$3,
  computed: {
    pathId: function pathId() {
      return "pv_icon_clip_".concat(UniqueComponentId());
    }
  }
};
var _hoisted_1$6 = ["clipPath"];
var _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3$5 = [_hoisted_2$5];
var _hoisted_4$5 = ["id"];
var _hoisted_5$5 = /* @__PURE__ */ createElementVNode("rect", {
  width: "14",
  height: "14",
  fill: "white"
}, null, -1);
var _hoisted_6$5 = [_hoisted_5$5];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), [createElementVNode("g", {
    clipPath: "url(#".concat($options.pathId, ")")
  }, _hoisted_3$5, 8, _hoisted_1$6), createElementVNode("defs", null, [createElementVNode("clipPath", {
    id: "".concat($options.pathId)
  }, _hoisted_6$5, 8, _hoisted_4$5)])], 16);
}
script$7.render = render$6;
var script$6 = {
  name: "SearchMinusIcon",
  "extends": script$4$3,
  computed: {
    pathId: function pathId2() {
      return "pv_icon_clip_".concat(UniqueComponentId());
    }
  }
};
var _hoisted_1$5 = ["clipPath"];
var _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3$4 = [_hoisted_2$4];
var _hoisted_4$4 = ["id"];
var _hoisted_5$4 = /* @__PURE__ */ createElementVNode("rect", {
  width: "14",
  height: "14",
  fill: "white"
}, null, -1);
var _hoisted_6$4 = [_hoisted_5$4];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), [createElementVNode("g", {
    clipPath: "url(#".concat($options.pathId, ")")
  }, _hoisted_3$4, 8, _hoisted_1$5), createElementVNode("defs", null, [createElementVNode("clipPath", {
    id: "".concat($options.pathId)
  }, _hoisted_6$4, 8, _hoisted_4$4)])], 16);
}
script$6.render = render$5;
var script$5 = {
  name: "SearchPlusIcon",
  "extends": script$4$3,
  computed: {
    pathId: function pathId3() {
      return "pv_icon_clip_".concat(UniqueComponentId());
    }
  }
};
var _hoisted_1$4 = ["clipPath"];
var _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3$3 = [_hoisted_2$3];
var _hoisted_4$3 = ["id"];
var _hoisted_5$3 = /* @__PURE__ */ createElementVNode("rect", {
  width: "14",
  height: "14",
  fill: "white"
}, null, -1);
var _hoisted_6$3 = [_hoisted_5$3];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), [createElementVNode("g", {
    clipPath: "url(#".concat($options.pathId, ")")
  }, _hoisted_3$3, 8, _hoisted_1$4), createElementVNode("defs", null, [createElementVNode("clipPath", {
    id: "".concat($options.pathId)
  }, _hoisted_6$3, 8, _hoisted_4$3)])], 16);
}
script$5.render = render$4;
var script$4 = {
  name: "UndoIcon",
  "extends": script$4$3,
  computed: {
    pathId: function pathId4() {
      return "pv_icon_clip_".concat(UniqueComponentId());
    }
  }
};
var _hoisted_1$3 = ["clipPath"];
var _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3$2 = [_hoisted_2$2];
var _hoisted_4$2 = ["id"];
var _hoisted_5$2 = /* @__PURE__ */ createElementVNode("rect", {
  width: "14",
  height: "14",
  fill: "white"
}, null, -1);
var _hoisted_6$2 = [_hoisted_5$2];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), [createElementVNode("g", {
    clipPath: "url(#".concat($options.pathId, ")")
  }, _hoisted_3$2, 8, _hoisted_1$3), createElementVNode("defs", null, [createElementVNode("clipPath", {
    id: "".concat($options.pathId)
  }, _hoisted_6$2, 8, _hoisted_4$2)])], 16);
}
script$4.render = render$3;
var styles$2 = "\n.p-image-mask {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-image-preview-container {\n    position: relative;\n    display: inline-block;\n}\n\n.p-image-preview-indicator {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0;\n    transition: opacity 0.3s;\n}\n\n.p-image-preview-container:hover > .p-image-preview-indicator {\n    opacity: 1;\n    cursor: pointer;\n}\n\n.p-image-preview-container > img {\n    cursor: pointer;\n}\n\n.p-image-toolbar {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex;\n}\n\n.p-image-action.p-link {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.p-image-preview {\n    transition: transform 0.15s;\n    max-width: 100vw;\n    max-height: 100vh;\n}\n\n.p-image-preview-enter-active {\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n.p-image-preview-leave-active {\n    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.p-image-preview-enter-from,\n.p-image-preview-leave-to {\n    opacity: 0;\n    transform: scale(0.7);\n}\n";
var classes$2 = {
  root: function root2(_ref) {
    var props = _ref.props;
    return ["p-image p-component", {
      "p-image-preview-container": props.preview
    }];
  },
  image: function image(_ref2) {
    var props = _ref2.props;
    return props.image;
  },
  button: "p-image-preview-indicator",
  icon: "p-image-preview-icon",
  mask: "p-image-mask p-component-overlay p-component-overlay-enter",
  rotateRightButton: "p-image-action p-link",
  rotateLeftButton: "p-image-action p-link",
  zoomOutButton: function zoomOutButton(_ref3) {
    var instance = _ref3.instance;
    return ["p-image-action p-link", {
      "p-disabled": instance.isZoomOutDisabled
    }];
  },
  zoomInButton: function zoomInButton(_ref4) {
    var instance = _ref4.instance;
    return ["p-image-action p-link", {
      "p-disabled": instance.isZoomInDisabled
    }];
  },
  closeButton: "p-image-action p-link",
  preview: "p-image-preview"
};
var _useStyle$2 = useStyle(styles$2, {
  name: "image",
  manual: true
}), loadStyle$2 = _useStyle$2.load;
var script$1$2 = {
  name: "BaseImage",
  "extends": script$6$2,
  props: {
    preview: {
      type: Boolean,
      "default": false
    },
    "class": {
      type: null,
      "default": null
    },
    style: {
      type: null,
      "default": null
    },
    imageStyle: {
      type: null,
      "default": null
    },
    imageClass: {
      type: null,
      "default": null
    },
    previewButtonProps: {
      type: null,
      "default": null
    },
    indicatorIcon: {
      type: String,
      "default": void 0
    },
    zoomInDisabled: {
      type: Boolean,
      "default": false
    },
    zoomOutDisabled: {
      type: Boolean,
      "default": false
    }
  },
  css: {
    classes: classes$2,
    loadStyle: loadStyle$2
  },
  provide: function provide2() {
    return {
      $parentInstance: this
    };
  }
};
var script$3 = {
  name: "Image",
  "extends": script$1$2,
  inheritAttrs: false,
  emits: ["show", "hide", "error"],
  mask: null,
  data: function data() {
    return {
      maskVisible: false,
      previewVisible: false,
      rotate: 0,
      scale: 1
    };
  },
  beforeUnmount: function beforeUnmount() {
    if (this.mask) {
      ZIndexUtils.clear(this.container);
    }
  },
  methods: {
    maskRef: function maskRef(el) {
      this.mask = el;
    },
    toolbarRef: function toolbarRef(el) {
      this.toolbarRef = el;
    },
    onImageClick: function onImageClick() {
      var _this = this;
      if (this.preview) {
        this.maskVisible = true;
        setTimeout(function() {
          _this.previewVisible = true;
        }, 25);
      }
    },
    onPreviewImageClick: function onPreviewImageClick() {
      this.previewClick = true;
    },
    onMaskClick: function onMaskClick(event) {
      var isActionbarTarget = [event.target.classList].includes("p-image-action") || event.target.closest(".p-image-action");
      if (isActionbarTarget) {
        return;
      }
      if (!this.previewClick) {
        this.previewVisible = false;
        this.rotate = 0;
        this.scale = 1;
      }
      this.previewClick = false;
    },
    onMaskKeydown: function onMaskKeydown(event) {
      var _this2 = this;
      switch (event.code) {
        case "Escape":
          this.onMaskClick();
          setTimeout(function() {
            DomHandler.focus(_this2.$refs.previewButton);
          }, 25);
          event.preventDefault();
          break;
      }
    },
    onError: function onError() {
      this.$emit("error");
    },
    rotateRight: function rotateRight() {
      this.rotate += 90;
      this.previewClick = true;
    },
    rotateLeft: function rotateLeft() {
      this.rotate -= 90;
      this.previewClick = true;
    },
    zoomIn: function zoomIn() {
      this.scale = this.scale + 0.1;
      this.previewClick = true;
    },
    zoomOut: function zoomOut() {
      this.scale = this.scale - 0.1;
      this.previewClick = true;
    },
    onBeforeEnter: function onBeforeEnter() {
      ZIndexUtils.set("modal", this.mask, this.$primevue.config.zIndex.modal);
    },
    onEnter: function onEnter() {
      this.focus();
      this.$emit("show");
    },
    onBeforeLeave: function onBeforeLeave() {
      !this.isUnstyled && DomHandler.addClass(this.mask, "p-component-overlay-leave");
    },
    onLeave: function onLeave() {
      this.$emit("hide");
    },
    onAfterLeave: function onAfterLeave(el) {
      ZIndexUtils.clear(el);
      this.maskVisible = false;
    },
    focus: function focus() {
      var focusTarget = this.mask.querySelector("[autofocus]");
      if (focusTarget) {
        focusTarget.focus();
      }
    },
    hidePreview: function hidePreview() {
      this.previewVisible = false;
      this.rotate = 0;
      this.scale = 1;
    }
  },
  computed: {
    containerClass: function containerClass() {
      return [this.cx("root"), this["class"]];
    },
    rotateClass: function rotateClass() {
      return "p-image-preview-rotate-" + this.rotate;
    },
    imagePreviewStyle: function imagePreviewStyle() {
      return {
        transform: "rotate(" + this.rotate + "deg) scale(" + this.scale + ")"
      };
    },
    isZoomInDisabled: function isZoomInDisabled() {
      return this.zoomInDisabled || this.scale >= 1.5;
    },
    isZoomOutDisabled: function isZoomOutDisabled() {
      return this.zoomOutDisabled || this.scale <= 0.5;
    },
    rightAriaLabel: function rightAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.rotateRight : void 0;
    },
    leftAriaLabel: function leftAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.rotateLeft : void 0;
    },
    zoomInAriaLabel: function zoomInAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.zoomIn : void 0;
    },
    zoomOutAriaLabel: function zoomOutAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.zoomOut : void 0;
    },
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  components: {
    Portal: script$1$4,
    EyeIcon: script$8$1,
    RefreshIcon: script$7,
    UndoIcon: script$4,
    SearchMinusIcon: script$6,
    SearchPlusIcon: script$5,
    TimesIcon: script$l
  },
  directives: {
    focustrap: FocusTrap
  }
};
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$2(obj);
}
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$2(arg) {
  var key = _toPrimitive$2(arg, "string");
  return _typeof$2(key) === "symbol" ? key : String(key);
}
function _toPrimitive$2(input, hint) {
  if (_typeof$2(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$2(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var _hoisted_1$2 = ["aria-modal"];
var _hoisted_2$1 = ["aria-label"];
var _hoisted_3$1 = ["aria-label"];
var _hoisted_4$1 = ["disabled", "aria-label"];
var _hoisted_5$1 = ["disabled", "aria-label"];
var _hoisted_6$1 = ["aria-label"];
var _hoisted_7$1 = ["src"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_RefreshIcon = resolveComponent("RefreshIcon");
  var _component_UndoIcon = resolveComponent("UndoIcon");
  var _component_SearchMinusIcon = resolveComponent("SearchMinusIcon");
  var _component_SearchPlusIcon = resolveComponent("SearchPlusIcon");
  var _component_TimesIcon = resolveComponent("TimesIcon");
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createElementBlock("span", mergeProps({
    "class": $options.containerClass,
    style: _ctx.style
  }, _ctx.ptm("root"), {
    "data-pc-name": "image"
  }), [renderSlot(_ctx.$slots, "image", {
    onError: $options.onError
  }, function() {
    return [createElementVNode("img", mergeProps({
      style: _ctx.imageStyle,
      "class": [_ctx.cx("image"), _ctx.imageClass],
      onError: _cache[0] || (_cache[0] = function() {
        return $options.onError && $options.onError.apply($options, arguments);
      })
    }, _objectSpread$2(_objectSpread$2({}, _ctx.$attrs), _ctx.ptm("image"))), null, 16)];
  }), _ctx.preview ? (openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    ref: "previewButton",
    "class": _ctx.cx("button"),
    onClick: _cache[1] || (_cache[1] = function() {
      return $options.onImageClick && $options.onImageClick.apply($options, arguments);
    })
  }, _objectSpread$2(_objectSpread$2({}, _ctx.previewButtonProps), _ctx.ptm("button"))), [renderSlot(_ctx.$slots, "indicatoricon", {}, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.indicatorIcon ? "i" : "EyeIcon"), mergeProps({
      "class": _ctx.cx("icon")
    }, _ctx.ptm("icon")), null, 16, ["class"]))];
  })], 16)) : createCommentVNode("", true), createVNode(_component_Portal, null, {
    "default": withCtx(function() {
      return [$data.maskVisible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        ref: $options.maskRef,
        role: "dialog",
        "class": _ctx.cx("mask"),
        "aria-modal": $data.maskVisible,
        onClick: _cache[8] || (_cache[8] = function() {
          return $options.onMaskClick && $options.onMaskClick.apply($options, arguments);
        }),
        onKeydown: _cache[9] || (_cache[9] = function() {
          return $options.onMaskKeydown && $options.onMaskKeydown.apply($options, arguments);
        })
      }, _ctx.ptm("mask")), [createElementVNode("div", mergeProps({
        "class": "p-image-toolbar"
      }, _ctx.ptm("toolbar")), [createElementVNode("button", mergeProps({
        "class": _ctx.cx("rotateRightButton"),
        onClick: _cache[2] || (_cache[2] = function() {
          return $options.rotateRight && $options.rotateRight.apply($options, arguments);
        }),
        type: "button",
        "aria-label": $options.rightAriaLabel
      }, _ctx.ptm("rotateRightButton")), [renderSlot(_ctx.$slots, "refresh", {}, function() {
        return [createVNode(_component_RefreshIcon, normalizeProps(guardReactiveProps(_ctx.ptm("rotateRightIcon"))), null, 16)];
      })], 16, _hoisted_2$1), createElementVNode("button", mergeProps({
        "class": _ctx.cx("rotateLeftButton"),
        onClick: _cache[3] || (_cache[3] = function() {
          return $options.rotateLeft && $options.rotateLeft.apply($options, arguments);
        }),
        type: "button",
        "aria-label": $options.leftAriaLabel
      }, _ctx.ptm("rotateLeftButton")), [renderSlot(_ctx.$slots, "undo", {}, function() {
        return [createVNode(_component_UndoIcon, normalizeProps(guardReactiveProps(_ctx.ptm("rotateLeftIcon"))), null, 16)];
      })], 16, _hoisted_3$1), createElementVNode("button", mergeProps({
        "class": _ctx.cx("zoomOutButton"),
        onClick: _cache[4] || (_cache[4] = function() {
          return $options.zoomOut && $options.zoomOut.apply($options, arguments);
        }),
        type: "button",
        disabled: $options.isZoomOutDisabled,
        "aria-label": $options.zoomOutAriaLabel
      }, _ctx.ptm("zoomOutButton")), [renderSlot(_ctx.$slots, "zoomout", {}, function() {
        return [createVNode(_component_SearchMinusIcon, normalizeProps(guardReactiveProps(_ctx.ptm("zoomOutIcon"))), null, 16)];
      })], 16, _hoisted_4$1), createElementVNode("button", mergeProps({
        "class": _ctx.cx("zoomInButton"),
        onClick: _cache[5] || (_cache[5] = function() {
          return $options.zoomIn && $options.zoomIn.apply($options, arguments);
        }),
        type: "button",
        disabled: $options.isZoomInDisabled,
        "aria-label": $options.zoomInAriaLabel
      }, _ctx.ptm("zoomInButton")), [renderSlot(_ctx.$slots, "zoomin", {}, function() {
        return [createVNode(_component_SearchPlusIcon, normalizeProps(guardReactiveProps(_ctx.ptm("zoomInIcon"))), null, 16)];
      })], 16, _hoisted_5$1), createElementVNode("button", mergeProps({
        "class": _ctx.cx("closeButton"),
        type: "button",
        onClick: _cache[6] || (_cache[6] = function() {
          return $options.hidePreview && $options.hidePreview.apply($options, arguments);
        }),
        "aria-label": $options.closeAriaLabel,
        autofocus: ""
      }, _ctx.ptm("closeButton")), [renderSlot(_ctx.$slots, "close", {}, function() {
        return [createVNode(_component_TimesIcon, normalizeProps(guardReactiveProps(_ctx.ptm("closeIcon"))), null, 16)];
      })], 16, _hoisted_6$1)], 16), createVNode(Transition, {
        name: "p-image-preview",
        onBeforeEnter: $options.onBeforeEnter,
        onEnter: $options.onEnter,
        onLeave: $options.onLeave,
        onBeforeLeave: $options.onBeforeLeave,
        onAfterLeave: $options.onAfterLeave
      }, {
        "default": withCtx(function() {
          return [$data.previewVisible ? (openBlock(), createElementBlock("div", normalizeProps(mergeProps({
            key: 0
          }, _ctx.ptm("previewContainer"))), [renderSlot(_ctx.$slots, "preview", {
            style: normalizeStyle($options.imagePreviewStyle),
            onClick: $options.onPreviewImageClick
          }, function() {
            return [createElementVNode("img", mergeProps({
              src: _ctx.$attrs.src,
              "class": _ctx.cx("preview"),
              style: $options.imagePreviewStyle,
              onClick: _cache[7] || (_cache[7] = function() {
                return $options.onPreviewImageClick && $options.onPreviewImageClick.apply($options, arguments);
              })
            }, _ctx.ptm("preview")), null, 16, _hoisted_7$1)];
          })], 16)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 8, ["onBeforeEnter", "onEnter", "onLeave", "onBeforeLeave", "onAfterLeave"])], 16, _hoisted_1$2)), [[_directive_focustrap]]) : createCommentVNode("", true)];
    }),
    _: 3
  })], 16);
}
script$3.render = render$2;
var styles$1 = "\n.p-progress-spinner {\n    position: relative;\n    margin: 0 auto;\n    width: 100px;\n    height: 100px;\n    display: inline-block;\n}\n\n.p-progress-spinner::before {\n    content: '';\n    display: block;\n    padding-top: 100%;\n}\n\n.p-progress-spinner-svg {\n    height: 100%;\n    transform-origin: center center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n";
var classes$1 = {
  root: "p-progress-spinner",
  spinner: "p-progress-spinner-svg",
  circle: "p-progress-spinner-circle"
};
var _useStyle$1 = useStyle(styles$1, {
  name: "progressspinner",
  manual: true
}), loadStyle$1 = _useStyle$1.load;
var script$1$1 = {
  name: "BaseProgressSpinner",
  "extends": script$6$2,
  props: {
    strokeWidth: {
      type: String,
      "default": "2"
    },
    fill: {
      type: String,
      "default": "none"
    },
    animationDuration: {
      type: String,
      "default": "2s"
    }
  },
  css: {
    classes: classes$1,
    loadStyle: loadStyle$1
  },
  provide: function provide3() {
    return {
      $parentInstance: this
    };
  }
};
var script$2 = {
  name: "ProgressSpinner",
  "extends": script$1$1,
  computed: {
    svgStyle: function svgStyle() {
      return {
        "animation-duration": this.animationDuration
      };
    }
  }
};
var _hoisted_1$1 = ["fill", "stroke-width"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "progressbar"
  }, _ctx.ptm("root"), {
    "data-pc-name": "progressspinner"
  }), [(openBlock(), createElementBlock("svg", mergeProps({
    "class": _ctx.cx("spinner"),
    viewBox: "25 25 50 50",
    style: $options.svgStyle
  }, _ctx.ptm("spinner")), [createElementVNode("circle", mergeProps({
    "class": _ctx.cx("circle"),
    cx: "50",
    cy: "50",
    r: "20",
    fill: _ctx.fill,
    "stroke-width": _ctx.strokeWidth,
    strokeMiterlimit: "10"
  }, _ctx.ptm("circle")), null, 16, _hoisted_1$1)], 16))], 16);
}
script$2.render = render$1;
var styles = "\n.p-multiselect {\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n}\n\n.p-multiselect-trigger {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n}\n\n.p-multiselect-label-container {\n    overflow: hidden;\n    flex: 1 1 auto;\n    cursor: pointer;\n}\n\n.p-multiselect-label {\n    display: block;\n    white-space: nowrap;\n    cursor: pointer;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.p-multiselect-label-empty {\n    overflow: hidden;\n    visibility: hidden;\n}\n\n.p-multiselect-token {\n    cursor: default;\n    display: inline-flex;\n    align-items: center;\n    flex: 0 0 auto;\n}\n\n.p-multiselect-token-icon {\n    cursor: pointer;\n}\n\n.p-multiselect .p-multiselect-panel {\n    min-width: 100%;\n}\n\n.p-multiselect-items-wrapper {\n    overflow: auto;\n}\n\n.p-multiselect-items {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\n.p-multiselect-item {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    font-weight: normal;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n}\n\n.p-multiselect-item-group {\n    cursor: auto;\n}\n\n.p-multiselect-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.p-multiselect-filter-container {\n    position: relative;\n    flex: 1 1 auto;\n}\n\n.p-multiselect-filter-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n\n.p-multiselect-filter-container .p-inputtext {\n    width: 100%;\n}\n\n.p-multiselect-close {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    overflow: hidden;\n    position: relative;\n    margin-left: auto;\n}\n\n.p-fluid .p-multiselect {\n    display: flex;\n}\n";
var inlineStyles = {
  root: function root3(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === "self" ? "relative" : void 0
    };
  }
};
var classes = {
  root: function root4(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-multiselect p-component p-inputwrapper", {
      "p-multiselect-chip": props.display === "chip",
      "p-disabled": props.disabled,
      "p-focus": instance.focused,
      "p-inputwrapper-filled": props.modelValue && props.modelValue.length,
      "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
      "p-overlay-open": instance.overlayVisible
    }];
  },
  labelContainer: "p-multiselect-label-container",
  label: function label(_ref3) {
    var instance = _ref3.instance, props = _ref3.props;
    return ["p-multiselect-label", {
      "p-placeholder": instance.label === props.placeholder,
      "p-multiselect-label-empty": !props.placeholder && (!props.modelValue || props.modelValue.length === 0)
    }];
  },
  token: "p-multiselect-token",
  tokenLabel: "p-multiselect-token-label",
  removeTokenIcon: "p-multiselect-token-icon",
  trigger: "p-multiselect-trigger",
  loadingIcon: "p-multiselect-trigger-icon",
  dropdownIcon: "p-multiselect-trigger-icon",
  panel: function panel(_ref4) {
    var instance = _ref4.instance;
    return ["p-multiselect-panel p-component", {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }];
  },
  header: "p-multiselect-header",
  headerCheckboxContainer: function headerCheckboxContainer(_ref5) {
    var instance = _ref5.instance;
    return ["p-checkbox p-component", {
      "p-checkbox-checked": instance.allSelected,
      "p-checkbox-focused": instance.headerCheckboxFocused
    }];
  },
  headerCheckbox: function headerCheckbox(_ref6) {
    var instance = _ref6.instance;
    return ["p-checkbox-box", {
      "p-highlight": instance.allSelected,
      "p-focus": instance.headerCheckboxFocused
    }];
  },
  headerCheckboxIcon: "p-checkbox-icon",
  filterContainer: "p-multiselect-filter-container",
  filterInput: "p-multiselect-filter p-inputtext p-component",
  filterIcon: "p-multiselect-filter-icon",
  closeButton: "p-multiselect-close p-link",
  closeIcon: "p-multiselect-close-icon",
  wrapper: "p-multiselect-items-wrapper",
  list: "p-multiselect-items p-component",
  itemGroup: "p-multiselect-item-group",
  item: function item(_ref7) {
    var instance = _ref7.instance, option = _ref7.option, index2 = _ref7.index, getItemOptions = _ref7.getItemOptions;
    return ["p-multiselect-item", {
      "p-highlight": instance.isSelected(option),
      "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(index2, getItemOptions),
      "p-disabled": instance.isOptionDisabled(option)
    }];
  },
  checkboxContainer: "p-checkbox p-component",
  checkbox: function checkbox(_ref8) {
    var instance = _ref8.instance, option = _ref8.option;
    return ["p-checkbox-box", {
      "p-highlight": instance.isSelected(option)
    }];
  },
  checkboxIcon: "p-checkbox-icon",
  emptyMessage: "p-multiselect-empty-message"
};
var _useStyle = useStyle(styles, {
  name: "multiselect",
  manual: true
}), loadStyle = _useStyle.load;
var script$1 = {
  name: "BaseMultiSelect",
  "extends": script$6$2,
  props: {
    modelValue: null,
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      "default": "200px"
    },
    placeholder: String,
    disabled: Boolean,
    inputId: {
      type: String,
      "default": null
    },
    inputProps: {
      type: null,
      "default": null
    },
    panelClass: {
      type: String,
      "default": null
    },
    panelStyle: {
      type: null,
      "default": null
    },
    panelProps: {
      type: null,
      "default": null
    },
    filterInputProps: {
      type: null,
      "default": null
    },
    closeButtonProps: {
      type: null,
      "default": null
    },
    dataKey: null,
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    filterMatchMode: {
      type: String,
      "default": "contains"
    },
    filterFields: {
      type: Array,
      "default": null
    },
    appendTo: {
      type: String,
      "default": "body"
    },
    display: {
      type: String,
      "default": "comma"
    },
    selectedItemsLabel: {
      type: String,
      "default": "{0} items selected"
    },
    maxSelectedLabels: {
      type: Number,
      "default": null
    },
    selectionLimit: {
      type: Number,
      "default": null
    },
    showToggleAll: {
      type: Boolean,
      "default": true
    },
    loading: {
      type: Boolean,
      "default": false
    },
    checkboxIcon: {
      type: String,
      "default": void 0
    },
    closeIcon: {
      type: String,
      "default": void 0
    },
    dropdownIcon: {
      type: String,
      "default": void 0
    },
    filterIcon: {
      type: String,
      "default": void 0
    },
    loadingIcon: {
      type: String,
      "default": void 0
    },
    removeTokenIcon: {
      type: String,
      "default": void 0
    },
    selectAll: {
      type: Boolean,
      "default": null
    },
    resetFilterOnHide: {
      type: Boolean,
      "default": false
    },
    virtualScrollerOptions: {
      type: Object,
      "default": null
    },
    autoOptionFocus: {
      type: Boolean,
      "default": true
    },
    autoFilterFocus: {
      type: Boolean,
      "default": false
    },
    filterMessage: {
      type: String,
      "default": null
    },
    selectionMessage: {
      type: String,
      "default": null
    },
    emptySelectionMessage: {
      type: String,
      "default": null
    },
    emptyFilterMessage: {
      type: String,
      "default": null
    },
    emptyMessage: {
      type: String,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    "aria-label": {
      type: String,
      "default": null
    },
    "aria-labelledby": {
      type: String,
      "default": null
    }
  },
  css: {
    classes,
    inlineStyles,
    loadStyle
  },
  provide: function provide4() {
    return {
      $parentInstance: this
    };
  }
};
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$1(arg) {
  var key = _toPrimitive$1(arg, "string");
  return _typeof$1(key) === "symbol" ? key : String(key);
}
function _toPrimitive$1(input, hint) {
  if (_typeof$1(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$1(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var script = {
  name: "MultiSelect",
  "extends": script$1,
  emits: ["update:modelValue", "change", "focus", "blur", "before-show", "before-hide", "show", "hide", "filter", "selectall-change"],
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  overlay: null,
  list: null,
  virtualScroller: null,
  startRangeIndex: -1,
  searchTimeout: null,
  searchValue: "",
  selectOnFocus: false,
  focusOnHover: false,
  data: function data2() {
    return {
      id: this.$attrs.id,
      focused: false,
      focusedOptionIndex: -1,
      headerCheckboxFocused: false,
      filterValue: null,
      overlayVisible: false
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    options: function options() {
      this.autoUpdateModel();
    }
  },
  mounted: function mounted2() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
  },
  beforeUnmount: function beforeUnmount2() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      ZIndexUtils.clear(this.overlay);
      this.overlay = null;
    }
  },
  methods: {
    getOptionIndex: function getOptionIndex(index2, fn) {
      return this.virtualScrollerDisabled ? index2 : fn && fn(index2)["index"];
    },
    getOptionLabel: function getOptionLabel(option) {
      return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    },
    getOptionValue: function getOptionValue(option) {
      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    },
    getOptionRenderKey: function getOptionRenderKey(option) {
      return this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option);
    },
    getHeaderCheckboxPTOptions: function getHeaderCheckboxPTOptions(key) {
      return this.ptm(key, {
        context: {
          selected: this.allSelected,
          focused: this.headerCheckboxFocused
        }
      });
    },
    getCheckboxPTOptions: function getCheckboxPTOptions(option, itemOptions, index2, key) {
      return this.ptm(key, {
        context: {
          selected: this.isSelected(option),
          focused: this.focusedOptionIndex === this.getOptionIndex(index2, itemOptions),
          disabled: this.isOptionDisabled(option)
        }
      });
    },
    isOptionDisabled: function isOptionDisabled(option) {
      if (this.maxSelectionLimitReached && !this.isSelected(option)) {
        return true;
      }
      return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    },
    isOptionGroup: function isOptionGroup(option) {
      return this.optionGroupLabel && option.optionGroup && option.group;
    },
    getOptionGroupLabel: function getOptionGroupLabel(optionGroup) {
      return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel);
    },
    getOptionGroupChildren: function getOptionGroupChildren(optionGroup) {
      return ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren);
    },
    getAriaPosInset: function getAriaPosInset(index2) {
      var _this = this;
      return (this.optionGroupLabel ? index2 - this.visibleOptions.slice(0, index2).filter(function(option) {
        return _this.isOptionGroup(option);
      }).length : index2) + 1;
    },
    show: function show(isFocus) {
      this.$emit("before-show");
      this.overlayVisible = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      isFocus && DomHandler.focus(this.$refs.focusInput);
    },
    hide: function hide(isFocus) {
      var _this2 = this;
      var _hide = function _hide2() {
        _this2.$emit("before-hide");
        _this2.overlayVisible = false;
        _this2.focusedOptionIndex = -1;
        _this2.searchValue = "";
        _this2.resetFilterOnHide && (_this2.filterValue = null);
        isFocus && DomHandler.focus(_this2.$refs.focusInput);
      };
      setTimeout(function() {
        _hide();
      }, 0);
    },
    onFocus: function onFocus(event) {
      if (this.disabled) {
        return;
      }
      this.focused = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.overlayVisible && this.scrollInView(this.focusedOptionIndex);
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.searchValue = "";
      this.$emit("blur", event);
    },
    onKeyDown: function onKeyDown(event) {
      var _this3 = this;
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "PageDown":
          this.onPageDownKey(event);
          break;
        case "PageUp":
          this.onPageUpKey(event);
          break;
        case "Enter":
        case "Space":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.onShiftKey(event);
          break;
        default:
          if (event.code === "KeyA" && metaKey) {
            var value = this.visibleOptions.filter(function(option) {
              return _this3.isValidOption(option);
            }).map(function(option) {
              return _this3.getOptionValue(option);
            });
            this.updateModel(event, value);
            event.preventDefault();
            break;
          }
          if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            this.searchOptions(event);
            event.preventDefault();
          }
          break;
      }
    },
    onContainerClick: function onContainerClick(event) {
      if (this.disabled || this.loading) {
        return;
      }
      if (!this.overlay || !this.overlay.contains(event.target)) {
        this.overlayVisible ? this.hide(true) : this.show(true);
      }
    },
    onFirstHiddenFocus: function onFirstHiddenFocus(event) {
      var focusableEl = event.relatedTarget === this.$refs.focusInput ? DomHandler.getFirstFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      DomHandler.focus(focusableEl);
    },
    onLastHiddenFocus: function onLastHiddenFocus(event) {
      var focusableEl = event.relatedTarget === this.$refs.focusInput ? DomHandler.getLastFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      DomHandler.focus(focusableEl);
    },
    onCloseClick: function onCloseClick() {
      this.hide(true);
    },
    onHeaderCheckboxFocus: function onHeaderCheckboxFocus() {
      this.headerCheckboxFocused = true;
    },
    onHeaderCheckboxBlur: function onHeaderCheckboxBlur() {
      this.headerCheckboxFocused = false;
    },
    onOptionSelect: function onOptionSelect(event, option) {
      var _this4 = this;
      var index2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
      var isFocus = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
      if (this.disabled || this.isOptionDisabled(option)) {
        return;
      }
      var selected = this.isSelected(option);
      var value = null;
      if (selected)
        value = this.modelValue.filter(function(val) {
          return !ObjectUtils.equals(val, _this4.getOptionValue(option), _this4.equalityKey);
        });
      else
        value = [].concat(_toConsumableArray(this.modelValue || []), [this.getOptionValue(option)]);
      this.updateModel(event, value);
      index2 !== -1 && (this.focusedOptionIndex = index2);
      isFocus && DomHandler.focus(this.$refs.focusInput);
    },
    onOptionMouseMove: function onOptionMouseMove(event, index2) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index2);
      }
    },
    onOptionSelectRange: function onOptionSelectRange(event) {
      var _this5 = this;
      var start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
      var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
      start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
      end === -1 && (end = this.findNearestSelectedOptionIndex(start));
      if (start !== -1 && end !== -1) {
        var rangeStart = Math.min(start, end);
        var rangeEnd = Math.max(start, end);
        var value = this.visibleOptions.slice(rangeStart, rangeEnd + 1).filter(function(option) {
          return _this5.isValidOption(option);
        }).map(function(option) {
          return _this5.getOptionValue(option);
        });
        this.updateModel(event, value);
      }
    },
    onFilterChange: function onFilterChange(event) {
      var value = event.target.value;
      this.filterValue = value;
      this.focusedOptionIndex = -1;
      this.$emit("filter", {
        originalEvent: event,
        value
      });
      !this.virtualScrollerDisabled && this.virtualScroller.scrollToIndex(0);
    },
    onFilterKeyDown: function onFilterKeyDown(event) {
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event, true);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(event, true);
          break;
        case "Home":
          this.onHomeKey(event, true);
          break;
        case "End":
          this.onEndKey(event, true);
          break;
        case "Enter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event, true);
          break;
      }
    },
    onFilterBlur: function onFilterBlur() {
      this.focusedOptionIndex = -1;
    },
    onFilterUpdated: function onFilterUpdated() {
      if (this.overlayVisible) {
        this.alignOverlay();
      }
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
    },
    onOverlayKeyDown: function onOverlayKeyDown(event) {
      switch (event.code) {
        case "Escape":
          this.onEscapeKey(event);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      var optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.findFirstFocusedOptionIndex();
      if (event.shiftKey) {
        this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (event.altKey && !pressedInInputText) {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.findLastFocusedOptionIndex();
        if (event.shiftKey) {
          this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
      }
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      pressedInInputText && (this.focusedOptionIndex = -1);
    },
    onHomeKey: function onHomeKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var currentTarget = event.currentTarget;
      if (pressedInInputText) {
        var len = currentTarget.value.length;
        currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
        this.focusedOptionIndex = -1;
      } else {
        var metaKey = event.metaKey || event.ctrlKey;
        var optionIndex = this.findFirstOptionIndex();
        if (event.shiftKey && metaKey) {
          this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var currentTarget = event.currentTarget;
      if (pressedInInputText) {
        var len = currentTarget.value.length;
        currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
        this.focusedOptionIndex = -1;
      } else {
        var metaKey = event.metaKey || event.ctrlKey;
        var optionIndex = this.findLastOptionIndex();
        if (event.shiftKey && metaKey) {
          this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onPageUpKey: function onPageUpKey(event) {
      this.scrollInView(0);
      event.preventDefault();
    },
    onPageDownKey: function onPageDownKey(event) {
      this.scrollInView(this.visibleOptions.length - 1);
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (!this.overlayVisible) {
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionIndex !== -1) {
          if (event.shiftKey)
            this.onOptionSelectRange(event, this.focusedOptionIndex);
          else
            this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
      }
      event.preventDefault();
    },
    onEscapeKey: function onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    },
    onTabKey: function onTabKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (!pressedInInputText) {
        if (this.overlayVisible && this.hasFocusableElements()) {
          DomHandler.focus(event.shiftKey ? this.$refs.lastHiddenFocusableElementOnOverlay : this.$refs.firstHiddenFocusableElementOnOverlay);
          event.preventDefault();
        } else {
          if (this.focusedOptionIndex !== -1) {
            this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
          }
          this.overlayVisible && this.hide(this.filter);
        }
      }
    },
    onShiftKey: function onShiftKey() {
      this.startRangeIndex = this.focusedOptionIndex;
    },
    onOverlayEnter: function onOverlayEnter(el) {
      ZIndexUtils.set("overlay", el, this.$primevue.config.zIndex.overlay);
      DomHandler.addStyles(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
      this.scrollInView();
      this.autoFilterFocus && DomHandler.focus(this.$refs.filterInput);
    },
    onOverlayAfterEnter: function onOverlayAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit("show");
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit("hide");
      this.overlay = null;
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      ZIndexUtils.clear(el);
    },
    alignOverlay: function alignOverlay() {
      if (this.appendTo === "self") {
        DomHandler.relativePosition(this.overlay, this.$el);
      } else {
        this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$el) + "px";
        DomHandler.absolutePosition(this.overlay, this.$el);
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this6 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this6.overlayVisible && _this6.isOutsideClicked(event)) {
            _this6.hide();
          }
        };
        document.addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this7 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function() {
          if (_this7.overlayVisible) {
            _this7.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this8 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this8.overlayVisible && !DomHandler.isTouchDevice()) {
            _this8.hide();
          }
        };
        window.addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    isOutsideClicked: function isOutsideClicked(event) {
      return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target) || this.overlay && this.overlay.contains(event.target));
    },
    getLabelByValue: function getLabelByValue(value) {
      var _this9 = this;
      var options2 = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      var matchedOption = options2.find(function(option) {
        return !_this9.isOptionGroup(option) && ObjectUtils.equals(_this9.getOptionValue(option), value, _this9.equalityKey);
      });
      return matchedOption ? this.getOptionLabel(matchedOption) : null;
    },
    getSelectedItemsLabel: function getSelectedItemsLabel() {
      var pattern = /{(.*?)}/;
      if (pattern.test(this.selectedItemsLabel)) {
        return this.selectedItemsLabel.replace(this.selectedItemsLabel.match(pattern)[0], this.modelValue.length + "");
      }
      return this.selectedItemsLabel;
    },
    onToggleAll: function onToggleAll(event) {
      var _this10 = this;
      if (this.selectAll !== null) {
        this.$emit("selectall-change", {
          originalEvent: event,
          checked: !this.allSelected
        });
      } else {
        var value = this.allSelected ? [] : this.visibleOptions.filter(function(option) {
          return _this10.isValidOption(option);
        }).map(function(option) {
          return _this10.getOptionValue(option);
        });
        this.updateModel(event, value);
      }
      this.headerCheckboxFocused = true;
    },
    removeOption: function removeOption(event, optionValue) {
      var _this11 = this;
      var value = this.modelValue.filter(function(val) {
        return !ObjectUtils.equals(val, optionValue, _this11.equalityKey);
      });
      this.updateModel(event, value);
    },
    clearFilter: function clearFilter() {
      this.filterValue = null;
    },
    hasFocusableElements: function hasFocusableElements() {
      return DomHandler.getFocusableElements(this.overlay, ':not([data-p-hidden-focusable="true"])').length > 0;
    },
    isOptionMatched: function isOptionMatched(option) {
      return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
    },
    isValidOption: function isValidOption(option) {
      return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    },
    isValidSelectedOption: function isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option);
    },
    isSelected: function isSelected(option) {
      var _this12 = this;
      var optionValue = this.getOptionValue(option);
      return (this.modelValue || []).some(function(value) {
        return ObjectUtils.equals(value, optionValue, _this12.equalityKey);
      });
    },
    findFirstOptionIndex: function findFirstOptionIndex() {
      var _this13 = this;
      return this.visibleOptions.findIndex(function(option) {
        return _this13.isValidOption(option);
      });
    },
    findLastOptionIndex: function findLastOptionIndex() {
      var _this14 = this;
      return ObjectUtils.findLastIndex(this.visibleOptions, function(option) {
        return _this14.isValidOption(option);
      });
    },
    findNextOptionIndex: function findNextOptionIndex(index2) {
      var _this15 = this;
      var matchedOptionIndex = index2 < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index2 + 1).findIndex(function(option) {
        return _this15.isValidOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index2 + 1 : index2;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index2) {
      var _this16 = this;
      var matchedOptionIndex = index2 > 0 ? ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index2), function(option) {
        return _this16.isValidOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index2;
    },
    findFirstSelectedOptionIndex: function findFirstSelectedOptionIndex() {
      var _this17 = this;
      return this.hasSelectedOption ? this.visibleOptions.findIndex(function(option) {
        return _this17.isValidSelectedOption(option);
      }) : -1;
    },
    findLastSelectedOptionIndex: function findLastSelectedOptionIndex() {
      var _this18 = this;
      return this.hasSelectedOption ? ObjectUtils.findLastIndex(this.visibleOptions, function(option) {
        return _this18.isValidSelectedOption(option);
      }) : -1;
    },
    findNextSelectedOptionIndex: function findNextSelectedOptionIndex(index2) {
      var _this19 = this;
      var matchedOptionIndex = this.hasSelectedOption && index2 < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index2 + 1).findIndex(function(option) {
        return _this19.isValidSelectedOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index2 + 1 : -1;
    },
    findPrevSelectedOptionIndex: function findPrevSelectedOptionIndex(index2) {
      var _this20 = this;
      var matchedOptionIndex = this.hasSelectedOption && index2 > 0 ? ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index2), function(option) {
        return _this20.isValidSelectedOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
    },
    findNearestSelectedOptionIndex: function findNearestSelectedOptionIndex(index2) {
      var firstCheckUp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var matchedOptionIndex = -1;
      if (this.hasSelectedOption) {
        if (firstCheckUp) {
          matchedOptionIndex = this.findPrevSelectedOptionIndex(index2);
          matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index2) : matchedOptionIndex;
        } else {
          matchedOptionIndex = this.findNextSelectedOptionIndex(index2);
          matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index2) : matchedOptionIndex;
        }
      }
      return matchedOptionIndex > -1 ? matchedOptionIndex : index2;
    },
    findFirstFocusedOptionIndex: function findFirstFocusedOptionIndex() {
      var selectedIndex = this.findFirstSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    },
    findLastFocusedOptionIndex: function findLastFocusedOptionIndex() {
      var selectedIndex = this.findLastSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    },
    searchOptions: function searchOptions(event) {
      var _this21 = this;
      this.searchValue = (this.searchValue || "") + event.key;
      var optionIndex = -1;
      if (this.focusedOptionIndex !== -1) {
        optionIndex = this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(option) {
          return _this21.isOptionMatched(option);
        });
        optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex(function(option) {
          return _this21.isOptionMatched(option);
        }) : optionIndex + this.focusedOptionIndex;
      } else {
        optionIndex = this.visibleOptions.findIndex(function(option) {
          return _this21.isOptionMatched(option);
        });
      }
      if (optionIndex === -1 && this.focusedOptionIndex === -1) {
        optionIndex = this.findFirstFocusedOptionIndex();
      }
      if (optionIndex !== -1) {
        this.changeFocusedOptionIndex(event, optionIndex);
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function() {
        _this21.searchValue = "";
        _this21.searchTimeout = null;
      }, 500);
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(event, index2) {
      if (this.focusedOptionIndex !== index2) {
        this.focusedOptionIndex = index2;
        this.scrollInView();
      }
    },
    scrollInView: function scrollInView() {
      var index2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      var id = index2 !== -1 ? "".concat(this.id, "_").concat(index2) : this.focusedOptionId;
      var element = DomHandler.findSingle(this.list, 'li[id="'.concat(id, '"]'));
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        this.virtualScroller && this.virtualScroller.scrollToIndex(index2 !== -1 ? index2 : this.focusedOptionIndex);
      }
    },
    autoUpdateModel: function autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
        var value = this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);
        this.updateModel(null, [value]);
      }
    },
    updateModel: function updateModel(event, value) {
      this.$emit("update:modelValue", value);
      this.$emit("change", {
        originalEvent: event,
        value
      });
    },
    flatOptions: function flatOptions(options2) {
      var _this22 = this;
      return (options2 || []).reduce(function(result, option, index2) {
        result.push({
          optionGroup: option,
          group: true,
          index: index2
        });
        var optionGroupChildren = _this22.getOptionGroupChildren(option);
        optionGroupChildren && optionGroupChildren.forEach(function(o) {
          return result.push(o);
        });
        return result;
      }, []);
    },
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    listRef: function listRef(el, contentRef) {
      this.list = el;
      contentRef && contentRef(el);
    },
    virtualScrollerRef: function virtualScrollerRef(el) {
      this.virtualScroller = el;
    }
  },
  computed: {
    visibleOptions: function visibleOptions() {
      var _this23 = this;
      var options2 = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      if (this.filterValue) {
        var filteredOptions = FilterService.filter(options2, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          var optionGroups = this.options || [];
          var filtered = [];
          optionGroups.forEach(function(group) {
            var groupChildren = _this23.getOptionGroupChildren(group);
            var filteredItems = groupChildren.filter(function(item2) {
              return filteredOptions.includes(item2);
            });
            if (filteredItems.length > 0)
              filtered.push(_objectSpread$1(_objectSpread$1({}, group), {}, _defineProperty$1({}, typeof _this23.optionGroupChildren === "string" ? _this23.optionGroupChildren : "items", _toConsumableArray(filteredItems))));
          });
          return this.flatOptions(filtered);
        }
        return filteredOptions;
      }
      return options2;
    },
    label: function label2() {
      var label3;
      if (this.modelValue && this.modelValue.length) {
        if (ObjectUtils.isNotEmpty(this.maxSelectedLabels) && this.modelValue.length > this.maxSelectedLabels) {
          return this.getSelectedItemsLabel();
        } else {
          label3 = "";
          for (var i = 0; i < this.modelValue.length; i++) {
            if (i !== 0) {
              label3 += ", ";
            }
            label3 += this.getLabelByValue(this.modelValue[i]);
          }
        }
      } else {
        label3 = this.placeholder;
      }
      return label3;
    },
    chipSelectedItems: function chipSelectedItems() {
      return ObjectUtils.isNotEmpty(this.maxSelectedLabels) && this.modelValue && this.modelValue.length > this.maxSelectedLabels ? this.modelValue.slice(0, this.maxSelectedLabels) : this.modelValue;
    },
    allSelected: function allSelected() {
      var _this24 = this;
      return this.selectAll !== null ? this.selectAll : ObjectUtils.isNotEmpty(this.visibleOptions) && this.visibleOptions.every(function(option) {
        return _this24.isOptionGroup(option) || _this24.isOptionDisabled(option) || _this24.isSelected(option);
      });
    },
    hasSelectedOption: function hasSelectedOption() {
      return ObjectUtils.isNotEmpty(this.modelValue);
    },
    equalityKey: function equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields: function searchFields() {
      return this.filterFields || [this.optionLabel];
    },
    maxSelectionLimitReached: function maxSelectionLimitReached() {
      return this.selectionLimit && this.modelValue && this.modelValue.length === this.selectionLimit;
    },
    filterResultMessageText: function filterResultMessageText() {
      return ObjectUtils.isNotEmpty(this.visibleOptions) ? this.filterMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptyFilterMessageText;
    },
    filterMessageText: function filterMessageText() {
      return this.filterMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptyFilterMessageText: function emptyFilterMessageText() {
      return this.emptyFilterMessage || this.$primevue.config.locale.emptySearchMessage || this.$primevue.config.locale.emptyFilterMessage || "";
    },
    emptyMessageText: function emptyMessageText() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage || "";
    },
    selectionMessageText: function selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function selectedMessageText() {
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll("{0}", this.modelValue.length) : this.emptySelectionMessageText;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.id, "_").concat(this.focusedOptionIndex) : null;
    },
    ariaSetSize: function ariaSetSize() {
      var _this25 = this;
      return this.visibleOptions.filter(function(option) {
        return !_this25.isOptionGroup(option);
      }).length;
    },
    toggleAllAriaLabel: function toggleAllAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria[this.allSelected ? "selectAll" : "unselectAll"] : void 0;
    },
    closeAriaLabel: function closeAriaLabel2() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    },
    virtualScrollerDisabled: function virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    VirtualScroller: script$j,
    Portal: script$1$4,
    TimesIcon: script$l,
    SearchIcon: script$g,
    TimesCircleIcon: script$2$1,
    ChevronDownIcon: script$h,
    SpinnerIcon: script$3$1,
    CheckIcon: script$5$1
  }
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var _hoisted_1 = ["id", "disabled", "placeholder", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant"];
var _hoisted_2 = ["onClick"];
var _hoisted_3 = ["checked", "aria-label"];
var _hoisted_4 = ["value", "placeholder", "aria-owns", "aria-activedescendant"];
var _hoisted_5 = ["aria-label"];
var _hoisted_6 = ["id"];
var _hoisted_7 = ["id"];
var _hoisted_8 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-highlight", "data-p-focused", "data-p-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TimesCircleIcon = resolveComponent("TimesCircleIcon");
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_VirtualScroller = resolveComponent("VirtualScroller");
  var _component_Portal = resolveComponent("Portal");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root"),
    onClick: _cache[15] || (_cache[15] = function() {
      return $options.onContainerClick && $options.onContainerClick.apply($options, arguments);
    })
  }, _ctx.ptm("root"), {
    "data-pc-name": "multiselect"
  }), [createElementVNode("div", mergeProps({
    "class": "p-hidden-accessible"
  }, _ctx.ptm("hiddenInputWrapper"), {
    "data-p-hidden-accessible": true
  }), [createElementVNode("input", mergeProps({
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    readonly: "",
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $data.id + "_list",
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.inputProps), _ctx.ptm("hiddenInput"))), null, 16, _hoisted_1)], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("labelContainer")
  }, _ctx.ptm("labelContainer")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("label")
  }, _ctx.ptm("label")), [renderSlot(_ctx.$slots, "value", {
    value: _ctx.modelValue,
    placeholder: _ctx.placeholder
  }, function() {
    return [_ctx.display === "comma" ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createTextVNode(toDisplayString($options.label || "empty"), 1)], 64)) : _ctx.display === "chip" ? (openBlock(), createElementBlock(Fragment, {
      key: 1
    }, [(openBlock(true), createElementBlock(Fragment, null, renderList($options.chipSelectedItems, function(item2) {
      return openBlock(), createElementBlock("div", mergeProps({
        key: $options.getLabelByValue(item2),
        "class": _ctx.cx("token")
      }, _ctx.ptm("token")), [renderSlot(_ctx.$slots, "chip", {
        value: item2
      }, function() {
        return [createElementVNode("span", mergeProps({
          "class": _ctx.cx("tokenLabel")
        }, _ctx.ptm("tokenLabel")), toDisplayString($options.getLabelByValue(item2)), 17)];
      }), !_ctx.disabled ? renderSlot(_ctx.$slots, "removetokenicon", {
        key: 0,
        "class": normalizeClass(_ctx.cx("removeTokenIcon")),
        onClick: function onClick(event) {
          return $options.removeOption(event, item2);
        }
      }, function() {
        return [_ctx.removeTokenIcon ? (openBlock(), createElementBlock("span", mergeProps({
          key: 0,
          "class": [_ctx.cx("removeTokenIcon"), _ctx.removeTokenIcon],
          onClick: withModifiers(function($event) {
            return $options.removeOption($event, item2);
          }, ["stop"])
        }, _ctx.ptm("removeTokenIcon")), null, 16, _hoisted_2)) : (openBlock(), createBlock(_component_TimesCircleIcon, mergeProps({
          key: 1,
          "class": _ctx.cx("removeTokenIcon"),
          onClick: withModifiers(function($event) {
            return $options.removeOption($event, item2);
          }, ["stop"])
        }, _ctx.ptm("removeTokenIcon")), null, 16, ["class", "onClick"]))];
      }) : createCommentVNode("", true)], 16);
    }), 128)), !_ctx.modelValue || _ctx.modelValue.length === 0 ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createTextVNode(toDisplayString(_ctx.placeholder || "empty"), 1)], 64)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)];
  })], 16)], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("trigger")
  }, _ctx.ptm("trigger")), [_ctx.loading ? renderSlot(_ctx.$slots, "loadingicon", {
    key: 0,
    "class": normalizeClass(_ctx.cx("loadingIcon"))
  }, function() {
    return [_ctx.loadingIcon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": [_ctx.cx("loadingIcon"), "pi-spin", _ctx.loadingIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("loadingIcon")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      "class": _ctx.cx("loadingIcon"),
      spin: "",
      "aria-hidden": "true"
    }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))];
  }) : renderSlot(_ctx.$slots, "dropdownicon", {
    key: 1,
    "class": normalizeClass(_ctx.cx("dropdownIcon"))
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.dropdownIcon ? "span" : "ChevronDownIcon"), mergeProps({
      "class": [_ctx.cx("dropdownIcon"), _ctx.dropdownIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("dropdownIcon")), null, 16, ["class"]))];
  })], 16), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, {
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onAfterEnter: $options.onOverlayAfterEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, {
        "default": withCtx(function() {
          return [$data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            style: _ctx.panelStyle,
            "class": [_ctx.cx("panel"), _ctx.panelClass],
            onClick: _cache[13] || (_cache[13] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[14] || (_cache[14] = function() {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread({}, _ctx.panelProps), _ctx.ptm("panel"))), [createElementVNode("span", mergeProps({
            ref: "firstHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            "class": "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: _cache[3] || (_cache[3] = function() {
              return $options.onFirstHiddenFocus && $options.onFirstHiddenFocus.apply($options, arguments);
            })
          }, _ctx.ptm("hiddenFirstFocusableEl"), {
            "data-p-hidden-accessible": true,
            "data-p-hidden-focusable": true
          }), null, 16), renderSlot(_ctx.$slots, "header", {
            value: _ctx.modelValue,
            options: $options.visibleOptions
          }), _ctx.showToggleAll && _ctx.selectionLimit == null || _ctx.filter ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("header")
          }, _ctx.ptm("header")), [_ctx.showToggleAll && _ctx.selectionLimit == null ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("headerCheckboxContainer"),
            onClick: _cache[6] || (_cache[6] = function() {
              return $options.onToggleAll && $options.onToggleAll.apply($options, arguments);
            })
          }, _ctx.ptm("headerCheckboxContainer")), [createElementVNode("div", mergeProps({
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenInputWrapper"), {
            "data-p-hidden-accessible": true
          }), [createElementVNode("input", mergeProps({
            type: "checkbox",
            readonly: "",
            checked: $options.allSelected,
            "aria-label": $options.toggleAllAriaLabel,
            onFocus: _cache[4] || (_cache[4] = function() {
              return $options.onHeaderCheckboxFocus && $options.onHeaderCheckboxFocus.apply($options, arguments);
            }),
            onBlur: _cache[5] || (_cache[5] = function() {
              return $options.onHeaderCheckboxBlur && $options.onHeaderCheckboxBlur.apply($options, arguments);
            })
          }, _ctx.ptm("headerCheckbox")), null, 16, _hoisted_3)], 16), createElementVNode("div", mergeProps({
            "class": _ctx.cx("headerCheckbox")
          }, $options.getHeaderCheckboxPTOptions("headerCheckbox")), [renderSlot(_ctx.$slots, "headercheckboxicon", {
            allSelected: $options.allSelected,
            "class": normalizeClass(_ctx.cx("headerCheckboxIcon"))
          }, function() {
            return [withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.checkboxIcon ? "span" : "CheckIcon"), mergeProps({
              "class": [_ctx.cx("headerCheckboxIcon"), _defineProperty({}, _ctx.checkboxIcon, $options.allSelected)]
            }, $options.getHeaderCheckboxPTOptions("headerCheckboxIcon")), null, 16, ["class"])), [[vShow, $options.allSelected]])];
          })], 16)], 16)) : createCommentVNode("", true), _ctx.filter ? (openBlock(), createElementBlock("div", mergeProps({
            key: 1,
            "class": _ctx.cx("filterContainer")
          }, _ctx.ptm("filterContainer")), [createElementVNode("input", mergeProps({
            ref: "filterInput",
            type: "text",
            value: $data.filterValue,
            onVnodeMounted: _cache[7] || (_cache[7] = function() {
              return $options.onFilterUpdated && $options.onFilterUpdated.apply($options, arguments);
            }),
            "class": _ctx.cx("filterInput"),
            placeholder: _ctx.filterPlaceholder,
            role: "searchbox",
            autocomplete: "off",
            "aria-owns": $data.id + "_list",
            "aria-activedescendant": $options.focusedOptionId,
            onKeydown: _cache[8] || (_cache[8] = function() {
              return $options.onFilterKeyDown && $options.onFilterKeyDown.apply($options, arguments);
            }),
            onBlur: _cache[9] || (_cache[9] = function() {
              return $options.onFilterBlur && $options.onFilterBlur.apply($options, arguments);
            }),
            onInput: _cache[10] || (_cache[10] = function() {
              return $options.onFilterChange && $options.onFilterChange.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread({}, _ctx.filterInputProps), _ctx.ptm("filterInput"))), null, 16, _hoisted_4), renderSlot(_ctx.$slots, "filtericon", {
            "class": normalizeClass(_ctx.cx("filterIcon"))
          }, function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.filterIcon ? "span" : "SearchIcon"), mergeProps({
              "class": [_ctx.cx("filterIcon"), _ctx.filterIcon]
            }, _ctx.ptm("filterIcon")), null, 16, ["class"]))];
          })], 16)) : createCommentVNode("", true), _ctx.filter ? (openBlock(), createElementBlock("span", mergeProps({
            key: 2,
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenFilterResult"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.filterResultMessageText), 17)) : createCommentVNode("", true), withDirectives((openBlock(), createElementBlock("button", mergeProps({
            "class": _ctx.cx("closeButton"),
            "aria-label": $options.closeAriaLabel,
            onClick: _cache[11] || (_cache[11] = function() {
              return $options.onCloseClick && $options.onCloseClick.apply($options, arguments);
            }),
            type: "button"
          }, _objectSpread(_objectSpread({}, _ctx.closeButtonProps), _ctx.ptm("closeButton"))), [renderSlot(_ctx.$slots, "closeicon", {
            "class": normalizeClass(_ctx.cx("closeIcon"))
          }, function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon ? "span" : "TimesIcon"), mergeProps({
              "class": [_ctx.cx("closeIcon"), _ctx.closeIcon]
            }, _ctx.ptm("closeIcon")), null, 16, ["class"]))];
          })], 16, _hoisted_5)), [[_directive_ripple]])], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
            "class": _ctx.cx("wrapper"),
            style: {
              "max-height": $options.virtualScrollerDisabled ? _ctx.scrollHeight : ""
            }
          }, _ctx.ptm("wrapper")), [createVNode(_component_VirtualScroller, mergeProps({
            ref: $options.virtualScrollerRef
          }, _ctx.virtualScrollerOptions, {
            items: $options.visibleOptions,
            style: {
              height: _ctx.scrollHeight
            },
            tabindex: -1,
            disabled: $options.virtualScrollerDisabled,
            pt: _ctx.ptm("virtualScroller")
          }), createSlots({
            content: withCtx(function(_ref2) {
              var styleClass = _ref2.styleClass, contentRef = _ref2.contentRef, items = _ref2.items, getItemOptions = _ref2.getItemOptions, contentStyle = _ref2.contentStyle, itemSize = _ref2.itemSize;
              return [createElementVNode("ul", mergeProps({
                ref: function ref2(el) {
                  return $options.listRef(el, contentRef);
                },
                id: $data.id + "_list",
                "class": [_ctx.cx("list"), styleClass],
                style: contentStyle,
                role: "listbox",
                "aria-multiselectable": "true"
              }, _ctx.ptm("list")), [(openBlock(true), createElementBlock(Fragment, null, renderList(items, function(option, i) {
                return openBlock(), createElementBlock(Fragment, {
                  key: $options.getOptionRenderKey(option, $options.getOptionIndex(i, getItemOptions))
                }, [$options.isOptionGroup(option) ? (openBlock(), createElementBlock("li", mergeProps({
                  key: 0,
                  id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize ? itemSize + "px" : void 0
                  },
                  "class": _ctx.cx("itemGroup"),
                  role: "option"
                }, _ctx.ptm("itemGroup")), [renderSlot(_ctx.$slots, "optiongroup", {
                  option: option.optionGroup,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createTextVNode(toDisplayString($options.getOptionGroupLabel(option.optionGroup)), 1)];
                })], 16, _hoisted_7)) : withDirectives((openBlock(), createElementBlock("li", mergeProps({
                  key: 1,
                  id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize ? itemSize + "px" : void 0
                  },
                  "class": _ctx.cx("item", {
                    option,
                    index: i,
                    getItemOptions
                  }),
                  role: "option",
                  "aria-label": $options.getOptionLabel(option),
                  "aria-selected": $options.isSelected(option),
                  "aria-disabled": $options.isOptionDisabled(option),
                  "aria-setsize": $options.ariaSetSize,
                  "aria-posinset": $options.getAriaPosInset($options.getOptionIndex(i, getItemOptions)),
                  onClick: function onClick($event) {
                    return $options.onOptionSelect($event, option, $options.getOptionIndex(i, getItemOptions), true);
                  },
                  onMousemove: function onMousemove($event) {
                    return $options.onOptionMouseMove($event, $options.getOptionIndex(i, getItemOptions));
                  }
                }, $options.getCheckboxPTOptions(option, getItemOptions, i, "item"), {
                  "data-p-highlight": $options.isSelected(option),
                  "data-p-focused": $data.focusedOptionIndex === $options.getOptionIndex(i, getItemOptions),
                  "data-p-disabled": $options.isOptionDisabled(option)
                }), [createElementVNode("div", mergeProps({
                  "class": _ctx.cx("checkboxContainer")
                }, _ctx.ptm("checkboxContainer")), [createElementVNode("div", mergeProps({
                  "class": _ctx.cx("checkbox", {
                    option
                  })
                }, $options.getCheckboxPTOptions(option, getItemOptions, i, "checkbox")), [renderSlot(_ctx.$slots, "itemcheckboxicon", {
                  selected: $options.isSelected(option),
                  "class": normalizeClass(_ctx.cx("checkboxIcon"))
                }, function() {
                  return [withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.checkboxIcon ? "span" : "CheckIcon"), mergeProps({
                    "class": [_ctx.cx("checkboxIcon"), _defineProperty({}, _ctx.checkboxIcon, $options.isSelected(option))]
                  }, $options.getCheckboxPTOptions(option, getItemOptions, i, "checkboxIcon")), null, 16, ["class"])), [[vShow, $options.isSelected(option)]])];
                })], 16)], 16), renderSlot(_ctx.$slots, "option", {
                  option,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createElementVNode("span", normalizeProps(guardReactiveProps(_ctx.ptm("option"))), toDisplayString($options.getOptionLabel(option)), 17)];
                })], 16, _hoisted_8)), [[_directive_ripple]])], 64);
              }), 128)), $data.filterValue && (!items || items && items.length === 0) ? (openBlock(), createElementBlock("li", mergeProps({
                key: 0,
                "class": _ctx.cx("emptyMessage"),
                role: "option"
              }, _ctx.ptm("emptyMessage")), [renderSlot(_ctx.$slots, "emptyfilter", {}, function() {
                return [createTextVNode(toDisplayString($options.emptyFilterMessageText), 1)];
              })], 16)) : !_ctx.options || _ctx.options && _ctx.options.length === 0 ? (openBlock(), createElementBlock("li", mergeProps({
                key: 1,
                "class": _ctx.cx("emptyMessage"),
                role: "option"
              }, _ctx.ptm("emptyMessage")), [renderSlot(_ctx.$slots, "empty", {}, function() {
                return [createTextVNode(toDisplayString($options.emptyMessageText), 1)];
              })], 16)) : createCommentVNode("", true)], 16, _hoisted_6)];
            }),
            _: 2
          }, [_ctx.$slots.loader ? {
            name: "loader",
            fn: withCtx(function(_ref4) {
              var options2 = _ref4.options;
              return [renderSlot(_ctx.$slots, "loader", {
                options: options2
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["items", "style", "disabled", "pt"])], 16), renderSlot(_ctx.$slots, "footer", {
            value: _ctx.modelValue,
            options: $options.visibleOptions
          }), !_ctx.options || _ctx.options && _ctx.options.length === 0 ? (openBlock(), createElementBlock("span", mergeProps({
            key: 1,
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenEmptyMessage"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.emptyMessageText), 17)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.selectedMessageText), 17), createElementVNode("span", mergeProps({
            ref: "lastHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            "class": "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: _cache[12] || (_cache[12] = function() {
              return $options.onLastHiddenFocus && $options.onLastHiddenFocus.apply($options, arguments);
            })
          }, _ctx.ptm("hiddenLastFocusableEl"), {
            "data-p-hidden-accessible": true,
            "data-p-hidden-focusable": true
          }), null, 16)], 16)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 8, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16);
}
script.render = render;
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
    const storeUser = useState("user");
    const storeToken = useState("token");
    const storeLogin = useState("islogin");
    const swal = inject("$swal");
    const basedomainURL = useRuntimeConfig().public.apiBase;
    const selectedNews = ref();
    const checkDelList = ref(false);
    const isFirstNews = ref(false);
    const rules = {
      title: {
        required,
        $errors: [
          {
            $property: "title",
            $validator: "required",
            $message: "T\xEAn s\u1EA3n ph\u1EA9m kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!"
          }
        ]
      },
      contents: {
        required,
        $errors: [
          {
            $property: "contents",
            $validator: "required",
            $message: "N\u1ED9i dung s\u1EA3n ph\u1EA9m kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!"
          }
        ]
      },
      url_path: {
        required,
        $errors: [
          {
            $property: "contents",
            $validator: "required",
            $message: "N\u1ED9i dung s\u1EA3n ph\u1EA9m kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!"
          }
        ]
      }
    };
    const taskDateFilter = ref();
    ref({
      fontSize: {
        options: [8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 44, 48, 56]
      },
      toolbar: {
        items: [
          "heading",
          "bold",
          "italic",
          "underline",
          "Link",
          "|",
          "fontSize",
          "fontColor",
          "fontBackgroundColor",
          "fontFamily",
          "highlight",
          "|",
          "alignment",
          "bulletedList",
          "numberedList",
          "|",
          "insertImage",
          "mediaEmbed",
          "horizontalLine",
          "|",
          "insertTable",
          "tableColumn",
          "tableRow",
          "mergeTableCells",
          "|",
          "imageStyle:inline",
          "imageStyle:block",
          "imageStyle:side",
          "toggleImageCaption",
          "imageTextAlternative",
          "|",
          "strikethrough",
          "outdent",
          "indent",
          "|",
          "codeBlock",
          "linkImage",
          "blockQuote",
          "code",
          "subscript",
          "superscript",
          "|",
          "undo",
          "redo",
          "findAndReplace",
          "generalHtmlSupport"
        ],
        shouldNotGroupWhenFull: true
      }
    });
    ref();
    ref();
    const todayClick = () => {
      taskDateFilter.value = [];
      taskDateFilter.value.push(/* @__PURE__ */ new Date());
    };
    const delDayClick = () => {
      taskDateFilter.value = [];
      options2.value.start_date = null;
      options2.value.end_date = null;
      loadData(true);
    };
    const onDayClick = () => {
      if (taskDateFilter.value == null)
        taskDateFilter.value = [];
      else {
        options2.value.start_date = taskDateFilter.value[0];
        options2.value.end_date = taskDateFilter.value[1];
        if (!options2.value.end_date)
          options2.value.end_date = options2.value.start_date;
        filterSQL.value = [];
        if (options2.value.start_date && options2.value.start_date != options2.value.end_date) {
          let sDate = new Date(options2.value.start_date);
          sDate.setDate(sDate.getDate() - 1);
          options2.value.start_date = sDate;
          let filterS = {
            filterconstraints: [
              { value: options2.value.start_date, matchMode: "dateAfter" }
            ],
            filteroperator: "and",
            key: "created_date"
          };
          filterSQL.value.push(filterS);
        }
        if (options2.value.end_date && options2.value.start_date != options2.value.end_date) {
          let eDate = new Date(options2.value.end_date);
          eDate.setDate(eDate.getDate() + 1);
          options2.value.end_date = eDate;
          let filterS = {
            filterconstraints: [
              { value: options2.value.end_date, matchMode: "dateBefore" }
            ],
            filteroperator: "and",
            key: "created_date"
          };
          filterSQL.value.push(filterS);
        }
        if (options2.value.start_date && options2.value.start_date == options2.value.end_date) {
          let filterS1 = {
            filterconstraints: [
              { value: options2.value.start_date, matchMode: "dateIs" }
            ],
            filteroperator: "and",
            key: "created_date"
          };
          filterSQL.value.push(filterS1);
        }
        loadDataSQL();
      }
    };
    const delNews = (News) => {
      swal.fire({
        title: "Th\xF4ng b\xE1o",
        text: "B\u1EA1n c\xF3 mu\u1ED1n xo\xE1 b\xE0i \u0111\u0103ng n\xE0y kh\xF4ng!",
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
          $fetch(`/api/product_main/delete_product`, {
            method: "delete",
            baseURL: basedomainURL,
            body: News != null ? [News.product_id] : 1,
            headers: { Authorization: `Bearer ${storeToken.value}` }
          }).then((response) => {
            swal.close();
            if (response.data.err != "1") {
              swal.close();
              loadData(true);
            } else {
              swal.fire({
                title: "Error!",
                text: response.data.ms,
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
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      title: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
      },
      start_date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }]
      },
      is_hot: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }]
      },
      status: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }]
      }
    });
    const onPage = (event) => {
      options2.value.pagesize = event.rows;
      options2.value.pageno = event.page;
      loadDataSQL();
    };
    const filterSQL = ref([]);
    const isDynamicSQL = ref(false);
    const loadDataSQL = () => {
      let data3 = {
        id: "product_id",
        next: options2.value.IsNext,
        sqlO: options2.value.sort,
        Search: options2.value.search,
        PageNo: options2.value.pageno,
        PageSize: options2.value.pagesize,
        fieldSQLS: filterSQL.value
      };
      options2.value.loading = true;
      $fetch("/api/SQL/Filterproduct_main", {
        method: "POST",
        baseURL: basedomainURL,
        body: {
          data: data3
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let dt = JSON.parse(response.data);
        let data4 = dt[0];
        if (data4.length > 0) {
          data4.forEach((element, i) => {
            element.is_order = options2.value.pageno * options2.value.pagesize + i + 1;
            if (!element.created_date_show)
              element.created_date_show = null;
            element.created_date_show = moment(
              new Date(element.created_date)
            ).format("DD/MM/YYYY");
          });
          datalists.value = data4;
        } else {
          datalists.value = [];
        }
        if (isFirst.value)
          isFirst.value = false;
        options2.value.loading = false;
        if (dt.length == 2) {
          options2.value.totalRecords = dt[1][0].totalRecords;
        }
      }).catch((error) => {
        options2.value.loading = false;
        if (error && error.status === 401) {
          swal.fire({
            text: "M\xE3 token \u0111\xE3 h\u1EBFt h\u1EA1n ho\u1EB7c kh\xF4ng h\u1EE3p l\u1EC7, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
            confirmButtonText: "OK"
          });
        }
      });
    };
    const onSort = (event) => {
      first.value = 0;
      options2.value.pageno = 0;
      if (event.sortField == null) {
        isDynamicSQL.value = false;
        loadData();
      } else {
        options2.value.sort = event.sortField + (event.sortOrder == 1 ? " ASC" : " DESC");
        if (event.sortField != "product_id") {
          options2.value.sort += ",product_id " + (event.sortOrder == 1 ? " ASC" : " DESC");
        }
        isDynamicSQL.value = true;
        loadData();
      }
    };
    const onFilter = (event) => {
      filterSQL.value = [];
      for (const [key, value] of Object.entries(event.filters)) {
        if (key != "global") {
          let obj = {
            key,
            filteroperator: value.operator,
            filterconstraints: value.constraints
          };
          if (value.value && value.value.length > 0) {
            obj.filteroperator = value.matchMode;
            obj.filterconstraints = [];
            value.value.forEach(function(vl) {
              obj.filterconstraints.push({ value: vl[obj.key] });
            });
          } else if (value.matchMode) {
            obj.filteroperator = "and";
            obj.filterconstraints = [value];
          }
          if (obj.filterconstraints && obj.filterconstraints.filter((x) => x.value != null).length > 0)
            filterSQL.value.push(obj);
        }
      }
      options2.value.pageno = 0;
      options2.value.id = null;
      isDynamicSQL.value = true;
      loadData(true);
    };
    const onDropDown = (value) => {
      let data3 = {
        IntID: value.product_id,
        TextID: value.product_id + "",
        IntTrangthai: value.status,
        BitTrangthai: false
      };
      $fetch("/api/product_main/update_status", {
        method: "put",
        baseURL: basedomainURL,
        body: {
          data: data3
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        if (response.data.err != "1") {
          swal.close();
          loadData(false);
        } else {
          swal.fire({
            title: "Error!",
            text: response.data.ms,
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      }).catch((error) => {
        swal.close();
        swal.fire({
          title: "Error!",
          text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
          icon: "error",
          confirmButtonText: "OK"
        });
      });
    };
    const onCheckBox = (value) => {
      let data3 = {
        IntID: value.product_id,
        TextID: value.product_id + "",
        IntTrangthai: 0,
        BitTrangthai: value.is_promotions,
        check: true
      };
      $fetch("/api/product_main/update_ishot", {
        method: "put",
        baseURL: basedomainURL,
        body: {
          data: data3
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        if (response.data.err != "1") {
          swal.close();
          loadData(false);
        } else {
          swal.fire({
            title: "Error!",
            text: response.data.ms,
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      }).catch((error) => {
        swal.close();
        swal.fire({
          title: "Error!",
          text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
          icon: "error",
          confirmButtonText: "OK"
        });
      });
    };
    const deleteList = () => {
      let listId = new Array(selectedNews.length);
      swal.fire({
        title: "Th\xF4ng b\xE1o",
        text: "B\u1EA1n c\xF3 mu\u1ED1n x\xF3a danh s\xE1ch s\u1EA3n ph\u1EA9m n\xE0y kh\xF4ng!",
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
          selectedNews.value.forEach((item2) => {
            listId.push(item2.product_id);
          });
          $fetch("/api/product_main/delete_product", {
            method: "delete",
            baseURL: basedomainURL,
            body: listId != null ? listId : 1,
            headers: { Authorization: `Bearer ${storeToken.value}` }
          }).then((response) => {
            swal.close();
            if (response.data.err != "1") {
              swal.close();
              checkDelList.value = false;
              loadData(true);
            } else {
              swal.fire({
                title: "Error!",
                text: response.data.ms,
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
    const delAvatar = () => {
      product.value.image = null;
      files.value = [];
      document.getElementById("logoLang").onload = function() {
        URL.revokeObjectURL(document.getElementById("logoLang").src);
      };
      document.getElementById("logoLang").src = baseURL + "/Portals/Image/noimg.jpg";
    };
    const chonanh = (id) => {
      document.getElementById(id).click();
    };
    const files = ref([]);
    const handleFileUpload = (event) => {
      files.value = event.target.files;
      var output = document.getElementById("logoLang");
      if (event.target.files[0]) {
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src);
        };
      } else {
        files.value = [];
        document.getElementById("logoLang").src = baseURL + "/Portals/Image/noimg.jpg";
      }
    };
    const filesThumnails = ref([]);
    const handleFileUploadThum = (event) => {
      event.files.forEach((element) => {
        filesThumnails.value.push(element);
      });
    };
    const removeFile = (event) => {
      filesThumnails.value = filesThumnails.value.filter((a) => a != event.file);
    };
    const listFilesS = ref([]);
    const isFirst = ref(true);
    const datalists = ref();
    const isSaveNews = ref(false);
    const sttNews = ref(1);
    ({
      headers: { Authorization: `Bearer ${storeToken.value}` }
    });
    ref({
      language: "ar"
    });
    const submitted = ref(false);
    const options2 = ref({
      IsNext: true,
      sort: "product_id DESC",
      search: "",
      pageno: 0,
      pagesize: 20,
      loading: true,
      totalRecords: null
    });
    const product = ref({
      is_order: 1,
      title: "",
      des: "",
      contents: "",
      image: "",
      is_hot: false,
      product_type: 0,
      key_words: "",
      IsWriter: "",
      start_date: "",
      end_date: null,
      status: false
    });
    const v$ = useVuelidate(rules, product);
    const loaiTinTuc = ref([
      { name: "S\u1EA3n ph\u1EA9m", code: 0 },
      { name: "Th\xF4ng b\xE1o", code: 1 }
    ]);
    const options_status = ref([
      { name: "Ch\u01B0a duy\u1EC7t", code: 1 },
      { name: "\u0110\xE3 duy\u1EC7t", code: 2 },
      { name: "\u0110\xE3 \u0111\xF3ng", code: 3 },
      { name: "Kh\xF4ng duy\u1EC7t", code: 4 }
    ]);
    ref();
    const displayDetails = ref(false);
    const openDetails = (data3) => {
      displayDetails.value = true;
      product.value = data3;
    };
    const deleteFileH = (value) => {
      product.value.file_path_save = product.value.file_path_save.filter(
        (x) => x != value
      );
    };
    const loadCount = () => {
      $fetch("/api/Proc/getData", {
        method: "post",
        baseURL: basedomainURL,
        body: {
          str: encr(
            JSON.stringify({
              proc: "product_main_count",
              par: [
                { par: "user_id", va: storeUser.value.user_id },
                { par: "search", va: options2.value.search },
                { par: "status", va: options2.value.status },
                { par: "is_hot", va: options2.value.is_hot },
                { par: "start_date", va: options2.value.start_date },
                { par: "end_date", va: options2.value.end_date }
              ]
            }),
            SecretKey,
            cryoptojs
          ).toString()
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let data3 = JSON.parse(response.data)[0];
        if (data3.length > 0) {
          options2.value.totalRecords = data3[0].totalRecords;
          sttNews.value = data3[0].totalRecords + 1;
        } else
          options2.value.totalRecords = 0;
      }).catch((error) => {
      });
    };
    const saveNews = (isFormValid) => {
      submitted.value = true;
      if (!isFormValid) {
        return;
      }
      if (product.value.title.length >= 500) {
        swal.fire({
          title: "Th\xF4ng b\xE1o",
          text: "T\xEAn" + (product.value.product_type == 0 ? " s\u1EA3n ph\u1EA9m" : " s\u1EA3n ph\u1EA9m") + " kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1 500 k\xED t\u1EF1!",
          icon: "error",
          confirmButtonText: "OK"
        });
        return;
      }
      if (typeof product.value.start_date == "string") {
        var startDay = product.value.start_date.split("/");
        product.value.start_date = /* @__PURE__ */ new Date(
          startDay[2] + "/" + startDay[1] + "/" + startDay[0]
        );
      }
      if (typeof product.value.end_date == "string") {
        var endDay = product.value.end_date.split("/");
        product.value.end_date = /* @__PURE__ */ new Date(
          endDay[2] + "/" + endDay[1] + "/" + endDay[0]
        );
      }
      let formData = new FormData();
      for (var i = 0; i < files.value.length; i++) {
        let file = files.value[i];
        formData.append("avatar", file);
      }
      for (var j = 0; j < filesThumnails.value.length; j++) {
        let file = filesThumnails.value[j];
        formData.append("thumbnail_avatar", file);
      }
      if (product.value.key_words_save != null) {
        product.value.key_words = product.value.key_words_save.toString();
      }
      debugger;
      if (product.value.related_id_save != null) {
        product.value.related_id = product.value.related_id_save.toString();
      }
      if (product.value.organization_id == null) {
        if (storeUser.value.organization_id == 1 && storeUser.value.IsSupper)
          product.value.organization_id = null;
        else
          product.value.organization_id = storeUser.value.organization_id;
      }
      if (Array.isArray(product.value.url_file_save) && product.value.url_file_save != null) {
        product.value.url_file = product.value.url_file_save.toString();
      }
      formData.append("product", JSON.stringify(product.value));
      swal.fire({
        width: 110,
        didOpen: () => {
          swal.showLoading();
        }
      });
      if (!isSaveNews.value) {
        $fetch("/api/product_main/add_product", {
          method: "post",
          baseURL: basedomainURL,
          body: {
            formData
          },
          headers: { Authorization: `Bearer ${storeToken.value}` }
        }).then((response) => {
          if (response.data.err != "1") {
            swal.close();
            closeDialog();
          } else {
            swal.fire({
              title: "Error!",
              text: response.data.ms,
              icon: "error",
              confirmButtonText: "OK"
            });
          }
        }).catch((error) => {
          swal.close();
          swal.fire({
            title: "Error!",
            text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
            icon: "error",
            confirmButtonText: "OK"
          });
        });
      } else {
        formData.append("hrm_files", JSON.stringify(listFilesS.value));
        $fetch("/api/product_main/update_product", {
          method: "post",
          baseURL: basedomainURL,
          body: {
            formData
          },
          headers: { Authorization: `Bearer ${storeToken.value}` }
        }).then((response) => {
          if (response.data.err != "1") {
            swal.close();
            loadData(true);
            closeDialog();
          } else {
            swal.fire({
              title: "Error!",
              text: response.data.ms,
              icon: "error",
              confirmButtonText: "OK"
            });
          }
        }).catch((error) => {
          swal.close();
          swal.fire({
            title: "Error!",
            text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
            icon: "error",
            confirmButtonText: "OK"
          });
        });
      }
    };
    watch(selectedNews, () => {
      if (selectedNews.value.length > 0) {
        checkDelList.value = true;
      } else {
        checkDelList.value = false;
      }
    });
    ref(/* @__PURE__ */ new Date("1970/01/01"));
    const editNews = (data3) => {
      submitted.value = false;
      files.value = [];
      debugger;
      if (data3.key_words_save != null) {
        if (!Array.isArray(data3.key_words_save)) {
          data3.key_words_save = data3.key_words_save.split(",");
        }
      }
      if (data3.related_id_save != null && data3.related_id_save.length > 1) {
        if (!Array.isArray(data3.related_id_save)) {
          data3.related_id_save = data3.related_id_save.split(",");
        }
      }
      data3.start_date = new Date(data3.start_date);
      if (data3.end_date)
        data3.end_date = new Date(data3.end_date);
      let arrRelatedNotify = [];
      let arrRelateNews = [];
      relateNew.value.forEach((element) => {
        if (element.code != data3.product_id) {
          arrRelateNews.push(element);
        }
      });
      relateNotify.value.forEach((element) => {
        if (element.code != data3.product_id) {
          arrRelatedNotify.push(element);
        }
      });
      relateNotify.value = arrRelatedNotify;
      relateNew.value = arrRelateNews;
      let contentFake = data3.contents;
      data3.contents = "";
      if (data3.image_thumnail != null && data3.image_thumnail != "")
        data3.file_path_save = data3.image_thumnail.split("@");
      else
        data3.file_path_save = null;
      product.value = data3;
      headerDialog.value = product.value.product_type == 0 ? "S\u1EEDa s\u1EA3n ph\u1EA9m" : "S\u1EEDa s\u1EA3n ph\u1EA9m";
      displayBasic.value = true;
      isSaveNews.value = true;
      setTimeout(() => {
        product.value.contents = contentFake;
        isFirstNews.value = true;
      }, "1500");
    };
    const headerDialog = ref();
    const displayBasic = ref(false);
    const openBasic = (str) => {
      product.value = {
        product_type: 0,
        status: 1,
        is_order: sttNews.value,
        is_hot: true,
        start_date: /* @__PURE__ */ new Date(),
        is_comment: true
      };
      files.value = [];
      submitted.value = false;
      headerDialog.value = str;
      isSaveNews.value = false;
      displayBasic.value = true;
    };
    const closeDialog = () => {
      isFirstNews.value = false;
      loadData(false);
      displayBasic.value = false;
    };
    ref();
    const relateNew = ref([]);
    const relateNotify = ref([]);
    const loadData = (rf) => {
      if (isDynamicSQL.value) {
        loadDataSQL();
        return false;
      }
      if (rf) {
        options2.value.loading = true;
        loadCount();
      }
      $fetch("/api/Proc/getData", {
        method: "post",
        baseURL: basedomainURL,
        body: {
          str: encr(
            JSON.stringify({
              proc: "product_main_list",
              par: [
                { par: "user_id", va: storeUser.value.user_id },
                { par: "search", va: options2.value.search },
                { par: "status", va: options2.value.status },
                { par: "is_hot", va: options2.value.is_hot },
                { par: "pageno", va: options2.value.pageno },
                { par: "pagesize", va: options2.value.pagesize }
              ]
            }),
            SecretKey,
            cryoptojs
          ).toString()
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let data3 = JSON.parse(response.data)[0];
        if (data3.length > 0) {
          relateNew.value = [];
          relateNotify.value = [];
          data3.forEach((element, i) => {
            element.is_order = options2.value.pageno * options2.value.pagesize + i + 1;
            if (element.start_date != null) {
              var date = element.start_date.split(" ");
              element.start_date = date[0];
            }
            if (element.end_date != null) {
              var date1 = element.end_date.split(" ");
              element.end_date = date1[0];
            }
            if (element.product_type == 0)
              relateNew.value.push({
                name: element.title,
                code: element.product_id.toString()
              });
            else {
              relateNotify.value.push({
                name: element.title,
                code: element.product_id.toString()
              });
            }
            if (!element.url_file_save)
              element.url_file_save = element.url_file;
            if (element.key_words)
              element.key_words_save = element.key_words.split(",");
            if (!element.created_date_show)
              element.created_date_show = null;
            if (!element.related_id_save)
              element.related_id_save = element.related_id;
            element.created_date_show = moment(
              new Date(element.created_date)
            ).format("DD/MM/YYYY");
          });
          Array.from(new Set(relateNew.value));
          Array.from(new Set(relateNotify.value));
          datalists.value = data3;
        } else {
          datalists.value = [];
        }
        if (isFirst.value)
          isFirst.value = false;
        options2.value.loading = false;
      }).catch((error) => {
        options2.value.loading = false;
        console.log(error);
        if (error && error.status === 401) {
          swal.fire({
            text: "M\xE3 token \u0111\xE3 h\u1EBFt h\u1EA1n ho\u1EB7c kh\xF4ng h\u1EE3p l\u1EC7, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
            confirmButtonText: "OK"
          });
        }
      });
    };
    const filterButs = ref();
    const checkFilter = ref(false);
    const toggleFilter = (event) => {
      filterButs.value.toggle(event);
    };
    const hideFilter = () => {
      if (!(options2.value.is_hot != null || options2.value.status != null || options2.value.product_type != null))
        checkFilter.value = false;
    };
    const filterIsHot = ref();
    const filterTrangthai = ref();
    const filterNewsType = ref();
    const showFilter = ref(false);
    const reFilterNews = () => {
      checkFilter.value = false;
      filterIsHot.value = null;
      filterNewsType.value = null;
      filterTrangthai.value = null;
      options2.value.is_hot = null;
      options2.value.product_type = null;
      options2.value.status = null;
      filterNews(false);
      showFilter.value = false;
    };
    const filterNews = (check) => {
      if (check)
        checkFilter.value = true;
      options2.value.is_hot = filterIsHot.value;
      options2.value.product_type = filterNewsType.value;
      options2.value.status = filterTrangthai.value;
      if (options2.value.is_hot != null) {
        let filterS = {
          filterconstraints: [{ value: options2.value.is_hot, matchMode: "equals" }],
          filteroperator: "and",
          key: "is_hot"
        };
        filterSQL.value.push(filterS);
      }
      if (options2.value.product_type != null) {
        let filterS = {
          filterconstraints: [
            { value: options2.value.product_type, matchMode: "equals" }
          ],
          filteroperator: "and",
          key: "product_type"
        };
        filterSQL.value.push(filterS);
      }
      if (options2.value.status != null) {
        let filterS = {
          filterconstraints: [{ value: options2.value.status, matchMode: "equals" }],
          filteroperator: "and",
          key: "status"
        };
        filterSQL.value.push(filterS);
      }
      showFilter.value = false;
      loadDataSQL();
    };
    const searchNews = () => {
      loadDataSQL();
    };
    const first = ref(0);
    const refreshData = () => {
      options2.value.search = "";
      taskDateFilter.value = [];
      options2.value.start_date = null;
      options2.value.end_date = null;
      options2.value.is_hot = null;
      options2.value.status = null;
      options2.value.product_type = null;
      filterIsHot.value = null;
      filterNewsType.value = null;
      filterTrangthai.value = null;
      filterSQL.value = [];
      selectedNews.value = [];
      filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        title: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
        },
        start_date: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }]
        },
        is_hot: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }]
        },
        status: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }]
        }
      };
      first.value = 0;
      options2.value.pageno = 0;
      loadData(true);
    };
    ref([
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
    const listTags = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-column flex-grow-1 h-full" }, _attrs))} data-v-5cd71523>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(HeadBar, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="body-layout flex flex-grow-1 w-full h-full" data-v-5cd71523>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(SideBar, { class: "shadow-1 h-full" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(storeLogin)) {
        _push(`<div data-v-5cd71523><div class="d-container" data-v-5cd71523><div class="d-lang-header" data-v-5cd71523><h3 class="d-module-title" data-v-5cd71523><i class="pi pi-id-card" data-v-5cd71523></i> Danh s\xE1ch b\xE0i \u0111\u0103ng(${ssrInterpolate(options2.value.totalRecords)}) </h3></div>`);
        _push(ssrRenderComponent(unref(script$9), { class: "d-toolbar" }, {
          start: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="p-input-icon-left" data-v-5cd71523${_scopeId}><i class="pi pi-search" data-v-5cd71523${_scopeId}></i>`);
              _push2(ssrRenderComponent(_component_InputText, {
                modelValue: options2.value.search,
                "onUpdate:modelValue": ($event) => options2.value.search = $event,
                onKeyup: ($event) => searchNews(),
                type: "text",
                spellcheck: "false",
                placeholder: "T\xECm ki\u1EBFm"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                class: [
                  (filterIsHot.value != null || filterNewsType.value != null || filterTrangthai.value != null) && checkFilter.value ? "" : "p-button-secondary p-button-outlined",
                  "ml-2"
                ],
                icon: "pi pi-filter",
                onClick: toggleFilter,
                "aria-haspopup": "true",
                "aria-controls": "overlay_panelS"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$4$1), {
                onHide: hideFilter,
                ref_key: "filterButs",
                ref: filterButs,
                appendTo: "body",
                showCloseIcon: false,
                id: "overlay_panelS",
                style: { "width": "350px" },
                breakpoints: { "960px": "20vw" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid formgrid m-2" data-v-5cd71523${_scopeId2}><div class="field col-12 md:col-12" data-v-5cd71523${_scopeId2}><div style="${ssrRenderStyle({ "display": "flex" })}" class="col-12 p-0" data-v-5cd71523${_scopeId2}><div class="col-4 p-0 align-items-center flex" data-v-5cd71523${_scopeId2}> Tin n\u1ED5i b\u1EADt: </div>`);
                    _push3(ssrRenderComponent(unref(script$4$2), {
                      class: "col-2 p-0",
                      modelValue: filterIsHot.value,
                      "onUpdate:modelValue": ($event) => filterIsHot.value = $event
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="field col-12 md:col-12 flex" data-v-5cd71523${_scopeId2}><div class="col-4 p-0 align-items-center flex" data-v-5cd71523${_scopeId2}> Ph\xE2n lo\u1EA1i: </div>`);
                    _push3(ssrRenderComponent(unref(script$i), {
                      modelValue: filterNewsType.value,
                      "onUpdate:modelValue": ($event) => filterNewsType.value = $event,
                      options: loaiTinTuc.value,
                      optionLabel: "name",
                      optionValue: "code",
                      placeholder: "Lo\u1EA1i s\u1EA3n ph\u1EA9m",
                      class: "col-8 p-0",
                      style: filterNewsType.value != null ? "border:2px solid #2196f3" : ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="field col-12 md:col-12 flex" data-v-5cd71523${_scopeId2}><div class="col-4 p-0 align-items-center flex" data-v-5cd71523${_scopeId2}> Tr\u1EA1ng th\xE1i: </div>`);
                    _push3(ssrRenderComponent(unref(script$i), {
                      modelValue: filterTrangthai.value,
                      "onUpdate:modelValue": ($event) => filterTrangthai.value = $event,
                      options: options_status.value,
                      optionLabel: "name",
                      optionValue: "code",
                      placeholder: "Tr\u1EA1ng th\xE1i",
                      class: "col-8 p-0",
                      style: filterTrangthai.value != null ? "border:2px solid #2196f3" : ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-12 field p-0" data-v-5cd71523${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(script$9), { class: "toolbar-filter" }, {
                      start: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Button, {
                            onClick: reFilterNews,
                            class: "p-button-outlined",
                            label: "X\xF3a"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Button, {
                              onClick: reFilterNews,
                              class: "p-button-outlined",
                              label: "X\xF3a"
                            })
                          ];
                        }
                      }),
                      end: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Button, {
                            onClick: ($event) => filterNews(true),
                            label: "L\u1ECDc"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Button, {
                              onClick: ($event) => filterNews(true),
                              label: "L\u1ECDc"
                            }, null, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid formgrid m-2" }, [
                        createVNode("div", { class: "field col-12 md:col-12" }, [
                          createVNode("div", {
                            style: { "display": "flex" },
                            class: "col-12 p-0"
                          }, [
                            createVNode("div", { class: "col-4 p-0 align-items-center flex" }, " Tin n\u1ED5i b\u1EADt: "),
                            createVNode(unref(script$4$2), {
                              class: "col-2 p-0",
                              modelValue: filterIsHot.value,
                              "onUpdate:modelValue": ($event) => filterIsHot.value = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "field col-12 md:col-12 flex" }, [
                          createVNode("div", { class: "col-4 p-0 align-items-center flex" }, " Ph\xE2n lo\u1EA1i: "),
                          createVNode(unref(script$i), {
                            modelValue: filterNewsType.value,
                            "onUpdate:modelValue": ($event) => filterNewsType.value = $event,
                            options: loaiTinTuc.value,
                            optionLabel: "name",
                            optionValue: "code",
                            placeholder: "Lo\u1EA1i s\u1EA3n ph\u1EA9m",
                            class: "col-8 p-0",
                            style: filterNewsType.value != null ? "border:2px solid #2196f3" : ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "style"])
                        ]),
                        createVNode("div", { class: "field col-12 md:col-12 flex" }, [
                          createVNode("div", { class: "col-4 p-0 align-items-center flex" }, " Tr\u1EA1ng th\xE1i: "),
                          createVNode(unref(script$i), {
                            modelValue: filterTrangthai.value,
                            "onUpdate:modelValue": ($event) => filterTrangthai.value = $event,
                            options: options_status.value,
                            optionLabel: "name",
                            optionValue: "code",
                            placeholder: "Tr\u1EA1ng th\xE1i",
                            class: "col-8 p-0",
                            style: filterTrangthai.value != null ? "border:2px solid #2196f3" : ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "style"])
                        ]),
                        createVNode("div", { class: "col-12 field p-0" }, [
                          createVNode(unref(script$9), { class: "toolbar-filter" }, {
                            start: withCtx(() => [
                              createVNode(_component_Button, {
                                onClick: reFilterNews,
                                class: "p-button-outlined",
                                label: "X\xF3a"
                              })
                            ]),
                            end: withCtx(() => [
                              createVNode(_component_Button, {
                                onClick: ($event) => filterNews(true),
                                label: "L\u1ECDc"
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</span>`);
              _push2(ssrRenderComponent(unref(script$6$1), {
                placeholder: "L\u1ECDc theo ng\xE0y",
                id: "range",
                modelValue: taskDateFilter.value,
                "onUpdate:modelValue": ($event) => taskDateFilter.value = $event,
                showIcon: true,
                selectionMode: "range",
                class: "mx-2",
                manualInput: false
              }, {
                footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full flex" data-v-5cd71523${_scopeId2}><div class="w-4 format-center" data-v-5cd71523${_scopeId2}><span class="cursor-pointer text-primary" data-v-5cd71523${_scopeId2}>H\xF4m nay</span></div><div class="w-4 format-center" data-v-5cd71523${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Button, {
                      onClick: onDayClick,
                      label: "Th\u1EF1c hi\u1EC7n"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="w-4 format-center" data-v-5cd71523${_scopeId2}><span class="cursor-pointer text-primary" data-v-5cd71523${_scopeId2}>X\xF3a</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full flex" }, [
                        createVNode("div", { class: "w-4 format-center" }, [
                          createVNode("span", {
                            onClick: todayClick,
                            class: "cursor-pointer text-primary"
                          }, "H\xF4m nay")
                        ]),
                        createVNode("div", { class: "w-4 format-center" }, [
                          createVNode(_component_Button, {
                            onClick: onDayClick,
                            label: "Th\u1EF1c hi\u1EC7n"
                          })
                        ]),
                        createVNode("div", { class: "w-4 format-center" }, [
                          createVNode("span", {
                            onClick: delDayClick,
                            class: "cursor-pointer text-primary"
                          }, "X\xF3a")
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "p-input-icon-left" }, [
                  createVNode("i", { class: "pi pi-search" }),
                  createVNode(_component_InputText, {
                    modelValue: options2.value.search,
                    "onUpdate:modelValue": ($event) => options2.value.search = $event,
                    onKeyup: withKeys(($event) => searchNews(), ["enter"]),
                    type: "text",
                    spellcheck: "false",
                    placeholder: "T\xECm ki\u1EBFm"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                  createVNode(_component_Button, {
                    class: [
                      (filterIsHot.value != null || filterNewsType.value != null || filterTrangthai.value != null) && checkFilter.value ? "" : "p-button-secondary p-button-outlined",
                      "ml-2"
                    ],
                    icon: "pi pi-filter",
                    onClick: toggleFilter,
                    "aria-haspopup": "true",
                    "aria-controls": "overlay_panelS"
                  }, null, 8, ["class"]),
                  createVNode(unref(script$4$1), {
                    onHide: hideFilter,
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
                        createVNode("div", { class: "field col-12 md:col-12" }, [
                          createVNode("div", {
                            style: { "display": "flex" },
                            class: "col-12 p-0"
                          }, [
                            createVNode("div", { class: "col-4 p-0 align-items-center flex" }, " Tin n\u1ED5i b\u1EADt: "),
                            createVNode(unref(script$4$2), {
                              class: "col-2 p-0",
                              modelValue: filterIsHot.value,
                              "onUpdate:modelValue": ($event) => filterIsHot.value = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "field col-12 md:col-12 flex" }, [
                          createVNode("div", { class: "col-4 p-0 align-items-center flex" }, " Ph\xE2n lo\u1EA1i: "),
                          createVNode(unref(script$i), {
                            modelValue: filterNewsType.value,
                            "onUpdate:modelValue": ($event) => filterNewsType.value = $event,
                            options: loaiTinTuc.value,
                            optionLabel: "name",
                            optionValue: "code",
                            placeholder: "Lo\u1EA1i s\u1EA3n ph\u1EA9m",
                            class: "col-8 p-0",
                            style: filterNewsType.value != null ? "border:2px solid #2196f3" : ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "style"])
                        ]),
                        createVNode("div", { class: "field col-12 md:col-12 flex" }, [
                          createVNode("div", { class: "col-4 p-0 align-items-center flex" }, " Tr\u1EA1ng th\xE1i: "),
                          createVNode(unref(script$i), {
                            modelValue: filterTrangthai.value,
                            "onUpdate:modelValue": ($event) => filterTrangthai.value = $event,
                            options: options_status.value,
                            optionLabel: "name",
                            optionValue: "code",
                            placeholder: "Tr\u1EA1ng th\xE1i",
                            class: "col-8 p-0",
                            style: filterTrangthai.value != null ? "border:2px solid #2196f3" : ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "style"])
                        ]),
                        createVNode("div", { class: "col-12 field p-0" }, [
                          createVNode(unref(script$9), { class: "toolbar-filter" }, {
                            start: withCtx(() => [
                              createVNode(_component_Button, {
                                onClick: reFilterNews,
                                class: "p-button-outlined",
                                label: "X\xF3a"
                              })
                            ]),
                            end: withCtx(() => [
                              createVNode(_component_Button, {
                                onClick: ($event) => filterNews(true),
                                label: "L\u1ECDc"
                              }, null, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  }, 512)
                ]),
                createVNode(unref(script$6$1), {
                  placeholder: "L\u1ECDc theo ng\xE0y",
                  id: "range",
                  modelValue: taskDateFilter.value,
                  "onUpdate:modelValue": ($event) => taskDateFilter.value = $event,
                  showIcon: true,
                  selectionMode: "range",
                  class: "mx-2",
                  manualInput: false
                }, {
                  footer: withCtx(() => [
                    createVNode("div", { class: "w-full flex" }, [
                      createVNode("div", { class: "w-4 format-center" }, [
                        createVNode("span", {
                          onClick: todayClick,
                          class: "cursor-pointer text-primary"
                        }, "H\xF4m nay")
                      ]),
                      createVNode("div", { class: "w-4 format-center" }, [
                        createVNode(_component_Button, {
                          onClick: onDayClick,
                          label: "Th\u1EF1c hi\u1EC7n"
                        })
                      ]),
                      createVNode("div", { class: "w-4 format-center" }, [
                        createVNode("span", {
                          onClick: delDayClick,
                          class: "cursor-pointer text-primary"
                        }, "X\xF3a")
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          end: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (checkDelList.value) {
                _push2(ssrRenderComponent(_component_Button, {
                  onClick: ($event) => deleteList(),
                  label: "X\xF3a",
                  icon: "pi pi-trash",
                  class: "mr-2 p-button-danger"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_Button, {
                onClick: ($event) => openBasic("Th\xEAm m\u1EDBi"),
                label: "Th\xEAm m\u1EDBi",
                icon: "pi pi-plus",
                class: "mr-2"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                class: "mr-2 p-button-outlined p-button-secondary",
                icon: "pi pi-refresh",
                onClick: refreshData
              }, null, _parent2, _scopeId));
            } else {
              return [
                checkDelList.value ? (openBlock(), createBlock(_component_Button, {
                  key: 0,
                  onClick: ($event) => deleteList(),
                  label: "X\xF3a",
                  icon: "pi pi-trash",
                  class: "mr-2 p-button-danger"
                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                createVNode(_component_Button, {
                  onClick: ($event) => openBasic("Th\xEAm m\u1EDBi"),
                  label: "Th\xEAm m\u1EDBi",
                  icon: "pi pi-plus",
                  class: "mr-2"
                }, null, 8, ["onClick"]),
                createVNode(_component_Button, {
                  class: "mr-2 p-button-outlined p-button-secondary",
                  icon: "pi pi-refresh",
                  onClick: refreshData
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="d-lang-table" data-v-5cd71523>`);
        _push(ssrRenderComponent(unref(script$a), {
          class: "w-full p-datatable-sm e-sm",
          onPage: ($event) => onPage($event),
          onFilter: ($event) => onFilter($event),
          onSort: ($event) => onSort($event),
          filters: filters.value,
          "onUpdate:filters": ($event) => filters.value = $event,
          removableSort: "",
          filterDisplay: "menu",
          filterMode: "lenient",
          dataKey: "product_id",
          responsiveLayout: "scroll",
          scrollable: true,
          scrollHeight: "flex",
          showGridlines: true,
          rows: options2.value.pagesize,
          lazy: true,
          value: datalists.value,
          loading: options2.value.loading,
          paginator: true,
          totalRecords: options2.value.totalRecords,
          "row-hover": true,
          first: first.value,
          "onUpdate:first": ($event) => first.value = $event,
          selection: selectedNews.value,
          "onUpdate:selection": ($event) => selectedNews.value = $event,
          pageLinkSize: options2.value.PageSize,
          paginatorTemplate: "FirstPageLink PrevPageLink PageLinks  NextPageLink LastPageLink    RowsPerPageDropdown",
          rowsPerPageOptions: [20, 30, 50, 100, 200]
        }, {
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!isFirst.value) {
                _push2(`<div class="align-items-center justify-content-center p-4 text-center m-auto" data-v-5cd71523${_scopeId}><img${ssrRenderAttr("src", _imports_0)} height="144" data-v-5cd71523${_scopeId}><h3 class="m-1" data-v-5cd71523${_scopeId}>Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u</h3></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                !isFirst.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "align-items-center justify-content-center p-4 text-center m-auto"
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
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(script$b), {
                selectionMode: "multiple",
                style: { "width": "2%" }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$b), {
                headerStyle: "text-align:center;max-width:70px;height:50px",
                bodyStyle: "text-align:center;max-width:70px",
                field: "is_order",
                header: "STT",
                style: { "width": "3%" }
              }, {
                body: withCtx((data3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div style="${ssrRenderStyle(
                      data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                    )}" data-v-5cd71523${_scopeId2}>${ssrInterpolate(data3.data.is_order)}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                      }, toDisplayString(data3.data.is_order), 5)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$b), {
                headerStyle: "text-align:left;height:50px",
                bodyStyle: "text-align:left;",
                field: "title",
                header: "S\u1EA3n ph\u1EA9m",
                sortable: true
              }, {
                body: withCtx((data3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div style="${ssrRenderStyle(
                      data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                    )}" data-v-5cd71523${_scopeId2}>${ssrInterpolate(data3.data.title)}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                      }, toDisplayString(data3.data.title), 5)
                    ];
                  }
                }),
                filter: withCtx(({ filterModel }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_InputText, {
                      type: "text",
                      modelValue: filterModel.value,
                      "onUpdate:modelValue": ($event) => filterModel.value = $event,
                      class: "p-column-filter",
                      placeholder: "T\u1EEB kho\xE1"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_InputText, {
                        type: "text",
                        modelValue: filterModel.value,
                        "onUpdate:modelValue": ($event) => filterModel.value = $event,
                        class: "p-column-filter",
                        placeholder: "T\u1EEB kho\xE1"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$b), {
                class: "align-items-center justify-content-center text-center",
                headerStyle: "text-align:center;max-width:120px;height:50px",
                bodyStyle: "text-align:center;max-width:120px",
                field: "image",
                header: "\u1EA2nh \u0111\u1EA1i di\u1EC7n"
              }, {
                body: withCtx((data3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (data3.data.image) {
                      _push3(ssrRenderComponent(unref(script$3), {
                        "image-style": "object-fit: contain; border: unset; outline: unset",
                        width: "100",
                        height: "50",
                        alt: " ",
                        src: data3.data.image ? unref(basedomainURL) + data3.data.image : unref(basedomainURL) + "/Portals/Image/noimg.jpg",
                        onError: ($event) => $event.target.src = unref(basedomainURL) + "/Portals/Image/noimg.jpg",
                        preview: ""
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      data3.data.image ? (openBlock(), createBlock(unref(script$3), {
                        key: 0,
                        "image-style": "object-fit: contain; border: unset; outline: unset",
                        width: "100",
                        height: "50",
                        alt: " ",
                        src: data3.data.image ? unref(basedomainURL) + data3.data.image : unref(basedomainURL) + "/Portals/Image/noimg.jpg",
                        onError: ($event) => $event.target.src = unref(basedomainURL) + "/Portals/Image/noimg.jpg",
                        preview: ""
                      }, null, 8, ["src", "onError"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$b), {
                class: "align-items-center justify-content-center text-center",
                headerStyle: "text-align:center;max-width:160px;height:50px",
                bodyStyle: "text-align:center;max-width:160px",
                field: "created_date_show",
                header: "Ng\xE0y t\u1EA1o"
              }, {
                body: withCtx((data3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div style="${ssrRenderStyle(
                      data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                    )}" data-v-5cd71523${_scopeId2}>${ssrInterpolate(data3.data.created_date_show)}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                      }, toDisplayString(data3.data.created_date_show), 5)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$b), {
                class: "align-items-center justify-content-center text-center",
                headerStyle: "text-align:center;max-width:120px;height:50px",
                bodyStyle: "text-align:center;max-width:120px",
                field: "is_promotions",
                header: "N\u1ED5i b\u1EADt",
                sortable: true
              }, {
                body: withCtx((data3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(script$c), {
                      binary: data3.data.is_promotions,
                      modelValue: data3.data.is_promotions,
                      "onUpdate:modelValue": ($event) => data3.data.is_promotions = $event,
                      onClick: ($event) => onCheckBox(data3.data)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(script$c), {
                        binary: data3.data.is_promotions,
                        modelValue: data3.data.is_promotions,
                        "onUpdate:modelValue": ($event) => data3.data.is_promotions = $event,
                        onClick: ($event) => onCheckBox(data3.data)
                      }, null, 8, ["binary", "modelValue", "onUpdate:modelValue", "onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$b), {
                class: "align-items-center justify-content-center text-center",
                headerStyle: "text-align:center;max-width:180px;height:50px",
                bodyStyle: "text-align:center;max-width:180px",
                field: "status",
                header: "Tr\u1EA1ng th\xE1i",
                sortable: true
              }, {
                body: withCtx((data3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(script$i), {
                      onChange: ($event) => onDropDown(data3.data),
                      class: "col-11",
                      modelValue: data3.data.status,
                      "onUpdate:modelValue": ($event) => data3.data.status = $event,
                      options: options_status.value,
                      optionLabel: "name",
                      optionValue: "code"
                    }, {
                      value: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (slotProps.value) {
                            _push4(`<div class="p-dropdown-car-value" data-v-5cd71523${_scopeId3}>`);
                            if (slotProps.value == 1) {
                              _push4(`<span data-v-5cd71523${_scopeId3}>Ch\u01B0a duy\u1EC7t</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            if (slotProps.value == 2) {
                              _push4(`<span style="${ssrRenderStyle({ "color": "#689f38" })}" data-v-5cd71523${_scopeId3}>\u0110\xE3 duy\u1EC7t</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            if (slotProps.value == 3) {
                              _push4(`<span style="${ssrRenderStyle({ "color": "#fbc02d" })}" data-v-5cd71523${_scopeId3}>\u0110\xE3 \u0111\xF3ng</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            if (slotProps.value == 4) {
                              _push4(`<span style="${ssrRenderStyle({ "color": "#d32f2f" })}" data-v-5cd71523${_scopeId3}>Kh\xF4ng duy\u1EC7t</span>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div>`);
                          } else {
                            _push4(`<span data-v-5cd71523${_scopeId3}>${ssrInterpolate(slotProps.placeholder)}</span>`);
                          }
                        } else {
                          return [
                            slotProps.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "p-dropdown-car-value"
                            }, [
                              slotProps.value == 1 ? (openBlock(), createBlock("span", { key: 0 }, "Ch\u01B0a duy\u1EC7t")) : createCommentVNode("", true),
                              slotProps.value == 2 ? (openBlock(), createBlock("span", {
                                key: 1,
                                style: { "color": "#689f38" }
                              }, "\u0110\xE3 duy\u1EC7t")) : createCommentVNode("", true),
                              slotProps.value == 3 ? (openBlock(), createBlock("span", {
                                key: 2,
                                style: { "color": "#fbc02d" }
                              }, "\u0110\xE3 \u0111\xF3ng")) : createCommentVNode("", true),
                              slotProps.value == 4 ? (openBlock(), createBlock("span", {
                                key: 3,
                                style: { "color": "#d32f2f" }
                              }, "Kh\xF4ng duy\u1EC7t")) : createCommentVNode("", true)
                            ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(script$i), {
                        onChange: ($event) => onDropDown(data3.data),
                        class: "col-11",
                        modelValue: data3.data.status,
                        "onUpdate:modelValue": ($event) => data3.data.status = $event,
                        options: options_status.value,
                        optionLabel: "name",
                        optionValue: "code"
                      }, {
                        value: withCtx((slotProps) => [
                          slotProps.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "p-dropdown-car-value"
                          }, [
                            slotProps.value == 1 ? (openBlock(), createBlock("span", { key: 0 }, "Ch\u01B0a duy\u1EC7t")) : createCommentVNode("", true),
                            slotProps.value == 2 ? (openBlock(), createBlock("span", {
                              key: 1,
                              style: { "color": "#689f38" }
                            }, "\u0110\xE3 duy\u1EC7t")) : createCommentVNode("", true),
                            slotProps.value == 3 ? (openBlock(), createBlock("span", {
                              key: 2,
                              style: { "color": "#fbc02d" }
                            }, "\u0110\xE3 \u0111\xF3ng")) : createCommentVNode("", true),
                            slotProps.value == 4 ? (openBlock(), createBlock("span", {
                              key: 3,
                              style: { "color": "#d32f2f" }
                            }, "Kh\xF4ng duy\u1EC7t")) : createCommentVNode("", true)
                          ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                        ]),
                        _: 2
                      }, 1032, ["onChange", "modelValue", "onUpdate:modelValue", "options"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$b), {
                class: "align-items-center justify-content-center text-center",
                headerStyle: "text-align:center;max-width:150px;height:50px",
                bodyStyle: "text-align:center;max-width:150px",
                header: "Ch\u1EE9c n\u0103ng"
              }, {
                body: withCtx((data3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Button, mergeProps({
                      onClick: ($event) => openDetails(data3.data),
                      class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                      type: "button",
                      icon: "pi pi-info-circle",
                      style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                    }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Chi ti\u1EBFt", void 0, { top: true })), null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Button, mergeProps({
                      onClick: ($event) => editNews(data3.data),
                      class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                      type: "button",
                      icon: "pi pi-pencil",
                      style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                    }, ssrGetDirectiveProps(
                      _ctx,
                      _directive_tooltip,
                      data3.data.product_type == 0 ? "S\u1EEDa s\u1EA3n ph\u1EA9m" : "S\u1EEDa s\u1EA3n ph\u1EA9m",
                      void 0,
                      { top: true }
                    )), null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Button, mergeProps({
                      class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                      type: "button",
                      icon: "pi pi-trash",
                      style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : "",
                      onClick: ($event) => delNews(data3.data)
                    }, ssrGetDirectiveProps(
                      _ctx,
                      _directive_tooltip,
                      data3.data.product_type == 0 ? "X\xF3a s\u1EA3n ph\u1EA9m" : "X\xF3a s\u1EA3n ph\u1EA9m",
                      void 0,
                      { top: true }
                    )), null, _parent3, _scopeId2));
                  } else {
                    return [
                      withDirectives(createVNode(_component_Button, {
                        onClick: ($event) => openDetails(data3.data),
                        class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                        type: "button",
                        icon: "pi pi-info-circle",
                        style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                      }, null, 8, ["onClick", "style"]), [
                        [
                          _directive_tooltip,
                          "Chi ti\u1EBFt",
                          void 0,
                          { top: true }
                        ]
                      ]),
                      withDirectives(createVNode(_component_Button, {
                        onClick: ($event) => editNews(data3.data),
                        class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                        type: "button",
                        icon: "pi pi-pencil",
                        style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                      }, null, 8, ["onClick", "style"]), [
                        [
                          _directive_tooltip,
                          data3.data.product_type == 0 ? "S\u1EEDa s\u1EA3n ph\u1EA9m" : "S\u1EEDa s\u1EA3n ph\u1EA9m",
                          void 0,
                          { top: true }
                        ]
                      ]),
                      withDirectives(createVNode(_component_Button, {
                        class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                        type: "button",
                        icon: "pi pi-trash",
                        style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : "",
                        onClick: ($event) => delNews(data3.data)
                      }, null, 8, ["style", "onClick"]), [
                        [
                          _directive_tooltip,
                          data3.data.product_type == 0 ? "X\xF3a s\u1EA3n ph\u1EA9m" : "X\xF3a s\u1EA3n ph\u1EA9m",
                          void 0,
                          { top: true }
                        ]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(script$b), {
                  selectionMode: "multiple",
                  style: { "width": "2%" }
                }),
                createVNode(unref(script$b), {
                  headerStyle: "text-align:center;max-width:70px;height:50px",
                  bodyStyle: "text-align:center;max-width:70px",
                  field: "is_order",
                  header: "STT",
                  style: { "width": "3%" }
                }, {
                  body: withCtx((data3) => [
                    createVNode("div", {
                      style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                    }, toDisplayString(data3.data.is_order), 5)
                  ]),
                  _: 1
                }),
                createVNode(unref(script$b), {
                  headerStyle: "text-align:left;height:50px",
                  bodyStyle: "text-align:left;",
                  field: "title",
                  header: "S\u1EA3n ph\u1EA9m",
                  sortable: true
                }, {
                  body: withCtx((data3) => [
                    createVNode("div", {
                      style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                    }, toDisplayString(data3.data.title), 5)
                  ]),
                  filter: withCtx(({ filterModel }) => [
                    createVNode(_component_InputText, {
                      type: "text",
                      modelValue: filterModel.value,
                      "onUpdate:modelValue": ($event) => filterModel.value = $event,
                      class: "p-column-filter",
                      placeholder: "T\u1EEB kho\xE1"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(unref(script$b), {
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:120px;height:50px",
                  bodyStyle: "text-align:center;max-width:120px",
                  field: "image",
                  header: "\u1EA2nh \u0111\u1EA1i di\u1EC7n"
                }, {
                  body: withCtx((data3) => [
                    data3.data.image ? (openBlock(), createBlock(unref(script$3), {
                      key: 0,
                      "image-style": "object-fit: contain; border: unset; outline: unset",
                      width: "100",
                      height: "50",
                      alt: " ",
                      src: data3.data.image ? unref(basedomainURL) + data3.data.image : unref(basedomainURL) + "/Portals/Image/noimg.jpg",
                      onError: ($event) => $event.target.src = unref(basedomainURL) + "/Portals/Image/noimg.jpg",
                      preview: ""
                    }, null, 8, ["src", "onError"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(unref(script$b), {
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:160px;height:50px",
                  bodyStyle: "text-align:center;max-width:160px",
                  field: "created_date_show",
                  header: "Ng\xE0y t\u1EA1o"
                }, {
                  body: withCtx((data3) => [
                    createVNode("div", {
                      style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                    }, toDisplayString(data3.data.created_date_show), 5)
                  ]),
                  _: 1
                }),
                createVNode(unref(script$b), {
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:120px;height:50px",
                  bodyStyle: "text-align:center;max-width:120px",
                  field: "is_promotions",
                  header: "N\u1ED5i b\u1EADt",
                  sortable: true
                }, {
                  body: withCtx((data3) => [
                    createVNode(unref(script$c), {
                      binary: data3.data.is_promotions,
                      modelValue: data3.data.is_promotions,
                      "onUpdate:modelValue": ($event) => data3.data.is_promotions = $event,
                      onClick: ($event) => onCheckBox(data3.data)
                    }, null, 8, ["binary", "modelValue", "onUpdate:modelValue", "onClick"])
                  ]),
                  _: 1
                }),
                createVNode(unref(script$b), {
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:180px;height:50px",
                  bodyStyle: "text-align:center;max-width:180px",
                  field: "status",
                  header: "Tr\u1EA1ng th\xE1i",
                  sortable: true
                }, {
                  body: withCtx((data3) => [
                    createVNode(unref(script$i), {
                      onChange: ($event) => onDropDown(data3.data),
                      class: "col-11",
                      modelValue: data3.data.status,
                      "onUpdate:modelValue": ($event) => data3.data.status = $event,
                      options: options_status.value,
                      optionLabel: "name",
                      optionValue: "code"
                    }, {
                      value: withCtx((slotProps) => [
                        slotProps.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "p-dropdown-car-value"
                        }, [
                          slotProps.value == 1 ? (openBlock(), createBlock("span", { key: 0 }, "Ch\u01B0a duy\u1EC7t")) : createCommentVNode("", true),
                          slotProps.value == 2 ? (openBlock(), createBlock("span", {
                            key: 1,
                            style: { "color": "#689f38" }
                          }, "\u0110\xE3 duy\u1EC7t")) : createCommentVNode("", true),
                          slotProps.value == 3 ? (openBlock(), createBlock("span", {
                            key: 2,
                            style: { "color": "#fbc02d" }
                          }, "\u0110\xE3 \u0111\xF3ng")) : createCommentVNode("", true),
                          slotProps.value == 4 ? (openBlock(), createBlock("span", {
                            key: 3,
                            style: { "color": "#d32f2f" }
                          }, "Kh\xF4ng duy\u1EC7t")) : createCommentVNode("", true)
                        ])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(slotProps.placeholder), 1))
                      ]),
                      _: 2
                    }, 1032, ["onChange", "modelValue", "onUpdate:modelValue", "options"])
                  ]),
                  _: 1
                }),
                createVNode(unref(script$b), {
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:150px;height:50px",
                  bodyStyle: "text-align:center;max-width:150px",
                  header: "Ch\u1EE9c n\u0103ng"
                }, {
                  body: withCtx((data3) => [
                    withDirectives(createVNode(_component_Button, {
                      onClick: ($event) => openDetails(data3.data),
                      class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                      type: "button",
                      icon: "pi pi-info-circle",
                      style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                    }, null, 8, ["onClick", "style"]), [
                      [
                        _directive_tooltip,
                        "Chi ti\u1EBFt",
                        void 0,
                        { top: true }
                      ]
                    ]),
                    withDirectives(createVNode(_component_Button, {
                      onClick: ($event) => editNews(data3.data),
                      class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                      type: "button",
                      icon: "pi pi-pencil",
                      style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : ""
                    }, null, 8, ["onClick", "style"]), [
                      [
                        _directive_tooltip,
                        data3.data.product_type == 0 ? "S\u1EEDa s\u1EA3n ph\u1EA9m" : "S\u1EEDa s\u1EA3n ph\u1EA9m",
                        void 0,
                        { top: true }
                      ]
                    ]),
                    withDirectives(createVNode(_component_Button, {
                      class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                      type: "button",
                      icon: "pi pi-trash",
                      style: data3.data.status == 2 ? "color:#689F38" : data3.data.status == 3 ? "color:#FBC02D" : data3.data.status == 4 ? "color:#D32F2F" : "",
                      onClick: ($event) => delNews(data3.data)
                    }, null, 8, ["style", "onClick"]), [
                      [
                        _directive_tooltip,
                        data3.data.product_type == 0 ? "X\xF3a s\u1EA3n ph\u1EA9m" : "X\xF3a s\u1EA3n ph\u1EA9m",
                        void 0,
                        { top: true }
                      ]
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(unref(script$d), {
          visible: displayDetails.value,
          "onUpdate:visible": ($event) => displayDetails.value = $event,
          position: "right",
          style: { "width": "60%" },
          class: "side-bar-design"
        }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-full" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$9), null, {
                start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="font-bold w-full text-xl custoolbar" data-v-5cd71523${_scopeId2}> Chi ti\u1EBFt s\u1EA3n ph\u1EA9m </div>`);
                  } else {
                    return [
                      createVNode("div", { class: "font-bold w-full text-xl custoolbar" }, " Chi ti\u1EBFt s\u1EA3n ph\u1EA9m ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-full" }, [
                  createVNode(unref(script$9), null, {
                    start: withCtx(() => [
                      createVNode("div", { class: "font-bold w-full text-xl custoolbar" }, " Chi ti\u1EBFt s\u1EA3n ph\u1EA9m ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form data-v-5cd71523${_scopeId}><div class="grid formgrid m-2" data-v-5cd71523${_scopeId}><div class="field col-12 md:col-12" data-v-5cd71523${_scopeId}><h1 data-v-5cd71523${_scopeId}>${ssrInterpolate(product.value.title)}</h1></div><div class="field col-12 md:col-12" data-v-5cd71523${_scopeId}>`);
              if (product.value.is_hot) {
                _push2(`<img style="${ssrRenderStyle({ "width": "40px", "height": "20px", "margin-right": "12px" })}"${ssrRenderAttr("src", _imports_1)} alt="new" data-v-5cd71523${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span style="${ssrRenderStyle({ "color": "cornflowerblue", "fon-size": "14px" })}" data-v-5cd71523${_scopeId}>${ssrInterpolate(product.value.created_name)},</span><i style="${ssrRenderStyle({ "padding": "0px 12px" })}" class="pi pi-clock" data-v-5cd71523${_scopeId}></i><span data-v-5cd71523${_scopeId}>Ng\xE0y: ${ssrInterpolate(unref(moment)(new Date(product.value.start_date)).format(
                "DD/MM/YYYY HH:mm:ss"
              ))}</span></div><div class="field col-12 md:col-12" data-v-5cd71523${_scopeId}><hr data-v-5cd71523${_scopeId}></div><div class="field col-12 md:col-12" data-v-5cd71523${_scopeId}><h3 data-v-5cd71523${_scopeId}>${ssrInterpolate(product.value.des)}</h3></div><div style="${ssrRenderStyle({ "padding": "0px 24px" })}" class="field col-12 md:col-12 ck-content" data-v-5cd71523${_scopeId}><p style="${ssrRenderStyle({ "font-size": "16px" })}" data-v-5cd71523${_scopeId}>${product.value.contents}</p></div></div></form>`);
            } else {
              return [
                createVNode("form", null, [
                  createVNode("div", { class: "grid formgrid m-2" }, [
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("h1", null, toDisplayString(product.value.title), 1)
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      product.value.is_hot ? (openBlock(), createBlock("img", {
                        key: 0,
                        style: { "width": "40px", "height": "20px", "margin-right": "12px" },
                        src: _imports_1,
                        alt: "new"
                      })) : createCommentVNode("", true),
                      createVNode("span", { style: { "color": "cornflowerblue", "fon-size": "14px" } }, toDisplayString(product.value.created_name) + ",", 1),
                      createVNode("i", {
                        style: { "padding": "0px 12px" },
                        class: "pi pi-clock"
                      }),
                      createVNode("span", null, "Ng\xE0y: " + toDisplayString(unref(moment)(new Date(product.value.start_date)).format(
                        "DD/MM/YYYY HH:mm:ss"
                      )), 1)
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("hr")
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("h3", null, toDisplayString(product.value.des), 1)
                    ]),
                    createVNode("div", {
                      style: { "padding": "0px 24px" },
                      class: "field col-12 md:col-12 ck-content"
                    }, [
                      createVNode("p", {
                        innerHTML: product.value.contents,
                        style: { "font-size": "16px" }
                      }, null, 8, ["innerHTML"])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(script$e), {
          onHide: closeDialog,
          header: headerDialog.value,
          visible: displayBasic.value,
          "onUpdate:visible": ($event) => displayBasic.value = $event,
          maximizable: true,
          modal: true,
          style: { width: "70vw" }
        }, {
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                label: "H\u1EE7y",
                icon: "pi pi-times",
                onClick: ($event) => closeDialog(),
                class: "p-button-text"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                onClick: ($event) => saveNews(!unref(v$).$invalid),
                label: "L\u01B0u",
                icon: "pi pi-check",
                autofocus: ""
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Button, {
                  label: "H\u1EE7y",
                  icon: "pi pi-times",
                  onClick: ($event) => closeDialog(),
                  class: "p-button-text"
                }, null, 8, ["onClick"]),
                createVNode(_component_Button, {
                  onClick: ($event) => saveNews(!unref(v$).$invalid),
                  label: "L\u01B0u",
                  icon: "pi pi-check",
                  autofocus: ""
                }, null, 8, ["onClick"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form data-v-5cd71523${_scopeId}><div class="grid formgrid m-2" data-v-5cd71523${_scopeId}><div class="field col-12 md:col-12 flex" data-v-5cd71523${_scopeId}><div class="${ssrRenderClass(["col-9", "p-0"])}" data-v-5cd71523${_scopeId}><div class="col-12 p-0 flex align-items-center" data-v-5cd71523${_scopeId}><div class="w-11rem text-left" data-v-5cd71523${_scopeId}>${ssrInterpolate(product.value.product_type == 0 ? "Ti\xEAu \u0111\u1EC1 s\u1EA3n ph\u1EA9m" : "Ti\xEAu \u0111\u1EC1 tin t\u1EE9c")} <span class="redsao pl-1" data-v-5cd71523${_scopeId}> (*)</span></div><div style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$8), {
                modelValue: product.value.title,
                "onUpdate:modelValue": ($event) => product.value.title = $event,
                autoResize: true,
                rows: "1",
                cols: "30",
                spellcheck: "false",
                class: ["w-full", { "p-invalid": unref(v$).title.$invalid && submitted.value }],
                id: "txtr1",
                placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 s\u1EA3n ph\u1EA9m"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="col-12 p-0 field flex" data-v-5cd71523${_scopeId}><div class="w-11rem" data-v-5cd71523${_scopeId}></div>`);
              if (unref(v$).title.$invalid && submitted.value || unref(v$).title.$pending.$response) {
                _push2(`<small style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" data-v-5cd71523${_scopeId}><span style="${ssrRenderStyle({ "color": "red" })}" class="w-full" data-v-5cd71523${_scopeId}>${ssrInterpolate(unref(v$).title.required.$message.replace(
                  "Value",
                  product.value.product_type == 0 ? "T\xEAn s\u1EA3n ph\u1EA9m" : "T\xEAn s\u1EA3n ph\u1EA9m"
                ).replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"))}</span></small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="col-12 p-0 field flex align-items-center" data-v-5cd71523${_scopeId}><div class="w-11rem text-left" data-v-5cd71523${_scopeId}> T\xEAn URL <span class="redsao pl-1" data-v-5cd71523${_scopeId}> (*)</span></div><div style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" class="flex" data-v-5cd71523${_scopeId}><div class="p-inputgroup flex-1" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(_component_InputText, {
                modelValue: product.value.url_path,
                "onUpdate:modelValue": ($event) => product.value.url_path = $event,
                autoResize: true,
                spellcheck: "false",
                class: ["w-full", {
                  "p-invalid": unref(v$).url_path.$invalid && submitted.value
                }],
                placeholder: "Nh\u1EADp URL"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                label: "Ki\u1EC3m tra",
                class: "w-7rem"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div><div class="col-12 p-0 field flex" data-v-5cd71523${_scopeId}><div class="w-11rem" data-v-5cd71523${_scopeId}></div>`);
              if (unref(v$).url_path.$invalid && submitted.value || unref(v$).url_path.$pending.$response) {
                _push2(`<small style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" data-v-5cd71523${_scopeId}><span style="${ssrRenderStyle({ "color": "red" })}" class="w-full" data-v-5cd71523${_scopeId}>URL Kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!</span></small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="col-12 field p-0 flex" data-v-5cd71523${_scopeId}><div class="col-6 p-0 align-items-center flex" data-v-5cd71523${_scopeId}><div class="w-11rem text-left flex" data-v-5cd71523${_scopeId}><label data-v-5cd71523${_scopeId}>Chi\u1EC1u cao</label></div><div style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$e$1), {
                modelValue: product.value.height,
                "onUpdate:modelValue": ($event) => product.value.height = $event,
                spellcheck: "false",
                class: "w-full",
                suffix: " Cm"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="col-6 p-0 align-items-center flex" data-v-5cd71523${_scopeId}><div class="w-11rem text-left flex pl-3" data-v-5cd71523${_scopeId}><label data-v-5cd71523${_scopeId}>Gi\xE1 b\xE1n</label></div><div style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$e$1), {
                modelValue: product.value.price,
                "onUpdate:modelValue": ($event) => product.value.price = $event,
                suffix: " VND",
                spellcheck: "false",
                class: "w-full"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div><div class="col-12 field p-0 flex align-items-center" data-v-5cd71523${_scopeId}><div class="w-11rem text-left flex" data-v-5cd71523${_scopeId}><label data-v-5cd71523${_scopeId}>Seo Title Meta</label></div><div style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(_component_InputText, {
                modelValue: product.value.seo_title,
                "onUpdate:modelValue": ($event) => product.value.seo_title = $event,
                spellcheck: "false",
                class: "w-full",
                placeholder: "Nh\u1EADp Title Meta"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="col-12 field p-0 flex align-items-center" data-v-5cd71523${_scopeId}><div class="w-11rem text-left flex" data-v-5cd71523${_scopeId}><label data-v-5cd71523${_scopeId}>M\xF4 t\u1EA3</label></div><div style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$8), {
                modelValue: product.value.des,
                "onUpdate:modelValue": ($event) => product.value.des = $event,
                rows: "5",
                cols: "30",
                spellcheck: "false",
                class: "w-full",
                id: "txtr2",
                placeholder: "Nh\u1EADp M\xF4 t\u1EA3"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div><div class="col-3 p-0" data-v-5cd71523${_scopeId}><div class="col-12 p-0" data-v-5cd71523${_scopeId}><div class="col-12 text-left p-0 py-2 format-center" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                label: "\u1EA2nh \u0111\u1EA1i di\u1EC7n",
                onClick: ($event) => chonanh("AnhLang"),
                icon: "pi pi-plus"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="col-12 format-center pr-0 pb-0 relative" data-v-5cd71523${_scopeId}><img${ssrRenderAttrs(mergeProps({
                class: "inputanh p-0",
                id: "logoLang",
                src: product.value.image ? unref(basedomainURL) + product.value.image : unref(basedomainURL) + "/Portals/Image/noimg.jpg"
              }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "\u1EA2nh \u0111\u1EA1i di\u1EC7n", void 0, { top: true })))} data-v-5cd71523${_scopeId}>`);
              if (files.value.length > 0 || product.value.image) {
                _push2(ssrRenderComponent(_component_Button, {
                  icon: "pi pi-times",
                  onClick: delAvatar,
                  class: "p-button-rounded absolute top-0 right-0"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><input class="ipnone" id="AnhLang" type="file" accept=".png,.jpg,.jpeg,.gif,.raw" data-v-5cd71523${_scopeId}></div><div class="col-12 pr-0 py-2" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$f), {
                chooseLabel: "\u1EA2nh Thumbnail",
                showUploadButton: false,
                showCancelButton: false,
                multiple: true,
                maxFileSize: 524288e3,
                accept: ".png,.jpg,.jpeg,.gif,.raw",
                onSelect: ($event) => handleFileUploadThum($event),
                onRemove: removeFile,
                invalidFileSizeMessage: "{0}: Dung l\u01B0\u1EE3ng File kh\xF4ng \u0111\u01B0\u1EE3c l\u1EDBn h\u01A1n {1}"
              }, {
                empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="p-0 m-0 text-500" data-v-5cd71523${_scopeId2}>K\xE9o th\u1EA3 ho\u1EB7c ch\u1ECDn File.</p>`);
                  } else {
                    return [
                      createVNode("p", { class: "p-0 m-0 text-500" }, "K\xE9o th\u1EA3 ho\u1EB7c ch\u1ECDn File.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
              if (product.value.file_path_save) {
                _push2(`<div class="col-12 p-0 py-2 flex" data-v-5cd71523${_scopeId}><div class="w-11rem text-left flex" data-v-5cd71523${_scopeId}></div><div style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" class="flex" data-v-5cd71523${_scopeId}><!--[-->`);
                ssrRenderList(product.value.file_path_save, (item2, index2) => {
                  _push2(`<div class="p-0 d-style-hover pb-2" style="${ssrRenderStyle({ "width": "100%", "border-radius": "10px" })}" data-v-5cd71523${_scopeId}><div class="w-full flex align-items-center" data-v-5cd71523${_scopeId}><div class="flex w-full text-900" data-v-5cd71523${_scopeId}><div class="align-items-center flex format-center pr-0 pb-0 relative" data-v-5cd71523${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(script$3), {
                    src: unref(basedomainURL) + item2,
                    alt: "",
                    width: "100",
                    height: "80",
                    style: { "object-fit": "contain", "border": "1px solid #ccc", "width": "100px", "height": "80px" },
                    preview: "",
                    class: "pr-2"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_Button, {
                    style: { "width": "16px", "height": "16px" },
                    icon: "pi pi-times",
                    class: "p-button-rounded absolute top-0 right-0",
                    onClick: ($event) => deleteFileH(item2)
                  }, null, _parent2, _scopeId));
                  _push2(`</div></div></div></div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="col-12 field relative" data-v-5cd71523${_scopeId}><div class="w-full flex text-left" data-v-5cd71523${_scopeId}><div class="w-11rem" data-v-5cd71523${_scopeId}> N\u1ED9i dung <span class="redsao" data-v-5cd71523${_scopeId}>(*)</span></div><div style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$d), null, null, _parent2, _scopeId));
              if (isSaveNews.value && product.value.contents == "" && !isFirstNews.value) {
                _push2(`<div style="${ssrRenderStyle({ "translate": "transform(-50%, -50%)", "top": "50%", "right": "50%" })}" class="absolute" data-v-5cd71523${_scopeId}>`);
                _push2(ssrRenderComponent(unref(script$2), {
                  style: { "width": "50px", "height": "50px" },
                  strokeWidth: "8",
                  fill: "var(--surface-ground)",
                  animationDuration: ".5s"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div><div class="field col-12 md:col-12 flex" data-v-5cd71523${_scopeId}><div class="w-11rem" data-v-5cd71523${_scopeId}></div>`);
              if (unref(v$).contents.$invalid && submitted.value || unref(v$).contents.$pending.$response) {
                _push2(`<small style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" class="col-10 p-error p-0" data-v-5cd71523${_scopeId}><span style="${ssrRenderStyle({ "color": "red" })}" class="col-12 p-0" data-v-5cd71523${_scopeId}>${ssrInterpolate(unref(v$).contents.required.$message.replace(
                  "Value",
                  product.value.product_type == 0 ? "N\u1ED9i dung s\u1EA3n ph\u1EA9m" : "N\u1ED9i dung s\u1EA3n ph\u1EA9m"
                ).replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"))}</span></small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex field col-12 md:col-12" data-v-5cd71523${_scopeId}><div class="col-7 p-0 flex align-items-center" data-v-5cd71523${_scopeId}><div class="col-4 p-0 flex align-items-center" data-v-5cd71523${_scopeId}><div class="w-11rem text-left" data-v-5cd71523${_scopeId}>H\xE0ng khuy\u1EBFn m\u1EA1i</div><div style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$4$2), {
                modelValue: product.value.is_promotions,
                "onUpdate:modelValue": ($event) => product.value.is_promotions = $event,
                class: "w-4rem lck-checked"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
              if (product.value.is_promotions) {
                _push2(`<div class="col-8 p-0 flex align-items-center" data-v-5cd71523${_scopeId}><div class="col-5 p-0 flex align-items-center" data-v-5cd71523${_scopeId}><div class="w-8rem text-left" data-v-5cd71523${_scopeId}>Ph\u1EA7n tr\u0103m</div><div style="${ssrRenderStyle({ "width": "calc(100% - 8rem)" })}" data-v-5cd71523${_scopeId}>`);
                _push2(ssrRenderComponent(unref(script$e$1), {
                  modelValue: _ctx.promotions_percent,
                  "onUpdate:modelValue": ($event) => _ctx.promotions_percent = $event,
                  class: "w-full",
                  suffix: " %"
                }, null, _parent2, _scopeId));
                _push2(`</div></div><div class="col-7 p-0 flex align-items-center" data-v-5cd71523${_scopeId}><div class="w-5rem text-left pl-3" data-v-5cd71523${_scopeId}>Gi\xE1 KM</div><div style="${ssrRenderStyle({ "width": "calc(100% - 5rem)" })}" data-v-5cd71523${_scopeId}>`);
                _push2(ssrRenderComponent(unref(script$e$1), {
                  modelValue: _ctx.promotions_percent,
                  "onUpdate:modelValue": ($event) => _ctx.promotions_percent = $event,
                  class: "w-full",
                  suffix: " VND"
                }, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="col-5 p-0 flex align-items-center" data-v-5cd71523${_scopeId}><div class="col-6 p-0 flex align-items-center" data-v-5cd71523${_scopeId}><div class="w-11rem text-left px-2" data-v-5cd71523${_scopeId}>H\xE0ng m\u1EDBi v\u1EC1</div><div style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$4$2), {
                modelValue: product.value.is_newproduct,
                "onUpdate:modelValue": ($event) => product.value.is_newproduct = $event,
                class: "w-4rem lck-checked"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="col-6 p-0 flex align-items-center" data-v-5cd71523${_scopeId}><div class="w-11rem text-left px-2" data-v-5cd71523${_scopeId}>S\u1EA3n ph\u1EA9m n\u1ED5i b\u1EADt</div><div style="${ssrRenderStyle({ "width": "calc(100% - 11rem)" })}" data-v-5cd71523${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$4$2), {
                modelValue: product.value.is_hot,
                "onUpdate:modelValue": ($event) => product.value.is_hot = $event,
                class: "w-4rem lck-checked"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div></div>`);
              if (product.value.product_type == 0) {
                _push2(`<div class="field col-12 md:col-12 flex align-items-center" data-v-5cd71523${_scopeId}><div class="w-11rem text-left flex" data-v-5cd71523${_scopeId}>Danh s\xE1ch Tags</div>`);
                _push2(ssrRenderComponent(unref(script), {
                  modelValue: product.value.key_words_save,
                  "onUpdate:modelValue": ($event) => product.value.key_words_save = $event,
                  display: "chip",
                  options: listTags.value,
                  optionLabel: "name",
                  optionValue: "code",
                  placeholder: "Ch\u1ECDn Tags",
                  style: { "width": "calc(100% - 11rem)" }
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="field col-12 md:col-12 flex py-2" data-v-5cd71523${_scopeId}><div class="col-4 p-0 flex align-items-center flex" data-v-5cd71523${_scopeId}><div class="w-11rem text-left" data-v-5cd71523${_scopeId}>STT</div>`);
              _push2(ssrRenderComponent(_component_InputText, {
                modelValue: product.value.is_order,
                "onUpdate:modelValue": ($event) => product.value.is_order = $event,
                spellcheck: "false",
                style: { "width": "calc(100% - 11rem)" }
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="col-4 p-0 flex align-items-center" data-v-5cd71523${_scopeId}><div class="w-11rem pl-2 text-left" data-v-5cd71523${_scopeId}>Tr\u1EA1ng th\xE1i</div>`);
              _push2(ssrRenderComponent(unref(script$i), {
                style: { "width": "calc(100% - 11rem)" },
                modelValue: product.value.status,
                "onUpdate:modelValue": ($event) => product.value.status = $event,
                options: options_status.value,
                optionLabel: "name",
                optionValue: "code",
                disabled: !isSaveNews.value
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div></form>`);
            } else {
              return [
                createVNode("form", null, [
                  createVNode("div", { class: "grid formgrid m-2" }, [
                    createVNode("div", { class: "field col-12 md:col-12 flex" }, [
                      createVNode("div", {
                        class: ["p-0", "col-9"]
                      }, [
                        createVNode("div", { class: "col-12 p-0 flex align-items-center" }, [
                          createVNode("div", { class: "w-11rem text-left" }, [
                            createTextVNode(toDisplayString(product.value.product_type == 0 ? "Ti\xEAu \u0111\u1EC1 s\u1EA3n ph\u1EA9m" : "Ti\xEAu \u0111\u1EC1 tin t\u1EE9c") + " ", 1),
                            createVNode("span", { class: "redsao pl-1" }, " (*)")
                          ]),
                          createVNode("div", { style: { "width": "calc(100% - 11rem)" } }, [
                            createVNode(unref(script$8), {
                              modelValue: product.value.title,
                              "onUpdate:modelValue": ($event) => product.value.title = $event,
                              autoResize: true,
                              rows: "1",
                              cols: "30",
                              spellcheck: "false",
                              class: ["w-full", { "p-invalid": unref(v$).title.$invalid && submitted.value }],
                              id: "txtr1",
                              placeholder: "Nh\u1EADp ti\xEAu \u0111\u1EC1 s\u1EA3n ph\u1EA9m"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                          ])
                        ]),
                        createVNode("div", { class: "col-12 p-0 field flex" }, [
                          createVNode("div", { class: "w-11rem" }),
                          unref(v$).title.$invalid && submitted.value || unref(v$).title.$pending.$response ? (openBlock(), createBlock("small", {
                            key: 0,
                            style: { "width": "calc(100% - 11rem)" }
                          }, [
                            createVNode("span", {
                              style: { "color": "red" },
                              class: "w-full"
                            }, toDisplayString(unref(v$).title.required.$message.replace(
                              "Value",
                              product.value.product_type == 0 ? "T\xEAn s\u1EA3n ph\u1EA9m" : "T\xEAn s\u1EA3n ph\u1EA9m"
                            ).replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng")), 1)
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "col-12 p-0 field flex align-items-center" }, [
                          createVNode("div", { class: "w-11rem text-left" }, [
                            createTextVNode(" T\xEAn URL "),
                            createVNode("span", { class: "redsao pl-1" }, " (*)")
                          ]),
                          createVNode("div", {
                            style: { "width": "calc(100% - 11rem)" },
                            class: "flex"
                          }, [
                            createVNode("div", { class: "p-inputgroup flex-1" }, [
                              createVNode(_component_InputText, {
                                modelValue: product.value.url_path,
                                "onUpdate:modelValue": ($event) => product.value.url_path = $event,
                                autoResize: true,
                                spellcheck: "false",
                                class: ["w-full", {
                                  "p-invalid": unref(v$).url_path.$invalid && submitted.value
                                }],
                                placeholder: "Nh\u1EADp URL"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              createVNode(_component_Button, {
                                label: "Ki\u1EC3m tra",
                                class: "w-7rem"
                              })
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-12 p-0 field flex" }, [
                          createVNode("div", { class: "w-11rem" }),
                          unref(v$).url_path.$invalid && submitted.value || unref(v$).url_path.$pending.$response ? (openBlock(), createBlock("small", {
                            key: 0,
                            style: { "width": "calc(100% - 11rem)" }
                          }, [
                            createVNode("span", {
                              style: { "color": "red" },
                              class: "w-full"
                            }, "URL Kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!")
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "col-12 field p-0 flex" }, [
                          createVNode("div", { class: "col-6 p-0 align-items-center flex" }, [
                            createVNode("div", { class: "w-11rem text-left flex" }, [
                              createVNode("label", null, "Chi\u1EC1u cao")
                            ]),
                            createVNode("div", { style: { "width": "calc(100% - 11rem)" } }, [
                              createVNode(unref(script$e$1), {
                                modelValue: product.value.height,
                                "onUpdate:modelValue": ($event) => product.value.height = $event,
                                spellcheck: "false",
                                class: "w-full",
                                suffix: " Cm"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          createVNode("div", { class: "col-6 p-0 align-items-center flex" }, [
                            createVNode("div", { class: "w-11rem text-left flex pl-3" }, [
                              createVNode("label", null, "Gi\xE1 b\xE1n")
                            ]),
                            createVNode("div", { style: { "width": "calc(100% - 11rem)" } }, [
                              createVNode(unref(script$e$1), {
                                modelValue: product.value.price,
                                "onUpdate:modelValue": ($event) => product.value.price = $event,
                                suffix: " VND",
                                spellcheck: "false",
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-12 field p-0 flex align-items-center" }, [
                          createVNode("div", { class: "w-11rem text-left flex" }, [
                            createVNode("label", null, "Seo Title Meta")
                          ]),
                          createVNode("div", { style: { "width": "calc(100% - 11rem)" } }, [
                            createVNode(_component_InputText, {
                              modelValue: product.value.seo_title,
                              "onUpdate:modelValue": ($event) => product.value.seo_title = $event,
                              spellcheck: "false",
                              class: "w-full",
                              placeholder: "Nh\u1EADp Title Meta"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "col-12 field p-0 flex align-items-center" }, [
                          createVNode("div", { class: "w-11rem text-left flex" }, [
                            createVNode("label", null, "M\xF4 t\u1EA3")
                          ]),
                          createVNode("div", { style: { "width": "calc(100% - 11rem)" } }, [
                            createVNode(unref(script$8), {
                              modelValue: product.value.des,
                              "onUpdate:modelValue": ($event) => product.value.des = $event,
                              rows: "5",
                              cols: "30",
                              spellcheck: "false",
                              class: "w-full",
                              id: "txtr2",
                              placeholder: "Nh\u1EADp M\xF4 t\u1EA3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-3 p-0" }, [
                        createVNode("div", { class: "col-12 p-0" }, [
                          createVNode("div", { class: "col-12 text-left p-0 py-2 format-center" }, [
                            createVNode(_component_Button, {
                              label: "\u1EA2nh \u0111\u1EA1i di\u1EC7n",
                              onClick: ($event) => chonanh("AnhLang"),
                              icon: "pi pi-plus"
                            }, null, 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "col-12 format-center pr-0 pb-0 relative" }, [
                            withDirectives(createVNode("img", {
                              onClick: ($event) => chonanh("AnhLang"),
                              class: "inputanh p-0",
                              id: "logoLang",
                              src: product.value.image ? unref(basedomainURL) + product.value.image : unref(basedomainURL) + "/Portals/Image/noimg.jpg"
                            }, null, 8, ["onClick", "src"]), [
                              [
                                _directive_tooltip,
                                "\u1EA2nh \u0111\u1EA1i di\u1EC7n",
                                void 0,
                                { top: true }
                              ]
                            ]),
                            files.value.length > 0 || product.value.image ? (openBlock(), createBlock(_component_Button, {
                              key: 0,
                              icon: "pi pi-times",
                              onClick: delAvatar,
                              class: "p-button-rounded absolute top-0 right-0"
                            })) : createCommentVNode("", true)
                          ]),
                          createVNode("input", {
                            class: "ipnone",
                            id: "AnhLang",
                            type: "file",
                            accept: ".png,.jpg,.jpeg,.gif,.raw",
                            onChange: handleFileUpload
                          }, null, 32)
                        ]),
                        createVNode("div", { class: "col-12 pr-0 py-2" }, [
                          createVNode(unref(script$f), {
                            chooseLabel: "\u1EA2nh Thumbnail",
                            showUploadButton: false,
                            showCancelButton: false,
                            multiple: true,
                            maxFileSize: 524288e3,
                            accept: ".png,.jpg,.jpeg,.gif,.raw",
                            onSelect: ($event) => handleFileUploadThum($event),
                            onRemove: removeFile,
                            invalidFileSizeMessage: "{0}: Dung l\u01B0\u1EE3ng File kh\xF4ng \u0111\u01B0\u1EE3c l\u1EDBn h\u01A1n {1}"
                          }, {
                            empty: withCtx(() => [
                              createVNode("p", { class: "p-0 m-0 text-500" }, "K\xE9o th\u1EA3 ho\u1EB7c ch\u1ECDn File.")
                            ]),
                            _: 1
                          }, 8, ["onSelect"])
                        ])
                      ])
                    ]),
                    product.value.file_path_save ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "col-12 p-0 py-2 flex"
                    }, [
                      createVNode("div", { class: "w-11rem text-left flex" }),
                      createVNode("div", {
                        style: { "width": "calc(100% - 11rem)" },
                        class: "flex"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(product.value.file_path_save, (item2, index2) => {
                          return openBlock(), createBlock("div", {
                            class: "p-0 d-style-hover pb-2",
                            style: { "width": "100%", "border-radius": "10px" },
                            key: index2
                          }, [
                            createVNode("div", { class: "w-full flex align-items-center" }, [
                              createVNode("div", { class: "flex w-full text-900" }, [
                                createVNode("div", { class: "align-items-center flex format-center pr-0 pb-0 relative" }, [
                                  createVNode(unref(script$3), {
                                    src: unref(basedomainURL) + item2,
                                    alt: "",
                                    width: "100",
                                    height: "80",
                                    style: { "object-fit": "contain", "border": "1px solid #ccc", "width": "100px", "height": "80px" },
                                    preview: "",
                                    class: "pr-2"
                                  }, null, 8, ["src"]),
                                  createVNode(_component_Button, {
                                    style: { "width": "16px", "height": "16px" },
                                    icon: "pi pi-times",
                                    class: "p-button-rounded absolute top-0 right-0",
                                    onClick: ($event) => deleteFileH(item2)
                                  }, null, 8, ["onClick"])
                                ])
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "col-12 field relative" }, [
                      createVNode("div", { class: "w-full flex text-left" }, [
                        createVNode("div", { class: "w-11rem" }, [
                          createTextVNode(" N\u1ED9i dung "),
                          createVNode("span", { class: "redsao" }, "(*)")
                        ]),
                        createVNode("div", { style: { "width": "calc(100% - 11rem)" } }, [
                          createVNode(unref(script$d)),
                          isSaveNews.value && product.value.contents == "" && !isFirstNews.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            style: { "translate": "transform(-50%, -50%)", "top": "50%", "right": "50%" },
                            class: "absolute"
                          }, [
                            createVNode(unref(script$2), {
                              style: { "width": "50px", "height": "50px" },
                              strokeWidth: "8",
                              fill: "var(--surface-ground)",
                              animationDuration: ".5s"
                            })
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12 flex" }, [
                      createVNode("div", { class: "w-11rem" }),
                      unref(v$).contents.$invalid && submitted.value || unref(v$).contents.$pending.$response ? (openBlock(), createBlock("small", {
                        key: 0,
                        style: { "width": "calc(100% - 11rem)" },
                        class: "col-10 p-error p-0"
                      }, [
                        createVNode("span", {
                          style: { "color": "red" },
                          class: "col-12 p-0"
                        }, toDisplayString(unref(v$).contents.required.$message.replace(
                          "Value",
                          product.value.product_type == 0 ? "N\u1ED9i dung s\u1EA3n ph\u1EA9m" : "N\u1ED9i dung s\u1EA3n ph\u1EA9m"
                        ).replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng")), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex field col-12 md:col-12" }, [
                      createVNode("div", { class: "col-7 p-0 flex align-items-center" }, [
                        createVNode("div", { class: "col-4 p-0 flex align-items-center" }, [
                          createVNode("div", { class: "w-11rem text-left" }, "H\xE0ng khuy\u1EBFn m\u1EA1i"),
                          createVNode("div", { style: { "width": "calc(100% - 11rem)" } }, [
                            createVNode(unref(script$4$2), {
                              modelValue: product.value.is_promotions,
                              "onUpdate:modelValue": ($event) => product.value.is_promotions = $event,
                              class: "w-4rem lck-checked"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        product.value.is_promotions ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "col-8 p-0 flex align-items-center"
                        }, [
                          createVNode("div", { class: "col-5 p-0 flex align-items-center" }, [
                            createVNode("div", { class: "w-8rem text-left" }, "Ph\u1EA7n tr\u0103m"),
                            createVNode("div", { style: { "width": "calc(100% - 8rem)" } }, [
                              createVNode(unref(script$e$1), {
                                modelValue: _ctx.promotions_percent,
                                "onUpdate:modelValue": ($event) => _ctx.promotions_percent = $event,
                                class: "w-full",
                                suffix: " %"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          createVNode("div", { class: "col-7 p-0 flex align-items-center" }, [
                            createVNode("div", { class: "w-5rem text-left pl-3" }, "Gi\xE1 KM"),
                            createVNode("div", { style: { "width": "calc(100% - 5rem)" } }, [
                              createVNode(unref(script$e$1), {
                                modelValue: _ctx.promotions_percent,
                                "onUpdate:modelValue": ($event) => _ctx.promotions_percent = $event,
                                class: "w-full",
                                suffix: " VND"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "col-5 p-0 flex align-items-center" }, [
                        createVNode("div", { class: "col-6 p-0 flex align-items-center" }, [
                          createVNode("div", { class: "w-11rem text-left px-2" }, "H\xE0ng m\u1EDBi v\u1EC1"),
                          createVNode("div", { style: { "width": "calc(100% - 11rem)" } }, [
                            createVNode(unref(script$4$2), {
                              modelValue: product.value.is_newproduct,
                              "onUpdate:modelValue": ($event) => product.value.is_newproduct = $event,
                              class: "w-4rem lck-checked"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "col-6 p-0 flex align-items-center" }, [
                          createVNode("div", { class: "w-11rem text-left px-2" }, "S\u1EA3n ph\u1EA9m n\u1ED5i b\u1EADt"),
                          createVNode("div", { style: { "width": "calc(100% - 11rem)" } }, [
                            createVNode(unref(script$4$2), {
                              modelValue: product.value.is_hot,
                              "onUpdate:modelValue": ($event) => product.value.is_hot = $event,
                              class: "w-4rem lck-checked"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ])
                    ]),
                    product.value.product_type == 0 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "field col-12 md:col-12 flex align-items-center"
                    }, [
                      createVNode("div", { class: "w-11rem text-left flex" }, "Danh s\xE1ch Tags"),
                      createVNode(unref(script), {
                        modelValue: product.value.key_words_save,
                        "onUpdate:modelValue": ($event) => product.value.key_words_save = $event,
                        display: "chip",
                        options: listTags.value,
                        optionLabel: "name",
                        optionValue: "code",
                        placeholder: "Ch\u1ECDn Tags",
                        style: { "width": "calc(100% - 11rem)" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "field col-12 md:col-12 flex py-2" }, [
                      createVNode("div", { class: "col-4 p-0 flex align-items-center flex" }, [
                        createVNode("div", { class: "w-11rem text-left" }, "STT"),
                        createVNode(_component_InputText, {
                          modelValue: product.value.is_order,
                          "onUpdate:modelValue": ($event) => product.value.is_order = $event,
                          spellcheck: "false",
                          style: { "width": "calc(100% - 11rem)" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "col-4 p-0 flex align-items-center" }, [
                        createVNode("div", { class: "w-11rem pl-2 text-left" }, "Tr\u1EA1ng th\xE1i"),
                        createVNode(unref(script$i), {
                          style: { "width": "calc(100% - 11rem)" },
                          modelValue: product.value.status,
                          "onUpdate:modelValue": ($event) => product.value.status = $event,
                          options: options_status.value,
                          optionLabel: "name",
                          optionValue: "code",
                          disabled: !isSaveNews.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled"])
                      ])
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/product/productmain/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5cd71523"]]);

export { index as default };
//# sourceMappingURL=index-7e3f477a.mjs.map
