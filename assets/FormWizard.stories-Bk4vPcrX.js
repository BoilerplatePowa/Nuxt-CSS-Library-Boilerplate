import{d as ie,m as K,c as h,h as ne,r as m,w as le,a as I,l as Y,q as g,p as A,u as ce,b as d,v as pe,F as de,g as me,n as ue,o as z,e as fe,t as k,j as he,f as ve}from"./iframe--6dECDSE.js";import{c as l,a,b as v,d as be,e as ye}from"./index.esm-QBtAUu41.js";import{F as ge}from"./vee-validate-DEWtS_-o.js";import{_ as Se}from"./Steps-DgxT3k3s.js";import{_ as J}from"./Button-Cr1KVEgd.js";import{_ as D}from"./Icon-Cyg07zqG.js";import{P as xe}from"./Progress-CMOsj11U.js";import{_ as L}from"./Avatar-ChVWa20J.js";import{I as P}from"./Input-BxmI62y9.js";import{S as U}from"./Select-D8iMJlSt.js";import{T as H}from"./Textarea-D7NrxpxB.js";import{_ as V}from"./Checkbox-C_fwcpfZ.js";import{T as we}from"./Toggle-XyEtUymy.js";import"./preload-helper-D9Z9MdNV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./x-CvlftGd-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Badge-Dj2vUqwU.js";import"./Status-DOHks-7U.js";import"./Swap-B3LqfKXd.js";const Ce=["aria-label"],ze={key:0,class:"flex justify-center"},ke={class:"step-content"},Ie={class:"default-step-content"},qe={class:"default-step-title"},De={class:"default-step-description"},Ne={class:"navigation-buttons"},Pe={class:"hidden sm:inline"},Ve={key:1,class:"flex-1"},Te={key:0,class:"progress-info"},Ae={class:"text-sm text-base-content/60 mb-2"},We={key:1,class:"step-summary"},_e={class:"summary-header"},je={class:"summary-list"},Fe={class:"summary-item-left"},Ee={class:"badge badge-success badge-sm"},Oe={class:"text-sm font-medium"},q=ie({__name:"FormWizard",props:K({steps:{},stepData:{default:()=>({})},showSteps:{type:Boolean,default:!0},stepsVariant:{default:"default"},stepsColor:{default:"primary"},showStepNumbers:{type:Boolean,default:!0},nextButtonText:{default:"Next"},previousButtonText:{default:"Previous"},submitButtonText:{default:"Submit"},showProgress:{type:Boolean,default:!0},showSummary:{type:Boolean,default:!0},validateOnStepChange:{type:Boolean,default:!0},ariaLabel:{default:"Multi-step form wizard"}},{modelValue:{default:0},modelModifiers:{}}),emits:K(["step-change","step-complete","wizard-complete","wizard-cancel"],["update:modelValue"]),setup(i,{expose:u,emit:c}){const n=i,S=h(()=>n.stepData&&typeof n.stepData=="object"?n.stepData:{}),x=h(()=>{const e=`step_${t.value}`;return S.value[e]||{}}),p=c,t=ne(i,"modelValue"),w=m(!1),r=h(()=>n.steps.length),b=h(()=>t.value===0),f=h(()=>t.value===r.value-1),C=h(()=>(t.value+1)/r.value*100),s=h(()=>n.steps[t.value]?.title||`Step ${t.value+1}`),y=h(()=>n.steps[t.value]?.description||""),T=h(()=>{const e=n.steps[t.value];if(!e||!e.schema)return l().shape({}).noUnknown();try{return typeof e.schema=="object"&&e.schema&&"validate"in e.schema?e.schema:(console.warn("FormWizard: Invalid schema for step",t.value,"schema is not a valid Yup schema"),l().shape({}).noUnknown())}catch(o){return console.warn("FormWizard: Invalid schema for step",t.value,o),l().shape({}).noUnknown()}}),te=h(()=>n.steps.map((e,o)=>({title:e.title,description:e.description,value:e.value||o,icon:e.icon,completed:o<t.value}))),ae=h(()=>n.steps.slice(0,t.value)),se=h(()=>["form-wizard","w-full","max-w-4xl","mx-auto","flex","flex-col","gap-12"]),G=async()=>{if(f.value){await oe();return}w.value=!0;try{const e=t.value+1,o=t.value;t.value=e,p("step-change",e,o)}finally{w.value=!1}},Z=()=>{if(b.value)return;const e=t.value-1,o=t.value;t.value=e,p("step-change",e,o)},Q=e=>{if(e===t.value)return;const o=t.value;t.value=e,p("step-change",e,o)},re=async e=>{w.value=!0;try{p("step-complete",t.value,e),await G()}finally{w.value=!1}},oe=async()=>{const e={...S.value,completedAt:new Date().toISOString()};p("wizard-complete",e)};return le(t,(e,o)=>{e!==o&&o!==void 0&&p("step-change",e,o)}),u({goToStep:Q,goToNextStep:G,goToPreviousStep:Z,reset:()=>{t.value=0}}),(e,o)=>(z(),I("div",{class:ue(se.value),"aria-label":e.ariaLabel},[e.showSteps?(z(),I("div",ze,[g(Se,{steps:te.value,"current-step":t.value,variant:e.stepsVariant,"show-numbers":e.showStepNumbers,color:e.stepsColor},null,8,["steps","current-step","variant","show-numbers","color"])])):Y("",!0),g(ce(ge),{"validation-schema":T.value,onSubmit:re,"validate-on-mount":!1},{default:A(({errors:M,meta:N})=>[d("div",ke,[fe(e.$slots,`step-${t.value}`,{step:t.value,stepData:x.value,allStepData:S.value,errors:M||{},meta:N||{valid:!0,dirty:!1,touched:!1},isFirstStep:b.value,isLastStep:f.value,totalSteps:r.value},()=>[d("div",Ie,[g(L,{name:"settings",size:"lg"}),d("h3",qe,"Step "+k(t.value+1)+": "+k(s.value),1),d("p",De,k(y.value),1)])])]),d("div",Ne,[b.value?(z(),I("div",Ve)):(z(),he(J,{key:0,type:"button",variant:"outline",size:"sm",disabled:w.value,onClick:Z},{default:A(()=>[g(D,{name:"chevron-left",size:"sm"}),d("span",Pe,k(e.previousButtonText),1)]),_:1},8,["disabled"])),g(J,{type:"submit",variant:f.value?"success":"primary",size:"sm",disabled:w.value||N.valid===!1,loading:w.value,"icon-right":f.value?"check":"chevron-right"},{default:A(()=>[d("span",null,k(f.value?e.submitButtonText:e.nextButtonText),1)]),_:2},1032,["variant","disabled","loading","icon-right"])]),e.showProgress?(z(),I("div",Te,[d("div",Ae," Step "+k(t.value+1)+" of "+k(r.value),1),g(xe,{value:C.value,max:100,size:"sm",class:"progress-bar"},null,8,["value"])])):Y("",!0)]),_:3},8,["validation-schema"]),e.showSummary&&!b.value?(z(),I("div",We,[d("h4",_e,[g(D,{name:"check-circle",size:"sm",class:"summary-icon"}),o[0]||(o[0]=pe(" Previous Steps Summary ",-1))]),d("div",je,[(z(!0),I(de,null,me(ae.value,(M,N)=>(z(),I("div",{key:N,class:"summary-item"},[d("div",Fe,[d("div",Ee,[g(D,{name:"check",size:"xs",class:"summary-check-icon"})]),d("span",Oe,k(M.title),1)]),g(J,{type:"button",variant:"ghost",size:"xs",onClick:Be=>Q(N)},{default:A(()=>[g(D,{name:"edit",size:"xs"}),o[1]||(o[1]=d("span",{class:"hidden sm:inline ml-1"},"Edit",-1))]),_:2,__:[1]},1032,["onClick"])]))),128))])])):Y("",!0)],10,Ce))}});q.__docgenInfo={exportName:"default",displayName:"FormWizard",description:"",tags:{},expose:[{name:"goToStep"},{name:"goToNextStep"},{name:"goToPreviousStep"},{name:"reset"}],props:[{name:"steps",required:!0,type:{name:"Array",elements:[{name:"WizardStep"}]}},{name:"stepData",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"any"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"showSteps",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"stepsVariant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"stepsColor",required:!1,type:{name:"Variant"},defaultValue:{func:!1,value:"'primary'"}},{name:"showStepNumbers",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"nextButtonText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Next'"}},{name:"previousButtonText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Previous'"}},{name:"submitButtonText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Submit'"}},{name:"showProgress",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showSummary",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"validateOnStepChange",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Multi-step form wizard'"}}],events:[{name:"step-change",type:{names:["number"]}},{name:"step-complete",type:{names:["number"]}},{name:"wizard-complete",type:{names:["Record"],elements:[{name:"string"},{name:"any"}]}},{name:"wizard-cancel"}],slots:[{name:"`step-${currentStep}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"step",title:"binding"},{name:"step-data",title:"binding"},{name:"all-step-data",title:"binding"},{name:"errors",title:"binding"},{name:"meta",title:"binding"},{name:"is-first-step",title:"binding"},{name:"is-last-step",title:"binding"},{name:"total-steps",title:"binding"}]}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/FormWizard.vue"]};const lt={title:"Data Input/FormWizard",component:q,parameters:{layout:"centered",docs:{description:{component:`
A comprehensive multi-step form wizard component that integrates with VeeValidate for validation.

## Features
- **Multi-step navigation** with progress tracking
- **VeeValidate integration** for form validation
- **Flexible step configuration** with custom schemas
- **Progress indicators** and step summaries
- **Accessible navigation** with keyboard support
- **Customizable styling** with DaisyUI classes

## Usage
The FormWizard component allows you to create complex multi-step forms with validation, progress tracking, and flexible navigation.
        `}}},argTypes:{steps:{description:"Array of step configurations",control:{type:"object"},table:{type:{summary:"object"}}},modelValue:{type:"number",description:"Current step index (0-based)",control:{type:"number",min:0},table:{type:{summary:"number"},defaultValue:{summary:"0"}}},showSteps:{type:"boolean",description:"Show the steps indicator",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},stepsVariant:{type:"string",description:"Steps display variant",control:{type:"select"},options:["default","vertical"],table:{type:{summary:"string"},defaultValue:{summary:"default"}}},stepsColor:{type:"string",description:"Steps color theme",control:{type:"select"},options:["bordered","ghost","primary","secondary","accent","info","success","warning","error","neutral"],table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},showProgress:{type:"boolean",description:"Show progress bar",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showSummary:{type:"boolean",description:"Show completed steps summary",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},nextButtonText:{type:"string",description:"Text for the next button",control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Next"}}},previousButtonText:{type:"string",description:"Text for the previous button",control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Previous"}}},submitButtonText:{type:"string",description:"Text for the submit button",control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Submit"}}},stepData:{description:"Data for each step",control:{type:"object"},table:{type:{summary:"object"}}}},tags:["autodocs"]},X=[{title:"Personal Information",description:"Enter your basic details",schema:l({firstName:a().required("First name is required"),lastName:a().required("Last name is required"),email:a().email("Please enter a valid email").required("Email is required")})},{title:"Contact Details",description:"Provide your contact information",schema:l({phone:a().required("Phone number is required"),address:a().required("Address is required"),city:a().required("City is required")})},{title:"Preferences",description:"Set your preferences",schema:l({newsletter:v(),notifications:v(),terms:v().oneOf([!0],"You must accept the terms")})}],ee=[{title:"Account Details",description:"Create your account",icon:"user",schema:l({username:a().min(3,"Username must be at least 3 characters").required("Username is required"),email:a().email("Please enter a valid email").required("Email is required"),password:a().min(8,"Password must be at least 8 characters").required("Password is required"),confirmPassword:a().oneOf([be("password")],"Passwords must match").required("Please confirm your password")})},{title:"Profile Information",description:"Tell us about yourself",icon:"settings",schema:l({firstName:a().required("First name is required"),lastName:a().required("Last name is required"),bio:a().max(200,"Bio must be less than 200 characters"),website:a().url("Please enter a valid URL")})},{title:"Preferences",description:"Set your account preferences",icon:"settings-2",schema:l({language:a().required("Please select a language"),timezone:a().required("Please select a timezone"),notifications:v(),newsletter:v()})},{title:"Verification",description:"Verify your account",icon:"check-circle",schema:l({terms:v().oneOf([!0],"You must accept the terms and conditions"),privacy:v().oneOf([!0],"You must accept the privacy policy")})}],$e=[{title:"Cart Review",description:"Review your items",icon:"shopping-cart",schema:l({items:ye().min(1,"Please select at least one item")})},{title:"Shipping",description:"Enter shipping details",icon:"map-pin",schema:l({address:a().required("Address is required"),city:a().required("City is required"),zipCode:a().required("ZIP code is required"),country:a().required("Country is required"),shippingMethod:a().required("Please select a shipping method")})},{title:"Payment",description:"Enter payment information",icon:"credit-card",schema:l({cardNumber:a().required("Card number is required"),expiryDate:a().required("Expiry date is required"),cvv:a().required("CVV is required"),cardholderName:a().required("Cardholder name is required")})},{title:"Confirmation",description:"Review and confirm order",icon:"check",schema:l({confirmOrder:v().oneOf([!0],"Please confirm your order")})}],W={args:{steps:X,modelValue:0,showSteps:!0,stepsColor:"primary",showProgress:!0,showSummary:!0},render:i=>({components:{FormWizard:q,Input:P,Textarea:H,Checkbox:V},setup(){const u=m(i.modelValue),c=m({});return{args:i,currentStep:u,stepData:c,handleStepChange:(p,t)=>{},handleStepComplete:(p,t)=>{c.value[`step_${p}`]=t},handleWizardComplete:p=>{alert("Form wizard completed successfully!")}}},template:`
      <div class="w-full max-w-2xl">
        <FormWizard
          v-bind="args"
          v-model="currentStep"
          :step-data="stepData"
          @step-change="handleStepChange"
          @step-complete="handleStepComplete"
          @wizard-complete="handleWizardComplete"
        >
          <!-- Step 0: Personal Information -->
          <template #step-0="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Personal Information</h3>
              <p class="opacity-70">Please enter your basic details below.</p>
              
              <div class="grid grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  left-icon="user"
                  required
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  left-icon="user"
                  required
                />
              </div>
              
              <Input
                name="email"
                label="Email"
                type="email"
                placeholder="john.doe@example.com"
                left-icon="mail"
                required
              />
            </div>
          </template>

          <!-- Step 1: Contact Details -->
          <template #step-1="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Contact Details</h3>
              <p class="opacity-70">Provide your contact information.</p>
              
              <Input
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 123-4567"
                left-icon="phone"
                required
              />
              
              <Input
                name="address"
                label="Address"
                placeholder="123 Main Street"
                left-icon="map-pin"
                required
              />
              
              <Input
                name="city"
                label="City"
                placeholder="New York"
                left-icon="building"
                required
              />
            </div>
          </template>

          <!-- Step 2: Preferences -->
          <template #step-2="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Preferences</h3>
              <p class="opacity-70">Set your communication preferences.</p>
              
              <Checkbox
                name="newsletter"
                label="Subscribe to newsletter"
                description="Receive updates about new features and products"
              />
              
              <Checkbox
                name="notifications"
                label="Enable notifications"
                description="Get notified about important updates"
              />
              
              <Checkbox
                name="terms"
                label="I accept the terms and conditions"
                description="You must accept the terms to continue"
                required
              />
            </div>
          </template>
        </FormWizard>
      </div>
    `})},_={args:{steps:ee,modelValue:0,showSteps:!0,stepsVariant:"vertical",stepsColor:"accent",showProgress:!0,showSummary:!0},render:i=>({components:{FormWizard:q,Input:P,Select:U,Textarea:H,Checkbox:V,Toggle:we},setup(){const u=m(i.modelValue),c=m({});return{args:i,currentStep:u,stepData:c,languages:[{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"fr",label:"French"},{value:"de",label:"German"}],timezones:[{value:"utc",label:"UTC"},{value:"est",label:"Eastern Time"},{value:"pst",label:"Pacific Time"},{value:"gmt",label:"Greenwich Mean Time"}],handleWizardComplete:p=>{alert("Account created successfully!")}}},template:`
      <div class="w-full max-w-4xl">
        <FormWizard
          v-bind="args"
          v-model="currentStep"
          :step-data="stepData"
          @wizard-complete="handleWizardComplete"
        >
          <!-- Step 0: Account Details -->
          <template #step-0="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Account Details</h3>
              <p class="opacity-70">Create your account with a username and password.</p>
              
              <Input
                name="username"
                label="Username"
                placeholder="johndoe"
                left-icon="user"
                required
              />
              
              <Input
                name="email"
                label="Email"
                type="email"
                placeholder="john.doe@example.com"
                left-icon="mail"
                required
              />
              
              <div class="grid grid-cols-2 gap-4">
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  left-icon="lock"
                  required
                />
                <Input
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="••••••••"
                  left-icon="lock"
                  required
                />
              </div>
            </div>
          </template>

          <!-- Step 1: Profile Information -->
          <template #step-1="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Profile Information</h3>
              <p class="opacity-70">Tell us about yourself.</p>
              
              <div class="grid grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  left-icon="user"
                  required
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  left-icon="user"
                  required
                />
              </div>
              
              <Textarea
                name="bio"
                label="Bio"
                placeholder="Tell us about yourself..."
                maxlength="200"
                show-char-count
              />
              
              <Input
                name="website"
                label="Website"
                type="url"
                placeholder="https://example.com"
                left-icon="link"
              />
            </div>
          </template>

          <!-- Step 2: Preferences -->
          <template #step-2="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Preferences</h3>
              <p class="opacity-70">Set your account preferences.</p>
              
              <Select
                name="language"
                label="Language"
                :options="languages"
                placeholder="Select language"
                required
              />
              
              <Select
                name="timezone"
                label="Timezone"
                :options="timezones"
                placeholder="Select timezone"
                required
              />
              
              <Toggle
                name="notifications"
                label="Enable notifications"
                description="Receive push notifications"
              />
              
              <Toggle
                name="newsletter"
                label="Subscribe to newsletter"
                description="Get weekly updates"
              />
            </div>
          </template>

          <!-- Step 3: Verification -->
          <template #step-3="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Verification</h3>
              <p class="opacity-70">Please review and accept the terms.</p>
              
              <div class="bg-base-200 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Terms and Conditions</h4>
                <p class="text-sm opacity-70 mb-4">
                  By creating an account, you agree to our terms of service and privacy policy.
                  We will use your information to provide you with the best possible experience.
                </p>
                
                <Checkbox
                  name="terms"
                  label="I accept the terms and conditions"
                  required
                />
              </div>
              
              <div class="bg-base-200 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Privacy Policy</h4>
                <p class="text-sm opacity-70 mb-4">
                  We respect your privacy and will never share your personal information
                  with third parties without your explicit consent.
                </p>
                
                <Checkbox
                  name="privacy"
                  label="I accept the privacy policy"
                  required
                />
              </div>
            </div>
          </template>
        </FormWizard>
      </div>
    `})},j={args:{steps:$e,modelValue:0,showSteps:!0,stepsColor:"success",showProgress:!0,showSummary:!0},render:i=>({components:{FormWizard:q,Input:P,Select:U,Checkbox:V},setup(){const u=m(i.modelValue),c=m({});return{args:i,currentStep:u,stepData:c,shippingMethods:[{value:"standard",label:"Standard Shipping (3-5 days)",price:"$5.99"},{value:"express",label:"Express Shipping (1-2 days)",price:"$12.99"},{value:"overnight",label:"Overnight Shipping",price:"$24.99"}],handleWizardComplete:x=>{alert("Order placed successfully!")}}},template:`
      <div class="w-full max-w-2xl">
        <FormWizard
          v-bind="args"
          v-model="currentStep"
          :step-data="stepData"
          @wizard-complete="handleWizardComplete"
        >
          <!-- Step 0: Cart Review -->
          <template #step-0="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Cart Review</h3>
              <p class="opacity-70">Review your items before checkout.</p>
              
              <div class="bg-base-200 p-4 rounded-lg">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium">Product Name</span>
                  <span class="text-success font-semibold">$29.99</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium">Quantity</span>
                  <span>1</span>
                </div>
                <div class="border-t pt-2 flex justify-between items-center">
                  <span class="font-bold">Total</span>
                  <span class="text-success font-bold">$29.99</span>
                </div>
              </div>
            </div>
          </template>

          <!-- Step 1: Shipping -->
          <template #step-1="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Shipping Information</h3>
              <p class="opacity-70">Enter your shipping details.</p>
              
              <Input
                name="address"
                label="Address"
                placeholder="123 Main Street"
                left-icon="map-pin"
                required
              />
              
              <div class="grid grid-cols-2 gap-4">
                <Input
                  name="city"
                  label="City"
                  placeholder="New York"
                  left-icon="building"
                  required
                />
                <Input
                  name="zipCode"
                  label="ZIP Code"
                  placeholder="10001"
                  left-icon="map-pin"
                  required
                />
              </div>
              
              <Input
                name="country"
                label="Country"
                placeholder="United States"
                left-icon="globe"
                required
              />
              
              <Select
                name="shippingMethod"
                label="Shipping Method"
                :options="shippingMethods"
                placeholder="Select shipping method"
                required
              />
            </div>
          </template>

          <!-- Step 2: Payment -->
          <template #step-2="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Payment Information</h3>
              <p class="opacity-70">Enter your payment details securely.</p>
              
              <Input
                name="cardNumber"
                label="Card Number"
                placeholder="1234 5678 9012 3456"
                left-icon="credit-card"
                mask-type="credit-card"
                required
              />
              
              <div class="grid grid-cols-3 gap-4">
                <Input
                  name="expiryDate"
                  label="Expiry Date"
                  placeholder="MM/YY"
                  mask-type="date"
                  required
                />
                <Input
                  name="cvv"
                  label="CVV"
                  placeholder="123"
                  maxlength="4"
                  required
                />
                <div></div>
              </div>
              
              <Input
                name="cardholderName"
                label="Cardholder Name"
                placeholder="John Doe"
                left-icon="user"
                required
              />
            </div>
          </template>

          <!-- Step 3: Confirmation -->
          <template #step-3="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Order Confirmation</h3>
              <p class="opacity-70">Review your order details and confirm.</p>
              
              <div class="bg-base-200 p-4 rounded-lg space-y-2">
                <div class="flex justify-between">
                  <span>Subtotal:</span>
                  <span>$29.99</span>
                </div>
                <div class="flex justify-between">
                  <span>Shipping:</span>
                  <span>$5.99</span>
                </div>
                <div class="flex justify-between">
                  <span>Tax:</span>
                  <span>$2.40</span>
                </div>
                <div class="border-t pt-2 flex justify-between font-bold">
                  <span>Total:</span>
                  <span class="text-success">$38.38</span>
                </div>
              </div>
              
              <Checkbox
                name="confirmOrder"
                label="I confirm this order and agree to the terms"
                description="By checking this box, you confirm your order and agree to our terms of service"
                required
              />
            </div>
          </template>
        </FormWizard>
      </div>
    `})},F={args:{steps:[{title:"Step 1",description:"First step description"},{title:"Step 2",description:"Second step description"},{title:"Step 3",description:"Final step description"}],modelValue:0,showSteps:!1,showProgress:!1,showSummary:!1}},E={args:{steps:ee,modelValue:0,showSteps:!0,stepsVariant:"vertical",stepsColor:"info",showProgress:!0,showSummary:!0}},O={args:{steps:X,modelValue:0,nextButtonText:"Continue",previousButtonText:"Go Back",submitButtonText:"Finish Setup",stepsColor:"warning"}},$={args:{steps:[{title:"Welcome",description:"Welcome to our platform"},{title:"Information",description:"Learn about our features"},{title:"Complete",description:"You're all set!"}],modelValue:0,showSteps:!0,stepsColor:"success"}},B={args:{steps:[{title:"Account Setup",description:"Create your account",icon:"user"},{title:"Profile",description:"Complete your profile",icon:"settings"},{title:"Preferences",description:"Set your preferences",icon:"heart"},{title:"Verification",description:"Verify your account",icon:"check-circle"}],modelValue:0,showSteps:!0,stepsVariant:"vertical",stepsColor:"accent",showProgress:!0,showSummary:!0},render:i=>({components:{FormWizard:q,Input:P,Checkbox:V,Avatar:L,Icon:D},setup(){const u=m(i.modelValue),c=m({});return{args:i,currentStep:u,stepData:c,handleStepComplete:(x,p)=>{const t=JSON.parse(JSON.stringify(p,(w,r)=>{if(!(typeof r=="function"||r===void 0)&&!(r&&typeof r=="object"&&r.nodeType))return r}));c.value[`step_${x}`]=t},handleWizardComplete:x=>{alert("Enhanced wizard completed successfully!")}}},template:`
      <div class="w-full max-w-4xl">
        <FormWizard
          v-bind="args"
          v-model="currentStep"
          :step-data="stepData"
          @step-complete="handleStepComplete"
          @wizard-complete="handleWizardComplete"
        >
          <!-- Step 0: Account Setup -->
          <template #step-0="{ errors, meta }">
            <div class="space-y-6">
              <div class="text-center">
                <Avatar size="lg" fallback-color="primary" class="mx-auto mb-4">
                  <Icon name="user" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Account Setup</h3>
                <p class="opacity-70">Create your account to get started.</p>
              </div>
              
              <div class="space-y-4">
                <Input
                  name="username"
                  label="Username"
                  placeholder="johndoe"
                  left-icon="user"
                  required
                />
                
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="john.doe@example.com"
                  left-icon="mail"
                  required
                />
                
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  left-icon="lock"
                  required
                />
              </div>
            </div>
          </template>

          <!-- Step 1: Profile -->
          <template #step-1="{ errors, meta }">
            <div class="space-y-6">
              <div class="text-center">
                <Avatar size="lg" fallback-color="secondary" class="mx-auto mb-4">
                  <Icon name="settings" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Profile Information</h3>
                <p class="opacity-70">Tell us about yourself.</p>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  left-icon="user"
                  required
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  left-icon="user"
                  required
                />
              </div>
              
              <Input
                name="bio"
                label="Bio"
                placeholder="Tell us about yourself..."
                left-icon="message-circle"
              />
            </div>
          </template>

          <!-- Step 2: Preferences -->
          <template #step-2="{ errors, meta }">
            <div class="space-y-6">
              <div class="text-center">
                <Avatar size="lg" fallback-color="accent" class="mx-auto mb-4">
                  <Icon name="heart" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Preferences</h3>
                <p class="opacity-70">Set your communication preferences.</p>
              </div>
              
              <div class="space-y-4">
                <Checkbox
                  name="newsletter"
                  label="Subscribe to Newsletter"
                  description="Receive updates about new features"
                />
                
                <Checkbox
                  name="notifications"
                  label="Enable Notifications"
                  description="Get notified about important updates"
                />
                
                <Checkbox
                  name="marketing"
                  label="Marketing Communications"
                  description="Receive promotional emails"
                />
              </div>
            </div>
          </template>

          <!-- Step 3: Verification -->
          <template #step-3="{ errors, meta }">
            <div class="space-y-6">
              <div class="text-center">
                <Avatar size="lg" fallback-color="success" class="mx-auto mb-4">
                  <Icon name="check-circle" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Verification</h3>
                <p class="opacity-70">Review and confirm your information.</p>
              </div>
              
              <div class="card bg-base-200 shadow-sm">
                <div class="card-body">
                  <h4 class="card-title">Account Summary</h4>
                  <div class="space-y-2 text-sm">
                    <div><strong>Username:</strong> {{ stepData['step_0']?.username || 'Not provided' }}</div>
                    <div><strong>Email:</strong> {{ stepData['step_0']?.email || 'Not provided' }}</div>
                    <div><strong>Name:</strong> {{ stepData['step_1']?.firstName }} {{ stepData['step_1']?.lastName }}</div>
                    <div><strong>Newsletter:</strong> {{ stepData['step_2']?.newsletter ? 'Yes' : 'No' }}</div>
                    <div><strong>Notifications:</strong> {{ stepData['step_2']?.notifications ? 'Yes' : 'No' }}</div>
                  </div>
                </div>
              </div>
              
              <Checkbox
                name="terms"
                label="I accept the terms and conditions"
                description="You must accept the terms to continue"
                required
              />
            </div>
          </template>
        </FormWizard>
      </div>
    `})},R={render:()=>({components:{FormWizard:q,Input:P,Checkbox:V,Select:U,Avatar:L,Icon:D},setup(){const i=m(0),u=m({}),c=m(!1),n=m(!1),S=(r,b)=>{try{const f=JSON.parse(JSON.stringify(r,(C,s)=>{if(!(typeof s=="function"||s===void 0)&&!(s&&typeof s=="object"&&s.nodeType))return s&&typeof s=="object"&&s.$el?"[Vue Component]":s}));return JSON.stringify(f,null,b)}catch(f){try{const C={};return r&&typeof r=="object"&&Object.keys(r).forEach(s=>{const y=r[s];typeof y=="string"||typeof y=="number"||typeof y=="boolean"?C[s]=y:Array.isArray(y)?C[s]=y.map(T=>typeof T=="object"?"[Object]":T):y&&typeof y=="object"&&(C[s]="[Object]")}),JSON.stringify(C,null,b)}catch{return`[Serialization Error: ${f instanceof Error?f.message:"Unknown error"}]`}}},x=[{title:"Personal Info",description:"Tell us about yourself",schema:l({name:a().required("Name is required"),email:a().email("Valid email required").required("Email is required")})},{title:"Preferences",description:"Set your preferences",schema:l({newsletter:v().default(!1),notifications:v().default(!1)})},{title:"Confirmation",description:"Review and confirm",schema:l({terms:v().oneOf([!0],"Must accept terms").required("Terms must be accepted")})}];return{currentStep:i,stepData:u,isCompleted:c,isAutoAdvancing:n,interactiveSteps:x,safeStringify:S,handleStepChange:(r,b)=>{},handleStepComplete:(r,b)=>{const f=JSON.parse(JSON.stringify(b,(C,s)=>{if(!(typeof s=="function"||s===void 0)&&!(s&&typeof s=="object"&&s.nodeType))return s}));u.value[`step_${r}`]=f,r===0&&(n.value=!0,ve(()=>{i.value=1,setTimeout(()=>{n.value=!1},1e3)}))},handleWizardComplete:r=>{c.value=!0,alert("Wizard completed successfully! Check the console for data.")}}},template:`
      <div class="w-full max-w-2xl mx-auto">
        <div v-if="!isCompleted" class="space-y-6">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold mb-2">Interactive Form Wizard</h2>
            <p class="opacity-70">Try navigating through the steps and filling out the forms.</p>
            <div class="alert alert-info mt-4">
              <Icon name="user" size="sm" />
              <span><strong>Auto-advance feature:</strong> Step 1 will automatically advance to Step 2 when valid and submitted!</span>
            </div>
            
            <div v-if="isAutoAdvancing" class="alert alert-success mt-4">
              <Icon name="loading" size="sm" class="animate-spin" />
              <span><strong>Auto-advancing to step 2...</strong></span>
            </div>
          </div>

          <FormWizard
            v-model="currentStep"
            :steps="interactiveSteps"
            :step-data="stepData"
            :show-steps="true"
            :steps-color="'primary'"
            :show-progress="true"
            :show-summary="true"
            @step-change="handleStepChange"
            @step-complete="handleStepComplete"
            @wizard-complete="handleWizardComplete"
          >
            <!-- Step 0: Personal Info -->
            <template #step-0="{ errors, meta, allStepData }">
              <div class="space-y-6">
                <div class="flex items-center flex-col text-center">
                  <Avatar 
                    size="lg" 
                    fallback-color="primary" 
                    class="mx-auto mb-4"
                    alt="Personal Info"
                  >
                    <Icon name="user" size="lg" />
                  </Avatar>
                  <h3 class="text-xl font-bold mb-2">Personal Information</h3>
                  <p class="opacity-70">Please provide your basic details.</p>
                </div>

                <div class="space-y-4">
                  <Input
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                    left-icon="user"
                    required
                  />
                  
                  <Input
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="john.doe@example.com"
                    left-icon="mail"
                    required
                  />
                </div>

                <div class="bg-base-200 p-4 rounded-lg">
                  <h4 class="font-semibold mb-2">Current Step Data:</h4>
                  <pre class="text-xs">{{ safeStringify(stepData, 2) }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">All Steps Data:</h4>
                  <pre class="text-xs">{{ safeStringify(allStepData || {}, 2) }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">Validation State:</h4>
                  <pre class="text-xs">Valid: {{ meta.valid }}, Dirty: {{ meta.dirty }}, Touched: {{ meta.touched }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">Errors:</h4>
                  <pre class="text-xs">{{ safeStringify(errors, 2) }}</pre>
                  
                  <div v-if="meta.valid && meta.dirty" class="alert alert-success mt-4">
                    <Icon name="check-circle" size="sm" />
                    <span>Form is valid! Click "Next" to auto-advance to step 2.</span>
                  </div>
                </div>
              </div>
            </template>

            <!-- Step 1: Preferences -->
            <template #step-1="{ errors, meta, allStepData }">
              <div class="space-y-6">
                <div class="text-center">
                  <Avatar 
                    size="lg" 
                    fallback-color="secondary" 
                    class="mx-auto mb-4"
                  >
                    <Icon name="settings" size="lg" />
                  </Avatar>
                  <h3 class="text-xl font-bold mb-2">Preferences</h3>
                  <p class="opacity-70">Set your communication preferences.</p>
                </div>

                <div class="space-y-4">
                  <Checkbox
                    name="newsletter"
                    label="Subscribe to Newsletter"
                    description="Receive updates about new features"
                  />
                  
                  <Checkbox
                    name="notifications"
                    label="Enable Notifications"
                    description="Get notified about important updates"
                  />
                </div>

                <div class="bg-base-200 p-4 rounded-lg">
                  <h4 class="font-semibold mb-2">Current Step Data:</h4>
                  <pre class="text-xs">{{ safeStringify(stepData, 2) }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">All Steps Data:</h4>
                  <pre class="text-xs">{{ safeStringify(allStepData || {}, 2) }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">Validation State:</h4>
                  <pre class="text-xs">Valid: {{ meta.valid }}, Dirty: {{ meta.dirty }}, Touched: {{ meta.touched }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">Errors:</h4>
                  <pre class="text-xs">{{ safeStringify(errors, 2) }}</pre>
                </div>
              </div>
            </template>

            <!-- Step 2: Confirmation -->
            <template #step-2="{ errors, meta, allStepData }">
              <div class="space-y-6">
                <div class="text-center">
                  <Avatar 
                    size="lg" 
                    fallback-color="success" 
                    class="mx-auto mb-4"
                  >
                    <Icon name="check-circle" size="lg" />
                  </Avatar>
                  <h3 class="text-xl font-bold mb-2">Confirmation</h3>
                  <p class="opacity-70">Review your information and confirm.</p>
                </div>

                <div class="card bg-base-100 shadow-sm">
                  <div class="card-body">
                    <h4 class="card-title">Summary</h4>
                    <div class="space-y-2 text-sm">
                      <div><strong>Name:</strong> {{ stepData['step_0']?.name || 'Not provided' }}</div>
                      <div><strong>Email:</strong> {{ stepData['step_0']?.email || 'Not provided' }}</div>
                      <div><strong>Newsletter:</strong> {{ stepData['step_1']?.newsletter ? 'Yes' : 'No' }}</div>
                      <div><strong>Notifications:</strong> {{ stepData['step_1']?.notifications ? 'Yes' : 'No' }}</div>
                    </div>
                  </div>
                </div>

                <Checkbox
                  name="terms"
                  label="I accept the terms and conditions"
                  description="You must accept the terms to continue"
                  required
                />

                <div class="bg-base-200 p-4 rounded-lg">
                  <h4 class="font-semibold mb-2">Validation State:</h4>
                  <pre class="text-xs">Valid: {{ meta.valid }}, Dirty: {{ meta.dirty }}, Touched: {{ meta.touched }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">Errors:</h4>
                  <pre class="text-xs">{{ safeStringify(errors, 2) }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">All Steps Data:</h4>
                  <pre class="text-xs">{{ safeStringify(allStepData || {}, 2) }}</pre>
                </div>
              </div>
            </template>
          </FormWizard>
        </div>

        <div v-else class="text-center py-12">
          <Avatar 
            size="xl" 
            fallback-color="success" 
            class="mx-auto mb-6"
          >
            <Icon name="check-circle" size="xl" />
          </Avatar>
          <h2 class="text-2xl font-bold mb-4">Wizard Completed!</h2>
          <p class="opacity-70 mb-6">Thank you for completing the form wizard.</p>
          
          <div class="card bg-base-200 shadow-sm">
            <div class="card-body">
              <h4 class="font-semibold mb-3">Final Data:</h4>
              <pre class="text-xs overflow-auto">{{ safeStringify(stepData, 2) }}</pre>
            </div>
          </div>

          <button 
            @click="isCompleted = false; currentStep = 0; stepData = {}" 
            class="btn btn-primary mt-6"
          >
            Start Over
          </button>
        </div>
      </div>
    `})};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    modelValue: 0,
    showSteps: true,
    stepsColor: 'primary',
    showProgress: true,
    showSummary: true
  },
  render: args => ({
    components: {
      FormWizard,
      Input,
      Textarea,
      Checkbox
    },
    setup() {
      const currentStep = ref(args.modelValue);
      const stepData = ref<Record<string, any>>({});
      const handleStepChange = (step: number, previousStep: number) => {
        // Step change handled silently
      };
      const handleStepComplete = (step: number, data: any) => {
        stepData.value[\`step_\${step}\`] = data;
      };
      const handleWizardComplete = (data: any) => {
        alert('Form wizard completed successfully!');
      };
      return {
        args,
        currentStep,
        stepData,
        handleStepChange,
        handleStepComplete,
        handleWizardComplete
      };
    },
    template: \`
      <div class="w-full max-w-2xl">
        <FormWizard
          v-bind="args"
          v-model="currentStep"
          :step-data="stepData"
          @step-change="handleStepChange"
          @step-complete="handleStepComplete"
          @wizard-complete="handleWizardComplete"
        >
          <!-- Step 0: Personal Information -->
          <template #step-0="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Personal Information</h3>
              <p class="opacity-70">Please enter your basic details below.</p>
              
              <div class="grid grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  left-icon="user"
                  required
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  left-icon="user"
                  required
                />
              </div>
              
              <Input
                name="email"
                label="Email"
                type="email"
                placeholder="john.doe@example.com"
                left-icon="mail"
                required
              />
            </div>
          </template>

          <!-- Step 1: Contact Details -->
          <template #step-1="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Contact Details</h3>
              <p class="opacity-70">Provide your contact information.</p>
              
              <Input
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 123-4567"
                left-icon="phone"
                required
              />
              
              <Input
                name="address"
                label="Address"
                placeholder="123 Main Street"
                left-icon="map-pin"
                required
              />
              
              <Input
                name="city"
                label="City"
                placeholder="New York"
                left-icon="building"
                required
              />
            </div>
          </template>

          <!-- Step 2: Preferences -->
          <template #step-2="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Preferences</h3>
              <p class="opacity-70">Set your communication preferences.</p>
              
              <Checkbox
                name="newsletter"
                label="Subscribe to newsletter"
                description="Receive updates about new features and products"
              />
              
              <Checkbox
                name="notifications"
                label="Enable notifications"
                description="Get notified about important updates"
              />
              
              <Checkbox
                name="terms"
                label="I accept the terms and conditions"
                description="You must accept the terms to continue"
                required
              />
            </div>
          </template>
        </FormWizard>
      </div>
    \`
  })
}`,...W.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    steps: accountSetupSteps,
    modelValue: 0,
    showSteps: true,
    stepsVariant: 'vertical',
    stepsColor: 'accent',
    showProgress: true,
    showSummary: true
  },
  render: args => ({
    components: {
      FormWizard,
      Input,
      Select,
      Textarea,
      Checkbox,
      Toggle
    },
    setup() {
      const currentStep = ref(args.modelValue);
      const stepData = ref<Record<string, any>>({});
      const languages = [{
        value: 'en',
        label: 'English'
      }, {
        value: 'es',
        label: 'Spanish'
      }, {
        value: 'fr',
        label: 'French'
      }, {
        value: 'de',
        label: 'German'
      }];
      const timezones = [{
        value: 'utc',
        label: 'UTC'
      }, {
        value: 'est',
        label: 'Eastern Time'
      }, {
        value: 'pst',
        label: 'Pacific Time'
      }, {
        value: 'gmt',
        label: 'Greenwich Mean Time'
      }];
      const handleWizardComplete = (data: any) => {
        alert('Account created successfully!');
      };
      return {
        args,
        currentStep,
        stepData,
        languages,
        timezones,
        handleWizardComplete
      };
    },
    template: \`
      <div class="w-full max-w-4xl">
        <FormWizard
          v-bind="args"
          v-model="currentStep"
          :step-data="stepData"
          @wizard-complete="handleWizardComplete"
        >
          <!-- Step 0: Account Details -->
          <template #step-0="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Account Details</h3>
              <p class="opacity-70">Create your account with a username and password.</p>
              
              <Input
                name="username"
                label="Username"
                placeholder="johndoe"
                left-icon="user"
                required
              />
              
              <Input
                name="email"
                label="Email"
                type="email"
                placeholder="john.doe@example.com"
                left-icon="mail"
                required
              />
              
              <div class="grid grid-cols-2 gap-4">
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  left-icon="lock"
                  required
                />
                <Input
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="••••••••"
                  left-icon="lock"
                  required
                />
              </div>
            </div>
          </template>

          <!-- Step 1: Profile Information -->
          <template #step-1="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Profile Information</h3>
              <p class="opacity-70">Tell us about yourself.</p>
              
              <div class="grid grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  left-icon="user"
                  required
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  left-icon="user"
                  required
                />
              </div>
              
              <Textarea
                name="bio"
                label="Bio"
                placeholder="Tell us about yourself..."
                maxlength="200"
                show-char-count
              />
              
              <Input
                name="website"
                label="Website"
                type="url"
                placeholder="https://example.com"
                left-icon="link"
              />
            </div>
          </template>

          <!-- Step 2: Preferences -->
          <template #step-2="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Preferences</h3>
              <p class="opacity-70">Set your account preferences.</p>
              
              <Select
                name="language"
                label="Language"
                :options="languages"
                placeholder="Select language"
                required
              />
              
              <Select
                name="timezone"
                label="Timezone"
                :options="timezones"
                placeholder="Select timezone"
                required
              />
              
              <Toggle
                name="notifications"
                label="Enable notifications"
                description="Receive push notifications"
              />
              
              <Toggle
                name="newsletter"
                label="Subscribe to newsletter"
                description="Get weekly updates"
              />
            </div>
          </template>

          <!-- Step 3: Verification -->
          <template #step-3="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Verification</h3>
              <p class="opacity-70">Please review and accept the terms.</p>
              
              <div class="bg-base-200 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Terms and Conditions</h4>
                <p class="text-sm opacity-70 mb-4">
                  By creating an account, you agree to our terms of service and privacy policy.
                  We will use your information to provide you with the best possible experience.
                </p>
                
                <Checkbox
                  name="terms"
                  label="I accept the terms and conditions"
                  required
                />
              </div>
              
              <div class="bg-base-200 p-4 rounded-lg">
                <h4 class="font-semibold mb-2">Privacy Policy</h4>
                <p class="text-sm opacity-70 mb-4">
                  We respect your privacy and will never share your personal information
                  with third parties without your explicit consent.
                </p>
                
                <Checkbox
                  name="privacy"
                  label="I accept the privacy policy"
                  required
                />
              </div>
            </div>
          </template>
        </FormWizard>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    steps: checkoutSteps,
    modelValue: 0,
    showSteps: true,
    stepsColor: 'success',
    showProgress: true,
    showSummary: true
  },
  render: args => ({
    components: {
      FormWizard,
      Input,
      Select,
      Checkbox
    },
    setup() {
      const currentStep = ref(args.modelValue);
      const stepData = ref<Record<string, any>>({});
      const shippingMethods = [{
        value: 'standard',
        label: 'Standard Shipping (3-5 days)',
        price: '$5.99'
      }, {
        value: 'express',
        label: 'Express Shipping (1-2 days)',
        price: '$12.99'
      }, {
        value: 'overnight',
        label: 'Overnight Shipping',
        price: '$24.99'
      }];
      const handleWizardComplete = (data: any) => {
        alert('Order placed successfully!');
      };
      return {
        args,
        currentStep,
        stepData,
        shippingMethods,
        handleWizardComplete
      };
    },
    template: \`
      <div class="w-full max-w-2xl">
        <FormWizard
          v-bind="args"
          v-model="currentStep"
          :step-data="stepData"
          @wizard-complete="handleWizardComplete"
        >
          <!-- Step 0: Cart Review -->
          <template #step-0="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Cart Review</h3>
              <p class="opacity-70">Review your items before checkout.</p>
              
              <div class="bg-base-200 p-4 rounded-lg">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium">Product Name</span>
                  <span class="text-success font-semibold">$29.99</span>
                </div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium">Quantity</span>
                  <span>1</span>
                </div>
                <div class="border-t pt-2 flex justify-between items-center">
                  <span class="font-bold">Total</span>
                  <span class="text-success font-bold">$29.99</span>
                </div>
              </div>
            </div>
          </template>

          <!-- Step 1: Shipping -->
          <template #step-1="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Shipping Information</h3>
              <p class="opacity-70">Enter your shipping details.</p>
              
              <Input
                name="address"
                label="Address"
                placeholder="123 Main Street"
                left-icon="map-pin"
                required
              />
              
              <div class="grid grid-cols-2 gap-4">
                <Input
                  name="city"
                  label="City"
                  placeholder="New York"
                  left-icon="building"
                  required
                />
                <Input
                  name="zipCode"
                  label="ZIP Code"
                  placeholder="10001"
                  left-icon="map-pin"
                  required
                />
              </div>
              
              <Input
                name="country"
                label="Country"
                placeholder="United States"
                left-icon="globe"
                required
              />
              
              <Select
                name="shippingMethod"
                label="Shipping Method"
                :options="shippingMethods"
                placeholder="Select shipping method"
                required
              />
            </div>
          </template>

          <!-- Step 2: Payment -->
          <template #step-2="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Payment Information</h3>
              <p class="opacity-70">Enter your payment details securely.</p>
              
              <Input
                name="cardNumber"
                label="Card Number"
                placeholder="1234 5678 9012 3456"
                left-icon="credit-card"
                mask-type="credit-card"
                required
              />
              
              <div class="grid grid-cols-3 gap-4">
                <Input
                  name="expiryDate"
                  label="Expiry Date"
                  placeholder="MM/YY"
                  mask-type="date"
                  required
                />
                <Input
                  name="cvv"
                  label="CVV"
                  placeholder="123"
                  maxlength="4"
                  required
                />
                <div></div>
              </div>
              
              <Input
                name="cardholderName"
                label="Cardholder Name"
                placeholder="John Doe"
                left-icon="user"
                required
              />
            </div>
          </template>

          <!-- Step 3: Confirmation -->
          <template #step-3="{ errors, meta }">
            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Order Confirmation</h3>
              <p class="opacity-70">Review your order details and confirm.</p>
              
              <div class="bg-base-200 p-4 rounded-lg space-y-2">
                <div class="flex justify-between">
                  <span>Subtotal:</span>
                  <span>$29.99</span>
                </div>
                <div class="flex justify-between">
                  <span>Shipping:</span>
                  <span>$5.99</span>
                </div>
                <div class="flex justify-between">
                  <span>Tax:</span>
                  <span>$2.40</span>
                </div>
                <div class="border-t pt-2 flex justify-between font-bold">
                  <span>Total:</span>
                  <span class="text-success">$38.38</span>
                </div>
              </div>
              
              <Checkbox
                name="confirmOrder"
                label="I confirm this order and agree to the terms"
                description="By checking this box, you confirm your order and agree to our terms of service"
                required
              />
            </div>
          </template>
        </FormWizard>
      </div>
    \`
  })
}`,...j.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: 'Step 1',
      description: 'First step description'
    }, {
      title: 'Step 2',
      description: 'Second step description'
    }, {
      title: 'Step 3',
      description: 'Final step description'
    }],
    modelValue: 0,
    showSteps: false,
    showProgress: false,
    showSummary: false
  }
}`,...F.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    steps: accountSetupSteps,
    modelValue: 0,
    showSteps: true,
    stepsVariant: 'vertical',
    stepsColor: 'info',
    showProgress: true,
    showSummary: true
  }
}`,...E.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    modelValue: 0,
    nextButtonText: 'Continue',
    previousButtonText: 'Go Back',
    submitButtonText: 'Finish Setup',
    stepsColor: 'warning'
  }
}`,...O.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: 'Welcome',
      description: 'Welcome to our platform'
    }, {
      title: 'Information',
      description: 'Learn about our features'
    }, {
      title: 'Complete',
      description: "You're all set!"
    }],
    modelValue: 0,
    showSteps: true,
    stepsColor: 'success'
  }
}`,...$.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: 'Account Setup',
      description: 'Create your account',
      icon: 'user' as const
    }, {
      title: 'Profile',
      description: 'Complete your profile',
      icon: 'settings' as const
    }, {
      title: 'Preferences',
      description: 'Set your preferences',
      icon: 'heart' as const
    }, {
      title: 'Verification',
      description: 'Verify your account',
      icon: 'check-circle' as const
    }],
    modelValue: 0,
    showSteps: true,
    stepsVariant: 'vertical',
    stepsColor: 'accent',
    showProgress: true,
    showSummary: true
  },
  render: args => ({
    components: {
      FormWizard,
      Input,
      Checkbox,
      Avatar,
      Icon
    },
    setup() {
      const currentStep = ref(args.modelValue);
      const stepData = ref<Record<string, any>>({});
      const handleStepComplete = (step: number, data: any) => {
        // Create a clean copy of the data to avoid circular references
        const cleanData = JSON.parse(JSON.stringify(data, (key, value) => {
          if (typeof value === 'function' || value === undefined) {
            return undefined;
          }
          if (value && typeof value === 'object' && value.nodeType) {
            return undefined;
          }
          return value;
        }));
        stepData.value[\`step_\${step}\`] = cleanData;
      };
      const handleWizardComplete = (data: any) => {
        alert('Enhanced wizard completed successfully!');
      };
      return {
        args,
        currentStep,
        stepData,
        handleStepComplete,
        handleWizardComplete
      };
    },
    template: \`
      <div class="w-full max-w-4xl">
        <FormWizard
          v-bind="args"
          v-model="currentStep"
          :step-data="stepData"
          @step-complete="handleStepComplete"
          @wizard-complete="handleWizardComplete"
        >
          <!-- Step 0: Account Setup -->
          <template #step-0="{ errors, meta }">
            <div class="space-y-6">
              <div class="text-center">
                <Avatar size="lg" fallback-color="primary" class="mx-auto mb-4">
                  <Icon name="user" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Account Setup</h3>
                <p class="opacity-70">Create your account to get started.</p>
              </div>
              
              <div class="space-y-4">
                <Input
                  name="username"
                  label="Username"
                  placeholder="johndoe"
                  left-icon="user"
                  required
                />
                
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="john.doe@example.com"
                  left-icon="mail"
                  required
                />
                
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  left-icon="lock"
                  required
                />
              </div>
            </div>
          </template>

          <!-- Step 1: Profile -->
          <template #step-1="{ errors, meta }">
            <div class="space-y-6">
              <div class="text-center">
                <Avatar size="lg" fallback-color="secondary" class="mx-auto mb-4">
                  <Icon name="settings" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Profile Information</h3>
                <p class="opacity-70">Tell us about yourself.</p>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  left-icon="user"
                  required
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  left-icon="user"
                  required
                />
              </div>
              
              <Input
                name="bio"
                label="Bio"
                placeholder="Tell us about yourself..."
                left-icon="message-circle"
              />
            </div>
          </template>

          <!-- Step 2: Preferences -->
          <template #step-2="{ errors, meta }">
            <div class="space-y-6">
              <div class="text-center">
                <Avatar size="lg" fallback-color="accent" class="mx-auto mb-4">
                  <Icon name="heart" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Preferences</h3>
                <p class="opacity-70">Set your communication preferences.</p>
              </div>
              
              <div class="space-y-4">
                <Checkbox
                  name="newsletter"
                  label="Subscribe to Newsletter"
                  description="Receive updates about new features"
                />
                
                <Checkbox
                  name="notifications"
                  label="Enable Notifications"
                  description="Get notified about important updates"
                />
                
                <Checkbox
                  name="marketing"
                  label="Marketing Communications"
                  description="Receive promotional emails"
                />
              </div>
            </div>
          </template>

          <!-- Step 3: Verification -->
          <template #step-3="{ errors, meta }">
            <div class="space-y-6">
              <div class="text-center">
                <Avatar size="lg" fallback-color="success" class="mx-auto mb-4">
                  <Icon name="check-circle" size="lg" />
                </Avatar>
                <h3 class="text-xl font-bold mb-2">Verification</h3>
                <p class="opacity-70">Review and confirm your information.</p>
              </div>
              
              <div class="card bg-base-200 shadow-sm">
                <div class="card-body">
                  <h4 class="card-title">Account Summary</h4>
                  <div class="space-y-2 text-sm">
                    <div><strong>Username:</strong> {{ stepData['step_0']?.username || 'Not provided' }}</div>
                    <div><strong>Email:</strong> {{ stepData['step_0']?.email || 'Not provided' }}</div>
                    <div><strong>Name:</strong> {{ stepData['step_1']?.firstName }} {{ stepData['step_1']?.lastName }}</div>
                    <div><strong>Newsletter:</strong> {{ stepData['step_2']?.newsletter ? 'Yes' : 'No' }}</div>
                    <div><strong>Notifications:</strong> {{ stepData['step_2']?.notifications ? 'Yes' : 'No' }}</div>
                  </div>
                </div>
              </div>
              
              <Checkbox
                name="terms"
                label="I accept the terms and conditions"
                description="You must accept the terms to continue"
                required
              />
            </div>
          </template>
        </FormWizard>
      </div>
    \`
  })
}`,...B.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FormWizard,
      Input,
      Checkbox,
      Select,
      Avatar,
      Icon
    },
    setup() {
      const currentStep = ref(0);
      const stepData = ref<Record<string, any>>({});
      const isCompleted = ref(false);
      const isAutoAdvancing = ref(false);

      // Safe JSON stringify function to handle circular references
      const safeStringify = (obj: any, space?: number) => {
        try {
          // First try to create a clean copy
          const cleanObj = JSON.parse(JSON.stringify(obj, (key, value) => {
            // Skip functions, undefined, and non-serializable objects
            if (typeof value === 'function' || value === undefined) {
              return undefined;
            }
            // Skip DOM elements and other non-serializable objects
            if (value && typeof value === 'object' && value.nodeType) {
              return undefined;
            }
            // Skip objects that might cause circular references
            if (value && typeof value === 'object' && value.$el) {
              return '[Vue Component]';
            }
            return value;
          }));
          return JSON.stringify(cleanObj, null, space);
        } catch (error) {
          // If that fails, try a more aggressive approach
          try {
            const simpleObj: Record<string, any> = {};
            if (obj && typeof obj === 'object') {
              Object.keys(obj).forEach(key => {
                const value = obj[key];
                if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                  simpleObj[key] = value;
                } else if (Array.isArray(value)) {
                  simpleObj[key] = value.map(item => typeof item === 'object' ? '[Object]' : item);
                } else if (value && typeof value === 'object') {
                  simpleObj[key] = '[Object]';
                }
              });
            }
            return JSON.stringify(simpleObj, null, space);
          } catch (fallbackError) {
            return \`[Serialization Error: \${error instanceof Error ? error.message : 'Unknown error'}]\`;
          }
        }
      };
      const interactiveSteps = [{
        title: 'Personal Info',
        description: 'Tell us about yourself',
        schema: yup.object({
          name: yup.string().required('Name is required'),
          email: yup.string().email('Valid email required').required('Email is required')
        })
      }, {
        title: 'Preferences',
        description: 'Set your preferences',
        schema: yup.object({
          newsletter: yup.boolean().default(false),
          notifications: yup.boolean().default(false)
        })
      }, {
        title: 'Confirmation',
        description: 'Review and confirm',
        schema: yup.object({
          terms: yup.boolean().oneOf([true], 'Must accept terms').required('Terms must be accepted')
        })
      }];
      const handleStepChange = (step: number, previousStep: number) => {
        // Step change handled silently
      };
      const handleStepComplete = (step: number, data: any) => {
        // Create a clean copy of the data to avoid circular references
        const cleanData = JSON.parse(JSON.stringify(data, (key, value) => {
          // Skip functions, undefined, and non-serializable objects
          if (typeof value === 'function' || value === undefined) {
            return undefined;
          }
          // Skip DOM elements and other non-serializable objects
          if (value && typeof value === 'object' && value.nodeType) {
            return undefined;
          }
          return value;
        }));

        // Store data directly without step key prefix to avoid nesting
        stepData.value[\`step_\${step}\`] = cleanData;

        // Auto-advance to step 2 when step 1 is completed
        if (step === 0) {
          isAutoAdvancing.value = true;
          // Use nextTick to ensure the step data is updated before navigation
          nextTick(() => {
            currentStep.value = 1;
            // Reset the auto-advancing flag after a short delay
            setTimeout(() => {
              isAutoAdvancing.value = false;
            }, 1000);
          });
        }
      };
      const handleWizardComplete = (data: any) => {
        isCompleted.value = true;
        alert('Wizard completed successfully! Check the console for data.');
      };
      return {
        currentStep,
        stepData,
        isCompleted,
        isAutoAdvancing,
        interactiveSteps,
        safeStringify,
        handleStepChange,
        handleStepComplete,
        handleWizardComplete
      };
    },
    template: \`
      <div class="w-full max-w-2xl mx-auto">
        <div v-if="!isCompleted" class="space-y-6">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold mb-2">Interactive Form Wizard</h2>
            <p class="opacity-70">Try navigating through the steps and filling out the forms.</p>
            <div class="alert alert-info mt-4">
              <Icon name="user" size="sm" />
              <span><strong>Auto-advance feature:</strong> Step 1 will automatically advance to Step 2 when valid and submitted!</span>
            </div>
            
            <div v-if="isAutoAdvancing" class="alert alert-success mt-4">
              <Icon name="loading" size="sm" class="animate-spin" />
              <span><strong>Auto-advancing to step 2...</strong></span>
            </div>
          </div>

          <FormWizard
            v-model="currentStep"
            :steps="interactiveSteps"
            :step-data="stepData"
            :show-steps="true"
            :steps-color="'primary'"
            :show-progress="true"
            :show-summary="true"
            @step-change="handleStepChange"
            @step-complete="handleStepComplete"
            @wizard-complete="handleWizardComplete"
          >
            <!-- Step 0: Personal Info -->
            <template #step-0="{ errors, meta, allStepData }">
              <div class="space-y-6">
                <div class="flex items-center flex-col text-center">
                  <Avatar 
                    size="lg" 
                    fallback-color="primary" 
                    class="mx-auto mb-4"
                    alt="Personal Info"
                  >
                    <Icon name="user" size="lg" />
                  </Avatar>
                  <h3 class="text-xl font-bold mb-2">Personal Information</h3>
                  <p class="opacity-70">Please provide your basic details.</p>
                </div>

                <div class="space-y-4">
                  <Input
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                    left-icon="user"
                    required
                  />
                  
                  <Input
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="john.doe@example.com"
                    left-icon="mail"
                    required
                  />
                </div>

                <div class="bg-base-200 p-4 rounded-lg">
                  <h4 class="font-semibold mb-2">Current Step Data:</h4>
                  <pre class="text-xs">{{ safeStringify(stepData, 2) }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">All Steps Data:</h4>
                  <pre class="text-xs">{{ safeStringify(allStepData || {}, 2) }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">Validation State:</h4>
                  <pre class="text-xs">Valid: {{ meta.valid }}, Dirty: {{ meta.dirty }}, Touched: {{ meta.touched }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">Errors:</h4>
                  <pre class="text-xs">{{ safeStringify(errors, 2) }}</pre>
                  
                  <div v-if="meta.valid && meta.dirty" class="alert alert-success mt-4">
                    <Icon name="check-circle" size="sm" />
                    <span>Form is valid! Click "Next" to auto-advance to step 2.</span>
                  </div>
                </div>
              </div>
            </template>

            <!-- Step 1: Preferences -->
            <template #step-1="{ errors, meta, allStepData }">
              <div class="space-y-6">
                <div class="text-center">
                  <Avatar 
                    size="lg" 
                    fallback-color="secondary" 
                    class="mx-auto mb-4"
                  >
                    <Icon name="settings" size="lg" />
                  </Avatar>
                  <h3 class="text-xl font-bold mb-2">Preferences</h3>
                  <p class="opacity-70">Set your communication preferences.</p>
                </div>

                <div class="space-y-4">
                  <Checkbox
                    name="newsletter"
                    label="Subscribe to Newsletter"
                    description="Receive updates about new features"
                  />
                  
                  <Checkbox
                    name="notifications"
                    label="Enable Notifications"
                    description="Get notified about important updates"
                  />
                </div>

                <div class="bg-base-200 p-4 rounded-lg">
                  <h4 class="font-semibold mb-2">Current Step Data:</h4>
                  <pre class="text-xs">{{ safeStringify(stepData, 2) }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">All Steps Data:</h4>
                  <pre class="text-xs">{{ safeStringify(allStepData || {}, 2) }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">Validation State:</h4>
                  <pre class="text-xs">Valid: {{ meta.valid }}, Dirty: {{ meta.dirty }}, Touched: {{ meta.touched }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">Errors:</h4>
                  <pre class="text-xs">{{ safeStringify(errors, 2) }}</pre>
                </div>
              </div>
            </template>

            <!-- Step 2: Confirmation -->
            <template #step-2="{ errors, meta, allStepData }">
              <div class="space-y-6">
                <div class="text-center">
                  <Avatar 
                    size="lg" 
                    fallback-color="success" 
                    class="mx-auto mb-4"
                  >
                    <Icon name="check-circle" size="lg" />
                  </Avatar>
                  <h3 class="text-xl font-bold mb-2">Confirmation</h3>
                  <p class="opacity-70">Review your information and confirm.</p>
                </div>

                <div class="card bg-base-100 shadow-sm">
                  <div class="card-body">
                    <h4 class="card-title">Summary</h4>
                    <div class="space-y-2 text-sm">
                      <div><strong>Name:</strong> {{ stepData['step_0']?.name || 'Not provided' }}</div>
                      <div><strong>Email:</strong> {{ stepData['step_0']?.email || 'Not provided' }}</div>
                      <div><strong>Newsletter:</strong> {{ stepData['step_1']?.newsletter ? 'Yes' : 'No' }}</div>
                      <div><strong>Notifications:</strong> {{ stepData['step_1']?.notifications ? 'Yes' : 'No' }}</div>
                    </div>
                  </div>
                </div>

                <Checkbox
                  name="terms"
                  label="I accept the terms and conditions"
                  description="You must accept the terms to continue"
                  required
                />

                <div class="bg-base-200 p-4 rounded-lg">
                  <h4 class="font-semibold mb-2">Validation State:</h4>
                  <pre class="text-xs">Valid: {{ meta.valid }}, Dirty: {{ meta.dirty }}, Touched: {{ meta.touched }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">Errors:</h4>
                  <pre class="text-xs">{{ safeStringify(errors, 2) }}</pre>
                  <h4 class="font-semibold mb-2 mt-4">All Steps Data:</h4>
                  <pre class="text-xs">{{ safeStringify(allStepData || {}, 2) }}</pre>
                </div>
              </div>
            </template>
          </FormWizard>
        </div>

        <div v-else class="text-center py-12">
          <Avatar 
            size="xl" 
            fallback-color="success" 
            class="mx-auto mb-6"
          >
            <Icon name="check-circle" size="xl" />
          </Avatar>
          <h2 class="text-2xl font-bold mb-4">Wizard Completed!</h2>
          <p class="opacity-70 mb-6">Thank you for completing the form wizard.</p>
          
          <div class="card bg-base-200 shadow-sm">
            <div class="card-body">
              <h4 class="font-semibold mb-3">Final Data:</h4>
              <pre class="text-xs overflow-auto">{{ safeStringify(stepData, 2) }}</pre>
            </div>
          </div>

          <button 
            @click="isCompleted = false; currentStep = 0; stepData = {}" 
            class="btn btn-primary mt-6"
          >
            Start Over
          </button>
        </div>
      </div>
    \`
  })
}`,...R.parameters?.docs?.source}}};const ct=["Default","AccountSetup","CheckoutProcess","Minimal","VerticalSteps","CustomButtons","NoValidation","EnhancedSteps","InteractiveWizard"];export{_ as AccountSetup,j as CheckoutProcess,O as CustomButtons,W as Default,B as EnhancedSteps,R as InteractiveWizard,F as Minimal,$ as NoValidation,E as VerticalSteps,ct as __namedExportsOrder,lt as default};
