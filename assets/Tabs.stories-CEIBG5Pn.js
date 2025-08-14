import"./Accordion-C12ym86t.js";import"./Avatar-BQ6fA3ZX.js";import"./Badge-W_3IhpY-.js";import"./Card-DVrcVLYY.js";import"./Carousel-CGIwZpNY.js";import"./ChatBubble-CJrYWxF3.js";import"./Collapse-BXtoGWim.js";import"./Countdown-YUu6Sy1C.js";import"./Kbd-DY2CkTOk.js";import{d as D,c as m,a as o,o as r,m as u,b as w,n as p,e as v,s as h,t as g,F as A,f as j,i as Y,k as F,x as W,y as E,r as G,h as K}from"./iframe-D8bQcoLX.js";import"./Table-SSKNXHFX.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const P=["innerHTML"],U={key:2,class:"stat-actions"},J={key:0,class:"flex gap-2"},Q=D({__name:"Stat",props:{title:{},value:{},description:{},icon:{},trend:{default:"neutral"},variant:{default:"default"},size:{default:"md"},actions:{},prefix:{},suffix:{},formatNumber:{type:Boolean,default:!1}},setup(y){const s=y,n=m(()=>{const e=["stat"];return s.size==="sm"?e.push("stat-sm"):s.size==="lg"&&e.push("stat-lg"),e.join(" ")}),T=m(()=>{const e=[];return s.variant==="primary"?e.push("text-primary"):s.variant==="secondary"?e.push("text-secondary"):s.variant==="accent"&&e.push("text-accent"),e.join(" ")}),i=m(()=>{const e=[];return s.variant==="primary"?e.push("text-primary"):s.variant==="secondary"?e.push("text-secondary"):s.variant==="accent"?e.push("text-accent"):s.variant==="info"?e.push("text-info"):s.variant==="success"?e.push("text-success"):s.variant==="warning"?e.push("text-warning"):s.variant==="error"&&e.push("text-error"),e.join(" ")}),f=m(()=>{const e=[];return s.trend==="up"?e.push("text-success"):s.trend==="down"&&e.push("text-error"),e.join(" ")}),$=m(()=>{const e=[];return s.variant==="primary"?e.push("text-primary"):s.variant==="secondary"?e.push("text-secondary"):s.variant==="accent"&&e.push("text-accent"),e.join(" ")}),q=m(()=>{let e=s.value;return s.formatNumber&&typeof e=="number"&&(e=e.toLocaleString()),`${s.prefix||""}${e}${s.suffix||""}`});return(e,N)=>(r(),o("div",{class:p(n.value)},[e.icon||e.$slots.icon?(r(),o("div",{key:0,class:p(["stat-figure",$.value])},[v(e.$slots,"icon",{},()=>[e.icon?(r(),o("div",{key:0,class:"text-2xl",innerHTML:e.icon},null,8,P)):u("",!0)],!0)],2)):u("",!0),w("div",{class:p(["stat-title",T.value])},[v(e.$slots,"title",{},()=>[h(g(e.title),1)],!0)],2),w("div",{class:p(["stat-value",i.value])},[v(e.$slots,"value",{},()=>[h(g(q.value),1)],!0)],2),e.description||e.$slots.description?(r(),o("div",{key:1,class:p(["stat-desc",f.value])},[v(e.$slots,"description",{},()=>[h(g(e.description),1)],!0)],2)):u("",!0),e.actions||e.$slots.actions?(r(),o("div",U,[v(e.$slots,"actions",{},()=>[e.actions?(r(),o("div",J,[(r(!0),o(A,null,j(e.actions,d=>(r(),Y(E(d.component||"button"),W({key:d.label},{ref_for:!0},d.props,{onClick:d.onClick}),{default:F(()=>[h(g(d.label),1)]),_:2},1040,["onClick"]))),128))])):u("",!0)],!0)])):u("",!0)],2))}});Q.__docgenInfo={exportName:"default",displayName:"Stat",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"value",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"description",required:!1,type:{name:"string"}},{name:"icon",required:!1,type:{name:"string"}},{name:"trend",required:!1,type:{name:"union",elements:[{name:'"up"'},{name:'"down"'},{name:'"neutral"'}]},defaultValue:{func:!1,value:"'neutral'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"actions",required:!1,type:{name:"Array",elements:[{name:"StatAction"}]}},{name:"prefix",required:!1,type:{name:"string"}},{name:"suffix",required:!1,type:{name:"string"}},{name:"formatNumber",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"icon"},{name:"title"},{name:"value"},{name:"description"},{name:"actions"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataDisplay/Stat.vue"]};const R={class:"w-full"},X=["aria-selected","onClick"],Z={key:0,class:"badge badge-sm ml-1"},ee={key:0,class:"tab-content mt-4"},ae={key:1,class:"tab-content mt-4"},se=["innerHTML"],M=D({__name:"Tabs",props:{tabs:{default:()=>[]},modelValue:{},variant:{default:"default"},size:{default:"md"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","tab-change"],setup(y,{emit:s}){const n=y,T=s,i=G(0),f=a=>a.value!==void 0?a.value:a.label,$=(a,l)=>f(a).toString()||l.toString();K(()=>n.modelValue,a=>{if(a!==void 0){const l=n.tabs.findIndex(t=>f(t)===a);l>=0&&(i.value=l)}},{immediate:!0});const q=m(()=>{const a=["tabs"];return n.variant==="bordered"?a.push("tabs-bordered"):n.variant==="lifted"?a.push("tabs-lifted"):n.variant==="boxed"&&a.push("tabs-boxed"),n.size==="xs"?a.push("tabs-xs"):n.size==="sm"?a.push("tabs-sm"):n.size==="lg"&&a.push("tabs-lg"),a.join(" ")}),e=(a,l)=>{const t=["tab"];return N(a,l)&&t.push("tab-active"),(a.disabled||n.disabled)&&t.push("tab-disabled"),t.join(" ")},N=(a,l)=>n.modelValue!==void 0?f(a)===n.modelValue:l===i.value,d=(a,l,t)=>{if(a.disabled||n.disabled){t.preventDefault();return}i.value=l;const c=f(a);T("update:modelValue",c),T("tab-change",c)};return(a,l)=>(r(),o("div",R,[w("div",{class:p(q.value),role:"tablist"},[(r(!0),o(A,null,j(a.tabs,(t,c)=>(r(),o("a",{key:$(t,c),class:p(e(t,c)),"aria-selected":N(t,c),role:"tab",onClick:I=>d(t,c,I)},[h(g(t.label)+" ",1),t.badge?(r(),o("span",Z,g(t.badge),1)):u("",!0)],10,X))),128))],2),a.$slots.default?(r(),o("div",ee,[v(a.$slots,"default",{},void 0,!0)])):a.tabs.length>0&&a.tabs[i.value]?.content?(r(),o("div",ae,[w("div",{innerHTML:a.tabs[i.value].content},null,8,se)])):u("",!0)]))}}),H=O(M,[["__scopeId","data-v-4d22ebce"]]);M.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",required:!1,type:{name:"Array",elements:[{name:"Tab"}]},defaultValue:{func:!1,value:"() => []"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"lifted"'},{name:'"boxed"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"tab-change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataDisplay/Tabs.vue"]};const ve={title:"Data Display/Tabs",component:H,parameters:{layout:"centered",docs:{description:{component:"A flexible tabs component with multiple variants and content support."}}},tags:["autodocs"],argTypes:{tabs:{control:{type:"object"},description:"Array of tab objects"},modelValue:{control:{type:"text"},description:"Active tab value"},variant:{control:{type:"select"},options:["default","bordered","lifted","boxed"],description:"Tabs variant"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Tabs size"},disabled:{control:{type:"boolean"},description:"Disable all tabs"},"onUpdate:modelValue":{action:"update:modelValue"},"onTab-change":{action:"tab-change"}}},b=[{label:"Tab 1",content:"<p>Content for tab 1. This is some sample content to show how the tab content area works.</p>"},{label:"Tab 2",content:"<p>Content for tab 2. You can put any HTML content here, including components.</p>"},{label:"Tab 3",content:"<p>Content for tab 3. Each tab can have different content and styling.</p>"},{label:"Disabled",content:"<p>This tab is disabled.</p>",disabled:!0}],x={args:{tabs:b}},S={args:{tabs:b,variant:"bordered"}},C={args:{tabs:b,variant:"lifted"}},V={args:{tabs:b,variant:"boxed"}},z={args:{tabs:[{label:"Messages",badge:"5",content:"<p>You have 5 unread messages.</p>"},{label:"Notifications",badge:"12",content:"<p>You have 12 notifications.</p>"},{label:"Settings",content:"<p>Configure your preferences here.</p>"}]}},k={args:{tabs:b,size:"sm"}},L={args:{tabs:b,size:"lg"}},B={args:{tabs:b,modelValue:"Tab 2"}},_={render:()=>({components:{Tabs:H},setup(){return{simpleTabs:[{label:"Home",content:"<p>Welcome to the home page!</p>"},{label:"About",content:"<p>Learn more about us.</p>"},{label:"Contact",content:"<p>Get in touch with us.</p>"}]}},template:`
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
    `})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'bordered'
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'lifted'
  }
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'boxed'
  }
}`,...V.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    size: 'sm'
  }
}`,...k.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    size: 'lg'
  }
}`,...L.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    modelValue: 'Tab 2'
  }
}`,...B.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const ge=["Default","Bordered","Lifted","Boxed","WithBadges","Small","Large","Controlled","AllVariants"];export{_ as AllVariants,S as Bordered,V as Boxed,B as Controlled,x as Default,L as Large,C as Lifted,k as Small,z as WithBadges,ge as __namedExportsOrder,ve as default};
