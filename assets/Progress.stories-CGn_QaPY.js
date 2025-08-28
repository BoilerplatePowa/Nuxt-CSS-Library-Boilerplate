import{P as u}from"./Progress-CMOsj11U.js";import"./iframe--6dECDSE.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Feedback/Progress",component:u,parameters:{layout:"centered",docs:{description:{component:"A flexible progress bar component with multiple variants and display options."}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current progress value"},max:{control:{type:"number"},description:"Maximum value"},label:{control:{type:"text"},description:"Progress label"},helpText:{control:{type:"text"},description:"Help text below progress"},showValue:{control:{type:"boolean"},description:"Show current value"},valueFormat:{control:{type:"select"},options:["percentage","fraction","raw"],description:"Value display format"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Progress size"},variant:{control:{type:"select"},options:["primary","secondary","accent","info","success","warning","error"],description:"Progress variant"}}},e={args:{value:50,label:"Progress"}},a={args:{value:75,label:"Download Progress",showValue:!0}},r={args:{value:30,label:"Upload Progress",helpText:"Uploading your files...",showValue:!0}},s={args:{value:7,max:10,label:"Steps Completed",showValue:!0,valueFormat:"fraction"}},l={args:{value:60,size:"sm",label:"Small Progress"}},o={args:{value:80,size:"lg",label:"Large Progress"}},n={args:{value:100,variant:"success",label:"Completed",showValue:!0}},t={args:{value:90,variant:"warning",label:"Nearly Full",showValue:!0}},c={args:{value:25,variant:"error",label:"Error State",showValue:!0}},i={render:()=>({components:{Progress:u},template:`
      <div class="space-y-6 w-full max-w-md">
        <div>
          <h3 class="text-lg font-semibold mb-3">Colors</h3>
          <div class="space-y-4">
            <Progress :value="30" variant="primary" label="Primary" showValue />
            <Progress :value="45" variant="secondary" label="Secondary" showValue />
            <Progress :value="60" variant="accent" label="Accent" showValue />
            <Progress :value="75" variant="info" label="Info" showValue />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Status</h3>
          <div class="space-y-4">
            <Progress :value="100" variant="success" label="Success" showValue />
            <Progress :value="85" variant="warning" label="Warning" showValue />
            <Progress :value="20" variant="error" label="Error" showValue />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="space-y-4">
            <Progress :value="50" size="xs" label="Extra Small" />
            <Progress :value="50" size="sm" label="Small" />
            <Progress :value="50" size="md" label="Medium" />
            <Progress :value="50" size="lg" label="Large" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Value Formats</h3>
          <div class="space-y-4">
            <Progress :value="65" label="Percentage" showValue valueFormat="percentage" />
            <Progress :value="7" :max="10" label="Fraction" showValue valueFormat="fraction" />
            <Progress :value="1024" :max="2048" label="Raw Value" showValue valueFormat="raw" />
          </div>
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    label: 'Progress'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: 'Download Progress',
    showValue: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 30,
    label: 'Upload Progress',
    helpText: 'Uploading your files...',
    showValue: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 7,
    max: 10,
    label: 'Steps Completed',
    showValue: true,
    valueFormat: 'fraction'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'sm',
    label: 'Small Progress'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    size: 'lg',
    label: 'Large Progress'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'success',
    label: 'Completed',
    showValue: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 90,
    variant: 'warning',
    label: 'Nearly Full',
    showValue: true
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 25,
    variant: 'error',
    label: 'Error State',
    showValue: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Progress
    },
    template: \`
      <div class="space-y-6 w-full max-w-md">
        <div>
          <h3 class="text-lg font-semibold mb-3">Colors</h3>
          <div class="space-y-4">
            <Progress :value="30" variant="primary" label="Primary" showValue />
            <Progress :value="45" variant="secondary" label="Secondary" showValue />
            <Progress :value="60" variant="accent" label="Accent" showValue />
            <Progress :value="75" variant="info" label="Info" showValue />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Status</h3>
          <div class="space-y-4">
            <Progress :value="100" variant="success" label="Success" showValue />
            <Progress :value="85" variant="warning" label="Warning" showValue />
            <Progress :value="20" variant="error" label="Error" showValue />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="space-y-4">
            <Progress :value="50" size="xs" label="Extra Small" />
            <Progress :value="50" size="sm" label="Small" />
            <Progress :value="50" size="md" label="Medium" />
            <Progress :value="50" size="lg" label="Large" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Value Formats</h3>
          <div class="space-y-4">
            <Progress :value="65" label="Percentage" showValue valueFormat="percentage" />
            <Progress :value="7" :max="10" label="Fraction" showValue valueFormat="fraction" />
            <Progress :value="1024" :max="2048" label="Raw Value" showValue valueFormat="raw" />
          </div>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};const b=["Default","WithValue","WithHelp","Fraction","Small","Large","Success","Warning","Error","AllVariants"];export{i as AllVariants,e as Default,c as Error,s as Fraction,o as Large,l as Small,n as Success,t as Warning,r as WithHelp,a as WithValue,b as __namedExportsOrder,g as default};
