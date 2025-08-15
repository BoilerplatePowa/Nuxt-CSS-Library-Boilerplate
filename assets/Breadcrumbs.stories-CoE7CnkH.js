import{d as _,c as x,a as t,b as D,e as T,n as g,o,F as N,g as V,m as C,q as B,t as y}from"./iframe-B1LxmkNN.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const q=["href","onClick"],U=["innerHTML"],W=["innerHTML"],k=_({__name:"Breadcrumbs",props:{items:{default:()=>[]},size:{default:"md"},maxItems:{},showHomeIcon:{type:Boolean,default:!1},separator:{}},emits:["item-click"],setup(H,{emit:I}){const r=H,M=I,S=x(()=>{const s=["breadcrumbs"];return r.size==="xs"?s.push("text-xs"):r.size==="sm"?s.push("text-sm"):r.size==="lg"&&s.push("text-lg"),s.join(" ")}),w=x(()=>{if(!r.maxItems||r.items.length<=r.maxItems)return r.items;const s=r.items[0],a=r.items.slice(-(r.maxItems-2));return[s,{label:"...",disabled:!0},...a]}),z=(s,a)=>s.value?.toString()||s.label||a.toString(),f=(s,a)=>{const e=[];return s.disabled?e.push("opacity-50","cursor-not-allowed"):v(a)?e.push("font-medium","text-base-content"):s.href&&e.push("text-primary","hover:text-primary-focus","transition-colors"),e.join(" ")},v=s=>s===w.value.length-1,L=(s,a,e)=>{if(s.disabled){e.preventDefault();return}M("item-click",s,a,e)};return(s,a)=>(o(),t("div",{class:g(S.value)},[D("ul",null,[T(s.$slots,"default",{},()=>[(o(!0),t(N,null,V(s.items,(e,l)=>(o(),t("li",{key:z(e,l)},[e.href&&!v(l)?(o(),t("a",{key:0,href:e.href,class:g(f(e,l)),onClick:E=>L(e,l,E)},[e.icon?(o(),t("span",{key:0,innerHTML:e.icon,class:"mr-2"},null,8,U)):C("",!0),B(" "+y(e.label),1)],10,q)):(o(),t("span",{key:1,class:g(f(e,l))},[e.icon?(o(),t("span",{key:0,innerHTML:e.icon,class:"mr-2"},null,8,W)):C("",!0),B(" "+y(e.label),1)],2))]))),128))],!0)])],2))}}),b=j(k,[["__scopeId","data-v-3e9a25ee"]]);k.__docgenInfo={exportName:"default",displayName:"Breadcrumbs",description:"",tags:{},props:[{name:"items",required:!1,type:{name:"Array",elements:[{name:"BreadcrumbItem"}]},defaultValue:{func:!1,value:"() => []"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"maxItems",required:!1,type:{name:"number"}},{name:"showHomeIcon",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"separator",required:!1,type:{name:"string"}}],events:[{name:"item-click",type:{names:["BreadcrumbItem"]}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Navigation/Breadcrumbs.vue"]};const K={title:"Navigation/Breadcrumbs",component:b,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},separator:{control:{type:"text"}},maxItems:{control:{type:"number"}}}},P=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Smartphones"}],O=[{label:"Home",href:"/",icon:"🏠"},{label:"Dashboard",href:"/dashboard",icon:"📊"},{label:"Analytics",href:"/analytics",icon:"📈"},{label:"Reports",icon:"📄"}],n={args:{items:P}},c={args:{items:O}},i={args:{items:P,separator:"→"}},m={render:()=>({components:{Breadcrumbs:b},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold mb-2">Extra Small</h3>
          <Breadcrumbs 
            size="xs"
            :items="[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Current Page' }
            ]"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">Small</h3>
          <Breadcrumbs 
            size="sm"
            :items="[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Current Page' }
            ]"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">Medium</h3>
          <Breadcrumbs 
            size="md"
            :items="[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Current Page' }
            ]"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">Large</h3>
          <Breadcrumbs 
            size="lg"
            :items="[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Current Page' }
            ]"
          />
        </div>
      </div>
    `})},d={args:{items:[{label:"Home",href:"/"},{label:"Categories",href:"/categories"},{label:"Electronics",href:"/categories/electronics"},{label:"Computers",href:"/categories/electronics/computers"},{label:"Laptops",href:"/categories/electronics/computers/laptops"},{label:"Gaming",href:"/categories/electronics/computers/laptops/gaming"},{label:"High Performance",href:"/categories/electronics/computers/laptops/gaming/high-performance"},{label:"Current Product"}]}},u={args:{items:[{label:"Home",href:"/"},{label:"Categories",href:"/categories"},{label:"Electronics",href:"/categories/electronics"},{label:"Computers",href:"/categories/electronics/computers"},{label:"Laptops",href:"/categories/electronics/computers/laptops"},{label:"Gaming",href:"/categories/electronics/computers/laptops/gaming"},{label:"Current Product"}],maxItems:4}},p={render:()=>({components:{Breadcrumbs:b},template:`
      <Breadcrumbs>
        <li>
          <a href="/" class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a href="/products" class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            Products
          </a>
        </li>
        <li>
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            Electronics
          </span>
        </li>
      </Breadcrumbs>
    `})},h={render:()=>({components:{Breadcrumbs:b},template:`
      <div class="space-y-8">
        <div class="bg-base-200 p-6 rounded-lg">
          <h3 class="text-lg font-bold mb-4">E-commerce Product Page</h3>
          <Breadcrumbs 
            :items="[
              { label: 'Home', href: '/', icon: '🏠' },
              { label: 'Men', href: '/men', icon: '👤' },
              { label: 'Clothing', href: '/men/clothing', icon: '👕' },
              { label: 'T-Shirts', href: '/men/clothing/t-shirts', icon: '👔' },
              { label: 'Organic Cotton Tee' }
            ]"
          />
          
          <div class="mt-6">
            <h1 class="text-2xl font-bold">Organic Cotton T-Shirt</h1>
            <p class="text-gray-600">Comfortable, sustainable, and stylish.</p>
          </div>
        </div>
        
        <div class="bg-base-200 p-6 rounded-lg">
          <h3 class="text-lg font-bold mb-4">Admin Dashboard</h3>
          <Breadcrumbs 
            :items="[
              { label: 'Dashboard', href: '/admin', icon: '📊' },
              { label: 'Users', href: '/admin/users', icon: '👥' },
              { label: 'Edit User', icon: '✏️' }
            ]"
          />
          
          <div class="mt-6">
            <h1 class="text-2xl font-bold">Edit User Profile</h1>
            <p class="text-gray-600">Modify user information and permissions.</p>
          </div>
        </div>
        
        <div class="bg-base-200 p-6 rounded-lg">
          <h3 class="text-lg font-bold mb-4">Documentation</h3>
          <Breadcrumbs 
            separator="→"
            :items="[
              { label: 'Docs', href: '/docs', icon: '📖' },
              { label: 'Components', href: '/docs/components', icon: '🧩' },
              { label: 'Navigation', href: '/docs/components/navigation', icon: '🧭' },
              { label: 'Breadcrumbs', icon: '🍞' }
            ]"
          />
          
          <div class="mt-6">
            <h1 class="text-2xl font-bold">Breadcrumbs Component</h1>
            <p class="text-gray-600">Learn how to implement breadcrumb navigation.</p>
          </div>
        </div>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: itemsWithIcons
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    separator: '→'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Breadcrumbs
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold mb-2">Extra Small</h3>
          <Breadcrumbs 
            size="xs"
            :items="[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Current Page' }
            ]"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">Small</h3>
          <Breadcrumbs 
            size="sm"
            :items="[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Current Page' }
            ]"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">Medium</h3>
          <Breadcrumbs 
            size="md"
            :items="[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Current Page' }
            ]"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-2">Large</h3>
          <Breadcrumbs 
            size="lg"
            :items="[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: 'Current Page' }
            ]"
          />
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Categories',
      href: '/categories'
    }, {
      label: 'Electronics',
      href: '/categories/electronics'
    }, {
      label: 'Computers',
      href: '/categories/electronics/computers'
    }, {
      label: 'Laptops',
      href: '/categories/electronics/computers/laptops'
    }, {
      label: 'Gaming',
      href: '/categories/electronics/computers/laptops/gaming'
    }, {
      label: 'High Performance',
      href: '/categories/electronics/computers/laptops/gaming/high-performance'
    }, {
      label: 'Current Product'
    }]
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Categories',
      href: '/categories'
    }, {
      label: 'Electronics',
      href: '/categories/electronics'
    }, {
      label: 'Computers',
      href: '/categories/electronics/computers'
    }, {
      label: 'Laptops',
      href: '/categories/electronics/computers/laptops'
    }, {
      label: 'Gaming',
      href: '/categories/electronics/computers/laptops/gaming'
    }, {
      label: 'Current Product'
    }],
    maxItems: 4
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Breadcrumbs
    },
    template: \`
      <Breadcrumbs>
        <li>
          <a href="/" class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a href="/products" class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            Products
          </a>
        </li>
        <li>
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            Electronics
          </span>
        </li>
      </Breadcrumbs>
    \`
  })
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Breadcrumbs
    },
    template: \`
      <div class="space-y-8">
        <div class="bg-base-200 p-6 rounded-lg">
          <h3 class="text-lg font-bold mb-4">E-commerce Product Page</h3>
          <Breadcrumbs 
            :items="[
              { label: 'Home', href: '/', icon: '🏠' },
              { label: 'Men', href: '/men', icon: '👤' },
              { label: 'Clothing', href: '/men/clothing', icon: '👕' },
              { label: 'T-Shirts', href: '/men/clothing/t-shirts', icon: '👔' },
              { label: 'Organic Cotton Tee' }
            ]"
          />
          
          <div class="mt-6">
            <h1 class="text-2xl font-bold">Organic Cotton T-Shirt</h1>
            <p class="text-gray-600">Comfortable, sustainable, and stylish.</p>
          </div>
        </div>
        
        <div class="bg-base-200 p-6 rounded-lg">
          <h3 class="text-lg font-bold mb-4">Admin Dashboard</h3>
          <Breadcrumbs 
            :items="[
              { label: 'Dashboard', href: '/admin', icon: '📊' },
              { label: 'Users', href: '/admin/users', icon: '👥' },
              { label: 'Edit User', icon: '✏️' }
            ]"
          />
          
          <div class="mt-6">
            <h1 class="text-2xl font-bold">Edit User Profile</h1>
            <p class="text-gray-600">Modify user information and permissions.</p>
          </div>
        </div>
        
        <div class="bg-base-200 p-6 rounded-lg">
          <h3 class="text-lg font-bold mb-4">Documentation</h3>
          <Breadcrumbs 
            separator="→"
            :items="[
              { label: 'Docs', href: '/docs', icon: '📖' },
              { label: 'Components', href: '/docs/components', icon: '🧩' },
              { label: 'Navigation', href: '/docs/components/navigation', icon: '🧭' },
              { label: 'Breadcrumbs', icon: '🍞' }
            ]"
          />
          
          <div class="mt-6">
            <h1 class="text-2xl font-bold">Breadcrumbs Component</h1>
            <p class="text-gray-600">Learn how to implement breadcrumb navigation.</p>
          </div>
        </div>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};const R=["Default","WithIcons","CustomSeparator","Sizes","LongPath","WithMaxItems","CustomContent","EcommercePath"];export{p as CustomContent,i as CustomSeparator,n as Default,h as EcommercePath,d as LongPath,m as Sizes,c as WithIcons,u as WithMaxItems,R as __namedExportsOrder,K as default};
