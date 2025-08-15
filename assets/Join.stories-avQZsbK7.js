import{d as p,c as m,a as v,e as h,n as j,o as f}from"./iframe-DJmXHO36.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const c=p({__name:"Join",props:{orientation:{default:"horizontal"},variant:{default:"default"}},setup(b){const r=b,u=m(()=>{const n=["join"];return r.orientation==="vertical"&&n.push("join-vertical"),r.variant==="rounded"&&n.push("join-rounded"),n.join(" ")});return(n,g)=>(f(),v("div",{class:j(u.value)},[h(n.$slots,"default",{},void 0,!0)],2))}}),t=y(c,[["__scopeId","data-v-8583b7a6"]]);c.__docgenInfo={exportName:"default",displayName:"Join",description:"",tags:{},props:[{name:"orientation",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'horizontal'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"rounded"'}]},defaultValue:{func:!1,value:"'default'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Layout/Join.vue"]};const B={title:"Layout/Join",component:t,parameters:{layout:"centered"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},variant:{control:{type:"select"},options:["default","rounded"]}}},o={render:()=>({components:{Join:t},template:`
      <Join>
        <button class="btn join-item">Button 1</button>
        <button class="btn join-item">Button 2</button>
        <button class="btn join-item">Button 3</button>
      </Join>
    `})},e={render:()=>({components:{Join:t},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Horizontal Button Group</h3>
          <Join>
            <button class="btn btn-primary join-item">Left</button>
            <button class="btn btn-primary join-item">Center</button>
            <button class="btn btn-primary join-item">Right</button>
          </Join>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Vertical Button Group</h3>
          <Join orientation="vertical">
            <button class="btn btn-secondary join-item">Top</button>
            <button class="btn btn-secondary join-item">Middle</button>
            <button class="btn btn-secondary join-item">Bottom</button>
          </Join>
        </div>
      </div>
    `})},a={render:()=>({components:{Join:t},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Search Input Group</h3>
          <Join>
            <input 
              class="input input-bordered join-item flex-1" 
              placeholder="Search..." 
            />
            <button class="btn btn-primary join-item">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </Join>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Email Input Group</h3>
          <Join>
            <span class="btn btn-disabled join-item">@</span>
            <input 
              class="input input-bordered join-item flex-1" 
              placeholder="username" 
            />
            <span class="btn btn-disabled join-item">@email.com</span>
          </Join>
        </div>
      </div>
    `})},s={render:()=>({components:{Join:t},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Horizontal Cards</h3>
          <Join>
            <div class="card bg-base-100 shadow-xl join-item">
              <div class="card-body">
                <h2 class="card-title">Card 1</h2>
                <p>Content for card 1</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl join-item">
              <div class="card-body">
                <h2 class="card-title">Card 2</h2>
                <p>Content for card 2</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl join-item">
              <div class="card-body">
                <h2 class="card-title">Card 3</h2>
                <p>Content for card 3</p>
              </div>
            </div>
          </Join>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Vertical Cards</h3>
          <Join orientation="vertical">
            <div class="card bg-base-100 shadow-xl join-item">
              <div class="card-body">
                <h2 class="card-title">Top Card</h2>
                <p>Content for top card</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl join-item">
              <div class="card-body">
                <h2 class="card-title">Middle Card</h2>
                <p>Content for middle card</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl join-item">
              <div class="card-body">
                <h2 class="card-title">Bottom Card</h2>
                <p>Content for bottom card</p>
              </div>
            </div>
          </Join>
        </div>
      </div>
    `})},i={render:()=>({components:{Join:t},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Statistics Group</h3>
          <Join>
            <div class="stat join-item bg-base-200">
              <div class="stat-title">Total Sales</div>
              <div class="stat-value text-primary">25.6K</div>
              <div class="stat-desc">21% more than last month</div>
            </div>
            <div class="stat join-item bg-base-200">
              <div class="stat-title">Total Users</div>
              <div class="stat-value text-secondary">2.6M</div>
              <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>
            <div class="stat join-item bg-base-200">
              <div class="stat-title">New Registers</div>
              <div class="stat-value text-accent">1,200</div>
              <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </Join>
        </div>
      </div>
    `})},d={render:()=>({components:{Join:t},data(){return{selectedOption:"option2"}},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Radio Button Group</h3>
          <Join>
            <input 
              class="join-item btn" 
              type="radio" 
              name="options" 
              value="option1"
              v-model="selectedOption"
              aria-label="Option 1" 
            />
            <input 
              class="join-item btn" 
              type="radio" 
              name="options" 
              value="option2"
              v-model="selectedOption"
              aria-label="Option 2" 
            />
            <input 
              class="join-item btn" 
              type="radio" 
              name="options" 
              value="option3"
              v-model="selectedOption"
              aria-label="Option 3" 
            />
          </Join>
          <p class="mt-2 text-sm">Selected: {{ selectedOption }}</p>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Size Toggle Group</h3>
          <Join>
            <button class="btn btn-outline join-item">S</button>
            <button class="btn btn-outline join-item btn-active">M</button>
            <button class="btn btn-outline join-item">L</button>
            <button class="btn btn-outline join-item">XL</button>
          </Join>
        </div>
      </div>
    `})},l={render:()=>({components:{Join:t},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default (Sharp Corners)</h3>
          <Join>
            <button class="btn btn-primary join-item">Button 1</button>
            <button class="btn btn-primary join-item">Button 2</button>
            <button class="btn btn-primary join-item">Button 3</button>
          </Join>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Rounded Corners</h3>
          <Join variant="rounded">
            <button class="btn btn-secondary join-item">Button 1</button>
            <button class="btn btn-secondary join-item">Button 2</button>
            <button class="btn btn-secondary join-item">Button 3</button>
          </Join>
        </div>
      </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Join
    },
    template: \`
      <Join>
        <button class="btn join-item">Button 1</button>
        <button class="btn join-item">Button 2</button>
        <button class="btn join-item">Button 3</button>
      </Join>
    \`
  })
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Join
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Horizontal Button Group</h3>
          <Join>
            <button class="btn btn-primary join-item">Left</button>
            <button class="btn btn-primary join-item">Center</button>
            <button class="btn btn-primary join-item">Right</button>
          </Join>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Vertical Button Group</h3>
          <Join orientation="vertical">
            <button class="btn btn-secondary join-item">Top</button>
            <button class="btn btn-secondary join-item">Middle</button>
            <button class="btn btn-secondary join-item">Bottom</button>
          </Join>
        </div>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Join
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Search Input Group</h3>
          <Join>
            <input 
              class="input input-bordered join-item flex-1" 
              placeholder="Search..." 
            />
            <button class="btn btn-primary join-item">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </Join>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Email Input Group</h3>
          <Join>
            <span class="btn btn-disabled join-item">@</span>
            <input 
              class="input input-bordered join-item flex-1" 
              placeholder="username" 
            />
            <span class="btn btn-disabled join-item">@email.com</span>
          </Join>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Join
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Horizontal Cards</h3>
          <Join>
            <div class="card bg-base-100 shadow-xl join-item">
              <div class="card-body">
                <h2 class="card-title">Card 1</h2>
                <p>Content for card 1</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl join-item">
              <div class="card-body">
                <h2 class="card-title">Card 2</h2>
                <p>Content for card 2</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl join-item">
              <div class="card-body">
                <h2 class="card-title">Card 3</h2>
                <p>Content for card 3</p>
              </div>
            </div>
          </Join>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Vertical Cards</h3>
          <Join orientation="vertical">
            <div class="card bg-base-100 shadow-xl join-item">
              <div class="card-body">
                <h2 class="card-title">Top Card</h2>
                <p>Content for top card</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl join-item">
              <div class="card-body">
                <h2 class="card-title">Middle Card</h2>
                <p>Content for middle card</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl join-item">
              <div class="card-body">
                <h2 class="card-title">Bottom Card</h2>
                <p>Content for bottom card</p>
              </div>
            </div>
          </Join>
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Join
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Statistics Group</h3>
          <Join>
            <div class="stat join-item bg-base-200">
              <div class="stat-title">Total Sales</div>
              <div class="stat-value text-primary">25.6K</div>
              <div class="stat-desc">21% more than last month</div>
            </div>
            <div class="stat join-item bg-base-200">
              <div class="stat-title">Total Users</div>
              <div class="stat-value text-secondary">2.6M</div>
              <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>
            <div class="stat join-item bg-base-200">
              <div class="stat-title">New Registers</div>
              <div class="stat-value text-accent">1,200</div>
              <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </Join>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Join
    },
    data() {
      return {
        selectedOption: 'option2'
      };
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Radio Button Group</h3>
          <Join>
            <input 
              class="join-item btn" 
              type="radio" 
              name="options" 
              value="option1"
              v-model="selectedOption"
              aria-label="Option 1" 
            />
            <input 
              class="join-item btn" 
              type="radio" 
              name="options" 
              value="option2"
              v-model="selectedOption"
              aria-label="Option 2" 
            />
            <input 
              class="join-item btn" 
              type="radio" 
              name="options" 
              value="option3"
              v-model="selectedOption"
              aria-label="Option 3" 
            />
          </Join>
          <p class="mt-2 text-sm">Selected: {{ selectedOption }}</p>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Size Toggle Group</h3>
          <Join>
            <button class="btn btn-outline join-item">S</button>
            <button class="btn btn-outline join-item btn-active">M</button>
            <button class="btn btn-outline join-item">L</button>
            <button class="btn btn-outline join-item">XL</button>
          </Join>
        </div>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Join
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default (Sharp Corners)</h3>
          <Join>
            <button class="btn btn-primary join-item">Button 1</button>
            <button class="btn btn-primary join-item">Button 2</button>
            <button class="btn btn-primary join-item">Button 3</button>
          </Join>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Rounded Corners</h3>
          <Join variant="rounded">
            <button class="btn btn-secondary join-item">Button 1</button>
            <button class="btn btn-secondary join-item">Button 2</button>
            <button class="btn btn-secondary join-item">Button 3</button>
          </Join>
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};const S=["Default","ButtonGroup","InputGroup","CardGroup","Statistics","RadioGroup","Rounded"];export{e as ButtonGroup,s as CardGroup,o as Default,a as InputGroup,d as RadioGroup,l as Rounded,i as Statistics,S as __namedExportsOrder,B as default};
