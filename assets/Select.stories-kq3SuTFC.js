import{d as Z,r as ee,c,s as se,f as ae,a as l,m as i,b as f,n as B,u as v,t as p,e as te,F,g as T,o}from"./iframe-CO79KBgr.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const oe=["for"],ne={class:"label-text"},re={key:0,class:"label-text-alt text-error","aria-label":"required"},ie={class:"relative"},ce=["id","value","disabled","required","multiple","aria-describedby","aria-invalid"],pe={key:0,value:"",disabled:""},de=["label"],ue=["value","disabled"],me=["value","disabled"],be={key:0,class:"absolute right-8 top-1/2 transform -translate-y-1/2"},fe=["id"],ve=["id"],ge={key:3,class:"mt-1 text-sm text-success"},L=Z({__name:"Select",props:{modelValue:{},options:{default:()=>[]},label:{},placeholder:{},helpText:{},errorMessage:{},validationMessage:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},showValidation:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"bordered"},ariaDescribedby:{},autoFocus:{type:Boolean,default:!1}},emits:["update:modelValue","change","focus","blur","validate"],setup(A,{expose:R,emit:I}){let N=0;const $=()=>`select-${++N}`,s=A,d=I,u=$(),m=ee(),D=c(()=>!!s.errorMessage),_=c(()=>s.options.some(e=>typeof e=="object"&&e.group)),H=c(()=>{if(!_.value)return[];const e={};return s.options.forEach(a=>{typeof a=="object"&&a.group&&(e[a.group]||(e[a.group]=[]),e[a.group].push(a))}),Object.entries(e).map(([a,t])=>({label:a,options:t,isGroup:!0}))}),G=c(()=>["form-control","w-full"]),Y=c(()=>["label","text-sm","font-medium"]),U=c(()=>{const e=["select","w-full","transition-all","duration-200"];return s.size==="xs"?e.push("select-xs"):s.size==="sm"?e.push("select-sm"):s.size==="lg"&&e.push("select-lg"),s.variant==="bordered"?e.push("select-bordered"):s.variant==="ghost"?e.push("select-ghost"):s.variant==="primary"?e.push("select-primary"):s.variant==="secondary"?e.push("select-secondary"):s.variant==="accent"?e.push("select-accent"):s.variant==="info"?e.push("select-info"):s.variant==="success"?e.push("select-success"):s.variant==="warning"?e.push("select-warning"):s.variant==="error"&&e.push("select-error"),D.value&&e.push("select-error"),s.showValidation&&!D.value&&s.modelValue&&e.push("select-success"),s.loading&&e.push("cursor-wait"),e.join(" ")}),J=c(()=>{const e=[];return s.helpText&&e.push(`${u}-help`),s.errorMessage&&e.push(`${u}-error`),s.ariaDescribedby&&e.push(s.ariaDescribedby),e.length>0?e.join(" "):void 0}),b=e=>typeof e=="object"?e.value:e,W=e=>typeof e=="object"?e.label:String(e),P=e=>typeof e=="object"&&e.disabled||!1,k=e=>{const a=!s.required||e!==""&&e!==null&&e!==void 0;return d("validate",a),a},K=e=>{const a=e.target;if(s.multiple){const t=Array.from(a.selectedOptions).map(r=>{const E=r.value;return/^\d+$/.test(E)?Number(E):E});d("update:modelValue",t),k(t)}else{const t=a.value,r=/^\d+$/.test(t)?Number(t):t;d("update:modelValue",r),k(r)}d("change",e)},Q=e=>{d("focus",e)},X=e=>{d("blur",e)};return se(()=>{s.autoFocus&&m.value&&ae(()=>{m.value?.focus()})}),R({focus:()=>m.value?.focus(),blur:()=>m.value?.blur(),validate:()=>k(s.modelValue)}),(e,a)=>(o(),l("div",{class:B(G.value)},[e.label?(o(),l("label",{key:0,for:v(u),class:B(Y.value)},[f("span",ne,p(e.label),1),e.required?(o(),l("span",re,"*")):i("",!0)],10,oe)):i("",!0),f("div",ie,[f("select",{ref_key:"selectRef",ref:m,id:v(u),value:e.modelValue,class:B(U.value),disabled:e.disabled,required:e.required,multiple:e.multiple,"aria-describedby":J.value,"aria-invalid":D.value,onChange:K,onFocus:Q,onBlur:X},[e.placeholder&&!e.multiple?(o(),l("option",pe,p(e.placeholder),1)):i("",!0),_.value?(o(!0),l(F,{key:1},T(H.value,t=>(o(),l("optgroup",{key:t.label,label:t.label},[(o(!0),l(F,null,T(t.options,r=>(o(),l("option",{key:b(r),value:b(r),disabled:P(r)},p(W(r)),9,ue))),128))],8,de))),128)):i("",!0),_.value?i("",!0):te(e.$slots,"default",{key:2},()=>[(o(!0),l(F,null,T(e.options,t=>(o(),l("option",{key:b(t),value:b(t),disabled:P(t)},p(W(t)),9,me))),128))],!0)],42,ce),e.loading?(o(),l("div",be,a[0]||(a[0]=[f("span",{class:"loading loading-spinner loading-xs"},null,-1)]))):i("",!0)]),e.helpText&&!e.errorMessage?(o(),l("p",{key:1,id:`${v(u)}-help`,class:"text-xs text-base-content/70 mt-1"},p(e.helpText),9,fe)):i("",!0),e.errorMessage?(o(),l("p",{key:2,id:`${v(u)}-error`,class:"text-xs text-error mt-1",role:"alert"},p(e.errorMessage),9,ve)):i("",!0),e.showValidation&&!e.errorMessage&&e.modelValue?(o(),l("div",ge," ✓ "+p(e.validationMessage||"Selection valid!"),1)):i("",!0)],2))}}),j=le(L,[["__scopeId","data-v-cdfbda80"]]);L.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},expose:[{name:"focus"},{name:"blur"},{name:"validate"}],props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}]},{name:"Array",elements:[{name:"number"}]}]}},{name:"options",required:!1,type:{name:"Array",elements:[{name:"Option"}]},defaultValue:{func:!1,value:"() => []"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"validationMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"multiple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"loading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showValidation",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"bordered"'},{name:'"ghost"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'bordered'"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}},{name:"autoFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"Array",elements:[{name:"string"}]},{name:"Array",elements:[{name:"number"}]}]}},{name:"change",type:{names:["Event"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"validate",type:{names:["boolean"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Select.vue"]};const Ve={title:"Data Input/Select",component:j,parameters:{layout:"centered",docs:{description:{component:"A flexible select component with multiple variants and support for options."}}},tags:["autodocs"],argTypes:{modelValue:{control:{type:"text"},description:"Selected value(s)"},options:{control:{type:"object"},description:"Array of options"},label:{control:{type:"text"},description:"Select label"},placeholder:{control:{type:"text"},description:"Placeholder text"},helpText:{control:{type:"text"},description:"Help text"},errorMessage:{control:{type:"text"},description:"Error message"},disabled:{control:{type:"boolean"},description:"Disabled state"},required:{control:{type:"boolean"},description:"Required field"},multiple:{control:{type:"boolean"},description:"Multiple selection"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Select size"},variant:{control:{type:"select"},options:["bordered","ghost","primary","secondary","accent","info","success","warning","error"],description:"Select variant"},"onUpdate:modelValue":{action:"update:modelValue"},onChange:{action:"change"}}},n=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"}],g={args:{label:"Choose an option",placeholder:"Select an option...",options:n}},h={args:{label:"Pre-selected option",modelValue:"2",options:n}},y={args:{label:"Required field",placeholder:"You must select something...",required:!0,options:n}},S={args:{label:"Field with error",errorMessage:"Please select a valid option",options:n}},V={args:{label:"Field with help",helpText:"Choose the option that best fits your needs",options:n}},x={args:{label:"Disabled select",disabled:!0,options:n}},q={args:{label:"Multiple selection",multiple:!0,modelValue:["1","3"],options:n}},w={args:{label:"Small select",size:"sm",options:n}},M={args:{label:"Large select",size:"lg",options:n}},O={args:{label:"Primary variant",variant:"primary",options:n}},z={args:{label:"Success variant",variant:"success",options:n}},C={render:()=>({components:{Select:j},setup(){return{options:n}},template:`
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
    `})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose an option',
    placeholder: 'Select an option...',
    options: sampleOptions
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pre-selected option',
    modelValue: '2',
    options: sampleOptions
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    placeholder: 'You must select something...',
    required: true,
    options: sampleOptions
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Field with error',
    errorMessage: 'Please select a valid option',
    options: sampleOptions
  }
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Field with help',
    helpText: 'Choose the option that best fits your needs',
    options: sampleOptions
  }
}`,...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled select',
    disabled: true,
    options: sampleOptions
  }
}`,...x.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Multiple selection',
    multiple: true,
    modelValue: ['1', '3'],
    options: sampleOptions
  }
}`,...q.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small select',
    size: 'sm',
    options: sampleOptions
  }
}`,...w.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large select',
    size: 'lg',
    options: sampleOptions
  }
}`,...M.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary variant',
    variant: 'primary',
    options: sampleOptions
  }
}`,...O.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Success variant',
    variant: 'success',
    options: sampleOptions
  }
}`,...z.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const xe=["Default","WithValue","Required","WithError","WithHelp","Disabled","Multiple","Small","Large","Primary","Success","AllVariants"];export{C as AllVariants,g as Default,x as Disabled,M as Large,q as Multiple,O as Primary,y as Required,w as Small,z as Success,S as WithError,V as WithHelp,h as WithValue,xe as __namedExportsOrder,Ve as default};
