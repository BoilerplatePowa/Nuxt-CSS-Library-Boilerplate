import{d as P,c as b,a as s,m as l,b as x,t as g,n as S,o as r}from"./iframe-DxBZQA7Y.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const z={class:"w-full"},_={key:0,class:"flex justify-between text-sm mb-1"},C={key:0,class:"text-base-content"},L={key:1,class:"text-base-content/70"},E=["value","max","aria-label"],k={key:1,class:"text-xs text-base-content/70 mt-1"},f=P({__name:"Progress",props:{value:{default:0},max:{default:100},label:{},helpText:{},showValue:{type:Boolean,default:!1},valueFormat:{default:"percentage"},size:{default:"md"},variant:{default:"primary"},ariaLabel:{}},setup(w){const a=w,y=b(()=>{const e=["progress","w-full"];return a.size==="xs"?e.push("progress-xs"):a.size==="sm"?e.push("progress-sm"):a.size==="lg"&&e.push("progress-lg"),a.variant==="primary"?e.push("progress-primary"):a.variant==="secondary"?e.push("progress-secondary"):a.variant==="accent"?e.push("progress-accent"):a.variant==="info"?e.push("progress-info"):a.variant==="success"?e.push("progress-success"):a.variant==="warning"?e.push("progress-warning"):a.variant==="error"&&e.push("progress-error"),e.join(" ")}),V=b(()=>a.valueFormat==="percentage"?`${Math.round(a.value/a.max*100)}%`:a.valueFormat==="fraction"?`${a.value}/${a.max}`:String(a.value));return(e,q)=>(r(),s("div",z,[e.label||e.showValue?(r(),s("div",_,[e.label?(r(),s("span",C,g(e.label),1)):l("",!0),e.showValue?(r(),s("span",L,g(V.value),1)):l("",!0)])):l("",!0),x("progress",{class:S(y.value),value:e.value,max:e.max,"aria-label":e.ariaLabel||e.label},null,10,E),e.helpText?(r(),s("p",k,g(e.helpText),1)):l("",!0)]))}}),h=F(f,[["__scopeId","data-v-082a9400"]]);f.__docgenInfo={exportName:"default",displayName:"Progress",description:"",tags:{},props:[{name:"value",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"label",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"showValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"valueFormat",required:!1,type:{name:"union",elements:[{name:'"percentage"'},{name:'"fraction"'},{name:'"raw"'}]},defaultValue:{func:!1,value:"'percentage'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"ariaLabel",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Feedback/Progress.vue"]};const B={title:"Feedback/Progress",component:h,parameters:{layout:"centered",docs:{description:{component:"A flexible progress bar component with multiple variants and display options."}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current progress value"},max:{control:{type:"number"},description:"Maximum value"},label:{control:{type:"text"},description:"Progress label"},helpText:{control:{type:"text"},description:"Help text below progress"},showValue:{control:{type:"boolean"},description:"Show current value"},valueFormat:{control:{type:"select"},options:["percentage","fraction","raw"],description:"Value display format"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Progress size"},variant:{control:{type:"select"},options:["primary","secondary","accent","info","success","warning","error"],description:"Progress variant"}}},o={args:{value:50,label:"Progress"}},n={args:{value:75,label:"Download Progress",showValue:!0}},t={args:{value:30,label:"Upload Progress",helpText:"Uploading your files...",showValue:!0}},u={args:{value:7,max:10,label:"Steps Completed",showValue:!0,valueFormat:"fraction"}},i={args:{value:60,size:"sm",label:"Small Progress"}},c={args:{value:80,size:"lg",label:"Large Progress"}},m={args:{value:100,variant:"success",label:"Completed",showValue:!0}},p={args:{value:90,variant:"warning",label:"Nearly Full",showValue:!0}},d={args:{value:25,variant:"error",label:"Error State",showValue:!0}},v={render:()=>({components:{Progress:h},template:`
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
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    label: 'Progress'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: 'Download Progress',
    showValue: true
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 30,
    label: 'Upload Progress',
    helpText: 'Uploading your files...',
    showValue: true
  }
}`,...t.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 7,
    max: 10,
    label: 'Steps Completed',
    showValue: true,
    valueFormat: 'fraction'
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'sm',
    label: 'Small Progress'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    size: 'lg',
    label: 'Large Progress'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'success',
    label: 'Completed',
    showValue: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 90,
    variant: 'warning',
    label: 'Nearly Full',
    showValue: true
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 25,
    variant: 'error',
    label: 'Error State',
    showValue: true
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const A=["Default","WithValue","WithHelp","Fraction","Small","Large","Success","Warning","Error","AllVariants"];export{v as AllVariants,o as Default,d as Error,u as Fraction,c as Large,i as Small,m as Success,p as Warning,t as WithHelp,n as WithValue,A as __namedExportsOrder,B as default};
