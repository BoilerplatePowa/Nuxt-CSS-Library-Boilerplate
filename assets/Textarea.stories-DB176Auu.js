import{r as y}from"./iframe-B8bctOEb.js";import{T as b}from"./Textarea-dkshkJcS.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const w={title:"Data Input/Textarea",component:b,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["bordered","ghost","primary","secondary","accent","info","success","warning","error"]},disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},required:{control:{type:"boolean"}},showCharCount:{control:{type:"boolean"}}}},r={args:{placeholder:"Enter your message..."}},a={args:{label:"Message",placeholder:"Enter your message..."}},s={args:{label:"Required Field",placeholder:"This field is required",required:!0}},o={args:{label:"Description",placeholder:"Enter description...",helpText:"Provide a detailed description of your request"}},t={args:{label:"Message",placeholder:"Enter your message...",errorMessage:"This field is required"}},l={args:{label:"Disabled Textarea",placeholder:"This is disabled",disabled:!0}},n={args:{label:"Read Only",readonly:!0},render:e=>({components:{Textarea:b},setup(){const v=y("This content cannot be edited");return{args:e,value:v}},template:'<Textarea v-model="value" v-bind="args" />'})},c={args:{label:"Small Textarea",placeholder:"Small size",size:"sm"}},d={args:{label:"Large Textarea",placeholder:"Large size",size:"lg"}},i={args:{label:"Bordered",placeholder:"Bordered variant",variant:"bordered"}},p={args:{label:"Ghost",placeholder:"Ghost variant",variant:"ghost"}},m={args:{label:"Primary",placeholder:"Primary variant",variant:"primary"}},u={args:{label:"Message",placeholder:"Type your message...",maxlength:200,showCharCount:!0},render:e=>({components:{Textarea:b},setup(){const v=y("This textarea shows character count");return{args:e,value:v}},template:'<Textarea v-model="value" v-bind="args" />'})},g={args:{label:"Large Text Area",placeholder:"This textarea has more rows...",rows:8}},h={render:()=>({components:{Textarea:b},setup(){return{value:y("")}},template:`
      <div class="space-y-4">
        <Textarea 
          v-model="value" 
          label="Interactive Textarea" 
          placeholder="Type something here..."
          helpText="This textarea uses v-model for two-way binding"
        />
        <div class="p-4 bg-base-200 rounded-lg">
          <p class="text-sm font-medium mb-2">Current value:</p>
          <p class="text-sm">{{ value || '(empty)' }}</p>
        </div>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your message...'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter your message...'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    helpText: 'Provide a detailed description of your request'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    errorMessage: 'This field is required'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Textarea',
    placeholder: 'This is disabled',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read Only',
    readonly: true
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      const value = ref('This content cannot be edited');
      return {
        args,
        value
      };
    },
    template: '<Textarea v-model="value" v-bind="args" />'
  })
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Textarea',
    placeholder: 'Small size',
    size: 'sm'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Textarea',
    placeholder: 'Large size',
    size: 'lg'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Bordered',
    placeholder: 'Bordered variant',
    variant: 'bordered'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ghost',
    placeholder: 'Ghost variant',
    variant: 'ghost'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    placeholder: 'Primary variant',
    variant: 'primary'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
    maxlength: 200,
    showCharCount: true
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      const value = ref('This textarea shows character count');
      return {
        args,
        value
      };
    },
    template: '<Textarea v-model="value" v-bind="args" />'
  })
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Text Area',
    placeholder: 'This textarea has more rows...',
    rows: 8
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Textarea
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <div class="space-y-4">
        <Textarea 
          v-model="value" 
          label="Interactive Textarea" 
          placeholder="Type something here..."
          helpText="This textarea uses v-model for two-way binding"
        />
        <div class="p-4 bg-base-200 rounded-lg">
          <p class="text-sm font-medium mb-2">Current value:</p>
          <p class="text-sm">{{ value || '(empty)' }}</p>
        </div>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};const C=["Default","WithLabel","Required","WithHelp","WithError","Disabled","Readonly","SmallSize","LargeSize","Bordered","Ghost","Primary","WithCharacterCount","CustomRows","Interactive"];export{i as Bordered,g as CustomRows,r as Default,l as Disabled,p as Ghost,h as Interactive,d as LargeSize,m as Primary,n as Readonly,s as Required,c as SmallSize,u as WithCharacterCount,t as WithError,o as WithHelp,a as WithLabel,C as __namedExportsOrder,w as default};
