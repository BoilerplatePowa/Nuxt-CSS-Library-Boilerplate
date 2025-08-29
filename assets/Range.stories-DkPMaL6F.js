import{d as $,m as _,h as j,c as i,a as n,l as t,b as E,u as m,t as o,n as A,F,g as O,o as s,r as z}from"./iframe-CzrYmmIK.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const H={class:"form-control w-full"},J=["for"],K={class:"label-text"},Q={key:0,class:"label-text-alt"},U=["id","value","min","max","step","disabled","aria-describedby"],X={key:1,class:"w-full flex justify-between text-xs px-2"},Y=["id"],Z=["id"],I=$({__name:"Range",props:_({min:{default:0},max:{default:100},step:{default:1},label:{},helpText:{},errorMessage:{},disabled:{type:Boolean,default:!1},showValue:{type:Boolean,default:!1},showTicks:{type:Boolean,default:!1},tickCount:{default:5},size:{default:"md"},variant:{default:"primary"},ariaDescribedby:{}},{modelValue:{default:0},modelModifiers:{}}),emits:_(["input","change"],["update:modelValue"]),setup(u,{emit:x}){let R=0;const M=()=>`range-${++R}`,a=u,S=j(u,"modelValue"),C=x,r=M(),q=i(()=>{const e=["range","w-full"];return a.size==="xs"?e.push("range-xs"):a.size==="sm"?e.push("range-sm"):a.size==="lg"&&e.push("range-lg"),a.variant==="primary"?e.push("range-primary"):a.variant==="secondary"?e.push("range-secondary"):a.variant==="accent"?e.push("range-accent"):a.variant==="success"?e.push("range-success"):a.variant==="warning"?e.push("range-warning"):a.variant==="info"?e.push("range-info"):a.variant==="error"&&e.push("range-error"),e.join(" ")}),B=i(()=>S.value?.toString()||"0"),D=i(()=>{if(!a.showTicks)return[];const e=[],l=(a.max-a.min)/(a.tickCount-1);for(let T=0;T<a.tickCount;T++){const N=a.min+l*T;e.push(Math.round(N))}return e}),P=i(()=>{const e=[];return a.helpText&&e.push(`${r}-help`),a.errorMessage&&e.push(`${r}-error`),a.ariaDescribedby&&e.push(a.ariaDescribedby),e.length>0?e.join(" "):void 0}),W=e=>{const k=e.target,l=Number(k.value);S.value=l,C("input",e)},L=e=>{C("change",e)};return(e,k)=>(s(),n("div",H,[e.label?(s(),n("label",{key:0,for:m(r),class:"label"},[E("span",K,o(e.label),1),e.showValue?(s(),n("span",Q,o(B.value),1)):t("",!0)],8,J)):t("",!0),E("input",{id:m(r),value:S.value,type:"range",min:e.min,max:e.max,step:e.step,class:A(q.value),disabled:e.disabled,"aria-describedby":P.value,onInput:W,onChange:L},null,42,U),e.showTicks&&D.value.length>0?(s(),n("div",X,[(s(!0),n(F,null,O(D.value,l=>(s(),n("span",{key:l},o(l),1))),128))])):t("",!0),e.helpText&&!e.errorMessage?(s(),n("p",{key:2,id:`${m(r)}-help`,class:"text-xs text-base-content/70 mt-1"},o(e.helpText),9,Y)):t("",!0),e.errorMessage?(s(),n("p",{key:3,id:`${m(r)}-error`,class:"text-xs text-error mt-1",role:"alert"},o(e.errorMessage),9,Z)):t("",!0)]))}}),V=G(I,[["__scopeId","data-v-7169cc6a"]]);I.__docgenInfo={exportName:"default",displayName:"Range",description:"",tags:{},props:[{name:"min",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"label",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showTicks",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tickCount",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"success"'},{name:'"warning"'},{name:'"info"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}}],events:[{name:"input",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Range.vue"]};const se={title:"Data Input/Range",component:V,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["primary","secondary","accent","success","warning","info","error"]},disabled:{control:{type:"boolean"}},showValue:{control:{type:"boolean"}},showTicks:{control:{type:"boolean"}}}},c={args:{label:"Volume",modelValue:50,min:0,max:100,showValue:!0}},d={args:{label:"Rating",modelValue:3,min:1,max:5,step:1,showValue:!0,showTicks:!0}},p={args:{label:"Price Range",modelValue:500,min:0,max:1e3,step:50,showValue:!0,helpText:"Select your budget range"}},g={args:{label:"Progress",modelValue:75,min:0,max:100,step:5,showValue:!0}},v={render:()=>({components:{Range:V},setup(){const u=z(30),x=z(80),R=z(22);return{volume:u,brightness:x,temperature:R}},template:`
      <div class="space-y-6">
        <Range 
          v-model="volume"
          label="Volume" 
          :min="0" 
          :max="100"
          :step="1"
          show-value
          variant="primary"
        />
        
        <Range 
          v-model="brightness"
          label="Brightness" 
          :min="0" 
          :max="100"
          :step="5"
          show-value
          variant="accent"
        />
        
        <Range 
          v-model="temperature"
          label="Temperature" 
          :min="10" 
          :max="30"
          :step="1"
          show-value
          variant="warning"
        />
        
        <div class="mt-6 p-4 bg-base-200 rounded-lg">
          <h4 class="font-semibold mb-2">Current Values:</h4>
          <p>Volume: {{ volume }}%</p>
          <p>Brightness: {{ brightness }}%</p>
          <p>Temperature: {{ temperature }}°C</p>
        </div>
      </div>
    `})},h={render:()=>({components:{Range:V},template:`
      <div class="space-y-4">
        <Range label="Primary" :model-value="60" variant="primary" show-value />
        <Range label="Secondary" :model-value="40" variant="secondary" show-value />
        <Range label="Accent" :model-value="70" variant="accent" show-value />
        <Range label="Success" :model-value="80" variant="success" show-value />
        <Range label="Warning" :model-value="30" variant="warning" show-value />
        <Range label="Info" :model-value="45" variant="info" show-value />
        <Range label="Error" :model-value="20" variant="error" show-value />
      </div>
    `})},b={render:()=>({components:{Range:V},template:`
      <div class="space-y-6">
        <Range label="Extra Small" :model-value="25" size="xs" show-value />
        <Range label="Small" :model-value="50" size="sm" show-value />
        <Range label="Medium" :model-value="75" size="md" show-value />
        <Range label="Large" :model-value="85" size="lg" show-value />
      </div>
    `})},f={args:{label:"Difficulty Level",modelValue:2,min:1,max:5,step:1,showValue:!0,showTicks:!0,helpText:"1 = Easy, 5 = Expert"}},y={args:{label:"Disabled Range",modelValue:60,min:0,max:100,disabled:!0,showValue:!0}},w={args:{label:"Invalid Range",modelValue:95,min:0,max:100,showValue:!0,errorMessage:"Value is too high. Please select a lower value."}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    modelValue: 50,
    min: 0,
    max: 100,
    showValue: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rating',
    modelValue: 3,
    min: 1,
    max: 5,
    step: 1,
    showValue: true,
    showTicks: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price Range',
    modelValue: 500,
    min: 0,
    max: 1000,
    step: 50,
    showValue: true,
    helpText: 'Select your budget range'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Progress',
    modelValue: 75,
    min: 0,
    max: 100,
    step: 5,
    showValue: true
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Range
    },
    setup() {
      const volume = ref(30);
      const brightness = ref(80);
      const temperature = ref(22);
      return {
        volume,
        brightness,
        temperature
      };
    },
    template: \`
      <div class="space-y-6">
        <Range 
          v-model="volume"
          label="Volume" 
          :min="0" 
          :max="100"
          :step="1"
          show-value
          variant="primary"
        />
        
        <Range 
          v-model="brightness"
          label="Brightness" 
          :min="0" 
          :max="100"
          :step="5"
          show-value
          variant="accent"
        />
        
        <Range 
          v-model="temperature"
          label="Temperature" 
          :min="10" 
          :max="30"
          :step="1"
          show-value
          variant="warning"
        />
        
        <div class="mt-6 p-4 bg-base-200 rounded-lg">
          <h4 class="font-semibold mb-2">Current Values:</h4>
          <p>Volume: {{ volume }}%</p>
          <p>Brightness: {{ brightness }}%</p>
          <p>Temperature: {{ temperature }}°C</p>
        </div>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Range
    },
    template: \`
      <div class="space-y-4">
        <Range label="Primary" :model-value="60" variant="primary" show-value />
        <Range label="Secondary" :model-value="40" variant="secondary" show-value />
        <Range label="Accent" :model-value="70" variant="accent" show-value />
        <Range label="Success" :model-value="80" variant="success" show-value />
        <Range label="Warning" :model-value="30" variant="warning" show-value />
        <Range label="Info" :model-value="45" variant="info" show-value />
        <Range label="Error" :model-value="20" variant="error" show-value />
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Range
    },
    template: \`
      <div class="space-y-6">
        <Range label="Extra Small" :model-value="25" size="xs" show-value />
        <Range label="Small" :model-value="50" size="sm" show-value />
        <Range label="Medium" :model-value="75" size="md" show-value />
        <Range label="Large" :model-value="85" size="lg" show-value />
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Difficulty Level',
    modelValue: 2,
    min: 1,
    max: 5,
    step: 1,
    showValue: true,
    showTicks: true,
    helpText: '1 = Easy, 5 = Expert'
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Range',
    modelValue: 60,
    min: 0,
    max: 100,
    disabled: true,
    showValue: true
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Invalid Range',
    modelValue: 95,
    min: 0,
    max: 100,
    showValue: true,
    errorMessage: 'Value is too high. Please select a lower value.'
  }
}`,...w.parameters?.docs?.source}}};const re=["Default","WithTicks","PriceRange","Percentage","Interactive","Variants","Sizes","WithSteps","Disabled","WithError"];export{c as Default,y as Disabled,v as Interactive,g as Percentage,p as PriceRange,b as Sizes,h as Variants,w as WithError,f as WithSteps,d as WithTicks,re as __namedExportsOrder,se as default};
