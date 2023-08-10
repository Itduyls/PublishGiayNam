import{r as o,s as n,o as s,c as l,a as r,A as t,v as a}from"./entry.f5a07536.js";var p=`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.p-toolbar-group-start,
.p-toolbar-group-center,
.p-toolbar-group-end {
    display: flex;
    align-items: center;
}

.p-toolbar-group-left,
.p-toolbar-group-right {
    display: flex;
    align-items: center;
}
`,d={root:"p-toolbar p-component",start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},i=o(p,{name:"toolbar",manual:!0}),c=i.load,b={name:"BaseToolbar",extends:n,props:{"aria-labelledby":{type:String,default:null}},css:{classes:d,loadStyle:c},provide:function(){return{$parentInstance:this}}},u={name:"Toolbar",extends:b},g=["aria-labelledby"];function m(e,y,v,f,$,S){return s(),l("div",a({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptm("root"),{"data-pc-name":"toolbar"}),[r("div",a({class:e.cx("start"),"data-pc-section":"start"},e.ptm("start")),[t(e.$slots,"start")],16),r("div",a({class:e.cx("center"),"data-pc-section":"center"},e.ptm("center")),[t(e.$slots,"center")],16),r("div",a({class:e.cx("end"),"data-pc-section":"end"},e.ptm("end")),[t(e.$slots,"end")],16)],16,g)}u.render=m;export{u as s};
