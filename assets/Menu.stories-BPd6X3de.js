import{d as I,c as N,a as o,e as T,n as c,o as s,F as w,g as z,m as t,t as l,q as h}from"./iframe-D_58n4_g.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const E={key:0,class:"menu-title"},U={key:1},j=["href","onClick"],W=["innerHTML"],q={key:1,class:"badge badge-sm"},J=["disabled","onClick"],F=["innerHTML"],O={key:1,class:"badge badge-sm"},R={key:4,class:"menu"},Y=["href","onClick"],K=["innerHTML"],$={key:1,class:"badge badge-sm"},G=["disabled","onClick"],Q=["innerHTML"],X={key:1,class:"badge badge-sm"},H=I({__name:"Menu",props:{items:{default:()=>[]},size:{default:"md"},variant:{default:"default"},rounded:{type:Boolean,default:!1}},emits:["item-click"],setup(L,{emit:B}){const i=L,D=B,P=N(()=>{const e=["menu"];return i.size==="xs"?e.push("menu-xs"):i.size==="sm"?e.push("menu-sm"):i.size==="lg"&&e.push("menu-lg"),i.variant==="compact"?e.push("menu-compact"):i.variant==="horizontal"&&e.push("menu-horizontal"),e.push("bg-base-200","w-56","p-2"),i.rounded&&e.push("rounded-box"),e.join(" ")}),_=e=>e.value!==void 0?String(e.value):e.label?e.label:e.title?e.title:Math.random().toString(),u=e=>{const r=[];return e.active&&r.push("active"),e.disabled&&r.push("disabled"),r.join(" ")},b=(e,r)=>{if(e.disabled){r.preventDefault();return}D("item-click",e,r)};return(e,r)=>(s(),o("ul",{class:c(P.value)},[T(e.$slots,"default",{},()=>[(s(!0),o(w,null,z(e.items,a=>(s(),o("li",{key:_(a)},[a.title?(s(),o("h2",E,l(a.title),1)):a.divider?(s(),o("hr",U)):a.href?(s(),o("a",{key:2,href:a.href,class:c(u(a)),onClick:n=>b(a,n)},[a.icon?(s(),o("span",{key:0,innerHTML:a.icon},null,8,W)):t("",!0),h(" "+l(a.label)+" ",1),a.badge?(s(),o("span",q,l(a.badge),1)):t("",!0)],10,j)):(s(),o("button",{key:3,type:"button",class:c(u(a)),disabled:a.disabled,onClick:n=>b(a,n)},[a.icon?(s(),o("span",{key:0,innerHTML:a.icon},null,8,F)):t("",!0),h(" "+l(a.label)+" ",1),a.badge?(s(),o("span",O,l(a.badge),1)):t("",!0)],10,J)),a.children&&a.children.length>0?(s(),o("ul",R,[(s(!0),o(w,null,z(a.children,n=>(s(),o("li",{key:_(n)},[n.href?(s(),o("a",{key:0,href:n.href,class:c(u(n)),onClick:C=>b(n,C)},[n.icon?(s(),o("span",{key:0,innerHTML:n.icon},null,8,K)):t("",!0),h(" "+l(n.label)+" ",1),n.badge?(s(),o("span",$,l(n.badge),1)):t("",!0)],10,Y)):(s(),o("button",{key:1,type:"button",class:c(u(n)),disabled:n.disabled,onClick:C=>b(n,C)},[n.icon?(s(),o("span",{key:0,innerHTML:n.icon},null,8,Q)):t("",!0),h(" "+l(n.label)+" ",1),n.badge?(s(),o("span",X,l(n.badge),1)):t("",!0)],10,G))]))),128))])):t("",!0)]))),128))],!0)],2))}}),d=V(H,[["__scopeId","data-v-ada47455"]]);H.__docgenInfo={exportName:"default",displayName:"Menu",description:"",tags:{},props:[{name:"items",required:!1,type:{name:"Array",elements:[{name:"MenuItem"}]},defaultValue:{func:!1,value:"() => []"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"compact"'},{name:'"horizontal"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"rounded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"item-click",type:{names:["MenuItem"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Navigation/Menu.vue"]};const oe={title:"Navigation/Menu",component:d,parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["default","compact","horizontal"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},rounded:{control:{type:"boolean"}}}},A=[{label:"Dashboard",href:"/dashboard",icon:"📊"},{label:"Users",href:"/users",icon:"👥",badge:"12"},{label:"Products",href:"/products",icon:"📦"},{divider:!0},{title:"Settings"},{label:"Profile",href:"/profile",icon:"👤"},{label:"Account",href:"/account",icon:"⚙️"},{label:"Logout",href:"/logout",icon:"🚪"}],Z=[{label:"Home",href:"/",icon:"🏠"},{label:"Products",icon:"📦",children:[{label:"Electronics",href:"/products/electronics"},{label:"Clothing",href:"/products/clothing"},{label:"Books",href:"/products/books"}]},{label:"Services",icon:"🛠️",children:[{label:"Consulting",href:"/services/consulting"},{label:"Support",href:"/services/support"},{label:"Training",href:"/services/training"}]},{label:"About",href:"/about",icon:"ℹ️"},{label:"Contact",href:"/contact",icon:"📞"}],m={args:{items:A}},p={args:{items:A,variant:"compact"}},f={args:{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Services",href:"/services"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}],variant:"horizontal"}},g={args:{items:[{label:"Dashboard",href:"/dashboard",icon:"📊"},{label:"Analytics",href:"/analytics",icon:"📈"},{label:"Reports",href:"/reports",icon:"📄"},{label:"Settings",href:"/settings",icon:"⚙️"},{label:"Help",href:"/help",icon:"❓"}]}},v={args:{items:[{label:"Inbox",href:"/inbox",icon:"📧",badge:"5"},{label:"Messages",href:"/messages",icon:"💬",badge:"12"},{label:"Notifications",href:"/notifications",icon:"🔔",badge:"3"},{label:"Tasks",href:"/tasks",icon:"✅",badge:"8"},{label:"Archive",href:"/archive",icon:"📁"}]}},x={args:{items:Z}},M={render:()=>({components:{Menu:d},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Extra Small</h3>
          <Menu 
            size="xs"
            :items="[
              { label: 'Home', href: '/', icon: '🏠' },
              { label: 'About', href: '/about', icon: 'ℹ️' },
              { label: 'Contact', href: '/contact', icon: '📞' }
            ]"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Small</h3>
          <Menu 
            size="sm"
            :items="[
              { label: 'Home', href: '/', icon: '🏠' },
              { label: 'About', href: '/about', icon: 'ℹ️' },
              { label: 'Contact', href: '/contact', icon: '📞' }
            ]"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Medium</h3>
          <Menu 
            size="md"
            :items="[
              { label: 'Home', href: '/', icon: '🏠' },
              { label: 'About', href: '/about', icon: 'ℹ️' },
              { label: 'Contact', href: '/contact', icon: '📞' }
            ]"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Large</h3>
          <Menu 
            size="lg"
            :items="[
              { label: 'Home', href: '/', icon: '🏠' },
              { label: 'About', href: '/about', icon: 'ℹ️' },
              { label: 'Contact', href: '/contact', icon: '📞' }
            ]"
          />
        </div>
      </div>
    `})},k={render:()=>({components:{Menu:d},template:`
      <Menu>
        <li><a class="active">Dashboard</a></li>
        <li><a>Users</a></li>
        <li>
          <details open>
            <summary>Products</summary>
            <ul>
              <li><a>Electronics</a></li>
              <li><a>Clothing</a></li>
              <li><a>Books</a></li>
            </ul>
          </details>
        </li>
        <li><a>Settings</a></li>
        <li><a disabled>Coming Soon</a></li>
      </Menu>
    `})},y={render:()=>({components:{Menu:d},template:`
      <div class="flex h-96">
        <div class="w-64 bg-base-200 p-4">
          <div class="mb-6">
            <h2 class="text-xl font-bold">Admin Panel</h2>
            <p class="text-sm opacity-70">Welcome back, John</p>
          </div>
          
          <Menu 
            :items="[
              { title: 'Main' },
              { label: 'Dashboard', href: '/dashboard', icon: '📊', active: true },
              { label: 'Analytics', href: '/analytics', icon: '📈' },
              { divider: true },
              { title: 'Management' },
              { label: 'Users', href: '/users', icon: '👥', badge: '24' },
              { label: 'Products', href: '/products', icon: '📦', badge: '156' },
              { label: 'Orders', href: '/orders', icon: '🛒', badge: '12' },
              { divider: true },
              { title: 'System' },
              { label: 'Settings', href: '/settings', icon: '⚙️' },
              { label: 'Logs', href: '/logs', icon: '📄' },
              { label: 'Logout', href: '/logout', icon: '🚪' }
            ]"
          />
        </div>
        
        <div class="flex-1 p-8 bg-base-100">
          <h1 class="text-3xl font-bold mb-4">Dashboard</h1>
          <p>Main content area goes here...</p>
        </div>
      </div>
    `})},S={render:()=>({components:{Menu:d},template:`
      <div class="flex gap-4">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn">
            User Menu
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <Menu 
            tabindex="0"
            class="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            :items="[
              { label: 'Profile', href: '/profile', icon: '👤' },
              { label: 'Account Settings', href: '/settings', icon: '⚙️' },
              { label: 'Billing', href: '/billing', icon: '💳' },
              { divider: true },
              { label: 'Help & Support', href: '/help', icon: '❓' },
              { label: 'Logout', href: '/logout', icon: '🚪' }
            ]"
          />
        </div>
        
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-circle">
            <div class="indicator">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"></path>
              </svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </div>
          <Menu 
            tabindex="0"
            class="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-64"
            :items="[
              { title: 'Notifications' },
              { label: 'New message from John', href: '#', icon: '💬' },
              { label: 'Your order has shipped', href: '#', icon: '📦' },
              { label: 'Payment received', href: '#', icon: '💰' },
              { divider: true },
              { label: 'View all notifications', href: '/notifications' }
            ]"
          />
        </div>
      </div>
    `})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleMenuItems
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleMenuItems,
    variant: 'compact'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Services',
      href: '/services'
    }, {
      label: 'About',
      href: '/about'
    }, {
      label: 'Contact',
      href: '/contact'
    }],
    variant: 'horizontal'
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      href: '/dashboard',
      icon: '📊'
    }, {
      label: 'Analytics',
      href: '/analytics',
      icon: '📈'
    }, {
      label: 'Reports',
      href: '/reports',
      icon: '📄'
    }, {
      label: 'Settings',
      href: '/settings',
      icon: '⚙️'
    }, {
      label: 'Help',
      href: '/help',
      icon: '❓'
    }]
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Inbox',
      href: '/inbox',
      icon: '📧',
      badge: '5'
    }, {
      label: 'Messages',
      href: '/messages',
      icon: '💬',
      badge: '12'
    }, {
      label: 'Notifications',
      href: '/notifications',
      icon: '🔔',
      badge: '3'
    }, {
      label: 'Tasks',
      href: '/tasks',
      icon: '✅',
      badge: '8'
    }, {
      label: 'Archive',
      href: '/archive',
      icon: '📁'
    }]
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: hierarchicalMenu
  }
}`,...x.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Menu
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Extra Small</h3>
          <Menu 
            size="xs"
            :items="[
              { label: 'Home', href: '/', icon: '🏠' },
              { label: 'About', href: '/about', icon: 'ℹ️' },
              { label: 'Contact', href: '/contact', icon: '📞' }
            ]"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Small</h3>
          <Menu 
            size="sm"
            :items="[
              { label: 'Home', href: '/', icon: '🏠' },
              { label: 'About', href: '/about', icon: 'ℹ️' },
              { label: 'Contact', href: '/contact', icon: '📞' }
            ]"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Medium</h3>
          <Menu 
            size="md"
            :items="[
              { label: 'Home', href: '/', icon: '🏠' },
              { label: 'About', href: '/about', icon: 'ℹ️' },
              { label: 'Contact', href: '/contact', icon: '📞' }
            ]"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Large</h3>
          <Menu 
            size="lg"
            :items="[
              { label: 'Home', href: '/', icon: '🏠' },
              { label: 'About', href: '/about', icon: 'ℹ️' },
              { label: 'Contact', href: '/contact', icon: '📞' }
            ]"
          />
        </div>
      </div>
    \`
  })
}`,...M.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Menu
    },
    template: \`
      <Menu>
        <li><a class="active">Dashboard</a></li>
        <li><a>Users</a></li>
        <li>
          <details open>
            <summary>Products</summary>
            <ul>
              <li><a>Electronics</a></li>
              <li><a>Clothing</a></li>
              <li><a>Books</a></li>
            </ul>
          </details>
        </li>
        <li><a>Settings</a></li>
        <li><a disabled>Coming Soon</a></li>
      </Menu>
    \`
  })
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Menu
    },
    template: \`
      <div class="flex h-96">
        <div class="w-64 bg-base-200 p-4">
          <div class="mb-6">
            <h2 class="text-xl font-bold">Admin Panel</h2>
            <p class="text-sm opacity-70">Welcome back, John</p>
          </div>
          
          <Menu 
            :items="[
              { title: 'Main' },
              { label: 'Dashboard', href: '/dashboard', icon: '📊', active: true },
              { label: 'Analytics', href: '/analytics', icon: '📈' },
              { divider: true },
              { title: 'Management' },
              { label: 'Users', href: '/users', icon: '👥', badge: '24' },
              { label: 'Products', href: '/products', icon: '📦', badge: '156' },
              { label: 'Orders', href: '/orders', icon: '🛒', badge: '12' },
              { divider: true },
              { title: 'System' },
              { label: 'Settings', href: '/settings', icon: '⚙️' },
              { label: 'Logs', href: '/logs', icon: '📄' },
              { label: 'Logout', href: '/logout', icon: '🚪' }
            ]"
          />
        </div>
        
        <div class="flex-1 p-8 bg-base-100">
          <h1 class="text-3xl font-bold mb-4">Dashboard</h1>
          <p>Main content area goes here...</p>
        </div>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Menu
    },
    template: \`
      <div class="flex gap-4">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn">
            User Menu
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <Menu 
            tabindex="0"
            class="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            :items="[
              { label: 'Profile', href: '/profile', icon: '👤' },
              { label: 'Account Settings', href: '/settings', icon: '⚙️' },
              { label: 'Billing', href: '/billing', icon: '💳' },
              { divider: true },
              { label: 'Help & Support', href: '/help', icon: '❓' },
              { label: 'Logout', href: '/logout', icon: '🚪' }
            ]"
          />
        </div>
        
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-circle">
            <div class="indicator">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"></path>
              </svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </div>
          <Menu 
            tabindex="0"
            class="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-64"
            :items="[
              { title: 'Notifications' },
              { label: 'New message from John', href: '#', icon: '💬' },
              { label: 'Your order has shipped', href: '#', icon: '📦' },
              { label: 'Payment received', href: '#', icon: '💰' },
              { divider: true },
              { label: 'View all notifications', href: '/notifications' }
            ]"
          />
        </div>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};const se=["Default","Compact","Horizontal","WithIcons","WithBadges","Hierarchical","Sizes","CustomContent","SidebarLayout","DropdownMenu"];export{p as Compact,k as CustomContent,m as Default,S as DropdownMenu,x as Hierarchical,f as Horizontal,y as SidebarLayout,M as Sizes,v as WithBadges,g as WithIcons,se as __namedExportsOrder,oe as default};
