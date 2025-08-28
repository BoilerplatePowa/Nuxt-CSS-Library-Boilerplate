import{S as b}from"./Select-D8iMJlSt.js";import"./iframe--6dECDSE.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Data Input/Select",component:b,parameters:{layout:"centered",docs:{description:{component:"A flexible select component with multiple variants and support for options. Uses Vue 3.4 defineModel() for v-model support."}}},tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of options"},label:{control:{type:"text"},description:"Select label"},placeholder:{control:{type:"text"},description:"Placeholder text"},helpText:{control:{type:"text"},description:"Help text"},errorMessage:{control:{type:"text"},description:"Error message"},disabled:{control:{type:"boolean"},description:"Disabled state"},required:{control:{type:"boolean"},description:"Required field"},multiple:{control:{type:"boolean"},description:"Multiple selection"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Select size"},variant:{control:{type:"select"},options:["bordered","ghost","primary","secondary","accent","info","success","warning","error"],description:"Select variant"},"onUpdate:modelValue":{action:"update:modelValue"},onChange:{action:"change"}}},e=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"}],t={args:{label:"Choose an option",placeholder:"Select an option...",options:e}},s={args:{label:"Pre-selected option",options:e},render:o=>({components:{Select:b},setup(){return{args:o}},template:'<Select v-model="value" v-bind="args" />',data(){return{value:"2"}}})},a={args:{label:"Required field",placeholder:"You must select something...",required:!0,options:e}},n={args:{label:"Field with error",errorMessage:"Please select a valid option",options:e}},r={args:{label:"Field with help",helpText:"Choose the option that best fits your needs",options:e}},l={args:{label:"Disabled select",disabled:!0,options:e}},i={args:{label:"Multiple selection",multiple:!0,options:e},render:o=>({components:{Select:b},setup(){return{args:o}},template:'<Select v-model="value" v-bind="args" />',data(){return{value:["1","3"]}}})},p={args:{label:"Small select",size:"sm",options:e}},c={args:{label:"Large select",size:"lg",options:e}},d={args:{label:"Primary variant",variant:"primary",options:e}},m={args:{label:"Success variant",variant:"success",options:e}},u={render:()=>({components:{Select:b},setup(){return{options:e}},template:`
      <div class="space-y-6 w-full max-w-md">
        <div>
          <h3 class="text-lg font-semibold mb-3">Variants</h3>
          <div class="space-y-4">
            <Select label="Bordered" variant="bordered" :options="options" />
            <Select label="Ghost" variant="ghost" :options="options" />
            <Select label="Primary" variant="primary" :options="options" />
            <Select label="Secondary" variant="secondary" :options="options" />
            <Select label="Accent" variant="accent" :options="options" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Status Colors</h3>
          <div class="space-y-4">
            <Select label="Info" variant="info" :options="options" />
            <Select label="Success" variant="success" :options="options" />
            <Select label="Warning" variant="warning" :options="options" />
            <Select label="Error" variant="error" :options="options" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="space-y-4">
            <Select label="Extra Small" size="xs" :options="options" />
            <Select label="Small" size="sm" :options="options" />
            <Select label="Medium" size="md" :options="options" />
            <Select label="Large" size="lg" :options="options" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">States</h3>
          <div class="space-y-4">
            <Select label="Required" required :options="options" />
            <Select label="Disabled" disabled :options="options" />
            <Select label="Multiple" multiple :options="options" />
            <Select label="With Error" errorMessage="Something went wrong" :options="options" />
            <Select label="With Help" helpText="This is helpful information" :options="options" />
          </div>
        </div>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose an option',
    placeholder: 'Select an option...',
    options: sampleOptions
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pre-selected option',
    options: sampleOptions
  },
  render: args => ({
    components: {
      Select
    },
    setup() {
      return {
        args
      };
    },
    template: '<Select v-model="value" v-bind="args" />',
    data() {
      return {
        value: '2'
      };
    }
  })
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    placeholder: 'You must select something...',
    required: true,
    options: sampleOptions
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Field with error',
    errorMessage: 'Please select a valid option',
    options: sampleOptions
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Field with help',
    helpText: 'Choose the option that best fits your needs',
    options: sampleOptions
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled select',
    disabled: true,
    options: sampleOptions
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Multiple selection',
    multiple: true,
    options: sampleOptions
  },
  render: args => ({
    components: {
      Select
    },
    setup() {
      return {
        args
      };
    },
    template: '<Select v-model="value" v-bind="args" />',
    data() {
      return {
        value: ['1', '3']
      };
    }
  })
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small select',
    size: 'sm',
    options: sampleOptions
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large select',
    size: 'lg',
    options: sampleOptions
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary variant',
    variant: 'primary',
    options: sampleOptions
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Success variant',
    variant: 'success',
    options: sampleOptions
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select
    },
    setup() {
      const options = sampleOptions;
      return {
        options
      };
    },
    template: \`
      <div class="space-y-6 w-full max-w-md">
        <div>
          <h3 class="text-lg font-semibold mb-3">Variants</h3>
          <div class="space-y-4">
            <Select label="Bordered" variant="bordered" :options="options" />
            <Select label="Ghost" variant="ghost" :options="options" />
            <Select label="Primary" variant="primary" :options="options" />
            <Select label="Secondary" variant="secondary" :options="options" />
            <Select label="Accent" variant="accent" :options="options" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Status Colors</h3>
          <div class="space-y-4">
            <Select label="Info" variant="info" :options="options" />
            <Select label="Success" variant="success" :options="options" />
            <Select label="Warning" variant="warning" :options="options" />
            <Select label="Error" variant="error" :options="options" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="space-y-4">
            <Select label="Extra Small" size="xs" :options="options" />
            <Select label="Small" size="sm" :options="options" />
            <Select label="Medium" size="md" :options="options" />
            <Select label="Large" size="lg" :options="options" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">States</h3>
          <div class="space-y-4">
            <Select label="Required" required :options="options" />
            <Select label="Disabled" disabled :options="options" />
            <Select label="Multiple" multiple :options="options" />
            <Select label="With Error" errorMessage="Something went wrong" :options="options" />
            <Select label="With Help" helpText="This is helpful information" :options="options" />
          </div>
        </div>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};const f=["Default","WithValue","Required","WithError","WithHelp","Disabled","Multiple","Small","Large","Primary","Success","AllVariants"];export{u as AllVariants,t as Default,l as Disabled,c as Large,i as Multiple,d as Primary,a as Required,p as Small,m as Success,n as WithError,r as WithHelp,s as WithValue,f as __namedExportsOrder,y as default};
