import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { _ as _export_sfc, e as useRuntimeConfig, a as useRoute, d as useState } from '../server.mjs';
import { inject, ref, withAsyncContext, resolveComponent, resolveDirective, unref, withCtx, createVNode, mergeProps, withDirectives, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { u as useAsyncData } from './asyncData-ff2c63f7.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_5 } from './favicon-f3de5ccb.mjs';
import { s as script } from './toolbar.esm-5b0c3172.mjs';
import { s as script$1 } from './sidebar.esm-b64f0d19.mjs';

const _sfc_main = {
  __name: "Headbar",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const swal = inject("$swal");
    const basedomainURL = useRuntimeConfig().public.apiBase;
    useRuntimeConfig().public.SecretKey;
    inject("cryptojs");
    const searchOptions = ref();
    const publicToken = useRuntimeConfig().public.publictoken;
    const modulehomes = ref([]);
    const route = useRoute();
    const currentLink = ref([]);
    const renderTree = (data, id, name, title) => {
      let arrChils = [];
      data.filter((x) => x.parent_id == null).forEach((m, i) => {
        if (m.is_link == route.params.tag) {
          currentLink.value.push(m);
        }
        let om = { key: m[id], data: m };
        const rechildren = (mm, pid) => {
          let dts = data.filter((x) => x.parent_id == pid);
          if (dts.length > 0) {
            if (!mm.children)
              mm.children = [];
            dts.forEach((em) => {
              if (em.is_link == route.params.tag) {
                currentLink.value.push(mm.data);
                currentLink.value.push(em);
              }
              let om1 = { key: em[id], data: em };
              rechildren(om1, em[id]);
              mm.children.push(om1);
            });
          }
        };
        rechildren(om, m[id]);
        arrChils.push(om);
      });
      return { arrChils };
    };
    [__temp, __restore] = withAsyncContext(() => useAsyncData(
      "sys_module_public",
      () => $fetch("/api/Proc/CallPublicProc", {
        method: "POST",
        baseURL: basedomainURL,
        body: {
          proc: "sys_module_public",
          par: [{ par: "status", va: true }],
          publictoken: publicToken
        }
      }).then((response) => {
        let data = JSON.parse(response.data);
        if (data[0].length > 0) {
          let obj = renderTree(data[0], "module_id");
          useState("modulehome", () => obj.arrChils);
          modulehomes.value = obj.arrChils;
        }
      }).catch((error) => {
        console.log("l\u1ED7i", error);
        swal.fire({
          title: "Error!",
          text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
          icon: "error",
          confirmButtonText: "OK"
        });
      })
    )), await __temp, __restore();
    const visibleLeft = ref(false);
    const onClickSidebarL = () => {
      visibleLeft.value = true;
    };
    const onClickSidebarLeft = (item) => {
      if (item.children) {
        if (document.getElementById("module_" + item.data.module_id).style.display == "none") {
          document.getElementById("module_" + item.data.module_id).style.display = "block";
        } else {
          document.getElementById("module_" + item.data.module_id).style.display = "none";
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_nuxt_link = __nuxt_component_0;
      const _directive_badge = resolveDirective("badge");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(script), { class: "w-full h-head-d1 border-none" }, {
        start: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-head2-main-left px-3 d-large-padding-left d-show-medium" data-v-aa431738${_scopeId}><a href="/" style="${ssrRenderStyle({ "text-decoration": "none", "color": "black" })}" data-v-aa431738${_scopeId}><div class="w-full flex align-items-center cursor-pointer" data-v-aa431738${_scopeId}><div class="pr-2" data-v-aa431738${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="favicon.png" class="d-icon-logo" data-v-aa431738${_scopeId}></div><div data-v-aa431738${_scopeId}><div class="flex" data-v-aa431738${_scopeId}><div class="font-bold d-text-logo" style="${ssrRenderStyle({ "font-family": "Arial, Helvetica, sans-serif" })}" data-v-aa431738${_scopeId}> GIAYNAM </div><div class="d-text-logo" style="${ssrRenderStyle({ "color": "green" })}" data-v-aa431738${_scopeId}>.com</div></div><div class="d-text-logo-md" style="${ssrRenderStyle({ "font-family": "Verdana, Geneva, Tahoma, sans-serif" })}" data-v-aa431738${_scopeId}> r\u1EA5t nhi\u1EC1u gi\xE0y \u0111\u1EB9p </div></div></div></a></div><div class="d-show-small" data-v-aa431738${_scopeId}><i class="pi pi-align-justify" style="${ssrRenderStyle({ "font-size": "2rem", "font-weight": "bold" })}" data-v-aa431738${_scopeId}></i></div>`);
          } else {
            return [
              createVNode("div", { class: "d-head2-main-left px-3 d-large-padding-left d-show-medium" }, [
                createVNode("a", {
                  href: "/",
                  style: { "text-decoration": "none", "color": "black" }
                }, [
                  createVNode("div", { class: "w-full flex align-items-center cursor-pointer" }, [
                    createVNode("div", { class: "pr-2" }, [
                      createVNode("img", {
                        src: _imports_5,
                        alt: "favicon.png",
                        class: "d-icon-logo"
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex" }, [
                        createVNode("div", {
                          class: "font-bold d-text-logo",
                          style: { "font-family": "Arial, Helvetica, sans-serif" }
                        }, " GIAYNAM "),
                        createVNode("div", {
                          class: "d-text-logo",
                          style: { "color": "green" }
                        }, ".com")
                      ]),
                      createVNode("div", {
                        class: "d-text-logo-md",
                        style: { "font-family": "Verdana, Geneva, Tahoma, sans-serif" }
                      }, " r\u1EA5t nhi\u1EC1u gi\xE0y \u0111\u1EB9p ")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "d-show-small" }, [
                createVNode("i", {
                  onClick: onClickSidebarL,
                  class: "pi pi-align-justify",
                  style: { "font-size": "2rem", "font-weight": "bold" }
                })
              ])
            ];
          }
        }),
        center: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full d-show-medium" data-v-aa431738${_scopeId}><span class="p-input-icon-right w-full" data-v-aa431738${_scopeId}><i class="pi pi-search" data-v-aa431738${_scopeId}></i>`);
            _push2(ssrRenderComponent(_component_InputText, {
              modelValue: searchOptions.value,
              "onUpdate:modelValue": ($event) => searchOptions.value = $event,
              placeholder: "T\xECm ki\u1EBFm tr\xEAn Giaynam...",
              class: "w-full h-3rem"
            }, null, _parent2, _scopeId));
            _push2(`</span></div><div class="d-show-small" data-v-aa431738${_scopeId}><a href="/" style="${ssrRenderStyle({ "text-decoration": "none", "color": "black" })}" data-v-aa431738${_scopeId}><div class="w-full flex align-items-center cursor-pointer" data-v-aa431738${_scopeId}><div class="pr-2" data-v-aa431738${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="favicon.png" style="${ssrRenderStyle({ "width": "24px" })}" data-v-aa431738${_scopeId}></div><div data-v-aa431738${_scopeId}><div class="flex" data-v-aa431738${_scopeId}><div class="font-bold d-text-logo" style="${ssrRenderStyle({ "font-family": "Arial, Helvetica, sans-serif", "font-size": "12px" })}" data-v-aa431738${_scopeId}> GIAYNAM </div><div class="d-text-logo" style="${ssrRenderStyle({ "color": "green", "font-size": "12px" })}" data-v-aa431738${_scopeId}> .com </div></div><div class="d-text-logo-md" style="${ssrRenderStyle({ "font-family": "Verdana, Geneva, Tahoma, sans-serif", "font-size": "9px" })}" data-v-aa431738${_scopeId}> r\u1EA5t nhi\u1EC1u gi\xE0y \u0111\u1EB9p </div></div></div></a></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full d-show-medium" }, [
                createVNode("span", { class: "p-input-icon-right w-full" }, [
                  createVNode("i", { class: "pi pi-search" }),
                  createVNode(_component_InputText, {
                    modelValue: searchOptions.value,
                    "onUpdate:modelValue": ($event) => searchOptions.value = $event,
                    placeholder: "T\xECm ki\u1EBFm tr\xEAn Giaynam...",
                    class: "w-full h-3rem"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", { class: "d-show-small" }, [
                createVNode("a", {
                  href: "/",
                  style: { "text-decoration": "none", "color": "black" }
                }, [
                  createVNode("div", { class: "w-full flex align-items-center cursor-pointer" }, [
                    createVNode("div", { class: "pr-2" }, [
                      createVNode("img", {
                        src: _imports_5,
                        alt: "favicon.png",
                        style: { "width": "24px" }
                      })
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "flex" }, [
                        createVNode("div", {
                          class: "font-bold d-text-logo",
                          style: { "font-family": "Arial, Helvetica, sans-serif", "font-size": "12px" }
                        }, " GIAYNAM "),
                        createVNode("div", {
                          class: "d-text-logo",
                          style: { "color": "green", "font-size": "12px" }
                        }, " .com ")
                      ]),
                      createVNode("div", {
                        class: "d-text-logo-md",
                        style: { "font-family": "Verdana, Geneva, Tahoma, sans-serif", "font-size": "9px" }
                      }, " r\u1EA5t nhi\u1EC1u gi\xE0y \u0111\u1EB9p ")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        end: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex align-items-center d-large-padding-right" data-v-aa431738${_scopeId}><div class="font-bold cursor-pointer text-lg d-show-medium" data-v-aa431738${_scopeId}> \u0110\u0103ng nh\u1EADp / \u0110\u0103ng k\xFD </div><div class="d-show-medium" data-v-aa431738${_scopeId}><div class="flex" data-v-aa431738${_scopeId}><div data-v-aa431738${_scopeId}><i class="pi pi-shopping-cart pt-1 cursor-pointer d-icon-header-r" data-v-aa431738${_scopeId}></i></div><div data-v-aa431738${_scopeId}><i${ssrRenderAttrs(mergeProps({ class: "pi pi-heart pt-1 cursor-pointer d-icon-header-r" }, ssrGetDirectiveProps(_ctx, _directive_badge, 2)))} data-v-aa431738${_scopeId}></i></div></div></div><div class="d-show-small" data-v-aa431738${_scopeId}><div class="flex" data-v-aa431738${_scopeId}><div style="${ssrRenderStyle({ "padding-right": "16px" })}" data-v-aa431738${_scopeId}><i${ssrRenderAttrs(mergeProps({ class: "pi pi-heart cursor-pointer d-icon-header-r" }, ssrGetDirectiveProps(_ctx, _directive_badge, 2)))} data-v-aa431738${_scopeId}></i></div><div data-v-aa431738${_scopeId}><i class="pi pi-shopping-cart cursor-pointer d-icon-header-r" data-v-aa431738${_scopeId}></i></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full flex align-items-center d-large-padding-right" }, [
                createVNode("div", { class: "font-bold cursor-pointer text-lg d-show-medium" }, " \u0110\u0103ng nh\u1EADp / \u0110\u0103ng k\xFD "),
                createVNode("div", { class: "d-show-medium" }, [
                  createVNode("div", { class: "flex" }, [
                    createVNode("div", null, [
                      createVNode("i", { class: "pi pi-shopping-cart pt-1 cursor-pointer d-icon-header-r" })
                    ]),
                    createVNode("div", null, [
                      withDirectives(createVNode("i", { class: "pi pi-heart pt-1 cursor-pointer d-icon-header-r" }, null, 512), [
                        [_directive_badge, 2]
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "d-show-small" }, [
                  createVNode("div", { class: "flex" }, [
                    createVNode("div", { style: { "padding-right": "16px" } }, [
                      withDirectives(createVNode("i", { class: "pi pi-heart cursor-pointer d-icon-header-r" }, null, 512), [
                        [_directive_badge, 2]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("i", { class: "pi pi-shopping-cart cursor-pointer d-icon-header-r" })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full d-show-medium" data-v-aa431738><div class="w-full h-3rem align-items-center flex justify-content-between d-head3-main" data-v-aa431738><ul class="menu" data-v-aa431738><!--[-->`);
      ssrRenderList(modulehomes.value, (item, index) => {
        _push(`<li class="font-bold text-lg" style="${ssrRenderStyle([
          { "display": "inline-block" },
          unref(route).params.tag == item.data.is_link ? "background-color:#d2f5ef;color:black" : item.children ? item.children.filter((x) => x.data.is_link == unref(route).params.tag).length == 1 ? "background-color:#d2f5ef;color:black" : "" : ""
        ])}" data-v-aa431738>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: item.data.is_link != "" ? { name: "danh-muc-tag", params: { tag: item.data.is_link } } : "/",
          style: { "color": "#fff", "font-family": "Arial, Helvetica, sans-serif" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="align-items-center d-menu-size" style="${ssrRenderStyle(
                unref(route).params.tag == item.data.is_link ? "background-color:#d2f5ef;color:black" : item.children ? item.children.filter(
                  (x) => x.data.is_link == unref(route).params.tag
                ).length == 1 ? "background-color:#d2f5ef;color:black" : "" : ""
              )}" data-v-aa431738${_scopeId}><span data-v-aa431738${_scopeId}>${ssrInterpolate(item.data.module_name)}</span>`);
              if (item.children) {
                _push2(`<span class="px-1" data-v-aa431738${_scopeId}><i class="pi pi-chevron-down" style="${ssrRenderStyle({ "font-size": "0.75rem" })}" data-v-aa431738${_scopeId}></i></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", {
                  class: "align-items-center d-menu-size",
                  style: unref(route).params.tag == item.data.is_link ? "background-color:#d2f5ef;color:black" : item.children ? item.children.filter(
                    (x) => x.data.is_link == unref(route).params.tag
                  ).length == 1 ? "background-color:#d2f5ef;color:black" : "" : ""
                }, [
                  createVNode("span", null, toDisplayString(item.data.module_name), 1),
                  item.children ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "px-1"
                  }, [
                    createVNode("i", {
                      class: "pi pi-chevron-down",
                      style: { "font-size": "0.75rem" }
                    })
                  ])) : createCommentVNode("", true)
                ], 4)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (item.children) {
          _push(`<ul class="submenu" data-v-aa431738><!--[-->`);
          ssrRenderList(item.children, (elem, indexa) => {
            _push(`<li style="${ssrRenderStyle([
              { "border-bottom": "1px solid #ccc" },
              unref(route).params.tag == elem.data.is_link ? "background-color:#d2f5ef;color:black" : ""
            ])}" data-v-aa431738>`);
            _push(ssrRenderComponent(_component_nuxt_link, {
              to: elem.data.is_link != "" ? {
                name: "danh-muc-tag",
                params: { tag: elem.data.is_link }
              } : "/",
              style: { "font-size": "14px" }
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span data-v-aa431738${_scopeId}>${ssrInterpolate(elem.data.module_name)}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(elem.data.module_name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="w-full d-show-small p-2" style="${ssrRenderStyle({ "background-color": "#009000" })}" data-v-aa431738><div class="w-full" data-v-aa431738><span class="p-input-icon-right w-full" data-v-aa431738><i class="pi pi-search" data-v-aa431738></i>`);
      _push(ssrRenderComponent(_component_InputText, {
        modelValue: searchOptions.value,
        "onUpdate:modelValue": ($event) => searchOptions.value = $event,
        placeholder: "T\xECm ki\u1EBFm tr\xEAn Giaynam...",
        class: "w-full h-3rem"
      }, null, _parent));
      _push(`</span></div></div>`);
      if (currentLink.value.length > 0) {
        _push(`<div class="w-full" data-v-aa431738>`);
        if (currentLink.value[0].is_link != "") {
          _push(`<div class="w-full d-head3-main-padding py-3 flex align-items-center" data-v-aa431738><!--[-->`);
          ssrRenderList(currentLink.value, (item, index) => {
            _push(`<div class="flex align-items-center text-md" data-v-aa431738><div style="${ssrRenderStyle(index + 1 == currentLink.value.length ? "color:#090" : "")}" data-v-aa431738>${ssrInterpolate(item.module_name)}</div>`);
            if (index != currentLink.value.length - 1 && currentLink.value.length > 1) {
              _push(`<div data-v-aa431738><i class="pi pi-angle-right pt-1" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-aa431738></i></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(script$1), {
        visible: visibleLeft.value,
        "onUpdate:visible": ($event) => visibleLeft.value = $event,
        "show-close-icon": false,
        class: "d-custom-menu"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex align-items-center cursor-pointer p-2 format-center" style="${ssrRenderStyle({ "background-color": "#cae6dd" })}" data-v-aa431738${_scopeId}><div class="pr-2" data-v-aa431738${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="favicon.png" class="d-icon-logo" data-v-aa431738${_scopeId}></div><div data-v-aa431738${_scopeId}><div class="flex" data-v-aa431738${_scopeId}><div class="font-bold d-text-logo" style="${ssrRenderStyle({ "font-family": "Arial, Helvetica, sans-serif" })}" data-v-aa431738${_scopeId}> GIAYNAM </div><div class="d-text-logo" style="${ssrRenderStyle({ "color": "green" })}" data-v-aa431738${_scopeId}>.com</div></div><div class="d-text-logo-md" style="${ssrRenderStyle({ "font-family": "Verdana, Geneva, Tahoma, sans-serif" })}" data-v-aa431738${_scopeId}> r\u1EA5t nhi\u1EC1u gi\xE0y \u0111\u1EB9p </div></div></div><div class="w-full" data-v-aa431738${_scopeId}><ul class="menu_left p-0 m-0" style="${ssrRenderStyle({ "list-style-type": "none" })}" data-v-aa431738${_scopeId}><!--[-->`);
            ssrRenderList(modulehomes.value, (item, index) => {
              _push2(`<li class="font-bold text-lg w-full" data-v-aa431738${_scopeId}><a${ssrRenderAttr("href", item.children ? "#" : item.data.is_link)} style="${ssrRenderStyle({ "color": "#fff", "font-family": "Arial, Helvetica, sans-serif", "text-decoration": "none", "border": "1px solid #cae6dd" })}" class="${ssrRenderClass("module_" + item.data.module_id)}" data-v-aa431738${_scopeId}><div class="align-items-center d-menu-size" data-v-aa431738${_scopeId}><span data-v-aa431738${_scopeId}>${ssrInterpolate(item.data.module_name)}</span>`);
              if (item.children) {
                _push2(`<span class="px-1" data-v-aa431738${_scopeId}><i class="pi pi-chevron-down" style="${ssrRenderStyle({ "font-size": "0.75rem" })}" data-v-aa431738${_scopeId}></i></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></a>`);
              if (item.children) {
                _push2(`<ul class="submenu"${ssrRenderAttr("id", "module_" + item.data.module_id)} data-v-aa431738${_scopeId}><!--[-->`);
                ssrRenderList(item.children, (elem, indexa) => {
                  _push2(`<li style="${ssrRenderStyle({ "border-bottom": "1px solid #ccc" })}" data-v-aa431738${_scopeId}><a${ssrRenderAttr("href", elem.data.is_link)} style="${ssrRenderStyle({ "font-size": "14px", "background-color": "#cae6dd !important" })}" data-v-aa431738${_scopeId}><span data-v-aa431738${_scopeId}>${ssrInterpolate(elem.data.module_name)}</span></a></li>`);
                });
                _push2(`<!--]--></ul>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></div>`);
          } else {
            return [
              createVNode("div", {
                class: "w-full flex align-items-center cursor-pointer p-2 format-center",
                style: { "background-color": "#cae6dd" }
              }, [
                createVNode("div", { class: "pr-2" }, [
                  createVNode("img", {
                    src: _imports_5,
                    alt: "favicon.png",
                    class: "d-icon-logo"
                  })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "flex" }, [
                    createVNode("div", {
                      class: "font-bold d-text-logo",
                      style: { "font-family": "Arial, Helvetica, sans-serif" }
                    }, " GIAYNAM "),
                    createVNode("div", {
                      class: "d-text-logo",
                      style: { "color": "green" }
                    }, ".com")
                  ]),
                  createVNode("div", {
                    class: "d-text-logo-md",
                    style: { "font-family": "Verdana, Geneva, Tahoma, sans-serif" }
                  }, " r\u1EA5t nhi\u1EC1u gi\xE0y \u0111\u1EB9p ")
                ])
              ]),
              createVNode("div", { class: "w-full" }, [
                createVNode("ul", {
                  class: "menu_left p-0 m-0",
                  style: { "list-style-type": "none" }
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(modulehomes.value, (item, index) => {
                    return openBlock(), createBlock("li", {
                      class: "font-bold text-lg w-full",
                      key: index
                    }, [
                      createVNode("a", {
                        href: item.children ? "#" : item.data.is_link,
                        style: { "color": "#fff", "font-family": "Arial, Helvetica, sans-serif", "text-decoration": "none", "border": "1px solid #cae6dd" },
                        class: "module_" + item.data.module_id,
                        onClick: ($event) => onClickSidebarLeft(item)
                      }, [
                        createVNode("div", { class: "align-items-center d-menu-size" }, [
                          createVNode("span", null, toDisplayString(item.data.module_name), 1),
                          item.children ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "px-1"
                          }, [
                            createVNode("i", {
                              class: "pi pi-chevron-down",
                              style: { "font-size": "0.75rem" }
                            })
                          ])) : createCommentVNode("", true)
                        ])
                      ], 10, ["href", "onClick"]),
                      item.children ? (openBlock(), createBlock("ul", {
                        key: 0,
                        class: "submenu",
                        id: "module_" + item.data.module_id
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (elem, indexa) => {
                          return openBlock(), createBlock("li", {
                            key: indexa,
                            style: { "border-bottom": "1px solid #ccc" }
                          }, [
                            createVNode("a", {
                              href: elem.data.is_link,
                              style: { "font-size": "14px", "background-color": "#cae6dd !important" }
                            }, [
                              createVNode("span", null, toDisplayString(elem.data.module_name), 1)
                            ], 8, ["href"])
                          ]);
                        }), 128))
                      ], 8, ["id"])) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/Headbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Headbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aa431738"]]);

export { Headbar as H };
//# sourceMappingURL=Headbar-2094d305.mjs.map
