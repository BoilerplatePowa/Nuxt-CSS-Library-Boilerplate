import"./Accordion-n5nSMP4R.js";import"./Avatar-CYtkw-si.js";import"./Badge-CFZRYDZb.js";import"./Card-CTEhvTcJ.js";import"./Carousel-DcLqzuwi.js";import"./ChatBubble-C8kwEA0_.js";import"./Collapse-DDAfRXRR.js";import"./Countdown-B3HSOGk0.js";import"./Kbd-BxqDxQJ-.js";import{d as R,c as y,a as l,o as s,m as v,b as f,n as p,e as h,s as $,t as T,F as L,f as q,i as W,k as P,x as E,y as U,r as F,h as J}from"./iframe-DxBZQA7Y.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const X=["innerHTML"],Z={key:2,class:"stat-actions"},ee={key:0,class:"flex gap-2"},ae=R({__name:"Stat",props:{title:{},value:{},description:{},icon:{},trend:{default:"neutral"},variant:{default:"default"},size:{default:"md"},actions:{},prefix:{},suffix:{},formatNumber:{type:Boolean,default:!1}},setup(_){const o=_,n=y(()=>{const a=["stat"];return o.size==="sm"?a.push("stat-sm"):o.size==="lg"&&a.push("stat-lg"),a.join(" ")}),k=y(()=>{const a=[];return o.variant==="primary"?a.push("text-primary"):o.variant==="secondary"?a.push("text-secondary"):o.variant==="accent"&&a.push("text-accent"),a.join(" ")}),m=y(()=>{const a=[];return o.variant==="primary"?a.push("text-primary"):o.variant==="secondary"?a.push("text-secondary"):o.variant==="accent"?a.push("text-accent"):o.variant==="info"?a.push("text-info"):o.variant==="success"?a.push("text-success"):o.variant==="warning"?a.push("text-warning"):o.variant==="error"&&a.push("text-error"),a.join(" ")}),b=y(()=>{const a=[];return o.trend==="up"?a.push("text-success"):o.trend==="down"&&a.push("text-error"),a.join(" ")}),z=y(()=>{const a=[];return o.variant==="primary"?a.push("text-primary"):o.variant==="secondary"?a.push("text-secondary"):o.variant==="accent"&&a.push("text-accent"),a.join(" ")}),C=y(()=>{let a=o.value;return o.formatNumber&&typeof a=="number"&&(a=a.toLocaleString()),`${o.prefix||""}${a}${o.suffix||""}`});return(a,B)=>(s(),l("div",{class:p(n.value)},[a.icon||a.$slots.icon?(s(),l("div",{key:0,class:p(["stat-figure",z.value])},[h(a.$slots,"icon",{},()=>[a.icon?(s(),l("div",{key:0,class:"text-2xl",innerHTML:a.icon},null,8,X)):v("",!0)],!0)],2)):v("",!0),f("div",{class:p(["stat-title",k.value])},[h(a.$slots,"title",{},()=>[$(T(a.title),1)],!0)],2),f("div",{class:p(["stat-value",m.value])},[h(a.$slots,"value",{},()=>[$(T(C.value),1)],!0)],2),a.description||a.$slots.description?(s(),l("div",{key:1,class:p(["stat-desc",b.value])},[h(a.$slots,"description",{},()=>[$(T(a.description),1)],!0)],2)):v("",!0),a.actions||a.$slots.actions?(s(),l("div",Z,[h(a.$slots,"actions",{},()=>[a.actions?(s(),l("div",ee,[(s(!0),l(L,null,q(a.actions,g=>(s(),W(U(g.component||"button"),E({key:g.label},{ref_for:!0},g.props,{onClick:g.onClick}),{default:P(()=>[$(T(g.label),1)]),_:2},1040,["onClick"]))),128))])):v("",!0)],!0)])):v("",!0)],2))}});ae.__docgenInfo={exportName:"default",displayName:"Stat",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"description",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"string"}},{name:"trend",required:!1,type:{name:"union",elements:[{name:'"up"'},{name:'"down"'},{name:'"neutral"'}]},defaultValue:{func:!1,value:"'neutral'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"StatAction"}]}},{name:"prefix",required:!1,type:{name:"string"}},{name:"suffix",required:!1,type:{name:"string"}},{name:"formatNumber",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"},{name:"title"},{name:"value"},{name:"description"},{name:"actions"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataDisplay/Stat.vue"]};const te={class:"overflow-x-auto"},se={key:0},ne=["onClick"],re={class:"flex items-center gap-2"},le={key:0,class:"text-xs opacity-50"},oe={key:0},ie={key:1},ue=["onClick"],de={key:1},ce={key:0,class:"flex justify-center items-center p-8"},me={key:1,class:"text-center p-8 text-base-content/70"},pe=R({__name:"Table",props:{columns:{},data:{default:()=>[]},size:{default:"md"},variant:{default:"default"},selectable:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},emptyText:{default:"No data available"},rowKey:{default:"id"}},emits:["row-click","sort-change"],setup(_,{emit:o}){const n=_,k=o,m=F(""),b=F("asc"),z=y(()=>{const e=["table","w-full"];return n.size==="xs"?e.push("table-xs"):n.size==="sm"?e.push("table-sm"):n.size==="lg"&&e.push("table-lg"),n.variant==="zebra"?e.push("table-zebra"):n.variant==="compact"?e.push("table-compact"):n.variant==="bordered"&&e.push("table-bordered"),n.hoverable&&e.push("table-hover"),e.join(" ")}),C=y(()=>m.value?[...n.data].sort((e,i)=>{const r=t(e,{key:m.value}),S=t(i,{key:m.value});let u=0;return r<S&&(u=-1),r>S&&(u=1),b.value==="desc"?-u:u}):n.data),a=e=>{const i=[];return e.sortable&&i.push("cursor-pointer","hover:bg-base-200","transition-colors"),e.align==="center"?i.push("text-center"):e.align==="right"&&i.push("text-right"),i.join(" ")},B=(e,i)=>{const r=[];return n.selectable&&r.push("cursor-pointer"),r.join(" ")},g=(e,i)=>{const r=[];return e.align==="center"?r.push("text-center"):e.align==="right"&&r.push("text-right"),r.join(" ")},w=(e,i)=>e[n.rowKey]||i.toString(),t=(e,i)=>e[i.key],d=(e,i)=>{if(e==null)return"";switch(i.format){case"number":return typeof e=="number"?e.toLocaleString():String(e);case"currency":return typeof e=="number"?e.toLocaleString("en-US",{style:"currency",currency:"USD"}):String(e);case"date":return e instanceof Date?e.toLocaleDateString():String(e);case"boolean":return e?"Yes":"No";default:return String(e)}},c=e=>{e.sortable&&(m.value===e.key?b.value=b.value==="asc"?"desc":"asc":(m.value=e.key,b.value="asc"),k("sort-change",e,b.value))},x=(e,i,r)=>{n.selectable&&k("row-click",e,i,r)};return(e,i)=>(s(),l("div",te,[f("table",{class:p(z.value)},[e.showHeader?(s(),l("thead",se,[f("tr",null,[(s(!0),l(L,null,q(e.columns,r=>(s(),l("th",{key:r.key,class:p(a(r)),onClick:S=>c(r)},[f("div",re,[f("span",null,T(r.title),1),r.sortable?(s(),l("span",le,[m.value===r.key?(s(),l("span",oe,T(b.value==="asc"?"↑":"↓"),1)):(s(),l("span",ie,"↕"))])):v("",!0)])],10,ne))),128))])])):v("",!0),f("tbody",null,[h(e.$slots,"default",{},()=>[(s(!0),l(L,null,q(C.value,(r,S)=>(s(),l("tr",{key:w(r,S),class:p(B()),onClick:u=>x(r,S,u)},[(s(!0),l(L,null,q(e.columns,u=>(s(),l("td",{key:u.key,class:p(g(u))},[h(e.$slots,`cell-${u.key}`,{row:r,column:u,value:t(r,u),index:S},()=>[u.component?(s(),W(U(u.component),E({key:0,ref_for:!0},u.componentProps,{value:t(r,u),row:r}),null,16,["value","row"])):(s(),l("span",de,T(d(t(r,u),u)),1))],!0)],2))),128))],10,ue))),128))],!0)])],2),e.loading?(s(),l("div",ce,i[0]||(i[0]=[f("span",{class:"loading loading-spinner loading-lg"},null,-1)]))):v("",!0),!e.loading&&C.value.length===0?(s(),l("div",me,[h(e.$slots,"empty",{},()=>[$(T(e.emptyText),1)],!0)])):v("",!0)]))}});pe.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"columns",required:!0,type:{name:"Array",elements:[{name:"TableColumn"}]}},{name:"data",required:!1,type:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}]}]},defaultValue:{func:!1,value:"() => []"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"zebra"'},{name:'"compact"'},{name:'"bordered"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"selectable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hoverable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showHeader",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"emptyText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'No data available'"}},{name:"rowKey",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'id'"}}],events:[{name:"row-click",type:{names:["Record"],elements:[{name:"string"},{name:"any"}]}},{name:"sort-change",type:{names:["TableColumn"]}}],slots:[{name:"default"},{name:"`cell-${column.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"column",title:"binding"},{name:"value",title:"binding"},{name:"index",title:"binding"}]},{name:"empty"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataDisplay/Table.vue"]};const be={class:"w-full"},fe=["aria-selected","onClick"],ve={key:0,class:"tab-content mt-4"},ge={key:1,class:"tab-content mt-4"},ye=["innerHTML"],G=R({__name:"Tabs",props:{tabs:{default:()=>[]},modelValue:{},variant:{default:"default"},size:{default:"md"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","tab-change"],setup(_,{emit:o}){const n=_,k=o,m=F(0);J(()=>n.modelValue,t=>{if(t!==void 0){const d=n.tabs.findIndex(c=>w(c)===t);d>=0&&(m.value=d)}},{immediate:!0});const b=y(()=>{const t=["tabs"];return n.variant==="bordered"?t.push("tabs-bordered"):n.variant==="lifted"?t.push("tabs-lifted"):n.variant==="boxed"&&t.push("tabs-boxed"),n.size==="xs"?t.push("tabs-xs"):n.size==="sm"?t.push("tabs-sm"):n.size==="lg"&&t.push("tabs-lg"),t.join(" ")}),z=(t,d)=>{const c=["tab"];return C(t,d)&&c.push("tab-active"),(t.disabled||n.disabled)&&c.push("tab-disabled"),c.join(" ")},C=(t,d)=>n.modelValue!==void 0?w(t)===n.modelValue:d===m.value,a=(t,d,c)=>{if(t.disabled||n.disabled){c.preventDefault();return}m.value=d;const x=w(t);k("update:modelValue",x),k("tab-change",t,d)},B=(t,d)=>w(t).toString()||d.toString(),g=t=>{let d=t.label;return t.badge&&(d+=` (${t.badge})`),d},w=t=>t.value!==void 0?t.value:t.label;return(t,d)=>(s(),l("div",be,[f("div",{class:p(b.value),role:"tablist"},[(s(!0),l(L,null,q(t.tabs,(c,x)=>(s(),l("a",{key:B(c,x),class:p(z(c,x)),"aria-selected":C(c,x),role:"tab",onClick:e=>a(c,x,e)},T(g(c)),11,fe))),128))],2),t.$slots.default?(s(),l("div",ve,[h(t.$slots,"default",{},void 0,!0)])):t.tabs.length>0&&t.tabs[m.value]?.content?(s(),l("div",ge,[f("div",{innerHTML:t.tabs[m.value].content},null,8,ye)])):v("",!0)]))}}),O=Q(G,[["__scopeId","data-v-48a00ecf"]]);G.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",required:!1,type:{name:"Array",elements:[{name:"Tab"}]},defaultValue:{func:!1,value:"() => []"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"lifted"'},{name:'"boxed"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"tab-change",type:{names:["Tab"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataDisplay/Tabs.vue"]};const qe={title:"Data Display/Tabs",component:O,parameters:{layout:"centered",docs:{description:{component:"A flexible tabs component with multiple variants and content support."}}},tags:["autodocs"],argTypes:{tabs:{control:{type:"object"},description:"Array of tab objects"},modelValue:{control:{type:"text"},description:"Active tab value"},variant:{control:{type:"select"},options:["default","bordered","lifted","boxed"],description:"Tabs variant"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Tabs size"},disabled:{control:{type:"boolean"},description:"Disable all tabs"},"onUpdate:modelValue":{action:"update:modelValue"},"onTab-change":{action:"tab-change"}}},V=[{label:"Tab 1",content:"<p>Content for tab 1. This is some sample content to show how the tab content area works.</p>"},{label:"Tab 2",content:"<p>Content for tab 2. You can put any HTML content here, including components.</p>"},{label:"Tab 3",content:"<p>Content for tab 3. Each tab can have different content and styling.</p>"},{label:"Disabled",content:"<p>This tab is disabled.</p>",disabled:!0}],N={args:{tabs:V}},D={args:{tabs:V,variant:"bordered"}},j={args:{tabs:V,variant:"lifted"}},A={args:{tabs:V,variant:"boxed"}},H={args:{tabs:[{label:"Messages",badge:"5",content:"<p>You have 5 unread messages.</p>"},{label:"Notifications",badge:"12",content:"<p>You have 12 notifications.</p>"},{label:"Settings",content:"<p>Configure your preferences here.</p>"}]}},M={args:{tabs:V,size:"sm"}},I={args:{tabs:V,size:"lg"}},K={args:{tabs:V,modelValue:"Tab 2"}},Y={render:()=>({components:{Tabs:O},setup(){return{simpleTabs:[{label:"Home",content:"<p>Welcome to the home page!</p>"},{label:"About",content:"<p>Learn more about us.</p>"},{label:"Contact",content:"<p>Get in touch with us.</p>"}]}},template:`
      <div class="space-y-8 w-full max-w-2xl">
        <div>
          <h3 class="text-lg font-semibold mb-3">Default</h3>
          <Tabs :tabs="simpleTabs" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Bordered</h3>
          <Tabs :tabs="simpleTabs" variant="bordered" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Lifted</h3>
          <Tabs :tabs="simpleTabs" variant="lifted" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Boxed</h3>
          <Tabs :tabs="simpleTabs" variant="boxed" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="space-y-4">
            <Tabs :tabs="[{label: 'Small'}, {label: 'Tabs'}]" size="sm" variant="bordered" />
            <Tabs :tabs="[{label: 'Medium'}, {label: 'Tabs'}]" size="md" variant="bordered" />
            <Tabs :tabs="[{label: 'Large'}, {label: 'Tabs'}]" size="lg" variant="bordered" />
          </div>
        </div>
      </div>
    `})};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs
  }
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'bordered'
  }
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'lifted'
  }
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'boxed'
  }
}`,...A.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'Messages',
      badge: '5',
      content: '<p>You have 5 unread messages.</p>'
    }, {
      label: 'Notifications',
      badge: '12',
      content: '<p>You have 12 notifications.</p>'
    }, {
      label: 'Settings',
      content: '<p>Configure your preferences here.</p>'
    }]
  }
}`,...H.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    size: 'sm'
  }
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    size: 'lg'
  }
}`,...I.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    modelValue: 'Tab 2'
  }
}`,...K.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs
    },
    setup() {
      const simpleTabs = [{
        label: 'Home',
        content: '<p>Welcome to the home page!</p>'
      }, {
        label: 'About',
        content: '<p>Learn more about us.</p>'
      }, {
        label: 'Contact',
        content: '<p>Get in touch with us.</p>'
      }];
      return {
        simpleTabs
      };
    },
    template: \`
      <div class="space-y-8 w-full max-w-2xl">
        <div>
          <h3 class="text-lg font-semibold mb-3">Default</h3>
          <Tabs :tabs="simpleTabs" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Bordered</h3>
          <Tabs :tabs="simpleTabs" variant="bordered" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Lifted</h3>
          <Tabs :tabs="simpleTabs" variant="lifted" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Boxed</h3>
          <Tabs :tabs="simpleTabs" variant="boxed" />
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="space-y-4">
            <Tabs :tabs="[{label: 'Small'}, {label: 'Tabs'}]" size="sm" variant="bordered" />
            <Tabs :tabs="[{label: 'Medium'}, {label: 'Tabs'}]" size="md" variant="bordered" />
            <Tabs :tabs="[{label: 'Large'}, {label: 'Tabs'}]" size="lg" variant="bordered" />
          </div>
        </div>
      </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}};const Be=["Default","Bordered","Lifted","Boxed","WithBadges","Small","Large","Controlled","AllVariants"];export{Y as AllVariants,D as Bordered,A as Boxed,K as Controlled,N as Default,I as Large,j as Lifted,M as Small,H as WithBadges,Be as __namedExportsOrder,qe as default};
