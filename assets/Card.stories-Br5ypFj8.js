import{d as S,b as B,e as s,f as C,j as T,g as b,n as N,o as n,t as _}from"./vue.esm-bundler-D0HQYiut.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as x}from"./Button-DXCMznbP.js";const j={key:0,class:"card-header"},V={key:0,class:"card-title"},L={class:"card-body"},D={key:1,class:"card-actions justify-end"},y=S({__name:"Card",props:{title:{},variant:{default:"default"},padding:{default:"md"},shadow:{default:"md"}},setup(e){const t=e,w=B(()=>{const a=["card"];return t.variant==="bordered"?a.push("card-bordered"):t.variant==="glass"&&a.push("card-glass"),t.shadow!=="none"&&a.push(`shadow-${t.shadow}`),t.padding==="none"?a.push("p-0"):t.padding==="sm"?a.push("p-2"):t.padding==="lg"&&a.push("p-6"),a.join(" ")});return(a,z)=>(n(),s("div",{class:N(w.value)},[a.$slots.header||a.title?(n(),s("div",j,[b(a.$slots,"header",{},()=>[a.title?(n(),s("h3",V,_(a.title),1)):C("",!0)],!0)])):C("",!0),T("div",L,[b(a.$slots,"default",{},void 0,!0)]),a.$slots.footer?(n(),s("div",D,[b(a.$slots,"footer",{},void 0,!0)])):C("",!0)],2))}}),r=P(y,[["__scopeId","data-v-8367bd25"]]);y.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"glass"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"padding",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"shadow",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'md'"}}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Card.vue"]};const q={title:"Components/Card",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible card component with optional header, body and footer."}}},tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"Card title"},variant:{control:{type:"select"},options:["default","bordered","glass"],description:"Card variant"},padding:{control:{type:"select"},options:["none","sm","md","lg"],description:"Card padding"},shadow:{control:{type:"select"},options:["none","sm","md","lg","xl"],description:"Card shadow"}}},d={render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">Card content with simple text.</Card>'})},o={args:{title:"Card Title"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card has a title defined via the title prop.</Card>'})},i={render:e=>({components:{Card:r},setup(){return{args:e}},template:`
      <Card v-bind="args">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Custom Header</h3>
            <span class="text-sm text-gray-500">Badge</span>
          </div>
        </template>
        Card content with custom header.
      </Card>
    `})},l={render:e=>({components:{Card:r,Button:x},setup(){return{args:e}},template:`
      <Card v-bind="args">
        This card has a footer with actions.
        <template #footer>
          <Button variant="primary" size="sm">Save</Button>
          <Button variant="secondary" size="sm">Cancel</Button>
        </template>
      </Card>
    `})},p={args:{variant:"bordered",title:"Bordered Card"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card uses the bordered variant with a visible border.</Card>'})},c={args:{variant:"glass",title:"Glass Card"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card uses the glass variant with a transparency effect.</Card>'})},u={args:{shadow:"none",title:"No Shadow"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card has no shadow.</Card>'})},m={args:{shadow:"xl",title:"Large Shadow"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card has a very pronounced shadow.</Card>'})},g={args:{padding:"none",title:"No Padding"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card has no internal padding.</Card>'})},h={args:{padding:"lg",title:"Large Padding"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card has significant padding.</Card>'})},f={render:e=>({components:{Card:r,Button:x},setup(){return{args:e}},template:`
      <Card v-bind="args" title="User Profile" variant="bordered">
        <template #header>
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div>
              <h3 class="font-semibold">John Doe</h3>
              <p class="text-sm text-gray-500">Software Engineer</p>
            </div>
          </div>
        </template>
        
        <div class="space-y-3">
          <p class="text-gray-700">
            Passionate developer with 5+ years of experience in Vue.js and TypeScript.
            Love building design systems and user interfaces.
          </p>
          
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Vue.js</span>
            <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">TypeScript</span>
            <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Nuxt</span>
          </div>
        </div>
        
        <template #footer>
          <div class="flex justify-between">
            <Button variant="outline" size="sm">View Profile</Button>
            <Button variant="primary" size="sm">Send Message</Button>
          </div>
        </template>
      </Card>
    `})},v={render:()=>({components:{Card:r},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Default" variant="default">
          Default card
        </Card>
        
        <Card title="Bordered" variant="bordered">
          Bordered card
        </Card>
        
        <Card title="Glass" variant="glass">
          Glass card
        </Card>
      </div>
    `})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: '<Card v-bind="args">Card content with simple text.</Card>'
  })
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card Title'
  },
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: '<Card v-bind="args">This card has a title defined via the title prop.</Card>'
  })
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Custom Header</h3>
            <span class="text-sm text-gray-500">Badge</span>
          </div>
        </template>
        Card content with custom header.
      </Card>
    \`
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args">
        This card has a footer with actions.
        <template #footer>
          <Button variant="primary" size="sm">Save</Button>
          <Button variant="secondary" size="sm">Cancel</Button>
        </template>
      </Card>
    \`
  })
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bordered',
    title: 'Bordered Card'
  },
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: '<Card v-bind="args">This card uses the bordered variant with a visible border.</Card>'
  })
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'glass',
    title: 'Glass Card'
  },
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: '<Card v-bind="args">This card uses the glass variant with a transparency effect.</Card>'
  })
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    shadow: 'none',
    title: 'No Shadow'
  },
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: '<Card v-bind="args">This card has no shadow.</Card>'
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    shadow: 'xl',
    title: 'Large Shadow'
  },
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: '<Card v-bind="args">This card has a very pronounced shadow.</Card>'
  })
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'none',
    title: 'No Padding'
  },
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: '<Card v-bind="args">This card has no internal padding.</Card>'
  })
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'lg',
    title: 'Large Padding'
  },
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: '<Card v-bind="args">This card has significant padding.</Card>'
  })
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Card,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card v-bind="args" title="User Profile" variant="bordered">
        <template #header>
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div>
              <h3 class="font-semibold">John Doe</h3>
              <p class="text-sm text-gray-500">Software Engineer</p>
            </div>
          </div>
        </template>
        
        <div class="space-y-3">
          <p class="text-gray-700">
            Passionate developer with 5+ years of experience in Vue.js and TypeScript.
            Love building design systems and user interfaces.
          </p>
          
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Vue.js</span>
            <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">TypeScript</span>
            <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Nuxt</span>
          </div>
        </div>
        
        <template #footer>
          <div class="flex justify-between">
            <Button variant="outline" size="sm">View Profile</Button>
            <Button variant="primary" size="sm">Send Message</Button>
          </div>
        </template>
      </Card>
    \`
  })
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Card
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Default" variant="default">
          Default card
        </Card>
        
        <Card title="Bordered" variant="bordered">
          Bordered card
        </Card>
        
        <Card title="Glass" variant="glass">
          Glass card
        </Card>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};const E=["Default","WithTitle","CustomHeader","WithFooter","Bordered","Glass","NoShadow","LargeShadow","NoPadding","LargePadding","ComplexCard","AllVariants"];export{v as AllVariants,p as Bordered,f as ComplexCard,i as CustomHeader,d as Default,c as Glass,h as LargePadding,m as LargeShadow,g as NoPadding,u as NoShadow,l as WithFooter,o as WithTitle,E as __namedExportsOrder,q as default};
