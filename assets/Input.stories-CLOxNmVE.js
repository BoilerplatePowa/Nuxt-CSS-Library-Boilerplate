import{d as L,b as t,e as n,f as o,j as w,n as v,u as i,k as $,t as I,g as V,m as _,o as s}from"./vue.esm-bundler-D0HQYiut.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";const W=["for"],j={key:0,class:"text-red-500 ml-1","aria-label":"required"},A=["id","value","type","placeholder","disabled","readonly","required","aria-invalid","aria-describedby"],H=["id"],U=["id"],q=L({__name:"Input",props:{modelValue:{},type:{default:"text"},label:{},placeholder:{},helpText:{},errorMessage:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"default"},ariaDescribedby:{}},emits:["update:modelValue","input","change","focus","blur"],setup(S,{emit:T}){let E=0;const z=()=>`input-${++E}`,a=S,r=T,l=z(),D=t(()=>["form-control","w-full"]),M=t(()=>["label","text-sm","font-medium","text-gray-700","mb-1","block"]),C=t(()=>["relative","flex","items-center"]),B=t(()=>{const e=["input","w-full","transition-colors","duration-200","ease-in-out"];return a.size==="sm"?e.push("input-sm"):a.size==="lg"?e.push("input-lg"):e.push("input-md"),a.variant==="filled"?e.push("input-filled"):(a.variant,e.push("input-bordered")),(a.invalid||a.errorMessage)&&e.push("input-error"),a.disabled&&e.push("input-disabled"),e.join(" ")}),F=t(()=>{const e=[];return a.helpText&&e.push(`${l}-help`),a.errorMessage&&e.push(`${l}-error`),a.ariaDescribedby&&e.push(a.ariaDescribedby),e.length>0?e.join(" "):void 0}),N=e=>{const x=e.target;r("update:modelValue",x.value),r("input",e)},P=e=>{r("change",e)},R=e=>{r("focus",e)},k=e=>{r("blur",e)};return(e,x)=>(s(),n("div",{class:v(D.value)},[e.label?(s(),n("label",{key:0,for:i(l),class:v(M.value)},[$(I(e.label)+" ",1),e.required?(s(),n("span",j,"*")):o("",!0)],10,W)):o("",!0),w("div",{class:v(C.value)},[V(e.$slots,"prefix",{},void 0,!0),w("input",_({id:i(l),value:e.modelValue,type:e.type,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-invalid":e.invalid,"aria-describedby":F.value,class:B.value},e.$attrs,{onInput:N,onChange:P,onFocus:R,onBlur:k}),null,16,A),V(e.$slots,"suffix",{},void 0,!0)],2),e.helpText&&!e.errorMessage?(s(),n("p",{key:1,id:`${i(l)}-help`,class:"mt-1 text-sm text-gray-600"},I(e.helpText),9,H)):o("",!0),e.errorMessage?(s(),n("p",{key:2,id:`${i(l)}-error`,class:"mt-1 text-sm text-red-600",role:"alert"},I(e.errorMessage),9,U)):o("",!0)],2))}}),g=O(q,[["__scopeId","data-v-e5988d35"]]);q.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"email"'},{name:'"password"'},{name:'"number"'},{name:'"tel"'},{name:'"url"'},{name:'"search"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"invalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"filled"'},{name:'"outline"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"input",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Input.vue"]};const K={title:"Components/Input",component:g,parameters:{layout:"centered",docs:{description:{component:"A flexible input component with validation, help text, and accessibility features."}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url","search"],description:"Input type"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Input size"},variant:{control:{type:"select"},options:["default","filled","outline"],description:"Input variant"},label:{control:{type:"text"},description:"Input label"},placeholder:{control:{type:"text"},description:"Placeholder text"},helpText:{control:{type:"text"},description:"Help text below input"},errorMessage:{control:{type:"text"},description:"Error message"},disabled:{control:{type:"boolean"},description:"Disabled state"},readonly:{control:{type:"boolean"},description:"Readonly state"},required:{control:{type:"boolean"},description:"Required field"}}},d={args:{label:"Email",placeholder:"Enter your email"}},p={args:{label:"Password",type:"password",placeholder:"Enter your password",helpText:"Must be at least 8 characters"}},u={args:{label:"Email",type:"email",placeholder:"Enter your email",errorMessage:"Please enter a valid email address",modelValue:"invalid-email"}},c={args:{label:"Full Name",placeholder:"Enter your full name",required:!0}},m={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}},b={args:{label:"Readonly Input",modelValue:"This value cannot be changed",readonly:!0}},f={render:()=>({components:{Input:g},template:`
      <div class="space-y-4 w-80">
        <Input label="Small Input" size="sm" placeholder="Small size" />
        <Input label="Medium Input" size="md" placeholder="Medium size" />
        <Input label="Large Input" size="lg" placeholder="Large size" />
      </div>
    `})},h={render:()=>({components:{Input:g},template:`
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
    `})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helpText: 'Must be at least 8 characters'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Readonly Input',
    modelValue: 'This value cannot be changed',
    readonly: true
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const Q=["Default","WithHelpText","WithError","Required","Disabled","Readonly","Sizes","Variants","AllTypes"];export{y as AllTypes,d as Default,m as Disabled,b as Readonly,c as Required,f as Sizes,h as Variants,u as WithError,p as WithHelpText,Q as __namedExportsOrder,K as default};
