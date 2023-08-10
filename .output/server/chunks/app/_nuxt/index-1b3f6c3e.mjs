import { _ as _export_sfc, l as useToast, e as useRuntimeConfig, d as useState, a as useRoute, b as useRouter } from '../server.mjs';
import { inject, ref, resolveComponent, resolveDirective, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, withDirectives, withModifiers, useSSRContext } from 'vue';
import { u as useCookie, d as decr, H as HeadBar, S as SideBar, c as script$b, L as LoginView, e as encr } from './LoginView-36c4fae0.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_0, a as script$4, s as script$4$1 } from './dialog.esm-d5eb41c3.mjs';
import { s as script$1 } from './toolbar.esm-5b0c3172.mjs';
import { s as script$i, a as script$e } from './paginator.esm-79cc5f95.mjs';
import { s as script$5 } from './treeselect.esm-9543014b.mjs';
import { s as script } from './treetable.esm-e6ef84df.mjs';
import { s as script$2 } from './index.esm-ab832c47.mjs';
import { s as script$3 } from './chip.esm-ac1c03e2.mjs';
import { required, maxLength, email } from '@vuelidate/validators';
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
import './index.esm-5b5a4d3f.mjs';

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
    const tdorganization_types = [
      { value: 0, text: "\u0110\u01A1n v\u1ECB" },
      // { value: 1, text: "Trường học" },
      { value: 1, text: "Ph\xF2ng ban" }
    ];
    const donvi = ref({
      organization_name: "",
      is_order: 1,
      status: true,
      organization_type: 0
    });
    ref();
    const submitted = ref(false);
    const rules = {
      organization_name: {
        required,
        maxLength: maxLength(500)
      },
      mail: {
        email
      }
    };
    const v$ = useVuelidate(rules, donvi);
    const isDisplayAvt = ref(false);
    const isDisplayNen = ref(false);
    const selectCapcha = ref();
    const selectedKey = ref();
    const selectedNodes = ref([]);
    const filters = ref({});
    ref();
    const opition = ref({
      search: "",
      PageNo: 1,
      PageSize: 1e3,
      organization_type: null,
      user_id: storeUser.value.user_id
    });
    const donvis = ref();
    const treedonvis = ref();
    ref();
    const selectDiadanh = ref();
    const displayAddDonvi = ref(false);
    const isFirst = ref(true);
    let files = {};
    const swal = inject("$swal");
    const basedomainURL = useRuntimeConfig().public.apiBase;
    ({
      headers: { Authorization: `Bearer ${storeToken.value}` }
    });
    ref();
    ref([
      {
        label: "Xu\u1EA5t Excel",
        icon: "pi pi-file-excel",
        command: (event) => {
          exportDonvi("ExportExcel");
        }
      },
      {
        label: "Xu\u1EA5t M\u1EABu",
        icon: "pi pi-file-excel",
        command: (event) => {
          exportDonvi("ExportExcelMau");
        }
      }
    ]);
    const onNodeSelect = (node) => {
      selectedNodes.value.push(node.data.organization_id);
    };
    const onNodeUnselect = (node) => {
      selectedNodes.value.splice(
        selectedNodes.value.indexOf(node.data.organization_id),
        1
      );
    };
    const handleFileUpload = (event, ia) => {
      if (ia == "LogoDonvi")
        isDisplayAvt.value = true;
      else if (ia == "LogoNen")
        isDisplayNen.value = true;
      files[ia] = event.target.files[0];
      var output = document.getElementById(ia);
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function() {
        URL.revokeObjectURL(output.src);
      };
    };
    const onChangeParent = (item) => {
      const organization_id = parseInt(Object.keys(item)[0]);
      $fetch("/api/Proc/getData", {
        method: "POST",
        baseURL: basedomainURL,
        body: {
          str: encr(
            JSON.stringify({
              proc: "sys_organization_get_order",
              par: [{ par: "organization_id", va: organization_id }]
            }),
            SecretKey,
            cryoptojs
          ).toString()
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let data = JSON.parse(response.data);
        if (data.length > 0) {
          donvi.value.is_order = data[0][0].c + 1;
        }
      });
    };
    const showModalAddDonvi = () => {
      files = [];
      submitted.value = false;
      selectCapcha.value = {};
      donvi.value = {
        organization_name: "",
        is_order: donvis.value.length + 1,
        status: true,
        organization_type: 0
        // parent_id: null,
        // parent_id: storeUser.value.organization_id,
      };
      displayAddDonvi.value = true;
    };
    const chonanh = (id) => {
      document.getElementById(id).click();
    };
    const closedisplayAddDonvi = () => {
      displayAddDonvi.value = false;
    };
    const delLogo = () => {
      files["LogoDonvi"] = [];
      isDisplayAvt.value = false;
      var output = document.getElementById("LogoDonvi");
      output.src = basedomainURL + "/Portals/Image/noimg.jpg";
      donvi.value.logo = null;
    };
    const delNen = () => {
      files["LogoNen"] = [];
      isDisplayNen.value = false;
      var output = document.getElementById("LogoNen");
      output.src = basedomainURL + "/Portals/Image/noimg.jpg";
      donvi.value.background_image = null;
    };
    const onRefersh = () => {
      opition.value.search = "";
      selectedKey.value = {};
      selectedNodes.value = [];
      loadDonvi(true);
    };
    const renderTree = (data, id, name, title) => {
      let arrChils = [];
      let arrtreeChils = [];
      data.filter((x) => x.parent_id == null).forEach((m, i) => {
        m.IsOrder = i + 1;
        m.label_order = m.IsOrder.toString();
        let om = { key: m[id], data: m };
        const rechildren = (mm, pid) => {
          let dts = data.filter((x) => x.parent_id == pid);
          if (dts.length > 0) {
            if (!mm.children)
              mm.children = [];
            dts.forEach((em, index2) => {
              em.label_order = mm.data.label_order + "." + (index2 + 1);
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
          let dts = data.filter((x) => x.parent_id == pid);
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
    ref({});
    const loadDonvi = (rf) => {
      if (rf) {
        opition.value.loading = true;
      }
      $fetch("/api/Proc/CallProc", {
        method: "POST",
        baseURL: basedomainURL,
        body: {
          proc: "sys_organization_list_main",
          par: [
            { par: "pageno", va: opition.value.PageNo },
            { par: "pagesize", va: opition.value.PageSize },
            { par: "search", va: opition.value.search },
            { par: "user_id", va: opition.value.user_id }
          ]
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        let data = JSON.parse(response.data);
        if (data.length > 0) {
          let obj = renderTree(
            data[0],
            "organization_id",
            "organization_name",
            "\u0111\u01A1n v\u1ECB"
          );
          donvis.value = obj.arrChils;
          treedonvis.value = obj.arrtreeChils;
          opition.value.totalRecords = data[1][0].totalrecords;
        } else {
          donvis.value = [];
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
    const editDonvi = (md) => {
      submitted.value = false;
      swal.fire({
        width: 110,
        didOpen: () => {
          swal.showLoading();
        }
      });
      displayAddDonvi.value = true;
      $fetch("/api/Proc/CallProc", {
        method: "POST",
        baseURL: basedomainURL,
        body: {
          proc: "sys_organization_get",
          par: [{ par: "organization_id", va: md.organization_id }]
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        swal.close();
        let data = JSON.parse(response.data);
        if (data.length > 0) {
          donvi.value = data[0][0];
          selectCapcha.value = {};
          selectCapcha.value[donvi.value.parent_id || "-1"] = true;
          selectDiadanh.value = {};
          selectDiadanh.value[donvi.value.place_id || "-1"] = true;
        }
      }).catch((error) => {
        console.log(error);
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
      if (donvi.value.organization_name.length > 500) {
        swal.fire({
          title: "Th\xF4ng b\xE1o!",
          text: "Vui l\xF2ng kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADp t\xEAn " + (donvi.value.organization_type == 1 ? "ph\xF2ng ban" : "\u0111\u01A1n v\u1ECB") + " qu\xE1 500 k\xFD t\u1EF1!",
          icon: "error",
          confirmButtonText: "OK"
        });
      }
      if (selectCapcha.value != null) {
        let keys = Object.keys(selectCapcha.value);
        donvi.value.parent_id = keys[0];
        if (donvi.value.parent_id == -1) {
          donvi.value.parent_id = null;
        }
      }
      if (selectDiadanh.value) {
        let keys = Object.keys(selectDiadanh.value);
        donvi.value.place_id = keys[0];
        if (donvi.value.place_id == -1) {
          donvi.value.place_id = null;
        }
      }
      addDonvi();
    };
    const addTreeDonvi = (md) => {
      let is_order = donvis.value.length + 1;
      if (md.children) {
        is_order = md.children.length + 1;
      } else {
        is_order = 1;
      }
      selectCapcha.value = {};
      selectCapcha.value[md.data.organization_id] = true;
      donvi.value = {
        organization_name: "",
        is_order,
        status: true,
        organization_type: 1
      };
      submitted.value = false;
      displayAddDonvi.value = true;
    };
    const addDonvi = () => {
      let formData = new FormData();
      for (var k in files) {
        let file = files[k];
        formData.append(k, file);
      }
      formData.append("model", JSON.stringify(donvi.value));
      swal.fire({
        width: 110,
        didOpen: () => {
          swal.showLoading();
        }
      });
      $fetch(
        `/api/Phongban/${donvi.value.organization_id ? "Update_Donvi" : "Add_Donvi"}`,
        {
          method: donvi.value.organization_id ? "put" : "post",
          baseURL: basedomainURL,
          data: formData,
          headers: { Authorization: `Bearer ${storeToken.value}` }
        }
      ).then((response) => {
        if (response.err != "1") {
          swal.close();
          donvi.value.organization_type == 0 ? toast.success("C\u1EADp nh\u1EADt \u0111\u01A1n v\u1ECB th\xE0nh c\xF4ng!") : toast.success("C\u1EADp nh\u1EADt ph\xF2ng ban th\xE0nh c\xF4ng!");
          loadDonvi();
          closedisplayAddDonvi();
        } else {
          swal.fire({
            title: "Th\xF4ng b\xE1o!",
            text: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng ki\u1EC3m tra l\u1EA1i!",
            icon: "error",
            confirmButtonText: "OK"
          });
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
    const delDonvi = (md) => {
      swal.fire({
        title: "Th\xF4ng b\xE1o",
        text: "B\u1EA1n c\xF3 mu\u1ED1n xo\xE1 " + (md.organization_type == 1 ? "ph\xF2ng ban" : "\u0111\u01A1n v\u1ECB") + " n\xE0y kh\xF4ng!",
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
          $fetch("/api/Phongban/Del_Donvi", {
            method: "delete",
            baseURL: basedomainURL,
            body: md != null ? [md.organization_id] : selectedNodes.value,
            headers: { Authorization: `Bearer ${storeToken.value}` }
          }).then((response) => {
            swal.close();
            if (response.data.err != "1") {
              swal.close();
              md.organization_type == 1 ? toast.success("Xo\xE1 ph\xF2ng ban th\xE0nh c\xF4ng!") : toast.success("Xo\xE1 \u0111\u01A1n v\u1ECB th\xE0nh c\xF4ng!");
              loadDonvi();
              if (!md)
                selectedNodes.value = [];
            } else {
              swal.fire({
                title: "Th\xF4ng b\xE1o!",
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
    const deleteList = () => {
      let listId = new Array(selectedNodes.value.length);
      swal.fire({
        title: "Th\xF4ng b\xE1o",
        text: "B\u1EA1n c\xF3 mu\u1ED1n x\xF3a danh s\xE1ch \u0111\u01A1n v\u1ECB n\xE0y kh\xF4ng!",
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
          selectedNodes.value.forEach((item) => {
            listId.push(item);
          });
          $fetch("/api/Phongban/Del_Donvi", {
            method: "delete",
            baseURL: basedomainURL,
            body: listId != null ? listId : 1,
            headers: { Authorization: `Bearer ${storeToken.value}` }
          }).then((response) => {
            swal.close();
            if (response.data.err != "1") {
              swal.close();
              toast.success("Xo\xE1 th\xE0nh c\xF4ng!");
              selectedNodes.value = [];
              loadDonvi(true);
            } else {
              swal.fire({
                title: "Th\xF4ng b\xE1o!",
                text: "X\xF3a kh\xF4ng th\xE0nh c\xF4ng, vui l\xF2ng th\u1EED l\u1EA1i!",
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
    const exportDonvi = (method) => {
      swal.fire({
        width: 110,
        didOpen: () => {
          swal.showLoading();
        }
      });
      let par = [{ par: "name", va: "Sys_Donvi" }];
      if (method != "ExportExcelMau") {
        par = [{ par: "user_id", va: opition.value.user_id }];
      }
      $fetch("/api/Excel/" + method, {
        method: "post",
        baseURL: basedomainURL,
        body: {
          excelname: "DANH S\xC1CH \u0110\u01A0N V\u1ECA",
          proc: "Sys_Donvi_ListExport",
          par
        },
        headers: { Authorization: `Bearer ${storeToken.value}` }
      }).then((response) => {
        swal.close();
        if (response.data.err != "1") {
          swal.close();
          toast.success("K\u1EBFt xu\u1EA5t Data th\xE0nh c\xF4ng!");
          if (response.data.path != null) {
            let pathReplace = response.data.path.replace(/\\+/g, "/").replace(/\/+/g, "/").replace(/^\//g, "");
            var listPath = pathReplace.split("/");
            var pathFile = "";
            listPath.forEach((item) => {
              if (item.trim() != "") {
                pathFile += "/" + item;
              }
            });
            window.open(baseURL + pathFile);
          }
        } else {
          swal.fire({
            title: "Error!",
            text: response.data.ms,
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
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-column flex-grow-1 h-full" }, _attrs))} data-v-be7cda8e>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(HeadBar, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="body-layout flex flex-grow-1 w-full h-full" data-v-be7cda8e>`);
      if (unref(storeLogin)) {
        _push(ssrRenderComponent(SideBar, { class: "shadow-1 h-full" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(storeLogin)) {
        _push(`<div data-v-be7cda8e><div class="main-layout flex-grow-1 p-2" data-v-be7cda8e>`);
        _push(ssrRenderComponent(unref(script), {
          value: donvis.value,
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
          rows: 20,
          rowHover: true,
          responsiveLayout: "scroll",
          scrollable: true,
          scrollHeight: "flex"
        }, {
          header: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="module-title module-title-hidden mt-0 ml-1 mb-2" data-v-be7cda8e${_scopeId}><i class="pi pi-microsoft" data-v-be7cda8e${_scopeId}></i> Danh s\xE1ch ${ssrInterpolate(unref(storeUser).is_super ? "\u0111\u01A1n v\u1ECB" : "ph\xF2ng ban")} (${ssrInterpolate(opition.value.totalRecords)}) </h3>`);
              _push2(ssrRenderComponent(unref(script$1), { class: "w-full custoolbar" }, {
                start: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="p-input-icon-left" data-v-be7cda8e${_scopeId2}><i class="pi pi-search" data-v-be7cda8e${_scopeId2}></i>`);
                    _push3(ssrRenderComponent(_component_InputText, {
                      type: "text",
                      spellcheck: "false",
                      modelValue: filters.value["global"],
                      "onUpdate:modelValue": ($event) => filters.value["global"] = $event,
                      placeholder: "T\xECm ki\u1EBFm theo t\xEAn \u0111\u01A1n v\u1ECB"
                    }, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                  } else {
                    return [
                      createVNode("span", { class: "p-input-icon-left" }, [
                        createVNode("i", { class: "pi pi-search" }),
                        createVNode(_component_InputText, {
                          type: "text",
                          spellcheck: "false",
                          modelValue: filters.value["global"],
                          "onUpdate:modelValue": ($event) => filters.value["global"] = $event,
                          placeholder: "T\xECm ki\u1EBFm theo t\xEAn \u0111\u01A1n v\u1ECB"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                end: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(storeUser).is_admin) {
                      _push3(ssrRenderComponent(_component_Button, {
                        label: "Th\xEAm \u0111\u01A1n v\u1ECB",
                        icon: "pi pi-plus",
                        class: "mr-2",
                        onClick: showModalAddDonvi
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
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
                        onClick: ($event) => deleteList()
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(storeUser).is_admin ? (openBlock(), createBlock(_component_Button, {
                        key: 0,
                        label: "Th\xEAm \u0111\u01A1n v\u1ECB",
                        icon: "pi pi-plus",
                        class: "mr-2",
                        onClick: showModalAddDonvi
                      })) : createCommentVNode("", true),
                      createVNode(_component_Button, {
                        class: "mr-2 p-button-outlined p-button-secondary",
                        icon: "pi pi-refresh",
                        onClick: onRefersh
                      }),
                      selectedNodes.value.length > 0 ? (openBlock(), createBlock(_component_Button, {
                        key: 1,
                        label: "Xo\xE1",
                        icon: "pi pi-trash",
                        class: "mr-2 p-button-danger",
                        onClick: ($event) => deleteList()
                      }, null, 8, ["onClick"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("h3", { class: "module-title module-title-hidden mt-0 ml-1 mb-2" }, [
                  createVNode("i", { class: "pi pi-microsoft" }),
                  createTextVNode(" Danh s\xE1ch " + toDisplayString(unref(storeUser).is_super ? "\u0111\u01A1n v\u1ECB" : "ph\xF2ng ban") + " (" + toDisplayString(opition.value.totalRecords) + ") ", 1)
                ]),
                createVNode(unref(script$1), { class: "w-full custoolbar" }, {
                  start: withCtx(() => [
                    createVNode("span", { class: "p-input-icon-left" }, [
                      createVNode("i", { class: "pi pi-search" }),
                      createVNode(_component_InputText, {
                        type: "text",
                        spellcheck: "false",
                        modelValue: filters.value["global"],
                        "onUpdate:modelValue": ($event) => filters.value["global"] = $event,
                        placeholder: "T\xECm ki\u1EBFm theo t\xEAn \u0111\u01A1n v\u1ECB"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  end: withCtx(() => [
                    unref(storeUser).is_admin ? (openBlock(), createBlock(_component_Button, {
                      key: 0,
                      label: "Th\xEAm \u0111\u01A1n v\u1ECB",
                      icon: "pi pi-plus",
                      class: "mr-2",
                      onClick: showModalAddDonvi
                    })) : createCommentVNode("", true),
                    createVNode(_component_Button, {
                      class: "mr-2 p-button-outlined p-button-secondary",
                      icon: "pi pi-refresh",
                      onClick: onRefersh
                    }),
                    selectedNodes.value.length > 0 ? (openBlock(), createBlock(_component_Button, {
                      key: 1,
                      label: "Xo\xE1",
                      icon: "pi pi-trash",
                      class: "mr-2 p-button-danger",
                      onClick: ($event) => deleteList()
                    }, null, 8, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!isFirst.value) {
                _push2(`<div class="m-auto align-items-center justify-content-center p-4 text-center" data-v-be7cda8e${_scopeId}><img${ssrRenderAttr("src", _imports_0)} height="144" data-v-be7cda8e${_scopeId}><h3 class="m-1" data-v-be7cda8e${_scopeId}>Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u</h3></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                !isFirst.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "m-auto align-items-center justify-content-center p-4 text-center"
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
              _push2(ssrRenderComponent(unref(script$2), {
                field: "is_order",
                header: "STT",
                class: "align-items-center justify-content-center text-center font-bold",
                headerStyle: "text-align:center;max-width:100px",
                bodyStyle: "text-align:center;max-width:100px"
              }, {
                body: withCtx((md, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass(md.node.data.status ? "" : "text-error")}" data-v-be7cda8e${_scopeId2}>${ssrInterpolate(md.node.data.label_order)}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: md.node.data.status ? "" : "text-error"
                      }, toDisplayString(md.node.data.label_order), 3)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$2), {
                field: "Logo",
                header: "Logo",
                class: "align-items-center justify-content-center text-center",
                headerStyle: "text-align:center;max-width:80px",
                bodyStyle: "text-align:center;max-width:80px"
              }, {
                body: withCtx((md, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (md.node.data.logo) {
                      _push3(ssrRenderComponent(unref(script$b), {
                        image: unref(basedomainURL) + md.node.data.logo,
                        class: "mr-2",
                        size: "large"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      md.node.data.logo ? (openBlock(), createBlock(unref(script$b), {
                        key: 0,
                        image: unref(basedomainURL) + md.node.data.logo,
                        class: "mr-2",
                        size: "large"
                      }, null, 8, ["image"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$2), {
                field: "organization_id",
                header: "M\xE3 \u0111\u01A1n v\u1ECB",
                class: "align-items-center justify-content-center text-center",
                headerStyle: "text-align:center;max-width:130px",
                bodyStyle: "text-align:center;max-width:130px"
              }, {
                body: withCtx((md, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="${ssrRenderClass("donvi" + md.node.data.organization_type)}" style="${ssrRenderStyle([
                      md.node.data.parent_id ? "" : "font-weight:bold",
                      md.node.data.status ? "" : "color:red !important"
                    ])}" data-v-be7cda8e${_scopeId2}>${ssrInterpolate(md.node.data.organization_id)}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "donvi" + md.node.data.organization_type,
                        style: [
                          md.node.data.parent_id ? "" : "font-weight:bold",
                          md.node.data.status ? "" : "color:red !important"
                        ]
                      }, toDisplayString(md.node.data.organization_id), 7)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$2), {
                field: "organization_name",
                header: "T\xEAn \u0111\u01A1n v\u1ECB",
                expander: true
              }, {
                body: withCtx((md, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="${ssrRenderClass("donvi" + md.node.data.organization_type)}" style="${ssrRenderStyle([
                      md.node.data.parent_id ? "" : "font-weight:bold",
                      md.node.data.status ? "" : "color:red !important"
                    ])}" data-v-be7cda8e${_scopeId2}>${ssrInterpolate(md.node.data.organization_name)}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "donvi" + md.node.data.organization_type,
                        style: [
                          md.node.data.parent_id ? "" : "font-weight:bold",
                          md.node.data.status ? "" : "color:red !important"
                        ]
                      }, toDisplayString(md.node.data.organization_name), 7)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$2), {
                field: "organization_type",
                header: "Lo\u1EA1i",
                class: "align-items-center justify-content-center text-center",
                headerStyle: "text-align:center;max-width:120px",
                bodyStyle: "text-align:center;max-width:120px"
              }, {
                body: withCtx((md, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(script$3), {
                      class: "chip" + md.node.data.organization_type,
                      style: md.node.data.status ? "" : "background-color:red !important;"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(md.node.data.organization_type == 0 ? "\u0110\u01A1n v\u1ECB" : "Ph\xF2ng ban")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(md.node.data.organization_type == 0 ? "\u0110\u01A1n v\u1ECB" : "Ph\xF2ng ban"), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(script$3), {
                        class: "chip" + md.node.data.organization_type,
                        style: md.node.data.status ? "" : "background-color:red !important;"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(md.node.data.organization_type == 0 ? "\u0110\u01A1n v\u1ECB" : "Ph\xF2ng ban"), 1)
                        ]),
                        _: 2
                      }, 1032, ["class", "style"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(script$2), {
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
                      onClick: ($event) => addTreeDonvi(md.node)
                    }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Th\xEAm ph\xF2ng ban", void 0, { top: true })), null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Button, mergeProps({
                      type: "button",
                      icon: "pi pi-pencil",
                      class: "p-button-rounded p-button-secondary p-button-outlined",
                      style: { "margin-right": "0.5rem" },
                      onClick: ($event) => editDonvi(md.node.data)
                    }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "Ch\u1EC9nh s\u1EEDa", void 0, { top: true })), null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_Button, mergeProps({
                      type: "button",
                      icon: "pi pi-trash",
                      class: "p-button-rounded p-button-secondary p-button-outlined",
                      onClick: ($event) => delDonvi(md.node.data)
                    }, ssrGetDirectiveProps(_ctx, _directive_tooltip, "X\xF3a", void 0, { top: true })), null, _parent3, _scopeId2));
                  } else {
                    return [
                      withDirectives(createVNode(_component_Button, {
                        type: "button",
                        icon: "pi pi-plus-circle",
                        class: "p-button-rounded p-button-secondary p-button-outlined",
                        style: { "margin-right": "0.5rem" },
                        onClick: ($event) => addTreeDonvi(md.node)
                      }, null, 8, ["onClick"]), [
                        [
                          _directive_tooltip,
                          "Th\xEAm ph\xF2ng ban",
                          void 0,
                          { top: true }
                        ]
                      ]),
                      withDirectives(createVNode(_component_Button, {
                        type: "button",
                        icon: "pi pi-pencil",
                        class: "p-button-rounded p-button-secondary p-button-outlined",
                        style: { "margin-right": "0.5rem" },
                        onClick: ($event) => editDonvi(md.node.data)
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
                        onClick: ($event) => delDonvi(md.node.data)
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
                createVNode(unref(script$2), {
                  field: "is_order",
                  header: "STT",
                  class: "align-items-center justify-content-center text-center font-bold",
                  headerStyle: "text-align:center;max-width:100px",
                  bodyStyle: "text-align:center;max-width:100px"
                }, {
                  body: withCtx((md) => [
                    createVNode("div", {
                      class: md.node.data.status ? "" : "text-error"
                    }, toDisplayString(md.node.data.label_order), 3)
                  ]),
                  _: 1
                }),
                createVNode(unref(script$2), {
                  field: "Logo",
                  header: "Logo",
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:80px",
                  bodyStyle: "text-align:center;max-width:80px"
                }, {
                  body: withCtx((md) => [
                    md.node.data.logo ? (openBlock(), createBlock(unref(script$b), {
                      key: 0,
                      image: unref(basedomainURL) + md.node.data.logo,
                      class: "mr-2",
                      size: "large"
                    }, null, 8, ["image"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(unref(script$2), {
                  field: "organization_id",
                  header: "M\xE3 \u0111\u01A1n v\u1ECB",
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:130px",
                  bodyStyle: "text-align:center;max-width:130px"
                }, {
                  body: withCtx((md) => [
                    createVNode("span", {
                      class: "donvi" + md.node.data.organization_type,
                      style: [
                        md.node.data.parent_id ? "" : "font-weight:bold",
                        md.node.data.status ? "" : "color:red !important"
                      ]
                    }, toDisplayString(md.node.data.organization_id), 7)
                  ]),
                  _: 1
                }),
                createVNode(unref(script$2), {
                  field: "organization_name",
                  header: "T\xEAn \u0111\u01A1n v\u1ECB",
                  expander: true
                }, {
                  body: withCtx((md) => [
                    createVNode("span", {
                      class: "donvi" + md.node.data.organization_type,
                      style: [
                        md.node.data.parent_id ? "" : "font-weight:bold",
                        md.node.data.status ? "" : "color:red !important"
                      ]
                    }, toDisplayString(md.node.data.organization_name), 7)
                  ]),
                  _: 1
                }),
                createVNode(unref(script$2), {
                  field: "organization_type",
                  header: "Lo\u1EA1i",
                  class: "align-items-center justify-content-center text-center",
                  headerStyle: "text-align:center;max-width:120px",
                  bodyStyle: "text-align:center;max-width:120px"
                }, {
                  body: withCtx((md) => [
                    createVNode(unref(script$3), {
                      class: "chip" + md.node.data.organization_type,
                      style: md.node.data.status ? "" : "background-color:red !important;"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(md.node.data.organization_type == 0 ? "\u0110\u01A1n v\u1ECB" : "Ph\xF2ng ban"), 1)
                      ]),
                      _: 2
                    }, 1032, ["class", "style"])
                  ]),
                  _: 1
                }),
                createVNode(unref(script$2), {
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
                      onClick: ($event) => addTreeDonvi(md.node)
                    }, null, 8, ["onClick"]), [
                      [
                        _directive_tooltip,
                        "Th\xEAm ph\xF2ng ban",
                        void 0,
                        { top: true }
                      ]
                    ]),
                    withDirectives(createVNode(_component_Button, {
                      type: "button",
                      icon: "pi pi-pencil",
                      class: "p-button-rounded p-button-secondary p-button-outlined",
                      style: { "margin-right": "0.5rem" },
                      onClick: ($event) => editDonvi(md.node.data)
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
                      onClick: ($event) => delDonvi(md.node.data)
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
        _push(ssrRenderComponent(unref(script$4), {
          header: "C\u1EADp nh\u1EADt \u0110\u01A1n v\u1ECB/ Ph\xF2ng ban",
          visible: displayAddDonvi.value,
          "onUpdate:visible": ($event) => displayAddDonvi.value = $event,
          style: { width: "860px", zIndex: 2 },
          maximizable: true,
          autoZIndex: false
        }, {
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Button, {
                label: "Hu\u1EF7",
                icon: "pi pi-times",
                onClick: closedisplayAddDonvi,
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
                  onClick: closedisplayAddDonvi,
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
              _push2(`<form data-v-be7cda8e${_scopeId}><div class="grid formgrid m-2" data-v-be7cda8e${_scopeId}><div class="field col-12 md:col-12" data-v-be7cda8e${_scopeId}><label class="col-2 text-left" data-v-be7cda8e${_scopeId}>T\xEAn${ssrInterpolate(donvi.value.organization_type == 1 ? " ph\xF2ng ban " : " \u0111\u01A1n v\u1ECB ")}<span class="redsao" data-v-be7cda8e${_scopeId}>(*)</span></label>`);
              _push2(ssrRenderComponent(_component_InputText, {
                spellcheck: "false",
                class: ["col-10 ip36", {
                  "p-invalid": unref(v$).organization_name.$invalid && submitted.value
                }],
                modelValue: donvi.value.organization_name,
                "onUpdate:modelValue": ($event) => donvi.value.organization_name = $event
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref(v$).organization_name.required.$invalid && submitted.value || unref(v$).organization_name.required.$pending.$response) {
                _push2(`<small class="col-10 p-error" data-v-be7cda8e${_scopeId}><div class="field col-12 md:col-12" data-v-be7cda8e${_scopeId}><label class="col-2 text-left" data-v-be7cda8e${_scopeId}></label>`);
                if (donvi.value.organization_type == 0) {
                  _push2(`<span class="col-10 pl-3" data-v-be7cda8e${_scopeId}>${ssrInterpolate(unref(v$).organization_name.required.$message.replace("Value", "T\xEAn \u0111\u01A1n v\u1ECB").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (donvi.value.organization_type == 1) {
                  _push2(`<span class="col-10 pl-3" data-v-be7cda8e${_scopeId}>${ssrInterpolate(unref(v$).organization_name.required.$message.replace("Value", "T\xEAn ph\xF2ng ban").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng"))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></small>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(v$).organization_name.maxLength.$invalid && submitted.value) {
                _push2(`<small class="col-10 p-error" data-v-be7cda8e${_scopeId}><div class="field col-12 md:col-12" data-v-be7cda8e${_scopeId}><label class="col-2 text-left" data-v-be7cda8e${_scopeId}></label>`);
                if (donvi.value.organization_type == 0) {
                  _push2(`<span class="col-10 pl-3" data-v-be7cda8e${_scopeId}>${ssrInterpolate(unref(v$).organization_name.maxLength.$message.replace(
                    "The maximum length allowed is",
                    "T\xEAn \u0111\u01A1n v\u1ECB kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1"
                  ))} k\xFD t\u1EF1</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (donvi.value.organization_type == 1) {
                  _push2(`<span class="col-10 pl-3" data-v-be7cda8e${_scopeId}>${ssrInterpolate(unref(v$).organization_name.maxLength.$message.replace(
                    "The maximum length allowed is",
                    "T\xEAn ph\xF2ng ban kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1"
                  ))} k\xFD t\u1EF1</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="field col-12 md:col-12" data-v-be7cda8e${_scopeId}><label class="col-2 text-left" data-v-be7cda8e${_scopeId}>C\u1EA5p cha</label>`);
              _push2(ssrRenderComponent(unref(script$5), {
                onChange: onChangeParent,
                class: "col-10",
                modelValue: selectCapcha.value,
                "onUpdate:modelValue": ($event) => selectCapcha.value = $event,
                options: treedonvis.value,
                showClear: true,
                placeholder: "",
                optionLabel: "data.organization_name",
                optionValue: "data.organization_id"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="field col-12 md:col-12" data-v-be7cda8e${_scopeId}><label class="col-2 text-left" data-v-be7cda8e${_scopeId}>Lo\u1EA1i</label>`);
              _push2(ssrRenderComponent(unref(script$i), {
                class: "col-10",
                modelValue: donvi.value.organization_type,
                "onUpdate:modelValue": ($event) => donvi.value.organization_type = $event,
                options: tdorganization_types,
                optionLabel: "text",
                optionValue: "value"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (donvi.value.organization_type == 1) {
                _push2(`<div class="field col-12 md:col-12" data-v-be7cda8e${_scopeId}><label class="col-2 text-left" data-v-be7cda8e${_scopeId}>K\xFD hi\u1EC7u v\u0103n b\u1EA3n</label>`);
                _push2(ssrRenderComponent(_component_InputText, {
                  spellcheck: "false",
                  class: "col-10 ip36",
                  modelValue: donvi.value.department_doc_code,
                  "onUpdate:modelValue": ($event) => donvi.value.department_doc_code = $event
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (donvi.value.organization_type == 0) {
                _push2(`<div class="field col-12 md:col-12" data-v-be7cda8e${_scopeId}><label class="col-2 text-left" data-v-be7cda8e${_scopeId}>S\u0110T</label>`);
                _push2(ssrRenderComponent(_component_InputText, {
                  spellcheck: "false",
                  class: "col-4 ip36",
                  modelValue: donvi.value.phone,
                  "onUpdate:modelValue": ($event) => donvi.value.phone = $event
                }, null, _parent2, _scopeId));
                _push2(`<label class="col-2 text-right" data-v-be7cda8e${_scopeId}>Email</label>`);
                _push2(ssrRenderComponent(_component_InputText, {
                  spellcheck: "false",
                  class: "col-4 ip36",
                  modelValue: donvi.value.mail,
                  "onUpdate:modelValue": ($event) => donvi.value.mail = $event
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(v$).mail.email.$invalid && submitted.value && donvi.value.mail != null) {
                _push2(`<small class="p-error field col-12 md:col-12 mb-3 flex" data-v-be7cda8e${_scopeId}><div class="col-6" data-v-be7cda8e${_scopeId}></div><label class="col-2 text-left" data-v-be7cda8e${_scopeId}></label><span class="" data-v-be7cda8e${_scopeId}>${ssrInterpolate(unref(v$).mail.email.$message.replace(
                  "Value is not a valid email address",
                  "Email kh\xF4ng h\u1EE3p l\u1EC7"
                ))}</span></small>`);
              } else {
                _push2(`<!---->`);
              }
              if (donvi.value.organization_type == 0) {
                _push2(`<div class="field col-12 md:col-12" data-v-be7cda8e${_scopeId}><label class="col-2 text-left" data-v-be7cda8e${_scopeId}>Website</label>`);
                _push2(ssrRenderComponent(_component_InputText, {
                  spellcheck: "false",
                  class: "col-4 ip36",
                  modelValue: donvi.value.is_url,
                  "onUpdate:modelValue": ($event) => donvi.value.is_url = $event
                }, null, _parent2, _scopeId));
                _push2(`<label class="col-2 text-right" data-v-be7cda8e${_scopeId}>Fax</label>`);
                _push2(ssrRenderComponent(_component_InputText, {
                  spellcheck: "false",
                  class: "col-4 ip36",
                  modelValue: donvi.value.fax,
                  "onUpdate:modelValue": ($event) => donvi.value.fax = $event
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (donvi.value.organization_type == 0) {
                _push2(`<div class="field col-12 md:col-12" data-v-be7cda8e${_scopeId}><label class="col-2 text-left" data-v-be7cda8e${_scopeId}>\u0110\u1ECBa ch\u1EC9</label>`);
                _push2(ssrRenderComponent(_component_InputText, {
                  spellcheck: "false",
                  class: "col-10 ip36",
                  modelValue: donvi.value.address,
                  "onUpdate:modelValue": ($event) => donvi.value.address = $event
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (donvi.value.organization_type == 0) {
                _push2(`<div class="field col-12 md:col-12 flex" data-v-be7cda8e${_scopeId}><label class="col-2" data-v-be7cda8e${_scopeId}>Logo</label><div class="col-4 p-0" data-v-be7cda8e${_scopeId}><div class="inputanh relative" data-v-be7cda8e${_scopeId}><img id="LogoDonvi"${ssrRenderAttr(
                  "src",
                  donvi.value.logo ? unref(basedomainURL) + donvi.value.logo : unref(basedomainURL) + "/Portals/Image/noimg.jpg"
                )} data-v-be7cda8e${_scopeId}>`);
                if (isDisplayAvt.value || donvi.value.logo) {
                  _push2(ssrRenderComponent(_component_Button, {
                    style: { "width": "1.5rem", "height": "1.5rem" },
                    icon: "pi pi-times",
                    onClick: delLogo,
                    class: "p-button-rounded absolute top-0 right-0 cursor-pointer"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><input class="ipnone" id="AnhDonvi" type="file" accept="image/*" data-v-be7cda8e${_scopeId}></div><label class="col-2 text-right" data-v-be7cda8e${_scopeId}>\u1EA2nh n\u1EC1n</label><div class="col-4 p-0" data-v-be7cda8e${_scopeId}><div class="inputanh relative" data-v-be7cda8e${_scopeId}><img id="LogoNen"${ssrRenderAttr(
                  "src",
                  donvi.value.background_image ? unref(basedomainURL) + donvi.value.background_image : unref(basedomainURL) + "/Portals/Image/noimg.jpg"
                )} data-v-be7cda8e${_scopeId}>`);
                if (isDisplayNen.value || donvi.value.background_image) {
                  _push2(ssrRenderComponent(_component_Button, {
                    style: { "width": "1.5rem", "height": "1.5rem" },
                    icon: "pi pi-times",
                    onClick: delNen,
                    class: "p-button-rounded absolute top-0 right-0 cursor-pointer"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><input class="ipnone" id="AnhNen" type="file" accept="image/*" data-v-be7cda8e${_scopeId}></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="field col-12 md:col-12" data-v-be7cda8e${_scopeId}><label class="col-2 text-left" data-v-be7cda8e${_scopeId}>STT</label>`);
              _push2(ssrRenderComponent(unref(script$e), {
                class: "col-2 ip36 p-0",
                modelValue: donvi.value.is_order,
                "onUpdate:modelValue": ($event) => donvi.value.is_order = $event
              }, null, _parent2, _scopeId));
              _push2(`<label class="col-2 text-right" data-v-be7cda8e${_scopeId}>Tr\u1EA1ng th\xE1i</label>`);
              _push2(ssrRenderComponent(unref(script$4$1), {
                modelValue: donvi.value.status,
                "onUpdate:modelValue": ($event) => donvi.value.status = $event
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
                        createTextVNode("T\xEAn" + toDisplayString(donvi.value.organization_type == 1 ? " ph\xF2ng ban " : " \u0111\u01A1n v\u1ECB "), 1),
                        createVNode("span", { class: "redsao" }, "(*)")
                      ]),
                      createVNode(_component_InputText, {
                        spellcheck: "false",
                        class: ["col-10 ip36", {
                          "p-invalid": unref(v$).organization_name.$invalid && submitted.value
                        }],
                        modelValue: donvi.value.organization_name,
                        "onUpdate:modelValue": ($event) => donvi.value.organization_name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    unref(v$).organization_name.required.$invalid && submitted.value || unref(v$).organization_name.required.$pending.$response ? (openBlock(), createBlock("small", {
                      key: 0,
                      class: "col-10 p-error"
                    }, [
                      createVNode("div", { class: "field col-12 md:col-12" }, [
                        createVNode("label", { class: "col-2 text-left" }),
                        donvi.value.organization_type == 0 ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "col-10 pl-3"
                        }, toDisplayString(unref(v$).organization_name.required.$message.replace("Value", "T\xEAn \u0111\u01A1n v\u1ECB").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng")), 1)) : createCommentVNode("", true),
                        donvi.value.organization_type == 1 ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "col-10 pl-3"
                        }, toDisplayString(unref(v$).organization_name.required.$message.replace("Value", "T\xEAn ph\xF2ng ban").replace("is required", "kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng")), 1)) : createCommentVNode("", true)
                      ])
                    ])) : createCommentVNode("", true),
                    unref(v$).organization_name.maxLength.$invalid && submitted.value ? (openBlock(), createBlock("small", {
                      key: 1,
                      class: "col-10 p-error"
                    }, [
                      createVNode("div", { class: "field col-12 md:col-12" }, [
                        createVNode("label", { class: "col-2 text-left" }),
                        donvi.value.organization_type == 0 ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "col-10 pl-3"
                        }, toDisplayString(unref(v$).organization_name.maxLength.$message.replace(
                          "The maximum length allowed is",
                          "T\xEAn \u0111\u01A1n v\u1ECB kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1"
                        )) + " k\xFD t\u1EF1", 1)) : createCommentVNode("", true),
                        donvi.value.organization_type == 1 ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "col-10 pl-3"
                        }, toDisplayString(unref(v$).organization_name.maxLength.$message.replace(
                          "The maximum length allowed is",
                          "T\xEAn ph\xF2ng ban kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1"
                        )) + " k\xFD t\u1EF1", 1)) : createCommentVNode("", true)
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, "C\u1EA5p cha"),
                      createVNode(unref(script$5), {
                        onChange: onChangeParent,
                        class: "col-10",
                        modelValue: selectCapcha.value,
                        "onUpdate:modelValue": ($event) => selectCapcha.value = $event,
                        options: treedonvis.value,
                        showClear: true,
                        placeholder: "",
                        optionLabel: "data.organization_name",
                        optionValue: "data.organization_id"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, "Lo\u1EA1i"),
                      createVNode(unref(script$i), {
                        class: "col-10",
                        modelValue: donvi.value.organization_type,
                        "onUpdate:modelValue": ($event) => donvi.value.organization_type = $event,
                        options: tdorganization_types,
                        optionLabel: "text",
                        optionValue: "value"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    donvi.value.organization_type == 1 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "field col-12 md:col-12"
                    }, [
                      createVNode("label", { class: "col-2 text-left" }, "K\xFD hi\u1EC7u v\u0103n b\u1EA3n"),
                      createVNode(_component_InputText, {
                        spellcheck: "false",
                        class: "col-10 ip36",
                        modelValue: donvi.value.department_doc_code,
                        "onUpdate:modelValue": ($event) => donvi.value.department_doc_code = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true),
                    donvi.value.organization_type == 0 ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "field col-12 md:col-12"
                    }, [
                      createVNode("label", { class: "col-2 text-left" }, "S\u0110T"),
                      createVNode(_component_InputText, {
                        spellcheck: "false",
                        class: "col-4 ip36",
                        modelValue: donvi.value.phone,
                        "onUpdate:modelValue": ($event) => donvi.value.phone = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("label", { class: "col-2 text-right" }, "Email"),
                      createVNode(_component_InputText, {
                        spellcheck: "false",
                        class: "col-4 ip36",
                        modelValue: donvi.value.mail,
                        "onUpdate:modelValue": ($event) => donvi.value.mail = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true),
                    unref(v$).mail.email.$invalid && submitted.value && donvi.value.mail != null ? (openBlock(), createBlock("small", {
                      key: 4,
                      class: "p-error field col-12 md:col-12 mb-3 flex"
                    }, [
                      createVNode("div", { class: "col-6" }),
                      createVNode("label", { class: "col-2 text-left" }),
                      createVNode("span", { class: "" }, toDisplayString(unref(v$).mail.email.$message.replace(
                        "Value is not a valid email address",
                        "Email kh\xF4ng h\u1EE3p l\u1EC7"
                      )), 1)
                    ])) : createCommentVNode("", true),
                    donvi.value.organization_type == 0 ? (openBlock(), createBlock("div", {
                      key: 5,
                      class: "field col-12 md:col-12"
                    }, [
                      createVNode("label", { class: "col-2 text-left" }, "Website"),
                      createVNode(_component_InputText, {
                        spellcheck: "false",
                        class: "col-4 ip36",
                        modelValue: donvi.value.is_url,
                        "onUpdate:modelValue": ($event) => donvi.value.is_url = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("label", { class: "col-2 text-right" }, "Fax"),
                      createVNode(_component_InputText, {
                        spellcheck: "false",
                        class: "col-4 ip36",
                        modelValue: donvi.value.fax,
                        "onUpdate:modelValue": ($event) => donvi.value.fax = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true),
                    donvi.value.organization_type == 0 ? (openBlock(), createBlock("div", {
                      key: 6,
                      class: "field col-12 md:col-12"
                    }, [
                      createVNode("label", { class: "col-2 text-left" }, "\u0110\u1ECBa ch\u1EC9"),
                      createVNode(_component_InputText, {
                        spellcheck: "false",
                        class: "col-10 ip36",
                        modelValue: donvi.value.address,
                        "onUpdate:modelValue": ($event) => donvi.value.address = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true),
                    donvi.value.organization_type == 0 ? (openBlock(), createBlock("div", {
                      key: 7,
                      class: "field col-12 md:col-12 flex"
                    }, [
                      createVNode("label", { class: "col-2" }, "Logo"),
                      createVNode("div", { class: "col-4 p-0" }, [
                        createVNode("div", { class: "inputanh relative" }, [
                          createVNode("img", {
                            onClick: ($event) => chonanh("AnhDonvi"),
                            id: "LogoDonvi",
                            src: donvi.value.logo ? unref(basedomainURL) + donvi.value.logo : unref(basedomainURL) + "/Portals/Image/noimg.jpg"
                          }, null, 8, ["onClick", "src"]),
                          isDisplayAvt.value || donvi.value.logo ? (openBlock(), createBlock(_component_Button, {
                            key: 0,
                            style: { "width": "1.5rem", "height": "1.5rem" },
                            icon: "pi pi-times",
                            onClick: delLogo,
                            class: "p-button-rounded absolute top-0 right-0 cursor-pointer"
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode("input", {
                          class: "ipnone",
                          id: "AnhDonvi",
                          type: "file",
                          accept: "image/*",
                          onChange: ($event) => handleFileUpload($event, "LogoDonvi")
                        }, null, 40, ["onChange"])
                      ]),
                      createVNode("label", { class: "col-2 text-right" }, "\u1EA2nh n\u1EC1n"),
                      createVNode("div", { class: "col-4 p-0" }, [
                        createVNode("div", { class: "inputanh relative" }, [
                          createVNode("img", {
                            onClick: ($event) => chonanh("AnhNen"),
                            id: "LogoNen",
                            src: donvi.value.background_image ? unref(basedomainURL) + donvi.value.background_image : unref(basedomainURL) + "/Portals/Image/noimg.jpg"
                          }, null, 8, ["onClick", "src"]),
                          isDisplayNen.value || donvi.value.background_image ? (openBlock(), createBlock(_component_Button, {
                            key: 0,
                            style: { "width": "1.5rem", "height": "1.5rem" },
                            icon: "pi pi-times",
                            onClick: delNen,
                            class: "p-button-rounded absolute top-0 right-0 cursor-pointer"
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode("input", {
                          class: "ipnone",
                          id: "AnhNen",
                          type: "file",
                          accept: "image/*",
                          onChange: ($event) => handleFileUpload($event, "LogoNen")
                        }, null, 40, ["onChange"])
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "field col-12 md:col-12" }, [
                      createVNode("label", { class: "col-2 text-left" }, "STT"),
                      createVNode(unref(script$e), {
                        class: "col-2 ip36 p-0",
                        modelValue: donvi.value.is_order,
                        "onUpdate:modelValue": ($event) => donvi.value.is_order = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("label", { class: "col-2 text-right" }, "Tr\u1EA1ng th\xE1i"),
                      createVNode(unref(script$4$1), {
                        modelValue: donvi.value.status,
                        "onUpdate:modelValue": ($event) => donvi.value.status = $event
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/system/organization/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-be7cda8e"]]);

export { index as default };
//# sourceMappingURL=index-1b3f6c3e.mjs.map
