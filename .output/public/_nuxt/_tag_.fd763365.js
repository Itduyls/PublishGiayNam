import{_,j as o,S as c,i as u,ai as d,o as b,c as m,a as e,b as g,K as h,p as f,e as k}from"./entry.f5a07536.js";import{H as v}from"./Headbar.8905abfb.js";import"./dataview.esm.3d9cecee.js";import"./toolbar.esm.6c6ac948.js";import"./nuxt-link.9006b8ce.js";import"./asyncData.090faa5e.js";import"./favicon.298222c1.js";import"./sidebar.esm.e7492a36.js";import"./paginator.esm.82549e9d.js";import"./index.esm.d51ffea6.js";const x=t=>(f("data-v-b7c5b987"),t=t(),k(),t),y={class:"w-full"},P=x(()=>e("div",{class:"w-full"},[e("div",{class:"p-grid"},[e("div",{class:"col-12 p-0"}," s ")])],-1)),S={__name:"[tag]",async setup(t){let r,i;const l=o().public.apiBase;c([{src:"/Portals/thumbnails/background1s.png",alt:"background-1",title:"Title 1"},{src:"/Portals/thumbnails/background2s.png",alt:"background-2",title:"Title 2"},{src:"/Portals/thumbnails/background3s.png",alt:"background-3",title:"Title 3"}]);const n=c([]);o().public.SecretKey,u("cryptojs"),c();const p=o().public.publictoken;return[r,i]=d(()=>$fetch("/api/Proc/CallPublicProc",{method:"POST",baseURL:l,body:{proc:"home_list",par:[{par:"status",va:!0}],publictoken:p}}).then(a=>{let s=JSON.parse(a.data);s[0].length>0&&(n.value=s[0])}).catch(a=>{console.log("lỗi",a),swal.fire({title:"Error!",text:"Có lỗi xảy ra, vui lòng kiểm tra lại!",icon:"error",confirmButtonText:"OK"})})),await r,i(),(a,s)=>(b(),m(h,null,[e("div",y,[g(v)]),P],64))}},E=_(S,[["__scopeId","data-v-b7c5b987"]]);export{E as default};
