import{S as y,aw as g,a4 as P,ae as m,k as x,aj as _,m as b,ax as w,ac as O}from"./entry.f5a07536.js";const C=()=>null;function B(...s){const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[e,l,a={}]=s;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=a.server??!0,a.default=a.default??C,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0;const t=_(),f=()=>t.isHydrating?t.payload.data[e]:t.static.data[e],d=()=>f()!==void 0;t._asyncData[e]||(t._asyncData[e]={data:y(f()??a.default()),pending:y(!d()),error:g(t.payload._errors,e),status:y("idle")});const r={...t._asyncData[e]};r.refresh=r.execute=(o={})=>{if(t._asyncDataPromises[e]){if(o.dedupe===!1)return t._asyncDataPromises[e];t._asyncDataPromises[e].cancelled=!0}if((o._initial||t.isHydrating&&o._initial!==!1)&&d())return f();r.pending.value=!0,r.status.value="pending";const u=new Promise((i,c)=>{try{i(l(t))}catch(D){c(D)}}).then(i=>{if(u.cancelled)return t._asyncDataPromises[e];let c=i;a.transform&&(c=a.transform(i)),a.pick&&(c=k(c,a.pick)),r.data.value=c,r.error.value=null,r.status.value="success"}).catch(i=>{if(u.cancelled)return t._asyncDataPromises[e];r.error.value=i,r.data.value=b(a.default()),r.status.value="error"}).finally(()=>{u.cancelled||(r.pending.value=!1,t.payload.data[e]=r.data.value,r.error.value&&(t.payload._errors[e]=w(r.error.value)),delete t._asyncDataPromises[e])});return t._asyncDataPromises[e]=u,t._asyncDataPromises[e]};const p=()=>r.refresh({_initial:!0}),h=a.server!==!1&&t.payload.serverRendered;{const o=O();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const i=o._nuxtOnBeforeMountCbs;o&&(P(()=>{i.forEach(c=>{c()}),i.splice(0,i.length)}),m(()=>i.splice(0,i.length)))}h&&t.isHydrating&&d()?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):o&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(p):a.immediate&&p(),a.watch&&x(a.watch,()=>r.refresh());const u=t.hook("app:data:refresh",i=>{if(!i||i.includes(e))return r.refresh()});o&&m(u)}const v=Promise.resolve(t._asyncDataPromises[e]).then(()=>r);return Object.assign(v,r),v}function M(s){const n=_(),e=Object.keys(n.payload.data),l=s?typeof s=="function"?e.filter(s):Array.isArray(s)?s:[s]:e;for(const a of l)a in n.payload.data&&(n.payload.data[a]=void 0),a in n.payload._errors&&(n.payload._errors[a]=void 0),n._asyncData[a]&&(n._asyncData[a].data.value=void 0,n._asyncData[a].error.value=void 0,n._asyncData[a].pending.value=!1,n._asyncData[a].status.value="idle"),a in n._asyncDataPromises&&(n._asyncDataPromises[a]=void 0)}function k(s,n){const e={};for(const l of n)e[l]=s[l];return e}export{M as c,B as u};
