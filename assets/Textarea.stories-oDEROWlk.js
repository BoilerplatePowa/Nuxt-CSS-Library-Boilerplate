import{d as G,c as i,a as s,m as l,b as u,u as c,t as n,n as w,o as t}from"./iframe-D8bQcoLX.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const O=["for"],j={class:"label-text"},A={key:0,class:"label-text-alt text-error"},H=["id","value","placeholder","disabled","readonly","required","rows","maxlength","aria-describedby"],P={key:1,class:"label"},J={class:"label-text-alt"},K=["id"],Q=["id"],V=G({__name:"Textarea",props:{modelValue:{default:""},label:{},placeholder:{},helpText:{},errorMessage:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},rows:{default:3},maxlength:{},showCharCount:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"bordered"},ariaDescribedby:{}},emits:["update:modelValue","input","change","focus","blur"],setup(B,{emit:D}){let E=0;const M=()=>`textarea-${++E}`,a=B,o=D,r=M(),R=i(()=>["form-control","w-full"]),L=i(()=>{const e=["textarea","w-full"];return a.size==="xs"?e.push("textarea-xs"):a.size==="sm"?e.push("textarea-sm"):a.size==="lg"&&e.push("textarea-lg"),a.variant==="bordered"?e.push("textarea-bordered"):a.variant==="ghost"?e.push("textarea-ghost"):a.variant==="primary"?e.push("textarea-primary"):a.variant==="secondary"?e.push("textarea-secondary"):a.variant==="accent"?e.push("textarea-accent"):a.variant==="info"?e.push("textarea-info"):a.variant==="success"?e.push("textarea-success"):a.variant==="warning"?e.push("textarea-warning"):a.variant==="error"&&e.push("textarea-error"),a.errorMessage&&e.push("textarea-error"),e.join(" ")}),_=i(()=>a.modelValue?.length||0),N=i(()=>{const e=[];return a.helpText&&e.push(`${r}-help`),a.errorMessage&&e.push(`${r}-error`),a.ariaDescribedby&&e.push(a.ariaDescribedby),e.length>0?e.join(" "):void 0}),k=e=>{const d=e.target;o("update:modelValue",d.value),o("input",e)},I=e=>{o("change",e)},W=e=>{o("focus",e)},F=e=>{o("blur",e)};return(e,d)=>(t(),s("div",{class:w(R.value)},[e.label?(t(),s("label",{key:0,for:c(r),class:"label"},[u("span",j,n(e.label),1),e.required?(t(),s("span",A,"*")):l("",!0)],8,O)):l("",!0),u("textarea",{id:c(r),value:e.modelValue,class:w(L.value),placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,rows:e.rows,maxlength:e.maxlength,"aria-describedby":N.value,onInput:k,onChange:I,onFocus:W,onBlur:F},null,42,H),e.showCharCount&&e.maxlength?(t(),s("div",P,[d[0]||(d[0]=u("span",{class:"label-text-alt"},null,-1)),u("span",J,n(_.value)+"/"+n(e.maxlength),1)])):l("",!0),e.helpText&&!e.errorMessage?(t(),s("p",{key:2,id:`${c(r)}-help`,class:"text-xs text-base-content/70 mt-1"},n(e.helpText),9,K)):l("",!0),e.errorMessage?(t(),s("p",{key:3,id:`${c(r)}-error`,class:"text-xs text-error mt-1",role:"alert"},n(e.errorMessage),9,Q)):l("",!0)],2))}}),U=$(V,[["__scopeId","data-v-590034ba"]]);V.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"maxlength",required:!1,type:{name:"number"}},{name:"showCharCount",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"bordered"'},{name:'"ghost"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'bordered'"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}},{name:"input",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Textarea.vue"]};const ee={title:"DataInput/Textarea",component:U,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["default","bordered","ghost"]},disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},required:{control:{type:"boolean"}},showCharCount:{control:{type:"boolean"}},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"]}}},p={args:{placeholder:"Enter your message..."}},m={args:{label:"Message",placeholder:"Enter your message..."}},h={args:{label:"Required Field",placeholder:"This field is required",required:!0}},g={args:{label:"Description",placeholder:"Enter description...",helpText:"Provide a detailed description of your request"}},b={args:{label:"Message",placeholder:"Enter your message...",errorMessage:"This field is required",modelValue:""}},f={args:{label:"Disabled Textarea",placeholder:"This is disabled",disabled:!0}},y={args:{label:"Read Only",modelValue:"This content cannot be edited",readonly:!0}},x={args:{label:"Small Textarea",placeholder:"Small size",size:"sm"}},v={args:{label:"Large Textarea",placeholder:"Large size",size:"lg"}},T={args:{label:"Bordered",placeholder:"Bordered variant",variant:"bordered"}},q={args:{label:"Ghost",placeholder:"Ghost variant",variant:"ghost"}},C={args:{label:"Message",placeholder:"Type your message...",maxlength:200,showCharCount:!0,modelValue:"This textarea shows character count"}},z={args:{label:"Large Text Area",placeholder:"This textarea has more rows...",rows:8}},S={args:{label:"No Resize",placeholder:"This textarea cannot be resized",resize:"none"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your message...'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter your message...'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    helpText: 'Provide a detailed description of your request'
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
    errorMessage: 'This field is required',
    modelValue: ''
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Textarea',
    placeholder: 'This is disabled',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read Only',
    modelValue: 'This content cannot be edited',
    readonly: true
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Textarea',
    placeholder: 'Small size',
    size: 'sm'
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Textarea',
    placeholder: 'Large size',
    size: 'lg'
  }
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Bordered',
    placeholder: 'Bordered variant',
    variant: 'bordered'
  }
}`,...T.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ghost',
    placeholder: 'Ghost variant',
    variant: 'ghost'
  }
}`,...q.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Type your message...',
    maxlength: 200,
    showCharCount: true,
    modelValue: 'This textarea shows character count'
  }
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Text Area',
    placeholder: 'This textarea has more rows...',
    rows: 8
  }
}`,...z.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'No Resize',
    placeholder: 'This textarea cannot be resized',
    resize: 'none'
  }
}`,...S.parameters?.docs?.source}}};const ae=["Default","WithLabel","Required","WithHelp","WithError","Disabled","Readonly","SmallSize","LargeSize","Bordered","Ghost","WithCharacterCount","CustomRows","NoResize"];export{T as Bordered,z as CustomRows,p as Default,f as Disabled,q as Ghost,v as LargeSize,S as NoResize,y as Readonly,h as Required,x as SmallSize,C as WithCharacterCount,b as WithError,g as WithHelp,m as WithLabel,ae as __namedExportsOrder,ee as default};
