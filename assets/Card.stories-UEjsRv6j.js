import{C as r}from"./Card-x7kh0Dkn.js";import{B as g}from"./Button-DOZU0D_q.js";import"./iframe-DJmXHO36.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={title:"Data Display/Card",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible card component with optional header, body and footer."}}},tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"Card title"},variant:{control:{type:"select"},options:["normal","bordered","compact","side"],description:"Card variant"},shadow:{control:"boolean",description:"Show card shadow"},glass:{control:"boolean",description:"Glass effect"},imageFull:{control:"boolean",description:"Full image layout"}}},a={render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">Card content with simple text.</Card>'})},t={args:{title:"Card Title"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card has a title defined via the title prop.</Card>'})},s={render:e=>({components:{Card:r},setup(){return{args:e}},template:`
      <Card v-bind="args">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Custom Header</h3>
            <span class="text-sm text-gray-500">Badge</span>
          </div>
        </template>
        Card content with custom header.
      </Card>
    `})},n={render:e=>({components:{Card:r,Button:g},setup(){return{args:e}},template:`
      <Card v-bind="args">
        This card has a footer with actions.
        <template #footer>
          <Button variant="primary" size="sm">Save</Button>
          <Button variant="secondary" size="sm">Cancel</Button>
        </template>
      </Card>
    `})},d={args:{variant:"bordered",title:"Bordered Card"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card uses the bordered variant with a visible border.</Card>'})},o={args:{glass:!0,title:"Glass Card"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card uses the glass variant with a transparency effect.</Card>'})},i={args:{shadow:!1,title:"No Shadow"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card has no shadow.</Card>'})},p={args:{shadow:!0,title:"With Shadow"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card has a very pronounced shadow.</Card>'})},c={args:{variant:"compact",title:"Compact Card"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card uses compact variant with reduced padding.</Card>'})},l={args:{variant:"side",title:"Side Card"},render:e=>({components:{Card:r},setup(){return{args:e}},template:'<Card v-bind="args">This card uses side layout variant.</Card>'})},m={render:e=>({components:{Card:r,Button:g},setup(){return{args:e}},template:`
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
    `})},u={render:()=>({components:{Card:r},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Normal" variant="normal">
          Normal card
        </Card>
        
        <Card title="Bordered" variant="bordered">
          Bordered card
        </Card>
        
        <Card title="Glass" :glass="true">
          Glass card
        </Card>
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    glass: true,
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    shadow: false,
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    shadow: true,
    title: 'With Shadow'
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
    title: 'Compact Card'
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
    template: '<Card v-bind="args">This card uses compact variant with reduced padding.</Card>'
  })
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'side',
    title: 'Side Card'
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
    template: '<Card v-bind="args">This card uses side layout variant.</Card>'
  })
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Card
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Normal" variant="normal">
          Normal card
        </Card>
        
        <Card title="Bordered" variant="bordered">
          Bordered card
        </Card>
        
        <Card title="Glass" :glass="true">
          Glass card
        </Card>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};const w=["Default","WithTitle","CustomHeader","WithFooter","Bordered","Glass","NoShadow","WithShadow","Compact","SideCard","ComplexCard","AllVariants"];export{u as AllVariants,d as Bordered,c as Compact,m as ComplexCard,s as CustomHeader,a as Default,o as Glass,i as NoShadow,l as SideCard,n as WithFooter,p as WithShadow,t as WithTitle,w as __namedExportsOrder,x as default};
