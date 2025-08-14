import"./Accordion-Bzt1TMX3.js";import"./Avatar-DwWTpQdk.js";import"./Badge-DW1K3Q_O.js";import"./Card-Ba3ibvr5.js";import"./Carousel-D3cVy2e7.js";import"./ChatBubble-CLGMf3Af.js";import"./Collapse-ARvjaplH.js";import"./Countdown-CACwLA1e.js";import"./Kbd-D8E5j9kw.js";import"./Stat-BIuFIEzg.js";import"./Table-BFNmcA3i.js";import{d as M,r as q,h as H,c as Y,a as r,b as S,m as V,F as j,f as I,n as _,e as W,o as l,s as E,t as z}from"./iframe-BrsdVXSx.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const G={class:"w-full"},$=["aria-selected","onClick"],K={key:0,class:"badge badge-sm ml-1"},O={key:0,class:"tab-content mt-4"},U={key:1,class:"tab-content mt-4"},J=["innerHTML"],C=M({__name:"Tabs",props:{tabs:{default:()=>[]},modelValue:{},variant:{default:"default"},size:{default:"md"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","tab-change"],setup(T,{emit:L}){const s=T,y=L,i=q(0),d=e=>e.value!==void 0?e.value:e.label,w=(e,t)=>d(e).toString()||t.toString();H(()=>s.modelValue,e=>{if(e!==void 0){const t=s.tabs.findIndex(a=>d(a)===e);t>=0&&(i.value=t)}},{immediate:!0});const D=Y(()=>{const e=["tabs"];return s.variant==="bordered"?e.push("tabs-bordered"):s.variant==="lifted"?e.push("tabs-lifted"):s.variant==="boxed"&&e.push("tabs-boxed"),s.size==="xs"?e.push("tabs-xs"):s.size==="sm"?e.push("tabs-sm"):s.size==="lg"&&e.push("tabs-lg"),e.join(" ")}),k=(e,t)=>{const a=["tab"];return x(e,t)&&a.push("tab-active"),(e.disabled||s.disabled)&&a.push("tab-disabled"),a.join(" ")},x=(e,t)=>s.modelValue!==void 0?d(e)===s.modelValue:t===i.value,A=(e,t,a)=>{if(e.disabled||s.disabled){a.preventDefault();return}i.value=t;const n=d(e);y("update:modelValue",n),y("tab-change",n)};return(e,t)=>(l(),r("div",G,[S("div",{class:_(D.value),role:"tablist"},[(l(!0),r(j,null,I(e.tabs,(a,n)=>(l(),r("a",{key:w(a,n),class:_(k(a,n)),"aria-selected":x(a,n),role:"tab",onClick:N=>A(a,n,N)},[E(z(a.label)+" ",1),a.badge?(l(),r("span",K,z(a.badge),1)):V("",!0)],10,$))),128))],2),e.$slots.default?(l(),r("div",O,[W(e.$slots,"default",{},void 0,!0)])):e.tabs.length>0&&e.tabs[i.value]?.content?(l(),r("div",U,[S("div",{innerHTML:e.tabs[i.value].content},null,8,J)])):V("",!0)]))}}),B=F(C,[["__scopeId","data-v-4d22ebce"]]);C.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",required:!1,type:{name:"Array",elements:[{name:"Tab"}]},defaultValue:{func:!1,value:"() => []"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"lifted"'},{name:'"boxed"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"tab-change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataDisplay/Tabs.vue"]};const de={title:"Data Display/Tabs",component:B,parameters:{layout:"centered",docs:{description:{component:"A flexible tabs component with multiple variants and content support."}}},tags:["autodocs"],argTypes:{tabs:{control:{type:"object"},description:"Array of tab objects"},modelValue:{control:{type:"text"},description:"Active tab value"},variant:{control:{type:"select"},options:["default","bordered","lifted","boxed"],description:"Tabs variant"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Tabs size"},disabled:{control:{type:"boolean"},description:"Disable all tabs"},"onUpdate:modelValue":{action:"update:modelValue"},"onTab-change":{action:"tab-change"}}},o=[{label:"Tab 1",content:"<p>Content for tab 1. This is some sample content to show how the tab content area works.</p>"},{label:"Tab 2",content:"<p>Content for tab 2. You can put any HTML content here, including components.</p>"},{label:"Tab 3",content:"<p>Content for tab 3. Each tab can have different content and styling.</p>"},{label:"Disabled",content:"<p>This tab is disabled.</p>",disabled:!0}],b={args:{tabs:o}},c={args:{tabs:o,variant:"bordered"}},m={args:{tabs:o,variant:"lifted"}},p={args:{tabs:o,variant:"boxed"}},u={args:{tabs:[{label:"Messages",badge:"5",content:"<p>You have 5 unread messages.</p>"},{label:"Notifications",badge:"12",content:"<p>You have 12 notifications.</p>"},{label:"Settings",content:"<p>Configure your preferences here.</p>"}]}},f={args:{tabs:o,size:"sm"}},g={args:{tabs:o,size:"lg"}},v={args:{tabs:o,modelValue:"Tab 2"}},h={render:()=>({components:{Tabs:B},setup(){return{simpleTabs:[{label:"Home",content:"<p>Welcome to the home page!</p>"},{label:"About",content:"<p>Learn more about us.</p>"},{label:"Contact",content:"<p>Get in touch with us.</p>"}]}},template:`
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
    `})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs
  }
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'bordered'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'lifted'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'boxed'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    size: 'sm'
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    size: 'lg'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    modelValue: 'Tab 2'
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const be=["Default","Bordered","Lifted","Boxed","WithBadges","Small","Large","Controlled","AllVariants"];export{h as AllVariants,c as Bordered,p as Boxed,v as Controlled,b as Default,g as Large,m as Lifted,f as Small,u as WithBadges,be as __namedExportsOrder,de as default};
