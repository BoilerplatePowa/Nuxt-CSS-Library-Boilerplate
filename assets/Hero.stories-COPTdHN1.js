import{d as $,c as s,a as l,l as n,b as d,x as H,n as a,e as c,o as i,t as u}from"./iframe-B8bctOEb.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const U=["aria-label"],E=["src","poster"],G={class:"badge badge-primary badge-lg"},Y={key:0},k=$({__name:"Hero",props:{title:{},subtitle:{},description:{},badge:{},backgroundImage:{},videoSrc:{},videoPoster:{},minHeight:{default:"lg"},maxWidth:{default:"md"},alignment:{default:"center"},verticalAlignment:{default:"center"},overlay:{type:Boolean,default:!1},overlayOpacity:{default:"medium"},overlayColor:{default:"black"},textColor:{default:"default"},parallax:{type:Boolean,default:!1},showScrollIndicator:{type:Boolean,default:!1},responsive:{type:Boolean,default:!0},fullWidth:{type:Boolean,default:!1},ariaLabel:{}},setup(r){const t=r,S=()=>{const e=document.querySelector("section:nth-of-type(2)");e?e.scrollIntoView({behavior:"smooth"}):window.scrollBy({top:window.innerHeight,behavior:"smooth"})},C=s(()=>{const e=["hero","relative","overflow-hidden"];return t.minHeight==="sm"?e.push("min-h-[32rem]"):t.minHeight==="md"?e.push("min-h-[40rem]"):t.minHeight==="lg"?e.push("min-h-[48rem]"):t.minHeight==="xl"?e.push("min-h-[56rem]"):t.minHeight==="screen"?e.push("min-h-screen"):t.minHeight==="auto"&&e.push("min-h-fit"),!t.backgroundImage&&!t.videoSrc&&e.push("bg-gradient-to-br","from-base-200","to-base-300"),t.fullWidth&&e.push("w-full"),e.join(" ")}),j=s(()=>{if(!t.overlay)return"";const e=["hero-overlay","absolute","inset-0","z-10"];return t.overlayColor==="black"?e.push("bg-black"):t.overlayColor==="primary"?e.push("bg-primary"):t.overlayColor==="secondary"?e.push("bg-secondary"):t.overlayColor==="accent"&&e.push("bg-accent"),t.overlayOpacity==="light"?e.push("bg-opacity-30"):t.overlayOpacity==="medium"?e.push("bg-opacity-50"):t.overlayOpacity==="dark"&&e.push("bg-opacity-70"),e.join(" ")}),A=s(()=>["absolute","inset-0","z-0","bg-cover","bg-center","bg-fixed"]),q=s(()=>t.parallax&&t.backgroundImage?`background-image: url(${t.backgroundImage});`:{}),W=s(()=>["absolute","inset-0","w-full","h-full","object-cover","z-0"]),B=s(()=>t.backgroundImage&&!t.parallax?`background-image: url(${t.backgroundImage}); background-size: cover; background-position: center center;`:{}),I=s(()=>{const e=["hero-content","relative","z-20","w-full"];return t.alignment==="left"?e.push("text-left","justify-start"):t.alignment==="right"?e.push("text-right","justify-end"):e.push("text-center","justify-center"),t.verticalAlignment==="top"?e.push("items-start"):t.verticalAlignment==="bottom"?e.push("items-end"):e.push("items-center"),t.textColor==="neutral"?e.push("text-neutral-content"):t.textColor==="primary"?e.push("text-primary-content"):t.textColor==="white"?e.push("text-white"):t.textColor==="contrast"&&e.push("text-base-content"),e.join(" ")}),T=s(()=>{const e=["w-full"];return t.maxWidth==="sm"?e.push("max-w-sm"):t.maxWidth==="md"?e.push("max-w-md"):t.maxWidth==="lg"?e.push("max-w-lg"):t.maxWidth==="xl"?e.push("max-w-xl"):t.maxWidth==="2xl"?e.push("max-w-2xl"):t.maxWidth==="full"&&e.push("max-w-full"),t.alignment==="center"&&e.push("mx-auto"),e.join(" ")}),V=s(()=>["space-y-6",t.responsive?"px-4":""]),L=s(()=>{const e=["mb-4","flex"];return t.alignment==="center"?e.push("justify-center"):t.alignment==="right"?e.push("justify-end"):e.push("justify-start"),e}),P=s(()=>{const e=["font-bold","leading-tight"];return t.responsive?e.push("text-3xl","sm:text-4xl","md:text-5xl","lg:text-6xl"):e.push("text-5xl"),e.join(" ")}),D=s(()=>{const e=["font-medium","opacity-90"];return t.responsive?e.push("text-lg","sm:text-xl","md:text-2xl"):e.push("text-xl"),e.join(" ")}),M=s(()=>{const e=["opacity-80","leading-relaxed"];return t.responsive?e.push("text-base","sm:text-lg"):e.push("text-lg"),e.join(" ")}),N=s(()=>{const e=["flex","flex-wrap","gap-4"];return t.alignment==="center"?e.push("justify-center"):t.alignment==="right"?e.push("justify-end"):e.push("justify-start"),t.responsive&&e.push("flex-col","sm:flex-row"),e.join(" ")}),z=s(()=>["absolute","bottom-8","left-1/2","transform","-translate-x-1/2","text-current","cursor-pointer","opacity-70","hover:opacity-100","transition-opacity","duration-200"]),O=s(()=>["absolute","bottom-0","left-0","right-0","z-20","p-6","bg-gradient-to-t","from-black/50","to-transparent"]);return(e,w)=>(i(),l("section",{class:a(C.value),style:H(B.value),"aria-label":e.ariaLabel||"Hero section",role:"banner"},[e.parallax&&e.backgroundImage?(i(),l("div",{key:0,class:a(A.value),style:H(q.value)},null,6)):n("",!0),e.overlay?(i(),l("div",{key:1,class:a(j.value)},null,2)):n("",!0),e.videoSrc?(i(),l("video",{key:2,class:a(W.value),src:e.videoSrc,poster:e.videoPoster,autoplay:"",muted:"",loop:"",playsinline:"","aria-hidden":!0},null,10,E)):n("",!0),d("div",{class:a(I.value)},[d("div",{class:a(T.value)},[c(e.$slots,"content",{},()=>[d("div",{class:a(V.value)},[e.badge||e.$slots.badge?(i(),l("div",{key:0,class:a(L.value)},[c(e.$slots,"badge",{},()=>[d("span",G,u(e.badge),1)],!0)],2)):n("",!0),e.title?(i(),l("h1",{key:1,class:a(P.value)},u(e.title),3)):n("",!0),e.subtitle?(i(),l("p",{key:2,class:a(D.value)},u(e.subtitle),3)):n("",!0),e.description||e.$slots.description?(i(),l("div",{key:3,class:a(M.value)},[c(e.$slots,"description",{},()=>[e.description?(i(),l("p",Y,u(e.description),1)):n("",!0)],!0)],2)):n("",!0),e.$slots.actions?(i(),l("div",{key:4,class:a(N.value)},[c(e.$slots,"actions",{},void 0,!0)],2)):n("",!0),e.showScrollIndicator?(i(),l("div",{key:5,class:a(z.value),onClick:S},w[0]||(w[0]=[d("svg",{class:"w-6 h-6 animate-bounce",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 14l-7 7m0 0l-7-7m7 7V3"})],-1)]),2)):n("",!0)],2)],!0)],2)],2),e.$slots.footer?(i(),l("div",{key:3,class:a(O.value)},[c(e.$slots,"footer",{},void 0,!0)],2)):n("",!0)],14,U))}}),o=F(k,[["__scopeId","data-v-1615390b"]]);k.__docgenInfo={exportName:"default",displayName:"Hero",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"subtitle",required:!1,type:{name:"string"}},{name:"description",required:!1,type:{name:"string"}},{name:"badge",required:!1,type:{name:"string"}},{name:"backgroundImage",required:!1,type:{name:"string"}},{name:"videoSrc",required:!1,type:{name:"string"}},{name:"videoPoster",required:!1,type:{name:"string"}},{name:"minHeight",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"screen"'},{name:'"auto"'}]},defaultValue:{func:!1,value:"'lg'"}},{name:"maxWidth",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"2xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"alignment",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"center"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'center'"}},{name:"verticalAlignment",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"center"'},{name:'"bottom"'}]},defaultValue:{func:!1,value:"'center'"}},{name:"overlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"overlayOpacity",required:!1,type:{name:"union",elements:[{name:'"light"'},{name:'"medium"'},{name:'"dark"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"overlayColor",required:!1,type:{name:"union",elements:[{name:'"black"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'}]},defaultValue:{func:!1,value:"'black'"}},{name:"textColor",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"neutral"'},{name:'"primary"'},{name:'"white"'},{name:'"contrast"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"parallax",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showScrollIndicator",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"responsive",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"fullWidth",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",required:!1,type:{name:"string"}}],slots:[{name:"content"},{name:"badge"},{name:"description"},{name:"actions"},{name:"footer"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Layout/Hero.vue"]};const Q={title:"Layout/Hero",component:o,parameters:{layout:"fullscreen",docs:{description:{component:"Hero section component for creating impactful landing page headers with customizable layouts."}}},argTypes:{title:{control:"text",description:"Main hero title"},subtitle:{control:"text",description:"Hero subtitle or description"},backgroundImage:{control:"text",description:"Background image URL"},overlay:{control:"boolean",description:"Add dark overlay for better text readability"},minHeight:{control:{type:"select"},options:["sm","md","lg","xl","screen"],description:"Hero section height"},overlayOpacity:{control:{type:"select"},options:["light","medium","dark"],description:"Overlay opacity level"},textColor:{control:{type:"select"},options:["default","neutral","primary","white"],description:"Text color theme"}},tags:["autodocs"]},m={args:{title:"Welcome to Our Platform",subtitle:"Discover amazing features and build something great",minHeight:"lg"}},p={args:{title:"Adventure Awaits",subtitle:"Explore the world with our comprehensive travel guides and booking platform",backgroundImage:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",overlay:!0,minHeight:"xl"}},v={args:{title:"Build the Future",subtitle:"Join thousands of developers creating amazing applications",minHeight:"lg"}},g={render:r=>({components:{Hero:o},setup(){return{args:r}},template:`
      <Hero v-bind="args">
        <template #actions>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn btn-primary btn-lg">Get Started</button>
            <button class="btn btn-outline btn-lg">Learn More</button>
          </div>
        </template>
      </Hero>
    `}),args:{title:"Ready to Transform Your Business?",subtitle:"Our platform helps you streamline operations and boost productivity",minHeight:"lg"}},b={render:r=>({components:{Hero:o},setup(){return{args:r}},template:`
      <Hero v-bind="args">
        <template #actions>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn btn-primary btn-lg">Start Free Trial</button>
            <button class="btn btn-ghost btn-lg">Watch Demo</button>
          </div>
        </template>
      </Hero>
    `}),args:{title:"Powerful Analytics for Modern Teams",subtitle:"Make data-driven decisions with our comprehensive analytics platform. Track performance, understand your users, and grow your business.",minHeight:"lg"}},f={render:r=>({components:{Hero:o},setup(){return{args:r}},template:`
      <Hero v-bind="args">
        <template #actions>
          <div class="flex items-center gap-6">
            <button class="btn btn-primary">Sign Up</button>
            <a href="#" class="link">Already have an account?</a>
          </div>
        </template>
      </Hero>
    `}),args:{title:"Simple. Powerful. Effective.",subtitle:"The easiest way to manage your projects",minHeight:"md"}},h={render:r=>({components:{Hero:o},setup(){return{args:r}},template:`
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
    `}),args:{title:"NextGen Platform",subtitle:"The all-in-one solution for modern businesses",minHeight:"xl"}},x={render:r=>({components:{Hero:o},setup(){return{args:r}},template:`
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
    `}),args:{title:"Your Productivity Companion",subtitle:"Manage tasks, track time, and collaborate with your team from anywhere",minHeight:"xl"}},y={render:r=>({components:{Hero:o},setup(){return{args:r}},template:`
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
    `}),args:{title:"Transform Your Workflow",subtitle:"Streamline processes, increase efficiency, and deliver better results with our comprehensive business solution.",minHeight:"lg"}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Welcome to Our Platform',
    subtitle: 'Discover amazing features and build something great',
    minHeight: 'lg'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Adventure Awaits',
    subtitle: 'Explore the world with our comprehensive travel guides and booking platform',
    backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    overlay: true,
    minHeight: 'xl'
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Build the Future',
    subtitle: 'Join thousands of developers creating amazing applications',
    minHeight: 'lg'
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const X=["Default","WithBackground","Gradient","WithActions","LeftAligned","Minimal","ProductLaunch","AppShowcase","SplitLayout"];export{x as AppShowcase,m as Default,v as Gradient,b as LeftAligned,f as Minimal,h as ProductLaunch,y as SplitLayout,g as WithActions,p as WithBackground,X as __namedExportsOrder,Q as default};
