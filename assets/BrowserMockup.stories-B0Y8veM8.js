import{d as b,c,a as m,b as i,t as g,e as h,n as p,o as f}from"./iframe-B-dz0hg_.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const w={class:"mockup-browser-toolbar"},k={class:"input"},x=b({__name:"BrowserMockup",props:{url:{default:"https://daisyui.com"},variant:{default:"default"},size:{default:"md"}},setup(d){const s=d,v=c(()=>{const e=["mockup-browser"];return s.variant==="border"?e.push("border"):s.variant==="bg"&&e.push("bg-base-300"),s.size==="sm"?e.push("max-w-md"):s.size==="md"?e.push("max-w-lg"):s.size==="lg"&&e.push("max-w-2xl"),e.join(" ")}),u=c(()=>["flex","justify-center","px-4","py-16","bg-base-200"].join(" "));return(e,B)=>(f(),m("div",{class:p(v.value)},[i("div",w,[i("div",k,g(e.url),1)]),i("div",{class:p(u.value)},[h(e.$slots,"default",{},void 0,!0)],2)],2))}}),t=y(x,[["__scopeId","data-v-034adc1e"]]);x.__docgenInfo={exportName:"default",displayName:"BrowserMockup",description:"",tags:{},props:[{name:"url",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'https://daisyui.com'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"border"'},{name:'"bg"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Mockup/BrowserMockup.vue"]};const A={title:"Mockup/BrowserMockup",component:t,parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["default","border","bg"]},url:{control:{type:"text"}}}},a={args:{url:"https://example.com"},render:d=>({components:{BrowserMockup:t},setup(){return{args:d}},template:`
      <BrowserMockup v-bind="args">
        <div class="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-96 flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
            <p class="text-xl text-gray-600 mb-8">This is a sample webpage content inside a browser mockup</p>
            <button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </BrowserMockup>
    `})},n={render:()=>({components:{BrowserMockup:t},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <BrowserMockup url="https://example.com">
            <div class="bg-base-200 p-8 text-center">
              <h2 class="text-2xl font-bold">Default Browser</h2>
              <p>Clean and simple browser mockup</p>
            </div>
          </BrowserMockup>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Border</h3>
          <BrowserMockup url="https://example.com" variant="border">
            <div class="bg-base-200 p-8 text-center">
              <h2 class="text-2xl font-bold">Bordered Browser</h2>
              <p>Browser mockup with border styling</p>
            </div>
          </BrowserMockup>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Background</h3>
          <BrowserMockup url="https://example.com" variant="bg">
            <div class="bg-base-200 p-8 text-center">
              <h2 class="text-2xl font-bold">Background Browser</h2>
              <p>Browser mockup with background styling</p>
            </div>
          </BrowserMockup>
        </div>
      </div>
    `})},r={render:()=>({components:{BrowserMockup:t},template:`
      <BrowserMockup url="https://my-awesome-app.com">
        <div class="min-h-96">
          <!-- Navigation -->
          <nav class="bg-white shadow-sm border-b px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-8">
                <div class="text-xl font-bold text-blue-600">MyApp</div>
                <div class="hidden md:flex space-x-6">
                  <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
                  <a href="#" class="text-gray-600 hover:text-gray-900">Features</a>
                  <a href="#" class="text-gray-600 hover:text-gray-900">Pricing</a>
                  <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <a href="#" class="text-gray-600 hover:text-gray-900">Sign In</a>
                <a href="#" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</a>
              </div>
            </div>
          </nav>
          
          <!-- Hero Section -->
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
            <div class="max-w-4xl mx-auto px-6 text-center">
              <h1 class="text-4xl md:text-6xl font-bold mb-6">
                Build Amazing Apps
              </h1>
              <p class="text-xl mb-8 opacity-90">
                The fastest way to create modern web applications with our powerful framework
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                  Get Started Free
                </button>
                <button class="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
                  View Demo
                </button>
              </div>
            </div>
          </div>
          
          <!-- Features Section -->
          <div class="py-16 px-6">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl font-bold text-center mb-12">Why Choose MyApp?</h2>
              <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center">
                  <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">⚡</span>
                  </div>
                  <h3 class="text-xl font-semibold mb-2">Lightning Fast</h3>
                  <p class="text-gray-600">Optimized for speed and performance</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">🔒</span>
                  </div>
                  <h3 class="text-xl font-semibold mb-2">Secure</h3>
                  <p class="text-gray-600">Enterprise-grade security built-in</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">📱</span>
                  </div>
                  <h3 class="text-xl font-semibold mb-2">Responsive</h3>
                  <p class="text-gray-600">Works perfectly on all devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>
    `})},o={render:()=>({components:{BrowserMockup:t},template:`
      <BrowserMockup url="https://admin.myapp.com/dashboard">
        <div class="flex h-96">
          <!-- Sidebar -->
          <div class="w-64 bg-gray-900 text-white">
            <div class="p-6">
              <h2 class="text-xl font-bold">Admin Panel</h2>
            </div>
            <nav class="mt-6">
              <a href="#" class="block px-6 py-3 bg-blue-600 text-white">Dashboard</a>
              <a href="#" class="block px-6 py-3 hover:bg-gray-800">Users</a>
              <a href="#" class="block px-6 py-3 hover:bg-gray-800">Analytics</a>
              <a href="#" class="block px-6 py-3 hover:bg-gray-800">Settings</a>
            </nav>
          </div>
          
          <!-- Main Content -->
          <div class="flex-1 bg-gray-50">
            <div class="p-6">
              <h1 class="text-2xl font-bold mb-6">Dashboard Overview</h1>
              
              <!-- Stats Grid -->
              <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div class="bg-white p-4 rounded-lg shadow">
                  <div class="text-sm text-gray-600">Total Users</div>
                  <div class="text-2xl font-bold text-blue-600">12,345</div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                  <div class="text-sm text-gray-600">Revenue</div>
                  <div class="text-2xl font-bold text-green-600">$89,432</div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                  <div class="text-sm text-gray-600">Orders</div>
                  <div class="text-2xl font-bold text-orange-600">1,234</div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                  <div class="text-sm text-gray-600">Growth</div>
                  <div class="text-2xl font-bold text-purple-600">+24%</div>
                </div>
              </div>
              
              <!-- Chart Area -->
              <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-lg font-semibold mb-4">Analytics Chart</h3>
                <div class="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded flex items-center justify-center">
                  <span class="text-gray-500">Chart visualization would go here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>
    `})},l={render:()=>({components:{BrowserMockup:t},template:`
      <BrowserMockup url="https://shop.example.com/products/laptop">
        <div class="bg-white min-h-96">
          <!-- Header -->
          <header class="border-b">
            <div class="flex items-center justify-between px-6 py-4">
              <div class="flex items-center space-x-8">
                <div class="text-2xl font-bold">🛍️ ShopZone</div>
                <nav class="hidden md:flex space-x-6">
                  <a href="#" class="text-gray-600">Electronics</a>
                  <a href="#" class="text-gray-600">Clothing</a>
                  <a href="#" class="text-gray-600">Home</a>
                  <a href="#" class="text-gray-600">Sports</a>
                </nav>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-gray-600">🔍</span>
                <span class="text-gray-600">❤️</span>
                <span class="text-gray-600">🛒 (3)</span>
              </div>
            </div>
          </header>
          
          <!-- Product Section -->
          <div class="flex flex-col md:flex-row p-6 gap-8">
            <!-- Product Image -->
            <div class="md:w-1/2">
              <div class="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span class="text-gray-500 text-lg">💻 Product Image</span>
              </div>
            </div>
            
            <!-- Product Info -->
            <div class="md:w-1/2">
              <h1 class="text-3xl font-bold mb-4">MacBook Pro 16"</h1>
              <div class="text-2xl font-bold text-blue-600 mb-4">$2,399.00</div>
              
              <div class="mb-6">
                <div class="flex items-center mb-2">
                  <span class="text-yellow-400">★★★★★</span>
                  <span class="ml-2 text-gray-600">(128 reviews)</span>
                </div>
                <p class="text-gray-600">
                  Powerful laptop with M2 chip, 16GB RAM, and 512GB SSD. Perfect for professional work and creative tasks.
                </p>
              </div>
              
              <div class="mb-6">
                <label class="block text-sm font-medium mb-2">Configuration</label>
                <select class="w-full p-2 border rounded-md">
                  <option>16GB RAM / 512GB SSD</option>
                  <option>32GB RAM / 1TB SSD</option>
                </select>
              </div>
              
              <div class="flex gap-4">
                <button class="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                  Add to Cart
                </button>
                <button class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  ❤️
                </button>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    url: 'https://example.com'
  },
  render: args => ({
    components: {
      BrowserMockup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <BrowserMockup v-bind="args">
        <div class="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-96 flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
            <p class="text-xl text-gray-600 mb-8">This is a sample webpage content inside a browser mockup</p>
            <button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </BrowserMockup>
    \`
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BrowserMockup
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <BrowserMockup url="https://example.com">
            <div class="bg-base-200 p-8 text-center">
              <h2 class="text-2xl font-bold">Default Browser</h2>
              <p>Clean and simple browser mockup</p>
            </div>
          </BrowserMockup>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Border</h3>
          <BrowserMockup url="https://example.com" variant="border">
            <div class="bg-base-200 p-8 text-center">
              <h2 class="text-2xl font-bold">Bordered Browser</h2>
              <p>Browser mockup with border styling</p>
            </div>
          </BrowserMockup>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Background</h3>
          <BrowserMockup url="https://example.com" variant="bg">
            <div class="bg-base-200 p-8 text-center">
              <h2 class="text-2xl font-bold">Background Browser</h2>
              <p>Browser mockup with background styling</p>
            </div>
          </BrowserMockup>
        </div>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BrowserMockup
    },
    template: \`
      <BrowserMockup url="https://my-awesome-app.com">
        <div class="min-h-96">
          <!-- Navigation -->
          <nav class="bg-white shadow-sm border-b px-6 py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-8">
                <div class="text-xl font-bold text-blue-600">MyApp</div>
                <div class="hidden md:flex space-x-6">
                  <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
                  <a href="#" class="text-gray-600 hover:text-gray-900">Features</a>
                  <a href="#" class="text-gray-600 hover:text-gray-900">Pricing</a>
                  <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <a href="#" class="text-gray-600 hover:text-gray-900">Sign In</a>
                <a href="#" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</a>
              </div>
            </div>
          </nav>
          
          <!-- Hero Section -->
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
            <div class="max-w-4xl mx-auto px-6 text-center">
              <h1 class="text-4xl md:text-6xl font-bold mb-6">
                Build Amazing Apps
              </h1>
              <p class="text-xl mb-8 opacity-90">
                The fastest way to create modern web applications with our powerful framework
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                  Get Started Free
                </button>
                <button class="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
                  View Demo
                </button>
              </div>
            </div>
          </div>
          
          <!-- Features Section -->
          <div class="py-16 px-6">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl font-bold text-center mb-12">Why Choose MyApp?</h2>
              <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center">
                  <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">⚡</span>
                  </div>
                  <h3 class="text-xl font-semibold mb-2">Lightning Fast</h3>
                  <p class="text-gray-600">Optimized for speed and performance</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">🔒</span>
                  </div>
                  <h3 class="text-xl font-semibold mb-2">Secure</h3>
                  <p class="text-gray-600">Enterprise-grade security built-in</p>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-2xl">📱</span>
                  </div>
                  <h3 class="text-xl font-semibold mb-2">Responsive</h3>
                  <p class="text-gray-600">Works perfectly on all devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>
    \`
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BrowserMockup
    },
    template: \`
      <BrowserMockup url="https://admin.myapp.com/dashboard">
        <div class="flex h-96">
          <!-- Sidebar -->
          <div class="w-64 bg-gray-900 text-white">
            <div class="p-6">
              <h2 class="text-xl font-bold">Admin Panel</h2>
            </div>
            <nav class="mt-6">
              <a href="#" class="block px-6 py-3 bg-blue-600 text-white">Dashboard</a>
              <a href="#" class="block px-6 py-3 hover:bg-gray-800">Users</a>
              <a href="#" class="block px-6 py-3 hover:bg-gray-800">Analytics</a>
              <a href="#" class="block px-6 py-3 hover:bg-gray-800">Settings</a>
            </nav>
          </div>
          
          <!-- Main Content -->
          <div class="flex-1 bg-gray-50">
            <div class="p-6">
              <h1 class="text-2xl font-bold mb-6">Dashboard Overview</h1>
              
              <!-- Stats Grid -->
              <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div class="bg-white p-4 rounded-lg shadow">
                  <div class="text-sm text-gray-600">Total Users</div>
                  <div class="text-2xl font-bold text-blue-600">12,345</div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                  <div class="text-sm text-gray-600">Revenue</div>
                  <div class="text-2xl font-bold text-green-600">$89,432</div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                  <div class="text-sm text-gray-600">Orders</div>
                  <div class="text-2xl font-bold text-orange-600">1,234</div>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                  <div class="text-sm text-gray-600">Growth</div>
                  <div class="text-2xl font-bold text-purple-600">+24%</div>
                </div>
              </div>
              
              <!-- Chart Area -->
              <div class="bg-white p-6 rounded-lg shadow">
                <h3 class="text-lg font-semibold mb-4">Analytics Chart</h3>
                <div class="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded flex items-center justify-center">
                  <span class="text-gray-500">Chart visualization would go here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>
    \`
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BrowserMockup
    },
    template: \`
      <BrowserMockup url="https://shop.example.com/products/laptop">
        <div class="bg-white min-h-96">
          <!-- Header -->
          <header class="border-b">
            <div class="flex items-center justify-between px-6 py-4">
              <div class="flex items-center space-x-8">
                <div class="text-2xl font-bold">🛍️ ShopZone</div>
                <nav class="hidden md:flex space-x-6">
                  <a href="#" class="text-gray-600">Electronics</a>
                  <a href="#" class="text-gray-600">Clothing</a>
                  <a href="#" class="text-gray-600">Home</a>
                  <a href="#" class="text-gray-600">Sports</a>
                </nav>
              </div>
              <div class="flex items-center space-x-4">
                <span class="text-gray-600">🔍</span>
                <span class="text-gray-600">❤️</span>
                <span class="text-gray-600">🛒 (3)</span>
              </div>
            </div>
          </header>
          
          <!-- Product Section -->
          <div class="flex flex-col md:flex-row p-6 gap-8">
            <!-- Product Image -->
            <div class="md:w-1/2">
              <div class="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <span class="text-gray-500 text-lg">💻 Product Image</span>
              </div>
            </div>
            
            <!-- Product Info -->
            <div class="md:w-1/2">
              <h1 class="text-3xl font-bold mb-4">MacBook Pro 16"</h1>
              <div class="text-2xl font-bold text-blue-600 mb-4">$2,399.00</div>
              
              <div class="mb-6">
                <div class="flex items-center mb-2">
                  <span class="text-yellow-400">★★★★★</span>
                  <span class="ml-2 text-gray-600">(128 reviews)</span>
                </div>
                <p class="text-gray-600">
                  Powerful laptop with M2 chip, 16GB RAM, and 512GB SSD. Perfect for professional work and creative tasks.
                </p>
              </div>
              
              <div class="mb-6">
                <label class="block text-sm font-medium mb-2">Configuration</label>
                <select class="w-full p-2 border rounded-md">
                  <option>16GB RAM / 512GB SSD</option>
                  <option>32GB RAM / 1TB SSD</option>
                </select>
              </div>
              
              <div class="flex gap-4">
                <button class="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                  Add to Cart
                </button>
                <button class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  ❤️
                </button>
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>
    \`
  })
}`,...l.parameters?.docs?.source}}};const j=["Default","Variants","WebsiteShowcase","Dashboard","EcommerceSite"];export{o as Dashboard,a as Default,l as EcommerceSite,n as Variants,r as WebsiteShowcase,j as __namedExportsOrder,A as default};
