import{d as R,r as F,c as o,w as S,s as I,a as l,l as V,n as c,e as G,t as C,F as D,g as B,o as t,b as h}from"./iframe-CzrYmmIK.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const X=["aria-label"],H={key:0,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},K={key:1,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20"},O={key:0,class:"ml-2"},Y=["checked","aria-label"],Z=["checked","aria-label"],$=["value","aria-label"],J=["value"],Q={key:4,class:"space-y-2"},U=["value","checked","name"],A=R({__name:"ThemeController",props:{variant:{default:"button"},themes:{default:()=>[{value:"light",label:"Light"},{value:"dark",label:"Dark"}]},defaultTheme:{default:"light"},darkTheme:{default:"dark"},lightTheme:{default:"light"},showLabel:{type:Boolean,default:!1},size:{default:"md"},radioName:{default:"theme"},ariaLabel:{default:"Toggle theme"}},emits:["themeChange"],setup(d,{emit:M}){const a=d,n=F(a.defaultTheme),y=o(()=>a.themes),m=o(()=>n.value===a.darkTheme),N=o(()=>["theme-controller"].join(" ")),j=o(()=>{const e=["btn"];return a.size==="xs"?e.push("btn-xs"):a.size==="sm"?e.push("btn-sm"):a.size==="lg"&&e.push("btn-lg"),e.join(" ")}),_=o(()=>{const e=["toggle"];return a.size==="xs"?e.push("toggle-xs"):a.size==="sm"?e.push("toggle-sm"):a.size==="lg"&&e.push("toggle-lg"),e.join(" ")}),E=o(()=>{const e=["toggle","toggle-primary"];return a.size==="xs"?e.push("toggle-xs"):a.size==="sm"?e.push("toggle-sm"):a.size==="lg"&&e.push("toggle-lg"),e.join(" ")}),q=o(()=>{const e=["select","select-bordered"];return a.size==="xs"?e.push("select-xs"):a.size==="sm"?e.push("select-sm"):a.size==="lg"&&e.push("select-lg"),e.join(" ")}),P=o(()=>{const e=["radio"];return a.size==="xs"?e.push("radio-xs"):a.size==="sm"?e.push("radio-sm"):a.size==="lg"&&e.push("radio-lg"),e.join(" ")}),k=M,x=()=>{if(a.variant==="toggle"||a.variant==="switch"||a.variant==="button"){const e=m.value?a.lightTheme:a.darkTheme;n.value=e,k("themeChange",e)}},z=e=>{const s=e.target;n.value=s.value,k("themeChange",s.value)},L=e=>{typeof document<"u"&&(document.documentElement.setAttribute("data-theme",e),document.body.setAttribute("data-theme",e),document.documentElement.style.setProperty("--theme",e))};return S(n,e=>{L(e)}),I(()=>{if(typeof window<"u"){const e=localStorage.getItem("theme");e&&a.themes.some(s=>s.value===e)?n.value=e:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(n.value=a.darkTheme),S(n,s=>{localStorage.setItem("theme",s)})}L(n.value)}),(e,s)=>(t(),l("div",{class:c(N.value)},[e.variant==="button"?(t(),l("button",{key:0,class:c(j.value),onClick:x,"aria-label":e.ariaLabel},[G(e.$slots,"icon",{},()=>[m.value?(t(),l("svg",K,s[1]||(s[1]=[h("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z","clip-rule":"evenodd"},null,-1)]))):(t(),l("svg",H,s[0]||(s[0]=[h("path",{d:"M10 2L13.09 8.26L20 9L14 14.74L15.18 21.02L10 17.77L4.82 21.02L6 14.74L0 9L6.91 8.26L10 2Z"},null,-1)])))],!0),e.showLabel?(t(),l("span",O,C(n.value),1)):V("",!0)],10,X)):e.variant==="toggle"?(t(),l("input",{key:1,type:"checkbox",class:c(_.value),checked:m.value,onChange:x,"aria-label":e.ariaLabel},null,42,Y)):e.variant==="switch"?(t(),l("input",{key:2,type:"checkbox",class:c(E.value),checked:m.value,onChange:x,"aria-label":e.ariaLabel},null,42,Z)):e.variant==="dropdown"?(t(),l("select",{key:3,class:c(q.value),value:n.value,onChange:z,"aria-label":e.ariaLabel},[(t(!0),l(D,null,B(y.value,r=>(t(),l("option",{key:r.value,value:r.value},C(r.label),9,J))),128))],42,$)):e.variant==="radio"?(t(),l("div",Q,[(t(!0),l(D,null,B(y.value,r=>(t(),l("label",{key:r.value,class:"flex items-center space-x-2 cursor-pointer"},[h("input",{type:"radio",class:c(P.value),value:r.value,checked:n.value===r.value,onChange:z,name:e.radioName},null,42,U),h("span",null,C(r.label),1)]))),128))])):V("",!0)],2))}}),i=W(A,[["__scopeId","data-v-8ebb9d5e"]]);A.__docgenInfo={exportName:"default",displayName:"ThemeController",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"button"'},{name:'"toggle"'},{name:'"switch"'},{name:'"dropdown"'},{name:'"radio"'}]},defaultValue:{func:!1,value:"'button'"}},{name:"themes",required:!1,type:{name:"Array",elements:[{name:"ThemeOption"}]},defaultValue:{func:!1,value:`() => [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
]`}},{name:"defaultTheme",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'light'"}},{name:"darkTheme",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"lightTheme",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'light'"}},{name:"showLabel",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"radioName",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'theme'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Toggle theme'"}}],events:[{name:"themeChange",type:{names:["string"]}}],slots:[{name:"icon"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/ThemeController.vue"]};const te={title:"Actions/ThemeController",component:i,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["button","toggle","switch","dropdown","radio"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},showLabel:{control:{type:"boolean"}}}},v={args:{variant:"button",size:"md"}},u={render:()=>({components:{ThemeController:i},template:`
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
    `})},b={render:()=>({components:{ThemeController:i},template:`
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
    `})},p={render:()=>({components:{ThemeController:i},template:`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-bold mb-2">Switch Theme Controller</h3>
          <div class="flex gap-4 items-center">
            <div class="flex items-center gap-2">
              <span class="text-sm">XS:</span>
              <ThemeController variant="switch" size="xs" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm">SM:</span>
              <ThemeController variant="switch" size="sm" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm">MD:</span>
              <ThemeController variant="switch" size="md" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm">LG:</span>
              <ThemeController variant="switch" size="lg" />
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl p-6">
          <h4 class="card-title">Theme Switch in Context</h4>
          <div class="flex justify-between items-center">
            <span>Dark mode</span>
            <ThemeController variant="switch" />
          </div>
        </div>
      </div>
    `})},g={render:()=>({components:{ThemeController:i},data(){return{customThemes:[{value:"light",label:"Light Theme"},{value:"dark",label:"Dark Theme"},{value:"cupcake",label:"Cupcake"},{value:"bumblebee",label:"Bumblebee"},{value:"emerald",label:"Emerald"},{value:"corporate",label:"Corporate"},{value:"synthwave",label:"Synthwave"},{value:"retro",label:"Retro"},{value:"cyberpunk",label:"Cyberpunk"},{value:"valentine",label:"Valentine"},{value:"halloween",label:"Halloween"},{value:"garden",label:"Garden"},{value:"forest",label:"Forest"},{value:"aqua",label:"Aqua"},{value:"lofi",label:"Lo-Fi"},{value:"pastel",label:"Pastel"},{value:"fantasy",label:"Fantasy"},{value:"wireframe",label:"Wireframe"},{value:"black",label:"Black"},{value:"luxury",label:"Luxury"},{value:"dracula",label:"Dracula"},{value:"cmyk",label:"CMYK"},{value:"autumn",label:"Autumn"},{value:"business",label:"Business"},{value:"acid",label:"Acid"},{value:"lemonade",label:"Lemonade"},{value:"night",label:"Night"},{value:"coffee",label:"Coffee"},{value:"winter",label:"Winter"}]}},template:`
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
    `})},f={render:()=>({components:{ThemeController:i},data(){return{radioThemes:[{value:"light",label:"Light"},{value:"dark",label:"Dark"},{value:"boilerplate-light",label:"Boilerplate Light"},{value:"boilerplate-dark",label:"Boilerplate Dark"},{value:"cupcake",label:"Cupcake"},{value:"bumblebee",label:"Bumblebee"},{value:"emerald",label:"Emerald"}]}},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold mb-4">Radio Theme Controller (3 Columns)</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ThemeController 
              variant="radio" 
              :themes="radioThemes"
              radio-name="theme-selection"
            />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Different Sizes</h3>
          <div class="space-y-6">
            <div>
              <h4 class="text-sm font-semibold mb-3">Small</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ThemeController 
                  variant="radio" 
                  :themes="radioThemes"
                  radio-name="preferences-theme-sm"
                  size="sm"
                />
              </div>
            </div>
            <div>
              <h4 class="text-sm font-semibold mb-3">Medium</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ThemeController 
                  variant="radio" 
                  :themes="radioThemes"
                  radio-name="preferences-theme-md"
                  size="md"
                />
              </div>
            </div>
            <div>
              <h4 class="text-sm font-semibold mb-3">Large</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ThemeController 
                  variant="radio" 
                  :themes="radioThemes"
                  radio-name="preferences-theme-lg"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">In a Card</h3>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Theme Preferences</h2>
              <p class="mb-4">Choose your preferred theme:</p>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
      </div>
    `})},T={render:()=>({components:{ThemeController:i},data(){return{currentTheme:"light",allThemes:[{value:"light",label:"Light"},{value:"dark",label:"Dark"},{value:"boilerplate-light",label:"Boilerplate Light"},{value:"boilerplate-dark",label:"Boilerplate Dark"},{value:"cupcake",label:"Cupcake"},{value:"bumblebee",label:"Bumblebee"}]}},methods:{onThemeChange(d){this.currentTheme=d,console.log("Theme changed to:",d)}},template:`
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
          
          <!-- Switch Variant -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Switch Variant</h2>
              <p class="mb-4">Primary colored switch for theme switching.</p>
              <div class="flex justify-between items-center">
                <span>Enable dark mode</span>
                <ThemeController 
                  variant="switch" 
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
    `})},w={render:()=>({components:{ThemeController:i},data(){return{navbarThemes:[{value:"light",label:"Light"},{value:"dark",label:"Dark"},{value:"boilerplate-light",label:"Boilerplate Light"},{value:"boilerplate-dark",label:"Boilerplate Dark"},{value:"cupcake",label:"Cupcake"},{value:"bumblebee",label:"Bumblebee"},{value:"emerald",label:"Emerald"}]}},methods:{onThemeChange(d){console.log("Navbar theme changed to:",d)}},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold mb-4">Theme Controller in Navbar</h3>
          
          <!-- Button Variant in Navbar -->
          <div class="navbar bg-base-100 shadow-lg rounded-box mb-4">
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
              <ThemeController 
                variant="button" 
                @theme-change="onThemeChange"
              />
            </div>
          </div>
          
          <!-- Dropdown Variant in Navbar -->
          <div class="navbar bg-base-100 shadow-lg rounded-box mb-4">
            <div class="flex-1">
              <a class="btn btn-ghost text-xl">My App</a>
            </div>
            <div class="flex-none gap-2">
              <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
              </div>
              <ThemeController 
                variant="dropdown" 
                :themes="navbarThemes"
                size="sm"
                @theme-change="onThemeChange"
              />
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
            </div>
          </div>
          
          <!-- Toggle Variant in Navbar -->
          <div class="navbar bg-base-100 shadow-lg rounded-box">
            <div class="flex-1">
              <a class="btn btn-ghost text-xl">My App</a>
            </div>
            <div class="flex-none gap-2">
              <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm">Theme</span>
                <ThemeController 
                  variant="toggle" 
                  @theme-change="onThemeChange"
                />
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
            </div>
          </div>
        </div>
        
        <div class="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Theme controller integrated into navbar components with different variants</span>
        </div>
      </div>
    `})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'md'
  }
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ThemeController
    },
    template: \`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-bold mb-2">Switch Theme Controller</h3>
          <div class="flex gap-4 items-center">
            <div class="flex items-center gap-2">
              <span class="text-sm">XS:</span>
              <ThemeController variant="switch" size="xs" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm">SM:</span>
              <ThemeController variant="switch" size="sm" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm">MD:</span>
              <ThemeController variant="switch" size="md" />
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm">LG:</span>
              <ThemeController variant="switch" size="lg" />
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-xl p-6">
          <h4 class="card-title">Theme Switch in Context</h4>
          <div class="flex justify-between items-center">
            <span>Dark mode</span>
            <ThemeController variant="switch" />
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
        }, {
          value: 'cyberpunk',
          label: 'Cyberpunk'
        }, {
          value: 'valentine',
          label: 'Valentine'
        }, {
          value: 'halloween',
          label: 'Halloween'
        }, {
          value: 'garden',
          label: 'Garden'
        }, {
          value: 'forest',
          label: 'Forest'
        }, {
          value: 'aqua',
          label: 'Aqua'
        }, {
          value: 'lofi',
          label: 'Lo-Fi'
        }, {
          value: 'pastel',
          label: 'Pastel'
        }, {
          value: 'fantasy',
          label: 'Fantasy'
        }, {
          value: 'wireframe',
          label: 'Wireframe'
        }, {
          value: 'black',
          label: 'Black'
        }, {
          value: 'luxury',
          label: 'Luxury'
        }, {
          value: 'dracula',
          label: 'Dracula'
        }, {
          value: 'cmyk',
          label: 'CMYK'
        }, {
          value: 'autumn',
          label: 'Autumn'
        }, {
          value: 'business',
          label: 'Business'
        }, {
          value: 'acid',
          label: 'Acid'
        }, {
          value: 'lemonade',
          label: 'Lemonade'
        }, {
          value: 'night',
          label: 'Night'
        }, {
          value: 'coffee',
          label: 'Coffee'
        }, {
          value: 'winter',
          label: 'Winter'
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ThemeController
    },
    data() {
      return {
        radioThemes: [{
          value: 'light',
          label: 'Light'
        }, {
          value: 'dark',
          label: 'Dark'
        }, {
          value: 'boilerplate-light',
          label: 'Boilerplate Light'
        }, {
          value: 'boilerplate-dark',
          label: 'Boilerplate Dark'
        }, {
          value: 'cupcake',
          label: 'Cupcake'
        }, {
          value: 'bumblebee',
          label: 'Bumblebee'
        }, {
          value: 'emerald',
          label: 'Emerald'
        }]
      };
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold mb-4">Radio Theme Controller (3 Columns)</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ThemeController 
              variant="radio" 
              :themes="radioThemes"
              radio-name="theme-selection"
            />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Different Sizes</h3>
          <div class="space-y-6">
            <div>
              <h4 class="text-sm font-semibold mb-3">Small</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ThemeController 
                  variant="radio" 
                  :themes="radioThemes"
                  radio-name="preferences-theme-sm"
                  size="sm"
                />
              </div>
            </div>
            <div>
              <h4 class="text-sm font-semibold mb-3">Medium</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ThemeController 
                  variant="radio" 
                  :themes="radioThemes"
                  radio-name="preferences-theme-md"
                  size="md"
                />
              </div>
            </div>
            <div>
              <h4 class="text-sm font-semibold mb-3">Large</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ThemeController 
                  variant="radio" 
                  :themes="radioThemes"
                  radio-name="preferences-theme-lg"
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">In a Card</h3>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Theme Preferences</h2>
              <p class="mb-4">Choose your preferred theme:</p>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
          value: 'boilerplate-light',
          label: 'Boilerplate Light'
        }, {
          value: 'boilerplate-dark',
          label: 'Boilerplate Dark'
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
          
          <!-- Switch Variant -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Switch Variant</h2>
              <p class="mb-4">Primary colored switch for theme switching.</p>
              <div class="flex justify-between items-center">
                <span>Enable dark mode</span>
                <ThemeController 
                  variant="switch" 
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
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ThemeController
    },
    data() {
      return {
        navbarThemes: [{
          value: 'light',
          label: 'Light'
        }, {
          value: 'dark',
          label: 'Dark'
        }, {
          value: 'boilerplate-light',
          label: 'Boilerplate Light'
        }, {
          value: 'boilerplate-dark',
          label: 'Boilerplate Dark'
        }, {
          value: 'cupcake',
          label: 'Cupcake'
        }, {
          value: 'bumblebee',
          label: 'Bumblebee'
        }, {
          value: 'emerald',
          label: 'Emerald'
        }]
      };
    },
    methods: {
      onThemeChange(theme: string) {
        console.log('Navbar theme changed to:', theme);
      }
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold mb-4">Theme Controller in Navbar</h3>
          
          <!-- Button Variant in Navbar -->
          <div class="navbar bg-base-100 shadow-lg rounded-box mb-4">
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
              <ThemeController 
                variant="button" 
                @theme-change="onThemeChange"
              />
            </div>
          </div>
          
          <!-- Dropdown Variant in Navbar -->
          <div class="navbar bg-base-100 shadow-lg rounded-box mb-4">
            <div class="flex-1">
              <a class="btn btn-ghost text-xl">My App</a>
            </div>
            <div class="flex-none gap-2">
              <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
              </div>
              <ThemeController 
                variant="dropdown" 
                :themes="navbarThemes"
                size="sm"
                @theme-change="onThemeChange"
              />
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
            </div>
          </div>
          
          <!-- Toggle Variant in Navbar -->
          <div class="navbar bg-base-100 shadow-lg rounded-box">
            <div class="flex-1">
              <a class="btn btn-ghost text-xl">My App</a>
            </div>
            <div class="flex-none gap-2">
              <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm">Theme</span>
                <ThemeController 
                  variant="toggle" 
                  @theme-change="onThemeChange"
                />
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
            </div>
          </div>
        </div>
        
        <div class="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Theme controller integrated into navbar components with different variants</span>
        </div>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}};const se=["Default","ButtonVariant","ToggleVariant","SwitchVariant","DropdownVariant","RadioVariant","AllVariants","InNavbar"];export{T as AllVariants,u as ButtonVariant,v as Default,g as DropdownVariant,w as InNavbar,f as RadioVariant,p as SwitchVariant,b as ToggleVariant,se as __namedExportsOrder,te as default};
