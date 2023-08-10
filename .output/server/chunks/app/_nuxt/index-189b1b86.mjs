import { inject, ref, resolveComponent, resolveDirective, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, withDirectives, withModifiers, useSSRContext, createElementBlock, Fragment, renderList, renderSlot, createElementVNode, normalizeClass, resolveDynamicComponent, Transition, createSlots } from 'vue';
import { f as useStyle, _ as _export_sfc, e as useRuntimeConfig, d as useState, a as useRoute, b as useRouter, i as FilterMatchMode, l as useToast, U as UniqueComponentId, O as ObjectUtils, Z as ZIndexUtils, D as DomHandler, C as ConnectedOverlayScrollHandler, k as script$2$1, h as script$3$1, R as Ripple, s as script$6$1 } from '../server.mjs';
import { u as useCookie, d as decr, H as HeadBar, S as SideBar, L as LoginView, a as script$2$2, e as encr } from './LoginView-36c4fae0.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0, a as script$5, s as script$4$1 } from './dialog.esm-d5eb41c3.mjs';
import { s as script$3 } from './toolbar.esm-5b0c3172.mjs';
import { s as script$i, a as script$e, c as script$j } from './paginator.esm-79cc5f95.mjs';
import { s as script$6 } from './treeselect.esm-9543014b.mjs';
import { s as script$2 } from './treetable.esm-e6ef84df.mjs';
import { s as script$4 } from './index.esm-ab832c47.mjs';
import { O as OverlayEventBus, s as script$1$1, a as script$7 } from './index.esm-c4d8e664.mjs';
import { required } from '@vuelidate/validators';
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
import './index.esm-2c744238.mjs';
import 'cookie-es';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import './index.esm-5b5a4d3f.mjs';

var styles = "\n.p-autocomplete {\n    display: inline-flex;\n}\n\n.p-autocomplete-loader {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n\n.p-autocomplete-dd .p-autocomplete-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-autocomplete-dd .p-autocomplete-input,\n.p-autocomplete-dd .p-autocomplete-multiple-container {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-autocomplete-dd .p-autocomplete-dropdown {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0px;\n}\n\n.p-autocomplete .p-autocomplete-panel {\n    min-width: 100%;\n}\n\n.p-autocomplete-panel {\n    position: absolute;\n    overflow: auto;\n    top: 0;\n    left: 0;\n}\n\n.p-autocomplete-items {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\n.p-autocomplete-item {\n    cursor: pointer;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n}\n\n.p-autocomplete-multiple-container {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    cursor: text;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.p-autocomplete-token {\n    cursor: default;\n    display: inline-flex;\n    align-items: center;\n    flex: 0 0 auto;\n}\n\n.p-autocomplete-token-icon {\n    cursor: pointer;\n}\n\n.p-autocomplete-input-token {\n    flex: 1 1 auto;\n    display: inline-flex;\n}\n\n.p-autocomplete-input-token input {\n    border: 0 none;\n    outline: 0 none;\n    background-color: transparent;\n    margin: 0;\n    padding: 0;\n    box-shadow: none;\n    border-radius: 0;\n    width: 100%;\n}\n\n.p-fluid .p-autocomplete {\n    display: flex;\n}\n\n.p-fluid .p-autocomplete-dd .p-autocomplete-input {\n    width: 1%;\n}\n";
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-autocomplete p-component p-inputwrapper", {
      "p-disabled": props.disabled,
      "p-focus": instance.focused,
      "p-autocomplete-dd": props.dropdown,
      "p-autocomplete-multiple": props.multiple,
      "p-inputwrapper-filled": props.modelValue || ObjectUtils.isNotEmpty(instance.inputValue),
      "p-inputwrapper-focus": instance.focused,
      "p-overlay-open": instance.overlayVisible
    }];
  },
  input: function input(_ref2) {
    var props = _ref2.props;
    return ["p-autocomplete-input p-inputtext p-component", {
      "p-autocomplete-dd-input": props.dropdown
    }];
  },
  container: "p-autocomplete-multiple-container p-component p-inputtext",
  token: function token(_ref3) {
    var instance = _ref3.instance, i = _ref3.i;
    return ["p-autocomplete-token", {
      "p-focus": instance.focusedMultipleOptionIndex === i
    }];
  },
  tokenLabel: "p-autocomplete-token-label",
  removeTokenIcon: "p-autocomplete-token-icon",
  inputToken: "p-autocomplete-input-token",
  loadingIcon: "p-autocomplete-loader",
  dropdownButton: "p-autocomplete-dropdown",
  panel: function panel(_ref4) {
    var instance = _ref4.instance;
    return ["p-autocomplete-panel p-component", {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }];
  },
  list: "p-autocomplete-items",
  itemGroup: "p-autocomplete-item-group",
  item: function item(_ref5) {
    var instance = _ref5.instance, option = _ref5.option, i = _ref5.i, getItemOptions = _ref5.getItemOptions;
    return ["p-autocomplete-item", {
      "p-highlight": instance.isSelected(option),
      "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
      "p-disabled": instance.isOptionDisabled(option)
    }];
  },
  emptyMessage: "p-autocomplete-empty-message"
};
var _useStyle = useStyle(styles, {
  name: "autocomplete",
  manual: true
}), loadStyle = _useStyle.load;
var script$1 = {
  name: "BaseAutoComplete",
  "extends": script$6$1,
  props: {
    modelValue: null,
    suggestions: {
      type: Array,
      "default": null
    },
    field: {
      // TODO: Deprecated since v3.16.0
      type: [String, Function],
      "default": null
    },
    optionLabel: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      "default": "200px"
    },
    dropdown: {
      type: Boolean,
      "default": false
    },
    dropdownMode: {
      type: String,
      "default": "blank"
    },
    autoHighlight: {
      // TODO: Deprecated since v3.16.0. Use selectOnFocus property instead.
      type: Boolean,
      "default": false
    },
    multiple: {
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
    dataKey: {
      type: String,
      "default": null
    },
    minLength: {
      type: Number,
      "default": 1
    },
    delay: {
      type: Number,
      "default": 300
    },
    appendTo: {
      type: String,
      "default": "body"
    },
    forceSelection: {
      type: Boolean,
      "default": false
    },
    completeOnFocus: {
      type: Boolean,
      "default": false
    },
    inputId: {
      type: String,
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputProps: {
      type: null,
      "default": null
    },
    panelStyle: {
      type: Object,
      "default": null
    },
    panelClass: {
      type: [String, Object],
      "default": null
    },
    panelProps: {
      type: null,
      "default": null
    },
    dropdownIcon: {
      type: String,
      "default": void 0
    },
    dropdownClass: {
      type: [String, Object],
      "default": null
    },
    loadingIcon: {
      type: String,
      "default": void 0
    },
    removeTokenIcon: {
      type: String,
      "default": void 0
    },
    virtualScrollerOptions: {
      type: Object,
      "default": null
    },
    autoOptionFocus: {
      type: Boolean,
      "default": true
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    },
    searchLocale: {
      type: String,
      "default": void 0
    },
    searchMessage: {
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
    emptySearchMessage: {
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
  provide: function provide() {
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
  name: "AutoComplete",
  "extends": script$1,
  emits: ["update:modelValue", "change", "focus", "blur", "item-select", "item-unselect", "dropdown-click", "clear", "complete", "before-show", "before-hide", "show", "hide"],
  outsideClickListener: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  virtualScroller: null,
  searchTimeout: null,
  focusOnHover: false,
  dirty: false,
  data: function data() {
    return {
      id: this.$attrs.id,
      focused: false,
      focusedOptionIndex: -1,
      focusedMultipleOptionIndex: -1,
      overlayVisible: false,
      searching: false
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    suggestions: function suggestions() {
      if (this.searching) {
        ObjectUtils.isNotEmpty(this.suggestions) ? this.show() : !!this.$slots.empty ? this.show() : this.hide();
        this.focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.searching = false;
      }
      this.autoUpdateModel();
    }
  },
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
  },
  updated: function updated() {
    if (this.overlayVisible) {
      this.alignOverlay();
    }
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
    getOptionIndex: function getOptionIndex(index2, fn) {
      return this.virtualScrollerDisabled ? index2 : fn && fn(index2)["index"];
    },
    getOptionLabel: function getOptionLabel(option) {
      return this.field || this.optionLabel ? ObjectUtils.resolveFieldData(option, this.field || this.optionLabel) : option;
    },
    getOptionValue: function getOptionValue(option) {
      return option;
    },
    getOptionRenderKey: function getOptionRenderKey(option, index2) {
      return (this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option)) + "_" + index2;
    },
    getPTOptions: function getPTOptions(option, itemOptions, index2, key) {
      return this.ptm(key, {
        context: {
          selected: this.isSelected(option),
          focused: this.focusedOptionIndex === this.getOptionIndex(index2, itemOptions),
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
    getAriaPosInset: function getAriaPosInset(index2) {
      var _this = this;
      return (this.optionGroupLabel ? index2 - this.visibleOptions.slice(0, index2).filter(function(option) {
        return _this.isOptionGroup(option);
      }).length : index2) + 1;
    },
    show: function show(isFocus) {
      this.$emit("before-show");
      this.dirty = true;
      this.overlayVisible = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      isFocus && DomHandler.focus(this.$refs.focusInput);
    },
    hide: function hide(isFocus) {
      var _this2 = this;
      var _hide = function _hide2() {
        _this2.$emit("before-hide");
        _this2.dirty = isFocus;
        _this2.overlayVisible = false;
        _this2.focusedOptionIndex = -1;
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
      if (!this.dirty && this.completeOnFocus) {
        this.search(event, event.target.value, "focus");
      }
      this.dirty = true;
      this.focused = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.overlayVisible && this.scrollInView(this.focusedOptionIndex);
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.dirty = false;
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.$emit("blur", event);
    },
    onKeyDown: function onKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
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
        case "PageDown":
          this.onPageDownKey(event);
          break;
        case "PageUp":
          this.onPageUpKey(event);
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
          this.onBackspaceKey(event);
          break;
      }
    },
    onInput: function onInput(event) {
      var _this3 = this;
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      var query = event.target.value;
      if (!this.multiple) {
        this.updateModel(event, query);
      }
      if (query.length === 0) {
        this.hide();
        this.$emit("clear");
      } else {
        if (query.length >= this.minLength) {
          this.focusedOptionIndex = -1;
          this.searchTimeout = setTimeout(function() {
            _this3.search(event, query, "input");
          }, this.delay);
        } else {
          this.hide();
        }
      }
    },
    onChange: function onChange(event) {
      var _this4 = this;
      if (this.forceSelection) {
        var valid = false;
        if (this.visibleOptions) {
          var matchedValue = this.visibleOptions.find(function(option) {
            return _this4.isOptionMatched(option, _this4.$refs.focusInput.value || "");
          });
          if (matchedValue !== void 0) {
            valid = true;
            !this.isSelected(matchedValue) && this.onOptionSelect(event, matchedValue);
          }
        }
        if (!valid) {
          this.$refs.focusInput.value = "";
          this.$emit("clear");
          !this.multiple && this.updateModel(event, null);
        }
      }
    },
    onMultipleContainerFocus: function onMultipleContainerFocus() {
      if (this.disabled) {
        return;
      }
      this.focused = true;
    },
    onMultipleContainerBlur: function onMultipleContainerBlur() {
      this.focusedMultipleOptionIndex = -1;
      this.focused = false;
    },
    onMultipleContainerKeyDown: function onMultipleContainerKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case "ArrowLeft":
          this.onArrowLeftKeyOnMultiple(event);
          break;
        case "ArrowRight":
          this.onArrowRightKeyOnMultiple(event);
          break;
        case "Backspace":
          this.onBackspaceKeyOnMultiple(event);
          break;
      }
    },
    onContainerClick: function onContainerClick(event) {
      if (this.disabled || this.searching || this.isInputClicked(event) || this.isDropdownClicked(event)) {
        return;
      }
      if (!this.overlay || !this.overlay.contains(event.target)) {
        DomHandler.focus(this.$refs.focusInput);
      }
    },
    onDropdownClick: function onDropdownClick(event) {
      var query = void 0;
      if (this.overlayVisible) {
        this.hide(true);
      } else {
        DomHandler.focus(this.$refs.focusInput);
        query = this.$refs.focusInput.value;
        if (this.dropdownMode === "blank")
          this.search(event, "", "dropdown");
        else if (this.dropdownMode === "current")
          this.search(event, query, "dropdown");
      }
      this.$emit("dropdown-click", {
        originalEvent: event,
        query
      });
    },
    onOptionSelect: function onOptionSelect(event, option) {
      var isHide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var value = this.getOptionValue(option);
      if (this.multiple) {
        this.$refs.focusInput.value = "";
        if (!this.isSelected(option)) {
          this.updateModel(event, [].concat(_toConsumableArray(this.modelValue || []), [value]));
        }
      } else {
        this.updateModel(event, value);
      }
      this.$emit("item-select", {
        originalEvent: event,
        value: option
      });
      isHide && this.hide(true);
    },
    onOptionMouseMove: function onOptionMouseMove(event, index2) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index2);
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
      if (!this.overlayVisible) {
        return;
      }
      var optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      if (!this.overlayVisible) {
        return;
      }
      if (event.altKey) {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        event.preventDefault();
      }
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var target = event.currentTarget;
      this.focusedOptionIndex = -1;
      if (this.multiple) {
        if (ObjectUtils.isEmpty(target.value) && this.hasSelectedOption) {
          DomHandler.focus(this.$refs.multiContainer);
          this.focusedMultipleOptionIndex = this.modelValue.length;
        } else {
          event.stopPropagation();
        }
      }
    },
    onArrowRightKey: function onArrowRightKey(event) {
      this.focusedOptionIndex = -1;
      this.multiple && event.stopPropagation();
    },
    onHomeKey: function onHomeKey(event) {
      var currentTarget = event.currentTarget;
      var len = currentTarget.value.length;
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      this.focusedOptionIndex = -1;
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      var currentTarget = event.currentTarget;
      var len = currentTarget.value.length;
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      this.focusedOptionIndex = -1;
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
    onEscapeKey: function onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    },
    onTabKey: function onTabKey(event) {
      if (this.focusedOptionIndex !== -1) {
        this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
      }
      this.overlayVisible && this.hide();
    },
    onBackspaceKey: function onBackspaceKey(event) {
      if (this.multiple) {
        if (ObjectUtils.isNotEmpty(this.modelValue) && !this.$refs.focusInput.value) {
          var removedValue = this.modelValue[this.modelValue.length - 1];
          var newValue = this.modelValue.slice(0, -1);
          this.$emit("update:modelValue", newValue);
          this.$emit("item-unselect", {
            originalEvent: event,
            value: removedValue
          });
        }
        event.stopPropagation();
      }
    },
    onArrowLeftKeyOnMultiple: function onArrowLeftKeyOnMultiple() {
      this.focusedMultipleOptionIndex = this.focusedMultipleOptionIndex < 1 ? 0 : this.focusedMultipleOptionIndex - 1;
    },
    onArrowRightKeyOnMultiple: function onArrowRightKeyOnMultiple() {
      this.focusedMultipleOptionIndex++;
      if (this.focusedMultipleOptionIndex > this.modelValue.length - 1) {
        this.focusedMultipleOptionIndex = -1;
        DomHandler.focus(this.$refs.focusInput);
      }
    },
    onBackspaceKeyOnMultiple: function onBackspaceKeyOnMultiple(event) {
      if (this.focusedMultipleOptionIndex !== -1) {
        this.removeOption(event, this.focusedMultipleOptionIndex);
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
      var target = this.multiple ? this.$refs.multiContainer : this.$refs.focusInput;
      if (this.appendTo === "self") {
        DomHandler.relativePosition(this.overlay, target);
      } else {
        this.overlay.style.minWidth = DomHandler.getOuterWidth(target) + "px";
        DomHandler.absolutePosition(this.overlay, target);
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this5 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this5.overlayVisible && _this5.overlay && _this5.isOutsideClicked(event)) {
            _this5.hide();
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
      var _this6 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function() {
          if (_this6.overlayVisible) {
            _this6.hide();
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
      var _this7 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this7.overlayVisible && !DomHandler.isTouchDevice()) {
            _this7.hide();
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
      return !this.overlay.contains(event.target) && !this.isInputClicked(event) && !this.isDropdownClicked(event);
    },
    isInputClicked: function isInputClicked(event) {
      if (this.multiple)
        return event.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(event.target);
      else
        return event.target === this.$refs.focusInput;
    },
    isDropdownClicked: function isDropdownClicked(event) {
      return this.$refs.dropdownButton ? event.target === this.$refs.dropdownButton || this.$refs.dropdownButton.$el.contains(event.target) : false;
    },
    isOptionMatched: function isOptionMatched(option, value) {
      return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.searchLocale) === value.toLocaleLowerCase(this.searchLocale);
    },
    isValidOption: function isValidOption(option) {
      return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    },
    isValidSelectedOption: function isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option);
    },
    isSelected: function isSelected(option) {
      return ObjectUtils.equals(this.modelValue, this.getOptionValue(option), this.equalityKey);
    },
    findFirstOptionIndex: function findFirstOptionIndex() {
      var _this8 = this;
      return this.visibleOptions.findIndex(function(option) {
        return _this8.isValidOption(option);
      });
    },
    findLastOptionIndex: function findLastOptionIndex() {
      var _this9 = this;
      return ObjectUtils.findLastIndex(this.visibleOptions, function(option) {
        return _this9.isValidOption(option);
      });
    },
    findNextOptionIndex: function findNextOptionIndex(index2) {
      var _this10 = this;
      var matchedOptionIndex = index2 < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index2 + 1).findIndex(function(option) {
        return _this10.isValidOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index2 + 1 : index2;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index2) {
      var _this11 = this;
      var matchedOptionIndex = index2 > 0 ? ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index2), function(option) {
        return _this11.isValidOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index2;
    },
    findSelectedOptionIndex: function findSelectedOptionIndex() {
      var _this12 = this;
      return this.hasSelectedOption ? this.visibleOptions.findIndex(function(option) {
        return _this12.isValidSelectedOption(option);
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
    search: function search(event, query, source) {
      if (query === void 0 || query === null) {
        return;
      }
      if (source === "input" && query.trim().length === 0) {
        return;
      }
      this.searching = true;
      this.$emit("complete", {
        originalEvent: event,
        query
      });
    },
    removeOption: function removeOption(event, index2) {
      var _this13 = this;
      var removedOption = this.modelValue[index2];
      var value = this.modelValue.filter(function(_, i) {
        return i !== index2;
      }).map(function(option) {
        return _this13.getOptionValue(option);
      });
      this.updateModel(event, value);
      this.$emit("item-unselect", {
        originalEvent: event,
        value: removedOption
      });
      this.dirty = true;
      DomHandler.focus(this.$refs.focusInput);
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(event, index2) {
      if (this.focusedOptionIndex !== index2) {
        this.focusedOptionIndex = index2;
        this.scrollInView();
        if (this.selectOnFocus || this.autoHighlight) {
          this.onOptionSelect(event, this.visibleOptions[index2], false);
        }
      }
    },
    scrollInView: function scrollInView() {
      var _this14 = this;
      var index2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      var id = index2 !== -1 ? "".concat(this.id, "_").concat(index2) : this.focusedOptionId;
      var element = DomHandler.findSingle(this.list, 'li[id="'.concat(id, '"]'));
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "start"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(function() {
          _this14.virtualScroller && _this14.virtualScroller.scrollToIndex(index2 !== -1 ? index2 : _this14.focusedOptionIndex);
        }, 0);
      }
    },
    autoUpdateModel: function autoUpdateModel() {
      if ((this.selectOnFocus || this.autoHighlight) && this.autoOptionFocus && !this.hasSelectedOption) {
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
    flatOptions: function flatOptions(options) {
      var _this15 = this;
      return (options || []).reduce(function(result, option, index2) {
        result.push({
          optionGroup: option,
          group: true,
          index: index2
        });
        var optionGroupChildren = _this15.getOptionGroupChildren(option);
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
      return this.optionGroupLabel ? this.flatOptions(this.suggestions) : this.suggestions || [];
    },
    inputValue: function inputValue() {
      if (this.modelValue) {
        if (_typeof$1(this.modelValue) === "object") {
          var label = this.getOptionLabel(this.modelValue);
          return label != null ? label : this.modelValue;
        } else {
          return this.modelValue;
        }
      } else {
        return "";
      }
    },
    hasSelectedOption: function hasSelectedOption() {
      return ObjectUtils.isNotEmpty(this.modelValue);
    },
    equalityKey: function equalityKey() {
      return this.dataKey;
    },
    searchResultMessageText: function searchResultMessageText() {
      return ObjectUtils.isNotEmpty(this.visibleOptions) && this.overlayVisible ? this.searchMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptySearchMessageText;
    },
    searchMessageText: function searchMessageText() {
      return this.searchMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptySearchMessageText: function emptySearchMessageText() {
      return this.emptySearchMessage || this.$primevue.config.locale.emptySearchMessage || "";
    },
    selectionMessageText: function selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function selectedMessageText() {
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.modelValue.length : "1") : this.emptySelectionMessageText;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.id, "_").concat(this.focusedOptionIndex) : null;
    },
    focusedMultipleOptionId: function focusedMultipleOptionId() {
      return this.focusedMultipleOptionIndex !== -1 ? "".concat(this.id, "_multiple_option_").concat(this.focusedMultipleOptionIndex) : null;
    },
    ariaSetSize: function ariaSetSize() {
      var _this16 = this;
      return this.visibleOptions.filter(function(option) {
        return !_this16.isOptionGroup(option);
      }).length;
    },
    virtualScrollerDisabled: function virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    }
  },
  components: {
    Button: script$2$1,
    VirtualScroller: script$j,
    Portal: script$1$1,
    ChevronDownIcon: script$7,
    SpinnerIcon: script$3$1,
    TimesCircleIcon: script$2$2
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
var _hoisted_1 = ["id", "value", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant"];
var _hoisted_2 = ["aria-activedescendant"];
var _hoisted_3 = ["id", "aria-label", "aria-setsize", "aria-posinset"];
var _hoisted_4 = ["id", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant"];
var _hoisted_5 = ["id"];
var _hoisted_6 = ["id"];
var _hoisted_7 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-highlight", "data-p-focus", "data-p-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_Button = resolveComponent("Button");
  var _component_VirtualScroller = resolveComponent("VirtualScroller");
  var _component_Portal = resolveComponent("Portal");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root"),
    style: _ctx.sx("root"),
    onClick: _cache[15] || (_cache[15] = function() {
      return $options.onContainerClick && $options.onContainerClick.apply($options, arguments);
    })
  }, _ctx.ptm("root"), {
    "data-pc-name": "autocomplete"
  }), [!_ctx.multiple ? (openBlock(), createElementBlock("input", mergeProps({
    key: 0,
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    "class": [_ctx.cx("input"), _ctx.inputClass],
    style: _ctx.inputStyle,
    value: $options.inputValue,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    disabled: _ctx.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
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
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    onChange: _cache[4] || (_cache[4] = function() {
      return $options.onChange && $options.onChange.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.inputProps), _ctx.ptm("input"))), null, 16, _hoisted_1)) : createCommentVNode("", true), _ctx.multiple ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 1,
    ref: "multiContainer",
    "class": _ctx.cx("container"),
    tabindex: "-1",
    role: "listbox",
    "aria-orientation": "horizontal",
    "aria-activedescendant": $data.focused ? $options.focusedMultipleOptionId : void 0,
    onFocus: _cache[10] || (_cache[10] = function() {
      return $options.onMultipleContainerFocus && $options.onMultipleContainerFocus.apply($options, arguments);
    }),
    onBlur: _cache[11] || (_cache[11] = function() {
      return $options.onMultipleContainerBlur && $options.onMultipleContainerBlur.apply($options, arguments);
    }),
    onKeydown: _cache[12] || (_cache[12] = function() {
      return $options.onMultipleContainerKeyDown && $options.onMultipleContainerKeyDown.apply($options, arguments);
    })
  }, _ctx.ptm("container")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.modelValue, function(option, i) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: i,
      id: $data.id + "_multiple_option_" + i,
      "class": _ctx.cx("token", {
        i
      }),
      role: "option",
      "aria-label": $options.getOptionLabel(option),
      "aria-selected": true,
      "aria-setsize": _ctx.modelValue.length,
      "aria-posinset": i + 1
    }, _ctx.ptm("token")), [renderSlot(_ctx.$slots, "chip", {
      value: option
    }, function() {
      return [createElementVNode("span", mergeProps({
        "class": _ctx.cx("tokenLabel")
      }, _ctx.ptm("tokenLabel")), toDisplayString($options.getOptionLabel(option)), 17)];
    }), renderSlot(_ctx.$slots, "removetokenicon", {
      "class": normalizeClass(_ctx.cx(_ctx.removeTokenIcon)),
      onClick: function onClick(event) {
        return $options.removeOption(event, i);
      }
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.removeTokenIcon ? "span" : "TimesCircleIcon"), mergeProps({
        "class": [_ctx.cx(_ctx.removeTokenIcon), _ctx.removeTokenIcon],
        onClick: function onClick($event) {
          return $options.removeOption($event, i);
        },
        "aria-hidden": "true"
      }, _ctx.ptm("removeTokenIcon")), null, 16, ["class", "onClick"]))];
    })], 16, _hoisted_3);
  }), 128)), createElementVNode("li", mergeProps({
    "class": _ctx.cx("inputToken"),
    role: "option"
  }, _ctx.ptm("inputToken")), [createElementVNode("input", mergeProps({
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    style: _ctx.inputStyle,
    "class": _ctx.inputClass,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    disabled: _ctx.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $data.id + "_list",
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    onFocus: _cache[5] || (_cache[5] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[6] || (_cache[6] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[7] || (_cache[7] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    }),
    onInput: _cache[8] || (_cache[8] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    onChange: _cache[9] || (_cache[9] = function() {
      return $options.onChange && $options.onChange.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.inputProps), _ctx.ptm("input"))), null, 16, _hoisted_4)], 16)], 16, _hoisted_2)) : createCommentVNode("", true), $data.searching ? renderSlot(_ctx.$slots, "loadingicon", {
    key: 2,
    "class": normalizeClass(_ctx.cx("loadingIcon"))
  }, function() {
    return [_ctx.loadingIcon ? (openBlock(), createElementBlock("i", mergeProps({
      key: 0,
      "class": ["pi-spin", _ctx.cx("loadingIcon"), _ctx.loadingIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("loadingIcon")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      "class": [_ctx.cx("loadingIcon"), _ctx.loadingIcon],
      spin: "",
      "aria-hidden": "true"
    }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))];
  }) : createCommentVNode("", true), _ctx.dropdown ? (openBlock(), createBlock(_component_Button, {
    key: 3,
    ref: "dropdownButton",
    type: "button",
    tabindex: "-1",
    "class": normalizeClass([_ctx.cx("dropdownButton"), _ctx.dropdownClass]),
    disabled: _ctx.disabled,
    "aria-hidden": "true",
    onClick: $options.onDropdownClick,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("dropdownButton"),
    "data-pc-section": "dropdownbutton"
  }, {
    icon: withCtx(function() {
      return [renderSlot(_ctx.$slots, "dropdownicon", {
        "class": normalizeClass(_ctx.dropdownIcon)
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.dropdownIcon ? "span" : "ChevronDownIcon"), mergeProps({
          "class": _ctx.dropdownIcon
        }, _ctx.ptm("dropdownButton")["icon"]), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 8, ["class", "disabled", "onClick", "unstyled", "pt"])) : createCommentVNode("", true), createElementVNode("span", mergeProps({
    role: "status",
    "aria-live": "polite",
    "class": "p-hidden-accessible"
  }, _ctx.ptm("hiddenSearchResult"), {
    "data-p-hidden-accessible": true
  }), toDisplayString($options.searchResultMessageText), 17), createVNode(_component_Portal, {
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
            style: _objectSpread(_objectSpread({}, _ctx.panelStyle), {}, {
              "max-height": $options.virtualScrollerDisabled ? _ctx.scrollHeight : ""
            }),
            onClick: _cache[13] || (_cache[13] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[14] || (_cache[14] = function() {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread({}, _ctx.panelProps), _ctx.ptm("panel"))), [renderSlot(_ctx.$slots, "header", {
            value: _ctx.modelValue,
            suggestions: $options.visibleOptions
          }), createVNode(_component_VirtualScroller, mergeProps({
            ref: $options.virtualScrollerRef
          }, _ctx.virtualScrollerOptions, {
            style: {
              height: _ctx.scrollHeight
            },
            items: $options.visibleOptions,
            tabindex: -1,
            disabled: $options.virtualScrollerDisabled,
            pt: _ctx.ptm("virtualScroller")
          }), createSlots({
            content: withCtx(function(_ref) {
              var styleClass = _ref.styleClass, contentRef = _ref.contentRef, items = _ref.items, getItemOptions = _ref.getItemOptions, contentStyle = _ref.contentStyle, itemSize = _ref.itemSize;
              return [createElementVNode("ul", mergeProps({
                ref: function ref2(el) {
                  return $options.listRef(el, contentRef);
                },
                id: $data.id + "_list",
                "class": [_ctx.cx("list"), styleClass],
                style: contentStyle,
                role: "listbox"
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
                  item: option.optionGroup,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createTextVNode(toDisplayString($options.getOptionGroupLabel(option.optionGroup)), 1)];
                })], 16, _hoisted_6)) : withDirectives((openBlock(), createElementBlock("li", mergeProps({
                  key: 1,
                  id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize ? itemSize + "px" : void 0
                  },
                  "class": _ctx.cx("item", {
                    option,
                    i,
                    getItemOptions
                  }),
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
                  "data-p-focus": $data.focusedOptionIndex === $options.getOptionIndex(i, getItemOptions),
                  "data-p-disabled": $options.isOptionDisabled(option)
                }, $options.getPTOptions(option, getItemOptions, i, "item")), [_ctx.$slots.option ? renderSlot(_ctx.$slots, "option", {
                  key: 0,
                  option,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createTextVNode(toDisplayString($options.getOptionLabel(option)), 1)];
                }) : renderSlot(_ctx.$slots, "item", {
                  key: 1,
                  item: option,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createTextVNode(toDisplayString($options.getOptionLabel(option)), 1)];
                })], 16, _hoisted_7)), [[_directive_ripple]])], 64);
              }), 128)), !items || items && items.length === 0 ? (openBlock(), createElementBlock("li", mergeProps({
                key: 0,
                "class": _ctx.cx("emptyMessage"),
                role: "option"
              }, _ctx.ptm("emptyMessage")), [renderSlot(_ctx.$slots, "empty", {}, function() {
                return [createTextVNode(toDisplayString($options.searchResultMessageText), 1)];
              })], 16)) : createCommentVNode("", true)], 16, _hoisted_5)];
            }),
            _: 2
          }, [_ctx.$slots.loader ? {
            name: "loader",
            fn: withCtx(function(_ref2) {
              var options = _ref2.options;
              return [renderSlot(_ctx.$slots, "loader", {
                options
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["style", "items", "disabled", "pt"]), renderSlot(_ctx.$slots, "footer", {
            value: _ctx.modelValue,
            suggestions: $options.visibleOptions
          }), createElementVNode("span", mergeProps({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.selectedMessageText), 17)], 16)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 8, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16);
}
script.render = render;
const arrIcons = [
  "pi pi-sort-alt-slash",
  "pi pi-arrows-h",
  "pi pi-arrows-v",
  "pi pi-pound",
  "pi pi-prime",
  "pi pi-chart-pie",
  "pi pi-reddit",
  "pi pi-code",
  "pi pi-sync",
  "pi pi-shopping-bag",
  "pi pi-server",
  "pi pi-database",
  "pi pi-hashtag",
  "pi pi-bookmark-fill",
  "pi pi-filter-fill",
  "pi pi-heart-fill",
  "pi pi-flag-fill",
  "pi pi-circle",
  "pi pi-circle-fill",
  "pi pi-bolt",
  "pi pi-history",
  "pi pi-box",
  "pi pi-at",
  "pi pi-arrow-up-right",
  "pi pi-arrow-up-left",
  "pi pi-arrow-down-left",
  "pi pi-arrow-down-right",
  "pi pi-telegram",
  "pi pi-stop-circle",
  "pi pi-stop",
  "pi pi-whatsapp",
  "pi pi-building",
  "pi pi-qrcode",
  "pi pi-car",
  "pi pi-instagram",
  "pi pi-linkedin",
  "pi pi-send",
  "pi pi-slack",
  "pi pi-moon",
  "pi pi-sun",
  "pi pi-youtube",
  "pi pi-vimeo",
  "pi pi-flag",
  "pi pi-wallet",
  "pi pi-map",
  "pi pi-link",
  "pi pi-credit-card",
  "pi pi-discord",
  "pi pi-percentage",
  "pi pi-euro",
  "pi pi-book",
  "pi pi-shield",
  "pi pi-paypal",
  "pi pi-amazon",
  "pi pi-phone",
  "pi pi-filter-slash",
  "pi pi-facebook",
  "pi pi-github",
  "pi pi-twitter",
  "pi pi-step-backward-alt",
  "pi pi-step-forward-alt",
  "pi pi-forward",
  "pi pi-backward",
  "pi pi-fast-backward",
  "pi pi-fast-forward",
  "pi pi-pause",
  "pi pi-play",
  "pi pi-compass",
  "pi pi-id-card",
  "pi pi-ticket",
  "pi pi-file-o",
  "pi pi-reply",
  "pi pi-directions-alt",
  "pi pi-directions",
  "pi pi-thumbs-up",
  "pi pi-thumbs-down",
  "pi pi-sort-numeric-down-alt",
  "pi pi-sort-numeric-up-alt",
  "pi pi-sort-alpha-down-alt",
  "pi pi-sort-alpha-up-alt",
  "pi pi-sort-numeric-down",
  "pi pi-sort-numeric-up",
  "pi pi-sort-alpha-down",
  "pi pi-sort-alpha-up",
  "pi pi-sort-alt",
  "pi pi-sort-amount-up",
  "pi pi-sort-amount-down",
  "pi pi-sort-amount-down-alt",
  "pi pi-sort-amount-up-alt",
  "pi pi-palette",
  "pi pi-undo",
  "pi pi-desktop",
  "pi pi-sliders-v",
  "pi pi-sliders-h",
  "pi pi-search-plus",
  "pi pi-search-minus",
  "pi pi-file-excel",
  "pi pi-file-pdf",
  "pi pi-check-square",
  "pi pi-chart-line",
  "pi pi-user-edit",
  "pi pi-exclamation-circle",
  "pi pi-android",
  "pi pi-google",
  "pi pi-apple",
  "pi pi-microsoft",
  "pi pi-heart",
  "pi pi-mobile",
  "pi pi-tablet",
  "pi pi-key",
  "pi pi-shopping-cart",
  "pi pi-comments",
  "pi pi-comment",
  "pi pi-briefcase",
  "pi pi-bell",
  "pi pi-paperclip",
  "pi pi-share-alt",
  "pi pi-envelope",
  "pi pi-volume-down",
  "pi pi-volume-up",
  "pi pi-volume-off",
  "pi pi-eject",
  "pi pi-money-bill",
  "pi pi-images",
  "pi pi-image",
  "pi pi-sign-in",
  "pi pi-sign-out",
  "pi pi-wifi",
  "pi pi-sitemap",
  "pi pi-chart-bar",
  "pi pi-camera",
  "pi pi-dollar",
  "pi pi-lock-open",
  "pi pi-table",
  "pi pi-map-marker",
  "pi pi-list",
  "pi pi-eye-slash",
  "pi pi-eye",
  "pi pi-folder-open",
  "pi pi-folder",
  "pi pi-video",
  "pi pi-inbox",
  "pi pi-lock",
  "pi pi-unlock",
  "pi pi-tags",
  "pi pi-tag",
  "pi pi-power-off",
  "pi pi-save",
  "pi pi-question-circle",
  "pi pi-question",
  "pi pi-copy",
  "pi pi-file",
  "pi pi-clone",
  "pi pi-calendar-times",
  "pi pi-calendar-minus",
  "pi pi-calendar-plus",
  "pi pi-ellipsis-v",
  "pi pi-ellipsis-h",
  "pi pi-bookmark",
  "pi pi-globe",
  "pi pi-replay",
  "pi pi-filter",
  "pi pi-print",
  "pi pi-align-right",
  "pi pi-align-left",
  "pi pi-align-center",
  "pi pi-align-justify",
  "pi pi-cog",
  "pi pi-cloud-download",
  "pi pi-cloud-upload",
  "pi pi-cloud",
  "pi pi-pencil",
  "pi pi-users",
  "pi pi-clock",
  "pi pi-user-minus",
  "pi pi-user-plus",
  "pi pi-trash",
  "pi pi-window-minimize",
  "pi pi-window-maximize",
  "pi pi-external-link",
  "pi pi-refresh",
  "pi pi-user",
  "pi pi-exclamation-triangle",
  "pi pi-calendar",
  "pi pi-chevron-circle-left",
  "pi pi-chevron-circle-down",
  "pi pi-chevron-circle-right",
  "pi pi-chevron-circle-up",
  "pi pi-angle-double-down",
  "pi pi-angle-double-left",
  "pi pi-angle-double-right",
  "pi pi-angle-double-up",
  "pi pi-angle-down",
  "pi pi-angle-left",
  "pi pi-angle-right",
  "pi pi-angle-up",
  "pi pi-upload",
  "pi pi-download",
  "pi pi-ban",
  "pi pi-star-fill",
  "pi pi-star",
  "pi pi-chevron-left",
  "pi pi-chevron-right",
  "pi pi-chevron-down",
  "pi pi-chevron-up",
  "pi pi-caret-left",
  "pi pi-caret-right",
  "pi pi-caret-down",
  "pi pi-caret-up",
  "pi pi-search",
  "pi pi-check",
  "pi pi-check-circle",
  "pi pi-times",
  "pi pi-times-circle",
  "pi pi-plus",
  "pi pi-plus-circle",
  "pi pi-minus",
  "pi pi-minus-circle",
  "pi pi-circle-on",
  "pi pi-circle-off",
  "pi pi-sort-down",
  "pi pi-sort-up",
  "pi pi-sort",
  "pi pi-step-backward",
  "pi pi-step-forward",
  "pi pi-th-large",
  "pi pi-arrow-down",
  "pi pi-arrow-left",
  "pi pi-arrow-right",
  "pi pi-arrow-up",
  "pi pi-bars",
  "pi pi-arrow-circle-down",
  "pi pi-arrow-circle-left",
  "pi pi-arrow-circle-right",
  "pi pi-arrow-circle-up",
  "pi pi-info",
  "pi pi-info-circle",
  "pi pi-home",
  "pi pi-spinner"
];
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
    const arrroutes = ref([]);
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
    const tdVitris = [
      { value: "Menuleft", text: "Menu tr\xE1i" },
      { value: "Menutop", text: "Menu tr\xEAn" }
    ];
    const module = ref({
      module_name: "",
      is_order: 1,
      status: true,
      is_admin: true,
      is_target: "_self"
    });
    const submitted = ref(false);
    const rules = {
      module_name: {
        required
      }
    };
    const v$ = useVuelidate(rules, module);
    const selectCapcha = ref();
    const selectedKey = ref();
    const selectedNodes = ref([]);
    const selectCapchaOrganization = ref();
    ref();
    const opition = ref({ search: "" });
    const modules = ref();
    const treemodules = ref();
    const displayAddModule = ref(false);
    const isFirst = ref(true);
    let files = [];
    const toast = useToast();
    const swal = inject("$swal");
    const basedomainURL = useRuntimeConfig().public.apiBase;
    ({
      headers: { Authorization: `Bearer ${storeToken.value}` }
    });
    const tdTargets = ref([
      { value: 0, text: "Module H\u1EC7 th\u1ED1ng" },
      { value: 1, text: "Module Ng\u01B0\u1EDDi d\xF9ng" }
    ]);
    ref([
      { value: "480px", text: "Nh\u1ECF (480px)" },
      { value: "720px", text: "Trung b\xECnh (720px)" },
      { value: "1024px", text: "L\u1EDBn (1024px)" },
      { value: "100%", text: "Full (100%)" }
    ]);
    ref();
    ref([
      {
        label: "Xu\u1EA5t Excel",
        icon: "pi pi-file-excel",
        command: (event) => {
          exportModule("ExportExcel");
        }
      },
      {
        label: "Xu\u1EA5t M\u1EABu",
        icon: "pi pi-file-excel",
        command: (event) => {
          exportModule("ExportExcelMau");
        }
      }
    ]);
    const swalLoadding = () => {
      swal.fire({
        width: 110,
        didOpen: () => {
          swal.showLoading();
        }
      });
    };
    const errorMessage = () => {
      swal.fire({
        text: "M\xE3 token \u0111\xE3 h\u1EBFt h\u1EA1n ho\u1EB7c kh\xF4ng h\u1EE3p l\u1EC7, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
        confirmButtonText: "OK"
      });
    };
    const swalMessage = (title, icon, ms) => {
      swal.fire({
        title,
        text: ms,
        icon,
        confirmButtonText: "OK"
      });
    };
    const onNodeSelect = (node) => {
      selectedNodes.value.push(node.data.module_id);
    };
    const onNodeUnselect = (node) => {
      selectedNodes.value.splice(
        selectedNodes.value.indexOf(node.data.module_id),
        1
      );
    };
    const onChangeParent = (item2) => {
      parseInt(Object.keys(item2)[0]);
      $fetch("/api/Proc/getData", {
        method: "POST",
        baseURL: basedomainURL,
        body: {
          str: encr(JSON.stringify({}), SecretKey, cryoptojs).toString()
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let data2 = JSON.parse(response.data);
        if (data2.length > 0) {
          module.value.is_order = data2[0][0].c + 1;
        }
      });
    };
    const showModalAddModule = () => {
      submitted.value = false;
      selectCapcha.value = {};
      module.value = {
        module_name: "",
        is_order: modules.value.length + 1,
        status: true,
        is_admin: true,
        is_target: "_self",
        is_stand: [{ value: "Menuleft", text: "Menu tr\xE1i" }],
        is_size: "720px",
        type_modules: 0
      };
      displayAddModule.value = true;
    };
    const closedisplayAddModule = () => {
      displayAddModule.value = false;
    };
    const onRefersh = () => {
      opition.value.search = "";
      selectedKey.value = {};
      selectedNodes.value = [];
      loadModule(true);
    };
    const renderTree = (data2, id, name, title) => {
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
    const loadModule = (rf) => {
      if (rf) {
        opition.value.loading = true;
      }
      $fetch("/api/Proc/CallProc", {
        method: "POST",
        baseURL: basedomainURL,
        body: {
          proc: "sys_modules_list",
          par: [{ par: "search", va: opition.value.search }]
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let data2 = JSON.parse(response.data)[0];
        if (data2.length > 0) {
          let obj = renderTree(data2, "module_id", "module_name", "module");
          treemodules.value = obj.arrtreeChils;
          modules.value = obj.arrChils;
        } else {
          modules.value = [];
        }
        if (isFirst.value)
          isFirst.value = false;
        if (rf) {
          opition.value.loading = false;
        }
      }).catch((error) => {
        if (error && error.status === 401) {
          errorMessage();
        }
      });
    };
    const editModule = (md) => {
      submitted.value = false;
      swalLoadding();
      displayAddModule.value = true;
      $fetch("/api/Proc/CallProc", {
        method: "POST",
        baseURL: basedomainURL,
        body: {
          proc: "sys_modules_get",
          par: [{ par: "module_id", va: md.module_id }]
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        swal.close();
        let data2 = JSON.parse(response.data);
        if (data2.length > 0) {
          if (data2[0][0].is_stand) {
            data2[0][0].is_stand = tdVitris.filter(
              (x) => data2[0][0].is_stand.includes(x.value)
            );
          }
          module.value = data2[0][0];
          selectCapcha.value = {};
          selectCapcha.value[module.value.parent_id || "-1"] = true;
          selectCapchaOrganization.value = {};
          selectCapchaOrganization.value[module.value.organization_id || "-1"] = true;
        }
      }).catch((error) => {
        console.log(error);
        if (error.status === 401) {
          errorMessage();
        }
      });
    };
    const handleSubmit = (isFormValid) => {
      submitted.value = true;
      if (!isFormValid) {
        return;
      }
      let keys = Object.keys(selectCapcha.value);
      module.value.parent_id = keys[0];
      if (module.value.parent_id == -1) {
        module.value.parent_id = null;
      }
      if (selectCapchaOrganization.value) {
        keys = Object.keys(selectCapchaOrganization.value);
        module.value.organization_id = keys[0];
        if (module.value.organization_id == -1) {
          module.value.organization_id = null;
        }
      }
      addModule();
    };
    const addTreeModule = (md) => {
      let is_order = modules.value.length + 1;
      if (md.children) {
        is_order = md.children.length + 1;
      } else {
        is_order = 1;
      }
      selectCapcha.value = {};
      selectCapcha.value[md.data.module_id] = true;
      module.value = {
        module_name: "",
        is_order,
        status: true,
        is_admin: true,
        is_target: "_self",
        parent_id: md.data.module_id,
        is_stand: [{ value: "Menuleft", text: "Menu tr\xE1i" }],
        is_size: "720px",
        type_modules: 0
      };
      submitted.value = false;
      displayAddModule.value = true;
    };
    const addModule = () => {
      let or = arrroutes.value.find((x) => x.path == module.value.is_link);
      if (or) {
        module.value.IsFilePath = or.component.toString().replace("() => import('", "").replace("')", "");
      }
      let formData = new FormData();
      for (var i = 0; i < files.length; i++) {
        let file = files[i];
        formData.append("anh", file);
      }
      let md = { ...module.value };
      if (md.is_stand) {
        md.is_stand = md.is_stand.map((x) => x.value).join(",");
      }
      formData.append("model", JSON.stringify(md));
      swalLoadding();
      $fetch(`/api/Modules/${module.value.module_id ? "Update_Module" : "Add_Module"}`, {
        method: module.value.module_id ? "put" : "post",
        baseURL: basedomainURL,
        body: formData,
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        if (response.err != "1") {
          swal.close();
          toast.success("C\u1EADp nh\u1EADt Module th\xE0nh c\xF4ng!");
          loadModule();
          closedisplayAddModule();
        } else {
          console.log(response);
          swalMessage("Error!", "error", "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!");
        }
      }).catch((error) => {
        console.log(error);
        swal.close();
        swal.fire({
          title: "Error!",
          text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
          icon: "error",
          confirmButtonText: "OK"
        });
      });
    };
    const delModule = (md) => {
      swal.fire({
        title: "Th\xF4ng b\xE1o",
        text: "B\u1EA1n c\xF3 mu\u1ED1n xo\xE1 menu n\xE0y kh\xF4ng!",
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
          $fetch(`/api/Modules/Del_Module`, {
            method: "delete",
            baseURL: basedomainURL,
            body: md != null ? [md.module_id] : selectedNodes.value,
            headers: { Authorization: `Bearer ${storeToken.value}` }
          }).then((response) => {
            swal.close();
            if (response.err != "1") {
              swal.close();
              toast.success("Xo\xE1 Module th\xE0nh c\xF4ng!");
              loadModule();
              if (!md)
                selectedNodes.value = [];
            } else {
              swal.fire({
                title: "Error!",
                text: response.ms,
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
    const exportModule = (method) => {
      swal.fire({
        width: 110,
        didOpen: () => {
          swal.showLoading();
        }
      });
      $fetch(`/api/Excel/${method}`, {
        method: "post",
        baseURL: basedomainURL,
        body: {
          excelname: "DANH S\xC1CH MENU",
          proc: "sys_modules_listExport",
          par: [{ par: "user_id", va: storeUser.value.user_id }]
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        swal.close();
        if (response.err != "1") {
          swal.close();
          toast.success("K\u1EBFt xu\u1EA5t Module th\xE0nh c\xF4ng!");
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
            title: "Error!",
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
    const filteredItems = ref([]);
    const searchItems = (event) => {
      let query = event.query;
      let filteItems = [];
      for (let i = 0; i < arrIcons.length; i++) {
        let item2 = arrIcons[i];
        if (item2.toLowerCase().indexOf(query.toLowerCase()) != -1) {
          filteItems.push(item2);
        }
      }
      filteredItems.value = filteItems;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-column flex-grow-1 h-full" }, _attrs))} data-v-b09758dc>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(HeadBar, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="body-layout flex flex-grow-1 w-full h-full" data-v-b09758dc>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(SideBar, { class: "shadow-1 h-full" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(storeLogin)) {
        _push(`<div data-v-b09758dc>`);
        if (unref(storeLogin)) {
          _push(`<div class="main-layout flex-grow-1 p-2" data-v-b09758dc>`);
          _push(ssrRenderComponent(unref(script$2), {
            value: modules.value,
            selectionKeys: selectedKey.value,
            "onUpdate:selectionKeys": ($event) => selectedKey.value = $event,
            loading: opition.value.loading,
            onNodeSelect,
            onNodeUnselect,
            filters: filters.value,
            showGridlines: true,
            selectionMode: "checkbox",
            filterMode: "strict",
            class: "p-treetable-sm",
            paginator: modules.value && modules.value.length > 20,
            rows: 20,
            rowHover: true,
            responsiveLayout: "scroll",
            lazy: true,
            scrollable: true,
            scrollHeight: "flex",
            globalFilterFields: ["module_name"]
          }, {
            header: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="module-title module-title-hidden mt-0 ml-1 mb-2" data-v-b09758dc${_scopeId}><i class="pi pi-microsoft" data-v-b09758dc${_scopeId}></i> Module ch\u1EE9c n\u0103ng </h3>`);
                _push2(ssrRenderComponent(unref(script$3), { class: "w-full custoolbar" }, {
                  start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="p-input-icon-left" data-v-b09758dc${_scopeId2}><i class="pi pi-search" data-v-b09758dc${_scopeId2}></i>`);
                      _push3(ssrRenderComponent(_component_InputText, {
                        type: "text",
                        spellcheck: "false",
                        modelValue: filters.value["global"].value,
                        "onUpdate:modelValue": ($event) => filters.value["global"].value = $event,
                        placeholder: "T\xECm ki\u1EBFm"
                      }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "p-input-icon-left" }, [
                          createVNode("i", { class: "pi pi-search" }),
                          createVNode(_component_InputText, {
                            type: "text",
                            spellcheck: "false",
                            modelValue: filters.value["global"].value,
                            "onUpdate:modelValue": ($event) => filters.value["global"].value = $event,
                            placeholder: "T\xECm ki\u1EBFm"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ];
                    }
                  }),
                  end: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Button, {
                        label: "Th\xEAm Module",
                        icon: "pi pi-plus",
                        class: "mr-2",
                        onClick: showModalAddModule
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Button, {
                        class: "mr-2 p-button-outlined p-button-secondary",
                        icon: "pi pi-refresh",
                        onClick: onRefersh
                      }, null, _parent3, _scopeId2));
                      if (selectedNodes.value.length > 0) {
                        _push3(ssrRenderComponent(_component_Button, {
                          label: "Xo\xE1",
                          icon: "pi pi-trash",
                          class: "mr-2 p-button-danger",
                          onClick: delModule
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createVNode(_component_Button, {
                          label: "Th\xEAm Module",
                          icon: "pi pi-plus",
                          class: "mr-2",
                          onClick: showModalAddModule
                        }),
                        createVNode(_component_Button, {
                          class: "mr-2 p-button-outlined p-button-secondary",
                          icon: "pi pi-refresh",
                          onClick: onRefersh
                        }),
                        selectedNodes.value.length > 0 ? (openBlock(), createBlock(_component_Button, {
                          key: 0,
                          label: "Xo\xE1",
                          icon: "pi pi-trash",
                          class: "mr-2 p-button-danger",
                          onClick: delModule
                        })) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode("h3", { class: "module-title module-title-hidden mt-0 ml-1 mb-2" }, [
                    createVNode("i", { class: "pi pi-microsoft" }),
                    createTextVNode(" Module ch\u1EE9c n\u0103ng ")
                  ]),
                  createVNode(unref(script$3), { class: "w-full custoolbar" }, {
                    start: withCtx(() => [
                      createVNode("span", { class: "p-input-icon-left" }, [
                        createVNode("i", { class: "pi pi-search" }),
                        createVNode(_component_InputText, {
                          type: "text",
                          spellcheck: "false",
                          modelValue: filters.value["global"].value,
                          "onUpdate:modelValue": ($event) => filters.value["global"].value = $event,
                          placeholder: "T\xECm ki\u1EBFm"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    end: withCtx(() => [
                      createVNode(_component_Button, {
                        label: "Th\xEAm Module",
                        icon: "pi pi-plus",
                        class: "mr-2",
                        onClick: showModalAddModule
                      }),
                      createVNode(_component_Button, {
                        class: "mr-2 p-button-outlined p-button-secondary",
                        icon: "pi pi-refresh",
                        onClick: onRefersh
                      }),
                      selectedNodes.value.length > 0 ? (openBlock(), createBlock(_component_Button, {
                        key: 0,
                        label: "Xo\xE1",
                        icon: "pi pi-trash",
                        class: "mr-2 p-button-danger",
                        onClick: delModule
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            empty: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (!isFirst.value) {
                  _push2(`<div class="align-items-center justify-content-center p-4 text-center m-auto" data-v-b09758dc${_scopeId}><img${ssrRenderAttr("src", _imports_0)} height="144" data-v-b09758dc${_scopeId}><h3 class="m-1" data-v-b09758dc${_scopeId}>Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u</h3></div>`);
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
                _push2(ssrRenderComponent(unref(script$4), {
                  field: "is_order",
                  header: "STT",
                  class: "align-items-center justify-content-center text-center font-bold",
                  headerStyle: "text-align:center;max-width:100px",
                  bodyStyle: "text-align:center;max-width:100px"
                }, {
                  body: withCtx((md, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass(md.node.data.status ? "" : "text-error")}" data-v-b09758dc${_scopeId2}>${ssrInterpolate(md.node.data.is_order)}</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: md.node.data.status ? "" : "text-error"
                        }, toDisplayString(md.node.data.is_order), 3)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(script$4), {
                  field: "icon",
                  header: "Icon",
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:70px",
                  bodyStyle: "text-align:center;max-width:70px"
                }, {
                  body: withCtx((md, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i class="${ssrRenderClass([
                        md.node.data.icon,
                        md.node.data.status ? "" : "text-error"
                      ])}" data-v-b09758dc${_scopeId2}></i>`);
                    } else {
                      return [
                        createVNode("i", {
                          class: [
                            md.node.data.icon,
                            md.node.data.status ? "" : "text-error"
                          ]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(script$4), {
                  field: "module_name",
                  header: "T\xEAn Menu",
                  sortable: true,
                  expander: true
                }, {
                  body: withCtx((md, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass([
                        md.node.data.parent_id ? "" : "font-bold",
                        md.node.data.status ? "" : "text-error"
                      ])}" data-v-b09758dc${_scopeId2}>${ssrInterpolate(md.node.data.module_name)}</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [
                            md.node.data.parent_id ? "" : "font-bold",
                            md.node.data.status ? "" : "text-error"
                          ]
                        }, toDisplayString(md.node.data.module_name), 3)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(script$4), {
                  header: "Hi\u1EC3n th\u1ECB",
                  headerClass: "text-center",
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:250px",
                  bodyStyle: "text-align:center;max-width:250px"
                }, {
                  body: withCtx((md, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div data-v-b09758dc${_scopeId2}>`);
                      if (md.node.data.type_modules == 0) {
                        _push3(`<span data-v-b09758dc${_scopeId2}>H\u1EC7 th\u1ED1ng</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (md.node.data.type_modules == 1) {
                        _push3(`<span data-v-b09758dc${_scopeId2}>Giao di\u1EC7n ng\u01B0\u1EDDi d\xF9ng</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", null, [
                          md.node.data.type_modules == 0 ? (openBlock(), createBlock("span", { key: 0 }, "H\u1EC7 th\u1ED1ng")) : createCommentVNode("", true),
                          md.node.data.type_modules == 1 ? (openBlock(), createBlock("span", { key: 1 }, "Giao di\u1EC7n ng\u01B0\u1EDDi d\xF9ng")) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(script$4), {
                  header: "Ch\u1EE9c n\u0103ng",
                  headerClass: "text-center",
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:150px",
                  bodyStyle: "text-align:center;max-width:150px"
                }, {
                  header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3)
                      ;
                    else {
                      return [];
                    }
                  }),
                  body: withCtx((md, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Button, mergeProps({
                        type: "button",
                        icon: "pi pi-plus-circle",
                        class: "p-button-rounded p-button-secondary p-button-outlined",
                        style: { "margin-right": "0.5rem" },
                        onClick: ($event) => addTreeModule(md.node)
                      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Th\xEAm module con", void 0, { top: true })), null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Button, mergeProps({
                        type: "button",
                        icon: "pi pi-pencil",
                        class: "p-button-rounded p-button-secondary p-button-outlined",
                        style: { "margin-right": "0.5rem" },
                        onClick: ($event) => editModule(md.node.data)
                      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Ch\u1EC9nh s\u1EEDa", void 0, { top: true })), null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Button, mergeProps({
                        type: "button",
                        icon: "pi pi-trash",
                        class: "p-button-rounded p-button-secondary p-button-outlined",
                        onClick: ($event) => delModule(md.node.data)
                      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "X\xF3a", void 0, { top: true })), null, _parent3, _scopeId2));
                    } else {
                      return [
                        withDirectives(createVNode(_component_Button, {
                          type: "button",
                          icon: "pi pi-plus-circle",
                          class: "p-button-rounded p-button-secondary p-button-outlined",
                          style: { "margin-right": "0.5rem" },
                          onClick: ($event) => addTreeModule(md.node)
                        }, null, 8, ["onClick"]), [
                          [
                            _directive_tooltip,
                            "Th\xEAm module con",
                            void 0,
                            { top: true }
                          ]
                        ]),
                        withDirectives(createVNode(_component_Button, {
                          type: "button",
                          icon: "pi pi-pencil",
                          class: "p-button-rounded p-button-secondary p-button-outlined",
                          style: { "margin-right": "0.5rem" },
                          onClick: ($event) => editModule(md.node.data)
                        }, null, 8, ["onClick"]), [
                          [
                            _directive_tooltip,
                            "Ch\u1EC9nh s\u1EEDa",
                            void 0,
                            { top: true }
                          ]
                        ]),
                        withDirectives(createVNode(_component_Button, {
                          type: "button",
                          icon: "pi pi-trash",
                          class: "p-button-rounded p-button-secondary p-button-outlined",
                          onClick: ($event) => delModule(md.node.data)
                        }, null, 8, ["onClick"]), [
                          [
                            _directive_tooltip,
                            "X\xF3a",
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
                  createVNode(unref(script$4), {
                    field: "is_order",
                    header: "STT",
                    class: "align-items-center justify-content-center text-center font-bold",
                    headerStyle: "text-align:center;max-width:100px",
                    bodyStyle: "text-align:center;max-width:100px"
                  }, {
                    body: withCtx((md) => [
                      createVNode("div", {
                        class: md.node.data.status ? "" : "text-error"
                      }, toDisplayString(md.node.data.is_order), 3)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(script$4), {
                    field: "icon",
                    header: "Icon",
                    class: "align-items-center justify-content-center text-center",
                    headerStyle: "text-align:center;max-width:70px",
                    bodyStyle: "text-align:center;max-width:70px"
                  }, {
                    body: withCtx((md) => [
                      createVNode("i", {
                        class: [
                          md.node.data.icon,
                          md.node.data.status ? "" : "text-error"
                        ]
                      }, null, 2)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(script$4), {
                    field: "module_name",
                    header: "T\xEAn Menu",
                    sortable: true,
                    expander: true
                  }, {
                    body: withCtx((md) => [
                      createVNode("div", {
                        class: [
                          md.node.data.parent_id ? "" : "font-bold",
                          md.node.data.status ? "" : "text-error"
                        ]
                      }, toDisplayString(md.node.data.module_name), 3)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(script$4), {
                    header: "Hi\u1EC3n th\u1ECB",
                    headerClass: "text-center",
                    class: "align-items-center justify-content-center text-center",
                    headerStyle: "text-align:center;max-width:250px",
                    bodyStyle: "text-align:center;max-width:250px"
                  }, {
                    body: withCtx((md) => [
                      createVNode("div", null, [
                        md.node.data.type_modules == 0 ? (openBlock(), createBlock("span", { key: 0 }, "H\u1EC7 th\u1ED1ng")) : createCommentVNode("", true),
                        md.node.data.type_modules == 1 ? (openBlock(), createBlock("span", { key: 1 }, "Giao di\u1EC7n ng\u01B0\u1EDDi d\xF9ng")) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(script$4), {
                    header: "Ch\u1EE9c n\u0103ng",
                    headerClass: "text-center",
                    class: "align-items-center justify-content-center text-center",
                    headerStyle: "text-align:center;max-width:150px",
                    bodyStyle: "text-align:center;max-width:150px"
                  }, {
                    header: withCtx(() => []),
                    body: withCtx((md) => [
                      withDirectives(createVNode(_component_Button, {
                        type: "button",
                        icon: "pi pi-plus-circle",
                        class: "p-button-rounded p-button-secondary p-button-outlined",
                        style: { "margin-right": "0.5rem" },
                        onClick: ($event) => addTreeModule(md.node)
                      }, null, 8, ["onClick"]), [
                        [
                          _directive_tooltip,
                          "Th\xEAm module con",
                          void 0,
                          { top: true }
                        ]
                      ]),
                      withDirectives(createVNode(_component_Button, {
                        type: "button",
                        icon: "pi pi-pencil",
                        class: "p-button-rounded p-button-secondary p-button-outlined",
                        style: { "margin-right": "0.5rem" },
                        onClick: ($event) => editModule(md.node.data)
                      }, null, 8, ["onClick"]), [
                        [
                          _directive_tooltip,
                          "Ch\u1EC9nh s\u1EEDa",
                          void 0,
                          { top: true }
                        ]
                      ]),
                      withDirectives(createVNode(_component_Button, {
                        type: "button",
                        icon: "pi pi-trash",
                        class: "p-button-rounded p-button-secondary p-button-outlined",
                        onClick: ($event) => delModule(md.node.data)
                      }, null, 8, ["onClick"]), [
                        [
                          _directive_tooltip,
                          "X\xF3a",
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
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(unref(script$5), {
          header: "C\u1EADp nh\u1EADt Module",
          visible: displayAddModule.value,
          "onUpdate:visible": ($event) => displayAddModule.value = $event,
          style: { width: "40vw", zIndex: 1e3 },
          maximizable: true,
          autoZIndex: false,
          modal: true
        }, {
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                label: "Hu\u1EF7",
                icon: "pi pi-times",
                onClick: closedisplayAddModule,
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
                  onClick: closedisplayAddModule,
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
              _push2(`<form data-v-b09758dc${_scopeId}><div class="grid formgrid m-2" data-v-b09758dc${_scopeId}><div class="field col-12 md:col-12" data-v-b09758dc${_scopeId}><label class="col-2 text-left" data-v-b09758dc${_scopeId}>T\xEAn menu <span class="redsao" data-v-b09758dc${_scopeId}>(*)</span></label>`);
              _push2(ssrRenderComponent(_component_InputText, {
                spellcheck: "false",
                class: ["col-10 ip36", { "p-invalid": unref(v$).module_name.$invalid && submitted.value }],
                modelValue: module.value.module_name,
                "onUpdate:modelValue": ($event) => module.value.module_name = $event
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(v$).module_name.$invalid && submitted.value || unref(v$).module_name.$pending.$response) {
                _push2(`<small class="col-10 p-error" data-v-b09758dc${_scopeId}><div class="field col-12 md:col-12" data-v-b09758dc${_scopeId}><label class="col-2 text-left" data-v-b09758dc${_scopeId}></label><span class="col-10 pl-3" data-v-b09758dc${_scopeId}>${ssrInterpolate(unref(v$).module_name.required.$message.replace("Value", "T\xEAn menu").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"))}</span></div></small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="field col-12 md:col-12" data-v-b09758dc${_scopeId}><label class="col-2 text-left" data-v-b09758dc${_scopeId}>C\u1EA5p cha</label>`);
              _push2(ssrRenderComponent(unref(script$6), {
                class: "col-10",
                onChange: onChangeParent,
                modelValue: selectCapcha.value,
                "onUpdate:modelValue": ($event) => selectCapcha.value = $event,
                options: treemodules.value,
                showClear: true,
                placeholder: "",
                optionLabel: "data.module_name",
                optionValue: "data.module_id"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="col-12" data-v-b09758dc${_scopeId}><div class="field" data-v-b09758dc${_scopeId}><label class="col-2 text-left" data-v-b09758dc${_scopeId}>Icon</label>`);
              _push2(ssrRenderComponent(unref(script), {
                class: "col-10 ip36 p-0",
                modelValue: module.value.icon,
                "onUpdate:modelValue": ($event) => module.value.icon = $event,
                suggestions: filteredItems.value,
                onComplete: searchItems,
                virtualScrollerOptions: { itemSize: 20 },
                dropdown: ""
              }, {
                item: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex align-items-center" data-v-b09758dc${_scopeId2}><i class="${ssrRenderClass(slotProps.item)}" style="${ssrRenderStyle({ "font-size": "large" })}" data-v-b09758dc${_scopeId2}></i><div class="ml-2" data-v-b09758dc${_scopeId2}>${ssrInterpolate(slotProps.item)}</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex align-items-center" }, [
                        createVNode("i", {
                          class: slotProps.item,
                          style: { "font-size": "large" }
                        }, null, 2),
                        createVNode("div", { class: "ml-2" }, toDisplayString(slotProps.item), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="field" data-v-b09758dc${_scopeId}><label class="col-2 text-left" data-v-b09758dc${_scopeId}>Link</label>`);
              _push2(ssrRenderComponent(unref(script$i), {
                class: "col-10 ip36 p-0",
                modelValue: module.value.is_link,
                "onUpdate:modelValue": ($event) => module.value.is_link = $event,
                options: arrroutes.value,
                filter: true,
                optionLabel: "path",
                optionValue: "path",
                editable: true
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="field" data-v-b09758dc${_scopeId}><label class="col-2 text-left" data-v-b09758dc${_scopeId}>Lo\u1EA1i Modules</label>`);
              _push2(ssrRenderComponent(unref(script$i), {
                class: "col-10",
                modelValue: module.value.type_modules,
                "onUpdate:modelValue": ($event) => module.value.type_modules = $event,
                options: tdTargets.value,
                optionLabel: "text",
                optionValue: "value",
                placeholder: "Ch\u1ECDn lo\u1EA1i module"
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="field col-12 md:col-12" data-v-b09758dc${_scopeId}><label class="col-2 text-bottom" data-v-b09758dc${_scopeId}>STT</label>`);
              _push2(ssrRenderComponent(unref(script$e), {
                class: "col-2 ip36 p-0",
                modelValue: module.value.is_order,
                "onUpdate:modelValue": ($event) => module.value.is_order = $event
              }, null, _parent2, _scopeId));
              _push2(`<label style="${ssrRenderStyle({})}" class="col-2 text-right" data-v-b09758dc${_scopeId}>Tr\u1EA1ng th\xE1i</label>`);
              _push2(ssrRenderComponent(unref(script$4$1), {
                modelValue: module.value.status,
                "onUpdate:modelValue": ($event) => module.value.status = $event,
                class: "mt-1"
              }, null, _parent2, _scopeId));
              _push2(`<label style="${ssrRenderStyle({})}" class="col-3 text-right" data-v-b09758dc${_scopeId}>Module ch\xEDnh</label>`);
              _push2(ssrRenderComponent(unref(script$4$1), {
                modelValue: module.value.is_main,
                "onUpdate:modelValue": ($event) => module.value.is_main = $event
              }, null, _parent2, _scopeId));
              _push2(`</div></div></form>`);
            } else {
              return [
                createVNode("form", {
                  onSubmit: withModifiers(($event) => handleSubmit(!unref(v$).$invalid), ["prevent"])
                }, [
                  createVNode("div", { class: "grid formgrid m-2" }, [
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, [
                        createTextVNode("T\xEAn menu "),
                        createVNode("span", { class: "redsao" }, "(*)")
                      ]),
                      createVNode(_component_InputText, {
                        spellcheck: "false",
                        class: ["col-10 ip36", { "p-invalid": unref(v$).module_name.$invalid && submitted.value }],
                        modelValue: module.value.module_name,
                        "onUpdate:modelValue": ($event) => module.value.module_name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    unref(v$).module_name.$invalid && submitted.value || unref(v$).module_name.$pending.$response ? (openBlock(), createBlock("small", {
                      key: 0,
                      class: "col-10 p-error"
                    }, [
                      createVNode("div", { class: "field col-12 md:col-12" }, [
                        createVNode("label", { class: "col-2 text-left" }),
                        createVNode("span", { class: "col-10 pl-3" }, toDisplayString(unref(v$).module_name.required.$message.replace("Value", "T\xEAn menu").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng")), 1)
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, "C\u1EA5p cha"),
                      createVNode(unref(script$6), {
                        class: "col-10",
                        onChange: onChangeParent,
                        modelValue: selectCapcha.value,
                        "onUpdate:modelValue": ($event) => selectCapcha.value = $event,
                        options: treemodules.value,
                        showClear: true,
                        placeholder: "",
                        optionLabel: "data.module_name",
                        optionValue: "data.module_id"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    createVNode("div", { class: "col-12" }, [
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "col-2 text-left" }, "Icon"),
                        createVNode(unref(script), {
                          class: "col-10 ip36 p-0",
                          modelValue: module.value.icon,
                          "onUpdate:modelValue": ($event) => module.value.icon = $event,
                          suggestions: filteredItems.value,
                          onComplete: searchItems,
                          virtualScrollerOptions: { itemSize: 20 },
                          dropdown: ""
                        }, {
                          item: withCtx((slotProps) => [
                            createVNode("div", { class: "flex align-items-center" }, [
                              createVNode("i", {
                                class: slotProps.item,
                                style: { "font-size": "large" }
                              }, null, 2),
                              createVNode("div", { class: "ml-2" }, toDisplayString(slotProps.item), 1)
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "suggestions"])
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "col-2 text-left" }, "Link"),
                        createVNode(unref(script$i), {
                          class: "col-10 ip36 p-0",
                          modelValue: module.value.is_link,
                          "onUpdate:modelValue": ($event) => module.value.is_link = $event,
                          options: arrroutes.value,
                          filter: true,
                          optionLabel: "path",
                          optionValue: "path",
                          editable: true
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "col-2 text-left" }, "Lo\u1EA1i Modules"),
                        createVNode(unref(script$i), {
                          class: "col-10",
                          modelValue: module.value.type_modules,
                          "onUpdate:modelValue": ($event) => module.value.type_modules = $event,
                          options: tdTargets.value,
                          optionLabel: "text",
                          optionValue: "value",
                          placeholder: "Ch\u1ECDn lo\u1EA1i module"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ])
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-bottom" }, "STT"),
                      createVNode(unref(script$e), {
                        class: "col-2 ip36 p-0",
                        modelValue: module.value.is_order,
                        "onUpdate:modelValue": ($event) => module.value.is_order = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("label", {
                        style: {},
                        class: "col-2 text-right"
                      }, "Tr\u1EA1ng th\xE1i"),
                      createVNode(unref(script$4$1), {
                        modelValue: module.value.status,
                        "onUpdate:modelValue": ($event) => module.value.status = $event,
                        class: "mt-1"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("label", {
                        style: {},
                        class: "col-3 text-right"
                      }, "Module ch\xEDnh"),
                      createVNode(unref(script$4$1), {
                        modelValue: module.value.is_main,
                        "onUpdate:modelValue": ($event) => module.value.is_main = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/system/module/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b09758dc"]]);

export { index as default };
//# sourceMappingURL=index-189b1b86.mjs.map
