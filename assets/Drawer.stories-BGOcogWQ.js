import{d as T,m as D,h as P,w as A,c as b,a as y,y as j,b as t,z as q,u as h,e as O,n as w,l as R,o as k}from"./iframe-CzrYmmIK.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const I=["id"],z={class:"drawer-content"},H={class:"p-4"},W=["for"],F=["for"],$={key:0,class:"flex justify-end p-4"},C=T({__name:"Drawer",props:D({position:{default:"left"},width:{default:"md"},backdrop:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1},showCloseButton:{type:Boolean,default:!0},id:{default:void 0}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:D(["open","close"],["update:modelValue"]),setup(g,{emit:S}){const M=()=>`drawer-${Math.random().toString(36).substr(2,9)}`,s=g,a=P(g,"modelValue"),f=S,u=s.id||M();A(a,e=>{f(e?"open":"close")});const L=b(()=>{const e=[];return s.position==="right"&&e.push("drawer-end"),e.join(" ")}),E=b(()=>{const e=[];return s.position==="right"&&e.push("drawer-side-right"),e.join(" ")}),B=b(()=>{const e=["bg-base-200","text-base-content","min-h-full"];return s.width==="sm"?e.push("w-64"):s.width==="md"?e.push("w-80"):s.width==="lg"?e.push("w-96"):s.width==="xl"?e.push("w-[28rem]"):s.width==="full"&&e.push("w-full"),e.join(" ")}),x=()=>{a.value=!a.value},_=()=>{a.value=!0},o=()=>{s.persistent||(a.value=!1)},N=e=>{e.key==="Escape"&&a.value&&!s.persistent&&o()};return typeof window<"u"&&window.addEventListener("keydown",N),(e,n)=>(k(),y("div",{class:w(["drawer",L.value])},[j(t("input",{id:h(u),"onUpdate:modelValue":n[0]||(n[0]=V=>a.value=V),type:"checkbox",class:"drawer-toggle"},null,8,I),[[q,a.value]]),t("div",z,[O(e.$slots,"content",{toggle:x,open:_,close:o},()=>[t("div",H,[t("label",{for:h(u),class:"btn btn-primary drawer-button",onClick:x}," Open drawer ",8,W)])],!0)]),t("div",{class:w(["drawer-side",E.value])},[t("label",{for:h(u),class:"drawer-overlay",onClick:o},null,8,F),t("aside",{class:w(B.value)},[e.showCloseButton?(k(),y("div",$,[t("button",{class:"btn btn-sm btn-circle btn-ghost",onClick:o},"✕")])):R("",!0),O(e.$slots,"drawer",{close:o},()=>[n[1]||(n[1]=t("div",{class:"p-4"},[t("h3",{class:"text-lg font-bold mb-4"},"Drawer Content"),t("ul",{class:"menu"},[t("li",null,[t("a",null,"Sidebar Item 1")]),t("li",null,[t("a",null,"Sidebar Item 2")])])],-1))],!0)],2)],2)],2))}}),l=U(C,[["__scopeId","data-v-acad3cd6"]]);C.__docgenInfo={exportName:"default",displayName:"Drawer",description:"",tags:{},props:[{name:"position",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'},{name:'"top"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:"'left'"}},{name:"width",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"backdrop",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showCloseButton",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"open"},{name:"close"}],slots:[{name:"content",scoped:!0,bindings:[{name:"toggle",title:"binding"},{name:"open",title:"binding"},{name:"close",title:"binding"}]},{name:"drawer",scoped:!0,bindings:[{name:"close",title:"binding"}]}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Layout/Drawer.vue"]};const G={title:"Layout/Drawer",component:l,parameters:{layout:"fullscreen"},argTypes:{position:{control:{type:"select"},options:["left","right","top","bottom"]},width:{control:{type:"select"},options:["sm","md","lg","xl","full"]},showCloseButton:{control:{type:"boolean"}},persistent:{control:{type:"boolean"}},backdrop:{control:{type:"boolean"}}}},i={render:()=>({components:{Drawer:l},data(){return{isOpen:!1}},template:`
      <div class="h-screen">
        <Drawer v-model="isOpen">
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Main Content</h1>
              <p class="mb-4">This is the main content area. Click the button below to open the drawer.</p>
              <p class="mb-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
              <button @click="toggle" class="btn btn-primary">
                {{ isOpen ? 'Close' : 'Open' }} Drawer
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
    `})},r={render:()=>({components:{Drawer:l},data(){return{isOpen:!1}},template:`
      <div class="h-screen">
        <Drawer v-model="isOpen" position="right">
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Right Drawer Example</h1>
              <p class="mb-4">The drawer will slide in from the right side.</p>
              <p class="mb-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
              <button @click="toggle" class="btn btn-secondary">
                {{ isOpen ? 'Close' : 'Open' }} Right Drawer
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
    `})},c={render:()=>({components:{Drawer:l},data(){return{isOpen:!1}},template:`
      <div class="h-screen">
        <Drawer v-model="isOpen" show-close-button>
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Drawer with Close Button</h1>
              <p class="mb-4">This drawer includes a close button in the drawer content.</p>
              <p class="mb-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
              <button @click="toggle" class="btn btn-accent">
                {{ isOpen ? 'Close' : 'Open' }} Drawer
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
    `})},d={render:()=>({components:{Drawer:l},data(){return{isOpen:!1}},template:`
      <div class="h-screen">
        <Drawer v-model="isOpen">
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
              <p class="mt-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
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
                <li><a>Dashboard</a></li>
                <li><a>Profile</a></li>
                <li><a>Messages</a></li>
                <li><a>Settings</a></li>
                <li><a>Mobile App</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    `})},p={render:()=>({components:{Drawer:l},data(){return{isOpen:!1}},template:`
      <div class="h-screen">
        <Drawer v-model="isOpen">
          <template #content="{ toggle }">
            <div class="hero min-h-screen bg-base-200">
              <div class="hero-content text-center">
                <div class="max-w-md">
                  <h1 class="text-5xl font-bold">Overlay Drawer</h1>
                  <p class="py-6">
                    This drawer appears as an overlay on top of the content.
                  </p>
                  <p class="mb-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
                  <button @click="toggle" class="btn btn-primary">
                    {{ isOpen ? 'Close' : 'Open' }} Overlay
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
    `})},m={render:()=>({components:{Drawer:l},data(){return{isOpen:!0}},template:`
      <div class="h-screen">
        <Drawer v-model="isOpen" persistent>
          <template #content>
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Persistent Drawer</h1>
              <p class="mb-4">
                This drawer is always open and cannot be closed by clicking outside.
                Perfect for desktop layouts with permanent navigation.
              </p>
              <p class="mb-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
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
                <li><a class="active">Dashboard</a></li>
                <li><a>Analytics</a></li>
                <li><a>Users</a></li>
                <li><a>Reports</a></li>
                <li><a>Settings</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    `})},v={render:()=>({components:{Drawer:l},data(){return{isOpen:!1,eventLog:[]}},methods:{onOpen(){this.eventLog.push("Drawer opened")},onClose(){this.eventLog.push("Drawer closed")}},template:`
      <div class="h-screen">
        <Drawer v-model="isOpen" @open="onOpen" @close="onClose">
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Drawer with Events</h1>
              <p class="mb-4">This example shows how to listen to open/close events.</p>
              <p class="mb-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
              <button @click="toggle" class="btn btn-primary">
                {{ isOpen ? 'Close' : 'Open' }} Drawer
              </button>
              
              <div class="mt-8">
                <h3 class="text-lg font-bold mb-2">Event Log:</h3>
                <div class="bg-base-200 p-4 rounded-lg max-h-32 overflow-y-auto">
                  <div v-for="(event, index) in eventLog" :key="index" class="text-sm">
                    {{ event }}
                  </div>
                  <div v-if="eventLog.length === 0" class="text-sm opacity-50">
                    No events yet
                  </div>
                </div>
              </div>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Event Demo</h2>
              <p class="mb-4">Open and close this drawer to see events logged.</p>
              <ul class="menu">
                <li><a>Event 1</a></li>
                <li><a>Event 2</a></li>
                <li><a>Event 3</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    data() {
      return {
        isOpen: false
      };
    },
    template: \`
      <div class="h-screen">
        <Drawer v-model="isOpen">
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Main Content</h1>
              <p class="mb-4">This is the main content area. Click the button below to open the drawer.</p>
              <p class="mb-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
              <button @click="toggle" class="btn btn-primary">
                {{ isOpen ? 'Close' : 'Open' }} Drawer
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    data() {
      return {
        isOpen: false
      };
    },
    template: \`
      <div class="h-screen">
        <Drawer v-model="isOpen" position="right">
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Right Drawer Example</h1>
              <p class="mb-4">The drawer will slide in from the right side.</p>
              <p class="mb-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
              <button @click="toggle" class="btn btn-secondary">
                {{ isOpen ? 'Close' : 'Open' }} Right Drawer
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
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    data() {
      return {
        isOpen: false
      };
    },
    template: \`
      <div class="h-screen">
        <Drawer v-model="isOpen" show-close-button>
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Drawer with Close Button</h1>
              <p class="mb-4">This drawer includes a close button in the drawer content.</p>
              <p class="mb-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
              <button @click="toggle" class="btn btn-accent">
                {{ isOpen ? 'Close' : 'Open' }} Drawer
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
    data() {
      return {
        isOpen: false
      };
    },
    template: \`
      <div class="h-screen">
        <Drawer v-model="isOpen">
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
              <p class="mt-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
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
                <li><a>Dashboard</a></li>
                <li><a>Profile</a></li>
                <li><a>Messages</a></li>
                <li><a>Settings</a></li>
                <li><a>Mobile App</a></li>
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
    data() {
      return {
        isOpen: false
      };
    },
    template: \`
      <div class="h-screen">
        <Drawer v-model="isOpen">
          <template #content="{ toggle }">
            <div class="hero min-h-screen bg-base-200">
              <div class="hero-content text-center">
                <div class="max-w-md">
                  <h1 class="text-5xl font-bold">Overlay Drawer</h1>
                  <p class="py-6">
                    This drawer appears as an overlay on top of the content.
                  </p>
                  <p class="mb-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
                  <button @click="toggle" class="btn btn-primary">
                    {{ isOpen ? 'Close' : 'Open' }} Overlay
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
    data() {
      return {
        isOpen: true
      };
    },
    template: \`
      <div class="h-screen">
        <Drawer v-model="isOpen" persistent>
          <template #content>
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Persistent Drawer</h1>
              <p class="mb-4">
                This drawer is always open and cannot be closed by clicking outside.
                Perfect for desktop layouts with permanent navigation.
              </p>
              <p class="mb-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
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
                <li><a class="active">Dashboard</a></li>
                <li><a>Analytics</a></li>
                <li><a>Users</a></li>
                <li><a>Reports</a></li>
                <li><a>Settings</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    data() {
      return {
        isOpen: false,
        eventLog: []
      };
    },
    methods: {
      onOpen() {
        this.eventLog.push('Drawer opened');
      },
      onClose() {
        this.eventLog.push('Drawer closed');
      }
    },
    template: \`
      <div class="h-screen">
        <Drawer v-model="isOpen" @open="onOpen" @close="onClose">
          <template #content="{ toggle }">
            <div class="p-8">
              <h1 class="text-3xl font-bold mb-4">Drawer with Events</h1>
              <p class="mb-4">This example shows how to listen to open/close events.</p>
              <p class="mb-4 text-sm opacity-70">Drawer is {{ isOpen ? 'open' : 'closed' }}</p>
              <button @click="toggle" class="btn btn-primary">
                {{ isOpen ? 'Close' : 'Open' }} Drawer
              </button>
              
              <div class="mt-8">
                <h3 class="text-lg font-bold mb-2">Event Log:</h3>
                <div class="bg-base-200 p-4 rounded-lg max-h-32 overflow-y-auto">
                  <div v-for="(event, index) in eventLog" :key="index" class="text-sm">
                    {{ event }}
                  </div>
                  <div v-if="eventLog.length === 0" class="text-sm opacity-50">
                    No events yet
                  </div>
                </div>
              </div>
            </div>
          </template>
          
          <template #drawer>
            <div class="p-6">
              <h2 class="text-xl font-bold mb-4">Event Demo</h2>
              <p class="mb-4">Open and close this drawer to see events logged.</p>
              <ul class="menu">
                <li><a>Event 1</a></li>
                <li><a>Event 2</a></li>
                <li><a>Event 3</a></li>
              </ul>
            </div>
          </template>
        </Drawer>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};const X=["Default","RightSide","WithCloseButton","MobileVariant","OverlayVariant","Persistent","WithEvents"];export{i as Default,d as MobileVariant,p as OverlayVariant,m as Persistent,r as RightSide,c as WithCloseButton,v as WithEvents,X as __namedExportsOrder,G as default};
