import{d as B,c as i,a as n,y as D,m as C,n as h,b as k,t as T,z as A,u as d,o}from"./iframe-CO79KBgr.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const P={class:"form-control"},O={class:"label-text"},I=["id","disabled","required","aria-describedby"],L=["id","disabled","required","aria-describedby"],R=["id"],$=["id"],E=B({__name:"Toggle",props:{modelValue:{type:Boolean,default:!1},label:{},helpText:{},errorMessage:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"primary"},ariaDescribedby:{}},emits:["update:modelValue","change"],setup(V,{emit:z}){let q=0;const F=()=>`toggle-${++q}`,s=V,w=z,t=F(),l=i({get:()=>s.modelValue,set:e=>w("update:modelValue",e)}),_=i(()=>["label","cursor-pointer","flex","justify-between","items-center"]),S=i(()=>{const e=["toggle"];return s.size==="xs"?e.push("toggle-xs"):s.size==="sm"?e.push("toggle-sm"):s.size==="lg"&&e.push("toggle-lg"),s.variant==="primary"?e.push("toggle-primary"):s.variant==="secondary"?e.push("toggle-secondary"):s.variant==="accent"?e.push("toggle-accent"):s.variant==="success"?e.push("toggle-success"):s.variant==="warning"?e.push("toggle-warning"):s.variant==="info"?e.push("toggle-info"):s.variant==="error"&&e.push("toggle-error"),s.errorMessage&&e.push("toggle-error"),e.join(" ")}),j=i(()=>{const e=[];return s.helpText&&e.push(`${t}-help`),s.errorMessage&&e.push(`${t}-error`),s.ariaDescribedby&&e.push(s.ariaDescribedby),e.length>0?e.join(" "):void 0}),M=e=>{w("change",e)};return(e,r)=>(o(),n("div",P,[e.label?(o(),n("label",{key:0,class:h(_.value)},[k("span",O,T(e.label),1),D(k("input",{id:d(t),"onUpdate:modelValue":r[0]||(r[0]=y=>l.value=y),type:"checkbox",class:h(S.value),disabled:e.disabled,required:e.required,"aria-describedby":j.value,onChange:M},null,42,I),[[A,l.value]])],2)):D((o(),n("input",{key:1,id:d(t),"onUpdate:modelValue":r[1]||(r[1]=y=>l.value=y),type:"checkbox",class:h(S.value),disabled:e.disabled,required:e.required,"aria-describedby":j.value,onChange:M},null,42,L)),[[A,l.value]]),e.helpText&&!e.errorMessage?(o(),n("p",{key:2,id:`${d(t)}-help`,class:"text-xs text-base-content/70 mt-1"},T(e.helpText),9,R)):C("",!0),e.errorMessage?(o(),n("p",{key:3,id:`${d(t)}-error`,class:"text-xs text-error mt-1",role:"alert"},T(e.errorMessage),9,$)):C("",!0)]))}}),a=N(E,[["__scopeId","data-v-6722ad89"]]);E.__docgenInfo={exportName:"default",displayName:"Toggle",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"success"'},{name:'"warning"'},{name:'"info"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'primary'"}},{name:"ariaDescribedby",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"change",type:{names:["Event"]}}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Toggle.vue"]};const Y={title:"Data Input/Toggle",component:a,parameters:{layout:"centered",docs:{description:{component:"Toggle switch component for binary on/off states with customizable styling."}}},argTypes:{modelValue:{control:"boolean",description:"Toggle state (on/off)"},label:{control:"text",description:"Label text for the toggle"},variant:{control:{type:"select"},options:["primary","secondary","accent","success","warning","info","error"],description:"Color variant of the toggle"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Size of the toggle"},disabled:{control:"boolean",description:"Disable the toggle"},errorMessage:{control:"text",description:"Error message to display"}},tags:["autodocs"]},c={args:{label:"Enable notifications",modelValue:!1}},m={args:{label:"This toggle is on",modelValue:!0}},g={render:()=>({components:{Toggle:a},data(){return{values:{primary:!0,secondary:!0,accent:!0,success:!0,warning:!0,info:!0,error:!0}}},template:`
      <div class="space-y-4">
        <Toggle v-model="values.primary" variant="primary" label="Primary toggle" />
        <Toggle v-model="values.secondary" variant="secondary" label="Secondary toggle" />
        <Toggle v-model="values.accent" variant="accent" label="Accent toggle" />
        <Toggle v-model="values.success" variant="success" label="Success toggle" />
        <Toggle v-model="values.warning" variant="warning" label="Warning toggle" />
        <Toggle v-model="values.info" variant="info" label="Info toggle" />
        <Toggle v-model="values.error" variant="error" label="Error toggle" />
      </div>
    `})},v={render:()=>({components:{Toggle:a},data(){return{values:{xs:!0,sm:!0,md:!0,lg:!0}}},template:`
      <div class="space-y-4">
        <Toggle v-model="values.xs" size="xs" label="Extra small toggle" />
        <Toggle v-model="values.sm" size="sm" label="Small toggle" />
        <Toggle v-model="values.md" size="md" label="Medium toggle (default)" />
        <Toggle v-model="values.lg" size="lg" label="Large toggle" />
      </div>
    `})},u={render:()=>({components:{Toggle:a},data(){return{on:!0,off:!1}},template:`
      <div class="space-y-4">
        <Toggle v-model="on" label="Enabled toggle" />
        <Toggle v-model="off" label="Disabled toggle" />
        <Toggle v-model="on" disabled label="Disabled (on)" />
        <Toggle v-model="off" disabled label="Disabled (off)" />
      </div>
    `})},b={args:{label:"You must accept the terms",modelValue:!1,errorMessage:"This field is required",variant:"error"}},p={render:()=>({components:{Toggle:a},data(){return{settings:{notifications:!0,darkMode:!1,autoSave:!0,soundEffects:!1,emailAlerts:!0,twoFactor:!1}}},template:`
      <div class="max-w-md p-6 bg-base-100 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-6">Settings</h3>
        
        <div class="space-y-6">
          <div>
            <h4 class="font-medium mb-3 text-base-content/80">General</h4>
            <div class="space-y-3">
              <Toggle 
                v-model="settings.notifications" 
                label="Push notifications"
                variant="primary"
              />
              <Toggle 
                v-model="settings.darkMode" 
                label="Dark mode"
                variant="secondary"
              />
              <Toggle 
                v-model="settings.autoSave" 
                label="Auto-save documents"
                variant="success"
              />
            </div>
          </div>
          
          <div>
            <h4 class="font-medium mb-3 text-base-content/80">Audio & Alerts</h4>
            <div class="space-y-3">
              <Toggle 
                v-model="settings.soundEffects" 
                label="Sound effects"
                variant="accent"
              />
              <Toggle 
                v-model="settings.emailAlerts" 
                label="Email alerts"
                variant="info"
              />
            </div>
          </div>
          
          <div>
            <h4 class="font-medium mb-3 text-base-content/80">Security</h4>
            <div class="space-y-3">
              <Toggle 
                v-model="settings.twoFactor" 
                label="Two-factor authentication"
                variant="warning"
              />
            </div>
          </div>
        </div>
        
        <div class="mt-6 pt-4 border-t border-base-300">
          <button class="btn btn-primary btn-sm mr-2">Save Changes</button>
          <button class="btn btn-ghost btn-sm">Reset to Defaults</button>
        </div>
      </div>
    `})},f={render:()=>({components:{Toggle:a},data(){return{permissions:{camera:!1,microphone:!1,location:!0,notifications:!0,contacts:!1,storage:!0}}},computed:{grantedCount(){return Object.values(this.permissions).filter(Boolean).length},totalCount(){return Object.keys(this.permissions).length}},template:`
      <div class="max-w-md p-6 bg-base-100 rounded-lg shadow">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-semibold">App Permissions</h3>
          <div class="badge badge-primary">{{ grantedCount }}/{{ totalCount }} granted</div>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">📷</span>
              <div>
                <div class="font-medium">Camera</div>
                <div class="text-sm text-base-content/60">Take photos and videos</div>
              </div>
            </div>
            <Toggle v-model="permissions.camera" variant="primary" />
          </div>
          
          <div class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">🎤</span>
              <div>
                <div class="font-medium">Microphone</div>
                <div class="text-sm text-base-content/60">Record audio</div>
              </div>
            </div>
            <Toggle v-model="permissions.microphone" variant="primary" />
          </div>
          
          <div class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">📍</span>
              <div>
                <div class="font-medium">Location</div>
                <div class="text-sm text-base-content/60">Access your location</div>
              </div>
            </div>
            <Toggle v-model="permissions.location" variant="success" />
          </div>
          
          <div class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">🔔</span>
              <div>
                <div class="font-medium">Notifications</div>
                <div class="text-sm text-base-content/60">Show notifications</div>
              </div>
            </div>
            <Toggle v-model="permissions.notifications" variant="success" />
          </div>
          
          <div class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">👥</span>
              <div>
                <div class="font-medium">Contacts</div>
                <div class="text-sm text-base-content/60">Access your contacts</div>
              </div>
            </div>
            <Toggle v-model="permissions.contacts" variant="secondary" />
          </div>
          
          <div class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">💾</span>
              <div>
                <div class="font-medium">Storage</div>
                <div class="text-sm text-base-content/60">Read and write files</div>
              </div>
            </div>
            <Toggle v-model="permissions.storage" variant="success" />
          </div>
        </div>
      </div>
    `})},x={render:()=>({components:{Toggle:a},data(){return{features:{newDashboard:!1,betaFeatures:!0,advancedMode:!1,debugMode:!1}}},template:`
      <div class="max-w-md p-6 bg-base-100 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">Feature Flags</h3>
        
        <div class="space-y-4">
          <div class="p-3 border border-base-300 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="font-medium">New Dashboard</span>
              <Toggle v-model="features.newDashboard" variant="primary" />
            </div>
            <p class="text-sm text-base-content/60">
              Enable the redesigned dashboard interface
            </p>
          </div>
          
          <div class="p-3 border border-base-300 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="font-medium">Beta Features</span>
              <Toggle v-model="features.betaFeatures" variant="warning" />
            </div>
            <p class="text-sm text-base-content/60">
              Access experimental features (may be unstable)
            </p>
          </div>
          
          <div class="p-3 border border-base-300 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="font-medium">Advanced Mode</span>
              <Toggle v-model="features.advancedMode" variant="info" />
            </div>
            <p class="text-sm text-base-content/60">
              Show advanced options and settings
            </p>
          </div>
          
          <div class="p-3 border border-base-300 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="font-medium">Debug Mode</span>
              <Toggle v-model="features.debugMode" variant="error" />
            </div>
            <p class="text-sm text-base-content/60">
              Enable developer debugging tools
            </p>
          </div>
        </div>
        
        <div class="mt-6 p-3 bg-base-200 rounded text-sm">
          <strong>Active features:</strong>
          {{ Object.entries(features).filter(([_, enabled]) => enabled).map(([key]) => key).join(', ') || 'None' }}
        </div>
      </div>
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    modelValue: false
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This toggle is on',
    modelValue: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toggle
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
        <Toggle v-model="values.primary" variant="primary" label="Primary toggle" />
        <Toggle v-model="values.secondary" variant="secondary" label="Secondary toggle" />
        <Toggle v-model="values.accent" variant="accent" label="Accent toggle" />
        <Toggle v-model="values.success" variant="success" label="Success toggle" />
        <Toggle v-model="values.warning" variant="warning" label="Warning toggle" />
        <Toggle v-model="values.info" variant="info" label="Info toggle" />
        <Toggle v-model="values.error" variant="error" label="Error toggle" />
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toggle
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
        <Toggle v-model="values.xs" size="xs" label="Extra small toggle" />
        <Toggle v-model="values.sm" size="sm" label="Small toggle" />
        <Toggle v-model="values.md" size="md" label="Medium toggle (default)" />
        <Toggle v-model="values.lg" size="lg" label="Large toggle" />
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toggle
    },
    data() {
      return {
        on: true,
        off: false
      };
    },
    template: \`
      <div class="space-y-4">
        <Toggle v-model="on" label="Enabled toggle" />
        <Toggle v-model="off" label="Disabled toggle" />
        <Toggle v-model="on" disabled label="Disabled (on)" />
        <Toggle v-model="off" disabled label="Disabled (off)" />
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'You must accept the terms',
    modelValue: false,
    errorMessage: 'This field is required',
    variant: 'error'
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toggle
    },
    data() {
      return {
        settings: {
          notifications: true,
          darkMode: false,
          autoSave: true,
          soundEffects: false,
          emailAlerts: true,
          twoFactor: false
        }
      };
    },
    template: \`
      <div class="max-w-md p-6 bg-base-100 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-6">Settings</h3>
        
        <div class="space-y-6">
          <div>
            <h4 class="font-medium mb-3 text-base-content/80">General</h4>
            <div class="space-y-3">
              <Toggle 
                v-model="settings.notifications" 
                label="Push notifications"
                variant="primary"
              />
              <Toggle 
                v-model="settings.darkMode" 
                label="Dark mode"
                variant="secondary"
              />
              <Toggle 
                v-model="settings.autoSave" 
                label="Auto-save documents"
                variant="success"
              />
            </div>
          </div>
          
          <div>
            <h4 class="font-medium mb-3 text-base-content/80">Audio & Alerts</h4>
            <div class="space-y-3">
              <Toggle 
                v-model="settings.soundEffects" 
                label="Sound effects"
                variant="accent"
              />
              <Toggle 
                v-model="settings.emailAlerts" 
                label="Email alerts"
                variant="info"
              />
            </div>
          </div>
          
          <div>
            <h4 class="font-medium mb-3 text-base-content/80">Security</h4>
            <div class="space-y-3">
              <Toggle 
                v-model="settings.twoFactor" 
                label="Two-factor authentication"
                variant="warning"
              />
            </div>
          </div>
        </div>
        
        <div class="mt-6 pt-4 border-t border-base-300">
          <button class="btn btn-primary btn-sm mr-2">Save Changes</button>
          <button class="btn btn-ghost btn-sm">Reset to Defaults</button>
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toggle
    },
    data() {
      return {
        permissions: {
          camera: false,
          microphone: false,
          location: true,
          notifications: true,
          contacts: false,
          storage: true
        }
      };
    },
    computed: {
      grantedCount() {
        return Object.values(this.permissions).filter(Boolean).length;
      },
      totalCount() {
        return Object.keys(this.permissions).length;
      }
    },
    template: \`
      <div class="max-w-md p-6 bg-base-100 rounded-lg shadow">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-semibold">App Permissions</h3>
          <div class="badge badge-primary">{{ grantedCount }}/{{ totalCount }} granted</div>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">📷</span>
              <div>
                <div class="font-medium">Camera</div>
                <div class="text-sm text-base-content/60">Take photos and videos</div>
              </div>
            </div>
            <Toggle v-model="permissions.camera" variant="primary" />
          </div>
          
          <div class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">🎤</span>
              <div>
                <div class="font-medium">Microphone</div>
                <div class="text-sm text-base-content/60">Record audio</div>
              </div>
            </div>
            <Toggle v-model="permissions.microphone" variant="primary" />
          </div>
          
          <div class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">📍</span>
              <div>
                <div class="font-medium">Location</div>
                <div class="text-sm text-base-content/60">Access your location</div>
              </div>
            </div>
            <Toggle v-model="permissions.location" variant="success" />
          </div>
          
          <div class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">🔔</span>
              <div>
                <div class="font-medium">Notifications</div>
                <div class="text-sm text-base-content/60">Show notifications</div>
              </div>
            </div>
            <Toggle v-model="permissions.notifications" variant="success" />
          </div>
          
          <div class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">👥</span>
              <div>
                <div class="font-medium">Contacts</div>
                <div class="text-sm text-base-content/60">Access your contacts</div>
              </div>
            </div>
            <Toggle v-model="permissions.contacts" variant="secondary" />
          </div>
          
          <div class="flex items-center justify-between p-3 bg-base-200 rounded-lg">
            <div class="flex items-center">
              <span class="text-2xl mr-3">💾</span>
              <div>
                <div class="font-medium">Storage</div>
                <div class="text-sm text-base-content/60">Read and write files</div>
              </div>
            </div>
            <Toggle v-model="permissions.storage" variant="success" />
          </div>
        </div>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toggle
    },
    data() {
      return {
        features: {
          newDashboard: false,
          betaFeatures: true,
          advancedMode: false,
          debugMode: false
        }
      };
    },
    template: \`
      <div class="max-w-md p-6 bg-base-100 rounded-lg shadow">
        <h3 class="text-lg font-semibold mb-4">Feature Flags</h3>
        
        <div class="space-y-4">
          <div class="p-3 border border-base-300 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="font-medium">New Dashboard</span>
              <Toggle v-model="features.newDashboard" variant="primary" />
            </div>
            <p class="text-sm text-base-content/60">
              Enable the redesigned dashboard interface
            </p>
          </div>
          
          <div class="p-3 border border-base-300 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="font-medium">Beta Features</span>
              <Toggle v-model="features.betaFeatures" variant="warning" />
            </div>
            <p class="text-sm text-base-content/60">
              Access experimental features (may be unstable)
            </p>
          </div>
          
          <div class="p-3 border border-base-300 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="font-medium">Advanced Mode</span>
              <Toggle v-model="features.advancedMode" variant="info" />
            </div>
            <p class="text-sm text-base-content/60">
              Show advanced options and settings
            </p>
          </div>
          
          <div class="p-3 border border-base-300 rounded-lg">
            <div class="flex items-center justify-between mb-2">
              <span class="font-medium">Debug Mode</span>
              <Toggle v-model="features.debugMode" variant="error" />
            </div>
            <p class="text-sm text-base-content/60">
              Enable developer debugging tools
            </p>
          </div>
        </div>
        
        <div class="mt-6 p-3 bg-base-200 rounded text-sm">
          <strong>Active features:</strong>
          {{ Object.entries(features).filter(([_, enabled]) => enabled).map(([key]) => key).join(', ') || 'None' }}
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};const H=["Default","On","Variants","Sizes","States","WithError","SettingsPanel","PermissionsToggle","FeatureFlags"];export{c as Default,x as FeatureFlags,m as On,f as PermissionsToggle,p as SettingsPanel,v as Sizes,u as States,g as Variants,b as WithError,H as __namedExportsOrder,Y as default};
