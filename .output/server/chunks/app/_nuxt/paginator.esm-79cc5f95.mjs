import { B as BaseDirective, D as DomHandler, f as useStyle, U as UniqueComponentId, Z as ZIndexUtils, O as ObjectUtils, C as ConnectedOverlayScrollHandler, F as FilterService, R as Ripple, h as script$3$1, o as script$n, k as script$2$1, g as script$4$1, s as script$6$1 } from '../server.mjs';
import { openBlock, createElementBlock, mergeProps, createElementVNode, resolveComponent, renderSlot, Fragment, renderList, createCommentVNode, createVNode, resolveDirective, createTextVNode, toDisplayString, normalizeClass, createBlock, resolveDynamicComponent, withCtx, Transition, createSlots, withDirectives, toHandlers, normalizeProps } from 'vue';
import { O as OverlayEventBus, s as script$1$4, a as script$m } from './index.esm-c4d8e664.mjs';

var BaseFocusTrap = BaseDirective.extend({});
var FocusTrap = BaseFocusTrap.extend("focustrap", {
  mounted: function mounted(el, binding) {
    var _ref = binding.value || {}, disabled = _ref.disabled;
    if (!disabled) {
      this.createHiddenFocusableElements(el, binding);
      this.bind(el, binding);
      this.autoFocus(el, binding);
    }
    el.setAttribute("data-pd-focustrap", true);
    this.$el = el;
  },
  updated: function updated(el, binding) {
    var _ref2 = binding.value || {}, disabled = _ref2.disabled;
    disabled && this.unbind(el);
  },
  unmounted: function unmounted(el) {
    this.unbind(el);
  },
  methods: {
    getComputedSelector: function getComputedSelector(selector) {
      return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(selector !== null && selector !== void 0 ? selector : "");
    },
    bind: function bind(el, binding) {
      var _this = this;
      var _ref3 = binding.value || {}, onFocusIn = _ref3.onFocusIn, onFocusOut = _ref3.onFocusOut;
      el.$_pfocustrap_mutationobserver = new MutationObserver(function(mutationList) {
        mutationList.forEach(function(mutation) {
          if (mutation.type === "childList" && !el.contains(document.activeElement)) {
            var findNextFocusableElement = function findNextFocusableElement2(_el) {
              var focusableElement = DomHandler.isFocusableElement(_el) ? DomHandler.isFocusableElement(_el, _this.getComputedSelector(el.$_pfocustrap_focusableselector)) ? _el : DomHandler.getFirstFocusableElement(el, _this.getComputedSelector(el.$_pfocustrap_focusableselector)) : DomHandler.getFirstFocusableElement(_el);
              return ObjectUtils.isNotEmpty(focusableElement) ? focusableElement : findNextFocusableElement2(_el.nextSibling);
            };
            DomHandler.focus(findNextFocusableElement(mutation.nextSibling));
          }
        });
      });
      el.$_pfocustrap_mutationobserver.disconnect();
      el.$_pfocustrap_mutationobserver.observe(el, {
        childList: true
      });
      el.$_pfocustrap_focusinlistener = function(event) {
        return onFocusIn && onFocusIn(event);
      };
      el.$_pfocustrap_focusoutlistener = function(event) {
        return onFocusOut && onFocusOut(event);
      };
      el.addEventListener("focusin", el.$_pfocustrap_focusinlistener);
      el.addEventListener("focusout", el.$_pfocustrap_focusoutlistener);
    },
    unbind: function unbind(el) {
      el.$_pfocustrap_mutationobserver && el.$_pfocustrap_mutationobserver.disconnect();
      el.$_pfocustrap_focusinlistener && el.removeEventListener("focusin", el.$_pfocustrap_focusinlistener) && (el.$_pfocustrap_focusinlistener = null);
      el.$_pfocustrap_focusoutlistener && el.removeEventListener("focusout", el.$_pfocustrap_focusoutlistener) && (el.$_pfocustrap_focusoutlistener = null);
    },
    autoFocus: function autoFocus(el, binding) {
      var _ref4 = binding.value || {}, _ref4$autoFocusSelect = _ref4.autoFocusSelector, autoFocusSelector = _ref4$autoFocusSelect === void 0 ? "" : _ref4$autoFocusSelect, _ref4$firstFocusableS = _ref4.firstFocusableSelector, firstFocusableSelector = _ref4$firstFocusableS === void 0 ? "" : _ref4$firstFocusableS, _ref4$autoFocus = _ref4.autoFocus, autoFocus2 = _ref4$autoFocus === void 0 ? false : _ref4$autoFocus;
      var focusableElement = DomHandler.getFirstFocusableElement(el, "[autofocus]".concat(this.getComputedSelector(autoFocusSelector)));
      autoFocus2 && !focusableElement && (focusableElement = DomHandler.getFirstFocusableElement(el, this.getComputedSelector(firstFocusableSelector)));
      DomHandler.focus(focusableElement);
    },
    onFirstHiddenElementFocus: function onFirstHiddenElementFocus(event) {
      var _this$$el;
      var currentTarget = event.currentTarget, relatedTarget = event.relatedTarget;
      var focusableElement = relatedTarget === currentTarget.$_pfocustrap_lasthiddenfocusableelement || !((_this$$el = this.$el) !== null && _this$$el !== void 0 && _this$$el.contains(relatedTarget)) ? DomHandler.getFirstFocusableElement(currentTarget.parentElement, this.getComputedSelector(currentTarget.$_pfocustrap_focusableselector)) : currentTarget.$_pfocustrap_lasthiddenfocusableelement;
      DomHandler.focus(focusableElement);
    },
    onLastHiddenElementFocus: function onLastHiddenElementFocus(event) {
      var _this$$el2;
      var currentTarget = event.currentTarget, relatedTarget = event.relatedTarget;
      var focusableElement = relatedTarget === currentTarget.$_pfocustrap_firsthiddenfocusableelement || !((_this$$el2 = this.$el) !== null && _this$$el2 !== void 0 && _this$$el2.contains(relatedTarget)) ? DomHandler.getLastFocusableElement(currentTarget.parentElement, this.getComputedSelector(currentTarget.$_pfocustrap_focusableselector)) : currentTarget.$_pfocustrap_firsthiddenfocusableelement;
      DomHandler.focus(focusableElement);
    },
    createHiddenFocusableElements: function createHiddenFocusableElements(el, binding) {
      var _this2 = this;
      var _ref5 = binding.value || {}, _ref5$tabIndex = _ref5.tabIndex, tabIndex = _ref5$tabIndex === void 0 ? 0 : _ref5$tabIndex, _ref5$firstFocusableS = _ref5.firstFocusableSelector, firstFocusableSelector = _ref5$firstFocusableS === void 0 ? "" : _ref5$firstFocusableS, _ref5$lastFocusableSe = _ref5.lastFocusableSelector, lastFocusableSelector = _ref5$lastFocusableSe === void 0 ? "" : _ref5$lastFocusableSe;
      var createFocusableElement = function createFocusableElement2(onFocus2) {
        return DomHandler.createElement("span", {
          "class": "p-hidden-accessible p-hidden-focusable",
          tabIndex,
          role: "presentation",
          "aria-hidden": true,
          "data-p-hidden-accessible": true,
          "data-p-hidden-focusable": true,
          onFocus: onFocus2 === null || onFocus2 === void 0 ? void 0 : onFocus2.bind(_this2)
        });
      };
      var firstFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
      var lastFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
      firstFocusableElement.$_pfocustrap_lasthiddenfocusableelement = lastFocusableElement;
      firstFocusableElement.$_pfocustrap_focusableselector = firstFocusableSelector;
      firstFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
      lastFocusableElement.$_pfocustrap_firsthiddenfocusableelement = firstFocusableElement;
      lastFocusableElement.$_pfocustrap_focusableselector = lastFocusableSelector;
      lastFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
      el.prepend(firstFocusableElement);
      el.append(lastFocusableElement);
    }
  }
});
var script$l = {
  name: "TimesIcon",
  "extends": script$4$1
};
var _hoisted_1$a = /* @__PURE__ */ createElementVNode("path", {
  d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$8 = [_hoisted_1$a];
function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$8, 16);
}
script$l.render = render$k;
var script$k = {
  name: "FilterIcon",
  "extends": script$4$1,
  computed: {
    pathId: function pathId() {
      return "pv_icon_clip_".concat(UniqueComponentId());
    }
  }
};
var _hoisted_1$9 = ["clipPath"];
var _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  d: "M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3$1 = [_hoisted_2$7];
var _hoisted_4$1 = ["id"];
var _hoisted_5$1 = /* @__PURE__ */ createElementVNode("rect", {
  width: "14",
  height: "14",
  fill: "white"
}, null, -1);
var _hoisted_6$1 = [_hoisted_5$1];
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), [createElementVNode("g", {
    clipPath: "url(#".concat($options.pathId, ")")
  }, _hoisted_3$1, 8, _hoisted_1$9), createElementVNode("defs", null, [createElementVNode("clipPath", {
    id: "".concat($options.pathId)
  }, _hoisted_6$1, 8, _hoisted_4$1)])], 16);
}
script$k.render = render$j;
var styles$3 = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    /* contain: content; */\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller .p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader.p-component-overlay {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-loading-icon {\n    font-size: 2rem;\n}\n\n.p-virtualscroller-loading-icon.p-icon {\n    width: 2rem;\n    height: 2rem;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n/* Inline */\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n";
var _useStyle$3 = useStyle(styles$3, {
  name: "virtualscroller"
}), loadStyle$3 = _useStyle$3.load;
var script$1$3 = {
  name: "BaseVirtualScroller",
  "extends": script$6$1,
  props: {
    id: {
      type: String,
      "default": null
    },
    style: null,
    "class": null,
    items: {
      type: Array,
      "default": null
    },
    itemSize: {
      type: [Number, Array],
      "default": 0
    },
    scrollHeight: null,
    scrollWidth: null,
    orientation: {
      type: String,
      "default": "vertical"
    },
    numToleratedItems: {
      type: Number,
      "default": null
    },
    delay: {
      type: Number,
      "default": 0
    },
    resizeDelay: {
      type: Number,
      "default": 10
    },
    lazy: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    loaderDisabled: {
      type: Boolean,
      "default": false
    },
    columns: {
      type: Array,
      "default": null
    },
    loading: {
      type: Boolean,
      "default": false
    },
    showSpacer: {
      type: Boolean,
      "default": true
    },
    showLoader: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    inline: {
      type: Boolean,
      "default": false
    },
    step: {
      type: Number,
      "default": 0
    },
    appendOnly: {
      type: Boolean,
      "default": false
    },
    autoSize: {
      type: Boolean,
      "default": false
    }
  },
  css: {
    loadStyle: loadStyle$3
  },
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
function _typeof$4(obj) {
  "@babel/helpers - typeof";
  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$4(obj);
}
function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$3(Object(source), true).forEach(function(key) {
      _defineProperty$4(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$4(obj, key, value) {
  key = _toPropertyKey$4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$4(arg) {
  var key = _toPrimitive$4(arg, "string");
  return _typeof$4(key) === "symbol" ? key : String(key);
}
function _toPrimitive$4(input2, hint) {
  if (_typeof$4(input2) !== "object" || input2 === null)
    return input2;
  var prim = input2[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input2, hint || "default");
    if (_typeof$4(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input2);
}
var script$j = {
  name: "VirtualScroller",
  "extends": script$1$3,
  emits: ["update:numToleratedItems", "scroll", "scroll-index-change", "lazy-load"],
  data: function data() {
    return {
      first: this.isBoth() ? {
        rows: 0,
        cols: 0
      } : 0,
      last: this.isBoth() ? {
        rows: 0,
        cols: 0
      } : 0,
      page: this.isBoth() ? {
        rows: 0,
        cols: 0
      } : 0,
      numItemsInViewport: this.isBoth() ? {
        rows: 0,
        cols: 0
      } : 0,
      lastScrollPos: this.isBoth() ? {
        top: 0,
        left: 0
      } : 0,
      d_numToleratedItems: this.numToleratedItems,
      d_loading: this.loading,
      loaderArr: [],
      spacerStyle: {},
      contentStyle: {}
    };
  },
  element: null,
  content: null,
  lastScrollPos: null,
  scrollTimeout: null,
  resizeTimeout: null,
  defaultWidth: 0,
  defaultHeight: 0,
  defaultContentWidth: 0,
  defaultContentHeight: 0,
  isRangeChanged: false,
  lazyLoadState: {},
  resizeListener: null,
  initialized: false,
  watch: {
    numToleratedItems: function numToleratedItems(newValue) {
      this.d_numToleratedItems = newValue;
    },
    loading: function loading(newValue) {
      this.d_loading = newValue;
    },
    items: function items(newValue, oldValue) {
      if (!oldValue || oldValue.length !== (newValue || []).length) {
        this.init();
        this.calculateAutoSize();
      }
    },
    itemSize: function itemSize() {
      this.init();
      this.calculateAutoSize();
    },
    orientation: function orientation() {
      this.lastScrollPos = this.isBoth() ? {
        top: 0,
        left: 0
      } : 0;
    },
    scrollHeight: function scrollHeight() {
      this.init();
      this.calculateAutoSize();
    },
    scrollWidth: function scrollWidth() {
      this.init();
      this.calculateAutoSize();
    }
  },
  mounted: function mounted2() {
    this.viewInit();
    this.lastScrollPos = this.isBoth() ? {
      top: 0,
      left: 0
    } : 0;
    this.lazyLoadState = this.lazyLoadState || {};
  },
  updated: function updated2() {
    !this.initialized && this.viewInit();
  },
  unmounted: function unmounted2() {
    this.unbindResizeListener();
    this.initialized = false;
  },
  methods: {
    viewInit: function viewInit() {
      if (DomHandler.isVisible(this.element)) {
        this.setContentEl(this.content);
        this.init();
        this.bindResizeListener();
        this.defaultWidth = DomHandler.getWidth(this.element);
        this.defaultHeight = DomHandler.getHeight(this.element);
        this.defaultContentWidth = DomHandler.getWidth(this.content);
        this.defaultContentHeight = DomHandler.getHeight(this.content);
        this.initialized = true;
      }
    },
    init: function init() {
      if (!this.disabled) {
        this.setSize();
        this.calculateOptions();
        this.setSpacerSize();
      }
    },
    isVertical: function isVertical() {
      return this.orientation === "vertical";
    },
    isHorizontal: function isHorizontal() {
      return this.orientation === "horizontal";
    },
    isBoth: function isBoth() {
      return this.orientation === "both";
    },
    scrollTo: function scrollTo(options2) {
      this.lastScrollPos = this.both ? {
        top: 0,
        left: 0
      } : 0;
      this.element && this.element.scrollTo(options2);
    },
    scrollToIndex: function scrollToIndex(index) {
      var _this = this;
      var behavior = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto";
      var both = this.isBoth();
      var horizontal = this.isHorizontal();
      var first2 = this.first;
      var _this$calculateNumIte = this.calculateNumItems(), numToleratedItems2 = _this$calculateNumIte.numToleratedItems;
      var contentPos = this.getContentPosition();
      var itemSize2 = this.itemSize;
      var calculateFirst = function calculateFirst2() {
        var _index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var _numT = arguments.length > 1 ? arguments[1] : void 0;
        return _index <= _numT ? 0 : _index;
      };
      var calculateCoord = function calculateCoord2(_first, _size, _cpos) {
        return _first * _size + _cpos;
      };
      var scrollTo2 = function scrollTo3() {
        var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return _this.scrollTo({
          left,
          top,
          behavior
        });
      };
      var newFirst = both ? {
        rows: 0,
        cols: 0
      } : 0;
      var isRangeChanged = false;
      if (both) {
        newFirst = {
          rows: calculateFirst(index[0], numToleratedItems2[0]),
          cols: calculateFirst(index[1], numToleratedItems2[1])
        };
        scrollTo2(calculateCoord(newFirst.cols, itemSize2[1], contentPos.left), calculateCoord(newFirst.rows, itemSize2[0], contentPos.top));
        isRangeChanged = newFirst.rows !== first2.rows || newFirst.cols !== first2.cols;
      } else {
        newFirst = calculateFirst(index, numToleratedItems2);
        horizontal ? scrollTo2(calculateCoord(newFirst, itemSize2, contentPos.left), 0) : scrollTo2(0, calculateCoord(newFirst, itemSize2, contentPos.top));
        isRangeChanged = newFirst !== first2;
      }
      this.isRangeChanged = isRangeChanged;
      this.first = newFirst;
    },
    scrollInView: function scrollInView(index, to) {
      var _this2 = this;
      var behavior = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
      if (to) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var _this$getRenderedRang = this.getRenderedRange(), first2 = _this$getRenderedRang.first, viewport = _this$getRenderedRang.viewport;
        var scrollTo2 = function scrollTo3() {
          var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return _this2.scrollTo({
            left,
            top,
            behavior
          });
        };
        var isToStart = to === "to-start";
        var isToEnd = to === "to-end";
        if (isToStart) {
          if (both) {
            if (viewport.first.rows - first2.rows > index[0]) {
              scrollTo2(viewport.first.cols * this.itemSize[1], (viewport.first.rows - 1) * this.itemSize[0]);
            } else if (viewport.first.cols - first2.cols > index[1]) {
              scrollTo2((viewport.first.cols - 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
            }
          } else {
            if (viewport.first - first2 > index) {
              var pos = (viewport.first - 1) * this.itemSize;
              horizontal ? scrollTo2(pos, 0) : scrollTo2(0, pos);
            }
          }
        } else if (isToEnd) {
          if (both) {
            if (viewport.last.rows - first2.rows <= index[0] + 1) {
              scrollTo2(viewport.first.cols * this.itemSize[1], (viewport.first.rows + 1) * this.itemSize[0]);
            } else if (viewport.last.cols - first2.cols <= index[1] + 1) {
              scrollTo2((viewport.first.cols + 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
            }
          } else {
            if (viewport.last - first2 <= index + 1) {
              var _pos2 = (viewport.first + 1) * this.itemSize;
              horizontal ? scrollTo2(_pos2, 0) : scrollTo2(0, _pos2);
            }
          }
        }
      } else {
        this.scrollToIndex(index, behavior);
      }
    },
    getRenderedRange: function getRenderedRange() {
      var calculateFirstInViewport = function calculateFirstInViewport2(_pos, _size) {
        return Math.floor(_pos / (_size || _pos));
      };
      var firstInViewport = this.first;
      var lastInViewport = 0;
      if (this.element) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var _this$element$scrollT = this.element.scrollTop, scrollTop = _this$element$scrollT.scrollTop, scrollLeft = _this$element$scrollT.scrollLeft;
        if (both) {
          firstInViewport = {
            rows: calculateFirstInViewport(scrollTop, this.itemSize[0]),
            cols: calculateFirstInViewport(scrollLeft, this.itemSize[1])
          };
          lastInViewport = {
            rows: firstInViewport.rows + this.numItemsInViewport.rows,
            cols: firstInViewport.cols + this.numItemsInViewport.cols
          };
        } else {
          var scrollPos = horizontal ? scrollLeft : scrollTop;
          firstInViewport = calculateFirstInViewport(scrollPos, this.itemSize);
          lastInViewport = firstInViewport + this.numItemsInViewport;
        }
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: firstInViewport,
          last: lastInViewport
        }
      };
    },
    calculateNumItems: function calculateNumItems() {
      var both = this.isBoth();
      var horizontal = this.isHorizontal();
      var itemSize2 = this.itemSize;
      var contentPos = this.getContentPosition();
      var contentWidth = this.element ? this.element.offsetWidth - contentPos.left : 0;
      var contentHeight = this.element ? this.element.offsetHeight - contentPos.top : 0;
      var calculateNumItemsInViewport = function calculateNumItemsInViewport2(_contentSize, _itemSize) {
        return Math.ceil(_contentSize / (_itemSize || _contentSize));
      };
      var calculateNumToleratedItems = function calculateNumToleratedItems2(_numItems) {
        return Math.ceil(_numItems / 2);
      };
      var numItemsInViewport = both ? {
        rows: calculateNumItemsInViewport(contentHeight, itemSize2[0]),
        cols: calculateNumItemsInViewport(contentWidth, itemSize2[1])
      } : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, itemSize2);
      var numToleratedItems2 = this.d_numToleratedItems || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
      return {
        numItemsInViewport,
        numToleratedItems: numToleratedItems2
      };
    },
    calculateOptions: function calculateOptions() {
      var _this3 = this;
      var both = this.isBoth();
      var first2 = this.first;
      var _this$calculateNumIte2 = this.calculateNumItems(), numItemsInViewport = _this$calculateNumIte2.numItemsInViewport, numToleratedItems2 = _this$calculateNumIte2.numToleratedItems;
      var calculateLast = function calculateLast2(_first, _num, _numT) {
        var _isCols = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        return _this3.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
      };
      var last = both ? {
        rows: calculateLast(first2.rows, numItemsInViewport.rows, numToleratedItems2[0]),
        cols: calculateLast(first2.cols, numItemsInViewport.cols, numToleratedItems2[1], true)
      } : calculateLast(first2, numItemsInViewport, numToleratedItems2);
      this.last = last;
      this.numItemsInViewport = numItemsInViewport;
      this.d_numToleratedItems = numToleratedItems2;
      this.$emit("update:numToleratedItems", this.d_numToleratedItems);
      if (this.showLoader) {
        this.loaderArr = both ? Array.from({
          length: numItemsInViewport.rows
        }).map(function() {
          return Array.from({
            length: numItemsInViewport.cols
          });
        }) : Array.from({
          length: numItemsInViewport
        });
      }
      if (this.lazy) {
        Promise.resolve().then(function() {
          _this3.lazyLoadState = {
            first: _this3.step ? both ? {
              rows: 0,
              cols: first2.cols
            } : 0 : first2,
            last: Math.min(_this3.step ? _this3.step : last, _this3.items.length)
          };
          _this3.$emit("lazy-load", _this3.lazyLoadState);
        });
      }
    },
    calculateAutoSize: function calculateAutoSize() {
      var _this4 = this;
      if (this.autoSize && !this.d_loading) {
        Promise.resolve().then(function() {
          if (_this4.content) {
            var both = _this4.isBoth();
            var horizontal = _this4.isHorizontal();
            var vertical = _this4.isVertical();
            _this4.content.style.minHeight = _this4.content.style.minWidth = "auto";
            _this4.content.style.position = "relative";
            _this4.element.style.contain = "none";
            var _ref = [DomHandler.getWidth(_this4.content), DomHandler.getHeight(_this4.content)], contentWidth = _ref[0], contentHeight = _ref[1];
            contentWidth !== _this4.defaultContentWidth && (_this4.element.style.width = "");
            contentHeight !== _this4.defaultContentHeight && (_this4.element.style.height = "");
            var _ref2 = [DomHandler.getWidth(_this4.element), DomHandler.getHeight(_this4.element)], width = _ref2[0], height = _ref2[1];
            (both || horizontal) && (_this4.element.style.width = width < _this4.defaultWidth ? width + "px" : _this4.scrollWidth || _this4.defaultWidth + "px");
            (both || vertical) && (_this4.element.style.height = height < _this4.defaultHeight ? height + "px" : _this4.scrollHeight || _this4.defaultHeight + "px");
            _this4.content.style.minHeight = _this4.content.style.minWidth = "";
            _this4.content.style.position = "";
            _this4.element.style.contain = "";
          }
        });
      }
    },
    getLast: function getLast() {
      var last = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var isCols = arguments.length > 1 ? arguments[1] : void 0;
      return this.items ? Math.min(isCols ? (this.columns || this.items[0]).length : this.items.length, last) : 0;
    },
    getContentPosition: function getContentPosition() {
      if (this.content) {
        var style = getComputedStyle(this.content);
        var left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
        var right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
        var top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
        var bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
        return {
          left,
          right,
          top,
          bottom,
          x: left + right,
          y: top + bottom
        };
      }
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        x: 0,
        y: 0
      };
    },
    setSize: function setSize() {
      var _this5 = this;
      if (this.element) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var parentElement = this.element.parentElement;
        var width = this.scrollWidth || "".concat(this.element.offsetWidth || parentElement.offsetWidth, "px");
        var height = this.scrollHeight || "".concat(this.element.offsetHeight || parentElement.offsetHeight, "px");
        var setProp = function setProp2(_name, _value) {
          return _this5.element.style[_name] = _value;
        };
        if (both || horizontal) {
          setProp("height", height);
          setProp("width", width);
        } else {
          setProp("height", height);
        }
      }
    },
    setSpacerSize: function setSpacerSize() {
      var _this6 = this;
      var items2 = this.items;
      if (items2) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var contentPos = this.getContentPosition();
        var setProp = function setProp2(_name, _value, _size) {
          var _cpos = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
          return _this6.spacerStyle = _objectSpread$3(_objectSpread$3({}, _this6.spacerStyle), _defineProperty$4({}, "".concat(_name), (_value || []).length * _size + _cpos + "px"));
        };
        if (both) {
          setProp("height", items2, this.itemSize[0], contentPos.y);
          setProp("width", this.columns || items2[1], this.itemSize[1], contentPos.x);
        } else {
          horizontal ? setProp("width", this.columns || items2, this.itemSize, contentPos.x) : setProp("height", items2, this.itemSize, contentPos.y);
        }
      }
    },
    setContentPosition: function setContentPosition(pos) {
      var _this7 = this;
      if (this.content && !this.appendOnly) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var first2 = pos ? pos.first : this.first;
        var calculateTranslateVal = function calculateTranslateVal2(_first, _size) {
          return _first * _size;
        };
        var setTransform = function setTransform2() {
          var _x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var _y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return _this7.contentStyle = _objectSpread$3(_objectSpread$3({}, _this7.contentStyle), {
            transform: "translate3d(".concat(_x, "px, ").concat(_y, "px, 0)")
          });
        };
        if (both) {
          setTransform(calculateTranslateVal(first2.cols, this.itemSize[1]), calculateTranslateVal(first2.rows, this.itemSize[0]));
        } else {
          var translateVal = calculateTranslateVal(first2, this.itemSize);
          horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
        }
      }
    },
    onScrollPositionChange: function onScrollPositionChange(event) {
      var _this8 = this;
      var target = event.target;
      var both = this.isBoth();
      var horizontal = this.isHorizontal();
      var contentPos = this.getContentPosition();
      var calculateScrollPos = function calculateScrollPos2(_pos, _cpos) {
        return _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
      };
      var calculateCurrentIndex = function calculateCurrentIndex2(_pos, _size) {
        return Math.floor(_pos / (_size || _pos));
      };
      var calculateTriggerIndex = function calculateTriggerIndex2(_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
        return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
      };
      var calculateFirst = function calculateFirst2(_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
        if (_currentIndex <= _numT)
          return 0;
        else
          return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
      };
      var calculateLast = function calculateLast2(_currentIndex, _first, _last, _num, _numT, _isCols) {
        var lastValue = _first + _num + 2 * _numT;
        if (_currentIndex >= _numT) {
          lastValue += _numT + 1;
        }
        return _this8.getLast(lastValue, _isCols);
      };
      var scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
      var scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
      var newFirst = both ? {
        rows: 0,
        cols: 0
      } : 0;
      var newLast = this.last;
      var isRangeChanged = false;
      var newScrollPos = this.lastScrollPos;
      if (both) {
        var isScrollDown = this.lastScrollPos.top <= scrollTop;
        var isScrollRight = this.lastScrollPos.left <= scrollLeft;
        if (!this.appendOnly || this.appendOnly && (isScrollDown || isScrollRight)) {
          var currentIndex = {
            rows: calculateCurrentIndex(scrollTop, this.itemSize[0]),
            cols: calculateCurrentIndex(scrollLeft, this.itemSize[1])
          };
          var triggerIndex = {
            rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newFirst = {
            rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newLast = {
            rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
            cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
          };
          isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
          newScrollPos = {
            top: scrollTop,
            left: scrollLeft
          };
        }
      } else {
        var scrollPos = horizontal ? scrollLeft : scrollTop;
        var isScrollDownOrRight = this.lastScrollPos <= scrollPos;
        if (!this.appendOnly || this.appendOnly && isScrollDownOrRight) {
          var _currentIndex2 = calculateCurrentIndex(scrollPos, this.itemSize);
          var _triggerIndex2 = calculateTriggerIndex(_currentIndex2, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newFirst = calculateFirst(_currentIndex2, _triggerIndex2, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newLast = calculateLast(_currentIndex2, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
          isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
          newScrollPos = scrollPos;
        }
      }
      return {
        first: newFirst,
        last: newLast,
        isRangeChanged,
        scrollPos: newScrollPos
      };
    },
    onScrollChange: function onScrollChange(event) {
      var _this$onScrollPositio = this.onScrollPositionChange(event), first2 = _this$onScrollPositio.first, last = _this$onScrollPositio.last, isRangeChanged = _this$onScrollPositio.isRangeChanged, scrollPos = _this$onScrollPositio.scrollPos;
      if (isRangeChanged) {
        var newState = {
          first: first2,
          last
        };
        this.setContentPosition(newState);
        this.first = first2;
        this.last = last;
        this.lastScrollPos = scrollPos;
        this.$emit("scroll-index-change", newState);
        if (this.lazy && this.isPageChanged(first2)) {
          var lazyLoadState = {
            first: this.step ? Math.min(this.getPageByFirst(first2) * this.step, this.items.length - this.step) : first2,
            last: Math.min(this.step ? (this.getPageByFirst(first2) + 1) * this.step : last, this.items.length)
          };
          var isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
          isLazyStateChanged && this.$emit("lazy-load", lazyLoadState);
          this.lazyLoadState = lazyLoadState;
        }
      }
    },
    onScroll: function onScroll(event) {
      var _this9 = this;
      this.$emit("scroll", event);
      if (this.delay && this.isPageChanged()) {
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout);
        }
        if (!this.d_loading && this.showLoader) {
          var _this$onScrollPositio2 = this.onScrollPositionChange(event), isRangeChanged = _this$onScrollPositio2.isRangeChanged;
          var changed = isRangeChanged || (this.step ? this.isPageChanged() : false);
          changed && (this.d_loading = true);
        }
        this.scrollTimeout = setTimeout(function() {
          _this9.onScrollChange(event);
          if (_this9.d_loading && _this9.showLoader && (!_this9.lazy || _this9.loading === void 0)) {
            _this9.d_loading = false;
            _this9.page = _this9.getPageByFirst();
          }
        }, this.delay);
      } else {
        this.onScrollChange(event);
      }
    },
    onResize: function onResize() {
      var _this10 = this;
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(function() {
        if (DomHandler.isVisible(_this10.element)) {
          var both = _this10.isBoth();
          var vertical = _this10.isVertical();
          var horizontal = _this10.isHorizontal();
          var _ref3 = [DomHandler.getWidth(_this10.element), DomHandler.getHeight(_this10.element)], width = _ref3[0], height = _ref3[1];
          var isDiffWidth = width !== _this10.defaultWidth, isDiffHeight = height !== _this10.defaultHeight;
          var reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;
          if (reinit) {
            _this10.d_numToleratedItems = _this10.numToleratedItems;
            _this10.defaultWidth = width;
            _this10.defaultHeight = height;
            _this10.defaultContentWidth = DomHandler.getWidth(_this10.content);
            _this10.defaultContentHeight = DomHandler.getHeight(_this10.content);
            _this10.init();
          }
        }
      }, this.resizeDelay);
    },
    bindResizeListener: function bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = this.onResize.bind(this);
        window.addEventListener("resize", this.resizeListener);
        window.addEventListener("orientationchange", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        window.removeEventListener("orientationchange", this.resizeListener);
        this.resizeListener = null;
      }
    },
    getOptions: function getOptions(renderedIndex) {
      var count = (this.items || []).length;
      var index = this.isBoth() ? this.first.rows + renderedIndex : this.first + renderedIndex;
      return {
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      };
    },
    getLoaderOptions: function getLoaderOptions(index, extOptions) {
      var count = this.loaderArr.length;
      return _objectSpread$3({
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      }, extOptions);
    },
    getPageByFirst: function getPageByFirst(first2) {
      return Math.floor(((first2 !== null && first2 !== void 0 ? first2 : this.first) + this.d_numToleratedItems * 4) / (this.step || 1));
    },
    isPageChanged: function isPageChanged(first2) {
      return this.step ? this.page !== this.getPageByFirst(first2 !== null && first2 !== void 0 ? first2 : this.first) : true;
    },
    setContentEl: function setContentEl(el) {
      this.content = el || this.content || DomHandler.findSingle(this.element, '[data-pc-section="content"]');
    },
    elementRef: function elementRef(el) {
      this.element = el;
    },
    contentRef: function contentRef(el) {
      this.content = el;
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ["p-virtualscroller", this["class"], {
        "p-virtualscroller-inline": this.inline,
        "p-virtualscroller-both p-both-scroll": this.isBoth(),
        "p-virtualscroller-horizontal p-horizontal-scroll": this.isHorizontal()
      }];
    },
    contentClass: function contentClass() {
      return ["p-virtualscroller-content", {
        "p-virtualscroller-loading": this.d_loading
      }];
    },
    loaderClass: function loaderClass() {
      return ["p-virtualscroller-loader", {
        "p-component-overlay": !this.$slots.loader
      }];
    },
    loadedItems: function loadedItems() {
      var _this11 = this;
      if (this.items && !this.d_loading) {
        if (this.isBoth())
          return this.items.slice(this.appendOnly ? 0 : this.first.rows, this.last.rows).map(function(item2) {
            return _this11.columns ? item2 : item2.slice(_this11.appendOnly ? 0 : _this11.first.cols, _this11.last.cols);
          });
        else if (this.isHorizontal() && this.columns)
          return this.items;
        else
          return this.items.slice(this.appendOnly ? 0 : this.first, this.last);
      }
      return [];
    },
    loadedRows: function loadedRows() {
      return this.d_loading ? this.loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    },
    loadedColumns: function loadedColumns() {
      if (this.columns) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        if (both || horizontal) {
          return this.d_loading && this.loaderDisabled ? both ? this.loaderArr[0] : this.loaderArr : this.columns.slice(both ? this.first.cols : this.first, both ? this.last.cols : this.last);
        }
      }
      return this.columns;
    }
  },
  components: {
    SpinnerIcon: script$3$1
  }
};
var _hoisted_1$8 = ["tabindex"];
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  return !_ctx.disabled ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    ref: $options.elementRef,
    "class": $options.containerClass,
    tabindex: _ctx.tabindex,
    style: _ctx.style,
    onScroll: _cache[0] || (_cache[0] = function() {
      return $options.onScroll && $options.onScroll.apply($options, arguments);
    })
  }, _ctx.ptm("root"), {
    "data-pc-name": "virtualscroller"
  }), [renderSlot(_ctx.$slots, "content", {
    styleClass: $options.contentClass,
    items: $options.loadedItems,
    getItemOptions: $options.getOptions,
    loading: $data.d_loading,
    getLoaderOptions: $options.getLoaderOptions,
    itemSize: _ctx.itemSize,
    rows: $options.loadedRows,
    columns: $options.loadedColumns,
    contentRef: $options.contentRef,
    spacerStyle: $data.spacerStyle,
    contentStyle: $data.contentStyle,
    vertical: $options.isVertical(),
    horizontal: $options.isHorizontal(),
    both: $options.isBoth()
  }, function() {
    return [createElementVNode("div", mergeProps({
      ref: $options.contentRef,
      "class": $options.contentClass,
      style: $data.contentStyle
    }, _ctx.ptm("content")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.loadedItems, function(item2, index) {
      return renderSlot(_ctx.$slots, "item", {
        key: index,
        item: item2,
        options: $options.getOptions(index)
      });
    }), 128))], 16)];
  }), _ctx.showSpacer ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": "p-virtualscroller-spacer",
    style: $data.spacerStyle
  }, _ctx.ptm("spacer")), null, 16)) : createCommentVNode("", true), !_ctx.loaderDisabled && _ctx.showLoader && $data.d_loading ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": $options.loaderClass
  }, _ctx.ptm("loader")), [_ctx.$slots && _ctx.$slots.loader ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($data.loaderArr, function(_, index) {
    return renderSlot(_ctx.$slots, "loader", {
      key: index,
      options: $options.getLoaderOptions(index, $options.isBoth() && {
        numCols: _ctx.d_numItemsInViewport.cols
      })
    });
  }), 128)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "loadingicon", {}, function() {
    return [createVNode(_component_SpinnerIcon, mergeProps({
      spin: "",
      "class": "p-virtualscroller-loading-icon"
    }, _ctx.ptm("loadingIcon")), null, 16)];
  })], 16)) : createCommentVNode("", true)], 16, _hoisted_1$8)) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [renderSlot(_ctx.$slots, "default"), renderSlot(_ctx.$slots, "content", {
    items: _ctx.items,
    rows: _ctx.items,
    columns: $options.loadedColumns
  })], 64));
}
script$j.render = render$i;
var styles$2 = "\n.p-dropdown {\n    display: inline-flex;\n    cursor: pointer;\n    position: relative;\n    user-select: none;\n}\n\n.p-dropdown-clear-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n\n.p-dropdown-trigger {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n}\n\n.p-dropdown-label {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    flex: 1 1 auto;\n    width: 1%;\n    text-overflow: ellipsis;\n    cursor: pointer;\n}\n\n.p-dropdown-label-empty {\n    overflow: hidden;\n    opacity: 0;\n}\n\ninput.p-dropdown-label {\n    cursor: default;\n}\n\n.p-dropdown .p-dropdown-panel {\n    min-width: 100%;\n}\n\n.p-dropdown-panel {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.p-dropdown-items-wrapper {\n    overflow: auto;\n}\n\n.p-dropdown-item {\n    cursor: pointer;\n    font-weight: normal;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n}\n\n.p-dropdown-item-group {\n    cursor: auto;\n}\n\n.p-dropdown-items {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\n.p-dropdown-filter {\n    width: 100%;\n}\n\n.p-dropdown-filter-container {\n    position: relative;\n}\n\n.p-dropdown-filter-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n\n.p-fluid .p-dropdown {\n    display: flex;\n}\n\n.p-fluid .p-dropdown .p-dropdown-label {\n    width: 1%;\n}\n";
var classes$2 = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props, state = _ref.state;
    return ["p-dropdown p-component p-inputwrapper", {
      "p-disabled": props.disabled,
      "p-dropdown-clearable": props.showClear && !props.disabled,
      "p-focus": state.focused,
      "p-inputwrapper-filled": instance.hasSelectedOption,
      "p-inputwrapper-focus": state.focused || state.overlayVisible,
      "p-overlay-open": state.overlayVisible
    }];
  },
  input: function input(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-dropdown-label p-inputtext", {
      "p-placeholder": !props.editable && instance.label === props.placeholder,
      "p-dropdown-label-empty": !props.editable && !instance.$slots["value"] && (instance.label === "p-emptylabel" || instance.label.length === 0)
    }];
  },
  clearIcon: "p-dropdown-clear-icon",
  trigger: "p-dropdown-trigger",
  loadingicon: "p-dropdown-trigger-icon",
  dropdownIcon: "p-dropdown-trigger-icon",
  panel: function panel(_ref3) {
    var instance = _ref3.instance;
    return ["p-dropdown-panel p-component", {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }];
  },
  header: "p-dropdown-header",
  filterContainer: "p-dropdown-filter-container",
  filterInput: "p-dropdown-filter p-inputtext p-component",
  filterIcon: "p-dropdown-filter-icon",
  wrapper: "p-dropdown-items-wrapper",
  list: "p-dropdown-items",
  itemGroup: "p-dropdown-item-group",
  item: function item(_ref4) {
    var instance = _ref4.instance, state = _ref4.state, option = _ref4.option, focusedOption = _ref4.focusedOption;
    return ["p-dropdown-item", {
      "p-highlight": instance.isSelected(option),
      "p-focus": state.focusedOptionIndex === focusedOption,
      "p-disabled": instance.isOptionDisabled(option)
    }];
  },
  emptyMessage: "p-dropdown-empty-message"
};
var _useStyle$2 = useStyle(styles$2, {
  name: "dropdown",
  manual: true
}), loadStyle$2 = _useStyle$2.load;
var script$1$2 = {
  name: "BaseDropdown",
  "extends": script$6$1,
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
    editable: Boolean,
    placeholder: {
      type: String,
      "default": null
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    dataKey: null,
    showClear: {
      type: Boolean,
      "default": false
    },
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    inputProps: {
      type: null,
      "default": null
    },
    panelClass: {
      type: [String, Object],
      "default": null
    },
    panelStyle: {
      type: Object,
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
    clearIconProps: {
      type: null,
      "default": null
    },
    appendTo: {
      type: String,
      "default": "body"
    },
    loading: {
      type: Boolean,
      "default": false
    },
    clearIcon: {
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
    selectOnFocus: {
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
    classes: classes$2,
    loadStyle: loadStyle$2
  },
  provide: function provide2() {
    return {
      $parentInstance: this
    };
  }
};
function _typeof$1$2(obj) {
  "@babel/helpers - typeof";
  return _typeof$1$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1$2(obj);
}
function _toConsumableArray$2(arr) {
  return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$2();
}
function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2(o, minLen);
}
function _iterableToArray$2(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$2(arr);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys$1$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1$1(Object(source), true).forEach(function(key) {
      _defineProperty$1$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$1$1(obj, key, value) {
  key = _toPropertyKey$1$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$1$1(arg) {
  var key = _toPrimitive$1$1(arg, "string");
  return _typeof$1$2(key) === "symbol" ? key : String(key);
}
function _toPrimitive$1$1(input2, hint) {
  if (_typeof$1$2(input2) !== "object" || input2 === null)
    return input2;
  var prim = input2[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input2, hint || "default");
    if (_typeof$1$2(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input2);
}
var script$i = {
  name: "Dropdown",
  "extends": script$1$2,
  emits: ["update:modelValue", "change", "focus", "blur", "before-show", "before-hide", "show", "hide", "filter"],
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  overlay: null,
  list: null,
  virtualScroller: null,
  searchTimeout: null,
  searchValue: null,
  isModelValueChanged: false,
  focusOnHover: false,
  data: function data2() {
    return {
      id: this.$attrs.id,
      focused: false,
      focusedOptionIndex: -1,
      filterValue: null,
      overlayVisible: false
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    modelValue: function modelValue() {
      this.isModelValueChanged = true;
    },
    options: function options() {
      this.autoUpdateModel();
    }
  },
  mounted: function mounted3() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
  },
  updated: function updated3() {
    if (this.overlayVisible && this.isModelValueChanged) {
      this.scrollInView(this.findSelectedOptionIndex());
    }
    this.isModelValueChanged = false;
  },
  beforeUnmount: function beforeUnmount() {
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
    getOptionIndex: function getOptionIndex(index, fn) {
      return this.virtualScrollerDisabled ? index : fn && fn(index)["index"];
    },
    getOptionLabel: function getOptionLabel(option) {
      return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    },
    getOptionValue: function getOptionValue(option) {
      return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    },
    getOptionRenderKey: function getOptionRenderKey(option, index) {
      return (this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option)) + "_" + index;
    },
    getPTOptions: function getPTOptions(option, itemOptions, index, key) {
      return this.ptm(key, {
        context: {
          selected: this.isSelected(option),
          focused: this.focusedOptionIndex === this.getOptionIndex(index, itemOptions),
          disabled: this.isOptionDisabled(option)
        }
      });
    },
    isOptionDisabled: function isOptionDisabled(option) {
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
    getAriaPosInset: function getAriaPosInset(index) {
      var _this = this;
      return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter(function(option) {
        return _this.isOptionGroup(option);
      }).length : index) + 1;
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
          this.onArrowUpKey(event, this.editable);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(event, this.editable);
          break;
        case "Home":
          this.onHomeKey(event, this.editable);
          break;
        case "End":
          this.onEndKey(event, this.editable);
          break;
        case "PageDown":
          this.onPageDownKey(event);
          break;
        case "PageUp":
          this.onPageUpKey(event);
          break;
        case "Space":
          this.onSpaceKey(event, this.editable);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "Backspace":
          this.onBackspaceKey(event, this.editable);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            !this.editable && this.searchOptions(event, event.key);
          }
          break;
      }
    },
    onEditableInput: function onEditableInput(event) {
      var value = event.target.value;
      this.searchValue = "";
      var matched = this.searchOptions(event, value);
      !matched && (this.focusedOptionIndex = -1);
      this.updateModel(event, value);
    },
    onContainerClick: function onContainerClick(event) {
      if (this.disabled || this.loading) {
        return;
      }
      if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.tagName === "path") {
        return;
      } else if (!this.overlay || !this.overlay.contains(event.target)) {
        this.overlayVisible ? this.hide(true) : this.show(true);
      }
    },
    onClearClick: function onClearClick(event) {
      this.updateModel(event, null);
    },
    onFirstHiddenFocus: function onFirstHiddenFocus(event) {
      var focusableEl = event.relatedTarget === this.$refs.focusInput ? DomHandler.getFirstFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      DomHandler.focus(focusableEl);
    },
    onLastHiddenFocus: function onLastHiddenFocus(event) {
      var focusableEl = event.relatedTarget === this.$refs.focusInput ? DomHandler.getLastFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      DomHandler.focus(focusableEl);
    },
    onOptionSelect: function onOptionSelect(event, option) {
      var isHide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var value = this.getOptionValue(option);
      this.updateModel(event, value);
      isHide && this.hide(true);
    },
    onOptionMouseMove: function onOptionMouseMove(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
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
      if (pressedInInputText) {
        event.currentTarget.setSelectionRange(0, 0);
        this.focusedOptionIndex = -1;
      } else {
        this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (pressedInInputText) {
        var target = event.currentTarget;
        var len = target.value.length;
        target.setSelectionRange(len, len);
        this.focusedOptionIndex = -1;
      } else {
        this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
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
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.hide();
      }
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      !pressedInInputText && this.onEnterKey(event);
    },
    onEscapeKey: function onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    },
    onTabKey: function onTabKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (!pressedInInputText) {
        if (this.overlayVisible && this.hasFocusableElements()) {
          DomHandler.focus(this.$refs.firstHiddenFocusableElementOnOverlay);
          event.preventDefault();
        } else {
          if (this.focusedOptionIndex !== -1) {
            this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
          }
          this.overlayVisible && this.hide(this.filter);
        }
      }
    },
    onBackspaceKey: function onBackspaceKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (pressedInInputText) {
        !this.overlayVisible && this.show();
      }
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
      var _this3 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this3.overlayVisible && _this3.overlay && !_this3.$el.contains(event.target) && !_this3.overlay.contains(event.target)) {
            _this3.hide();
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
      var _this4 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function() {
          if (_this4.overlayVisible) {
            _this4.hide();
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
    bindResizeListener: function bindResizeListener2() {
      var _this5 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this5.overlayVisible && !DomHandler.isTouchDevice()) {
            _this5.hide();
          }
        };
        window.addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener2() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
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
      return this.isValidOption(option) && ObjectUtils.equals(this.modelValue, this.getOptionValue(option), this.equalityKey);
    },
    findFirstOptionIndex: function findFirstOptionIndex() {
      var _this6 = this;
      return this.visibleOptions.findIndex(function(option) {
        return _this6.isValidOption(option);
      });
    },
    findLastOptionIndex: function findLastOptionIndex() {
      var _this7 = this;
      return ObjectUtils.findLastIndex(this.visibleOptions, function(option) {
        return _this7.isValidOption(option);
      });
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var _this8 = this;
      var matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function(option) {
        return _this8.isValidOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var _this9 = this;
      var matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index), function(option) {
        return _this9.isValidOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findSelectedOptionIndex: function findSelectedOptionIndex() {
      var _this10 = this;
      return this.hasSelectedOption ? this.visibleOptions.findIndex(function(option) {
        return _this10.isValidSelectedOption(option);
      }) : -1;
    },
    findFirstFocusedOptionIndex: function findFirstFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    },
    findLastFocusedOptionIndex: function findLastFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    },
    searchOptions: function searchOptions(event, _char) {
      var _this11 = this;
      this.searchValue = (this.searchValue || "") + _char;
      var optionIndex = -1;
      var matched = false;
      if (this.focusedOptionIndex !== -1) {
        optionIndex = this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(option) {
          return _this11.isOptionMatched(option);
        });
        optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex(function(option) {
          return _this11.isOptionMatched(option);
        }) : optionIndex + this.focusedOptionIndex;
      } else {
        optionIndex = this.visibleOptions.findIndex(function(option) {
          return _this11.isOptionMatched(option);
        });
      }
      if (optionIndex !== -1) {
        matched = true;
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
        _this11.searchValue = "";
        _this11.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex !== index) {
        this.focusedOptionIndex = index;
        this.scrollInView();
        if (this.selectOnFocus) {
          this.onOptionSelect(event, this.visibleOptions[index], false);
        }
      }
    },
    scrollInView: function scrollInView2() {
      var _this12 = this;
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      var id = index !== -1 ? "".concat(this.id, "_").concat(index) : this.focusedOptionId;
      var element = DomHandler.findSingle(this.list, 'li[id="'.concat(id, '"]'));
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "start"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(function() {
          _this12.virtualScroller && _this12.virtualScroller.scrollToIndex(index !== -1 ? index : _this12.focusedOptionIndex);
        }, 0);
      }
    },
    autoUpdateModel: function autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
        this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], false);
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
      var _this13 = this;
      return (options2 || []).reduce(function(result, option, index) {
        result.push({
          optionGroup: option,
          group: true,
          index
        });
        var optionGroupChildren = _this13.getOptionGroupChildren(option);
        optionGroupChildren && optionGroupChildren.forEach(function(o) {
          return result.push(o);
        });
        return result;
      }, []);
    },
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    listRef: function listRef(el, contentRef2) {
      this.list = el;
      contentRef2 && contentRef2(el);
    },
    virtualScrollerRef: function virtualScrollerRef(el) {
      this.virtualScroller = el;
    }
  },
  computed: {
    visibleOptions: function visibleOptions() {
      var _this14 = this;
      var options2 = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      if (this.filterValue) {
        var filteredOptions = FilterService.filter(options2, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          var optionGroups = this.options || [];
          var filtered = [];
          optionGroups.forEach(function(group) {
            var groupChildren = _this14.getOptionGroupChildren(group);
            var filteredItems = groupChildren.filter(function(item2) {
              return filteredOptions.includes(item2);
            });
            if (filteredItems.length > 0)
              filtered.push(_objectSpread$1$1(_objectSpread$1$1({}, group), {}, _defineProperty$1$1({}, typeof _this14.optionGroupChildren === "string" ? _this14.optionGroupChildren : "items", _toConsumableArray$2(filteredItems))));
          });
          return this.flatOptions(filtered);
        }
        return filteredOptions;
      }
      return options2;
    },
    hasSelectedOption: function hasSelectedOption() {
      return ObjectUtils.isNotEmpty(this.modelValue);
    },
    label: function label() {
      var selectedOptionIndex = this.findSelectedOptionIndex();
      return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions[selectedOptionIndex]) : this.placeholder || "p-emptylabel";
    },
    editableInputValue: function editableInputValue() {
      var selectedOptionIndex = this.findSelectedOptionIndex();
      return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions[selectedOptionIndex]) : this.modelValue || "";
    },
    equalityKey: function equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields: function searchFields() {
      return this.filterFields || [this.optionLabel];
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
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll("{0}", "1") : this.emptySelectionMessageText;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.id, "_").concat(this.focusedOptionIndex) : null;
    },
    ariaSetSize: function ariaSetSize() {
      var _this15 = this;
      return this.visibleOptions.filter(function(option) {
        return !_this15.isOptionGroup(option);
      }).length;
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
    ChevronDownIcon: script$m,
    SpinnerIcon: script$3$1,
    FilterIcon: script$k
  }
};
function _typeof$3(obj) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$3(obj);
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
      _defineProperty$3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty$3(obj, key, value) {
  key = _toPropertyKey$3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$3(arg) {
  var key = _toPrimitive$3(arg, "string");
  return _typeof$3(key) === "symbol" ? key : String(key);
}
function _toPrimitive$3(input2, hint) {
  if (_typeof$3(input2) !== "object" || input2 === null)
    return input2;
  var prim = input2[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input2, hint || "default");
    if (_typeof$3(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input2);
}
var _hoisted_1$7 = ["id"];
var _hoisted_2$6 = ["id", "value", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant"];
var _hoisted_3 = ["id", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-disabled"];
var _hoisted_4 = ["value", "placeholder", "aria-owns", "aria-activedescendant"];
var _hoisted_5 = ["id"];
var _hoisted_6 = ["id"];
var _hoisted_7 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-highlight", "data-p-focused", "data-p-disabled"];
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_VirtualScroller = resolveComponent("VirtualScroller");
  var _component_Portal = resolveComponent("Portal");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    id: $data.id,
    "class": _ctx.cx("root"),
    onClick: _cache[15] || (_cache[15] = function() {
      return $options.onContainerClick && $options.onContainerClick.apply($options, arguments);
    })
  }, _ctx.ptm("root"), {
    "data-pc-name": "dropdown"
  }), [_ctx.editable ? (openBlock(), createElementBlock("input", mergeProps({
    key: 0,
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    "class": [_ctx.cx("input"), _ctx.inputClass],
    style: _ctx.inputStyle,
    value: $options.editableInputValue,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    disabled: _ctx.disabled,
    autocomplete: "off",
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
    }),
    onInput: _cache[3] || (_cache[3] = function() {
      return $options.onEditableInput && $options.onEditableInput.apply($options, arguments);
    })
  }, _objectSpread$2(_objectSpread$2({}, _ctx.inputProps), _ctx.ptm("input"))), null, 16, _hoisted_2$6)) : (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    ref: "focusInput",
    id: _ctx.inputId,
    "class": [_ctx.cx("input"), _ctx.inputClass],
    style: _ctx.inputStyle,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    role: "combobox",
    "aria-label": _ctx.ariaLabel || ($options.label === "p-emptylabel" ? void 0 : $options.label),
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $data.id + "_list",
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    "aria-disabled": _ctx.disabled,
    onFocus: _cache[4] || (_cache[4] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[5] || (_cache[5] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[6] || (_cache[6] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _objectSpread$2(_objectSpread$2({}, _ctx.inputProps), _ctx.ptm("input"))), [renderSlot(_ctx.$slots, "value", {
    value: _ctx.modelValue,
    placeholder: _ctx.placeholder
  }, function() {
    return [createTextVNode(toDisplayString($options.label === "p-emptylabel" ? "\xA0" : $options.label || "empty"), 1)];
  })], 16, _hoisted_3)), _ctx.showClear && _ctx.modelValue != null ? renderSlot(_ctx.$slots, "clearicon", {
    key: 2,
    "class": normalizeClass(_ctx.cx("clearIcon")),
    onClick: $options.onClearClick
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon ? "i" : "TimesIcon"), mergeProps({
      ref: "clearIcon",
      "class": [_ctx.cx("clearIcon"), _ctx.clearIcon],
      onClick: $options.onClearClick
    }, _objectSpread$2(_objectSpread$2({}, _ctx.clearIconProps), _ctx.ptm("clearIcon")), {
      "data-pc-section": "clearicon"
    }), null, 16, ["class", "onClick"]))];
  }) : createCommentVNode("", true), createElementVNode("div", mergeProps({
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
            "class": [_ctx.cx("panel"), _ctx.panelClass],
            style: _ctx.panelStyle,
            onClick: _cache[13] || (_cache[13] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[14] || (_cache[14] = function() {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            })
          }, _objectSpread$2(_objectSpread$2({}, _ctx.panelProps), _ctx.ptm("panel"))), [createElementVNode("span", mergeProps({
            ref: "firstHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            "class": "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: _cache[7] || (_cache[7] = function() {
              return $options.onFirstHiddenFocus && $options.onFirstHiddenFocus.apply($options, arguments);
            })
          }, _ctx.ptm("hiddenFirstFocusableEl"), {
            "data-p-hidden-accessible": true,
            "data-p-hidden-focusable": true
          }), null, 16), renderSlot(_ctx.$slots, "header", {
            value: _ctx.modelValue,
            options: $options.visibleOptions
          }), _ctx.filter ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("header")
          }, _ctx.ptm("header")), [createElementVNode("div", mergeProps({
            "class": _ctx.cx("filterContainer")
          }, _ctx.ptm("filterContainer")), [createElementVNode("input", mergeProps({
            ref: "filterInput",
            type: "text",
            value: $data.filterValue,
            onVnodeMounted: _cache[8] || (_cache[8] = function() {
              return $options.onFilterUpdated && $options.onFilterUpdated.apply($options, arguments);
            }),
            "class": _ctx.cx("filterInput"),
            placeholder: _ctx.filterPlaceholder,
            role: "searchbox",
            autocomplete: "off",
            "aria-owns": $data.id + "_list",
            "aria-activedescendant": $options.focusedOptionId,
            onKeydown: _cache[9] || (_cache[9] = function() {
              return $options.onFilterKeyDown && $options.onFilterKeyDown.apply($options, arguments);
            }),
            onBlur: _cache[10] || (_cache[10] = function() {
              return $options.onFilterBlur && $options.onFilterBlur.apply($options, arguments);
            }),
            onInput: _cache[11] || (_cache[11] = function() {
              return $options.onFilterChange && $options.onFilterChange.apply($options, arguments);
            })
          }, _objectSpread$2(_objectSpread$2({}, _ctx.filterInputProps), _ctx.ptm("filterInput"))), null, 16, _hoisted_4), renderSlot(_ctx.$slots, "filtericon", {
            "class": normalizeClass(_ctx.cx("filterIcon"))
          }, function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.filterIcon ? "span" : "FilterIcon"), mergeProps({
              "class": [_ctx.cx("filterIcon"), _ctx.filterIcon]
            }, _ctx.ptm("filterIcon")), null, 16, ["class"]))];
          })], 16), createElementVNode("span", mergeProps({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenFilterResult"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.filterResultMessageText), 17)], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
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
            content: withCtx(function(_ref) {
              var styleClass = _ref.styleClass, contentRef2 = _ref.contentRef, items2 = _ref.items, getItemOptions = _ref.getItemOptions, contentStyle = _ref.contentStyle, itemSize2 = _ref.itemSize;
              return [createElementVNode("ul", mergeProps({
                ref: function ref(el) {
                  return $options.listRef(el, contentRef2);
                },
                id: $data.id + "_list",
                "class": [_ctx.cx("list"), styleClass],
                style: contentStyle,
                role: "listbox"
              }, _ctx.ptm("list")), [(openBlock(true), createElementBlock(Fragment, null, renderList(items2, function(option, i) {
                return openBlock(), createElementBlock(Fragment, {
                  key: $options.getOptionRenderKey(option, $options.getOptionIndex(i, getItemOptions))
                }, [$options.isOptionGroup(option) ? (openBlock(), createElementBlock("li", mergeProps({
                  key: 0,
                  id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize2 ? itemSize2 + "px" : void 0
                  },
                  "class": _ctx.cx("itemGroup"),
                  role: "option"
                }, _ctx.ptm("itemGroup")), [renderSlot(_ctx.$slots, "optiongroup", {
                  option: option.optionGroup,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createTextVNode(toDisplayString($options.getOptionGroupLabel(option.optionGroup)), 1)];
                })], 16, _hoisted_6)) : withDirectives((openBlock(), createElementBlock("li", mergeProps({
                  key: 1,
                  id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                  "class": _ctx.cx("item", {
                    option,
                    focusedOption: $options.getOptionIndex(i, getItemOptions)
                  }),
                  style: {
                    height: itemSize2 ? itemSize2 + "px" : void 0
                  },
                  role: "option",
                  "aria-label": $options.getOptionLabel(option),
                  "aria-selected": $options.isSelected(option),
                  "aria-disabled": $options.isOptionDisabled(option),
                  "aria-setsize": $options.ariaSetSize,
                  "aria-posinset": $options.getAriaPosInset($options.getOptionIndex(i, getItemOptions)),
                  onClick: function onClick($event) {
                    return $options.onOptionSelect($event, option);
                  },
                  onMousemove: function onMousemove($event) {
                    return $options.onOptionMouseMove($event, $options.getOptionIndex(i, getItemOptions));
                  },
                  "data-p-highlight": $options.isSelected(option),
                  "data-p-focused": $data.focusedOptionIndex === $options.getOptionIndex(i, getItemOptions),
                  "data-p-disabled": $options.isOptionDisabled(option)
                }, $options.getPTOptions(option, getItemOptions, i, "item")), [renderSlot(_ctx.$slots, "option", {
                  option,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createTextVNode(toDisplayString($options.getOptionLabel(option)), 1)];
                })], 16, _hoisted_7)), [[_directive_ripple]])], 64);
              }), 128)), $data.filterValue && (!items2 || items2 && items2.length === 0) ? (openBlock(), createElementBlock("li", mergeProps({
                key: 0,
                "class": _ctx.cx("emptyMessage"),
                role: "option"
              }, _ctx.ptm("emptyMessage"), {
                "data-p-hidden-accessible": true
              }), [renderSlot(_ctx.$slots, "emptyfilter", {}, function() {
                return [createTextVNode(toDisplayString($options.emptyFilterMessageText), 1)];
              })], 16)) : !_ctx.options || _ctx.options && _ctx.options.length === 0 ? (openBlock(), createElementBlock("li", mergeProps({
                key: 1,
                "class": _ctx.cx("emptyMessage"),
                role: "option"
              }, _ctx.ptm("emptyMessage"), {
                "data-p-hidden-accessible": true
              }), [renderSlot(_ctx.$slots, "empty", {}, function() {
                return [createTextVNode(toDisplayString($options.emptyMessageText), 1)];
              })], 16)) : createCommentVNode("", true)], 16, _hoisted_5)];
            }),
            _: 2
          }, [_ctx.$slots.loader ? {
            name: "loader",
            fn: withCtx(function(_ref2) {
              var options2 = _ref2.options;
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
  }, 8, ["appendTo"])], 16, _hoisted_1$7);
}
script$i.render = render$h;
var script$h = {
  name: "AngleDoubleLeftIcon",
  "extends": script$4$1
};
var _hoisted_1$6 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$5 = [_hoisted_1$6];
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$5, 16);
}
script$h.render = render$g;
var script$g = {
  name: "AngleDownIcon",
  "extends": script$4$1
};
var _hoisted_1$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$4 = [_hoisted_1$5];
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$4, 16);
}
script$g.render = render$f;
var script$f = {
  name: "AngleUpIcon",
  "extends": script$4$1
};
var _hoisted_1$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$3 = [_hoisted_1$4];
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$3, 16);
}
script$f.render = render$e;
var styles$1 = "\n.p-inputnumber {\n    display: inline-flex;\n}\n\n.p-inputnumber-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 auto;\n}\n\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {\n    display: none;\n}\n\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    padding: 0;\n}\n\n.p-inputnumber-buttons-stacked .p-inputnumber-input {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n    padding: 0;\n}\n\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group {\n    display: flex;\n    flex-direction: column;\n}\n\n.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {\n    flex: 1 1 auto;\n}\n\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {\n    order: 3;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.p-inputnumber-buttons-horizontal .p-inputnumber-input {\n    order: 2;\n    border-radius: 0;\n}\n\n.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {\n    order: 1;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-inputnumber-buttons-vertical {\n    flex-direction: column;\n}\n\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {\n    order: 1;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    width: 100%;\n}\n\n.p-inputnumber-buttons-vertical .p-inputnumber-input {\n    order: 2;\n    border-radius: 0;\n    text-align: center;\n}\n\n.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {\n    order: 3;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    width: 100%;\n}\n\n.p-inputnumber-input {\n    flex: 1 1 auto;\n}\n\n.p-fluid .p-inputnumber {\n    width: 100%;\n}\n\n.p-fluid .p-inputnumber .p-inputnumber-input {\n    width: 1%;\n}\n\n.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {\n    width: 100%;\n}\n";
var classes$1 = {
  root: function root2(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-inputnumber p-component p-inputwrapper", {
      "p-inputwrapper-filled": instance.filled,
      "p-inputwrapper-focus": instance.focused,
      "p-inputnumber-buttons-stacked": props.showButtons && props.buttonLayout === "stacked",
      "p-inputnumber-buttons-horizontal": props.showButtons && props.buttonLayout === "horizontal",
      "p-inputnumber-buttons-vertical": props.showButtons && props.buttonLayout === "vertical"
    }];
  },
  input: "p-inputnumber-input",
  buttonGroup: "p-inputnumber-button-group",
  incrementButton: function incrementButton(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-inputnumber-button p-inputnumber-button-up", {
      "p-disabled": props.showButtons && props.max !== null && instance.maxBoundry()
    }];
  },
  decrementButton: function decrementButton(_ref3) {
    var instance = _ref3.instance, props = _ref3.props;
    return ["p-inputnumber-button p-inputnumber-button-down", {
      "p-disabled": props.showButtons && props.min !== null && instance.minBoundry()
    }];
  }
};
var _useStyle$1 = useStyle(styles$1, {
  name: "inputnumber",
  manual: true
}), loadStyle$1 = _useStyle$1.load;
var script$1$1 = {
  name: "BaseInputNumber",
  "extends": script$6$1,
  props: {
    modelValue: {
      type: Number,
      "default": null
    },
    format: {
      type: Boolean,
      "default": true
    },
    showButtons: {
      type: Boolean,
      "default": false
    },
    buttonLayout: {
      type: String,
      "default": "stacked"
    },
    incrementButtonClass: {
      type: String,
      "default": null
    },
    decrementButtonClass: {
      type: String,
      "default": null
    },
    incrementButtonIcon: {
      type: String,
      "default": void 0
    },
    decrementButtonIcon: {
      type: String,
      "default": void 0
    },
    locale: {
      type: String,
      "default": void 0
    },
    localeMatcher: {
      type: String,
      "default": void 0
    },
    mode: {
      type: String,
      "default": "decimal"
    },
    prefix: {
      type: String,
      "default": null
    },
    suffix: {
      type: String,
      "default": null
    },
    currency: {
      type: String,
      "default": void 0
    },
    currencyDisplay: {
      type: String,
      "default": void 0
    },
    useGrouping: {
      type: Boolean,
      "default": true
    },
    minFractionDigits: {
      type: Number,
      "default": void 0
    },
    maxFractionDigits: {
      type: Number,
      "default": void 0
    },
    min: {
      type: Number,
      "default": null
    },
    max: {
      type: Number,
      "default": null
    },
    step: {
      type: Number,
      "default": 1
    },
    allowEmpty: {
      type: Boolean,
      "default": true
    },
    highlightOnFocus: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": null
    },
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    inputProps: {
      type: null,
      "default": null
    },
    incrementButtonProps: {
      type: null,
      "default": null
    },
    decrementButtonProps: {
      type: null,
      "default": null
    },
    "aria-labelledby": {
      type: String,
      "default": null
    },
    "aria-label": {
      type: String,
      "default": null
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
function _typeof$1$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1$1(obj);
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
  return _typeof$1$1(key) === "symbol" ? key : String(key);
}
function _toPrimitive$1(input2, hint) {
  if (_typeof$1$1(input2) !== "object" || input2 === null)
    return input2;
  var prim = input2[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input2, hint || "default");
    if (_typeof$1$1(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input2);
}
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$1(arr);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var script$e = {
  name: "InputNumber",
  "extends": script$1$1,
  emits: ["update:modelValue", "input", "focus", "blur"],
  numberFormat: null,
  _numeral: null,
  _decimal: null,
  _group: null,
  _minusSign: null,
  _currency: null,
  _suffix: null,
  _prefix: null,
  _index: null,
  groupChar: "",
  isSpecialChar: null,
  prefixChar: null,
  suffixChar: null,
  timer: null,
  data: function data3() {
    return {
      d_modelValue: this.modelValue,
      focused: false
    };
  },
  watch: {
    modelValue: function modelValue2(newValue) {
      this.d_modelValue = newValue;
    },
    locale: function locale(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    localeMatcher: function localeMatcher(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    mode: function mode(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    currency: function currency(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    currencyDisplay: function currencyDisplay(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    useGrouping: function useGrouping(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    minFractionDigits: function minFractionDigits(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    maxFractionDigits: function maxFractionDigits(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    suffix: function suffix(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    },
    prefix: function prefix(newValue, oldValue) {
      this.updateConstructParser(newValue, oldValue);
    }
  },
  created: function created() {
    this.constructParser();
  },
  methods: {
    getOptions: function getOptions2() {
      return {
        localeMatcher: this.localeMatcher,
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        useGrouping: this.useGrouping,
        minimumFractionDigits: this.minFractionDigits,
        maximumFractionDigits: this.maxFractionDigits
      };
    },
    constructParser: function constructParser() {
      this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
      var numerals = _toConsumableArray$1(new Intl.NumberFormat(this.locale, {
        useGrouping: false
      }).format(9876543210)).reverse();
      var index = new Map(numerals.map(function(d, i) {
        return [d, i];
      }));
      this._numeral = new RegExp("[".concat(numerals.join(""), "]"), "g");
      this._group = this.getGroupingExpression();
      this._minusSign = this.getMinusSignExpression();
      this._currency = this.getCurrencyExpression();
      this._decimal = this.getDecimalExpression();
      this._suffix = this.getSuffixExpression();
      this._prefix = this.getPrefixExpression();
      this._index = function(d) {
        return index.get(d);
      };
    },
    updateConstructParser: function updateConstructParser(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.constructParser();
      }
    },
    escapeRegExp: function escapeRegExp(text2) {
      return text2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    },
    getDecimalExpression: function getDecimalExpression() {
      var formatter = new Intl.NumberFormat(this.locale, _objectSpread$1(_objectSpread$1({}, this.getOptions()), {}, {
        useGrouping: false
      }));
      return new RegExp("[".concat(formatter.format(1.1).replace(this._currency, "").trim().replace(this._numeral, ""), "]"), "g");
    },
    getGroupingExpression: function getGroupingExpression() {
      var formatter = new Intl.NumberFormat(this.locale, {
        useGrouping: true
      });
      this.groupChar = formatter.format(1e6).trim().replace(this._numeral, "").charAt(0);
      return new RegExp("[".concat(this.groupChar, "]"), "g");
    },
    getMinusSignExpression: function getMinusSignExpression() {
      var formatter = new Intl.NumberFormat(this.locale, {
        useGrouping: false
      });
      return new RegExp("[".concat(formatter.format(-1).trim().replace(this._numeral, ""), "]"), "g");
    },
    getCurrencyExpression: function getCurrencyExpression() {
      if (this.currency) {
        var formatter = new Intl.NumberFormat(this.locale, {
          style: "currency",
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        return new RegExp("[".concat(formatter.format(1).replace(/\s/g, "").replace(this._numeral, "").replace(this._group, ""), "]"), "g");
      }
      return new RegExp("[]", "g");
    },
    getPrefixExpression: function getPrefixExpression() {
      if (this.prefix) {
        this.prefixChar = this.prefix;
      } else {
        var formatter = new Intl.NumberFormat(this.locale, {
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay
        });
        this.prefixChar = formatter.format(1).split("1")[0];
      }
      return new RegExp("".concat(this.escapeRegExp(this.prefixChar || "")), "g");
    },
    getSuffixExpression: function getSuffixExpression() {
      if (this.suffix) {
        this.suffixChar = this.suffix;
      } else {
        var formatter = new Intl.NumberFormat(this.locale, {
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
        this.suffixChar = formatter.format(1).split("1")[1];
      }
      return new RegExp("".concat(this.escapeRegExp(this.suffixChar || "")), "g");
    },
    formatValue: function formatValue(value) {
      if (value != null) {
        if (value === "-") {
          return value;
        }
        if (this.format) {
          var formatter = new Intl.NumberFormat(this.locale, this.getOptions());
          var formattedValue2 = formatter.format(value);
          if (this.prefix) {
            formattedValue2 = this.prefix + formattedValue2;
          }
          if (this.suffix) {
            formattedValue2 = formattedValue2 + this.suffix;
          }
          return formattedValue2;
        }
        return value.toString();
      }
      return "";
    },
    parseValue: function parseValue(text2) {
      var filteredText = text2.replace(this._suffix, "").replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "").replace(this._group, "").replace(this._minusSign, "-").replace(this._decimal, ".").replace(this._numeral, this._index);
      if (filteredText) {
        if (filteredText === "-")
          return filteredText;
        var parsedValue = +filteredText;
        return isNaN(parsedValue) ? null : parsedValue;
      }
      return null;
    },
    repeat: function repeat(event, interval, dir) {
      var _this = this;
      if (this.readonly) {
        return;
      }
      var i = interval || 500;
      this.clearTimer();
      this.timer = setTimeout(function() {
        _this.repeat(event, 40, dir);
      }, i);
      this.spin(event, dir);
    },
    spin: function spin(event, dir) {
      if (this.$refs.input) {
        var step = this.step * dir;
        var currentValue = this.parseValue(this.$refs.input.$el.value) || 0;
        var newValue = this.validateValue(currentValue + step);
        this.updateInput(newValue, null, "spin");
        this.updateModel(event, newValue);
        this.handleOnInput(event, currentValue, newValue);
      }
    },
    onUpButtonMouseDown: function onUpButtonMouseDown(event) {
      if (!this.disabled) {
        this.$refs.input.$el.focus();
        this.repeat(event, null, 1);
        event.preventDefault();
      }
    },
    onUpButtonMouseUp: function onUpButtonMouseUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onUpButtonMouseLeave: function onUpButtonMouseLeave() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onUpButtonKeyUp: function onUpButtonKeyUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onUpButtonKeyDown: function onUpButtonKeyDown(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.repeat(event, null, 1);
      }
    },
    onDownButtonMouseDown: function onDownButtonMouseDown(event) {
      if (!this.disabled) {
        this.$refs.input.$el.focus();
        this.repeat(event, null, -1);
        event.preventDefault();
      }
    },
    onDownButtonMouseUp: function onDownButtonMouseUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onDownButtonMouseLeave: function onDownButtonMouseLeave() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onDownButtonKeyUp: function onDownButtonKeyUp() {
      if (!this.disabled) {
        this.clearTimer();
      }
    },
    onDownButtonKeyDown: function onDownButtonKeyDown(event) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        this.repeat(event, null, -1);
      }
    },
    onUserInput: function onUserInput() {
      if (this.isSpecialChar) {
        this.$refs.input.$el.value = this.lastValue;
      }
      this.isSpecialChar = false;
    },
    onInputKeyDown: function onInputKeyDown(event) {
      if (this.readonly) {
        return;
      }
      this.lastValue = event.target.value;
      if (event.shiftKey || event.altKey) {
        this.isSpecialChar = true;
        return;
      }
      var selectionStart = event.target.selectionStart;
      var selectionEnd = event.target.selectionEnd;
      var inputValue = event.target.value;
      var newValueStr = null;
      if (event.altKey) {
        event.preventDefault();
      }
      switch (event.code) {
        case "ArrowUp":
          this.spin(event, 1);
          event.preventDefault();
          break;
        case "ArrowDown":
          this.spin(event, -1);
          event.preventDefault();
          break;
        case "ArrowLeft":
          if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
            event.preventDefault();
          }
          break;
        case "ArrowRight":
          if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
            event.preventDefault();
          }
          break;
        case "Tab":
        case "Enter":
          newValueStr = this.validateValue(this.parseValue(inputValue));
          this.$refs.input.$el.value = this.formatValue(newValueStr);
          this.$refs.input.$el.setAttribute("aria-valuenow", newValueStr);
          this.updateModel(event, newValueStr);
          break;
        case "Backspace": {
          event.preventDefault();
          if (selectionStart === selectionEnd) {
            var deleteChar = inputValue.charAt(selectionStart - 1);
            var _this$getDecimalCharI = this.getDecimalCharIndexes(inputValue), decimalCharIndex = _this$getDecimalCharI.decimalCharIndex, decimalCharIndexWithoutPrefix = _this$getDecimalCharI.decimalCharIndexWithoutPrefix;
            if (this.isNumeralChar(deleteChar)) {
              var decimalLength = this.getDecimalLength(inputValue);
              if (this._group.test(deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
              } else if (this._decimal.test(deleteChar)) {
                this._decimal.lastIndex = 0;
                if (decimalLength) {
                  this.$refs.input.$el.setSelectionRange(selectionStart - 1, selectionStart - 1);
                } else {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                }
              } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                var insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
                newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
              } else if (decimalCharIndexWithoutPrefix === 1) {
                newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            }
            this.updateValue(event, newValueStr, null, "delete-single");
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, null, "delete-range");
          }
          break;
        }
        case "Delete":
          event.preventDefault();
          if (selectionStart === selectionEnd) {
            var _deleteChar = inputValue.charAt(selectionStart);
            var _this$getDecimalCharI2 = this.getDecimalCharIndexes(inputValue), _decimalCharIndex = _this$getDecimalCharI2.decimalCharIndex, _decimalCharIndexWithoutPrefix = _this$getDecimalCharI2.decimalCharIndexWithoutPrefix;
            if (this.isNumeralChar(_deleteChar)) {
              var _decimalLength = this.getDecimalLength(inputValue);
              if (this._group.test(_deleteChar)) {
                this._group.lastIndex = 0;
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
              } else if (this._decimal.test(_deleteChar)) {
                this._decimal.lastIndex = 0;
                if (_decimalLength) {
                  this.$refs.input.$el.setSelectionRange(selectionStart + 1, selectionStart + 1);
                } else {
                  newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                }
              } else if (_decimalCharIndex > 0 && selectionStart > _decimalCharIndex) {
                var _insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < _decimalLength ? "" : "0";
                newValueStr = inputValue.slice(0, selectionStart) + _insertedText + inputValue.slice(selectionStart + 1);
              } else if (_decimalCharIndexWithoutPrefix === 1) {
                newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
                newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            }
            this.updateValue(event, newValueStr, null, "delete-back-single");
          } else {
            newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, null, "delete-range");
          }
          break;
        case "Home":
          if (this.min) {
            this.updateModel(event, this.min);
            event.preventDefault();
          }
          break;
        case "End":
          if (this.max) {
            this.updateModel(event, this.max);
            event.preventDefault();
          }
          break;
      }
    },
    onInputKeyPress: function onInputKeyPress(event) {
      if (this.readonly) {
        return;
      }
      event.preventDefault();
      var code = event.which || event.keyCode;
      var _char = String.fromCharCode(code);
      var isDecimalSign2 = this.isDecimalSign(_char);
      var isMinusSign2 = this.isMinusSign(_char);
      if (48 <= code && code <= 57 || isMinusSign2 || isDecimalSign2) {
        this.insert(event, _char, {
          isDecimalSign: isDecimalSign2,
          isMinusSign: isMinusSign2
        });
      }
    },
    onPaste: function onPaste(event) {
      event.preventDefault();
      var data6 = (event.clipboardData || window["clipboardData"]).getData("Text");
      if (data6) {
        var filteredData = this.parseValue(data6);
        if (filteredData != null) {
          this.insert(event, filteredData.toString());
        }
      }
    },
    allowMinusSign: function allowMinusSign() {
      return this.min === null || this.min < 0;
    },
    isMinusSign: function isMinusSign(_char2) {
      if (this._minusSign.test(_char2) || _char2 === "-") {
        this._minusSign.lastIndex = 0;
        return true;
      }
      return false;
    },
    isDecimalSign: function isDecimalSign(_char3) {
      if (this._decimal.test(_char3)) {
        this._decimal.lastIndex = 0;
        return true;
      }
      return false;
    },
    isDecimalMode: function isDecimalMode() {
      return this.mode === "decimal";
    },
    getDecimalCharIndexes: function getDecimalCharIndexes(val) {
      var decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      var filteredVal = val.replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "");
      var decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
      this._decimal.lastIndex = 0;
      return {
        decimalCharIndex,
        decimalCharIndexWithoutPrefix
      };
    },
    getCharIndexes: function getCharIndexes(val) {
      var decimalCharIndex = val.search(this._decimal);
      this._decimal.lastIndex = 0;
      var minusCharIndex = val.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      var suffixCharIndex = val.search(this._suffix);
      this._suffix.lastIndex = 0;
      var currencyCharIndex = val.search(this._currency);
      this._currency.lastIndex = 0;
      return {
        decimalCharIndex,
        minusCharIndex,
        suffixCharIndex,
        currencyCharIndex
      };
    },
    insert: function insert(event, text2) {
      var sign = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        isDecimalSign: false,
        isMinusSign: false
      };
      var minusCharIndexOnText = text2.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
        return;
      }
      var selectionStart = this.$refs.input.$el.selectionStart;
      var selectionEnd = this.$refs.input.$el.selectionEnd;
      var inputValue = this.$refs.input.$el.value.trim();
      var _this$getCharIndexes = this.getCharIndexes(inputValue), decimalCharIndex = _this$getCharIndexes.decimalCharIndex, minusCharIndex = _this$getCharIndexes.minusCharIndex, suffixCharIndex = _this$getCharIndexes.suffixCharIndex, currencyCharIndex = _this$getCharIndexes.currencyCharIndex;
      var newValueStr;
      if (sign.isMinusSign) {
        if (selectionStart === 0) {
          newValueStr = inputValue;
          if (minusCharIndex === -1 || selectionEnd !== 0) {
            newValueStr = this.insertText(inputValue, text2, 0, selectionEnd);
          }
          this.updateValue(event, newValueStr, text2, "insert");
        }
      } else if (sign.isDecimalSign) {
        if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
          this.updateValue(event, inputValue, text2, "insert");
        } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
          newValueStr = this.insertText(inputValue, text2, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text2, "insert");
        } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
          newValueStr = this.insertText(inputValue, text2, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text2, "insert");
        }
      } else {
        var maxFractionDigits2 = this.numberFormat.resolvedOptions().maximumFractionDigits;
        var operation = selectionStart !== selectionEnd ? "range-insert" : "insert";
        if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
          if (selectionStart + text2.length - (decimalCharIndex + 1) <= maxFractionDigits2) {
            var charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
            newValueStr = inputValue.slice(0, selectionStart) + text2 + inputValue.slice(selectionStart + text2.length, charIndex) + inputValue.slice(charIndex);
            this.updateValue(event, newValueStr, text2, operation);
          }
        } else {
          newValueStr = this.insertText(inputValue, text2, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, text2, operation);
        }
      }
    },
    insertText: function insertText(value, text2, start, end) {
      var textSplit = text2 === "." ? text2 : text2.split(".");
      if (textSplit.length === 2) {
        var decimalCharIndex = value.slice(start, end).search(this._decimal);
        this._decimal.lastIndex = 0;
        return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text2) + value.slice(end) : value || this.formatValue(text2);
      } else if (end - start === value.length) {
        return this.formatValue(text2);
      } else if (start === 0) {
        return text2 + value.slice(end);
      } else if (end === value.length) {
        return value.slice(0, start) + text2;
      } else {
        return value.slice(0, start) + text2 + value.slice(end);
      }
    },
    deleteRange: function deleteRange(value, start, end) {
      var newValueStr;
      if (end - start === value.length)
        newValueStr = "";
      else if (start === 0)
        newValueStr = value.slice(end);
      else if (end === value.length)
        newValueStr = value.slice(0, start);
      else
        newValueStr = value.slice(0, start) + value.slice(end);
      return newValueStr;
    },
    initCursor: function initCursor() {
      var selectionStart = this.$refs.input.$el.selectionStart;
      var inputValue = this.$refs.input.$el.value;
      var valueLength = inputValue.length;
      var index = null;
      var prefixLength = (this.prefixChar || "").length;
      inputValue = inputValue.replace(this._prefix, "");
      selectionStart = selectionStart - prefixLength;
      var _char4 = inputValue.charAt(selectionStart);
      if (this.isNumeralChar(_char4)) {
        return selectionStart + prefixLength;
      }
      var i = selectionStart - 1;
      while (i >= 0) {
        _char4 = inputValue.charAt(i);
        if (this.isNumeralChar(_char4)) {
          index = i + prefixLength;
          break;
        } else {
          i--;
        }
      }
      if (index !== null) {
        this.$refs.input.$el.setSelectionRange(index + 1, index + 1);
      } else {
        i = selectionStart;
        while (i < valueLength) {
          _char4 = inputValue.charAt(i);
          if (this.isNumeralChar(_char4)) {
            index = i + prefixLength;
            break;
          } else {
            i++;
          }
        }
        if (index !== null) {
          this.$refs.input.$el.setSelectionRange(index, index);
        }
      }
      return index || 0;
    },
    onInputClick: function onInputClick() {
      var currentValue = this.$refs.input.$el.value;
      if (!this.readonly && currentValue !== DomHandler.getSelection()) {
        this.initCursor();
      }
    },
    isNumeralChar: function isNumeralChar(_char5) {
      if (_char5.length === 1 && (this._numeral.test(_char5) || this._decimal.test(_char5) || this._group.test(_char5) || this._minusSign.test(_char5))) {
        this.resetRegex();
        return true;
      }
      return false;
    },
    resetRegex: function resetRegex() {
      this._numeral.lastIndex = 0;
      this._decimal.lastIndex = 0;
      this._group.lastIndex = 0;
      this._minusSign.lastIndex = 0;
    },
    updateValue: function updateValue(event, valueStr, insertedValueStr, operation) {
      var currentValue = this.$refs.input.$el.value;
      var newValue = null;
      if (valueStr != null) {
        newValue = this.parseValue(valueStr);
        newValue = !newValue && !this.allowEmpty ? 0 : newValue;
        this.updateInput(newValue, insertedValueStr, operation, valueStr);
        this.handleOnInput(event, currentValue, newValue);
      }
    },
    handleOnInput: function handleOnInput(event, currentValue, newValue) {
      if (this.isValueChanged(currentValue, newValue)) {
        this.$emit("input", {
          originalEvent: event,
          value: newValue,
          formattedValue: currentValue
        });
      }
    },
    isValueChanged: function isValueChanged(currentValue, newValue) {
      if (newValue === null && currentValue !== null) {
        return true;
      }
      if (newValue != null) {
        var parsedCurrentValue = typeof currentValue === "string" ? this.parseValue(currentValue) : currentValue;
        return newValue !== parsedCurrentValue;
      }
      return false;
    },
    validateValue: function validateValue(value) {
      if (value === "-" || value == null) {
        return null;
      }
      if (this.min != null && value < this.min) {
        return this.min;
      }
      if (this.max != null && value > this.max) {
        return this.max;
      }
      return value;
    },
    updateInput: function updateInput(value, insertedValueStr, operation, valueStr) {
      insertedValueStr = insertedValueStr || "";
      var inputValue = this.$refs.input.$el.value;
      var newValue = this.formatValue(value);
      var currentLength = inputValue.length;
      if (newValue !== valueStr) {
        newValue = this.concatValues(newValue, valueStr);
      }
      if (currentLength === 0) {
        this.$refs.input.$el.value = newValue;
        this.$refs.input.$el.setSelectionRange(0, 0);
        var index = this.initCursor();
        var selectionEnd = index + insertedValueStr.length;
        this.$refs.input.$el.setSelectionRange(selectionEnd, selectionEnd);
      } else {
        var selectionStart = this.$refs.input.$el.selectionStart;
        var _selectionEnd = this.$refs.input.$el.selectionEnd;
        this.$refs.input.$el.value = newValue;
        var newLength = newValue.length;
        if (operation === "range-insert") {
          var startValue = this.parseValue((inputValue || "").slice(0, selectionStart));
          var startValueStr = startValue !== null ? startValue.toString() : "";
          var startExpr = startValueStr.split("").join("(".concat(this.groupChar, ")?"));
          var sRegex = new RegExp(startExpr, "g");
          sRegex.test(newValue);
          var tExpr = insertedValueStr.split("").join("(".concat(this.groupChar, ")?"));
          var tRegex = new RegExp(tExpr, "g");
          tRegex.test(newValue.slice(sRegex.lastIndex));
          _selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
          this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
        } else if (newLength === currentLength) {
          if (operation === "insert" || operation === "delete-back-single")
            this.$refs.input.$el.setSelectionRange(_selectionEnd + 1, _selectionEnd + 1);
          else if (operation === "delete-single")
            this.$refs.input.$el.setSelectionRange(_selectionEnd - 1, _selectionEnd - 1);
          else if (operation === "delete-range" || operation === "spin")
            this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
        } else if (operation === "delete-back-single") {
          var prevChar = inputValue.charAt(_selectionEnd - 1);
          var nextChar = inputValue.charAt(_selectionEnd);
          var diff = currentLength - newLength;
          var isGroupChar = this._group.test(nextChar);
          if (isGroupChar && diff === 1) {
            _selectionEnd += 1;
          } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
            _selectionEnd += -1 * diff + 1;
          }
          this._group.lastIndex = 0;
          this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
        } else if (inputValue === "-" && operation === "insert") {
          this.$refs.input.$el.setSelectionRange(0, 0);
          var _index = this.initCursor();
          var _selectionEnd2 = _index + insertedValueStr.length + 1;
          this.$refs.input.$el.setSelectionRange(_selectionEnd2, _selectionEnd2);
        } else {
          _selectionEnd = _selectionEnd + (newLength - currentLength);
          this.$refs.input.$el.setSelectionRange(_selectionEnd, _selectionEnd);
        }
      }
      this.$refs.input.$el.setAttribute("aria-valuenow", value);
    },
    concatValues: function concatValues(val1, val2) {
      if (val1 && val2) {
        var decimalCharIndex = val2.search(this._decimal);
        this._decimal.lastIndex = 0;
        if (this.suffixChar) {
          return decimalCharIndex !== -1 ? val1.replace(this.suffixChar, "").split(this._decimal)[0] + val2.replace(this.suffixChar, "").slice(decimalCharIndex) + this.suffixChar : val1;
        } else {
          return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
        }
      }
      return val1;
    },
    getDecimalLength: function getDecimalLength(value) {
      if (value) {
        var valueSplit = value.split(this._decimal);
        if (valueSplit.length === 2) {
          return valueSplit[1].replace(this._suffix, "").trim().replace(/\s/g, "").replace(this._currency, "").length;
        }
      }
      return 0;
    },
    updateModel: function updateModel2(event, value) {
      this.d_modelValue = value;
      this.$emit("update:modelValue", value);
    },
    onInputFocus: function onInputFocus(event) {
      this.focused = true;
      if (!this.disabled && !this.readonly && this.$refs.input.$el.value !== DomHandler.getSelection() && this.highlightOnFocus) {
        event.target.select();
      }
      this.$emit("focus", event);
    },
    onInputBlur: function onInputBlur(event) {
      this.focused = false;
      var input2 = event.target;
      var newValue = this.validateValue(this.parseValue(input2.value));
      this.$emit("blur", {
        originalEvent: event,
        value: input2.value
      });
      input2.value = this.formatValue(newValue);
      input2.setAttribute("aria-valuenow", newValue);
      this.updateModel(event, newValue);
    },
    clearTimer: function clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    maxBoundry: function maxBoundry() {
      return this.d_modelValue >= this.max;
    },
    minBoundry: function minBoundry() {
      return this.d_modelValue <= this.min;
    }
  },
  computed: {
    filled: function filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    upButtonListeners: function upButtonListeners() {
      var _this2 = this;
      return {
        mousedown: function mousedown(event) {
          return _this2.onUpButtonMouseDown(event);
        },
        mouseup: function mouseup(event) {
          return _this2.onUpButtonMouseUp(event);
        },
        mouseleave: function mouseleave(event) {
          return _this2.onUpButtonMouseLeave(event);
        },
        keydown: function keydown(event) {
          return _this2.onUpButtonKeyDown(event);
        },
        keyup: function keyup(event) {
          return _this2.onUpButtonKeyUp(event);
        }
      };
    },
    downButtonListeners: function downButtonListeners() {
      var _this3 = this;
      return {
        mousedown: function mousedown(event) {
          return _this3.onDownButtonMouseDown(event);
        },
        mouseup: function mouseup(event) {
          return _this3.onDownButtonMouseUp(event);
        },
        mouseleave: function mouseleave(event) {
          return _this3.onDownButtonMouseLeave(event);
        },
        keydown: function keydown(event) {
          return _this3.onDownButtonKeyDown(event);
        },
        keyup: function keyup(event) {
          return _this3.onDownButtonKeyUp(event);
        }
      };
    },
    formattedValue: function formattedValue() {
      var val = !this.modelValue && !this.allowEmpty ? 0 : this.modelValue;
      return this.formatValue(val);
    },
    getFormatter: function getFormatter() {
      return this.numberFormat;
    }
  },
  components: {
    INInputText: script$n,
    INButton: script$2$1,
    AngleUpIcon: script$f,
    AngleDownIcon: script$g
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
      _defineProperty$2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
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
function _toPrimitive$2(input2, hint) {
  if (_typeof$2(input2) !== "object" || input2 === null)
    return input2;
  var prim = input2[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input2, hint || "default");
    if (_typeof$2(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input2);
}
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_INInputText = resolveComponent("INInputText");
  var _component_INButton = resolveComponent("INButton");
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptm("root"), {
    "data-pc-name": "inputnumber"
  }), [createVNode(_component_INInputText, mergeProps({
    ref: "input",
    id: _ctx.inputId,
    role: "spinbutton",
    "class": [_ctx.cx("input"), _ctx.inputClass],
    style: _ctx.inputStyle,
    value: $options.formattedValue,
    "aria-valuemin": _ctx.min,
    "aria-valuemax": _ctx.max,
    "aria-valuenow": _ctx.modelValue,
    disabled: _ctx.disabled,
    readonly: _ctx.readonly,
    placeholder: _ctx.placeholder,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    onInput: $options.onUserInput,
    onKeydown: $options.onInputKeyDown,
    onKeypress: $options.onInputKeyPress,
    onPaste: $options.onPaste,
    onClick: $options.onInputClick,
    onFocus: $options.onInputFocus,
    onBlur: $options.onInputBlur
  }, _objectSpread(_objectSpread({}, _ctx.inputProps), _ctx.ptm("input")), {
    unstyled: _ctx.unstyled,
    "data-pc-section": "input"
  }), null, 16, ["id", "class", "style", "value", "aria-valuemin", "aria-valuemax", "aria-valuenow", "disabled", "readonly", "placeholder", "aria-labelledby", "aria-label", "onInput", "onKeydown", "onKeypress", "onPaste", "onClick", "onFocus", "onBlur", "unstyled"]), _ctx.showButtons && _ctx.buttonLayout === "stacked" ? (openBlock(), createElementBlock("span", mergeProps({
    key: 0,
    "class": _ctx.cx("buttonGroup")
  }, _ctx.ptm("buttonGroup")), [createVNode(_component_INButton, mergeProps({
    "class": [_ctx.cx("incrementButton"), _ctx.incrementButtonClass]
  }, toHandlers($options.upButtonListeners), {
    disabled: _ctx.disabled,
    tabindex: -1,
    "aria-hidden": "true"
  }, _objectSpread(_objectSpread({}, _ctx.incrementButtonProps), _ctx.ptm("incrementButton")), {
    unstyled: _ctx.unstyled,
    "data-pc-section": "incrementbutton"
  }), {
    icon: withCtx(function() {
      return [renderSlot(_ctx.$slots, "incrementbuttonicon", {}, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.incrementButtonIcon ? "span" : "AngleUpIcon"), mergeProps({
          "class": _ctx.incrementButtonIcon
        }, _ctx.ptm("incrementButton")["icon"]), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "unstyled"]), createVNode(_component_INButton, mergeProps({
    "class": [_ctx.cx("decrementButton"), _ctx.decrementButtonClass]
  }, toHandlers($options.downButtonListeners), {
    disabled: _ctx.disabled,
    tabindex: -1,
    "aria-hidden": "true"
  }, _objectSpread(_objectSpread({}, _ctx.decrementButtonProps), _ctx.ptm("decrementButton")), {
    unstyled: _ctx.unstyled,
    "data-pc-section": "decrementbutton"
  }), {
    icon: withCtx(function() {
      return [renderSlot(_ctx.$slots, "decrementbuttonicon", {}, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.decrementButtonIcon ? "span" : "AngleDownIcon"), mergeProps({
          "class": _ctx.decrementButtonIcon
        }, _ctx.ptm("decrementButton")["icon"]), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "unstyled"])], 16)) : createCommentVNode("", true), _ctx.showButtons && _ctx.buttonLayout !== "stacked" ? (openBlock(), createBlock(_component_INButton, mergeProps({
    key: 1,
    "class": [_ctx.cx("incrementButton"), _ctx.incrementButtonClass]
  }, toHandlers($options.upButtonListeners), {
    disabled: _ctx.disabled,
    tabindex: -1,
    "aria-hidden": "true"
  }, _objectSpread(_objectSpread({}, _ctx.incrementButtonProps), _ctx.ptm("incrementButton")), {
    unstyled: _ctx.unstyled,
    "data-pc-section": "incrementbutton"
  }), {
    icon: withCtx(function() {
      return [renderSlot(_ctx.$slots, "incrementbuttonicon", {}, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.incrementButtonIcon ? "span" : "AngleUpIcon"), mergeProps({
          "class": _ctx.incrementButtonIcon
        }, _ctx.ptm("incrementButton")["icon"]), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "unstyled"])) : createCommentVNode("", true), _ctx.showButtons && _ctx.buttonLayout !== "stacked" ? (openBlock(), createBlock(_component_INButton, mergeProps({
    key: 2,
    "class": [_ctx.cx("decrementButton"), _ctx.decrementButtonClass]
  }, toHandlers($options.downButtonListeners), {
    disabled: _ctx.disabled,
    tabindex: -1,
    "aria-hidden": "true"
  }, _objectSpread(_objectSpread({}, _ctx.decrementButtonProps), _ctx.ptm("decrementButton")), {
    unstyled: _ctx.unstyled,
    "data-pc-section": "decrementbutton"
  }), {
    icon: withCtx(function() {
      return [renderSlot(_ctx.$slots, "decrementbuttonicon", {}, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.decrementButtonIcon ? "span" : "AngleDownIcon"), mergeProps({
          "class": _ctx.decrementButtonIcon
        }, _ctx.ptm("decrementButton")["icon"]), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "unstyled"])) : createCommentVNode("", true)], 16);
}
script$e.render = render$d;
var script$d = {
  name: "AngleDoubleRightIcon",
  "extends": script$4$1
};
var _hoisted_1$3 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$2 = [_hoisted_1$3];
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$2, 16);
}
script$d.render = render$c;
var script$c = {
  name: "AngleRightIcon",
  "extends": script$4$1
};
var _hoisted_1$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$1 = [_hoisted_1$2];
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$1, 16);
}
script$c.render = render$b;
var script$b = {
  name: "AngleLeftIcon",
  "extends": script$4$1
};
var _hoisted_1$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2 = [_hoisted_1$1];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2, 16);
}
script$b.render = render$a;
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
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
  return _typeof$1(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input2, hint) {
  if (_typeof$1(input2) !== "object" || input2 === null)
    return input2;
  var prim = input2[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input2, hint || "default");
    if (_typeof$1(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input2);
}
var styles = "\n.p-paginator-default {\n    display: flex;\n}\n\n.p-paginator {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n.p-paginator-left-content {\n    margin-right: auto;\n}\n\n.p-paginator-right-content {\n    margin-left: auto;\n}\n\n.p-paginator-page,\n.p-paginator-next,\n.p-paginator-last,\n.p-paginator-first,\n.p-paginator-prev,\n.p-paginator-current {\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    line-height: 1;\n    user-select: none;\n    overflow: hidden;\n    position: relative;\n}\n\n.p-paginator-element:focus {\n    z-index: 1;\n    position: relative;\n}\n";
var classes = {
  paginator: function paginator(_ref) {
    var instance = _ref.instance, key = _ref.key;
    return ["p-paginator p-component", _defineProperty({
      "p-paginator-default": !instance.hasBreakpoints()
    }, "p-paginator-".concat(key), instance.hasBreakpoints())];
  },
  start: "p-paginator-left-content",
  end: "p-paginator-right-content",
  firstPageButton: function firstPageButton(_ref3) {
    var instance = _ref3.instance;
    return ["p-paginator-first p-paginator-element p-link", {
      "p-disabled": instance.$attrs.disabled
    }];
  },
  firstPageIcon: "p-paginator-icon",
  previousPageButton: function previousPageButton(_ref4) {
    var instance = _ref4.instance;
    return ["p-paginator-prev p-paginator-element p-link", {
      "p-disabled": instance.$attrs.disabled
    }];
  },
  previousPageIcon: "p-paginator-icon",
  nextPageButton: function nextPageButton(_ref5) {
    var instance = _ref5.instance;
    return ["p-paginator-next p-paginator-element p-link", {
      "p-disabled": instance.$attrs.disabled
    }];
  },
  nextPageIcon: "p-paginator-icon",
  lastPageButton: function lastPageButton(_ref6) {
    var instance = _ref6.instance;
    return ["p-paginator-last p-paginator-element p-link", {
      "p-disabled": instance.$attrs.disabled
    }];
  },
  lastPageIcon: "p-paginator-icon",
  pages: "p-paginator-pages",
  pageButton: function pageButton(_ref7) {
    var props = _ref7.props, pageLink = _ref7.pageLink;
    return ["p-paginator-page p-paginator-element p-link", {
      "p-highlight": pageLink - 1 === props.page
    }];
  },
  current: "p-paginator-current",
  rowPerPageDropdown: "p-paginator-rpp-options",
  jumpToPageDropdown: "p-paginator-page-options",
  jumpToPageInput: "p-paginator-page-input"
};
var _useStyle = useStyle(styles, {
  name: "paginator",
  manual: true
}), loadStyle = _useStyle.load;
var script$a = {
  name: "BasePaginator",
  "extends": script$6$1,
  props: {
    totalRecords: {
      type: Number,
      "default": 0
    },
    rows: {
      type: Number,
      "default": 0
    },
    first: {
      type: Number,
      "default": 0
    },
    pageLinkSize: {
      type: Number,
      "default": 5
    },
    rowsPerPageOptions: {
      type: Array,
      "default": null
    },
    template: {
      type: [Object, String],
      "default": "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    },
    currentPageReportTemplate: {
      type: null,
      "default": "({currentPage} of {totalPages})"
    },
    alwaysShow: {
      type: Boolean,
      "default": true
    }
  },
  css: {
    classes,
    loadStyle
  },
  provide: function provide4() {
    return {
      $parentInstance: this
    };
  }
};
var script$9 = {
  name: "CurrentPageReport",
  hostName: "Paginator",
  "extends": script$6$1,
  props: {
    pageCount: {
      type: Number,
      "default": 0
    },
    currentPage: {
      type: Number,
      "default": 0
    },
    page: {
      type: Number,
      "default": 0
    },
    first: {
      type: Number,
      "default": 0
    },
    rows: {
      type: Number,
      "default": 0
    },
    totalRecords: {
      type: Number,
      "default": 0
    },
    template: {
      type: String,
      "default": "({currentPage} of {totalPages})"
    }
  },
  computed: {
    text: function text() {
      var text2 = this.template.replace("{currentPage}", this.currentPage).replace("{totalPages}", this.pageCount).replace("{first}", this.pageCount > 0 ? this.first + 1 : 0).replace("{last}", Math.min(this.first + this.rows, this.totalRecords)).replace("{rows}", this.rows).replace("{totalRecords}", this.totalRecords);
      return text2;
    }
  }
};
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("current")
  }, _ctx.ptm("current")), toDisplayString($options.text), 17);
}
script$9.render = render$9;
var script$8 = {
  name: "FirstPageLink",
  hostName: "Paginator",
  "extends": script$6$1,
  props: {
    template: {
      type: Function,
      "default": null
    }
  },
  methods: {
    getPTOptions: function getPTOptions2(key) {
      return this.ptm(key, {
        context: {
          disabled: this.$attrs.disabled
        }
      });
    }
  },
  components: {
    AngleDoubleLeftIcon: script$h
  },
  directives: {
    ripple: Ripple
  }
};
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", mergeProps({
    "class": _ctx.cx("firstPageButton"),
    type: "button"
  }, $options.getPTOptions("firstPageButton")), [(openBlock(), createBlock(resolveDynamicComponent($props.template || "AngleDoubleLeftIcon"), mergeProps({
    "class": _ctx.cx("firstPageIcon")
  }, $options.getPTOptions("firstPageIcon")), null, 16, ["class"]))], 16)), [[_directive_ripple]]);
}
script$8.render = render$8;
var script$7 = {
  name: "JumpToPageDropdown",
  hostName: "Paginator",
  "extends": script$6$1,
  emits: ["page-change"],
  props: {
    page: Number,
    pageCount: Number,
    disabled: Boolean
  },
  methods: {
    onChange: function onChange(value) {
      this.$emit("page-change", value);
    }
  },
  computed: {
    pageOptions: function pageOptions() {
      var opts = [];
      for (var i = 0; i < this.pageCount; i++) {
        opts.push({
          label: String(i + 1),
          value: i
        });
      }
      return opts;
    }
  },
  components: {
    JTPDropdown: script$i
  }
};
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_JTPDropdown = resolveComponent("JTPDropdown");
  return openBlock(), createBlock(_component_JTPDropdown, {
    modelValue: $props.page,
    options: $options.pageOptions,
    optionLabel: "label",
    optionValue: "value",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
      return $options.onChange($event);
    }),
    "class": normalizeClass(_ctx.cx("jumpToPageDropdown")),
    disabled: $props.disabled,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("jumpToPageDropdown"),
    "data-pc-section": "jumptopagedropdown"
  }, null, 8, ["modelValue", "options", "class", "disabled", "unstyled", "pt"]);
}
script$7.render = render$7;
var script$6 = {
  name: "JumpToPageInput",
  hostName: "Paginator",
  "extends": script$6$1,
  inheritAttrs: false,
  emits: ["page-change"],
  props: {
    page: Number,
    pageCount: Number,
    disabled: Boolean
  },
  data: function data4() {
    return {
      d_page: this.page
    };
  },
  watch: {
    page: function page(newValue) {
      this.d_page = newValue;
    }
  },
  methods: {
    onChange: function onChange2(value) {
      if (value !== this.page) {
        this.d_page = value;
        this.$emit("page-change", value - 1);
      }
    }
  },
  computed: {
    inputArialabel: function inputArialabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.jumpToPageInputLabel : void 0;
    }
  },
  components: {
    JTPInput: script$e
  }
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_JTPInput = resolveComponent("JTPInput");
  return openBlock(), createBlock(_component_JTPInput, {
    ref: "jtpInput",
    modelValue: $data.d_page,
    "class": normalizeClass(_ctx.cx("jumpToPageInput")),
    "aria-label": $options.inputArialabel,
    disabled: $props.disabled,
    "onUpdate:modelValue": $options.onChange,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("jumpToPageInput"),
    "data-pc-section": "jumptopageinput"
  }, null, 8, ["modelValue", "class", "aria-label", "disabled", "onUpdate:modelValue", "unstyled", "pt"]);
}
script$6.render = render$6;
var script$5 = {
  name: "LastPageLink",
  hostName: "Paginator",
  "extends": script$6$1,
  props: {
    template: {
      type: Function,
      "default": null
    }
  },
  methods: {
    getPTOptions: function getPTOptions3(key) {
      return this.ptm(key, {
        context: {
          disabled: this.$attrs.disabled
        }
      });
    }
  },
  components: {
    AngleDoubleRightIcon: script$d
  },
  directives: {
    ripple: Ripple
  }
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", mergeProps({
    "class": _ctx.cx("lastPageButton"),
    type: "button"
  }, $options.getPTOptions("lastPageButton")), [(openBlock(), createBlock(resolveDynamicComponent($props.template || "AngleDoubleRightIcon"), mergeProps({
    "class": _ctx.cx("lastPageIcon")
  }, $options.getPTOptions("lastPageIcon")), null, 16, ["class"]))], 16)), [[_directive_ripple]]);
}
script$5.render = render$5;
var script$4 = {
  name: "NextPageLink",
  hostName: "Paginator",
  "extends": script$6$1,
  props: {
    template: {
      type: Function,
      "default": null
    }
  },
  methods: {
    getPTOptions: function getPTOptions4(key) {
      return this.ptm(key, {
        context: {
          disabled: this.$attrs.disabled
        }
      });
    }
  },
  components: {
    AngleRightIcon: script$c
  },
  directives: {
    ripple: Ripple
  }
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", mergeProps({
    "class": _ctx.cx("nextPageButton"),
    type: "button"
  }, $options.getPTOptions("nextPageButton")), [(openBlock(), createBlock(resolveDynamicComponent($props.template || "AngleRightIcon"), mergeProps({
    "class": _ctx.cx("nextPageIcon")
  }, $options.getPTOptions("nextPageIcon")), null, 16, ["class"]))], 16)), [[_directive_ripple]]);
}
script$4.render = render$4;
var script$3 = {
  name: "PageLinks",
  hostName: "Paginator",
  "extends": script$6$1,
  inheritAttrs: false,
  emits: ["click"],
  props: {
    value: Array,
    page: Number
  },
  methods: {
    getPTOptions: function getPTOptions5(pageLink, key) {
      return this.ptm(key, {
        context: {
          active: pageLink === this.page
        }
      });
    },
    onPageLinkClick: function onPageLinkClick(event, pageLink) {
      this.$emit("click", {
        originalEvent: event,
        value: pageLink
      });
    },
    ariaPageLabel: function ariaPageLabel(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : void 0;
    }
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["aria-label", "aria-current", "onClick", "data-p-highlight"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("pages")
  }, _ctx.ptm("pages")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.value, function(pageLink) {
    return withDirectives((openBlock(), createElementBlock("button", mergeProps({
      key: pageLink,
      "class": _ctx.cx("pageButton", {
        pageLink
      }),
      type: "button",
      "aria-label": $options.ariaPageLabel(pageLink),
      "aria-current": pageLink - 1 === $props.page ? "page" : void 0,
      onClick: function onClick($event) {
        return $options.onPageLinkClick($event, pageLink);
      }
    }, $options.getPTOptions(pageLink - 1, "pageButton"), {
      "data-p-highlight": pageLink - 1 === $props.page
    }), [createTextVNode(toDisplayString(pageLink), 1)], 16, _hoisted_1)), [[_directive_ripple]]);
  }), 128))], 16);
}
script$3.render = render$3;
var script$2 = {
  name: "PrevPageLink",
  hostName: "Paginator",
  "extends": script$6$1,
  props: {
    template: {
      type: Function,
      "default": null
    }
  },
  methods: {
    getPTOptions: function getPTOptions6(key) {
      return this.ptm(key, {
        context: {
          disabled: this.$attrs.disabled
        }
      });
    }
  },
  components: {
    AngleLeftIcon: script$b
  },
  directives: {
    ripple: Ripple
  }
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return withDirectives((openBlock(), createElementBlock("button", mergeProps({
    "class": _ctx.cx("previousPageButton"),
    type: "button"
  }, $options.getPTOptions("previousPageButton")), [(openBlock(), createBlock(resolveDynamicComponent($props.template || "AngleLeftIcon"), mergeProps({
    "class": _ctx.cx("previousPageIcon")
  }, $options.getPTOptions("previousPageIcon")), null, 16, ["class"]))], 16)), [[_directive_ripple]]);
}
script$2.render = render$2;
var script$1 = {
  name: "RowsPerPageDropdown",
  hostName: "Paginator",
  "extends": script$6$1,
  emits: ["rows-change"],
  props: {
    options: Array,
    rows: Number,
    disabled: Boolean
  },
  methods: {
    onChange: function onChange3(value) {
      this.$emit("rows-change", value);
    }
  },
  computed: {
    rowsOptions: function rowsOptions() {
      var opts = [];
      if (this.options) {
        for (var i = 0; i < this.options.length; i++) {
          opts.push({
            label: String(this.options[i]),
            value: this.options[i]
          });
        }
      }
      return opts;
    }
  },
  components: {
    RPPDropdown: script$i
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_RPPDropdown = resolveComponent("RPPDropdown");
  return openBlock(), createBlock(_component_RPPDropdown, {
    modelValue: $props.rows,
    options: $options.rowsOptions,
    optionLabel: "label",
    optionValue: "value",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
      return $options.onChange($event);
    }),
    "class": normalizeClass(_ctx.cx("rowPerPageDropdown")),
    disabled: $props.disabled,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("rowPerPageDropdown"),
    "data-pc-section": "rowperpagedropdown"
  }, null, 8, ["modelValue", "options", "class", "disabled", "unstyled", "pt"]);
}
script$1.render = render$1;
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var script = {
  name: "Paginator",
  "extends": script$a,
  emits: ["update:first", "update:rows", "page"],
  data: function data5() {
    return {
      d_first: this.first,
      d_rows: this.rows
    };
  },
  watch: {
    first: function first(newValue) {
      this.d_first = newValue;
    },
    rows: function rows(newValue) {
      this.d_rows = newValue;
    },
    totalRecords: function totalRecords(newValue) {
      if (this.page > 0 && newValue && this.d_first >= newValue) {
        this.changePage(this.pageCount - 1);
      }
    }
  },
  mounted: function mounted4() {
    this.setPaginatorAttribute();
    this.createStyle();
  },
  methods: {
    changePage: function changePage(p) {
      var pc = this.pageCount;
      if (p >= 0 && p < pc) {
        this.d_first = this.d_rows * p;
        var state = {
          page: p,
          first: this.d_first,
          rows: this.d_rows,
          pageCount: pc
        };
        this.$emit("update:first", this.d_first);
        this.$emit("update:rows", this.d_rows);
        this.$emit("page", state);
      }
    },
    changePageToFirst: function changePageToFirst(event) {
      if (!this.isFirstPage) {
        this.changePage(0);
      }
      event.preventDefault();
    },
    changePageToPrev: function changePageToPrev(event) {
      this.changePage(this.page - 1);
      event.preventDefault();
    },
    changePageLink: function changePageLink(event) {
      this.changePage(event.value - 1);
      event.originalEvent.preventDefault();
    },
    changePageToNext: function changePageToNext(event) {
      this.changePage(this.page + 1);
      event.preventDefault();
    },
    changePageToLast: function changePageToLast(event) {
      if (!this.isLastPage) {
        this.changePage(this.pageCount - 1);
      }
      event.preventDefault();
    },
    onRowChange: function onRowChange(value) {
      this.d_rows = value;
      this.changePage(this.page);
    },
    createStyle: function createStyle() {
      var _this = this;
      if (this.hasBreakpoints() && !this.isUnstyled) {
        this.styleElement = document.createElement("style");
        this.styleElement.type = "text/css";
        document.head.appendChild(this.styleElement);
        var innerHTML = "";
        var keys = Object.keys(this.template);
        var sortedBreakpoints = {};
        keys.sort(function(a, b) {
          return parseInt(a) - parseInt(b);
        }).forEach(function(key2) {
          sortedBreakpoints[key2] = _this.template[key2];
        });
        for (var _i = 0, _Object$entries = Object.entries(Object.entries(sortedBreakpoints)); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), index = _Object$entries$_i[0], _Object$entries$_i$ = _slicedToArray(_Object$entries$_i[1], 1), key = _Object$entries$_i$[0];
          var minValue = Object.entries(sortedBreakpoints)[index - 1] ? "and (min-width:".concat(Object.keys(sortedBreakpoints)[index - 1], ")") : "";
          if (key === "default") {
            innerHTML += "\n                            @media screen ".concat(minValue, " {\n                                .paginator[").concat(this.attributeSelector, "],\n                                .p-paginator-default{\n                                    display: flex !important;\n                                }\n                            }\n                        ");
          } else {
            innerHTML += "\n                        .paginator[".concat(this.attributeSelector, "], .p-paginator-").concat(key, " {\n                                display: none !important;\n                            }\n                        @media screen ").concat(minValue, " and (max-width: ").concat(key, ") {\n                            .paginator[").concat(this.attributeSelector, "], .p-paginator-").concat(key, " {\n                                display: flex !important;\n                            }\n                            .paginator[").concat(this.attributeSelector, "],\n                            .p-paginator-default{\n                                display: none !important;\n                            }\n                        }\n                    ");
          }
        }
        this.styleElement.innerHTML = innerHTML;
      }
    },
    hasBreakpoints: function hasBreakpoints() {
      return _typeof(this.template) === "object";
    },
    setPaginatorAttribute: function setPaginatorAttribute() {
      var _this2 = this;
      if (this.$refs.paginator && this.$refs.paginator.length >= 0) {
        _toConsumableArray(this.$refs.paginator).forEach(function(el) {
          el.setAttribute(_this2.attributeSelector, "");
        });
      }
    },
    getAriaLabel: function getAriaLabel(labelType) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria[labelType] : void 0;
    }
  },
  computed: {
    templateItems: function templateItems() {
      var keys = {};
      if (this.hasBreakpoints()) {
        keys = this.template;
        if (!keys["default"]) {
          keys["default"] = "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown";
        }
        for (var item2 in keys) {
          keys[item2] = this.template[item2].split(" ").map(function(value) {
            return value.trim();
          });
        }
        return keys;
      }
      keys["default"] = this.template.split(" ").map(function(value) {
        return value.trim();
      });
      return keys;
    },
    page: function page2() {
      return Math.floor(this.d_first / this.d_rows);
    },
    pageCount: function pageCount() {
      return Math.ceil(this.totalRecords / this.d_rows);
    },
    isFirstPage: function isFirstPage() {
      return this.page === 0;
    },
    isLastPage: function isLastPage() {
      return this.page === this.pageCount - 1;
    },
    calculatePageLinkBoundaries: function calculatePageLinkBoundaries() {
      var numberOfPages = this.pageCount;
      var visiblePages = Math.min(this.pageLinkSize, numberOfPages);
      var start = Math.max(0, Math.ceil(this.page - visiblePages / 2));
      var end = Math.min(numberOfPages - 1, start + visiblePages - 1);
      var delta = this.pageLinkSize - (end - start + 1);
      start = Math.max(0, start - delta);
      return [start, end];
    },
    pageLinks: function pageLinks() {
      var pageLinks2 = [];
      var boundaries = this.calculatePageLinkBoundaries;
      var start = boundaries[0];
      var end = boundaries[1];
      for (var i = start; i <= end; i++) {
        pageLinks2.push(i + 1);
      }
      return pageLinks2;
    },
    currentState: function currentState() {
      return {
        page: this.page,
        first: this.d_first,
        rows: this.d_rows
      };
    },
    empty: function empty() {
      return this.pageCount === 0;
    },
    currentPage: function currentPage() {
      return this.pageCount > 0 ? this.page + 1 : 0;
    },
    attributeSelector: function attributeSelector() {
      return UniqueComponentId();
    }
  },
  components: {
    CurrentPageReport: script$9,
    FirstPageLink: script$8,
    LastPageLink: script$5,
    NextPageLink: script$4,
    PageLinks: script$3,
    PrevPageLink: script$2,
    RowsPerPageDropdown: script$1,
    JumpToPageDropdown: script$7,
    JumpToPageInput: script$6
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FirstPageLink = resolveComponent("FirstPageLink");
  var _component_PrevPageLink = resolveComponent("PrevPageLink");
  var _component_NextPageLink = resolveComponent("NextPageLink");
  var _component_LastPageLink = resolveComponent("LastPageLink");
  var _component_PageLinks = resolveComponent("PageLinks");
  var _component_CurrentPageReport = resolveComponent("CurrentPageReport");
  var _component_RowsPerPageDropdown = resolveComponent("RowsPerPageDropdown");
  var _component_JumpToPageDropdown = resolveComponent("JumpToPageDropdown");
  var _component_JumpToPageInput = resolveComponent("JumpToPageInput");
  return (_ctx.alwaysShow ? true : $options.pageLinks && $options.pageLinks.length > 1) ? (openBlock(), createElementBlock("nav", normalizeProps(mergeProps({
    key: 0
  }, _ctx.ptm("paginatorWrapper"))), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.templateItems, function(value, key) {
    return openBlock(), createElementBlock("div", mergeProps({
      key,
      ref_for: true,
      ref: "paginator",
      "class": _ctx.cx("paginator", {
        key
      })
    }, _ctx.ptm("root"), {
      "data-pc-name": "paginator"
    }), [_ctx.$slots.start ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      "class": _ctx.cx("start")
    }, _ctx.ptm("start")), [renderSlot(_ctx.$slots, "start", {
      state: $options.currentState
    })], 16)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(value, function(item2) {
      return openBlock(), createElementBlock(Fragment, {
        key: item2
      }, [item2 === "FirstPageLink" ? (openBlock(), createBlock(_component_FirstPageLink, {
        key: 0,
        "aria-label": $options.getAriaLabel("firstPageLabel"),
        template: _ctx.$slots.firstpagelinkicon,
        onClick: _cache[0] || (_cache[0] = function($event) {
          return $options.changePageToFirst($event);
        }),
        disabled: $options.isFirstPage || $options.empty,
        pt: _ctx.pt
      }, null, 8, ["aria-label", "template", "disabled", "pt"])) : item2 === "PrevPageLink" ? (openBlock(), createBlock(_component_PrevPageLink, {
        key: 1,
        "aria-label": $options.getAriaLabel("prevPageLabel"),
        template: _ctx.$slots.prevpagelinkicon,
        onClick: _cache[1] || (_cache[1] = function($event) {
          return $options.changePageToPrev($event);
        }),
        disabled: $options.isFirstPage || $options.empty,
        pt: _ctx.pt
      }, null, 8, ["aria-label", "template", "disabled", "pt"])) : item2 === "NextPageLink" ? (openBlock(), createBlock(_component_NextPageLink, {
        key: 2,
        "aria-label": $options.getAriaLabel("nextPageLabel"),
        template: _ctx.$slots.nextpagelinkicon,
        onClick: _cache[2] || (_cache[2] = function($event) {
          return $options.changePageToNext($event);
        }),
        disabled: $options.isLastPage || $options.empty,
        pt: _ctx.pt
      }, null, 8, ["aria-label", "template", "disabled", "pt"])) : item2 === "LastPageLink" ? (openBlock(), createBlock(_component_LastPageLink, {
        key: 3,
        "aria-label": $options.getAriaLabel("lastPageLabel"),
        template: _ctx.$slots.lastpagelinkicon,
        onClick: _cache[3] || (_cache[3] = function($event) {
          return $options.changePageToLast($event);
        }),
        disabled: $options.isLastPage || $options.empty,
        pt: _ctx.pt
      }, null, 8, ["aria-label", "template", "disabled", "pt"])) : item2 === "PageLinks" ? (openBlock(), createBlock(_component_PageLinks, {
        key: 4,
        "aria-label": $options.getAriaLabel("pageLabel"),
        value: $options.pageLinks,
        page: $options.page,
        onClick: _cache[4] || (_cache[4] = function($event) {
          return $options.changePageLink($event);
        }),
        pt: _ctx.pt
      }, null, 8, ["aria-label", "value", "page", "pt"])) : item2 === "CurrentPageReport" ? (openBlock(), createBlock(_component_CurrentPageReport, {
        key: 5,
        "aria-live": "polite",
        template: _ctx.currentPageReportTemplate,
        currentPage: $options.currentPage,
        page: $options.page,
        pageCount: $options.pageCount,
        first: $data.d_first,
        rows: $data.d_rows,
        totalRecords: _ctx.totalRecords,
        pt: _ctx.pt
      }, null, 8, ["template", "currentPage", "page", "pageCount", "first", "rows", "totalRecords", "pt"])) : item2 === "RowsPerPageDropdown" && _ctx.rowsPerPageOptions ? (openBlock(), createBlock(_component_RowsPerPageDropdown, {
        key: 6,
        "aria-label": $options.getAriaLabel("rowsPerPageLabel"),
        rows: $data.d_rows,
        options: _ctx.rowsPerPageOptions,
        onRowsChange: _cache[5] || (_cache[5] = function($event) {
          return $options.onRowChange($event);
        }),
        disabled: $options.empty,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["aria-label", "rows", "options", "disabled", "unstyled", "pt"])) : item2 === "JumpToPageDropdown" ? (openBlock(), createBlock(_component_JumpToPageDropdown, {
        key: 7,
        "aria-label": $options.getAriaLabel("jumpToPageDropdownLabel"),
        page: $options.page,
        pageCount: $options.pageCount,
        onPageChange: _cache[6] || (_cache[6] = function($event) {
          return $options.changePage($event);
        }),
        disabled: $options.empty,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["aria-label", "page", "pageCount", "disabled", "unstyled", "pt"])) : item2 === "JumpToPageInput" ? (openBlock(), createBlock(_component_JumpToPageInput, {
        key: 8,
        page: $options.currentPage,
        onPageChange: _cache[7] || (_cache[7] = function($event) {
          return $options.changePage($event);
        }),
        disabled: $options.empty,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["page", "disabled", "unstyled", "pt"])) : createCommentVNode("", true)], 64);
    }), 128)), _ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
      key: 1,
      "class": _ctx.cx("end")
    }, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end", {
      state: $options.currentState
    })], 16)) : createCommentVNode("", true)], 16);
  }), 128))], 16)) : createCommentVNode("", true);
}
script.render = render;

export { FocusTrap as F, script$e as a, script$l as b, script$j as c, script as d, script$k as e, script$i as s };
//# sourceMappingURL=paginator.esm-79cc5f95.mjs.map
