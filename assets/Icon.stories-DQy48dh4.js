import{_ as n}from"./Icon-CKT-34Cl.js";import"./iframe-C1Ystuve.js";import"./preload-helper-D9Z9MdNV.js";import"./x-DS_Hm0fB.js";const z={title:"Icons/Icon",component:n,parameters:{layout:"centered",docs:{description:{component:"A flexible icon component that wraps Lucide icons with consistent styling and props."}}},tags:["autodocs"],argTypes:{name:{control:{type:"text"},description:"Icon name from Lucide library"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl"],description:"Icon size"},strokeWidth:{control:{type:"number",min:.5,max:3,step:.5},description:"Stroke width of the icon"},color:{control:{type:"select"},options:["primary","secondary","accent","neutral","info","success","warning","error"],description:"Text color class"},ariaLabel:{control:{type:"text"},description:"Accessibility label"},ariaHidden:{control:{type:"boolean"},description:"Hide from screen readers"}}},s={args:{name:"heart",size:"md"},render:e=>({components:{Icon:n},setup(){return{args:e}},template:'<Icon v-bind="args" />'})},r={args:{name:"star",size:"sm"},render:e=>({components:{Icon:n},setup(){return{args:e}},template:'<Icon v-bind="args" />'})},a={args:{name:"settings",size:"lg"},render:e=>({components:{Icon:n},setup(){return{args:e}},template:'<Icon v-bind="args" />'})},o={args:{name:"check-circle",size:"lg",color:"success"},render:e=>({components:{Icon:n},setup(){return{args:e}},template:'<Icon v-bind="args" />'})},c={args:{name:"zap",size:"lg",strokeWidth:1.5},render:e=>({components:{Icon:n},setup(){return{args:e}},template:'<Icon v-bind="args" />'})},m={args:{name:"heart",size:"md"},render:e=>({components:{Icon:n},setup(){return{args:e}},template:`
      <div class="grid grid-cols-6 gap-4 p-4">
        <Icon name="heart" size="md" />
        <Icon name="star" size="md" />
        <Icon name="settings" size="md" />
        <Icon name="user" size="md" />
        <Icon name="home" size="md" />
        <Icon name="search" size="md" />
        <Icon name="mail" size="md" />
        <Icon name="phone" size="md" />
        <Icon name="calendar" size="md" />
        <Icon name="clock" size="md" />
        <Icon name="map-pin" size="md" />
        <Icon name="download" size="md" />
        <Icon name="upload" size="md" />
        <Icon name="edit" size="md" />
        <Icon name="delete" size="md" />
        <Icon name="plus" size="md" />
        <Icon name="minus" size="md" />
        <Icon name="check" size="md" />
        <Icon name="x" size="md" />
        <Icon name="menu" size="md" />
        <Icon name="info" size="md" />
        <Icon name="help-circle" size="md" />
        <Icon name="ice-cream" size="md" />
      </div>
    `})},t={args:{name:"heart",size:"md"},render:e=>({components:{Icon:n},setup(){return{args:e}},template:`
      <div class="space-y-4 p-4">
        <h3 class="text-lg font-semibold">Dynamic Icon Loading Examples</h3>
        <div class="grid grid-cols-4 gap-4">
          <Icon name="heart" size="lg" />
          <Icon name="star" size="lg" />
          <Icon name="settings" size="lg" />
          <Icon name="user" size="lg" />
        </div>
        <p class="text-sm text-gray-600">
          These icons are loaded dynamically from Lucide. Any Lucide icon name will work!
        </p>
      </div>
    `})},i={args:{name:"heart"},render:e=>({components:{Icon:n},setup(){return{args:e}},template:`
      <div class="flex items-center gap-4 p-4">
        <Icon name="heart" size="xs" />
        <Icon name="heart" size="sm" />
        <Icon name="heart" size="md" />
        <Icon name="heart" size="lg" />
        <Icon name="heart" size="xl" />
        <Icon name="heart" size="2xl" />
      </div>
    `})},d={args:{name:"check-circle",size:"lg"},render:e=>({components:{Icon:n},setup(){return{args:e}},template:`
      <div class="flex items-center gap-4 p-4">
        <Icon name="check-circle" size="lg" color="success" />
        <Icon name="alert-circle" size="lg" color="warning" />
        <Icon name="x-circle" size="lg" color="error" />
        <Icon name="info" size="lg" color="info" />
        <Icon name="heart" size="lg" color="primary" />
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'heart',
    size: 'md'
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: '<Icon v-bind="args" />'
  })
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'star',
    size: 'sm'
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: '<Icon v-bind="args" />'
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'settings',
    size: 'lg'
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: '<Icon v-bind="args" />'
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'check-circle',
    size: 'lg',
    color: 'success'
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: '<Icon v-bind="args" />'
  })
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'zap',
    size: 'lg',
    strokeWidth: 1.5
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: '<Icon v-bind="args" />'
  })
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'heart',
    size: 'md'
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="grid grid-cols-6 gap-4 p-4">
        <Icon name="heart" size="md" />
        <Icon name="star" size="md" />
        <Icon name="settings" size="md" />
        <Icon name="user" size="md" />
        <Icon name="home" size="md" />
        <Icon name="search" size="md" />
        <Icon name="mail" size="md" />
        <Icon name="phone" size="md" />
        <Icon name="calendar" size="md" />
        <Icon name="clock" size="md" />
        <Icon name="map-pin" size="md" />
        <Icon name="download" size="md" />
        <Icon name="upload" size="md" />
        <Icon name="edit" size="md" />
        <Icon name="delete" size="md" />
        <Icon name="plus" size="md" />
        <Icon name="minus" size="md" />
        <Icon name="check" size="md" />
        <Icon name="x" size="md" />
        <Icon name="menu" size="md" />
        <Icon name="info" size="md" />
        <Icon name="help-circle" size="md" />
        <Icon name="ice-cream" size="md" />
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'heart',
    size: 'md'
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="space-y-4 p-4">
        <h3 class="text-lg font-semibold">Dynamic Icon Loading Examples</h3>
        <div class="grid grid-cols-4 gap-4">
          <Icon name="heart" size="lg" />
          <Icon name="star" size="lg" />
          <Icon name="settings" size="lg" />
          <Icon name="user" size="lg" />
        </div>
        <p class="text-sm text-gray-600">
          These icons are loaded dynamically from Lucide. Any Lucide icon name will work!
        </p>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'heart'
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex items-center gap-4 p-4">
        <Icon name="heart" size="xs" />
        <Icon name="heart" size="sm" />
        <Icon name="heart" size="md" />
        <Icon name="heart" size="lg" />
        <Icon name="heart" size="xl" />
        <Icon name="heart" size="2xl" />
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'check-circle',
    size: 'lg'
  },
  render: args => ({
    components: {
      Icon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex items-center gap-4 p-4">
        <Icon name="check-circle" size="lg" color="success" />
        <Icon name="alert-circle" size="lg" color="warning" />
        <Icon name="x-circle" size="lg" color="error" />
        <Icon name="info" size="lg" color="info" />
        <Icon name="heart" size="lg" color="primary" />
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};const u=["Default","Small","Large","Colored","CustomStroke","IconGrid","DynamicIcons","DifferentSizes","WithColors"];export{o as Colored,c as CustomStroke,s as Default,i as DifferentSizes,t as DynamicIcons,m as IconGrid,a as Large,r as Small,d as WithColors,u as __namedExportsOrder,z as default};
