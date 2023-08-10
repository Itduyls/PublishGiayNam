import { f as useStyle, _ as _export_sfc, m as useNuxtApp, U as UniqueComponentId, Z as ZIndexUtils, D as DomHandler, C as ConnectedOverlayScrollHandler, b as useRouter, d as useState, e as useRuntimeConfig, a as useRoute, o as script$c, s as script$6$1, O as ObjectUtils, R as Ripple, g as script$4$1 } from '../server.mjs';
import { ref, inject, resolveComponent, resolveDirective, mergeProps, unref, withCtx, createVNode, withDirectives, useSSRContext, watch, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode, createElementBlock, renderSlot, resolveDynamicComponent, normalizeClass, createElementVNode, Fragment, Transition, renderList, vShow } from 'vue';
import { u as useAsyncData } from './asyncData-ff2c63f7.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { O as OverlayEventBus, s as script$1$5, a as script$e } from './index.esm-c4d8e664.mjs';
import { s as script$d } from './index.esm-2c744238.mjs';
import { parse } from 'cookie-es';
import { setCookie, getCookie, deleteCookie } from 'h3';
import destr from 'destr';
import { isEqual } from 'ohash';

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref((_a2 = cookies[name]) != null ? _a2 : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.node.req.headers.cookie) || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
var styles$4 = "\n.p-avatar {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 2rem;\n    height: 2rem;\n    font-size: 1rem;\n}\n\n.p-avatar.p-avatar-image {\n    background-color: transparent;\n}\n\n.p-avatar.p-avatar-circle {\n    border-radius: 50%;\n}\n\n.p-avatar-circle img {\n    border-radius: 50%;\n}\n\n.p-avatar .p-avatar-icon {\n    font-size: 1rem;\n}\n\n.p-avatar img {\n    width: 100%;\n    height: 100%;\n}\n";
var classes$4 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-avatar p-component", {
      "p-avatar-image": props.image != null,
      "p-avatar-circle": props.shape === "circle",
      "p-avatar-lg": props.size === "large",
      "p-avatar-xl": props.size === "xlarge"
    }];
  },
  label: "p-avatar-text",
  icon: "p-avatar-icon"
};
var _useStyle$4 = useStyle(styles$4, {
  name: "avatar",
  manual: true
}), loadStyle$4 = _useStyle$4.load;
var script$1$4 = {
  name: "BaseAvatar",
  "extends": script$6$1,
  props: {
    label: {
      type: String,
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    image: {
      type: String,
      "default": null
    },
    size: {
      type: String,
      "default": "normal"
    },
    shape: {
      type: String,
      "default": "square"
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
    classes: classes$4,
    loadStyle: loadStyle$4
  },
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script$b = {
  name: "Avatar",
  "extends": script$1$4,
  emits: ["error"],
  methods: {
    onError: function onError() {
      this.$emit("error");
    },
    getPTOptions: function getPTOptions(key) {
      return this.ptm(key, {
        parent: {
          instance: this.$parent
        }
      });
    }
  }
};
var _hoisted_1$9 = ["aria-labelledby", "aria-label"];
var _hoisted_2$8 = ["src", "alt"];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel
  }, $options.getPTOptions("root"), {
    "data-pc-name": "avatar"
  }), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [_ctx.label ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": _ctx.cx("label")
    }, $options.getPTOptions("label")), toDisplayString(_ctx.label), 17)) : _ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), {
      key: 1,
      "class": normalizeClass(_ctx.cx("icon"))
    }, null, 8, ["class"])) : _ctx.icon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx("icon"), _ctx.icon]
    }, $options.getPTOptions("icon")), null, 16)) : _ctx.image ? (openBlock(), createElementBlock("img", mergeProps({
      key: 3,
      src: _ctx.image,
      alt: _ctx.ariaLabel,
      onError: _cache[0] || (_cache[0] = function() {
        return $options.onError && $options.onError.apply($options, arguments);
      })
    }, $options.getPTOptions("image")), null, 16, _hoisted_2$8)) : createCommentVNode("", true)];
  })], 16, _hoisted_1$9);
}
script$b.render = render$a;
var styles$3 = "\n.p-menu ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.p-menu .p-menuitem-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n}\n\n.p-menu .p-menuitem-text {\n    line-height: 1;\n}\n";
var classes$3 = {
  root: function root2(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-menu p-component", {
      "p-menu-overlay": props.popup,
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }];
  },
  start: "p-menu-start",
  menu: "p-menu-list p-reset",
  submenuHeader: "p-submenu-header",
  separator: "p-menuitem-separator",
  end: "p-menu-end",
  menuitem: function menuitem(_ref2) {
    var instance = _ref2.instance;
    return ["p-menuitem", {
      "p-focus": instance.id === instance.focusedOptionId,
      "p-disabled": instance.disabled()
    }];
  },
  content: "p-menuitem-content",
  action: function action(_ref3) {
    var props = _ref3.props, isActive = _ref3.isActive, isExactActive = _ref3.isExactActive;
    return ["p-menuitem-link", {
      "router-link-active": isActive,
      "router-link-active-exact": props.exact && isExactActive
    }];
  },
  icon: "p-menuitem-icon",
  label: "p-menuitem-text"
};
var _useStyle$3 = useStyle(styles$3, {
  name: "menu",
  manual: true
}), loadStyle$3 = _useStyle$3.load;
var script$2$2 = {
  name: "BaseMenu",
  "extends": script$6$1,
  props: {
    popup: {
      type: Boolean,
      "default": false
    },
    model: {
      type: Array,
      "default": null
    },
    appendTo: {
      type: String,
      "default": "body"
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    exact: {
      type: Boolean,
      "default": true
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
    classes: classes$3,
    loadStyle: loadStyle$3
  },
  provide: function provide2() {
    return {
      $parentInstance: this
    };
  }
};
var script$1$3 = {
  name: "Menuitem",
  hostName: "Menu",
  "extends": script$6$1,
  inheritAttrs: false,
  emits: ["item-click"],
  props: {
    item: null,
    templates: null,
    exact: null,
    id: null,
    focusedOptionId: null
  },
  methods: {
    getItemProp: function getItemProp(processedItem, name) {
      return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : void 0;
    },
    getPTOptions: function getPTOptions2(key) {
      return this.ptm(key, {
        context: {
          focused: this.isItemFocused()
        }
      });
    },
    isItemFocused: function isItemFocused() {
      return this.focusedOptionId === this.id;
    },
    onItemActionClick: function onItemActionClick(event, navigate) {
      navigate && navigate(event);
    },
    onItemClick: function onItemClick(event) {
      var command = this.getItemProp(this.item, "command");
      command && command({
        originalEvent: event,
        item: this.item.item
      });
      this.$emit("item-click", {
        originalEvent: event,
        item: this.item,
        id: this.id
      });
    },
    visible: function visible() {
      return typeof this.item.visible === "function" ? this.item.visible() : this.item.visible !== false;
    },
    disabled: function disabled() {
      return typeof this.item.disabled === "function" ? this.item.disabled() : this.item.disabled;
    },
    label: function label() {
      return typeof this.item.label === "function" ? this.item.label() : this.item.label;
    }
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1$2 = ["id", "aria-label", "aria-disabled", "data-p-focused", "data-p-disabled"];
var _hoisted_2$1$2 = ["href", "onClick"];
var _hoisted_3$1$2 = ["href", "target"];
function render$1$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = resolveComponent("router-link");
  var _directive_ripple = resolveDirective("ripple");
  return $options.visible() ? (openBlock(), createElementBlock("li", mergeProps({
    key: 0,
    id: $props.id,
    "class": [_ctx.cx("menuitem"), $props.item["class"]],
    role: "menuitem",
    style: $props.item.style,
    "aria-label": $options.label(),
    "aria-disabled": $options.disabled()
  }, $options.getPTOptions("menuitem"), {
    "data-p-focused": $options.isItemFocused(),
    "data-p-disabled": $options.disabled() || false
  }), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("content"),
    onClick: _cache[0] || (_cache[0] = function($event) {
      return $options.onItemClick($event);
    })
  }, $options.getPTOptions("content")), [!$props.templates.item ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [$props.item.to && !$options.disabled() ? (openBlock(), createBlock(_component_router_link, {
    key: 0,
    to: $props.item.to,
    custom: ""
  }, {
    "default": withCtx(function(_ref) {
      var navigate = _ref.navigate, href = _ref.href, isActive = _ref.isActive, isExactActive = _ref.isExactActive;
      return [withDirectives((openBlock(), createElementBlock("a", mergeProps({
        href,
        "class": _ctx.cx("action", {
          isActive,
          isExactActive
        }),
        tabindex: "-1",
        "aria-hidden": "true",
        onClick: function onClick($event) {
          return $options.onItemActionClick($event, navigate);
        }
      }, $options.getPTOptions("action")), [$props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
        key: 0,
        item: $props.item,
        "class": normalizeClass([_ctx.cx("icon"), $props.item.icon])
      }, null, 8, ["item", "class"])) : $props.item.icon ? (openBlock(), createElementBlock("span", mergeProps({
        key: 1,
        "class": [_ctx.cx("icon"), $props.item.icon]
      }, $options.getPTOptions("icon")), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
        "class": _ctx.cx("label")
      }, $options.getPTOptions("label")), toDisplayString($options.label()), 17)], 16, _hoisted_2$1$2)), [[_directive_ripple]])];
    }),
    _: 1
  }, 8, ["to"])) : withDirectives((openBlock(), createElementBlock("a", mergeProps({
    key: 1,
    href: $props.item.url,
    "class": _ctx.cx("action"),
    target: $props.item.target,
    tabindex: "-1",
    "aria-hidden": "true"
  }, $options.getPTOptions("action")), [$props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
    key: 0,
    item: $props.item,
    "class": normalizeClass([_ctx.cx("icon"), $props.item.icon])
  }, null, 8, ["item", "class"])) : $props.item.icon ? (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    "class": [_ctx.cx("icon"), $props.item.icon]
  }, $options.getPTOptions("icon")), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
    "class": _ctx.cx("label")
  }, $options.getPTOptions("label")), toDisplayString($options.label()), 17)], 16, _hoisted_3$1$2)), [[_directive_ripple]])], 64)) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
    key: 1,
    item: $props.item
  }, null, 8, ["item"]))], 16)], 16, _hoisted_1$1$2)) : createCommentVNode("", true);
}
script$1$3.render = render$1$2;
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
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
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
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
var script$a = {
  name: "Menu",
  "extends": script$2$2,
  inheritAttrs: false,
  emits: ["show", "hide", "focus", "blur"],
  data: function data() {
    return {
      id: this.$attrs.id,
      overlayVisible: false,
      focused: false,
      focusedOptionIndex: -1,
      selectedOptionIndex: -1
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    }
  },
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  list: null,
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
    if (!this.popup) {
      this.bindResizeListener();
      this.bindOutsideClickListener();
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindResizeListener();
    this.unbindOutsideClickListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.target = null;
    if (this.container && this.autoZIndex) {
      ZIndexUtils.clear(this.container);
    }
    this.container = null;
  },
  methods: {
    itemClick: function itemClick(event) {
      var item = event.item;
      if (this.disabled(item)) {
        return;
      }
      if (item.command) {
        item.command(event);
      }
      if (item.to && event.navigate) {
        event.navigate(event.originalEvent);
      }
      if (this.overlayVisible)
        this.hide();
      if (!this.popup && this.focusedOptionIndex !== event.id) {
        this.focusedOptionIndex = event.id;
      }
    },
    onListFocus: function onListFocus(event) {
      this.focused = true;
      if (!this.popup) {
        if (this.selectedOptionIndex !== -1) {
          this.changeFocusedOptionIndex(this.selectedOptionIndex);
          this.selectedOptionIndex = -1;
        } else
          this.changeFocusedOptionIndex(0);
      }
      this.$emit("focus", event);
    },
    onListBlur: function onListBlur(event) {
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.$emit("blur", event);
    },
    onListKeyDown: function onListKeyDown(event) {
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
        case "Enter":
          this.onEnterKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Escape":
          if (this.popup) {
            DomHandler.focus(this.target);
            this.hide();
          }
        case "Tab":
          this.overlayVisible && this.hide();
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      var optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      if (event.altKey && this.popup) {
        DomHandler.focus(this.target);
        this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);
        this.changeFocusedOptionIndex(optionIndex);
        event.preventDefault();
      }
    },
    onHomeKey: function onHomeKey(event) {
      this.changeFocusedOptionIndex(0);
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      this.changeFocusedOptionIndex(DomHandler.find(this.container, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      var element = DomHandler.findSingle(this.list, 'li[id="'.concat("".concat(this.focusedOptionIndex), '"]'));
      var anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');
      this.popup && DomHandler.focus(this.target);
      anchorElement ? anchorElement.click() : element && element.click();
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      this.onEnterKey(event);
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var links = DomHandler.find(this.container, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
      var matchedOptionIndex = _toConsumableArray(links).findIndex(function(link) {
        return link.id === index;
      });
      return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var links = DomHandler.find(this.container, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
      var matchedOptionIndex = _toConsumableArray(links).findIndex(function(link) {
        return link.id === index;
      });
      return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(index) {
      var links = DomHandler.find(this.container, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
      var order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
      order > -1 && (this.focusedOptionIndex = links[order].getAttribute("id"));
    },
    toggle: function toggle(event) {
      if (this.overlayVisible)
        this.hide();
      else
        this.show(event);
    },
    show: function show(event) {
      this.overlayVisible = true;
      this.target = event.currentTarget;
    },
    hide: function hide() {
      this.overlayVisible = false;
      this.target = null;
    },
    onEnter: function onEnter(el) {
      DomHandler.addStyles(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
      this.bindOutsideClickListener();
      this.bindResizeListener();
      this.bindScrollListener();
      if (this.autoZIndex) {
        ZIndexUtils.set("menu", el, this.baseZIndex + this.$primevue.config.zIndex.menu);
      }
      if (this.popup) {
        DomHandler.focus(this.list);
        this.changeFocusedOptionIndex(0);
      }
      this.$emit("show");
    },
    onLeave: function onLeave() {
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
      this.unbindScrollListener();
      this.$emit("hide");
    },
    onAfterLeave: function onAfterLeave(el) {
      if (this.autoZIndex) {
        ZIndexUtils.clear(el);
      }
    },
    alignOverlay: function alignOverlay() {
      DomHandler.absolutePosition(this.container, this.target);
      this.container.style.minWidth = DomHandler.getOuterWidth(this.target) + "px";
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          var isOutsideContainer = _this.container && !_this.container.contains(event.target);
          var isOutsideTarget = !(_this.target && (_this.target === event.target || _this.target.contains(event.target)));
          if (_this.overlayVisible && isOutsideContainer && isOutsideTarget) {
            _this.hide();
          } else if (!_this.popup && isOutsideContainer && isOutsideTarget) {
            _this.focusedOptionIndex = -1;
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
      var _this2 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, function() {
          if (_this2.overlayVisible) {
            _this2.hide();
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
      var _this3 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this3.overlayVisible && !DomHandler.isTouchDevice()) {
            _this3.hide();
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
    visible: function visible2(item) {
      return typeof item.visible === "function" ? item.visible() : item.visible !== false;
    },
    disabled: function disabled2(item) {
      return typeof item.disabled === "function" ? item.disabled() : item.disabled;
    },
    label: function label2(item) {
      return typeof item.label === "function" ? item.label() : item.label;
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.target
      });
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    listRef: function listRef(el) {
      this.list = el;
    }
  },
  computed: {
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
    }
  },
  components: {
    PVMenuitem: script$1$3,
    Portal: script$1$5
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
var _hoisted_1$8 = ["id"];
var _hoisted_2$7 = ["id", "tabindex", "aria-activedescendant", "aria-label", "aria-labelledby"];
var _hoisted_3$5 = ["id"];
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PVMenuitem = resolveComponent("PVMenuitem");
  var _component_Portal = resolveComponent("Portal");
  return openBlock(), createBlock(_component_Portal, {
    appendTo: _ctx.appendTo,
    disabled: !_ctx.popup
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, {
        name: "p-connected-overlay",
        onEnter: $options.onEnter,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave
      }, {
        "default": withCtx(function() {
          return [(_ctx.popup ? $data.overlayVisible : true) ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            id: $data.id,
            "class": _ctx.cx("root"),
            onClick: _cache[3] || (_cache[3] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            })
          }, _objectSpread$2(_objectSpread$2({}, _ctx.$attrs), _ctx.ptm("root")), {
            "data-pc-name": "menu"
          }), [_ctx.$slots.start ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("start")
          }, _ctx.ptm("start")), [renderSlot(_ctx.$slots, "start")], 16)) : createCommentVNode("", true), createElementVNode("ul", mergeProps({
            ref: $options.listRef,
            id: $data.id + "_list",
            "class": _ctx.cx("menu"),
            role: "menu",
            tabindex: _ctx.tabindex,
            "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
            "aria-label": _ctx.ariaLabel,
            "aria-labelledby": _ctx.ariaLabelledby,
            onFocus: _cache[0] || (_cache[0] = function() {
              return $options.onListFocus && $options.onListFocus.apply($options, arguments);
            }),
            onBlur: _cache[1] || (_cache[1] = function() {
              return $options.onListBlur && $options.onListBlur.apply($options, arguments);
            }),
            onKeydown: _cache[2] || (_cache[2] = function() {
              return $options.onListKeyDown && $options.onListKeyDown.apply($options, arguments);
            })
          }, _ctx.ptm("menu")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item, i) {
            return openBlock(), createElementBlock(Fragment, {
              key: $options.label(item) + i.toString()
            }, [item.items && $options.visible(item) && !item.separator ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [item.items ? (openBlock(), createElementBlock("li", mergeProps({
              key: 0,
              id: $data.id + "_" + i,
              "class": _ctx.cx("submenuHeader"),
              role: "none"
            }, _ctx.ptm("submenuHeader")), [renderSlot(_ctx.$slots, "item", {
              item
            }, function() {
              return [createTextVNode(toDisplayString($options.label(item)), 1)];
            })], 16, _hoisted_3$5)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(item.items, function(child, j) {
              return openBlock(), createElementBlock(Fragment, {
                key: child.label + i + "_" + j
              }, [$options.visible(child) && !child.separator ? (openBlock(), createBlock(_component_PVMenuitem, {
                key: 0,
                id: $data.id + "_" + i + "_" + j,
                item: child,
                templates: _ctx.$slots,
                exact: _ctx.exact,
                focusedOptionId: $options.focusedOptionId,
                onItemClick: $options.itemClick,
                pt: _ctx.pt
              }, null, 8, ["id", "item", "templates", "exact", "focusedOptionId", "onItemClick", "pt"])) : $options.visible(child) && child.separator ? (openBlock(), createElementBlock("li", mergeProps({
                key: "separator" + i + j,
                "class": [_ctx.cx("separator"), item["class"]],
                style: child.style,
                role: "separator"
              }, _ctx.ptm("separator")), null, 16)) : createCommentVNode("", true)], 64);
            }), 128))], 64)) : $options.visible(item) && item.separator ? (openBlock(), createElementBlock("li", mergeProps({
              key: "separator" + i.toString(),
              "class": [_ctx.cx("separator"), item["class"]],
              style: item.style,
              role: "separator"
            }, _ctx.ptm("separator")), null, 16)) : (openBlock(), createBlock(_component_PVMenuitem, {
              key: $options.label(item) + i.toString(),
              id: $data.id + "_" + i,
              item,
              templates: _ctx.$slots,
              exact: _ctx.exact,
              focusedOptionId: $options.focusedOptionId,
              onItemClick: $options.itemClick,
              pt: _ctx.pt
            }, null, 8, ["id", "item", "templates", "exact", "focusedOptionId", "onItemClick", "pt"]))], 64);
          }), 128))], 16, _hoisted_2$7), _ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
            key: 1,
            "class": _ctx.cx("end")
          }, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end")], 16)) : createCommentVNode("", true)], 16, _hoisted_1$8)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 8, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
script$a.render = render$9;
const _sfc_main$2 = {
  __name: "HeadBar",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const storeUser = useState("user");
    const storeToken = useState("token");
    const basedomainURL = useRuntimeConfig().public.apiBase;
    const swal = inject("$swal");
    const cookiestk = useCookie("tk");
    const cookiesusl = useCookie("usl");
    const cookiesjwt = useCookie("jwt");
    const cookiesu = useCookie("u");
    ref(false);
    const count_noti = ref(0);
    ({
      headers: { Authorization: `Bearer ${storeToken.value}` }
    });
    let fnames = storeUser.value.full_name ? storeUser.value.full_name.split(" ") : ["A"];
    let FName = fnames[fnames.length - 1].substring(0, 1);
    const menuTaikhoan = ref();
    ref(false);
    const itemheaders = ref([
      { label: "C\xE0i \u0111\u1EB7t", icon: "pi pi-fw pi-cog", to: "/options" },
      {
        label: "\u0110\u0103ng xu\u1EA5t",
        icon: "pi pi-fw pi-power-off",
        command: (event) => {
          logout();
        }
      }
    ]);
    const logout = () => {
      swal.fire({
        title: "Th\xF4ng b\xE1o",
        text: "B\u1EA1n c\xF3 mu\u1ED1n \u0111\u0103ng xu\u1EA5t kh\u1ECFi t\xE0i kho\u1EA3n n\xE0y kh\xF4ng!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "C\xF3",
        cancelButtonText: "Kh\xF4ng"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await useAsyncData(
            "Logout",
            () => $fetch("/api/Login/Logout", {
              method: "GET",
              baseURL: basedomainURL,
              headers: { Authorization: `Bearer ${storeToken.value}` }
            })
          );
          cookiestk.value = null;
          cookiesusl.value = null;
          cookiesjwt.value = null;
          cookiesu.value = null;
          useState("islogin", () => false);
          if (router)
            router.push({ path: "/admin" });
          location.reload(true);
        }
      });
    };
    const toggle2 = (event, type) => {
      switch (type) {
        case 1:
          menuTaikhoan.value.toggle(event);
          break;
        case 2:
          moduleMenu.value.toggle(event);
          break;
      }
    };
    ref([
      { label: "V\u0103n b\u1EA3n", icon: "pi pi-fw pi-file", to: "/options" },
      {
        label: "\u0110\u0103ng xu\u1EA5t",
        icon: "pi pi-fw pi-power-off",
        command: (event) => {
          logout();
        }
      }
    ]);
    const moduleMenu = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      const _directive_ripple = resolveDirective("ripple");
      const _directive_badge = resolveDirective("badge");
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row shadow-3 header-bar" }, _attrs))} data-v-436668cc><div class="flex flex-row flex-grow-1 headerbar align-items-center" data-v-436668cc>`);
      if (unref(storeUser).logo) {
        _push(`<div class="ml-3 mr-2" data-v-436668cc><img${ssrRenderAttr("src", unref(basedomainURL) + unref(storeUser).logo)} height="40" data-v-436668cc></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="title-org" data-v-436668cc>${ssrInterpolate(unref(storeUser).product_name || unref(storeUser).organization_name || "GIAYNAM")}</h2></div><div class="flex flex-none align-items-center justify-content-center" data-v-436668cc>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        class: "module-button p-button p-component p-button-icon-only p-button-rounded p-button-plain p-button-text",
        onClick: ($event) => toggle2($event, 2),
        "aria-haspopup": "true",
        "aria-controls": "module_menu"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-table p-button-icon" data-v-436668cc${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "pi pi-table p-button-icon" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        class: "noti-button p-button p-component p-button-icon-only p-button-rounded p-button-secondary p-button-text",
        "aria-haspopup": "true",
        "aria-controls": "overlay_menu",
        style: { "padding": "0.5rem" },
        onClick: ($event) => _ctx.clickNoti()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${ssrRenderAttrs(mergeProps({
              id: "bell",
              class: [count_noti.value && count_noti.value > 0 ? "" : "hide-bell", "pi pi-bell p-button-icon"],
              style: { "font-size": "1.5rem" }
            }, ssrGetDirectiveProps(_ctx, _directive_ripple), ssrGetDirectiveProps(_ctx, _directive_badge, count_noti.value)))} data-v-436668cc${_scopeId}></span>`);
          } else {
            return [
              withDirectives(createVNode("span", {
                id: "bell",
                class: [count_noti.value && count_noti.value > 0 ? "" : "hide-bell", "pi pi-bell p-button-icon"],
                style: { "font-size": "1.5rem" }
              }, null, 2), [
                [_directive_ripple],
                [_directive_badge, count_noti.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, mergeProps({
        type: "button",
        class: "module-button p-button p-component p-button-icon-only p-button-rounded p-button-plain p-button-text",
        "aria-haspopup": "true",
        "aria-controls": "menu-help"
      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng", void 0, { left: true })), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-question-circle p-button-icon text-xl" data-v-436668cc${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "pi pi-question-circle p-button-icon text-xl" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        class: "shadow-none p-button-text p-1 p-ripple",
        onClick: ($event) => toggle2($event, 1),
        "aria-haspopup": "true",
        "aria-controls": "overlay_menu"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(script$b), mergeProps({
              image: unref(basedomainURL) + unref(storeUser).avatar + "?public=true",
              label: unref(storeUser).avatar ? "" : unref(FName),
              style: { "background-color": "#2196f3", "color": "#ffffff" },
              shape: "circle"
            }, ssrGetDirectiveProps(_ctx, _directive_tooltip, unref(storeUser).full_name, void 0, { left: true }), ssrGetDirectiveProps(_ctx, _directive_ripple)), null, _parent2, _scopeId));
          } else {
            return [
              withDirectives(createVNode(unref(script$b), {
                image: unref(basedomainURL) + unref(storeUser).avatar + "?public=true",
                label: unref(storeUser).avatar ? "" : unref(FName),
                style: { "background-color": "#2196f3", "color": "#ffffff" },
                shape: "circle"
              }, null, 8, ["image", "label"]), [
                [
                  _directive_tooltip,
                  unref(storeUser).full_name,
                  void 0,
                  { left: true }
                ],
                [_directive_ripple]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(script$a), {
        id: "overlay_menu",
        ref_key: "menuTaikhoan",
        ref: menuTaikhoan,
        model: itemheaders.value,
        popup: true
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/HeadBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeadBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-436668cc"]]);
const encr = (str, strkey, CryptoJS) => {
  var key = CryptoJS.enc.Utf8.parse(strkey);
  var iv = CryptoJS.enc.Utf8.parse(strkey);
  return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(str), key, {
    keySize: 128 / 8,
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
};
const decr = (str, strkey, CryptoJS) => {
  var key = CryptoJS.enc.Utf8.parse(strkey);
  var iv = CryptoJS.enc.Utf8.parse(strkey);
  var de = CryptoJS.AES.decrypt(str, key, {
    keySize: 128 / 8,
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return de.toString(CryptoJS.enc.Utf8);
};
const getParent = (root6, id, key, pnode) => {
  id = id.toString();
  var i, pnode, node;
  for (var i = 0; i < root6.length; i++) {
    pnode = root6[i];
    node = root6[i];
    if (node[key].toString() === id || node.children && (node = getParent(node.children, id, key, pnode))) {
      return pnode;
    }
  }
  return null;
};
var styles$2 = "\n.p-panelmenu .p-panelmenu-header-action {\n    display: flex;\n    align-items: center;\n    user-select: none;\n    cursor: pointer;\n    position: relative;\n    text-decoration: none;\n}\n\n.p-panelmenu .p-panelmenu-header-action:focus {\n    z-index: 1;\n}\n\n.p-panelmenu .p-submenu-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.p-panelmenu .p-menuitem-link {\n    display: flex;\n    align-items: center;\n    user-select: none;\n    cursor: pointer;\n    text-decoration: none;\n    position: relative;\n    overflow: hidden;\n}\n\n.p-panelmenu .p-menuitem-text {\n    line-height: 1;\n}\n";
var classes$2 = {
  root: "p-panelmenu p-component",
  panel: "p-panelmenu-panel",
  header: function header(_ref) {
    var instance = _ref.instance, item = _ref.item;
    return ["p-panelmenu-header", {
      "p-highlight": instance.isItemActive(item),
      "p-disabled": instance.isItemDisabled(item)
    }];
  },
  headerContent: "p-panelmenu-header-content",
  headerAction: function headerAction(_ref2) {
    var instance = _ref2.instance, isActive = _ref2.isActive, isExactActive = _ref2.isExactActive;
    return ["p-panelmenu-header-action", {
      "router-link-active": isActive,
      "router-link-active-exact": instance.exact && isExactActive
    }];
  },
  headerIcon: "p-menuitem-icon",
  headerLabel: "p-menuitem-text",
  toggleableContent: "p-toggleable-content",
  menuContent: "p-panelmenu-content",
  menu: "p-panelmenu-root-list",
  menuitem: function menuitem2(_ref3) {
    var instance = _ref3.instance, processedItem = _ref3.processedItem;
    return ["p-menuitem", {
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }];
  },
  content: "p-menuitem-content",
  action: function action2(_ref4) {
    var props = _ref4.props, isActive = _ref4.isActive, isExactActive = _ref4.isExactActive;
    return ["p-menuitem-link", {
      "router-link-active": isActive,
      "router-link-active-exact": props.exact && isExactActive
    }];
  },
  icon: "p-menuitem-icon",
  label: "p-menuitem-text",
  submenuIcon: "p-submenu-icon",
  submenu: "p-submenu-list",
  separator: "p-menuitem-separator"
};
var _useStyle$2 = useStyle(styles$2, {
  name: "panelmenu",
  manual: true
}), loadStyle$2 = _useStyle$2.load;
var script$3$1 = {
  name: "BasePanelMenu",
  "extends": script$6$1,
  props: {
    model: {
      type: Array,
      "default": null
    },
    expandedKeys: {
      type: Object,
      "default": null
    },
    exact: {
      type: Boolean,
      "default": true
    },
    tabindex: {
      type: Number,
      "default": 0
    }
  },
  css: {
    classes: classes$2,
    loadStyle: loadStyle$2
  },
  provide: function provide3() {
    return {
      $parentInstance: this
    };
  }
};
var script$2$1 = {
  name: "PanelMenuSub",
  hostName: "PanelMenu",
  "extends": script$6$1,
  emits: ["item-toggle"],
  props: {
    panelId: {
      type: String,
      "default": null
    },
    focusedItemId: {
      type: String,
      "default": null
    },
    items: {
      type: Array,
      "default": null
    },
    level: {
      type: Number,
      "default": 0
    },
    templates: {
      type: Object,
      "default": null
    },
    activeItemPath: {
      type: Object,
      "default": null
    },
    exact: {
      type: Boolean,
      "default": true
    },
    tabindex: {
      type: Number,
      "default": -1
    }
  },
  methods: {
    getItemId: function getItemId(processedItem) {
      return "".concat(this.panelId, "_").concat(processedItem.key);
    },
    getItemKey: function getItemKey(processedItem) {
      return this.getItemId(processedItem);
    },
    getItemProp: function getItemProp2(processedItem, name, params) {
      return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : void 0;
    },
    getItemLabel: function getItemLabel(processedItem) {
      return this.getItemProp(processedItem, "label");
    },
    getPTOptions: function getPTOptions3(processedItem, key) {
      return this.ptm(key, {
        context: {
          active: this.isItemActive(processedItem),
          focused: this.isItemFocused(processedItem)
        }
      });
    },
    isItemActive: function isItemActive(processedItem) {
      return this.activeItemPath.some(function(path) {
        return path.key === processedItem.key;
      });
    },
    isItemVisible: function isItemVisible(processedItem) {
      return this.getItemProp(processedItem, "visible") !== false;
    },
    isItemDisabled: function isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, "disabled");
    },
    isItemFocused: function isItemFocused2(processedItem) {
      return this.focusedItemId === this.getItemId(processedItem);
    },
    isItemGroup: function isItemGroup(processedItem) {
      return ObjectUtils.isNotEmpty(processedItem.items);
    },
    onItemClick: function onItemClick2(event, processedItem) {
      this.getItemProp(processedItem, "command", {
        originalEvent: event,
        item: processedItem.item
      });
      this.$emit("item-toggle", {
        processedItem,
        expanded: !this.isItemActive(processedItem)
      });
    },
    onItemToggle: function onItemToggle(event) {
      this.$emit("item-toggle", event);
    },
    onItemActionClick: function onItemActionClick2(event, navigate) {
      navigate && navigate(event);
    },
    getAriaSetSize: function getAriaSetSize() {
      var _this = this;
      return this.items.filter(function(processedItem) {
        return _this.isItemVisible(processedItem) && !_this.getItemProp(processedItem, "separator");
      }).length;
    },
    getAriaPosInset: function getAriaPosInset(index) {
      var _this2 = this;
      return index - this.items.slice(0, index).filter(function(processedItem) {
        return _this2.isItemVisible(processedItem) && _this2.getItemProp(processedItem, "separator");
      }).length + 1;
    }
  },
  components: {
    ChevronRightIcon: script$d,
    ChevronDownIcon: script$e
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1$1 = ["tabindex"];
var _hoisted_2$1$1 = ["id", "aria-label", "aria-expanded", "aria-level", "aria-setsize", "aria-posinset", "data-p-focused", "data-p-disabled"];
var _hoisted_3$1$1 = ["onClick"];
var _hoisted_4$1$1 = ["href", "onClick"];
var _hoisted_5$1$1 = ["href", "target"];
function render$2$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = resolveComponent("router-link");
  var _component_PanelMenuSub = resolveComponent("PanelMenuSub", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("ul", {
    "class": normalizeClass(_ctx.cx("submenu")),
    tabindex: $props.tabindex
  }, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, function(processedItem, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.getItemKey(processedItem)
    }, [$options.isItemVisible(processedItem) && !$options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      id: $options.getItemId(processedItem),
      "class": [_ctx.cx("menuitem", {
        processedItem
      }), $options.getItemProp(processedItem, "class")],
      style: $options.getItemProp(processedItem, "style"),
      role: "treeitem",
      "aria-label": $options.getItemLabel(processedItem),
      "aria-expanded": $options.isItemGroup(processedItem) ? $options.isItemActive(processedItem) : void 0,
      "aria-level": $props.level + 1,
      "aria-setsize": $options.getAriaSetSize(),
      "aria-posinset": $options.getAriaPosInset(index)
    }, $options.getPTOptions(processedItem, "menuitem"), {
      "data-p-focused": $options.isItemFocused(processedItem),
      "data-p-disabled": $options.isItemDisabled(processedItem)
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("content"),
      onClick: function onClick($event) {
        return $options.onItemClick($event, processedItem);
      }
    }, $options.getPTOptions(processedItem, "content")), [!$props.templates.item ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [$options.getItemProp(processedItem, "to") && !$options.isItemDisabled(processedItem) ? (openBlock(), createBlock(_component_router_link, {
      key: 0,
      to: $options.getItemProp(processedItem, "to"),
      custom: ""
    }, {
      "default": withCtx(function(_ref) {
        var navigate = _ref.navigate, href = _ref.href, isActive = _ref.isActive, isExactActive = _ref.isExactActive;
        return [withDirectives((openBlock(), createElementBlock("a", mergeProps({
          href,
          "class": _ctx.cx("action", {
            isActive,
            isExactActive
          }),
          tabindex: "-1",
          "aria-hidden": "true",
          onClick: function onClick($event) {
            return $options.onItemActionClick($event, navigate);
          }
        }, $options.getPTOptions(processedItem, "action")), [$props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
          key: 0,
          item: processedItem.item,
          "class": normalizeClass([_ctx.cx("icon"), $options.getItemProp(processedItem, "icon")])
        }, null, 8, ["item", "class"])) : $options.getItemProp(processedItem, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
          key: 1,
          "class": [_ctx.cx("icon"), $options.getItemProp(processedItem, "icon")]
        }, $options.getPTOptions(processedItem, "icon")), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
          "class": _ctx.cx("label")
        }, $options.getPTOptions(processedItem, "label")), toDisplayString($options.getItemLabel(processedItem)), 17)], 16, _hoisted_4$1$1)), [[_directive_ripple]])];
      }),
      _: 2
    }, 1032, ["to"])) : withDirectives((openBlock(), createElementBlock("a", mergeProps({
      key: 1,
      href: $options.getItemProp(processedItem, "url"),
      "class": _ctx.cx("action"),
      target: $options.getItemProp(processedItem, "target"),
      tabindex: "-1",
      "aria-hidden": "true"
    }, $options.getPTOptions(processedItem, "action")), [$options.isItemGroup(processedItem) ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [$props.templates.submenuicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.submenuicon), mergeProps({
      key: 0,
      "class": _ctx.cx("submenuIcon"),
      active: $options.isItemActive(processedItem)
    }, $options.getPTOptions(processedItem, "submenuIcon")), null, 16, ["class", "active"])) : (openBlock(), createBlock(resolveDynamicComponent($options.isItemActive(processedItem) ? "ChevronDownIcon" : "ChevronRightIcon"), mergeProps({
      key: 1,
      "class": _ctx.cx("submenuIcon")
    }, $options.getPTOptions(processedItem, "submenuIcon")), null, 16, ["class"]))], 64)) : createCommentVNode("", true), $props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
      key: 1,
      item: processedItem.item,
      "class": normalizeClass([_ctx.cx("icon"), $options.getItemProp(processedItem, "icon")])
    }, null, 8, ["item", "class"])) : $options.getItemProp(processedItem, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx("icon"), $options.getItemProp(processedItem, "icon")]
    }, $options.getPTOptions(processedItem, "icon")), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
      "class": _ctx.cx("label")
    }, $options.getPTOptions(processedItem, "label")), toDisplayString($options.getItemLabel(processedItem)), 17)], 16, _hoisted_5$1$1)), [[_directive_ripple]])], 64)) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
      key: 1,
      item: processedItem.item
    }, null, 8, ["item"]))], 16, _hoisted_3$1$1), createVNode(Transition, {
      name: "p-toggleable-content"
    }, {
      "default": withCtx(function() {
        return [withDirectives(createElementVNode("div", mergeProps({
          "class": _ctx.cx("toggleableContent")
        }, _ctx.ptm("toggleableContent")), [$options.isItemVisible(processedItem) && $options.isItemGroup(processedItem) ? (openBlock(), createBlock(_component_PanelMenuSub, mergeProps({
          key: 0,
          id: $options.getItemId(processedItem) + "_list",
          role: "group",
          panelId: $props.panelId,
          focusedItemId: $props.focusedItemId,
          items: processedItem.items,
          level: $props.level + 1,
          templates: $props.templates,
          activeItemPath: $props.activeItemPath,
          exact: $props.exact,
          onItemToggle: $options.onItemToggle,
          pt: _ctx.pt
        }, _ctx.ptm("submenu")), null, 16, ["id", "panelId", "focusedItemId", "items", "level", "templates", "activeItemPath", "exact", "onItemToggle", "pt"])) : createCommentVNode("", true)], 16), [[vShow, $options.isItemActive(processedItem)]])];
      }),
      _: 2
    }, 1024)], 16, _hoisted_2$1$1)) : createCommentVNode("", true), $options.isItemVisible(processedItem) && $options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
      key: 1,
      style: $options.getItemProp(processedItem, "style"),
      "class": [_ctx.cx("separator"), $options.getItemProp(processedItem, "class")],
      role: "separator"
    }, _ctx.ptm("separator")), null, 16)) : createCommentVNode("", true)], 64);
  }), 128))], 10, _hoisted_1$1$1);
}
script$2$1.render = render$2$1;
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
var script$1$2 = {
  name: "PanelMenuList",
  hostName: "PanelMenu",
  "extends": script$6$1,
  emits: ["item-toggle", "header-focus"],
  props: {
    panelId: {
      type: String,
      "default": null
    },
    items: {
      type: Array,
      "default": null
    },
    templates: {
      type: Object,
      "default": null
    },
    expandedKeys: {
      type: Object,
      "default": null
    },
    exact: {
      type: Boolean,
      "default": true
    }
  },
  searchTimeout: null,
  searchValue: null,
  data: function data2() {
    return {
      focused: false,
      focusedItem: null,
      activeItemPath: []
    };
  },
  watch: {
    expandedKeys: function expandedKeys(newValue) {
      this.autoUpdateActiveItemPath(newValue);
    }
  },
  mounted: function mounted2() {
    this.autoUpdateActiveItemPath(this.expandedKeys);
  },
  methods: {
    getItemProp: function getItemProp3(processedItem, name) {
      return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : void 0;
    },
    getItemLabel: function getItemLabel2(processedItem) {
      return this.getItemProp(processedItem, "label");
    },
    isItemVisible: function isItemVisible2(processedItem) {
      return this.getItemProp(processedItem, "visible") !== false;
    },
    isItemDisabled: function isItemDisabled2(processedItem) {
      return this.getItemProp(processedItem, "disabled");
    },
    isItemActive: function isItemActive2(processedItem) {
      return this.activeItemPath.some(function(path) {
        return path.key === processedItem.parentKey;
      });
    },
    isItemGroup: function isItemGroup2(processedItem) {
      return ObjectUtils.isNotEmpty(processedItem.items);
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.focusedItem = this.focusedItem || (this.isElementInPanel(event, event.relatedTarget) ? this.findFirstItem() : this.findLastItem());
    },
    onBlur: function onBlur() {
      this.focused = false;
      this.focusedItem = null;
      this.searchValue = "";
    },
    onKeyDown: function onKeyDown(event) {
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Enter":
          this.onEnterKey(event);
          break;
        case "Escape":
        case "Tab":
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
            this.searchItems(event, event.key);
          }
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey2(event) {
      var processedItem = ObjectUtils.isNotEmpty(this.focusedItem) ? this.findNextItem(this.focusedItem) : this.findFirstItem();
      this.changeFocusedItem({
        originalEvent: event,
        processedItem,
        focusOnNext: true
      });
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey2(event) {
      var processedItem = ObjectUtils.isNotEmpty(this.focusedItem) ? this.findPrevItem(this.focusedItem) : this.findLastItem();
      this.changeFocusedItem({
        originalEvent: event,
        processedItem,
        selfCheck: true
      });
      event.preventDefault();
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var _this = this;
      if (ObjectUtils.isNotEmpty(this.focusedItem)) {
        var matched = this.activeItemPath.some(function(p) {
          return p.key === _this.focusedItem.key;
        });
        if (matched) {
          this.activeItemPath = this.activeItemPath.filter(function(p) {
            return p.key !== _this.focusedItem.key;
          });
        } else {
          this.focusedItem = ObjectUtils.isNotEmpty(this.focusedItem.parent) ? this.focusedItem.parent : this.focusedItem;
        }
        event.preventDefault();
      }
    },
    onArrowRightKey: function onArrowRightKey(event) {
      var _this2 = this;
      if (ObjectUtils.isNotEmpty(this.focusedItem)) {
        var grouped = this.isItemGroup(this.focusedItem);
        if (grouped) {
          var matched = this.activeItemPath.some(function(p) {
            return p.key === _this2.focusedItem.key;
          });
          if (matched) {
            this.onArrowDownKey(event);
          } else {
            this.activeItemPath = this.activeItemPath.filter(function(p) {
              return p.parentKey !== _this2.focusedItem.parentKey;
            });
            this.activeItemPath.push(this.focusedItem);
          }
        }
        event.preventDefault();
      }
    },
    onHomeKey: function onHomeKey2(event) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: this.findFirstItem(),
        allowHeaderFocus: false
      });
      event.preventDefault();
    },
    onEndKey: function onEndKey2(event) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: this.findLastItem(),
        focusOnNext: true,
        allowHeaderFocus: false
      });
      event.preventDefault();
    },
    onEnterKey: function onEnterKey2(event) {
      if (ObjectUtils.isNotEmpty(this.focusedItem)) {
        var element = DomHandler.findSingle(this.$el, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
        var anchorElement = element && (DomHandler.findSingle(element, '[data-pc-section="action"]') || DomHandler.findSingle(element, "a,button"));
        anchorElement ? anchorElement.click() : element && element.click();
      }
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey2(event) {
      this.onEnterKey(event);
    },
    onItemToggle: function onItemToggle2(event) {
      var processedItem = event.processedItem, expanded = event.expanded;
      if (this.expandedKeys) {
        this.$emit("item-toggle", {
          item: processedItem.item,
          expanded
        });
      } else {
        this.activeItemPath = this.activeItemPath.filter(function(p) {
          return p.parentKey !== processedItem.parentKey;
        });
        expanded && this.activeItemPath.push(processedItem);
      }
      this.focusedItem = processedItem;
      DomHandler.focus(this.$el);
    },
    isElementInPanel: function isElementInPanel(event, element) {
      var panel2 = event.currentTarget.closest('[data-pc-section="panel"]');
      return panel2 && panel2.contains(element);
    },
    isItemMatched: function isItemMatched(processedItem) {
      return this.isValidItem(processedItem) && this.getItemLabel(processedItem).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale));
    },
    isVisibleItem: function isVisibleItem(processedItem) {
      return !!processedItem && (processedItem.level === 0 || this.isItemActive(processedItem)) && this.isItemVisible(processedItem);
    },
    isValidItem: function isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem);
    },
    findFirstItem: function findFirstItem() {
      var _this3 = this;
      return this.visibleItems.find(function(processedItem) {
        return _this3.isValidItem(processedItem);
      });
    },
    findLastItem: function findLastItem() {
      var _this4 = this;
      return ObjectUtils.findLast(this.visibleItems, function(processedItem) {
        return _this4.isValidItem(processedItem);
      });
    },
    findNextItem: function findNextItem(processedItem) {
      var _this5 = this;
      var index = this.visibleItems.findIndex(function(item) {
        return item.key === processedItem.key;
      });
      var matchedItem = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).find(function(pItem) {
        return _this5.isValidItem(pItem);
      }) : void 0;
      return matchedItem || processedItem;
    },
    findPrevItem: function findPrevItem(processedItem) {
      var _this6 = this;
      var index = this.visibleItems.findIndex(function(item) {
        return item.key === processedItem.key;
      });
      var matchedItem = index > 0 ? ObjectUtils.findLast(this.visibleItems.slice(0, index), function(pItem) {
        return _this6.isValidItem(pItem);
      }) : void 0;
      return matchedItem || processedItem;
    },
    searchItems: function searchItems(event, _char) {
      var _this7 = this;
      this.searchValue = (this.searchValue || "") + _char;
      var matchedItem = null;
      var matched = false;
      if (ObjectUtils.isNotEmpty(this.focusedItem)) {
        var focusedItemIndex = this.visibleItems.findIndex(function(processedItem) {
          return processedItem.key === _this7.focusedItem.key;
        });
        matchedItem = this.visibleItems.slice(focusedItemIndex).find(function(processedItem) {
          return _this7.isItemMatched(processedItem);
        });
        matchedItem = ObjectUtils.isEmpty(matchedItem) ? this.visibleItems.slice(0, focusedItemIndex).find(function(processedItem) {
          return _this7.isItemMatched(processedItem);
        }) : matchedItem;
      } else {
        matchedItem = this.visibleItems.find(function(processedItem) {
          return _this7.isItemMatched(processedItem);
        });
      }
      if (ObjectUtils.isNotEmpty(matchedItem)) {
        matched = true;
      }
      if (ObjectUtils.isEmpty(matchedItem) && ObjectUtils.isEmpty(this.focusedItem)) {
        matchedItem = this.findFirstItem();
      }
      if (ObjectUtils.isNotEmpty(matchedItem)) {
        this.changeFocusedItem({
          originalEvent: event,
          processedItem: matchedItem,
          allowHeaderFocus: false
        });
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function() {
        _this7.searchValue = "";
        _this7.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedItem: function changeFocusedItem(event) {
      var originalEvent = event.originalEvent, processedItem = event.processedItem, focusOnNext = event.focusOnNext, selfCheck = event.selfCheck, _event$allowHeaderFoc = event.allowHeaderFocus, allowHeaderFocus = _event$allowHeaderFoc === void 0 ? true : _event$allowHeaderFoc;
      if (ObjectUtils.isNotEmpty(this.focusedItem) && this.focusedItem.key !== processedItem.key) {
        this.focusedItem = processedItem;
        this.scrollInView();
      } else if (allowHeaderFocus) {
        this.$emit("header-focus", {
          originalEvent,
          focusOnNext,
          selfCheck
        });
      }
    },
    scrollInView: function scrollInView() {
      var element = DomHandler.findSingle(this.$el, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "start"
        });
      }
    },
    autoUpdateActiveItemPath: function autoUpdateActiveItemPath(expandedKeys2) {
      var _this8 = this;
      this.activeItemPath = Object.entries(expandedKeys2 || {}).reduce(function(acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], val = _ref2[1];
        if (val) {
          var processedItem = _this8.findProcessedItemByItemKey(key);
          processedItem && acc.push(processedItem);
        }
        return acc;
      }, []);
    },
    findProcessedItemByItemKey: function findProcessedItemByItemKey(key, processedItems2) {
      var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      processedItems2 = processedItems2 || level === 0 && this.processedItems;
      if (!processedItems2)
        return null;
      for (var i = 0; i < processedItems2.length; i++) {
        var processedItem = processedItems2[i];
        if (this.getItemProp(processedItem, "key") === key)
          return processedItem;
        var matchedItem = this.findProcessedItemByItemKey(key, processedItem.items, level + 1);
        if (matchedItem)
          return matchedItem;
      }
    },
    createProcessedItems: function createProcessedItems(items) {
      var _this9 = this;
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var parentKey = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
      var processedItems2 = [];
      items && items.forEach(function(item, index) {
        var key = (parentKey !== "" ? parentKey + "_" : "") + index;
        var newItem = {
          item,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newItem["items"] = _this9.createProcessedItems(item.items, level + 1, newItem, key);
        processedItems2.push(newItem);
      });
      return processedItems2;
    },
    flatItems: function flatItems(processedItems2) {
      var _this10 = this;
      var processedFlattenItems = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      processedItems2 && processedItems2.forEach(function(processedItem) {
        if (_this10.isVisibleItem(processedItem)) {
          processedFlattenItems.push(processedItem);
          _this10.flatItems(processedItem.items, processedFlattenItems);
        }
      });
      return processedFlattenItems;
    }
  },
  computed: {
    processedItems: function processedItems() {
      return this.createProcessedItems(this.items || []);
    },
    visibleItems: function visibleItems() {
      return this.flatItems(this.processedItems);
    },
    focusedItemId: function focusedItemId() {
      return ObjectUtils.isNotEmpty(this.focusedItem) ? "".concat(this.panelId, "_").concat(this.focusedItem.key) : null;
    }
  },
  components: {
    PanelMenuSub: script$2$1
  }
};
function render$1$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PanelMenuSub = resolveComponent("PanelMenuSub");
  return openBlock(), createBlock(_component_PanelMenuSub, mergeProps({
    id: $props.panelId + "_list",
    "class": _ctx.cx("menu"),
    role: "tree",
    tabindex: -1,
    "aria-activedescendant": $data.focused ? $options.focusedItemId : void 0,
    panelId: $props.panelId,
    focusedItemId: $data.focused ? $options.focusedItemId : void 0,
    items: $options.processedItems,
    templates: $props.templates,
    activeItemPath: $data.activeItemPath,
    exact: $props.exact,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeydown: $options.onKeyDown,
    onItemToggle: $options.onItemToggle,
    pt: _ctx.pt
  }, _ctx.ptm("menu")), null, 16, ["id", "class", "aria-activedescendant", "panelId", "focusedItemId", "items", "templates", "activeItemPath", "exact", "onFocus", "onBlur", "onKeydown", "onItemToggle", "pt"]);
}
script$1$2.render = render$1$1;
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
function _toPrimitive$1(input2, hint) {
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
var script$9 = {
  name: "PanelMenu",
  "extends": script$3$1,
  emits: ["update:expandedKeys", "panel-open", "panel-close"],
  data: function data3() {
    return {
      id: this.$attrs.id,
      activeItem: null
    };
  },
  watch: {
    "$attrs.id": function $attrsId2(newValue) {
      this.id = newValue || UniqueComponentId();
    }
  },
  mounted: function mounted3() {
    this.id = this.id || UniqueComponentId();
  },
  methods: {
    getItemProp: function getItemProp4(item, name) {
      return item ? ObjectUtils.getItemValue(item[name]) : void 0;
    },
    getItemLabel: function getItemLabel3(item) {
      return this.getItemProp(item, "label");
    },
    getPTOptions: function getPTOptions4(item, key) {
      return this.ptm(key, {
        options: {
          active: this.isItemActive(item),
          focused: this.isItemFocused(item)
        }
      });
    },
    isItemActive: function isItemActive3(item) {
      return this.expandedKeys ? this.expandedKeys[this.getItemProp(item, "key")] : ObjectUtils.equals(item, this.activeItem);
    },
    isItemVisible: function isItemVisible3(item) {
      return this.getItemProp(item, "visible") !== false;
    },
    isItemDisabled: function isItemDisabled3(item) {
      return this.getItemProp(item, "disabled");
    },
    isItemFocused: function isItemFocused3(item) {
      return ObjectUtils.equals(item, this.activeItem);
    },
    getPanelId: function getPanelId(index) {
      return "".concat(this.id, "_").concat(index);
    },
    getPanelKey: function getPanelKey(index) {
      return this.getPanelId(index);
    },
    getHeaderId: function getHeaderId(index) {
      return "".concat(this.getPanelId(index), "_header");
    },
    getContentId: function getContentId(index) {
      return "".concat(this.getPanelId(index), "_content");
    },
    onHeaderClick: function onHeaderClick(event, item) {
      if (this.isItemDisabled(item)) {
        event.preventDefault();
        return;
      }
      if (item.command) {
        item.command({
          originalEvent: event,
          item
        });
      }
      this.changeActiveItem(event, item);
      DomHandler.focus(event.currentTarget);
    },
    onHeaderKeyDown: function onHeaderKeyDown(event, item) {
      switch (event.code) {
        case "ArrowDown":
          this.onHeaderArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onHeaderArrowUpKey(event);
          break;
        case "Home":
          this.onHeaderHomeKey(event);
          break;
        case "End":
          this.onHeaderEndKey(event);
          break;
        case "Enter":
        case "Space":
          this.onHeaderEnterKey(event, item);
          break;
      }
    },
    onHeaderArrowDownKey: function onHeaderArrowDownKey(event) {
      var rootList = DomHandler.getAttribute(event.currentTarget, "data-p-highlight") === true ? DomHandler.findSingle(event.currentTarget.nextElementSibling, '[data-pc-section="menu"]') : null;
      rootList ? DomHandler.focus(rootList) : this.updateFocusedHeader({
        originalEvent: event,
        focusOnNext: true
      });
      event.preventDefault();
    },
    onHeaderArrowUpKey: function onHeaderArrowUpKey(event) {
      var prevHeader = this.findPrevHeader(event.currentTarget.parentElement) || this.findLastHeader();
      var rootList = DomHandler.getAttribute(prevHeader, "data-p-highlight") === true ? DomHandler.findSingle(prevHeader.nextElementSibling, '[data-pc-section="menu"]') : null;
      rootList ? DomHandler.focus(rootList) : this.updateFocusedHeader({
        originalEvent: event,
        focusOnNext: false
      });
      event.preventDefault();
    },
    onHeaderHomeKey: function onHeaderHomeKey(event) {
      this.changeFocusedHeader(event, this.findFirstHeader());
      event.preventDefault();
    },
    onHeaderEndKey: function onHeaderEndKey(event) {
      this.changeFocusedHeader(event, this.findLastHeader());
      event.preventDefault();
    },
    onHeaderEnterKey: function onHeaderEnterKey(event, item) {
      var headerAction2 = DomHandler.findSingle(event.currentTarget, '[data-pc-section="headeraction"]');
      headerAction2 ? headerAction2.click() : this.onHeaderClick(event, item);
      event.preventDefault();
    },
    onHeaderActionClick: function onHeaderActionClick(event, navigate) {
      navigate && navigate(event);
    },
    findNextHeader: function findNextHeader(panelElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
      var headerElement = DomHandler.findSingle(nextPanelElement, '[data-pc-section="header"]');
      return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") ? this.findNextHeader(headerElement.parentElement) : headerElement : null;
    },
    findPrevHeader: function findPrevHeader(panelElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
      var headerElement = DomHandler.findSingle(prevPanelElement, '[data-pc-section="header"]');
      return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") ? this.findPrevHeader(headerElement.parentElement) : headerElement : null;
    },
    findFirstHeader: function findFirstHeader() {
      return this.findNextHeader(this.$el.firstElementChild, true);
    },
    findLastHeader: function findLastHeader() {
      return this.findPrevHeader(this.$el.lastElementChild, true);
    },
    updateFocusedHeader: function updateFocusedHeader(event) {
      var originalEvent = event.originalEvent, focusOnNext = event.focusOnNext, selfCheck = event.selfCheck;
      var panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
      var header2 = selfCheck ? DomHandler.findSingle(panelElement, '[data-pc-section="header"]') : focusOnNext ? this.findNextHeader(panelElement) : this.findPrevHeader(panelElement);
      header2 ? this.changeFocusedHeader(originalEvent, header2) : focusOnNext ? this.onHeaderHomeKey(originalEvent) : this.onHeaderEndKey(originalEvent);
    },
    changeActiveItem: function changeActiveItem(event, item) {
      var selfActive = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (!this.isItemDisabled(item)) {
        var active = this.isItemActive(item);
        var eventName = !active ? "panel-open" : "panel-close";
        this.activeItem = selfActive ? item : this.activeItem && ObjectUtils.equals(item, this.activeItem) ? null : item;
        this.changeExpandedKeys({
          item,
          expanded: !active
        });
        this.$emit(eventName, {
          originalEvent: event,
          item
        });
      }
    },
    changeExpandedKeys: function changeExpandedKeys(_ref) {
      var item = _ref.item, _ref$expanded = _ref.expanded, expanded = _ref$expanded === void 0 ? false : _ref$expanded;
      if (this.expandedKeys) {
        var _keys = _objectSpread$1({}, this.expandedKeys);
        if (expanded)
          _keys[item.key] = true;
        else
          delete _keys[item.key];
        this.$emit("update:expandedKeys", _keys);
      }
    },
    changeFocusedHeader: function changeFocusedHeader(event, element) {
      element && DomHandler.focus(element);
    }
  },
  components: {
    PanelMenuList: script$1$2,
    ChevronRightIcon: script$d,
    ChevronDownIcon: script$e
  }
};
var _hoisted_1$7 = ["id"];
var _hoisted_2$6 = ["id", "tabindex", "aria-label", "aria-expanded", "aria-controls", "aria-disabled", "onClick", "onKeydown", "data-p-highlight", "data-p-disabled"];
var _hoisted_3$4 = ["href", "onClick"];
var _hoisted_4$4 = ["href"];
var _hoisted_5$4 = ["id", "aria-labelledby"];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = resolveComponent("router-link");
  var _component_PanelMenuList = resolveComponent("PanelMenuList");
  return openBlock(), createElementBlock("div", mergeProps({
    id: $data.id,
    "class": _ctx.cx("root")
  }, _ctx.ptm("root"), {
    "data-pc-name": "panelmenu"
  }), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.getPanelKey(index)
    }, [$options.isItemVisible(item) ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      style: $options.getItemProp(item, "style"),
      "class": [_ctx.cx("panel"), $options.getItemProp(item, "class")]
    }, _ctx.ptm("panel")), [createElementVNode("div", mergeProps({
      id: $options.getHeaderId(index),
      "class": [_ctx.cx("header", {
        item
      }), $options.getItemProp(item, "headerClass")],
      tabindex: $options.isItemDisabled(item) ? -1 : _ctx.tabindex,
      role: "button",
      "aria-label": $options.getItemLabel(item),
      "aria-expanded": $options.isItemActive(item),
      "aria-controls": $options.getContentId(index),
      "aria-disabled": $options.isItemDisabled(item),
      onClick: function onClick($event) {
        return $options.onHeaderClick($event, item);
      },
      onKeydown: function onKeydown($event) {
        return $options.onHeaderKeyDown($event, item);
      }
    }, $options.getPTOptions(item, "header"), {
      "data-p-highlight": $options.isItemActive(item),
      "data-p-disabled": $options.isItemDisabled(item)
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("headerContent")
    }, $options.getPTOptions(item, "headerContent")), [!_ctx.$slots.item ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [$options.getItemProp(item, "to") && !$options.isItemDisabled(item) ? (openBlock(), createBlock(_component_router_link, {
      key: 0,
      to: $options.getItemProp(item, "to"),
      custom: ""
    }, {
      "default": withCtx(function(_ref) {
        var navigate = _ref.navigate, href = _ref.href, isActive = _ref.isActive, isExactActive = _ref.isExactActive;
        return [createElementVNode("a", mergeProps({
          href,
          "class": _ctx.cx("headerAction", {
            isActive,
            isExactActive
          }),
          tabindex: -1,
          onClick: function onClick($event) {
            return $options.onHeaderActionClick($event, navigate);
          }
        }, $options.getPTOptions(item, "headerAction")), [_ctx.$slots.headericon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.headericon), {
          key: 0,
          item,
          "class": normalizeClass([_ctx.cx("headerIcon"), $options.getItemProp(item, "icon")])
        }, null, 8, ["item", "class"])) : $options.getItemProp(item, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
          key: 1,
          "class": [_ctx.cx("headerIcon"), $options.getItemProp(item, "icon")]
        }, $options.getPTOptions(item, "headerIcon")), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
          "class": _ctx.cx("headerLabel")
        }, $options.getPTOptions(item, "headerLabel")), toDisplayString($options.getItemLabel(item)), 17)], 16, _hoisted_3$4)];
      }),
      _: 2
    }, 1032, ["to"])) : (openBlock(), createElementBlock("a", mergeProps({
      key: 1,
      href: $options.getItemProp(item, "url"),
      "class": _ctx.cx("headerAction"),
      tabindex: -1
    }, $options.getPTOptions(item, "headerAction")), [$options.getItemProp(item, "items") ? renderSlot(_ctx.$slots, "submenuicon", {
      key: 0,
      active: $options.isItemActive(item)
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent($options.isItemActive(item) ? "ChevronDownIcon" : "ChevronRightIcon"), mergeProps({
        "class": _ctx.cx("submenuIcon")
      }, $options.getPTOptions(item, "submenuIcon")), null, 16, ["class"]))];
    }) : createCommentVNode("", true), _ctx.$slots.headericon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.headericon), {
      key: 1,
      item,
      "class": normalizeClass([_ctx.cx("headerIcon"), $options.getItemProp(item, "icon")])
    }, null, 8, ["item", "class"])) : $options.getItemProp(item, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx("headerIcon"), $options.getItemProp(item, "icon")]
    }, $options.getPTOptions(item, "headerIcon")), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
      "class": _ctx.cx("headerLabel")
    }, $options.getPTOptions(item, "headerLabel")), toDisplayString($options.getItemLabel(item)), 17)], 16, _hoisted_4$4))], 64)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
      key: 1,
      item
    }, null, 8, ["item"]))], 16)], 16, _hoisted_2$6), createVNode(Transition, {
      name: "p-toggleable-content"
    }, {
      "default": withCtx(function() {
        return [withDirectives(createElementVNode("div", mergeProps({
          id: $options.getContentId(index),
          "class": _ctx.cx("toggleableContent"),
          role: "region",
          "aria-labelledby": $options.getHeaderId(index)
        }, _ctx.ptm("toggleableContent")), [$options.getItemProp(item, "items") ? (openBlock(), createElementBlock("div", mergeProps({
          key: 0,
          "class": _ctx.cx("menuContent")
        }, _ctx.ptm("menuContent")), [createVNode(_component_PanelMenuList, {
          panelId: $options.getPanelId(index),
          items: $options.getItemProp(item, "items"),
          templates: _ctx.$slots,
          expandedKeys: _ctx.expandedKeys,
          onItemToggle: $options.changeExpandedKeys,
          onHeaderFocus: $options.updateFocusedHeader,
          exact: _ctx.exact,
          pt: _ctx.pt
        }, null, 8, ["panelId", "items", "templates", "expandedKeys", "onItemToggle", "onHeaderFocus", "exact", "pt"])], 16)) : createCommentVNode("", true)], 16, _hoisted_5$4), [[vShow, $options.isItemActive(item)]])];
      }),
      _: 2
    }, 1024)], 16)) : createCommentVNode("", true)], 64);
  }), 128))], 16, _hoisted_1$7);
}
script$9.render = render$8;
const _sfc_main$1 = {
  __name: "SideBar",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const router = useRouter();
    const storeUser = useState("user");
    const storeToken = useState("token");
    inject("cryptojs");
    const storeLogin = useState("islogin");
    const basedomainURL = useRuntimeConfig().public.apiBase;
    useRuntimeConfig().public.SecretKey;
    const swal = inject("$swal");
    useCookie("tk");
    useCookie("usl");
    useCookie("jwt");
    useCookie("u");
    ({
      headers: { Authorization: `Bearer ${storeToken.value}` }
    });
    var data_menus = [];
    const menu = ref([
      /*  {
         header: "",
         hiddenOnCollapse: true,
       }, */
      {
        href: "/",
        label: "Trang ch\u1EE7",
        icon: "pi pi-home",
        command: () => {
        }
      }
    ]);
    ref({ version: "1.0" });
    const initModule = async () => {
      $fetch("/api/Cache/ListModuleUserCache", {
        method: "GET",
        baseURL: basedomainURL,
        params: {
          cache: storeUser.value.user_id
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let dt = JSON.parse(response.data);
        data_menus = dt[0];
        menu.value = [
          {
            href: "/",
            label: "Trang ch\u1EE7",
            icon: "pi pi-home"
          }
        ];
        if (data_menus.length > 0) {
          data_menus.filter(
            (x) => x.parent_id == null
            //&& (x.IsVitri == null || x.IsVitri.includes("Menu"))
          ).forEach((md) => {
            let obj = {
              label: md.module_name,
              icon: md.icon,
              href: md.is_link,
              is_child: 0
            };
            let childs = data_menus.filter(
              (x) => x.parent_id == md.module_id
              //&&(x.IsVitri == null || x.IsVitri.includes("Menu"))
            );
            if (childs.length > 0) {
              obj.items = [];
              childs.forEach((md1) => {
                let obj1 = {
                  label: md1.module_name,
                  icon: md1.icon,
                  href: md1.is_link,
                  is_child: 1
                };
                childs = data_menus.filter((x) => x.parent_id == md1.module_id);
                if (childs.length > 0) {
                  obj1.items = [];
                  childs.forEach((md2) => {
                    let obj2 = {
                      label: md2.module_name,
                      icon: md2.icon,
                      href: md2.is_link,
                      is_child: 2
                    };
                    obj1.items.push(obj2);
                  });
                }
                obj.items.push(obj1);
              });
            }
            menu.value.push(obj);
          });
        }
        if (dt.length > 1) {
          let u = storeUser.value;
          u.organization_id = dt[1][0].organization_id;
          u.role_id = dt[1][0].role_id;
          u.organization_name = dt[1][0].organization_name;
          u.product_name = dt[1][0].product_name;
          u.logo = dt[1][0].logo;
          u.full_name = dt[1][0].full_name;
          u.user_key = dt[1][0].user_key;
          u.background_image = dt[1][0].background_image;
          u.is_super = dt[1][0].is_super;
          useState("user", () => u);
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
    ref([]);
    const reloadDashboardMenu = (item) => {
      if (item.href != null && item.href != "")
        router.push({ path: "/admin" + item.href });
      if (item.label !== "Trang ch\u1EE7")
        return false;
      initModule();
    };
    ref(false);
    watch(storeUser, () => {
      if (storeLogin.value)
        initModule();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f66e1f3a>`);
      _push(ssrRenderComponent(unref(script$9), {
        model: menu.value,
        class: "w-full md:w-17rem d-sidebar-bg-color",
        style: { "height": "calc(100vh - 100px)" }
      }, {
        item: withCtx((data6, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([
              data6.item.is_child == 1 || data6.item.is_child == 2 ? "py-2 d-design-sidebar-child" : "py-3 d-design-sidebar",
              "pl-2 align-items-center flex cursor-pointer"
            ])}" data-v-f66e1f3a${_scopeId}>`);
            if (data6.item.is_child == 1) {
              _push2(`<div data-v-f66e1f3a${_scopeId}><i style="${ssrRenderStyle({ "font-size": "1.5rem", "color": "transparent" })}" class="pi pi-chevron-right" data-v-f66e1f3a${_scopeId}></i></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (data6.item.items) {
              _push2(`<div class="pr-2" data-v-f66e1f3a${_scopeId}><i style="${ssrRenderStyle({ "font-size": "0.9rem", "opacity": "0.5" })}" class="pi pi-chevron-right" data-v-f66e1f3a${_scopeId}></i></div>`);
            } else {
              _push2(`<div class="pr-2" data-v-f66e1f3a${_scopeId}><i style="${ssrRenderStyle({ "font-size": "1rem", "color": "transparent" })}" class="pi pi-chevron-right" data-v-f66e1f3a${_scopeId}></i></div>`);
            }
            if (data6.item.is_child == 0 || data6.item.label == "Trang ch\u1EE7") {
              _push2(`<div class="pr-2" style="${ssrRenderStyle({ "font-family": "roboto", "color": "white", "font-size": "16px", "font-weight": "600" })}" data-v-f66e1f3a${_scopeId}><i style="${ssrRenderStyle({ "font-size": "1.5rem" })}" class="${ssrRenderClass(data6.item.icon)}" data-v-f66e1f3a${_scopeId}></i></div>`);
            } else {
              _push2(`<div style="${ssrRenderStyle({ "font-family": "roboto", "color": "white", "font-size": "16px" })}" class="pr-2" data-v-f66e1f3a${_scopeId}><i style="${ssrRenderStyle({ "font-size": "1rem" })}" class="${ssrRenderClass(data6.item.icon)}" data-v-f66e1f3a${_scopeId}></i></div>`);
            }
            if (data6.item.is_child == 0 || data6.item.label == "Trang ch\u1EE7") {
              _push2(`<div style="${ssrRenderStyle({ "font-family": "roboto", "color": "white", "font-size": "16px", "font-weight": "600" })}" data-v-f66e1f3a${_scopeId}>${ssrInterpolate(data6.item.label)}</div>`);
            } else {
              _push2(`<div style="${ssrRenderStyle({ "font-family": "roboto", "color": "white", "font-size": "16px" })}" data-v-f66e1f3a${_scopeId}>${ssrInterpolate(data6.item.label)}</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: [
                  data6.item.is_child == 1 || data6.item.is_child == 2 ? "py-2 d-design-sidebar-child" : "py-3 d-design-sidebar",
                  "pl-2 align-items-center flex cursor-pointer"
                ],
                onClick: ($event) => reloadDashboardMenu(data6.item)
              }, [
                data6.item.is_child == 1 ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("i", {
                    style: { "font-size": "1.5rem", "color": "transparent" },
                    class: "pi pi-chevron-right"
                  })
                ])) : createCommentVNode("", true),
                data6.item.items ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "pr-2"
                }, [
                  createVNode("i", {
                    style: { "font-size": "0.9rem", "opacity": "0.5" },
                    class: "pi pi-chevron-right"
                  })
                ])) : (openBlock(), createBlock("div", {
                  key: 2,
                  class: "pr-2"
                }, [
                  createVNode("i", {
                    style: { "font-size": "1rem", "color": "transparent" },
                    class: "pi pi-chevron-right"
                  })
                ])),
                data6.item.is_child == 0 || data6.item.label == "Trang ch\u1EE7" ? (openBlock(), createBlock("div", {
                  key: 3,
                  class: "pr-2",
                  style: { "font-family": "roboto", "color": "white", "font-size": "16px", "font-weight": "600" }
                }, [
                  createVNode("i", {
                    style: { "font-size": "1.5rem" },
                    class: data6.item.icon
                  }, null, 2)
                ])) : (openBlock(), createBlock("div", {
                  key: 4,
                  style: { "font-family": "roboto", "color": "white", "font-size": "16px" },
                  class: "pr-2"
                }, [
                  createVNode("i", {
                    style: { "font-size": "1rem" },
                    class: data6.item.icon
                  }, null, 2)
                ])),
                data6.item.is_child == 0 || data6.item.label == "Trang ch\u1EE7" ? (openBlock(), createBlock("div", {
                  key: 5,
                  style: { "font-family": "roboto", "color": "white", "font-size": "16px", "font-weight": "600" }
                }, toDisplayString(data6.item.label), 1)) : (openBlock(), createBlock("div", {
                  key: 6,
                  style: { "font-family": "roboto", "color": "white", "font-size": "16px" }
                }, toDisplayString(data6.item.label), 1))
              ], 10, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full md:w-17rem bg-blue-200" style="${ssrRenderStyle({ "height": "50px" })}" data-v-f66e1f3a>`);
      if (unref(storeUser).logo) {
        _push(`<div class="w-full h-full flex align-items-center px-2" data-v-f66e1f3a><div class="h-full flex align-items-center px-2" style="${ssrRenderStyle({ "width": "40px" })}" data-v-f66e1f3a><img${ssrRenderAttr("src", unref(basedomainURL) + unref(storeUser).logo)} height="40" data-v-f66e1f3a></div><div class="w-full h-full flex align-items-center px-4" style="${ssrRenderStyle({ "font-family": "roboto", "font-size": "18px", "font-weight": "600" })}" data-v-f66e1f3a> GIAYNAM.COM </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/SideBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SideBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f66e1f3a"]]);
var script$8 = {
  name: "EyeIcon",
  "extends": script$4$1
};
var _hoisted_1$6 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$5 = [_hoisted_1$6];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$5, 16);
}
script$8.render = render$7;
var script$7 = {
  name: "EyeSlashIcon",
  "extends": script$4$1,
  computed: {
    pathId: function pathId() {
      return "pv_icon_clip_".concat(UniqueComponentId());
    }
  }
};
var _hoisted_1$5 = ["clipPath"];
var _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3$3 = [_hoisted_2$4];
var _hoisted_4$3 = ["id"];
var _hoisted_5$3 = /* @__PURE__ */ createElementVNode("rect", {
  width: "14",
  height: "14",
  fill: "white"
}, null, -1);
var _hoisted_6$3 = [_hoisted_5$3];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), [createElementVNode("g", {
    clipPath: "url(#".concat($options.pathId, ")")
  }, _hoisted_3$3, 8, _hoisted_1$5), createElementVNode("defs", null, [createElementVNode("clipPath", {
    id: "".concat($options.pathId)
  }, _hoisted_6$3, 8, _hoisted_4$3)])], 16);
}
script$7.render = render$6;
var styles$1 = "\n.p-password {\n    display: inline-flex;\n}\n\n.p-password .p-password-panel {\n    min-width: 100%;\n}\n\n.p-password-meter {\n    height: 10px;\n}\n\n.p-password-strength {\n    height: 100%;\n    width: 0;\n    transition: width 1s ease-in-out;\n}\n\n.p-fluid .p-password {\n    display: flex;\n}\n\n.p-password-input::-ms-reveal,\n.p-password-input::-ms-clear {\n    display: none;\n}\n";
var inlineStyles = {
  root: function root3(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === "self" ? "relative" : void 0
    };
  }
};
var classes$1 = {
  root: function root4(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-password p-component p-inputwrapper", {
      "p-inputwrapper-filled": instance.filled,
      "p-inputwrapper-focus": instance.focused,
      "p-input-icon-right": props.toggleMask
    }];
  },
  input: function input(_ref3) {
    var props = _ref3.props;
    return ["p-password-input", {
      "p-disabled": props.disabled
    }];
  },
  panel: function panel(_ref4) {
    var instance = _ref4.instance;
    return ["p-password-panel p-component", {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }];
  },
  meter: "p-password-meter",
  meterLabel: function meterLabel(_ref5) {
    var instance = _ref5.instance;
    return "p-password-strength ".concat(instance.meter ? instance.meter.strength : "");
  },
  info: "p-password-info"
};
var _useStyle$1 = useStyle(styles$1, {
  name: "password",
  manual: true
}), loadStyle$1 = _useStyle$1.load;
var script$1$1 = {
  name: "BasePassword",
  "extends": script$6$1,
  props: {
    modelValue: String,
    promptLabel: {
      type: String,
      "default": null
    },
    mediumRegex: {
      type: String,
      "default": "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
      // eslint-disable-line
    },
    strongRegex: {
      type: String,
      "default": "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
      // eslint-disable-line
    },
    weakLabel: {
      type: String,
      "default": null
    },
    mediumLabel: {
      type: String,
      "default": null
    },
    strongLabel: {
      type: String,
      "default": null
    },
    feedback: {
      type: Boolean,
      "default": true
    },
    appendTo: {
      type: String,
      "default": "body"
    },
    toggleMask: {
      type: Boolean,
      "default": false
    },
    hideIcon: {
      type: String,
      "default": void 0
    },
    showIcon: {
      type: String,
      "default": void 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": null
    },
    required: {
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
    panelId: {
      type: String,
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
    inlineStyles,
    loadStyle: loadStyle$1
  },
  provide: function provide4() {
    return {
      $parentInstance: this
    };
  }
};
var script$6 = {
  name: "Password",
  "extends": script$1$1,
  emits: ["update:modelValue", "change", "focus", "blur", "invalid"],
  data: function data4() {
    return {
      overlayVisible: false,
      meter: null,
      infoText: null,
      focused: false,
      unmasked: false
    };
  },
  mediumCheckRegExp: null,
  strongCheckRegExp: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  mounted: function mounted4() {
    this.infoText = this.promptText;
    this.mediumCheckRegExp = new RegExp(this.mediumRegex);
    this.strongCheckRegExp = new RegExp(this.strongRegex);
  },
  beforeUnmount: function beforeUnmount2() {
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
    onOverlayEnter: function onOverlayEnter(el) {
      ZIndexUtils.set("overlay", el, this.$primevue.config.zIndex.overlay);
      DomHandler.addStyles(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
      this.bindScrollListener();
      this.bindResizeListener();
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.overlay = null;
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      ZIndexUtils.clear(el);
    },
    alignOverlay: function alignOverlay2() {
      if (this.appendTo === "self") {
        DomHandler.relativePosition(this.overlay, this.$refs.input.$el);
      } else {
        this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$refs.input.$el) + "px";
        DomHandler.absolutePosition(this.overlay, this.$refs.input.$el);
      }
    },
    testStrength: function testStrength(str) {
      var level = 0;
      if (this.strongCheckRegExp.test(str))
        level = 3;
      else if (this.mediumCheckRegExp.test(str))
        level = 2;
      else if (str.length)
        level = 1;
      return level;
    },
    onInput: function onInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    onFocus: function onFocus2(event) {
      this.focused = true;
      if (this.feedback) {
        this.setPasswordMeter(this.modelValue);
        this.overlayVisible = true;
      }
      this.$emit("focus", event);
    },
    onBlur: function onBlur2(event) {
      this.focused = false;
      if (this.feedback) {
        this.overlayVisible = false;
      }
      this.$emit("blur", event);
    },
    onKeyUp: function onKeyUp(event) {
      if (this.feedback) {
        var value = event.target.value;
        var _this$checkPasswordSt = this.checkPasswordStrength(value), meter = _this$checkPasswordSt.meter, label3 = _this$checkPasswordSt.label;
        this.meter = meter;
        this.infoText = label3;
        if (event.code === "Escape") {
          this.overlayVisible && (this.overlayVisible = false);
          return;
        }
        if (!this.overlayVisible) {
          this.overlayVisible = true;
        }
      }
    },
    setPasswordMeter: function setPasswordMeter() {
      if (!this.modelValue)
        return;
      var _this$checkPasswordSt2 = this.checkPasswordStrength(this.modelValue), meter = _this$checkPasswordSt2.meter, label3 = _this$checkPasswordSt2.label;
      this.meter = meter;
      this.infoText = label3;
      if (!this.overlayVisible) {
        this.overlayVisible = true;
      }
    },
    checkPasswordStrength: function checkPasswordStrength(value) {
      var label3 = null;
      var meter = null;
      switch (this.testStrength(value)) {
        case 1:
          label3 = this.weakText;
          meter = {
            strength: "weak",
            width: "33.33%"
          };
          break;
        case 2:
          label3 = this.mediumText;
          meter = {
            strength: "medium",
            width: "66.66%"
          };
          break;
        case 3:
          label3 = this.strongText;
          meter = {
            strength: "strong",
            width: "100%"
          };
          break;
        default:
          label3 = this.promptText;
          meter = null;
          break;
      }
      return {
        label: label3,
        meter
      };
    },
    onInvalid: function onInvalid(event) {
      this.$emit("invalid", event);
    },
    bindScrollListener: function bindScrollListener2() {
      var _this = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.input.$el, function() {
          if (_this.overlayVisible) {
            _this.overlayVisible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener2() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener2() {
      var _this2 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this2.overlayVisible && !DomHandler.isTouchDevice()) {
            _this2.overlayVisible = false;
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
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    onMaskToggle: function onMaskToggle() {
      this.unmasked = !this.unmasked;
    },
    onOverlayClick: function onOverlayClick2(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
    }
  },
  computed: {
    inputType: function inputType() {
      return this.unmasked ? "text" : "password";
    },
    filled: function filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    weakText: function weakText() {
      return this.weakLabel || this.$primevue.config.locale.weak;
    },
    mediumText: function mediumText() {
      return this.mediumLabel || this.$primevue.config.locale.medium;
    },
    strongText: function strongText() {
      return this.strongLabel || this.$primevue.config.locale.strong;
    },
    promptText: function promptText() {
      return this.promptLabel || this.$primevue.config.locale.passwordPrompt;
    },
    panelUniqueId: function panelUniqueId() {
      return UniqueComponentId() + "_panel";
    }
  },
  components: {
    PInputText: script$c,
    Portal: script$1$5,
    EyeSlashIcon: script$7,
    EyeIcon: script$8
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
function _toPrimitive(input2, hint) {
  if (_typeof(input2) !== "object" || input2 === null)
    return input2;
  var prim = input2[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input2, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input2);
}
var _hoisted_1$4 = ["id"];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PInputText = resolveComponent("PInputText");
  var _component_Portal = resolveComponent("Portal");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    style: _ctx.sx("root")
  }, _ctx.ptm("root"), {
    "data-pc-name": "password"
  }), [createVNode(_component_PInputText, mergeProps({
    ref: "input",
    id: _ctx.inputId,
    type: $options.inputType,
    "class": [_ctx.cx("input"), _ctx.inputClass],
    style: _ctx.inputStyle,
    value: _ctx.modelValue,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-controls": _ctx.panelProps && _ctx.panelProps.id || _ctx.panelId || $options.panelUniqueId,
    "aria-expanded": $data.overlayVisible,
    "aria-haspopup": true,
    placeholder: _ctx.placeholder,
    required: _ctx.required,
    onInput: $options.onInput,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeyup: $options.onKeyUp,
    onInvalid: $options.onInvalid
  }, _objectSpread(_objectSpread({}, _ctx.inputProps), _ctx.ptm("input")), {
    unstyled: _ctx.unstyled
  }), null, 16, ["id", "type", "class", "style", "value", "aria-labelledby", "aria-label", "aria-controls", "aria-expanded", "placeholder", "required", "onInput", "onFocus", "onBlur", "onKeyup", "onInvalid", "unstyled"]), _ctx.toggleMask && $data.unmasked ? renderSlot(_ctx.$slots, "hideicon", {
    key: 0,
    onClick: $options.onMaskToggle
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.hideIcon ? "i" : "EyeSlashIcon"), mergeProps({
      "class": _ctx.hideIcon,
      onClick: $options.onMaskToggle
    }, _ctx.ptm("hideIcon")), null, 16, ["class", "onClick"]))];
  }) : createCommentVNode("", true), _ctx.toggleMask && !$data.unmasked ? renderSlot(_ctx.$slots, "showicon", {
    key: 1,
    onClick: $options.onMaskToggle
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.showIcon ? "i" : "EyeIcon"), mergeProps({
      "class": _ctx.showIcon,
      onClick: $options.onMaskToggle
    }, _ctx.ptm("showIcon")), null, 16, ["class", "onClick"]))];
  }) : createCommentVNode("", true), createElementVNode("span", mergeProps({
    "class": "p-hidden-accessible",
    "aria-live": "polite"
  }, _ctx.ptm("hiddenAccesible"), {
    "data-p-hidden-accessible": true
  }), toDisplayString($data.infoText), 17), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, {
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, {
        "default": withCtx(function() {
          return [$data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            id: _ctx.panelId || $options.panelUniqueId,
            "class": [_ctx.cx("panel"), _ctx.panelClass],
            style: _ctx.panelStyle,
            onClick: _cache[0] || (_cache[0] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread({}, _ctx.panelProps), _ctx.ptm("panel"))), [renderSlot(_ctx.$slots, "header"), renderSlot(_ctx.$slots, "content", {}, function() {
            return [createElementVNode("div", mergeProps({
              "class": _ctx.cx("meter")
            }, _ctx.ptm("meter")), [createElementVNode("div", mergeProps({
              "class": _ctx.cx("meterLabel"),
              style: {
                width: $data.meter ? $data.meter.width : ""
              }
            }, _ctx.ptm("meterLabel")), null, 16)], 16), createElementVNode("div", mergeProps({
              "class": _ctx.cx("info")
            }, _ctx.ptm("info")), toDisplayString($data.infoText), 17)];
          }), renderSlot(_ctx.$slots, "footer")], 16, _hoisted_1$4)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 8, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16);
}
script$6.render = render$5;
var script$5 = {
  name: "CheckIcon",
  "extends": script$4$1
};
var _hoisted_1$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$3 = [_hoisted_1$3];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$3, 16);
}
script$5.render = render$4;
var script$4 = {
  name: "ExclamationTriangleIcon",
  "extends": script$4$1,
  computed: {
    pathId: function pathId2() {
      return "pv_icon_clip_".concat(UniqueComponentId());
    }
  }
};
var _hoisted_1$2 = ["clipPath"];
var _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_4$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_5$2 = [_hoisted_2$2, _hoisted_3$2, _hoisted_4$2];
var _hoisted_6$2 = ["id"];
var _hoisted_7 = /* @__PURE__ */ createElementVNode("rect", {
  width: "14",
  height: "14",
  fill: "white"
}, null, -1);
var _hoisted_8 = [_hoisted_7];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), [createElementVNode("g", {
    clipPath: "url(#".concat($options.pathId, ")")
  }, _hoisted_5$2, 8, _hoisted_1$2), createElementVNode("defs", null, [createElementVNode("clipPath", {
    id: "".concat($options.pathId)
  }, _hoisted_8, 8, _hoisted_6$2)])], 16);
}
script$4.render = render$3;
var script$3 = {
  name: "InfoCircleIcon",
  "extends": script$4$1,
  computed: {
    pathId: function pathId3() {
      return "pv_icon_clip_".concat(UniqueComponentId());
    }
  }
};
var _hoisted_1$1 = ["clipPath"];
var _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3$1 = [_hoisted_2$1];
var _hoisted_4$1 = ["id"];
var _hoisted_5$1 = /* @__PURE__ */ createElementVNode("rect", {
  width: "14",
  height: "14",
  fill: "white"
}, null, -1);
var _hoisted_6$1 = [_hoisted_5$1];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), [createElementVNode("g", {
    clipPath: "url(#".concat($options.pathId, ")")
  }, _hoisted_3$1, 8, _hoisted_1$1), createElementVNode("defs", null, [createElementVNode("clipPath", {
    id: "".concat($options.pathId)
  }, _hoisted_6$1, 8, _hoisted_4$1)])], 16);
}
script$3.render = render$2;
var script$2 = {
  name: "TimesCircleIcon",
  "extends": script$4$1,
  computed: {
    pathId: function pathId4() {
      return "pv_icon_clip_".concat(UniqueComponentId());
    }
  }
};
var _hoisted_1 = ["clipPath"];
var _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = ["id"];
var _hoisted_5 = /* @__PURE__ */ createElementVNode("rect", {
  width: "14",
  height: "14",
  fill: "white"
}, null, -1);
var _hoisted_6 = [_hoisted_5];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), [createElementVNode("g", {
    clipPath: "url(#".concat($options.pathId, ")")
  }, _hoisted_3, 8, _hoisted_1), createElementVNode("defs", null, [createElementVNode("clipPath", {
    id: "".concat($options.pathId)
  }, _hoisted_6, 8, _hoisted_4)])], 16);
}
script$2.render = render$1;
var styles = "\n.p-inline-message {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    vertical-align: top;\n}\n\n.p-inline-message-icon-only .p-inline-message-text {\n    visibility: hidden;\n    width: 0;\n}\n\n.p-fluid .p-inline-message {\n    display: flex;\n}\n";
var classes = {
  root: function root5(_ref) {
    var props = _ref.props, instance = _ref.instance;
    return ["p-inline-message p-component p-inline-message-" + props.severity, {
      "p-inline-message-icon-only": !instance.$slots["default"]
    }];
  },
  icon: function icon(_ref2) {
    var props = _ref2.props;
    return ["p-inline-message-icon", props.icon];
  },
  text: "p-inline-message-text"
};
var _useStyle = useStyle(styles, {
  name: "inlinemessage",
  manual: true
}), loadStyle = _useStyle.load;
var script$1 = {
  name: "BaseInlineMessage",
  "extends": script$6$1,
  props: {
    severity: {
      type: String,
      "default": "error"
    },
    icon: {
      type: String,
      "default": void 0
    }
  },
  css: {
    classes,
    loadStyle
  },
  provide: function provide5() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "InlineMessage",
  "extends": script$1,
  timeout: null,
  data: function data5() {
    return {
      visible: true
    };
  },
  mounted: function mounted5() {
    var _this = this;
    if (!this.sticky) {
      setTimeout(function() {
        _this.visible = false;
      }, this.life);
    }
  },
  computed: {
    iconComponent: function iconComponent() {
      return {
        info: script$3,
        success: script$5,
        warn: script$4,
        error: script$2
      }[this.severity];
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "aria-live": "polite",
    "class": _ctx.cx("root")
  }, _ctx.ptm("root")), [renderSlot(_ctx.$slots, "icon", {}, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : $options.iconComponent), mergeProps({
      "class": _ctx.cx("icon")
    }, _ctx.ptm("icon")), null, 16, ["class"]))];
  }), createElementVNode("span", mergeProps({
    "class": _ctx.cx("text")
  }, _ctx.ptm("text")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [createTextVNode("\xA0")];
  })], 16)], 16);
}
script.render = render;
const _sfc_main = {
  __name: "LoginView",
  __ssrInlineRender: true,
  setup(__props) {
    const swal = inject("$swal");
    const basedomainURL = useRuntimeConfig().public.apiBase;
    const SecretKey = useRuntimeConfig().public.SecretKey;
    const user = ref({ user_id: "", is_psword: "" });
    const errors = ref({ user_id: "", is_psword: "" });
    const cryoptojs = inject("cryptojs");
    const checkForm = () => {
      if (!user.value.user_id) {
        errors.value.user_id = "T\xEAn \u0111\u0103ng nh\u1EADp kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!";
      } else {
        errors.value.user_id = "";
      }
      if (!user.value.is_psword) {
        errors.value.is_psword = "M\u1EADt kh\u1EA9u kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!";
      } else if (user.value.is_psword.length < 8) {
        errors.value.is_psword = "M\u1EADt kh\u1EA9u kh\xF4ng \u0111\u01B0\u1EE3c \xEDt h\u01A1n 8 k\xFD t\u1EF1!";
      } else {
        errors.value.is_psword = "";
      }
    };
    const login = async () => {
      checkForm();
      let form = document.getElementsByName("frlogin")[0];
      let check = form.checkValidity();
      if (!check) {
        return false;
      }
      swal.fire({
        width: 110,
        didOpen: () => {
          swal.showLoading();
        }
      });
      await useAsyncData(
        "login",
        () => $fetch("/api/Login/Login", {
          method: "POST",
          baseURL: basedomainURL,
          body: {
            str: encr(JSON.stringify(user.value), SecretKey, cryoptojs).toString()
          }
        })
      ).then((response) => {
        let data6 = response.data.value;
        if (data6.err != "1") {
          const cookiestk = useCookie("tk");
          const cookiesusl = useCookie("usl");
          const cookiesjwt = useCookie("jwt");
          const cookiesu = useCookie("u");
          cookiestk.value = data6;
          cookiesu.value = data6 != null ? encr(
            decr(data6.u, SecretKey, cryoptojs),
            SecretKey,
            cryoptojs
          ).toString() : null;
          if (data6.u) {
            cookiesjwt.value = data6.data;
            cookiesusl.value = data6.u;
            useState(
              "user",
              () => JSON.parse(decr(data6.u, SecretKey, cryoptojs))
            );
            useState("token", () => decr(data6.data, SecretKey, cryoptojs));
            useState("islogin", () => true);
          }
          swal.close();
        } else {
          swal.fire({
            title: "Error!",
            text: data6.ms,
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      }).catch((error) => {
        console.log("l\u1ED7i", error);
        swal.fire({
          title: "Error!",
          text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
          icon: "error",
          confirmButtonText: "OK"
        });
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-container" }, _attrs))} data-v-69d5d96f><div class="login-bg" data-v-69d5d96f></div><div class="login-org" data-v-69d5d96f></div><div class="login-product-container" data-v-69d5d96f><div class="login-product" data-v-69d5d96f><h3 class="product-name animate__animated animate__fadeInDown animate__delay-1s" data-v-69d5d96f>${ssrInterpolate("Qu\u1EA3n l\xFD doanh nghi\u1EC7p GOG")}</h3></div></div><div class="box-login" data-v-69d5d96f><div class="login-form" data-v-69d5d96f><form name="frlogin" data-v-69d5d96f><div class="login-ava" data-v-69d5d96f></div><div class="mb-3 mt-6" data-v-69d5d96f><h1 data-v-69d5d96f>\u0110\u0103ng nh\u1EADp</h1></div><div class="field" data-v-69d5d96f><label for="user_id" data-v-69d5d96f>T\xEAn \u0111\u0103ng nh\u1EADp</label>`);
      _push(ssrRenderComponent(_component_InputText, {
        id: "user_id",
        type: "text",
        modelValue: unref(user).user_id,
        "onUpdate:modelValue": ($event) => unref(user).user_id = $event,
        onInput: checkForm,
        class: unref(errors).user_id != "" ? "invalid" : "",
        autocomplete: "off",
        required: ""
      }, null, _parent));
      if (unref(errors).user_id != "") {
        _push(ssrRenderComponent(unref(script), { severity: "error" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(errors).user_id)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(errors).user_id), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="field" data-v-69d5d96f><label for="is_psword" data-v-69d5d96f>M\u1EADt kh\u1EA9u</label>`);
      _push(ssrRenderComponent(unref(script$6), {
        id: "is_psword",
        modelValue: unref(user).is_psword,
        "onUpdate:modelValue": ($event) => unref(user).is_psword = $event,
        onInput: checkForm,
        class: unref(errors).is_psword != "w-full" ? "w-full invalid" : "",
        autocomplete: "off",
        required: "",
        toggleMask: "",
        feedback: false,
        onKeyup: login
      }, null, _parent));
      if (unref(errors).is_psword != "") {
        _push(ssrRenderComponent(unref(script), { severity: "error" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(errors).is_psword)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(errors).is_psword), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Button, {
        label: "\u0110\u0103ng nh\u1EADp",
        onClick: ($event) => login()
      }, null, _parent));
      _push(`</form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/LoginView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LoginView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-69d5d96f"]]);

export { HeadBar as H, LoginView as L, SideBar as S, script$2 as a, script$5 as b, script$b as c, decr as d, encr as e, script$a as f, script$6 as g, getParent as h, script$3 as i, script$4 as j, script$8 as s, useCookie as u };
//# sourceMappingURL=LoginView-36c4fae0.mjs.map
