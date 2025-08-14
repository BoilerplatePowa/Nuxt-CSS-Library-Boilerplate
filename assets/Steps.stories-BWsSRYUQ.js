import{d as _,c as B,a as n,o as a,e as b,F as D,f as V,n as g,b as j,m as h,t as x}from"./iframe-_o9WQugg.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const N=["data-content"],O={class:"step-content"},T={key:0,class:"text-center"},q={key:0,class:"font-medium"},I={key:1,class:"text-sm opacity-70"},y=_({__name:"Steps",props:{steps:{default:()=>[]},currentStep:{default:0},variant:{default:"default"},size:{default:"md"},showNumbers:{type:Boolean,default:!0},color:{default:"primary"}},setup(k){const s=k,w=B(()=>{const e=["steps"];return s.variant==="vertical"?e.push("steps-vertical"):e.push("steps-horizontal"),s.size==="xs"?e.push("steps-xs"):s.size==="sm"?e.push("steps-sm"):s.size==="lg"&&e.push("steps-lg"),e.join(" ")}),A=(e,r)=>{const t=["step"];return(f(r)||l(r))&&(s.color==="primary"?t.push("step-primary"):s.color==="secondary"?t.push("step-secondary"):s.color==="accent"?t.push("step-accent"):s.color==="info"?t.push("step-info"):s.color==="success"?t.push("step-success"):s.color==="warning"?t.push("step-warning"):s.color==="error"&&t.push("step-error")),e.disabled?t.push("opacity-50","cursor-not-allowed"):!f(r)&&!l(r)&&t.push("cursor-pointer"),t.join(" ")},P=(e,r)=>e.icon?e.icon:e.completed||l(r)?"✓":s.showNumbers?(r+1).toString():"",M=(e,r)=>e.value?.toString()||e.title||r.toString(),f=e=>e===s.currentStep,l=e=>e<s.currentStep||s.steps[e]?.completed===!0;return(e,r)=>(a(),n("ul",{class:g(w.value)},[b(e.$slots,"default",{},()=>[(a(!0),n(D,null,V(e.steps,(t,i)=>(a(),n("li",{key:M(t,i),class:g(A(t,i)),"data-content":P(t,i)},[j("div",O,[t.title||t.description?(a(),n("div",T,[t.title?(a(),n("div",q,x(t.title),1)):h("",!0),t.description?(a(),n("div",I,x(t.description),1)):h("",!0)])):h("",!0),b(e.$slots,`step-${i}`,{step:t,index:i,isActive:f(i),isCompleted:l(i)},void 0,!0)])],10,N))),128))],!0)],2))}}),o=z(y,[["__scopeId","data-v-d74e114b"]]);y.__docgenInfo={exportName:"default",displayName:"Steps",description:"",tags:{},props:[{name:"steps",required:!1,type:{name:"Array",elements:[{name:"Step"}]},defaultValue:{func:!1,value:"() => []"}},{name:"currentStep",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"showNumbers",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"color",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'primary'"}}],slots:[{name:"default"},{name:"`step-${index}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"step",title:"binding"},{name:"index",title:"binding"},{name:"isActive",title:"binding"},{name:"isCompleted",title:"binding"}]}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Navigation/Steps.vue"]};const F={title:"Navigation/Steps",component:o,parameters:{layout:"padded"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},variant:{control:{type:"select"},options:["default","primary","secondary","accent"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},currentStep:{control:{type:"number"}}}},C=[{title:"Order",description:"Place your order"},{title:"Payment",description:"Complete payment"},{title:"Shipping",description:"Package shipped"},{title:"Delivery",description:"Order delivered"}],L=[{title:"Account Setup",description:"Create your account with basic information",value:"setup"},{title:"Profile Details",description:"Add your personal and professional details",value:"profile"},{title:"Verification",description:"Verify your email and phone number",value:"verify"},{title:"Preferences",description:"Set your communication and privacy preferences",value:"preferences"},{title:"Complete",description:"Your account is ready to use",value:"complete"}],p={args:{steps:C,currentStep:1}},c={args:{steps:C,currentStep:2,orientation:"vertical"}},d={render:()=>({components:{Steps:o},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            variant="default"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Primary</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            variant="primary"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Secondary</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            variant="secondary"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Accent</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            variant="accent"
          />
        </div>
      </div>
    `})},u={render:()=>({components:{Steps:o},data(){return{currentStep:1,steps:[{title:"Cart",description:"Review items"},{title:"Shipping",description:"Delivery details"},{title:"Payment",description:"Billing information"},{title:"Confirmation",description:"Order complete"}]}},template:`
      <div class="bg-base-200 p-8 rounded-lg">
        <h3 class="text-xl font-bold mb-6">Checkout Process</h3>
        
        <Steps 
          :steps="steps"
          :current-step="currentStep"
          variant="primary"
          class="mb-8"
        />
        
        <div class="bg-base-100 p-6 rounded-lg">
          <div v-if="currentStep === 0">
            <h4 class="text-lg font-bold mb-4">Shopping Cart</h4>
            <p>Review your items and proceed to shipping.</p>
          </div>
          
          <div v-else-if="currentStep === 1">
            <h4 class="text-lg font-bold mb-4">Shipping Information</h4>
            <p>Enter your delivery address and shipping preferences.</p>
          </div>
          
          <div v-else-if="currentStep === 2">
            <h4 class="text-lg font-bold mb-4">Payment Details</h4>
            <p>Provide billing information and payment method.</p>
          </div>
          
          <div v-else-if="currentStep === 3">
            <h4 class="text-lg font-bold mb-4">Order Confirmation</h4>
            <p>Thank you! Your order has been placed successfully.</p>
          </div>
          
          <div class="flex gap-4 mt-6">
            <button 
              @click="currentStep = Math.max(0, currentStep - 1)"
              :disabled="currentStep === 0"
              class="btn btn-outline"
            >
              Previous
            </button>
            <button 
              @click="currentStep = Math.min(3, currentStep + 1)"
              :disabled="currentStep === 3"
              class="btn btn-primary"
            >
              {{ currentStep === 3 ? 'Complete' : 'Next' }}
            </button>
          </div>
        </div>
      </div>
    `})},m={render:()=>({components:{Steps:o},data(){return{currentStep:2,steps:L}},template:`
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold">Account Setup</h3>
          <p class="opacity-70">Complete these steps to set up your account</p>
        </div>
        
        <Steps 
          :steps="steps"
          :current-step="currentStep"
          orientation="vertical"
          variant="accent"
          size="lg"
          class="max-w-md mx-auto"
        />
        
        <div class="text-center mt-8">
          <div class="flex gap-4 justify-center">
            <button 
              @click="currentStep = Math.max(0, currentStep - 1)"
              :disabled="currentStep === 0"
              class="btn btn-outline"
            >
              Back
            </button>
            <button 
              @click="currentStep = Math.min(steps.length - 1, currentStep + 1)"
              :disabled="currentStep === steps.length - 1"
              class="btn btn-primary"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    `})},v={render:()=>({components:{Steps:o},data(){return{orderStep:2,orderSteps:[{title:"Ordered",description:"Order placed"},{title:"Processing",description:"Being prepared"},{title:"Shipped",description:"In transit"},{title:"Delivered",description:"At destination"}]}},template:`
      <div class="bg-base-100 shadow-xl rounded-lg p-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-xl font-bold">Order #12345</h3>
            <p class="text-sm opacity-70">Tracking your order status</p>
          </div>
          <div class="badge badge-primary">In Transit</div>
        </div>
        
        <Steps 
          :steps="orderSteps"
          :current-step="orderStep"
          variant="primary"
        />
        
        <div class="mt-8 p-4 bg-base-200 rounded-lg">
          <h4 class="font-bold mb-2">Current Status: {{ orderSteps[orderStep].title }}</h4>
          <p class="text-sm">{{ orderSteps[orderStep].description }}</p>
          <p class="text-xs opacity-70 mt-2">Last updated: 2 hours ago</p>
        </div>
      </div>
    `})},S={render:()=>({components:{Steps:o},template:`
      <Steps 
        :steps="[
          { title: 'Planning' },
          { title: 'Development' },
          { title: 'Testing' },
          { title: 'Deployment' }
        ]"
        :current-step="1"
        variant="secondary"
      >
        <template #step-0="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <svg class="w-6 h-6 mx-auto" :class="{ 'text-primary': isActive, 'text-success': isCompleted }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Define requirements</div>
          </div>
        </template>
        
        <template #step-1="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <svg class="w-6 h-6 mx-auto" :class="{ 'text-primary': isActive, 'text-success': isCompleted }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Write the code</div>
          </div>
        </template>
        
        <template #step-2="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <svg class="w-6 h-6 mx-auto" :class="{ 'text-primary': isActive, 'text-success': isCompleted }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Quality assurance</div>
          </div>
        </template>
        
        <template #step-3="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <svg class="w-6 h-6 mx-auto" :class="{ 'text-primary': isActive, 'text-success': isCompleted }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Go live</div>
          </div>
        </template>
      </Steps>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    currentStep: 1
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    currentStep: 2,
    orientation: 'vertical'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Steps
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            variant="default"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Primary</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            variant="primary"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Secondary</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            variant="secondary"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Accent</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            variant="accent"
          />
        </div>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Steps
    },
    data() {
      return {
        currentStep: 1,
        steps: [{
          title: 'Cart',
          description: 'Review items'
        }, {
          title: 'Shipping',
          description: 'Delivery details'
        }, {
          title: 'Payment',
          description: 'Billing information'
        }, {
          title: 'Confirmation',
          description: 'Order complete'
        }]
      };
    },
    template: \`
      <div class="bg-base-200 p-8 rounded-lg">
        <h3 class="text-xl font-bold mb-6">Checkout Process</h3>
        
        <Steps 
          :steps="steps"
          :current-step="currentStep"
          variant="primary"
          class="mb-8"
        />
        
        <div class="bg-base-100 p-6 rounded-lg">
          <div v-if="currentStep === 0">
            <h4 class="text-lg font-bold mb-4">Shopping Cart</h4>
            <p>Review your items and proceed to shipping.</p>
          </div>
          
          <div v-else-if="currentStep === 1">
            <h4 class="text-lg font-bold mb-4">Shipping Information</h4>
            <p>Enter your delivery address and shipping preferences.</p>
          </div>
          
          <div v-else-if="currentStep === 2">
            <h4 class="text-lg font-bold mb-4">Payment Details</h4>
            <p>Provide billing information and payment method.</p>
          </div>
          
          <div v-else-if="currentStep === 3">
            <h4 class="text-lg font-bold mb-4">Order Confirmation</h4>
            <p>Thank you! Your order has been placed successfully.</p>
          </div>
          
          <div class="flex gap-4 mt-6">
            <button 
              @click="currentStep = Math.max(0, currentStep - 1)"
              :disabled="currentStep === 0"
              class="btn btn-outline"
            >
              Previous
            </button>
            <button 
              @click="currentStep = Math.min(3, currentStep + 1)"
              :disabled="currentStep === 3"
              class="btn btn-primary"
            >
              {{ currentStep === 3 ? 'Complete' : 'Next' }}
            </button>
          </div>
        </div>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Steps
    },
    data() {
      return {
        currentStep: 2,
        steps: detailedSteps
      };
    },
    template: \`
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold">Account Setup</h3>
          <p class="opacity-70">Complete these steps to set up your account</p>
        </div>
        
        <Steps 
          :steps="steps"
          :current-step="currentStep"
          orientation="vertical"
          variant="accent"
          size="lg"
          class="max-w-md mx-auto"
        />
        
        <div class="text-center mt-8">
          <div class="flex gap-4 justify-center">
            <button 
              @click="currentStep = Math.max(0, currentStep - 1)"
              :disabled="currentStep === 0"
              class="btn btn-outline"
            >
              Back
            </button>
            <button 
              @click="currentStep = Math.min(steps.length - 1, currentStep + 1)"
              :disabled="currentStep === steps.length - 1"
              class="btn btn-primary"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Steps
    },
    data() {
      return {
        orderStep: 2,
        orderSteps: [{
          title: 'Ordered',
          description: 'Order placed'
        }, {
          title: 'Processing',
          description: 'Being prepared'
        }, {
          title: 'Shipped',
          description: 'In transit'
        }, {
          title: 'Delivered',
          description: 'At destination'
        }]
      };
    },
    template: \`
      <div class="bg-base-100 shadow-xl rounded-lg p-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-xl font-bold">Order #12345</h3>
            <p class="text-sm opacity-70">Tracking your order status</p>
          </div>
          <div class="badge badge-primary">In Transit</div>
        </div>
        
        <Steps 
          :steps="orderSteps"
          :current-step="orderStep"
          variant="primary"
        />
        
        <div class="mt-8 p-4 bg-base-200 rounded-lg">
          <h4 class="font-bold mb-2">Current Status: {{ orderSteps[orderStep].title }}</h4>
          <p class="text-sm">{{ orderSteps[orderStep].description }}</p>
          <p class="text-xs opacity-70 mt-2">Last updated: 2 hours ago</p>
        </div>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Steps
    },
    template: \`
      <Steps 
        :steps="[
          { title: 'Planning' },
          { title: 'Development' },
          { title: 'Testing' },
          { title: 'Deployment' }
        ]"
        :current-step="1"
        variant="secondary"
      >
        <template #step-0="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <svg class="w-6 h-6 mx-auto" :class="{ 'text-primary': isActive, 'text-success': isCompleted }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Define requirements</div>
          </div>
        </template>
        
        <template #step-1="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <svg class="w-6 h-6 mx-auto" :class="{ 'text-primary': isActive, 'text-success': isCompleted }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Write the code</div>
          </div>
        </template>
        
        <template #step-2="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <svg class="w-6 h-6 mx-auto" :class="{ 'text-primary': isActive, 'text-success': isCompleted }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Quality assurance</div>
          </div>
        </template>
        
        <template #step-3="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <svg class="w-6 h-6 mx-auto" :class="{ 'text-primary': isActive, 'text-success': isCompleted }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Go live</div>
          </div>
        </template>
      </Steps>
    \`
  })
}`,...S.parameters?.docs?.source}}};const Y=["Default","Vertical","Variants","CheckoutProcess","AccountSetup","ProgressTracking","CustomContent"];export{m as AccountSetup,u as CheckoutProcess,S as CustomContent,p as Default,v as ProgressTracking,d as Variants,c as Vertical,Y as __namedExportsOrder,F as default};
