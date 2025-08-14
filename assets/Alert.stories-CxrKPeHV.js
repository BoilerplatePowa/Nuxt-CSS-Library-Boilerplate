import{d as h,c as w,a as t,e as g,b as y,m as o,n as I,o as s,t as S}from"./iframe-DxBZQA7Y.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const _={key:0,class:"flex-shrink-0"},D={key:0},C={key:1},T={key:2},W={key:3},E={key:4},N={class:"flex-1"},B={key:0,class:"font-bold"},V={key:0,class:"text-xs"},v=h({__name:"Alert",props:{variant:{default:"info"},title:{},dismissible:{type:Boolean,default:!1},showDefaultIcon:{type:Boolean,default:!0}},emits:["dismiss"],setup(r){const n=r,b=w(()=>{const e=["alert"];return n.variant==="info"?e.push("alert-info"):n.variant==="success"?e.push("alert-success"):n.variant==="warning"?e.push("alert-warning"):n.variant==="error"&&e.push("alert-error"),e.join(" ")});return(e,A)=>(s(),t("div",{class:I(b.value),role:"alert"},[g(e.$slots,"icon",{},()=>[e.showDefaultIcon?(s(),t("span",_,[e.variant==="info"?(s(),t("span",D,"ℹ️")):e.variant==="success"?(s(),t("span",C,"✅")):e.variant==="warning"?(s(),t("span",T,"⚠️")):e.variant==="error"?(s(),t("span",W,"❌")):(s(),t("span",E,"📢"))])):o("",!0)],!0),y("div",N,[g(e.$slots,"title",{},()=>[e.title?(s(),t("h3",B,S(e.title),1)):o("",!0)],!0),e.$slots.default?(s(),t("div",V,[g(e.$slots,"default",{},void 0,!0)])):o("",!0)]),e.dismissible?(s(),t("button",{key:0,onClick:A[0]||(A[0]=q=>e.$emit("dismiss")),class:"btn btn-sm btn-circle btn-ghost","aria-label":"Close alert"}," ✕ ")):o("",!0)],2))}}),a=k(v,[["__scopeId","data-v-9825cf4a"]]);v.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'info'"}},{name:"title",required:!1,type:{name:"string"}},{name:"dismissible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showDefaultIcon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"dismiss"}],slots:[{name:"icon"},{name:"title"},{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Feedback/Alert.vue"]};const F={title:"Feedback/Alert",component:a,parameters:{layout:"centered",docs:{description:{component:"A flexible alert component with multiple variants for different message types."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"],description:"Alert variant"},title:{control:{type:"text"},description:"Alert title"},dismissible:{control:{type:"boolean"},description:"Show dismiss button"},showDefaultIcon:{control:{type:"boolean"},description:"Show default icon"},onDismiss:{action:"dismissed",description:"Dismiss event"}}},i={args:{variant:"info",title:"Information"},render:r=>({components:{Alert:a},setup(){return{args:r}},template:'<Alert v-bind="args">This is an info alert with some additional information.</Alert>'})},l={args:{variant:"success",title:"Success!"},render:r=>({components:{Alert:a},setup(){return{args:r}},template:'<Alert v-bind="args">Your action was completed successfully.</Alert>'})},c={args:{variant:"warning",title:"Warning"},render:r=>({components:{Alert:a},setup(){return{args:r}},template:'<Alert v-bind="args">Please be aware of the following issue.</Alert>'})},u={args:{variant:"error",title:"Error"},render:r=>({components:{Alert:a},setup(){return{args:r}},template:'<Alert v-bind="args">An error occurred while processing your request.</Alert>'})},m={args:{variant:"info",title:"Dismissible Alert",dismissible:!0},render:r=>({components:{Alert:a},setup(){return{args:r}},template:'<Alert v-bind="args">This alert can be dismissed by clicking the X button.</Alert>'})},p={args:{variant:"info",title:"No Icon",showDefaultIcon:!1},render:r=>({components:{Alert:a},setup(){return{args:r}},template:'<Alert v-bind="args">This alert has no icon.</Alert>'})},d={args:{variant:"success",title:"Custom Icon"},render:r=>({components:{Alert:a},setup(){return{args:r}},template:`
      <Alert v-bind="args">
        <template #icon>
          <span class="text-2xl">🎉</span>
        </template>
        This alert has a custom icon!
      </Alert>
    `})},f={render:()=>({components:{Alert:a},template:`
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
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const O=["Info","Success","Warning","Error","Dismissible","WithoutIcon","WithCustomIcon","AllVariants"];export{f as AllVariants,m as Dismissible,u as Error,i as Info,l as Success,c as Warning,d as WithCustomIcon,p as WithoutIcon,O as __namedExportsOrder,F as default};
