import{d as y,c as u,a as p,b as s,l as f,t as h,e as w,n as v,o as g}from"./iframe-Cy2SohGF.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const M={class:"mockup-window-toolbar"},W={key:0,class:"mockup-window-title"},b=y({__name:"WindowMockup",props:{title:{},variant:{default:"default"},size:{default:"md"}},setup(l){const t=l,m=u(()=>{const e=["mockup-window"];return t.variant==="border"?e.push("border","bg-base-300"):t.variant==="bg"&&e.push("bg-base-300"),t.size==="sm"?e.push("max-w-sm"):t.size==="md"?e.push("max-w-md"):t.size==="lg"?e.push("max-w-lg"):t.size==="xl"&&e.push("max-w-xl"),e.join(" ")}),x=u(()=>["flex","justify-center","px-4","py-16","bg-base-200"].join(" "));return(e,c)=>(g(),p("div",{class:v(m.value)},[s("div",M,[c[0]||(c[0]=s("div",{class:"flex space-x-1"},[s("div",{class:"w-3 h-3 bg-red-500 rounded-full"}),s("div",{class:"w-3 h-3 bg-yellow-500 rounded-full"}),s("div",{class:"w-3 h-3 bg-green-500 rounded-full"})],-1)),e.title?(g(),p("div",W,h(e.title),1)):f("",!0)]),s("div",{class:v(x.value)},[w(e.$slots,"default",{},void 0,!0)],2)],2))}}),n=k(b,[["__scopeId","data-v-3ff9d134"]]);b.__docgenInfo={exportName:"default",displayName:"WindowMockup",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"border"'},{name:'"bg"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'}]},defaultValue:{func:!1,value:"'md'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Mockup/WindowMockup.vue"]};const j={title:"Mockup/WindowMockup",component:n,parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["default","border","bg"]},title:{control:{type:"text"}}}},o={args:{title:"My Application"},render:l=>({components:{WindowMockup:n},setup(){return{args:l}},template:`
      <WindowMockup v-bind="args">
        <div class="p-8 bg-gray-50 min-h-64 flex items-center justify-center">
          <div class="text-center">
            <h2 class="text-2xl font-bold mb-4">Desktop Application</h2>
            <p class="text-gray-600">This is a mockup of a desktop window interface</p>
          </div>
        </div>
      </WindowMockup>
    `})},a={render:()=>({components:{WindowMockup:n},template:`
      <WindowMockup title="TextEdit - Document.txt">
        <div class="bg-white h-80 p-4 font-mono text-sm">
          <div class="mb-4 pb-2 border-b flex items-center justify-between text-xs text-gray-500">
            <span>File Edit View Help</span>
            <span>Ln 1, Col 1</span>
          </div>
          <div class="leading-relaxed">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Sed do eiusmod tempor incididunt ut labore et dolore magna</div>
            <div>aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
            <div>ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div></div>
            <div>Duis aute irure dolor in reprehenderit in voluptate velit</div>
            <div>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</div>
            <div>occaecat cupidatat non proident, sunt in culpa qui officia</div>
            <div>deserunt mollit anim id est laborum.</div>
            <div class="bg-blue-100 inline">|</div>
          </div>
        </div>
      </WindowMockup>
    `})},i={render:()=>({components:{WindowMockup:n},template:`
      <WindowMockup title="Calculator" class="max-w-xs">
        <div class="bg-gray-800 text-white p-4">
          <!-- Display -->
          <div class="bg-black p-4 mb-4 text-right text-2xl font-mono rounded">
            123,456.78
          </div>
          
          <!-- Buttons -->
          <div class="grid grid-cols-4 gap-2">
            <button class="bg-gray-600 hover:bg-gray-500 p-3 rounded text-sm">C</button>
            <button class="bg-gray-600 hover:bg-gray-500 p-3 rounded text-sm">±</button>
            <button class="bg-gray-600 hover:bg-gray-500 p-3 rounded text-sm">%</button>
            <button class="bg-orange-500 hover:bg-orange-400 p-3 rounded text-sm">÷</button>
            
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">7</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">8</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">9</button>
            <button class="bg-orange-500 hover:bg-orange-400 p-3 rounded text-sm">×</button>
            
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">4</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">5</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">6</button>
            <button class="bg-orange-500 hover:bg-orange-400 p-3 rounded text-sm">−</button>
            
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">1</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">2</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">3</button>
            <button class="bg-orange-500 hover:bg-orange-400 p-3 rounded text-sm">+</button>
            
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm col-span-2">0</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">.</button>
            <button class="bg-orange-500 hover:bg-orange-400 p-3 rounded text-sm">=</button>
          </div>
        </div>
      </WindowMockup>
    `})},d={render:()=>({components:{WindowMockup:n},template:`
      <WindowMockup title="Messages - John Doe">
        <div class="flex h-80">
          <!-- Sidebar -->
          <div class="w-64 bg-gray-100 border-r">
            <div class="p-4 border-b">
              <input 
                type="text" 
                placeholder="Search conversations..."
                class="w-full px-3 py-2 text-sm border rounded-lg"
              />
            </div>
            <div class="overflow-y-auto">
              <div class="p-3 hover:bg-gray-200 border-b cursor-pointer bg-blue-50">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                    JD
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-medium text-sm">John Doe</div>
                    <div class="text-xs text-gray-500 truncate">Hey, how's the project going?</div>
                  </div>
                </div>
              </div>
              <div class="p-3 hover:bg-gray-200 border-b cursor-pointer">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                    JS
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-medium text-sm">Jane Smith</div>
                    <div class="text-xs text-gray-500 truncate">Meeting at 3pm tomorrow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Chat Area -->
          <div class="flex-1 flex flex-col">
            <!-- Messages -->
            <div class="flex-1 p-4 space-y-4 overflow-y-auto">
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                  JD
                </div>
                <div class="bg-gray-200 rounded-lg px-3 py-2 max-w-xs">
                  <div class="text-sm">Hey! How's the project going?</div>
                  <div class="text-xs text-gray-500 mt-1">2:30 PM</div>
                </div>
              </div>
              
              <div class="flex items-start space-x-3 justify-end">
                <div class="bg-blue-500 text-white rounded-lg px-3 py-2 max-w-xs">
                  <div class="text-sm">Going great! Just finished the mockup components.</div>
                  <div class="text-xs text-blue-200 mt-1">2:32 PM</div>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                  JD
                </div>
                <div class="bg-gray-200 rounded-lg px-3 py-2 max-w-xs">
                  <div class="text-sm">Awesome! Can't wait to see them.</div>
                  <div class="text-xs text-gray-500 mt-1">2:33 PM</div>
                </div>
              </div>
            </div>
            
            <!-- Input -->
            <div class="border-t p-4">
              <div class="flex space-x-3">
                <input 
                  type="text" 
                  placeholder="Type a message..."
                  class="flex-1 px-3 py-2 border rounded-lg"
                />
                <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </WindowMockup>
    `})},r={render:()=>({components:{WindowMockup:n},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <WindowMockup title="Default Window">
            <div class="p-6 text-center">
              <p>Default window mockup</p>
            </div>
          </WindowMockup>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Border</h3>
          <WindowMockup title="Bordered Window" variant="border">
            <div class="p-6 text-center">
              <p>Window with border styling</p>
            </div>
          </WindowMockup>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Background</h3>
          <WindowMockup title="Background Window" variant="bg">
            <div class="p-6 text-center">
              <p>Window with background styling</p>
            </div>
          </WindowMockup>
        </div>
      </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'My Application'
  },
  render: args => ({
    components: {
      WindowMockup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <WindowMockup v-bind="args">
        <div class="p-8 bg-gray-50 min-h-64 flex items-center justify-center">
          <div class="text-center">
            <h2 class="text-2xl font-bold mb-4">Desktop Application</h2>
            <p class="text-gray-600">This is a mockup of a desktop window interface</p>
          </div>
        </div>
      </WindowMockup>
    \`
  })
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WindowMockup
    },
    template: \`
      <WindowMockup title="TextEdit - Document.txt">
        <div class="bg-white h-80 p-4 font-mono text-sm">
          <div class="mb-4 pb-2 border-b flex items-center justify-between text-xs text-gray-500">
            <span>File Edit View Help</span>
            <span>Ln 1, Col 1</span>
          </div>
          <div class="leading-relaxed">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div>Sed do eiusmod tempor incididunt ut labore et dolore magna</div>
            <div>aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
            <div>ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div></div>
            <div>Duis aute irure dolor in reprehenderit in voluptate velit</div>
            <div>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</div>
            <div>occaecat cupidatat non proident, sunt in culpa qui officia</div>
            <div>deserunt mollit anim id est laborum.</div>
            <div class="bg-blue-100 inline">|</div>
          </div>
        </div>
      </WindowMockup>
    \`
  })
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WindowMockup
    },
    template: \`
      <WindowMockup title="Calculator" class="max-w-xs">
        <div class="bg-gray-800 text-white p-4">
          <!-- Display -->
          <div class="bg-black p-4 mb-4 text-right text-2xl font-mono rounded">
            123,456.78
          </div>
          
          <!-- Buttons -->
          <div class="grid grid-cols-4 gap-2">
            <button class="bg-gray-600 hover:bg-gray-500 p-3 rounded text-sm">C</button>
            <button class="bg-gray-600 hover:bg-gray-500 p-3 rounded text-sm">±</button>
            <button class="bg-gray-600 hover:bg-gray-500 p-3 rounded text-sm">%</button>
            <button class="bg-orange-500 hover:bg-orange-400 p-3 rounded text-sm">÷</button>
            
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">7</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">8</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">9</button>
            <button class="bg-orange-500 hover:bg-orange-400 p-3 rounded text-sm">×</button>
            
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">4</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">5</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">6</button>
            <button class="bg-orange-500 hover:bg-orange-400 p-3 rounded text-sm">−</button>
            
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">1</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">2</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">3</button>
            <button class="bg-orange-500 hover:bg-orange-400 p-3 rounded text-sm">+</button>
            
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm col-span-2">0</button>
            <button class="bg-gray-700 hover:bg-gray-600 p-3 rounded text-sm">.</button>
            <button class="bg-orange-500 hover:bg-orange-400 p-3 rounded text-sm">=</button>
          </div>
        </div>
      </WindowMockup>
    \`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WindowMockup
    },
    template: \`
      <WindowMockup title="Messages - John Doe">
        <div class="flex h-80">
          <!-- Sidebar -->
          <div class="w-64 bg-gray-100 border-r">
            <div class="p-4 border-b">
              <input 
                type="text" 
                placeholder="Search conversations..."
                class="w-full px-3 py-2 text-sm border rounded-lg"
              />
            </div>
            <div class="overflow-y-auto">
              <div class="p-3 hover:bg-gray-200 border-b cursor-pointer bg-blue-50">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                    JD
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-medium text-sm">John Doe</div>
                    <div class="text-xs text-gray-500 truncate">Hey, how's the project going?</div>
                  </div>
                </div>
              </div>
              <div class="p-3 hover:bg-gray-200 border-b cursor-pointer">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                    JS
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-medium text-sm">Jane Smith</div>
                    <div class="text-xs text-gray-500 truncate">Meeting at 3pm tomorrow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Chat Area -->
          <div class="flex-1 flex flex-col">
            <!-- Messages -->
            <div class="flex-1 p-4 space-y-4 overflow-y-auto">
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                  JD
                </div>
                <div class="bg-gray-200 rounded-lg px-3 py-2 max-w-xs">
                  <div class="text-sm">Hey! How's the project going?</div>
                  <div class="text-xs text-gray-500 mt-1">2:30 PM</div>
                </div>
              </div>
              
              <div class="flex items-start space-x-3 justify-end">
                <div class="bg-blue-500 text-white rounded-lg px-3 py-2 max-w-xs">
                  <div class="text-sm">Going great! Just finished the mockup components.</div>
                  <div class="text-xs text-blue-200 mt-1">2:32 PM</div>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                  JD
                </div>
                <div class="bg-gray-200 rounded-lg px-3 py-2 max-w-xs">
                  <div class="text-sm">Awesome! Can't wait to see them.</div>
                  <div class="text-xs text-gray-500 mt-1">2:33 PM</div>
                </div>
              </div>
            </div>
            
            <!-- Input -->
            <div class="border-t p-4">
              <div class="flex space-x-3">
                <input 
                  type="text" 
                  placeholder="Type a message..."
                  class="flex-1 px-3 py-2 border rounded-lg"
                />
                <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </WindowMockup>
    \`
  })
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      WindowMockup
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <WindowMockup title="Default Window">
            <div class="p-6 text-center">
              <p>Default window mockup</p>
            </div>
          </WindowMockup>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Border</h3>
          <WindowMockup title="Bordered Window" variant="border">
            <div class="p-6 text-center">
              <p>Window with border styling</p>
            </div>
          </WindowMockup>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Background</h3>
          <WindowMockup title="Background Window" variant="bg">
            <div class="p-6 text-center">
              <p>Window with background styling</p>
            </div>
          </WindowMockup>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};const J=["Default","TextEditor","Calculator","ChatApp","Variants"];export{i as Calculator,d as ChatApp,o as Default,a as TextEditor,r as Variants,J as __namedExportsOrder,j as default};
