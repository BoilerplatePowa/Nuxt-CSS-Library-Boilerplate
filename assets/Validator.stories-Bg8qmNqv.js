import{d as Z,m as P,h as G,r as m,c as i,a as l,b as o,l as v,n as b,v as W,t as f,y as E,R as H,C as J,F as R,g as X,o as t}from"./iframe-CzrYmmIK.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const Q={class:"form-control"},ee={key:0,class:"label"},ae={key:0,class:"text-error ml-1"},se={class:"relative"},le=["type","placeholder","disabled","readonly","maxlength"],te=["placeholder","disabled","readonly","maxlength","rows"],re={key:0,class:"w-5 h-5 text-success",fill:"currentColor",viewBox:"0 0 20 20"},oe={key:1,class:"w-5 h-5 text-error",fill:"currentColor",viewBox:"0 0 20 20"},ne={key:3,class:"absolute bottom-2 right-2 text-xs opacity-60"},ue={key:1,class:"label"},ie={key:0,class:"label-text-alt text-success"},de={key:1,class:"space-y-1"},me={key:2,class:"label"},ce={class:"label-text-alt opacity-70"},pe={key:0,class:"flex items-center gap-2 text-success"},ve={key:1,class:"space-y-1"},fe={class:"flex items-center gap-2 text-error"},he={class:"text-sm font-medium"},ge={class:"text-xs space-y-0.5 ml-6"},Y=Z({__name:"Validator",props:P({label:{},placeholder:{},helperText:{},successMessage:{},type:{default:"text"},size:{default:"md"},variant:{default:"default"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},maxLength:{},rows:{default:4},rules:{default:()=>[]},validateOnInput:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:!0},showValidationIcon:{type:Boolean,default:!0},showCharCount:{type:Boolean,default:!1},showSummary:{type:Boolean,default:!1},email:{type:Boolean},url:{type:Boolean},minLength:{},pattern:{},customValidator:{}},{modelValue:{default:""},modelModifiers:{}}),emits:P(["validate","focus","blur"],["update:modelValue"]),setup(r,{expose:d,emit:B}){const a=r,c=G(r,"modelValue"),z=B,p=m(!1),M=m(!1),_=i(()=>{const e=[];return a.required&&e.push({name:"required",test:s=>s.trim().length>0,message:"This field is required"}),a.minLength&&e.push({name:"minLength",test:s=>s.length>=(a.minLength||0),message:`Must be at least ${a.minLength} characters`}),a.maxLength&&e.push({name:"maxLength",test:s=>s.length<=(a.maxLength||1/0),message:`Must be no more than ${a.maxLength} characters`}),(a.email||a.type==="email")&&e.push({name:"email",test:s=>!s||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s),message:"Please enter a valid email address"}),(a.url||a.type==="url")&&e.push({name:"url",test:s=>!s||/^https?:\/\/[^\s]+$/.test(s),message:"Please enter a valid URL"}),a.pattern&&e.push({name:"pattern",test:s=>!s||a.pattern.test(s),message:"Please match the required format"}),a.customValidator&&e.push({name:"custom",test:s=>a.customValidator(s)===null,message:a.customValidator(c.value)||"Invalid value"}),e}),O=i(()=>[..._.value,...a.rules]),g=i(()=>{const e=[],s=c.value;for(const u of O.value)u.test(s)||e.push(u.message);return e}),n=i(()=>g.value.length===0),F=i(()=>{const e=["validator"];return a.size==="sm"?e.push("text-sm"):a.size==="lg"&&e.push("text-lg"),e.join(" ")}),A=i(()=>{const e=["label-text"];return!n.value&&p.value&&e.push("text-error"),e.join(" ")}),j=i(()=>{const e=["input","w-full"];return a.variant==="bordered"?e.push("input-bordered"):a.variant==="ghost"?e.push("input-ghost"):a.variant==="filled"?e.push("input-bordered","bg-base-200"):e.push("input-bordered"),a.size==="sm"?e.push("input-sm"):a.size==="lg"&&e.push("input-lg"),p.value&&(n.value?e.push("input-success"):e.push("input-error")),M.value&&e.push("input-focus"),e.join(" ")}),$=i(()=>{const e=["textarea","w-full"];return a.variant==="bordered"?e.push("textarea-bordered"):a.variant==="ghost"?e.push("textarea-ghost"):a.variant==="filled"?e.push("textarea-bordered","bg-base-200"):e.push("textarea-bordered"),a.size==="sm"?e.push("textarea-sm"):a.size==="lg"&&e.push("textarea-lg"),p.value&&(n.value?e.push("textarea-success"):e.push("textarea-error")),e.join(" ")}),N=i(()=>["absolute","right-3","top-1/2","transform","-translate-y-1/2","pointer-events-none"].join(" ")),U=i(()=>{const e=["validation-summary","mt-2","p-3","rounded-lg","border"];return n.value?e.push("border-success","bg-success/5"):e.push("border-error","bg-error/5"),e.join(" ")}),D=()=>{a.validateOnInput&&I()},k=()=>{M.value=!1,z("blur"),a.validateOnBlur&&I()},T=()=>{M.value=!0,z("focus")},I=()=>(p.value=!0,z("validate",n.value,g.value),n.value);return d({validate:I,isValid:i(()=>n.value),errors:i(()=>g.value),reset:()=>{p.value=!1,c.value=""}}),(e,s)=>(t(),l("div",{class:b(F.value)},[o("div",Q,[e.label?(t(),l("label",ee,[o("span",{class:b(A.value)},[W(f(e.label)+" ",1),e.required?(t(),l("span",ae,"*")):v("",!0)],2)])):v("",!0),o("div",se,[e.type!=="textarea"?E((t(),l("input",{key:0,type:e.type,"onUpdate:modelValue":s[0]||(s[0]=u=>c.value=u),class:b(j.value),placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxLength,onInput:D,onBlur:k,onFocus:T},null,42,le)),[[H,c.value]]):E((t(),l("textarea",{key:1,"onUpdate:modelValue":s[1]||(s[1]=u=>c.value=u),class:b($.value),placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxLength,rows:e.rows,onInput:D,onBlur:k,onFocus:T},null,42,te)),[[J,c.value]]),e.showValidationIcon?(t(),l("div",{key:2,class:b(N.value)},[n.value&&p.value?(t(),l("svg",re,s[2]||(s[2]=[o("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1)]))):!n.value&&p.value?(t(),l("svg",oe,s[3]||(s[3]=[o("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1)]))):v("",!0)],2)):v("",!0),e.showCharCount&&e.maxLength?(t(),l("div",ne,f(c.value.length)+"/"+f(e.maxLength),1)):v("",!0)]),p.value?(t(),l("div",ue,[n.value&&e.successMessage?(t(),l("span",ie,f(e.successMessage),1)):!n.value&&g.value.length>0?(t(),l("div",de,[(t(!0),l(R,null,X(g.value,u=>(t(),l("span",{key:u,class:"label-text-alt text-error block"},f(u),1))),128))])):v("",!0)])):v("",!0),e.helperText?(t(),l("div",me,[o("span",ce,f(e.helperText),1)])):v("",!0)]),e.showSummary&&p.value?(t(),l("div",{key:0,class:b(U.value)},[n.value?(t(),l("div",pe,s[4]||(s[4]=[o("svg",{class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20"},[o("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),o("span",{class:"text-sm font-medium"},"Valid",-1)]))):(t(),l("div",ve,[o("div",fe,[s[5]||(s[5]=o("svg",{class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20"},[o("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1)),o("span",he,f(g.value.length)+" error"+f(g.value.length>1?"s":""),1)]),o("ul",ge,[(t(!0),l(R,null,X(g.value,u=>(t(),l("li",{key:u},"• "+f(u),1))),128))])]))],2)):v("",!0)],2))}}),h=K(Y,[["__scopeId","data-v-ca49397d"]]);Y.__docgenInfo={exportName:"default",displayName:"Validator",description:"",tags:{},expose:[{name:"validate"},{name:"isValid"},{name:"errors"},{name:"reset"}],props:[{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"helperText",required:!1,type:{name:"string"}},{name:"successMessage",required:!1,type:{name:"string"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"email"'},{name:'"password"'},{name:'"url"'},{name:'"tel"'},{name:'"number"'},{name:'"textarea"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"ghost"'},{name:'"filled"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxLength",required:!1,type:{name:"number"}},{name:"rows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"rules",required:!1,type:{name:"Array",elements:[{name:"ValidationRule"}]},defaultValue:{func:!1,value:"() => []"}},{name:"validateOnInput",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"validateOnBlur",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showValidationIcon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showCharCount",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showSummary",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"email",required:!1,type:{name:"boolean"}},{name:"url",required:!1,type:{name:"boolean"}},{name:"minLength",required:!1,type:{name:"number"}},{name:"pattern",required:!1,type:{name:"RegExp"}},{name:"customValidator",required:!1,type:{name:"TSFunctionType"}}],events:[{name:"validate",type:{names:["boolean"]}},{name:"focus"},{name:"blur"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Validator.vue"]};const we={title:"Data Input/Validator",component:h,parameters:{layout:"centered",docs:{description:{component:"A comprehensive form input component with built-in validation, custom rules, and visual feedback."}}},argTypes:{type:{control:"select",options:["text","email","password","url","tel","number","textarea"]},size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","bordered","ghost","filled"]},validateOnInput:{control:"boolean"},validateOnBlur:{control:"boolean"},showValidationIcon:{control:"boolean"},showCharCount:{control:"boolean"},showSummary:{control:"boolean"}}},y={args:{label:"Username",placeholder:"Enter your username",required:!0,minLength:3,helperText:"Username must be at least 3 characters"},render:r=>({components:{Validator:h},setup(){const d=m("");return{args:r,value:d}},template:`
      <div class="w-80">
        <Validator v-bind="args" v-model="value" />
        <p class="text-sm mt-2 opacity-60">Value: {{ value }}</p>
      </div>
    `})},V={args:{type:"email",label:"Email Address",placeholder:"user@example.com",required:!0,email:!0,successMessage:"Email format is valid!",showValidationIcon:!0,validateOnBlur:!0},render:r=>({components:{Validator:h},setup(){const d=m("");return{args:r,value:d}},template:`
      <div class="w-80">
        <Validator v-bind="args" v-model="value" />
      </div>
    `})},w={args:{type:"password",label:"Password",placeholder:"Enter a secure password",required:!0,minLength:8,helperText:"Password must be at least 8 characters with special characters",showValidationIcon:!0,showSummary:!0},render:r=>({components:{Validator:h},setup(){const d=m("");return{args:{...r,rules:[{name:"uppercase",test:a=>/[A-Z]/.test(a),message:"Must contain at least one uppercase letter"},{name:"number",test:a=>/\d/.test(a),message:"Must contain at least one number"},{name:"special",test:a=>/[!@#$%^&*(),.?":{}|<>]/.test(a),message:"Must contain at least one special character"}]},value:d}},template:`
      <div class="w-80">
        <Validator v-bind="args" v-model="value" />
      </div>
    `})},x={args:{type:"textarea",label:"Description",placeholder:"Enter your description...",maxLength:200,rows:4,showCharCount:!0,helperText:"Describe your project in detail",validateOnInput:!0},render:r=>({components:{Validator:h},setup(){const d=m("");return{args:r,value:d}},template:`
      <div class="w-80">
        <Validator v-bind="args" v-model="value" />
      </div>
    `})},q={args:{label:"Product Code",placeholder:"PRD-XXXX-YYYY",required:!0,helperText:"Product code format: PRD-XXXX-YYYY",showValidationIcon:!0,successMessage:"Valid product code!"},render:r=>({components:{Validator:h},setup(){const d=m("");return{args:{...r,customValidator:a=>a?/^PRD-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(a)?null:"Invalid product code format":null},value:d}},template:`
      <div class="w-80">
        <Validator v-bind="args" v-model="value" />
      </div>
    `})},S={render:()=>({components:{Validator:h},setup(){return{values:m({sm:"",md:"",lg:""})}},template:`
      <div class="space-y-4 w-80">
        <Validator 
          v-model="values.sm"
          size="sm" 
          label="Small Size" 
          placeholder="Small input"
          required
        />
        <Validator 
          v-model="values.md"
          size="md" 
          label="Medium Size" 
          placeholder="Medium input"
          required
        />
        <Validator 
          v-model="values.lg"
          size="lg" 
          label="Large Size" 
          placeholder="Large input"
          required
        />
      </div>
    `})},C={render:()=>({components:{Validator:h},setup(){return{values:m({success:"valid@email.com",error:"invalid-email",pending:""})}},template:`
      <div class="space-y-4 w-80">
        <Validator 
          v-model="values.success"
          type="email"
          label="Success State" 
          email
          :validate-on-blur="false"
          success-message="Email is valid!"
          show-validation-icon
        />
        <Validator 
          v-model="values.error"
          type="email"
          label="Error State" 
          email
          :validate-on-blur="false"
          show-validation-icon
        />
        <Validator 
          v-model="values.pending"
          label="Pending State" 
          placeholder="Start typing..."
          required
          helper-text="This field is required"
        />
      </div>
    `})},L={render:()=>({components:{Validator:h},setup(){return{values:m({default:"",bordered:"",ghost:"",filled:""})}},template:`
      <div class="space-y-4 w-80">
        <Validator 
          v-model="values.default"
          variant="default"
          label="Default Variant" 
          placeholder="Default style"
          required
        />
        <Validator 
          v-model="values.bordered"
          variant="bordered"
          label="Bordered Variant" 
          placeholder="Bordered style"
          required
        />
        <Validator 
          v-model="values.ghost"
          variant="ghost"
          label="Ghost Variant" 
          placeholder="Ghost style"
          required
        />
        <Validator 
          v-model="values.filled"
          variant="filled"
          label="Filled Variant" 
          placeholder="Filled style"
          required
        />
      </div>
    `})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    required: true,
    minLength: 3,
    helperText: 'Username must be at least 3 characters'
  },
  render: args => ({
    components: {
      Validator
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <div class="w-80">
        <Validator v-bind="args" v-model="value" />
        <p class="text-sm mt-2 opacity-60">Value: {{ value }}</p>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'email',
    label: 'Email Address',
    placeholder: 'user@example.com',
    required: true,
    email: true,
    successMessage: 'Email format is valid!',
    showValidationIcon: true,
    validateOnBlur: true
  },
  render: args => ({
    components: {
      Validator
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <div class="w-80">
        <Validator v-bind="args" v-model="value" />
      </div>
    \`
  })
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter a secure password',
    required: true,
    minLength: 8,
    helperText: 'Password must be at least 8 characters with special characters',
    showValidationIcon: true,
    showSummary: true
  },
  render: args => ({
    components: {
      Validator
    },
    setup() {
      const value = ref('');
      const customRules = [{
        name: 'uppercase',
        test: (val: string) => /[A-Z]/.test(val),
        message: 'Must contain at least one uppercase letter'
      }, {
        name: 'number',
        test: (val: string) => /\\d/.test(val),
        message: 'Must contain at least one number'
      }, {
        name: 'special',
        test: (val: string) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
        message: 'Must contain at least one special character'
      }];
      return {
        args: {
          ...args,
          rules: customRules
        },
        value
      };
    },
    template: \`
      <div class="w-80">
        <Validator v-bind="args" v-model="value" />
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'textarea',
    label: 'Description',
    placeholder: 'Enter your description...',
    maxLength: 200,
    rows: 4,
    showCharCount: true,
    helperText: 'Describe your project in detail',
    validateOnInput: true
  },
  render: args => ({
    components: {
      Validator
    },
    setup() {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: \`
      <div class="w-80">
        <Validator v-bind="args" v-model="value" />
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Product Code',
    placeholder: 'PRD-XXXX-YYYY',
    required: true,
    helperText: 'Product code format: PRD-XXXX-YYYY',
    showValidationIcon: true,
    successMessage: 'Valid product code!'
  },
  render: args => ({
    components: {
      Validator
    },
    setup() {
      const value = ref('');
      const customValidator = (val: string) => {
        if (!val) return null;
        const pattern = /^PRD-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
        return pattern.test(val) ? null : 'Invalid product code format';
      };
      return {
        args: {
          ...args,
          customValidator
        },
        value
      };
    },
    template: \`
      <div class="w-80">
        <Validator v-bind="args" v-model="value" />
      </div>
    \`
  })
}`,...q.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Validator
    },
    setup() {
      const values = ref({
        sm: '',
        md: '',
        lg: ''
      });
      return {
        values
      };
    },
    template: \`
      <div class="space-y-4 w-80">
        <Validator 
          v-model="values.sm"
          size="sm" 
          label="Small Size" 
          placeholder="Small input"
          required
        />
        <Validator 
          v-model="values.md"
          size="md" 
          label="Medium Size" 
          placeholder="Medium input"
          required
        />
        <Validator 
          v-model="values.lg"
          size="lg" 
          label="Large Size" 
          placeholder="Large input"
          required
        />
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Validator
    },
    setup() {
      const values = ref({
        success: 'valid@email.com',
        error: 'invalid-email',
        pending: ''
      });
      return {
        values
      };
    },
    template: \`
      <div class="space-y-4 w-80">
        <Validator 
          v-model="values.success"
          type="email"
          label="Success State" 
          email
          :validate-on-blur="false"
          success-message="Email is valid!"
          show-validation-icon
        />
        <Validator 
          v-model="values.error"
          type="email"
          label="Error State" 
          email
          :validate-on-blur="false"
          show-validation-icon
        />
        <Validator 
          v-model="values.pending"
          label="Pending State" 
          placeholder="Start typing..."
          required
          helper-text="This field is required"
        />
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Validator
    },
    setup() {
      const values = ref({
        default: '',
        bordered: '',
        ghost: '',
        filled: ''
      });
      return {
        values
      };
    },
    template: \`
      <div class="space-y-4 w-80">
        <Validator 
          v-model="values.default"
          variant="default"
          label="Default Variant" 
          placeholder="Default style"
          required
        />
        <Validator 
          v-model="values.bordered"
          variant="bordered"
          label="Bordered Variant" 
          placeholder="Bordered style"
          required
        />
        <Validator 
          v-model="values.ghost"
          variant="ghost"
          label="Ghost Variant" 
          placeholder="Ghost style"
          required
        />
        <Validator 
          v-model="values.filled"
          variant="filled"
          label="Filled Variant" 
          placeholder="Filled style"
          required
        />
      </div>
    \`
  })
}`,...L.parameters?.docs?.source}}};const xe=["Default","EmailValidation","PasswordValidation","TextareaWithCount","CustomValidation","DifferentSizes","ValidationStates","Variants"];export{q as CustomValidation,y as Default,S as DifferentSizes,V as EmailValidation,w as PasswordValidation,x as TextareaWithCount,C as ValidationStates,L as Variants,xe as __namedExportsOrder,we as default};
