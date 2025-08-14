import{B as n}from"./Button-B_ESCtix.js";import"./iframe-BrsdVXSx.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={title:"Actions/Button",component:n,parameters:{layout:"centered",docs:{description:{component:"A flexible button component with multiple variants and sizes."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","accent","neutral","ghost","outline","link","info","success","warning","error"],description:"Button variant"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Disabled state"},loading:{control:{type:"boolean"},description:"Loading state"},fullWidth:{control:{type:"boolean"},description:"Full width"},circle:{control:{type:"boolean"},description:"Circle shape"},square:{control:{type:"boolean"},description:"Square shape"},glass:{control:{type:"boolean"},description:"Glass effect"},noAnimation:{control:{type:"boolean"},description:"Disable animations"},onClick:{action:"clicked",description:"Click event"}}},e={args:{variant:"primary"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Primary Button</Button>'})},r={args:{variant:"secondary"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Secondary Button</Button>'})},a={args:{variant:"accent"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Accent Button</Button>'})},s={args:{variant:"ghost"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Ghost Button</Button>'})},o={args:{variant:"outline"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Outline Button</Button>'})},u={args:{variant:"link"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Link Button</Button>'})},i={args:{variant:"neutral"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Neutral Button</Button>'})},c={args:{variant:"info"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Info Button</Button>'})},p={args:{variant:"success"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Success Button</Button>'})},l={args:{variant:"warning"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Warning Button</Button>'})},d={args:{variant:"error"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Error Button</Button>'})},m={args:{size:"sm"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Small Button</Button>'})},B={args:{size:"lg"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Large Button</Button>'})},g={args:{disabled:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Disabled Button</Button>'})},v={args:{loading:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Loading...</Button>'})},b={args:{fullWidth:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Full Width Button</Button>'})},f={render:t=>({components:{Button:n},setup(){return{args:t}},template:`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <Button v-bind="args">
            <template #icon-left>
              <span>←</span>
            </template>
            With Left Icon
          </Button>
          <Button v-bind="args">
            With Right Icon
            <template #icon-right>
              <span>→</span>
            </template>
          </Button>
          <Button v-bind="args">
            <template #icon-left>
              <span>←</span>
            </template>
            Both Icons
            <template #icon-right>
              <span>→</span>
            </template>
          </Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button circle>
            <span>♥</span>
          </Button>
          <Button square>
            <span>★</span>
          </Button>
        </div>
      </div>
    `})},h={args:{circle:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">○</Button>'})},S={args:{square:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">■</Button>'})},x={args:{glass:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<div class="p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"><Button v-bind="args">Glass Button</Button></div>'})},y={render:()=>({components:{Button:n},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Variants</h3>
          <div class="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="neutral">Neutral</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Status Colors</h3>
          <div class="flex flex-wrap gap-2">
            <Button variant="info">Info</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="error">Error</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="md">MD</Button>
            <Button size="lg">LG</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Shapes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Button circle size="sm">○</Button>
            <Button square size="sm">■</Button>
            <Button circle size="lg">○</Button>
            <Button square size="lg">■</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">States</h3>
          <div class="flex flex-wrap gap-2">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button glass>Glass</Button>
            <Button noAnimation>No Animation</Button>
          </div>
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Primary Button</Button>'
  })
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Secondary Button</Button>'
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Accent Button</Button>'
  })
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Ghost Button</Button>'
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Outline Button</Button>'
  })
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Link Button</Button>'
  })
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Neutral Button</Button>'
  })
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Info Button</Button>'
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Success Button</Button>'
  })
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Warning Button</Button>'
  })
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Error Button</Button>'
  })
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Small Button</Button>'
  })
}`,...m.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Large Button</Button>'
  })
}`,...B.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Disabled Button</Button>'
  })
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Loading...</Button>'
  })
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Full Width Button</Button>'
  })
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <Button v-bind="args">
            <template #icon-left>
              <span>←</span>
            </template>
            With Left Icon
          </Button>
          <Button v-bind="args">
            With Right Icon
            <template #icon-right>
              <span>→</span>
            </template>
          </Button>
          <Button v-bind="args">
            <template #icon-left>
              <span>←</span>
            </template>
            Both Icons
            <template #icon-right>
              <span>→</span>
            </template>
          </Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button circle>
            <span>♥</span>
          </Button>
          <Button square>
            <span>★</span>
          </Button>
        </div>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    circle: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">○</Button>'
  })
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">■</Button>'
  })
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    glass: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<div class="p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"><Button v-bind="args">Glass Button</Button></div>'
  })
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Variants</h3>
          <div class="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="neutral">Neutral</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Status Colors</h3>
          <div class="flex flex-wrap gap-2">
            <Button variant="info">Info</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="error">Error</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="md">MD</Button>
            <Button size="lg">LG</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Shapes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Button circle size="sm">○</Button>
            <Button square size="sm">■</Button>
            <Button circle size="lg">○</Button>
            <Button square size="lg">■</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">States</h3>
          <div class="flex flex-wrap gap-2">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button glass>Glass</Button>
            <Button noAnimation>No Animation</Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};const A=["Primary","Secondary","Accent","Ghost","Outline","Link","Neutral","Info","Success","Warning","Error","Small","Large","Disabled","Loading","FullWidth","WithIcons","Circle","Square","Glass","AllVariants"];export{a as Accent,y as AllVariants,h as Circle,g as Disabled,d as Error,b as FullWidth,s as Ghost,x as Glass,c as Info,B as Large,u as Link,v as Loading,i as Neutral,o as Outline,e as Primary,r as Secondary,m as Small,S as Square,p as Success,l as Warning,f as WithIcons,A as __namedExportsOrder,k as default};
