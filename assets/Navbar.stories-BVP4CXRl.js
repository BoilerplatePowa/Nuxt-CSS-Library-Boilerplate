import{d as w,c as x,a,b as o,l,e as i,t as k,n as y,o as s}from"./iframe-BHDwIEoY.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const M={class:"navbar-start"},S={key:0,class:"dropdown navbar-mobile"},z={tabindex:"0",class:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"},L=["href"],B=["src","alt"],C={key:1},j={key:0,class:"navbar-center hidden lg:flex"},I={key:1,class:"navbar-end"},g=w({__name:"Navbar",props:{title:{},logo:{},logoAlt:{default:"Logo"},logoHref:{default:"/"},variant:{default:"default"},shadow:{type:Boolean,default:!1},showMobileMenu:{type:Boolean,default:!0}},setup(t){const b=t,f=x(()=>{const e=["navbar","bg-base-100"];return b.variant==="sticky"?e.push("sticky","top-0","z-30"):b.variant==="glass"&&e.push("glass","backdrop-blur"),b.shadow&&e.push("shadow-lg"),e.join(" ")});return(e,h)=>(s(),a("div",{class:y(f.value)},[o("div",M,[e.showMobileMenu?(s(),a("div",S,[h[0]||(h[0]=o("div",{tabindex:"0",role:"button",class:"btn btn-ghost lg:hidden"},[o("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h8m-8 6h16"})])],-1)),o("ul",z,[i(e.$slots,"mobile-menu",{},void 0,!0)])])):l("",!0),e.logo||e.title?(s(),a("a",{key:1,href:e.logoHref,class:"btn btn-ghost text-xl navbar-brand"},[e.logo?(s(),a("img",{key:0,src:e.logo,alt:e.logoAlt,class:"h-8 w-auto"},null,8,B)):l("",!0),e.title?(s(),a("span",C,k(e.title),1)):l("",!0)],8,L)):l("",!0),i(e.$slots,"brand",{},void 0,!0)]),e.$slots.menu?(s(),a("div",j,[i(e.$slots,"menu",{},void 0,!0)])):l("",!0),e.$slots.actions?(s(),a("div",I,[i(e.$slots,"actions",{},void 0,!0)])):l("",!0)],2))}}),n=N(g,[["__scopeId","data-v-4a707999"]]);g.__docgenInfo={exportName:"default",displayName:"Navbar",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"logo",required:!1,type:{name:"string"}},{name:"logoAlt",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Logo'"}},{name:"logoHref",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'/'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"sticky"'},{name:'"glass"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"shadow",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showMobileMenu",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"mobile-menu"},{name:"brand"},{name:"menu"},{name:"actions"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Navigation/Navbar.vue"]};const q={title:"Navigation/Navbar",component:n,parameters:{layout:"fullscreen",docs:{description:{component:"Navigation bar component with responsive design and customizable brand, menu items, and actions."}}},argTypes:{title:{control:"text",description:"Brand title text"},logo:{control:"text",description:"Logo image URL"},logoAlt:{control:"text",description:"Logo alt text"},logoHref:{control:"text",description:"Logo link URL"},variant:{control:{type:"select"},options:["default","sticky","glass"],description:"Navbar style variant"},shadow:{control:"boolean",description:"Show navbar shadow"},showMobileMenu:{control:"boolean",description:"Show mobile hamburger menu"}},tags:["autodocs"]},v=[{label:"Home",href:"#home",active:!0},{label:"Products",href:"#products"},{label:"Solutions",href:"#solutions"},{label:"Pricing",href:"#pricing"},{label:"About",href:"#about"}],r={args:{title:"Your Brand"},render:t=>({components:{Navbar:n},setup(){return{args:t,menuItems:v}},template:`
      <Navbar v-bind="args">
        <template #menu>
          <ul class="menu menu-horizontal px-1">
            <li v-for="item in menuItems" :key="item.label">
              <a :href="item.href" :class="{ 'active': item.active }">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </template>
        <template #actions>
          <button class="btn btn-ghost">Sign In</button>
          <button class="btn btn-primary">Sign Up</button>
        </template>
      </Navbar>
    `})},d={render:t=>({components:{Navbar:n},setup(){return{args:t,menuItems:v}},template:`
      <Navbar v-bind="args">
        <template #brand>
          <div class="flex items-center">
            <div class="w-8 h-8 bg-primary rounded mr-2 flex items-center justify-center">
              <span class="text-white font-bold">L</span>
            </div>
            <span class="text-xl font-bold">{{ args.title }}</span>
          </div>
        </template>
        <template #menu>
          <ul class="menu menu-horizontal px-1">
            <li v-for="item in menuItems" :key="item.label">
              <a :href="item.href" :class="{ 'active': item.active }">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </template>
        <template #actions>
          <div class="flex items-center gap-2">
            <div class="form-control">
              <input type="text" placeholder="Search..." class="input input-bordered input-sm w-auto" />
            </div>
            <div class="dropdown dropdown-end">
              <div class="avatar" tabindex="0">
                <div class="w-8 rounded-full">
                  <div class="w-8 h-8 bg-primary rounded-full"></div>
                </div>
              </div>
              <ul class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </template>
      </Navbar>
    `}),args:{title:"Logo Brand"}},c={args:{title:"Glass Nav",variant:"glass"},render:t=>({components:{Navbar:n},setup(){return{args:t,menuItems:v}},template:`
      <div>
        <Navbar v-bind="args">
          <template #menu>
            <ul class="menu menu-horizontal px-1">
              <li v-for="item in menuItems" :key="item.label">
                <a :href="item.href" :class="{ 'active': item.active }">
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </template>
          <template #actions>
            <button class="btn btn-ghost">Login</button>
            <button class="btn btn-primary">Get Started</button>
          </template>
        </Navbar>
        
        <!-- Background content to show glass effect -->
        <div class="hero min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div class="hero-content text-center text-white">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Glass Navbar</h1>
              <p class="mb-5">Notice how the navbar has a glass effect over this colorful background</p>
            </div>
          </div>
        </div>
      </div>
    `})},u={render:t=>({components:{Navbar:n},setup(){return{args:t,menuItems:v}},template:`
      <Navbar v-bind="args">
        <template #brand>
          <div class="flex items-center">
            <div class="dropdown lg:hidden">
              <div class="btn btn-ghost" tabindex="0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
              <ul class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-3">
                <li v-for="item in menuItems" :key="item.label">
                  <a :href="item.href">{{ item.label }}</a>
                </li>
              </ul>
            </div>
            <span class="text-xl font-bold ml-2">{{ args.title }}</span>
          </div>
        </template>
        <template #menu>
          <ul class="menu menu-horizontal px-1 hidden lg:flex">
            <li v-for="item in menuItems" :key="item.label">
              <a :href="item.href" :class="{ 'active': item.active }">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </template>
        <template #actions>
          <div class="hidden sm:flex items-center gap-2">
            <button class="btn btn-ghost">Sign In</button>
            <button class="btn btn-primary">Sign Up</button>
          </div>
          <div class="dropdown dropdown-end sm:hidden">
            <div class="btn btn-ghost" tabindex="0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z"></path>
              </svg>
            </div>
            <ul class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-3">
              <li><a>Sign In</a></li>
              <li><a>Sign Up</a></li>
            </ul>
          </div>
        </template>
      </Navbar>
    `}),args:{title:"Responsive Nav"}},m={render:t=>({components:{Navbar:n},setup(){return{args:t}},template:`
      <Navbar v-bind="args">
        <template #brand>
          <div class="flex items-center">
            <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded mr-2 flex items-center justify-center">
              <span class="text-white font-bold text-sm">🛍️</span>
            </div>
            <span class="text-xl font-bold">{{ args.title }}</span>
          </div>
        </template>
        <template #menu>
          <ul class="menu menu-horizontal px-1 hidden lg:flex">
            <li><a href="#" class="active">Home</a></li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul class="p-2 bg-base-100 rounded-t-none">
                  <li><a>Electronics</a></li>
                  <li><a>Clothing</a></li>
                  <li><a>Home & Garden</a></li>
                  <li><a>Sports</a></li>
                </ul>
              </details>
            </li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </template>
        <template #actions>
          <div class="flex items-center gap-3">
            <div class="form-control">
              <div class="input-group">
                <input type="text" placeholder="Search products..." class="input input-bordered input-sm" />
                <button class="btn btn-square btn-sm">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="indicator">
              <span class="indicator-item badge badge-secondary badge-sm">3</span>
              <button class="btn btn-ghost btn-circle">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5L7 13m0 0h10M9 19a2 2 0 11-4 0 2 2 0 014 0zM20 19a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
            
            <div class="dropdown dropdown-end">
              <div class="btn btn-ghost btn-circle avatar" tabindex="0">
                <div class="w-8 rounded-full">
                  <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span class="text-white text-xs">👤</span>
                  </div>
                </div>
              </div>
              <ul class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a>My Account</a></li>
                <li><a>Orders</a></li>
                <li><a>Wishlist</a></li>
                <li><hr /></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </template>
      </Navbar>
    `}),args:{title:"ShopMart"}},p={render:t=>({components:{Navbar:n},setup(){return{args:t}},template:`
      <Navbar v-bind="args">
        <template #brand>
          <div class="flex items-center">
            <div class="btn btn-ghost lg:hidden mr-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </div>
            <span class="text-xl font-bold">{{ args.title }}</span>
          </div>
        </template>
        <template #menu>
          <div class="flex-1 hidden lg:flex justify-center">
            <div class="form-control">
              <div class="input-group">
                <input type="text" placeholder="Search..." class="input input-bordered w-64" />
                <button class="btn btn-square">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </template>
        <template #actions>
          <div class="flex items-center gap-2">
            <div class="indicator">
              <span class="indicator-item badge badge-secondary badge-xs"></span>
              <button class="btn btn-ghost btn-circle">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM10.5 3.5L15 8m-4.5-4.5L15 8m-4.5-4.5L5 8.5m5.5-5L15 8"></path>
                </svg>
              </button>
            </div>
            
            <div class="dropdown dropdown-end">
              <div class="btn btn-ghost btn-circle" tabindex="0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"></path>
                </svg>
              </div>
              <ul class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a>📊 Analytics</a></li>
                <li><a>⚙️ Settings</a></li>
                <li><a>🔒 Security</a></li>
                <li><a>❓ Help</a></li>
              </ul>
            </div>
            
            <div class="dropdown dropdown-end">
              <div class="flex items-center btn btn-ghost" tabindex="0">
                <div class="avatar mr-2">
                  <div class="w-8 rounded-full">
                    <div class="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                </div>
                <span class="hidden md:inline">John Doe</span>
              </div>
              <ul class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a>👤 Profile</a></li>
                <li><a>⚙️ Settings</a></li>
                <li><a>📊 Dashboard</a></li>
                <li><hr /></li>
                <li><a>🚪 Logout</a></li>
              </ul>
            </div>
          </div>
        </template>
      </Navbar>
    `}),args:{title:"Admin Panel",variant:"sticky"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Your Brand'
  },
  render: args => ({
    components: {
      Navbar
    },
    setup() {
      return {
        args,
        menuItems
      };
    },
    template: \`
      <Navbar v-bind="args">
        <template #menu>
          <ul class="menu menu-horizontal px-1">
            <li v-for="item in menuItems" :key="item.label">
              <a :href="item.href" :class="{ 'active': item.active }">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </template>
        <template #actions>
          <button class="btn btn-ghost">Sign In</button>
          <button class="btn btn-primary">Sign Up</button>
        </template>
      </Navbar>
    \`
  })
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Navbar
    },
    setup() {
      return {
        args,
        menuItems
      };
    },
    template: \`
      <Navbar v-bind="args">
        <template #brand>
          <div class="flex items-center">
            <div class="w-8 h-8 bg-primary rounded mr-2 flex items-center justify-center">
              <span class="text-white font-bold">L</span>
            </div>
            <span class="text-xl font-bold">{{ args.title }}</span>
          </div>
        </template>
        <template #menu>
          <ul class="menu menu-horizontal px-1">
            <li v-for="item in menuItems" :key="item.label">
              <a :href="item.href" :class="{ 'active': item.active }">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </template>
        <template #actions>
          <div class="flex items-center gap-2">
            <div class="form-control">
              <input type="text" placeholder="Search..." class="input input-bordered input-sm w-auto" />
            </div>
            <div class="dropdown dropdown-end">
              <div class="avatar" tabindex="0">
                <div class="w-8 rounded-full">
                  <div class="w-8 h-8 bg-primary rounded-full"></div>
                </div>
              </div>
              <ul class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </template>
      </Navbar>
    \`
  }),
  args: {
    title: 'Logo Brand'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Glass Nav',
    variant: 'glass'
  },
  render: args => ({
    components: {
      Navbar
    },
    setup() {
      return {
        args,
        menuItems
      };
    },
    template: \`
      <div>
        <Navbar v-bind="args">
          <template #menu>
            <ul class="menu menu-horizontal px-1">
              <li v-for="item in menuItems" :key="item.label">
                <a :href="item.href" :class="{ 'active': item.active }">
                  {{ item.label }}
                </a>
              </li>
            </ul>
          </template>
          <template #actions>
            <button class="btn btn-ghost">Login</button>
            <button class="btn btn-primary">Get Started</button>
          </template>
        </Navbar>
        
        <!-- Background content to show glass effect -->
        <div class="hero min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          <div class="hero-content text-center text-white">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Glass Navbar</h1>
              <p class="mb-5">Notice how the navbar has a glass effect over this colorful background</p>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Navbar
    },
    setup() {
      return {
        args,
        menuItems
      };
    },
    template: \`
      <Navbar v-bind="args">
        <template #brand>
          <div class="flex items-center">
            <div class="dropdown lg:hidden">
              <div class="btn btn-ghost" tabindex="0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
              <ul class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-3">
                <li v-for="item in menuItems" :key="item.label">
                  <a :href="item.href">{{ item.label }}</a>
                </li>
              </ul>
            </div>
            <span class="text-xl font-bold ml-2">{{ args.title }}</span>
          </div>
        </template>
        <template #menu>
          <ul class="menu menu-horizontal px-1 hidden lg:flex">
            <li v-for="item in menuItems" :key="item.label">
              <a :href="item.href" :class="{ 'active': item.active }">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </template>
        <template #actions>
          <div class="hidden sm:flex items-center gap-2">
            <button class="btn btn-ghost">Sign In</button>
            <button class="btn btn-primary">Sign Up</button>
          </div>
          <div class="dropdown dropdown-end sm:hidden">
            <div class="btn btn-ghost" tabindex="0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z"></path>
              </svg>
            </div>
            <ul class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-3">
              <li><a>Sign In</a></li>
              <li><a>Sign Up</a></li>
            </ul>
          </div>
        </template>
      </Navbar>
    \`
  }),
  args: {
    title: 'Responsive Nav'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Navbar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Navbar v-bind="args">
        <template #brand>
          <div class="flex items-center">
            <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded mr-2 flex items-center justify-center">
              <span class="text-white font-bold text-sm">🛍️</span>
            </div>
            <span class="text-xl font-bold">{{ args.title }}</span>
          </div>
        </template>
        <template #menu>
          <ul class="menu menu-horizontal px-1 hidden lg:flex">
            <li><a href="#" class="active">Home</a></li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul class="p-2 bg-base-100 rounded-t-none">
                  <li><a>Electronics</a></li>
                  <li><a>Clothing</a></li>
                  <li><a>Home & Garden</a></li>
                  <li><a>Sports</a></li>
                </ul>
              </details>
            </li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </template>
        <template #actions>
          <div class="flex items-center gap-3">
            <div class="form-control">
              <div class="input-group">
                <input type="text" placeholder="Search products..." class="input input-bordered input-sm" />
                <button class="btn btn-square btn-sm">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="indicator">
              <span class="indicator-item badge badge-secondary badge-sm">3</span>
              <button class="btn btn-ghost btn-circle">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5L7 13m0 0h10M9 19a2 2 0 11-4 0 2 2 0 014 0zM20 19a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
            
            <div class="dropdown dropdown-end">
              <div class="btn btn-ghost btn-circle avatar" tabindex="0">
                <div class="w-8 rounded-full">
                  <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span class="text-white text-xs">👤</span>
                  </div>
                </div>
              </div>
              <ul class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a>My Account</a></li>
                <li><a>Orders</a></li>
                <li><a>Wishlist</a></li>
                <li><hr /></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </template>
      </Navbar>
    \`
  }),
  args: {
    title: 'ShopMart'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Navbar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Navbar v-bind="args">
        <template #brand>
          <div class="flex items-center">
            <div class="btn btn-ghost lg:hidden mr-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </div>
            <span class="text-xl font-bold">{{ args.title }}</span>
          </div>
        </template>
        <template #menu>
          <div class="flex-1 hidden lg:flex justify-center">
            <div class="form-control">
              <div class="input-group">
                <input type="text" placeholder="Search..." class="input input-bordered w-64" />
                <button class="btn btn-square">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </template>
        <template #actions>
          <div class="flex items-center gap-2">
            <div class="indicator">
              <span class="indicator-item badge badge-secondary badge-xs"></span>
              <button class="btn btn-ghost btn-circle">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM10.5 3.5L15 8m-4.5-4.5L15 8m-4.5-4.5L5 8.5m5.5-5L15 8"></path>
                </svg>
              </button>
            </div>
            
            <div class="dropdown dropdown-end">
              <div class="btn btn-ghost btn-circle" tabindex="0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"></path>
                </svg>
              </div>
              <ul class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a>📊 Analytics</a></li>
                <li><a>⚙️ Settings</a></li>
                <li><a>🔒 Security</a></li>
                <li><a>❓ Help</a></li>
              </ul>
            </div>
            
            <div class="dropdown dropdown-end">
              <div class="flex items-center btn btn-ghost" tabindex="0">
                <div class="avatar mr-2">
                  <div class="w-8 rounded-full">
                    <div class="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                </div>
                <span class="hidden md:inline">John Doe</span>
              </div>
              <ul class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a>👤 Profile</a></li>
                <li><a>⚙️ Settings</a></li>
                <li><a>📊 Dashboard</a></li>
                <li><hr /></li>
                <li><a>🚪 Logout</a></li>
              </ul>
            </div>
          </div>
        </template>
      </Navbar>
    \`
  }),
  args: {
    title: 'Admin Panel',
    variant: 'sticky'
  }
}`,...p.parameters?.docs?.source}}};const D=["Default","WithLogo","Glass","Responsive","ECommerce","Dashboard"];export{p as Dashboard,r as Default,m as ECommerce,c as Glass,u as Responsive,d as WithLogo,D as __namedExportsOrder,q as default};
