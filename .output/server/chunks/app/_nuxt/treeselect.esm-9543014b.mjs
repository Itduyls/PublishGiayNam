import { O as OverlayEventBus, s as script$1$2, a as script$5 } from './index.esm-c4d8e664.mjs';
import { f as useStyle, Z as ZIndexUtils, D as DomHandler, C as ConnectedOverlayScrollHandler, U as UniqueComponentId, R as Ripple, g as script$4$1, s as script$6, O as ObjectUtils, h as script$3$1 } from '../server.mjs';
import { s as script$8 } from './index.esm-5b5a4d3f.mjs';
import { b as script$5$1 } from './LoginView-36c4fae0.mjs';
import { s as script$7 } from './index.esm-2c744238.mjs';
import { openBlock, createElementBlock, mergeProps, resolveComponent, resolveDirective, createElementVNode, withDirectives, createBlock, resolveDynamicComponent, normalizeClass, createCommentVNode, Fragment, createTextVNode, toDisplayString, renderList, renderSlot, vModelText, createVNode, withCtx, Transition, createSlots } from 'vue';

var script$4 = {
  name: "MinusIcon",
  "extends": script$4$1
};
var _hoisted_1$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2$3 = [_hoisted_1$3];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2$3, 16);
}
script$4.render = render$3;
var styles$1 = "\n.p-tree-container {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    overflow: auto;\n}\n\n.p-treenode-children {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\n.p-tree-wrapper {\n    overflow: auto;\n}\n\n.p-treenode-selectable {\n    cursor: pointer;\n    user-select: none;\n}\n\n.p-tree-toggler {\n    cursor: pointer;\n    user-select: none;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    flex-shrink: 0;\n}\n\n.p-treenode-leaf > .p-treenode-content .p-tree-toggler {\n    visibility: hidden;\n}\n\n.p-treenode-content {\n    display: flex;\n    align-items: center;\n}\n\n.p-tree-filter {\n    width: 100%;\n}\n\n.p-tree-filter-container {\n    position: relative;\n    display: block;\n    width: 100%;\n}\n\n.p-tree-filter-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n}\n\n.p-tree-loading {\n    position: relative;\n    min-height: 4rem;\n}\n\n.p-tree .p-tree-loading-overlay {\n    position: absolute;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-tree-flex-scrollable {\n    display: flex;\n    flex: 1;\n    height: 100%;\n    flex-direction: column;\n}\n\n.p-tree-flex-scrollable .p-tree-wrapper {\n    flex: 1;\n}\n";
var classes$1 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-tree p-component", {
      "p-tree-selectable": props.selectionMode != null,
      "p-tree-loading": props.loading,
      "p-tree-flex-scrollable": props.scrollHeight === "flex"
    }];
  },
  loadingOverlay: "p-tree-loading-overlay p-component-overlay",
  loadingIcon: "p-tree-loading-icon",
  filterContainer: "p-tree-filter-container",
  input: "p-tree-filter p-inputtext p-component",
  searchIcon: "p-tree-filter-icon",
  wrapper: "p-tree-wrapper",
  container: "p-tree-container",
  node: function node(_ref2) {
    var instance = _ref2.instance;
    return ["p-treenode", {
      "p-treenode-leaf": instance.leaf
    }];
  },
  content: function content(_ref3) {
    var instance = _ref3.instance;
    return ["p-treenode-content", instance.node.styleClass, {
      "p-treenode-selectable": instance.selectable,
      "p-highlight": instance.checkboxMode ? instance.checked : instance.selected
    }];
  },
  toggler: "p-tree-toggler p-link",
  togglerIcon: "p-tree-toggler-icon",
  checkboxContainer: "p-checkbox p-component",
  checkbox: function checkbox(_ref4) {
    var instance = _ref4.instance;
    return ["p-checkbox-box", {
      "p-highlight": instance.checked,
      "p-indeterminate": instance.partialChecked
    }];
  },
  checkboxIcon: "p-checkbox-icon",
  nodeIcon: function nodeIcon(_ref5) {
    var instance = _ref5.instance;
    return ["p-treenode-icon", instance.node.icon];
  },
  label: "p-treenode-label",
  subgroup: "p-treenode-children"
};
var _useStyle$1 = useStyle(styles$1, {
  name: "tree",
  manual: true
}), loadStyle$1 = _useStyle$1.load;
var script$2 = {
  name: "BaseTree",
  "extends": script$6,
  props: {
    value: {
      type: null,
      "default": null
    },
    expandedKeys: {
      type: null,
      "default": null
    },
    selectionKeys: {
      type: null,
      "default": null
    },
    selectionMode: {
      type: String,
      "default": null
    },
    metaKeySelection: {
      type: Boolean,
      "default": true
    },
    loading: {
      type: Boolean,
      "default": false
    },
    loadingIcon: {
      type: String,
      "default": void 0
    },
    filter: {
      type: Boolean,
      "default": false
    },
    filterBy: {
      type: String,
      "default": "label"
    },
    filterMode: {
      type: String,
      "default": "lenient"
    },
    filterPlaceholder: {
      type: String,
      "default": null
    },
    filterLocale: {
      type: String,
      "default": void 0
    },
    scrollHeight: {
      type: String,
      "default": null
    },
    level: {
      type: Number,
      "default": 0
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
  provide: function provide() {
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
  return _typeof$1$1(key) === "symbol" ? key : String(key);
}
function _toPrimitive$1$1(input, hint) {
  if (_typeof$1$1(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$1$1(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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
var script$1$1 = {
  name: "TreeNode",
  hostName: "Tree",
  "extends": script$6,
  emits: ["node-toggle", "node-click", "checkbox-change"],
  props: {
    node: {
      type: null,
      "default": null
    },
    expandedKeys: {
      type: null,
      "default": null
    },
    selectionKeys: {
      type: null,
      "default": null
    },
    selectionMode: {
      type: String,
      "default": null
    },
    templates: {
      type: null,
      "default": null
    },
    level: {
      type: Number,
      "default": null
    },
    index: {
      type: Number,
      "default": null
    }
  },
  nodeTouched: false,
  toggleClicked: false,
  mounted: function mounted() {
    this.setAllNodesTabIndexes();
  },
  methods: {
    toggle: function toggle() {
      this.$emit("node-toggle", this.node);
      this.toggleClicked = true;
    },
    label: function label(node2) {
      return typeof node2.label === "function" ? node2.label() : node2.label;
    },
    onChildNodeToggle: function onChildNodeToggle(node2) {
      this.$emit("node-toggle", node2);
    },
    getPTOptions: function getPTOptions(key) {
      return this.ptm(key, {
        context: {
          index: this.index,
          expanded: this.expanded,
          selected: this.selected,
          checked: this.checked,
          leaf: this.leaf
        }
      });
    },
    onClick: function onClick(event) {
      if (this.toggleClicked || DomHandler.getAttribute(event.target, '[data-pc-section="toggler"]') || DomHandler.getAttribute(event.target.parentElement, '[data-pc-section="toggler"]')) {
        this.toggleClicked = false;
        return;
      }
      if (this.isCheckboxSelectionMode()) {
        this.toggleCheckbox();
      } else {
        this.$emit("node-click", {
          originalEvent: event,
          nodeTouched: this.nodeTouched,
          node: this.node
        });
      }
      this.nodeTouched = false;
    },
    onChildNodeClick: function onChildNodeClick(event) {
      this.$emit("node-click", event);
    },
    onTouchEnd: function onTouchEnd() {
      this.nodeTouched = true;
    },
    onKeyDown: function onKeyDown(event) {
      if (!this.isSameNode(event))
        return;
      switch (event.code) {
        case "Tab":
          this.onTabKey(event);
          break;
        case "ArrowDown":
          this.onArrowDown(event);
          break;
        case "ArrowUp":
          this.onArrowUp(event);
          break;
        case "ArrowRight":
          this.onArrowRight(event);
          break;
        case "ArrowLeft":
          this.onArrowLeft(event);
          break;
        case "Enter":
        case "Space":
          this.onEnterKey(event);
          break;
      }
    },
    onArrowDown: function onArrowDown(event) {
      var nodeElement = event.target.getAttribute("data-pc-section") === "toggler" ? event.target.closest('[role="treeitem"]') : event.target;
      var listElement = nodeElement.children[1];
      if (listElement) {
        this.focusRowChange(nodeElement, listElement.children[0]);
      } else {
        if (nodeElement.nextElementSibling) {
          this.focusRowChange(nodeElement, nodeElement.nextElementSibling);
        } else {
          var nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement);
          if (nextSiblingAncestor) {
            this.focusRowChange(nodeElement, nextSiblingAncestor);
          }
        }
      }
      event.preventDefault();
    },
    onArrowUp: function onArrowUp(event) {
      var nodeElement = event.target;
      if (nodeElement.previousElementSibling) {
        this.focusRowChange(nodeElement, nodeElement.previousElementSibling, this.findLastVisibleDescendant(nodeElement.previousElementSibling));
      } else {
        var parentNodeElement = this.getParentNodeElement(nodeElement);
        if (parentNodeElement) {
          this.focusRowChange(nodeElement, parentNodeElement);
        }
      }
      event.preventDefault();
    },
    onArrowRight: function onArrowRight(event) {
      var _this = this;
      if (this.leaf || this.expanded)
        return;
      event.currentTarget.tabIndex = -1;
      this.$emit("node-toggle", this.node);
      this.$nextTick(function() {
        _this.onArrowDown(event);
      });
    },
    onArrowLeft: function onArrowLeft(event) {
      var togglerElement = DomHandler.findSingle(event.currentTarget, '[data-pc-section="toggler"]');
      if (this.level === 0 && !this.expanded) {
        return false;
      }
      if (this.expanded && !this.leaf) {
        togglerElement.click();
        return false;
      }
      var target = this.findBeforeClickableNode(event.currentTarget);
      if (target) {
        this.focusRowChange(event.currentTarget, target);
      }
    },
    onEnterKey: function onEnterKey(event) {
      this.setTabIndexForSelectionMode(event, this.nodeTouched);
      this.onClick(event);
      event.preventDefault();
    },
    onTabKey: function onTabKey() {
      this.setAllNodesTabIndexes();
    },
    setAllNodesTabIndexes: function setAllNodesTabIndexes() {
      var nodes = DomHandler.find(this.$refs.currentNode.closest('[data-pc-section="container"]'), '[role="treeitem"]');
      var hasSelectedNode = _toConsumableArray$1(nodes).some(function(node2) {
        return node2.getAttribute("aria-selected") === "true" || node2.getAttribute("aria-checked") === "true";
      });
      _toConsumableArray$1(nodes).forEach(function(node2) {
        node2.tabIndex = -1;
      });
      if (hasSelectedNode) {
        var selectedNodes2 = _toConsumableArray$1(nodes).filter(function(node2) {
          return node2.getAttribute("aria-selected") === "true" || node2.getAttribute("aria-checked") === "true";
        });
        selectedNodes2[0].tabIndex = 0;
        return;
      }
      _toConsumableArray$1(nodes)[0].tabIndex = 0;
    },
    setTabIndexForSelectionMode: function setTabIndexForSelectionMode(event, nodeTouched) {
      if (this.selectionMode !== null) {
        var elements = _toConsumableArray$1(DomHandler.find(this.$refs.currentNode.parentElement, '[role="treeitem"]'));
        event.currentTarget.tabIndex = nodeTouched === false ? -1 : 0;
        if (elements.every(function(element) {
          return element.tabIndex === -1;
        })) {
          elements[0].tabIndex = 0;
        }
      }
    },
    focusRowChange: function focusRowChange(firstFocusableRow, currentFocusedRow, lastVisibleDescendant) {
      firstFocusableRow.tabIndex = "-1";
      currentFocusedRow.tabIndex = "0";
      this.focusNode(lastVisibleDescendant || currentFocusedRow);
    },
    findBeforeClickableNode: function findBeforeClickableNode(node2) {
      var parentListElement = node2.closest("ul").closest("li");
      if (parentListElement) {
        var prevNodeButton = DomHandler.findSingle(parentListElement, "button");
        if (prevNodeButton && prevNodeButton.style.visibility !== "hidden") {
          return parentListElement;
        }
        return this.findBeforeClickableNode(node2.previousElementSibling);
      }
      return null;
    },
    toggleCheckbox: function toggleCheckbox() {
      var _selectionKeys = this.selectionKeys ? _objectSpread$1$1({}, this.selectionKeys) : {};
      var _check = !this.checked;
      this.propagateDown(this.node, _check, _selectionKeys);
      this.$emit("checkbox-change", {
        node: this.node,
        check: _check,
        selectionKeys: _selectionKeys
      });
    },
    propagateDown: function propagateDown(node2, check, selectionKeys) {
      if (check)
        selectionKeys[node2.key] = {
          checked: true,
          partialChecked: false
        };
      else
        delete selectionKeys[node2.key];
      if (node2.children && node2.children.length) {
        var _iterator = _createForOfIteratorHelper$1(node2.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var child = _step.value;
            this.propagateDown(child, check, selectionKeys);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
    propagateUp: function propagateUp(event) {
      var check = event.check;
      var _selectionKeys = _objectSpread$1$1({}, event.selectionKeys);
      var checkedChildCount = 0;
      var childPartialSelected = false;
      var _iterator2 = _createForOfIteratorHelper$1(this.node.children), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var child = _step2.value;
          if (_selectionKeys[child.key] && _selectionKeys[child.key].checked)
            checkedChildCount++;
          else if (_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked)
            childPartialSelected = true;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (check && checkedChildCount === this.node.children.length) {
        _selectionKeys[this.node.key] = {
          checked: true,
          partialChecked: false
        };
      } else {
        if (!check) {
          delete _selectionKeys[this.node.key];
        }
        if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== this.node.children.length)
          _selectionKeys[this.node.key] = {
            checked: false,
            partialChecked: true
          };
        else
          delete _selectionKeys[this.node.key];
      }
      this.$emit("checkbox-change", {
        node: event.node,
        check: event.check,
        selectionKeys: _selectionKeys
      });
    },
    onChildCheckboxChange: function onChildCheckboxChange(event) {
      this.$emit("checkbox-change", event);
    },
    findNextSiblingOfAncestor: function findNextSiblingOfAncestor(nodeElement) {
      var parentNodeElement = this.getParentNodeElement(nodeElement);
      if (parentNodeElement) {
        if (parentNodeElement.nextElementSibling)
          return parentNodeElement.nextElementSibling;
        else
          return this.findNextSiblingOfAncestor(parentNodeElement);
      } else {
        return null;
      }
    },
    findLastVisibleDescendant: function findLastVisibleDescendant(nodeElement) {
      var childrenListElement = nodeElement.children[1];
      if (childrenListElement) {
        var lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
        return this.findLastVisibleDescendant(lastChildElement);
      } else {
        return nodeElement;
      }
    },
    getParentNodeElement: function getParentNodeElement(nodeElement) {
      var parentNodeElement = nodeElement.parentElement.parentElement;
      return DomHandler.getAttribute(parentNodeElement, "role") === "treeitem" ? parentNodeElement : null;
    },
    focusNode: function focusNode(element) {
      element.focus();
    },
    isCheckboxSelectionMode: function isCheckboxSelectionMode() {
      return this.selectionMode === "checkbox";
    },
    isSameNode: function isSameNode(event) {
      return event.currentTarget && (event.currentTarget.isSameNode(event.target) || event.currentTarget.isSameNode(event.target.closest('[role="treeitem"]')));
    }
  },
  computed: {
    hasChildren: function hasChildren() {
      return this.node.children && this.node.children.length > 0;
    },
    expanded: function expanded() {
      return this.expandedKeys && this.expandedKeys[this.node.key] === true;
    },
    leaf: function leaf() {
      return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    },
    selectable: function selectable() {
      return this.node.selectable === false ? false : this.selectionMode != null;
    },
    selected: function selected() {
      return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.node.key] === true : false;
    },
    checkboxMode: function checkboxMode() {
      return this.selectionMode === "checkbox" && this.node.selectable !== false;
    },
    checked: function checked() {
      return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].checked : false;
    },
    partialChecked: function partialChecked() {
      return this.selectionKeys ? this.selectionKeys[this.node.key] && this.selectionKeys[this.node.key].partialChecked : false;
    },
    ariaChecked: function ariaChecked() {
      return this.selectionMode === "single" || this.selectionMode === "multiple" ? this.selected : void 0;
    },
    ariaSelected: function ariaSelected() {
      return this.checkboxMode ? this.checked : void 0;
    }
  },
  components: {
    ChevronDownIcon: script$5,
    ChevronRightIcon: script$7,
    CheckIcon: script$5$1,
    MinusIcon: script$4
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1 = ["aria-label", "aria-selected", "aria-expanded", "aria-setsize", "aria-posinset", "aria-level", "aria-checked", "tabindex"];
var _hoisted_2$1 = ["data-p-highlight", "data-p-selectable"];
var _hoisted_3 = ["data-p-checked", "data-p-partialchecked"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TreeNode = resolveComponent("TreeNode", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("li", mergeProps({
    ref: "currentNode",
    "class": _ctx.cx("node"),
    role: "treeitem",
    "aria-label": $options.label($props.node),
    "aria-selected": $options.ariaSelected,
    "aria-expanded": $options.expanded,
    "aria-setsize": $props.node.children ? $props.node.children.length : 0,
    "aria-posinset": $props.index + 1,
    "aria-level": $props.level,
    "aria-checked": $options.ariaChecked,
    tabindex: $props.index === 0 ? 0 : -1,
    onKeydown: _cache[3] || (_cache[3] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, $props.level === 1 ? $options.getPTOptions("node") : _ctx.ptm("subgroup")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("content"),
    onClick: _cache[1] || (_cache[1] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    }),
    onTouchend: _cache[2] || (_cache[2] = function() {
      return $options.onTouchEnd && $options.onTouchEnd.apply($options, arguments);
    }),
    style: $props.node.style
  }, $options.getPTOptions("content"), {
    "data-p-highlight": $options.checkboxMode ? $options.checked : $options.selected,
    "data-p-selectable": $options.selectable
  }), [withDirectives((openBlock(), createElementBlock("button", mergeProps({
    type: "button",
    "class": _ctx.cx("toggler"),
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.toggle && $options.toggle.apply($options, arguments);
    }),
    tabindex: "-1",
    "aria-hidden": "true"
  }, $options.getPTOptions("toggler")), [$props.templates["togglericon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["togglericon"]), {
    key: 0,
    node: $props.node,
    expanded: $options.expanded,
    "class": normalizeClass(_ctx.cx("togglerIcon"))
  }, null, 8, ["node", "expanded", "class"])) : $options.expanded ? (openBlock(), createBlock(resolveDynamicComponent($props.node.expandedIcon ? "span" : "ChevronDownIcon"), mergeProps({
    key: 1,
    "class": _ctx.cx("togglerIcon")
  }, $options.getPTOptions("togglerIcon")), null, 16, ["class"])) : (openBlock(), createBlock(resolveDynamicComponent($props.node.collapsedIcon ? "span" : "ChevronRightIcon"), mergeProps({
    key: 2,
    "class": _ctx.cx("togglerIcon")
  }, $options.getPTOptions("togglerIcon")), null, 16, ["class"]))], 16)), [[_directive_ripple]]), $options.checkboxMode ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("checkboxContainer"),
    "aria-hidden": "true"
  }, $options.getPTOptions("checkboxContainer")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("checkbox"),
    role: "checkbox"
  }, $options.getPTOptions("checkbox"), {
    "data-p-checked": $options.checked,
    "data-p-partialchecked": $options.partialChecked
  }), [$props.templates["checkboxicon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["checkboxicon"]), {
    key: 0,
    checked: $options.checked,
    partialChecked: $options.partialChecked,
    "class": normalizeClass(_ctx.cx("checkboxIcon"))
  }, null, 8, ["checked", "partialChecked", "class"])) : (openBlock(), createBlock(resolveDynamicComponent($options.checked ? "CheckIcon" : $options.partialChecked ? "MinusIcon" : null), mergeProps({
    key: 1,
    "class": _ctx.cx("checkboxIcon")
  }, $options.getPTOptions("checkboxIcon")), null, 16, ["class"]))], 16, _hoisted_3)], 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
    "class": _ctx.cx("nodeIcon")
  }, $options.getPTOptions("nodeIcon")), null, 16), createElementVNode("span", mergeProps({
    "class": _ctx.cx("label")
  }, $options.getPTOptions("label")), [$props.templates[$props.node.type] || $props.templates["default"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates[$props.node.type] || $props.templates["default"]), {
    key: 0,
    node: $props.node
  }, null, 8, ["node"])) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [createTextVNode(toDisplayString($options.label($props.node)), 1)], 64))], 16)], 16, _hoisted_2$1), $options.hasChildren && $options.expanded ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 0,
    "class": _ctx.cx("subgroup"),
    role: "group"
  }, _ctx.ptm("subgroup")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.node.children, function(childNode) {
    return openBlock(), createBlock(_component_TreeNode, {
      key: childNode.key,
      node: childNode,
      templates: $props.templates,
      level: $props.level + 1,
      expandedKeys: $props.expandedKeys,
      onNodeToggle: $options.onChildNodeToggle,
      onNodeClick: $options.onChildNodeClick,
      selectionMode: $props.selectionMode,
      selectionKeys: $props.selectionKeys,
      onCheckboxChange: $options.propagateUp,
      pt: _ctx.pt
    }, null, 8, ["node", "templates", "level", "expandedKeys", "onNodeToggle", "onNodeClick", "selectionMode", "selectionKeys", "onCheckboxChange", "pt"]);
  }), 128))], 16)) : createCommentVNode("", true)], 16, _hoisted_1$1);
}
script$1$1.render = render$1;
function _typeof$2(obj) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$2(obj);
}
function _createForOfIteratorHelper$2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") {
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
var script$3 = {
  name: "Tree",
  "extends": script$2,
  emits: ["node-expand", "node-collapse", "update:expandedKeys", "update:selectionKeys", "node-select", "node-unselect"],
  data: function data() {
    return {
      d_expandedKeys: this.expandedKeys || {},
      filterValue: null
    };
  },
  watch: {
    expandedKeys: function expandedKeys(newValue) {
      this.d_expandedKeys = newValue;
    }
  },
  methods: {
    onNodeToggle: function onNodeToggle(node2) {
      var key = node2.key;
      if (this.d_expandedKeys[key]) {
        delete this.d_expandedKeys[key];
        this.$emit("node-collapse", node2);
      } else {
        this.d_expandedKeys[key] = true;
        this.$emit("node-expand", node2);
      }
      this.d_expandedKeys = _objectSpread$2({}, this.d_expandedKeys);
      this.$emit("update:expandedKeys", this.d_expandedKeys);
    },
    onNodeClick: function onNodeClick(event) {
      if (this.selectionMode != null && event.node.selectable !== false) {
        var metaSelection = event.nodeTouched ? false : this.metaKeySelection;
        var _selectionKeys = metaSelection ? this.handleSelectionWithMetaKey(event) : this.handleSelectionWithoutMetaKey(event);
        this.$emit("update:selectionKeys", _selectionKeys);
      }
    },
    onCheckboxChange: function onCheckboxChange(event) {
      this.$emit("update:selectionKeys", event.selectionKeys);
      if (event.check)
        this.$emit("node-select", event.node);
      else
        this.$emit("node-unselect", event.node);
    },
    handleSelectionWithMetaKey: function handleSelectionWithMetaKey(event) {
      var originalEvent = event.originalEvent;
      var node2 = event.node;
      var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      var selected2 = this.isNodeSelected(node2);
      var _selectionKeys;
      if (selected2 && metaKey) {
        if (this.isSingleSelectionMode()) {
          _selectionKeys = {};
        } else {
          _selectionKeys = _objectSpread$2({}, this.selectionKeys);
          delete _selectionKeys[node2.key];
        }
        this.$emit("node-unselect", node2);
      } else {
        if (this.isSingleSelectionMode()) {
          _selectionKeys = {};
        } else if (this.isMultipleSelectionMode()) {
          _selectionKeys = !metaKey ? {} : this.selectionKeys ? _objectSpread$2({}, this.selectionKeys) : {};
        }
        _selectionKeys[node2.key] = true;
        this.$emit("node-select", node2);
      }
      return _selectionKeys;
    },
    handleSelectionWithoutMetaKey: function handleSelectionWithoutMetaKey(event) {
      var node2 = event.node;
      var selected2 = this.isNodeSelected(node2);
      var _selectionKeys;
      if (this.isSingleSelectionMode()) {
        if (selected2) {
          _selectionKeys = {};
          this.$emit("node-unselect", node2);
        } else {
          _selectionKeys = {};
          _selectionKeys[node2.key] = true;
          this.$emit("node-select", node2);
        }
      } else {
        if (selected2) {
          _selectionKeys = _objectSpread$2({}, this.selectionKeys);
          delete _selectionKeys[node2.key];
          this.$emit("node-unselect", node2);
        } else {
          _selectionKeys = this.selectionKeys ? _objectSpread$2({}, this.selectionKeys) : {};
          _selectionKeys[node2.key] = true;
          this.$emit("node-select", node2);
        }
      }
      return _selectionKeys;
    },
    isSingleSelectionMode: function isSingleSelectionMode() {
      return this.selectionMode === "single";
    },
    isMultipleSelectionMode: function isMultipleSelectionMode() {
      return this.selectionMode === "multiple";
    },
    isNodeSelected: function isNodeSelected(node2) {
      return this.selectionMode && this.selectionKeys ? this.selectionKeys[node2.key] === true : false;
    },
    isChecked: function isChecked(node2) {
      return this.selectionKeys ? this.selectionKeys[node2.key] && this.selectionKeys[node2.key].checked : false;
    },
    isNodeLeaf: function isNodeLeaf(node2) {
      return node2.leaf === false ? false : !(node2.children && node2.children.length);
    },
    onFilterKeydown: function onFilterKeydown(event) {
      if (event.which === 13) {
        event.preventDefault();
      }
    },
    findFilteredNodes: function findFilteredNodes(node2, paramsWithoutNode) {
      if (node2) {
        var matched = false;
        if (node2.children) {
          var childNodes = _toConsumableArray$2(node2.children);
          node2.children = [];
          var _iterator = _createForOfIteratorHelper$2(childNodes), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var childNode = _step.value;
              var copyChildNode = _objectSpread$2({}, childNode);
              if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                matched = true;
                node2.children.push(copyChildNode);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (matched) {
          return true;
        }
      }
    },
    isFilterMatched: function isFilterMatched(node2, _ref) {
      var searchFields = _ref.searchFields, filterText = _ref.filterText, strict = _ref.strict;
      var matched = false;
      var _iterator2 = _createForOfIteratorHelper$2(searchFields), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var field = _step2.value;
          var fieldValue = String(ObjectUtils.resolveFieldData(node2, field)).toLocaleLowerCase(this.filterLocale);
          if (fieldValue.indexOf(filterText) > -1) {
            matched = true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (!matched || strict && !this.isNodeLeaf(node2)) {
        matched = this.findFilteredNodes(node2, {
          searchFields,
          filterText,
          strict
        }) || matched;
      }
      return matched;
    }
  },
  computed: {
    filteredValue: function filteredValue() {
      var filteredNodes = [];
      var searchFields = this.filterBy.split(",");
      var filterText = this.filterValue.trim().toLocaleLowerCase(this.filterLocale);
      var strict = this.filterMode === "strict";
      var _iterator3 = _createForOfIteratorHelper$2(this.value), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var node2 = _step3.value;
          var _node = _objectSpread$2({}, node2);
          var paramsWithoutNode = {
            searchFields,
            filterText,
            strict
          };
          if (strict && (this.findFilteredNodes(_node, paramsWithoutNode) || this.isFilterMatched(_node, paramsWithoutNode)) || !strict && (this.isFilterMatched(_node, paramsWithoutNode) || this.findFilteredNodes(_node, paramsWithoutNode))) {
            filteredNodes.push(_node);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return filteredNodes;
    },
    valueToRender: function valueToRender() {
      if (this.filterValue && this.filterValue.trim().length > 0)
        return this.filteredValue;
      else
        return this.value;
    }
  },
  components: {
    TreeNode: script$1$1,
    SearchIcon: script$8,
    SpinnerIcon: script$3$1
  }
};
var _hoisted_1$2 = ["placeholder"];
var _hoisted_2$2 = ["aria-labelledby", "aria-label"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_SearchIcon = resolveComponent("SearchIcon");
  var _component_TreeNode = resolveComponent("TreeNode");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptm("root"), {
    "data-pc-name": "tree"
  }), [_ctx.loading ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("loadingOverlay")
  }, _ctx.ptm("loadingOverlay")), [renderSlot(_ctx.$slots, "loadingicon", {
    "class": normalizeClass(_ctx.cx("loadingIcon"))
  }, function() {
    return [_ctx.loadingIcon ? (openBlock(), createElementBlock("i", mergeProps({
      key: 0,
      "class": [_ctx.cx("loadingIcon"), "pi-spin", _ctx.loadingIcon]
    }, _ctx.ptm("loadingIcon")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      spin: "",
      "class": _ctx.cx("loadingIcon")
    }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))];
  })], 16)) : createCommentVNode("", true), _ctx.filter ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("filterContainer")
  }, _ctx.ptm("filterContainer")), [withDirectives(createElementVNode("input", mergeProps({
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
      return $data.filterValue = $event;
    }),
    type: "text",
    autocomplete: "off",
    "class": _ctx.cx("input"),
    placeholder: _ctx.filterPlaceholder,
    onKeydown: _cache[1] || (_cache[1] = function() {
      return $options.onFilterKeydown && $options.onFilterKeydown.apply($options, arguments);
    })
  }, _ctx.ptm("input")), null, 16, _hoisted_1$2), [[vModelText, $data.filterValue]]), renderSlot(_ctx.$slots, "searchicon", {
    "class": normalizeClass(_ctx.cx("searchIcon"))
  }, function() {
    return [createVNode(_component_SearchIcon, mergeProps({
      "class": _ctx.cx("searchIcon")
    }, _ctx.ptm("searchIcon")), null, 16, ["class"])];
  })], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("wrapper"),
    style: {
      maxHeight: _ctx.scrollHeight
    }
  }, _ctx.ptm("wrapper")), [createElementVNode("ul", mergeProps({
    "class": _ctx.cx("container"),
    role: "tree",
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel
  }, _ctx.ptm("container")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.valueToRender, function(node2, index) {
    return openBlock(), createBlock(_component_TreeNode, {
      key: node2.key,
      node: node2,
      templates: _ctx.$slots,
      level: _ctx.level + 1,
      index,
      expandedKeys: $data.d_expandedKeys,
      onNodeToggle: $options.onNodeToggle,
      onNodeClick: $options.onNodeClick,
      selectionMode: _ctx.selectionMode,
      selectionKeys: _ctx.selectionKeys,
      onCheckboxChange: $options.onCheckboxChange,
      pt: _ctx.pt
    }, null, 8, ["node", "templates", "level", "index", "expandedKeys", "onNodeToggle", "onNodeClick", "selectionMode", "selectionKeys", "onCheckboxChange", "pt"]);
  }), 128))], 16, _hoisted_2$2)], 16)], 16);
}
script$3.render = render$2;
var styles = "\n.p-treeselect {\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n}\n\n.p-treeselect-trigger {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n}\n\n.p-treeselect-label-container {\n    overflow: hidden;\n    flex: 1 1 auto;\n    cursor: pointer;\n}\n\n.p-treeselect-label {\n    display: block;\n    white-space: nowrap;\n    cursor: pointer;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.p-treeselect-label-empty {\n    overflow: hidden;\n    visibility: hidden;\n}\n\n.p-treeselect-token {\n    cursor: default;\n    display: inline-flex;\n    align-items: center;\n    flex: 0 0 auto;\n}\n\n.p-treeselect .p-treeselect-panel {\n    min-width: 100%;\n}\n\n.p-treeselect-items-wrapper {\n    overflow: auto;\n}\n\n.p-fluid .p-treeselect {\n    display: flex;\n}\n";
var inlineStyles = {
  root: function root2(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === "self" ? "relative" : void 0
    };
  }
};
var classes = {
  root: function root3(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-treeselect p-component p-inputwrapper", {
      "p-treeselect-chip": props.display === "chip",
      "p-disabled": props.disabled,
      "p-focus": instance.focused,
      "p-inputwrapper-filled": !instance.emptyValue,
      "p-inputwrapper-focus": instance.focused || instance.overlayVisible
    }];
  },
  labelContainer: "p-treeselect-label-container",
  label: function label2(_ref3) {
    var instance = _ref3.instance, props = _ref3.props;
    return ["p-treeselect-label", {
      "p-placeholder": instance.label === props.placeholder,
      "p-treeselect-label-empty": !props.placeholder && instance.emptyValue
    }];
  },
  token: "p-treeselect-token",
  tokenLabel: "p-treeselect-token-label",
  trigger: "p-treeselect-trigger",
  triggerIcon: "p-treeselect-trigger-icon",
  panel: function panel(_ref4) {
    var instance = _ref4.instance;
    return ["p-treeselect-panel p-component", {
      "p-input-filled": instance.$primevue.config.inputStyle === "filled",
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }];
  },
  wrapper: "p-treeselect-items-wrapper",
  emptyMessage: "p-treeselect-empty-message"
};
var _useStyle = useStyle(styles, {
  name: "treeselect",
  manual: true
}), loadStyle = _useStyle.load;
var script$1 = {
  name: "BaseTreeSelect",
  "extends": script$6,
  props: {
    modelValue: null,
    options: Array,
    scrollHeight: {
      type: String,
      "default": "400px"
    },
    placeholder: {
      type: String,
      "default": null
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": null
    },
    selectionMode: {
      type: String,
      "default": "single"
    },
    appendTo: {
      type: String,
      "default": "body"
    },
    emptyMessage: {
      type: String,
      "default": null
    },
    display: {
      type: String,
      "default": "comma"
    },
    metaKeySelection: {
      type: Boolean,
      "default": true
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
    classes,
    inlineStyles,
    loadStyle
  },
  provide: function provide2() {
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
  name: "TreeSelect",
  "extends": script$1,
  emits: ["update:modelValue", "before-show", "before-hide", "change", "show", "hide", "node-select", "node-unselect", "node-expand", "node-collapse", "focus", "blur"],
  data: function data2() {
    return {
      focused: false,
      overlayVisible: false,
      expandedKeys: {}
    };
  },
  watch: {
    modelValue: {
      handler: function handler() {
        if (!this.selfChange) {
          this.updateTreeState();
        }
        this.selfChange = false;
      },
      immediate: true
    },
    options: function options() {
      this.updateTreeState();
    }
  },
  outsideClickListener: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  selfChange: false,
  selfClick: false,
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
  mounted: function mounted2() {
    this.updateTreeState();
  },
  methods: {
    show: function show() {
      this.$emit("before-show");
      this.overlayVisible = true;
    },
    hide: function hide() {
      this.$emit("before-hide");
      this.overlayVisible = false;
      this.$refs.focusInput.focus();
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit("blur", event);
    },
    onClick: function onClick2(event) {
      if (!this.disabled && (!this.overlay || !this.overlay.contains(event.target))) {
        if (this.overlayVisible)
          this.hide();
        else
          this.show();
        this.$refs.focusInput.focus();
      }
    },
    onSelectionChange: function onSelectionChange(keys) {
      this.selfChange = true;
      this.$emit("update:modelValue", keys);
      this.$emit("change", keys);
    },
    onNodeSelect: function onNodeSelect(node2) {
      this.$emit("node-select", node2);
      if (this.selectionMode === "single") {
        this.hide();
      }
    },
    onNodeUnselect: function onNodeUnselect(node2) {
      this.$emit("node-unselect", node2);
    },
    onNodeToggle: function onNodeToggle2(keys) {
      this.expandedKeys = keys;
    },
    onKeyDown: function onKeyDown2(event) {
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "Space":
        case "Enter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      var _this = this;
      if (this.overlayVisible)
        return;
      this.show();
      this.$nextTick(function() {
        var treeNodeEl = DomHandler.find(_this.$refs.tree.$el, '[data-pc-section="treeitem"]');
        var focusedElement = _toConsumableArray(treeNodeEl).find(function(item) {
          return item.getAttribute("tabindex") === "0";
        });
        DomHandler.focus(focusedElement);
      });
      event.preventDefault();
    },
    onEnterKey: function onEnterKey2(event) {
      if (this.overlayVisible) {
        this.hide();
      } else {
        this.onArrowDownKey(event);
      }
      event.preventDefault();
    },
    onEscapeKey: function onEscapeKey(event) {
      if (this.overlayVisible) {
        this.hide();
        event.preventDefault();
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
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.scrollValueInView();
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
      var _this2 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this2.overlayVisible && !_this2.selfClick && _this2.isOutsideClicked(event)) {
            _this2.hide();
          }
          _this2.selfClick = false;
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
      var _this3 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function() {
          if (_this3.overlayVisible) {
            _this3.hide();
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
            _this4.hide();
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
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
      this.selfClick = true;
    },
    onOverlayKeydown: function onOverlayKeydown(event) {
      if (event.code === "Escape")
        this.hide();
    },
    findSelectedNodes: function findSelectedNodes(node2, keys, selectedNodes2) {
      if (node2) {
        if (this.isSelected(node2, keys)) {
          selectedNodes2.push(node2);
          delete keys[node2.key];
        }
        if (Object.keys(keys).length && node2.children) {
          var _iterator = _createForOfIteratorHelper(node2.children), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var childNode = _step.value;
              this.findSelectedNodes(childNode, keys, selectedNodes2);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      } else {
        var _iterator2 = _createForOfIteratorHelper(this.options), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var _childNode = _step2.value;
            this.findSelectedNodes(_childNode, keys, selectedNodes2);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    },
    isSelected: function isSelected(node2, keys) {
      return this.selectionMode === "checkbox" ? keys[node2.key] && keys[node2.key].checked : keys[node2.key];
    },
    updateTreeState: function updateTreeState() {
      var keys = _objectSpread$1({}, this.modelValue);
      this.expandedKeys = {};
      if (keys && this.options) {
        this.updateTreeBranchState(null, null, keys);
      }
    },
    updateTreeBranchState: function updateTreeBranchState(node2, path, keys) {
      if (node2) {
        if (this.isSelected(node2, keys)) {
          this.expandPath(path);
          delete keys[node2.key];
        }
        if (Object.keys(keys).length && node2.children) {
          var _iterator3 = _createForOfIteratorHelper(node2.children), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var childNode = _step3.value;
              path.push(node2.key);
              this.updateTreeBranchState(childNode, path, keys);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } else {
        var _iterator4 = _createForOfIteratorHelper(this.options), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var _childNode2 = _step4.value;
            this.updateTreeBranchState(_childNode2, [], keys);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    },
    expandPath: function expandPath(path) {
      if (path.length > 0) {
        var _iterator5 = _createForOfIteratorHelper(path), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var key = _step5.value;
            this.expandedKeys[key] = true;
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    },
    scrollValueInView: function scrollValueInView() {
      if (this.overlay) {
        var selectedItem = DomHandler.findSingle(this.overlay, '[data-p-highlight="true"]');
        if (selectedItem) {
          selectedItem.scrollIntoView({
            block: "nearest",
            inline: "start"
          });
        }
      }
    }
  },
  computed: {
    selectedNodes: function selectedNodes() {
      var selectedNodes2 = [];
      if (this.modelValue && this.options) {
        var keys = _objectSpread$1({}, this.modelValue);
        this.findSelectedNodes(null, keys, selectedNodes2);
      }
      return selectedNodes2;
    },
    label: function label3() {
      var value = this.selectedNodes;
      return value.length ? value.map(function(node2) {
        return node2.label;
      }).join(", ") : this.placeholder;
    },
    emptyMessageText: function emptyMessageText() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage;
    },
    emptyValue: function emptyValue() {
      return !this.modelValue || Object.keys(this.modelValue).length === 0;
    },
    emptyOptions: function emptyOptions() {
      return !this.options || this.options.length === 0;
    },
    listId: function listId() {
      return UniqueComponentId() + "_list";
    }
  },
  components: {
    TSTree: script$3,
    Portal: script$1$2,
    ChevronDownIcon: script$5
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
var _hoisted_1 = ["id", "disabled", "tabindex", "aria-labelledby", "aria-label", "aria-expanded", "aria-controls"];
var _hoisted_2 = ["aria-expanded"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TSTree = resolveComponent("TSTree");
  var _component_Portal = resolveComponent("Portal");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root"),
    style: _ctx.sx("root"),
    onClick: _cache[7] || (_cache[7] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    })
  }, _ctx.ptm("root"), {
    "data-pc-name": "treeselect"
  }), [createElementVNode("div", mergeProps({
    "class": "p-hidden-accessible"
  }, _ctx.ptm("hiddenInputWrapper"), {
    "data-p-hidden-accessible": true
  }), [createElementVNode("input", mergeProps({
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    role: "combobox",
    "class": _ctx.inputClass,
    style: _ctx.inputStyle,
    readonly: "",
    disabled: _ctx.disabled,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-haspopup": "tree",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $options.listId,
    onFocus: _cache[0] || (_cache[0] = function($event) {
      return $options.onFocus($event);
    }),
    onBlur: _cache[1] || (_cache[1] = function($event) {
      return $options.onBlur($event);
    }),
    onKeydown: _cache[2] || (_cache[2] = function($event) {
      return $options.onKeyDown($event);
    })
  }, _objectSpread(_objectSpread({}, _ctx.inputProps), _ctx.ptm("hiddenInput"))), null, 16, _hoisted_1)], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("labelContainer")
  }, _ctx.ptm("labelContainer")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("label")
  }, _ctx.ptm("label")), [renderSlot(_ctx.$slots, "value", {
    value: $options.selectedNodes,
    placeholder: _ctx.placeholder
  }, function() {
    return [_ctx.display === "comma" ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createTextVNode(toDisplayString($options.label || "empty"), 1)], 64)) : _ctx.display === "chip" ? (openBlock(), createElementBlock(Fragment, {
      key: 1
    }, [(openBlock(true), createElementBlock(Fragment, null, renderList($options.selectedNodes, function(node2) {
      return openBlock(), createElementBlock("div", mergeProps({
        key: node2.key,
        "class": _ctx.cx("token")
      }, _ctx.ptm("token")), [createElementVNode("span", mergeProps({
        "class": _ctx.cx("tokenLabel")
      }, _ctx.ptm("tokenLabel")), toDisplayString(node2.label), 17)], 16);
    }), 128)), $options.emptyValue ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createTextVNode(toDisplayString(_ctx.placeholder || "empty"), 1)], 64)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)];
  })], 16)], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("trigger"),
    role: "button",
    "aria-haspopup": "tree",
    "aria-expanded": $data.overlayVisible
  }, _ctx.ptm("trigger")), [renderSlot(_ctx.$slots, "triggericon", {
    "class": normalizeClass(_ctx.cx("triggerIcon"))
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent("ChevronDownIcon"), mergeProps({
      "class": _ctx.cx("triggerIcon")
    }, _ctx.ptm("triggerIcon")), null, 16, ["class"]))];
  })], 16, _hoisted_2), createVNode(_component_Portal, {
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
            onClick: _cache[5] || (_cache[5] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            "class": [_ctx.cx("panel"), _ctx.panelClass],
            onKeydown: _cache[6] || (_cache[6] = function() {
              return $options.onOverlayKeydown && $options.onOverlayKeydown.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread({}, _ctx.panelProps), _ctx.ptm("panel"))), [renderSlot(_ctx.$slots, "header", {
            value: _ctx.modelValue,
            options: _ctx.options
          }), createElementVNode("div", mergeProps({
            "class": _ctx.cx("panel"),
            style: {
              "max-height": _ctx.scrollHeight
            }
          }, _ctx.ptm("wrapper")), [createVNode(_component_TSTree, {
            ref: "tree",
            id: $options.listId,
            value: _ctx.options,
            selectionMode: _ctx.selectionMode,
            "onUpdate:selectionKeys": $options.onSelectionChange,
            selectionKeys: _ctx.modelValue,
            expandedKeys: $data.expandedKeys,
            "onUpdate:expandedKeys": $options.onNodeToggle,
            metaKeySelection: _ctx.metaKeySelection,
            onNodeExpand: _cache[3] || (_cache[3] = function($event) {
              return _ctx.$emit("node-expand", $event);
            }),
            onNodeCollapse: _cache[4] || (_cache[4] = function($event) {
              return _ctx.$emit("node-collapse", $event);
            }),
            onNodeSelect: $options.onNodeSelect,
            onNodeUnselect: $options.onNodeUnselect,
            level: 0,
            unstyled: _ctx.unstyled,
            pt: _ctx.ptm("tree"),
            "data-pc-section": "tree"
          }, createSlots({
            _: 2
          }, [_ctx.$slots.itemtogglericon ? {
            name: "togglericon",
            fn: withCtx(function(iconProps) {
              return [renderSlot(_ctx.$slots, "itemtogglericon", {
                node: iconProps.node,
                expanded: iconProps.expanded,
                "class": normalizeClass(iconProps["class"])
              })];
            }),
            key: "0"
          } : void 0, _ctx.$slots.itemcheckboxicon ? {
            name: "checkboxicon",
            fn: withCtx(function(iconProps) {
              return [renderSlot(_ctx.$slots, "itemcheckboxicon", {
                checked: iconProps.checked,
                partialChecked: iconProps.partialChecked,
                "class": normalizeClass(iconProps["class"])
              })];
            }),
            key: "1"
          } : void 0]), 1032, ["id", "value", "selectionMode", "onUpdate:selectionKeys", "selectionKeys", "expandedKeys", "onUpdate:expandedKeys", "metaKeySelection", "onNodeSelect", "onNodeUnselect", "unstyled", "pt"]), $options.emptyOptions ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("emptyMessage")
          }, _ctx.ptm("emptyMessage")), [renderSlot(_ctx.$slots, "empty", {}, function() {
            return [createTextVNode(toDisplayString($options.emptyMessageText), 1)];
          })], 16)) : createCommentVNode("", true)], 16), renderSlot(_ctx.$slots, "footer", {
            value: _ctx.modelValue,
            options: _ctx.options
          })], 16)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 8, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16);
}
script.render = render;

export { script$4 as a, script as s };
//# sourceMappingURL=treeselect.esm-9543014b.mjs.map
