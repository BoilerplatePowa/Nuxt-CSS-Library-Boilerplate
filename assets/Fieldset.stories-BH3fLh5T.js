import{d as E,c as a,a as n,m as f,b as S,n as t,e as r,o as i,q as h,t as x}from"./iframe-B1LxmkNN.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const C=["disabled"],g=E({__name:"Fieldset",props:{legend:{},description:{},error:{},disabled:{type:Boolean,default:!1},variant:{default:"default"},size:{default:"md"},required:{type:Boolean,default:!1}},setup(v){const s=v,y=a(()=>{const e=["fieldset"];return s.variant==="bordered"?e.push("border-2","border-base-300","rounded-lg"):s.variant==="outlined"?e.push("border","border-base-300","rounded-md"):s.variant==="filled"&&e.push("bg-base-200","border","border-base-300","rounded-md"),s.size==="sm"?e.push("p-3"):s.size==="lg"?e.push("p-6"):e.push("p-4"),s.error&&e.push("border-error"),s.disabled&&e.push("opacity-60","cursor-not-allowed"),e.join(" ")}),F=a(()=>{const e=["fieldset-legend","font-semibold","text-base-content"];return s.size==="sm"?e.push("text-sm","px-2"):s.size==="lg"?e.push("text-lg","px-3"):e.push("text-base","px-2"),s.required&&e.push('after:content-["*"]',"after:text-error","after:ml-1"),s.error&&e.push("text-error"),e.join(" ")}),k=a(()=>{const e=["fieldset-content"];return s.size==="sm"?e.push("space-y-2"):s.size==="lg"?e.push("space-y-4"):e.push("space-y-3"),e.join(" ")}),w=a(()=>{const e=["fieldset-description","opacity-70"];return s.size==="sm"?e.push("text-xs","mt-1"):s.size==="lg"?e.push("text-base","mt-3"):e.push("text-sm","mt-2"),e.join(" ")}),D=a(()=>{const e=["fieldset-error","text-error"];return s.size==="sm"?e.push("text-xs","mt-1"):s.size==="lg"?e.push("text-base","mt-3"):e.push("text-sm","mt-2"),e.join(" ")});return(e,N)=>(i(),n("fieldset",{class:t(y.value),disabled:e.disabled},[e.legend||e.$slots.legend?(i(),n("legend",{key:0,class:t(F.value)},[r(e.$slots,"legend",{},()=>[h(x(e.legend),1)],!0)],2)):f("",!0),S("div",{class:t(k.value)},[r(e.$slots,"default",{},void 0,!0)],2),e.description||e.$slots.description?(i(),n("div",{key:1,class:t(w.value)},[r(e.$slots,"description",{},()=>[h(x(e.description),1)],!0)],2)):f("",!0),e.error||e.$slots.error?(i(),n("div",{key:2,class:t(D.value)},[r(e.$slots,"error",{},()=>[h(x(e.error),1)],!0)],2)):f("",!0)],10,C))}}),l=z(g,[["__scopeId","data-v-5631715a"]]);g.__docgenInfo={exportName:"default",displayName:"Fieldset",description:"",tags:{},props:[{name:"legend",required:!1,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"outlined"'},{name:'"filled"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"legend"},{name:"default"},{name:"description"},{name:"error"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Fieldset.vue"]};const q={title:"DataInput/Fieldset",component:l,parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["default","bordered","outlined","filled"]},size:{control:{type:"select"},options:["sm","md","lg"]},disabled:{control:{type:"boolean"}},required:{control:{type:"boolean"}}}},o={args:{legend:"Personal Information",description:"Please provide your basic details"},render:v=>({components:{Fieldset:l},setup(){return{args:v}},template:`
      <Fieldset v-bind="args">
        <div class="grid grid-cols-2 gap-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">First Name</span>
            </label>
            <input type="text" class="input input-bordered" placeholder="John" />
          </div>
          
          <div class="form-control">
            <label class="label">
              <span class="label-text">Last Name</span>
            </label>
            <input type="text" class="input input-bordered" placeholder="Doe" />
          </div>
          
          <div class="form-control col-span-2">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" class="input input-bordered" placeholder="john@example.com" />
          </div>
        </div>
      </Fieldset>
    `})},d={render:()=>({components:{Fieldset:l},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <Fieldset legend="Contact Information">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input type="tel" class="input input-bordered" placeholder="+1 (555) 123-4567" />
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Bordered</h3>
          <Fieldset legend="Address" variant="bordered">
            <div class="grid grid-cols-2 gap-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Street</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="123 Main St" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">City</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="New York" />
              </div>
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Outlined</h3>
          <Fieldset legend="Preferences" variant="outlined">
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
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Filled</h3>
          <Fieldset legend="Settings" variant="filled">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Theme</span>
              </label>
              <select class="select select-bordered">
                <option>Light</option>
                <option>Dark</option>
                <option>Auto</option>
              </select>
            </div>
          </Fieldset>
        </div>
      </div>
    `})},c={render:()=>({components:{Fieldset:l},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold mb-4">Small</h3>
          <Fieldset legend="Quick Info" size="sm" variant="bordered">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" class="input input-bordered input-sm" placeholder="Enter name" />
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Medium (Default)</h3>
          <Fieldset legend="Standard Form" size="md" variant="bordered">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" class="input input-bordered" placeholder="Enter name" />
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Large</h3>
          <Fieldset legend="Detailed Information" size="lg" variant="bordered">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" class="input input-bordered input-lg" placeholder="Enter name" />
            </div>
          </Fieldset>
        </div>
      </div>
    `})},p={render:()=>({components:{Fieldset:l},data(){return{hasError:!0}},template:`
      <div class="space-y-6">
        <Fieldset 
          legend="Payment Information" 
          variant="bordered"
          :error="hasError ? 'Please correct the errors below' : ''"
          required
        >
          <div class="grid grid-cols-2 gap-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Card Number</span>
              </label>
              <input type="text" class="input input-bordered input-error" placeholder="1234 5678 9012 3456" />
              <label class="label">
                <span class="label-text-alt text-error">Invalid card number</span>
              </label>
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Expiry Date</span>
              </label>
              <input type="text" class="input input-bordered" placeholder="MM/YY" />
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">CVV</span>
              </label>
              <input type="text" class="input input-bordered input-error" placeholder="123" />
              <label class="label">
                <span class="label-text-alt text-error">Required field</span>
              </label>
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Cardholder Name</span>
              </label>
              <input type="text" class="input input-bordered" placeholder="John Doe" />
            </div>
          </div>
        </Fieldset>
        
        <div class="flex gap-2">
          <button 
            class="btn btn-primary" 
            @click="hasError = false"
            v-if="hasError"
          >
            Fix Errors
          </button>
          <button 
            class="btn btn-outline" 
            @click="hasError = true"
            v-else
          >
            Show Errors
          </button>
        </div>
      </div>
    `})},b={render:()=>({components:{Fieldset:l},data(){return{isDisabled:!0}},template:`
      <div class="space-y-6">
        <Fieldset 
          legend="Account Settings" 
          variant="bordered"
          :disabled="isDisabled"
          description="These settings are currently locked"
        >
          <div class="space-y-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input type="text" class="input input-bordered" value="john_doe" />
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Role</span>
              </label>
              <select class="select select-bordered">
                <option selected>Administrator</option>
                <option>User</option>
                <option>Guest</option>
              </select>
            </div>
            
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox" checked />
                <span>Email notifications</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox" />
                <span>SMS notifications</span>
              </label>
            </div>
          </div>
        </Fieldset>
        
        <button 
          class="btn btn-primary" 
          @click="isDisabled = !isDisabled"
        >
          {{ isDisabled ? 'Enable' : 'Disable' }} Fieldset
        </button>
      </div>
    `})},u={render:()=>({components:{Fieldset:l},template:`
      <div class="max-w-2xl">
        <Fieldset legend="User Profile" variant="bordered" size="lg">
          <Fieldset legend="Personal Details" variant="outlined" size="md">
            <div class="grid grid-cols-2 gap-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">First Name</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="John" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Last Name</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="Doe" />
              </div>
            </div>
          </Fieldset>
          
          <Fieldset legend="Contact Information" variant="outlined" size="md">
            <div class="space-y-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" class="input input-bordered" placeholder="john@example.com" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input type="tel" class="input input-bordered" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
          </Fieldset>
          
          <Fieldset legend="Preferences" variant="filled" size="sm">
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-sm" />
                <span class="text-sm">Newsletter subscription</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-sm" />
                <span class="text-sm">Marketing emails</span>
              </label>
            </div>
          </Fieldset>
        </Fieldset>
      </div>
    `})},m={render:()=>({components:{Fieldset:l},template:`
      <div class="space-y-6">
        <Fieldset variant="bordered">
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
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input type="text" class="input input-bordered" placeholder="Enter username" />
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="password" class="input input-bordered" placeholder="Enter password" />
            </div>
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
        
        <Fieldset variant="outlined">
          <template #legend>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span class="font-semibold text-error">Danger Zone</span>
            </div>
          </template>
          
          <div class="space-y-4">
            <button class="btn btn-error btn-outline">Delete Account</button>
            <button class="btn btn-warning btn-outline">Reset All Data</button>
          </div>
          
          <template #error>
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-error mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="text-sm">
                These actions cannot be undone. Please proceed with caution.
              </span>
            </div>
          </template>
        </Fieldset>
      </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    legend: 'Personal Information',
    description: 'Please provide your basic details'
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
        <div class="grid grid-cols-2 gap-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">First Name</span>
            </label>
            <input type="text" class="input input-bordered" placeholder="John" />
          </div>
          
          <div class="form-control">
            <label class="label">
              <span class="label-text">Last Name</span>
            </label>
            <input type="text" class="input input-bordered" placeholder="Doe" />
          </div>
          
          <div class="form-control col-span-2">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" class="input input-bordered" placeholder="john@example.com" />
          </div>
        </div>
      </Fieldset>
    \`
  })
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Fieldset
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <Fieldset legend="Contact Information">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input type="tel" class="input input-bordered" placeholder="+1 (555) 123-4567" />
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Bordered</h3>
          <Fieldset legend="Address" variant="bordered">
            <div class="grid grid-cols-2 gap-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Street</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="123 Main St" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">City</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="New York" />
              </div>
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Outlined</h3>
          <Fieldset legend="Preferences" variant="outlined">
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
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Filled</h3>
          <Fieldset legend="Settings" variant="filled">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Theme</span>
              </label>
              <select class="select select-bordered">
                <option>Light</option>
                <option>Dark</option>
                <option>Auto</option>
              </select>
            </div>
          </Fieldset>
        </div>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Fieldset
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold mb-4">Small</h3>
          <Fieldset legend="Quick Info" size="sm" variant="bordered">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" class="input input-bordered input-sm" placeholder="Enter name" />
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Medium (Default)</h3>
          <Fieldset legend="Standard Form" size="md" variant="bordered">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" class="input input-bordered" placeholder="Enter name" />
            </div>
          </Fieldset>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Large</h3>
          <Fieldset legend="Detailed Information" size="lg" variant="bordered">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" class="input input-bordered input-lg" placeholder="Enter name" />
            </div>
          </Fieldset>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Fieldset
    },
    data() {
      return {
        hasError: true
      };
    },
    template: \`
      <div class="space-y-6">
        <Fieldset 
          legend="Payment Information" 
          variant="bordered"
          :error="hasError ? 'Please correct the errors below' : ''"
          required
        >
          <div class="grid grid-cols-2 gap-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Card Number</span>
              </label>
              <input type="text" class="input input-bordered input-error" placeholder="1234 5678 9012 3456" />
              <label class="label">
                <span class="label-text-alt text-error">Invalid card number</span>
              </label>
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Expiry Date</span>
              </label>
              <input type="text" class="input input-bordered" placeholder="MM/YY" />
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">CVV</span>
              </label>
              <input type="text" class="input input-bordered input-error" placeholder="123" />
              <label class="label">
                <span class="label-text-alt text-error">Required field</span>
              </label>
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Cardholder Name</span>
              </label>
              <input type="text" class="input input-bordered" placeholder="John Doe" />
            </div>
          </div>
        </Fieldset>
        
        <div class="flex gap-2">
          <button 
            class="btn btn-primary" 
            @click="hasError = false"
            v-if="hasError"
          >
            Fix Errors
          </button>
          <button 
            class="btn btn-outline" 
            @click="hasError = true"
            v-else
          >
            Show Errors
          </button>
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Fieldset
    },
    data() {
      return {
        isDisabled: true
      };
    },
    template: \`
      <div class="space-y-6">
        <Fieldset 
          legend="Account Settings" 
          variant="bordered"
          :disabled="isDisabled"
          description="These settings are currently locked"
        >
          <div class="space-y-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input type="text" class="input input-bordered" value="john_doe" />
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Role</span>
              </label>
              <select class="select select-bordered">
                <option selected>Administrator</option>
                <option>User</option>
                <option>Guest</option>
              </select>
            </div>
            
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox" checked />
                <span>Email notifications</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox" />
                <span>SMS notifications</span>
              </label>
            </div>
          </div>
        </Fieldset>
        
        <button 
          class="btn btn-primary" 
          @click="isDisabled = !isDisabled"
        >
          {{ isDisabled ? 'Enable' : 'Disable' }} Fieldset
        </button>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Fieldset
    },
    template: \`
      <div class="max-w-2xl">
        <Fieldset legend="User Profile" variant="bordered" size="lg">
          <Fieldset legend="Personal Details" variant="outlined" size="md">
            <div class="grid grid-cols-2 gap-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">First Name</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="John" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Last Name</span>
                </label>
                <input type="text" class="input input-bordered" placeholder="Doe" />
              </div>
            </div>
          </Fieldset>
          
          <Fieldset legend="Contact Information" variant="outlined" size="md">
            <div class="space-y-4">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input type="email" class="input input-bordered" placeholder="john@example.com" />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input type="tel" class="input input-bordered" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
          </Fieldset>
          
          <Fieldset legend="Preferences" variant="filled" size="sm">
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-sm" />
                <span class="text-sm">Newsletter subscription</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-sm" />
                <span class="text-sm">Marketing emails</span>
              </label>
            </div>
          </Fieldset>
        </Fieldset>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Fieldset
    },
    template: \`
      <div class="space-y-6">
        <Fieldset variant="bordered">
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
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input type="text" class="input input-bordered" placeholder="Enter username" />
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="password" class="input input-bordered" placeholder="Enter password" />
            </div>
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
        
        <Fieldset variant="outlined">
          <template #legend>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span class="font-semibold text-error">Danger Zone</span>
            </div>
          </template>
          
          <div class="space-y-4">
            <button class="btn btn-error btn-outline">Delete Account</button>
            <button class="btn btn-warning btn-outline">Reset All Data</button>
          </div>
          
          <template #error>
            <div class="flex items-start gap-2">
              <svg class="w-4 h-4 text-error mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span class="text-sm">
                These actions cannot be undone. Please proceed with caution.
              </span>
            </div>
          </template>
        </Fieldset>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};const I=["Default","Variants","Sizes","WithErrors","Disabled","NestedFieldsets","CustomSlots"];export{m as CustomSlots,o as Default,b as Disabled,u as NestedFieldsets,c as Sizes,d as Variants,p as WithErrors,I as __namedExportsOrder,q as default};
