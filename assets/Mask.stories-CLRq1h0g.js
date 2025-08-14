import{d as v,c as x,a as g,e as h,n as k,o as u}from"./iframe-_o9WQugg.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const d=v({__name:"Mask",props:{variant:{default:"squircle"},size:{default:"md"}},setup(p){const e=p,F=x(()=>{const a=["mask"];return e.variant==="squircle"?a.push("mask-squircle"):e.variant==="heart"?a.push("mask-heart"):e.variant==="hexagon"?a.push("mask-hexagon"):e.variant==="hexagon-2"?a.push("mask-hexagon-2"):e.variant==="decagon"?a.push("mask-decagon"):e.variant==="pentagon"?a.push("mask-pentagon"):e.variant==="diamond"?a.push("mask-diamond"):e.variant==="square"?a.push("mask-square"):e.variant==="circle"?a.push("mask-circle"):e.variant==="parallelogram"?a.push("mask-parallelogram"):e.variant==="parallelogram-2"?a.push("mask-parallelogram-2"):e.variant==="parallelogram-3"?a.push("mask-parallelogram-3"):e.variant==="parallelogram-4"?a.push("mask-parallelogram-4"):e.variant==="star"?a.push("mask-star"):e.variant==="star-2"?a.push("mask-star-2"):e.variant==="triangle"?a.push("mask-triangle"):e.variant==="triangle-2"?a.push("mask-triangle-2"):e.variant==="triangle-3"?a.push("mask-triangle-3"):e.variant==="triangle-4"&&a.push("mask-triangle-4"),e.size==="xs"?a.push("w-12","h-12"):e.size==="sm"?a.push("w-16","h-16"):e.size==="md"?a.push("w-20","h-20"):e.size==="lg"?a.push("w-24","h-24"):e.size==="xl"&&a.push("w-32","h-32"),a.join(" ")});return(a,f)=>(u(),g("div",{class:k(F.value)},[h(a.$slots,"default",{},void 0,!0)],2))}}),t=M(d,[["__scopeId","data-v-ab46a4e2"]]);d.__docgenInfo={exportName:"default",displayName:"Mask",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"squircle"'},{name:'"heart"'},{name:'"hexagon"'},{name:'"hexagon-2"'},{name:'"decagon"'},{name:'"pentagon"'},{name:'"diamond"'},{name:'"square"'},{name:'"circle"'},{name:'"parallelogram"'},{name:'"parallelogram-2"'},{name:'"parallelogram-3"'},{name:'"parallelogram-4"'},{name:'"star"'},{name:'"star-2"'},{name:'"triangle"'},{name:'"triangle-2"'},{name:'"triangle-3"'},{name:'"triangle-4"'}]},defaultValue:{func:!1,value:"'squircle'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'md'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Layout/Mask.vue"]};const b={title:"Layout/Mask",component:t,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["squircle","heart","hexagon","hexagon-2","decagon","pentagon","diamond","square","circle","parallelogram","parallelogram-2","parallelogram-3","parallelogram-4","star","star-2","triangle","triangle-2","triangle-3","triangle-4"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]}}},s={args:{variant:"squircle",size:"md"},render:p=>({components:{Mask:t},setup(){return{args:p}},template:`
      <Mask v-bind="args">
        <img src="https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=Image" alt="Masked Image" />
      </Mask>
    `})},r={render:()=>({components:{Mask:t},template:`
      <div class="grid grid-cols-3 gap-8 items-center justify-items-center">
        <div class="text-center">
          <Mask variant="circle">
            <img src="https://via.placeholder.com/120x120/10B981/FFFFFF?text=Circle" alt="Circle" />
          </Mask>
          <p class="mt-2 text-sm">Circle</p>
        </div>
        
        <div class="text-center">
          <Mask variant="square">
            <img src="https://via.placeholder.com/120x120/F59E0B/FFFFFF?text=Square" alt="Square" />
          </Mask>
          <p class="mt-2 text-sm">Square</p>
        </div>
        
        <div class="text-center">
          <Mask variant="squircle">
            <img src="https://via.placeholder.com/120x120/EF4444/FFFFFF?text=Squircle" alt="Squircle" />
          </Mask>
          <p class="mt-2 text-sm">Squircle</p>
        </div>
        
        <div class="text-center">
          <Mask variant="diamond">
            <img src="https://via.placeholder.com/120x120/8B5CF6/FFFFFF?text=Diamond" alt="Diamond" />
          </Mask>
          <p class="mt-2 text-sm">Diamond</p>
        </div>
        
        <div class="text-center">
          <Mask variant="hexagon">
            <img src="https://via.placeholder.com/120x120/06B6D4/FFFFFF?text=Hexagon" alt="Hexagon" />
          </Mask>
          <p class="mt-2 text-sm">Hexagon</p>
        </div>
        
        <div class="text-center">
          <Mask variant="pentagon">
            <img src="https://via.placeholder.com/120x120/EC4899/FFFFFF?text=Pentagon" alt="Pentagon" />
          </Mask>
          <p class="mt-2 text-sm">Pentagon</p>
        </div>
      </div>
    `})},n={render:()=>({components:{Mask:t},template:`
      <div class="flex gap-8 items-center justify-center">
        <div class="text-center">
          <Mask variant="star">
            <img src="https://via.placeholder.com/120x120/F59E0B/FFFFFF?text=Star" alt="Star" />
          </Mask>
          <p class="mt-2 text-sm">Star</p>
        </div>
        
        <div class="text-center">
          <Mask variant="star-2">
            <img src="https://via.placeholder.com/120x120/EF4444/FFFFFF?text=Star-2" alt="Star 2" />
          </Mask>
          <p class="mt-2 text-sm">Star 2</p>
        </div>
        
        <div class="text-center">
          <Mask variant="heart">
            <img src="https://via.placeholder.com/120x120/EC4899/FFFFFF?text=Heart" alt="Heart" />
          </Mask>
          <p class="mt-2 text-sm">Heart</p>
        </div>
      </div>
    `})},l={render:()=>({components:{Mask:t},template:`
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        <div class="text-center">
          <Mask variant="triangle">
            <img src="https://via.placeholder.com/120x120/10B981/FFFFFF?text=T1" alt="Triangle 1" />
          </Mask>
          <p class="mt-2 text-sm">Triangle</p>
        </div>
        
        <div class="text-center">
          <Mask variant="triangle-2">
            <img src="https://via.placeholder.com/120x120/3B82F6/FFFFFF?text=T2" alt="Triangle 2" />
          </Mask>
          <p class="mt-2 text-sm">Triangle 2</p>
        </div>
        
        <div class="text-center">
          <Mask variant="triangle-3">
            <img src="https://via.placeholder.com/120x120/8B5CF6/FFFFFF?text=T3" alt="Triangle 3" />
          </Mask>
          <p class="mt-2 text-sm">Triangle 3</p>
        </div>
        
        <div class="text-center">
          <Mask variant="triangle-4">
            <img src="https://via.placeholder.com/120x120/F59E0B/FFFFFF?text=T4" alt="Triangle 4" />
          </Mask>
          <p class="mt-2 text-sm">Triangle 4</p>
        </div>
      </div>
    `})},i={render:()=>({components:{Mask:t},template:`
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        <div class="text-center">
          <Mask variant="parallelogram">
            <img src="https://via.placeholder.com/120x120/EF4444/FFFFFF?text=P1" alt="Parallelogram 1" />
          </Mask>
          <p class="mt-2 text-sm">Parallelogram</p>
        </div>
        
        <div class="text-center">
          <Mask variant="parallelogram-2">
            <img src="https://via.placeholder.com/120x120/10B981/FFFFFF?text=P2" alt="Parallelogram 2" />
          </Mask>
          <p class="mt-2 text-sm">Parallelogram 2</p>
        </div>
        
        <div class="text-center">
          <Mask variant="parallelogram-3">
            <img src="https://via.placeholder.com/120x120/3B82F6/FFFFFF?text=P3" alt="Parallelogram 3" />
          </Mask>
          <p class="mt-2 text-sm">Parallelogram 3</p>
        </div>
        
        <div class="text-center">
          <Mask variant="parallelogram-4">
            <img src="https://via.placeholder.com/120x120/8B5CF6/FFFFFF?text=P4" alt="Parallelogram 4" />
          </Mask>
          <p class="mt-2 text-sm">Parallelogram 4</p>
        </div>
      </div>
    `})},c={render:()=>({components:{Mask:t},template:`
      <div class="flex flex-wrap gap-8 items-center justify-center">
        <div class="text-center">
          <Mask variant="circle" size="xs">
            <img src="https://via.placeholder.com/48x48/EF4444/FFFFFF?text=XS" alt="Extra Small" />
          </Mask>
          <p class="mt-2 text-sm">XS</p>
        </div>
        
        <div class="text-center">
          <Mask variant="circle" size="sm">
            <img src="https://via.placeholder.com/64x64/F59E0B/FFFFFF?text=SM" alt="Small" />
          </Mask>
          <p class="mt-2 text-sm">SM</p>
        </div>
        
        <div class="text-center">
          <Mask variant="circle" size="md">
            <img src="https://via.placeholder.com/96x96/10B981/FFFFFF?text=MD" alt="Medium" />
          </Mask>
          <p class="mt-2 text-sm">MD</p>
        </div>
        
        <div class="text-center">
          <Mask variant="circle" size="lg">
            <img src="https://via.placeholder.com/128x128/3B82F6/FFFFFF?text=LG" alt="Large" />
          </Mask>
          <p class="mt-2 text-sm">LG</p>
        </div>
        
        <div class="text-center">
          <Mask variant="circle" size="xl">
            <img src="https://via.placeholder.com/192x192/8B5CF6/FFFFFF?text=XL" alt="Extra Large" />
          </Mask>
          <p class="mt-2 text-sm">XL</p>
        </div>
      </div>
    `})},o={render:()=>({components:{Mask:t},template:`
      <div class="bg-base-200 p-8 rounded-lg">
        <h3 class="text-xl font-bold mb-6 text-center">Team Gallery</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          <div class="text-center">
            <Mask variant="circle" size="lg">
              <img src="https://via.placeholder.com/128x128/3B82F6/FFFFFF?text=CEO" alt="CEO" />
            </Mask>
            <h4 class="mt-2 font-semibold">John Doe</h4>
            <p class="text-sm opacity-70">CEO</p>
          </div>
          
          <div class="text-center">
            <Mask variant="squircle" size="lg">
              <img src="https://via.placeholder.com/128x128/10B981/FFFFFF?text=CTO" alt="CTO" />
            </Mask>
            <h4 class="mt-2 font-semibold">Jane Smith</h4>
            <p class="text-sm opacity-70">CTO</p>
          </div>
          
          <div class="text-center">
            <Mask variant="hexagon" size="lg">
              <img src="https://via.placeholder.com/128x128/F59E0B/FFFFFF?text=DEV" alt="Developer" />
            </Mask>
            <h4 class="mt-2 font-semibold">Bob Johnson</h4>
            <p class="text-sm opacity-70">Lead Developer</p>
          </div>
          
          <div class="text-center">
            <Mask variant="diamond" size="lg">
              <img src="https://via.placeholder.com/128x128/EC4899/FFFFFF?text=UX" alt="Designer" />
            </Mask>
            <h4 class="mt-2 font-semibold">Alice Wilson</h4>
            <p class="text-sm opacity-70">UX Designer</p>
          </div>
        </div>
      </div>
    `})},m={render:()=>({components:{Mask:t},template:`
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-xl font-bold mb-6">Creative Image Masks</h3>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Award Section -->
          <div class="text-center bg-base-200 p-6 rounded-lg">
            <Mask variant="star" size="xl">
              <img src="https://via.placeholder.com/192x192/F59E0B/FFFFFF?text=AWARD" alt="Award" />
            </Mask>
            <h4 class="mt-4 font-bold text-lg">Best Product 2024</h4>
            <p class="text-sm opacity-70">Recognized for excellence</p>
          </div>
          
          <!-- Love Section -->
          <div class="text-center bg-base-200 p-6 rounded-lg">
            <Mask variant="heart" size="xl">
              <img src="https://via.placeholder.com/192x192/EC4899/FFFFFF?text=LOVE" alt="Love" />
            </Mask>
            <h4 class="mt-4 font-bold text-lg">Customer Love</h4>
            <p class="text-sm opacity-70">Testimonials & reviews</p>
          </div>
          
          <!-- Innovation Section -->
          <div class="text-center bg-base-200 p-6 rounded-lg">
            <Mask variant="hexagon-2" size="xl">
              <img src="https://via.placeholder.com/192x192/8B5CF6/FFFFFF?text=TECH" alt="Technology" />
            </Mask>
            <h4 class="mt-4 font-bold text-lg">Innovation Hub</h4>
            <p class="text-sm opacity-70">Cutting-edge technology</p>
          </div>
        </div>
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'squircle',
    size: 'md'
  },
  render: args => ({
    components: {
      Mask
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Mask v-bind="args">
        <img src="https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=Image" alt="Masked Image" />
      </Mask>
    \`
  })
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Mask
    },
    template: \`
      <div class="grid grid-cols-3 gap-8 items-center justify-items-center">
        <div class="text-center">
          <Mask variant="circle">
            <img src="https://via.placeholder.com/120x120/10B981/FFFFFF?text=Circle" alt="Circle" />
          </Mask>
          <p class="mt-2 text-sm">Circle</p>
        </div>
        
        <div class="text-center">
          <Mask variant="square">
            <img src="https://via.placeholder.com/120x120/F59E0B/FFFFFF?text=Square" alt="Square" />
          </Mask>
          <p class="mt-2 text-sm">Square</p>
        </div>
        
        <div class="text-center">
          <Mask variant="squircle">
            <img src="https://via.placeholder.com/120x120/EF4444/FFFFFF?text=Squircle" alt="Squircle" />
          </Mask>
          <p class="mt-2 text-sm">Squircle</p>
        </div>
        
        <div class="text-center">
          <Mask variant="diamond">
            <img src="https://via.placeholder.com/120x120/8B5CF6/FFFFFF?text=Diamond" alt="Diamond" />
          </Mask>
          <p class="mt-2 text-sm">Diamond</p>
        </div>
        
        <div class="text-center">
          <Mask variant="hexagon">
            <img src="https://via.placeholder.com/120x120/06B6D4/FFFFFF?text=Hexagon" alt="Hexagon" />
          </Mask>
          <p class="mt-2 text-sm">Hexagon</p>
        </div>
        
        <div class="text-center">
          <Mask variant="pentagon">
            <img src="https://via.placeholder.com/120x120/EC4899/FFFFFF?text=Pentagon" alt="Pentagon" />
          </Mask>
          <p class="mt-2 text-sm">Pentagon</p>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Mask
    },
    template: \`
      <div class="flex gap-8 items-center justify-center">
        <div class="text-center">
          <Mask variant="star">
            <img src="https://via.placeholder.com/120x120/F59E0B/FFFFFF?text=Star" alt="Star" />
          </Mask>
          <p class="mt-2 text-sm">Star</p>
        </div>
        
        <div class="text-center">
          <Mask variant="star-2">
            <img src="https://via.placeholder.com/120x120/EF4444/FFFFFF?text=Star-2" alt="Star 2" />
          </Mask>
          <p class="mt-2 text-sm">Star 2</p>
        </div>
        
        <div class="text-center">
          <Mask variant="heart">
            <img src="https://via.placeholder.com/120x120/EC4899/FFFFFF?text=Heart" alt="Heart" />
          </Mask>
          <p class="mt-2 text-sm">Heart</p>
        </div>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Mask
    },
    template: \`
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        <div class="text-center">
          <Mask variant="triangle">
            <img src="https://via.placeholder.com/120x120/10B981/FFFFFF?text=T1" alt="Triangle 1" />
          </Mask>
          <p class="mt-2 text-sm">Triangle</p>
        </div>
        
        <div class="text-center">
          <Mask variant="triangle-2">
            <img src="https://via.placeholder.com/120x120/3B82F6/FFFFFF?text=T2" alt="Triangle 2" />
          </Mask>
          <p class="mt-2 text-sm">Triangle 2</p>
        </div>
        
        <div class="text-center">
          <Mask variant="triangle-3">
            <img src="https://via.placeholder.com/120x120/8B5CF6/FFFFFF?text=T3" alt="Triangle 3" />
          </Mask>
          <p class="mt-2 text-sm">Triangle 3</p>
        </div>
        
        <div class="text-center">
          <Mask variant="triangle-4">
            <img src="https://via.placeholder.com/120x120/F59E0B/FFFFFF?text=T4" alt="Triangle 4" />
          </Mask>
          <p class="mt-2 text-sm">Triangle 4</p>
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Mask
    },
    template: \`
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        <div class="text-center">
          <Mask variant="parallelogram">
            <img src="https://via.placeholder.com/120x120/EF4444/FFFFFF?text=P1" alt="Parallelogram 1" />
          </Mask>
          <p class="mt-2 text-sm">Parallelogram</p>
        </div>
        
        <div class="text-center">
          <Mask variant="parallelogram-2">
            <img src="https://via.placeholder.com/120x120/10B981/FFFFFF?text=P2" alt="Parallelogram 2" />
          </Mask>
          <p class="mt-2 text-sm">Parallelogram 2</p>
        </div>
        
        <div class="text-center">
          <Mask variant="parallelogram-3">
            <img src="https://via.placeholder.com/120x120/3B82F6/FFFFFF?text=P3" alt="Parallelogram 3" />
          </Mask>
          <p class="mt-2 text-sm">Parallelogram 3</p>
        </div>
        
        <div class="text-center">
          <Mask variant="parallelogram-4">
            <img src="https://via.placeholder.com/120x120/8B5CF6/FFFFFF?text=P4" alt="Parallelogram 4" />
          </Mask>
          <p class="mt-2 text-sm">Parallelogram 4</p>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Mask
    },
    template: \`
      <div class="flex flex-wrap gap-8 items-center justify-center">
        <div class="text-center">
          <Mask variant="circle" size="xs">
            <img src="https://via.placeholder.com/48x48/EF4444/FFFFFF?text=XS" alt="Extra Small" />
          </Mask>
          <p class="mt-2 text-sm">XS</p>
        </div>
        
        <div class="text-center">
          <Mask variant="circle" size="sm">
            <img src="https://via.placeholder.com/64x64/F59E0B/FFFFFF?text=SM" alt="Small" />
          </Mask>
          <p class="mt-2 text-sm">SM</p>
        </div>
        
        <div class="text-center">
          <Mask variant="circle" size="md">
            <img src="https://via.placeholder.com/96x96/10B981/FFFFFF?text=MD" alt="Medium" />
          </Mask>
          <p class="mt-2 text-sm">MD</p>
        </div>
        
        <div class="text-center">
          <Mask variant="circle" size="lg">
            <img src="https://via.placeholder.com/128x128/3B82F6/FFFFFF?text=LG" alt="Large" />
          </Mask>
          <p class="mt-2 text-sm">LG</p>
        </div>
        
        <div class="text-center">
          <Mask variant="circle" size="xl">
            <img src="https://via.placeholder.com/192x192/8B5CF6/FFFFFF?text=XL" alt="Extra Large" />
          </Mask>
          <p class="mt-2 text-sm">XL</p>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Mask
    },
    template: \`
      <div class="bg-base-200 p-8 rounded-lg">
        <h3 class="text-xl font-bold mb-6 text-center">Team Gallery</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          <div class="text-center">
            <Mask variant="circle" size="lg">
              <img src="https://via.placeholder.com/128x128/3B82F6/FFFFFF?text=CEO" alt="CEO" />
            </Mask>
            <h4 class="mt-2 font-semibold">John Doe</h4>
            <p class="text-sm opacity-70">CEO</p>
          </div>
          
          <div class="text-center">
            <Mask variant="squircle" size="lg">
              <img src="https://via.placeholder.com/128x128/10B981/FFFFFF?text=CTO" alt="CTO" />
            </Mask>
            <h4 class="mt-2 font-semibold">Jane Smith</h4>
            <p class="text-sm opacity-70">CTO</p>
          </div>
          
          <div class="text-center">
            <Mask variant="hexagon" size="lg">
              <img src="https://via.placeholder.com/128x128/F59E0B/FFFFFF?text=DEV" alt="Developer" />
            </Mask>
            <h4 class="mt-2 font-semibold">Bob Johnson</h4>
            <p class="text-sm opacity-70">Lead Developer</p>
          </div>
          
          <div class="text-center">
            <Mask variant="diamond" size="lg">
              <img src="https://via.placeholder.com/128x128/EC4899/FFFFFF?text=UX" alt="Designer" />
            </Mask>
            <h4 class="mt-2 font-semibold">Alice Wilson</h4>
            <p class="text-sm opacity-70">UX Designer</p>
          </div>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Mask
    },
    template: \`
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-xl font-bold mb-6">Creative Image Masks</h3>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Award Section -->
          <div class="text-center bg-base-200 p-6 rounded-lg">
            <Mask variant="star" size="xl">
              <img src="https://via.placeholder.com/192x192/F59E0B/FFFFFF?text=AWARD" alt="Award" />
            </Mask>
            <h4 class="mt-4 font-bold text-lg">Best Product 2024</h4>
            <p class="text-sm opacity-70">Recognized for excellence</p>
          </div>
          
          <!-- Love Section -->
          <div class="text-center bg-base-200 p-6 rounded-lg">
            <Mask variant="heart" size="xl">
              <img src="https://via.placeholder.com/192x192/EC4899/FFFFFF?text=LOVE" alt="Love" />
            </Mask>
            <h4 class="mt-4 font-bold text-lg">Customer Love</h4>
            <p class="text-sm opacity-70">Testimonials & reviews</p>
          </div>
          
          <!-- Innovation Section -->
          <div class="text-center bg-base-200 p-6 rounded-lg">
            <Mask variant="hexagon-2" size="xl">
              <img src="https://via.placeholder.com/192x192/8B5CF6/FFFFFF?text=TECH" alt="Technology" />
            </Mask>
            <h4 class="mt-4 font-bold text-lg">Innovation Hub</h4>
            <p class="text-sm opacity-70">Cutting-edge technology</p>
          </div>
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};const y=["Default","BasicShapes","Stars","Triangles","Parallelograms","Sizes","ProfileGallery","CreativeShowcase"];export{r as BasicShapes,m as CreativeShowcase,s as Default,i as Parallelograms,o as ProfileGallery,c as Sizes,n as Stars,l as Triangles,y as __namedExportsOrder,b as default};
