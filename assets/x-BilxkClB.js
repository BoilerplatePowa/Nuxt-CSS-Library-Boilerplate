import{E as h}from"./iframe-BHDwIEoY.js";/**
 * @license lucide-vue-next v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,c,o)=>o?o.toUpperCase():c.toLowerCase()),y=e=>{const t=u(e);return t.charAt(0).toUpperCase()+t.slice(1)},g=(...e)=>e.filter((t,c,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===c).join(" ").trim(),m=e=>e==="";/**
 * @license lucide-vue-next v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=({name:e,iconNode:t,absoluteStrokeWidth:c,"absolute-stroke-width":o,strokeWidth:n,"stroke-width":i,size:s=a.width,color:p=a.stroke,...d},{slots:l})=>h("svg",{...a,...d,width:s,height:s,stroke:p,"stroke-width":m(c)||m(o)||c===!0||o===!0?Number(n||i||a["stroke-width"])*24/Number(s):n||i||a["stroke-width"],class:g("lucide",d.class,...e?[`lucide-${k(y(e))}-icon`,`lucide-${k(e)}`]:["lucide-icon"])},[...t.map(w=>h(...w)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=(e,t)=>(c,{slots:o,attrs:n})=>h(C,{...n,...c,iconNode:t,name:e},o);/**
 * @license lucide-vue-next v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=r("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=r("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=r("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=r("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=r("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=r("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);export{M as C,$ as X,A as a,L as b,x as c,f as d,r as e};
