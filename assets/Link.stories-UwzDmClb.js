import{d as f,c as L,i as g,n as b,x as y,o as x,k as w,e as p}from"./iframe-BrsdVXSx.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const v=f({__name:"Link",props:{href:{},to:{},target:{},rel:{},variant:{default:"default"},disabled:{type:Boolean,default:!1},external:{type:Boolean,default:!1},tag:{default:"a"},ariaLabel:{}},emits:["click"],setup(d,{emit:k}){const a=d,m=k,h=L(()=>{const n=["link"];return a.variant==="primary"?n.push("link-primary"):a.variant==="secondary"?n.push("link-secondary"):a.variant==="accent"?n.push("link-accent"):a.variant==="neutral"?n.push("link-neutral"):a.variant==="hover"&&n.push("link-hover"),a.disabled&&n.push("link-disabled","cursor-not-allowed","opacity-50"),n.join(" ")}),u=n=>{if(a.disabled){n.preventDefault();return}m("click",n)};return(n,S)=>(x(),g(y(n.tag),{class:b(h.value),href:n.href,to:n.to,target:n.target,rel:n.rel,"aria-label":n.ariaLabel,tabindex:n.disabled?-1:void 0,onClick:u},{default:w(()=>[p(n.$slots,"icon-left",{},void 0,!0),p(n.$slots,"default",{},void 0,!0),p(n.$slots,"icon-right",{},void 0,!0)]),_:3},8,["class","href","to","target","rel","aria-label","tabindex"]))}}),e=C(v,[["__scopeId","data-v-086dfe6b"]]);v.__docgenInfo={exportName:"default",displayName:"Link",description:"",tags:{},props:[{name:"href",required:!1,type:{name:"string"}},{name:"to",required:!1,type:{name:"union",elements:[{name:"string"},{name:"object"}]}},{name:"target",required:!1,type:{name:"union",elements:[{name:'"_blank"'},{name:'"_self"'},{name:'"_parent"'},{name:'"_top"'}]}},{name:"rel",required:!1,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"neutral"'},{name:'"hover"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"external",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tag",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'a'"}},{name:"ariaLabel",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["Event"]}}],slots:[{name:"icon-left"},{name:"default"},{name:"icon-right"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Navigation/Link.vue"]};const j={title:"Navigation/Link",component:e,parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["default","primary","secondary","accent","neutral","hover"]},target:{control:{type:"select"},options:["_blank","_self","_parent","_top"]},disabled:{control:{type:"boolean"}},external:{control:{type:"boolean"}}}},t={args:{href:"#"},render:d=>({components:{Link:e},setup(){return{args:d}},template:`
      <Link v-bind="args">
        Default Link
      </Link>
    `})},i={render:()=>({components:{Link:e},template:`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4 items-center">
          <Link href="#" variant="default">Default Link</Link>
          <Link href="#" variant="primary">Primary Link</Link>
          <Link href="#" variant="secondary">Secondary Link</Link>
          <Link href="#" variant="accent">Accent Link</Link>
          <Link href="#" variant="neutral">Neutral Link</Link>
          <Link href="#" variant="hover">Hover Link</Link>
        </div>
        
        <div class="text-sm opacity-70">
          Different link variants for various contexts
        </div>
      </div>
    `})},r={render:()=>({components:{Link:e},template:`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4 items-center">
          <Link href="#" variant="primary">
            <template #icon-left>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7 3-3 3 3" />
              </svg>
            </template>
            Inbox
          </Link>
          
          <Link href="#" variant="secondary">
            Settings
            <template #icon-right>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </template>
          </Link>
          
          <Link href="#" variant="accent">
            <template #icon-left>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </template>
            Favorites
            <template #icon-right>
              <span class="badge badge-sm">42</span>
            </template>
          </Link>
        </div>
      </div>
    `})},s={render:()=>({components:{Link:e},template:`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4 items-center">
          <Link href="https://github.com" external variant="primary">
            <template #icon-left>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </template>
            GitHub
          </Link>
          
          <Link href="https://twitter.com" external variant="accent">
            <template #icon-left>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </template>
            Twitter
          </Link>
          
          <Link href="https://docs.example.com" external variant="neutral">
            <template #icon-left>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </template>
            Documentation
            <template #icon-right>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </template>
          </Link>
        </div>
        
        <div class="text-sm opacity-70">
          External links automatically open in new tabs and include proper rel attributes
        </div>
      </div>
    `})},o={render:()=>({components:{Link:e},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold mb-4">Normal State</h3>
          <div class="flex gap-4">
            <Link href="#" variant="primary">Active Link</Link>
            <Link href="#" variant="secondary">Secondary Link</Link>
            <Link href="#" variant="accent">Accent Link</Link>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Disabled State</h3>
          <div class="flex gap-4">
            <Link href="#" variant="primary" disabled>Disabled Primary</Link>
            <Link href="#" variant="secondary" disabled>Disabled Secondary</Link>
            <Link href="#" variant="accent" disabled>Disabled Accent</Link>
          </div>
        </div>
        
        <div class="text-sm opacity-70">
          Disabled links are not clickable and have reduced opacity
        </div>
      </div>
    `})},l={render:()=>({components:{Link:e},template:`
      <div class="bg-base-200 p-6 rounded-lg">
        <h3 class="text-xl font-bold mb-6">Website Navigation</h3>
        
        <div class="space-y-6">
          <!-- Main Navigation -->
          <div>
            <h4 class="font-semibold mb-3">Main Menu</h4>
            <nav class="flex flex-wrap gap-6">
              <Link href="/" variant="primary">Home</Link>
              <Link href="/about" variant="hover">About</Link>
              <Link href="/products" variant="hover">Products</Link>
              <Link href="/services" variant="hover">Services</Link>
              <Link href="/contact" variant="hover">Contact</Link>
            </nav>
          </div>
          
          <!-- Breadcrumb Navigation -->
          <div>
            <h4 class="font-semibold mb-3">Breadcrumbs</h4>
            <nav class="flex items-center gap-2 text-sm">
              <Link href="/" variant="neutral">Home</Link>
              <span class="opacity-50">/</span>
              <Link href="/products" variant="neutral">Products</Link>
              <span class="opacity-50">/</span>
              <Link href="/products/electronics" variant="neutral">Electronics</Link>
              <span class="opacity-50">/</span>
              <span class="opacity-70">Current Page</span>
            </nav>
          </div>
          
          <!-- Footer Links -->
          <div>
            <h4 class="font-semibold mb-3">Footer Links</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h5 class="font-medium mb-2">Company</h5>
                <div class="space-y-1">
                  <Link href="/about" variant="neutral">About Us</Link>
                  <Link href="/careers" variant="neutral">Careers</Link>
                  <Link href="/press" variant="neutral">Press</Link>
                </div>
              </div>
              
              <div>
                <h5 class="font-medium mb-2">Support</h5>
                <div class="space-y-1">
                  <Link href="/help" variant="neutral">Help Center</Link>
                  <Link href="/contact" variant="neutral">Contact</Link>
                  <Link href="/status" variant="neutral">Status</Link>
                </div>
              </div>
              
              <div>
                <h5 class="font-medium mb-2">Legal</h5>
                <div class="space-y-1">
                  <Link href="/privacy" variant="neutral">Privacy</Link>
                  <Link href="/terms" variant="neutral">Terms</Link>
                  <Link href="/cookies" variant="neutral">Cookies</Link>
                </div>
              </div>
              
              <div>
                <h5 class="font-medium mb-2">Social</h5>
                <div class="space-y-1">
                  <Link href="https://twitter.com" external variant="neutral">Twitter</Link>
                  <Link href="https://github.com" external variant="neutral">GitHub</Link>
                  <Link href="https://linkedin.com" external variant="neutral">LinkedIn</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `})},c={render:()=>({components:{Link:e},template:`
      <div class="prose max-w-none">
        <h3>Article with Inline Links</h3>
        
        <p>
          This is a paragraph with several inline links. You can visit our
          <Link href="/homepage" variant="primary">homepage</Link> to learn more about our services.
          We also have a comprehensive <Link href="/docs" variant="secondary">documentation</Link>
          that covers all features in detail.
        </p>
        
        <p>
          For external resources, check out the
          <Link href="https://vuejs.org" external variant="accent">Vue.js documentation</Link>
          or explore <Link href="https://tailwindcss.com" external variant="neutral">Tailwind CSS</Link>
          for styling options. You can also find us on
          <Link href="https://github.com" external variant="hover">GitHub</Link>.
        </p>
        
        <p class="text-sm opacity-70">
          Note how inline links blend naturally with the text while maintaining clear visual hierarchy.
        </p>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#'
  },
  render: args => ({
    components: {
      Link
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Link v-bind="args">
        Default Link
      </Link>
    \`
  })
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Link
    },
    template: \`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4 items-center">
          <Link href="#" variant="default">Default Link</Link>
          <Link href="#" variant="primary">Primary Link</Link>
          <Link href="#" variant="secondary">Secondary Link</Link>
          <Link href="#" variant="accent">Accent Link</Link>
          <Link href="#" variant="neutral">Neutral Link</Link>
          <Link href="#" variant="hover">Hover Link</Link>
        </div>
        
        <div class="text-sm opacity-70">
          Different link variants for various contexts
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Link
    },
    template: \`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4 items-center">
          <Link href="#" variant="primary">
            <template #icon-left>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7 3-3 3 3" />
              </svg>
            </template>
            Inbox
          </Link>
          
          <Link href="#" variant="secondary">
            Settings
            <template #icon-right>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </template>
          </Link>
          
          <Link href="#" variant="accent">
            <template #icon-left>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </template>
            Favorites
            <template #icon-right>
              <span class="badge badge-sm">42</span>
            </template>
          </Link>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Link
    },
    template: \`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4 items-center">
          <Link href="https://github.com" external variant="primary">
            <template #icon-left>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </template>
            GitHub
          </Link>
          
          <Link href="https://twitter.com" external variant="accent">
            <template #icon-left>
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </template>
            Twitter
          </Link>
          
          <Link href="https://docs.example.com" external variant="neutral">
            <template #icon-left>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </template>
            Documentation
            <template #icon-right>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </template>
          </Link>
        </div>
        
        <div class="text-sm opacity-70">
          External links automatically open in new tabs and include proper rel attributes
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Link
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold mb-4">Normal State</h3>
          <div class="flex gap-4">
            <Link href="#" variant="primary">Active Link</Link>
            <Link href="#" variant="secondary">Secondary Link</Link>
            <Link href="#" variant="accent">Accent Link</Link>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Disabled State</h3>
          <div class="flex gap-4">
            <Link href="#" variant="primary" disabled>Disabled Primary</Link>
            <Link href="#" variant="secondary" disabled>Disabled Secondary</Link>
            <Link href="#" variant="accent" disabled>Disabled Accent</Link>
          </div>
        </div>
        
        <div class="text-sm opacity-70">
          Disabled links are not clickable and have reduced opacity
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Link
    },
    template: \`
      <div class="bg-base-200 p-6 rounded-lg">
        <h3 class="text-xl font-bold mb-6">Website Navigation</h3>
        
        <div class="space-y-6">
          <!-- Main Navigation -->
          <div>
            <h4 class="font-semibold mb-3">Main Menu</h4>
            <nav class="flex flex-wrap gap-6">
              <Link href="/" variant="primary">Home</Link>
              <Link href="/about" variant="hover">About</Link>
              <Link href="/products" variant="hover">Products</Link>
              <Link href="/services" variant="hover">Services</Link>
              <Link href="/contact" variant="hover">Contact</Link>
            </nav>
          </div>
          
          <!-- Breadcrumb Navigation -->
          <div>
            <h4 class="font-semibold mb-3">Breadcrumbs</h4>
            <nav class="flex items-center gap-2 text-sm">
              <Link href="/" variant="neutral">Home</Link>
              <span class="opacity-50">/</span>
              <Link href="/products" variant="neutral">Products</Link>
              <span class="opacity-50">/</span>
              <Link href="/products/electronics" variant="neutral">Electronics</Link>
              <span class="opacity-50">/</span>
              <span class="opacity-70">Current Page</span>
            </nav>
          </div>
          
          <!-- Footer Links -->
          <div>
            <h4 class="font-semibold mb-3">Footer Links</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h5 class="font-medium mb-2">Company</h5>
                <div class="space-y-1">
                  <Link href="/about" variant="neutral">About Us</Link>
                  <Link href="/careers" variant="neutral">Careers</Link>
                  <Link href="/press" variant="neutral">Press</Link>
                </div>
              </div>
              
              <div>
                <h5 class="font-medium mb-2">Support</h5>
                <div class="space-y-1">
                  <Link href="/help" variant="neutral">Help Center</Link>
                  <Link href="/contact" variant="neutral">Contact</Link>
                  <Link href="/status" variant="neutral">Status</Link>
                </div>
              </div>
              
              <div>
                <h5 class="font-medium mb-2">Legal</h5>
                <div class="space-y-1">
                  <Link href="/privacy" variant="neutral">Privacy</Link>
                  <Link href="/terms" variant="neutral">Terms</Link>
                  <Link href="/cookies" variant="neutral">Cookies</Link>
                </div>
              </div>
              
              <div>
                <h5 class="font-medium mb-2">Social</h5>
                <div class="space-y-1">
                  <Link href="https://twitter.com" external variant="neutral">Twitter</Link>
                  <Link href="https://github.com" external variant="neutral">GitHub</Link>
                  <Link href="https://linkedin.com" external variant="neutral">LinkedIn</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Link
    },
    template: \`
      <div class="prose max-w-none">
        <h3>Article with Inline Links</h3>
        
        <p>
          This is a paragraph with several inline links. You can visit our
          <Link href="/homepage" variant="primary">homepage</Link> to learn more about our services.
          We also have a comprehensive <Link href="/docs" variant="secondary">documentation</Link>
          that covers all features in detail.
        </p>
        
        <p>
          For external resources, check out the
          <Link href="https://vuejs.org" external variant="accent">Vue.js documentation</Link>
          or explore <Link href="https://tailwindcss.com" external variant="neutral">Tailwind CSS</Link>
          for styling options. You can also find us on
          <Link href="https://github.com" external variant="hover">GitHub</Link>.
        </p>
        
        <p class="text-sm opacity-70">
          Note how inline links blend naturally with the text while maintaining clear visual hierarchy.
        </p>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const H=["Default","Variants","WithIcons","ExternalLinks","States","Navigation","InlineText"];export{t as Default,s as ExternalLinks,c as InlineText,l as Navigation,o as States,i as Variants,r as WithIcons,H as __namedExportsOrder,j as default};
