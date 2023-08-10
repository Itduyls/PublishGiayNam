import { openBlock, createElementBlock, mergeProps, createElementVNode, renderSlot, normalizeProps, guardReactiveProps, inject, ref, watch, resolveComponent, resolveDirective, unref, withCtx, createVNode, withDirectives, createBlock, createCommentVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { f as useStyle, D as DomHandler, s as script$6, _ as _export_sfc, e as useRuntimeConfig, d as useState, a as useRoute, b as useRouter, i as FilterMatchMode, j as FilterOperator } from '../server.mjs';
import { u as useCookie, d as decr, H as HeadBar, S as SideBar, L as LoginView, e as encr } from './LoginView-36c4fae0.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as script$8, s as script$4$1 } from './dialog.esm-d5eb41c3.mjs';
import { s as script$3 } from './toolbar.esm-5b0c3172.mjs';
import { s as script$4, a as script$7 } from './checkbox.esm-05dfc993.mjs';
import { s as script$i, a as script$e } from './paginator.esm-79cc5f95.mjs';
import { s as script$5 } from './index.esm-ab832c47.mjs';
import { s as script$2 } from './datatable.esm-ad1df276.mjs';
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
import './index.esm-c4d8e664.mjs';
import './index.esm-2c744238.mjs';
import 'cookie-es';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';

var styles = "\n/*!\n * Quill Editor v1.3.3\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n    box-sizing: border-box;\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 13px;\n    height: 100%;\n    margin: 0px;\n    position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n    visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n    pointer-events: none;\n}\n.ql-clipboard {\n    left: -100000px;\n    height: 1px;\n    overflow-y: hidden;\n    position: absolute;\n    top: 50%;\n}\n.ql-clipboard p {\n    margin: 0;\n    padding: 0;\n}\n.ql-editor {\n    box-sizing: border-box;\n    line-height: 1.42;\n    height: 100%;\n    outline: none;\n    overflow-y: auto;\n    padding: 12px 15px;\n    tab-size: 4;\n    -moz-tab-size: 4;\n    text-align: left;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n}\n.ql-editor > * {\n    cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n    margin: 0;\n    padding: 0;\n    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n    padding-left: 1.5rem;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n    list-style-type: none;\n}\n.ql-editor ul > li::before {\n    content: '\\2022';\n}\n.ql-editor ul[data-checked='true'],\n.ql-editor ul[data-checked='false'] {\n    pointer-events: none;\n}\n.ql-editor ul[data-checked='true'] > li *,\n.ql-editor ul[data-checked='false'] > li * {\n    pointer-events: all;\n}\n.ql-editor ul[data-checked='true'] > li::before,\n.ql-editor ul[data-checked='false'] > li::before {\n    color: #777;\n    cursor: pointer;\n    pointer-events: all;\n}\n.ql-editor ul[data-checked='true'] > li::before {\n    content: '\\2611';\n}\n.ql-editor ul[data-checked='false'] > li::before {\n    content: '\\2610';\n}\n.ql-editor li::before {\n    display: inline-block;\n    white-space: nowrap;\n    width: 1.2rem;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n    margin-left: -1.5rem;\n    margin-right: 0.3rem;\n    text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n    margin-left: 0.3rem;\n    margin-right: -1.5rem;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n    padding-left: 1.5rem;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n    padding-right: 1.5rem;\n}\n.ql-editor ol li {\n    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    counter-increment: list-0;\n}\n.ql-editor ol li:before {\n    content: counter(list-0, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n    counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n    content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-1 {\n    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n    counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n    content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-2 {\n    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n    counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n    content: counter(list-3, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-3 {\n    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n    counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n    content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-4 {\n    counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n    counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n    content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-5 {\n    counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n    counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n    content: counter(list-6, decimal) '. ';\n}\n.ql-editor ol li.ql-indent-6 {\n    counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n    counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n    content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor ol li.ql-indent-7 {\n    counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n    counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n    content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor ol li.ql-indent-8 {\n    counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n    counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n    content: counter(list-9, decimal) '. ';\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n    padding-left: 3rem;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n    padding-left: 4.5rem;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n    padding-right: 3rem;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n    padding-right: 4.5rem;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n    padding-left: 6rem;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n    padding-left: 7.5rem;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n    padding-right: 6rem;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n    padding-right: 7.5rem;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n    padding-left: 9rem;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n    padding-left: 10.5rem;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n    padding-right: 9rem;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n    padding-right: 10.5rem;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n    padding-left: 12rem;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n    padding-left: 13.5rem;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n    padding-right: 12rem;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n    padding-right: 13.5rem;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n    padding-left: 15rem;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n    padding-left: 16.5rem;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n    padding-right: 15rem;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n    padding-right: 16.5rem;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n    padding-left: 18rem;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n    padding-left: 19.5rem;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n    padding-right: 18rem;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n    padding-right: 19.5rem;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n    padding-left: 21rem;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n    padding-left: 22.5rem;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n    padding-right: 21rem;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n    padding-right: 22.5rem;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n    padding-left: 24rem;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n    padding-left: 25.5rem;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n    padding-right: 24rem;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n    padding-right: 25.5rem;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n    padding-left: 27rem;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n    padding-left: 28.5rem;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n    padding-right: 27rem;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n    padding-right: 28.5rem;\n}\n.ql-editor .ql-video {\n    display: block;\n    max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n    margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n    margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n    background-color: #000;\n}\n.ql-editor .ql-bg-red {\n    background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n    background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n    background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n    background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n    background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n    background-color: #93f;\n}\n.ql-editor .ql-color-white {\n    color: #fff;\n}\n.ql-editor .ql-color-red {\n    color: #e60000;\n}\n.ql-editor .ql-color-orange {\n    color: #f90;\n}\n.ql-editor .ql-color-yellow {\n    color: #ff0;\n}\n.ql-editor .ql-color-green {\n    color: #008a00;\n}\n.ql-editor .ql-color-blue {\n    color: #06c;\n}\n.ql-editor .ql-color-purple {\n    color: #93f;\n}\n.ql-editor .ql-font-serif {\n    font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n    font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n    font-size: 0.75rem;\n}\n.ql-editor .ql-size-large {\n    font-size: 1.5rem;\n}\n.ql-editor .ql-size-huge {\n    font-size: 2.5rem;\n}\n.ql-editor .ql-direction-rtl {\n    direction: rtl;\n    text-align: inherit;\n}\n.ql-editor .ql-align-center {\n    text-align: center;\n}\n.ql-editor .ql-align-justify {\n    text-align: justify;\n}\n.ql-editor .ql-align-right {\n    text-align: right;\n}\n.ql-editor.ql-blank::before {\n    color: rgba(0, 0, 0, 0.6);\n    content: attr(data-placeholder);\n    font-style: italic;\n    left: 15px;\n    pointer-events: none;\n    position: absolute;\n    right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n    clear: both;\n    content: '';\n    display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    display: inline-block;\n    float: left;\n    height: 24px;\n    padding: 3px 5px;\n    width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n    float: left;\n    height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n    outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type='file'],\n.ql-snow .ql-toolbar input.ql-image[type='file'] {\n    display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n    color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n    fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n    stroke: #06c;\n}\n@media (pointer: coarse) {\n    .ql-snow.ql-toolbar button:hover:not(.ql-active),\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n        color: #444;\n    }\n    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n        fill: #444;\n    }\n    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n        stroke: #444;\n    }\n}\n.ql-snow {\n    box-sizing: border-box;\n}\n.ql-snow * {\n    box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n    display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n    visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n    position: absolute;\n    transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n    cursor: pointer;\n    text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n    transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n    display: inline-block;\n    vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n    clear: both;\n    content: '';\n    display: table;\n}\n.ql-snow .ql-stroke {\n    fill: none;\n    stroke: #444;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n    fill: none;\n    stroke: #444;\n    stroke-miterlimit: 10;\n    stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n    fill: #444;\n}\n.ql-snow .ql-empty {\n    fill: none;\n}\n.ql-snow .ql-even {\n    fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n    stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n    opacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\n    display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n    display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n    display: none;\n}\n.ql-snow .ql-editor h1 {\n    font-size: 2rem;\n}\n.ql-snow .ql-editor h2 {\n    font-size: 1.5rem;\n}\n.ql-snow .ql-editor h3 {\n    font-size: 1.17rem;\n}\n.ql-snow .ql-editor h4 {\n    font-size: 1rem;\n}\n.ql-snow .ql-editor h5 {\n    font-size: 0.83rem;\n}\n.ql-snow .ql-editor h6 {\n    font-size: 0.67rem;\n}\n.ql-snow .ql-editor a {\n    text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n    border-left: 4px solid #ccc;\n    margin-bottom: 5px;\n    margin-top: 5px;\n    padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n    background-color: #f0f0f0;\n    border-radius: 3px;\n}\n.ql-snow .ql-editor pre {\n    white-space: pre-wrap;\n    margin-bottom: 5px;\n    margin-top: 5px;\n    padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n    font-size: 85%;\n    padding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\n    background-color: #23241f;\n    color: #f8f8f2;\n    overflow: visible;\n}\n.ql-snow .ql-editor img {\n    max-width: 100%;\n}\n.ql-snow .ql-picker {\n    color: #444;\n    display: inline-block;\n    float: left;\n    font-size: 14px;\n    font-weight: 500;\n    height: 24px;\n    position: relative;\n    vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n    cursor: pointer;\n    display: inline-block;\n    height: 100%;\n    padding-left: 8px;\n    padding-right: 2px;\n    position: relative;\n    width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n    display: inline-block;\n    line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n    background-color: #fff;\n    display: none;\n    min-width: 100%;\n    padding: 4px 8px;\n    position: absolute;\n    white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n    cursor: pointer;\n    display: block;\n    padding-bottom: 5px;\n    padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n    color: #ccc;\n    z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n    fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n    stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n    display: block;\n    margin-top: -1px;\n    top: 100%;\n    z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n    width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n    padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n    right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n    padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n    height: 24px;\n    width: 24px;\n    padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n    padding: 3px 5px;\n    width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n    border: 1px solid transparent;\n    float: left;\n    height: 16px;\n    margin: 2px;\n    padding: 0px;\n    width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n    position: absolute;\n    margin-top: -9px;\n    right: 0;\n    top: 50%;\n    width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\n    content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n    width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n    content: 'Normal';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {\n    content: 'Heading 1';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {\n    content: 'Heading 2';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {\n    content: 'Heading 3';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {\n    content: 'Heading 4';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {\n    content: 'Heading 5';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {\n    content: 'Heading 6';\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {\n    font-size: 2rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {\n    font-size: 1.5rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {\n    font-size: 1.17rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {\n    font-size: 1rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {\n    font-size: 0.83rem;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {\n    font-size: 0.67rem;\n}\n.ql-snow .ql-picker.ql-font {\n    width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n    content: 'Sans Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {\n    content: 'Serif';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {\n    content: 'Monospace';\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {\n    font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {\n    font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n    width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n    content: 'Normal';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {\n    content: 'Small';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {\n    content: 'Large';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {\n    content: 'Huge';\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {\n    font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {\n    font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {\n    font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n    background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n    background-color: #000;\n}\n.ql-toolbar.ql-snow {\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n    padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n    margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n    border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n    border: 1px solid transparent;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n    border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n    border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n    border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n    border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    box-shadow: 0px 0px 5px #ddd;\n    color: #444;\n    padding: 5px 12px;\n    white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n    content: 'Visit URL:';\n    line-height: 26px;\n    margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type='text'] {\n    display: none;\n    border: 1px solid #ccc;\n    font-size: 13px;\n    height: 26px;\n    margin: 0px;\n    padding: 3px 5px;\n    width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n    display: inline-block;\n    max-width: 200px;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n    border-right: 1px solid #ccc;\n    content: 'Edit';\n    margin-left: 16px;\n    padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n    content: 'Remove';\n    margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n    line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n    display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type='text'] {\n    display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n    border-right: 0px;\n    content: 'Save';\n    padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode='link']::before {\n    content: 'Enter link:';\n}\n.ql-snow .ql-tooltip[data-mode='formula']::before {\n    content: 'Enter formula:';\n}\n.ql-snow .ql-tooltip[data-mode='video']::before {\n    content: 'Enter video:';\n}\n.ql-snow a {\n    color: #06c;\n}\n.ql-container.ql-snow {\n    border: 1px solid #ccc;\n}\n";
var classes = {
  root: "p-editor-container",
  toolbar: "p-editor-toolbar",
  formats: "ql-formats",
  header: "ql-header",
  font: "ql-font",
  bold: "ql-bold",
  italic: "ql-italic",
  underline: "ql-underline",
  color: "ql-color",
  background: "ql-background",
  list: "ql-list",
  select: "ql-align",
  link: "ql-link",
  image: "ql-image",
  codeBlock: "ql-code-block",
  clean: "ql-clean",
  content: "p-editor-content"
};
var _useStyle = useStyle(styles, {
  name: "editor",
  manual: true
}), loadStyle = _useStyle.load;
var script$1 = {
  name: "BaseEditor",
  "extends": script$6,
  props: {
    modelValue: String,
    placeholder: String,
    readonly: Boolean,
    formats: Array,
    editorStyle: null,
    modules: null
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
var QuillJS = function() {
  try {
    return window.Quill;
  } catch (_unused) {
    return null;
  }
}();
var script = {
  name: "Editor",
  "extends": script$1,
  emits: ["update:modelValue", "text-change", "selection-change", "load"],
  data: function data() {
    return {
      reRenderColorKey: 0
    };
  },
  quill: null,
  watch: {
    modelValue: function modelValue(newValue, oldValue) {
      if (newValue !== oldValue && this.quill && !this.quill.hasFocus()) {
        this.reRenderColorKey++;
        this.renderValue(newValue);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    var configuration = {
      modules: _objectSpread({
        toolbar: this.$refs.toolbarElement
      }, this.modules),
      readOnly: this.readonly,
      theme: "snow",
      formats: this.formats,
      placeholder: this.placeholder
    };
    if (QuillJS) {
      this.quill = new QuillJS(this.$refs.editorElement, configuration);
      this.initQuill();
      this.handleLoad();
    } else {
      import('quill').then(function(module) {
        if (module && DomHandler.isExist(_this.$refs.editorElement)) {
          if (module["default"]) {
            _this.quill = new module["default"](_this.$refs.editorElement, configuration);
          } else {
            _this.quill = new module(_this.$refs.editorElement, configuration);
          }
          _this.initQuill();
        }
      }).then(function() {
        _this.handleLoad();
      });
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.quill = null;
  },
  methods: {
    renderValue: function renderValue(value) {
      if (this.quill) {
        if (value)
          this.quill.setContents(this.quill.clipboard.convert(value));
        else
          this.quill.setText("");
      }
    },
    initQuill: function initQuill() {
      var _this2 = this;
      this.renderValue(this.modelValue);
      this.quill.on("text-change", function(delta, oldContents, source) {
        if (source === "user") {
          var html = _this2.$refs.editorElement.children[0].innerHTML;
          var text = _this2.quill.getText().trim();
          if (html === "<p><br></p>") {
            html = "";
          }
          _this2.$emit("update:modelValue", html);
          _this2.$emit("text-change", {
            htmlValue: html,
            textValue: text,
            delta,
            source,
            instance: _this2.quill
          });
        }
      });
      this.quill.on("selection-change", function(range, oldRange, source) {
        var html = _this2.$refs.editorElement.children[0].innerHTML;
        var text = _this2.quill.getText().trim();
        _this2.$emit("selection-change", {
          htmlValue: html,
          textValue: text,
          range,
          oldRange,
          source,
          instance: _this2.quill
        });
      });
    },
    handleLoad: function handleLoad() {
      if (this.quill && this.quill.getModule("toolbar")) {
        this.$emit("load", {
          instance: this.quill
        });
      }
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptm("root"), {
    "data-pc-name": "editor"
  }), [createElementVNode("div", mergeProps({
    ref: "toolbarElement",
    "class": _ctx.cx("toolbar")
  }, _ctx.ptm("toolbar")), [renderSlot(_ctx.$slots, "toolbar", {}, function() {
    return [createElementVNode("span", mergeProps({
      "class": _ctx.cx("formats")
    }, _ctx.ptm("formats")), [createElementVNode("select", mergeProps({
      "class": _ctx.cx("header"),
      defaultValue: "0"
    }, _ctx.ptm("header")), [createElementVNode("option", mergeProps({
      value: "1"
    }, _ctx.ptm("option")), "Heading", 16), createElementVNode("option", mergeProps({
      value: "2"
    }, _ctx.ptm("option")), "Subheading", 16), createElementVNode("option", mergeProps({
      value: "0"
    }, _ctx.ptm("option")), "Normal", 16)], 16), createElementVNode("select", mergeProps({
      "class": _ctx.cx("font")
    }, _ctx.ptm("font")), [createElementVNode("option", normalizeProps(guardReactiveProps(_ctx.ptm("option"))), null, 16), createElementVNode("option", mergeProps({
      value: "serif"
    }, _ctx.ptm("option")), null, 16), createElementVNode("option", mergeProps({
      value: "monospace"
    }, _ctx.ptm("option")), null, 16)], 16)], 16), createElementVNode("span", mergeProps({
      "class": _ctx.cx("formats")
    }, _ctx.ptm("formats")), [createElementVNode("button", mergeProps({
      "class": _ctx.cx("bold"),
      type: "button"
    }, _ctx.ptm("bold")), null, 16), createElementVNode("button", mergeProps({
      "class": _ctx.cx("italic"),
      type: "button"
    }, _ctx.ptm("italic")), null, 16), createElementVNode("button", mergeProps({
      "class": _ctx.cx("underline"),
      type: "button"
    }, _ctx.ptm("underline")), null, 16)], 16), (openBlock(), createElementBlock("span", mergeProps({
      key: $data.reRenderColorKey,
      "class": _ctx.cx("formats")
    }, _ctx.ptm("formats")), [createElementVNode("select", mergeProps({
      "class": _ctx.cx("color")
    }, _ctx.ptm("color")), null, 16), createElementVNode("select", mergeProps({
      "class": _ctx.cx("background")
    }, _ctx.ptm("background")), null, 16)], 16)), createElementVNode("span", mergeProps({
      "class": _ctx.cx("formats")
    }, _ctx.ptm("formats")), [createElementVNode("button", mergeProps({
      "class": _ctx.cx("list"),
      value: "ordered",
      type: "button"
    }, _ctx.ptm("list")), null, 16), createElementVNode("button", mergeProps({
      "class": _ctx.cx("list"),
      value: "bullet",
      type: "button"
    }, _ctx.ptm("list")), null, 16), createElementVNode("select", mergeProps({
      "class": _ctx.cx("select")
    }, _ctx.ptm("select")), [createElementVNode("option", mergeProps({
      defaultValue: ""
    }, _ctx.ptm("option")), null, 16), createElementVNode("option", mergeProps({
      value: "center"
    }, _ctx.ptm("option")), null, 16), createElementVNode("option", mergeProps({
      value: "right"
    }, _ctx.ptm("option")), null, 16), createElementVNode("option", mergeProps({
      value: "justify"
    }, _ctx.ptm("option")), null, 16)], 16)], 16), createElementVNode("span", mergeProps({
      "class": _ctx.cx("formats")
    }, _ctx.ptm("formats")), [createElementVNode("button", mergeProps({
      "class": _ctx.cx("link"),
      type: "button"
    }, _ctx.ptm("link")), null, 16), createElementVNode("button", mergeProps({
      "class": _ctx.cx("image"),
      type: "button"
    }, _ctx.ptm("image")), null, 16), createElementVNode("button", mergeProps({
      "class": _ctx.cx("codeBlock"),
      type: "button"
    }, _ctx.ptm("codeBlock")), null, 16)], 16), createElementVNode("span", mergeProps({
      "class": _ctx.cx("formats")
    }, _ctx.ptm("formats")), [createElementVNode("button", mergeProps({
      "class": _ctx.cx("clean"),
      type: "button"
    }, _ctx.ptm("clean")), null, 16)], 16)];
  })], 16), createElementVNode("div", mergeProps({
    ref: "editorElement",
    "class": _ctx.cx("content"),
    style: _ctx.editorStyle
  }, _ctx.ptm("content")), null, 16)], 16);
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
    const isDynamicSQL = ref(false);
    ({
      headers: { Authorization: `Bearer ${storeToken.value}` }
    });
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      tags_name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }]
      }
    });
    const rules = {
      tags_name: {
        required,
        $errors: [
          {
            $property: "tags_name",
            $validator: "required",
            $message: "T\xEAn th\u1EBB Tag kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!"
          }
        ]
      }
    };
    const loadCount = () => {
      $fetch("/api/Proc/getData", {
        method: "POST",
        baseURL: basedomainURL,
        body: {
          str: encr(
            JSON.stringify({
              proc: "hrm_ca_tags_count",
              par: [
                { par: "user_id", va: storeUser.value.user_id },
                { par: "status", va: null }
              ]
            }),
            SecretKey,
            cryoptojs
          ).toString()
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let data = JSON.parse(response.data)[0];
        if (data.length > 0) {
          options.value.totalRecords = data[0].totalRecords;
          sttStamp.value = data[0].totalRecords + 1;
        }
      }).catch((error) => {
      });
    };
    const loadData = (rf) => {
      if (rf) {
        if (isDynamicSQL.value) {
          loadDataSQL();
          return false;
        }
        if (rf) {
          if (options.value.PageNo == 0) {
            loadCount();
          }
        }
        $fetch("/api/Proc/getData", {
          method: "POST",
          baseURL: basedomainURL,
          body: {
            str: encr(
              JSON.stringify({
                proc: "hrm_ca_tags_list",
                par: [
                  { par: "pageno", va: options.value.PageNo },
                  { par: "pagesize", va: options.value.PageSize },
                  { par: "user_id", va: storeUser.value.user_id },
                  { par: "status", va: null }
                ]
              }),
              SecretKey,
              cryoptojs
            ).toString()
          },
          headers: { Authorization: `Bearer ${storeToken.value}` }
        }).then((response) => {
          let data = JSON.parse(response.data)[0];
          if (isFirst.value)
            isFirst.value = false;
          data.forEach((element, i) => {
            element.STT = options.value.PageNo * options.value.PageSize + i + 1;
          });
          datalists.value = data;
          options.value.loading = false;
        }).catch((error) => {
          toast.error("T\u1EA3i d\u1EEF li\u1EC7u kh\xF4ng th\xE0nh c\xF4ng!");
          options.value.loading = false;
          if (error && error.status === 401) {
            swal.fire({
              text: "Phi\xEAn \u0111\u0103ng nh\u1EADp \u0111\xE3 h\u1EBFt h\u1EA1n, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
              confirmButtonText: "OK"
            });
          }
        });
      }
    };
    const onPage = (event) => {
      if (event.rows != options.value.PageSize) {
        options.value.PageSize = event.rows;
      }
      if (event.page == 0) {
        options.value.id = null;
        options.value.IsNext = true;
      } else if (event.page > options.value.PageNo + 1) {
        options.value.id = -1;
        options.value.IsNext = false;
      } else if (event.page > options.value.PageNo) {
        options.value.id = datalists.value[datalists.value.length - 1].tags_id;
        options.value.IsNext = true;
      } else if (event.page < options.value.PageNo) {
        options.value.id = datalists.value[0].tags_id;
        options.value.IsNext = false;
      }
      options.value.PageNo = event.page;
      loadData(true);
    };
    const tags = ref({
      tags_name: "",
      emote_file: "",
      status: true,
      is_order: 1
    });
    const selectedStamps = ref();
    const submitted = ref(false);
    const v$ = useVuelidate(rules, tags);
    const isSaveTem = ref(false);
    const datalists = ref();
    const basedomainURL = useRuntimeConfig().public.apiBase;
    const checkDelList = ref(false);
    const options = ref({
      IsNext: true,
      sort: "created_date",
      SearchText: "",
      PageNo: 0,
      PageSize: 20,
      loading: true,
      totalRecords: null
    });
    const headerDialog = ref();
    const displayBasic = ref(false);
    const openBasic = (str) => {
      submitted.value = false;
      tags.value = {
        tags_name: "",
        emote_file: "",
        status: true,
        is_order: sttStamp.value,
        organization_id: storeUser.value.organization_id,
        is_system: storeUser.value.is_admin ? true : false
      };
      checkIsmain.value = false;
      isSaveTem.value = false;
      headerDialog.value = str;
      displayBasic.value = true;
    };
    const closeDialog = () => {
      tags.value = {
        tags_name: "",
        emote_file: "",
        status: true,
        is_order: 1
      };
      displayBasic.value = false;
      loadData(true);
    };
    const sttStamp = ref(1);
    const saveData = (isFormValid) => {
      submitted.value = true;
      if (!isFormValid) {
        return;
      }
      if (tags.value.tags_name.length > 250) {
        swal.fire({
          title: "Error!",
          text: "T\xEAn th\u1EBB Tag kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1 250 k\xFD t\u1EF1!",
          icon: "error",
          confirmButtonText: "OK"
        });
        return;
      }
      let formData = new FormData();
      if (tags.value.countryside_fake)
        tags.value.countryside = tags.value.countryside_fake;
      formData.append("product_tags", JSON.stringify(tags.value));
      swal.fire({
        width: 110,
        didOpen: () => {
          swal.showLoading();
        }
      });
      if (!isSaveTem.value) {
        $fetch("/api/product_tags/add_product_tags", {
          method: "POST",
          baseURL: basedomainURL,
          body: {
            formData
          },
          headers: { Authorization: `Bearer ${storeToken.value}` }
        }).then((response) => {
          if (response.err != "1") {
            swal.close();
            toast.success("Th\xEAm th\u1EBB Tag th\xE0nh c\xF4ng!");
            loadData(true);
            closeDialog();
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
          swal.fire({
            title: "Error!",
            text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
            icon: "error",
            confirmButtonText: "OK"
          });
        });
      } else {
        $fetch("/api/product_tags/update_product_tags", {
          method: "put",
          baseURL: basedomainURL,
          body: {
            formData
          },
          headers: { Authorization: `Bearer ${storeToken.value}` }
        }).then((response) => {
          if (response.err != "1") {
            swal.close();
            toast.success("S\u1EEDa th\u1EBB Tag th\xE0nh c\xF4ng!");
            closeDialog();
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
          swal.fire({
            title: "Error!",
            text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
            icon: "error",
            confirmButtonText: "OK"
          });
        });
      }
    };
    const checkIsmain = ref(true);
    const editTem = (dataTem) => {
      submitted.value = false;
      tags.value = dataTem;
      if (tags.value.countryside)
        tags.value.countryside_fake = tags.value.countryside;
      if (tags.value.is_default) {
        checkIsmain.value = false;
      } else {
        checkIsmain.value = true;
      }
      headerDialog.value = "S\u1EEDa th\u1EBB Tag";
      isSaveTem.value = true;
      displayBasic.value = true;
    };
    const delTem = (Tem) => {
      swal.fire({
        title: "Th\xF4ng b\xE1o",
        text: "B\u1EA1n c\xF3 mu\u1ED1n xo\xE1 b\u1EA3n ghi n\xE0y kh\xF4ng!",
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
          $fetch("/api/product_tags/delete_product_tags", {
            method: "delete",
            baseURL: basedomainURL,
            body: Tem != null ? [Tem.tags_id] : 1,
            headers: { Authorization: `Bearer ${storeToken.value}` }
          }).then((response) => {
            swal.close();
            if (response.err != "1") {
              swal.close();
              toast.success("Xo\xE1 th\u1EBB Tag th\xE0nh c\xF4ng!");
              loadData(true);
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
                text: "Phi\xEAn \u0111\u0103ng nh\u1EADp \u0111\xE3 h\u1EBFt h\u1EA1n, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
                confirmButtonText: "OK"
              });
            }
          });
        }
      });
    };
    const onSort = (event) => {
      options.value.PageNo = 0;
      if (event.sortField == null) {
        isDynamicSQL.value = false;
        loadData(true);
      } else {
        options.value.sort = event.sortField + (event.sortOrder == 1 ? " ASC" : " DESC");
        if (event.sortField == "STT") {
          options.value.sort = "is_order" + (event.sortOrder == 1 ? " ASC" : " DESC");
        }
        isDynamicSQL.value = true;
        loadDataSQL();
      }
    };
    const checkFilter = ref(false);
    const filterSQL = ref([]);
    const isFirst = ref(true);
    const loadDataSQL = () => {
      datalists.value = [];
      let data = {
        id: "tags_id",
        sqlS: filterTrangthai.value != null ? filterTrangthai.value : null,
        sqlO: options.value.sort,
        Search: options.value.SearchText,
        PageNo: options.value.PageNo,
        PageSize: options.value.PageSize,
        next: true,
        sqlF: null,
        fieldSQLS: filterSQL.value
      };
      options.value.loading = true;
      $fetch("/api/product_SQL/Filter_product_tags", {
        method: "post",
        baseURL: basedomainURL,
        body: { data },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let dt = JSON.parse(response.data);
        let data2 = dt[0];
        if (data2.length > 0) {
          data2.forEach((element, i) => {
            element.STT = options.value.PageNo * options.value.PageSize + i + 1;
          });
          datalists.value = data2;
        } else {
          datalists.value = [];
        }
        if (isFirst.value)
          isFirst.value = false;
        options.value.loading = false;
        if (dt.length == 2) {
          options.value.totalRecords = dt[1][0].totalRecords;
        }
      }).catch((error) => {
        options.value.loading = false;
        toast.error("T\u1EA3i d\u1EEF li\u1EC7u kh\xF4ng th\xE0nh c\xF4ng!");
        if (error && error.status === 401) {
          swal.fire({
            title: "Th\xF4ng b\xE1o",
            text: "Phi\xEAn \u0111\u0103ng nh\u1EADp \u0111\xE3 h\u1EBFt h\u1EA1n, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
            icon: "error",
            confirmButtonText: "OK"
          });
        }
      });
    };
    const searchStamp = (event) => {
      if (event.code == "Enter") {
        if (options.value.SearchText == "") {
          isDynamicSQL.value = false;
          options.value.loading = true;
          loadData(true);
        } else {
          isDynamicSQL.value = true;
          options.value.loading = true;
          loadData(true);
        }
      }
    };
    const refreshStamp = () => {
      options.value.SearchText = null;
      filterTrangthai.value = null;
      options.value.loading = true;
      selectedStamps.value = [];
      isDynamicSQL.value = false;
      filterSQL.value = [];
      loadData(true);
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
      options.value.PageNo = 0;
      options.value.id = null;
      isDynamicSQL.value = true;
      loadDataSQL();
    };
    const onCheckBox = (value, check, checkIsmain2) => {
      if (check) {
        let data = {
          IntID: value.tags_id,
          TextID: value.tags_id + "",
          IntTrangthai: 1,
          BitTrangthai: value.status
        };
        $fetch("/api/product_tags/update_s_product_tags", {
          method: "post",
          baseURL: basedomainURL,
          body: { data },
          headers: { Authorization: `Bearer ${storeToken.value}` }
        }).then((response) => {
          if (response.err != "1") {
            swal.close();
            toast.success("S\u1EEDa tr\u1EA1ng th\xE1i th\u1EBB Tag th\xE0nh c\xF4ng!");
            loadData(true);
            closeDialog();
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
          swal.fire({
            title: "Error!",
            text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
            icon: "error",
            confirmButtonText: "OK"
          });
        });
      }
    };
    const deleteList = () => {
      let listId = new Array(selectedStamps.value.length);
      let checkD = false;
      selectedStamps.value.forEach((item) => {
        if (item.is_default) {
          toast.error("Kh\xF4ng \u0111\u01B0\u1EE3c x\xF3a th\u1EBB Tag m\u1EB7c \u0111\u1ECBnh!");
          checkD = true;
          return;
        }
      });
      if (!checkD) {
        swal.fire({
          title: "Th\xF4ng b\xE1o",
          text: "B\u1EA1n c\xF3 mu\u1ED1n xo\xE1 th\u1EBB Tag n\xE0y kh\xF4ng!",
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
            selectedStamps.value.forEach((item) => {
              listId.push(item.tags_id);
            });
            $fetch("/api/product_tags/delete_product_tags", {
              method: "delete",
              baseURL: basedomainURL,
              body: listId != null ? listId : 1,
              headers: { Authorization: `Bearer ${storeToken.value}` }
            }).then((response) => {
              swal.close();
              if (response.err != "1") {
                swal.close();
                toast.success("Xo\xE1 th\u1EBB Tag th\xE0nh c\xF4ng!");
                checkDelList.value = false;
                loadData(true);
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
                  title: "Error!",
                  text: "Phi\xEAn \u0111\u0103ng nh\u1EADp \u0111\xE3 h\u1EBFt h\u1EA1n, vui l\xF2ng \u0111\u0103ng nh\u1EADp l\u1EA1i!",
                  icon: "error",
                  confirmButtonText: "OK"
                });
              }
            });
          }
        });
      }
    };
    const trangThai = ref([
      { name: "Hi\u1EC3n th\u1ECB", code: 1 },
      { name: "Kh\xF4ng hi\u1EC3n th\u1ECB", code: 0 }
    ]);
    const filterTrangthai = ref();
    const reFilterEmail = () => {
      filterTrangthai.value = null;
      isDynamicSQL.value = false;
      checkFilter.value = false;
      filterSQL.value = [];
      options.value.SearchText = null;
      op.value.hide();
      loadData(true);
    };
    const filterFileds = () => {
      filterSQL.value = [];
      checkFilter.value = true;
      let filterS = {
        filterconstraints: [{ value: filterTrangthai.value, matchMode: "equals" }],
        filteroperator: "and",
        key: "status"
      };
      filterSQL.value.push(filterS);
      loadDataSQL();
    };
    watch(selectedStamps, () => {
      if (selectedStamps.value.length > 0) {
        checkDelList.value = true;
      } else {
        checkDelList.value = false;
      }
    });
    const op = ref();
    const toggle = (event) => {
      op.value.toggle(event);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-column flex-grow-1 h-full" }, _attrs))} data-v-cd05c742>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(HeadBar, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="body-layout flex flex-grow-1 w-full h-full" data-v-cd05c742>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(SideBar, { class: "shadow-1 h-full" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(storeLogin)) {
        _push(`<div data-v-cd05c742><div class="main-layout true flex-grow-1 p-2 pb-0 pr-0" data-v-cd05c742>`);
        _push(ssrRenderComponent(unref(script$2), {
          onPage: ($event) => onPage($event),
          onSort: ($event) => onSort($event),
          onFilter: ($event) => onFilter($event),
          filters: filters.value,
          "onUpdate:filters": ($event) => filters.value = $event,
          filterDisplay: "menu",
          filterMode: "lenient",
          scrollable: true,
          scrollHeight: "flex",
          showGridlines: true,
          columnResizeMode: "fit",
          lazy: true,
          totalRecords: options.value.totalRecords,
          loading: options.value.loading,
          reorderableColumns: true,
          value: datalists.value,
          removableSort: "",
          rows: options.value.PageSize,
          "onUpdate:rows": ($event) => options.value.PageSize = $event,
          paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
          rowsPerPageOptions: [20, 30, 50, 100, 200],
          paginator: true,
          dataKey: "tags_id",
          responsiveLayout: "scroll",
          selection: selectedStamps.value,
          "onUpdate:selection": ($event) => selectedStamps.value = $event,
          "row-hover": true
        }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="module-title mt-0 ml-1 mb-2" data-v-cd05c742${_scopeId}><i class="pi pi-credit-card" data-v-cd05c742${_scopeId}></i> Danh s\xE1ch th\u1EBB Tag (${ssrInterpolate(options.value.totalRecords)}) </h3>`);
              _push2(ssrRenderComponent(unref(script$3), { class: "w-full custoolbar" }, {
                start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="p-input-icon-left" data-v-cd05c742${_scopeId2}><i class="pi pi-search" data-v-cd05c742${_scopeId2}></i>`);
                    _push3(ssrRenderComponent(_component_InputText, {
                      modelValue: options.value.SearchText,
                      "onUpdate:modelValue": ($event) => options.value.SearchText = $event,
                      onKeyup: searchStamp,
                      type: "text",
                      spellcheck: "false",
                      placeholder: "T\xECm ki\u1EBFm",
                      class: "input-search pr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Button, mergeProps({
                      type: "button",
                      class: [
                        "ml-2",
                        filterTrangthai.value != null && checkFilter.value ? "" : "p-button-secondary p-button-outlined"
                      ],
                      icon: "pi pi-filter",
                      onClick: toggle,
                      "aria:haspopup": "true",
                      "aria-controls": "overlay_panel"
                    }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "B\u1ED9 l\u1ECDc")), null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(script$4), {
                      ref_key: "op",
                      ref: op,
                      appendTo: "body",
                      class: "p-0 m-0",
                      showCloseIcon: false,
                      id: "overlay_panel",
                      style: { "width": "300px" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="grid formgrid m-0" data-v-cd05c742${_scopeId3}><div class="flex field col-12 p-0" data-v-cd05c742${_scopeId3}><div class="col-4 text-left pt-2 p-0" style="${ssrRenderStyle({ "text-align": "left" })}" data-v-cd05c742${_scopeId3}> Tr\u1EA1ng th\xE1i </div><div class="col-8" data-v-cd05c742${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(script$i), {
                            class: "col-12 p-0 m-0",
                            modelValue: filterTrangthai.value,
                            "onUpdate:modelValue": ($event) => filterTrangthai.value = $event,
                            options: trangThai.value,
                            optionLabel: "name",
                            optionValue: "code",
                            placeholder: "Tr\u1EA1ng th\xE1i"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></div><div class="flex col-12 p-0" data-v-cd05c742${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(script$3), { class: "border-none surface-0 outline-none pb-0 w-full" }, {
                            start: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Button, {
                                  onClick: reFilterEmail,
                                  class: "p-button-outlined",
                                  label: "X\xF3a"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Button, {
                                    onClick: reFilterEmail,
                                    class: "p-button-outlined",
                                    label: "X\xF3a"
                                  })
                                ];
                              }
                            }),
                            end: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Button, {
                                  onClick: filterFileds,
                                  label: "L\u1ECDc"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Button, {
                                    onClick: filterFileds,
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
                            createVNode("div", { class: "grid formgrid m-0" }, [
                              createVNode("div", { class: "flex field col-12 p-0" }, [
                                createVNode("div", {
                                  class: "col-4 text-left pt-2 p-0",
                                  style: { "text-align": "left" }
                                }, " Tr\u1EA1ng th\xE1i "),
                                createVNode("div", { class: "col-8" }, [
                                  createVNode(unref(script$i), {
                                    class: "col-12 p-0 m-0",
                                    modelValue: filterTrangthai.value,
                                    "onUpdate:modelValue": ($event) => filterTrangthai.value = $event,
                                    options: trangThai.value,
                                    optionLabel: "name",
                                    optionValue: "code",
                                    placeholder: "Tr\u1EA1ng th\xE1i"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ])
                              ]),
                              createVNode("div", { class: "flex col-12 p-0" }, [
                                createVNode(unref(script$3), { class: "border-none surface-0 outline-none pb-0 w-full" }, {
                                  start: withCtx(() => [
                                    createVNode(_component_Button, {
                                      onClick: reFilterEmail,
                                      class: "p-button-outlined",
                                      label: "X\xF3a"
                                    })
                                  ]),
                                  end: withCtx(() => [
                                    createVNode(_component_Button, {
                                      onClick: filterFileds,
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
                    _push3(`</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "p-input-icon-left" }, [
                        createVNode("i", { class: "pi pi-search" }),
                        createVNode(_component_InputText, {
                          modelValue: options.value.SearchText,
                          "onUpdate:modelValue": ($event) => options.value.SearchText = $event,
                          onKeyup: searchStamp,
                          type: "text",
                          spellcheck: "false",
                          placeholder: "T\xECm ki\u1EBFm",
                          class: "input-search pr-2"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        withDirectives(createVNode(_component_Button, {
                          type: "button",
                          class: [
                            "ml-2",
                            filterTrangthai.value != null && checkFilter.value ? "" : "p-button-secondary p-button-outlined"
                          ],
                          icon: "pi pi-filter",
                          onClick: toggle,
                          "aria:haspopup": "true",
                          "aria-controls": "overlay_panel"
                        }, null, 8, ["class"]), [
                          [_directive_tooltip, "B\u1ED9 l\u1ECDc"]
                        ]),
                        createVNode(unref(script$4), {
                          ref_key: "op",
                          ref: op,
                          appendTo: "body",
                          class: "p-0 m-0",
                          showCloseIcon: false,
                          id: "overlay_panel",
                          style: { "width": "300px" }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "grid formgrid m-0" }, [
                              createVNode("div", { class: "flex field col-12 p-0" }, [
                                createVNode("div", {
                                  class: "col-4 text-left pt-2 p-0",
                                  style: { "text-align": "left" }
                                }, " Tr\u1EA1ng th\xE1i "),
                                createVNode("div", { class: "col-8" }, [
                                  createVNode(unref(script$i), {
                                    class: "col-12 p-0 m-0",
                                    modelValue: filterTrangthai.value,
                                    "onUpdate:modelValue": ($event) => filterTrangthai.value = $event,
                                    options: trangThai.value,
                                    optionLabel: "name",
                                    optionValue: "code",
                                    placeholder: "Tr\u1EA1ng th\xE1i"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ])
                              ]),
                              createVNode("div", { class: "flex col-12 p-0" }, [
                                createVNode(unref(script$3), { class: "border-none surface-0 outline-none pb-0 w-full" }, {
                                  start: withCtx(() => [
                                    createVNode(_component_Button, {
                                      onClick: reFilterEmail,
                                      class: "p-button-outlined",
                                      label: "X\xF3a"
                                    })
                                  ]),
                                  end: withCtx(() => [
                                    createVNode(_component_Button, {
                                      onClick: filterFileds,
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
                      ])
                    ];
                  }
                }),
                end: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (checkDelList.value) {
                      _push3(ssrRenderComponent(_component_Button, {
                        onClick: ($event) => deleteList(),
                        label: "X\xF3a",
                        icon: "pi pi-trash",
                        class: "mr-2 p-button-danger"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_Button, {
                      onClick: ($event) => openBasic("Th\xEAm th\u1EBB Tag"),
                      label: "Th\xEAm m\u1EDBi",
                      icon: "pi pi-plus",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Button, mergeProps({
                      onClick: refreshStamp,
                      class: "mr-2 p-button-outlined p-button-secondary",
                      icon: "pi pi-refresh"
                    }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "T\u1EA3i l\u1EA1i")), null, _parent3, _scopeId2));
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
                        onClick: ($event) => openBasic("Th\xEAm th\u1EBB Tag"),
                        label: "Th\xEAm m\u1EDBi",
                        icon: "pi pi-plus",
                        class: "mr-2"
                      }, null, 8, ["onClick"]),
                      withDirectives(createVNode(_component_Button, {
                        onClick: refreshStamp,
                        class: "mr-2 p-button-outlined p-button-secondary",
                        icon: "pi pi-refresh"
                      }, null, 512), [
                        [_directive_tooltip, "T\u1EA3i l\u1EA1i"]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("h3", { class: "module-title mt-0 ml-1 mb-2" }, [
                  createVNode("i", { class: "pi pi-credit-card" }),
                  createTextVNode(" Danh s\xE1ch th\u1EBB Tag (" + toDisplayString(options.value.totalRecords) + ") ", 1)
                ]),
                createVNode(unref(script$3), { class: "w-full custoolbar" }, {
                  start: withCtx(() => [
                    createVNode("span", { class: "p-input-icon-left" }, [
                      createVNode("i", { class: "pi pi-search" }),
                      createVNode(_component_InputText, {
                        modelValue: options.value.SearchText,
                        "onUpdate:modelValue": ($event) => options.value.SearchText = $event,
                        onKeyup: searchStamp,
                        type: "text",
                        spellcheck: "false",
                        placeholder: "T\xECm ki\u1EBFm",
                        class: "input-search pr-2"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      withDirectives(createVNode(_component_Button, {
                        type: "button",
                        class: [
                          "ml-2",
                          filterTrangthai.value != null && checkFilter.value ? "" : "p-button-secondary p-button-outlined"
                        ],
                        icon: "pi pi-filter",
                        onClick: toggle,
                        "aria:haspopup": "true",
                        "aria-controls": "overlay_panel"
                      }, null, 8, ["class"]), [
                        [_directive_tooltip, "B\u1ED9 l\u1ECDc"]
                      ]),
                      createVNode(unref(script$4), {
                        ref_key: "op",
                        ref: op,
                        appendTo: "body",
                        class: "p-0 m-0",
                        showCloseIcon: false,
                        id: "overlay_panel",
                        style: { "width": "300px" }
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "grid formgrid m-0" }, [
                            createVNode("div", { class: "flex field col-12 p-0" }, [
                              createVNode("div", {
                                class: "col-4 text-left pt-2 p-0",
                                style: { "text-align": "left" }
                              }, " Tr\u1EA1ng th\xE1i "),
                              createVNode("div", { class: "col-8" }, [
                                createVNode(unref(script$i), {
                                  class: "col-12 p-0 m-0",
                                  modelValue: filterTrangthai.value,
                                  "onUpdate:modelValue": ($event) => filterTrangthai.value = $event,
                                  options: trangThai.value,
                                  optionLabel: "name",
                                  optionValue: "code",
                                  placeholder: "Tr\u1EA1ng th\xE1i"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ])
                            ]),
                            createVNode("div", { class: "flex col-12 p-0" }, [
                              createVNode(unref(script$3), { class: "border-none surface-0 outline-none pb-0 w-full" }, {
                                start: withCtx(() => [
                                  createVNode(_component_Button, {
                                    onClick: reFilterEmail,
                                    class: "p-button-outlined",
                                    label: "X\xF3a"
                                  })
                                ]),
                                end: withCtx(() => [
                                  createVNode(_component_Button, {
                                    onClick: filterFileds,
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
                    ])
                  ]),
                  end: withCtx(() => [
                    checkDelList.value ? (openBlock(), createBlock(_component_Button, {
                      key: 0,
                      onClick: ($event) => deleteList(),
                      label: "X\xF3a",
                      icon: "pi pi-trash",
                      class: "mr-2 p-button-danger"
                    }, null, 8, ["onClick"])) : createCommentVNode("", true),
                    createVNode(_component_Button, {
                      onClick: ($event) => openBasic("Th\xEAm th\u1EBB Tag"),
                      label: "Th\xEAm m\u1EDBi",
                      icon: "pi pi-plus",
                      class: "mr-2"
                    }, null, 8, ["onClick"]),
                    withDirectives(createVNode(_component_Button, {
                      onClick: refreshStamp,
                      class: "mr-2 p-button-outlined p-button-secondary",
                      icon: "pi pi-refresh"
                    }, null, 512), [
                      [_directive_tooltip, "T\u1EA3i l\u1EA1i"]
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!isFirst.value) {
                _push2(`<div class="align-items-center justify-content-center p-4 text-center m-auto" data-v-cd05c742${_scopeId}><img${ssrRenderAttr("src", _imports_0)} height="144" data-v-cd05c742${_scopeId}><h3 class="m-1" data-v-cd05c742${_scopeId}>Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u</h3></div>`);
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
              if (unref(storeUser).is_admin == true) {
                _push2(ssrRenderComponent(unref(script$5), {
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:70px;height:50px",
                  bodyStyle: "text-align:center;max-width:70px",
                  selectionMode: "multiple",
                  style: { "width": "3%" }
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(script$5), {
                field: "STT",
                header: "STT",
                class: "align-items-center justify-content-center text-center",
                headerStyle: "text-align:center;max-width:70px;height:50px",
                bodyStyle: "text-align:center;max-width:70px",
                style: { "width": "3%" }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$5), {
                field: "tags_name",
                header: "T\xEAn th\u1EBB Tag",
                sortable: true,
                headerStyle: "text-align:left;height:50px",
                bodyStyle: "text-align:left"
              }, {
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
              _push2(ssrRenderComponent(unref(script$5), {
                field: "status",
                header: "Tr\u1EA1ng th\xE1i",
                headerStyle: "text-align:center;max-width:150px;height:50px",
                bodyStyle: "text-align:center;max-width:150px",
                class: "align-items-center justify-content-center text-center",
                style: { "width": "10%" }
              }, {
                body: withCtx((data, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(script$7), {
                      disabled: !(unref(storeUser).is_admin == true || unref(storeUser).user_id == data.data.created_by || unref(storeUser).role_id == "admin" && unref(storeUser).organization_id == data.data.organization_id),
                      binary: true,
                      modelValue: data.data.status,
                      "onUpdate:modelValue": ($event) => data.data.status = $event,
                      onClick: ($event) => onCheckBox(data.data, true)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(script$7), {
                        disabled: !(unref(storeUser).is_admin == true || unref(storeUser).user_id == data.data.created_by || unref(storeUser).role_id == "admin" && unref(storeUser).organization_id == data.data.organization_id),
                        binary: true,
                        modelValue: data.data.status,
                        "onUpdate:modelValue": ($event) => data.data.status = $event,
                        onClick: ($event) => onCheckBox(data.data, true)
                      }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$5), {
                header: "Ch\u1EE9c n\u0103ng",
                class: "align-items-center justify-content-center text-center",
                headerStyle: "text-align:center;max-width:150px;height:50px",
                bodyStyle: "text-align:center;max-width:150px",
                style: { "width": "10%" }
              }, {
                body: withCtx((Tem, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(storeUser).is_admin == true || unref(storeUser).user_id == Tem.data.created_by || unref(storeUser).role_id == "admin" && unref(storeUser).organization_id == Tem.data.organization_id) {
                      _push3(`<div data-v-cd05c742${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_Button, mergeProps({
                        onClick: ($event) => editTem(Tem.data),
                        class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                        type: "button",
                        icon: "pi pi-pencil"
                      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "S\u1EEDa", void 0, { top: true })), null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_Button, mergeProps({
                        class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                        type: "button",
                        icon: "pi pi-trash",
                        onClick: ($event) => delTem(Tem.data)
                      }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "X\xF3a", void 0, { top: true })), null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(storeUser).is_admin == true || unref(storeUser).user_id == Tem.data.created_by || unref(storeUser).role_id == "admin" && unref(storeUser).organization_id == Tem.data.organization_id ? (openBlock(), createBlock("div", { key: 0 }, [
                        withDirectives(createVNode(_component_Button, {
                          onClick: ($event) => editTem(Tem.data),
                          class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                          type: "button",
                          icon: "pi pi-pencil"
                        }, null, 8, ["onClick"]), [
                          [
                            _directive_tooltip,
                            "S\u1EEDa",
                            void 0,
                            { top: true }
                          ]
                        ]),
                        withDirectives(createVNode(_component_Button, {
                          class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                          type: "button",
                          icon: "pi pi-trash",
                          onClick: ($event) => delTem(Tem.data)
                        }, null, 8, ["onClick"]), [
                          [
                            _directive_tooltip,
                            "X\xF3a",
                            void 0,
                            { top: true }
                          ]
                        ])
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                unref(storeUser).is_admin == true ? (openBlock(), createBlock(unref(script$5), {
                  key: 0,
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:70px;height:50px",
                  bodyStyle: "text-align:center;max-width:70px",
                  selectionMode: "multiple",
                  style: { "width": "3%" }
                })) : createCommentVNode("", true),
                createVNode(unref(script$5), {
                  field: "STT",
                  header: "STT",
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:70px;height:50px",
                  bodyStyle: "text-align:center;max-width:70px",
                  style: { "width": "3%" }
                }),
                createVNode(unref(script$5), {
                  field: "tags_name",
                  header: "T\xEAn th\u1EBB Tag",
                  sortable: true,
                  headerStyle: "text-align:left;height:50px",
                  bodyStyle: "text-align:left"
                }, {
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
                createVNode(unref(script$5), {
                  field: "status",
                  header: "Tr\u1EA1ng th\xE1i",
                  headerStyle: "text-align:center;max-width:150px;height:50px",
                  bodyStyle: "text-align:center;max-width:150px",
                  class: "align-items-center justify-content-center text-center",
                  style: { "width": "10%" }
                }, {
                  body: withCtx((data) => [
                    createVNode(unref(script$7), {
                      disabled: !(unref(storeUser).is_admin == true || unref(storeUser).user_id == data.data.created_by || unref(storeUser).role_id == "admin" && unref(storeUser).organization_id == data.data.organization_id),
                      binary: true,
                      modelValue: data.data.status,
                      "onUpdate:modelValue": ($event) => data.data.status = $event,
                      onClick: ($event) => onCheckBox(data.data, true)
                    }, null, 8, ["disabled", "modelValue", "onUpdate:modelValue", "onClick"])
                  ]),
                  _: 1
                }),
                createVNode(unref(script$5), {
                  header: "Ch\u1EE9c n\u0103ng",
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:150px;height:50px",
                  bodyStyle: "text-align:center;max-width:150px",
                  style: { "width": "10%" }
                }, {
                  body: withCtx((Tem) => [
                    unref(storeUser).is_admin == true || unref(storeUser).user_id == Tem.data.created_by || unref(storeUser).role_id == "admin" && unref(storeUser).organization_id == Tem.data.organization_id ? (openBlock(), createBlock("div", { key: 0 }, [
                      withDirectives(createVNode(_component_Button, {
                        onClick: ($event) => editTem(Tem.data),
                        class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                        type: "button",
                        icon: "pi pi-pencil"
                      }, null, 8, ["onClick"]), [
                        [
                          _directive_tooltip,
                          "S\u1EEDa",
                          void 0,
                          { top: true }
                        ]
                      ]),
                      withDirectives(createVNode(_component_Button, {
                        class: "p-button-rounded p-button-secondary p-button-outlined mx-1",
                        type: "button",
                        icon: "pi pi-trash",
                        onClick: ($event) => delTem(Tem.data)
                      }, null, 8, ["onClick"]), [
                        [
                          _directive_tooltip,
                          "X\xF3a",
                          void 0,
                          { top: true }
                        ]
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(unref(script$8), {
          header: headerDialog.value,
          visible: displayBasic.value,
          "onUpdate:visible": ($event) => displayBasic.value = $event,
          style: { width: "55vw" },
          closable: true,
          modal: true
        }, {
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                label: "H\u1EE7y",
                icon: "pi pi-times",
                onClick: closeDialog,
                class: "p-button-outlined"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                label: "L\u01B0u",
                icon: "pi pi-check",
                onClick: ($event) => saveData(!unref(v$).$invalid),
                autofocus: ""
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Button, {
                  label: "H\u1EE7y",
                  icon: "pi pi-times",
                  onClick: closeDialog,
                  class: "p-button-outlined"
                }),
                createVNode(_component_Button, {
                  label: "L\u01B0u",
                  icon: "pi pi-check",
                  onClick: ($event) => saveData(!unref(v$).$invalid),
                  autofocus: ""
                }, null, 8, ["onClick"])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<form data-v-cd05c742${_scopeId}><div class="grid formgrid m-2" data-v-cd05c742${_scopeId}><div class="field col-12 md:col-12" data-v-cd05c742${_scopeId}><label class="col-3 text-left p-0" data-v-cd05c742${_scopeId}>T\xEAn th\u1EBB Tag <span class="redsao" data-v-cd05c742${_scopeId}>(*)</span></label>`);
              _push2(ssrRenderComponent(_component_InputText, {
                modelValue: tags.value.tags_name,
                "onUpdate:modelValue": ($event) => tags.value.tags_name = $event,
                spellcheck: "false",
                class: ["col-9 ip36 px-2", {
                  "p-invalid": unref(v$).tags_name.$invalid && submitted.value
                }]
              }, null, _parent2, _scopeId));
              _push2(`</div><div style="${ssrRenderStyle({ "display": "flex" })}" class="col-12 md:col-12" data-v-cd05c742${_scopeId}><div class="col-3 text-left" data-v-cd05c742${_scopeId}></div>`);
              if (unref(v$).tags_name.$invalid && submitted.value || unref(v$).tags_name.$pending.$response) {
                _push2(`<small class="col-9 p-error" data-v-cd05c742${_scopeId}><span class="col-12 field p-0" data-v-cd05c742${_scopeId}>${ssrInterpolate(unref(v$).tags_name.required.$message.replace("Value", "T\xEAn th\u1EBB Tag").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"))}</span></small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="field col-12 md:col-12" data-v-cd05c742${_scopeId}><label class="col-3 text-left p-0" data-v-cd05c742${_scopeId}>URL <span class="redsao" data-v-cd05c742${_scopeId}>(*)</span></label>`);
              _push2(ssrRenderComponent(_component_InputText, {
                modelValue: tags.value.url_path,
                "onUpdate:modelValue": ($event) => tags.value.url_path = $event,
                spellcheck: "false",
                class: ["col-9 ip36 px-2", {
                  "p-invalid": tags.value.url_path == null && submitted.value
                }]
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="field col-12 md:col-12" data-v-cd05c742${_scopeId}><label class="col-3 text-left p-0" data-v-cd05c742${_scopeId}>Ti\xEAu \u0111\u1EC1 </label>`);
              _push2(ssrRenderComponent(_component_InputText, {
                modelValue: tags.value.title_name,
                "onUpdate:modelValue": ($event) => tags.value.title_name = $event,
                spellcheck: "false",
                class: "col-9 ip36 px-2"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="field col-12 md:col-12" data-v-cd05c742${_scopeId}><label class="col-3 text-left p-0" data-v-cd05c742${_scopeId}>Header</label>`);
              _push2(ssrRenderComponent(unref(script), {
                modelValue: tags.value.descreption,
                "onUpdate:modelValue": ($event) => tags.value.descreption = $event,
                editorStyle: "height: 320px"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="col-12 field md:col-12 flex" data-v-cd05c742${_scopeId}><div class="field col-4 md:col-4 p-0 align-items-center flex" data-v-cd05c742${_scopeId}><div class="col-9 text-left p-0" data-v-cd05c742${_scopeId}>STT</div>`);
              _push2(ssrRenderComponent(unref(script$e), {
                modelValue: tags.value.is_order,
                "onUpdate:modelValue": ($event) => tags.value.is_order = $event,
                class: "col-3 ip36 p-0"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="field col-4 md:col-4 p-0 align-items-center flex" data-v-cd05c742${_scopeId}><div class="col-6 text-center p-0" data-v-cd05c742${_scopeId}>Tr\u1EA1ng th\xE1i</div>`);
              _push2(ssrRenderComponent(unref(script$4$1), {
                modelValue: tags.value.status,
                "onUpdate:modelValue": ($event) => tags.value.status = $event
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(storeUser).is_admin) {
                _push2(`<div class="field col-4 md:col-4 p-0 align-items-center flex" data-v-cd05c742${_scopeId}><div class="col-6 text-center p-0" data-v-cd05c742${_scopeId}>H\u1EC7 th\u1ED1ng</div>`);
                _push2(ssrRenderComponent(unref(script$4$1), {
                  modelValue: tags.value.is_system,
                  "onUpdate:modelValue": ($event) => tags.value.is_system = $event
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></form>`);
            } else {
              return [
                createVNode("form", null, [
                  createVNode("div", { class: "grid formgrid m-2" }, [
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-3 text-left p-0" }, [
                        createTextVNode("T\xEAn th\u1EBB Tag "),
                        createVNode("span", { class: "redsao" }, "(*)")
                      ]),
                      createVNode(_component_InputText, {
                        modelValue: tags.value.tags_name,
                        "onUpdate:modelValue": ($event) => tags.value.tags_name = $event,
                        spellcheck: "false",
                        class: ["col-9 ip36 px-2", {
                          "p-invalid": unref(v$).tags_name.$invalid && submitted.value
                        }]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", {
                      style: { "display": "flex" },
                      class: "col-12 md:col-12"
                    }, [
                      createVNode("div", { class: "col-3 text-left" }),
                      unref(v$).tags_name.$invalid && submitted.value || unref(v$).tags_name.$pending.$response ? (openBlock(), createBlock("small", {
                        key: 0,
                        class: "col-9 p-error"
                      }, [
                        createVNode("span", { class: "col-12 field p-0" }, toDisplayString(unref(v$).tags_name.required.$message.replace("Value", "T\xEAn th\u1EBB Tag").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng")), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-3 text-left p-0" }, [
                        createTextVNode("URL "),
                        createVNode("span", { class: "redsao" }, "(*)")
                      ]),
                      createVNode(_component_InputText, {
                        modelValue: tags.value.url_path,
                        "onUpdate:modelValue": ($event) => tags.value.url_path = $event,
                        spellcheck: "false",
                        class: ["col-9 ip36 px-2", {
                          "p-invalid": tags.value.url_path == null && submitted.value
                        }]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-3 text-left p-0" }, "Ti\xEAu \u0111\u1EC1 "),
                      createVNode(_component_InputText, {
                        modelValue: tags.value.title_name,
                        "onUpdate:modelValue": ($event) => tags.value.title_name = $event,
                        spellcheck: "false",
                        class: "col-9 ip36 px-2"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-3 text-left p-0" }, "Header"),
                      createVNode(unref(script), {
                        modelValue: tags.value.descreption,
                        "onUpdate:modelValue": ($event) => tags.value.descreption = $event,
                        editorStyle: "height: 320px"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-12 field md:col-12 flex" }, [
                      createVNode("div", { class: "field col-4 md:col-4 p-0 align-items-center flex" }, [
                        createVNode("div", { class: "col-9 text-left p-0" }, "STT"),
                        createVNode(unref(script$e), {
                          modelValue: tags.value.is_order,
                          "onUpdate:modelValue": ($event) => tags.value.is_order = $event,
                          class: "col-3 ip36 p-0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "field col-4 md:col-4 p-0 align-items-center flex" }, [
                        createVNode("div", { class: "col-6 text-center p-0" }, "Tr\u1EA1ng th\xE1i"),
                        createVNode(unref(script$4$1), {
                          modelValue: tags.value.status,
                          "onUpdate:modelValue": ($event) => tags.value.status = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      unref(storeUser).is_admin ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "field col-4 md:col-4 p-0 align-items-center flex"
                      }, [
                        createVNode("div", { class: "col-6 text-center p-0" }, "H\u1EC7 th\u1ED1ng"),
                        createVNode(unref(script$4$1), {
                          modelValue: tags.value.is_system,
                          "onUpdate:modelValue": ($event) => tags.value.is_system = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/system/tag/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd05c742"]]);

export { index as default };
//# sourceMappingURL=index-af6e7d98.mjs.map
