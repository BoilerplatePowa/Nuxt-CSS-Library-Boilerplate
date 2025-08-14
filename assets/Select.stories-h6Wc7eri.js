import{d as $,c as O,a as o,m as r,b as D,u as p,t as i,e as F,n as _,o as l,F as R,f as j}from"./iframe-D9U34DAu.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const G=["for"],Y={class:"label-text"},U={key:0,class:"label-text-alt text-error"},J=["id","value","disabled","required","multiple","aria-describedby"],K={key:0,value:"",disabled:""},Q=["value"],X=["id"],Z=["id"],T=$({__name:"Select",props:{modelValue:{},options:{default:()=>[]},label:{},placeholder:{},helpText:{},errorMessage:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"bordered"},ariaDescribedby:{}},emits:["update:modelValue","change"],setup(M,{emit:E}){let W=0;const P=()=>`select-${++W}`,s=M,q=E,n=P(),B=O(()=>["form-control","w-full"]),L=O(()=>{const e=["select","w-full"];return s.size==="xs"?e.push("select-xs"):s.size==="sm"?e.push("select-sm"):s.size==="lg"&&e.push("select-lg"),s.variant==="bordered"?e.push("select-bordered"):s.variant==="ghost"?e.push("select-ghost"):s.variant==="primary"?e.push("select-primary"):s.variant==="secondary"?e.push("select-secondary"):s.variant==="accent"?e.push("select-accent"):s.variant==="info"?e.push("select-info"):s.variant==="success"?e.push("select-success"):s.variant==="warning"?e.push("select-warning"):s.variant==="error"&&e.push("select-error"),s.errorMessage&&e.push("select-error"),e.join(" ")}),k=O(()=>{const e=[];return s.helpText&&e.push(`${n}-help`),s.errorMessage&&e.push(`${n}-error`),s.ariaDescribedby&&e.push(s.ariaDescribedby),e.length>0?e.join(" "):void 0}),C=e=>typeof e=="object"?e.value:e,I=e=>typeof e=="object"?e.label:String(e),N=e=>{const V=e.target;if(s.multiple){const t=Array.from(V.selectedOptions).map(w=>{const z=w.value;return/^\d+$/.test(z)?Number(z):z});q("update:modelValue",t)}else{const t=V.value,w=/^\d+$/.test(t)?Number(t):t;q("update:modelValue",w)}q("change",e)};return(e,V)=>(l(),o("div",{class:_(B.value)},[e.label?(l(),o("label",{key:0,for:p(n),class:"label"},[D("span",Y,i(e.label),1),e.required?(l(),o("span",U,"*")):r("",!0)],8,G)):r("",!0),D("select",{id:p(n),value:e.modelValue,class:_(L.value),disabled:e.disabled,required:e.required,multiple:e.multiple,"aria-describedby":k.value,onChange:N},[e.placeholder&&!e.multiple?(l(),o("option",K,i(e.placeholder),1)):r("",!0),F(e.$slots,"default",{},()=>[(l(!0),o(R,null,j(e.options,t=>(l(),o("option",{key:C(t),value:C(t)},i(I(t)),9,Q))),128))],!0)],42,J),e.helpText&&!e.errorMessage?(l(),o("p",{key:1,id:`${p(n)}-help`,class:"text-xs text-base-content/70 mt-1"},i(e.helpText),9,X)):r("",!0),e.errorMessage?(l(),o("p",{key:2,id:`${p(n)}-error`,class:"text-xs text-error mt-1",role:"alert"},i(e.errorMessage),9,Z)):r("",!0)],2))}}),A=H(T,[["__scopeId","data-v-b092b20f"]]);T.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}]},{name:"Array",elements:[{name:"number"}]}]}},{name:"options",required:!1,type:{name:"Array",elements:[{name:"Option"}]},defaultValue:{func:!1,value:"() => []"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"multiple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"bordered"'},{name:'"ghost"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'bordered'"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}]},{name:"Array",elements:[{name:"number"}]}]}},{name:"change",type:{names:["Event"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Select.vue"]};const te={title:"Data Input/Select",component:A,parameters:{layout:"centered",docs:{description:{component:"A flexible select component with multiple variants and support for options."}}},tags:["autodocs"],argTypes:{modelValue:{control:{type:"text"},description:"Selected value(s)"},options:{control:{type:"object"},description:"Array of options"},label:{control:{type:"text"},description:"Select label"},placeholder:{control:{type:"text"},description:"Placeholder text"},helpText:{control:{type:"text"},description:"Help text"},errorMessage:{control:{type:"text"},description:"Error message"},disabled:{control:{type:"boolean"},description:"Disabled state"},required:{control:{type:"boolean"},description:"Required field"},multiple:{control:{type:"boolean"},description:"Multiple selection"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Select size"},variant:{control:{type:"select"},options:["bordered","ghost","primary","secondary","accent","info","success","warning","error"],description:"Select variant"},"onUpdate:modelValue":{action:"update:modelValue"},onChange:{action:"change"}}},a=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"}],c={args:{label:"Choose an option",placeholder:"Select an option...",options:a}},d={args:{label:"Pre-selected option",modelValue:"2",options:a}},u={args:{label:"Required field",placeholder:"You must select something...",required:!0,options:a}},m={args:{label:"Field with error",errorMessage:"Please select a valid option",options:a}},b={args:{label:"Field with help",helpText:"Choose the option that best fits your needs",options:a}},g={args:{label:"Disabled select",disabled:!0,options:a}},f={args:{label:"Multiple selection",multiple:!0,modelValue:["1","3"],options:a}},h={args:{label:"Small select",size:"sm",options:a}},v={args:{label:"Large select",size:"lg",options:a}},S={args:{label:"Primary variant",variant:"primary",options:a}},y={args:{label:"Success variant",variant:"success",options:a}},x={render:()=>({components:{Select:A},setup(){return{options:a}},template:`
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
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose an option',
    placeholder: 'Select an option...',
    options: sampleOptions
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pre-selected option',
    modelValue: '2',
    options: sampleOptions
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    placeholder: 'You must select something...',
    required: true,
    options: sampleOptions
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Field with error',
    errorMessage: 'Please select a valid option',
    options: sampleOptions
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Field with help',
    helpText: 'Choose the option that best fits your needs',
    options: sampleOptions
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled select',
    disabled: true,
    options: sampleOptions
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Multiple selection',
    multiple: true,
    modelValue: ['1', '3'],
    options: sampleOptions
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small select',
    size: 'sm',
    options: sampleOptions
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large select',
    size: 'lg',
    options: sampleOptions
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary variant',
    variant: 'primary',
    options: sampleOptions
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Success variant',
    variant: 'success',
    options: sampleOptions
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const oe=["Default","WithValue","Required","WithError","WithHelp","Disabled","Multiple","Small","Large","Primary","Success","AllVariants"];export{x as AllVariants,c as Default,g as Disabled,v as Large,f as Multiple,S as Primary,u as Required,h as Small,y as Success,m as WithError,b as WithHelp,d as WithValue,oe as __namedExportsOrder,te as default};
