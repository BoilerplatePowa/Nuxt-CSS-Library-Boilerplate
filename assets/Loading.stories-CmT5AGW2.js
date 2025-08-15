import{d as v,c as g,a as o,e as u,n as x,o as l,m as f,t as L}from"./iframe-D_58n4_g.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const y=["aria-label"],h={key:0,class:"loading-text"},c=v({__name:"Loading",props:{variant:{default:"spinner"},size:{default:"md"},text:{},ariaLabel:{default:"Loading"}},setup(p){const e=p,m=g(()=>{const n=["loading"];return e.variant==="spinner"?n.push("loading-spinner"):e.variant==="dots"?n.push("loading-dots"):e.variant==="ring"?n.push("loading-ring"):e.variant==="ball"?n.push("loading-ball"):e.variant==="bars"?n.push("loading-bars"):e.variant==="infinity"&&n.push("loading-infinity"),e.size==="xs"?n.push("loading-xs"):e.size==="sm"?n.push("loading-sm"):e.size==="lg"&&n.push("loading-lg"),n.join(" ")});return(n,z)=>(l(),o("div",{class:x(m.value),"aria-label":n.ariaLabel,role:"status"},[u(n.$slots,"default",{},()=>[n.text?(l(),o("span",h,L(n.text),1)):f("",!0)],!0)],10,y))}}),d=b(c,[["__scopeId","data-v-8dc4ffdf"]]);c.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"spinner"'},{name:'"dots"'},{name:'"ring"'},{name:'"ball"'},{name:'"bars"'},{name:'"infinity"'}]},defaultValue:{func:!1,value:"'spinner'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"text",required:!1,type:{name:"string"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Feedback/Loading.vue"]};const w={title:"Feedback/Loading",component:d,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["spinner","dots","ring","ball","bars","infinity"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},text:{control:{type:"text"}}}},t={args:{variant:"spinner",size:"md"}},a={args:{variant:"spinner",size:"md",text:"Loading..."}},s={render:()=>({components:{Loading:d},template:`
      <div class="flex flex-wrap gap-8 items-center justify-center">
        <div class="text-center">
          <Loading variant="spinner" />
          <p class="mt-2 text-sm">Spinner</p>
        </div>
        
        <div class="text-center">
          <Loading variant="dots" />
          <p class="mt-2 text-sm">Dots</p>
        </div>
        
        <div class="text-center">
          <Loading variant="ring" />
          <p class="mt-2 text-sm">Ring</p>
        </div>
        
        <div class="text-center">
          <Loading variant="ball" />
          <p class="mt-2 text-sm">Ball</p>
        </div>
        
        <div class="text-center">
          <Loading variant="bars" />
          <p class="mt-2 text-sm">Bars</p>
        </div>
        
        <div class="text-center">
          <Loading variant="infinity" />
          <p class="mt-2 text-sm">Infinity</p>
        </div>
      </div>
    `})},i={render:()=>({components:{Loading:d},template:`
      <div class="flex gap-8 items-center justify-center">
        <div class="text-center">
          <Loading variant="spinner" size="xs" />
          <p class="mt-2 text-sm">XS</p>
        </div>
        
        <div class="text-center">
          <Loading variant="spinner" size="sm" />
          <p class="mt-2 text-sm">SM</p>
        </div>
        
        <div class="text-center">
          <Loading variant="spinner" size="md" />
          <p class="mt-2 text-sm">MD</p>
        </div>
        
        <div class="text-center">
          <Loading variant="spinner" size="lg" />
          <p class="mt-2 text-sm">LG</p>
        </div>
      </div>
    `})},r={render:()=>({components:{Loading:d},template:`
      <div class="space-y-8">
        <!-- Button Loading -->
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Button Loading States</h3>
          <div class="flex gap-4 justify-center">
            <button class="btn btn-primary">
              <Loading variant="spinner" size="sm" />
              Loading...
            </button>
            
            <button class="btn btn-secondary">
              <Loading variant="dots" size="sm" />
              Processing...
            </button>
            
            <button class="btn btn-accent">
              <Loading variant="ring" size="sm" />
              Saving...
            </button>
          </div>
        </div>
        
        <!-- Card Loading -->
        <div class="max-w-md mx-auto">
          <h3 class="text-lg font-bold mb-4 text-center">Card Loading</h3>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body text-center">
              <Loading variant="spinner" size="lg" />
              <h2 class="card-title justify-center">Loading Content</h2>
              <p>Please wait while we fetch your data...</p>
            </div>
          </div>
        </div>
        
        <!-- Full Page Loading -->
        <div class="h-64 bg-base-200 rounded-lg flex items-center justify-center">
          <div class="text-center">
            <Loading variant="dots" size="lg" />
            <p class="mt-4 text-lg">Loading application...</p>
          </div>
        </div>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'spinner',
    size: 'md'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'spinner',
    size: 'md',
    text: 'Loading...'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Loading
    },
    template: \`
      <div class="flex flex-wrap gap-8 items-center justify-center">
        <div class="text-center">
          <Loading variant="spinner" />
          <p class="mt-2 text-sm">Spinner</p>
        </div>
        
        <div class="text-center">
          <Loading variant="dots" />
          <p class="mt-2 text-sm">Dots</p>
        </div>
        
        <div class="text-center">
          <Loading variant="ring" />
          <p class="mt-2 text-sm">Ring</p>
        </div>
        
        <div class="text-center">
          <Loading variant="ball" />
          <p class="mt-2 text-sm">Ball</p>
        </div>
        
        <div class="text-center">
          <Loading variant="bars" />
          <p class="mt-2 text-sm">Bars</p>
        </div>
        
        <div class="text-center">
          <Loading variant="infinity" />
          <p class="mt-2 text-sm">Infinity</p>
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Loading
    },
    template: \`
      <div class="flex gap-8 items-center justify-center">
        <div class="text-center">
          <Loading variant="spinner" size="xs" />
          <p class="mt-2 text-sm">XS</p>
        </div>
        
        <div class="text-center">
          <Loading variant="spinner" size="sm" />
          <p class="mt-2 text-sm">SM</p>
        </div>
        
        <div class="text-center">
          <Loading variant="spinner" size="md" />
          <p class="mt-2 text-sm">MD</p>
        </div>
        
        <div class="text-center">
          <Loading variant="spinner" size="lg" />
          <p class="mt-2 text-sm">LG</p>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Loading
    },
    template: \`
      <div class="space-y-8">
        <!-- Button Loading -->
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Button Loading States</h3>
          <div class="flex gap-4 justify-center">
            <button class="btn btn-primary">
              <Loading variant="spinner" size="sm" />
              Loading...
            </button>
            
            <button class="btn btn-secondary">
              <Loading variant="dots" size="sm" />
              Processing...
            </button>
            
            <button class="btn btn-accent">
              <Loading variant="ring" size="sm" />
              Saving...
            </button>
          </div>
        </div>
        
        <!-- Card Loading -->
        <div class="max-w-md mx-auto">
          <h3 class="text-lg font-bold mb-4 text-center">Card Loading</h3>
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body text-center">
              <Loading variant="spinner" size="lg" />
              <h2 class="card-title justify-center">Loading Content</h2>
              <p>Please wait while we fetch your data...</p>
            </div>
          </div>
        </div>
        
        <!-- Full Page Loading -->
        <div class="h-64 bg-base-200 rounded-lg flex items-center justify-center">
          <div class="text-center">
            <Loading variant="dots" size="lg" />
            <p class="mt-4 text-lg">Loading application...</p>
          </div>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};const B=["Default","WithText","Variants","Sizes","InContext"];export{t as Default,r as InContext,i as Sizes,s as Variants,a as WithText,B as __namedExportsOrder,w as default};
