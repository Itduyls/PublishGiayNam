import{a as u}from"./LoginView.78d7a22f.js";import{r as d,s as h,o,c as a,A as t,v as i,n as c,B as p,q as r,t as v}from"./entry.f5a07536.js";var y=`
.p-chip {
    display: inline-flex;
    align-items: center;
}

.p-chip-text {
    line-height: 1.5;
}

.p-chip-icon.pi {
    line-height: 1.5;
}

.p-chip-remove-icon {
    line-height: 1.5;
    cursor: pointer;
}

.p-chip img {
    border-radius: 50%;
}
`,f={root:function(n){var s=n.props;return["p-chip p-component",{"p-chip-image":s.image!=null}]},icon:"p-chip-icon",label:"p-chip-text",removeIcon:"p-chip-remove-icon"},g=d(y,{name:"chip",manual:!0}),b=g.load,k={name:"BaseChip",extends:h,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},css:{classes:f,loadStyle:b},provide:function(){return{$parentInstance:this}}},S={name:"Chip",extends:k,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(n){(n.key==="Enter"||n.key==="Backspace")&&this.close(n)},close:function(n){this.visible=!1,this.$emit("remove",n)}},components:{TimesCircleIcon:u}},C=["aria-label"],I=["src"];function $(e,n,s,w,m,l){return m.visible?(o(),a("div",i({key:0,class:e.cx("root"),"aria-label":e.label},e.ptm("root"),{"data-pc-name":"chip"}),[t(e.$slots,"default",{},function(){return[e.image?(o(),a("img",i({key:0,src:e.image},e.ptm("image")),null,16,I)):e.$slots.icon?(o(),c(p(e.$slots.icon),i({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(o(),a("span",i({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):r("",!0),e.label?(o(),a("div",i({key:3,class:e.cx("label")},e.ptm("label")),v(e.label),17)):r("",!0)]}),e.removable?t(e.$slots,"removeicon",{key:0,onClick:l.close,onKeydown:l.onKeydown},function(){return[(o(),c(p(e.removeIcon?"span":"TimesCircleIcon"),i({tabindex:"0",class:[e.cx("removeIcon"),e.removeIcon],onClick:l.close,onKeydown:l.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):r("",!0)],16,C)):r("",!0)}S.render=$;export{S as s};
