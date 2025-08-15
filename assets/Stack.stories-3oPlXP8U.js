import{d as m,c as g,a as y,e as h,n as x,o as f}from"./iframe-B-dz0hg_.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const u=m({__name:"Stack",props:{direction:{default:"vertical"},spacing:{default:"md"},align:{default:"stretch"},justify:{default:"start"},wrap:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1}},setup(a){const t=a,b=g(()=>{const e=["flex"];return t.direction==="horizontal"?t.reverse?e.push("flex-row-reverse"):e.push("flex-row"):t.reverse?e.push("flex-col-reverse"):e.push("flex-col"),t.spacing==="none"||(t.spacing==="xs"?e.push("gap-1"):t.spacing==="sm"?e.push("gap-2"):t.spacing==="md"?e.push("gap-4"):t.spacing==="lg"?e.push("gap-6"):t.spacing==="xl"&&e.push("gap-8")),t.align==="start"?e.push("items-start"):t.align==="center"?e.push("items-center"):t.align==="end"?e.push("items-end"):t.align==="stretch"&&e.push("items-stretch"),t.justify==="start"?e.push("justify-start"):t.justify==="center"?e.push("justify-center"):t.justify==="end"?e.push("justify-end"):t.justify==="between"?e.push("justify-between"):t.justify==="around"?e.push("justify-around"):t.justify==="evenly"&&e.push("justify-evenly"),t.wrap&&e.push("flex-wrap"),e.join(" ")});return(e,k)=>(f(),y("div",{class:x(b.value)},[h(e.$slots,"default",{},void 0,!0)],2))}}),n=S(u,[["__scopeId","data-v-bc7d73b5"]]);u.__docgenInfo={exportName:"default",displayName:"Stack",description:"",tags:{},props:[{name:"direction",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'vertical'"}},{name:"spacing",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"center"'},{name:'"end"'},{name:'"stretch"'}]},defaultValue:{func:!1,value:"'stretch'"}},{name:"justify",required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"center"'},{name:'"end"'},{name:'"between"'},{name:'"around"'},{name:'"evenly"'}]},defaultValue:{func:!1,value:"'start'"}},{name:"wrap",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"reverse",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Layout/Stack.vue"]};const j={title:"Layout/Stack",component:n,parameters:{layout:"padded"},argTypes:{direction:{control:{type:"select"},options:["horizontal","vertical"]},spacing:{control:{type:"select"},options:["none","xs","sm","md","lg","xl"]},align:{control:{type:"select"},options:["start","center","end","stretch"]},justify:{control:{type:"select"},options:["start","center","end","between","around","evenly"]},wrap:{control:{type:"boolean"}},reverse:{control:{type:"boolean"}}}},s={args:{direction:"vertical",spacing:"md"},render:a=>({components:{Stack:n},setup(){return{args:a}},template:`
      <Stack v-bind="args">
        <div class="bg-primary text-primary-content p-4 rounded">Item 1</div>
        <div class="bg-secondary text-secondary-content p-4 rounded">Item 2</div>
        <div class="bg-accent text-accent-content p-4 rounded">Item 3</div>
      </Stack>
    `})},c={args:{direction:"horizontal",spacing:"md"},render:a=>({components:{Stack:n},setup(){return{args:a}},template:`
      <Stack v-bind="args">
        <div class="bg-primary text-primary-content p-4 rounded">Item 1</div>
        <div class="bg-secondary text-secondary-content p-4 rounded">Item 2</div>
        <div class="bg-accent text-accent-content p-4 rounded">Item 3</div>
      </Stack>
    `})},d={render:()=>({components:{Stack:n},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">No Spacing</h3>
          <Stack spacing="none">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Small Spacing</h3>
          <Stack spacing="sm">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Large Spacing</h3>
          <Stack spacing="lg">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
      </div>
    `})},r={render:()=>({components:{Stack:n},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Align Start</h3>
          <Stack direction="horizontal" align="start" class="h-32 bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Short</div>
            <div class="bg-secondary text-secondary-content p-4 rounded">Medium<br/>Content</div>
            <div class="bg-accent text-accent-content p-6 rounded">Tall<br/>Content<br/>Here</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Align Center</h3>
          <Stack direction="horizontal" align="center" class="h-32 bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Short</div>
            <div class="bg-secondary text-secondary-content p-4 rounded">Medium<br/>Content</div>
            <div class="bg-accent text-accent-content p-6 rounded">Tall<br/>Content<br/>Here</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Align End</h3>
          <Stack direction="horizontal" align="end" class="h-32 bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Short</div>
            <div class="bg-secondary text-secondary-content p-4 rounded">Medium<br/>Content</div>
            <div class="bg-accent text-accent-content p-6 rounded">Tall<br/>Content<br/>Here</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Align Stretch</h3>
          <Stack direction="horizontal" align="stretch" class="h-32 bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Short</div>
            <div class="bg-secondary text-secondary-content p-4 rounded">Medium<br/>Content</div>
            <div class="bg-accent text-accent-content p-6 rounded">Tall<br/>Content<br/>Here</div>
          </Stack>
        </div>
      </div>
    `})},o={render:()=>({components:{Stack:n},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Justify Start</h3>
          <Stack direction="horizontal" justify="start" class="w-full bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Justify Center</h3>
          <Stack direction="horizontal" justify="center" class="w-full bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Justify Between</h3>
          <Stack direction="horizontal" justify="between" class="w-full bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Justify Around</h3>
          <Stack direction="horizontal" justify="around" class="w-full bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Justify Evenly</h3>
          <Stack direction="horizontal" justify="evenly" class="w-full bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
      </div>
    `})},i={render:()=>({components:{Stack:n},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">No Wrap (Default)</h3>
          <Stack direction="horizontal" spacing="sm" class="w-64 bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded whitespace-nowrap">Long Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded whitespace-nowrap">Long Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded whitespace-nowrap">Long Item 3</div>
            <div class="bg-info text-info-content p-2 rounded whitespace-nowrap">Long Item 4</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Wrap</h3>
          <Stack direction="horizontal" spacing="sm" wrap class="w-64 bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded whitespace-nowrap">Long Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded whitespace-nowrap">Long Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded whitespace-nowrap">Long Item 3</div>
            <div class="bg-info text-info-content p-2 rounded whitespace-nowrap">Long Item 4</div>
          </Stack>
        </div>
      </div>
    `})},l={render:()=>({components:{Stack:n},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Normal Order (Vertical)</h3>
          <Stack>
            <div class="bg-primary text-primary-content p-3 rounded">First</div>
            <div class="bg-secondary text-secondary-content p-3 rounded">Second</div>
            <div class="bg-accent text-accent-content p-3 rounded">Third</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Reverse Order (Vertical)</h3>
          <Stack reverse>
            <div class="bg-primary text-primary-content p-3 rounded">First</div>
            <div class="bg-secondary text-secondary-content p-3 rounded">Second</div>
            <div class="bg-accent text-accent-content p-3 rounded">Third</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Normal Order (Horizontal)</h3>
          <Stack direction="horizontal">
            <div class="bg-primary text-primary-content p-3 rounded">First</div>
            <div class="bg-secondary text-secondary-content p-3 rounded">Second</div>
            <div class="bg-accent text-accent-content p-3 rounded">Third</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Reverse Order (Horizontal)</h3>
          <Stack direction="horizontal" reverse>
            <div class="bg-primary text-primary-content p-3 rounded">First</div>
            <div class="bg-secondary text-secondary-content p-3 rounded">Second</div>
            <div class="bg-accent text-accent-content p-3 rounded">Third</div>
          </Stack>
        </div>
      </div>
    `})},p={render:()=>({components:{Stack:n},template:`
      <div class="max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-lg">
        <h3 class="text-xl font-bold mb-6">Contact Form</h3>
        
        <Stack spacing="lg">
          <!-- Name Fields -->
          <Stack direction="horizontal" spacing="md">
            <div class="flex-1">
              <label class="label">
                <span class="label-text">First Name</span>
              </label>
              <input type="text" class="input input-bordered w-full" placeholder="John" />
            </div>
            <div class="flex-1">
              <label class="label">
                <span class="label-text">Last Name</span>
              </label>
              <input type="text" class="input input-bordered w-full" placeholder="Doe" />
            </div>
          </Stack>
          
          <!-- Email -->
          <div>
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" class="input input-bordered w-full" placeholder="john@example.com" />
          </div>
          
          <!-- Message -->
          <div>
            <label class="label">
              <span class="label-text">Message</span>
            </label>
            <textarea class="textarea textarea-bordered w-full" rows="4" placeholder="Your message..."></textarea>
          </div>
          
          <!-- Actions -->
          <Stack direction="horizontal" justify="between" align="center">
            <label class="label cursor-pointer">
              <input type="checkbox" class="checkbox checkbox-sm" />
              <span class="label-text ml-2">Subscribe to newsletter</span>
            </label>
            
            <Stack direction="horizontal" spacing="sm">
              <button class="btn btn-ghost">Cancel</button>
              <button class="btn btn-primary">Send Message</button>
            </Stack>
          </Stack>
        </Stack>
      </div>
    `})},v={render:()=>({components:{Stack:n},template:`
      <div>
        <h3 class="text-xl font-bold mb-6 text-center">Product Grid</h3>
        
        <Stack direction="horizontal" wrap spacing="lg" justify="center">
          <div class="card w-64 bg-base-100 shadow-xl">
            <figure class="h-48 bg-primary"></figure>
            <div class="card-body">
              <h4 class="card-title">Product 1</h4>
              <p class="text-sm opacity-70">Description of product 1</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
          
          <div class="card w-64 bg-base-100 shadow-xl">
            <figure class="h-48 bg-secondary"></figure>
            <div class="card-body">
              <h4 class="card-title">Product 2</h4>
              <p class="text-sm opacity-70">Description of product 2</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
          
          <div class="card w-64 bg-base-100 shadow-xl">
            <figure class="h-48 bg-accent"></figure>
            <div class="card-body">
              <h4 class="card-title">Product 3</h4>
              <p class="text-sm opacity-70">Description of product 3</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
          
          <div class="card w-64 bg-base-100 shadow-xl">
            <figure class="h-48 bg-info"></figure>
            <div class="card-body">
              <h4 class="card-title">Product 4</h4>
              <p class="text-sm opacity-70">Description of product 4</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        </Stack>
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    spacing: 'md'
  },
  render: args => ({
    components: {
      Stack
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Stack v-bind="args">
        <div class="bg-primary text-primary-content p-4 rounded">Item 1</div>
        <div class="bg-secondary text-secondary-content p-4 rounded">Item 2</div>
        <div class="bg-accent text-accent-content p-4 rounded">Item 3</div>
      </Stack>
    \`
  })
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    spacing: 'md'
  },
  render: args => ({
    components: {
      Stack
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Stack v-bind="args">
        <div class="bg-primary text-primary-content p-4 rounded">Item 1</div>
        <div class="bg-secondary text-secondary-content p-4 rounded">Item 2</div>
        <div class="bg-accent text-accent-content p-4 rounded">Item 3</div>
      </Stack>
    \`
  })
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Stack
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">No Spacing</h3>
          <Stack spacing="none">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Small Spacing</h3>
          <Stack spacing="sm">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Large Spacing</h3>
          <Stack spacing="lg">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Stack
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Align Start</h3>
          <Stack direction="horizontal" align="start" class="h-32 bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Short</div>
            <div class="bg-secondary text-secondary-content p-4 rounded">Medium<br/>Content</div>
            <div class="bg-accent text-accent-content p-6 rounded">Tall<br/>Content<br/>Here</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Align Center</h3>
          <Stack direction="horizontal" align="center" class="h-32 bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Short</div>
            <div class="bg-secondary text-secondary-content p-4 rounded">Medium<br/>Content</div>
            <div class="bg-accent text-accent-content p-6 rounded">Tall<br/>Content<br/>Here</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Align End</h3>
          <Stack direction="horizontal" align="end" class="h-32 bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Short</div>
            <div class="bg-secondary text-secondary-content p-4 rounded">Medium<br/>Content</div>
            <div class="bg-accent text-accent-content p-6 rounded">Tall<br/>Content<br/>Here</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Align Stretch</h3>
          <Stack direction="horizontal" align="stretch" class="h-32 bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Short</div>
            <div class="bg-secondary text-secondary-content p-4 rounded">Medium<br/>Content</div>
            <div class="bg-accent text-accent-content p-6 rounded">Tall<br/>Content<br/>Here</div>
          </Stack>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Stack
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Justify Start</h3>
          <Stack direction="horizontal" justify="start" class="w-full bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Justify Center</h3>
          <Stack direction="horizontal" justify="center" class="w-full bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Justify Between</h3>
          <Stack direction="horizontal" justify="between" class="w-full bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Justify Around</h3>
          <Stack direction="horizontal" justify="around" class="w-full bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Justify Evenly</h3>
          <Stack direction="horizontal" justify="evenly" class="w-full bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded">Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded">Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded">Item 3</div>
          </Stack>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Stack
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">No Wrap (Default)</h3>
          <Stack direction="horizontal" spacing="sm" class="w-64 bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded whitespace-nowrap">Long Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded whitespace-nowrap">Long Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded whitespace-nowrap">Long Item 3</div>
            <div class="bg-info text-info-content p-2 rounded whitespace-nowrap">Long Item 4</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Wrap</h3>
          <Stack direction="horizontal" spacing="sm" wrap class="w-64 bg-base-200 rounded p-4">
            <div class="bg-primary text-primary-content p-2 rounded whitespace-nowrap">Long Item 1</div>
            <div class="bg-secondary text-secondary-content p-2 rounded whitespace-nowrap">Long Item 2</div>
            <div class="bg-accent text-accent-content p-2 rounded whitespace-nowrap">Long Item 3</div>
            <div class="bg-info text-info-content p-2 rounded whitespace-nowrap">Long Item 4</div>
          </Stack>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Stack
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Normal Order (Vertical)</h3>
          <Stack>
            <div class="bg-primary text-primary-content p-3 rounded">First</div>
            <div class="bg-secondary text-secondary-content p-3 rounded">Second</div>
            <div class="bg-accent text-accent-content p-3 rounded">Third</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Reverse Order (Vertical)</h3>
          <Stack reverse>
            <div class="bg-primary text-primary-content p-3 rounded">First</div>
            <div class="bg-secondary text-secondary-content p-3 rounded">Second</div>
            <div class="bg-accent text-accent-content p-3 rounded">Third</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Normal Order (Horizontal)</h3>
          <Stack direction="horizontal">
            <div class="bg-primary text-primary-content p-3 rounded">First</div>
            <div class="bg-secondary text-secondary-content p-3 rounded">Second</div>
            <div class="bg-accent text-accent-content p-3 rounded">Third</div>
          </Stack>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Reverse Order (Horizontal)</h3>
          <Stack direction="horizontal" reverse>
            <div class="bg-primary text-primary-content p-3 rounded">First</div>
            <div class="bg-secondary text-secondary-content p-3 rounded">Second</div>
            <div class="bg-accent text-accent-content p-3 rounded">Third</div>
          </Stack>
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Stack
    },
    template: \`
      <div class="max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-lg">
        <h3 class="text-xl font-bold mb-6">Contact Form</h3>
        
        <Stack spacing="lg">
          <!-- Name Fields -->
          <Stack direction="horizontal" spacing="md">
            <div class="flex-1">
              <label class="label">
                <span class="label-text">First Name</span>
              </label>
              <input type="text" class="input input-bordered w-full" placeholder="John" />
            </div>
            <div class="flex-1">
              <label class="label">
                <span class="label-text">Last Name</span>
              </label>
              <input type="text" class="input input-bordered w-full" placeholder="Doe" />
            </div>
          </Stack>
          
          <!-- Email -->
          <div>
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" class="input input-bordered w-full" placeholder="john@example.com" />
          </div>
          
          <!-- Message -->
          <div>
            <label class="label">
              <span class="label-text">Message</span>
            </label>
            <textarea class="textarea textarea-bordered w-full" rows="4" placeholder="Your message..."></textarea>
          </div>
          
          <!-- Actions -->
          <Stack direction="horizontal" justify="between" align="center">
            <label class="label cursor-pointer">
              <input type="checkbox" class="checkbox checkbox-sm" />
              <span class="label-text ml-2">Subscribe to newsletter</span>
            </label>
            
            <Stack direction="horizontal" spacing="sm">
              <button class="btn btn-ghost">Cancel</button>
              <button class="btn btn-primary">Send Message</button>
            </Stack>
          </Stack>
        </Stack>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Stack
    },
    template: \`
      <div>
        <h3 class="text-xl font-bold mb-6 text-center">Product Grid</h3>
        
        <Stack direction="horizontal" wrap spacing="lg" justify="center">
          <div class="card w-64 bg-base-100 shadow-xl">
            <figure class="h-48 bg-primary"></figure>
            <div class="card-body">
              <h4 class="card-title">Product 1</h4>
              <p class="text-sm opacity-70">Description of product 1</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
          
          <div class="card w-64 bg-base-100 shadow-xl">
            <figure class="h-48 bg-secondary"></figure>
            <div class="card-body">
              <h4 class="card-title">Product 2</h4>
              <p class="text-sm opacity-70">Description of product 2</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
          
          <div class="card w-64 bg-base-100 shadow-xl">
            <figure class="h-48 bg-accent"></figure>
            <div class="card-body">
              <h4 class="card-title">Product 3</h4>
              <p class="text-sm opacity-70">Description of product 3</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
          
          <div class="card w-64 bg-base-100 shadow-xl">
            <figure class="h-48 bg-info"></figure>
            <div class="card-body">
              <h4 class="card-title">Product 4</h4>
              <p class="text-sm opacity-70">Description of product 4</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        </Stack>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};const C=["Default","Horizontal","Spacing","Alignment","Justify","Wrap","Reverse","FormLayout","CardGrid"];export{r as Alignment,v as CardGrid,s as Default,p as FormLayout,c as Horizontal,o as Justify,l as Reverse,d as Spacing,i as Wrap,C as __namedExportsOrder,j as default};
