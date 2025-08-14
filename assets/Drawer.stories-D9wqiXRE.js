import{d as L,r as A,h as f,c as v,a as x,w as j,b as t,C as q,e as y,u as h,n as g,m as E,o as D}from"./iframe-D8bQcoLX.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const U=["id"],I={class:"drawer-content"},H={class:"p-4"},z=["for"],F=["for"],$={key:0,class:"flex justify-end p-4"},k=L({__name:"Drawer",props:{modelValue:{type:Boolean,default:!1},position:{default:"left"},width:{default:"md"},backdrop:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1},showCloseButton:{type:Boolean,default:!0}},emits:["update:modelValue","open","close"],setup(C,{emit:S}){let M=0;const V=()=>`drawer-${++M}`,a=C,u=S,b=V(),n=A(a.modelValue);f(()=>a.modelValue,e=>{n.value=e}),f(n,e=>{u("update:modelValue",e),u(e?"open":"close")});const _=v(()=>{const e=[];return a.position==="right"&&e.push("drawer-end"),e.join(" ")}),B=v(()=>{const e=[];return a.position==="right"&&e.push("drawer-side-right"),e.join(" ")}),O=v(()=>{const e=["bg-base-200","text-base-content","min-h-full"];return a.width==="sm"?e.push("w-64"):a.width==="md"?e.push("w-80"):a.width==="lg"?e.push("w-96"):a.width==="xl"?e.push("w-[28rem]"):a.width==="full"&&e.push("w-full"),e.join(" ")}),w=()=>{n.value=!n.value},N=()=>{n.value=!0},l=()=>{a.persistent||(n.value=!1)},T=e=>{e.key==="Escape"&&n.value&&!a.persistent&&l()};return typeof window<"u"&&window.addEventListener("keydown",T),(e,o)=>(D(),x("div",{class:g(["drawer",_.value])},[j(t("input",{id:h(b),"onUpdate:modelValue":o[0]||(o[0]=P=>n.value=P),type:"checkbox",class:"drawer-toggle"},null,8,U),[[q,n.value]]),t("div",I,[y(e.$slots,"content",{toggle:w,open:N,close:l},()=>[t("div",H,[t("label",{for:h(b),class:"btn btn-primary drawer-button",onClick:w}," Open drawer ",8,z)])],!0)]),t("div",{class:g(["drawer-side",B.value])},[t("label",{for:h(b),class:"drawer-overlay",onClick:l},null,8,F),t("aside",{class:g(O.value)},[e.showCloseButton?(D(),x("div",$,[t("button",{class:"btn btn-sm btn-circle btn-ghost",onClick:l}," ✕ ")])):E("",!0),y(e.$slots,"drawer",{close:l},()=>[o[1]||(o[1]=t("div",{class:"p-4"},[t("h3",{class:"text-lg font-bold mb-4"},"Drawer Content"),t("ul",{class:"menu"},[t("li",null,[t("a",null,"Sidebar Item 1")]),t("li",null,[t("a",null,"Sidebar Item 2")])])],-1))],!0)],2)],2)],2))}}),s=R(k,[["__scopeId","data-v-387164d8"]]);k.__docgenInfo={exportName:"default",displayName:"Drawer",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"top"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:"'left'"}},{name:"width",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showCloseButton",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"open"},{name:"close"}],slots:[{name:"content",scoped:!0,bindings:[{name:"toggle",title:"binding"},{name:"open",title:"binding"},{name:"close",title:"binding"}]},{name:"drawer",scoped:!0,bindings:[{name:"close",title:"binding"}]}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Layout/Drawer.vue"]};const K={title:"Layout/Drawer",component:s,parameters:{layout:"fullscreen"},argTypes:{position:{control:{type:"select"},options:["left","right","top","bottom"]},variant:{control:{type:"select"},options:["default","mobile","overlay"]},showCloseButton:{control:{type:"boolean"}},persistent:{control:{type:"boolean"}},modelValue:{control:{type:"boolean"}}}},r={render:()=>({components:{Drawer:s},template:`
      <div class="h-screen">
        <Drawer>
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Main Content</h1>
              <p class="mb-4">This is the main content area. Click the button below to open the drawer.</p>
              <button @click="toggle" class="btn btn-primary">
                Open Drawer
              </button>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Drawer Content</h2>
              <ul class="menu">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    `})},i={render:()=>({components:{Drawer:s},template:`
      <div class="h-screen">
        <Drawer position="right">
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Right Drawer Example</h1>
              <p class="mb-4">The drawer will slide in from the right side.</p>
              <button @click="toggle" class="btn btn-secondary">
                Open Right Drawer
              </button>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Settings</h2>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">Dark Mode</span>
                  <input type="checkbox" class="toggle" />
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">Notifications</span>
                  <input type="checkbox" class="toggle" checked />
                </label>
              </div>
            </div>
          </template>
        </Drawer>
      </div>
    `})},c={render:()=>({components:{Drawer:s},template:`
      <div class="h-screen">
        <Drawer show-close-button>
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Drawer with Close Button</h1>
              <p class="mb-4">This drawer includes a close button in the drawer content.</p>
              <button @click="toggle" class="btn btn-accent">
                Open Drawer
              </button>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Navigation</h2>
              <ul class="menu">
                <li><a>Dashboard</a></li>
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Help</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    `})},d={render:()=>({components:{Drawer:s},template:`
      <div class="h-screen">
        <Drawer variant="mobile">
          <template #content="{ toggle }">
            <div class="navbar bg-base-100">
              <div class="navbar-start">
                <button @click="toggle" class="btn btn-square btn-ghost">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
              <div class="navbar-center">
                <a class="btn btn-ghost text-xl">Mobile App</a>
              </div>
            </div>
            
            <div class="p-8">
              <h1 class="text-2xl font-bold mb-4">Mobile Layout</h1>
              <p>This is optimized for mobile devices with a hamburger menu.</p>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="avatar">
                  <div class="w-12 rounded-full">
                    <img src="https://via.placeholder.com/48" alt="User" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">John Doe</div>
                  <div class="text-sm opacity-50">john@example.com</div>
                </div>
              </div>
              
              <ul class="menu">
                <li><a>📊 Dashboard</a></li>
                <li><a>👤 Profile</a></li>
                <li><a>📧 Messages</a></li>
                <li><a>⚙️ Settings</a></li>
                <li><a>📱 Mobile App</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    `})},p={render:()=>({components:{Drawer:s},template:`
      <div class="h-screen">
        <Drawer variant="overlay">
          <template #content="{ toggle }">
            <div class="hero min-h-screen bg-base-200">
              <div class="hero-content text-center">
                <div class="max-w-md">
                  <h1 class="text-5xl font-bold">Overlay Drawer</h1>
                  <p class="py-6">
                    This drawer appears as an overlay on top of the content.
                  </p>
                  <button @click="toggle" class="btn btn-primary">
                    Open Overlay
                  </button>
                </div>
              </div>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Quick Actions</h2>
              <div class="grid gap-4">
                <button class="btn btn-outline">New Document</button>
                <button class="btn btn-outline">Upload File</button>
                <button class="btn btn-outline">Share Link</button>
                <button class="btn btn-outline">Export Data</button>
              </div>
            </div>
          </template>
        </Drawer>
      </div>
    `})},m={render:()=>({components:{Drawer:s},template:`
      <div class="h-screen">
        <Drawer persistent :model-value="true">
          <template #content>
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Persistent Drawer</h1>
              <p class="mb-4">
                This drawer is always open and cannot be closed by clicking outside.
                Perfect for desktop layouts with permanent navigation.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="card bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">Card 1</h2>
                    <p>Some content here</p>
                  </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">Card 2</h2>
                    <p>More content here</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-lg font-bold mb-4">Persistent Navigation</h2>
              <ul class="menu">
                <li><a class="active">📊 Dashboard</a></li>
                <li><a>📈 Analytics</a></li>
                <li><a>👥 Users</a></li>
                <li><a>📄 Reports</a></li>
                <li><a>⚙️ Settings</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    template: \`
      <div class="h-screen">
        <Drawer>
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Main Content</h1>
              <p class="mb-4">This is the main content area. Click the button below to open the drawer.</p>
              <button @click="toggle" class="btn btn-primary">
                Open Drawer
              </button>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Drawer Content</h2>
              <ul class="menu">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    template: \`
      <div class="h-screen">
        <Drawer position="right">
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Right Drawer Example</h1>
              <p class="mb-4">The drawer will slide in from the right side.</p>
              <button @click="toggle" class="btn btn-secondary">
                Open Right Drawer
              </button>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Settings</h2>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">Dark Mode</span>
                  <input type="checkbox" class="toggle" />
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">Notifications</span>
                  <input type="checkbox" class="toggle" checked />
                </label>
              </div>
            </div>
          </template>
        </Drawer>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    template: \`
      <div class="h-screen">
        <Drawer show-close-button>
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Drawer with Close Button</h1>
              <p class="mb-4">This drawer includes a close button in the drawer content.</p>
              <button @click="toggle" class="btn btn-accent">
                Open Drawer
              </button>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Navigation</h2>
              <ul class="menu">
                <li><a>Dashboard</a></li>
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Help</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    template: \`
      <div class="h-screen">
        <Drawer variant="mobile">
          <template #content="{ toggle }">
            <div class="navbar bg-base-100">
              <div class="navbar-start">
                <button @click="toggle" class="btn btn-square btn-ghost">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
              <div class="navbar-center">
                <a class="btn btn-ghost text-xl">Mobile App</a>
              </div>
            </div>
            
            <div class="p-8">
              <h1 class="text-2xl font-bold mb-4">Mobile Layout</h1>
              <p>This is optimized for mobile devices with a hamburger menu.</p>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="avatar">
                  <div class="w-12 rounded-full">
                    <img src="https://via.placeholder.com/48" alt="User" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">John Doe</div>
                  <div class="text-sm opacity-50">john@example.com</div>
                </div>
              </div>
              
              <ul class="menu">
                <li><a>📊 Dashboard</a></li>
                <li><a>👤 Profile</a></li>
                <li><a>📧 Messages</a></li>
                <li><a>⚙️ Settings</a></li>
                <li><a>📱 Mobile App</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    template: \`
      <div class="h-screen">
        <Drawer variant="overlay">
          <template #content="{ toggle }">
            <div class="hero min-h-screen bg-base-200">
              <div class="hero-content text-center">
                <div class="max-w-md">
                  <h1 class="text-5xl font-bold">Overlay Drawer</h1>
                  <p class="py-6">
                    This drawer appears as an overlay on top of the content.
                  </p>
                  <button @click="toggle" class="btn btn-primary">
                    Open Overlay
                  </button>
                </div>
              </div>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Quick Actions</h2>
              <div class="grid gap-4">
                <button class="btn btn-outline">New Document</button>
                <button class="btn btn-outline">Upload File</button>
                <button class="btn btn-outline">Share Link</button>
                <button class="btn btn-outline">Export Data</button>
              </div>
            </div>
          </template>
        </Drawer>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    template: \`
      <div class="h-screen">
        <Drawer persistent :model-value="true">
          <template #content>
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Persistent Drawer</h1>
              <p class="mb-4">
                This drawer is always open and cannot be closed by clicking outside.
                Perfect for desktop layouts with permanent navigation.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="card bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">Card 1</h2>
                    <p>Some content here</p>
                  </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title">Card 2</h2>
                    <p>More content here</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-lg font-bold mb-4">Persistent Navigation</h2>
              <ul class="menu">
                <li><a class="active">📊 Dashboard</a></li>
                <li><a>📈 Analytics</a></li>
                <li><a>👥 Users</a></li>
                <li><a>📄 Reports</a></li>
                <li><a>⚙️ Settings</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};const G=["Default","RightSide","WithCloseButton","MobileVariant","OverlayVariant","Persistent"];export{r as Default,d as MobileVariant,p as OverlayVariant,m as Persistent,i as RightSide,c as WithCloseButton,G as __namedExportsOrder,K as default};
