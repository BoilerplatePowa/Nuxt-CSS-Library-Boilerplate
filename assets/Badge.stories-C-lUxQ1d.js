import{B as a}from"./Badge-DW1K3Q_O.js";import"./iframe-BrsdVXSx.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Data Display/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:"A flexible badge component for labels, tags, and status indicators."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["neutral","primary","secondary","accent","ghost","info","success","warning","error"],description:"Badge variant"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Badge size"},outline:{control:{type:"boolean"},description:"Outline style"}}},r={args:{variant:"primary"},render:e=>({components:{Badge:a},setup(){return{args:e}},template:'<Badge v-bind="args">Primary</Badge>'})},s={args:{variant:"secondary"},render:e=>({components:{Badge:a},setup(){return{args:e}},template:'<Badge v-bind="args">Secondary</Badge>'})},n={args:{variant:"accent"},render:e=>({components:{Badge:a},setup(){return{args:e}},template:'<Badge v-bind="args">Accent</Badge>'})},t={args:{variant:"success"},render:e=>({components:{Badge:a},setup(){return{args:e}},template:'<Badge v-bind="args">Success</Badge>'})},d={args:{variant:"error"},render:e=>({components:{Badge:a},setup(){return{args:e}},template:'<Badge v-bind="args">Error</Badge>'})},o={args:{variant:"primary",outline:!0},render:e=>({components:{Badge:a},setup(){return{args:e}},template:'<Badge v-bind="args">Outline</Badge>'})},g={args:{size:"lg"},render:e=>({components:{Badge:a},setup(){return{args:e}},template:'<Badge v-bind="args">Large Badge</Badge>'})},i={args:{size:"xs"},render:e=>({components:{Badge:a},setup(){return{args:e}},template:'<Badge v-bind="args">XS</Badge>'})},c={render:()=>({components:{Badge:a},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Colors</h3>
          <div class="flex flex-wrap gap-2">
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="ghost">Ghost</Badge>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Status</h3>
          <div class="flex flex-wrap gap-2">
            <Badge variant="info">Info</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Badge size="xs">XS</Badge>
            <Badge size="sm">SM</Badge>
            <Badge size="md">MD</Badge>
            <Badge size="lg">LG</Badge>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Outline</h3>
          <div class="flex flex-wrap gap-2">
            <Badge variant="primary" outline>Primary</Badge>
            <Badge variant="secondary" outline>Secondary</Badge>
            <Badge variant="accent" outline>Accent</Badge>
            <Badge variant="success" outline>Success</Badge>
            <Badge variant="error" outline>Error</Badge>
          </div>
        </div>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Primary</Badge>'
  })
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Secondary</Badge>'
  })
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent'
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Accent</Badge>'
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Success</Badge>'
  })
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error'
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Error</Badge>'
  })
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    outline: true
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Outline</Badge>'
  })
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">Large Badge</Badge>'
  })
}`,...g.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  },
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: '<Badge v-bind="args">XS</Badge>'
  })
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Colors</h3>
          <div class="flex flex-wrap gap-2">
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="ghost">Ghost</Badge>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Status</h3>
          <div class="flex flex-wrap gap-2">
            <Badge variant="info">Info</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Badge size="xs">XS</Badge>
            <Badge size="sm">SM</Badge>
            <Badge size="md">MD</Badge>
            <Badge size="lg">LG</Badge>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Outline</h3>
          <div class="flex flex-wrap gap-2">
            <Badge variant="primary" outline>Primary</Badge>
            <Badge variant="secondary" outline>Secondary</Badge>
            <Badge variant="accent" outline>Accent</Badge>
            <Badge variant="success" outline>Success</Badge>
            <Badge variant="error" outline>Error</Badge>
          </div>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const v=["Primary","Secondary","Accent","Success","Error","Outline","Large","Small","AllVariants"];export{n as Accent,c as AllVariants,d as Error,g as Large,o as Outline,r as Primary,s as Secondary,i as Small,t as Success,v as __namedExportsOrder,u as default};
