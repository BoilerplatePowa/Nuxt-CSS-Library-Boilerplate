import{d as K,r as q,c as b,a as t,m as d,b as s,u as f,t as c,n as V,F as Q,g as X,q as Y,o as l}from"./iframe-BEoDMSxF.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const ae=["for"],re={class:"label-text"},se={key:0,class:"label-text-alt text-error"},te=["id","accept","multiple","disabled","required","aria-describedby"],le={key:1,class:"mt-4"},ne={class:"space-y-2"},oe={class:"flex items-center space-x-3"},ie={class:"text-sm font-medium"},ue={class:"text-xs text-base-content/70"},pe=["onClick"],de={key:2,class:"mt-2"},ce={class:"text-center"},me={class:"mt-4"},fe=["for"],be={class:"mt-2 block text-xs text-base-content/70"},he=["id"],ge=["id"],_=K({__name:"FileInput",props:{modelValue:{},label:{},helpText:{},errorMessage:{},accept:{},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"bordered"},showPreview:{type:Boolean,default:!0},allowRemove:{type:Boolean,default:!0},dropZone:{type:Boolean,default:!1},dropZoneText:{default:"PNG, JPG, GIF up to 10MB"},maxFileSize:{},ariaDescribedby:{}},emits:["update:modelValue","change","error"],setup(C,{emit:T}){let U=0;const G=()=>`file-input-${++U}`,a=C,i=T,u=G(),N=q(),p=q([]),m=q(!1),L=b(()=>["form-control","w-full"]),R=b(()=>{const e=["file-input","w-full"];return a.size==="xs"?e.push("file-input-xs"):a.size==="sm"?e.push("file-input-sm"):a.size==="lg"&&e.push("file-input-lg"),a.variant==="bordered"?e.push("file-input-bordered"):a.variant==="ghost"?e.push("file-input-ghost"):a.variant==="primary"?e.push("file-input-primary"):a.variant==="secondary"?e.push("file-input-secondary"):a.variant==="accent"?e.push("file-input-accent"):a.variant==="info"?e.push("file-input-info"):a.variant==="success"?e.push("file-input-success"):a.variant==="warning"?e.push("file-input-warning"):a.variant==="error"&&e.push("file-input-error"),a.errorMessage&&e.push("file-input-error"),e.join(" ")}),Z=b(()=>{const e=["mt-2","flex","justify-center","px-6","pt-5","pb-6","border-2","border-dashed","rounded-md","transition-colors"];return m.value?e.push("border-primary","bg-primary/5"):e.push("border-base-300","hover:border-base-400"),e.join(" ")}),$=b(()=>{const e=[];return a.helpText&&e.push(`${u}-help`),a.errorMessage&&e.push(`${u}-error`),a.ariaDescribedby&&e.push(a.ariaDescribedby),e.length>0?e.join(" "):void 0}),j=e=>{const r=e.target;k(r.files)},k=e=>{if(!e)return;const r=Array.from(e);if(a.maxFileSize){const o=r.filter(n=>n.size>a.maxFileSize);if(o.length>0){i("error",`File(s) too large: ${o.map(n=>n.name).join(", ")}`);return}}p.value=r,a.multiple?i("update:modelValue",r):i("update:modelValue",r[0]||null),i("change",r)},E=e=>{p.value.splice(e,1),a.multiple?i("update:modelValue",p.value):i("update:modelValue",p.value[0]||null),i("change",p.value)},W=e=>{if(e===0)return"0 Bytes";const r=1024,o=["Bytes","KB","MB","GB"],n=Math.floor(Math.log(e)/Math.log(r));return parseFloat((e/Math.pow(r,n)).toFixed(2))+" "+o[n]},H=e=>{e.preventDefault(),m.value=!0},A=e=>{e.preventDefault(),m.value=!0},J=e=>{e.preventDefault(),m.value=!1},O=e=>{if(e.preventDefault(),m.value=!1,a.disabled)return;const r=e.dataTransfer?.files;r&&k(r)};return(e,r)=>(l(),t("div",{class:V(L.value)},[e.label?(l(),t("label",{key:0,for:f(u),class:"label"},[s("span",re,c(e.label),1),e.required?(l(),t("span",se,"*")):d("",!0)],8,ae)):d("",!0),s("input",{id:f(u),ref_key:"fileInputRef",ref:N,type:"file",class:V(R.value),accept:e.accept,multiple:e.multiple,disabled:e.disabled,required:e.required,"aria-describedby":$.value,onChange:j},null,42,te),e.showPreview&&p.value.length>0?(l(),t("div",le,[r[1]||(r[1]=s("h4",{class:"text-sm font-medium mb-2"},"Selected Files:",-1)),s("div",ne,[(l(!0),t(Q,null,X(p.value,(o,n)=>(l(),t("div",{key:`${o.name}-${n}`,class:"flex items-center justify-between p-3 bg-base-200 rounded-lg"},[s("div",oe,[r[0]||(r[0]=s("div",{class:"flex-shrink-0"},[s("svg",{class:"w-6 h-6 text-base-content/70",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})])],-1)),s("div",null,[s("p",ie,c(o.name),1),s("p",ue,c(W(o.size)),1)])]),e.allowRemove?(l(),t("button",{key:0,type:"button",class:"btn btn-sm btn-circle btn-ghost",onClick:ve=>E(n)}," ✕ ",8,pe)):d("",!0)]))),128))])])):d("",!0),e.dropZone?(l(),t("div",de,[s("div",{class:V(Z.value),onDrop:O,onDragover:H,onDragenter:A,onDragleave:J},[s("div",ce,[r[3]||(r[3]=s("svg",{class:"mx-auto h-12 w-12 text-base-content/40",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48"},[s("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),s("div",me,[s("label",{for:f(u),class:"cursor-pointer"},r[2]||(r[2]=[s("span",{class:"mt-2 block text-sm font-medium text-base-content"},[Y(" Drop files here or "),s("span",{class:"text-primary"}," browse")],-1)]),8,fe),s("p",be,c(e.dropZoneText),1)])])],34)])):d("",!0),e.helpText&&!e.errorMessage?(l(),t("p",{key:3,id:`${f(u)}-help`,class:"text-xs text-base-content/70 mt-1"},c(e.helpText),9,he)):d("",!0),e.errorMessage?(l(),t("p",{key:4,id:`${f(u)}-error`,class:"text-xs text-error mt-1",role:"alert"},c(e.errorMessage),9,ge)):d("",!0)],2))}}),B=ee(_,[["__scopeId","data-v-ce39d2bd"]]);_.__docgenInfo={exportName:"default",displayName:"FileInput",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"File"},{name:"Array",elements:[{name:"File"}]}]}},{name:"label",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"accept",required:!1,type:{name:"string"}},{name:"multiple",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"bordered"'},{name:'"ghost"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'bordered'"}},{name:"showPreview",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"allowRemove",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"dropZone",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"dropZoneText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'PNG, JPG, GIF up to 10MB'"}},{name:"maxFileSize",required:!1,type:{name:"number"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"File"},{name:"Array",elements:[{name:"File"}]}]}},{name:"change",type:{names:["Array"],elements:[{name:"File"}]}},{name:"error",type:{names:["string"]}}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/FileInput.vue"]};const we={title:"DataInput/FileInput",component:B,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["default","bordered","ghost"]},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}},multiple:{control:{type:"boolean"}},showPreview:{control:{type:"boolean"}}}},h={args:{label:"Choose File"}},g={args:{label:"Choose Files",multiple:!0,showPreview:!0}},v={args:{label:"Upload Document",showPreview:!0}},y={args:{label:"Upload Image",accept:"image/*",showPreview:!0}},x={args:{label:"Upload Document",accept:".pdf,.doc,.docx,.txt",showPreview:!0}},F={args:{label:"Required File Upload",required:!0,helpText:"Please select a file to continue"}},w={args:{label:"Profile Picture",accept:"image/*",helpText:"Upload a profile picture (max 5MB, JPG/PNG only)",showPreview:!0}},D={args:{label:"File Upload",errorMessage:"File size too large. Maximum allowed size is 5MB."}},z={args:{label:"Disabled File Input",disabled:!0,helpText:"File upload is currently disabled"}},I={render:()=>({components:{FileInput:B},template:`
      <div class="space-y-6">
        <FileInput label="Extra Small" size="xs" />
        <FileInput label="Small" size="sm" />
        <FileInput label="Medium (Default)" size="md" />
        <FileInput label="Large" size="lg" />
      </div>
    `})},M={render:()=>({components:{FileInput:B},template:`
      <div class="space-y-6">
        <FileInput label="Default Variant" variant="default" />
        <FileInput label="Bordered Variant" variant="bordered" />
        <FileInput label="Ghost Variant" variant="ghost" />
      </div>
    `})},S={args:{label:"Limited File Size",maxFileSize:1048576,showPreview:!0,helpText:"Maximum file size: 1MB"}},P={args:{label:"Drag & Drop File",showPreview:!0,helpText:"Drag and drop a file here, or click to select",multiple:!0}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose File'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose Files',
    multiple: true,
    showPreview: true
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload Document',
    showPreview: true
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};const De=["Default","Multiple","WithPreview","ImageUpload","DocumentUpload","Required","WithHelp","WithError","Disabled","Sizes","Variants","MaxFileSize","CustomDropZone"];export{P as CustomDropZone,h as Default,z as Disabled,x as DocumentUpload,y as ImageUpload,S as MaxFileSize,g as Multiple,F as Required,I as Sizes,M as Variants,D as WithError,w as WithHelp,v as WithPreview,De as __namedExportsOrder,we as default};
