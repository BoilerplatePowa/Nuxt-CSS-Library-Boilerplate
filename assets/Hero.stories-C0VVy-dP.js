import{d as A,c as b,a as r,m as l,b as f,n as x,e as h,G as C,o as i,t as y}from"./iframe-DxBZQA7Y.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const T={class:"max-w-md"},_={key:0,class:"text-5xl font-bold"},N={key:1,class:"py-6"},B={key:2,class:"flex flex-wrap gap-4 justify-center"},w=A({__name:"Hero",props:{title:{},subtitle:{},backgroundImage:{},minHeight:{default:"lg"},overlay:{type:Boolean,default:!1},overlayOpacity:{default:"medium"},textColor:{default:"default"}},setup(s){C(e=>({"62f9f7d2":t.backgroundImage?`url(${t.backgroundImage})`:"none"}));const t=s,H=b(()=>{const e=["hero"];return t.minHeight==="sm"?e.push("min-h-96"):t.minHeight==="md"?e.push("min-h-[32rem]"):t.minHeight==="lg"?e.push("min-h-[40rem]"):t.minHeight==="xl"?e.push("min-h-[48rem]"):t.minHeight==="screen"&&e.push("min-h-screen"),t.backgroundImage?e.push("hero-content"):e.push("bg-base-200"),e.join(" ")}),k=b(()=>{if(!t.overlay)return"";const e=["bg-opacity-60"];return t.overlayOpacity==="light"?e.push("bg-black","bg-opacity-30"):t.overlayOpacity==="medium"?e.push("bg-black","bg-opacity-60"):t.overlayOpacity==="dark"&&e.push("bg-black","bg-opacity-80"),e.join(" ")}),S=b(()=>{const e=[];return t.textColor==="neutral"?e.push("text-neutral-content"):t.textColor==="primary"?e.push("text-primary-content"):t.textColor==="white"&&e.push("text-white"),e.join(" ")});return(e,D)=>(i(),r("div",{class:x(H.value)},[e.backgroundImage?(i(),r("div",{key:0,class:x(["hero-overlay",k.value])},null,2)):l("",!0),f("div",{class:x(["hero-content text-center",S.value])},[f("div",T,[h(e.$slots,"content",{},()=>[e.title?(i(),r("h1",_,y(e.title),1)):l("",!0),e.subtitle?(i(),r("p",N,y(e.subtitle),1)):l("",!0),e.$slots.actions?(i(),r("div",B,[h(e.$slots,"actions",{},void 0,!0)])):l("",!0)],!0)])],2)],2))}}),a=j(w,[["__scopeId","data-v-4c837d98"]]);w.__docgenInfo={exportName:"default",displayName:"Hero",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"subtitle",required:!1,type:{name:"string"}},{name:"backgroundImage",required:!1,type:{name:"string"}},{name:"minHeight",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"screen"'}]},defaultValue:{func:!1,value:"'lg'"}},{name:"overlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"overlayOpacity",required:!1,type:{name:"union",elements:[{name:'"light"'},{name:'"medium"'},{name:'"dark"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"textColor",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"neutral"'},{name:'"primary"'},{name:'"white"'}]},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"content"},{name:"actions"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Layout/Hero.vue"]};const P={title:"Layout/Hero",component:a,parameters:{layout:"fullscreen",docs:{description:{component:"Hero section component for creating impactful landing page headers with customizable layouts."}}},argTypes:{title:{control:"text",description:"Main hero title"},subtitle:{control:"text",description:"Hero subtitle or description"},backgroundImage:{control:"text",description:"Background image URL"},overlay:{control:"boolean",description:"Add dark overlay for better text readability"},minHeight:{control:{type:"select"},options:["sm","md","lg","xl","screen"],description:"Hero section height"},overlayOpacity:{control:{type:"select"},options:["light","medium","dark"],description:"Overlay opacity level"},textColor:{control:{type:"select"},options:["default","neutral","primary","white"],description:"Text color theme"}},tags:["autodocs"]},n={args:{title:"Welcome to Our Platform",subtitle:"Discover amazing features and build something great",minHeight:"lg"}},o={args:{title:"Adventure Awaits",subtitle:"Explore the world with our comprehensive travel guides and booking platform",backgroundImage:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",overlay:!0,minHeight:"xl"}},d={args:{title:"Build the Future",subtitle:"Join thousands of developers creating amazing applications",minHeight:"lg"}},c={render:s=>({components:{Hero:a},setup(){return{args:s}},template:`
      <Hero v-bind="args">
        <template #actions>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn btn-primary btn-lg">Get Started</button>
            <button class="btn btn-outline btn-lg">Learn More</button>
          </div>
        </template>
      </Hero>
    `}),args:{title:"Ready to Transform Your Business?",subtitle:"Our platform helps you streamline operations and boost productivity",minHeight:"lg"}},m={render:s=>({components:{Hero:a},setup(){return{args:s}},template:`
      <Hero v-bind="args">
        <template #actions>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn btn-primary btn-lg">Start Free Trial</button>
            <button class="btn btn-ghost btn-lg">Watch Demo</button>
          </div>
        </template>
      </Hero>
    `}),args:{title:"Powerful Analytics for Modern Teams",subtitle:"Make data-driven decisions with our comprehensive analytics platform. Track performance, understand your users, and grow your business.",minHeight:"lg"}},u={render:s=>({components:{Hero:a},setup(){return{args:s}},template:`
      <Hero v-bind="args">
        <template #actions>
          <div class="flex items-center gap-6">
            <button class="btn btn-primary">Sign Up</button>
            <a href="#" class="link">Already have an account?</a>
          </div>
        </template>
      </Hero>
    `}),args:{title:"Simple. Powerful. Effective.",subtitle:"The easiest way to manage your projects",minHeight:"md"}},p={render:s=>({components:{Hero:a},setup(){return{args:s}},template:`
      <Hero v-bind="args">
        <template #content>
          <div class="text-center max-w-4xl mx-auto">
            <div class="badge badge-primary badge-lg mb-6">🚀 Now Available</div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {{ args.title }}
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-base-content/80">
              {{ args.subtitle }}
            </p>
            
            <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div class="stat text-center">
                <div class="stat-value text-primary">10K+</div>
                <div class="stat-desc">Active Users</div>
              </div>
              <div class="stat text-center">
                <div class="stat-value text-secondary">99.9%</div>
                <div class="stat-desc">Uptime</div>
              </div>
              <div class="stat text-center">
                <div class="stat-value text-accent">24/7</div>
                <div class="stat-desc">Support</div>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn btn-primary btn-lg">
                Try Free for 30 Days
              </button>
              <button class="btn btn-outline btn-lg">
                Schedule Demo
              </button>
            </div>
            
            <div class="mt-8 text-sm text-base-content/60">
              No credit card required • Cancel anytime
            </div>
          </div>
        </template>
      </Hero>
    `}),args:{title:"NextGen Platform",subtitle:"The all-in-one solution for modern businesses",minHeight:"xl"}},v={render:s=>({components:{Hero:a},setup(){return{args:s}},template:`
      <Hero v-bind="args">
        <template #content>
          <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div class="text-left">
              <h1 class="text-4xl md:text-6xl font-bold mb-6">
                {{ args.title }}
              </h1>
              <p class="text-lg md:text-xl mb-8 text-base-content/80">
                {{ args.subtitle }}
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 mb-8">
                <button class="btn btn-primary btn-lg">
                  Download App
                </button>
                <button class="btn btn-outline btn-lg">
                  View Features
                </button>
              </div>
              
              <div class="flex items-center gap-6">
                <div class="rating rating-sm">
                  <span class="text-yellow-500">★★★★★</span>
                </div>
                <span class="text-sm">4.9/5 from 2,000+ reviews</span>
              </div>
            </div>
            
            <div class="relative">
              <div class="mockup-phone">
                <div class="camera"></div>
                <div class="display">
                  <div class="artboard artboard-demo phone-1 bg-gradient-to-br from-primary to-secondary">
                    <div class="text-center text-white p-8">
                      <h3 class="text-2xl font-bold mb-4">Mobile App</h3>
                      <div class="space-y-4">
                        <div class="progress progress-secondary w-full"></div>
                        <div class="grid grid-cols-2 gap-4">
                          <div class="card bg-white/20 p-4">
                            <div class="text-2xl">📊</div>
                          </div>
                          <div class="card bg-white/20 p-4">
                            <div class="text-2xl">📈</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Hero>
    `}),args:{title:"Your Productivity Companion",subtitle:"Manage tasks, track time, and collaborate with your team from anywhere",minHeight:"xl"}},g={render:s=>({components:{Hero:a},setup(){return{args:s}},template:`
      <Hero v-bind="args">
        <template #content>
          <div class="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
            <div class="order-2 lg:order-1">
              <h1 class="text-4xl md:text-5xl font-bold mb-6">
                {{ args.title }}
              </h1>
              <p class="text-lg mb-8 text-base-content/80">
                {{ args.subtitle }}
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <span>Real-time collaboration</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <span>Advanced security</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <span>24/7 customer support</span>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="btn btn-primary btn-lg">Start Now</button>
                <button class="btn btn-ghost btn-lg">Contact Sales</button>
              </div>
            </div>
            
            <div class="order-1 lg:order-2">
              <div class="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl">
                <div class="space-y-6">
                  <div class="flex items-center gap-4">
                    <div class="avatar">
                      <div class="w-12 rounded-full bg-white/20"></div>
                    </div>
                    <div class="flex-1">
                      <div class="h-4 bg-white/30 rounded mb-2"></div>
                      <div class="h-3 bg-white/20 rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div class="bg-white/20 p-4 rounded-lg">
                      <div class="h-8 bg-white/30 rounded mb-2"></div>
                      <div class="h-3 bg-white/20 rounded"></div>
                    </div>
                    <div class="bg-white/20 p-4 rounded-lg">
                      <div class="h-8 bg-white/30 rounded mb-2"></div>
                      <div class="h-3 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  
                  <div class="bg-white/20 p-4 rounded-lg">
                    <div class="flex justify-between items-center mb-4">
                      <div class="h-4 bg-white/30 rounded w-1/3"></div>
                      <div class="h-4 bg-white/30 rounded w-1/4"></div>
                    </div>
                    <div class="progress progress-secondary"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Hero>
    `}),args:{title:"Transform Your Workflow",subtitle:"Streamline processes, increase efficiency, and deliver better results with our comprehensive business solution.",minHeight:"lg"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Welcome to Our Platform',
    subtitle: 'Discover amazing features and build something great',
    minHeight: 'lg'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Adventure Awaits',
    subtitle: 'Explore the world with our comprehensive travel guides and booking platform',
    backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    overlay: true,
    minHeight: 'xl'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Build the Future',
    subtitle: 'Join thousands of developers creating amazing applications',
    minHeight: 'lg'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Hero
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Hero v-bind="args">
        <template #actions>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn btn-primary btn-lg">Get Started</button>
            <button class="btn btn-outline btn-lg">Learn More</button>
          </div>
        </template>
      </Hero>
    \`
  }),
  args: {
    title: 'Ready to Transform Your Business?',
    subtitle: 'Our platform helps you streamline operations and boost productivity',
    minHeight: 'lg'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Hero
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Hero v-bind="args">
        <template #actions>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn btn-primary btn-lg">Start Free Trial</button>
            <button class="btn btn-ghost btn-lg">Watch Demo</button>
          </div>
        </template>
      </Hero>
    \`
  }),
  args: {
    title: 'Powerful Analytics for Modern Teams',
    subtitle: 'Make data-driven decisions with our comprehensive analytics platform. Track performance, understand your users, and grow your business.',
    minHeight: 'lg'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Hero
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Hero v-bind="args">
        <template #actions>
          <div class="flex items-center gap-6">
            <button class="btn btn-primary">Sign Up</button>
            <a href="#" class="link">Already have an account?</a>
          </div>
        </template>
      </Hero>
    \`
  }),
  args: {
    title: 'Simple. Powerful. Effective.',
    subtitle: 'The easiest way to manage your projects',
    minHeight: 'md'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Hero
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Hero v-bind="args">
        <template #content>
          <div class="text-center max-w-4xl mx-auto">
            <div class="badge badge-primary badge-lg mb-6">🚀 Now Available</div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {{ args.title }}
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-base-content/80">
              {{ args.subtitle }}
            </p>
            
            <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div class="stat text-center">
                <div class="stat-value text-primary">10K+</div>
                <div class="stat-desc">Active Users</div>
              </div>
              <div class="stat text-center">
                <div class="stat-value text-secondary">99.9%</div>
                <div class="stat-desc">Uptime</div>
              </div>
              <div class="stat text-center">
                <div class="stat-value text-accent">24/7</div>
                <div class="stat-desc">Support</div>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn btn-primary btn-lg">
                Try Free for 30 Days
              </button>
              <button class="btn btn-outline btn-lg">
                Schedule Demo
              </button>
            </div>
            
            <div class="mt-8 text-sm text-base-content/60">
              No credit card required • Cancel anytime
            </div>
          </div>
        </template>
      </Hero>
    \`
  }),
  args: {
    title: 'NextGen Platform',
    subtitle: 'The all-in-one solution for modern businesses',
    minHeight: 'xl'
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Hero
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Hero v-bind="args">
        <template #content>
          <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div class="text-left">
              <h1 class="text-4xl md:text-6xl font-bold mb-6">
                {{ args.title }}
              </h1>
              <p class="text-lg md:text-xl mb-8 text-base-content/80">
                {{ args.subtitle }}
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 mb-8">
                <button class="btn btn-primary btn-lg">
                  Download App
                </button>
                <button class="btn btn-outline btn-lg">
                  View Features
                </button>
              </div>
              
              <div class="flex items-center gap-6">
                <div class="rating rating-sm">
                  <span class="text-yellow-500">★★★★★</span>
                </div>
                <span class="text-sm">4.9/5 from 2,000+ reviews</span>
              </div>
            </div>
            
            <div class="relative">
              <div class="mockup-phone">
                <div class="camera"></div>
                <div class="display">
                  <div class="artboard artboard-demo phone-1 bg-gradient-to-br from-primary to-secondary">
                    <div class="text-center text-white p-8">
                      <h3 class="text-2xl font-bold mb-4">Mobile App</h3>
                      <div class="space-y-4">
                        <div class="progress progress-secondary w-full"></div>
                        <div class="grid grid-cols-2 gap-4">
                          <div class="card bg-white/20 p-4">
                            <div class="text-2xl">📊</div>
                          </div>
                          <div class="card bg-white/20 p-4">
                            <div class="text-2xl">📈</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Hero>
    \`
  }),
  args: {
    title: 'Your Productivity Companion',
    subtitle: 'Manage tasks, track time, and collaborate with your team from anywhere',
    minHeight: 'xl'
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Hero
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Hero v-bind="args">
        <template #content>
          <div class="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
            <div class="order-2 lg:order-1">
              <h1 class="text-4xl md:text-5xl font-bold mb-6">
                {{ args.title }}
              </h1>
              <p class="text-lg mb-8 text-base-content/80">
                {{ args.subtitle }}
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <span>Real-time collaboration</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <span>Advanced security</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <span>24/7 customer support</span>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="btn btn-primary btn-lg">Start Now</button>
                <button class="btn btn-ghost btn-lg">Contact Sales</button>
              </div>
            </div>
            
            <div class="order-1 lg:order-2">
              <div class="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl">
                <div class="space-y-6">
                  <div class="flex items-center gap-4">
                    <div class="avatar">
                      <div class="w-12 rounded-full bg-white/20"></div>
                    </div>
                    <div class="flex-1">
                      <div class="h-4 bg-white/30 rounded mb-2"></div>
                      <div class="h-3 bg-white/20 rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div class="bg-white/20 p-4 rounded-lg">
                      <div class="h-8 bg-white/30 rounded mb-2"></div>
                      <div class="h-3 bg-white/20 rounded"></div>
                    </div>
                    <div class="bg-white/20 p-4 rounded-lg">
                      <div class="h-8 bg-white/30 rounded mb-2"></div>
                      <div class="h-3 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  
                  <div class="bg-white/20 p-4 rounded-lg">
                    <div class="flex justify-between items-center mb-4">
                      <div class="h-4 bg-white/30 rounded w-1/3"></div>
                      <div class="h-4 bg-white/30 rounded w-1/4"></div>
                    </div>
                    <div class="progress progress-secondary"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Hero>
    \`
  }),
  args: {
    title: 'Transform Your Workflow',
    subtitle: 'Streamline processes, increase efficiency, and deliver better results with our comprehensive business solution.',
    minHeight: 'lg'
  }
}`,...g.parameters?.docs?.source}}};const I=["Default","WithBackground","Gradient","WithActions","LeftAligned","Minimal","ProductLaunch","AppShowcase","SplitLayout"];export{v as AppShowcase,n as Default,d as Gradient,m as LeftAligned,u as Minimal,p as ProductLaunch,g as SplitLayout,c as WithActions,o as WithBackground,I as __namedExportsOrder,P as default};
