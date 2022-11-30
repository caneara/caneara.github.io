import{_ as r,e as s,i as m,a as R,C as V,m as c,D as j,E as y,F as B,u as N,G as k,v,p as S,H as $,I as T,J as O,K as P,L as C,d as n,t as M,M as w,f as x,N as z}from"./entry.05baa7f2.js";import{u as q}from"./asyncData.aa6ba347.js";import{h as L,j as H}from"./ContentQuery.cd95a7bf.js";import{w as F,s as U,u as G,a as W}from"./utils.e375ce53.js";import"./ContentDoc.a3d880c8.js";import"./ContentList.616fa353.js";import"./ContentRenderer.5917d621.js";import"./ContentRendererMarkdown.fb32dc13.js";import"./ContentSlot.fa138745.js";import"./DocumentDrivenEmpty.1abea216.js";import"./DocumentDrivenNotFound.47a93506.js";import"./Markdown.60bd6037.js";import"./ProseCode.1ed6ef78.js";import{u as J}from"./composables.e77e7986.js";import"./_commonjsHelpers.fed2a411.js";const K=async t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const i=F(e?`/navigation/${L(e)}.json`:"/navigation");if(U())return(await r(()=>import("./client-db.dd95d9d2.js"),["./client-db.dd95d9d2.js","./entry.05baa7f2.js","./entry.197db9bc.css","./utils.e375ce53.js","./ContentQuery.cd95a7bf.js","./asyncData.aa6ba347.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(o=>o.generateNavigation))(e||{});const a=await $fetch(i,{method:"GET",responseType:"json",params:{_params:H(e||{}),previewToken:G("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const A={},Y=s({props:{name:String},async setup(t,e){const i=await A[t.name]().then(a=>a.default||a);return()=>m(i,{},e.slots)}}),Q=s({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const i=B("_route"),a=i===R()?V():i,u=c(()=>{var o,l;return(l=(o=N(t.name))!=null?o:a.meta.layout)!=null?l:"default"});return()=>{var d;const o=u.value&&u.value in A,l=(d=a.meta.layoutTransition)!=null?d:j;return y(k,o&&l,{default:()=>y(Y,o&&{key:u.value,name:u.value,hasTransition:void 0},e.slots).default()}).default()}}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Z=s({emits:{error(t){return!0}},setup(t,{slots:e,emit:i}){const a=v(null),u=S();return $(o=>{if(!u.isHydrating)return i("error",o),a.value=o,!1}),()=>{var o,l;return a.value?(o=e.error)==null?void 0:o.call(e,{error:a}):(l=e.default)==null?void 0:l.call(e)}}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),et=s({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:i}){const a=v(!1);return T(()=>{a.value=!0}),u=>{var _;if(a.value)return(_=e.default)==null?void 0:_.call(e);const o=e.fallback||e.placeholder;if(o)return o();const l=u.fallback||u.placeholder||"",d=u.fallbackTag||u.placeholderTag||"span";return O(d,i,l)}}}),g=new WeakMap;function rt(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(i,...a)=>{var u;if(i.mounted$){const o=t.render(i,...a);return o.children===null||typeof o.children=="string"?P(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):m(o)}else return m("div",(u=i.$attrs)!=null?u:i._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(i,a)=>{var o;const u=v(!1);return T(()=>{u.value=!0}),Promise.resolve(((o=t.setup)==null?void 0:o.call(t,i,a))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(...d)=>{if(u.value){const _=l(...d);return _.children===null||typeof _.children=="string"?P(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):m(_)}else return m("div",a.attrs)})},g.set(t,e),e}const nt=Object.freeze(Object.defineProperty({__proto__:null,default:et,createClientOnly:rt},Symbol.toStringTag,{value:"Module"})),ot=s({name:"DevOnly",setup(t,e){return()=>null}}),it=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"})),at=s({name:"ServerPlaceholder",render(){return O("div")}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),lt=s({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const i=_t({duration:t.duration,throttle:t.throttle}),a=S();return a.hook("page:start",i.start),a.hook("page:finish",i.finish),C(()=>i.clear),()=>m("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${i.progress.value}%`,height:`${t.height}px`,opacity:i.isLoading.value?1:0,background:t.color,backgroundSize:`${100/i.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function _t(t){const e=v(0),i=v(!1),a=c(()=>1e4/t.duration);let u=null,o=null;function l(){_(),e.value=0,i.value=!0,t.throttle?o=setTimeout(E,t.throttle):E()}function d(){e.value=100,D()}function _(){clearInterval(u),clearTimeout(o),u=null,o=null}function I(b){e.value=Math.min(100,e.value+b)}function D(){_(),setTimeout(()=>{i.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){u=setInterval(()=>{I(a.value)},100)}return{progress:e,isLoading:i,start:l,finish:d,clear:_}}const st=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),dt=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(i,a)=>(J(()=>t({...dt(i),...a.attrs},a)),()=>{var u,o;return e?(o=(u=a.slots).default)==null?void 0:o.call(u):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},mt=s({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u;const i={...t},a=(((u=e.default)==null?void 0:u.call(e))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return a&&(i.children=a),{noscript:[i]}})}),pt=s({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),ft=s({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),ht=s({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var a,u,o;return{title:((o=(u=(a=e.default)==null?void 0:a.call(e))==null?void 0:u[0])==null?void 0:o.children)||null}})}),vt=s({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),gt=s({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var u,o,l;const i={...t},a=(l=(o=(u=e.default)==null?void 0:u.call(e))==null?void 0:o[0])==null?void 0:l.children;return a&&(i.children=a),{style:[i]}})}),ct=s({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var i,a;return(a=(i=e.slots).default)==null?void 0:a.call(i)}}),Et=s({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),yt=s({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,NoScript:mt,Link:pt,Base:ft,Title:ht,Meta:vt,Style:gt,Head:ct,Html:Et,Body:yt},Symbol.toStringTag,{value:"Module"}));n(()=>r(()=>import("./ContentDoc.a3d880c8.js"),["./ContentDoc.a3d880c8.js","./entry.05baa7f2.js","./entry.197db9bc.css","./composables.e77e7986.js","./ContentRenderer.5917d621.js","./ContentRendererMarkdown.fb32dc13.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.cd95a7bf.js","./asyncData.aa6ba347.js","./utils.e375ce53.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentList.616fa353.js"),["./ContentList.616fa353.js","./ContentQuery.cd95a7bf.js","./entry.05baa7f2.js","./entry.197db9bc.css","./asyncData.aa6ba347.js","./utils.e375ce53.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>St),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentQuery.cd95a7bf.js").then(t=>t.C),["./ContentQuery.cd95a7bf.js","./entry.05baa7f2.js","./entry.197db9bc.css","./asyncData.aa6ba347.js","./utils.e375ce53.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRenderer.5917d621.js"),["./ContentRenderer.5917d621.js","./ContentRendererMarkdown.fb32dc13.js","./entry.05baa7f2.js","./entry.197db9bc.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRendererMarkdown.fb32dc13.js"),["./ContentRendererMarkdown.fb32dc13.js","./entry.05baa7f2.js","./entry.197db9bc.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentSlot.fa138745.js"),["./ContentSlot.fa138745.js","./utils.e375ce53.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenEmpty.1abea216.js"),["./DocumentDrivenEmpty.1abea216.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenNotFound.47a93506.js"),["./DocumentDrivenNotFound.47a93506.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./Markdown.60bd6037.js"),["./Markdown.60bd6037.js","./ContentSlot.fa138745.js","./utils.e375ce53.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseA.44793a8e.js"),["./ProseA.44793a8e.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseBlockquote.50bc4f41.js"),["./ProseBlockquote.50bc4f41.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCode.1ed6ef78.js"),["./ProseCode.1ed6ef78.js","./entry.05baa7f2.js","./entry.197db9bc.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCodeInline.fc760631.js"),["./ProseCodeInline.fc760631.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseEm.c89578ce.js"),["./ProseEm.c89578ce.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH1.7082e35f.js"),["./ProseH1.7082e35f.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH2.073c5422.js"),["./ProseH2.073c5422.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH3.635cd1f8.js"),["./ProseH3.635cd1f8.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH4.d5120e18.js"),["./ProseH4.d5120e18.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH5.67777f00.js"),["./ProseH5.67777f00.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH6.c743b2ce.js"),["./ProseH6.c743b2ce.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseHr.9aeb4e7e.js"),["./ProseHr.9aeb4e7e.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseImg.0475d931.js"),["./ProseImg.0475d931.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseLi.a370ceb7.js"),["./ProseLi.a370ceb7.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseOl.543ca0aa.js"),["./ProseOl.543ca0aa.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseP.265219b9.js"),["./ProseP.265219b9.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseStrong.212d07eb.js"),["./ProseStrong.212d07eb.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTable.f7eb10cc.js"),["./ProseTable.f7eb10cc.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTbody.4c554ccc.js"),["./ProseTbody.4c554ccc.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTd.959a09e7.js"),["./ProseTd.959a09e7.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTh.f7d380e9.js"),["./ProseTh.f7d380e9.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseThead.0369d938.js"),["./ProseThead.0369d938.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTr.1f4a1b23.js"),["./ProseTr.1f4a1b23.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseUl.834fde9e.js"),["./ProseUl.834fde9e.js","./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./welcome.a4443d9c.js"),["./welcome.a4443d9c.js","./composables.e77e7986.js","./entry.05baa7f2.js","./entry.197db9bc.css","./asyncData.aa6ba347.js","./ContentQuery.cd95a7bf.js","./utils.e375ce53.js","./ContentDoc.a3d880c8.js","./ContentRenderer.5917d621.js","./ContentRendererMarkdown.fb32dc13.js","./_commonjsHelpers.fed2a411.js","./ContentList.616fa353.js","./ContentSlot.fa138745.js","./DocumentDrivenEmpty.1abea216.js","./DocumentDrivenNotFound.47a93506.js","./Markdown.60bd6037.js","./ProseCode.1ed6ef78.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>nt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>it),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.05baa7f2.js").then(t=>t.$),["./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>st),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.05baa7f2.js").then(t=>t.a0),["./entry.05baa7f2.js","./entry.197db9bc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const Pt=s({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=M(t),i=c(()=>{var u;return typeof((u=e.value)==null?void 0:u.params)=="function"?e.value.params():e.value});if(!i.value&&w("dd-navigation").value){const{navigation:u}=W();return{navigation:u}}const{data:a}=await q(`content-navigation-${L(i.value)}`,()=>K(i.value));return{navigation:a}},render(t){const e=x(),{navigation:i}=t,a=l=>m(z,{to:l._path},()=>l.title),u=(l,d)=>m("ul",d?{"data-level":d}:null,l.map(_=>_.children?m("li",null,[a(_),u(_.children,d+1)]):m("li",null,a(_)))),o=l=>u(l,0);return e!=null&&e.default?e.default({navigation:i,...this.$attrs}):o(i)}}),St=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"}));export{Pt as default};