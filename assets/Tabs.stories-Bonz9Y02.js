import"./Accordion-BbOgFhLC.js";import"./Avatar-ChVWa20J.js";import"./Badge-Dj2vUqwU.js";import"./Card-DnNTebjD.js";import"./Carousel-u8FOO4ha.js";import"./ChatBubble-nhWTZegd.js";import"./Collapse-BYNzzLhG.js";import"./Countdown-CDCZEG_X.js";import"./TextDiff-BWeN6BJa.js";import"./Kbd-qRkcQUx_.js";import"./List-xbsK-p1u.js";import"./Stat-CIHqsw3_.js";import"./Status-DOHks-7U.js";import"./StatusBox-B5UYTNKy.js";import"./Table-DKK_Sc-W.js";import{d as q,m as w,h as G,w as I,c as z,a as l,b as _,l as L,F as E,g as F,n as W,e as $,o as r,v as K,t as B,r as M}from"./iframe--6dECDSE.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Timeline-C5SQ_pT6.js";import"./Icon-Cyg07zqG.js";import"./x-CvlftGd-.js";import"./preload-helper-D9Z9MdNV.js";const U={class:"w-full"},J=["aria-selected","onClick"],P={key:0,class:"badge badge-sm ml-1"},Q={key:0,class:"tab-content mt-4"},R={key:1,class:"tab-content mt-4"},X=["innerHTML"],D=q({__name:"Tabs",props:w({tabs:{default:()=>[]},variant:{default:"default"},size:{default:"md"},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:w(["tab-change"],["update:modelValue"]),setup(b,{emit:C}){const a=b,s=G(b,"modelValue"),k=C,c=e=>e.value!==void 0?e.value:e.label,A=(e,o)=>c(e).toString()||o.toString();I(()=>a.tabs,e=>{e.length>0&&s.value===void 0&&(s.value=c(e[0]))},{immediate:!0});const V=z(()=>{if(s.value!==void 0&&s.value!==""){const e=a.tabs.findIndex(o=>c(o)===s.value);return e>=0?e:0}return 0}),N=z(()=>{const e=["tabs"];return a.variant==="bordered"?e.push("tabs-bordered"):a.variant==="lifted"?e.push("tabs-lifted"):a.variant==="boxed"&&e.push("tabs-boxed"),a.size==="xs"?e.push("tabs-xs"):a.size==="sm"?e.push("tabs-sm"):a.size==="lg"&&e.push("tabs-lg"),e.join(" ")}),H=(e,o)=>{const t=["tab"];return S(e,o)&&t.push("tab-active"),(e.disabled||a.disabled)&&t.push("tab-disabled"),t.join(" ")},S=(e,o)=>s.value!==void 0&&s.value!==""?c(e)===s.value:o===V.value,Y=(e,o,t)=>{if(e.disabled||a.disabled){t.preventDefault();return}const n=c(e);s.value=n,k("tab-change",n)};return(e,o)=>(r(),l("div",U,[_("div",{class:W(N.value),role:"tablist"},[(r(!0),l(E,null,F(e.tabs,(t,n)=>(r(),l("a",{key:A(t,n),class:W(H(t,n)),"aria-selected":S(t,n),role:"tab",onClick:j=>Y(t,n,j)},[K(B(t.label)+" ",1),t.badge?(r(),l("span",P,B(t.badge),1)):L("",!0)],10,J))),128))],2),e.$slots.default?(r(),l("div",Q,[$(e.$slots,"default",{},void 0,!0)])):e.tabs.length>0&&e.tabs[V.value]?.content?(r(),l("div",R,[_("div",{class:"tab-pane",innerHTML:e.tabs[V.value].content},null,8,X)])):L("",!0)]))}}),y=O(D,[["__scopeId","data-v-ec15a3b9"]]);D.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"tabs",required:!1,type:{name:"Array",elements:[{name:"Tab"}]},defaultValue:{func:!1,value:"() => []"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"lifted"'},{name:'"boxed"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"tab-change",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataDisplay/Tabs.vue"]};const xe={title:"Data Display/Tabs",component:y,parameters:{layout:"centered",docs:{description:{component:"A flexible tabs component with multiple variants and content support using Vue 3.4 defineModel()."}}},tags:["autodocs"],argTypes:{tabs:{control:{type:"object"},description:"Array of tab objects"},variant:{control:{type:"select"},options:["default","bordered","lifted","boxed"],description:"Tabs variant"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Tabs size"},disabled:{control:{type:"boolean"},description:"Disable all tabs"},"onUpdate:modelValue":{action:"update:modelValue"},"onTab-change":{action:"tab-change"}}},i=[{label:"Tab 1",content:"<p>Content for tab 1. This is some sample content to show how the tab content area works.</p>"},{label:"Tab 2",content:"<p>Content for tab 2. You can put any HTML content here, including components.</p>"},{label:"Tab 3",content:"<p>Content for tab 3. Each tab can have different content and styling.</p>"},{label:"Disabled",content:"<p>This tab is disabled.</p>",disabled:!0}],d={args:{tabs:i}},m={args:{tabs:i,variant:"bordered"}},p={args:{tabs:i,variant:"lifted"}},u={args:{tabs:i,variant:"boxed"}},v={args:{tabs:[{label:"Messages",badge:"5",content:"<p>You have 5 unread messages.</p>"},{label:"Notifications",badge:"12",content:"<p>You have 12 notifications.</p>"},{label:"Settings",content:"<p>Configure your preferences here.</p>"}]}},g={args:{tabs:i,size:"sm"}},h={args:{tabs:i,size:"lg"}},T={render:()=>({components:{Tabs:y},setup(){return{activeTab:M("Tab 1"),simpleTabs:[{label:"Tab 1",content:"<p>Welcome to the first tab!</p>"},{label:"Tab 2",content:"<p>This is the second tab content.</p>"},{label:"Tab 3",content:"<p>Third tab content here.</p>"}],onTabChange:a=>{console.log("Tab changed to:",a)}}},template:`
      <div class="space-y-4 w-full max-w-2xl">
        <div class="p-4 bg-base-200 rounded-lg">
          <p class="text-sm mb-2">Current active tab: <strong>{{ activeTab }}</strong></p>
        </div>
        <Tabs 
          :tabs="simpleTabs" 
          v-model="activeTab"
          @tab-change="onTabChange"
        />
      </div>
    `})},f={render:()=>({components:{Tabs:y},setup(){return{activeTab:M("home"),tabsWithValues:[{label:"Home",value:"home",content:"<p>Welcome to the home page!</p>"},{label:"About",value:"about",content:"<p>Learn more about us.</p>"},{label:"Contact",value:"contact",content:"<p>Get in touch with us.</p>"}],onTabChange:a=>{console.log("Tab changed to:",a)}}},template:`
      <div class="space-y-4 w-full max-w-2xl">
        <div class="p-4 bg-base-200 rounded-lg">
          <p class="text-sm mb-2">Current active tab value: <strong>{{ activeTab }}</strong></p>
        </div>
        <Tabs 
          :tabs="tabsWithValues" 
          v-model="activeTab"
          @tab-change="onTabChange"
        />
      </div>
    `})},x={render:()=>({components:{Tabs:y},setup(){return{simpleTabs:[{label:"Home",content:"<p>Welcome to the home page!</p>"},{label:"About",content:"<p>Learn more about us.</p>"},{label:"Contact",content:"<p>Get in touch with us.</p>"}]}},template:`
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
    `})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'bordered'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'lifted'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    variant: 'boxed'
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    size: 'sm'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    size: 'lg'
  }
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs
    },
    setup() {
      const activeTab = ref('Tab 1');
      const simpleTabs = [{
        label: 'Tab 1',
        content: '<p>Welcome to the first tab!</p>'
      }, {
        label: 'Tab 2',
        content: '<p>This is the second tab content.</p>'
      }, {
        label: 'Tab 3',
        content: '<p>Third tab content here.</p>'
      }];
      return {
        activeTab,
        simpleTabs,
        onTabChange: (value: string) => {
          console.log('Tab changed to:', value);
        }
      };
    },
    template: \`
      <div class="space-y-4 w-full max-w-2xl">
        <div class="p-4 bg-base-200 rounded-lg">
          <p class="text-sm mb-2">Current active tab: <strong>{{ activeTab }}</strong></p>
        </div>
        <Tabs 
          :tabs="simpleTabs" 
          v-model="activeTab"
          @tab-change="onTabChange"
        />
      </div>
    \`
  })
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs
    },
    setup() {
      const activeTab = ref('home');
      const tabsWithValues = [{
        label: 'Home',
        value: 'home',
        content: '<p>Welcome to the home page!</p>'
      }, {
        label: 'About',
        value: 'about',
        content: '<p>Learn more about us.</p>'
      }, {
        label: 'Contact',
        value: 'contact',
        content: '<p>Get in touch with us.</p>'
      }];
      return {
        activeTab,
        tabsWithValues,
        onTabChange: (value: string) => {
          console.log('Tab changed to:', value);
        }
      };
    },
    template: \`
      <div class="space-y-4 w-full max-w-2xl">
        <div class="p-4 bg-base-200 rounded-lg">
          <p class="text-sm mb-2">Current active tab value: <strong>{{ activeTab }}</strong></p>
        </div>
        <Tabs 
          :tabs="tabsWithValues" 
          v-model="activeTab"
          @tab-change="onTabChange"
        />
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const ye=["Default","Bordered","Lifted","Boxed","WithBadges","Small","Large","WithVModel","WithCustomValues","AllVariants"];export{x as AllVariants,m as Bordered,u as Boxed,d as Default,h as Large,p as Lifted,g as Small,v as WithBadges,f as WithCustomValues,T as WithVModel,ye as __namedExportsOrder,xe as default};
