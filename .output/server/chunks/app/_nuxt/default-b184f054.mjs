import { unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_5 } from './favicon-f3de5ccb.mjs';
import { s as script } from './toolbar.esm-5b0c3172.mjs';
import { _ as _export_sfc } from '../server.mjs';
import '../../handlers/renderer.mjs';
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

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAVCAAAAAB0nAG9AAACBklEQVQokVVRa08TQRSd/6yh7e7OncdunxhNQfBFgjGxxE9GEkVrjQ2UBitYpSkYv2gqAfsBgWLbfc29jtjEeJLJZHIy59xzLiNMkfDX1+b6SrWsuSgENx6s1D+eUIgUE5sQnu6ual7IeSCVUJ4oZJTrq/nmOKGI0XizlJMBuLea/Z9xivFw8K7mulDKlesRsu83Halc5/YpnT8uO66G8toYj5Y88Dy92GcLbiClL9QxdV2hlX1lezT0fB+E79xl2oc57aryl8u3XEKh5IliKxpUnKzQUgaspqTQ+fr0rO4vdEeYhvv3oB5jY15m5/w1dmSzbETmW4mvm7S/vb9HZkMtn9H0eRn8AcPam0ukk5K4k3ab9Uqw1TowD/lySCZ88TRimCCReSWggUk3I2T2xwTboDtJSsnU1oI0JlwEp/Gh9cnnMuh3Dtt5/z5hRJQwW6qhY81l9ZyirUq1Y2iyKLm+iJFSYiYkoqYSrn4y7O4YfN+7eFa8VoKeZS1t94H0yFOKO0uvh73WcNMaFT1YtbJWPCW7E50JQOZzUHQVaEeB5FKNyGDK0BhzIAIByuPF6wXbHAfNQcChsZGuxHeEAjGDlFLZIgV06A9NsaG2DHIwA+d/b91JKUZGhmjXBSX/g510z+ra3AbDPmTzfIarr9bC+2wSSpkthUa1gP/ztkdp/XJktc1vCoq4rCBvLJEAAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAZCAAAAAB8j9M3AAAC7ElEQVQokT2T628TRxTF529GSpzdedx5re0POKWibaiahCZVS0BIQKE8nGadGMpLQKWiNgpxHJs4IYigAE68ye7O3I6h6nwZjebM0dG5vyGlayZcgjLzxd75RDAhp99ijmWBHkeYl84jEsSFCaNY/emnl41YUAsmSh0eOyxyh96VQRNEo0uKspnBblPGBnQEoJt5sCpKxJMcxxokOc5H0PzYnecVA1NMVyO1igeDrX7mnPeZ+yzC8odz66MHDRA6YlXBAUTLz3EWS13fL/xnK+L843fHl2TEQNsgBG5Vy6uZ9mp6XtZ3cfgleOnXL0TWChNTzZkUFFqFSE9DqBviwmHYPBLv/hSixoWdBCMEl0roFsoUQ25/jc0MTwvviX99VQglDUiuFZXKUtUqWIo+z7D8fmqhwFMkWedHpWMe+gw9SgURqBRhucCx14dfJm8c4hHB4eU4VlUWC6tAMC4F/6MQl7sbg82N19vPrbiVOZLhTnu5nS6vrbR+X1lr3b+/8gAzQ4WOq7HikjK96gm+6fd6252d7c2t7W5ns9/tb/WXImGAKxuZiUTSrxzxDSaZCtmBac05ozyyU1YKaSNJpY3BgCMITDGQwE0sJNQkE0pJGitBq6C4khJoKDM80gySu1u9Fwtcc2AmqtGqvTtY71wRXHAlCuKS0CB8c/zX4uy9N+sVy2EcZfGgd222udNNFDPKEycs5eeGS0wDNJ69oEZGIKcHv00qTetPN8PYpSMnBpLK84cczv5U0fXRdzyuMXr7Fbd2jgl9OAfRtycEPzXTJ+9noTHMH0Zy75+Vx2tp+8N1nrzP9yl/1G0/6iApMHBV/iwujoYvLbzyAUbvcFZMl+6dgXt+PGgSqMoKXAL+698LEkYlHqHP/DPFb27MqzO93PuyIKULb0eZkYbHE8t58D1FdFkCka1UrnwMYw48YRGox2L/a2p4QM0HEF2J+dvFuBbfORrf5SXB/5Y72MuC2P1/PtoNll9+y7+7LYd4jxLtwQAAAABJRU5ErkJggg==";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAZCAAAAAADXsHGAAACC0lEQVQokVWS608TQRTF5382kWx3XrvdlrZQY5SAQZKmmICpAaVE1FbAV9qAqa8vEkt8BWJMpBXSln3MnesMrYSdb7O/e869c/cQNAcwjnUc/dzb3m5/OdGIKknAAiQGgjIFo5c3fUd4nPm1LqItmWCMcYQHBe/e/m1X5hwpadNIo4saq8YhvhKLndrs9YLDi67wZaWnNagIFbFi3AsePc3n69809l5XeUbyeg8xMcia62O+/lBWhhpjpVAdFLMO7ZjeAwyJrdphDe+BrdOoAfB7IfDlSA9a3ciqzzu5qQqOX4K2/DPNySauitJfi1G92z/DyxOFuOxky2+ybNH2Vnb48TMnB7qCsxk2/SMhBh2tr4VXqTHISDdwPkURibFfouJtiioMBMts/QFFNCxR6T/DNL/mu3MnqIAkz0Xg+i9SVKtaZvbYrAHIx7x0snxTpzhE3VOzAY3kLmXVgBUh5W0MYrBLIpw2jmjAD1Py+vJ7sEsEUloAuCXoTHil9Y43XbQOWhOzY/zApZiPL/Utd6N6w0TE2BNtf0LVZSL3Nb6A/VX2eKPQTsajmQ8DOF1xuJyaW9ttN6pBefc+3YwwMd44jgOczUvpUeYzd6nVXPC2EjO9nmTt3PRRTyjjnMlcXuYLhyYJAP+jCPYW9Zt3jJiWVzom1yZpeoI1hjYDSkP8+1cICvTQShKL/wFnWn3Zc/bizAAAAABJRU5ErkJggg==";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAAAAABHfcC3AAAB+UlEQVQokVVSXU8TQRSd/0xStzvfM902LWCzEJqYNEbQaJUoQQk2NsFoARN9EX0QAWmEmBRJagCldndmrtMVtnozmYc5c8499wPBOJwBSBOXjMDBhYM0e0TZbe347FWbX+AgXrmAfyDPc250fwqXH1UCvvkfy6TObBXW34V0difie9eQswAmhZ68OWioxqk7CWrH7hIs8ohL/J9Bg2zG/PEQfjxcw/4DDBF4c26UwLrS9bAdk9u1ll4KW+fWIGtTaw3sqoKsdaKXlz2At3PNwqrLbHi9X3VWbSzHu/YsXjgfxJ2YfEyR8bWCey7E4sqtQzAbrNTrLEK/rBzKPHygwerdSrt7kMCdZ6O5vnlfwRb9Pj7qvaFqeXa+wonofj3a/4ShTaufHVpgGvM8sKK4xFrh0r63Ub7BicwhwXiVFKMnp94c4kzSCSuKpmRxWmZNRLSkaI4xGpSLmghnk9SggFMmJoKUS4r1N6/nEPbyeS6qiGowJX/a1NuQSk5YjNe3t3cO+36uboi8BMlzCbwxQ5rgp+SNoEAIlkNSPbgXro2Hbq1D0quo3EZx+kX31etOthKoRKWctCMqCBlgfXI28oI8YDwSV8EEVZQr+ZfFKjIQ9CoY1ppqUXfO+JKJ1FxesxRTPJLhU+eXD9A8IUzndY3rKMx8H++z+QOfmeysz9pHzgAAAABJRU5ErkJggg==";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAXCAAAAAAjaEA4AAABLElEQVQYlUWRzUsDMRDF97+2rJtmv9oVxIsIgogKYg+KingS9CB6UYp6cOtBL/YirdDSSunuJjPjTBbdQxL4Zd6bN4lHRAD083x5djdEskDoMUKa3F8fdFN/67UihwwfxoBVSeT3oBSEtiIEmsaqFWX5fCFCg7wtX5RO9GqqTqQKgKF5DLW6ec+CXKoIqKLZdrSeI54fAiNbAOP+iv7gG7QuREUljbvxEZDlXCRoSQX1lP4uUPq4EHzzpPxeIXOAEzL52tDRJ0pvQBEiwWkQ7lsG0p7cQIMkaw3c+FzoOha7bf/YOoS1kB7CMB6xpWULdMJJptsXJZuj+HIIrPZ0Ry9q59q+6qdhcGVM2aBRJ9BrM6SmzBuqKLiVV20Qvu1sjq37gT/Ea85p0fyjX5ZUbzANkY9qAAAAAElFTkSuQmCC";
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(script), { class: "w-full h-head-d custoolbar" }, {
        start: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full align-items-center d-hide-mobile d-large-padding-left" data-v-ec9bce87${_scopeId}><div class="px-3" data-v-ec9bce87${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="phone" class="d-icon-header" data-v-ec9bce87${_scopeId}></div><div style="${ssrRenderStyle({ "font-family": "'Times New Roman', Times, serif", "color": "#666" })}" class="font-bold d-hide-mobile d-text-res" data-v-ec9bce87${_scopeId}><div class="d-flex-lagre" data-v-ec9bce87${_scopeId}><div data-v-ec9bce87${_scopeId}>Hotline: 0912698523 (8h - 21h30) |</div><div data-v-ec9bce87${_scopeId}>Li\xEAn h\u1EC7 h\u1EE3p t\xE1c</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full align-items-center d-hide-mobile d-large-padding-left" }, [
                createVNode("div", { class: "px-3" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "phone",
                    class: "d-icon-header"
                  })
                ]),
                createVNode("div", {
                  style: { "font-family": "'Times New Roman', Times, serif", "color": "#666" },
                  class: "font-bold d-hide-mobile d-text-res"
                }, [
                  createVNode("div", { class: "d-flex-lagre" }, [
                    createVNode("div", null, "Hotline: 0912698523 (8h - 21h30) |"),
                    createVNode("div", null, "Li\xEAn h\u1EC7 h\u1EE3p t\xE1c")
                  ])
                ])
              ])
            ];
          }
        }),
        end: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full flex d-hide-mobile d-padding-5 d-large-padding-right" style="${ssrRenderStyle({ "color": "#666" })}" data-v-ec9bce87${_scopeId}><div class="flex align-items-center" data-v-ec9bce87${_scopeId}><div class="pl-3 pr-1" data-v-ec9bce87${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="phone" class="d-icon-header" data-v-ec9bce87${_scopeId}></div><div style="${ssrRenderStyle({ "text-align": "left" })}" class="d-text-res d-min-head" data-v-ec9bce87${_scopeId}><div class="text-sm" data-v-ec9bce87${_scopeId}>Chuy\u1EC3n h\xE0ng TQ</div><div class="font-bold text-md" data-v-ec9bce87${_scopeId}>MI\u1EBEN PH\xCD</div></div></div><div class="flex align-items-center" data-v-ec9bce87${_scopeId}><div class="pl-3 pr-1" data-v-ec9bce87${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="phone" class="d-icon-header" data-v-ec9bce87${_scopeId}></div><div style="${ssrRenderStyle({ "text-align": "left" })}" class="d-text-res d-min-head" data-v-ec9bce87${_scopeId}><div class="text-sm" data-v-ec9bce87${_scopeId}>\u0110\u1ED5i tr\u1EA3 30 ng\xE0y</div><div class="font-bold text-md" data-v-ec9bce87${_scopeId}>MI\u1EBEN PH\xCD</div></div></div><div class="flex align-items-center" data-v-ec9bce87${_scopeId}><div class="pl-3 pr-1" data-v-ec9bce87${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="phone" class="d-icon-header" data-v-ec9bce87${_scopeId}></div><div style="${ssrRenderStyle({ "text-align": "left" })}" class="d-text-res d-min-head" data-v-ec9bce87${_scopeId}><div class="text-sm" data-v-ec9bce87${_scopeId}>Ph\u01B0\u01A1ng th\u1EE9c</div><div class="text-sm" data-v-ec9bce87${_scopeId}>thanh to\xE1n</div></div></div><div class="flex align-items-center" data-v-ec9bce87${_scopeId}><div class="pl-3 pr-1" data-v-ec9bce87${_scopeId}><img${ssrRenderAttr("src", _imports_4)} alt="phone" data-v-ec9bce87${_scopeId}></div><div style="${ssrRenderStyle({ "text-align": "left" })}" class="d-text-res d-min-head" data-v-ec9bce87${_scopeId}><div class="text-sm" data-v-ec9bce87${_scopeId}>B\u1EA3o d\u01B0\u1EE1ng tr\u1ECDng \u0111\u1EDDi</div><div class="font-bold text-md" data-v-ec9bce87${_scopeId}>MI\u1EBEN PH\xCD</div></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "w-full flex d-hide-mobile d-padding-5 d-large-padding-right",
                style: { "color": "#666" }
              }, [
                createVNode("div", { class: "flex align-items-center" }, [
                  createVNode("div", { class: "pl-3 pr-1" }, [
                    createVNode("img", {
                      src: _imports_1,
                      alt: "phone",
                      class: "d-icon-header"
                    })
                  ]),
                  createVNode("div", {
                    style: { "text-align": "left" },
                    class: "d-text-res d-min-head"
                  }, [
                    createVNode("div", { class: "text-sm" }, "Chuy\u1EC3n h\xE0ng TQ"),
                    createVNode("div", { class: "font-bold text-md" }, "MI\u1EBEN PH\xCD")
                  ])
                ]),
                createVNode("div", { class: "flex align-items-center" }, [
                  createVNode("div", { class: "pl-3 pr-1" }, [
                    createVNode("img", {
                      src: _imports_2,
                      alt: "phone",
                      class: "d-icon-header"
                    })
                  ]),
                  createVNode("div", {
                    style: { "text-align": "left" },
                    class: "d-text-res d-min-head"
                  }, [
                    createVNode("div", { class: "text-sm" }, "\u0110\u1ED5i tr\u1EA3 30 ng\xE0y"),
                    createVNode("div", { class: "font-bold text-md" }, "MI\u1EBEN PH\xCD")
                  ])
                ]),
                createVNode("div", { class: "flex align-items-center" }, [
                  createVNode("div", { class: "pl-3 pr-1" }, [
                    createVNode("img", {
                      src: _imports_3,
                      alt: "phone",
                      class: "d-icon-header"
                    })
                  ]),
                  createVNode("div", {
                    style: { "text-align": "left" },
                    class: "d-text-res d-min-head"
                  }, [
                    createVNode("div", { class: "text-sm" }, "Ph\u01B0\u01A1ng th\u1EE9c"),
                    createVNode("div", { class: "text-sm" }, "thanh to\xE1n")
                  ])
                ]),
                createVNode("div", { class: "flex align-items-center" }, [
                  createVNode("div", { class: "pl-3 pr-1" }, [
                    createVNode("img", {
                      src: _imports_4,
                      alt: "phone"
                    })
                  ]),
                  createVNode("div", {
                    style: { "text-align": "left" },
                    class: "d-text-res d-min-head"
                  }, [
                    createVNode("div", { class: "text-sm" }, "B\u1EA3o d\u01B0\u1EE1ng tr\u1ECDng \u0111\u1EDDi"),
                    createVNode("div", { class: "font-bold text-md" }, "MI\u1EBEN PH\xCD")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full" data-v-ec9bce87>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="site-footer" data-v-ec9bce87><div class="container" data-v-ec9bce87><div class="d-footer-small w-full" data-v-ec9bce87><div class="d-footer-1 pb-0" data-v-ec9bce87><h6 class="pb-0 px-4 sm:px-5 lg:px-2 xl:px-0" data-v-ec9bce87><a href="/" style="${ssrRenderStyle({ "text-decoration": "none", "color": "black" })}" data-v-ec9bce87><div class="w-full flex align-items-center cursor-pointer" data-v-ec9bce87><div class="pr-2" data-v-ec9bce87><img${ssrRenderAttr("src", _imports_5)} alt="favicon.png" width="40" height="40" data-v-ec9bce87></div><div data-v-ec9bce87><div class="flex" data-v-ec9bce87><div class="font-bold text-3xl" style="${ssrRenderStyle({ "font-family": "Arial, Helvetica, sans-serif", "color": "#fff" })}" data-v-ec9bce87> GIAYNAM </div><div class="text-3xl" style="${ssrRenderStyle({ "color": "#009000" })}" data-v-ec9bce87>.com</div></div><div class="text-md" style="${ssrRenderStyle({ "font-family": "Verdana, Geneva, Tahoma, sans-serif", "color": "#009000" })}" data-v-ec9bce87> r\u1EA5t nhi\u1EC1u gi\xE0y \u0111\u1EB9p </div></div></div></a></h6><div class="text-justify footer-links pt-0" data-v-ec9bce87><div class="flex align-items-cente" data-v-ec9bce87><span data-v-ec9bce87><i class="pi pi-map-marker" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i></span><div class="pl-3" data-v-ec9bce87> S\u1ED1 31 Ng\xF5 1 Ng\u1EE5y Nh\u01B0 - Kon Tum - Thanh Xu\xE2n - H\xE0 N\u1ED9i </div></div><div class="flex align-items-center pt-2" data-v-ec9bce87><span class="format-center" data-v-ec9bce87><i class="pi pi-phone" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i></span><div class="pl-3" data-v-ec9bce87>0912 698 523</div></div><div class="flex align-items-center pt-2" data-v-ec9bce87><span class="format-center" data-v-ec9bce87><i class="pi pi-globe" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i></span><div class="pl-3" data-v-ec9bce87> Giaynam.com - \u0110\xE3 \u0111\u0103ng k\xFD v\u1EDBi B\u1ED9 c\xF4ng th\u01B0\u01A1ng </div></div><div class="flex align-items-center pt-2" data-v-ec9bce87><span class="format-center pt-1" data-v-ec9bce87><i class="pi pi-envelope" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i></span><div class="pl-3" data-v-ec9bce87>photo@giaynam.com</div></div><div class="flex align-items-center pt-2" data-v-ec9bce87><span class="format-center pt-1" data-v-ec9bce87><i class="pi pi-bookmark-fill" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i></span><div class="pl-3" data-v-ec9bce87> GIAYNAM.COM - Ph\xE2n ph\u1ED1i \u0111\u1ED9c quy\u1EC1n c\xE1c th\u01B0\u01A1ng hi\u1EC7u gi\xE0y: ODAY | SDROLUN | SAVATO | GOG | ASISA | ROYL COBBER </div></div></div></div><div class="d-footer-2 d-show-medium-real" data-v-ec9bce87><h6 data-v-ec9bce87>H\u01B0\u1EDBng d\u1EABn</h6><ul class="footer-links" data-v-ec9bce87><li data-v-ec9bce87><a href="#" class="link-home" data-v-ec9bce87><div class="flex align-items-center" data-v-ec9bce87><i class="pi pi-chevron-circle-right pr-2 pt-1" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i>Ph\u01B0\u01A1ng th\u1EE9c chuy\u1EC3n h\xE0ng </div></a></li><li data-v-ec9bce87><a href="#" class="link-home" data-v-ec9bce87><div class="flex align-items-center" data-v-ec9bce87><i class="pi pi-chevron-circle-right pr-2 pt-1" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i>Ph\u01B0\u01A1ng th\u1EE9c \u0110\u1ED5i &amp; Tr\u1EA3 h\xE0ng </div></a></li><li data-v-ec9bce87><a href="#" class="link-home" data-v-ec9bce87><div class="flex align-items-center" data-v-ec9bce87><i class="pi pi-chevron-circle-right pr-2 pt-1" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i>H\xECnh th\u1EE9c thanh to\xE1n </div></a></li><li data-v-ec9bce87><a href="#" class="link-home" data-v-ec9bce87><div class="flex align-items-center" data-v-ec9bce87><i class="pi pi-chevron-circle-right pr-2 pt-1" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i>Ch\xEDnh s\xE1ch b\u1EA3o h\xE0nh </div></a></li><li data-v-ec9bce87><a href="#" class="link-home" data-v-ec9bce87><div class="flex align-items-center" data-v-ec9bce87><i class="pi pi-chevron-circle-right pr-2 pt-1" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i>Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt </div></a></li></ul></div><div class="d-footer-3 d-show-medium-real" data-v-ec9bce87><h6 data-v-ec9bce87>SHOP GI\xC0Y NAM CAO C\u1EA4P H\xC0 N\u1ED8I</h6><ul class="footer-links" data-v-ec9bce87><li data-v-ec9bce87><a href="#" class="link-home" data-v-ec9bce87><div class="flex align-items-center" data-v-ec9bce87><i class="pi pi-chevron-circle-right pr-2 pt-1" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i>V\u1EC1 ch\xFAng t\xF4i </div></a></li><li data-v-ec9bce87><a href="#" class="link-home" data-v-ec9bce87><div class="flex align-items-center" data-v-ec9bce87><i class="pi pi-chevron-circle-right pr-2 pt-1" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i>Li\xEAn h\u1EC7 &amp; Xem b\u1EA3n \u0111\u1ED3 </div></a></li><li data-v-ec9bce87><a href="#" class="link-home" data-v-ec9bce87><div class="flex align-items-center" data-v-ec9bce87><i class="pi pi-chevron-circle-right pr-2 pt-1" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i>Tin t\u1EE9c gi\xE0y tr\xEAn Giaynam </div></a></li><li data-v-ec9bce87><a href="#" class="link-home" data-v-ec9bce87><div class="flex align-items-center" data-v-ec9bce87><i class="pi pi-chevron-circle-right pr-2 pt-1" style="${ssrRenderStyle({ "font-size": "1rem" })}" data-v-ec9bce87></i>Ngu\u1ED3n g\u1ED1c xu\u1EA5t x\u1EE9 </div></a></li><li data-v-ec9bce87><a href="#" class="link-home" data-v-ec9bce87><div class="flex align-items-center" data-v-ec9bce87> GIAYNAM.COM - Copyright \xA9 2023 </div></a></li></ul></div><div class="d-show-small w-full py-2" data-v-ec9bce87><div class="w-full text-center" data-v-ec9bce87> GIAYNAM.COM - Copyright \xA9 2023 </div></div></div><hr data-v-ec9bce87></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ec9bce87"]]);

export { _default as default };
//# sourceMappingURL=default-b184f054.mjs.map
