import { ref, inject, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext, resolveDirective, createElementBlock, createElementVNode, withDirectives, resolveDynamicComponent, Fragment, renderList, resolveComponent, Transition } from 'vue';
import { f as useStyle, _ as _export_sfc, e as useRuntimeConfig, D as DomHandler, Z as ZIndexUtils, s as script$6$1, R as Ripple, U as UniqueComponentId } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { F as FocusTrap, b as script$l } from './paginator.esm-79cc5f95.mjs';
import { s as script$1$1, a as script$9 } from './index.esm-c4d8e664.mjs';
import { s as script$1$2, a as script$8 } from './index.esm-a1c6b8ad.mjs';
import { s as script$7 } from './index.esm-2c744238.mjs';
import { s as script$5, a as script$2$1 } from './dataview.esm-c98c1808.mjs';
import { s as script$6 } from './toolbar.esm-5b0c3172.mjs';
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
import './sidebar.esm-b64f0d19.mjs';

var styles = "\n.p-galleria-content {\n    display: flex;\n    flex-direction: column;\n}\n\n.p-galleria-item-wrapper {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n.p-galleria-item-container {\n    position: relative;\n    display: flex;\n    height: 100%;\n}\n\n.p-galleria-item-nav {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n\n.p-galleria-item-prev {\n    left: 0;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.p-galleria-item-next {\n    right: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-galleria-item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n.p-galleria-item-nav-onhover .p-galleria-item-nav {\n    pointer-events: none;\n    opacity: 0;\n    transition: opacity 0.2s ease-in-out;\n}\n\n.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {\n    pointer-events: all;\n    opacity: 1;\n}\n\n.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {\n    pointer-events: none;\n}\n\n.p-galleria-caption {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n}\n\n/* Thumbnails */\n.p-galleria-thumbnail-wrapper {\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    flex-shrink: 0;\n}\n\n.p-galleria-thumbnail-prev,\n.p-galleria-thumbnail-next {\n    align-self: center;\n    flex: 0 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    position: relative;\n}\n\n.p-galleria-thumbnail-prev span,\n.p-galleria-thumbnail-next span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.p-galleria-thumbnail-container {\n    display: flex;\n    flex-direction: row;\n}\n\n.p-galleria-thumbnail-items-container {\n    overflow: hidden;\n    width: 100%;\n}\n\n.p-galleria-thumbnail-items {\n    display: flex;\n}\n\n.p-galleria-thumbnail-item {\n    overflow: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    opacity: 0.5;\n}\n\n.p-galleria-thumbnail-item:hover {\n    opacity: 1;\n    transition: opacity 0.3s;\n}\n\n.p-galleria-thumbnail-item-current {\n    opacity: 1;\n}\n\n/* Positions */\n/* Thumbnails */\n.p-galleria-thumbnails-left .p-galleria-content,\n.p-galleria-thumbnails-right .p-galleria-content {\n    flex-direction: row;\n}\n\n.p-galleria-thumbnails-left .p-galleria-item-wrapper,\n.p-galleria-thumbnails-right .p-galleria-item-wrapper {\n    flex-direction: row;\n}\n\n.p-galleria-thumbnails-left .p-galleria-item-wrapper,\n.p-galleria-thumbnails-top .p-galleria-item-wrapper {\n    order: 2;\n}\n\n.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,\n.p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {\n    order: 1;\n}\n\n.p-galleria-thumbnails-left .p-galleria-thumbnail-container,\n.p-galleria-thumbnails-right .p-galleria-thumbnail-container {\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.p-galleria-thumbnails-left .p-galleria-thumbnail-items,\n.p-galleria-thumbnails-right .p-galleria-thumbnail-items {\n    flex-direction: column;\n    height: 100%;\n}\n\n/* Indicators */\n.p-galleria-indicators {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-galleria-indicator > button {\n    display: inline-flex;\n    align-items: center;\n}\n\n.p-galleria-indicators-left .p-galleria-item-wrapper,\n.p-galleria-indicators-right .p-galleria-item-wrapper {\n    flex-direction: row;\n    align-items: center;\n}\n\n.p-galleria-indicators-left .p-galleria-item-container,\n.p-galleria-indicators-top .p-galleria-item-container {\n    order: 2;\n}\n\n.p-galleria-indicators-left .p-galleria-indicators,\n.p-galleria-indicators-top .p-galleria-indicators {\n    order: 1;\n}\n\n.p-galleria-indicators-left .p-galleria-indicators,\n.p-galleria-indicators-right .p-galleria-indicators {\n    flex-direction: column;\n}\n\n.p-galleria-indicator-onitem .p-galleria-indicators {\n    position: absolute;\n    display: flex;\n}\n\n.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {\n    top: 0;\n    left: 0;\n    width: 100%;\n    align-items: flex-start;\n}\n\n.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {\n    right: 0;\n    top: 0;\n    height: 100%;\n    align-items: flex-end;\n}\n\n.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    align-items: flex-end;\n}\n\n.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {\n    left: 0;\n    top: 0;\n    height: 100%;\n    align-items: flex-start;\n}\n\n/* FullScreen */\n.p-galleria-mask {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-galleria-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n\n.p-galleria-mask .p-galleria-item-nav {\n    position: fixed;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n\n/* Animation */\n.p-galleria-enter-active {\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-galleria-leave-active {\n    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.p-galleria-enter-from,\n.p-galleria-leave-to {\n    opacity: 0;\n    transform: scale(0.7);\n}\n\n.p-galleria-enter-active .p-galleria-item-nav {\n    opacity: 0;\n}\n\n/* Keyboard Support */\n.p-items-hidden .p-galleria-thumbnail-item {\n    visibility: hidden;\n}\n\n.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {\n    visibility: visible;\n}\n";
var classes = {
  mask: function mask(_ref) {
    var instance = _ref.instance;
    return ["p-galleria-mask p-component-overlay p-component-overlay-enter", {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }];
  },
  root: function root(_ref2) {
    var instance = _ref2.instance;
    var thumbnailsPosClass = instance.$attrs.showThumbnails && instance.getPositionClass("p-galleria-thumbnails", instance.$attrs.thumbnailsPosition);
    var indicatorPosClass = instance.$attrs.showIndicators && instance.getPositionClass("p-galleria-indicators", instance.$attrs.indicatorsPosition);
    return ["p-galleria p-component", {
      "p-galleria-fullscreen": instance.$attrs.fullScreen,
      "p-galleria-indicator-onitem": instance.$attrs.showIndicatorsOnItem,
      "p-galleria-item-nav-onhover": instance.$attrs.showItemNavigatorsOnHover && !instance.$attrs.fullScreen
    }, thumbnailsPosClass, indicatorPosClass];
  },
  closeButton: "p-galleria-close p-link",
  closeIcon: "p-galleria-close-icon",
  header: "p-galleria-header",
  content: "p-galleria-content",
  footer: "p-galleria-footer",
  itemWrapper: "p-galleria-item-wrapper",
  itemContainer: "p-galleria-item-container",
  previousItemButton: function previousItemButton(_ref3) {
    var instance = _ref3.instance;
    return ["p-galleria-item-prev p-galleria-item-nav p-link", {
      "p-disabled": instance.isNavBackwardDisabled()
    }];
  },
  previousItemIcon: "p-galleria-item-prev-icon",
  item: "p-galleria-item",
  nextItemButton: function nextItemButton(_ref4) {
    var instance = _ref4.instance;
    return ["p-galleria-item-next p-galleria-item-nav p-link", {
      "p-disabled": instance.isNavForwardDisabled()
    }];
  },
  nextItemIcon: "p-galleria-item-next-icon",
  caption: "p-galleria-caption",
  indicators: "p-galleria-indicators p-reset",
  indicator: function indicator(_ref5) {
    var instance = _ref5.instance, index2 = _ref5.index;
    return ["p-galleria-indicator", {
      "p-highlight": instance.isIndicatorItemActive(index2)
    }];
  },
  indicatorButton: "p-link",
  thumbnailWrapper: "p-galleria-thumbnail-wrapper",
  thumbnailContainer: "p-galleria-thumbnail-container",
  previousThumbnailButton: function previousThumbnailButton(_ref6) {
    var instance = _ref6.instance;
    return ["p-galleria-thumbnail-prev p-link", {
      "p-disabled": instance.isNavBackwardDisabled()
    }];
  },
  previousThumbnailIcon: "p-galleria-thumbnail-prev-icon",
  thumbnailItemsContainer: "p-galleria-thumbnail-items-container",
  thumbnailItems: "p-galleria-thumbnail-items",
  thumbnailItem: function thumbnailItem(_ref7) {
    var instance = _ref7.instance, index2 = _ref7.index, activeIndex2 = _ref7.activeIndex;
    return ["p-galleria-thumbnail-item", {
      "p-galleria-thumbnail-item-current": activeIndex2 === index2,
      "p-galleria-thumbnail-item-active": instance.isItemActive(index2),
      "p-galleria-thumbnail-item-start": instance.firstItemAciveIndex() === index2,
      "p-galleria-thumbnail-item-end": instance.lastItemActiveIndex() === index2
    }];
  },
  thumbnailItemContent: "p-galleria-thumbnail-item-content",
  nextThumbnailButton: function nextThumbnailButton(_ref8) {
    var instance = _ref8.instance;
    return ["p-galleria-thumbnail-next p-link", {
      "p-disabled": instance.isNavForwardDisabled()
    }];
  },
  nextThumbnailIcon: "p-galleria-thumbnail-next-icon"
};
var _useStyle = useStyle(styles, {
  name: "galleria",
  manual: true
}), loadStyle = _useStyle.load;
var script$4 = {
  name: "BaseGalleria",
  "extends": script$6$1,
  props: {
    id: {
      type: String,
      "default": null
    },
    value: {
      type: Array,
      "default": null
    },
    activeIndex: {
      type: Number,
      "default": 0
    },
    fullScreen: {
      type: Boolean,
      "default": false
    },
    visible: {
      type: Boolean,
      "default": false
    },
    numVisible: {
      type: Number,
      "default": 3
    },
    responsiveOptions: {
      type: Array,
      "default": null
    },
    showItemNavigators: {
      type: Boolean,
      "default": false
    },
    showThumbnailNavigators: {
      type: Boolean,
      "default": true
    },
    showItemNavigatorsOnHover: {
      type: Boolean,
      "default": false
    },
    changeItemOnIndicatorHover: {
      type: Boolean,
      "default": false
    },
    circular: {
      type: Boolean,
      "default": false
    },
    autoPlay: {
      type: Boolean,
      "default": false
    },
    transitionInterval: {
      type: Number,
      "default": 4e3
    },
    showThumbnails: {
      type: Boolean,
      "default": true
    },
    thumbnailsPosition: {
      type: String,
      "default": "bottom"
    },
    verticalThumbnailViewPortHeight: {
      type: String,
      "default": "300px"
    },
    showIndicators: {
      type: Boolean,
      "default": false
    },
    showIndicatorsOnItem: {
      type: Boolean,
      "default": false
    },
    indicatorsPosition: {
      type: String,
      "default": "bottom"
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    maskClass: {
      type: String,
      "default": null
    },
    containerStyle: {
      type: null,
      "default": null
    },
    containerClass: {
      type: null,
      "default": null
    },
    containerProps: {
      type: null,
      "default": null
    },
    prevButtonProps: {
      type: null,
      "default": null
    },
    nextButtonProps: {
      type: null,
      "default": null
    }
  },
  css: {
    classes,
    loadStyle
  },
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script$3 = {
  name: "GalleriaItem",
  hostName: "Galleria",
  "extends": script$6$1,
  emits: ["start-slideshow", "stop-slideshow", "update:activeIndex"],
  props: {
    circular: {
      type: Boolean,
      "default": false
    },
    activeIndex: {
      type: Number,
      "default": 0
    },
    value: {
      type: Array,
      "default": null
    },
    showItemNavigators: {
      type: Boolean,
      "default": true
    },
    showIndicators: {
      type: Boolean,
      "default": true
    },
    slideShowActive: {
      type: Boolean,
      "default": true
    },
    changeItemOnIndicatorHover: {
      type: Boolean,
      "default": true
    },
    autoPlay: {
      type: Boolean,
      "default": false
    },
    templates: {
      type: null,
      "default": null
    },
    id: {
      type: String,
      "default": null
    }
  },
  mounted: function mounted() {
    if (this.autoPlay) {
      this.$emit("start-slideshow");
    }
  },
  methods: {
    next: function next() {
      var nextItemIndex = this.activeIndex + 1;
      var activeIndex2 = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
      this.$emit("update:activeIndex", activeIndex2);
    },
    prev: function prev() {
      var prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
      var activeIndex2 = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.$emit("update:activeIndex", activeIndex2);
    },
    stopSlideShow: function stopSlideShow() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.$emit("stop-slideshow");
      }
    },
    navBackward: function navBackward(e) {
      this.stopSlideShow();
      this.prev();
      if (e && e.cancelable) {
        e.preventDefault();
      }
    },
    navForward: function navForward(e) {
      this.stopSlideShow();
      this.next();
      if (e && e.cancelable) {
        e.preventDefault();
      }
    },
    onIndicatorClick: function onIndicatorClick(index2) {
      this.stopSlideShow();
      this.$emit("update:activeIndex", index2);
    },
    onIndicatorMouseEnter: function onIndicatorMouseEnter(index2) {
      if (this.changeItemOnIndicatorHover) {
        this.stopSlideShow();
        this.$emit("update:activeIndex", index2);
      }
    },
    onIndicatorKeyDown: function onIndicatorKeyDown(event, index2) {
      switch (event.code) {
        case "Enter":
        case "Space":
          this.stopSlideShow();
          this.$emit("update:activeIndex", index2);
          event.preventDefault();
          break;
        case "ArrowDown":
        case "ArrowUp":
          event.preventDefault();
          break;
      }
    },
    isIndicatorItemActive: function isIndicatorItemActive(index2) {
      return this.activeIndex === index2;
    },
    isNavBackwardDisabled: function isNavBackwardDisabled() {
      return !this.circular && this.activeIndex === 0;
    },
    isNavForwardDisabled: function isNavForwardDisabled() {
      return !this.circular && this.activeIndex === this.value.length - 1;
    },
    ariaSlideNumber: function ariaSlideNumber(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g, value) : void 0;
    },
    ariaPageLabel: function ariaPageLabel(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : void 0;
    }
  },
  computed: {
    activeItem: function activeItem() {
      return this.value[this.activeIndex];
    },
    ariaSlideLabel: function ariaSlideLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slide : void 0;
    }
  },
  components: {
    ChevronLeftIcon: script$1$2,
    ChevronRightIcon: script$7
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$3 = ["disabled"];
var _hoisted_2$2 = ["id", "aria-label", "aria-roledescription"];
var _hoisted_3$2 = ["disabled"];
var _hoisted_4$1 = ["aria-label", "aria-selected", "aria-controls", "onClick", "onMouseenter", "onKeydown", "data-p-highlight"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("itemWrapper")
  }, _ctx.ptm("itemWrapper")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("itemContainer")
  }, _ctx.ptm("itemContainer")), [$props.showItemNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    type: "button",
    "class": _ctx.cx("previousItemButton"),
    onClick: _cache[0] || (_cache[0] = function($event) {
      return $options.navBackward($event);
    }),
    disabled: $options.isNavBackwardDisabled()
  }, _ctx.ptm("previousItemButton")), [(openBlock(), createBlock(resolveDynamicComponent($props.templates.previousitemicon || "ChevronLeftIcon"), mergeProps({
    "class": _ctx.cx("previousItemIcon")
  }, _ctx.ptm("previousItemIcon")), null, 16, ["class"]))], 16, _hoisted_1$3)), [[_directive_ripple]]) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    id: $props.id + "_item_" + $props.activeIndex,
    "class": _ctx.cx("item"),
    role: "group",
    "aria-label": $options.ariaSlideNumber($props.activeIndex + 1),
    "aria-roledescription": $options.ariaSlideLabel
  }, _ctx.ptm("item")), [$props.templates.item ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
    key: 0,
    item: $options.activeItem
  }, null, 8, ["item"])) : createCommentVNode("", true)], 16, _hoisted_2$2), $props.showItemNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 1,
    type: "button",
    "class": _ctx.cx("nextItemButton"),
    onClick: _cache[1] || (_cache[1] = function($event) {
      return $options.navForward($event);
    }),
    disabled: $options.isNavForwardDisabled()
  }, _ctx.ptm("nextItemButton")), [(openBlock(), createBlock(resolveDynamicComponent($props.templates.nextitemicon || "ChevronRightIcon"), mergeProps({
    "class": _ctx.cx("nextItemIcon")
  }, _ctx.ptm("nextItemIcon")), null, 16, ["class"]))], 16, _hoisted_3$2)), [[_directive_ripple]]) : createCommentVNode("", true), $props.templates["caption"] ? (openBlock(), createElementBlock("div", mergeProps({
    key: 2,
    "class": _ctx.cx("caption")
  }, _ctx.ptm("caption")), [$props.templates.caption ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.caption), {
    key: 0,
    item: $options.activeItem
  }, null, 8, ["item"])) : createCommentVNode("", true)], 16)) : createCommentVNode("", true)], 16), $props.showIndicators ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 0,
    "class": _ctx.cx("indicators")
  }, _ctx.ptm("indicators")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.value, function(item, index2) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: "p-galleria-indicator-".concat(index2),
      "class": _ctx.cx("indicator", {
        index: index2
      }),
      tabindex: "0",
      "aria-label": $options.ariaPageLabel(index2 + 1),
      "aria-selected": $props.activeIndex === index2,
      "aria-controls": $props.id + "_item_" + index2,
      onClick: function onClick($event) {
        return $options.onIndicatorClick(index2);
      },
      onMouseenter: function onMouseenter($event) {
        return $options.onIndicatorMouseEnter(index2);
      },
      onKeydown: function onKeydown($event) {
        return $options.onIndicatorKeyDown($event, index2);
      }
    }, _ctx.ptm("indicator"), {
      "data-p-highlight": $options.isIndicatorItemActive(index2)
    }), [!$props.templates["indicator"] ? (openBlock(), createElementBlock("button", mergeProps({
      key: 0,
      type: "button",
      tabindex: "-1",
      "class": _ctx.cx("indicatorButton")
    }, _ctx.ptm("indicatorButton")), null, 16)) : createCommentVNode("", true), $props.templates.indicator ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.indicator), {
      key: 1,
      index: index2
    }, null, 8, ["index"])) : createCommentVNode("", true)], 16, _hoisted_4$1);
  }), 128))], 16)) : createCommentVNode("", true)], 16);
}
script$3.render = render$3;
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
var script$2 = {
  name: "GalleriaThumbnails",
  hostName: "Galleria",
  "extends": script$6$1,
  emits: ["stop-slideshow", "update:activeIndex"],
  props: {
    containerId: {
      type: String,
      "default": null
    },
    value: {
      type: Array,
      "default": null
    },
    numVisible: {
      type: Number,
      "default": 3
    },
    activeIndex: {
      type: Number,
      "default": 0
    },
    isVertical: {
      type: Boolean,
      "default": false
    },
    slideShowActive: {
      type: Boolean,
      "default": false
    },
    circular: {
      type: Boolean,
      "default": false
    },
    responsiveOptions: {
      type: Array,
      "default": null
    },
    contentHeight: {
      type: String,
      "default": "300px"
    },
    showThumbnailNavigators: {
      type: Boolean,
      "default": true
    },
    templates: {
      type: null,
      "default": null
    },
    prevButtonProps: {
      type: null,
      "default": null
    },
    nextButtonProps: {
      type: null,
      "default": null
    }
  },
  startPos: null,
  thumbnailsStyle: null,
  sortedResponsiveOptions: null,
  data: function data() {
    return {
      d_numVisible: this.numVisible,
      d_oldNumVisible: this.numVisible,
      d_activeIndex: this.activeIndex,
      d_oldActiveItemIndex: this.activeIndex,
      totalShiftedItems: 0,
      page: 0
    };
  },
  watch: {
    numVisible: function numVisible(newValue, oldValue) {
      this.d_numVisible = newValue;
      this.d_oldNumVisible = oldValue;
    },
    activeIndex: function activeIndex(newValue, oldValue) {
      this.d_activeIndex = newValue;
      this.d_oldActiveItemIndex = oldValue;
    }
  },
  mounted: function mounted2() {
    this.createStyle();
    this.calculatePosition();
    if (this.responsiveOptions) {
      this.bindDocumentListeners();
    }
  },
  updated: function updated() {
    var totalShiftedItems = this.totalShiftedItems;
    if (this.d_oldNumVisible !== this.d_numVisible || this.d_oldActiveItemIndex !== this.d_activeIndex) {
      if (this.d_activeIndex <= this.getMedianItemIndex()) {
        totalShiftedItems = 0;
      } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this.d_activeIndex) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (this.value.length - this.d_numVisible < this.d_activeIndex && this.d_numVisible % 2 === 0) {
        totalShiftedItems = this.d_activeIndex * -1 + this.getMedianItemIndex() + 1;
      } else {
        totalShiftedItems = this.d_activeIndex * -1 + this.getMedianItemIndex();
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
      }
      this.$refs.itemsContainer.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
      if (this.d_oldActiveItemIndex !== this.d_activeIndex) {
        document.body.setAttribute("data-p-items-hidden", "false");
        !this.isUnstyled && DomHandler.removeClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transition = "transform 500ms ease 0s";
      }
      this.d_oldActiveItemIndex = this.d_activeIndex;
      this.d_oldNumVisible = this.d_numVisible;
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.thumbnailsStyle) {
      this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
    }
  },
  methods: {
    step: function step(dir) {
      var totalShiftedItems = this.totalShiftedItems + dir;
      if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (dir > 0 && totalShiftedItems > 0) {
        totalShiftedItems = 0;
      }
      if (this.circular) {
        if (dir < 0 && this.value.length - 1 === this.d_activeIndex) {
          totalShiftedItems = 0;
        } else if (dir > 0 && this.d_activeIndex === 0) {
          totalShiftedItems = this.d_numVisible - this.value.length;
        }
      }
      if (this.$refs.itemsContainer) {
        document.body.setAttribute("data-p-items-hidden", "false");
        !this.isUnstyled && DomHandler.removeClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
        this.$refs.itemsContainer.style.transition = "transform 500ms ease 0s";
      }
      this.totalShiftedItems = totalShiftedItems;
    },
    stopSlideShow: function stopSlideShow2() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.$emit("stop-slideshow");
      }
    },
    getMedianItemIndex: function getMedianItemIndex() {
      var index2 = Math.floor(this.d_numVisible / 2);
      return this.d_numVisible % 2 ? index2 : index2 - 1;
    },
    navBackward: function navBackward2(e) {
      this.stopSlideShow();
      var prevItemIndex = this.d_activeIndex !== 0 ? this.d_activeIndex - 1 : 0;
      var diff = prevItemIndex + this.totalShiftedItems;
      if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
        this.step(1);
      }
      var activeIndex2 = this.circular && this.d_activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.$emit("update:activeIndex", activeIndex2);
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    navForward: function navForward2(e) {
      this.stopSlideShow();
      var nextItemIndex = this.d_activeIndex === this.value.length - 1 ? this.value.length - 1 : this.d_activeIndex + 1;
      if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
        this.step(-1);
      }
      var activeIndex2 = this.circular && this.value.length - 1 === this.d_activeIndex ? 0 : nextItemIndex;
      this.$emit("update:activeIndex", activeIndex2);
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    onItemClick: function onItemClick(index2) {
      this.stopSlideShow();
      var selectedItemIndex = index2;
      if (selectedItemIndex !== this.d_activeIndex) {
        var diff = selectedItemIndex + this.totalShiftedItems;
        var dir = 0;
        if (selectedItemIndex < this.d_activeIndex) {
          dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();
          if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
            this.step(dir);
          }
        } else {
          dir = this.getMedianItemIndex() - diff;
          if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
            this.step(dir);
          }
        }
        this.$emit("update:activeIndex", selectedItemIndex);
      }
    },
    onThumbnailKeydown: function onThumbnailKeydown(event, index2) {
      if (event.code === "Enter" || event.code === "Space") {
        this.onItemClick(index2);
        event.preventDefault();
      }
      switch (event.code) {
        case "ArrowRight":
          this.onRightKey();
          break;
        case "ArrowLeft":
          this.onLeftKey();
          break;
        case "Home":
          this.onHomeKey();
          event.preventDefault();
          break;
        case "End":
          this.onEndKey();
          event.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault();
          break;
        case "Tab":
          this.onTabKey();
          break;
      }
    },
    onRightKey: function onRightKey() {
      var indicators = DomHandler.find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, activeIndex2 + 1 === indicators.length ? indicators.length - 1 : activeIndex2 + 1);
    },
    onLeftKey: function onLeftKey() {
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, activeIndex2 - 1 <= 0 ? 0 : activeIndex2 - 1);
    },
    onHomeKey: function onHomeKey() {
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, 0);
    },
    onEndKey: function onEndKey() {
      var indicators = DomHandler.find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, indicators.length - 1);
    },
    onTabKey: function onTabKey() {
      var indicators = _toConsumableArray(DomHandler.find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]'));
      var highlightedIndex = indicators.findIndex(function(ind) {
        return DomHandler.getAttribute(ind, "data-p-active") === true;
      });
      var activeIndicator = DomHandler.findSingle(this.$refs.itemsContainer, '[tabindex="0"]');
      var activeIndex2 = indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
      indicators[activeIndex2].children[0].tabIndex = "-1";
      indicators[highlightedIndex].children[0].tabIndex = "0";
    },
    findFocusedIndicatorIndex: function findFocusedIndicatorIndex() {
      var indicators = _toConsumableArray(DomHandler.find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]'));
      var activeIndicator = DomHandler.findSingle(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"] > [tabindex="0"]');
      return indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
    },
    changedFocusedIndicator: function changedFocusedIndicator(prevInd, nextInd) {
      var indicators = DomHandler.find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');
      indicators[prevInd].children[0].tabIndex = "-1";
      indicators[nextInd].children[0].tabIndex = "0";
      indicators[nextInd].children[0].focus();
    },
    onTransitionEnd: function onTransitionEnd() {
      if (this.$refs.itemsContainer) {
        document.body.setAttribute("data-p-items-hidden", "true");
        !this.isUnstyled && DomHandler.addClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transition = "";
      }
    },
    onTouchStart: function onTouchStart(e) {
      var touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    },
    onTouchMove: function onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    onTouchEnd: function onTouchEnd(e) {
      var touchobj = e.changedTouches[0];
      if (this.isVertical) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    },
    changePageOnTouch: function changePageOnTouch(e, diff) {
      if (diff < 0) {
        this.navForward(e);
      } else {
        this.navBackward(e);
      }
    },
    getTotalPageNumber: function getTotalPageNumber() {
      return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
    },
    createStyle: function createStyle() {
      if (!this.thumbnailsStyle) {
        this.thumbnailsStyle = document.createElement("style");
        this.thumbnailsStyle.type = "text/css";
        document.body.appendChild(this.thumbnailsStyle);
      }
      var innerHTML = "\n                #".concat(this.containerId, ' [data-pc-section="thumbnailitem"] {\n                    flex: 1 0 ').concat(100 / this.d_numVisible, "%\n                }\n            ");
      if (this.responsiveOptions && !this.isUnstyled) {
        this.sortedResponsiveOptions = _toConsumableArray(this.responsiveOptions);
        this.sortedResponsiveOptions.sort(function(data1, data22) {
          var value1 = data1.breakpoint;
          var value2 = data22.breakpoint;
          var result = null;
          if (value1 == null && value2 != null)
            result = -1;
          else if (value1 != null && value2 == null)
            result = 1;
          else if (value1 == null && value2 == null)
            result = 0;
          else if (typeof value1 === "string" && typeof value2 === "string")
            result = value1.localeCompare(value2, void 0, {
              numeric: true
            });
          else
            result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return -1 * result;
        });
        for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
          var res = this.sortedResponsiveOptions[i];
          innerHTML += "\n                        @media screen and (max-width: ".concat(res.breakpoint, ") {\n                            #").concat(this.containerId, " .p-galleria-thumbnail-item {\n                                flex: 1 0 ").concat(100 / res.numVisible, "%\n                            }\n                        }\n                    ");
        }
      }
      this.thumbnailsStyle.innerHTML = innerHTML;
    },
    calculatePosition: function calculatePosition() {
      if (this.$refs.itemsContainer && this.sortedResponsiveOptions) {
        var windowWidth = window.innerWidth;
        var matchedResponsiveData = {
          numVisible: this.numVisible
        };
        for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
          var res = this.sortedResponsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }
        if (this.d_numVisible !== matchedResponsiveData.numVisible) {
          this.d_numVisible = matchedResponsiveData.numVisible;
        }
      }
    },
    bindDocumentListeners: function bindDocumentListeners() {
      var _this = this;
      if (!this.documentResizeListener) {
        this.documentResizeListener = function() {
          _this.calculatePosition();
        };
        window.addEventListener("resize", this.documentResizeListener);
      }
    },
    unbindDocumentListeners: function unbindDocumentListeners() {
      if (this.documentResizeListener) {
        window.removeEventListener("resize", this.documentResizeListener);
        this.documentResizeListener = null;
      }
    },
    isNavBackwardDisabled: function isNavBackwardDisabled2() {
      return !this.circular && this.d_activeIndex === 0 || this.value.length <= this.d_numVisible;
    },
    isNavForwardDisabled: function isNavForwardDisabled2() {
      return !this.circular && this.d_activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
    },
    firstItemAciveIndex: function firstItemAciveIndex() {
      return this.totalShiftedItems * -1;
    },
    lastItemActiveIndex: function lastItemActiveIndex() {
      return this.firstItemAciveIndex() + this.d_numVisible - 1;
    },
    isItemActive: function isItemActive(index2) {
      return this.firstItemAciveIndex() <= index2 && this.lastItemActiveIndex() >= index2;
    },
    ariaPageLabel: function ariaPageLabel2(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : void 0;
    }
  },
  computed: {
    ariaPrevButtonLabel: function ariaPrevButtonLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.prevPageLabel : void 0;
    },
    ariaNextButtonLabel: function ariaNextButtonLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.nextPageLabel : void 0;
    }
  },
  components: {
    ChevronLeftIcon: script$1$2,
    ChevronRightIcon: script$7,
    ChevronUpIcon: script$8,
    ChevronDownIcon: script$9
  },
  directives: {
    ripple: Ripple
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
var _hoisted_1$2 = ["disabled", "aria-label"];
var _hoisted_2$1 = ["data-p-active", "aria-selected", "aria-controls", "onKeydown", "data-p-galleria-thumbnail-item-current", "data-p-galleria-thumbnail-item-active", "data-p-galleria-thumbnail-item-start", "data-p-galleria-thumbnail-item-end"];
var _hoisted_3$1 = ["tabindex", "aria-label", "aria-current", "onClick"];
var _hoisted_4 = ["disabled", "aria-label"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("thumbnailWrapper")
  }, _ctx.ptm("thumbnailWrapper")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("thumbnailContainer")
  }, _ctx.ptm("thumbnailContainer")), [$props.showThumbnailNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    "class": _ctx.cx("previousThumbnailButton"),
    disabled: $options.isNavBackwardDisabled(),
    type: "button",
    "aria-label": $options.ariaPrevButtonLabel,
    onClick: _cache[0] || (_cache[0] = function($event) {
      return $options.navBackward($event);
    })
  }, _objectSpread$2(_objectSpread$2({}, $props.prevButtonProps), _ctx.ptm("previousThumbnailButton"))), [(openBlock(), createBlock(resolveDynamicComponent($props.templates.previousthumbnailicon || ($props.isVertical ? "ChevronUpIcon" : "ChevronLeftIcon")), mergeProps({
    "class": _ctx.cx("previousThumbnailIcon")
  }, _ctx.ptm("previousThumbnailIcon")), null, 16, ["class"]))], 16, _hoisted_1$2)), [[_directive_ripple]]) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("thumbnailItemsContainer"),
    style: {
      height: $props.isVertical ? $props.contentHeight : ""
    }
  }, _ctx.ptm("thumbnailItemsContainer")), [createElementVNode("div", mergeProps({
    ref: "itemsContainer",
    "class": _ctx.cx("thumbnailItems"),
    role: "tablist",
    onTransitionend: _cache[1] || (_cache[1] = function() {
      return $options.onTransitionEnd && $options.onTransitionEnd.apply($options, arguments);
    }),
    onTouchstart: _cache[2] || (_cache[2] = function($event) {
      return $options.onTouchStart($event);
    }),
    onTouchmove: _cache[3] || (_cache[3] = function($event) {
      return $options.onTouchMove($event);
    }),
    onTouchend: _cache[4] || (_cache[4] = function($event) {
      return $options.onTouchEnd($event);
    })
  }, _ctx.ptm("thumbnailItems")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.value, function(item, index2) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: "p-galleria-thumbnail-item-".concat(index2),
      "class": _ctx.cx("thumbnailItem", {
        index: index2,
        activeIndex: $props.activeIndex
      }),
      role: "tab",
      "data-p-active": $props.activeIndex === index2,
      "aria-selected": $props.activeIndex === index2,
      "aria-controls": $props.containerId + "_item_" + index2,
      onKeydown: function onKeydown($event) {
        return $options.onThumbnailKeydown($event, index2);
      }
    }, _ctx.ptm("thumbnailItem"), {
      "data-p-galleria-thumbnail-item-current": $props.activeIndex === index2,
      "data-p-galleria-thumbnail-item-active": $options.isItemActive(index2),
      "data-p-galleria-thumbnail-item-start": $options.firstItemAciveIndex() === index2,
      "data-p-galleria-thumbnail-item-end": $options.lastItemActiveIndex() === index2
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("thumbnailItemContent"),
      tabindex: $props.activeIndex === index2 ? "0" : "-1",
      "aria-label": $options.ariaPageLabel(index2 + 1),
      "aria-current": $props.activeIndex === index2 ? "page" : void 0,
      onClick: function onClick($event) {
        return $options.onItemClick(index2);
      }
    }, _ctx.ptm("thumbnailItemContent")), [$props.templates.thumbnail ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.thumbnail), {
      key: 0,
      item
    }, null, 8, ["item"])) : createCommentVNode("", true)], 16, _hoisted_3$1)], 16, _hoisted_2$1);
  }), 128))], 16)], 16), $props.showThumbnailNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 1,
    "class": _ctx.cx("nextThumbnailButton"),
    disabled: $options.isNavForwardDisabled(),
    type: "button",
    "aria-label": $options.ariaNextButtonLabel,
    onClick: _cache[5] || (_cache[5] = function($event) {
      return $options.navForward($event);
    })
  }, _objectSpread$2(_objectSpread$2({}, $props.nextButtonProps), _ctx.ptm("nextThumbnailButton"))), [(openBlock(), createBlock(resolveDynamicComponent($props.templates.nextthumbnailicon || ($props.isVertical ? "ChevronDownIcon" : "ChevronRightIcon")), mergeProps({
    "class": _ctx.cx("nextThumbnailIcon")
  }, _ctx.ptm("nextThumbnailIcon")), null, 16, ["class"]))], 16, _hoisted_4)), [[_directive_ripple]]) : createCommentVNode("", true)], 16)], 16);
}
script$2.render = render$2;
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
var script$1 = {
  name: "GalleriaContent",
  hostName: "Galleria",
  "extends": script$6$1,
  inheritAttrs: false,
  interval: null,
  emits: ["activeitem-change", "mask-hide"],
  data: function data2() {
    return {
      id: this.$attrs.id || UniqueComponentId(),
      activeIndex: this.$attrs.activeIndex,
      numVisible: this.$attrs.numVisible,
      slideShowActive: false
    };
  },
  watch: {
    "$attrs.value": function $attrsValue(newVal) {
      if (newVal && newVal.length < this.numVisible) {
        this.numVisible = newVal.length;
      }
    },
    "$attrs.activeIndex": function $attrsActiveIndex(newVal) {
      this.activeIndex = newVal;
    },
    "$attrs.numVisible": function $attrsNumVisible(newVal) {
      this.numVisible = newVal;
    },
    "$attrs.autoPlay": function $attrsAutoPlay(newVal) {
      newVal ? this.startSlideShow() : this.stopSlideShow();
    }
  },
  updated: function updated2() {
    this.$emit("activeitem-change", this.activeIndex);
  },
  beforeUnmount: function beforeUnmount2() {
    if (this.slideShowActive) {
      this.stopSlideShow();
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      return this.ptm(key, {
        props: _objectSpread$1(_objectSpread$1({}, this.$attrs), {}, {
          pt: this.pt,
          unstyled: this.unstyled
        })
      });
    },
    isAutoPlayActive: function isAutoPlayActive() {
      return this.slideShowActive;
    },
    startSlideShow: function startSlideShow() {
      var _this = this;
      this.interval = setInterval(function() {
        var activeIndex2 = _this.$attrs.circular && _this.$attrs.value.length - 1 === _this.activeIndex ? 0 : _this.activeIndex + 1;
        _this.activeIndex = activeIndex2;
      }, this.$attrs.transitionInterval);
      this.slideShowActive = true;
    },
    stopSlideShow: function stopSlideShow3() {
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.slideShowActive = false;
    },
    getPositionClass: function getPositionClass(preClassName, position) {
      var positions = ["top", "left", "bottom", "right"];
      var pos = positions.find(function(item) {
        return item === position;
      });
      return pos ? "".concat(preClassName, "-").concat(pos) : "";
    },
    isVertical: function isVertical() {
      return this.$attrs.thumbnailsPosition === "left" || this.$attrs.thumbnailsPosition === "right";
    }
  },
  computed: {
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  components: {
    GalleriaItem: script$3,
    GalleriaThumbnails: script$2,
    TimesIcon: script$l
  },
  directives: {
    ripple: Ripple
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
var _hoisted_1$1 = ["id"];
var _hoisted_2 = ["aria-label"];
var _hoisted_3 = ["aria-live"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_GalleriaItem = resolveComponent("GalleriaItem");
  var _component_GalleriaThumbnails = resolveComponent("GalleriaThumbnails");
  var _directive_ripple = resolveDirective("ripple");
  return _ctx.$attrs.value && _ctx.$attrs.value.length > 0 ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    id: $data.id,
    "class": [_ctx.cx("root"), _ctx.$attrs.containerClass],
    style: _ctx.$attrs.containerStyle
  }, _objectSpread(_objectSpread({}, _ctx.$attrs.containerProps), $options.getPTOptions("root")), {
    "data-pc-name": "galleria"
  }), [_ctx.$attrs.fullScreen ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    autofocus: "",
    type: "button",
    "class": _ctx.cx("closeButton"),
    "aria-label": $options.closeAriaLabel,
    onClick: _cache[0] || (_cache[0] = function($event) {
      return _ctx.$emit("mask-hide");
    })
  }, $options.getPTOptions("closeButton")), [(openBlock(), createBlock(resolveDynamicComponent(_ctx.$attrs.templates["closeicon"] || "TimesIcon"), mergeProps({
    "class": _ctx.cx("closeIcon")
  }, $options.getPTOptions("closeIcon")), null, 16, ["class"]))], 16, _hoisted_2)), [[_directive_ripple]]) : createCommentVNode("", true), _ctx.$attrs.templates && _ctx.$attrs.templates["header"] ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("header")
  }, $options.getPTOptions("header")), [(openBlock(), createBlock(resolveDynamicComponent(_ctx.$attrs.templates["header"])))], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("content"),
    "aria-live": _ctx.$attrs.autoPlay ? "polite" : "off"
  }, $options.getPTOptions("content")), [createVNode(_component_GalleriaItem, {
    id: $data.id,
    activeIndex: $data.activeIndex,
    "onUpdate:activeIndex": _cache[1] || (_cache[1] = function($event) {
      return $data.activeIndex = $event;
    }),
    slideShowActive: $data.slideShowActive,
    "onUpdate:slideShowActive": _cache[2] || (_cache[2] = function($event) {
      return $data.slideShowActive = $event;
    }),
    value: _ctx.$attrs.value,
    circular: _ctx.$attrs.circular,
    templates: _ctx.$attrs.templates,
    showIndicators: _ctx.$attrs.showIndicators,
    changeItemOnIndicatorHover: _ctx.$attrs.changeItemOnIndicatorHover,
    showItemNavigators: _ctx.$attrs.showItemNavigators,
    autoPlay: _ctx.$attrs.autoPlay,
    onStartSlideshow: $options.startSlideShow,
    onStopSlideshow: $options.stopSlideShow,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, null, 8, ["id", "activeIndex", "slideShowActive", "value", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "showItemNavigators", "autoPlay", "onStartSlideshow", "onStopSlideshow", "pt", "unstyled"]), _ctx.$attrs.showThumbnails ? (openBlock(), createBlock(_component_GalleriaThumbnails, {
    key: 0,
    activeIndex: $data.activeIndex,
    "onUpdate:activeIndex": _cache[3] || (_cache[3] = function($event) {
      return $data.activeIndex = $event;
    }),
    slideShowActive: $data.slideShowActive,
    "onUpdate:slideShowActive": _cache[4] || (_cache[4] = function($event) {
      return $data.slideShowActive = $event;
    }),
    containerId: $data.id,
    value: _ctx.$attrs.value,
    templates: _ctx.$attrs.templates,
    numVisible: $data.numVisible,
    responsiveOptions: _ctx.$attrs.responsiveOptions,
    circular: _ctx.$attrs.circular,
    isVertical: $options.isVertical(),
    contentHeight: _ctx.$attrs.verticalThumbnailViewPortHeight,
    showThumbnailNavigators: _ctx.$attrs.showThumbnailNavigators,
    prevButtonProps: _ctx.$attrs.prevButtonProps,
    nextButtonProps: _ctx.$attrs.nextButtonProps,
    onStopSlideshow: $options.stopSlideShow,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, null, 8, ["activeIndex", "slideShowActive", "containerId", "value", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "prevButtonProps", "nextButtonProps", "onStopSlideshow", "pt", "unstyled"])) : createCommentVNode("", true)], 16, _hoisted_3), _ctx.$attrs.templates && _ctx.$attrs.templates["footer"] ? (openBlock(), createElementBlock("div", mergeProps({
    key: 2,
    "class": _ctx.cx("footer")
  }, $options.getPTOptions("footer")), [(openBlock(), createBlock(resolveDynamicComponent(_ctx.$attrs.templates["footer"])))], 16)) : createCommentVNode("", true)], 16, _hoisted_1$1)) : createCommentVNode("", true);
}
script$1.render = render$1;
var script = {
  name: "Galleria",
  "extends": script$4,
  inheritAttrs: false,
  emits: ["update:activeIndex", "update:visible"],
  container: null,
  mask: null,
  data: function data3() {
    return {
      containerVisible: this.visible
    };
  },
  updated: function updated3() {
    if (this.fullScreen && this.visible) {
      this.containerVisible = this.visible;
    }
  },
  beforeUnmount: function beforeUnmount3() {
    if (this.fullScreen) {
      DomHandler.removeClass(document.body, "p-overflow-hidden");
    }
    this.mask = null;
    if (this.container) {
      ZIndexUtils.clear(this.container);
      this.container = null;
    }
  },
  methods: {
    onBeforeEnter: function onBeforeEnter(el) {
      ZIndexUtils.set("modal", el, this.baseZIndex || this.$primevue.config.zIndex.modal);
    },
    onEnter: function onEnter(el) {
      this.mask.style.zIndex = String(parseInt(el.style.zIndex, 10) - 1);
      DomHandler.addClass(document.body, "p-overflow-hidden");
      this.focus();
    },
    onBeforeLeave: function onBeforeLeave() {
      !this.isUnstyled && DomHandler.addClass(this.mask, "p-component-overlay-leave");
    },
    onAfterLeave: function onAfterLeave(el) {
      ZIndexUtils.clear(el);
      this.containerVisible = false;
      DomHandler.removeClass(document.body, "p-overflow-hidden");
    },
    onActiveItemChange: function onActiveItemChange(index2) {
      if (this.activeIndex !== index2) {
        this.$emit("update:activeIndex", index2);
      }
    },
    maskHide: function maskHide() {
      this.$emit("update:visible", false);
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    maskRef: function maskRef(el) {
      this.mask = el;
    },
    focus: function focus() {
      var focusTarget = this.container.$el.querySelector("[autofocus]");
      if (focusTarget) {
        focusTarget.focus();
      }
    }
  },
  components: {
    GalleriaContent: script$1,
    Portal: script$1$1
  },
  directives: {
    focustrap: FocusTrap
  }
};
var _hoisted_1 = ["role", "aria-modal"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_GalleriaContent = resolveComponent("GalleriaContent");
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return _ctx.fullScreen ? (openBlock(), createBlock(_component_Portal, {
    key: 0
  }, {
    "default": withCtx(function() {
      return [$data.containerVisible ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        ref: $options.maskRef,
        "class": [_ctx.cx("mask"), _ctx.maskClass],
        role: _ctx.fullScreen ? "dialog" : "region",
        "aria-modal": _ctx.fullScreen ? "true" : void 0
      }, _ctx.ptm("mask")), [createVNode(Transition, {
        name: "p-galleria",
        onBeforeEnter: $options.onBeforeEnter,
        onEnter: $options.onEnter,
        onBeforeLeave: $options.onBeforeLeave,
        onAfterLeave: $options.onAfterLeave,
        appear: ""
      }, {
        "default": withCtx(function() {
          return [_ctx.visible ? withDirectives((openBlock(), createBlock(_component_GalleriaContent, mergeProps({
            key: 0,
            ref: $options.containerRef,
            onMaskHide: $options.maskHide,
            templates: _ctx.$slots,
            onActiveitemChange: $options.onActiveItemChange,
            pt: _ctx.pt,
            unstyled: _ctx.unstyled
          }, _ctx.$props), null, 16, ["onMaskHide", "templates", "onActiveitemChange", "pt", "unstyled"])), [[_directive_focustrap]]) : createCommentVNode("", true)];
        }),
        _: 1
      }, 8, ["onBeforeEnter", "onEnter", "onBeforeLeave", "onAfterLeave"])], 16, _hoisted_1)) : createCommentVNode("", true)];
    }),
    _: 1
  })) : (openBlock(), createBlock(_component_GalleriaContent, mergeProps({
    key: 1,
    templates: _ctx.$slots,
    onActiveitemChange: $options.onActiveItemChange,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, _ctx.$props), null, 16, ["templates", "onActiveitemChange", "pt", "unstyled"]));
}
script.render = render;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const basedomainURL = useRuntimeConfig().public.apiBase;
    const images = ref([
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
      let data4 = JSON.parse(response.data);
      if (data4[0].length > 0) {
        datalists.value = data4[0];
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-de4b2939>`);
      _push(ssrRenderComponent(Headbar, null, null, _parent));
      _push(`<div class="w-full format-center" data-v-de4b2939>`);
      _push(ssrRenderComponent(unref(script), {
        value: unref(images),
        numVisible: 3,
        containerStyle: "max-width: 100%  ",
        showThumbnails: false,
        showIndicators: true,
        autoPlay: true,
        transitionInterval: 5e3,
        circular: true
      }, {
        item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(basedomainURL) + slotProps.item.src)}${ssrRenderAttr("alt", slotProps.item.alt)} style="${ssrRenderStyle({ "width": "100%", "display": "block", "object-fit": "contain" })}" data-v-de4b2939${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(basedomainURL) + slotProps.item.src,
                alt: slotProps.item.alt,
                style: { "width": "100%", "display": "block", "object-fit": "contain" }
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="p-grid" data-v-de4b2939><div class="col-12" style="${ssrRenderStyle({ "padding": "0px 10vw" })}" data-v-de4b2939>`);
      _push(ssrRenderComponent(unref(script$5), {
        value: unref(datalists),
        layout: "grid"
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex format-center p-0" data-v-de4b2939${_scopeId}><h2 style="${ssrRenderStyle({ "margin": "0" })}" data-v-de4b2939${_scopeId}>GI\xC0Y NAM - B\xC1N CH\u1EA0Y</h2></div>`);
          } else {
            return [
              createVNode("div", { class: "flex format-center p-0" }, [
                createVNode("h2", { style: { "margin": "0" } }, "GI\xC0Y NAM - B\xC1N CH\u1EA0Y")
              ])
            ];
          }
        }),
        grid: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-6 sm:col-4 lg:col-4 xl:col-3 p-2" data-v-de4b2939${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$2$1), {
              style: { "width": "100%", "height": "100%" },
              class: "d-card-main"
            }, {
              header: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full p-0" data-v-de4b2939${_scopeId2}><img style="${ssrRenderStyle({ "width": "100%" })}"${ssrRenderAttr("alt", slotProps.data.title)}${ssrRenderAttr("src", unref(basedomainURL) + slotProps.data.image)} data-v-de4b2939${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full p-0" }, [
                      createVNode("img", {
                        style: { "width": "100%" },
                        alt: slotProps.data.title,
                        src: unref(basedomainURL) + slotProps.data.image
                      }, null, 8, ["alt", "src"])
                    ])
                  ];
                }
              }),
              title: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="col-6 p-0 w-full text-sm sm:text-md lg:text-md xl:text-xl texttwoline h-3rem" data-v-de4b2939${_scopeId2}>${ssrInterpolate(slotProps.data.title)}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "col-6 p-0 w-full text-sm sm:text-md lg:text-md xl:text-xl texttwoline h-3rem" }, toDisplayString(slotProps.data.title), 1)
                  ];
                }
              }),
              subtitle: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(script$6), { class: "w-full p-0 custoolbar" }, {
                    start: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-sm sm:text-md lg:text-md xl:text-xl" data-v-de4b2939${_scopeId3}> 4 Size </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-sm sm:text-md lg:text-md xl:text-xl" }, " 4 Size ")
                        ];
                      }
                    }),
                    end: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-sm sm:text-md lg:text-md xl:text-xl" data-v-de4b2939${_scopeId3}> 2 M\xE0u </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-sm sm:text-md lg:text-md xl:text-xl" }, " 2 M\xE0u ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(script$6), { class: "w-full p-0 custoolbar" }, {
                      start: withCtx(() => [
                        createVNode("div", { class: "text-sm sm:text-md lg:text-md xl:text-xl" }, " 4 Size ")
                      ]),
                      end: withCtx(() => [
                        createVNode("div", { class: "text-sm sm:text-md lg:text-md xl:text-xl" }, " 2 M\xE0u ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              content: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full p-0" data-v-de4b2939${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(script$6), { class: "w-full p-0 custoolbar" }, {
                    start: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (slotProps.data.price) {
                          _push4(`<div class="text-sm sm:text-md lg:text-md xl:text-xl" data-v-de4b2939${_scopeId3}>${ssrInterpolate(slotProps.data.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND"
                          }))}</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          slotProps.data.price ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm sm:text-md lg:text-md xl:text-xl"
                          }, toDisplayString(slotProps.data.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND"
                          })), 1)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full p-0" }, [
                      createVNode(unref(script$6), { class: "w-full p-0 custoolbar" }, {
                        start: withCtx(() => [
                          slotProps.data.price ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm sm:text-md lg:text-md xl:text-xl"
                          }, toDisplayString(slotProps.data.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND"
                          })), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-6 sm:col-4 lg:col-4 xl:col-3 p-2" }, [
                createVNode(unref(script$2$1), {
                  style: { "width": "100%", "height": "100%" },
                  class: "d-card-main"
                }, {
                  header: withCtx(() => [
                    createVNode("div", { class: "w-full p-0" }, [
                      createVNode("img", {
                        style: { "width": "100%" },
                        alt: slotProps.data.title,
                        src: unref(basedomainURL) + slotProps.data.image
                      }, null, 8, ["alt", "src"])
                    ])
                  ]),
                  title: withCtx(() => [
                    createVNode("div", { class: "col-6 p-0 w-full text-sm sm:text-md lg:text-md xl:text-xl texttwoline h-3rem" }, toDisplayString(slotProps.data.title), 1)
                  ]),
                  subtitle: withCtx(() => [
                    createVNode(unref(script$6), { class: "w-full p-0 custoolbar" }, {
                      start: withCtx(() => [
                        createVNode("div", { class: "text-sm sm:text-md lg:text-md xl:text-xl" }, " 4 Size ")
                      ]),
                      end: withCtx(() => [
                        createVNode("div", { class: "text-sm sm:text-md lg:text-md xl:text-xl" }, " 2 M\xE0u ")
                      ]),
                      _: 1
                    })
                  ]),
                  content: withCtx(() => [
                    createVNode("div", { class: "w-full p-0" }, [
                      createVNode(unref(script$6), { class: "w-full p-0 custoolbar" }, {
                        start: withCtx(() => [
                          slotProps.data.price ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm sm:text-md lg:text-md xl:text-xl"
                          }, toDisplayString(slotProps.data.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND"
                          })), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  _: 2
                }, 1024)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="p-grid" data-v-de4b2939><div class="col-12" style="${ssrRenderStyle({ "padding": "0px 5vw" })}" data-v-de4b2939><div class="flex format-center p-0 w-full" data-v-de4b2939><h2 data-v-de4b2939>CH\xDANG T\xD4I C\xD3 G\xCC M\u1EDAI</h2></div><div class="w-full flex" data-v-de4b2939><!--[-->`);
      ssrRenderList(unref(images), (item, index2) => {
        _push(`<div class="col-4" data-v-de4b2939><img${ssrRenderAttr("src", unref(basedomainURL) + item.src)}${ssrRenderAttr("alt", item.title)} style="${ssrRenderStyle({ "width": "100%" })}" data-v-de4b2939></div>`);
      });
      _push(`<!--]--></div></div></div><div class="p-grid" data-v-de4b2939><div class="col-12" style="${ssrRenderStyle({ "padding": "0px 10vw" })}" data-v-de4b2939>`);
      _push(ssrRenderComponent(unref(script$5), {
        value: unref(datalists),
        layout: "grid"
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex format-center p-0" data-v-de4b2939${_scopeId}><h2 style="${ssrRenderStyle({ "margin": "0" })}" data-v-de4b2939${_scopeId}>GI\xC0Y NAM - M\u1EDAI V\u1EC0</h2></div>`);
          } else {
            return [
              createVNode("div", { class: "flex format-center p-0" }, [
                createVNode("h2", { style: { "margin": "0" } }, "GI\xC0Y NAM - M\u1EDAI V\u1EC0")
              ])
            ];
          }
        }),
        grid: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-6 sm:col-4 lg:col-4 xl:col-3 p-2" data-v-de4b2939${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$2$1), {
              style: { "width": "100%", "height": "100%" },
              class: "d-card-main"
            }, {
              header: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full p-0" data-v-de4b2939${_scopeId2}><img style="${ssrRenderStyle({ "width": "100%" })}"${ssrRenderAttr("alt", slotProps.data.title)}${ssrRenderAttr("src", unref(basedomainURL) + slotProps.data.image)} data-v-de4b2939${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full p-0" }, [
                      createVNode("img", {
                        style: { "width": "100%" },
                        alt: slotProps.data.title,
                        src: unref(basedomainURL) + slotProps.data.image
                      }, null, 8, ["alt", "src"])
                    ])
                  ];
                }
              }),
              title: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="col-6 p-0 w-full text-sm sm:text-md lg:text-md xl:text-xl texttwoline h-3rem" data-v-de4b2939${_scopeId2}>${ssrInterpolate(slotProps.data.title)}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "col-6 p-0 w-full text-sm sm:text-md lg:text-md xl:text-xl texttwoline h-3rem" }, toDisplayString(slotProps.data.title), 1)
                  ];
                }
              }),
              subtitle: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(script$6), { class: "w-full p-0 custoolbar" }, {
                    start: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-sm sm:text-md lg:text-md xl:text-xl" data-v-de4b2939${_scopeId3}> 4 Size </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-sm sm:text-md lg:text-md xl:text-xl" }, " 4 Size ")
                        ];
                      }
                    }),
                    end: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-sm sm:text-md lg:text-md xl:text-xl" data-v-de4b2939${_scopeId3}> 2 M\xE0u </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-sm sm:text-md lg:text-md xl:text-xl" }, " 2 M\xE0u ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(script$6), { class: "w-full p-0 custoolbar" }, {
                      start: withCtx(() => [
                        createVNode("div", { class: "text-sm sm:text-md lg:text-md xl:text-xl" }, " 4 Size ")
                      ]),
                      end: withCtx(() => [
                        createVNode("div", { class: "text-sm sm:text-md lg:text-md xl:text-xl" }, " 2 M\xE0u ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              content: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full p-0" data-v-de4b2939${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(script$6), { class: "w-full p-0 custoolbar" }, {
                    start: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (slotProps.data.price) {
                          _push4(`<div class="text-sm sm:text-md lg:text-md xl:text-xl" data-v-de4b2939${_scopeId3}>${ssrInterpolate(slotProps.data.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND"
                          }))}</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          slotProps.data.price ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm sm:text-md lg:text-md xl:text-xl"
                          }, toDisplayString(slotProps.data.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND"
                          })), 1)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full p-0" }, [
                      createVNode(unref(script$6), { class: "w-full p-0 custoolbar" }, {
                        start: withCtx(() => [
                          slotProps.data.price ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm sm:text-md lg:text-md xl:text-xl"
                          }, toDisplayString(slotProps.data.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND"
                          })), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-6 sm:col-4 lg:col-4 xl:col-3 p-2" }, [
                createVNode(unref(script$2$1), {
                  style: { "width": "100%", "height": "100%" },
                  class: "d-card-main"
                }, {
                  header: withCtx(() => [
                    createVNode("div", { class: "w-full p-0" }, [
                      createVNode("img", {
                        style: { "width": "100%" },
                        alt: slotProps.data.title,
                        src: unref(basedomainURL) + slotProps.data.image
                      }, null, 8, ["alt", "src"])
                    ])
                  ]),
                  title: withCtx(() => [
                    createVNode("div", { class: "col-6 p-0 w-full text-sm sm:text-md lg:text-md xl:text-xl texttwoline h-3rem" }, toDisplayString(slotProps.data.title), 1)
                  ]),
                  subtitle: withCtx(() => [
                    createVNode(unref(script$6), { class: "w-full p-0 custoolbar" }, {
                      start: withCtx(() => [
                        createVNode("div", { class: "text-sm sm:text-md lg:text-md xl:text-xl" }, " 4 Size ")
                      ]),
                      end: withCtx(() => [
                        createVNode("div", { class: "text-sm sm:text-md lg:text-md xl:text-xl" }, " 2 M\xE0u ")
                      ]),
                      _: 1
                    })
                  ]),
                  content: withCtx(() => [
                    createVNode("div", { class: "w-full p-0" }, [
                      createVNode(unref(script$6), { class: "w-full p-0 custoolbar" }, {
                        start: withCtx(() => [
                          slotProps.data.price ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm sm:text-md lg:text-md xl:text-xl"
                          }, toDisplayString(slotProps.data.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND"
                          })), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  _: 2
                }, 1024)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="p-grid" data-v-de4b2939><div class="col-12" style="${ssrRenderStyle({ "padding": "0p" })}" data-v-de4b2939></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de4b2939"]]);

export { index as default };
//# sourceMappingURL=index-44d7e02f.mjs.map
