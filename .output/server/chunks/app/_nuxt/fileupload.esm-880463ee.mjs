import { f as useStyle, D as DomHandler, Z as ZIndexUtils, C as ConnectedOverlayScrollHandler, U as UniqueComponentId, k as script$2$1, R as Ripple, g as script$4$1, s as script$6$1, q as script$5$2 } from '../server.mjs';
import { openBlock, createElementBlock, mergeProps, resolveComponent, resolveDirective, createCommentVNode, createBlock, normalizeClass, withCtx, renderSlot, resolveDynamicComponent, createVNode, Transition, Fragment, createElementVNode, renderList, withDirectives, vShow, toDisplayString, createTextVNode, normalizeProps, guardReactiveProps, withKeys } from 'vue';
import { O as OverlayEventBus, s as script$1$4, a as script$a } from './index.esm-c4d8e664.mjs';
import { s as script$1$5, a as script$9 } from './index.esm-a1c6b8ad.mjs';
import { s as script$8 } from './index.esm-2c744238.mjs';
import { c as script$2$2 } from './checkbox.esm-05dfc993.mjs';
import { b as script$l } from './paginator.esm-79cc5f95.mjs';
import { i as script$3$1, b as script$5$1, j as script$4$2, a as script$2$3 } from './LoginView-36c4fae0.mjs';

var script$7 = {
  name: "CalendarIcon",
  "extends": script$4$1
};
var _hoisted_1$6 = /* @__PURE__ */ createElementVNode("path", {
  d: "M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$3 = [_hoisted_1$6];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$3, 16);
}
script$7.render = render$6;
var _classes;
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$2(obj);
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
  return _typeof$2(key) === "symbol" ? key : String(key);
}
function _toPrimitive$1(input, hint) {
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
var styles$3 = "\n.p-calendar {\n    display: inline-flex;\n    max-width: 100%;\n}\n\n.p-calendar .p-inputtext {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-calendar-w-btn .p-inputtext {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-calendar-w-btn .p-datepicker-trigger {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n/* Fluid */\n.p-fluid .p-calendar {\n    display: flex;\n}\n\n.p-fluid .p-calendar .p-inputtext {\n    width: 1%;\n}\n\n/* Datepicker */\n.p-calendar .p-datepicker {\n    min-width: 100%;\n}\n\n.p-datepicker {\n    width: auto;\n}\n\n.p-datepicker-inline {\n    display: inline-block;\n    overflow-x: auto;\n}\n\n/* Header */\n.p-datepicker-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.p-datepicker-header .p-datepicker-title {\n    margin: 0 auto;\n}\n\n.p-datepicker-prev,\n.p-datepicker-next {\n    cursor: pointer;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Multiple Month DatePicker */\n.p-datepicker-multiple-month .p-datepicker-group-container {\n    display: flex;\n}\n\n.p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group {\n    flex: 1 1 auto;\n}\n\n/* DatePicker Table */\n.p-datepicker table {\n    width: 100%;\n    border-collapse: collapse;\n}\n\n.p-datepicker td > span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    margin: 0 auto;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Month Picker */\n.p-monthpicker-month {\n    width: 33.3%;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n}\n\n/* Year Picker */\n.p-yearpicker-year {\n    width: 50%;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n}\n\n/*  Button Bar */\n.p-datepicker-buttonbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n/* Time Picker */\n.p-timepicker {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.p-timepicker button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n}\n\n.p-timepicker > div {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n/* Touch UI */\n.p-datepicker-touch-ui,\n.p-calendar .p-datepicker-touch-ui {\n    min-width: 80vw;\n}\n";
var inlineStyles = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === "self" ? "relative" : void 0
    };
  }
};
var classes$3 = (_classes = {
  root: function root2(_ref2) {
    var props = _ref2.props, state = _ref2.state;
    return ["p-calendar p-component p-inputwrapper", {
      "p-calendar-w-btn": props.showIcon,
      "p-calendar-timeonly": props.timeOnly,
      "p-calendar-disabled": props.disabled,
      "p-inputwrapper-filled": props.modelValue,
      "p-inputwrapper-focus": state.focused
    }];
  },
  input: "p-inputtext p-component",
  dropdownButton: "p-datepicker-trigger",
  panel: function panel(_ref3) {
    var instance = _ref3.instance, props = _ref3.props, state = _ref3.state;
    return ["p-datepicker p-component", {
      "p-datepicker-inline": props.inline,
      "p-disabled": props.disabled,
      "p-datepicker-timeonly": props.timeOnly,
      "p-datepicker-multiple-month": props.numberOfMonths > 1,
      "p-datepicker-monthpicker": state.currentView === "month",
      "p-datepicker-yearpicker": state.currentView === "year",
      "p-datepicker-touch-ui": props.touchUI,
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }];
  },
  groupContainer: "p-datepicker-group-container",
  group: "p-datepicker-group",
  header: "p-datepicker-header",
  previousButton: "p-datepicker-prev p-link",
  previousIcon: "p-datepicker-prev-icon",
  title: "p-datepicker-title",
  monthTitle: "p-datepicker-month p-link",
  yearTitle: "p-datepicker-year p-link",
  decadeTitle: "p-datepicker-decade",
  nextButton: "p-datepicker-next p-link",
  nextIcon: "p-datepicker-next-icon",
  container: "p-datepicker-calendar-container",
  table: "p-datepicker-calendar",
  weekHeader: "p-datepicker-weekheader p-disabled",
  weekNumber: "p-datepicker-weeknumber",
  weekLabelContainer: "p-disabled",
  day: function day(_ref4) {
    var date = _ref4.date;
    return [{
      "p-datepicker-other-month": date.otherMonth,
      "p-datepicker-today": date.today
    }];
  },
  dayLabel: function dayLabel(_ref5) {
    var instance = _ref5.instance, date = _ref5.date;
    return [{
      "p-highlight": instance.isSelected(date),
      "p-disabled": !date.selectable
    }];
  },
  monthPicker: "p-monthpicker",
  month: function month(_ref6) {
    var instance = _ref6.instance, _month = _ref6.month, index = _ref6.index;
    return ["p-monthpicker-month", {
      "p-highlight": instance.isMonthSelected(index),
      "p-disabled": !_month.selectable
    }];
  },
  yearPicker: "p-yearpicker",
  year: function year(_ref7) {
    var instance = _ref7.instance, _year = _ref7.year;
    return ["p-yearpicker-year", {
      "p-highlight": instance.isYearSelected(_year.value),
      "p-disabled": !_year.selectable
    }];
  },
  timePicker: "p-timepicker",
  hourPicker: "p-hour-picker",
  incrementButton: "p-link",
  decrementButton: "p-link",
  separatorContainer: "p-separator",
  minutePicker: "p-minute-picker"
}, _defineProperty$1(_classes, "incrementButton", "p-link"), _defineProperty$1(_classes, "decrementButton", "p-link"), _defineProperty$1(_classes, "secondPicker", "p-second-picker"), _defineProperty$1(_classes, "ampmPicker", "p-ampm-picker"), _defineProperty$1(_classes, "buttonbar", "p-datepicker-buttonbar"), _defineProperty$1(_classes, "todayButton", "p-button-text"), _defineProperty$1(_classes, "clearButton", "p-button-text"), _classes);
var _useStyle$3 = useStyle(styles$3, {
  name: "calendar",
  manual: true
}), loadStyle$3 = _useStyle$3.load;
var script$1$3 = {
  name: "BaseCalendar",
  "extends": script$6$1,
  props: {
    modelValue: null,
    selectionMode: {
      type: String,
      "default": "single"
    },
    dateFormat: {
      type: String,
      "default": null
    },
    inline: {
      type: Boolean,
      "default": false
    },
    showOtherMonths: {
      type: Boolean,
      "default": true
    },
    selectOtherMonths: {
      type: Boolean,
      "default": false
    },
    showIcon: {
      type: Boolean,
      "default": false
    },
    icon: {
      type: String,
      "default": void 0
    },
    previousIcon: {
      type: String,
      "default": void 0
    },
    nextIcon: {
      type: String,
      "default": void 0
    },
    incrementIcon: {
      type: String,
      "default": void 0
    },
    decrementIcon: {
      type: String,
      "default": void 0
    },
    numberOfMonths: {
      type: Number,
      "default": 1
    },
    responsiveOptions: Array,
    view: {
      type: String,
      "default": "date"
    },
    touchUI: {
      type: Boolean,
      "default": false
    },
    monthNavigator: {
      type: Boolean,
      "default": false
    },
    yearNavigator: {
      type: Boolean,
      "default": false
    },
    yearRange: {
      type: String,
      "default": null
    },
    minDate: {
      type: Date,
      value: null
    },
    maxDate: {
      type: Date,
      value: null
    },
    disabledDates: {
      type: Array,
      value: null
    },
    disabledDays: {
      type: Array,
      value: null
    },
    maxDateCount: {
      type: Number,
      value: null
    },
    showOnFocus: {
      type: Boolean,
      "default": true
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    showButtonBar: {
      type: Boolean,
      "default": false
    },
    shortYearCutoff: {
      type: String,
      "default": "+10"
    },
    showTime: {
      type: Boolean,
      "default": false
    },
    timeOnly: {
      type: Boolean,
      "default": false
    },
    hourFormat: {
      type: String,
      "default": "24"
    },
    stepHour: {
      type: Number,
      "default": 1
    },
    stepMinute: {
      type: Number,
      "default": 1
    },
    stepSecond: {
      type: Number,
      "default": 1
    },
    showSeconds: {
      type: Boolean,
      "default": false
    },
    hideOnDateTimeSelect: {
      type: Boolean,
      "default": false
    },
    hideOnRangeSelection: {
      type: Boolean,
      "default": false
    },
    timeSeparator: {
      type: String,
      "default": ":"
    },
    showWeek: {
      type: Boolean,
      "default": false
    },
    manualInput: {
      type: Boolean,
      "default": true
    },
    appendTo: {
      type: String,
      "default": "body"
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": null
    },
    id: {
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
    inlineStyles,
    classes: classes$3,
    loadStyle: loadStyle$3
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
function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$1(arr);
}
function _createForOfIteratorHelper$1(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it["return"] != null)
        it["return"]();
    } finally {
      if (didErr)
        throw err;
    }
  } };
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
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var script$6 = {
  name: "Calendar",
  "extends": script$1$3,
  emits: ["show", "hide", "input", "month-change", "year-change", "date-select", "update:modelValue", "today-click", "clear-click", "focus", "blur", "keydown"],
  navigationState: null,
  timePickerChange: false,
  scrollHandler: null,
  outsideClickListener: null,
  maskClickListener: null,
  resizeListener: null,
  overlay: null,
  input: null,
  mask: null,
  previousButton: null,
  nextButton: null,
  timePickerTimer: null,
  preventFocus: false,
  typeUpdate: false,
  data: function data() {
    return {
      currentMonth: null,
      currentYear: null,
      currentHour: null,
      currentMinute: null,
      currentSecond: null,
      pm: null,
      focused: false,
      overlayVisible: false,
      currentView: this.view
    };
  },
  watch: {
    modelValue: function modelValue(newValue) {
      this.updateCurrentMetaData();
      if (!this.typeUpdate && !this.inline && this.input) {
        this.input.value = this.formatValue(newValue);
      }
      this.typeUpdate = false;
    },
    showTime: function showTime() {
      this.updateCurrentMetaData();
    },
    months: function months() {
      if (this.overlay) {
        if (!this.focused) {
          if (this.inline) {
            this.preventFocus = true;
          }
          setTimeout(this.updateFocus, 0);
        }
      }
    },
    numberOfMonths: function numberOfMonths() {
      this.destroyResponsiveStyleElement();
      this.createResponsiveStyle();
    },
    responsiveOptions: function responsiveOptions() {
      this.destroyResponsiveStyleElement();
      this.createResponsiveStyle();
    },
    currentView: function currentView() {
      var _this = this;
      Promise.resolve(null).then(function() {
        return _this.alignOverlay();
      });
    }
  },
  created: function created() {
    this.updateCurrentMetaData();
  },
  mounted: function mounted() {
    this.createResponsiveStyle();
    if (this.inline) {
      this.overlay && this.overlay.setAttribute(this.attributeSelector, "");
      if (!this.disabled) {
        this.preventFocus = true;
        this.initFocusableCell();
        if (this.numberOfMonths === 1) {
          this.overlay.style.width = DomHandler.getOuterWidth(this.$el) + "px";
        }
      }
    } else {
      this.input.value = this.formatValue(this.modelValue);
    }
  },
  updated: function updated() {
    if (this.overlay) {
      this.preventFocus = true;
      setTimeout(this.updateFocus, 0);
    }
    if (this.input && this.selectionStart != null && this.selectionEnd != null) {
      this.input.selectionStart = this.selectionStart;
      this.input.selectionEnd = this.selectionEnd;
      this.selectionStart = null;
      this.selectionEnd = null;
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.timePickerTimer) {
      clearTimeout(this.timePickerTimer);
    }
    if (this.mask) {
      this.destroyMask();
    }
    this.destroyResponsiveStyleElement();
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay && this.autoZIndex) {
      ZIndexUtils.clear(this.overlay);
    }
    this.overlay = null;
  },
  methods: {
    isComparable: function isComparable() {
      return this.modelValue != null && typeof this.modelValue !== "string";
    },
    isSelected: function isSelected(dateMeta) {
      if (!this.isComparable()) {
        return false;
      }
      if (this.modelValue) {
        if (this.isSingleSelection()) {
          return this.isDateEquals(this.modelValue, dateMeta);
        } else if (this.isMultipleSelection()) {
          var selected = false;
          var _iterator = _createForOfIteratorHelper$1(this.modelValue), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var date = _step.value;
              selected = this.isDateEquals(date, dateMeta);
              if (selected) {
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return selected;
        } else if (this.isRangeSelection()) {
          if (this.modelValue[1])
            return this.isDateEquals(this.modelValue[0], dateMeta) || this.isDateEquals(this.modelValue[1], dateMeta) || this.isDateBetween(this.modelValue[0], this.modelValue[1], dateMeta);
          else {
            return this.isDateEquals(this.modelValue[0], dateMeta);
          }
        }
      }
      return false;
    },
    isMonthSelected: function isMonthSelected(month2) {
      if (this.isComparable()) {
        var value = this.isRangeSelection() ? this.modelValue[0] : this.modelValue;
        return !this.isMultipleSelection() ? value.getMonth() === month2 && value.getFullYear() === this.currentYear : false;
      }
      return false;
    },
    isYearSelected: function isYearSelected(year2) {
      if (this.isComparable()) {
        var value = this.isRangeSelection() ? this.modelValue[0] : this.modelValue;
        return !this.isMultipleSelection() && this.isComparable() ? value.getFullYear() === year2 : false;
      }
      return false;
    },
    isDateEquals: function isDateEquals(value, dateMeta) {
      if (value)
        return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
      else
        return false;
    },
    isDateBetween: function isDateBetween(start, end, dateMeta) {
      var between = false;
      if (start && end) {
        var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
        return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
      }
      return between;
    },
    getFirstDayOfMonthIndex: function getFirstDayOfMonthIndex(month2, year2) {
      var day2 = /* @__PURE__ */ new Date();
      day2.setDate(1);
      day2.setMonth(month2);
      day2.setFullYear(year2);
      var dayIndex = day2.getDay() + this.sundayIndex;
      return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
    },
    getDaysCountInMonth: function getDaysCountInMonth(month2, year2) {
      return 32 - this.daylightSavingAdjust(new Date(year2, month2, 32)).getDate();
    },
    getDaysCountInPrevMonth: function getDaysCountInPrevMonth(month2, year2) {
      var prev = this.getPreviousMonthAndYear(month2, year2);
      return this.getDaysCountInMonth(prev.month, prev.year);
    },
    getPreviousMonthAndYear: function getPreviousMonthAndYear(month2, year2) {
      var m, y;
      if (month2 === 0) {
        m = 11;
        y = year2 - 1;
      } else {
        m = month2 - 1;
        y = year2;
      }
      return {
        month: m,
        year: y
      };
    },
    getNextMonthAndYear: function getNextMonthAndYear(month2, year2) {
      var m, y;
      if (month2 === 11) {
        m = 0;
        y = year2 + 1;
      } else {
        m = month2 + 1;
        y = year2;
      }
      return {
        month: m,
        year: y
      };
    },
    daylightSavingAdjust: function daylightSavingAdjust(date) {
      if (!date) {
        return null;
      }
      date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
      return date;
    },
    isToday: function isToday(today, day2, month2, year2) {
      return today.getDate() === day2 && today.getMonth() === month2 && today.getFullYear() === year2;
    },
    isSelectable: function isSelectable(day2, month2, year2, otherMonth) {
      var validMin = true;
      var validMax = true;
      var validDate = true;
      var validDay = true;
      if (otherMonth && !this.selectOtherMonths) {
        return false;
      }
      if (this.minDate) {
        if (this.minDate.getFullYear() > year2) {
          validMin = false;
        } else if (this.minDate.getFullYear() === year2) {
          if (this.minDate.getMonth() > month2) {
            validMin = false;
          } else if (this.minDate.getMonth() === month2) {
            if (this.minDate.getDate() > day2) {
              validMin = false;
            }
          }
        }
      }
      if (this.maxDate) {
        if (this.maxDate.getFullYear() < year2) {
          validMax = false;
        } else if (this.maxDate.getFullYear() === year2) {
          if (this.maxDate.getMonth() < month2) {
            validMax = false;
          } else if (this.maxDate.getMonth() === month2) {
            if (this.maxDate.getDate() < day2) {
              validMax = false;
            }
          }
        }
      }
      if (this.disabledDates) {
        validDate = !this.isDateDisabled(day2, month2, year2);
      }
      if (this.disabledDays) {
        validDay = !this.isDayDisabled(day2, month2, year2);
      }
      return validMin && validMax && validDate && validDay;
    },
    onOverlayEnter: function onOverlayEnter(el) {
      el.setAttribute(this.attributeSelector, "");
      var styles2 = this.touchUI ? {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      } : !this.inline ? {
        position: "absolute",
        top: "0",
        left: "0"
      } : void 0;
      DomHandler.addStyles(el, styles2);
      if (this.autoZIndex) {
        if (this.touchUI)
          ZIndexUtils.set("modal", el, this.baseZIndex || this.$primevue.config.zIndex.modal);
        else
          ZIndexUtils.set("overlay", el, this.baseZIndex || this.$primevue.config.zIndex.overlay);
      }
      this.alignOverlay();
      this.$emit("show");
    },
    onOverlayEnterComplete: function onOverlayEnterComplete() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      if (this.autoZIndex) {
        ZIndexUtils.clear(el);
      }
    },
    onOverlayLeave: function onOverlayLeave() {
      this.currentView = this.view;
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit("hide");
      if (this.mask) {
        this.disableModality();
      }
      this.overlay = null;
    },
    onPrevButtonClick: function onPrevButtonClick(event) {
      if (this.showOtherMonths) {
        this.navigationState = {
          backward: true,
          button: true
        };
        this.navBackward(event);
      }
    },
    onNextButtonClick: function onNextButtonClick(event) {
      if (this.showOtherMonths) {
        this.navigationState = {
          backward: false,
          button: true
        };
        this.navForward(event);
      }
    },
    navBackward: function navBackward(event) {
      event.preventDefault();
      if (!this.isEnabled()) {
        return;
      }
      if (this.currentView === "month") {
        this.decrementYear();
        this.$emit("year-change", {
          month: this.currentMonth,
          year: this.currentYear
        });
      } else if (this.currentView === "year") {
        this.decrementDecade();
      } else {
        if (event.shiftKey) {
          this.decrementYear();
        } else {
          if (this.currentMonth === 0) {
            this.currentMonth = 11;
            this.decrementYear();
          } else {
            this.currentMonth--;
          }
          this.$emit("month-change", {
            month: this.currentMonth + 1,
            year: this.currentYear
          });
        }
      }
    },
    navForward: function navForward(event) {
      event.preventDefault();
      if (!this.isEnabled()) {
        return;
      }
      if (this.currentView === "month") {
        this.incrementYear();
        this.$emit("year-change", {
          month: this.currentMonth,
          year: this.currentYear
        });
      } else if (this.currentView === "year") {
        this.incrementDecade();
      } else {
        if (event.shiftKey) {
          this.incrementYear();
        } else {
          if (this.currentMonth === 11) {
            this.currentMonth = 0;
            this.incrementYear();
          } else {
            this.currentMonth++;
          }
          this.$emit("month-change", {
            month: this.currentMonth + 1,
            year: this.currentYear
          });
        }
      }
    },
    decrementYear: function decrementYear() {
      this.currentYear--;
    },
    decrementDecade: function decrementDecade() {
      this.currentYear = this.currentYear - 10;
    },
    incrementYear: function incrementYear() {
      this.currentYear++;
    },
    incrementDecade: function incrementDecade() {
      this.currentYear = this.currentYear + 10;
    },
    switchToMonthView: function switchToMonthView(event) {
      this.currentView = "month";
      setTimeout(this.updateFocus, 0);
      event.preventDefault();
    },
    switchToYearView: function switchToYearView(event) {
      this.currentView = "year";
      setTimeout(this.updateFocus, 0);
      event.preventDefault();
    },
    isEnabled: function isEnabled() {
      return !this.disabled && !this.readonly;
    },
    updateCurrentTimeMeta: function updateCurrentTimeMeta(date) {
      var currentHour = date.getHours();
      if (this.hourFormat === "12") {
        this.pm = currentHour > 11;
        if (currentHour >= 12)
          currentHour = currentHour == 12 ? 12 : currentHour - 12;
        else
          currentHour = currentHour == 0 ? 12 : currentHour;
      }
      this.currentHour = Math.floor(currentHour / this.stepHour) * this.stepHour;
      this.currentMinute = Math.floor(date.getMinutes() / this.stepMinute) * this.stepMinute;
      this.currentSecond = Math.floor(date.getSeconds() / this.stepSecond) * this.stepSecond;
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this2 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this2.overlayVisible && _this2.isOutsideClicked(event)) {
            _this2.overlayVisible = false;
          }
        };
        document.addEventListener("mousedown", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("mousedown", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this3 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function() {
          if (_this3.overlayVisible) {
            _this3.overlayVisible = false;
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
      var _this4 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this4.overlayVisible && !DomHandler.isTouchDevice()) {
            _this4.overlayVisible = false;
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
      return !(this.$el.isSameNode(event.target) || this.isNavIconClicked(event) || this.$el.contains(event.target) || this.overlay && this.overlay.contains(event.target));
    },
    isNavIconClicked: function isNavIconClicked(event) {
      return this.previousButton && (this.previousButton.isSameNode(event.target) || this.previousButton.contains(event.target)) || this.nextButton && (this.nextButton.isSameNode(event.target) || this.nextButton.contains(event.target));
    },
    alignOverlay: function alignOverlay() {
      if (this.touchUI) {
        this.enableModality();
      } else if (this.overlay) {
        if (this.appendTo === "self" || this.inline) {
          DomHandler.relativePosition(this.overlay, this.$el);
        } else {
          if (this.view === "date") {
            this.overlay.style.width = DomHandler.getOuterWidth(this.overlay) + "px";
            this.overlay.style.minWidth = DomHandler.getOuterWidth(this.$el) + "px";
          } else {
            this.overlay.style.width = DomHandler.getOuterWidth(this.$el) + "px";
          }
          DomHandler.absolutePosition(this.overlay, this.$el);
        }
      }
    },
    onButtonClick: function onButtonClick() {
      if (this.isEnabled()) {
        if (!this.overlayVisible) {
          this.input.focus();
          this.overlayVisible = true;
        } else {
          this.overlayVisible = false;
        }
      }
    },
    isDateDisabled: function isDateDisabled(day2, month2, year2) {
      if (this.disabledDates) {
        var _iterator2 = _createForOfIteratorHelper$1(this.disabledDates), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var disabledDate = _step2.value;
            if (disabledDate.getFullYear() === year2 && disabledDate.getMonth() === month2 && disabledDate.getDate() === day2) {
              return true;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return false;
    },
    isDayDisabled: function isDayDisabled(day2, month2, year2) {
      if (this.disabledDays) {
        var weekday = new Date(year2, month2, day2);
        var weekdayNumber = weekday.getDay();
        return this.disabledDays.indexOf(weekdayNumber) !== -1;
      }
      return false;
    },
    onMonthDropdownChange: function onMonthDropdownChange(value) {
      this.currentMonth = parseInt(value);
      this.$emit("month-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    },
    onYearDropdownChange: function onYearDropdownChange(value) {
      this.currentYear = parseInt(value);
      this.$emit("year-change", {
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    },
    onDateSelect: function onDateSelect(event, dateMeta) {
      var _this5 = this;
      if (this.disabled || !dateMeta.selectable) {
        return;
      }
      DomHandler.find(this.overlay, 'table td span:not([data-p-disabled="true"])').forEach(function(cell) {
        return cell.tabIndex = -1;
      });
      if (event) {
        event.currentTarget.focus();
      }
      if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
        var newValue = this.modelValue.filter(function(date) {
          return !_this5.isDateEquals(date, dateMeta);
        });
        this.updateModel(newValue);
      } else {
        if (this.shouldSelectDate(dateMeta)) {
          if (dateMeta.otherMonth) {
            this.currentMonth = dateMeta.month;
            this.currentYear = dateMeta.year;
            this.selectDate(dateMeta);
          } else {
            this.selectDate(dateMeta);
          }
        }
      }
      if (this.isSingleSelection() && (!this.showTime || this.hideOnDateTimeSelect)) {
        setTimeout(function() {
          if (_this5.input) {
            _this5.input.focus();
          }
          _this5.overlayVisible = false;
        }, 150);
      }
    },
    selectDate: function selectDate(dateMeta) {
      var _this6 = this;
      var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
      if (this.showTime) {
        if (this.hourFormat === "12" && this.pm && this.currentHour != 12)
          date.setHours(this.currentHour + 12);
        else
          date.setHours(this.currentHour);
        date.setMinutes(this.currentMinute);
        date.setSeconds(this.currentSecond);
      }
      if (this.minDate && this.minDate > date) {
        date = this.minDate;
        this.currentHour = date.getHours();
        this.currentMinute = date.getMinutes();
        this.currentSecond = date.getSeconds();
      }
      if (this.maxDate && this.maxDate < date) {
        date = this.maxDate;
        this.currentHour = date.getHours();
        this.currentMinute = date.getMinutes();
        this.currentSecond = date.getSeconds();
      }
      var modelVal = null;
      if (this.isSingleSelection()) {
        modelVal = date;
      } else if (this.isMultipleSelection()) {
        modelVal = this.modelValue ? [].concat(_toConsumableArray$1(this.modelValue), [date]) : [date];
      } else if (this.isRangeSelection()) {
        if (this.modelValue && this.modelValue.length) {
          var startDate = this.modelValue[0];
          var endDate = this.modelValue[1];
          if (!endDate && date.getTime() >= startDate.getTime()) {
            endDate = date;
          } else {
            startDate = date;
            endDate = null;
          }
          modelVal = [startDate, endDate];
        } else {
          modelVal = [date, null];
        }
      }
      if (modelVal !== null) {
        this.updateModel(modelVal);
      }
      if (this.isRangeSelection() && this.hideOnRangeSelection && modelVal[1] !== null) {
        setTimeout(function() {
          _this6.overlayVisible = false;
        }, 150);
      }
      this.$emit("date-select", date);
    },
    updateModel: function updateModel(value) {
      this.$emit("update:modelValue", value);
    },
    shouldSelectDate: function shouldSelectDate() {
      if (this.isMultipleSelection())
        return this.maxDateCount != null ? this.maxDateCount > (this.modelValue ? this.modelValue.length : 0) : true;
      else
        return true;
    },
    isSingleSelection: function isSingleSelection() {
      return this.selectionMode === "single";
    },
    isRangeSelection: function isRangeSelection() {
      return this.selectionMode === "range";
    },
    isMultipleSelection: function isMultipleSelection() {
      return this.selectionMode === "multiple";
    },
    formatValue: function formatValue(value) {
      if (typeof value === "string") {
        return value;
      }
      var formattedValue = "";
      if (value) {
        try {
          if (this.isSingleSelection()) {
            formattedValue = this.formatDateTime(value);
          } else if (this.isMultipleSelection()) {
            for (var i = 0; i < value.length; i++) {
              var dateAsString = this.formatDateTime(value[i]);
              formattedValue += dateAsString;
              if (i !== value.length - 1) {
                formattedValue += ", ";
              }
            }
          } else if (this.isRangeSelection()) {
            if (value && value.length) {
              var startDate = value[0];
              var endDate = value[1];
              formattedValue = this.formatDateTime(startDate);
              if (endDate) {
                formattedValue += " - " + this.formatDateTime(endDate);
              }
            }
          }
        } catch (err) {
          formattedValue = value;
        }
      }
      return formattedValue;
    },
    formatDateTime: function formatDateTime(date) {
      var formattedValue = null;
      if (date) {
        if (this.timeOnly) {
          formattedValue = this.formatTime(date);
        } else {
          formattedValue = this.formatDate(date, this.datePattern);
          if (this.showTime) {
            formattedValue += " " + this.formatTime(date);
          }
        }
      }
      return formattedValue;
    },
    formatDate: function formatDate(date, format) {
      if (!date) {
        return "";
      }
      var iFormat;
      var lookAhead = function lookAhead2(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
        if (matches) {
          iFormat++;
        }
        return matches;
      }, formatNumber = function formatNumber2(match, value, len) {
        var num = "" + value;
        if (lookAhead(match)) {
          while (num.length < len) {
            num = "0" + num;
          }
        }
        return num;
      }, formatName = function formatName2(match, value, shortNames, longNames) {
        return lookAhead(match) ? longNames[value] : shortNames[value];
      };
      var output = "";
      var literal = false;
      if (date) {
        for (iFormat = 0; iFormat < format.length; iFormat++) {
          if (literal) {
            if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
              literal = false;
            } else {
              output += format.charAt(iFormat);
            }
          } else {
            switch (format.charAt(iFormat)) {
              case "d":
                output += formatNumber("d", date.getDate(), 2);
                break;
              case "D":
                output += formatName("D", date.getDay(), this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames);
                break;
              case "o":
                output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;
              case "m":
                output += formatNumber("m", date.getMonth() + 1, 2);
                break;
              case "M":
                output += formatName("M", date.getMonth(), this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames);
                break;
              case "y":
                output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
                break;
              case "@":
                output += date.getTime();
                break;
              case "!":
                output += date.getTime() * 1e4 + this.ticksTo1970;
                break;
              case "'":
                if (lookAhead("'")) {
                  output += "'";
                } else {
                  literal = true;
                }
                break;
              default:
                output += format.charAt(iFormat);
            }
          }
        }
      }
      return output;
    },
    formatTime: function formatTime(date) {
      if (!date) {
        return "";
      }
      var output = "";
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      if (this.hourFormat === "12" && hours > 11 && hours !== 12) {
        hours -= 12;
      }
      if (this.hourFormat === "12") {
        output += hours === 0 ? 12 : hours < 10 ? "0" + hours : hours;
      } else {
        output += hours < 10 ? "0" + hours : hours;
      }
      output += ":";
      output += minutes < 10 ? "0" + minutes : minutes;
      if (this.showSeconds) {
        output += ":";
        output += seconds < 10 ? "0" + seconds : seconds;
      }
      if (this.hourFormat === "12") {
        output += date.getHours() > 11 ? " ".concat(this.$primevue.config.locale.pm) : " ".concat(this.$primevue.config.locale.am);
      }
      return output;
    },
    onTodayButtonClick: function onTodayButtonClick(event) {
      var date = /* @__PURE__ */ new Date();
      var dateMeta = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
        today: true,
        selectable: true
      };
      this.onDateSelect(null, dateMeta);
      this.$emit("today-click", date);
      event.preventDefault();
    },
    onClearButtonClick: function onClearButtonClick(event) {
      this.updateModel(null);
      this.overlayVisible = false;
      this.$emit("clear-click", event);
      event.preventDefault();
    },
    onTimePickerElementMouseDown: function onTimePickerElementMouseDown(event, type, direction) {
      if (this.isEnabled()) {
        this.repeat(event, null, type, direction);
        event.preventDefault();
      }
    },
    onTimePickerElementMouseUp: function onTimePickerElementMouseUp(event) {
      if (this.isEnabled()) {
        this.clearTimePickerTimer();
        this.updateModelTime();
        event.preventDefault();
      }
    },
    onTimePickerElementMouseLeave: function onTimePickerElementMouseLeave() {
      this.clearTimePickerTimer();
    },
    repeat: function repeat(event, interval, type, direction) {
      var _this7 = this;
      var i = interval || 500;
      this.clearTimePickerTimer();
      this.timePickerTimer = setTimeout(function() {
        _this7.repeat(event, 100, type, direction);
      }, i);
      switch (type) {
        case 0:
          if (direction === 1)
            this.incrementHour(event);
          else
            this.decrementHour(event);
          break;
        case 1:
          if (direction === 1)
            this.incrementMinute(event);
          else
            this.decrementMinute(event);
          break;
        case 2:
          if (direction === 1)
            this.incrementSecond(event);
          else
            this.decrementSecond(event);
          break;
      }
    },
    convertTo24Hour: function convertTo24Hour(hours, pm) {
      if (this.hourFormat == "12") {
        if (hours === 12) {
          return pm ? 12 : 0;
        } else {
          return pm ? hours + 12 : hours;
        }
      }
      return hours;
    },
    validateTime: function validateTime(hour, minute, second, pm) {
      var value = this.isComparable() ? this.modelValue : this.viewDate;
      var convertedHour = this.convertTo24Hour(hour, pm);
      if (this.isRangeSelection()) {
        value = this.modelValue[1] || this.modelValue[0];
      }
      if (this.isMultipleSelection()) {
        value = this.modelValue[this.modelValue.length - 1];
      }
      var valueDateString = value ? value.toDateString() : null;
      if (this.minDate && valueDateString && this.minDate.toDateString() === valueDateString) {
        if (this.minDate.getHours() > convertedHour) {
          return false;
        }
        if (this.minDate.getHours() === convertedHour) {
          if (this.minDate.getMinutes() > minute) {
            return false;
          }
          if (this.minDate.getMinutes() === minute) {
            if (this.minDate.getSeconds() > second) {
              return false;
            }
          }
        }
      }
      if (this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString) {
        if (this.maxDate.getHours() < convertedHour) {
          return false;
        }
        if (this.maxDate.getHours() === convertedHour) {
          if (this.maxDate.getMinutes() < minute) {
            return false;
          }
          if (this.maxDate.getMinutes() === minute) {
            if (this.maxDate.getSeconds() < second) {
              return false;
            }
          }
        }
      }
      return true;
    },
    incrementHour: function incrementHour(event) {
      var prevHour = this.currentHour;
      var newHour = this.currentHour + this.stepHour;
      var newPM = this.pm;
      if (this.hourFormat == "24")
        newHour = newHour >= 24 ? newHour - 24 : newHour;
      else if (this.hourFormat == "12") {
        if (prevHour < 12 && newHour > 11) {
          newPM = !this.pm;
        }
        newHour = newHour >= 13 ? newHour - 12 : newHour;
      }
      if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
        this.currentHour = newHour;
        this.pm = newPM;
      }
      event.preventDefault();
    },
    decrementHour: function decrementHour(event) {
      var newHour = this.currentHour - this.stepHour;
      var newPM = this.pm;
      if (this.hourFormat == "24")
        newHour = newHour < 0 ? 24 + newHour : newHour;
      else if (this.hourFormat == "12") {
        if (this.currentHour === 12) {
          newPM = !this.pm;
        }
        newHour = newHour <= 0 ? 12 + newHour : newHour;
      }
      if (this.validateTime(newHour, this.currentMinute, this.currentSecond, newPM)) {
        this.currentHour = newHour;
        this.pm = newPM;
      }
      event.preventDefault();
    },
    incrementMinute: function incrementMinute(event) {
      var newMinute = this.currentMinute + this.stepMinute;
      if (this.validateTime(this.currentHour, newMinute, this.currentSecond, this.pm)) {
        this.currentMinute = newMinute > 59 ? newMinute - 60 : newMinute;
      }
      event.preventDefault();
    },
    decrementMinute: function decrementMinute(event) {
      var newMinute = this.currentMinute - this.stepMinute;
      newMinute = newMinute < 0 ? 60 + newMinute : newMinute;
      if (this.validateTime(this.currentHour, newMinute, this.currentSecond, this.pm)) {
        this.currentMinute = newMinute;
      }
      event.preventDefault();
    },
    incrementSecond: function incrementSecond(event) {
      var newSecond = this.currentSecond + this.stepSecond;
      if (this.validateTime(this.currentHour, this.currentMinute, newSecond, this.pm)) {
        this.currentSecond = newSecond > 59 ? newSecond - 60 : newSecond;
      }
      event.preventDefault();
    },
    decrementSecond: function decrementSecond(event) {
      var newSecond = this.currentSecond - this.stepSecond;
      newSecond = newSecond < 0 ? 60 + newSecond : newSecond;
      if (this.validateTime(this.currentHour, this.currentMinute, newSecond, this.pm)) {
        this.currentSecond = newSecond;
      }
      event.preventDefault();
    },
    updateModelTime: function updateModelTime() {
      var _this8 = this;
      this.timePickerChange = true;
      var value = this.isComparable() ? this.modelValue : this.viewDate;
      if (this.isRangeSelection()) {
        value = this.modelValue[1] || this.modelValue[0];
      }
      if (this.isMultipleSelection()) {
        value = this.modelValue[this.modelValue.length - 1];
      }
      value = value ? new Date(value.getTime()) : /* @__PURE__ */ new Date();
      if (this.hourFormat == "12") {
        if (this.currentHour === 12)
          value.setHours(this.pm ? 12 : 0);
        else
          value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
      } else {
        value.setHours(this.currentHour);
      }
      value.setMinutes(this.currentMinute);
      value.setSeconds(this.currentSecond);
      if (this.isRangeSelection()) {
        if (this.modelValue[1])
          value = [this.modelValue[0], value];
        else
          value = [value, null];
      }
      if (this.isMultipleSelection()) {
        value = [].concat(_toConsumableArray$1(this.modelValue.slice(0, -1)), [value]);
      }
      this.updateModel(value);
      this.$emit("date-select", value);
      setTimeout(function() {
        return _this8.timePickerChange = false;
      }, 0);
    },
    toggleAMPM: function toggleAMPM(event) {
      var validHour = this.validateTime(this.currentHour, this.currentMinute, this.currentSecond, !this.pm);
      if (!validHour && (this.maxDate || this.minDate))
        return;
      this.pm = !this.pm;
      this.updateModelTime();
      event.preventDefault();
    },
    clearTimePickerTimer: function clearTimePickerTimer() {
      if (this.timePickerTimer) {
        clearInterval(this.timePickerTimer);
      }
    },
    onMonthSelect: function onMonthSelect(event, _ref) {
      _ref.month;
      var index = _ref.index;
      if (this.view === "month") {
        this.onDateSelect(event, {
          year: this.currentYear,
          month: index,
          day: 1,
          selectable: true
        });
      } else {
        this.currentMonth = index;
        this.currentView = "date";
        this.$emit("month-change", {
          month: this.currentMonth + 1,
          year: this.currentYear
        });
      }
      setTimeout(this.updateFocus, 0);
    },
    onYearSelect: function onYearSelect(event, year2) {
      if (this.view === "year") {
        this.onDateSelect(event, {
          year: year2.value,
          month: 0,
          day: 1,
          selectable: true
        });
      } else {
        this.currentYear = year2.value;
        this.currentView = "month";
        this.$emit("year-change", {
          month: this.currentMonth + 1,
          year: this.currentYear
        });
      }
      setTimeout(this.updateFocus, 0);
    },
    enableModality: function enableModality() {
      var _this9 = this;
      if (!this.mask) {
        this.mask = document.createElement("div");
        this.mask.style.zIndex = String(parseInt(this.overlay.style.zIndex, 10) - 1);
        this.mask.setAttribute("data-pc-section", "datepicker-mask");
        !this.isUnstyled && DomHandler.addMultipleClasses(this.mask, "p-datepicker-mask p-datepicker-mask-scrollblocker p-component-overlay p-component-overlay-enter");
        this.maskClickListener = function() {
          _this9.overlayVisible = false;
        };
        this.mask.addEventListener("click", this.maskClickListener);
        document.body.appendChild(this.mask);
        DomHandler.addClass(document.body, "p-overflow-hidden");
      }
    },
    disableModality: function disableModality() {
      var _this10 = this;
      if (this.mask) {
        if (this.isUnstyled) {
          this.destroyMask();
        } else {
          DomHandler.addClass(this.mask, "p-component-overlay-leave");
          this.mask.addEventListener("animationend", function() {
            _this10.destroyMask();
          });
        }
      }
    },
    destroyMask: function destroyMask() {
      this.mask.removeEventListener("click", this.maskClickListener);
      this.maskClickListener = null;
      document.body.removeChild(this.mask);
      this.mask = null;
      var bodyChildren = document.body.children;
      var hasBlockerMasks;
      for (var i = 0; i < bodyChildren.length; i++) {
        var bodyChild = bodyChildren[i];
        if (DomHandler.isAttributeEquals(bodyChild, "data-pc-section", "datepicker-mask")) {
          hasBlockerMasks = true;
          break;
        }
      }
      if (!hasBlockerMasks) {
        DomHandler.removeClass(document.body, "p-overflow-hidden");
      }
    },
    updateCurrentMetaData: function updateCurrentMetaData() {
      var viewDate2 = this.viewDate;
      this.currentMonth = viewDate2.getMonth();
      this.currentYear = viewDate2.getFullYear();
      if (this.showTime || this.timeOnly) {
        this.updateCurrentTimeMeta(viewDate2);
      }
    },
    isValidSelection: function isValidSelection(value) {
      var _this11 = this;
      if (value == null) {
        return true;
      }
      var isValid = true;
      if (this.isSingleSelection()) {
        if (!this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false)) {
          isValid = false;
        }
      } else if (value.every(function(v) {
        return _this11.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false);
      })) {
        if (this.isRangeSelection()) {
          isValid = value.length > 1 && value[1] > value[0] ? true : false;
        }
      }
      return isValid;
    },
    parseValue: function parseValue(text) {
      if (!text || text.trim().length === 0) {
        return null;
      }
      var value;
      if (this.isSingleSelection()) {
        value = this.parseDateTime(text);
      } else if (this.isMultipleSelection()) {
        var tokens = text.split(",");
        value = [];
        var _iterator3 = _createForOfIteratorHelper$1(tokens), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var token = _step3.value;
            value.push(this.parseDateTime(token.trim()));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else if (this.isRangeSelection()) {
        var _tokens = text.split(" - ");
        value = [];
        for (var i = 0; i < _tokens.length; i++) {
          value[i] = this.parseDateTime(_tokens[i].trim());
        }
      }
      return value;
    },
    parseDateTime: function parseDateTime(text) {
      var date;
      var parts = text.split(" ");
      if (this.timeOnly) {
        date = /* @__PURE__ */ new Date();
        this.populateTime(date, parts[0], parts[1]);
      } else {
        var dateFormat = this.datePattern;
        if (this.showTime) {
          date = this.parseDate(parts[0], dateFormat);
          this.populateTime(date, parts[1], parts[2]);
        } else {
          date = this.parseDate(text, dateFormat);
        }
      }
      return date;
    },
    populateTime: function populateTime(value, timeString, ampm) {
      if (this.hourFormat == "12" && !ampm) {
        throw "Invalid Time";
      }
      this.pm = ampm === this.$primevue.config.locale.pm || ampm === this.$primevue.config.locale.pm.toLowerCase();
      var time = this.parseTime(timeString);
      value.setHours(time.hour);
      value.setMinutes(time.minute);
      value.setSeconds(time.second);
    },
    parseTime: function parseTime(value) {
      var tokens = value.split(":");
      var validTokenLength = this.showSeconds ? 3 : 2;
      var regex = /^[0-9][0-9]$/;
      if (tokens.length !== validTokenLength || !tokens[0].match(regex) || !tokens[1].match(regex) || this.showSeconds && !tokens[2].match(regex)) {
        throw "Invalid time";
      }
      var h = parseInt(tokens[0]);
      var m = parseInt(tokens[1]);
      var s = this.showSeconds ? parseInt(tokens[2]) : null;
      if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat == "12" && h > 12 || this.showSeconds && (isNaN(s) || s > 59)) {
        throw "Invalid time";
      } else {
        if (this.hourFormat == "12" && h !== 12 && this.pm) {
          h += 12;
        }
        return {
          hour: h,
          minute: m,
          second: s
        };
      }
    },
    parseDate: function parseDate(value, format) {
      if (format == null || value == null) {
        throw "Invalid arguments";
      }
      value = _typeof$1(value) === "object" ? value.toString() : value + "";
      if (value === "") {
        return null;
      }
      var iFormat, dim, extra, iValue = 0, shortYearCutoff = typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(this.shortYearCutoff, 10), year2 = -1, month2 = -1, day2 = -1, doy = -1, literal = false, date, lookAhead = function lookAhead2(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
        if (matches) {
          iFormat++;
        }
        return matches;
      }, getNumber = function getNumber2(match) {
        var isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, minSize = match === "y" ? size : 1, digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
        if (!num) {
          throw "Missing number at position " + iValue;
        }
        iValue += num[0].length;
        return parseInt(num[0], 10);
      }, getName = function getName2(match, shortNames, longNames) {
        var index = -1;
        var arr = lookAhead(match) ? longNames : shortNames;
        var names = [];
        for (var i = 0; i < arr.length; i++) {
          names.push([i, arr[i]]);
        }
        names.sort(function(a, b) {
          return -(a[1].length - b[1].length);
        });
        for (var _i = 0; _i < names.length; _i++) {
          var name = names[_i][1];
          if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
            index = names[_i][0];
            iValue += name.length;
            break;
          }
        }
        if (index !== -1) {
          return index + 1;
        } else {
          throw "Unknown name at position " + iValue;
        }
      }, checkLiteral = function checkLiteral2() {
        if (value.charAt(iValue) !== format.charAt(iFormat)) {
          throw "Unexpected literal at position " + iValue;
        }
        iValue++;
      };
      if (this.currentView === "month") {
        day2 = 1;
      }
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            checkLiteral();
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
              day2 = getNumber("d");
              break;
            case "D":
              getName("D", this.$primevue.config.locale.dayNamesShort, this.$primevue.config.locale.dayNames);
              break;
            case "o":
              doy = getNumber("o");
              break;
            case "m":
              month2 = getNumber("m");
              break;
            case "M":
              month2 = getName("M", this.$primevue.config.locale.monthNamesShort, this.$primevue.config.locale.monthNames);
              break;
            case "y":
              year2 = getNumber("y");
              break;
            case "@":
              date = new Date(getNumber("@"));
              year2 = date.getFullYear();
              month2 = date.getMonth() + 1;
              day2 = date.getDate();
              break;
            case "!":
              date = new Date((getNumber("!") - this.ticksTo1970) / 1e4);
              year2 = date.getFullYear();
              month2 = date.getMonth() + 1;
              day2 = date.getDate();
              break;
            case "'":
              if (lookAhead("'")) {
                checkLiteral();
              } else {
                literal = true;
              }
              break;
            default:
              checkLiteral();
          }
        }
      }
      if (iValue < value.length) {
        extra = value.substr(iValue);
        if (!/^\s+/.test(extra)) {
          throw "Extra/unparsed characters found in date: " + extra;
        }
      }
      if (year2 === -1) {
        year2 = (/* @__PURE__ */ new Date()).getFullYear();
      } else if (year2 < 100) {
        year2 += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (year2 <= shortYearCutoff ? 0 : -100);
      }
      if (doy > -1) {
        month2 = 1;
        day2 = doy;
        do {
          dim = this.getDaysCountInMonth(year2, month2 - 1);
          if (day2 <= dim) {
            break;
          }
          month2++;
          day2 -= dim;
        } while (true);
      }
      date = this.daylightSavingAdjust(new Date(year2, month2 - 1, day2));
      if (date.getFullYear() !== year2 || date.getMonth() + 1 !== month2 || date.getDate() !== day2) {
        throw "Invalid date";
      }
      return date;
    },
    getWeekNumber: function getWeekNumber(date) {
      var checkDate = new Date(date.getTime());
      checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
      var time = checkDate.getTime();
      checkDate.setMonth(0);
      checkDate.setDate(1);
      return Math.floor(Math.round((time - checkDate.getTime()) / 864e5) / 7) + 1;
    },
    onDateCellKeydown: function onDateCellKeydown(event, date, groupIndex) {
      var cellContent = event.currentTarget;
      var cell = cellContent.parentElement;
      var cellIndex = DomHandler.index(cell);
      switch (event.code) {
        case "ArrowDown": {
          cellContent.tabIndex = "-1";
          var nextRow = cell.parentElement.nextElementSibling;
          if (nextRow) {
            var tableRowIndex = DomHandler.index(cell.parentElement);
            var tableRows = Array.from(cell.parentElement.parentElement.children);
            var nextTableRows = tableRows.slice(tableRowIndex + 1);
            var hasNextFocusableDate = nextTableRows.find(function(el) {
              var focusCell2 = el.children[cellIndex].children[0];
              return !DomHandler.getAttribute(focusCell2, "data-p-disabled");
            });
            if (hasNextFocusableDate) {
              var focusCell = hasNextFocusableDate.children[cellIndex].children[0];
              focusCell.tabIndex = "0";
              focusCell.focus();
            } else {
              this.navigationState = {
                backward: false
              };
              this.navForward(event);
            }
          } else {
            this.navigationState = {
              backward: false
            };
            this.navForward(event);
          }
          event.preventDefault();
          break;
        }
        case "ArrowUp": {
          cellContent.tabIndex = "-1";
          var prevRow = cell.parentElement.previousElementSibling;
          if (prevRow) {
            var _tableRowIndex = DomHandler.index(cell.parentElement);
            var _tableRows = Array.from(cell.parentElement.parentElement.children);
            var prevTableRows = _tableRows.slice(0, _tableRowIndex).reverse();
            var _hasNextFocusableDate = prevTableRows.find(function(el) {
              var focusCell2 = el.children[cellIndex].children[0];
              return !DomHandler.getAttribute(focusCell2, "data-p-disabled");
            });
            if (_hasNextFocusableDate) {
              var _focusCell = _hasNextFocusableDate.children[cellIndex].children[0];
              _focusCell.tabIndex = "0";
              _focusCell.focus();
            } else {
              this.navigationState = {
                backward: true
              };
              this.navBackward(event);
            }
          } else {
            this.navigationState = {
              backward: true
            };
            this.navBackward(event);
          }
          event.preventDefault();
          break;
        }
        case "ArrowLeft": {
          cellContent.tabIndex = "-1";
          var prevCell = cell.previousElementSibling;
          if (prevCell) {
            var cells = Array.from(cell.parentElement.children);
            var prevCells = cells.slice(0, cellIndex).reverse();
            var _hasNextFocusableDate2 = prevCells.find(function(el) {
              var focusCell2 = el.children[0];
              return !DomHandler.getAttribute(focusCell2, "data-p-disabled");
            });
            if (_hasNextFocusableDate2) {
              var _focusCell2 = _hasNextFocusableDate2.children[0];
              _focusCell2.tabIndex = "0";
              _focusCell2.focus();
            } else {
              this.navigateToMonth(event, true, groupIndex);
            }
          } else {
            this.navigateToMonth(event, true, groupIndex);
          }
          event.preventDefault();
          break;
        }
        case "ArrowRight": {
          cellContent.tabIndex = "-1";
          var nextCell = cell.nextElementSibling;
          if (nextCell) {
            var _cells = Array.from(cell.parentElement.children);
            var nextCells = _cells.slice(cellIndex + 1);
            var _hasNextFocusableDate3 = nextCells.find(function(el) {
              var focusCell2 = el.children[0];
              return !DomHandler.getAttribute(focusCell2, "data-p-disabled");
            });
            if (_hasNextFocusableDate3) {
              var _focusCell3 = _hasNextFocusableDate3.children[0];
              _focusCell3.tabIndex = "0";
              _focusCell3.focus();
            } else {
              this.navigateToMonth(event, false, groupIndex);
            }
          } else {
            this.navigateToMonth(event, false, groupIndex);
          }
          event.preventDefault();
          break;
        }
        case "Enter":
        case "Space": {
          this.onDateSelect(event, date);
          event.preventDefault();
          break;
        }
        case "Escape": {
          this.overlayVisible = false;
          event.preventDefault();
          break;
        }
        case "Tab": {
          if (!this.inline) {
            this.trapFocus(event);
          }
          break;
        }
        case "Home": {
          cellContent.tabIndex = "-1";
          var currentRow = cell.parentElement;
          var _focusCell4 = currentRow.children[0].children[0];
          if (DomHandler.getAttribute(_focusCell4, "data-p-disabled")) {
            this.navigateToMonth(event, true, groupIndex);
          } else {
            _focusCell4.tabIndex = "0";
            _focusCell4.focus();
          }
          event.preventDefault();
          break;
        }
        case "End": {
          cellContent.tabIndex = "-1";
          var _currentRow = cell.parentElement;
          var _focusCell5 = _currentRow.children[_currentRow.children.length - 1].children[0];
          if (DomHandler.getAttribute(_focusCell5, "data-p-disabled")) {
            this.navigateToMonth(event, false, groupIndex);
          } else {
            _focusCell5.tabIndex = "0";
            _focusCell5.focus();
          }
          event.preventDefault();
          break;
        }
        case "PageUp": {
          cellContent.tabIndex = "-1";
          if (event.shiftKey) {
            this.navigationState = {
              backward: true
            };
            this.navBackward(event);
          } else
            this.navigateToMonth(event, true, groupIndex);
          event.preventDefault();
          break;
        }
        case "PageDown": {
          cellContent.tabIndex = "-1";
          if (event.shiftKey) {
            this.navigationState = {
              backward: false
            };
            this.navForward(event);
          } else
            this.navigateToMonth(event, false, groupIndex);
          event.preventDefault();
          break;
        }
      }
    },
    navigateToMonth: function navigateToMonth(event, prev, groupIndex) {
      if (prev) {
        if (this.numberOfMonths === 1 || groupIndex === 0) {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event);
        } else {
          var prevMonthContainer = this.overlay.children[groupIndex - 1];
          var cells = DomHandler.find(prevMonthContainer, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
          var focusCell = cells[cells.length - 1];
          focusCell.tabIndex = "0";
          focusCell.focus();
        }
      } else {
        if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
          this.navigationState = {
            backward: false
          };
          this.navForward(event);
        } else {
          var nextMonthContainer = this.overlay.children[groupIndex + 1];
          var _focusCell6 = DomHandler.findSingle(nextMonthContainer, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
          _focusCell6.tabIndex = "0";
          _focusCell6.focus();
        }
      }
    },
    onMonthCellKeydown: function onMonthCellKeydown(event, index) {
      var cell = event.currentTarget;
      switch (event.code) {
        case "ArrowUp":
        case "ArrowDown": {
          cell.tabIndex = "-1";
          var cells = cell.parentElement.children;
          var cellIndex = DomHandler.index(cell);
          var nextCell = cells[event.code === "ArrowDown" ? cellIndex + 3 : cellIndex - 3];
          if (nextCell) {
            nextCell.tabIndex = "0";
            nextCell.focus();
          }
          event.preventDefault();
          break;
        }
        case "ArrowLeft": {
          cell.tabIndex = "-1";
          var prevCell = cell.previousElementSibling;
          if (prevCell) {
            prevCell.tabIndex = "0";
            prevCell.focus();
          } else {
            this.navigationState = {
              backward: true
            };
            this.navBackward(event);
          }
          event.preventDefault();
          break;
        }
        case "ArrowRight": {
          cell.tabIndex = "-1";
          var _nextCell = cell.nextElementSibling;
          if (_nextCell) {
            _nextCell.tabIndex = "0";
            _nextCell.focus();
          } else {
            this.navigationState = {
              backward: false
            };
            this.navForward(event);
          }
          event.preventDefault();
          break;
        }
        case "PageUp": {
          if (event.shiftKey)
            return;
          this.navigationState = {
            backward: true
          };
          this.navBackward(event);
          break;
        }
        case "PageDown": {
          if (event.shiftKey)
            return;
          this.navigationState = {
            backward: false
          };
          this.navForward(event);
          break;
        }
        case "Enter":
        case "Space": {
          this.onMonthSelect(event, index);
          event.preventDefault();
          break;
        }
        case "Escape": {
          this.overlayVisible = false;
          event.preventDefault();
          break;
        }
        case "Tab": {
          this.trapFocus(event);
          break;
        }
      }
    },
    onYearCellKeydown: function onYearCellKeydown(event, index) {
      var cell = event.currentTarget;
      switch (event.code) {
        case "ArrowUp":
        case "ArrowDown": {
          cell.tabIndex = "-1";
          var cells = cell.parentElement.children;
          var cellIndex = DomHandler.index(cell);
          var nextCell = cells[event.code === "ArrowDown" ? cellIndex + 2 : cellIndex - 2];
          if (nextCell) {
            nextCell.tabIndex = "0";
            nextCell.focus();
          }
          event.preventDefault();
          break;
        }
        case "ArrowLeft": {
          cell.tabIndex = "-1";
          var prevCell = cell.previousElementSibling;
          if (prevCell) {
            prevCell.tabIndex = "0";
            prevCell.focus();
          } else {
            this.navigationState = {
              backward: true
            };
            this.navBackward(event);
          }
          event.preventDefault();
          break;
        }
        case "ArrowRight": {
          cell.tabIndex = "-1";
          var _nextCell2 = cell.nextElementSibling;
          if (_nextCell2) {
            _nextCell2.tabIndex = "0";
            _nextCell2.focus();
          } else {
            this.navigationState = {
              backward: false
            };
            this.navForward(event);
          }
          event.preventDefault();
          break;
        }
        case "PageUp": {
          if (event.shiftKey)
            return;
          this.navigationState = {
            backward: true
          };
          this.navBackward(event);
          break;
        }
        case "PageDown": {
          if (event.shiftKey)
            return;
          this.navigationState = {
            backward: false
          };
          this.navForward(event);
          break;
        }
        case "Enter":
        case "Space": {
          this.onYearSelect(event, index);
          event.preventDefault();
          break;
        }
        case "Escape": {
          this.overlayVisible = false;
          event.preventDefault();
          break;
        }
        case "Tab": {
          this.trapFocus(event);
          break;
        }
      }
    },
    updateFocus: function updateFocus() {
      var cell;
      if (this.navigationState) {
        if (this.navigationState.button) {
          this.initFocusableCell();
          if (this.navigationState.backward)
            this.previousButton.focus();
          else
            this.nextButton.focus();
        } else {
          if (this.navigationState.backward) {
            var cells;
            if (this.currentView === "month") {
              cells = DomHandler.find(this.overlay, '[data-pc-section="monthpicker"] [data-pc-section="month"]:not([data-p-disabled="true"])');
            } else if (this.currentView === "year") {
              cells = DomHandler.find(this.overlay, '[data-pc-section="yearpicker"] [data-pc-section="year"]:not([data-p-disabled="true"])');
            } else {
              cells = DomHandler.find(this.overlay, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
            }
            if (cells && cells.length > 0) {
              cell = cells[cells.length - 1];
            }
          } else {
            if (this.currentView === "month") {
              cell = DomHandler.findSingle(this.overlay, '[data-pc-section="monthpicker"] [data-pc-section="month"]:not([data-p-disabled="true"])');
            } else if (this.currentView === "year") {
              cell = DomHandler.findSingle(this.overlay, '[data-pc-section="yearpicker"] [data-pc-section="year"]:not([data-p-disabled="true"])');
            } else {
              cell = DomHandler.findSingle(this.overlay, 'table td span:not([data-p-disabled="true"]):not([data-p-ink="true"])');
            }
          }
          if (cell) {
            cell.tabIndex = "0";
            cell.focus();
          }
        }
        this.navigationState = null;
      } else {
        this.initFocusableCell();
      }
    },
    initFocusableCell: function initFocusableCell() {
      var cell;
      if (this.currentView === "month") {
        var cells = DomHandler.find(this.overlay, '[data-pc-section="monthpicker"] [data-pc-section="month"]');
        var selectedCell = DomHandler.findSingle(this.overlay, '[data-pc-section="monthpicker"] [data-pc-section="month"][data-p-highlight="true"]');
        cells.forEach(function(cell2) {
          return cell2.tabIndex = -1;
        });
        cell = selectedCell || cells[0];
      } else if (this.currentView === "year") {
        var _cells2 = DomHandler.find(this.overlay, '[data-pc-section="yearpicker"] [data-pc-section="year"]');
        var _selectedCell = DomHandler.findSingle(this.overlay, '[data-pc-section="yearpicker"] [data-pc-section="year"][data-p-highlight="true"]');
        _cells2.forEach(function(cell2) {
          return cell2.tabIndex = -1;
        });
        cell = _selectedCell || _cells2[0];
      } else {
        cell = DomHandler.findSingle(this.overlay, 'span[data-p-highlight="true"]');
        if (!cell) {
          var todayCell = DomHandler.findSingle(this.overlay, "td.p-datepicker-today span:not(.p-disabled):not(.p-ink)");
          if (todayCell)
            cell = todayCell;
          else
            cell = DomHandler.findSingle(this.overlay, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
        }
      }
      if (cell) {
        cell.tabIndex = "0";
        if (!this.inline && (!this.navigationState || !this.navigationState.button) && !this.timePickerChange) {
          cell.focus();
        }
        this.preventFocus = false;
      }
    },
    trapFocus: function trapFocus(event) {
      event.preventDefault();
      var focusableElements = DomHandler.getFocusableElements(this.overlay);
      if (focusableElements && focusableElements.length > 0) {
        if (!document.activeElement) {
          focusableElements[0].focus();
        } else {
          var focusedIndex = focusableElements.indexOf(document.activeElement);
          if (event.shiftKey) {
            if (focusedIndex === -1 || focusedIndex === 0)
              focusableElements[focusableElements.length - 1].focus();
            else
              focusableElements[focusedIndex - 1].focus();
          } else {
            if (focusedIndex === -1) {
              if (this.timeOnly) {
                focusableElements[0].focus();
              } else {
                var spanIndex = null;
                for (var i = 0; i < focusableElements.length; i++) {
                  if (focusableElements[i].tagName === "SPAN")
                    spanIndex = i;
                }
                focusableElements[spanIndex].focus();
              }
            } else if (focusedIndex === focusableElements.length - 1)
              focusableElements[0].focus();
            else
              focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    },
    onContainerButtonKeydown: function onContainerButtonKeydown(event) {
      switch (event.code) {
        case "Tab":
          this.trapFocus(event);
          break;
        case "Escape":
          this.overlayVisible = false;
          event.preventDefault();
          break;
      }
      this.$emit("keydown", event);
    },
    onInput: function onInput(event) {
      try {
        this.selectionStart = this.input.selectionStart;
        this.selectionEnd = this.input.selectionEnd;
        var value = this.parseValue(event.target.value);
        if (this.isValidSelection(value)) {
          this.typeUpdate = true;
          this.updateModel(value);
        }
      } catch (err) {
      }
      this.$emit("input", event);
    },
    onInputClick: function onInputClick() {
      if (this.showOnFocus && this.isEnabled() && !this.overlayVisible) {
        this.overlayVisible = true;
      }
    },
    onFocus: function onFocus(event) {
      if (this.showOnFocus && this.isEnabled()) {
        this.overlayVisible = true;
      }
      this.focused = true;
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.$emit("blur", {
        originalEvent: event,
        value: event.target.value
      });
      this.focused = false;
      event.target.value = this.formatValue(this.modelValue);
    },
    onKeyDown: function onKeyDown(event) {
      if (event.code === "ArrowDown" && this.overlay) {
        this.trapFocus(event);
      } else if (event.code === "ArrowDown" && !this.overlay) {
        this.overlayVisible = true;
      } else if (event.code === "Escape") {
        if (this.overlayVisible) {
          this.overlayVisible = false;
          event.preventDefault();
        }
      } else if (event.code === "Tab") {
        if (this.overlay) {
          DomHandler.getFocusableElements(this.overlay).forEach(function(el) {
            return el.tabIndex = "-1";
          });
        }
        if (this.overlayVisible) {
          this.overlayVisible = false;
        }
      }
    },
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    inputRef: function inputRef(el) {
      this.input = el;
    },
    previousButtonRef: function previousButtonRef(el) {
      this.previousButton = el;
    },
    nextButtonRef: function nextButtonRef(el) {
      this.nextButton = el;
    },
    getMonthName: function getMonthName(index) {
      return this.$primevue.config.locale.monthNames[index];
    },
    getYear: function getYear(month2) {
      return this.currentView === "month" ? this.currentYear : month2.year;
    },
    onOverlayClick: function onOverlayClick(event) {
      if (!this.inline) {
        OverlayEventBus.emit("overlay-click", {
          originalEvent: event,
          target: this.$el
        });
      }
    },
    onOverlayKeyDown: function onOverlayKeyDown(event) {
      switch (event.code) {
        case "Escape":
          this.input.focus();
          this.overlayVisible = false;
          break;
      }
    },
    onOverlayMouseUp: function onOverlayMouseUp(event) {
      this.onOverlayClick(event);
    },
    createResponsiveStyle: function createResponsiveStyle() {
      if (this.numberOfMonths > 1 && this.responsiveOptions && !this.isUnstyled) {
        if (!this.responsiveStyleElement) {
          this.responsiveStyleElement = document.createElement("style");
          this.responsiveStyleElement.type = "text/css";
          document.body.appendChild(this.responsiveStyleElement);
        }
        var innerHTML = "";
        if (this.responsiveOptions) {
          var responsiveOptions2 = _toConsumableArray$1(this.responsiveOptions).filter(function(o) {
            return !!(o.breakpoint && o.numMonths);
          }).sort(function(o1, o2) {
            return -1 * o1.breakpoint.localeCompare(o2.breakpoint, void 0, {
              numeric: true
            });
          });
          for (var i = 0; i < responsiveOptions2.length; i++) {
            var _responsiveOptions$i = responsiveOptions2[i], breakpoint = _responsiveOptions$i.breakpoint, numMonths = _responsiveOptions$i.numMonths;
            var styles2 = "\n                            .p-datepicker[".concat(this.attributeSelector, "] .p-datepicker-group:nth-child(").concat(numMonths, ") .p-datepicker-next {\n                                display: inline-flex !important;\n                            }\n                        ");
            for (var j = numMonths; j < this.numberOfMonths; j++) {
              styles2 += "\n                                .p-datepicker[".concat(this.attributeSelector, "] .p-datepicker-group:nth-child(").concat(j + 1, ") {\n                                    display: none !important;\n                                }\n                            ");
            }
            innerHTML += "\n                            @media screen and (max-width: ".concat(breakpoint, ") {\n                                ").concat(styles2, "\n                            }\n                        ");
          }
        }
        this.responsiveStyleElement.innerHTML = innerHTML;
      }
    },
    destroyResponsiveStyleElement: function destroyResponsiveStyleElement() {
      if (this.responsiveStyleElement) {
        this.responsiveStyleElement.remove();
        this.responsiveStyleElement = null;
      }
    }
  },
  computed: {
    viewDate: function viewDate() {
      var propValue = this.modelValue;
      if (propValue && Array.isArray(propValue)) {
        if (this.isRangeSelection()) {
          propValue = this.inline ? propValue[0] : propValue[1] || propValue[0];
        } else if (this.isMultipleSelection()) {
          propValue = propValue[propValue.length - 1];
        }
      }
      if (propValue && typeof propValue !== "string") {
        return propValue;
      } else {
        var today = /* @__PURE__ */ new Date();
        if (this.maxDate && this.maxDate < today) {
          return this.maxDate;
        }
        if (this.minDate && this.minDate > today) {
          return this.minDate;
        }
        return today;
      }
    },
    inputFieldValue: function inputFieldValue() {
      return this.formatValue(this.modelValue);
    },
    months: function months2() {
      var months3 = [];
      for (var i = 0; i < this.numberOfMonths; i++) {
        var month2 = this.currentMonth + i;
        var year2 = this.currentYear;
        if (month2 > 11) {
          month2 = month2 % 11 - 1;
          year2 = year2 + 1;
        }
        var dates = [];
        var firstDay = this.getFirstDayOfMonthIndex(month2, year2);
        var daysLength = this.getDaysCountInMonth(month2, year2);
        var prevMonthDaysLength = this.getDaysCountInPrevMonth(month2, year2);
        var dayNo = 1;
        var today = /* @__PURE__ */ new Date();
        var weekNumbers = [];
        var monthRows = Math.ceil((daysLength + firstDay) / 7);
        for (var _i2 = 0; _i2 < monthRows; _i2++) {
          var week = [];
          if (_i2 == 0) {
            for (var j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
              var prev = this.getPreviousMonthAndYear(month2, year2);
              week.push({
                day: j,
                month: prev.month,
                year: prev.year,
                otherMonth: true,
                today: this.isToday(today, j, prev.month, prev.year),
                selectable: this.isSelectable(j, prev.month, prev.year, true)
              });
            }
            var remainingDaysLength = 7 - week.length;
            for (var _j = 0; _j < remainingDaysLength; _j++) {
              week.push({
                day: dayNo,
                month: month2,
                year: year2,
                today: this.isToday(today, dayNo, month2, year2),
                selectable: this.isSelectable(dayNo, month2, year2, false)
              });
              dayNo++;
            }
          } else {
            for (var _j2 = 0; _j2 < 7; _j2++) {
              if (dayNo > daysLength) {
                var next = this.getNextMonthAndYear(month2, year2);
                week.push({
                  day: dayNo - daysLength,
                  month: next.month,
                  year: next.year,
                  otherMonth: true,
                  today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                  selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
                });
              } else {
                week.push({
                  day: dayNo,
                  month: month2,
                  year: year2,
                  today: this.isToday(today, dayNo, month2, year2),
                  selectable: this.isSelectable(dayNo, month2, year2, false)
                });
              }
              dayNo++;
            }
          }
          if (this.showWeek) {
            weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
          }
          dates.push(week);
        }
        months3.push({
          month: month2,
          year: year2,
          dates,
          weekNumbers
        });
      }
      return months3;
    },
    weekDays: function weekDays() {
      var weekDays2 = [];
      var dayIndex = this.$primevue.config.locale.firstDayOfWeek;
      for (var i = 0; i < 7; i++) {
        weekDays2.push(this.$primevue.config.locale.dayNamesMin[dayIndex]);
        dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
      }
      return weekDays2;
    },
    ticksTo1970: function ticksTo1970() {
      return ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7;
    },
    sundayIndex: function sundayIndex() {
      return this.$primevue.config.locale.firstDayOfWeek > 0 ? 7 - this.$primevue.config.locale.firstDayOfWeek : 0;
    },
    datePattern: function datePattern() {
      return this.dateFormat || this.$primevue.config.locale.dateFormat;
    },
    yearOptions: function yearOptions() {
      if (this.yearRange) {
        var $vm = this;
        var years = this.yearRange.split(":");
        var yearStart = parseInt(years[0]);
        var yearEnd = parseInt(years[1]);
        var yearOptions2 = [];
        if (this.currentYear < yearStart) {
          $vm.currentYear = yearEnd;
        } else if (this.currentYear > yearEnd) {
          $vm.currentYear = yearStart;
        }
        for (var i = yearStart; i <= yearEnd; i++) {
          yearOptions2.push(i);
        }
        return yearOptions2;
      } else {
        return null;
      }
    },
    monthPickerValues: function monthPickerValues() {
      var _this12 = this;
      var monthPickerValues2 = [];
      var isSelectableMonth = function isSelectableMonth2(baseMonth) {
        if (_this12.minDate) {
          var minMonth = _this12.minDate.getMonth();
          var minYear = _this12.minDate.getFullYear();
          if (_this12.currentYear < minYear || _this12.currentYear === minYear && baseMonth < minMonth) {
            return false;
          }
        }
        if (_this12.maxDate) {
          var maxMonth = _this12.maxDate.getMonth();
          var maxYear = _this12.maxDate.getFullYear();
          if (_this12.currentYear > maxYear || _this12.currentYear === maxYear && baseMonth > maxMonth) {
            return false;
          }
        }
        return true;
      };
      for (var i = 0; i <= 11; i++) {
        monthPickerValues2.push({
          value: this.$primevue.config.locale.monthNamesShort[i],
          selectable: isSelectableMonth(i)
        });
      }
      return monthPickerValues2;
    },
    yearPickerValues: function yearPickerValues() {
      var _this13 = this;
      var yearPickerValues2 = [];
      var base = this.currentYear - this.currentYear % 10;
      var isSelectableYear = function isSelectableYear2(baseYear) {
        if (_this13.minDate) {
          if (_this13.minDate.getFullYear() > baseYear)
            return false;
        }
        if (_this13.maxDate) {
          if (_this13.maxDate.getFullYear() < baseYear)
            return false;
        }
        return true;
      };
      for (var i = 0; i < 10; i++) {
        yearPickerValues2.push({
          value: base + i,
          selectable: isSelectableYear(base + i)
        });
      }
      return yearPickerValues2;
    },
    formattedCurrentHour: function formattedCurrentHour() {
      return this.currentHour < 10 ? "0" + this.currentHour : this.currentHour;
    },
    formattedCurrentMinute: function formattedCurrentMinute() {
      return this.currentMinute < 10 ? "0" + this.currentMinute : this.currentMinute;
    },
    formattedCurrentSecond: function formattedCurrentSecond() {
      return this.currentSecond < 10 ? "0" + this.currentSecond : this.currentSecond;
    },
    todayLabel: function todayLabel() {
      return this.$primevue.config.locale.today;
    },
    clearLabel: function clearLabel() {
      return this.$primevue.config.locale.clear;
    },
    weekHeaderLabel: function weekHeaderLabel() {
      return this.$primevue.config.locale.weekHeader;
    },
    monthNames: function monthNames() {
      return this.$primevue.config.locale.monthNames;
    },
    attributeSelector: function attributeSelector() {
      return UniqueComponentId();
    },
    switchViewButtonDisabled: function switchViewButtonDisabled() {
      return this.numberOfMonths > 1 || this.disabled;
    },
    panelId: function panelId() {
      return UniqueComponentId() + "_panel";
    }
  },
  components: {
    CalendarButton: script$2$1,
    Portal: script$1$4,
    CalendarIcon: script$7,
    ChevronLeftIcon: script$1$5,
    ChevronRightIcon: script$8,
    ChevronUpIcon: script$9,
    ChevronDownIcon: script$a
  },
  directives: {
    ripple: Ripple
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
      _defineProperty$2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
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
  return _typeof$3(key) === "symbol" ? key : String(key);
}
function _toPrimitive$2(input, hint) {
  if (_typeof$3(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$3(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var _hoisted_1$5 = ["id"];
var _hoisted_2$2 = ["id", "placeholder", "aria-expanded", "aria-controls", "aria-labelledby", "aria-label", "disabled", "readonly"];
var _hoisted_3$1 = ["id", "role", "aria-modal", "aria-label"];
var _hoisted_4$1 = ["disabled", "aria-label"];
var _hoisted_5$1 = ["disabled", "aria-label"];
var _hoisted_6$1 = ["disabled", "aria-label"];
var _hoisted_7 = ["disabled", "aria-label"];
var _hoisted_8 = ["abbr"];
var _hoisted_9 = ["aria-label", "data-p-today", "data-p-other-month"];
var _hoisted_10 = ["onClick", "onKeydown", "aria-selected", "aria-disabled", "data-p-disabled", "data-p-highlight"];
var _hoisted_11 = ["onClick", "onKeydown", "data-p-disabled", "data-p-highlight"];
var _hoisted_12 = ["onClick", "onKeydown", "data-p-disabled", "data-p-highlight"];
var _hoisted_13 = ["aria-label"];
var _hoisted_14 = ["aria-label"];
var _hoisted_15 = ["aria-label", "disabled"];
var _hoisted_16 = ["aria-label", "disabled"];
var _hoisted_17 = ["aria-label", "disabled"];
var _hoisted_18 = ["aria-label", "disabled"];
var _hoisted_19 = ["aria-label", "disabled"];
var _hoisted_20 = ["aria-label", "disabled"];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CalendarButton = resolveComponent("CalendarButton");
  var _component_Portal = resolveComponent("Portal");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("span", mergeProps({
    ref: "container",
    id: _ctx.id,
    "class": _ctx.cx("root"),
    style: _ctx.sx("root")
  }, _ctx.ptm("root"), {
    "data-pc-name": "calendar"
  }), [!_ctx.inline ? (openBlock(), createElementBlock("input", mergeProps({
    key: 0,
    ref: $options.inputRef,
    id: _ctx.inputId,
    type: "text",
    role: "combobox",
    "class": [_ctx.cx("input"), _ctx.inputClass],
    style: _ctx.inputStyle,
    placeholder: _ctx.placeholder,
    autocomplete: "off",
    "aria-autocomplete": "none",
    "aria-haspopup": "dialog",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $options.panelId,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    inputmode: "none",
    disabled: _ctx.disabled,
    readonly: !_ctx.manualInput || _ctx.readonly,
    tabindex: 0,
    onInput: _cache[0] || (_cache[0] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    onClick: _cache[1] || (_cache[1] = function() {
      return $options.onInputClick && $options.onInputClick.apply($options, arguments);
    }),
    onFocus: _cache[2] || (_cache[2] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[3] || (_cache[3] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[4] || (_cache[4] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _objectSpread$1(_objectSpread$1({}, _ctx.inputProps), _ctx.ptm("input"))), null, 16, _hoisted_2$2)) : createCommentVNode("", true), _ctx.showIcon ? (openBlock(), createBlock(_component_CalendarButton, {
    key: 1,
    "class": normalizeClass(_ctx.cx("dropdownButton")),
    disabled: _ctx.disabled,
    onClick: $options.onButtonClick,
    type: "button",
    "aria-label": _ctx.$primevue.config.locale.chooseDate,
    "aria-haspopup": "dialog",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $options.panelId,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("dropdownButton"),
    "data-pc-section": "dropdownbutton"
  }, {
    icon: withCtx(function() {
      return [renderSlot(_ctx.$slots, "dropdownicon", {}, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : "CalendarIcon"), mergeProps({
          "class": _ctx.icon
        }, _ctx.ptm("dropdownButton")["icon"], {
          "data-pc-section": "icon"
        }), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 8, ["class", "disabled", "onClick", "aria-label", "aria-expanded", "aria-controls", "unstyled", "pt"])) : createCommentVNode("", true), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo,
    disabled: _ctx.inline
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, {
        name: "p-connected-overlay",
        onEnter: _cache[68] || (_cache[68] = function($event) {
          return $options.onOverlayEnter($event);
        }),
        onAfterEnter: $options.onOverlayEnterComplete,
        onAfterLeave: $options.onOverlayAfterLeave,
        onLeave: $options.onOverlayLeave
      }, {
        "default": withCtx(function() {
          return [_ctx.inline || $data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            id: $options.panelId,
            "class": [_ctx.cx("panel"), _ctx.panelClass],
            style: _ctx.panelStyle,
            role: _ctx.inline ? null : "dialog",
            "aria-modal": _ctx.inline ? null : "true",
            "aria-label": _ctx.$primevue.config.locale.chooseDate,
            onClick: _cache[65] || (_cache[65] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[66] || (_cache[66] = function() {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            }),
            onMouseup: _cache[67] || (_cache[67] = function() {
              return $options.onOverlayMouseUp && $options.onOverlayMouseUp.apply($options, arguments);
            })
          }, _objectSpread$1(_objectSpread$1({}, _ctx.panelProps), _ctx.ptm("panel"))), [!_ctx.timeOnly ? (openBlock(), createElementBlock(Fragment, {
            key: 0
          }, [createElementVNode("div", mergeProps({
            "class": _ctx.cx("groupContainer")
          }, _ctx.ptm("groupContainer")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.months, function(month2, groupIndex) {
            return openBlock(), createElementBlock("div", mergeProps({
              key: month2.month + month2.year,
              "class": _ctx.cx("group")
            }, _ctx.ptm("group")), [createElementVNode("div", mergeProps({
              "class": _ctx.cx("header")
            }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header"), withDirectives((openBlock(), createElementBlock("button", mergeProps({
              ref_for: true,
              ref: $options.previousButtonRef,
              "class": _ctx.cx("previousButton"),
              onClick: _cache[5] || (_cache[5] = function() {
                return $options.onPrevButtonClick && $options.onPrevButtonClick.apply($options, arguments);
              }),
              type: "button",
              onKeydown: _cache[6] || (_cache[6] = function() {
                return $options.onContainerButtonKeydown && $options.onContainerButtonKeydown.apply($options, arguments);
              }),
              disabled: _ctx.disabled,
              "aria-label": $data.currentView === "year" ? _ctx.$primevue.config.locale.prevDecade : $data.currentView === "month" ? _ctx.$primevue.config.locale.prevYear : _ctx.$primevue.config.locale.prevMonth
            }, _ctx.ptm("previousButton")), [renderSlot(_ctx.$slots, "previousicon", {}, function() {
              return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.previousIcon ? "span" : "ChevronLeftIcon"), mergeProps({
                "class": [_ctx.cx("previousIcon"), _ctx.previousIcon]
              }, _ctx.ptm("previousIcon")), null, 16, ["class"]))];
            })], 16, _hoisted_4$1)), [[vShow, _ctx.showOtherMonths ? groupIndex === 0 : false], [_directive_ripple]]), createElementVNode("div", mergeProps({
              "class": _ctx.cx("title")
            }, _ctx.ptm("title")), [$data.currentView === "date" ? (openBlock(), createElementBlock("button", mergeProps({
              key: 0,
              type: "button",
              onClick: _cache[7] || (_cache[7] = function() {
                return $options.switchToMonthView && $options.switchToMonthView.apply($options, arguments);
              }),
              onKeydown: _cache[8] || (_cache[8] = function() {
                return $options.onContainerButtonKeydown && $options.onContainerButtonKeydown.apply($options, arguments);
              }),
              "class": _ctx.cx("monthTitle"),
              disabled: $options.switchViewButtonDisabled,
              "aria-label": _ctx.$primevue.config.locale.chooseMonth
            }, _ctx.ptm("monthTitle")), toDisplayString($options.getMonthName(month2.month)), 17, _hoisted_5$1)) : createCommentVNode("", true), $data.currentView !== "year" ? (openBlock(), createElementBlock("button", mergeProps({
              key: 1,
              type: "button",
              onClick: _cache[9] || (_cache[9] = function() {
                return $options.switchToYearView && $options.switchToYearView.apply($options, arguments);
              }),
              onKeydown: _cache[10] || (_cache[10] = function() {
                return $options.onContainerButtonKeydown && $options.onContainerButtonKeydown.apply($options, arguments);
              }),
              "class": _ctx.cx("yearTitle"),
              disabled: $options.switchViewButtonDisabled,
              "aria-label": _ctx.$primevue.config.locale.chooseYear
            }, _ctx.ptm("yearTitle")), toDisplayString($options.getYear(month2)), 17, _hoisted_6$1)) : createCommentVNode("", true), $data.currentView === "year" ? (openBlock(), createElementBlock("span", mergeProps({
              key: 2,
              "class": _ctx.cx("decadeTitle")
            }, _ctx.ptm("decadeTitle")), [renderSlot(_ctx.$slots, "decade", {
              years: $options.yearPickerValues
            }, function() {
              return [createTextVNode(toDisplayString($options.yearPickerValues[0].value) + " - " + toDisplayString($options.yearPickerValues[$options.yearPickerValues.length - 1].value), 1)];
            })], 16)) : createCommentVNode("", true)], 16), withDirectives((openBlock(), createElementBlock("button", mergeProps({
              ref_for: true,
              ref: $options.nextButtonRef,
              "class": _ctx.cx("nextButton"),
              onClick: _cache[11] || (_cache[11] = function() {
                return $options.onNextButtonClick && $options.onNextButtonClick.apply($options, arguments);
              }),
              type: "button",
              onKeydown: _cache[12] || (_cache[12] = function() {
                return $options.onContainerButtonKeydown && $options.onContainerButtonKeydown.apply($options, arguments);
              }),
              disabled: _ctx.disabled,
              "aria-label": $data.currentView === "year" ? _ctx.$primevue.config.locale.nextDecade : $data.currentView === "month" ? _ctx.$primevue.config.locale.nextYear : _ctx.$primevue.config.locale.nextMonth
            }, _ctx.ptm("nextButton")), [renderSlot(_ctx.$slots, "nexticon", {}, function() {
              return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.nextIcon ? "span" : "ChevronRightIcon"), mergeProps({
                "class": [_ctx.cx("nextIcon"), _ctx.nextIcon]
              }, _ctx.ptm("nextIcon")), null, 16, ["class"]))];
            })], 16, _hoisted_7)), [[vShow, _ctx.showOtherMonths ? _ctx.numberOfMonths === 1 ? true : groupIndex === _ctx.numberOfMonths - 1 : false], [_directive_ripple]])], 16), $data.currentView === "date" ? (openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              "class": _ctx.cx("container")
            }, _ctx.ptm("container")), [createElementVNode("table", mergeProps({
              "class": _ctx.cx("table"),
              role: "grid"
            }, _ctx.ptm("table")), [createElementVNode("thead", normalizeProps(guardReactiveProps(_ctx.ptm("tableHeader"))), [createElementVNode("tr", normalizeProps(guardReactiveProps(_ctx.ptm("tableHeaderRow"))), [_ctx.showWeek ? (openBlock(), createElementBlock("th", mergeProps({
              key: 0,
              scope: "col",
              "class": _ctx.cx("weekHeader")
            }, _ctx.ptm("weekHeader"), {
              "data-p-disabled": true
            }), [createElementVNode("span", normalizeProps(guardReactiveProps(_ctx.ptm("weekLabel"))), toDisplayString($options.weekHeaderLabel), 17)], 16)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList($options.weekDays, function(weekDay) {
              return openBlock(), createElementBlock("th", mergeProps({
                key: weekDay,
                scope: "col",
                abbr: weekDay
              }, _ctx.ptm("tableHeaderCell")), [createElementVNode("span", normalizeProps(guardReactiveProps(_ctx.ptm("weekDay"))), toDisplayString(weekDay), 17)], 16, _hoisted_8);
            }), 128))], 16)], 16), createElementVNode("tbody", normalizeProps(guardReactiveProps(_ctx.ptm("tableBody"))), [(openBlock(true), createElementBlock(Fragment, null, renderList(month2.dates, function(week, i) {
              return openBlock(), createElementBlock("tr", mergeProps({
                key: week[0].day + "" + week[0].month
              }, _ctx.ptm("tableBodyRow")), [_ctx.showWeek ? (openBlock(), createElementBlock("td", mergeProps({
                key: 0,
                "class": _ctx.cx("weekNumber")
              }, _ctx.ptm("weekNumber")), [createElementVNode("span", mergeProps({
                "class": _ctx.cx("weekLabelContainer")
              }, _ctx.ptm("weekLabelContainer"), {
                "data-p-disabled": true
              }), [month2.weekNumbers[i] < 10 ? (openBlock(), createElementBlock("span", mergeProps({
                key: 0,
                style: {
                  "visibility": "hidden"
                }
              }, _ctx.ptm("weekLabel")), "0", 16)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(month2.weekNumbers[i]), 1)], 16)], 16)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(week, function(date) {
                return openBlock(), createElementBlock("td", mergeProps({
                  key: date.day + "" + date.month,
                  "aria-label": date.day,
                  "class": _ctx.cx("day", {
                    date
                  })
                }, _ctx.ptm("day"), {
                  "data-p-today": date.today,
                  "data-p-other-month": date.otherMonth
                }), [withDirectives((openBlock(), createElementBlock("span", mergeProps({
                  "class": _ctx.cx("dayLabel", {
                    date
                  }),
                  onClick: function onClick($event) {
                    return $options.onDateSelect($event, date);
                  },
                  draggable: "false",
                  onKeydown: function onKeydown($event) {
                    return $options.onDateCellKeydown($event, date, groupIndex);
                  },
                  "aria-selected": $options.isSelected(date),
                  "aria-disabled": !date.selectable
                }, _ctx.ptm("dayLabel"), {
                  "data-p-disabled": !date.selectable,
                  "data-p-highlight": $options.isSelected(date)
                }), [renderSlot(_ctx.$slots, "date", {
                  date
                }, function() {
                  return [createTextVNode(toDisplayString(date.day), 1)];
                })], 16, _hoisted_10)), [[_directive_ripple]]), $options.isSelected(date) ? (openBlock(), createElementBlock("div", mergeProps({
                  key: 0,
                  "class": "p-hidden-accessible",
                  "aria-live": "polite"
                }, _ctx.ptm("hiddenSelectedDay"), {
                  "data-p-hidden-accessible": true
                }), toDisplayString(date.day), 17)) : createCommentVNode("", true)], 16, _hoisted_9);
              }), 128))], 16);
            }), 128))], 16)], 16)], 16)) : createCommentVNode("", true)], 16);
          }), 128))], 16), $data.currentView === "month" ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("monthPicker")
          }, _ctx.ptm("monthPicker")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.monthPickerValues, function(m, i) {
            return withDirectives((openBlock(), createElementBlock("span", mergeProps({
              key: m,
              onClick: function onClick($event) {
                return $options.onMonthSelect($event, {
                  month: m,
                  index: i
                });
              },
              onKeydown: function onKeydown($event) {
                return $options.onMonthCellKeydown($event, {
                  month: m,
                  index: i
                });
              },
              "class": _ctx.cx("month", {
                month: m,
                index: i
              })
            }, _ctx.ptm("month"), {
              "data-p-disabled": !m.selectable,
              "data-p-highlight": $options.isMonthSelected(i)
            }), [createTextVNode(toDisplayString(m.value) + " ", 1), $options.isMonthSelected(i) ? (openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              "class": "p-hidden-accessible",
              "aria-live": "polite"
            }, _ctx.ptm("hiddenMonth"), {
              "data-p-hidden-accessible": true
            }), toDisplayString(m.value), 17)) : createCommentVNode("", true)], 16, _hoisted_11)), [[_directive_ripple]]);
          }), 128))], 16)) : createCommentVNode("", true), $data.currentView === "year" ? (openBlock(), createElementBlock("div", mergeProps({
            key: 1,
            "class": _ctx.cx("yearPicker")
          }, _ctx.ptm("yearPicker")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.yearPickerValues, function(y) {
            return withDirectives((openBlock(), createElementBlock("span", mergeProps({
              key: y.value,
              onClick: function onClick($event) {
                return $options.onYearSelect($event, y);
              },
              onKeydown: function onKeydown($event) {
                return $options.onYearCellKeydown($event, y);
              },
              "class": _ctx.cx("year", {
                year: y
              })
            }, _ctx.ptm("year"), {
              "data-p-disabled": !y.selectable,
              "data-p-highlight": $options.isYearSelected(y.value)
            }), [createTextVNode(toDisplayString(y.value) + " ", 1), $options.isYearSelected(y.value) ? (openBlock(), createElementBlock("div", mergeProps({
              key: 0,
              "class": "p-hidden-accessible",
              "aria-live": "polite"
            }, _ctx.ptm("hiddenYear"), {
              "data-p-hidden-accessible": true
            }), toDisplayString(y.value), 17)) : createCommentVNode("", true)], 16, _hoisted_12)), [[_directive_ripple]]);
          }), 128))], 16)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true), (_ctx.showTime || _ctx.timeOnly) && $data.currentView === "date" ? (openBlock(), createElementBlock("div", mergeProps({
            key: 1,
            "class": _ctx.cx("timePicker")
          }, _ctx.ptm("timePicker")), [createElementVNode("div", mergeProps({
            "class": _ctx.cx("hourPicker")
          }, _ctx.ptm("hourPicker")), [withDirectives((openBlock(), createElementBlock("button", mergeProps({
            "class": _ctx.cx("incrementButton"),
            "aria-label": _ctx.$primevue.config.locale.nextHour,
            onMousedown: _cache[13] || (_cache[13] = function($event) {
              return $options.onTimePickerElementMouseDown($event, 0, 1);
            }),
            onMouseup: _cache[14] || (_cache[14] = function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }),
            onKeydown: [_cache[15] || (_cache[15] = function() {
              return $options.onContainerButtonKeydown && $options.onContainerButtonKeydown.apply($options, arguments);
            }), _cache[17] || (_cache[17] = withKeys(function($event) {
              return $options.onTimePickerElementMouseDown($event, 0, 1);
            }, ["enter"])), _cache[18] || (_cache[18] = withKeys(function($event) {
              return $options.onTimePickerElementMouseDown($event, 0, 1);
            }, ["space"]))],
            onMouseleave: _cache[16] || (_cache[16] = function($event) {
              return $options.onTimePickerElementMouseLeave();
            }),
            onKeyup: [_cache[19] || (_cache[19] = withKeys(function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }, ["enter"])), _cache[20] || (_cache[20] = withKeys(function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }, ["space"]))],
            type: "button"
          }, _ctx.ptm("incrementButton")), [renderSlot(_ctx.$slots, "incrementicon", {}, function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.incrementIcon ? "span" : "ChevronUpIcon"), mergeProps({
              "class": _ctx.incrementIcon
            }, _ctx.ptm("incrementIcon")), null, 16, ["class"]))];
          })], 16, _hoisted_13)), [[_directive_ripple]]), createElementVNode("span", normalizeProps(guardReactiveProps(_ctx.ptm("hour"))), toDisplayString($options.formattedCurrentHour), 17), withDirectives((openBlock(), createElementBlock("button", mergeProps({
            "class": _ctx.cx("decrementButton"),
            "aria-label": _ctx.$primevue.config.locale.prevHour,
            onMousedown: _cache[21] || (_cache[21] = function($event) {
              return $options.onTimePickerElementMouseDown($event, 0, -1);
            }),
            onMouseup: _cache[22] || (_cache[22] = function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }),
            onKeydown: [_cache[23] || (_cache[23] = function() {
              return $options.onContainerButtonKeydown && $options.onContainerButtonKeydown.apply($options, arguments);
            }), _cache[25] || (_cache[25] = withKeys(function($event) {
              return $options.onTimePickerElementMouseDown($event, 0, -1);
            }, ["enter"])), _cache[26] || (_cache[26] = withKeys(function($event) {
              return $options.onTimePickerElementMouseDown($event, 0, -1);
            }, ["space"]))],
            onMouseleave: _cache[24] || (_cache[24] = function($event) {
              return $options.onTimePickerElementMouseLeave();
            }),
            onKeyup: [_cache[27] || (_cache[27] = withKeys(function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }, ["enter"])), _cache[28] || (_cache[28] = withKeys(function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }, ["space"]))],
            type: "button"
          }, _ctx.ptm("decrementButton")), [renderSlot(_ctx.$slots, "decrementicon", {}, function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.decrementIcon ? "span" : "ChevronDownIcon"), mergeProps({
              "class": _ctx.decrementIcon
            }, _ctx.ptm("decrementIcon")), null, 16, ["class"]))];
          })], 16, _hoisted_14)), [[_directive_ripple]])], 16), createElementVNode("div", mergeProps({
            "class": _ctx.cx("separatorContainer")
          }, _ctx.ptm("separatorContainer")), [createElementVNode("span", normalizeProps(guardReactiveProps(_ctx.ptm("separator"))), toDisplayString(_ctx.timeSeparator), 17)], 16), createElementVNode("div", mergeProps({
            "class": _ctx.cx("minutePicker")
          }, _ctx.ptm("minutePicker")), [withDirectives((openBlock(), createElementBlock("button", mergeProps({
            "class": _ctx.cx("incrementButton"),
            "aria-label": _ctx.$primevue.config.locale.nextMinute,
            onMousedown: _cache[29] || (_cache[29] = function($event) {
              return $options.onTimePickerElementMouseDown($event, 1, 1);
            }),
            onMouseup: _cache[30] || (_cache[30] = function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }),
            onKeydown: [_cache[31] || (_cache[31] = function() {
              return $options.onContainerButtonKeydown && $options.onContainerButtonKeydown.apply($options, arguments);
            }), _cache[33] || (_cache[33] = withKeys(function($event) {
              return $options.onTimePickerElementMouseDown($event, 1, 1);
            }, ["enter"])), _cache[34] || (_cache[34] = withKeys(function($event) {
              return $options.onTimePickerElementMouseDown($event, 1, 1);
            }, ["space"]))],
            disabled: _ctx.disabled,
            onMouseleave: _cache[32] || (_cache[32] = function($event) {
              return $options.onTimePickerElementMouseLeave();
            }),
            onKeyup: [_cache[35] || (_cache[35] = withKeys(function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }, ["enter"])), _cache[36] || (_cache[36] = withKeys(function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }, ["space"]))],
            type: "button"
          }, _ctx.ptm("incrementButton")), [renderSlot(_ctx.$slots, "incrementicon", {}, function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.incrementIcon ? "span" : "ChevronUpIcon"), mergeProps({
              "class": _ctx.incrementIcon
            }, _ctx.ptm("incrementIcon")), null, 16, ["class"]))];
          })], 16, _hoisted_15)), [[_directive_ripple]]), createElementVNode("span", normalizeProps(guardReactiveProps(_ctx.ptm("minute"))), toDisplayString($options.formattedCurrentMinute), 17), withDirectives((openBlock(), createElementBlock("button", mergeProps({
            "class": _ctx.cx("decrementButton"),
            "aria-label": _ctx.$primevue.config.locale.prevMinute,
            onMousedown: _cache[37] || (_cache[37] = function($event) {
              return $options.onTimePickerElementMouseDown($event, 1, -1);
            }),
            onMouseup: _cache[38] || (_cache[38] = function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }),
            onKeydown: [_cache[39] || (_cache[39] = function() {
              return $options.onContainerButtonKeydown && $options.onContainerButtonKeydown.apply($options, arguments);
            }), _cache[41] || (_cache[41] = withKeys(function($event) {
              return $options.onTimePickerElementMouseDown($event, 1, -1);
            }, ["enter"])), _cache[42] || (_cache[42] = withKeys(function($event) {
              return $options.onTimePickerElementMouseDown($event, 1, -1);
            }, ["space"]))],
            disabled: _ctx.disabled,
            onMouseleave: _cache[40] || (_cache[40] = function($event) {
              return $options.onTimePickerElementMouseLeave();
            }),
            onKeyup: [_cache[43] || (_cache[43] = withKeys(function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }, ["enter"])), _cache[44] || (_cache[44] = withKeys(function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }, ["space"]))],
            type: "button"
          }, _ctx.ptm("decrementButton")), [renderSlot(_ctx.$slots, "decrementicon", {}, function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.decrementIcon ? "span" : "ChevronDownIcon"), mergeProps({
              "class": _ctx.decrementIcon
            }, _ctx.ptm("decrementIcon")), null, 16, ["class"]))];
          })], 16, _hoisted_16)), [[_directive_ripple]])], 16), _ctx.showSeconds ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("separatorContainer")
          }, _ctx.ptm("separatorContainer")), [createElementVNode("span", normalizeProps(guardReactiveProps(_ctx.ptm("separator"))), toDisplayString(_ctx.timeSeparator), 17)], 16)) : createCommentVNode("", true), _ctx.showSeconds ? (openBlock(), createElementBlock("div", mergeProps({
            key: 1,
            "class": _ctx.cx("secondPicker")
          }, _ctx.ptm("secondPicker")), [withDirectives((openBlock(), createElementBlock("button", mergeProps({
            "class": _ctx.cx("incrementButton"),
            "aria-label": _ctx.$primevue.config.locale.nextSecond,
            onMousedown: _cache[45] || (_cache[45] = function($event) {
              return $options.onTimePickerElementMouseDown($event, 2, 1);
            }),
            onMouseup: _cache[46] || (_cache[46] = function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }),
            onKeydown: [_cache[47] || (_cache[47] = function() {
              return $options.onContainerButtonKeydown && $options.onContainerButtonKeydown.apply($options, arguments);
            }), _cache[49] || (_cache[49] = withKeys(function($event) {
              return $options.onTimePickerElementMouseDown($event, 2, 1);
            }, ["enter"])), _cache[50] || (_cache[50] = withKeys(function($event) {
              return $options.onTimePickerElementMouseDown($event, 2, 1);
            }, ["space"]))],
            disabled: _ctx.disabled,
            onMouseleave: _cache[48] || (_cache[48] = function($event) {
              return $options.onTimePickerElementMouseLeave();
            }),
            onKeyup: [_cache[51] || (_cache[51] = withKeys(function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }, ["enter"])), _cache[52] || (_cache[52] = withKeys(function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }, ["space"]))],
            type: "button"
          }, _ctx.ptm("incrementButton")), [renderSlot(_ctx.$slots, "incrementicon", {}, function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.incrementIcon ? "span" : "ChevronUpIcon"), mergeProps({
              "class": _ctx.incrementIcon
            }, _ctx.ptm("incrementIcon")), null, 16, ["class"]))];
          })], 16, _hoisted_17)), [[_directive_ripple]]), createElementVNode("span", normalizeProps(guardReactiveProps(_ctx.ptm("second"))), toDisplayString($options.formattedCurrentSecond), 17), withDirectives((openBlock(), createElementBlock("button", mergeProps({
            "class": _ctx.cx("decrementButton"),
            "aria-label": _ctx.$primevue.config.locale.prevSecond,
            onMousedown: _cache[53] || (_cache[53] = function($event) {
              return $options.onTimePickerElementMouseDown($event, 2, -1);
            }),
            onMouseup: _cache[54] || (_cache[54] = function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }),
            onKeydown: [_cache[55] || (_cache[55] = function() {
              return $options.onContainerButtonKeydown && $options.onContainerButtonKeydown.apply($options, arguments);
            }), _cache[57] || (_cache[57] = withKeys(function($event) {
              return $options.onTimePickerElementMouseDown($event, 2, -1);
            }, ["enter"])), _cache[58] || (_cache[58] = withKeys(function($event) {
              return $options.onTimePickerElementMouseDown($event, 2, -1);
            }, ["space"]))],
            disabled: _ctx.disabled,
            onMouseleave: _cache[56] || (_cache[56] = function($event) {
              return $options.onTimePickerElementMouseLeave();
            }),
            onKeyup: [_cache[59] || (_cache[59] = withKeys(function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }, ["enter"])), _cache[60] || (_cache[60] = withKeys(function($event) {
              return $options.onTimePickerElementMouseUp($event);
            }, ["space"]))],
            type: "button"
          }, _ctx.ptm("decrementButton")), [renderSlot(_ctx.$slots, "decrementicon", {}, function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.decrementIcon ? "span" : "ChevronDownIcon"), mergeProps({
              "class": _ctx.decrementIcon
            }, _ctx.ptm("decrementIcon")), null, 16, ["class"]))];
          })], 16, _hoisted_18)), [[_directive_ripple]])], 16)) : createCommentVNode("", true), _ctx.hourFormat == "12" ? (openBlock(), createElementBlock("div", mergeProps({
            key: 2,
            "class": _ctx.cx("separatorContainer")
          }, _ctx.ptm("separatorContainer")), [createElementVNode("span", normalizeProps(guardReactiveProps(_ctx.ptm("separator"))), toDisplayString(_ctx.timeSeparator), 17)], 16)) : createCommentVNode("", true), _ctx.hourFormat == "12" ? (openBlock(), createElementBlock("div", mergeProps({
            key: 3,
            "class": _ctx.cx("ampmPicker")
          }, _ctx.ptm("ampmPicker")), [withDirectives((openBlock(), createElementBlock("button", mergeProps({
            "class": _ctx.cx("incrementButton"),
            "aria-label": _ctx.$primevue.config.locale.am,
            onClick: _cache[61] || (_cache[61] = function($event) {
              return $options.toggleAMPM($event);
            }),
            type: "button",
            disabled: _ctx.disabled
          }, _ctx.ptm("incrementButton")), [renderSlot(_ctx.$slots, "incrementicon", {}, function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.incrementIcon ? "span" : "ChevronUpIcon"), mergeProps({
              "class": _ctx.cx("incrementIcon")
            }, _ctx.ptm("incrementIcon")), null, 16, ["class"]))];
          })], 16, _hoisted_19)), [[_directive_ripple]]), createElementVNode("span", normalizeProps(guardReactiveProps(_ctx.ptm("ampm"))), toDisplayString($data.pm ? _ctx.$primevue.config.locale.pm : _ctx.$primevue.config.locale.am), 17), withDirectives((openBlock(), createElementBlock("button", mergeProps({
            "class": _ctx.cx("decrementButton"),
            "aria-label": _ctx.$primevue.config.locale.pm,
            onClick: _cache[62] || (_cache[62] = function($event) {
              return $options.toggleAMPM($event);
            }),
            type: "button",
            disabled: _ctx.disabled
          }, _ctx.ptm("decrementButton")), [renderSlot(_ctx.$slots, "decrementicon", {}, function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.decrementIcon ? "span" : "ChevronDownIcon"), mergeProps({
              "class": _ctx.cx("decrementIcon")
            }, _ctx.ptm("decrementIcon")), null, 16, ["class"]))];
          })], 16, _hoisted_20)), [[_directive_ripple]])], 16)) : createCommentVNode("", true)], 16)) : createCommentVNode("", true), _ctx.showButtonBar ? (openBlock(), createElementBlock("div", mergeProps({
            key: 2,
            "class": _ctx.cx("buttonbar")
          }, _ctx.ptm("buttonbar")), [createVNode(_component_CalendarButton, {
            type: "button",
            label: $options.todayLabel,
            onClick: _cache[63] || (_cache[63] = function($event) {
              return $options.onTodayButtonClick($event);
            }),
            "class": normalizeClass(_ctx.cx("todayButton")),
            onKeydown: $options.onContainerButtonKeydown,
            unstyled: _ctx.unstyled,
            pt: _ctx.ptm("todayButton"),
            "data-pc-section": "todaybutton"
          }, null, 8, ["label", "class", "onKeydown", "unstyled", "pt"]), createVNode(_component_CalendarButton, {
            type: "button",
            label: $options.clearLabel,
            onClick: _cache[64] || (_cache[64] = function($event) {
              return $options.onClearButtonClick($event);
            }),
            "class": normalizeClass(_ctx.cx("clearButton")),
            onKeydown: $options.onContainerButtonKeydown,
            unstyled: _ctx.unstyled,
            pt: _ctx.ptm("clearButton"),
            "data-pc-section": "clearbutton"
          }, null, 8, ["label", "class", "onKeydown", "unstyled", "pt"])], 16)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "footer")], 16, _hoisted_3$1)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 8, ["onAfterEnter", "onAfterLeave", "onLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"])], 16, _hoisted_1$5);
}
script$6.render = render$5;
var script$5 = {
  name: "UploadIcon",
  "extends": script$4$1,
  computed: {
    pathId: function pathId() {
      return "pv_icon_clip_".concat(UniqueComponentId());
    }
  }
};
var _hoisted_1$4 = ["clipPath"];
var _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",
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
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), [createElementVNode("g", {
    clipPath: "url(#".concat($options.pathId, ")")
  }, _hoisted_3, 8, _hoisted_1$4), createElementVNode("defs", null, [createElementVNode("clipPath", {
    id: "".concat($options.pathId)
  }, _hoisted_6, 8, _hoisted_4)])], 16);
}
script$5.render = render$4;
var styles$2 = "\n.p-message-wrapper {\n    display: flex;\n    align-items: center;\n}\n\n.p-message-close {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-message-close.p-link {\n    margin-left: auto;\n    overflow: hidden;\n    position: relative;\n}\n\n.p-message-enter-from {\n    opacity: 0;\n}\n\n.p-message-enter-active {\n    transition: opacity 0.3s;\n}\n\n.p-message.p-message-leave-from {\n    max-height: 1000px;\n}\n\n.p-message.p-message-leave-to {\n    max-height: 0;\n    opacity: 0;\n    margin: 0 !important;\n}\n\n.p-message-leave-active {\n    overflow: hidden;\n    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.15s;\n}\n\n.p-message-leave-active .p-message-close {\n    display: none;\n}\n";
var classes$2 = {
  root: function root3(_ref) {
    var props = _ref.props;
    return "p-message p-component p-message-" + props.severity;
  },
  wrapper: "p-message-wrapper",
  icon: "p-message-icon",
  text: "p-message-text",
  closeButton: "p-message-close p-link",
  closeIcon: "p-message-close-icon"
};
var _useStyle$2 = useStyle(styles$2, {
  name: "message",
  manual: true
}), loadStyle$2 = _useStyle$2.load;
var script$1$2 = {
  name: "BaseMessage",
  "extends": script$6$1,
  props: {
    severity: {
      type: String,
      "default": "info"
    },
    closable: {
      type: Boolean,
      "default": true
    },
    sticky: {
      type: Boolean,
      "default": true
    },
    life: {
      type: Number,
      "default": 3e3
    },
    icon: {
      type: String,
      "default": void 0
    },
    closeIcon: {
      type: String,
      "default": void 0
    },
    closeButtonProps: {
      type: null,
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
var script$4 = {
  name: "Message",
  "extends": script$1$2,
  emits: ["close"],
  timeout: null,
  data: function data2() {
    return {
      visible: true
    };
  },
  mounted: function mounted2() {
    if (!this.sticky) {
      this.closeAfterDelay();
    }
  },
  methods: {
    close: function close(event) {
      this.visible = false;
      this.$emit("close", event);
    },
    closeAfterDelay: function closeAfterDelay() {
      var _this = this;
      setTimeout(function() {
        _this.visible = false;
      }, this.life);
    }
  },
  computed: {
    iconComponent: function iconComponent() {
      return {
        info: script$3$1,
        success: script$5$1,
        warn: script$4$2,
        error: script$2$3
      }[this.severity];
    },
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    TimesIcon: script$l,
    InfoCircleIcon: script$3$1,
    CheckIcon: script$5$1,
    ExclamationTriangleIcon: script$4$2,
    TimesCircleIcon: script$2$3
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
var _hoisted_1$3 = ["aria-label"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TimesIcon = resolveComponent("TimesIcon");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createBlock(Transition, {
    name: "p-message",
    appear: ""
  }, {
    "default": withCtx(function() {
      return [withDirectives(createElementVNode("div", mergeProps({
        "class": _ctx.cx("root"),
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true"
      }, _ctx.ptm("root"), {
        "data-pc-name": "message"
      }), [createElementVNode("div", mergeProps({
        "class": _ctx.cx("wrapper")
      }, _ctx.ptm("wrapper")), [renderSlot(_ctx.$slots, "messageicon", {
        "class": "p-message-icon"
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : $options.iconComponent), mergeProps({
          "class": [_ctx.cx("icon"), _ctx.icon]
        }, _ctx.ptm("icon")), null, 16, ["class"]))];
      }), createElementVNode("div", mergeProps({
        "class": ["p-message-text", _ctx.cx("text")]
      }, _ctx.ptm("text")), [renderSlot(_ctx.$slots, "default")], 16), _ctx.closable ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
        key: 0,
        "class": _ctx.cx("closeButton"),
        "aria-label": $options.closeAriaLabel,
        type: "button",
        onClick: _cache[0] || (_cache[0] = function($event) {
          return $options.close($event);
        })
      }, _objectSpread(_objectSpread(_objectSpread({}, _ctx.closeButtonProps), _ctx.ptm("button")), _ctx.ptm("closeButton"))), [renderSlot(_ctx.$slots, "closeicon", {}, function() {
        return [_ctx.closeIcon ? (openBlock(), createElementBlock("i", mergeProps({
          key: 0,
          "class": [_ctx.cx("closeIcon"), _ctx.closeIcon]
        }, _objectSpread(_objectSpread({}, _ctx.ptm("buttonIcon")), _ctx.ptm("closeIcon"))), null, 16)) : (openBlock(), createBlock(_component_TimesIcon, mergeProps({
          key: 1,
          "class": [_ctx.cx("closeIcon"), _ctx.closeIcon]
        }, _objectSpread(_objectSpread({}, _ctx.ptm("buttonIcon")), _ctx.ptm("closeIcon"))), null, 16, ["class"]))];
      })], 16, _hoisted_1$3)), [[_directive_ripple]]) : createCommentVNode("", true)], 16)], 16), [[vShow, $data.visible]])];
    }),
    _: 3
  });
}
script$4.render = render$3;
var styles$1 = "\n.p-progressbar {\n    position: relative;\n    overflow: hidden;\n}\n\n.p-progressbar-determinate .p-progressbar-value {\n    height: 100%;\n    width: 0%;\n    position: absolute;\n    display: none;\n    border: 0 none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n}\n\n.p-progressbar-determinate .p-progressbar-label {\n    display: inline-flex;\n}\n\n.p-progressbar-determinate .p-progressbar-value-animate {\n    transition: width 1s ease-in-out;\n}\n\n.p-progressbar-indeterminate .p-progressbar-value::before {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.p-progressbar-indeterminate .p-progressbar-value::after {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    -webkit-animation-delay: 1.15s;\n    animation-delay: 1.15s;\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim {\n    0% {\n        left: -35%;\n        right: 100%;\n    }\n    60% {\n        left: 100%;\n        right: -90%;\n    }\n    100% {\n        left: 100%;\n        right: -90%;\n    }\n}\n@keyframes p-progressbar-indeterminate-anim {\n    0% {\n        left: -35%;\n        right: 100%;\n    }\n    60% {\n        left: 100%;\n        right: -90%;\n    }\n    100% {\n        left: 100%;\n        right: -90%;\n    }\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim-short {\n    0% {\n        left: -200%;\n        right: 100%;\n    }\n    60% {\n        left: 107%;\n        right: -8%;\n    }\n    100% {\n        left: 107%;\n        right: -8%;\n    }\n}\n@keyframes p-progressbar-indeterminate-anim-short {\n    0% {\n        left: -200%;\n        right: 100%;\n    }\n    60% {\n        left: 107%;\n        right: -8%;\n    }\n    100% {\n        left: 107%;\n        right: -8%;\n    }\n}\n";
var classes$1 = {
  root: function root4(_ref) {
    var instance = _ref.instance;
    return ["p-progressbar p-component", {
      "p-progressbar-determinate": instance.determinate,
      "p-progressbar-indeterminate": instance.indeterminate
    }];
  },
  container: "p-progressbar-indeterminate-container",
  value: "p-progressbar-value p-progressbar-value-animate",
  label: "p-progressbar-label"
};
var _useStyle$1 = useStyle(styles$1, {
  name: "progressbar",
  manual: true
}), loadStyle$1 = _useStyle$1.load;
var script$1$1 = {
  name: "BaseProgressBar",
  "extends": script$6$1,
  props: {
    value: {
      type: Number,
      "default": null
    },
    mode: {
      type: String,
      "default": "determinate"
    },
    showValue: {
      type: Boolean,
      "default": true
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
var script$3 = {
  name: "ProgressBar",
  "extends": script$1$1,
  computed: {
    progressStyle: function progressStyle() {
      return {
        width: this.value + "%",
        display: "flex"
      };
    },
    indeterminate: function indeterminate() {
      return this.mode === "indeterminate";
    },
    determinate: function determinate() {
      return this.mode === "determinate";
    }
  }
};
var _hoisted_1$2 = ["aria-valuenow"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    role: "progressbar",
    "class": _ctx.cx("root"),
    "aria-valuemin": "0",
    "aria-valuenow": _ctx.value,
    "aria-valuemax": "100"
  }, _ctx.ptm("root")), [$options.determinate ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("value"),
    style: $options.progressStyle
  }, _ctx.ptm("value")), [_ctx.value != null && _ctx.value !== 0 && _ctx.showValue ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("label")
  }, _ctx.ptm("label")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [createTextVNode(toDisplayString(_ctx.value + "%"), 1)];
  })], 16)) : createCommentVNode("", true)], 16)) : createCommentVNode("", true), $options.indeterminate ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("container")
  }, _ctx.ptm("container")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("value")
  }, _ctx.ptm("value")), null, 16)], 16)) : createCommentVNode("", true)], 16, _hoisted_1$2);
}
script$3.render = render$2;
var styles = "\n.p-fileupload-content {\n    position: relative;\n}\n\n.p-fileupload-content .p-progressbar {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.p-button.p-fileupload-choose {\n    position: relative;\n    overflow: hidden;\n}\n\n.p-fileupload-buttonbar {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.p-fileupload > input[type='file'],\n.p-fileupload-basic input[type='file'] {\n    display: none;\n}\n\n.p-fluid .p-fileupload .p-button {\n    width: auto;\n}\n\n.p-fileupload-file {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.p-fileupload-file-thumbnail {\n    flex-shrink: 0;\n}\n\n.p-fileupload-file-actions {\n    margin-left: auto;\n}\n";
var classes = {
  root: function root5(_ref) {
    var props = _ref.props;
    return ["p-fileupload p-fileupload-".concat(props.mode, " p-component")];
  },
  buttonbar: "p-fileupload-buttonbar",
  chooseButton: function chooseButton(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-button p-component p-fileupload-choose", {
      "p-fileupload-choose-selected": props.mode === "basic" && instance.hasFiles,
      "p-disabled": props.disabled,
      "p-focus": instance.focused
    }];
  },
  chooseIcon: "p-button-icon p-button-icon-left",
  chooseButtonLabel: "p-button-label",
  content: "p-fileupload-content",
  empty: "p-fileupload-empty",
  uploadIcon: "p-button-icon p-button-icon-left",
  label: "p-button-label",
  file: "p-fileupload-file",
  thumbnail: "p-fileupload-file-thumbnail",
  details: "p-fileupload-file-details",
  fileName: "p-fileupload-file-name",
  fileSize: "p-fileupload-file-size",
  badge: "p-fileupload-file-badge",
  actions: "p-fileupload-file-actions",
  removeButton: "p-fileupload-file-remove"
};
var _useStyle = useStyle(styles, {
  name: "fileupload",
  manual: true
}), loadStyle = _useStyle.load;
var script$2 = {
  name: "BaseFileUpload",
  "extends": script$6$1,
  props: {
    name: {
      type: String,
      "default": null
    },
    url: {
      type: String,
      "default": null
    },
    mode: {
      type: String,
      "default": "advanced"
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    accept: {
      type: String,
      "default": null
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    auto: {
      type: Boolean,
      "default": false
    },
    maxFileSize: {
      type: Number,
      "default": null
    },
    invalidFileSizeMessage: {
      type: String,
      "default": "{0}: Invalid file size, file size should be smaller than {1}."
    },
    invalidFileTypeMessage: {
      type: String,
      "default": "{0}: Invalid file type, allowed file types: {1}."
    },
    fileLimit: {
      type: Number,
      "default": null
    },
    invalidFileLimitMessage: {
      type: String,
      "default": "Maximum number of files exceeded, limit is {0} at most."
    },
    withCredentials: {
      type: Boolean,
      "default": false
    },
    previewWidth: {
      type: Number,
      "default": 50
    },
    chooseLabel: {
      type: String,
      "default": null
    },
    uploadLabel: {
      type: String,
      "default": null
    },
    cancelLabel: {
      type: String,
      "default": null
    },
    customUpload: {
      type: Boolean,
      "default": false
    },
    showUploadButton: {
      type: Boolean,
      "default": true
    },
    showCancelButton: {
      type: Boolean,
      "default": true
    },
    chooseIcon: {
      type: String,
      "default": void 0
    },
    uploadIcon: {
      type: String,
      "default": void 0
    },
    cancelIcon: {
      type: String,
      "default": void 0
    },
    style: null,
    "class": null
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
var script$1 = {
  name: "FileContent",
  hostName: "FileUpload",
  "extends": script$6$1,
  emits: ["remove"],
  props: {
    files: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    badgeSeverity: {
      type: String,
      "default": "warning"
    },
    badgeValue: {
      type: String,
      "default": null
    },
    previewWidth: {
      type: Number,
      "default": 50
    },
    templates: {
      type: null,
      "default": null
    }
  },
  methods: {
    formatSize: function formatSize(bytes) {
      if (bytes === 0) {
        return "0 B";
      }
      var k = 1e3, dm = 3, sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }
  },
  components: {
    FileUploadButton: script$2$1,
    FileUploadBadge: script$5$2,
    TimesIcon: script$l
  }
};
var _hoisted_1$1 = ["alt", "src", "width"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FileUploadBadge = resolveComponent("FileUploadBadge");
  var _component_TimesIcon = resolveComponent("TimesIcon");
  var _component_FileUploadButton = resolveComponent("FileUploadButton");
  return openBlock(true), createElementBlock(Fragment, null, renderList($props.files, function(file, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: file.name + file.type + file.size,
      "class": _ctx.cx("file")
    }, _ctx.ptm("file")), [createElementVNode("img", mergeProps({
      role: "presentation",
      "class": _ctx.cx("thumbnail"),
      alt: file.name,
      src: file.objectURL,
      width: $props.previewWidth
    }, _ctx.ptm("thumbnail")), null, 16, _hoisted_1$1), createElementVNode("div", mergeProps({
      "class": _ctx.cx("details")
    }, _ctx.ptm("details")), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("fileName")
    }, _ctx.ptm("fileName")), toDisplayString(file.name), 17), createElementVNode("span", mergeProps({
      "class": _ctx.cx("fileSize")
    }, _ctx.ptm("fileSize")), toDisplayString($options.formatSize(file.size)), 17), createVNode(_component_FileUploadBadge, {
      value: $props.badgeValue,
      "class": normalizeClass(_ctx.cx("badge")),
      severity: $props.badgeSeverity,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("badge")
    }, null, 8, ["value", "class", "severity", "unstyled", "pt"])], 16), createElementVNode("div", mergeProps({
      "class": _ctx.cx("actions")
    }, _ctx.ptm("actions")), [createVNode(_component_FileUploadButton, {
      onClick: function onClick($event) {
        return _ctx.$emit("remove", index);
      },
      text: "",
      rounded: "",
      severity: "danger",
      "class": normalizeClass(_ctx.cx("removeButton")),
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("removeButton")
    }, {
      icon: withCtx(function(iconProps) {
        return [$props.templates.fileremoveicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.fileremoveicon), {
          key: 0,
          "class": normalizeClass(iconProps["class"]),
          file,
          index
        }, null, 8, ["class", "file", "index"])) : (openBlock(), createBlock(_component_TimesIcon, mergeProps({
          key: 1,
          "class": iconProps["class"],
          "aria-hidden": "true"
        }, _ctx.ptm("removeButton")["icon"]), null, 16, ["class"]))];
      }),
      _: 2
    }, 1032, ["onClick", "class", "unstyled", "pt"])], 16)], 16);
  }), 128);
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it["return"] != null)
        it["return"]();
    } finally {
      if (didErr)
        throw err;
    }
  } };
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
var script = {
  name: "FileUpload",
  "extends": script$2,
  emits: ["select", "uploader", "before-upload", "progress", "upload", "error", "before-send", "clear", "remove", "remove-uploaded-file"],
  duplicateIEEvent: false,
  data: function data3() {
    return {
      uploadedFileCount: 0,
      files: [],
      messages: [],
      focused: false,
      progress: null,
      uploadedFiles: []
    };
  },
  methods: {
    onFileSelect: function onFileSelect(event) {
      if (event.type !== "drop" && this.isIE11() && this.duplicateIEEvent) {
        this.duplicateIEEvent = false;
        return;
      }
      this.messages = [];
      this.files = this.files || [];
      var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      var _iterator = _createForOfIteratorHelper(files), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var file = _step.value;
          if (!this.isFileSelected(file)) {
            if (this.validate(file)) {
              if (this.isImage(file)) {
                file.objectURL = window.URL.createObjectURL(file);
              }
              this.files.push(file);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.$emit("select", {
        originalEvent: event,
        files: this.files
      });
      if (this.fileLimit) {
        this.checkFileLimit();
      }
      if (this.auto && this.hasFiles && !this.isFileLimitExceeded()) {
        this.upload();
      }
      if (event.type !== "drop" && this.isIE11()) {
        this.clearIEInput();
      } else {
        this.clearInputElement();
      }
    },
    choose: function choose() {
      this.$refs.fileInput.click();
    },
    upload: function upload() {
      var _this = this;
      if (this.customUpload) {
        if (this.fileLimit) {
          this.uploadedFileCount += this.files.length;
        }
        this.$emit("uploader", {
          files: this.files
        });
        this.clear();
      } else {
        var xhr = new XMLHttpRequest();
        var formData = new FormData();
        this.$emit("before-upload", {
          xhr,
          formData
        });
        var _iterator2 = _createForOfIteratorHelper(this.files), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var file = _step2.value;
            formData.append(this.name, file, file.name);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        xhr.upload.addEventListener("progress", function(event) {
          if (event.lengthComputable) {
            _this.progress = Math.round(event.loaded * 100 / event.total);
          }
          _this.$emit("progress", {
            originalEvent: event,
            progress: _this.progress
          });
        });
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            var _this$uploadedFiles;
            _this.progress = 0;
            if (xhr.status >= 200 && xhr.status < 300) {
              if (_this.fileLimit) {
                _this.uploadedFileCount += _this.files.length;
              }
              _this.$emit("upload", {
                xhr,
                files: _this.files
              });
            } else {
              _this.$emit("error", {
                xhr,
                files: _this.files
              });
            }
            (_this$uploadedFiles = _this.uploadedFiles).push.apply(_this$uploadedFiles, _toConsumableArray(_this.files));
            _this.clear();
          }
        };
        xhr.open("POST", this.url, true);
        this.$emit("before-send", {
          xhr,
          formData
        });
        xhr.withCredentials = this.withCredentials;
        xhr.send(formData);
      }
    },
    clear: function clear() {
      this.files = [];
      this.messages = null;
      this.$emit("clear");
      if (this.isAdvanced) {
        this.clearInputElement();
      }
    },
    onFocus: function onFocus2() {
      this.focused = true;
    },
    onBlur: function onBlur2() {
      this.focused = false;
    },
    isFileSelected: function isFileSelected(file) {
      if (this.files && this.files.length) {
        var _iterator3 = _createForOfIteratorHelper(this.files), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var sFile = _step3.value;
            if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size)
              return true;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return false;
    },
    isIE11: function isIE11() {
      return !!window["MSInputMethodContext"] && !!document["documentMode"];
    },
    validate: function validate(file) {
      if (this.accept && !this.isFileTypeValid(file)) {
        this.messages.push(this.invalidFileTypeMessage.replace("{0}", file.name).replace("{1}", this.accept));
        return false;
      }
      if (this.maxFileSize && file.size > this.maxFileSize) {
        this.messages.push(this.invalidFileSizeMessage.replace("{0}", file.name).replace("{1}", this.formatSize(this.maxFileSize)));
        return false;
      }
      return true;
    },
    isFileTypeValid: function isFileTypeValid(file) {
      var acceptableTypes = this.accept.split(",").map(function(type2) {
        return type2.trim();
      });
      var _iterator4 = _createForOfIteratorHelper(acceptableTypes), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var type = _step4.value;
          var acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
          if (acceptable) {
            return true;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return false;
    },
    getTypeClass: function getTypeClass(fileType) {
      return fileType.substring(0, fileType.indexOf("/"));
    },
    isWildcard: function isWildcard(fileType) {
      return fileType.indexOf("*") !== -1;
    },
    getFileExtension: function getFileExtension(file) {
      return "." + file.name.split(".").pop();
    },
    isImage: function isImage(file) {
      return /^image\//.test(file.type);
    },
    onDragEnter: function onDragEnter(event) {
      if (!this.disabled) {
        event.stopPropagation();
        event.preventDefault();
      }
    },
    onDragOver: function onDragOver(event) {
      if (!this.disabled) {
        this.$refs.content.setAttribute("data-p-highlight", true);
        event.stopPropagation();
        event.preventDefault();
      }
    },
    onDragLeave: function onDragLeave() {
      if (!this.disabled) {
        this.$refs.content.setAttribute("data-p-highlight", false);
      }
    },
    onDrop: function onDrop(event) {
      if (!this.disabled) {
        this.$refs.content.setAttribute("data-p-highlight", false);
        event.stopPropagation();
        event.preventDefault();
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        var allowDrop = this.multiple || files && files.length === 1;
        if (allowDrop) {
          this.onFileSelect(event);
        }
      }
    },
    onBasicUploaderClick: function onBasicUploaderClick() {
      if (this.hasFiles)
        this.upload();
      else
        this.$refs.fileInput.click();
    },
    remove: function remove(index) {
      this.clearInputElement();
      var removedFile = this.files.splice(index, 1)[0];
      this.files = _toConsumableArray(this.files);
      this.$emit("remove", {
        file: removedFile,
        files: this.files
      });
    },
    removeUploadedFile: function removeUploadedFile(index) {
      var removedFile = this.uploadedFiles.splice(index, 1)[0];
      this.uploadedFiles = _toConsumableArray(this.uploadedFiles);
      this.$emit("remove-uploaded-file", {
        file: removedFile,
        files: this.uploadedFiles
      });
    },
    clearInputElement: function clearInputElement() {
      this.$refs.fileInput.value = "";
    },
    clearIEInput: function clearIEInput() {
      if (this.$refs.fileInput) {
        this.duplicateIEEvent = true;
        this.$refs.fileInput.value = "";
      }
    },
    formatSize: function formatSize2(bytes) {
      if (bytes === 0) {
        return "0 B";
      }
      var k = 1e3, dm = 3, sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    },
    isFileLimitExceeded: function isFileLimitExceeded() {
      if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focused) {
        this.focused = false;
      }
      return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
    },
    checkFileLimit: function checkFileLimit() {
      if (this.isFileLimitExceeded()) {
        this.messages.push(this.invalidFileLimitMessage.replace("{0}", this.fileLimit.toString()));
      }
    },
    onMessageClose: function onMessageClose() {
      this.messages = null;
    }
  },
  computed: {
    isAdvanced: function isAdvanced() {
      return this.mode === "advanced";
    },
    isBasic: function isBasic() {
      return this.mode === "basic";
    },
    chooseButtonClass: function chooseButtonClass() {
      return [this.cx("chooseButton"), this["class"]];
    },
    basicChooseButtonLabel: function basicChooseButtonLabel() {
      return this.auto ? this.chooseButtonLabel : this.hasFiles ? this.files.map(function(f) {
        return f.name;
      }).join(", ") : this.chooseButtonLabel;
    },
    hasFiles: function hasFiles() {
      return this.files && this.files.length > 0;
    },
    hasUploadedFiles: function hasUploadedFiles() {
      return this.uploadedFiles && this.uploadedFiles.length > 0;
    },
    chooseDisabled: function chooseDisabled() {
      return this.disabled || this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
    },
    uploadDisabled: function uploadDisabled() {
      return this.disabled || !this.hasFiles || this.fileLimit && this.fileLimit < this.files.length;
    },
    cancelDisabled: function cancelDisabled() {
      return this.disabled || !this.hasFiles;
    },
    chooseButtonLabel: function chooseButtonLabel() {
      return this.chooseLabel || this.$primevue.config.locale.choose;
    },
    uploadButtonLabel: function uploadButtonLabel() {
      return this.uploadLabel || this.$primevue.config.locale.upload;
    },
    cancelButtonLabel: function cancelButtonLabel() {
      return this.cancelLabel || this.$primevue.config.locale.cancel;
    },
    completedLabel: function completedLabel() {
      return this.$primevue.config.locale.completed;
    },
    pendingLabel: function pendingLabel() {
      return this.$primevue.config.locale.pending;
    }
  },
  components: {
    FileUploadButton: script$2$1,
    FileUploadProgressBar: script$3,
    FileUploadMessage: script$4,
    FileContent: script$1,
    PlusIcon: script$2$2,
    UploadIcon: script$5,
    TimesIcon: script$l
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["multiple", "accept", "disabled"];
var _hoisted_2 = ["accept", "disabled", "multiple"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FileUploadButton = resolveComponent("FileUploadButton");
  var _component_FileUploadProgressBar = resolveComponent("FileUploadProgressBar");
  var _component_FileUploadMessage = resolveComponent("FileUploadMessage");
  var _component_FileContent = resolveComponent("FileContent");
  var _directive_ripple = resolveDirective("ripple");
  return $options.isAdvanced ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("root")
  }, _ctx.ptm("root"), {
    "data-pc-name": "fileupload"
  }), [createElementVNode("input", mergeProps({
    ref: "fileInput",
    type: "file",
    onChange: _cache[0] || (_cache[0] = function() {
      return $options.onFileSelect && $options.onFileSelect.apply($options, arguments);
    }),
    multiple: _ctx.multiple,
    accept: _ctx.accept,
    disabled: $options.chooseDisabled
  }, _ctx.ptm("input")), null, 16, _hoisted_1), createElementVNode("div", mergeProps({
    "class": _ctx.cx("buttonbar")
  }, _ctx.ptm("buttonbar")), [renderSlot(_ctx.$slots, "header", {
    files: $data.files,
    uploadedFiles: $data.uploadedFiles,
    chooseCallback: $options.choose,
    uploadCallback: $options.upload,
    clearCallback: $options.clear
  }, function() {
    return [withDirectives((openBlock(), createElementBlock("span", mergeProps({
      "class": $options.chooseButtonClass,
      style: _ctx.style,
      onClick: _cache[1] || (_cache[1] = function() {
        return $options.choose && $options.choose.apply($options, arguments);
      }),
      onKeydown: _cache[2] || (_cache[2] = withKeys(function() {
        return $options.choose && $options.choose.apply($options, arguments);
      }, ["enter"])),
      onFocus: _cache[3] || (_cache[3] = function() {
        return $options.onFocus && $options.onFocus.apply($options, arguments);
      }),
      onBlur: _cache[4] || (_cache[4] = function() {
        return $options.onBlur && $options.onBlur.apply($options, arguments);
      }),
      tabindex: "0"
    }, _ctx.ptm("chooseButton")), [renderSlot(_ctx.$slots, "chooseicon", {
      "class": normalizeClass(_ctx.cx("chooseIcon"))
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.chooseIcon ? "span" : "PlusIcon"), mergeProps({
        "class": [_ctx.cx("chooseIcon"), _ctx.chooseIcon],
        "aria-hidden": "true"
      }, _ctx.ptm("chooseIcon")), null, 16, ["class"]))];
    }), createElementVNode("span", mergeProps({
      "class": _ctx.cx("chooseButtonLabel")
    }, _ctx.ptm("chooseButtonLabel")), toDisplayString($options.chooseButtonLabel), 17)], 16)), [[_directive_ripple]]), _ctx.showUploadButton ? (openBlock(), createBlock(_component_FileUploadButton, {
      key: 0,
      label: $options.uploadButtonLabel,
      onClick: $options.upload,
      disabled: $options.uploadDisabled,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("uploadButton")
    }, {
      icon: withCtx(function(iconProps) {
        return [renderSlot(_ctx.$slots, "uploadicon", {}, function() {
          return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.uploadIcon ? "span" : "UploadIcon"), mergeProps({
            "class": [iconProps["class"], _ctx.uploadIcon],
            "aria-hidden": "true"
          }, _ctx.ptm("uploadButton")["icon"]), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 8, ["label", "onClick", "disabled", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.showCancelButton ? (openBlock(), createBlock(_component_FileUploadButton, {
      key: 1,
      label: $options.cancelButtonLabel,
      onClick: $options.clear,
      disabled: $options.cancelDisabled,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("cancelButton")
    }, {
      icon: withCtx(function(iconProps) {
        return [renderSlot(_ctx.$slots, "cancelicon", {}, function() {
          return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.cancelIcon ? "span" : "TimesIcon"), mergeProps({
            "class": [iconProps["class"], _ctx.cancelIcon],
            "aria-hidden": "true"
          }, _ctx.ptm("cancelButton")["icon"]), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 8, ["label", "onClick", "disabled", "unstyled", "pt"])) : createCommentVNode("", true)];
  })], 16), createElementVNode("div", mergeProps({
    ref: "content",
    "class": _ctx.cx("content"),
    onDragenter: _cache[5] || (_cache[5] = function() {
      return $options.onDragEnter && $options.onDragEnter.apply($options, arguments);
    }),
    onDragover: _cache[6] || (_cache[6] = function() {
      return $options.onDragOver && $options.onDragOver.apply($options, arguments);
    }),
    onDragleave: _cache[7] || (_cache[7] = function() {
      return $options.onDragLeave && $options.onDragLeave.apply($options, arguments);
    }),
    onDrop: _cache[8] || (_cache[8] = function() {
      return $options.onDrop && $options.onDrop.apply($options, arguments);
    })
  }, _ctx.ptm("content"), {
    "data-p-highlight": false
  }), [renderSlot(_ctx.$slots, "content", {
    files: $data.files,
    uploadedFiles: $data.uploadedFiles,
    removeUploadedFileCallback: $options.removeUploadedFile,
    removeFileCallback: $options.remove,
    progress: $data.progress,
    messages: $data.messages
  }, function() {
    return [$options.hasFiles ? (openBlock(), createBlock(_component_FileUploadProgressBar, {
      key: 0,
      value: $data.progress,
      showValue: false,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("progressbar")
    }, null, 8, ["value", "unstyled", "pt"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList($data.messages, function(msg) {
      return openBlock(), createBlock(_component_FileUploadMessage, {
        key: msg,
        severity: "error",
        onClose: $options.onMessageClose,
        unstyled: _ctx.unstyled,
        pt: _ctx.ptm("message")
      }, {
        "default": withCtx(function() {
          return [createTextVNode(toDisplayString(msg), 1)];
        }),
        _: 2
      }, 1032, ["onClose", "unstyled", "pt"]);
    }), 128)), $options.hasFiles ? (openBlock(), createBlock(_component_FileContent, {
      key: 1,
      files: $data.files,
      onRemove: $options.remove,
      badgeValue: $options.pendingLabel,
      previewWidth: _ctx.previewWidth,
      templates: _ctx.$slots,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["files", "onRemove", "badgeValue", "previewWidth", "templates", "unstyled", "pt"])) : createCommentVNode("", true), createVNode(_component_FileContent, {
      files: $data.uploadedFiles,
      onRemove: $options.removeUploadedFile,
      badgeValue: $options.completedLabel,
      badgeSeverity: "success",
      previewWidth: _ctx.previewWidth,
      templates: _ctx.$slots,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["files", "onRemove", "badgeValue", "previewWidth", "templates", "unstyled", "pt"])];
  }), _ctx.$slots.empty && !$options.hasFiles && !$options.hasUploadedFiles ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("empty")
  }, _ctx.ptm("empty")), [renderSlot(_ctx.$slots, "empty")], 16)) : createCommentVNode("", true)], 16)], 16)) : $options.isBasic ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("root")
  }, _ctx.ptm("root"), {
    "data-pc-name": "fileupload"
  }), [(openBlock(true), createElementBlock(Fragment, null, renderList($data.messages, function(msg) {
    return openBlock(), createBlock(_component_FileUploadMessage, {
      key: msg,
      severity: "error",
      onClose: $options.onMessageClose,
      unstyled: _ctx.unstyled,
      pt: _ctx.ptm("messages")
    }, {
      "default": withCtx(function() {
        return [createTextVNode(toDisplayString(msg), 1)];
      }),
      _: 2
    }, 1032, ["onClose", "unstyled", "pt"]);
  }), 128)), withDirectives((openBlock(), createElementBlock("span", mergeProps({
    "class": $options.chooseButtonClass,
    style: _ctx.style,
    onMouseup: _cache[12] || (_cache[12] = function() {
      return $options.onBasicUploaderClick && $options.onBasicUploaderClick.apply($options, arguments);
    }),
    onKeydown: _cache[13] || (_cache[13] = withKeys(function() {
      return $options.choose && $options.choose.apply($options, arguments);
    }, ["enter"])),
    onFocus: _cache[14] || (_cache[14] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[15] || (_cache[15] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    tabindex: "0"
  }, _ctx.ptm("chooseButton")), [!$options.hasFiles || _ctx.auto ? renderSlot(_ctx.$slots, "uploadicon", {
    key: 0,
    "class": normalizeClass(_ctx.cx("uploadIcon"))
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.uploadIcon ? "span" : "UploadIcon"), mergeProps({
      "class": [_ctx.cx("uploadIcon"), _ctx.uploadIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("uploadIcon")), null, 16, ["class"]))];
  }) : renderSlot(_ctx.$slots, "chooseicon", {
    key: 1,
    "class": normalizeClass(_ctx.cx("chooseIcon"))
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.chooseIcon ? "span" : "PlusIcon"), mergeProps({
      "class": [_ctx.cx("chooseIcon"), _ctx.chooseIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("chooseIcon")), null, 16, ["class"]))];
  }), createElementVNode("span", mergeProps({
    "class": _ctx.cx("label")
  }, _ctx.ptm("label")), toDisplayString($options.basicChooseButtonLabel), 17), !$options.hasFiles ? (openBlock(), createElementBlock("input", mergeProps({
    key: 2,
    ref: "fileInput",
    type: "file",
    accept: _ctx.accept,
    disabled: _ctx.disabled,
    multiple: _ctx.multiple,
    onChange: _cache[9] || (_cache[9] = function() {
      return $options.onFileSelect && $options.onFileSelect.apply($options, arguments);
    }),
    onFocus: _cache[10] || (_cache[10] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[11] || (_cache[11] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    })
  }, _ctx.ptm("input")), null, 16, _hoisted_2)) : createCommentVNode("", true)], 16)), [[_directive_ripple]])], 16)) : createCommentVNode("", true);
}
script.render = render;

export { script as a, script$6 as s };
//# sourceMappingURL=fileupload.esm-880463ee.mjs.map
