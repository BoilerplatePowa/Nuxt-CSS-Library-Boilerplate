import"./Accordion-DmFnTDFQ.js";import"./Avatar-BfTS5ccS.js";import"./Badge-DACvJfXo.js";import"./Card-O1tTcyJt.js";import"./Carousel-CQlnjf9m.js";import"./ChatBubble-Cr3M7Dbw.js";import"./Collapse-DRE6a2AJ.js";import"./Countdown-_Fg3pB06.js";import"./Kbd-BgqmwWCU.js";import{d as R,c as T,a as r,o as t,m as b,b as v,n as f,e as x,s as z,t as g,F as q,f as B,i as W,k as P,x as E,y as U,r as F,h as J}from"./iframe-TBEUVV-G.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const X=["innerHTML"],Z={key:2,class:"stat-actions"},ee={key:0,class:"flex gap-2"},ae=R({__name:"Stat",props:{title:{},value:{},description:{},icon:{},trend:{default:"neutral"},variant:{default:"default"},size:{default:"md"},actions:{},prefix:{},suffix:{},formatNumber:{type:Boolean,default:!1}},setup(V){const l=V,n=T(()=>{const a=["stat"];return l.size==="sm"?a.push("stat-sm"):l.size==="lg"&&a.push("stat-lg"),a.join(" ")}),k=T(()=>{const a=[];return l.variant==="primary"?a.push("text-primary"):l.variant==="secondary"?a.push("text-secondary"):l.variant==="accent"&&a.push("text-accent"),a.join(" ")}),m=T(()=>{const a=[];return l.variant==="primary"?a.push("text-primary"):l.variant==="secondary"?a.push("text-secondary"):l.variant==="accent"?a.push("text-accent"):l.variant==="info"?a.push("text-info"):l.variant==="success"?a.push("text-success"):l.variant==="warning"?a.push("text-warning"):l.variant==="error"&&a.push("text-error"),a.join(" ")}),p=T(()=>{const a=[];return l.trend==="up"?a.push("text-success"):l.trend==="down"&&a.push("text-error"),a.join(" ")}),w=T(()=>{const a=[];return l.variant==="primary"?a.push("text-primary"):l.variant==="secondary"?a.push("text-secondary"):l.variant==="accent"&&a.push("text-accent"),a.join(" ")}),_=T(()=>{let a=l.value;return l.formatNumber&&typeof a=="number"&&(a=a.toLocaleString()),`${l.prefix||""}${a}${l.suffix||""}`});return(a,$)=>(t(),r("div",{class:f(n.value)},[a.icon||a.$slots.icon?(t(),r("div",{key:0,class:f(["stat-figure",w.value])},[x(a.$slots,"icon",{},()=>[a.icon?(t(),r("div",{key:0,class:"text-2xl",innerHTML:a.icon},null,8,X)):b("",!0)],!0)],2)):b("",!0),v("div",{class:f(["stat-title",k.value])},[x(a.$slots,"title",{},()=>[z(g(a.title),1)],!0)],2),v("div",{class:f(["stat-value",m.value])},[x(a.$slots,"value",{},()=>[z(g(_.value),1)],!0)],2),a.description||a.$slots.description?(t(),r("div",{key:1,class:f(["stat-desc",p.value])},[x(a.$slots,"description",{},()=>[z(g(a.description),1)],!0)],2)):b("",!0),a.actions||a.$slots.actions?(t(),r("div",Z,[x(a.$slots,"actions",{},()=>[a.actions?(t(),r("div",ee,[(t(!0),r(q,null,B(a.actions,y=>(t(),W(U(y.component||"button"),E({key:y.label},{ref_for:!0},y.props,{onClick:y.onClick}),{default:P(()=>[z(g(y.label),1)]),_:2},1040,["onClick"]))),128))])):b("",!0)],!0)])):b("",!0)],2))}});ae.__docgenInfo={exportName:"default",displayName:"Stat",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"description",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"string"}},{name:"trend",required:!1,type:{name:"union",elements:[{name:'"up"'},{name:'"down"'},{name:'"neutral"'}]},defaultValue:{func:!1,value:"'neutral'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"StatAction"}]}},{name:"prefix",required:!1,type:{name:"string"}},{name:"suffix",required:!1,type:{name:"string"}},{name:"formatNumber",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"},{name:"title"},{name:"value"},{name:"description"},{name:"actions"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataDisplay/Stat.vue"]};const se={class:"overflow-x-auto"},te={key:0},ne=["onClick"],re={class:"flex items-center gap-2"},le={key:0,class:"text-xs opacity-50"},oe={key:0},ie={key:1},ue=["onClick"],de={key:1},ce={key:0,class:"flex justify-center items-center p-8"},me={key:1,class:"text-center p-8 text-base-content/70"},pe=R({__name:"Table",props:{columns:{},data:{default:()=>[]},size:{default:"md"},variant:{default:"default"},selectable:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0},emptyText:{default:"No data available"},rowKey:{default:"id"}},emits:["row-click","sort-change"],setup(V,{emit:l}){const n=V,k=l,m=F(""),p=F("asc"),w=T(()=>{const e=["table","w-full"];return n.size==="xs"?e.push("table-xs"):n.size==="sm"?e.push("table-sm"):n.size==="lg"&&e.push("table-lg"),n.variant==="zebra"?e.push("table-zebra"):n.variant==="compact"?e.push("table-compact"):n.variant==="bordered"&&e.push("table-bordered"),n.hoverable&&e.push("table-hover"),e.join(" ")}),_=T(()=>m.value?[...n.data].sort((e,o)=>{const i=d(e,{key:m.value}),C=d(o,{key:m.value});let u=0;return i<C&&(u=-1),i>C&&(u=1),p.value==="desc"?-u:u}):n.data),a=e=>{const o=[];return e.sortable&&o.push("cursor-pointer","hover:bg-base-200","transition-colors"),e.align==="center"?o.push("text-center"):e.align==="right"&&o.push("text-right"),o.join(" ")},$=()=>{const e=[];return n.selectable&&e.push("cursor-pointer"),e.join(" ")},y=e=>{const o=[];return e.align==="center"?o.push("text-center"):e.align==="right"&&o.push("text-right"),o.join(" ")},s=(e,o)=>e[n.rowKey]||o.toString(),d=(e,o)=>e[o.key],c=(e,o)=>{if(e==null)return"";switch(o.format){case"number":return typeof e=="number"?e.toLocaleString():String(e);case"currency":return typeof e=="number"?e.toLocaleString("en-US",{style:"currency",currency:"USD"}):String(e);case"date":return e instanceof Date?e.toLocaleDateString():String(e);case"boolean":return e?"Yes":"No";default:return String(e)}},h=e=>{e.sortable&&(m.value===e.key?p.value=p.value==="asc"?"desc":"asc":(m.value=e.key,p.value="asc"),k("sort-change",e,p.value))},Y=(e,o,i)=>{n.selectable&&k("row-click",e,o,i)};return(e,o)=>(t(),r("div",se,[v("table",{class:f(w.value)},[e.showHeader?(t(),r("thead",te,[v("tr",null,[(t(!0),r(q,null,B(e.columns,i=>(t(),r("th",{key:i.key,class:f(a(i)),onClick:C=>h(i)},[v("div",re,[v("span",null,g(i.title),1),i.sortable?(t(),r("span",le,[m.value===i.key?(t(),r("span",oe,g(p.value==="asc"?"↑":"↓"),1)):(t(),r("span",ie,"↕"))])):b("",!0)])],10,ne))),128))])])):b("",!0),v("tbody",null,[x(e.$slots,"default",{},()=>[(t(!0),r(q,null,B(_.value,(i,C)=>(t(),r("tr",{key:s(i,C),class:f($()),onClick:u=>Y(i,C,u)},[(t(!0),r(q,null,B(e.columns,u=>(t(),r("td",{key:u.key,class:f(y(u))},[x(e.$slots,`cell-${u.key}`,{row:i,column:u,value:d(i,u),index:C},()=>[u.component?(t(),W(U(u.component),E({key:0,ref_for:!0},u.componentProps,{value:d(i,u),row:i}),null,16,["value","row"])):(t(),r("span",de,g(c(d(i,u),u)),1))],!0)],2))),128))],10,ue))),128))],!0)])],2),e.loading?(t(),r("div",ce,o[0]||(o[0]=[v("span",{class:"loading loading-spinner loading-lg"},null,-1)]))):b("",!0),!e.loading&&_.value.length===0?(t(),r("div",me,[x(e.$slots,"empty",{},()=>[z(g(e.emptyText),1)],!0)])):b("",!0)]))}});pe.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"columns",required:!0,type:{name:"Array",elements:[{name:"TableColumn"}]}},{name:"data",required:!1,type:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}]}]},defaultValue:{func:!1,value:"() => []"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"zebra"'},{name:'"compact"'},{name:'"bordered"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"selectable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hoverable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showHeader",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"emptyText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'No data available'"}},{name:"rowKey",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'id'"}}],events:[{name:"row-click",type:{names:["Record"],elements:[{name:"string"},{name:"any"}]}},{name:"sort-change",type:{names:["TableColumn"]}}],slots:[{name:"default"},{name:"`cell-${column.key}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"column",title:"binding"},{name:"value",title:"binding"},{name:"index",title:"binding"}]},{name:"empty"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataDisplay/Table.vue"]};const be={class:"w-full"},fe=["aria-selected","onClick"],ve={key:0,class:"badge badge-sm ml-1"},ge={key:0,class:"tab-content mt-4"},ye={key:1,class:"tab-content mt-4"},he=["innerHTML"],G=R({__name:"Tabs",props:{tabs:{default:()=>[]},modelValue:{},variant:{default:"default"},size:{default:"md"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","tab-change"],setup(V,{emit:l}){const n=V,k=l,m=F(0),p=s=>s.value!==void 0?s.value:s.label,w=(s,d)=>p(s).toString()||d.toString();J(()=>n.modelValue,s=>{if(s!==void 0){const d=n.tabs.findIndex(c=>p(c)===s);d>=0&&(m.value=d)}},{immediate:!0});const _=T(()=>{const s=["tabs"];return n.variant==="bordered"?s.push("tabs-bordered"):n.variant==="lifted"?s.push("tabs-lifted"):n.variant==="boxed"&&s.push("tabs-boxed"),n.size==="xs"?s.push("tabs-xs"):n.size==="sm"?s.push("tabs-sm"):n.size==="lg"&&s.push("tabs-lg"),s.join(" ")}),a=(s,d)=>{const c=["tab"];return $(s,d)&&c.push("tab-active"),(s.disabled||n.disabled)&&c.push("tab-disabled"),c.join(" ")},$=(s,d)=>n.modelValue!==void 0?p(s)===n.modelValue:d===m.value,y=(s,d,c)=>{if(s.disabled||n.disabled){c.preventDefault();return}m.value=d;const h=p(s);k("update:modelValue",h),k("tab-change",h)};return(s,d)=>(t(),r("div",be,[v("div",{class:f(_.value),role:"tablist"},[(t(!0),r(q,null,B(s.tabs,(c,h)=>(t(),r("a",{key:w(c,h),class:f(a(c,h)),"aria-selected":$(c,h),role:"tab",onClick:Y=>y(c,h,Y)},[z(g(c.label)+" ",1),c.badge?(t(),r("span",ve,g(c.badge),1)):b("",!0)],10,fe))),128))],2),s.$slots.default?(t(),r("div",ge,[x(s.$slots,"default",{},void 0,!0)])):s.tabs.length>0&&s.tabs[m.value]?.content?(t(),r("div",ye,[v("div",{innerHTML:s.tabs[m.value].content},null,8,he)])):b("",!0)]))}}),O=Q(G,[["__scopeId","data-v-4d22ebce"]]);G.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",required:!1,type:{name:"Array",elements:[{name:"Tab"}]},defaultValue:{func:!1,value:"() => []"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"lifted"'},{name:'"boxed"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"tab-change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataDisplay/Tabs.vue"]};const Le={title:"Data Display/Tabs",component:O,parameters:{layout:"centered",docs:{description:{component:"A flexible tabs component with multiple variants and content support."}}},tags:["autodocs"],argTypes:{tabs:{control:{type:"object"},description:"Array of tab objects"},modelValue:{control:{type:"text"},description:"Active tab value"},variant:{control:{type:"select"},options:["default","bordered","lifted","boxed"],description:"Tabs variant"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Tabs size"},disabled:{control:{type:"boolean"},description:"Disable all tabs"},"onUpdate:modelValue":{action:"update:modelValue"},"onTab-change":{action:"tab-change"}}},S=[{label:"Tab 1",content:"<p>Content for tab 1. This is some sample content to show how the tab content area works.</p>"},{label:"Tab 2",content:"<p>Content for tab 2. You can put any HTML content here, including components.</p>"},{label:"Tab 3",content:"<p>Content for tab 3. Each tab can have different content and styling.</p>"},{label:"Disabled",content:"<p>This tab is disabled.</p>",disabled:!0}],L={args:{tabs:S}},N={args:{tabs:S,variant:"bordered"}},D={args:{tabs:S,variant:"lifted"}},j={args:{tabs:S,variant:"boxed"}},A={args:{tabs:[{label:"Messages",badge:"5",content:"<p>You have 5 unread messages.</p>"},{label:"Notifications",badge:"12",content:"<p>You have 12 notifications.</p>"},{label:"Settings",content:"<p>Configure your preferences here.</p>"}]}},H={args:{tabs:S,size:"sm"}},M={args:{tabs:S,size:"lg"}},I={args:{tabs:S,modelValue:"Tab 2"}},K={render:()=>({components:{Tabs:O},setup(){return{simpleTabs:[{label:"Home",content:"<p>Welcome to the home page!</p>"},{label:"About",content:"<p>Learn more about us.</p>"},{label:"Contact",content:"<p>Get in touch with us.</p>"}]}},template:`
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
    `})};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs
  }
}`,...L.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'bordered'
  }
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'lifted'
  }
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'boxed'
  }
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    size: 'sm'
  }
}`,...H.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    size: 'lg'
  }
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    modelValue: 'Tab 2'
  }
}`,...I.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};const Ne=["Default","Bordered","Lifted","Boxed","WithBadges","Small","Large","Controlled","AllVariants"];export{K as AllVariants,N as Bordered,j as Boxed,I as Controlled,L as Default,M as Large,D as Lifted,H as Small,A as WithBadges,Ne as __namedExportsOrder,Le as default};
