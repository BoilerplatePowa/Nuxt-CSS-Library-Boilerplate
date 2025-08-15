import{d as I,c as h,a as t,e as g,b as S,m as o,t as v,n as k,o as s}from"./iframe-BEoDMSxF.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const _={key:0,class:"alert-icon flex-shrink-0"},T={key:0},C={key:1},W={key:2},q={key:3},E={key:4},N={key:5},B={class:"flex-1"},V={key:0,class:"alert-title font-bold"},$={key:0},P={key:1},b=I({__name:"Alert",props:{variant:{default:"info"},title:{},message:{},dismissible:{type:Boolean,default:!1},showDefaultIcon:{type:Boolean,default:!0},icon:{}},emits:["dismiss"],setup(r){const a=r,w=h(()=>!a.message&&!a.icon&&!a.title?!1:a.icon||a.showDefaultIcon),y=h(()=>{const e=["alert"];return a.variant==="info"?e.push("alert-info"):a.variant==="success"?e.push("alert-success"):a.variant==="warning"?e.push("alert-warning"):a.variant==="error"&&e.push("alert-error"),e.join(" ")});return(e,A)=>(s(),t("div",{class:k(y.value),role:"alert","aria-live":"assertive"},[g(e.$slots,"icon",{},()=>[w.value?(s(),t("span",_,[e.icon?(s(),t("span",T,v(e.icon),1)):e.showDefaultIcon&&e.variant==="info"?(s(),t("span",C,"ℹ️")):e.showDefaultIcon&&e.variant==="success"?(s(),t("span",W,"✅")):e.showDefaultIcon&&e.variant==="warning"?(s(),t("span",q,"⚠️")):e.showDefaultIcon&&e.variant==="error"?(s(),t("span",E,"❌")):e.showDefaultIcon?(s(),t("span",N,"📢")):o("",!0)])):o("",!0)],!0),S("div",B,[g(e.$slots,"title",{},()=>[e.title?(s(),t("h3",V,v(e.title),1)):o("",!0)],!0),e.message?(s(),t("div",$,v(e.message),1)):o("",!0),e.$slots.default?(s(),t("div",P,[g(e.$slots,"default",{},void 0,!0)])):o("",!0)]),e.dismissible?(s(),t("button",{key:0,onClick:A[0]||(A[0]=F=>e.$emit("dismiss")),class:"btn btn-sm btn-circle btn-ghost","aria-label":"close"}," ✕ ")):o("",!0)],2))}}),n=D(b,[["__scopeId","data-v-6dd1e12d"]]);b.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'info'"}},{name:"title",required:!1,type:{name:"string"}},{name:"message",required:!1,type:{name:"string"}},{name:"dismissible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showDefaultIcon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"icon",required:!1,type:{name:"string"}}],events:[{name:"dismiss"}],slots:[{name:"icon"},{name:"title"},{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Feedback/Alert.vue"]};const Y={title:"Feedback/Alert",component:n,parameters:{layout:"centered",docs:{description:{component:"A flexible alert component with multiple variants for different message types."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["info","success","warning","error"],description:"Alert variant"},title:{control:{type:"text"},description:"Alert title"},dismissible:{control:{type:"boolean"},description:"Show dismiss button"},showDefaultIcon:{control:{type:"boolean"},description:"Show default icon"},onDismiss:{action:"dismissed",description:"Dismiss event"}}},i={args:{variant:"info",title:"Information"},render:r=>({components:{Alert:n},setup(){return{args:r}},template:'<Alert v-bind="args">This is an info alert with some additional information.</Alert>'})},l={args:{variant:"success",title:"Success!"},render:r=>({components:{Alert:n},setup(){return{args:r}},template:'<Alert v-bind="args">Your action was completed successfully.</Alert>'})},c={args:{variant:"warning",title:"Warning"},render:r=>({components:{Alert:n},setup(){return{args:r}},template:'<Alert v-bind="args">Please be aware of the following issue.</Alert>'})},u={args:{variant:"error",title:"Error"},render:r=>({components:{Alert:n},setup(){return{args:r}},template:'<Alert v-bind="args">An error occurred while processing your request.</Alert>'})},m={args:{variant:"info",title:"Dismissible Alert",dismissible:!0},render:r=>({components:{Alert:n},setup(){return{args:r}},template:'<Alert v-bind="args">This alert can be dismissed by clicking the X button.</Alert>'})},p={args:{variant:"info",title:"No Icon",showDefaultIcon:!1},render:r=>({components:{Alert:n},setup(){return{args:r}},template:'<Alert v-bind="args">This alert has no icon.</Alert>'})},d={args:{variant:"success",title:"Custom Icon"},render:r=>({components:{Alert:n},setup(){return{args:r}},template:`
      <Alert v-bind="args">
        <template #icon>
          <span class="text-2xl">🎉</span>
        </template>
        This alert has a custom icon!
      </Alert>
    `})},f={render:()=>({components:{Alert:n},template:`
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
}`,...f.parameters?.docs?.source}}};const j=["Info","Success","Warning","Error","Dismissible","WithoutIcon","WithCustomIcon","AllVariants"];export{f as AllVariants,m as Dismissible,u as Error,i as Info,l as Success,c as Warning,d as WithCustomIcon,p as WithoutIcon,j as __namedExportsOrder,Y as default};
