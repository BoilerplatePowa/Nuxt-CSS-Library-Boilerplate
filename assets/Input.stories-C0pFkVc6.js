import{d as $,c as n,a as t,m as o,b as w,n as v,u as i,s as k,t as I,e as V,x as _,o as s}from"./iframe-DxBZQA7Y.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const W=["for"],A={key:0,class:"text-red-500 ml-1","aria-label":"required"},H=["id","value","type","placeholder","disabled","readonly","required","aria-invalid","aria-describedby"],j=["id"],U=["id"],q=$({__name:"Input",props:{modelValue:{},type:{default:"text"},label:{},placeholder:{},helpText:{},errorMessage:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"bordered"},ariaDescribedby:{}},emits:["update:modelValue","input","change","focus","blur"],setup(S,{emit:T}){let E=0;const z=()=>`input-${++E}`,a=S,r=T,l=z(),D=n(()=>["form-control","w-full"]),M=n(()=>["label"]),C=n(()=>["relative","flex","items-center"]),B=n(()=>{const e=["input","w-full"];return a.size==="xs"?e.push("input-xs"):a.size==="sm"?e.push("input-sm"):a.size==="lg"&&e.push("input-lg"),a.variant==="bordered"?e.push("input-bordered"):a.variant==="ghost"?e.push("input-ghost"):a.variant==="primary"?e.push("input-primary"):a.variant==="secondary"?e.push("input-secondary"):a.variant==="accent"?e.push("input-accent"):a.variant==="info"?e.push("input-info"):a.variant==="success"?e.push("input-success"):a.variant==="warning"?e.push("input-warning"):a.variant==="error"&&e.push("input-error"),(a.invalid||a.errorMessage)&&e.push("input-error"),e.join(" ")}),F=n(()=>{const e=[];return a.helpText&&e.push(`${l}-help`),a.errorMessage&&e.push(`${l}-error`),a.ariaDescribedby&&e.push(a.ariaDescribedby),e.length>0?e.join(" "):void 0}),N=e=>{const x=e.target;r("update:modelValue",x.value),r("input",e)},P=e=>{r("change",e)},R=e=>{r("focus",e)},L=e=>{r("blur",e)};return(e,x)=>(s(),t("div",{class:v(D.value)},[e.label?(s(),t("label",{key:0,for:i(l),class:v(M.value)},[k(I(e.label)+" ",1),e.required?(s(),t("span",A,"*")):o("",!0)],10,W)):o("",!0),w("div",{class:v(C.value)},[V(e.$slots,"prefix",{},void 0,!0),w("input",_({id:i(l),value:e.modelValue,type:e.type,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-invalid":e.invalid,"aria-describedby":F.value,class:B.value},e.$attrs,{onInput:N,onChange:P,onFocus:R,onBlur:L}),null,16,H),V(e.$slots,"suffix",{},void 0,!0)],2),e.helpText&&!e.errorMessage?(s(),t("p",{key:1,id:`${i(l)}-help`,class:"mt-1 text-sm text-gray-600"},I(e.helpText),9,j)):o("",!0),e.errorMessage?(s(),t("p",{key:2,id:`${i(l)}-error`,class:"mt-1 text-sm text-red-600",role:"alert"},I(e.errorMessage),9,U)):o("",!0)],2))}}),g=O(q,[["__scopeId","data-v-17bac917"]]);q.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"email"'},{name:'"password"'},{name:'"number"'},{name:'"tel"'},{name:'"url"'},{name:'"search"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"invalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"bordered"'},{name:'"ghost"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'bordered'"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"input",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Input.vue"]};const Q={title:"Data Input/Input",component:g,parameters:{layout:"centered",docs:{description:{component:"A flexible input component with validation, help text, and accessibility features."}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url","search"],description:"Input type"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Input size"},variant:{control:{type:"select"},options:["default","filled","outline"],description:"Input variant"},label:{control:{type:"text"},description:"Input label"},placeholder:{control:{type:"text"},description:"Placeholder text"},helpText:{control:{type:"text"},description:"Help text below input"},errorMessage:{control:{type:"text"},description:"Error message"},disabled:{control:{type:"boolean"},description:"Disabled state"},readonly:{control:{type:"boolean"},description:"Readonly state"},required:{control:{type:"boolean"},description:"Required field"}}},p={args:{label:"Email",placeholder:"Enter your email"}},d={args:{label:"Password",type:"password",placeholder:"Enter your password",helpText:"Must be at least 8 characters"}},u={args:{label:"Email",type:"email",placeholder:"Enter your email",errorMessage:"Please enter a valid email address",modelValue:"invalid-email"}},c={args:{label:"Full Name",placeholder:"Enter your full name",required:!0}},m={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}},h={args:{label:"Readonly Input",modelValue:"This value cannot be changed",readonly:!0}},b={render:()=>({components:{Input:g},template:`
      <div class="space-y-4 w-80">
        <Input label="Small Input" size="sm" placeholder="Small size" />
        <Input label="Medium Input" size="md" placeholder="Medium size" />
        <Input label="Large Input" size="lg" placeholder="Large size" />
      </div>
    `})},f={render:()=>({components:{Input:g},template:`
      <div class="space-y-4 w-80">
        <Input label="Default Variant" variant="default" placeholder="Default variant" />
        <Input label="Filled Variant" variant="filled" placeholder="Filled variant" />
        <Input label="Outline Variant" variant="outline" placeholder="Outline variant" />
      </div>
    `})},y={render:()=>({components:{Input:g},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <Input label="Text" type="text" placeholder="Text input" />
        <Input label="Email" type="email" placeholder="email@example.com" />
        <Input label="Password" type="password" placeholder="Password" />
        <Input label="Number" type="number" placeholder="123" />
        <Input label="Telephone" type="tel" placeholder="+1 (555) 123-4567" />
        <Input label="URL" type="url" placeholder="https://example.com" />
        <Input label="Search" type="search" placeholder="Search..." />
      </div>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helpText: 'Must be at least 8 characters'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    errorMessage: 'Please enter a valid email address',
    modelValue: 'invalid-email'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Readonly Input',
    modelValue: 'This value cannot be changed',
    readonly: true
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input
    },
    template: \`
      <div class="space-y-4 w-80">
        <Input label="Small Input" size="sm" placeholder="Small size" />
        <Input label="Medium Input" size="md" placeholder="Medium size" />
        <Input label="Large Input" size="lg" placeholder="Large size" />
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input
    },
    template: \`
      <div class="space-y-4 w-80">
        <Input label="Default Variant" variant="default" placeholder="Default variant" />
        <Input label="Filled Variant" variant="filled" placeholder="Filled variant" />
        <Input label="Outline Variant" variant="outline" placeholder="Outline variant" />
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <Input label="Text" type="text" placeholder="Text input" />
        <Input label="Email" type="email" placeholder="email@example.com" />
        <Input label="Password" type="password" placeholder="Password" />
        <Input label="Number" type="number" placeholder="123" />
        <Input label="Telephone" type="tel" placeholder="+1 (555) 123-4567" />
        <Input label="URL" type="url" placeholder="https://example.com" />
        <Input label="Search" type="search" placeholder="Search..." />
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};const X=["Default","WithHelpText","WithError","Required","Disabled","Readonly","Sizes","Variants","AllTypes"];export{y as AllTypes,p as Default,m as Disabled,h as Readonly,c as Required,b as Sizes,f as Variants,u as WithError,d as WithHelpText,X as __namedExportsOrder,Q as default};
