import{_ as r,f as s,j as m,a as R,D as V,p as c,E as j,F as y,G as B,u as N,H as k,x as v,v as S,I as $,J as T,K as O,L as P,M as C,e as x,d as n,t as M,N as w,h as z,O as q}from"./entry.68cf9234.js";import{u as H}from"./asyncData.811cc962.js";import{h as L,j as F}from"./ContentQuery.1e6de2b2.js";import{w as U,s as G,u as W,a as J}from"./utils.eecba191.js";import"./ContentDoc.c131ded0.js";import"./ContentList.3486e1af.js";import"./ContentRenderer.573997f3.js";import"./ContentRendererMarkdown.f06e29cf.js";import"./ContentSlot.d1fe931b.js";import"./DocumentDrivenEmpty.1ce3b726.js";import"./DocumentDrivenNotFound.46a973d3.js";import"./Markdown.eaed0cc8.js";import"./ProseCode.dcd36e59.js";import"./_commonjsHelpers.fed2a411.js";const K=async t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const i=U(e?`/navigation/${L(e)}.json`:"/navigation");if(G())return(await r(()=>import("./client-db.b4d9055e.js"),["./client-db.b4d9055e.js","./entry.68cf9234.js","./entry.046fb950.css","./utils.eecba191.js","./ContentQuery.1e6de2b2.js","./asyncData.811cc962.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(o=>o.generateNavigation))(e||{});const a=await $fetch(i,{method:"GET",responseType:"json",params:{_params:F(e||{}),previewToken:W("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const A={},Y=s({props:{name:String},async setup(t,e){const i=await A[t.name]().then(a=>a.default||a);return()=>m(i,{},e.slots)}}),Q=s({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const i=B("_route"),a=i===R()?V():i,u=c(()=>{var o,l;return(l=(o=N(t.name))!=null?o:a.meta.layout)!=null?l:"default"});return()=>{var d;const o=u.value&&u.value in A,l=(d=a.meta.layoutTransition)!=null?d:j;return y(k,o&&l,{default:()=>y(Y,o&&{key:u.value,name:u.value,hasTransition:void 0},e.slots).default()}).default()}}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Z=s({emits:{error(t){return!0}},setup(t,{slots:e,emit:i}){const a=v(null),u=S();return $(o=>{if(!u.isHydrating)return i("error",o),a.value=o,!1}),()=>{var o,l;return a.value?(o=e.error)==null?void 0:o.call(e,{error:a}):(l=e.default)==null?void 0:l.call(e)}}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),et=s({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:i}){const a=v(!1);return T(()=>{a.value=!0}),u=>{var _;if(a.value)return(_=e.default)==null?void 0:_.call(e);const o=e.fallback||e.placeholder;if(o)return o();const l=u.fallback||u.placeholder||"",d=u.fallbackTag||u.placeholderTag||"span";return O(d,i,l)}}}),g=new WeakMap;function rt(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(i,...a)=>{var u;if(i.mounted$){const o=t.render(i,...a);return o.children===null||typeof o.children=="string"?P(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):m(o)}else return m("div",(u=i.$attrs)!=null?u:i._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(i,a)=>{var o;const u=v(!1);return T(()=>{u.value=!0}),Promise.resolve(((o=t.setup)==null?void 0:o.call(t,i,a))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(...d)=>{if(u.value){const _=l(...d);return _.children===null||typeof _.children=="string"?P(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):m(_)}else return m("div",a.attrs)})},g.set(t,e),e}const nt=Object.freeze(Object.defineProperty({__proto__:null,default:et,createClientOnly:rt},Symbol.toStringTag,{value:"Module"})),ot=s({name:"DevOnly",setup(t,e){return()=>null}}),it=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"})),at=s({name:"ServerPlaceholder",render(){return O("div")}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),lt=s({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const i=_t({duration:t.duration,throttle:t.throttle}),a=S();return a.hook("page:start",i.start),a.hook("page:finish",i.finish),C(()=>i.clear),()=>m("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${i.progress.value}%`,height:`${t.height}px`,opacity:i.isLoading.value?1:0,background:t.color,backgroundSize:`${100/i.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function _t(t){const e=v(0),i=v(!1),a=c(()=>1e4/t.duration);let u=null,o=null;function l(){_(),e.value=0,i.value=!0,t.throttle?o=setTimeout(E,t.throttle):E()}function d(){e.value=100,D()}function _(){clearInterval(u),clearTimeout(o),u=null,o=null}function I(b){e.value=Math.min(100,e.value+b)}function D(){_(),setTimeout(()=>{i.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){u=setInterval(()=>{I(a.value)},100)}return{progress:e,isLoading:i,start:l,finish:d,clear:_}}const st=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),dt=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(i,a)=>(x(()=>t({...dt(i),...a.attrs},a)),()=>{var u,o;return e?(o=(u=a.slots).default)==null?void 0:o.call(u):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},mt=s({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const i={...t},a=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return a&&(i.children=a),{noscript:[i]}})}),pt=s({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),ft=s({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),ht=s({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var a,u,o;return{title:((o=(u=(a=e.default)==null?void 0:a.call(e))==null?void 0:u[0])==null?void 0:o.children)||null}})}),vt=s({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),gt=s({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u,o,l;const i={...t},a=(l=(o=(u=e.default)==null?void 0:u.call(e))==null?void 0:o[0])==null?void 0:l.children;return a&&(i.children=a),{style:[i]}})}),ct=s({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var i,a;return(a=(i=e.slots).default)==null?void 0:a.call(i)}}),Et=s({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),yt=s({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,NoScript:mt,Link:pt,Base:ft,Title:ht,Meta:vt,Style:gt,Head:ct,Html:Et,Body:yt},Symbol.toStringTag,{value:"Module"}));n(()=>r(()=>import("./ContentDoc.c131ded0.js"),["./ContentDoc.c131ded0.js","./entry.68cf9234.js","./entry.046fb950.css","./ContentRenderer.573997f3.js","./ContentRendererMarkdown.f06e29cf.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.1e6de2b2.js","./asyncData.811cc962.js","./utils.eecba191.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentList.3486e1af.js"),["./ContentList.3486e1af.js","./ContentQuery.1e6de2b2.js","./entry.68cf9234.js","./entry.046fb950.css","./asyncData.811cc962.js","./utils.eecba191.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>St),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentQuery.1e6de2b2.js").then(t=>t.C),["./ContentQuery.1e6de2b2.js","./entry.68cf9234.js","./entry.046fb950.css","./asyncData.811cc962.js","./utils.eecba191.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRenderer.573997f3.js"),["./ContentRenderer.573997f3.js","./ContentRendererMarkdown.f06e29cf.js","./entry.68cf9234.js","./entry.046fb950.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRendererMarkdown.f06e29cf.js"),["./ContentRendererMarkdown.f06e29cf.js","./entry.68cf9234.js","./entry.046fb950.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentSlot.d1fe931b.js"),["./ContentSlot.d1fe931b.js","./utils.eecba191.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenEmpty.1ce3b726.js"),["./DocumentDrivenEmpty.1ce3b726.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenNotFound.46a973d3.js"),["./DocumentDrivenNotFound.46a973d3.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./Markdown.eaed0cc8.js"),["./Markdown.eaed0cc8.js","./ContentSlot.d1fe931b.js","./utils.eecba191.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseA.3b9bb384.js"),["./ProseA.3b9bb384.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseBlockquote.1993e70f.js"),["./ProseBlockquote.1993e70f.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCode.dcd36e59.js"),["./ProseCode.dcd36e59.js","./entry.68cf9234.js","./entry.046fb950.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCodeInline.77d15511.js"),["./ProseCodeInline.77d15511.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseEm.ff34f34c.js"),["./ProseEm.ff34f34c.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH1.b64d7bb6.js"),["./ProseH1.b64d7bb6.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH2.f050fc04.js"),["./ProseH2.f050fc04.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH3.c6508993.js"),["./ProseH3.c6508993.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH4.28790e1e.js"),["./ProseH4.28790e1e.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH5.7f2c04dd.js"),["./ProseH5.7f2c04dd.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH6.f3cd2289.js"),["./ProseH6.f3cd2289.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseHr.88d734a7.js"),["./ProseHr.88d734a7.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseImg.23a98fb2.js"),["./ProseImg.23a98fb2.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseLi.08ac31d4.js"),["./ProseLi.08ac31d4.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseOl.4ed4b4a3.js"),["./ProseOl.4ed4b4a3.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseP.ddf4e628.js"),["./ProseP.ddf4e628.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseStrong.bab9f106.js"),["./ProseStrong.bab9f106.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTable.f87c19fc.js"),["./ProseTable.f87c19fc.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTbody.64dda6a9.js"),["./ProseTbody.64dda6a9.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTd.5fd42ca5.js"),["./ProseTd.5fd42ca5.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTh.a55fcffa.js"),["./ProseTh.a55fcffa.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseThead.3045efff.js"),["./ProseThead.3045efff.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTr.01a5d6ba.js"),["./ProseTr.01a5d6ba.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseUl.7f810b1e.js"),["./ProseUl.7f810b1e.js","./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./welcome.50a97edd.js"),["./welcome.50a97edd.js","./entry.68cf9234.js","./entry.046fb950.css","./asyncData.811cc962.js","./ContentQuery.1e6de2b2.js","./utils.eecba191.js","./ContentDoc.c131ded0.js","./ContentRenderer.573997f3.js","./ContentRendererMarkdown.f06e29cf.js","./_commonjsHelpers.fed2a411.js","./ContentList.3486e1af.js","./ContentSlot.d1fe931b.js","./DocumentDrivenEmpty.1ce3b726.js","./DocumentDrivenNotFound.46a973d3.js","./Markdown.eaed0cc8.js","./ProseCode.dcd36e59.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>nt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>it),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.68cf9234.js").then(t=>t.a0),["./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>st),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.68cf9234.js").then(t=>t.a1),["./entry.68cf9234.js","./entry.046fb950.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const Pt=s({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=M(t),i=c(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!i.value&&w("dd-navigation").value){const{navigation:u}=J();return{navigation:u}}const{data:a}=await H(`content-navigation-${L(i.value)}`,()=>K(i.value));return{navigation:a}},render(t){const e=z(),{navigation:i}=t,a=l=>m(q,{to:l._path},()=>l.title),u=(l,d)=>m("ul",d?{"data-level":d}:null,l.map(_=>_.children?m("li",null,[a(_),u(_.children,d+1)]):m("li",null,a(_)))),o=l=>u(l,0);return e!=null&&e.default?e.default({navigation:i,...this.$attrs}):o(i)}}),St=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"}));export{Pt as default};