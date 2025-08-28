import{d as I,m as C,h as L,c as i,a as l,l as D,n as R,b as M,u as d,t as V,o,r as t}from"./iframe-B8bctOEb.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const $={class:"form-control"},j=["id","value","checked","name","disabled","required","aria-describedby"],A={class:"label-text"},G=["id","value","checked","name","disabled","required","aria-describedby"],H=["id"],P=["id"],T=I({__name:"Radio",props:C({value:{type:[String,Number,Boolean]},name:{},label:{},helpText:{},errorMessage:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"primary"},ariaDescribedby:{}},{modelValue:{type:[String,Number,Boolean]},modelModifiers:{}}),emits:C(["change"],["update:modelValue"]),setup(n,{emit:w}){let N=0;const _=()=>`radio-${++N}`,a=n,S=L(n,"modelValue"),B=w,r=_(),z=i(()=>S.value===a.value),E=i(()=>["label","cursor-pointer","flex","items-center","gap-2"]),x=i(()=>{const e=["radio"];return a.size==="xs"?e.push("radio-xs"):a.size==="sm"?e.push("radio-sm"):a.size==="lg"&&e.push("radio-lg"),a.variant==="primary"?e.push("radio-primary"):a.variant==="secondary"?e.push("radio-secondary"):a.variant==="accent"?e.push("radio-accent"):a.variant==="success"?e.push("radio-success"):a.variant==="warning"?e.push("radio-warning"):a.variant==="info"?e.push("radio-info"):a.variant==="error"&&e.push("radio-error"),a.errorMessage&&e.push("radio-error"),e.join(" ")}),q=i(()=>{const e=[];return a.helpText&&e.push(`${r}-help`),a.errorMessage&&e.push(`${r}-error`),a.ariaDescribedby&&e.push(a.ariaDescribedby),e.length>0?e.join(" "):void 0}),k=e=>{e.target.checked&&(S.value=a.value),B("change",e)};return(e,O)=>(o(),l("div",$,[e.label?(o(),l("label",{key:0,class:R(E.value)},[M("input",{id:d(r),value:e.value,checked:z.value,type:"radio",name:e.name,class:R(x.value),disabled:e.disabled,required:e.required,"aria-describedby":q.value,onChange:k},null,42,j),M("span",A,V(e.label),1)],2)):(o(),l("input",{key:1,id:d(r),value:e.value,checked:z.value,type:"radio",name:e.name,class:R(x.value),disabled:e.disabled,required:e.required,"aria-describedby":q.value,onChange:k},null,42,G)),e.helpText&&!e.errorMessage?(o(),l("p",{key:2,id:`${d(r)}-help`,class:"text-xs text-base-content/70 mt-1"},V(e.helpText),9,H)):D("",!0),e.errorMessage?(o(),l("p",{key:3,id:`${d(r)}-error`,class:"text-xs text-error mt-1",role:"alert"},V(e.errorMessage),9,P)):D("",!0)]))}}),s=W(T,[["__scopeId","data-v-f4a2c274"]]);T.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"value",required:!0,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"boolean"}]}},{name:"name",required:!0,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"success"'},{name:'"warning"'},{name:'"info"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}}],events:[{name:"change",type:{names:["Event"]}}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Radio.vue"]};const K={title:"Data Input/Radio",component:s,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["primary","secondary","accent","success","warning","info","error"]},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}}}},c={args:{label:"Default Radio",value:"default",name:"default-radio"}},u={render:()=>({components:{Radio:s},setup(){return{selectedValue:t("checked")}},template:`
      <Radio 
        v-model="selectedValue"
        label="Checked Radio" 
        value="checked" 
        name="checked-radio" 
      />
    `})},m={render:()=>({components:{Radio:s},setup(){return{selectedValue:t("option1")}},template:`
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
    `})},p={render:()=>({components:{Radio:s},setup(){return{selectedVariant:t("primary")}},template:`
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
    `})},v={render:()=>({components:{Radio:s},setup(){return{selectedSize:t("md")}},template:`
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
    `})},b={render:()=>({components:{Radio:s},setup(){return{selectedValue:t("disabled2")}},template:`
      <div class="space-y-2">
        <Radio 
          label="Disabled Unchecked" 
          value="disabled1" 
          name="disabled-group"
          disabled
        />
        <Radio 
          v-model="selectedValue"
          label="Disabled Checked" 
          value="disabled2" 
          name="disabled-group"
          disabled
        />
      </div>
    `})},g={args:{value:"no-label",name:"no-label-radio"}},h={args:{label:"Radio with help text",value:"help-text",name:"help-text-radio",helpText:"This is some helpful text to guide the user."}},f={args:{label:"Radio with error",value:"error",name:"error-radio",errorMessage:"This field is required."}},y={args:{label:"Required Radio",value:"required",name:"required-radio",required:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Radio',
    value: 'default',
    name: 'default-radio'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio
    },
    setup() {
      const selectedValue = ref('checked');
      return {
        selectedValue
      };
    },
    template: \`
      <Radio 
        v-model="selectedValue"
        label="Checked Radio" 
        value="checked" 
        name="checked-radio" 
      />
    \`
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Radio
    },
    setup() {
      const selectedValue = ref('disabled2');
      return {
        selectedValue
      };
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
          v-model="selectedValue"
          label="Disabled Checked" 
          value="disabled2" 
          name="disabled-group"
          disabled
        />
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'no-label',
    name: 'no-label-radio'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Radio with help text',
    value: 'help-text',
    name: 'help-text-radio',
    helpText: 'This is some helpful text to guide the user.'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Radio with error',
    value: 'error',
    name: 'error-radio',
    errorMessage: 'This field is required.'
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Radio',
    value: 'required',
    name: 'required-radio',
    required: true
  }
}`,...y.parameters?.docs?.source}}};const Q=["Default","Checked","RadioGroup","Variants","Sizes","Disabled","NoLabel","WithHelpText","WithError","Required"];export{u as Checked,c as Default,b as Disabled,g as NoLabel,m as RadioGroup,y as Required,v as Sizes,p as Variants,f as WithError,h as WithHelpText,Q as __namedExportsOrder,K as default};
