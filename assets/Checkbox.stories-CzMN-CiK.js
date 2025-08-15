import{d as B,c as d,a as i,y as z,m as T,n as C,b as A,z as D,u as m,t as I,o as n}from"./iframe-BEoDMSxF.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const F={class:"form-control"},L=["id","disabled","required","aria-describedby","indeterminate"],P={class:"label-text"},$=["id","disabled","required","aria-describedby","indeterminate"],j=["id"],U=["id"],M=B({__name:"Checkbox",props:{modelValue:{type:Boolean,default:!1},label:{},helpText:{},errorMessage:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"primary"},ariaDescribedby:{}},emits:["update:modelValue","change"],setup(a,{emit:s}){let O=0;const E=()=>`checkbox-${++O}`,t=a,S=s,l=E(),o=d({get:()=>t.modelValue,set:e=>S("update:modelValue",e)}),_=d(()=>["label","cursor-pointer","flex","items-center","gap-2"]),V=d(()=>{const e=["checkbox"];return t.size==="xs"?e.push("checkbox-xs"):t.size==="sm"?e.push("checkbox-sm"):t.size==="lg"&&e.push("checkbox-lg"),t.variant==="primary"?e.push("checkbox-primary"):t.variant==="secondary"?e.push("checkbox-secondary"):t.variant==="accent"?e.push("checkbox-accent"):t.variant==="success"?e.push("checkbox-success"):t.variant==="warning"?e.push("checkbox-warning"):t.variant==="info"?e.push("checkbox-info"):t.variant==="error"&&e.push("checkbox-error"),t.errorMessage&&e.push("checkbox-error"),t.disabled&&e.push("checkbox-disabled"),e.join(" ")}),w=d(()=>{const e=[];return t.helpText&&e.push(`${l}-help`),t.errorMessage&&e.push(`${l}-error`),t.ariaDescribedby&&e.push(t.ariaDescribedby),e.length>0?e.join(" "):void 0}),q=e=>{S("change",e)};return(e,c)=>(n(),i("div",F,[e.label?(n(),i("label",{key:0,class:C(_.value)},[z(A("input",{id:m(l),"onUpdate:modelValue":c[0]||(c[0]=y=>o.value=y),type:"checkbox",class:C(V.value),disabled:e.disabled,required:e.required,"aria-describedby":w.value,indeterminate:e.indeterminate,onChange:q},null,42,L),[[D,o.value]]),A("span",P,I(e.label),1)],2)):z((n(),i("input",{key:1,id:m(l),"onUpdate:modelValue":c[1]||(c[1]=y=>o.value=y),type:"checkbox",class:C(V.value),disabled:e.disabled,required:e.required,"aria-describedby":w.value,indeterminate:e.indeterminate,onChange:q},null,42,$)),[[D,o.value]]),e.helpText&&!e.errorMessage?(n(),i("p",{key:2,id:`${m(l)}-help`,class:"text-xs text-base-content/70 mt-1"},I(e.helpText),9,j)):T("",!0),e.errorMessage?(n(),i("p",{key:3,id:`${m(l)}-error`,class:"text-xs text-error mt-1",role:"alert"},I(e.errorMessage),9,U)):T("",!0)]))}}),r=N(M,[["__scopeId","data-v-846663aa"]]);M.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"indeterminate",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"success"'},{name:'"warning"'},{name:'"info"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"change",type:{names:["Event"]}}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Checkbox.vue"]};const R={title:"Data Input/Checkbox",component:r,parameters:{layout:"centered",docs:{description:{component:"Checkbox input component with multiple variants, sizes, and states."}}},argTypes:{modelValue:{control:"boolean",description:"Checked state of the checkbox"},label:{control:"text",description:"Label text for the checkbox"},variant:{control:{type:"select"},options:["primary","secondary","accent","success","warning","info","error"],description:"Color variant of the checkbox"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Size of the checkbox"},disabled:{control:"boolean",description:"Disable the checkbox"},indeterminate:{control:"boolean",description:"Show indeterminate state"},errorMessage:{control:"text",description:"Error message to display"}},tags:["autodocs"]},u={args:{label:"I agree to the terms and conditions",modelValue:!1}},b={args:{label:"This checkbox is checked",modelValue:!0}},p={render:()=>({components:{Checkbox:r},data(){return{values:{primary:!0,secondary:!0,accent:!0,success:!0,warning:!0,info:!0,error:!0}}},template:`
      <div class="space-y-4">
        <Checkbox v-model="values.primary" variant="primary" label="Primary checkbox" />
        <Checkbox v-model="values.secondary" variant="secondary" label="Secondary checkbox" />
        <Checkbox v-model="values.accent" variant="accent" label="Accent checkbox" />
        <Checkbox v-model="values.success" variant="success" label="Success checkbox" />
        <Checkbox v-model="values.warning" variant="warning" label="Warning checkbox" />
        <Checkbox v-model="values.info" variant="info" label="Info checkbox" />
        <Checkbox v-model="values.error" variant="error" label="Error checkbox" />
      </div>
    `})},h={render:()=>({components:{Checkbox:r},data(){return{values:{xs:!0,sm:!0,md:!0,lg:!0}}},template:`
      <div class="space-y-4">
        <Checkbox v-model="values.xs" size="xs" label="Extra small checkbox" />
        <Checkbox v-model="values.sm" size="sm" label="Small checkbox" />
        <Checkbox v-model="values.md" size="md" label="Medium checkbox (default)" />
        <Checkbox v-model="values.lg" size="lg" label="Large checkbox" />
      </div>
    `})},v={render:()=>({components:{Checkbox:r},data(){return{checked:!0,unchecked:!1,indeterminate:!1}},template:`
      <div class="space-y-4">
        <Checkbox v-model="checked" label="Checked state" />
        <Checkbox v-model="unchecked" label="Unchecked state" />
        <Checkbox v-model="indeterminate" :indeterminate="true" label="Indeterminate state" />
        <Checkbox v-model="unchecked" disabled label="Disabled unchecked" />
        <Checkbox v-model="checked" disabled label="Disabled checked" />
      </div>
    `})},f={args:{label:"You must agree to continue",modelValue:!1,errorMessage:"This field is required",variant:"error"}},x={render:()=>({components:{Checkbox:r},data(){return{preferences:{newsletter:!1,notifications:!0,marketing:!1,privacy:!1}}},template:`
      <div class="max-w-md p-6 bg-base-100 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">Preferences</h3>
        
        <div class="space-y-4">
          <Checkbox 
            v-model="preferences.newsletter" 
            label="Subscribe to newsletter"
            variant="primary"
          />
          
          <Checkbox 
            v-model="preferences.notifications" 
            label="Enable push notifications"
            variant="info"
          />
          
          <Checkbox 
            v-model="preferences.marketing" 
            label="Receive marketing emails"
            variant="secondary"
          />
          
          <Checkbox 
            v-model="preferences.privacy" 
            label="I agree to the privacy policy"
            variant="success"
            :errorMessage="!preferences.privacy ? 'You must agree to the privacy policy' : ''"
          />
        </div>
        
        <div class="mt-6">
          <button 
            class="btn btn-primary"
            :disabled="!preferences.privacy"
          >
            Save Preferences
          </button>
        </div>
        
        <div class="mt-4 p-3 bg-base-200 rounded text-sm">
          <strong>Current values:</strong>
          <pre>{{ JSON.stringify(preferences, null, 2) }}</pre>
        </div>
      </div>
    `})},k={render:()=>({components:{Checkbox:r},data(){return{selectedItems:["item2"],items:[{id:"item1",label:"Option 1",description:"First option with description"},{id:"item2",label:"Option 2",description:"Second option (pre-selected)"},{id:"item3",label:"Option 3",description:"Third option available"},{id:"item4",label:"Option 4",description:"Fourth option disabled",disabled:!0}]}},methods:{toggleItem(a){const s=this.selectedItems.indexOf(a);s>-1?this.selectedItems.splice(s,1):this.selectedItems.push(a)}},template:`
      <div class="max-w-md">
        <h3 class="text-lg font-semibold mb-4">Select Items</h3>
        
        <div class="space-y-3">
          <div 
            v-for="item in items" 
            :key="item.id"
            class="p-3 border border-base-300 rounded-lg hover:bg-base-50"
            :class="{ 'opacity-50': item.disabled }"
          >
            <Checkbox 
              :modelValue="selectedItems.includes(item.id)"
              @update:modelValue="toggleItem(item.id)"
              :label="item.label"
              :disabled="item.disabled"
              variant="primary"
            />
            <p class="text-sm text-gray-600 mt-1 ml-6">{{ item.description }}</p>
          </div>
        </div>
        
        <div class="mt-4 p-3 bg-base-200 rounded text-sm">
          <strong>Selected:</strong> {{ selectedItems.length }} item(s)
          <div class="mt-1">{{ selectedItems.join(', ') }}</div>
        </div>
      </div>
    `})},g={render:()=>({components:{Checkbox:r},data(){return{allSelected:!1,selectedItems:["item2"],items:[{id:"item1",label:"Task 1"},{id:"item2",label:"Task 2"},{id:"item3",label:"Task 3"},{id:"item4",label:"Task 4"}]}},computed:{selectAllState(){return this.selectedItems.length===0?!1:this.selectedItems.length===this.items.length?!0:"indeterminate"}},methods:{toggleSelectAll(){this.selectedItems.length===this.items.length?this.selectedItems=[]:this.selectedItems=this.items.map(a=>a.id)},toggleItem(a){const s=this.selectedItems.indexOf(a);s>-1?this.selectedItems.splice(s,1):this.selectedItems.push(a)}},template:`
      <div class="max-w-md">
        <div class="border-b border-base-300 pb-3 mb-3">
          <Checkbox 
            :modelValue="selectAllState === true"
            :indeterminate="selectAllState === 'indeterminate'"
            @update:modelValue="toggleSelectAll"
            label="Select All"
            variant="primary"
            class="font-semibold"
          />
        </div>
        
        <div class="space-y-2 ml-4">
          <Checkbox 
            v-for="item in items" 
            :key="item.id"
            :modelValue="selectedItems.includes(item.id)"
            @update:modelValue="toggleItem(item.id)"
            :label="item.label"
            variant="primary"
          />
        </div>
        
        <div class="mt-4 p-3 bg-base-200 rounded text-sm">
          {{ selectedItems.length }} of {{ items.length }} selected
        </div>
      </div>
    `})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms and conditions',
    modelValue: false
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This checkbox is checked',
    modelValue: true
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    data() {
      return {
        values: {
          primary: true,
          secondary: true,
          accent: true,
          success: true,
          warning: true,
          info: true,
          error: true
        }
      };
    },
    template: \`
      <div class="space-y-4">
        <Checkbox v-model="values.primary" variant="primary" label="Primary checkbox" />
        <Checkbox v-model="values.secondary" variant="secondary" label="Secondary checkbox" />
        <Checkbox v-model="values.accent" variant="accent" label="Accent checkbox" />
        <Checkbox v-model="values.success" variant="success" label="Success checkbox" />
        <Checkbox v-model="values.warning" variant="warning" label="Warning checkbox" />
        <Checkbox v-model="values.info" variant="info" label="Info checkbox" />
        <Checkbox v-model="values.error" variant="error" label="Error checkbox" />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    data() {
      return {
        values: {
          xs: true,
          sm: true,
          md: true,
          lg: true
        }
      };
    },
    template: \`
      <div class="space-y-4">
        <Checkbox v-model="values.xs" size="xs" label="Extra small checkbox" />
        <Checkbox v-model="values.sm" size="sm" label="Small checkbox" />
        <Checkbox v-model="values.md" size="md" label="Medium checkbox (default)" />
        <Checkbox v-model="values.lg" size="lg" label="Large checkbox" />
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    data() {
      return {
        checked: true,
        unchecked: false,
        indeterminate: false
      };
    },
    template: \`
      <div class="space-y-4">
        <Checkbox v-model="checked" label="Checked state" />
        <Checkbox v-model="unchecked" label="Unchecked state" />
        <Checkbox v-model="indeterminate" :indeterminate="true" label="Indeterminate state" />
        <Checkbox v-model="unchecked" disabled label="Disabled unchecked" />
        <Checkbox v-model="checked" disabled label="Disabled checked" />
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'You must agree to continue',
    modelValue: false,
    errorMessage: 'This field is required',
    variant: 'error'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    data() {
      return {
        preferences: {
          newsletter: false,
          notifications: true,
          marketing: false,
          privacy: false
        }
      };
    },
    template: \`
      <div class="max-w-md p-6 bg-base-100 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">Preferences</h3>
        
        <div class="space-y-4">
          <Checkbox 
            v-model="preferences.newsletter" 
            label="Subscribe to newsletter"
            variant="primary"
          />
          
          <Checkbox 
            v-model="preferences.notifications" 
            label="Enable push notifications"
            variant="info"
          />
          
          <Checkbox 
            v-model="preferences.marketing" 
            label="Receive marketing emails"
            variant="secondary"
          />
          
          <Checkbox 
            v-model="preferences.privacy" 
            label="I agree to the privacy policy"
            variant="success"
            :errorMessage="!preferences.privacy ? 'You must agree to the privacy policy' : ''"
          />
        </div>
        
        <div class="mt-6">
          <button 
            class="btn btn-primary"
            :disabled="!preferences.privacy"
          >
            Save Preferences
          </button>
        </div>
        
        <div class="mt-4 p-3 bg-base-200 rounded text-sm">
          <strong>Current values:</strong>
          <pre>{{ JSON.stringify(preferences, null, 2) }}</pre>
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    data() {
      return {
        selectedItems: ['item2'],
        items: [{
          id: 'item1',
          label: 'Option 1',
          description: 'First option with description'
        }, {
          id: 'item2',
          label: 'Option 2',
          description: 'Second option (pre-selected)'
        }, {
          id: 'item3',
          label: 'Option 3',
          description: 'Third option available'
        }, {
          id: 'item4',
          label: 'Option 4',
          description: 'Fourth option disabled',
          disabled: true
        }]
      };
    },
    methods: {
      toggleItem(itemId: string) {
        const index = this.selectedItems.indexOf(itemId);
        if (index > -1) {
          this.selectedItems.splice(index, 1);
        } else {
          this.selectedItems.push(itemId);
        }
      }
    },
    template: \`
      <div class="max-w-md">
        <h3 class="text-lg font-semibold mb-4">Select Items</h3>
        
        <div class="space-y-3">
          <div 
            v-for="item in items" 
            :key="item.id"
            class="p-3 border border-base-300 rounded-lg hover:bg-base-50"
            :class="{ 'opacity-50': item.disabled }"
          >
            <Checkbox 
              :modelValue="selectedItems.includes(item.id)"
              @update:modelValue="toggleItem(item.id)"
              :label="item.label"
              :disabled="item.disabled"
              variant="primary"
            />
            <p class="text-sm text-gray-600 mt-1 ml-6">{{ item.description }}</p>
          </div>
        </div>
        
        <div class="mt-4 p-3 bg-base-200 rounded text-sm">
          <strong>Selected:</strong> {{ selectedItems.length }} item(s)
          <div class="mt-1">{{ selectedItems.join(', ') }}</div>
        </div>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    data() {
      return {
        allSelected: false,
        selectedItems: ['item2'],
        items: [{
          id: 'item1',
          label: 'Task 1'
        }, {
          id: 'item2',
          label: 'Task 2'
        }, {
          id: 'item3',
          label: 'Task 3'
        }, {
          id: 'item4',
          label: 'Task 4'
        }]
      };
    },
    computed: {
      selectAllState() {
        if (this.selectedItems.length === 0) return false;
        if (this.selectedItems.length === this.items.length) return true;
        return 'indeterminate';
      }
    },
    methods: {
      toggleSelectAll() {
        if (this.selectedItems.length === this.items.length) {
          this.selectedItems = [];
        } else {
          this.selectedItems = this.items.map((item: any) => item.id);
        }
      },
      toggleItem(itemId: string) {
        const index = this.selectedItems.indexOf(itemId);
        if (index > -1) {
          this.selectedItems.splice(index, 1);
        } else {
          this.selectedItems.push(itemId);
        }
      }
    },
    template: \`
      <div class="max-w-md">
        <div class="border-b border-base-300 pb-3 mb-3">
          <Checkbox 
            :modelValue="selectAllState === true"
            :indeterminate="selectAllState === 'indeterminate'"
            @update:modelValue="toggleSelectAll"
            label="Select All"
            variant="primary"
            class="font-semibold"
          />
        </div>
        
        <div class="space-y-2 ml-4">
          <Checkbox 
            v-for="item in items" 
            :key="item.id"
            :modelValue="selectedItems.includes(item.id)"
            @update:modelValue="toggleItem(item.id)"
            :label="item.label"
            variant="primary"
          />
        </div>
        
        <div class="mt-4 p-3 bg-base-200 rounded text-sm">
          {{ selectedItems.length }} of {{ items.length }} selected
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};const G=["Default","Checked","Variants","Sizes","States","WithError","FormExample","CheckboxList","SelectAll"];export{k as CheckboxList,b as Checked,u as Default,x as FormExample,g as SelectAll,h as Sizes,v as States,p as Variants,f as WithError,G as __namedExportsOrder,R as default};
