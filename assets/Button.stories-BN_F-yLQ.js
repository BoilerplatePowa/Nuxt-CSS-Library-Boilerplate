import{B as e}from"./Button-DXCMznbP.js";import"./vue.esm-bundler-D0HQYiut.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Components/Button",component:e,parameters:{layout:"centered",docs:{description:{component:"A flexible button component with multiple variants and sizes."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","accent","ghost","outline","link"],description:"Button variant"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Disabled state"},loading:{control:{type:"boolean"},description:"Loading state"},fullWidth:{control:{type:"boolean"},description:"Full width"},onClick:{action:"clicked",description:"Click event"}}},n={args:{variant:"primary"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Primary Button</Button>'})},r={args:{variant:"secondary"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Secondary Button</Button>'})},o={args:{variant:"accent"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Accent Button</Button>'})},a={args:{variant:"ghost"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Ghost Button</Button>'})},s={args:{variant:"outline"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Outline Button</Button>'})},u={args:{variant:"link"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Link Button</Button>'})},i={args:{size:"sm"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Small Button</Button>'})},c={args:{size:"lg"},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Large Button</Button>'})},p={args:{disabled:!0},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Disabled Button</Button>'})},d={args:{loading:!0},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Loading...</Button>'})},m={args:{fullWidth:!0},render:t=>({components:{Button:e},setup(){return{args:t}},template:'<Button v-bind="args">Full Width Button</Button>'})},l={render:t=>({components:{Button:e},setup(){return{args:t}},template:`
      <Button v-bind="args">
        <template #icon-left>
          <span>←</span>
        </template>
        Button with Icons
        <template #icon-right>
          <span>→</span>
        </template>
      </Button>
    `})},B={render:()=>({components:{Button:e},template:`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="md">MD</Button>
          <Button size="lg">LG</Button>
        </div>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      <Button v-bind="args">
        <template #icon-left>
          <span>←</span>
        </template>
        Button with Icons
        <template #icon-right>
          <span>→</span>
        </template>
      </Button>
    \`
  })
}`,...l.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="md">MD</Button>
          <Button size="lg">LG</Button>
        </div>
      </div>
    \`
  })
}`,...B.parameters?.docs?.source}}};const S=["Primary","Secondary","Accent","Ghost","Outline","Link","Small","Large","Disabled","Loading","FullWidth","WithIcons","AllVariants"];export{o as Accent,B as AllVariants,p as Disabled,m as FullWidth,a as Ghost,c as Large,u as Link,d as Loading,s as Outline,n as Primary,r as Secondary,i as Small,l as WithIcons,S as __namedExportsOrder,y as default};
