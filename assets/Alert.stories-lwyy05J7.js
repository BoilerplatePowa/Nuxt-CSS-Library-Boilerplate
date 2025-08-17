import{A as r}from"./Alert-D1atWyPC.js";import"./iframe-DKx4txre.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Feedback/Alert",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible alert component with multiple variants for different message types."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"],description:"Alert variant"},title:{control:{type:"text"},description:"Alert title"},dismissible:{control:{type:"boolean"},description:"Show dismiss button"},showDefaultIcon:{control:{type:"boolean"},description:"Show default icon"},onDismiss:{action:"dismissed",description:"Dismiss event"}}},t={args:{variant:"info",title:"Information"},render:e=>({components:{Alert:r},setup(){return{args:e}},template:'<Alert v-bind="args">This is an info alert with some additional information.</Alert>'})},s={args:{variant:"success",title:"Success!"},render:e=>({components:{Alert:r},setup(){return{args:e}},template:'<Alert v-bind="args">Your action was completed successfully.</Alert>'})},a={args:{variant:"warning",title:"Warning"},render:e=>({components:{Alert:r},setup(){return{args:e}},template:'<Alert v-bind="args">Please be aware of the following issue.</Alert>'})},n={args:{variant:"error",title:"Error"},render:e=>({components:{Alert:r},setup(){return{args:e}},template:'<Alert v-bind="args">An error occurred while processing your request.</Alert>'})},o={args:{variant:"info",title:"Dismissible Alert",dismissible:!0},render:e=>({components:{Alert:r},setup(){return{args:e}},template:'<Alert v-bind="args">This alert can be dismissed by clicking the X button.</Alert>'})},i={args:{variant:"info",title:"No Icon",showDefaultIcon:!1},render:e=>({components:{Alert:r},setup(){return{args:e}},template:'<Alert v-bind="args">This alert has no icon.</Alert>'})},l={args:{variant:"success",title:"Custom Icon"},render:e=>({components:{Alert:r},setup(){return{args:e}},template:`
      <Alert v-bind="args">
        <template #icon>
          <span class="text-2xl">🎉</span>
        </template>
        This alert has a custom icon!
      </Alert>
    `})},c={render:()=>({components:{Alert:r},template:`
      <div class="space-y-4 w-full max-w-md">
        <Alert variant="info" title="Information">
          This is an info alert with important information.
        </Alert>
        <Alert variant="success" title="Success">
          Operation completed successfully!
        </Alert>
        <Alert variant="warning" title="Warning">
          Please review the following before proceeding.
        </Alert>
        <Alert variant="error" title="Error">
          An error occurred during the process.
        </Alert>
        <Alert variant="info" title="Dismissible" dismissible>
          This alert can be dismissed.
        </Alert>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information'
  },
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args">This is an info alert with some additional information.</Alert>'
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success!'
  },
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args">Your action was completed successfully.</Alert>'
  })
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning'
  },
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args">Please be aware of the following issue.</Alert>'
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error'
  },
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args">An error occurred while processing your request.</Alert>'
  })
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    dismissible: true
  },
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args">This alert can be dismissed by clicking the X button.</Alert>'
  })
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'No Icon',
    showDefaultIcon: false
  },
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: '<Alert v-bind="args">This alert has no icon.</Alert>'
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Custom Icon'
  },
  render: args => ({
    components: {
      Alert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Alert v-bind="args">
        <template #icon>
          <span class="text-2xl">🎉</span>
        </template>
        This alert has a custom icon!
      </Alert>
    \`
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert
    },
    template: \`
      <div class="space-y-4 w-full max-w-md">
        <Alert variant="info" title="Information">
          This is an info alert with important information.
        </Alert>
        <Alert variant="success" title="Success">
          Operation completed successfully!
        </Alert>
        <Alert variant="warning" title="Warning">
          Please review the following before proceeding.
        </Alert>
        <Alert variant="error" title="Error">
          An error occurred during the process.
        </Alert>
        <Alert variant="info" title="Dismissible" dismissible>
          This alert can be dismissed.
        </Alert>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const A=["Info","Success","Warning","Error","Dismissible","WithoutIcon","WithCustomIcon","AllVariants"];export{c as AllVariants,o as Dismissible,n as Error,t as Info,s as Success,a as Warning,l as WithCustomIcon,i as WithoutIcon,A as __namedExportsOrder,g as default};
