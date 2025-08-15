import{d as L,c as u,a as n,l as t,b as D,u as i,t as o,n as N,F as $,f as j,o as s,r as C}from"./iframe-B-dz0hg_.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const F={class:"form-control w-full"},O=["for"],G={class:"label-text"},H={key:0,class:"label-text-alt"},J=["id","value","min","max","step","disabled","aria-describedby"],K={key:1,class:"w-full flex justify-between text-xs px-2"},Q=["id"],U=["id"],_=L({__name:"Range",props:{modelValue:{default:0},min:{default:0},max:{default:100},step:{default:1},label:{},helpText:{},errorMessage:{},disabled:{type:Boolean,default:!1},showValue:{type:Boolean,default:!1},showTicks:{type:Boolean,default:!1},tickCount:{default:5},size:{default:"md"},variant:{default:"primary"},ariaDescribedby:{}},emits:["update:modelValue","input","change"],setup(V,{emit:x}){let R=0;const q=()=>`range-${++R}`,a=V,S=x,r=q(),E=u(()=>{const e=["range","w-full"];return a.size==="xs"?e.push("range-xs"):a.size==="sm"?e.push("range-sm"):a.size==="lg"&&e.push("range-lg"),a.variant==="primary"?e.push("range-primary"):a.variant==="secondary"?e.push("range-secondary"):a.variant==="accent"?e.push("range-accent"):a.variant==="success"?e.push("range-success"):a.variant==="warning"?e.push("range-warning"):a.variant==="info"?e.push("range-info"):a.variant==="error"&&e.push("range-error"),e.join(" ")}),P=u(()=>a.modelValue?.toString()||"0"),z=u(()=>{if(!a.showTicks)return[];const e=[],l=(a.max-a.min)/(a.tickCount-1);for(let T=0;T<a.tickCount;T++){const W=a.min+l*T;e.push(Math.round(W))}return e}),B=u(()=>{const e=[];return a.helpText&&e.push(`${r}-help`),a.errorMessage&&e.push(`${r}-error`),a.ariaDescribedby&&e.push(a.ariaDescribedby),e.length>0?e.join(" "):void 0}),I=e=>{const k=e.target,l=Number(k.value);S("update:modelValue",l),S("input",e)},M=e=>{S("change",e)};return(e,k)=>(s(),n("div",F,[e.label?(s(),n("label",{key:0,for:i(r),class:"label"},[D("span",G,o(e.label),1),e.showValue?(s(),n("span",H,o(P.value),1)):t("",!0)],8,O)):t("",!0),D("input",{id:i(r),value:e.modelValue,type:"range",min:e.min,max:e.max,step:e.step,class:N(E.value),disabled:e.disabled,"aria-describedby":B.value,onInput:I,onChange:M},null,42,J),e.showTicks&&z.value.length>0?(s(),n("div",K,[(s(!0),n($,null,j(z.value,l=>(s(),n("span",{key:l},o(l),1))),128))])):t("",!0),e.helpText&&!e.errorMessage?(s(),n("p",{key:2,id:`${i(r)}-help`,class:"text-xs text-base-content/70 mt-1"},o(e.helpText),9,Q)):t("",!0),e.errorMessage?(s(),n("p",{key:3,id:`${i(r)}-error`,class:"text-xs text-error mt-1",role:"alert"},o(e.errorMessage),9,U)):t("",!0)]))}}),w=A(_,[["__scopeId","data-v-464824b6"]]);_.__docgenInfo={exportName:"default",displayName:"Range",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"min",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"label",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showTicks",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tickCount",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"success"'},{name:'"warning"'},{name:'"info"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["number"]}},{name:"input",type:{names:["Event"]}},{name:"change",type:{names:["Event"]}}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Range.vue"]};const ee={title:"DataInput/Range",component:w,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["default","primary","secondary","accent","success","warning","error"]},disabled:{control:{type:"boolean"}},showValue:{control:{type:"boolean"}},showTicks:{control:{type:"boolean"}}}},m={args:{label:"Volume",modelValue:50,min:0,max:100,showValue:!0}},c={args:{label:"Rating",modelValue:3,min:1,max:5,step:1,showValue:!0,showTicks:!0}},d={args:{label:"Price Range",modelValue:500,min:0,max:1e3,step:50,showValue:!0,valuePrefix:"$",helpText:"Select your budget range"}},p={args:{label:"Progress",modelValue:75,min:0,max:100,step:5,showValue:!0,valueSuffix:"%"}},g={render:()=>({components:{Range:w},setup(){const V=C(30),x=C(80),R=C(22);return{volume:V,brightness:x,temperature:R}},template:`
      <div class="space-y-6">
        <Range 
          v-model="volume"
          label="Volume" 
          :min="0" 
          :max="100"
          :step="1"
          show-value
          value-suffix="%"
          variant="primary"
        />
        
        <Range 
          v-model="brightness"
          label="Brightness" 
          :min="0" 
          :max="100"
          :step="5"
          show-value
          value-suffix="%"
          variant="accent"
        />
        
        <Range 
          v-model="temperature"
          label="Temperature" 
          :min="10" 
          :max="30"
          :step="1"
          show-value
          value-suffix="°C"
          variant="warning"
        />
        
        <div class="mt-6 p-4 bg-base-200 rounded-lg">
          <h4 class="font-semibold mb-2">Current Values:</h4>
          <p>Volume: {{ volume }}%</p>
          <p>Brightness: {{ brightness }}%</p>
          <p>Temperature: {{ temperature }}°C</p>
        </div>
      </div>
    `})},v={render:()=>({components:{Range:w},template:`
      <div class="space-y-4">
        <Range label="Default" :model-value="50" variant="default" show-value />
        <Range label="Primary" :model-value="60" variant="primary" show-value />
        <Range label="Secondary" :model-value="40" variant="secondary" show-value />
        <Range label="Accent" :model-value="70" variant="accent" show-value />
        <Range label="Success" :model-value="80" variant="success" show-value />
        <Range label="Warning" :model-value="30" variant="warning" show-value />
        <Range label="Error" :model-value="20" variant="error" show-value />
      </div>
    `})},f={render:()=>({components:{Range:w},template:`
      <div class="space-y-6">
        <Range label="Extra Small" :model-value="25" size="xs" show-value />
        <Range label="Small" :model-value="50" size="sm" show-value />
        <Range label="Medium" :model-value="75" size="md" show-value />
        <Range label="Large" :model-value="85" size="lg" show-value />
      </div>
    `})},h={args:{label:"Difficulty Level",modelValue:2,min:1,max:5,step:1,showValue:!0,showTicks:!0,helpText:"1 = Easy, 5 = Expert"}},b={args:{label:"Disabled Range",modelValue:60,min:0,max:100,disabled:!0,showValue:!0}},y={args:{label:"Invalid Range",modelValue:95,min:0,max:100,showValue:!0,errorMessage:"Value is too high. Please select a lower value."}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    modelValue: 50,
    min: 0,
    max: 100,
    showValue: true
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rating',
    modelValue: 3,
    min: 1,
    max: 5,
    step: 1,
    showValue: true,
    showTicks: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Price Range',
    modelValue: 500,
    min: 0,
    max: 1000,
    step: 50,
    showValue: true,
    valuePrefix: '$',
    helpText: 'Select your budget range'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Progress',
    modelValue: 75,
    min: 0,
    max: 100,
    step: 5,
    showValue: true,
    valueSuffix: '%'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
          value-suffix="%"
          variant="primary"
        />
        
        <Range 
          v-model="brightness"
          label="Brightness" 
          :min="0" 
          :max="100"
          :step="5"
          show-value
          value-suffix="%"
          variant="accent"
        />
        
        <Range 
          v-model="temperature"
          label="Temperature" 
          :min="10" 
          :max="30"
          :step="1"
          show-value
          value-suffix="°C"
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Range
    },
    template: \`
      <div class="space-y-4">
        <Range label="Default" :model-value="50" variant="default" show-value />
        <Range label="Primary" :model-value="60" variant="primary" show-value />
        <Range label="Secondary" :model-value="40" variant="secondary" show-value />
        <Range label="Accent" :model-value="70" variant="accent" show-value />
        <Range label="Success" :model-value="80" variant="success" show-value />
        <Range label="Warning" :model-value="30" variant="warning" show-value />
        <Range label="Error" :model-value="20" variant="error" show-value />
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Range',
    modelValue: 60,
    min: 0,
    max: 100,
    disabled: true,
    showValue: true
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Invalid Range',
    modelValue: 95,
    min: 0,
    max: 100,
    showValue: true,
    errorMessage: 'Value is too high. Please select a lower value.'
  }
}`,...y.parameters?.docs?.source}}};const ae=["Default","WithTicks","PriceRange","Percentage","Interactive","Variants","Sizes","WithSteps","Disabled","WithError"];export{m as Default,b as Disabled,g as Interactive,p as Percentage,d as PriceRange,f as Sizes,v as Variants,y as WithError,h as WithSteps,c as WithTicks,ae as __namedExportsOrder,ee as default};
