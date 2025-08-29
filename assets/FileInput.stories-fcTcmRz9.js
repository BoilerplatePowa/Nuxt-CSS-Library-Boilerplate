import{d as X,m as T,h as Y,r as k,c as b,a as l,l as p,b as s,u as m,t as d,n as q,F as ee,g as ae,v as re,o as n}from"./iframe-CzrYmmIK.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const te=["for"],le={class:"label-text"},ne={key:0,class:"label-text-alt text-error"},oe=["id","accept","multiple","disabled","required","aria-describedby"],ie={key:1,class:"mt-4"},ue={class:"space-y-2"},pe={class:"flex items-center space-x-3"},de={class:"text-sm font-medium"},ce={class:"text-xs text-base-content/70"},me=["onClick"],fe={key:2,class:"mt-2"},be={class:"text-center"},he={class:"mt-4"},ve=["for"],ge={class:"mt-2 block text-xs text-base-content/70"},ye=["id"],xe=["id"],U=X({__name:"FileInput",props:T({label:{},helpText:{},errorMessage:{},accept:{},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"bordered"},showPreview:{type:Boolean,default:!0},allowRemove:{type:Boolean,default:!0},dropZone:{type:Boolean,default:!1},dropZoneText:{default:"PNG, JPG, GIF up to 10MB"},maxFileSize:{},ariaDescribedby:{}},{modelValue:{},modelModifiers:{}}),emits:T(["change","error"],["update:modelValue"]),setup(_,{emit:G}){let N=0;const L=()=>`file-input-${++N}`,a=_,f=Y(_,"modelValue"),B=G,u=L(),R=k(),t=k([]),c=k(!1),Z=b(()=>["form-control","w-full"]),$=b(()=>{const e=["file-input","w-full"];return a.size==="xs"?e.push("file-input-xs"):a.size==="sm"?e.push("file-input-sm"):a.size==="lg"&&e.push("file-input-lg"),a.variant==="bordered"?e.push("file-input-bordered"):a.variant==="ghost"?e.push("file-input-ghost"):a.variant==="primary"?e.push("file-input-primary"):a.variant==="secondary"?e.push("file-input-secondary"):a.variant==="accent"?e.push("file-input-accent"):a.variant==="info"?e.push("file-input-info"):a.variant==="success"?e.push("file-input-success"):a.variant==="warning"?e.push("file-input-warning"):a.variant==="error"&&e.push("file-input-error"),a.errorMessage&&e.push("file-input-error"),e.join(" ")}),j=b(()=>{const e=["mt-2","flex","justify-center","px-6","pt-5","pb-6","border-2","border-dashed","rounded-md","transition-colors"];return c.value?e.push("border-primary","bg-primary/5"):e.push("border-base-300","hover:border-base-400"),e.join(" ")}),E=b(()=>{const e=[];return a.helpText&&e.push(`${u}-help`),a.errorMessage&&e.push(`${u}-error`),a.ariaDescribedby&&e.push(a.ariaDescribedby),e.length>0?e.join(" "):void 0}),W=e=>{const r=e.target;C(r.files)},C=e=>{if(!e)return;const r=Array.from(e);if(a.maxFileSize){const i=r.filter(o=>o.size>a.maxFileSize);if(i.length>0){B("error",`File(s) too large: ${i.map(o=>o.name).join(", ")}`);return}}a.multiple?(t.value=[...t.value,...r],f.value=t.value):(t.value=r,f.value=r[0]||null),B("change",t.value)},H=e=>{t.value.splice(e,1),a.multiple?f.value=t.value:f.value=t.value[0]||null,B("change",t.value)},J=e=>{if(e===0)return"0 Bytes";const r=1024,i=["Bytes","KB","MB","GB"],o=Math.floor(Math.log(e)/Math.log(r));return parseFloat((e/Math.pow(r,o)).toFixed(2))+" "+i[o]},O=e=>{e.preventDefault(),c.value=!0},A=e=>{e.preventDefault(),c.value=!0},K=e=>{e.preventDefault(),c.value=!1},Q=e=>{if(e.preventDefault(),c.value=!1,a.disabled)return;const r=e.dataTransfer?.files;r&&C(r)};return(e,r)=>(n(),l("div",{class:q(Z.value)},[e.label?(n(),l("label",{key:0,for:m(u),class:"label"},[s("span",le,d(e.label),1),e.required?(n(),l("span",ne,"*")):p("",!0)],8,te)):p("",!0),s("input",{id:m(u),ref_key:"fileInputRef",ref:R,type:"file",class:q($.value),accept:e.accept,multiple:e.multiple,disabled:e.disabled,required:e.required,"aria-describedby":E.value,onChange:W},null,42,oe),e.showPreview&&t.value.length>0?(n(),l("div",ie,[r[1]||(r[1]=s("h4",{class:"text-sm font-medium mb-2"},"Selected Files:",-1)),s("div",ue,[(n(!0),l(ee,null,ae(t.value,(i,o)=>(n(),l("div",{key:`${i.name}-${o}`,class:"flex items-center justify-between p-3 bg-base-200 rounded-lg"},[s("div",pe,[r[0]||(r[0]=s("div",{class:"flex-shrink-0"},[s("svg",{class:"w-6 h-6 text-base-content/70",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})])],-1)),s("div",null,[s("p",de,d(i.name),1),s("p",ce,d(J(i.size)),1)])]),e.allowRemove?(n(),l("button",{key:0,type:"button",class:"btn btn-sm btn-circle btn-ghost",onClick:Fe=>H(o)}," ✕ ",8,me)):p("",!0)]))),128))])])):p("",!0),e.dropZone?(n(),l("div",fe,[s("div",{class:q(j.value),onDrop:Q,onDragover:O,onDragenter:A,onDragleave:K},[s("div",be,[r[3]||(r[3]=s("svg",{class:"mx-auto h-12 w-12 text-base-content/40",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48"},[s("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),s("div",he,[s("label",{for:m(u),class:"cursor-pointer"},r[2]||(r[2]=[s("span",{class:"mt-2 block text-sm font-medium text-base-content"},[re(" Drop files here or "),s("span",{class:"text-primary"}," browse")],-1)]),8,ve),s("p",ge,d(e.dropZoneText),1)])])],34)])):p("",!0),e.helpText&&!e.errorMessage?(n(),l("p",{key:3,id:`${m(u)}-help`,class:"text-xs text-base-content/70 mt-1"},d(e.helpText),9,ye)):p("",!0),e.errorMessage?(n(),l("p",{key:4,id:`${m(u)}-error`,class:"text-xs text-error mt-1",role:"alert"},d(e.errorMessage),9,xe)):p("",!0)],2))}}),V=se(U,[["__scopeId","data-v-5698948d"]]);U.__docgenInfo={exportName:"default",displayName:"FileInput",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"accept",required:!1,type:{name:"string"}},{name:"multiple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"bordered"'},{name:'"ghost"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'bordered'"}},{name:"showPreview",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"allowRemove",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"dropZone",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dropZoneText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'PNG, JPG, GIF up to 10MB'"}},{name:"maxFileSize",required:!1,type:{name:"number"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}}],events:[{name:"change",type:{names:["Array"],elements:[{name:"File"}]}},{name:"error",type:{names:["string"]}}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/FileInput.vue"]};const Ie={title:"Data Input/FileInput",component:V,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["default","bordered","ghost"]},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},multiple:{control:{type:"boolean"}},showPreview:{control:{type:"boolean"}}}},h={args:{label:"Choose File"}},v={args:{label:"Choose Files",multiple:!0,showPreview:!0}},g={args:{label:"Upload Document",showPreview:!0}},y={args:{label:"Upload Image",accept:"image/*",showPreview:!0}},x={args:{label:"Upload Document",accept:".pdf,.doc,.docx,.txt",showPreview:!0}},F={args:{label:"Required File Upload",required:!0,helpText:"Please select a file to continue"}},w={args:{label:"Profile Picture",accept:"image/*",helpText:"Upload a profile picture (max 5MB, JPG/PNG only)",showPreview:!0}},D={args:{label:"File Upload",errorMessage:"File size too large. Maximum allowed size is 5MB."}},z={args:{label:"Disabled File Input",disabled:!0,helpText:"File upload is currently disabled"}},I={render:()=>({components:{FileInput:V},template:`
      <div class="space-y-6">
        <FileInput label="Extra Small" size="xs" />
        <FileInput label="Small" size="sm" />
        <FileInput label="Medium (Default)" size="md" />
        <FileInput label="Large" size="lg" />
      </div>
    `})},M={render:()=>({components:{FileInput:V},template:`
      <div class="space-y-6">
        <FileInput label="Default Variant" variant="default" />
        <FileInput label="Bordered Variant" variant="bordered" />
        <FileInput label="Ghost Variant" variant="ghost" />
      </div>
    `})},S={args:{label:"Limited File Size",maxFileSize:1048576,showPreview:!0,helpText:"Maximum file size: 1MB"}},P={args:{label:"Drag & Drop File",showPreview:!0,helpText:"Drag and drop a file here, or click to select",multiple:!0}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose File'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose Files',
    multiple: true,
    showPreview: true
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload Document',
    showPreview: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload Image',
    accept: 'image/*',
    showPreview: true
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload Document',
    accept: '.pdf,.doc,.docx,.txt',
    showPreview: true
  }
}`,...x.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required File Upload',
    required: true,
    helpText: 'Please select a file to continue'
  }
}`,...F.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Profile Picture',
    accept: 'image/*',
    helpText: 'Upload a profile picture (max 5MB, JPG/PNG only)',
    showPreview: true
  }
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'File Upload',
    errorMessage: 'File size too large. Maximum allowed size is 5MB.'
  }
}`,...D.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled File Input',
    disabled: true,
    helpText: 'File upload is currently disabled'
  }
}`,...z.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FileInput
    },
    template: \`
      <div class="space-y-6">
        <FileInput label="Extra Small" size="xs" />
        <FileInput label="Small" size="sm" />
        <FileInput label="Medium (Default)" size="md" />
        <FileInput label="Large" size="lg" />
      </div>
    \`
  })
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FileInput
    },
    template: \`
      <div class="space-y-6">
        <FileInput label="Default Variant" variant="default" />
        <FileInput label="Bordered Variant" variant="bordered" />
        <FileInput label="Ghost Variant" variant="ghost" />
      </div>
    \`
  })
}`,...M.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Limited File Size',
    maxFileSize: 1048576,
    // 1MB
    showPreview: true,
    helpText: 'Maximum file size: 1MB'
  }
}`,...S.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Drag & Drop File',
    showPreview: true,
    helpText: 'Drag and drop a file here, or click to select',
    multiple: true
  }
}`,...P.parameters?.docs?.source}}};const Me=["Default","Multiple","WithPreview","ImageUpload","DocumentUpload","Required","WithHelp","WithError","Disabled","Sizes","Variants","MaxFileSize","CustomDropZone"];export{P as CustomDropZone,h as Default,z as Disabled,x as DocumentUpload,y as ImageUpload,S as MaxFileSize,v as Multiple,F as Required,I as Sizes,M as Variants,D as WithError,w as WithHelp,g as WithPreview,Me as __namedExportsOrder,Ie as default};
