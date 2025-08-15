import{d as q,r as I,c as r,w as V,s as E,a as t,m as L,n as d,e as P,t as C,F as S,g as D,o as l,b as c}from"./iframe-BEoDMSxF.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const G=["aria-label"],O={key:0,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},W={key:1,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},X={key:0,class:"ml-2"},H=["checked","aria-label"],Z=["value","aria-label"],$=["value"],J={key:3,class:"space-y-2"},K=["value","checked","name"],B=q({__name:"ThemeController",props:{variant:{default:"button"},themes:{default:()=>[{value:"light",label:"Light"},{value:"dark",label:"Dark"}]},defaultTheme:{default:"light"},darkTheme:{default:"dark"},lightTheme:{default:"light"},showLabel:{type:Boolean,default:!1},size:{default:"md"},radioName:{default:"theme"},ariaLabel:{default:"Toggle theme"}},emits:["themeChange"],setup(m,{emit:M}){const a=m,s=I(a.defaultTheme),w=r(()=>a.themes),T=r(()=>s.value===a.darkTheme),_=r(()=>["theme-controller"].join(" ")),A=r(()=>{const e=["btn"];return a.size==="xs"?e.push("btn-xs"):a.size==="sm"?e.push("btn-sm"):a.size==="lg"&&e.push("btn-lg"),e.join(" ")}),j=r(()=>{const e=["toggle"];return a.size==="xs"?e.push("toggle-xs"):a.size==="sm"?e.push("toggle-sm"):a.size==="lg"&&e.push("toggle-lg"),e.join(" ")}),R=r(()=>{const e=["select","select-bordered"];return a.size==="xs"?e.push("select-xs"):a.size==="sm"?e.push("select-sm"):a.size==="lg"&&e.push("select-lg"),e.join(" ")}),N=r(()=>{const e=["radio"];return a.size==="xs"?e.push("radio-xs"):a.size==="sm"?e.push("radio-sm"):a.size==="lg"&&e.push("radio-lg"),e.join(" ")}),x=M,y=()=>{if(a.variant==="toggle"||a.variant==="button"){const e=T.value?a.lightTheme:a.darkTheme;s.value=e,x("themeChange",e)}},k=e=>{const n=e.target;s.value=n.value,x("themeChange",n.value)},z=e=>{typeof document<"u"&&document.documentElement.setAttribute("data-theme",e)};return V(s,e=>{z(e)}),E(()=>{if(typeof window<"u"){const e=localStorage.getItem("theme");e&&a.themes.some(n=>n.value===e)?s.value=e:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(s.value=a.darkTheme),V(s,n=>{localStorage.setItem("theme",n)})}z(s.value)}),(e,n)=>(l(),t("div",{class:d(_.value)},[e.variant==="button"?(l(),t("button",{key:0,class:d(A.value),onClick:y,"aria-label":e.ariaLabel},[P(e.$slots,"icon",{},()=>[T.value?(l(),t("svg",W,n[1]||(n[1]=[c("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z","clip-rule":"evenodd"},null,-1)]))):(l(),t("svg",O,n[0]||(n[0]=[c("path",{d:"M10 2L13.09 8.26L20 9L14 14.74L15.18 21.02L10 17.77L4.82 21.02L6 14.74L0 9L6.91 8.26L10 2Z"},null,-1)])))],!0),e.showLabel?(l(),t("span",X,C(s.value),1)):L("",!0)],10,G)):e.variant==="toggle"?(l(),t("input",{key:1,type:"checkbox",class:d(j.value),checked:T.value,onChange:y,"aria-label":e.ariaLabel},null,42,H)):e.variant==="dropdown"?(l(),t("select",{key:2,class:d(R.value),value:s.value,onChange:k,"aria-label":e.ariaLabel},[(l(!0),t(S,null,D(w.value,o=>(l(),t("option",{key:o.value,value:o.value},C(o.label),9,$))),128))],42,Z)):e.variant==="radio"?(l(),t("div",J,[(l(!0),t(S,null,D(w.value,o=>(l(),t("label",{key:o.value,class:"flex items-center space-x-2 cursor-pointer"},[c("input",{type:"radio",class:d(N.value),value:o.value,checked:s.value===o.value,onChange:k,name:e.radioName},null,42,K),c("span",null,C(o.label),1)]))),128))])):L("",!0)],2))}}),i=F(B,[["__scopeId","data-v-aa6e5e4f"]]);B.__docgenInfo={exportName:"default",displayName:"ThemeController",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"toggle"'},{name:'"dropdown"'},{name:'"radio"'}]},defaultValue:{func:!1,value:"'button'"}},{name:"themes",required:!1,type:{name:"Array",elements:[{name:"ThemeOption"}]},defaultValue:{func:!1,value:`() => [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
]`}},{name:"defaultTheme",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'light'"}},{name:"darkTheme",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"lightTheme",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'light'"}},{name:"showLabel",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"radioName",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'theme'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Toggle theme'"}}],events:[{name:"themeChange",type:{names:["string"]}}],slots:[{name:"icon"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/ThemeController.vue"]};const ee={title:"Actions/ThemeController",component:i,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["button","toggle","dropdown","radio"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},showLabel:{control:{type:"boolean"}}}},h={args:{variant:"button",size:"md"}},v={render:()=>({components:{ThemeController:i},template:`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-bold mb-2">Button Theme Controller</h3>
          <div class="flex gap-4 items-center">
            <ThemeController variant="button" size="sm" />
            <ThemeController variant="button" size="md" />
            <ThemeController variant="button" size="lg" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">With Label</h3>
          <ThemeController variant="button" :show-label="true" />
        </div>
      </div>
    `})},u={render:()=>({components:{ThemeController:i},template:`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-bold mb-2">Toggle Theme Controller</h3>
          <div class="flex gap-4 items-center">
            <div class="flex items-center gap-2">
              <span class="text-sm">XS:</span>
              <ThemeController variant="toggle" size="xs" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm">SM:</span>
              <ThemeController variant="toggle" size="sm" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm">MD:</span>
              <ThemeController variant="toggle" size="md" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm">LG:</span>
              <ThemeController variant="toggle" size="lg" />
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl p-6">
          <h4 class="card-title">Theme Toggle in Context</h4>
          <div class="flex justify-between items-center">
            <span>Dark mode</span>
            <ThemeController variant="toggle" />
          </div>
        </div>
      </div>
    `})},p={render:()=>({components:{ThemeController:i},data(){return{customThemes:[{value:"light",label:"Light Theme"},{value:"dark",label:"Dark Theme"},{value:"cupcake",label:"Cupcake"},{value:"bumblebee",label:"Bumblebee"},{value:"emerald",label:"Emerald"},{value:"corporate",label:"Corporate"},{value:"synthwave",label:"Synthwave"},{value:"retro",label:"Retro"}]}},template:`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-bold mb-2">Dropdown Theme Controller</h3>
          <ThemeController 
            variant="dropdown" 
            :themes="customThemes"
            aria-label="Select theme"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">Different Sizes</h3>
          <div class="flex gap-4 items-center">
            <ThemeController variant="dropdown" size="sm" :themes="customThemes" />
            <ThemeController variant="dropdown" size="md" :themes="customThemes" />
            <ThemeController variant="dropdown" size="lg" :themes="customThemes" />
          </div>
        </div>
      </div>
    `})},g={render:()=>({components:{ThemeController:i},data(){return{radioThemes:[{value:"light",label:"Light Mode"},{value:"dark",label:"Dark Mode"},{value:"auto",label:"System Default"}]}},template:`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-bold mb-2">Radio Theme Controller</h3>
          <ThemeController 
            variant="radio" 
            :themes="radioThemes"
            radio-name="theme-selection"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">In a Card</h3>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Theme Preferences</h2>
              <p class="mb-4">Choose your preferred theme:</p>
              <ThemeController 
                variant="radio" 
                :themes="radioThemes"
                radio-name="preferences-theme"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    `})},b={render:()=>({components:{ThemeController:i},data(){return{currentTheme:"light",allThemes:[{value:"light",label:"Light"},{value:"dark",label:"Dark"},{value:"cupcake",label:"Cupcake"},{value:"bumblebee",label:"Bumblebee"}]}},methods:{onThemeChange(m){this.currentTheme=m,console.log("Theme changed to:",m)}},template:`
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-lg font-bold mb-2">All Theme Controller Variants</h3>
          <p class="text-sm opacity-70">Current theme: <strong>{{ currentTheme }}</strong></p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Button Variant -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Button Variant</h2>
              <p class="mb-4">Simple button toggle between light and dark themes.</p>
              <div class="flex gap-2">
                <ThemeController 
                  variant="button" 
                  @theme-change="onThemeChange"
                />
                <ThemeController 
                  variant="button" 
                  :show-label="true"
                  @theme-change="onThemeChange"
                />
              </div>
            </div>
          </div>
          
          <!-- Toggle Variant -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Toggle Variant</h2>
              <p class="mb-4">Classic toggle switch for theme switching.</p>
              <div class="flex justify-between items-center">
                <span>Enable dark mode</span>
                <ThemeController 
                  variant="toggle" 
                  @theme-change="onThemeChange"
                />
              </div>
            </div>
          </div>
          
          <!-- Dropdown Variant -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Dropdown Variant</h2>
              <p class="mb-4">Dropdown menu for multiple theme options.</p>
              <ThemeController 
                variant="dropdown" 
                :themes="allThemes"
                @theme-change="onThemeChange"
              />
            </div>
          </div>
          
          <!-- Radio Variant -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Radio Variant</h2>
              <p class="mb-4">Radio buttons for explicit theme selection.</p>
              <ThemeController 
                variant="radio" 
                :themes="allThemes"
                radio-name="demo-theme"
                @theme-change="onThemeChange"
              />
            </div>
          </div>
        </div>
      </div>
    `})},f={render:()=>({components:{ThemeController:i},template:`
      <div class="space-y-4">
        <div class="navbar bg-base-100 shadow-lg rounded-box">
          <div class="flex-1">
            <a class="btn btn-ghost text-xl">My App</a>
          </div>
          <div class="flex-none gap-2">
            <div class="form-control">
              <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
            </div>
            <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img alt="Avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
            <ThemeController variant="button" />
          </div>
        </div>
        
        <div class="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Theme controller integrated into a navbar component</span>
        </div>
      </div>
    `})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'md'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ThemeController
    },
    template: \`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-bold mb-2">Button Theme Controller</h3>
          <div class="flex gap-4 items-center">
            <ThemeController variant="button" size="sm" />
            <ThemeController variant="button" size="md" />
            <ThemeController variant="button" size="lg" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">With Label</h3>
          <ThemeController variant="button" :show-label="true" />
        </div>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ThemeController
    },
    template: \`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-bold mb-2">Toggle Theme Controller</h3>
          <div class="flex gap-4 items-center">
            <div class="flex items-center gap-2">
              <span class="text-sm">XS:</span>
              <ThemeController variant="toggle" size="xs" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm">SM:</span>
              <ThemeController variant="toggle" size="sm" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm">MD:</span>
              <ThemeController variant="toggle" size="md" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm">LG:</span>
              <ThemeController variant="toggle" size="lg" />
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl p-6">
          <h4 class="card-title">Theme Toggle in Context</h4>
          <div class="flex justify-between items-center">
            <span>Dark mode</span>
            <ThemeController variant="toggle" />
          </div>
        </div>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ThemeController
    },
    data() {
      return {
        customThemes: [{
          value: 'light',
          label: 'Light Theme'
        }, {
          value: 'dark',
          label: 'Dark Theme'
        }, {
          value: 'cupcake',
          label: 'Cupcake'
        }, {
          value: 'bumblebee',
          label: 'Bumblebee'
        }, {
          value: 'emerald',
          label: 'Emerald'
        }, {
          value: 'corporate',
          label: 'Corporate'
        }, {
          value: 'synthwave',
          label: 'Synthwave'
        }, {
          value: 'retro',
          label: 'Retro'
        }]
      };
    },
    template: \`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-bold mb-2">Dropdown Theme Controller</h3>
          <ThemeController 
            variant="dropdown" 
            :themes="customThemes"
            aria-label="Select theme"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">Different Sizes</h3>
          <div class="flex gap-4 items-center">
            <ThemeController variant="dropdown" size="sm" :themes="customThemes" />
            <ThemeController variant="dropdown" size="md" :themes="customThemes" />
            <ThemeController variant="dropdown" size="lg" :themes="customThemes" />
          </div>
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ThemeController
    },
    data() {
      return {
        radioThemes: [{
          value: 'light',
          label: 'Light Mode'
        }, {
          value: 'dark',
          label: 'Dark Mode'
        }, {
          value: 'auto',
          label: 'System Default'
        }]
      };
    },
    template: \`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-bold mb-2">Radio Theme Controller</h3>
          <ThemeController 
            variant="radio" 
            :themes="radioThemes"
            radio-name="theme-selection"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">In a Card</h3>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Theme Preferences</h2>
              <p class="mb-4">Choose your preferred theme:</p>
              <ThemeController 
                variant="radio" 
                :themes="radioThemes"
                radio-name="preferences-theme"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ThemeController
    },
    data() {
      return {
        currentTheme: 'light',
        allThemes: [{
          value: 'light',
          label: 'Light'
        }, {
          value: 'dark',
          label: 'Dark'
        }, {
          value: 'cupcake',
          label: 'Cupcake'
        }, {
          value: 'bumblebee',
          label: 'Bumblebee'
        }]
      };
    },
    methods: {
      onThemeChange(theme: string) {
        this.currentTheme = theme;
        console.log('Theme changed to:', theme);
      }
    },
    template: \`
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-lg font-bold mb-2">All Theme Controller Variants</h3>
          <p class="text-sm opacity-70">Current theme: <strong>{{ currentTheme }}</strong></p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Button Variant -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Button Variant</h2>
              <p class="mb-4">Simple button toggle between light and dark themes.</p>
              <div class="flex gap-2">
                <ThemeController 
                  variant="button" 
                  @theme-change="onThemeChange"
                />
                <ThemeController 
                  variant="button" 
                  :show-label="true"
                  @theme-change="onThemeChange"
                />
              </div>
            </div>
          </div>
          
          <!-- Toggle Variant -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Toggle Variant</h2>
              <p class="mb-4">Classic toggle switch for theme switching.</p>
              <div class="flex justify-between items-center">
                <span>Enable dark mode</span>
                <ThemeController 
                  variant="toggle" 
                  @theme-change="onThemeChange"
                />
              </div>
            </div>
          </div>
          
          <!-- Dropdown Variant -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Dropdown Variant</h2>
              <p class="mb-4">Dropdown menu for multiple theme options.</p>
              <ThemeController 
                variant="dropdown" 
                :themes="allThemes"
                @theme-change="onThemeChange"
              />
            </div>
          </div>
          
          <!-- Radio Variant -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Radio Variant</h2>
              <p class="mb-4">Radio buttons for explicit theme selection.</p>
              <ThemeController 
                variant="radio" 
                :themes="allThemes"
                radio-name="demo-theme"
                @theme-change="onThemeChange"
              />
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ThemeController
    },
    template: \`
      <div class="space-y-4">
        <div class="navbar bg-base-100 shadow-lg rounded-box">
          <div class="flex-1">
            <a class="btn btn-ghost text-xl">My App</a>
          </div>
          <div class="flex-none gap-2">
            <div class="form-control">
              <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
            </div>
            <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img alt="Avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
            <ThemeController variant="button" />
          </div>
        </div>
        
        <div class="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Theme controller integrated into a navbar component</span>
        </div>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};const ae=["Default","ButtonVariant","ToggleVariant","DropdownVariant","RadioVariant","AllVariants","InNavbar"];export{b as AllVariants,v as ButtonVariant,h as Default,p as DropdownVariant,f as InNavbar,g as RadioVariant,u as ToggleVariant,ae as __namedExportsOrder,ee as default};
