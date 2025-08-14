import{d as I,c as f,a as p,m as h,b as y,n as w,e as m,o as b,s as x,t as j}from"./iframe-D8bQcoLX.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const S={class:"indicator"},M={class:"indicator-item"},v=I({__name:"Indicator",props:{content:{},position:{default:"top-end"},variant:{default:"primary"},size:{default:"md"},showIndicator:{type:Boolean,default:!0}},setup(u){const t=u,g=f(()=>{const n=["indicator-item","badge"];return t.position==="top-start"?n.push("indicator-top","indicator-start"):t.position==="top-center"?n.push("indicator-top","indicator-center"):t.position==="top-end"?n.push("indicator-top","indicator-end"):t.position==="middle-start"?n.push("indicator-middle","indicator-start"):t.position==="middle-center"?n.push("indicator-middle","indicator-center"):t.position==="middle-end"?n.push("indicator-middle","indicator-end"):t.position==="bottom-start"?n.push("indicator-bottom","indicator-start"):t.position==="bottom-center"?n.push("indicator-bottom","indicator-center"):t.position==="bottom-end"&&n.push("indicator-bottom","indicator-end"),t.variant==="primary"?n.push("badge-primary"):t.variant==="secondary"?n.push("badge-secondary"):t.variant==="accent"?n.push("badge-accent"):t.variant==="info"?n.push("badge-info"):t.variant==="success"?n.push("badge-success"):t.variant==="warning"?n.push("badge-warning"):t.variant==="error"&&n.push("badge-error"),t.size==="xs"?n.push("badge-xs"):t.size==="sm"?n.push("badge-sm"):t.size==="lg"&&n.push("badge-lg"),n.join(" ")});return(n,k)=>(b(),p("div",S,[n.showIndicator?(b(),p("span",{key:0,class:w(g.value)},[m(n.$slots,"indicator",{},()=>[x(j(n.content),1)],!0)],2)):h("",!0),y("div",M,[m(n.$slots,"default",{},void 0,!0)])]))}}),e=z(v,[["__scopeId","data-v-788b066b"]]);v.__docgenInfo={exportName:"default",displayName:"Indicator",description:"",tags:{},props:[{name:"content",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"top-start"'},{name:'"top-center"'},{name:'"top-end"'},{name:'"middle-start"'},{name:'"middle-center"'},{name:'"middle-end"'},{name:'"bottom-start"'},{name:'"bottom-center"'},{name:'"bottom-end"'}]},defaultValue:{func:!1,value:"'top-end'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"showIndicator",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"indicator"},{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Layout/Indicator.vue"]};const _={title:"Layout/Indicator",component:e,parameters:{layout:"centered"},argTypes:{position:{control:{type:"select"},options:["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"]},variant:{control:{type:"select"},options:["primary","secondary","accent","info","success","warning","error"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},showIndicator:{control:{type:"boolean"}}}},a={args:{content:"5"},render:u=>({components:{Indicator:e},setup(){return{args:u}},template:`
      <Indicator v-bind="args">
        <button class="btn">Messages</button>
      </Indicator>
    `})},o={render:()=>({components:{Indicator:e},template:`
      <div class="flex flex-wrap gap-8 items-center justify-center">
        <Indicator content="3" variant="error">
          <button class="btn btn-primary">Notifications</button>
        </Indicator>
        
        <Indicator content="12" variant="warning">
          <button class="btn btn-secondary">Messages</button>
        </Indicator>
        
        <Indicator content="99+" variant="success">
          <button class="btn btn-accent">Updates</button>
        </Indicator>
        
        <Indicator content="•" variant="info" size="xs">
          <button class="btn btn-ghost">Status</button>
        </Indicator>
      </div>
    `})},r={render:()=>({components:{Indicator:e},template:`
      <div class="grid grid-cols-3 gap-8 items-center justify-items-center">
        <Indicator content="1" position="top-start">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">TL</div>
        </Indicator>
        
        <Indicator content="2" position="top-center">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">TC</div>
        </Indicator>
        
        <Indicator content="3" position="top-end">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">TR</div>
        </Indicator>
        
        <Indicator content="4" position="middle-start">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">ML</div>
        </Indicator>
        
        <Indicator content="5" position="middle-center">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">MC</div>
        </Indicator>
        
        <Indicator content="6" position="middle-end">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">MR</div>
        </Indicator>
        
        <Indicator content="7" position="bottom-start">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">BL</div>
        </Indicator>
        
        <Indicator content="8" position="bottom-center">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">BC</div>
        </Indicator>
        
        <Indicator content="9" position="bottom-end">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">BR</div>
        </Indicator>
      </div>
    `})},i={render:()=>({components:{Indicator:e},template:`
      <div class="flex flex-wrap gap-6 items-center justify-center">
        <Indicator content="1" variant="primary">
          <button class="btn btn-outline">Primary</button>
        </Indicator>
        
        <Indicator content="2" variant="secondary">
          <button class="btn btn-outline">Secondary</button>
        </Indicator>
        
        <Indicator content="3" variant="accent">
          <button class="btn btn-outline">Accent</button>
        </Indicator>
        
        <Indicator content="4" variant="info">
          <button class="btn btn-outline">Info</button>
        </Indicator>
        
        <Indicator content="5" variant="success">
          <button class="btn btn-outline">Success</button>
        </Indicator>
        
        <Indicator content="6" variant="warning">
          <button class="btn btn-outline">Warning</button>
        </Indicator>
        
        <Indicator content="7" variant="error">
          <button class="btn btn-outline">Error</button>
        </Indicator>
      </div>
    `})},s={render:()=>({components:{Indicator:e},template:`
      <div class="flex flex-wrap gap-8 items-center justify-center">
        <Indicator content="XS" size="xs" variant="primary">
          <button class="btn">Extra Small</button>
        </Indicator>
        
        <Indicator content="SM" size="sm" variant="secondary">
          <button class="btn">Small</button>
        </Indicator>
        
        <Indicator content="MD" size="md" variant="accent">
          <button class="btn">Medium</button>
        </Indicator>
        
        <Indicator content="LG" size="lg" variant="warning">
          <button class="btn">Large</button>
        </Indicator>
      </div>
    `})},c={render:()=>({components:{Indicator:e},template:`
      <div class="flex flex-wrap gap-8 items-center justify-center">
        <Indicator>
          <template #indicator>
            <span class="indicator-item badge badge-primary">NEW</span>
          </template>
          <button class="btn">Product</button>
        </Indicator>
        
        <Indicator>
          <template #indicator>
            <span class="indicator-item badge badge-success">✓</span>
          </template>
          <button class="btn">Verified</button>
        </Indicator>
        
        <Indicator>
          <template #indicator>
            <span class="indicator-item badge badge-error">!</span>
          </template>
          <button class="btn">Alert</button>
        </Indicator>
        
        <Indicator>
          <template #indicator>
            <span class="indicator-item badge badge-warning">⚠</span>
          </template>
          <button class="btn">Warning</button>
        </Indicator>
      </div>
    `})},d={render:()=>({components:{Indicator:e},template:`
      <div class="flex gap-8 items-center justify-center">
        <Indicator variant="success" size="sm" position="bottom-end">
          <div class="avatar">
            <div class="w-16 rounded-full">
              <img src="https://via.placeholder.com/64" alt="User 1" />
            </div>
          </div>
        </Indicator>
        
        <Indicator variant="warning" size="sm" position="bottom-end">
          <div class="avatar">
            <div class="w-16 rounded-full">
              <img src="https://via.placeholder.com/64" alt="User 2" />
            </div>
          </div>
        </Indicator>
        
        <Indicator variant="error" size="sm" position="bottom-end">
          <div class="avatar">
            <div class="w-16 rounded-full">
              <img src="https://via.placeholder.com/64" alt="User 3" />
            </div>
          </div>
        </Indicator>
      </div>
    `})},l={render:()=>({components:{Indicator:e},template:`
      <div class="flex gap-8 items-center justify-center">
        <Indicator content="3" variant="error" position="top-end">
          <button class="btn btn-square btn-ghost">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.2 5M7 13l1.2-5m0 0h12M16 21a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </Indicator>
        
        <Indicator content="7" variant="primary" position="top-end">
          <button class="btn btn-square btn-ghost">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </Indicator>
        
        <Indicator content="12" variant="warning" position="top-end">
          <button class="btn btn-square btn-ghost">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM15 7h5l-5-5v5z" />
            </svg>
          </button>
        </Indicator>
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: '5'
  },
  render: args => ({
    components: {
      Indicator
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Indicator v-bind="args">
        <button class="btn">Messages</button>
      </Indicator>
    \`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Indicator
    },
    template: \`
      <div class="flex flex-wrap gap-8 items-center justify-center">
        <Indicator content="3" variant="error">
          <button class="btn btn-primary">Notifications</button>
        </Indicator>
        
        <Indicator content="12" variant="warning">
          <button class="btn btn-secondary">Messages</button>
        </Indicator>
        
        <Indicator content="99+" variant="success">
          <button class="btn btn-accent">Updates</button>
        </Indicator>
        
        <Indicator content="•" variant="info" size="xs">
          <button class="btn btn-ghost">Status</button>
        </Indicator>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Indicator
    },
    template: \`
      <div class="grid grid-cols-3 gap-8 items-center justify-items-center">
        <Indicator content="1" position="top-start">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">TL</div>
        </Indicator>
        
        <Indicator content="2" position="top-center">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">TC</div>
        </Indicator>
        
        <Indicator content="3" position="top-end">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">TR</div>
        </Indicator>
        
        <Indicator content="4" position="middle-start">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">ML</div>
        </Indicator>
        
        <Indicator content="5" position="middle-center">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">MC</div>
        </Indicator>
        
        <Indicator content="6" position="middle-end">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">MR</div>
        </Indicator>
        
        <Indicator content="7" position="bottom-start">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">BL</div>
        </Indicator>
        
        <Indicator content="8" position="bottom-center">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">BC</div>
        </Indicator>
        
        <Indicator content="9" position="bottom-end">
          <div class="w-16 h-16 bg-base-300 rounded-lg flex items-center justify-center">BR</div>
        </Indicator>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Indicator
    },
    template: \`
      <div class="flex flex-wrap gap-6 items-center justify-center">
        <Indicator content="1" variant="primary">
          <button class="btn btn-outline">Primary</button>
        </Indicator>
        
        <Indicator content="2" variant="secondary">
          <button class="btn btn-outline">Secondary</button>
        </Indicator>
        
        <Indicator content="3" variant="accent">
          <button class="btn btn-outline">Accent</button>
        </Indicator>
        
        <Indicator content="4" variant="info">
          <button class="btn btn-outline">Info</button>
        </Indicator>
        
        <Indicator content="5" variant="success">
          <button class="btn btn-outline">Success</button>
        </Indicator>
        
        <Indicator content="6" variant="warning">
          <button class="btn btn-outline">Warning</button>
        </Indicator>
        
        <Indicator content="7" variant="error">
          <button class="btn btn-outline">Error</button>
        </Indicator>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Indicator
    },
    template: \`
      <div class="flex flex-wrap gap-8 items-center justify-center">
        <Indicator content="XS" size="xs" variant="primary">
          <button class="btn">Extra Small</button>
        </Indicator>
        
        <Indicator content="SM" size="sm" variant="secondary">
          <button class="btn">Small</button>
        </Indicator>
        
        <Indicator content="MD" size="md" variant="accent">
          <button class="btn">Medium</button>
        </Indicator>
        
        <Indicator content="LG" size="lg" variant="warning">
          <button class="btn">Large</button>
        </Indicator>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Indicator
    },
    template: \`
      <div class="flex flex-wrap gap-8 items-center justify-center">
        <Indicator>
          <template #indicator>
            <span class="indicator-item badge badge-primary">NEW</span>
          </template>
          <button class="btn">Product</button>
        </Indicator>
        
        <Indicator>
          <template #indicator>
            <span class="indicator-item badge badge-success">✓</span>
          </template>
          <button class="btn">Verified</button>
        </Indicator>
        
        <Indicator>
          <template #indicator>
            <span class="indicator-item badge badge-error">!</span>
          </template>
          <button class="btn">Alert</button>
        </Indicator>
        
        <Indicator>
          <template #indicator>
            <span class="indicator-item badge badge-warning">⚠</span>
          </template>
          <button class="btn">Warning</button>
        </Indicator>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Indicator
    },
    template: \`
      <div class="flex gap-8 items-center justify-center">
        <Indicator variant="success" size="sm" position="bottom-end">
          <div class="avatar">
            <div class="w-16 rounded-full">
              <img src="https://via.placeholder.com/64" alt="User 1" />
            </div>
          </div>
        </Indicator>
        
        <Indicator variant="warning" size="sm" position="bottom-end">
          <div class="avatar">
            <div class="w-16 rounded-full">
              <img src="https://via.placeholder.com/64" alt="User 2" />
            </div>
          </div>
        </Indicator>
        
        <Indicator variant="error" size="sm" position="bottom-end">
          <div class="avatar">
            <div class="w-16 rounded-full">
              <img src="https://via.placeholder.com/64" alt="User 3" />
            </div>
          </div>
        </Indicator>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Indicator
    },
    template: \`
      <div class="flex gap-8 items-center justify-center">
        <Indicator content="3" variant="error" position="top-end">
          <button class="btn btn-square btn-ghost">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.2 5M7 13l1.2-5m0 0h12M16 21a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
        </Indicator>
        
        <Indicator content="7" variant="primary" position="top-end">
          <button class="btn btn-square btn-ghost">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </Indicator>
        
        <Indicator content="12" variant="warning" position="top-end">
          <button class="btn btn-square btn-ghost">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM15 7h5l-5-5v5z" />
            </svg>
          </button>
        </Indicator>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};const N=["Default","BadgeNotifications","Positions","Variants","Sizes","CustomContent","AvatarWithStatus","ShoppingCart"];export{d as AvatarWithStatus,o as BadgeNotifications,c as CustomContent,a as Default,r as Positions,l as ShoppingCart,s as Sizes,i as Variants,N as __namedExportsOrder,_ as default};
