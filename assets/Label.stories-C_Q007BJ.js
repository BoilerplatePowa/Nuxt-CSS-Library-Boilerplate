import{d as h,c as y,i as L,k as g,n as k,v as S,o as c,e as d,a as m,m as u,t as b}from"./iframe-D_58n4_g.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const z={key:0,class:"label-text"},C={key:1,class:"label-text-alt"},x=h({__name:"Label",props:{text:{},altText:{},htmlFor:{},tag:{default:"label"},required:{type:Boolean},cursor:{default:"default"},size:{default:"md"}},setup(v){const t=v,f=y(()=>{const e=["label"];return t.cursor==="pointer"?e.push("cursor-pointer"):t.cursor==="not-allowed"&&e.push("cursor-not-allowed"),t.size==="sm"?e.push("text-sm"):t.size==="lg"&&e.push("text-lg"),e.join(" ")});return(e,E)=>(c(),L(S(e.tag),{class:k(f.value),for:e.htmlFor},{default:g(()=>[d(e.$slots,"start",{},void 0,!0),e.text?(c(),m("span",z,b(e.text),1)):u("",!0),d(e.$slots,"default",{},void 0,!0),e.altText?(c(),m("span",C,b(e.altText),1)):u("",!0),d(e.$slots,"end",{},void 0,!0)]),_:3},8,["class","for"]))}}),a=w(x,[["__scopeId","data-v-1bc8f2cb"]]);x.__docgenInfo={exportName:"default",displayName:"Label",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"}},{name:"altText",required:!1,type:{name:"string"}},{name:"htmlFor",required:!1,type:{name:"string"}},{name:"tag",required:!1,type:{name:"union",elements:[{name:'"label"'},{name:'"div"'},{name:'"span"'}]},defaultValue:{func:!1,value:"'label'"}},{name:"required",required:!1,type:{name:"boolean"}},{name:"cursor",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"pointer"'},{name:'"not-allowed"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}}],slots:[{name:"start"},{name:"default"},{name:"end"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Label.vue"]};const B={title:"DataInput/Label",component:a,parameters:{layout:"padded"},argTypes:{tag:{control:{type:"select"},options:["label","div","span"]},cursor:{control:{type:"select"},options:["default","pointer","not-allowed"]},size:{control:{type:"select"},options:["sm","md","lg"]},required:{control:{type:"boolean"}}}},n={args:{text:"Default Label"}},s={args:{text:"Email address",altText:"Required"}},l={render:()=>({components:{Label:a},template:`
      <div class="space-y-4 max-w-md">
        <div class="form-control">
          <Label text="Name" html-for="name" />
          <input id="name" type="text" class="input input-bordered" placeholder="Enter your name" />
        </div>
        
        <div class="form-control">
          <Label text="Email" alt-text="Required" html-for="email" />
          <input id="email" type="email" class="input input-bordered" placeholder="Enter your email" />
        </div>
        
        <div class="form-control">
          <Label text="Message" alt-text="Optional" html-for="message" />
          <textarea id="message" class="textarea textarea-bordered" placeholder="Enter your message"></textarea>
        </div>
        
        <div class="form-control">
          <Label cursor="pointer" html-for="newsletter">
            <input id="newsletter" type="checkbox" class="checkbox" />
            <span class="label-text ml-2">Subscribe to newsletter</span>
          </Label>
        </div>
      </div>
    `})},r={render:()=>({components:{Label:a},template:`
      <div class="space-y-4">
        <div class="form-control">
          <Label text="Small Label" alt-text="Size: sm" size="sm" />
          <input type="text" class="input input-bordered input-sm" placeholder="Small input" />
        </div>
        
        <div class="form-control">
          <Label text="Medium Label" alt-text="Size: md" size="md" />
          <input type="text" class="input input-bordered" placeholder="Medium input" />
        </div>
        
        <div class="form-control">
          <Label text="Large Label" alt-text="Size: lg" size="lg" />
          <input type="text" class="input input-bordered input-lg" placeholder="Large input" />
        </div>
      </div>
    `})},o={render:()=>({components:{Label:a},template:`
      <div class="space-y-4 max-w-md">
        <div class="form-control">
          <Label>
            <template #start>
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </template>
            <span class="label-text ml-2">Username</span>
            <template #end>
              <span class="label-text-alt text-red-500">*</span>
            </template>
          </Label>
          <input type="text" class="input input-bordered" placeholder="Enter username" />
        </div>
        
        <div class="form-control">
          <Label>
            <template #start>
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </template>
            <span class="label-text ml-2">Password</span>
            <template #end>
              <span class="label-text-alt">
                <a href="#" class="text-blue-500 hover:underline">Forgot?</a>
              </span>
            </template>
          </Label>
          <input type="password" class="input input-bordered" placeholder="Enter password" />
        </div>
      </div>
    `})},p={render:()=>({components:{Label:a},data(){return{preferences:{emails:!1,sms:!0,push:!1}}},template:`
      <div class="space-y-4">
        <h3 class="text-lg font-bold">Notification Preferences</h3>
        
        <div class="space-y-2">
          <Label cursor="pointer">
            <input 
              type="checkbox" 
              class="checkbox" 
              v-model="preferences.emails"
            />
            <span class="label-text ml-2">Email notifications</span>
            <span class="label-text-alt">Daily digest</span>
          </Label>
          
          <Label cursor="pointer">
            <input 
              type="checkbox" 
              class="checkbox" 
              v-model="preferences.sms"
            />
            <span class="label-text ml-2">SMS notifications</span>
            <span class="label-text-alt">Important only</span>
          </Label>
          
          <Label cursor="pointer">
            <input 
              type="checkbox" 
              class="checkbox" 
              v-model="preferences.push"
            />
            <span class="label-text ml-2">Push notifications</span>
            <span class="label-text-alt">Real-time</span>
          </Label>
        </div>
        
        <div class="mt-4 p-4 bg-base-200 rounded">
          <h4 class="font-semibold">Current Settings:</h4>
          <pre>{{ JSON.stringify(preferences, null, 2) }}</pre>
        </div>
      </div>
    `})},i={render:()=>({components:{Label:a},data(){return{plan:"basic"}},template:`
      <div class="space-y-4">
        <h3 class="text-lg font-bold">Choose Your Plan</h3>
        
        <div class="space-y-2">
          <Label cursor="pointer">
            <input 
              type="radio" 
              name="plan" 
              value="free" 
              class="radio" 
              v-model="plan"
            />
            <span class="label-text ml-2">Free Plan</span>
            <span class="label-text-alt">$0/month</span>
          </Label>
          
          <Label cursor="pointer">
            <input 
              type="radio" 
              name="plan" 
              value="basic" 
              class="radio" 
              v-model="plan"
            />
            <span class="label-text ml-2">Basic Plan</span>
            <span class="label-text-alt">$9/month</span>
          </Label>
          
          <Label cursor="pointer">
            <input 
              type="radio" 
              name="plan" 
              value="pro" 
              class="radio" 
              v-model="plan"
            />
            <span class="label-text ml-2">Pro Plan</span>
            <span class="label-text-alt">$29/month</span>
          </Label>
        </div>
        
        <div class="mt-4 p-4 bg-base-200 rounded">
          <p><strong>Selected plan:</strong> {{ plan }}</p>
        </div>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Default Label'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Email address',
    altText: 'Required'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Label
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <div class="form-control">
          <Label text="Name" html-for="name" />
          <input id="name" type="text" class="input input-bordered" placeholder="Enter your name" />
        </div>
        
        <div class="form-control">
          <Label text="Email" alt-text="Required" html-for="email" />
          <input id="email" type="email" class="input input-bordered" placeholder="Enter your email" />
        </div>
        
        <div class="form-control">
          <Label text="Message" alt-text="Optional" html-for="message" />
          <textarea id="message" class="textarea textarea-bordered" placeholder="Enter your message"></textarea>
        </div>
        
        <div class="form-control">
          <Label cursor="pointer" html-for="newsletter">
            <input id="newsletter" type="checkbox" class="checkbox" />
            <span class="label-text ml-2">Subscribe to newsletter</span>
          </Label>
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Label
    },
    template: \`
      <div class="space-y-4">
        <div class="form-control">
          <Label text="Small Label" alt-text="Size: sm" size="sm" />
          <input type="text" class="input input-bordered input-sm" placeholder="Small input" />
        </div>
        
        <div class="form-control">
          <Label text="Medium Label" alt-text="Size: md" size="md" />
          <input type="text" class="input input-bordered" placeholder="Medium input" />
        </div>
        
        <div class="form-control">
          <Label text="Large Label" alt-text="Size: lg" size="lg" />
          <input type="text" class="input input-bordered input-lg" placeholder="Large input" />
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Label
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <div class="form-control">
          <Label>
            <template #start>
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </template>
            <span class="label-text ml-2">Username</span>
            <template #end>
              <span class="label-text-alt text-red-500">*</span>
            </template>
          </Label>
          <input type="text" class="input input-bordered" placeholder="Enter username" />
        </div>
        
        <div class="form-control">
          <Label>
            <template #start>
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </template>
            <span class="label-text ml-2">Password</span>
            <template #end>
              <span class="label-text-alt">
                <a href="#" class="text-blue-500 hover:underline">Forgot?</a>
              </span>
            </template>
          </Label>
          <input type="password" class="input input-bordered" placeholder="Enter password" />
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Label
    },
    data() {
      return {
        preferences: {
          emails: false,
          sms: true,
          push: false
        }
      };
    },
    template: \`
      <div class="space-y-4">
        <h3 class="text-lg font-bold">Notification Preferences</h3>
        
        <div class="space-y-2">
          <Label cursor="pointer">
            <input 
              type="checkbox" 
              class="checkbox" 
              v-model="preferences.emails"
            />
            <span class="label-text ml-2">Email notifications</span>
            <span class="label-text-alt">Daily digest</span>
          </Label>
          
          <Label cursor="pointer">
            <input 
              type="checkbox" 
              class="checkbox" 
              v-model="preferences.sms"
            />
            <span class="label-text ml-2">SMS notifications</span>
            <span class="label-text-alt">Important only</span>
          </Label>
          
          <Label cursor="pointer">
            <input 
              type="checkbox" 
              class="checkbox" 
              v-model="preferences.push"
            />
            <span class="label-text ml-2">Push notifications</span>
            <span class="label-text-alt">Real-time</span>
          </Label>
        </div>
        
        <div class="mt-4 p-4 bg-base-200 rounded">
          <h4 class="font-semibold">Current Settings:</h4>
          <pre>{{ JSON.stringify(preferences, null, 2) }}</pre>
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Label
    },
    data() {
      return {
        plan: 'basic'
      };
    },
    template: \`
      <div class="space-y-4">
        <h3 class="text-lg font-bold">Choose Your Plan</h3>
        
        <div class="space-y-2">
          <Label cursor="pointer">
            <input 
              type="radio" 
              name="plan" 
              value="free" 
              class="radio" 
              v-model="plan"
            />
            <span class="label-text ml-2">Free Plan</span>
            <span class="label-text-alt">$0/month</span>
          </Label>
          
          <Label cursor="pointer">
            <input 
              type="radio" 
              name="plan" 
              value="basic" 
              class="radio" 
              v-model="plan"
            />
            <span class="label-text ml-2">Basic Plan</span>
            <span class="label-text-alt">$9/month</span>
          </Label>
          
          <Label cursor="pointer">
            <input 
              type="radio" 
              name="plan" 
              value="pro" 
              class="radio" 
              v-model="plan"
            />
            <span class="label-text ml-2">Pro Plan</span>
            <span class="label-text-alt">$29/month</span>
          </Label>
        </div>
        
        <div class="mt-4 p-4 bg-base-200 rounded">
          <p><strong>Selected plan:</strong> {{ plan }}</p>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};const N=["Default","WithAltText","FormLabels","Sizes","WithSlots","CheckboxLabels","RadioLabels"];export{p as CheckboxLabels,n as Default,l as FormLabels,i as RadioLabels,r as Sizes,s as WithAltText,o as WithSlots,N as __namedExportsOrder,B as default};
