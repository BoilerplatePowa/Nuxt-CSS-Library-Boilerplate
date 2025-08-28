import{d as P,c as l,a as d,l as y,b as D,n,e as o,o as i,v as I,t as x}from"./iframe-BHDwIEoY.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as t}from"./Input-CeOfnvpi.js";import{S as k}from"./Select-DfB_ReJb.js";import"./preload-helper-D9Z9MdNV.js";import"./vee-validate-97q7WYnO.js";import"./Icon-VsDADTjQ.js";import"./x-BilxkClB.js";import"./Swap-Dfw5K-hL.js";const j=["disabled"],S=P({__name:"Fieldset",props:{legend:{},description:{},error:{},disabled:{type:Boolean,default:!1},variant:{default:"default"},size:{default:"md"},required:{type:Boolean,default:!1}},setup(r){const a=r,z=l(()=>{const e=["fieldset"];return a.variant==="bordered"?e.push("border-2","border-base-300","rounded-lg"):a.variant==="outlined"?e.push("border","border-base-300","rounded-md"):a.variant==="filled"&&e.push("bg-base-200","border","border-base-300","rounded-md"),a.size==="sm"?e.push("p-3"):a.size==="lg"?e.push("p-6"):e.push("p-4"),a.error&&e.push("border-error"),a.disabled&&e.push("opacity-60","cursor-not-allowed"),e.join(" ")}),C=l(()=>{const e=["fieldset-legend","font-semibold","text-base-content"];return a.size==="sm"?e.push("text-sm","px-2"):a.size==="lg"?e.push("text-lg","px-3"):e.push("text-base","px-2"),a.required&&e.push('after:content-["*"]',"after:text-error","after:ml-1"),a.error&&e.push("text-error"),e.join(" ")}),w=l(()=>{const e=["fieldset-content"];return a.size==="sm"?e.push("space-y-2"):a.size==="lg"?e.push("space-y-4"):e.push("space-y-3"),e.join(" ")}),N=l(()=>{const e=["fieldset-description","opacity-70"];return a.size==="sm"?e.push("text-xs","mt-1"):a.size==="lg"?e.push("text-base","mt-3"):e.push("text-sm","mt-2"),e.join(" ")}),E=l(()=>{const e=["fieldset-error","text-error"];return a.size==="sm"?e.push("text-xs","mt-1"):a.size==="lg"?e.push("text-base","mt-3"):e.push("text-sm","mt-2"),e.join(" ")});return(e,q)=>(i(),d("fieldset",{class:n(z.value),disabled:e.disabled},[e.legend||e.$slots.legend?(i(),d("legend",{key:0,class:n(C.value)},[o(e.$slots,"legend",{},()=>[I(x(e.legend),1)],!0)],2)):y("",!0),D("div",{class:n(w.value)},[o(e.$slots,"default",{},void 0,!0)],2),e.description||e.$slots.description?(i(),d("div",{key:1,class:n(N.value)},[o(e.$slots,"description",{},()=>[I(x(e.description),1)],!0)],2)):y("",!0),e.error||e.$slots.error?(i(),d("div",{key:2,class:n(E.value)},[o(e.$slots,"error",{},()=>[I(x(e.error),1)],!0)],2)):y("",!0)],10,j))}}),s=M(S,[["__scopeId","data-v-5631715a"]]);S.__docgenInfo={exportName:"default",displayName:"Fieldset",description:"",tags:{},props:[{name:"legend",required:!1,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"outlined"'},{name:'"filled"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"legend"},{name:"default"},{name:"description"},{name:"error"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Fieldset.vue"]};const J={title:"Data Input/Fieldset",component:s,parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["default","bordered","outlined","filled"]},size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}}}},p={args:{legend:"Personal Information",description:"Please provide your basic details"},render:r=>({components:{Fieldset:s,Input:t},setup(){return{args:r}},template:`
      <Fieldset v-bind="args">
        <div class="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            placeholder="John"
            variant="bordered"
          />
          
          <Input
            label="Last Name"
            placeholder="Doe"
            variant="bordered"
          />
          
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            variant="bordered"
            class="col-span-2"
          />
        </div>
      </Fieldset>
    `})},c={args:{legend:"Contact Information",variant:"bordered"},render:r=>({components:{Fieldset:s,Input:t},setup(){return{args:r}},template:`
      <Fieldset v-bind="args">
        <Input
          label="Phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          variant="bordered"
        />
      </Fieldset>
    `})},u={args:{legend:"Preferences",variant:"outlined"},render:r=>({components:{Fieldset:s},setup(){return{args:r}},template:`
      <Fieldset v-bind="args">
        <div class="space-y-2">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="checkbox" />
            <span>Email notifications</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="checkbox" />
            <span>SMS notifications</span>
          </label>
        </div>
      </Fieldset>
    `})},m={args:{legend:"Settings",variant:"filled"},render:r=>({components:{Fieldset:s,Select:k},setup(){return{args:r}},template:`
      <Fieldset v-bind="args">
        <Select
          label="Theme"
          :options="[
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'Auto', value: 'auto' }
          ]"
          variant="bordered"
        />
      </Fieldset>
    `})},b={args:{legend:"Quick Info",size:"sm",variant:"bordered"},render:r=>({components:{Fieldset:s,Input:t},setup(){return{args:r}},template:`
      <Fieldset v-bind="args">
        <Input
          label="Name"
          placeholder="Enter name"
          size="sm"
          variant="bordered"
        />
      </Fieldset>
    `})},g={args:{legend:"Detailed Information",size:"lg",variant:"bordered"},render:r=>({components:{Fieldset:s,Input:t},setup(){return{args:r}},template:`
      <Fieldset v-bind="args">
        <Input
          label="Name"
          placeholder="Enter name"
          size="lg"
          variant="bordered"
        />
      </Fieldset>
    `})},v={args:{legend:"Payment Information",variant:"bordered",error:"Please correct the errors below",required:!0},render:r=>({components:{Fieldset:s,Input:t},setup(){return{args:r}},template:`
      <Fieldset v-bind="args">
        <div class="grid grid-cols-2 gap-4">
          <Input
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            variant="bordered"
            errorMessage="Invalid card number"
          />
          
          <Input
            label="Expiry Date"
            placeholder="MM/YY"
            variant="bordered"
          />
        </div>
      </Fieldset>
    `})},h={args:{legend:"Account Settings",variant:"bordered",disabled:!0,description:"These settings are currently locked"},render:r=>({components:{Fieldset:s,Input:t,Select:k},setup(){return{args:r}},template:`
      <Fieldset v-bind="args">
        <div class="space-y-4">
          <Input
            label="Username"
            :model-value="'john_doe'"
            variant="bordered"
            disabled
          />
          
          <Select
            label="Role"
            :options="[
              { label: 'Administrator', value: 'admin' },
              { label: 'User', value: 'user' },
              { label: 'Guest', value: 'guest' }
            ]"
            :model-value="'admin'"
            variant="bordered"
            disabled
          />
        </div>
      </Fieldset>
    `})},f={args:{variant:"bordered"},render:r=>({components:{Fieldset:s,Input:t},setup(){return{args:r}},template:`
      <Fieldset v-bind="args">
        <template #legend>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="font-semibold">User Account</span>
            <span class="badge badge-primary badge-sm">Required</span>
          </div>
        </template>
        
        <div class="space-y-4">
          <Input
            label="Username"
            placeholder="Enter username"
            variant="bordered"
          />
          
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            variant="bordered"
          />
        </div>
        
        <template #description>
          <div class="flex items-start gap-2">
            <svg class="w-4 h-4 text-info mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm opacity-70">
              Your password should be at least 8 characters long and include both letters and numbers.
            </span>
          </div>
        </template>
      </Fieldset>
    `})},F={args:{legend:"User Profile",variant:"bordered",size:"lg"},render:r=>({components:{Fieldset:s,Input:t},setup(){return{args:r}},template:`
      <div class="max-w-2xl">
        <Fieldset v-bind="args">
          <Fieldset legend="Personal Details" variant="outlined" size="md">
            <div class="grid grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="John"
                variant="bordered"
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                variant="bordered"
              />
            </div>
          </Fieldset>
          
          <Fieldset legend="Contact Information" variant="outlined" size="md">
            <div class="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                variant="bordered"
              />
              <Input
                label="Phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                variant="bordered"
              />
            </div>
          </Fieldset>
        </Fieldset>
      </div>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Personal Information',
    description: 'Please provide your basic details'
  },
  render: args => ({
    components: {
      Fieldset,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Fieldset v-bind="args">
        <div class="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            placeholder="John"
            variant="bordered"
          />
          
          <Input
            label="Last Name"
            placeholder="Doe"
            variant="bordered"
          />
          
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            variant="bordered"
            class="col-span-2"
          />
        </div>
      </Fieldset>
    \`
  })
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Contact Information',
    variant: 'bordered'
  },
  render: args => ({
    components: {
      Fieldset,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Fieldset v-bind="args">
        <Input
          label="Phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          variant="bordered"
        />
      </Fieldset>
    \`
  })
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Preferences',
    variant: 'outlined'
  },
  render: args => ({
    components: {
      Fieldset
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Fieldset v-bind="args">
        <div class="space-y-2">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="checkbox" />
            <span>Email notifications</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="checkbox" />
            <span>SMS notifications</span>
          </label>
        </div>
      </Fieldset>
    \`
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Settings',
    variant: 'filled'
  },
  render: args => ({
    components: {
      Fieldset,
      Select
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Fieldset v-bind="args">
        <Select
          label="Theme"
          :options="[
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'Auto', value: 'auto' }
          ]"
          variant="bordered"
        />
      </Fieldset>
    \`
  })
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Quick Info',
    size: 'sm',
    variant: 'bordered'
  },
  render: args => ({
    components: {
      Fieldset,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Fieldset v-bind="args">
        <Input
          label="Name"
          placeholder="Enter name"
          size="sm"
          variant="bordered"
        />
      </Fieldset>
    \`
  })
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Detailed Information',
    size: 'lg',
    variant: 'bordered'
  },
  render: args => ({
    components: {
      Fieldset,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Fieldset v-bind="args">
        <Input
          label="Name"
          placeholder="Enter name"
          size="lg"
          variant="bordered"
        />
      </Fieldset>
    \`
  })
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Payment Information',
    variant: 'bordered',
    error: 'Please correct the errors below',
    required: true
  },
  render: args => ({
    components: {
      Fieldset,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Fieldset v-bind="args">
        <div class="grid grid-cols-2 gap-4">
          <Input
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            variant="bordered"
            errorMessage="Invalid card number"
          />
          
          <Input
            label="Expiry Date"
            placeholder="MM/YY"
            variant="bordered"
          />
        </div>
      </Fieldset>
    \`
  })
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Account Settings',
    variant: 'bordered',
    disabled: true,
    description: 'These settings are currently locked'
  },
  render: args => ({
    components: {
      Fieldset,
      Input,
      Select
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Fieldset v-bind="args">
        <div class="space-y-4">
          <Input
            label="Username"
            :model-value="'john_doe'"
            variant="bordered"
            disabled
          />
          
          <Select
            label="Role"
            :options="[
              { label: 'Administrator', value: 'admin' },
              { label: 'User', value: 'user' },
              { label: 'Guest', value: 'guest' }
            ]"
            :model-value="'admin'"
            variant="bordered"
            disabled
          />
        </div>
      </Fieldset>
    \`
  })
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'bordered'
  },
  render: args => ({
    components: {
      Fieldset,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Fieldset v-bind="args">
        <template #legend>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span class="font-semibold">User Account</span>
            <span class="badge badge-primary badge-sm">Required</span>
          </div>
        </template>
        
        <div class="space-y-4">
          <Input
            label="Username"
            placeholder="Enter username"
            variant="bordered"
          />
          
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            variant="bordered"
          />
        </div>
        
        <template #description>
          <div class="flex items-start gap-2">
            <svg class="w-4 h-4 text-info mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm opacity-70">
              Your password should be at least 8 characters long and include both letters and numbers.
            </span>
          </div>
        </template>
      </Fieldset>
    \`
  })
}`,...f.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'User Profile',
    variant: 'bordered',
    size: 'lg'
  },
  render: args => ({
    components: {
      Fieldset,
      Input
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="max-w-2xl">
        <Fieldset v-bind="args">
          <Fieldset legend="Personal Details" variant="outlined" size="md">
            <div class="grid grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="John"
                variant="bordered"
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                variant="bordered"
              />
            </div>
          </Fieldset>
          
          <Fieldset legend="Contact Information" variant="outlined" size="md">
            <div class="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                variant="bordered"
              />
              <Input
                label="Phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                variant="bordered"
              />
            </div>
          </Fieldset>
        </Fieldset>
      </div>
    \`
  })
}`,...F.parameters?.docs?.source}}};const R=["Default","Bordered","Outlined","Filled","Small","Large","WithError","Disabled","WithCustomSlots","Nested"];export{c as Bordered,p as Default,h as Disabled,m as Filled,g as Large,F as Nested,u as Outlined,b as Small,f as WithCustomSlots,v as WithError,R as __namedExportsOrder,J as default};
