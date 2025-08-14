import{d as B,c as i,a as r,m as k,n as g,b as x,u as d,t as y,o as s,r as f}from"./iframe-BrsdVXSx.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const E={class:"form-control"},O=["id","value","checked","name","disabled","required","aria-describedby"],I={class:"label-text"},L=["id","value","checked","name","disabled","required","aria-describedby"],T=["id"],$=["id"],q=B({__name:"Radio",props:{modelValue:{type:[String,Number,Boolean]},value:{type:[String,Number,Boolean]},name:{},label:{},helpText:{},errorMessage:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"primary"},ariaDescribedby:{}},emits:["update:modelValue","change"],setup(o,{emit:C}){let D=0;const _=()=>`radio-${++D}`,a=o,h=C,n=_(),V=i(()=>a.modelValue===a.value),N=i(()=>["label","cursor-pointer","flex","items-center","gap-2"]),R=i(()=>{const e=["radio"];return a.size==="xs"?e.push("radio-xs"):a.size==="sm"?e.push("radio-sm"):a.size==="lg"&&e.push("radio-lg"),a.variant==="primary"?e.push("radio-primary"):a.variant==="secondary"?e.push("radio-secondary"):a.variant==="accent"?e.push("radio-accent"):a.variant==="success"?e.push("radio-success"):a.variant==="warning"?e.push("radio-warning"):a.variant==="info"?e.push("radio-info"):a.variant==="error"&&e.push("radio-error"),a.errorMessage&&e.push("radio-error"),e.join(" ")}),S=i(()=>{const e=[];return a.helpText&&e.push(`${n}-help`),a.errorMessage&&e.push(`${n}-error`),a.ariaDescribedby&&e.push(a.ariaDescribedby),e.length>0?e.join(" "):void 0}),z=e=>{e.target.checked&&h("update:modelValue",a.value),h("change",e)};return(e,w)=>(s(),r("div",E,[e.label?(s(),r("label",{key:0,class:g(N.value)},[x("input",{id:d(n),value:e.value,checked:V.value,type:"radio",name:e.name,class:g(R.value),disabled:e.disabled,required:e.required,"aria-describedby":S.value,onChange:z},null,42,O),x("span",I,y(e.label),1)],2)):(s(),r("input",{key:1,id:d(n),value:e.value,checked:V.value,type:"radio",name:e.name,class:g(R.value),disabled:e.disabled,required:e.required,"aria-describedby":S.value,onChange:z},null,42,L)),e.helpText&&!e.errorMessage?(s(),r("p",{key:2,id:`${d(n)}-help`,class:"text-xs text-base-content/70 mt-1"},y(e.helpText),9,T)):k("",!0),e.errorMessage?(s(),r("p",{key:3,id:`${d(n)}-error`,class:"text-xs text-error mt-1",role:"alert"},y(e.errorMessage),9,$)):k("",!0)]))}}),l=M(q,[["__scopeId","data-v-6a0af7f5"]]);q.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"success"'},{name:'"warning"'},{name:'"info"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"change",type:{names:["Event"]}}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Radio.vue"]};const P={title:"DataInput/Radio",component:l,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["default","primary","secondary","accent","success","warning","error"]},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}}}},t={args:{label:"Default Radio",value:"default",name:"default-radio"}},c={args:{label:"Checked Radio",value:"checked",name:"checked-radio",modelValue:"checked"}},u={render:()=>({components:{Radio:l},setup(){return{selectedValue:f("option1")}},template:`
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Select an option:</h3>
        <div class="space-y-2">
          <Radio 
            v-model="selectedValue"
            label="Option 1" 
            value="option1" 
            name="radio-group" 
          />
          <Radio 
            v-model="selectedValue"
            label="Option 2" 
            value="option2" 
            name="radio-group" 
          />
          <Radio 
            v-model="selectedValue"
            label="Option 3" 
            value="option3" 
            name="radio-group" 
          />
        </div>
        <p class="text-sm text-gray-600">Selected: {{ selectedValue }}</p>
      </div>
    `})},m={render:()=>({components:{Radio:l},setup(){return{selectedVariant:f("primary")}},template:`
      <div class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <Radio 
            v-model="selectedVariant"
            label="Primary" 
            value="primary" 
            variant="primary"
            name="variant-group" 
          />
          <Radio 
            v-model="selectedVariant"
            label="Secondary" 
            value="secondary" 
            variant="secondary"
            name="variant-group" 
          />
          <Radio 
            v-model="selectedVariant"
            label="Accent" 
            value="accent" 
            variant="accent"
            name="variant-group" 
          />
          <Radio 
            v-model="selectedVariant"
            label="Success" 
            value="success" 
            variant="success"
            name="variant-group" 
          />
          <Radio 
            v-model="selectedVariant"
            label="Warning" 
            value="warning" 
            variant="warning"
            name="variant-group" 
          />
          <Radio 
            v-model="selectedVariant"
            label="Error" 
            value="error" 
            variant="error"
            name="variant-group" 
          />
        </div>
      </div>
    `})},p={render:()=>({components:{Radio:l},setup(){return{selectedSize:f("md")}},template:`
      <div class="space-y-4">
        <Radio 
          v-model="selectedSize"
          label="Extra Small" 
          value="xs" 
          size="xs"
          name="size-group" 
        />
        <Radio 
          v-model="selectedSize"
          label="Small" 
          value="sm" 
          size="sm"
          name="size-group" 
        />
        <Radio 
          v-model="selectedSize"
          label="Medium" 
          value="md" 
          size="md"
          name="size-group" 
        />
        <Radio 
          v-model="selectedSize"
          label="Large" 
          value="lg" 
          size="lg"
          name="size-group" 
        />
      </div>
    `})},v={render:()=>({components:{Radio:l},template:`
      <div class="space-y-2">
        <Radio 
          label="Disabled Unchecked" 
          value="disabled1" 
          name="disabled-group"
          disabled
        />
        <Radio 
          label="Disabled Checked" 
          value="disabled2" 
          name="disabled-group"
          modelValue="disabled2"
          disabled
        />
      </div>
    `})},b={args:{value:"no-label",name:"no-label-radio"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Radio',
    value: 'default',
    name: 'default-radio'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checked Radio',
    value: 'checked',
    name: 'checked-radio',
    modelValue: 'checked'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio
    },
    setup() {
      const selectedValue = ref('option1');
      return {
        selectedValue
      };
    },
    template: \`
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Select an option:</h3>
        <div class="space-y-2">
          <Radio 
            v-model="selectedValue"
            label="Option 1" 
            value="option1" 
            name="radio-group" 
          />
          <Radio 
            v-model="selectedValue"
            label="Option 2" 
            value="option2" 
            name="radio-group" 
          />
          <Radio 
            v-model="selectedValue"
            label="Option 3" 
            value="option3" 
            name="radio-group" 
          />
        </div>
        <p class="text-sm text-gray-600">Selected: {{ selectedValue }}</p>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio
    },
    setup() {
      const selectedVariant = ref('primary');
      return {
        selectedVariant
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <Radio 
            v-model="selectedVariant"
            label="Primary" 
            value="primary" 
            variant="primary"
            name="variant-group" 
          />
          <Radio 
            v-model="selectedVariant"
            label="Secondary" 
            value="secondary" 
            variant="secondary"
            name="variant-group" 
          />
          <Radio 
            v-model="selectedVariant"
            label="Accent" 
            value="accent" 
            variant="accent"
            name="variant-group" 
          />
          <Radio 
            v-model="selectedVariant"
            label="Success" 
            value="success" 
            variant="success"
            name="variant-group" 
          />
          <Radio 
            v-model="selectedVariant"
            label="Warning" 
            value="warning" 
            variant="warning"
            name="variant-group" 
          />
          <Radio 
            v-model="selectedVariant"
            label="Error" 
            value="error" 
            variant="error"
            name="variant-group" 
          />
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio
    },
    setup() {
      const selectedSize = ref('md');
      return {
        selectedSize
      };
    },
    template: \`
      <div class="space-y-4">
        <Radio 
          v-model="selectedSize"
          label="Extra Small" 
          value="xs" 
          size="xs"
          name="size-group" 
        />
        <Radio 
          v-model="selectedSize"
          label="Small" 
          value="sm" 
          size="sm"
          name="size-group" 
        />
        <Radio 
          v-model="selectedSize"
          label="Medium" 
          value="md" 
          size="md"
          name="size-group" 
        />
        <Radio 
          v-model="selectedSize"
          label="Large" 
          value="lg" 
          size="lg"
          name="size-group" 
        />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio
    },
    template: \`
      <div class="space-y-2">
        <Radio 
          label="Disabled Unchecked" 
          value="disabled1" 
          name="disabled-group"
          disabled
        />
        <Radio 
          label="Disabled Checked" 
          value="disabled2" 
          name="disabled-group"
          modelValue="disabled2"
          disabled
        />
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'no-label',
    name: 'no-label-radio'
  }
}`,...b.parameters?.docs?.source}}};const U=["Default","Checked","RadioGroup","Variants","Sizes","Disabled","NoLabel"];export{c as Checked,t as Default,v as Disabled,b as NoLabel,u as RadioGroup,p as Sizes,m as Variants,U as __namedExportsOrder,P as default};
