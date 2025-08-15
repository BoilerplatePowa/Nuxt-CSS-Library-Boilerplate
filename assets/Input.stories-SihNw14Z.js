import{d as ae,r as S,c as s,s as le,f as b,a as t,m as o,b as u,n as c,u as y,q as te,t as p,e as B,A as ne,o as n}from"./iframe-BEoDMSxF.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const se=["for"],oe={key:0,class:"text-error ml-1","aria-label":"required"},ie={key:0,class:"flex items-center pl-3 text-base-content/70"},ue=["id","value","type","placeholder","disabled","readonly","required","min","max","step","pattern","maxlength","minlength","autocomplete","aria-invalid","aria-describedby"],de=["aria-label"],pe={key:0,class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},me={key:1,class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},ce={key:3,class:"flex items-center pr-3 text-base-content/70"},fe={key:1,class:"mt-1 text-xs text-base-content/60 text-right"},he=["id"],be=["id"],ye={key:4,class:"mt-1 text-sm text-success"},z=ae({__name:"Input",props:{modelValue:{},type:{default:"text"},label:{},placeholder:{},helpText:{},errorMessage:{},validationMessage:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"bordered"},ariaDescribedby:{},min:{},max:{},step:{},pattern:{},maxlength:{},minlength:{},autocomplete:{},showPasswordToggle:{type:Boolean,default:!0},clearable:{type:Boolean,default:!1},showCharCount:{type:Boolean,default:!1},showValidation:{type:Boolean,default:!1},autoFocus:{type:Boolean,default:!1},debounceMs:{default:0},validateOnBlur:{type:Boolean,default:!0},validateOnInput:{type:Boolean,default:!1}},emits:["update:modelValue","input","change","focus","blur","keydown","paste","clear","validate"],setup(D,{expose:P,emit:F}){let L=0;const O=()=>`input-${++L}`,a=D,r=F,d=O(),i=S(),m=S(!1);let C=null;const R=s(()=>a.type==="password"&&m.value?"text":a.type),f=s(()=>a.invalid||!!a.errorMessage),N=s(()=>String(a.modelValue||"").length),$=s(()=>["form-control","w-full"]),j=s(()=>["label","text-sm","font-medium",a.required&&"required"]),A=s(()=>["relative","flex","items-center","input-group",f.value&&"input-group-error"]),H=s(()=>{const e=["input","w-full","transition-all","duration-200"];return a.size==="xs"?e.push("input-xs"):a.size==="sm"?e.push("input-sm"):a.size==="lg"&&e.push("input-lg"),a.variant==="bordered"?e.push("input-bordered"):a.variant==="ghost"?e.push("input-ghost"):a.variant==="primary"?e.push("input-primary"):a.variant==="secondary"?e.push("input-secondary"):a.variant==="accent"?e.push("input-accent"):a.variant==="info"?e.push("input-info"):a.variant==="success"?e.push("input-success"):a.variant==="warning"?e.push("input-warning"):a.variant==="error"&&e.push("input-error"),f.value&&e.push("input-error"),a.showValidation&&!f.value&&a.modelValue&&e.push("input-success"),a.disabled&&e.push("input-disabled"),a.readonly&&e.push("cursor-not-allowed","bg-base-200"),a.type==="password"&&a.showPasswordToggle&&e.push("pr-10"),a.clearable&&e.push("pr-8"),e.join(" ")}),K=s(()=>["absolute","right-2","top-1/2","transform","-translate-y-1/2","p-1","text-base-content/60","hover:text-base-content","transition-colors","duration-200","focus:outline-none","focus:ring-2","focus:ring-primary","focus:ring-offset-1","rounded"]),W=s(()=>["absolute","right-2","top-1/2","transform","-translate-y-1/2","p-1","text-base-content/60","hover:text-base-content","transition-colors","duration-200","focus:outline-none","focus:ring-2","focus:ring-primary","focus:ring-offset-1","rounded"]),U=s(()=>{const e=[];return a.helpText&&e.push(`${d}-help`),a.errorMessage&&e.push(`${d}-error`),a.ariaDescribedby&&e.push(a.ariaDescribedby),e.length>0?e.join(" "):void 0}),h=e=>{const l=!a.required||e!==""&&e!==null&&e!==void 0;return r("validate",l),l},G=e=>{C&&clearTimeout(C),a.debounceMs>0?C=setTimeout(()=>{r("update:modelValue",e),a.validateOnInput&&h(e)},a.debounceMs):(r("update:modelValue",e),a.validateOnInput&&h(e))},J=e=>{const l=e.target;G(l.value),r("input",e)},Q=e=>{const l=e.target;a.debounceMs===0&&r("update:modelValue",l.value),r("change",e)},X=e=>{r("focus",e)},Y=e=>{a.validateOnBlur&&h(a.modelValue||""),r("blur",e)},Z=e=>{r("keydown",e),a.clearable&&e.ctrlKey&&e.key==="a"&&(e.preventDefault(),b(()=>{i.value?.select()}))},_=e=>{r("paste",e)},ee=()=>{m.value=!m.value,b(()=>{i.value?.focus()})},E=()=>{r("update:modelValue",""),r("clear"),b(()=>{i.value?.focus()})};return le(()=>{a.autoFocus&&i.value&&b(()=>{i.value?.focus()})}),P({focus:()=>i.value?.focus(),blur:()=>i.value?.blur(),select:()=>i.value?.select(),clear:E,validate:()=>h(a.modelValue||"")}),(e,l)=>(n(),t("div",{class:c($.value)},[e.label?(n(),t("label",{key:0,for:y(d),class:c(j.value)},[te(p(e.label)+" ",1),e.required?(n(),t("span",oe,"*")):o("",!0)],10,se)):o("",!0),u("div",{class:c(A.value)},[e.$slots.prefix?(n(),t("div",ie,[B(e.$slots,"prefix",{},void 0,!0)])):o("",!0),u("input",ne({ref_key:"inputRef",ref:i,id:y(d),value:e.modelValue,type:R.value,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,min:e.min,max:e.max,step:e.step,pattern:e.pattern,maxlength:e.maxlength,minlength:e.minlength,autocomplete:e.autocomplete,"aria-invalid":f.value,"aria-describedby":U.value,class:H.value},e.$attrs,{onInput:J,onChange:Q,onFocus:X,onBlur:Y,onKeydown:Z,onPaste:_}),null,16,ue),e.type==="password"&&e.showPasswordToggle?(n(),t("button",{key:1,type:"button",class:c(K.value),"aria-label":m.value?"Hide password":"Show password",onClick:ee},[m.value?(n(),t("svg",me,l[1]||(l[1]=[u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L12 12m-3.122-3.122L8.465 8.465M21 21l-6.535-6.535"},null,-1)]))):(n(),t("svg",pe,l[0]||(l[0]=[u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},null,-1)])))],10,de)):o("",!0),e.clearable&&e.modelValue&&!e.disabled&&!e.readonly?(n(),t("button",{key:2,type:"button",class:c(W.value),"aria-label":"Clear input",onClick:E},l[2]||(l[2]=[u("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)):o("",!0),e.$slots.suffix?(n(),t("div",ce,[B(e.$slots,"suffix",{},void 0,!0)])):o("",!0)],2),e.showCharCount&&e.maxlength?(n(),t("div",fe,p(N.value)+"/"+p(e.maxlength),1)):o("",!0),e.helpText&&!e.errorMessage?(n(),t("p",{key:2,id:`${y(d)}-help`,class:"mt-1 text-sm text-base-content/70"},p(e.helpText),9,he)):o("",!0),e.errorMessage?(n(),t("p",{key:3,id:`${y(d)}-error`,class:"mt-1 text-sm text-error",role:"alert"},p(e.errorMessage),9,be)):o("",!0),e.showValidation&&!e.errorMessage?(n(),t("div",ye," ✓ "+p(e.validationMessage||"Looks good!"),1)):o("",!0)],2))}}),T=re(z,[["__scopeId","data-v-86421ff9"]]);z.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},expose:[{name:"focus"},{name:"blur"},{name:"select"},{name:"clear"},{name:"validate"}],props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"email"'},{name:'"password"'},{name:'"number"'},{name:'"tel"'},{name:'"url"'},{name:'"search"'},{name:'"date"'},{name:'"time"'},{name:'"datetime-local"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"validationMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"invalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"bordered"'},{name:'"ghost"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'bordered'"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}},{name:"min",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"max",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"step",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"pattern",required:!1,type:{name:"string"}},{name:"maxlength",required:!1,type:{name:"number"}},{name:"minlength",required:!1,type:{name:"number"}},{name:"autocomplete",required:!1,type:{name:"string"}},{name:"showPasswordToggle",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"clearable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showCharCount",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showValidation",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"autoFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"debounceMs",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"validateOnBlur",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"validateOnInput",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"}]}},{name:"input",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"keydown",type:{names:["KeyboardEvent"]}},{name:"paste",type:{names:["ClipboardEvent"]}},{name:"clear"},{name:"validate",type:{names:["boolean"]}}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Input.vue"]};const Ie={title:"Data Input/Input",component:T,parameters:{layout:"centered",docs:{description:{component:"A flexible input component with validation, help text, and accessibility features."}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url","search"],description:"Input type"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Input size"},variant:{control:{type:"select"},options:["default","filled","outline"],description:"Input variant"},label:{control:{type:"text"},description:"Input label"},placeholder:{control:{type:"text"},description:"Placeholder text"},helpText:{control:{type:"text"},description:"Help text below input"},errorMessage:{control:{type:"text"},description:"Error message"},disabled:{control:{type:"boolean"},description:"Disabled state"},readonly:{control:{type:"boolean"},description:"Readonly state"},required:{control:{type:"boolean"},description:"Required field"}}},g={args:{label:"Email",placeholder:"Enter your email"}},v={args:{label:"Password",type:"password",placeholder:"Enter your password",helpText:"Must be at least 8 characters"}},w={args:{label:"Email",type:"email",placeholder:"Enter your email",errorMessage:"Please enter a valid email address",modelValue:"invalid-email"}},I={args:{label:"Full Name",placeholder:"Enter your full name",required:!0}},x={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}},V={args:{label:"Readonly Input",modelValue:"This value cannot be changed",readonly:!0}},q={render:()=>({components:{Input:T},template:`
      <div class="space-y-4 w-80">
        <Input label="Small Input" size="sm" placeholder="Small size" />
        <Input label="Medium Input" size="md" placeholder="Medium size" />
        <Input label="Large Input" size="lg" placeholder="Large size" />
      </div>
    `})},k={render:()=>({components:{Input:T},template:`
      <div class="space-y-4 w-80">
        <Input label="Default Variant" variant="default" placeholder="Default variant" />
        <Input label="Filled Variant" variant="filled" placeholder="Filled variant" />
        <Input label="Outline Variant" variant="outline" placeholder="Outline variant" />
      </div>
    `})},M={render:()=>({components:{Input:T},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <Input label="Text" type="text" placeholder="Text input" />
        <Input label="Email" type="email" placeholder="email@example.com" />
        <Input label="Password" type="password" placeholder="Password" />
        <Input label="Number" type="number" placeholder="123" />
        <Input label="Telephone" type="tel" placeholder="+1 (555) 123-4567" />
        <Input label="URL" type="url" placeholder="https://example.com" />
        <Input label="Search" type="search" placeholder="Search..." />
      </div>
    `})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email'
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helpText: 'Must be at least 8 characters'
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    errorMessage: 'Please enter a valid email address',
    modelValue: 'invalid-email'
  }
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true
  }
}`,...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...x.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Readonly Input',
    modelValue: 'This value cannot be changed',
    readonly: true
  }
}`,...V.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};const xe=["Default","WithHelpText","WithError","Required","Disabled","Readonly","Sizes","Variants","AllTypes"];export{M as AllTypes,g as Default,x as Disabled,V as Readonly,I as Required,q as Sizes,k as Variants,w as WithError,v as WithHelpText,xe as __namedExportsOrder,Ie as default};
