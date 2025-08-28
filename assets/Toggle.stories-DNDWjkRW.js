import{T as e}from"./Toggle-70RIycuf.js";import"./iframe-BHDwIEoY.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Data Input/Toggle",component:e,parameters:{layout:"centered",docs:{description:{component:"Toggle switch component for binary on/off states with customizable styling. Uses Vue 3.4+ `defineModel()` for optimal v-model support."}}},argTypes:{modelValue:{control:"boolean",description:"Toggle state (on/off) - uses Vue 3.4 defineModel()"},label:{control:"text",description:"Label text for the toggle"},variant:{control:{type:"select"},options:["primary","secondary","accent","success","warning","info","error"],description:"Color variant of the toggle"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Size of the toggle"},disabled:{control:"boolean",description:"Disable the toggle"},errorMessage:{control:"text",description:"Error message to display"},helpText:{control:"text",description:"Help text to display below the toggle"}},tags:["autodocs"]},s={args:{label:"Enable notifications",modelValue:!1}},t={args:{label:"This toggle is on",modelValue:!0}},a={args:{label:"Enable dark mode",modelValue:!1,helpText:"Switch between light and dark themes"}},n={render:()=>({components:{Toggle:e},data(){return{values:{primary:!0,secondary:!0,accent:!0,success:!0,warning:!0,info:!0,error:!0}}},template:`
      <div class="space-y-4">
        <Toggle v-model="values.primary" variant="primary" label="Primary toggle" />
        <Toggle v-model="values.secondary" variant="secondary" label="Secondary toggle" />
        <Toggle v-model="values.accent" variant="accent" label="Accent toggle" />
        <Toggle v-model="values.success" variant="success" label="Success toggle" />
        <Toggle v-model="values.warning" variant="warning" label="Warning toggle" />
        <Toggle v-model="values.info" variant="info" label="Info toggle" />
        <Toggle v-model="values.error" variant="error" label="Error toggle" />
      </div>
    `})},l={render:()=>({components:{Toggle:e},data(){return{values:{xs:!0,sm:!0,md:!0,lg:!0}}},template:`
      <div class="space-y-4">
        <Toggle v-model="values.xs" size="xs" label="Extra small toggle" />
        <Toggle v-model="values.sm" size="sm" label="Small toggle" />
        <Toggle v-model="values.md" size="md" label="Medium toggle (default)" />
        <Toggle v-model="values.lg" size="lg" label="Large toggle" />
      </div>
    `})},o={render:()=>({components:{Toggle:e},data(){return{on:!0,off:!1}},template:`
      <div class="space-y-4">
        <Toggle v-model="on" label="Enabled toggle" />
        <Toggle v-model="off" label="Disabled toggle" />
        <Toggle v-model="on" disabled label="Disabled (on)" />
        <Toggle v-model="off" disabled label="Disabled (off)" />
      </div>
    `})},i={args:{label:"You must accept the terms",modelValue:!1,errorMessage:"This field is required",variant:"error"}},r={render:()=>({components:{Toggle:e},data(){return{simpleToggle:!1,requiredToggle:!0,defaultToggle:void 0}},template:`
      <div class="space-y-6">
        <div class="p-4 bg-base-200 rounded-lg">
          <h3 class="font-semibold mb-3">Vue 3.4 defineModel() Examples</h3>
          
          <div class="space-y-4">
            <div>
              <Toggle v-model="simpleToggle" label="Simple toggle" />
              <p class="text-sm text-base-content/60 mt-1">Value: {{ simpleToggle }}</p>
            </div>
            
            <div>
              <Toggle v-model="requiredToggle" label="Required toggle" />
              <p class="text-sm text-base-content/60 mt-1">Value: {{ requiredToggle }}</p>
            </div>
            
            <div>
              <Toggle v-model="defaultToggle" label="Toggle with default value" />
              <p class="text-sm text-base-content/60 mt-1">Value: {{ defaultToggle }} (uses defineModel default)</p>
            </div>
          </div>
        </div>
        
        <div class="p-4 bg-base-200 rounded-lg">
          <h3 class="font-semibold mb-3">Benefits of defineModel()</h3>
          <ul class="text-sm space-y-1">
            <li>• Automatic two-way binding without manual prop/emit setup</li>
            <li>• Cleaner component code with less boilerplate</li>
            <li>• Better TypeScript support</li>
            <li>• Default values handled automatically</li>
          </ul>
        </div>
      </div>
    `})},d={render:()=>({components:{Toggle:e},data(){return{settings:{notifications:!0,darkMode:!1,autoSave:!0,soundEffects:!1,emailAlerts:!0,twoFactor:!1}}},template:`
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
    `})},c={render:()=>({components:{Toggle:e},data(){return{permissions:{camera:!1,microphone:!1,location:!0,notifications:!0,contacts:!1,storage:!0}}},computed:{grantedCount(){return Object.values(this.permissions).filter(Boolean).length},totalCount(){return Object.keys(this.permissions).length}},template:`
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
    `})},m={render:()=>({components:{Toggle:e},data(){return{features:{newDashboard:!1,betaFeatures:!0,advancedMode:!1,debugMode:!1}}},template:`
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
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    modelValue: false
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'This toggle is on',
    modelValue: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable dark mode',
    modelValue: false,
    helpText: 'Switch between light and dark themes'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'You must accept the terms',
    modelValue: false,
    errorMessage: 'This field is required',
    variant: 'error'
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Toggle
    },
    data() {
      return {
        // Demonstrates the Vue 3.4 defineModel() behavior
        simpleToggle: false,
        requiredToggle: true,
        defaultToggle: undefined // Will use the default value from defineModel
      };
    },
    template: \`
      <div class="space-y-6">
        <div class="p-4 bg-base-200 rounded-lg">
          <h3 class="font-semibold mb-3">Vue 3.4 defineModel() Examples</h3>
          
          <div class="space-y-4">
            <div>
              <Toggle v-model="simpleToggle" label="Simple toggle" />
              <p class="text-sm text-base-content/60 mt-1">Value: {{ simpleToggle }}</p>
            </div>
            
            <div>
              <Toggle v-model="requiredToggle" label="Required toggle" />
              <p class="text-sm text-base-content/60 mt-1">Value: {{ requiredToggle }}</p>
            </div>
            
            <div>
              <Toggle v-model="defaultToggle" label="Toggle with default value" />
              <p class="text-sm text-base-content/60 mt-1">Value: {{ defaultToggle }} (uses defineModel default)</p>
            </div>
          </div>
        </div>
        
        <div class="p-4 bg-base-200 rounded-lg">
          <h3 class="font-semibold mb-3">Benefits of defineModel()</h3>
          <ul class="text-sm space-y-1">
            <li>• Automatic two-way binding without manual prop/emit setup</li>
            <li>• Cleaner component code with less boilerplate</li>
            <li>• Better TypeScript support</li>
            <li>• Default values handled automatically</li>
          </ul>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const f=["Default","On","WithHelpText","Variants","Sizes","States","WithError","DefineModelExample","SettingsPanel","PermissionsToggle","FeatureFlags"];export{s as Default,r as DefineModelExample,m as FeatureFlags,t as On,c as PermissionsToggle,d as SettingsPanel,l as Sizes,o as States,n as Variants,i as WithError,a as WithHelpText,f as __namedExportsOrder,b as default};
