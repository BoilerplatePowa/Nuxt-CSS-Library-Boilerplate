import{r as i}from"./iframe-B8bctOEb.js";import{_ as n}from"./Steps-5qDr9XZg.js";import{_ as h}from"./Icon-CrPlXafV.js";import{_ as g}from"./Button-C7ds6drX.js";import{C as b}from"./Card-BhjME2fK.js";import{_ as x}from"./Avatar-DJGhZmFF.js";import"./preload-helper-D9Z9MdNV.js";import"./x-D8wxfldR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Badge-BxqxZgPe.js";import"./Status-C0hKYmW5.js";const O={title:"Navigation/Steps",component:n,parameters:{layout:"padded",docs:{description:{component:`
A flexible step indicator component for displaying multi-step processes and navigation.

## Features
- **Horizontal and vertical orientations** for different layouts
- **Multiple color variants** to match your design system
- **Interactive step navigation** with click handlers
- **Custom step content** with slots for advanced customization
- **Progress tracking** with current step highlighting
- **Accessible navigation** with proper ARIA attributes

## Usage
The Steps component is perfect for checkout processes, form wizards, onboarding flows, and any multi-step user journey.
        `}}},argTypes:{steps:{description:"Array of step configurations",control:{type:"object"}},currentStep:{description:"Current active step index (0-based)",control:{type:"number",min:0}},variant:{description:"Steps display variant",control:{type:"select"},options:["horizontal","vertical"]},color:{description:"Steps color theme",control:{type:"select"},options:["primary","secondary","accent","info","success","warning","error"]},showNumbers:{description:"Show step numbers instead of icons",control:{type:"boolean"}}},tags:["autodocs"]},y=[{title:"Order",description:"Place your order"},{title:"Payment",description:"Complete payment"},{title:"Shipping",description:"Package shipped"},{title:"Delivery",description:"Order delivered"}],k=[{title:"Account Setup",description:"Create your account with basic information",value:"setup",icon:"user"},{title:"Profile Details",description:"Add your personal and professional details",value:"profile",icon:"settings"},{title:"Verification",description:"Verify your email and phone number",value:"verify",icon:"check-circle"},{title:"Preferences",description:"Set your communication and privacy preferences",value:"preferences",icon:"heart"},{title:"Complete",description:"Your account is ready to use",value:"complete",icon:"check"}],C=[{title:"Cart",description:"Review items",icon:"shopping-cart"},{title:"Shipping",description:"Delivery details",icon:"map-pin"},{title:"Payment",description:"Billing information",icon:"credit-card"},{title:"Confirmation",description:"Order complete",icon:"check"}],w=[{title:"Ordered",description:"Order placed",icon:"package"},{title:"Processing",description:"Being prepared",icon:"settings"},{title:"Shipped",description:"In transit",icon:"truck"},{title:"Delivered",description:"At destination",icon:"home"}],c={args:{steps:y,currentStep:1,color:"primary",showNumbers:!0},render:e=>({components:{Steps:n,Button:g},setup(){const s=i(e.currentStep);return{args:e,currentStep:s,handleStepClick:t=>{s.value=t,console.log(`Step clicked: ${t}`)}}},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-bold mb-2">Order Process</h3>
          <p class="text-base-content/70">Track your order through each step</p>
        </div>
        
        <Steps 
          v-bind="args"
          :current-step="currentStep"
          @step-click="handleStepClick"
        />
        
        <div class="text-center">
          <div class="flex gap-2 justify-center">
            <Button 
              @click="currentStep = Math.max(0, currentStep - 1)"
              :disabled="currentStep === 0"
              variant="outline"
              size="sm"
            >
              Previous
            </Button>
            <Button 
              @click="currentStep = Math.min(args.steps.length - 1, currentStep + 1)"
              :disabled="currentStep === args.steps.length - 1"
              size="sm"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    `})},a={args:{steps:k,currentStep:2,variant:"vertical",color:"accent",showNumbers:!1},render:e=>({components:{Steps:n,Button:g},setup(){const s=i(e.currentStep);return{args:e,currentStep:s,handleStepClick:t=>{s.value=t,console.log(`Step clicked: ${t}`)}}},template:`
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold">Account Setup</h3>
          <p class="text-base-content/70">Complete these steps to set up your account</p>
        </div>
        
        <div class="flex gap-8">
          <div class="flex-1">
            <Steps 
              v-bind="args"
              :current-step="currentStep"
              @step-click="handleStepClick"
              class="max-w-md"
            />
          </div>
          
          <div class="flex-1">
            <Card>
              <div class="card-body">
                <h4 class="card-title">{{ args.steps[currentStep].title }}</h4>
                <p>{{ args.steps[currentStep].description }}</p>
                
                <div class="card-actions justify-end mt-4">
                  <Button 
                    @click="currentStep = Math.max(0, currentStep - 1)"
                    :disabled="currentStep === 0"
                    variant="outline"
                    size="sm"
                  >
                    Back
                  </Button>
                  <Button 
                    @click="currentStep = Math.min(args.steps.length - 1, currentStep + 1)"
                    :disabled="currentStep === args.steps.length - 1"
                    size="sm"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    `})},o={render:()=>({components:{Steps:n},template:`
      <div class="space-y-8">
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
            color="primary"
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
            color="secondary"
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
            color="accent"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Success</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            color="success"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Warning</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            color="warning"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Error</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            color="error"
          />
        </div>
      </div>
    `})},l={render:()=>({components:{Steps:n,Button:g,Card:b},setup(){const e=i(1);return{currentStep:e,steps:C,handleStepClick:t=>{e.value=t,console.log(`Step clicked: ${t}`)}}},template:`
      <div class="bg-base-200 p-8 rounded-lg">
        <h3 class="text-xl font-bold mb-6">Checkout Process</h3>
        
        <Steps 
          :steps="steps"
          :current-step="currentStep"
          color="primary"
          class="mb-8"
          @step-click="handleStepClick"
        />
        
        <Card>
          <div class="card-body">
            <div v-if="currentStep === 0">
              <h4 class="text-lg font-bold mb-4">Shopping Cart</h4>
              <p>Review your items and proceed to shipping.</p>
              <div class="bg-base-200 p-4 rounded-lg mt-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium">Product Name</span>
                  <span class="text-success font-semibold">$29.99</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-medium">Quantity</span>
                  <span>1</span>
                </div>
              </div>
            </div>
            
            <div v-else-if="currentStep === 1">
              <h4 class="text-lg font-bold mb-4">Shipping Information</h4>
              <p>Enter your delivery address and shipping preferences.</p>
              <div class="bg-base-200 p-4 rounded-lg mt-4">
                <p class="text-sm">Shipping address form would go here...</p>
              </div>
            </div>
            
            <div v-else-if="currentStep === 2">
              <h4 class="text-lg font-bold mb-4">Payment Details</h4>
              <p>Provide billing information and payment method.</p>
              <div class="bg-base-200 p-4 rounded-lg mt-4">
                <p class="text-sm">Payment form would go here...</p>
              </div>
            </div>
            
            <div v-else-if="currentStep === 3">
              <h4 class="text-lg font-bold mb-4">Order Confirmation</h4>
              <p>Thank you! Your order has been placed successfully.</p>
              <div class="bg-success/20 p-4 rounded-lg mt-4">
                <div class="flex items-center gap-2">
                  <Icon name="check-circle" class="text-success" />
                  <span class="font-medium">Order #12345 confirmed</span>
                </div>
              </div>
            </div>
            
            <div class="card-actions justify-end mt-6">
              <Button 
                @click="currentStep = Math.max(0, currentStep - 1)"
                :disabled="currentStep === 0"
                variant="outline"
              >
                Previous
              </Button>
              <Button 
                @click="currentStep = Math.min(3, currentStep + 1)"
                :disabled="currentStep === 3"
              >
                {{ currentStep === 3 ? 'Complete' : 'Next' }}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    `})},p={render:()=>({components:{Steps:n,Card:b,Icon:h},setup(){const e=i(2);return{orderStep:e,orderSteps:w,handleStepClick:t=>{e.value=t,console.log(`Step clicked: ${t}`)}}},template:`
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
          color="primary"
          @step-click="handleStepClick"
        />
        
        <Card class="mt-8">
          <div class="card-body">
            <h4 class="font-bold mb-2">Current Status: {{ orderSteps[orderStep].title }}</h4>
            <p class="text-sm">{{ orderSteps[orderStep].description }}</p>
            <p class="text-xs opacity-70 mt-2">Last updated: 2 hours ago</p>
            
            <div class="mt-4 p-4 bg-base-200 rounded-lg">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="map-pin" size="sm" />
                <span class="font-medium">Current Location</span>
              </div>
              <p class="text-sm">Package is in transit to your local distribution center</p>
            </div>
          </div>
        </Card>
      </div>
    `})},d={render:()=>({components:{Steps:n,Icon:h},template:`
      <Steps 
        :steps="[
          { title: 'Planning' },
          { title: 'Development' },
          { title: 'Testing' },
          { title: 'Deployment' }
        ]"
        :current-step="1"
        color="secondary"
      >
        <template #step-0="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <Icon 
                name="clipboard-list" 
                :class="{ 'text-primary': isActive, 'text-success': isCompleted }" 
                size="lg"
              />
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Define requirements</div>
          </div>
        </template>
        
        <template #step-1="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <Icon 
                name="code" 
                :class="{ 'text-primary': isActive, 'text-success': isCompleted }" 
                size="lg"
              />
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Write the code</div>
          </div>
        </template>
        
        <template #step-2="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <Icon 
                name="test-tube" 
                :class="{ 'text-primary': isActive, 'text-success': isCompleted }" 
                size="lg"
              />
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Quality assurance</div>
          </div>
        </template>
        
        <template #step-3="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <Icon 
                name="rocket" 
                :class="{ 'text-primary': isActive, 'text-success': isCompleted }" 
                size="lg"
              />
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Go live</div>
          </div>
        </template>
      </Steps>
    `})},u={render:()=>({components:{Steps:n,Button:g,Card:b,Avatar:x,Icon:h},setup(){const e=i(0),s=[{title:"Personal Info",description:"Tell us about yourself",icon:"user"},{title:"Preferences",description:"Set your preferences",icon:"settings"},{title:"Confirmation",description:"Review and confirm",icon:"check-circle"}],r=f=>{e.value=f,console.log(`Step clicked: ${f}`)},t=i({name:"John Doe",email:"john@example.com",newsletter:!0,notifications:!1});return{currentStep:e,steps:s,stepData:t,handleStepClick:r}},template:`
      <div class="w-full max-w-2xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold mb-2">Interactive Steps</h2>
          <p class="text-base-content/70">Click on any step to navigate through the process</p>
        </div>

        <Steps 
          :steps="steps"
          :current-step="currentStep"
          color="primary"
          @step-click="handleStepClick"
          class="mb-8"
        />

        <Card>
          <div class="card-body">
            <div v-if="currentStep === 0" class="space-y-4">
              <div class="text-center">
                <Avatar size="lg" fallback-color="primary" class="mx-auto mb-4">
                  <Icon name="user" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Personal Information</h3>
                <p class="text-base-content/70">Tell us about yourself</p>
              </div>
              
              <div class="space-y-2">
                <div><strong>Name:</strong> {{ stepData.name }}</div>
                <div><strong>Email:</strong> {{ stepData.email }}</div>
              </div>
            </div>

            <div v-else-if="currentStep === 1" class="space-y-4">
              <div class="text-center">
                <Avatar size="lg" fallback-color="secondary" class="mx-auto mb-4">
                  <Icon name="settings" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Preferences</h3>
                <p class="text-base-content/70">Set your communication preferences</p>
              </div>
              
              <div class="space-y-2">
                <div><strong>Newsletter:</strong> {{ stepData.newsletter ? 'Yes' : 'No' }}</div>
                <div><strong>Notifications:</strong> {{ stepData.notifications ? 'Yes' : 'No' }}</div>
              </div>
            </div>

            <div v-else-if="currentStep === 2" class="space-y-4">
              <div class="text-center">
                <Avatar size="lg" fallback-color="success" class="mx-auto mb-4">
                  <Icon name="check-circle" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Confirmation</h3>
                <p class="text-base-content/70">Review your information</p>
              </div>
              
              <div class="bg-base-200 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Summary</h4>
                <div class="space-y-1 text-sm">
                  <div><strong>Name:</strong> {{ stepData.name }}</div>
                  <div><strong>Email:</strong> {{ stepData.email }}</div>
                  <div><strong>Newsletter:</strong> {{ stepData.newsletter ? 'Yes' : 'No' }}</div>
                  <div><strong>Notifications:</strong> {{ stepData.notifications ? 'Yes' : 'No' }}</div>
                </div>
              </div>
            </div>

            <div class="card-actions justify-end mt-6">
              <Button 
                @click="currentStep = Math.max(0, currentStep - 1)"
                :disabled="currentStep === 0"
                variant="outline"
              >
                Previous
              </Button>
              <Button 
                @click="currentStep = Math.min(2, currentStep + 1)"
                :disabled="currentStep === 2"
              >
                {{ currentStep === 2 ? 'Complete' : 'Next' }}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    `})},m={args:{steps:[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"}],currentStep:0,showNumbers:!0}},v={args:{steps:[{title:"Account",icon:"user"},{title:"Profile",icon:"settings"},{title:"Complete",icon:"check"}],currentStep:1,showNumbers:!1}},S={args:{steps:[{title:"Setup",description:"Initial setup",icon:"settings"},{title:"Configure",description:"Configuration",icon:"settings"},{title:"Test",description:"Testing phase",icon:"settings"},{title:"Deploy",description:"Deployment",icon:"settings"}],currentStep:2,variant:"vertical",showNumbers:!1}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    currentStep: 1,
    color: 'primary',
    showNumbers: true
  },
  render: args => ({
    components: {
      Steps,
      Button
    },
    setup() {
      const currentStep = ref(args.currentStep);
      const handleStepClick = (index: number) => {
        currentStep.value = index;
        console.log(\`Step clicked: \${index}\`);
      };
      return {
        args,
        currentStep,
        handleStepClick
      };
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="text-lg font-bold mb-2">Order Process</h3>
          <p class="text-base-content/70">Track your order through each step</p>
        </div>
        
        <Steps 
          v-bind="args"
          :current-step="currentStep"
          @step-click="handleStepClick"
        />
        
        <div class="text-center">
          <div class="flex gap-2 justify-center">
            <Button 
              @click="currentStep = Math.max(0, currentStep - 1)"
              :disabled="currentStep === 0"
              variant="outline"
              size="sm"
            >
              Previous
            </Button>
            <Button 
              @click="currentStep = Math.min(args.steps.length - 1, currentStep + 1)"
              :disabled="currentStep === args.steps.length - 1"
              size="sm"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    steps: detailedSteps,
    currentStep: 2,
    variant: 'vertical',
    color: 'accent',
    showNumbers: false
  },
  render: args => ({
    components: {
      Steps,
      Button
    },
    setup() {
      const currentStep = ref(args.currentStep);
      const handleStepClick = (index: number) => {
        currentStep.value = index;
        console.log(\`Step clicked: \${index}\`);
      };
      return {
        args,
        currentStep,
        handleStepClick
      };
    },
    template: \`
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold">Account Setup</h3>
          <p class="text-base-content/70">Complete these steps to set up your account</p>
        </div>
        
        <div class="flex gap-8">
          <div class="flex-1">
            <Steps 
              v-bind="args"
              :current-step="currentStep"
              @step-click="handleStepClick"
              class="max-w-md"
            />
          </div>
          
          <div class="flex-1">
            <Card>
              <div class="card-body">
                <h4 class="card-title">{{ args.steps[currentStep].title }}</h4>
                <p>{{ args.steps[currentStep].description }}</p>
                
                <div class="card-actions justify-end mt-4">
                  <Button 
                    @click="currentStep = Math.max(0, currentStep - 1)"
                    :disabled="currentStep === 0"
                    variant="outline"
                    size="sm"
                  >
                    Back
                  </Button>
                  <Button 
                    @click="currentStep = Math.min(args.steps.length - 1, currentStep + 1)"
                    :disabled="currentStep === args.steps.length - 1"
                    size="sm"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Steps
    },
    template: \`
      <div class="space-y-8">
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
            color="primary"
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
            color="secondary"
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
            color="accent"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Success</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            color="success"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Warning</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            color="warning"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Error</h3>
          <Steps 
            :steps="[
              { title: 'Step 1' },
              { title: 'Step 2' },
              { title: 'Step 3' },
              { title: 'Step 4' }
            ]"
            :current-step="1"
            color="error"
          />
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Steps,
      Button,
      Card
    },
    setup() {
      const currentStep = ref(1);
      const steps = checkoutSteps;
      const handleStepClick = (index: number) => {
        currentStep.value = index;
        console.log(\`Step clicked: \${index}\`);
      };
      return {
        currentStep,
        steps,
        handleStepClick
      };
    },
    template: \`
      <div class="bg-base-200 p-8 rounded-lg">
        <h3 class="text-xl font-bold mb-6">Checkout Process</h3>
        
        <Steps 
          :steps="steps"
          :current-step="currentStep"
          color="primary"
          class="mb-8"
          @step-click="handleStepClick"
        />
        
        <Card>
          <div class="card-body">
            <div v-if="currentStep === 0">
              <h4 class="text-lg font-bold mb-4">Shopping Cart</h4>
              <p>Review your items and proceed to shipping.</p>
              <div class="bg-base-200 p-4 rounded-lg mt-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium">Product Name</span>
                  <span class="text-success font-semibold">$29.99</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-medium">Quantity</span>
                  <span>1</span>
                </div>
              </div>
            </div>
            
            <div v-else-if="currentStep === 1">
              <h4 class="text-lg font-bold mb-4">Shipping Information</h4>
              <p>Enter your delivery address and shipping preferences.</p>
              <div class="bg-base-200 p-4 rounded-lg mt-4">
                <p class="text-sm">Shipping address form would go here...</p>
              </div>
            </div>
            
            <div v-else-if="currentStep === 2">
              <h4 class="text-lg font-bold mb-4">Payment Details</h4>
              <p>Provide billing information and payment method.</p>
              <div class="bg-base-200 p-4 rounded-lg mt-4">
                <p class="text-sm">Payment form would go here...</p>
              </div>
            </div>
            
            <div v-else-if="currentStep === 3">
              <h4 class="text-lg font-bold mb-4">Order Confirmation</h4>
              <p>Thank you! Your order has been placed successfully.</p>
              <div class="bg-success/20 p-4 rounded-lg mt-4">
                <div class="flex items-center gap-2">
                  <Icon name="check-circle" class="text-success" />
                  <span class="font-medium">Order #12345 confirmed</span>
                </div>
              </div>
            </div>
            
            <div class="card-actions justify-end mt-6">
              <Button 
                @click="currentStep = Math.max(0, currentStep - 1)"
                :disabled="currentStep === 0"
                variant="outline"
              >
                Previous
              </Button>
              <Button 
                @click="currentStep = Math.min(3, currentStep + 1)"
                :disabled="currentStep === 3"
              >
                {{ currentStep === 3 ? 'Complete' : 'Next' }}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Steps,
      Card,
      Icon
    },
    setup() {
      const orderStep = ref(2);
      const orderSteps = orderTrackingSteps;
      const handleStepClick = (index: number) => {
        orderStep.value = index;
        console.log(\`Step clicked: \${index}\`);
      };
      return {
        orderStep,
        orderSteps,
        handleStepClick
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
          color="primary"
          @step-click="handleStepClick"
        />
        
        <Card class="mt-8">
          <div class="card-body">
            <h4 class="font-bold mb-2">Current Status: {{ orderSteps[orderStep].title }}</h4>
            <p class="text-sm">{{ orderSteps[orderStep].description }}</p>
            <p class="text-xs opacity-70 mt-2">Last updated: 2 hours ago</p>
            
            <div class="mt-4 p-4 bg-base-200 rounded-lg">
              <div class="flex items-center gap-2 mb-2">
                <Icon name="map-pin" size="sm" />
                <span class="font-medium">Current Location</span>
              </div>
              <p class="text-sm">Package is in transit to your local distribution center</p>
            </div>
          </div>
        </Card>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Steps,
      Icon
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
        color="secondary"
      >
        <template #step-0="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <Icon 
                name="clipboard-list" 
                :class="{ 'text-primary': isActive, 'text-success': isCompleted }" 
                size="lg"
              />
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Define requirements</div>
          </div>
        </template>
        
        <template #step-1="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <Icon 
                name="code" 
                :class="{ 'text-primary': isActive, 'text-success': isCompleted }" 
                size="lg"
              />
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Write the code</div>
          </div>
        </template>
        
        <template #step-2="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <Icon 
                name="test-tube" 
                :class="{ 'text-primary': isActive, 'text-success': isCompleted }" 
                size="lg"
              />
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Quality assurance</div>
          </div>
        </template>
        
        <template #step-3="{ step, isActive, isCompleted }">
          <div class="text-center">
            <div class="mb-2">
              <Icon 
                name="rocket" 
                :class="{ 'text-primary': isActive, 'text-success': isCompleted }" 
                size="lg"
              />
            </div>
            <div class="font-medium">{{ step.title }}</div>
            <div class="text-xs opacity-70">Go live</div>
          </div>
        </template>
      </Steps>
    \`
  })
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Steps,
      Button,
      Card,
      Avatar,
      Icon
    },
    setup() {
      const currentStep = ref(0);
      const steps = [{
        title: 'Personal Info',
        description: 'Tell us about yourself',
        icon: 'user' as const
      }, {
        title: 'Preferences',
        description: 'Set your preferences',
        icon: 'settings' as const
      }, {
        title: 'Confirmation',
        description: 'Review and confirm',
        icon: 'check-circle' as const
      }];
      const handleStepClick = (index: number) => {
        currentStep.value = index;
        console.log(\`Step clicked: \${index}\`);
      };
      const stepData = ref({
        name: 'John Doe',
        email: 'john@example.com',
        newsletter: true,
        notifications: false
      });
      return {
        currentStep,
        steps,
        stepData,
        handleStepClick
      };
    },
    template: \`
      <div class="w-full max-w-2xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold mb-2">Interactive Steps</h2>
          <p class="text-base-content/70">Click on any step to navigate through the process</p>
        </div>

        <Steps 
          :steps="steps"
          :current-step="currentStep"
          color="primary"
          @step-click="handleStepClick"
          class="mb-8"
        />

        <Card>
          <div class="card-body">
            <div v-if="currentStep === 0" class="space-y-4">
              <div class="text-center">
                <Avatar size="lg" fallback-color="primary" class="mx-auto mb-4">
                  <Icon name="user" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Personal Information</h3>
                <p class="text-base-content/70">Tell us about yourself</p>
              </div>
              
              <div class="space-y-2">
                <div><strong>Name:</strong> {{ stepData.name }}</div>
                <div><strong>Email:</strong> {{ stepData.email }}</div>
              </div>
            </div>

            <div v-else-if="currentStep === 1" class="space-y-4">
              <div class="text-center">
                <Avatar size="lg" fallback-color="secondary" class="mx-auto mb-4">
                  <Icon name="settings" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Preferences</h3>
                <p class="text-base-content/70">Set your communication preferences</p>
              </div>
              
              <div class="space-y-2">
                <div><strong>Newsletter:</strong> {{ stepData.newsletter ? 'Yes' : 'No' }}</div>
                <div><strong>Notifications:</strong> {{ stepData.notifications ? 'Yes' : 'No' }}</div>
              </div>
            </div>

            <div v-else-if="currentStep === 2" class="space-y-4">
              <div class="text-center">
                <Avatar size="lg" fallback-color="success" class="mx-auto mb-4">
                  <Icon name="check-circle" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Confirmation</h3>
                <p class="text-base-content/70">Review your information</p>
              </div>
              
              <div class="bg-base-200 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Summary</h4>
                <div class="space-y-1 text-sm">
                  <div><strong>Name:</strong> {{ stepData.name }}</div>
                  <div><strong>Email:</strong> {{ stepData.email }}</div>
                  <div><strong>Newsletter:</strong> {{ stepData.newsletter ? 'Yes' : 'No' }}</div>
                  <div><strong>Notifications:</strong> {{ stepData.notifications ? 'Yes' : 'No' }}</div>
                </div>
              </div>
            </div>

            <div class="card-actions justify-end mt-6">
              <Button 
                @click="currentStep = Math.max(0, currentStep - 1)"
                :disabled="currentStep === 0"
                variant="outline"
              >
                Previous
              </Button>
              <Button 
                @click="currentStep = Math.min(2, currentStep + 1)"
                :disabled="currentStep === 2"
              >
                {{ currentStep === 2 ? 'Complete' : 'Next' }}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: 'Step 1'
    }, {
      title: 'Step 2'
    }, {
      title: 'Step 3'
    }],
    currentStep: 0,
    showNumbers: true
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: 'Account',
      icon: 'user' as const
    }, {
      title: 'Profile',
      icon: 'settings' as const
    }, {
      title: 'Complete',
      icon: 'check' as const
    }],
    currentStep: 1,
    showNumbers: false
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: 'Setup',
      description: 'Initial setup',
      icon: 'settings' as const
    }, {
      title: 'Configure',
      description: 'Configuration',
      icon: 'settings' as const
    }, {
      title: 'Test',
      description: 'Testing phase',
      icon: 'settings' as const
    }, {
      title: 'Deploy',
      description: 'Deployment',
      icon: 'settings' as const
    }],
    currentStep: 2,
    variant: 'vertical',
    showNumbers: false
  }
}`,...S.parameters?.docs?.source}}};const _=["Default","Vertical","Variants","CheckoutProcess","ProgressTracking","CustomContent","InteractiveSteps","Minimal","WithIcons","VerticalWithIcons"];export{l as CheckoutProcess,d as CustomContent,c as Default,u as InteractiveSteps,m as Minimal,p as ProgressTracking,o as Variants,a as Vertical,S as VerticalWithIcons,v as WithIcons,_ as __namedExportsOrder,O as default};
