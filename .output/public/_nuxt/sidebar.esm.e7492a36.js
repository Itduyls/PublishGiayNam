import{F as L,s as O}from"./paginator.esm.82549e9d.js";import{s as B}from"./index.esm.d51ffea6.js";import{r as I,Z as u,D as f,R as E,s as P,y as R,z as m,o as a,n as h,w as v,c as d,v as o,b as x,T as A,C as y,a as g,A as b,q as c,B as D}from"./entry.f5a07536.js";var j=`
.p-sidebar-mask {
    display: none;
    pointer-events: none;
    background-color: transparent;
    transition-property: background-color;
}

.p-sidebar-mask.p-component-overlay {
    pointer-events: auto;
}

.p-sidebar-visible {
    display: flex;
}

.p-sidebar {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
}

.p-sidebar-content {
    overflow-y: auto;
    flex-grow: 1;
}

.p-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
}

.p-sidebar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.p-sidebar-full .p-sidebar {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
}

/* Animation */
/* Center */
.p-sidebar-left .p-sidebar-enter-from,
.p-sidebar-left .p-sidebar-leave-to {
    transform: translateX(-100%);
}
.p-sidebar-right .p-sidebar-enter-from,
.p-sidebar-right .p-sidebar-leave-to {
    transform: translateX(100%);
}
.p-sidebar-top .p-sidebar-enter-from,
.p-sidebar-top .p-sidebar-leave-to {
    transform: translateY(-100%);
}
.p-sidebar-bottom .p-sidebar-enter-from,
.p-sidebar-bottom .p-sidebar-leave-to {
    transform: translateY(100%);
}
.p-sidebar-full .p-sidebar-enter-from,
.p-sidebar-full .p-sidebar-leave-to {
    opacity: 0;
}
.p-sidebar-full .p-sidebar-enter-active,
.p-sidebar-full .p-sidebar-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Size */
.p-sidebar-left .p-sidebar {
    width: 20rem;
    height: 100%;
}

.p-sidebar-right .p-sidebar {
    width: 20rem;
    height: 100%;
}

.p-sidebar-top .p-sidebar {
    height: 10rem;
    width: 100%;
}

.p-sidebar-bottom .p-sidebar {
    height: 10rem;
    width: 100%;
}

.p-sidebar-left .p-sidebar-sm,
.p-sidebar-right .p-sidebar-sm {
    width: 20rem;
}

.p-sidebar-left .p-sidebar-md,
.p-sidebar-right .p-sidebar-md {
    width: 40rem;
}

.p-sidebar-left .p-sidebar-lg,
.p-sidebar-right .p-sidebar-lg {
    width: 60rem;
}

.p-sidebar-top .p-sidebar-sm,
.p-sidebar-bottom .p-sidebar-sm {
    height: 10rem;
}

.p-sidebar-top .p-sidebar-md,
.p-sidebar-bottom .p-sidebar-md {
    height: 20rem;
}

.p-sidebar-top .p-sidebar-lg,
.p-sidebar-bottom .p-sidebar-lg {
    height: 30rem;
}

.p-sidebar-left .p-sidebar-content,
.p-sidebar-right .p-sidebar-content,
.p-sidebar-top .p-sidebar-content,
.p-sidebar-bottom .p-sidebar-content {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 64em) {
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-md {
        width: 20rem;
    }
}
`,V={mask:function(n){var t=n.position;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"?"flex-start":t==="right"?"flex-end":"center",alignItems:t==="top"?"flex-start":t==="bottom"?"flex-end":"center"}}},Z={mask:function(n){var t=n.instance,r=n.props,s=["left","right","top","bottom"],i=s.find(function(p){return p===r.position});return["p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":r.modal,"p-sidebar-mask-scrollblocker":r.blockScroll,"p-sidebar-visible":t.containerVisible,"p-sidebar-full":t.fullScreen},i?"p-sidebar-".concat(i):""]},root:function(n){var t=n.instance;return["p-sidebar p-component",{"p-input-filled":t.$primevue.config.inputStyle==="filled","p-ripple-disabled":t.$primevue.config.ripple===!1,"p-sidebar-full":t.fullScreen}]},header:"p-sidebar-header",headerContent:"p-sidebar-header-content",closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",content:"p-sidebar-content"},K=I(j,{name:"sidebar",manual:!0}),T=K.load,M={name:"BaseSidebar",extends:P,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},css:{classes:Z,inlineStyles:V,loadStyle:T},provide:function(){return{$parentInstance:this}}},N={name:"Sidebar",extends:M,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&u.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.autoZIndex&&u.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&f.addClass(this.mask,"p-component-overlay-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&u.clear(this.mask),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(n){this.dismissable&&this.modal&&this.mask===n.target&&this.hide()},focus:function(){var n=function(s){return s.querySelector("[autofocus]")},t=this.$slots.default&&n(this.content);t||(t=this.$slots.header&&n(this.headerContainer),t||(t=n(this.container))),t&&t.focus()},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&f.addClass(document.body,"p-overflow-hidden")},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&f.removeClass(document.body,"p-overflow-hidden")},onKeydown:function(n){n.code==="Escape"&&this.hide()},containerRef:function(n){this.container=n},maskRef:function(n){this.mask=n},contentRef:function(n){this.content=n},headerContainerRef:function(n){this.headerContainer=n},closeButtonRef:function(n){this.closeButton=n},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){n.isOutsideClicked(t)&&n.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(n){return this.container&&!this.container.contains(n.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:L,ripple:E},components:{Portal:B,TimesIcon:O}};function l(e){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l(e)}function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?k(Object(t),!0).forEach(function(r){z(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function z(e,n,t){return n=F(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function F(e){var n=U(e,"string");return l(n)==="symbol"?n:String(n)}function U(e,n){if(l(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(l(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var $=["aria-modal"],q=["aria-label"];function X(e,n,t,r,s,i){var p=R("Portal"),w=m("ripple"),S=m("focustrap");return a(),h(p,null,{default:v(function(){return[s.containerVisible?(a(),d("div",o({key:0,ref:i.maskRef,onMousedown:n[2]||(n[2]=function(){return i.onMaskClick&&i.onMaskClick.apply(i,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position})},e.ptm("mask")),[x(A,{name:"p-sidebar",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:v(function(){return[e.visible?y((a(),d("div",o({key:0,ref:i.containerRef,class:e.cx("root"),role:"complementary","aria-modal":e.modal,onKeydown:n[1]||(n[1]=function(){return i.onKeydown&&i.onKeydown.apply(i,arguments)})},C(C({},e.$attrs),e.ptm("root"))),[g("div",o({ref:i.headerContainerRef,class:e.cx("header")},e.ptm("header")),[e.$slots.header?(a(),d("div",o({key:0,class:e.cx("headerContent")},e.ptm("headerContent")),[b(e.$slots,"header")],16)):c("",!0),e.showCloseIcon?y((a(),d("button",o({key:1,ref:i.closeButtonRef,autofocus:"",type:"button",class:e.cx("closeButton"),"aria-label":i.closeAriaLabel,onClick:n[0]||(n[0]=function(){return i.hide&&i.hide.apply(i,arguments)})},e.ptm("closeButton"),{"data-pc-group-section":"iconcontainer"}),[b(e.$slots,"closeicon",{},function(){return[(a(),h(D(e.closeIcon?"span":"TimesIcon"),o({class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,q)),[[w]]):c("",!0)],16),g("div",o({ref:i.contentRef,class:e.cx("content")},e.ptm("content")),[b(e.$slots,"default")],16)],16,$)),[[S]]):c("",!0)]}),_:3},8,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):c("",!0)]}),_:3})}N.render=X;export{N as s};
