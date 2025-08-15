import"./Accordion-Dn5Q02Hw.js";import"./Avatar-5xDK1jpt.js";import"./Badge-B1cR3xx6.js";import"./Card-CeY-GWHm.js";import"./Carousel-CDWV8XoP.js";import"./ChatBubble-CxKnoLVN.js";import"./Collapse-csPmDmpx.js";import"./Countdown-CUv0Ciq2.js";import"./Diff-DQBroQN_.js";import"./Kbd-BaInWcvP.js";import"./List-DjFt5O8Q.js";import"./Stat-DAN7a4V5.js";import"./Status-Cy1XX6fc.js";import"./Table-Bp5hb_qB.js";import{d as F,r as P,w as Q,c,a as r,b as y,l as p,F as $,f as H,n as i,e as Y,o as l,q as R,t as b,h as X,v as Z}from"./iframe-Cy2SohGF.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const se={class:"w-full"},ae=["aria-selected","onClick"],te={key:0,class:"badge badge-sm ml-1"},ne={key:0,class:"tab-content mt-4"},le={key:1,class:"tab-content mt-4"},re=["innerHTML"],W=F({__name:"Tabs",props:{tabs:{default:()=>[]},modelValue:{},variant:{default:"default"},size:{default:"md"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","tab-change"],setup(T,{emit:D}){const t=T,C=D,f=P(0),v=s=>s.value!==void 0?s.value:s.label,N=(s,d)=>v(s).toString()||d.toString();Q(()=>t.modelValue,s=>{if(s!==void 0){const d=t.tabs.findIndex(o=>v(o)===s);d>=0&&(f.value=d)}},{immediate:!0});const A=c(()=>{const s=["tabs"];return t.variant==="bordered"?s.push("tabs-bordered"):t.variant==="lifted"?s.push("tabs-lifted"):t.variant==="boxed"&&s.push("tabs-boxed"),t.size==="xs"?s.push("tabs-xs"):t.size==="sm"?s.push("tabs-sm"):t.size==="lg"&&s.push("tabs-lg"),s.join(" ")}),q=(s,d)=>{const o=["tab"];return x(s,d)&&o.push("tab-active"),(s.disabled||t.disabled)&&o.push("tab-disabled"),o.join(" ")},x=(s,d)=>t.modelValue!==void 0?v(s)===t.modelValue:d===f.value,I=(s,d,o)=>{if(s.disabled||t.disabled){o.preventDefault();return}f.value=d;const u=v(s);C("update:modelValue",u),C("tab-change",u)};return(s,d)=>(l(),r("div",se,[y("div",{class:i(A.value),role:"tablist"},[(l(!0),r($,null,H(s.tabs,(o,u)=>(l(),r("a",{key:N(o,u),class:i(q(o,u)),"aria-selected":x(o,u),role:"tab",onClick:M=>I(o,u,M)},[R(b(o.label)+" ",1),o.badge?(l(),r("span",te,b(o.badge),1)):p("",!0)],10,ae))),128))],2),s.$slots.default?(l(),r("div",ne,[Y(s.$slots,"default",{},void 0,!0)])):s.tabs.length>0&&s.tabs[f.value]?.content?(l(),r("div",le,[y("div",{innerHTML:s.tabs[f.value].content},null,8,re)])):p("",!0)]))}}),E=ee(W,[["__scopeId","data-v-4d22ebce"]]);W.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",required:!1,type:{name:"Array",elements:[{name:"Tab"}]},defaultValue:{func:!1,value:"() => []"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"lifted"'},{name:'"boxed"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"tab-change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataDisplay/Tabs.vue"]};const oe={key:1,class:"text-sm"},ie={key:4,class:"flex gap-2 mt-2"},de=["onClick","disabled"],ce=F({__name:"Timeline",props:{items:{},orientation:{default:"vertical"},size:{default:"md"},variant:{default:"default"},showConnectors:{type:Boolean,default:!0},snapToSides:{type:Boolean,default:!1}},emits:["actionClick"],setup(T,{emit:D}){const t=T,C=D,f=c(()=>{const e=["timeline"];return t.orientation==="horizontal"?e.push("timeline-horizontal","flex","items-start","gap-8","overflow-x-auto"):e.push("timeline-vertical","space-y-6"),t.variant==="compact"?e.push("timeline-compact"):t.variant==="detailed"&&e.push("timeline-detailed"),e.join(" ")}),v=(e,n)=>{const a=["timeline-item","relative"];return t.orientation==="horizontal"?a.push("flex","flex-col","items-center","min-w-max"):(a.push("flex","gap-4"),t.snapToSides&&(n%2===0?a.push("timeline-start"):a.push("timeline-end","flex-row-reverse"))),e.status==="active"?a.push("timeline-active"):e.status==="completed"?a.push("timeline-completed"):e.status==="error"&&a.push("timeline-error"),a.join(" ")},N=c(()=>{const e=["timeline-marker","relative","flex","items-center","justify-center","rounded-full","border-2","bg-base-100"];return t.size==="sm"?e.push("w-6","h-6"):t.size==="lg"?e.push("w-10","h-10"):e.push("w-8","h-8"),e.join(" ")}),A=c(()=>["flex","items-center","justify-center"].join(" ")),q=c(()=>{if(!t.showConnectors)return"hidden";const e=["timeline-connector"];return t.orientation==="horizontal"?e.push("absolute","top-1/2","left-full","w-8","h-0.5","bg-base-300","transform","-translate-y-1/2"):e.push("absolute","top-full","left-1/2","w-0.5","h-6","bg-base-300","transform","-translate-x-1/2"),e.join(" ")}),x=c(()=>{const e=["timeline-content","flex-1"];return t.size==="sm"?e.push("text-sm"):t.size==="lg"&&e.push("text-lg"),t.variant==="detailed"?e.push("bg-base-100","border","border-base-300","rounded-lg","p-4","shadow-sm"):t.variant==="compact"?e.push("py-1"):e.push("py-2"),e.join(" ")}),I=c(()=>{const e=["timeline-timestamp","text-xs","opacity-60","font-medium"];return t.variant==="compact"?e.push("mb-1"):e.push("mb-2"),e.join(" ")}),s=c(()=>{const e=["timeline-title","font-semibold"];return t.size==="sm"?e.push("text-sm"):t.size==="lg"?e.push("text-lg"):e.push("text-base"),t.variant!=="compact"&&e.push("mb-1"),e.join(" ")}),d=c(()=>{const e=["timeline-description","opacity-70"];return t.size==="sm"?e.push("text-xs"):t.size==="lg"?e.push("text-base"):e.push("text-sm"),e.join(" ")}),o=c(()=>["timeline-status","mt-2"].join(" ")),u=e=>{const n=["w-2","h-2","rounded-full"];return e.status==="completed"?n.push("bg-success"):e.status==="active"?n.push("bg-primary"):e.status==="error"?n.push("bg-error"):e.status==="warning"?n.push("bg-warning"):n.push("bg-base-300"),n.join(" ")},M=e=>{const n=["badge","badge-sm"];return e==="completed"?n.push("badge-success"):e==="active"?n.push("badge-primary"):e==="error"?n.push("badge-error"):e==="warning"?n.push("badge-warning"):n.push("badge-ghost"),n.join(" ")},G=e=>{const n=["btn"];return e.size==="xs"?n.push("btn-xs"):e.size==="sm"&&n.push("btn-sm"),e.variant==="primary"?n.push("btn-primary"):e.variant==="secondary"?n.push("btn-secondary"):e.variant==="accent"?n.push("btn-accent"):e.variant==="ghost"?n.push("btn-ghost"):e.variant==="outline"&&n.push("btn-outline"),n.join(" ")},K=(e,n)=>e.id!==void 0?e.id:n,O=e=>{const n=new Date(e);return isNaN(n.getTime())?e.toString():n.toLocaleString()},U=(e,n,a,m)=>{e.disabled||(e.handler&&e.handler(),C("actionClick",e,n,a,m))};return(e,n)=>(l(),r("div",{class:i(f.value)},[(l(!0),r($,null,H(e.items,(a,m)=>(l(),r("div",{key:K(a,m),class:i(v(a,m))},[y("div",{class:i(N.value)},[Y(e.$slots,"marker",{item:a,index:m},()=>[a.icon?(l(),r("div",{key:0,class:i(A.value)},[typeof a.icon=="string"?(l(),X(Z(a.icon),{key:0,class:"w-4 h-4"})):(l(),r("span",oe,b(a.icon),1))],2)):(l(),r("div",{key:1,class:i(u(a))},null,2))],!0)],2),m<e.items.length-1?(l(),r("div",{key:0,class:i(q.value)},null,2)):p("",!0),y("div",{class:i(x.value)},[Y(e.$slots,"item",{item:a,index:m},()=>[a.timestamp?(l(),r("div",{key:0,class:i(I.value)},b(O(a.timestamp)),3)):p("",!0),a.title?(l(),r("div",{key:1,class:i(s.value)},b(a.title),3)):p("",!0),a.description?(l(),r("div",{key:2,class:i(d.value)},b(a.description),3)):p("",!0),a.status?(l(),r("div",{key:3,class:i(o.value)},[y("span",{class:i(M(a.status))},b(a.status),3)],2)):p("",!0),a.actions&&a.actions.length>0?(l(),r("div",ie,[(l(!0),r($,null,H(a.actions,g=>(l(),r("button",{key:g.label,class:i(G(g)),onClick:J=>U(g,a,m,J),disabled:g.disabled},b(g.label),11,de))),128))])):p("",!0)],!0)],2)],2))),128))],2))}});ce.__docgenInfo={exportName:"default",displayName:"Timeline",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"TimelineItem"}]}},{name:"orientation",required:!1,type:{name:"union",elements:[{name:'"vertical"'},{name:'"horizontal"'}]},defaultValue:{func:!1,value:"'vertical'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"compact"'},{name:'"detailed"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"showConnectors",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"snapToSides",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"actionClick",type:{names:["TimelineAction"]}}],slots:[{name:"marker",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]},{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataDisplay/Timeline.vue"]};const Ve={title:"Data Display/Tabs",component:E,parameters:{layout:"centered",docs:{description:{component:"A flexible tabs component with multiple variants and content support."}}},tags:["autodocs"],argTypes:{tabs:{control:{type:"object"},description:"Array of tab objects"},modelValue:{control:{type:"text"},description:"Active tab value"},variant:{control:{type:"select"},options:["default","bordered","lifted","boxed"],description:"Tabs variant"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Tabs size"},disabled:{control:{type:"boolean"},description:"Disable all tabs"},"onUpdate:modelValue":{action:"update:modelValue"},"onTab-change":{action:"tab-change"}}},h=[{label:"Tab 1",content:"<p>Content for tab 1. This is some sample content to show how the tab content area works.</p>"},{label:"Tab 2",content:"<p>Content for tab 2. You can put any HTML content here, including components.</p>"},{label:"Tab 3",content:"<p>Content for tab 3. Each tab can have different content and styling.</p>"},{label:"Disabled",content:"<p>This tab is disabled.</p>",disabled:!0}],z={args:{tabs:h}},k={args:{tabs:h,variant:"bordered"}},S={args:{tabs:h,variant:"lifted"}},w={args:{tabs:h,variant:"boxed"}},_={args:{tabs:[{label:"Messages",badge:"5",content:"<p>You have 5 unread messages.</p>"},{label:"Notifications",badge:"12",content:"<p>You have 12 notifications.</p>"},{label:"Settings",content:"<p>Configure your preferences here.</p>"}]}},V={args:{tabs:h,size:"sm"}},B={args:{tabs:h,size:"lg"}},j={args:{tabs:h,modelValue:"Tab 2"}},L={render:()=>({components:{Tabs:E},setup(){return{simpleTabs:[{label:"Home",content:"<p>Welcome to the home page!</p>"},{label:"About",content:"<p>Learn more about us.</p>"},{label:"Contact",content:"<p>Get in touch with us.</p>"}]}},template:`
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
    `})};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs
  }
}`,...z.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'bordered'
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'lifted'
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'boxed'
  }
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    size: 'sm'
  }
}`,...V.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    size: 'lg'
  }
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    modelValue: 'Tab 2'
  }
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const Be=["Default","Bordered","Lifted","Boxed","WithBadges","Small","Large","Controlled","AllVariants"];export{L as AllVariants,k as Bordered,w as Boxed,j as Controlled,z as Default,B as Large,S as Lifted,V as Small,_ as WithBadges,Be as __namedExportsOrder,Ve as default};
