import{K as e}from"./Kbd-D8E5j9kw.js";import"./iframe-BrsdVXSx.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Data Display/Kbd",component:e,parameters:{layout:"centered",docs:{description:{component:"Keyboard key representation component for displaying keyboard shortcuts and key combinations."}}},argTypes:{key:{control:"text",description:"The key or key combination to display"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Size of the keyboard key"},variant:{control:{type:"select"},options:["default","primary","secondary","accent"],description:"Visual style variant"}},tags:["autodocs"]},s={args:{key:"Enter"}},n={render:()=>({components:{Kbd:e},template:`
      <div class="flex flex-wrap gap-2">
        <Kbd key="A" />
        <Kbd key="B" />
        <Kbd key="C" />
        <Kbd key="1" />
        <Kbd key="2" />
        <Kbd key="3" />
        <Kbd key="Space" />
        <Kbd key="Enter" />
        <Kbd key="Tab" />
        <Kbd key="Esc" />
        <Kbd key="Shift" />
        <Kbd key="Ctrl" />
        <Kbd key="Alt" />
        <Kbd key="Cmd" />
      </div>
    `})},a={render:()=>({components:{Kbd:e},template:`
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span>Copy:</span>
          <Kbd key="Ctrl" />
          <span>+</span>
          <Kbd key="C" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Paste:</span>
          <Kbd key="Ctrl" />
          <span>+</span>
          <Kbd key="V" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Save:</span>
          <Kbd key="Ctrl" />
          <span>+</span>
          <Kbd key="S" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Select All:</span>
          <Kbd key="Ctrl" />
          <span>+</span>
          <Kbd key="A" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Undo:</span>
          <Kbd key="Ctrl" />
          <span>+</span>
          <Kbd key="Z" />
        </div>
      </div>
    `})},t={render:()=>({components:{Kbd:e},template:`
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span>Extra Small:</span>
          <Kbd key="Ctrl" size="xs" />
          <span>+</span>
          <Kbd key="C" size="xs" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Small:</span>
          <Kbd key="Ctrl" size="sm" />
          <span>+</span>
          <Kbd key="C" size="sm" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Medium:</span>
          <Kbd key="Ctrl" size="md" />
          <span>+</span>
          <Kbd key="C" size="md" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Large:</span>
          <Kbd key="Ctrl" size="lg" />
          <span>+</span>
          <Kbd key="C" size="lg" />
        </div>
      </div>
    `})},i={render:()=>({components:{Kbd:e},template:`
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span>Default:</span>
          <Kbd key="Enter" variant="default" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Primary:</span>
          <Kbd key="Enter" variant="primary" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Secondary:</span>
          <Kbd key="Enter" variant="secondary" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Accent:</span>
          <Kbd key="Enter" variant="accent" />
        </div>
      </div>
    `})},d={render:()=>({components:{Kbd:e},template:`
      <div class="max-w-md">
        <h3 class="text-lg font-semibold mb-4">Keyboard Shortcuts</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center p-3 bg-base-200 rounded-lg">
            <span>New File</span>
            <div class="flex items-center gap-1">
              <Kbd key="Ctrl" size="sm" />
              <span class="text-xs">+</span>
              <Kbd key="N" size="sm" />
            </div>
          </div>
          
          <div class="flex justify-between items-center p-3 bg-base-200 rounded-lg">
            <span>Open File</span>
            <div class="flex items-center gap-1">
              <Kbd key="Ctrl" size="sm" />
              <span class="text-xs">+</span>
              <Kbd key="O" size="sm" />
            </div>
          </div>
          
          <div class="flex justify-between items-center p-3 bg-base-200 rounded-lg">
            <span>Find</span>
            <div class="flex items-center gap-1">
              <Kbd key="Ctrl" size="sm" />
              <span class="text-xs">+</span>
              <Kbd key="F" size="sm" />
            </div>
          </div>
          
          <div class="flex justify-between items-center p-3 bg-base-200 rounded-lg">
            <span>Find & Replace</span>
            <div class="flex items-center gap-1">
              <Kbd key="Ctrl" size="sm" />
              <span class="text-xs">+</span>
              <Kbd key="H" size="sm" />
            </div>
          </div>
          
          <div class="flex justify-between items-center p-3 bg-base-200 rounded-lg">
            <span>Command Palette</span>
            <div class="flex items-center gap-1">
              <Kbd key="Ctrl" size="sm" />
              <span class="text-xs">+</span>
              <Kbd key="Shift" size="sm" />
              <span class="text-xs">+</span>
              <Kbd key="P" size="sm" />
            </div>
          </div>
        </div>
      </div>
    `})},r={render:()=>({components:{Kbd:e},template:`
      <div class="text-center space-y-4">
        <h4 class="text-lg font-semibold">Navigation Keys</h4>
        
        <div class="grid grid-cols-3 gap-2 w-40 mx-auto">
          <div></div>
          <Kbd key="↑" />
          <div></div>
          <Kbd key="←" />
          <Kbd key="↓" />
          <Kbd key="→" />
        </div>
        
        <div class="text-sm text-gray-600">
          Use arrow keys to navigate
        </div>
      </div>
    `})},p={render:()=>({components:{Kbd:e},template:`
      <div class="space-y-4">
        <h4 class="text-lg font-semibold">Function Keys</h4>
        
        <div class="grid grid-cols-6 gap-2">
          <Kbd key="F1" size="sm" />
          <Kbd key="F2" size="sm" />
          <Kbd key="F3" size="sm" />
          <Kbd key="F4" size="sm" />
          <Kbd key="F5" size="sm" />
          <Kbd key="F6" size="sm" />
          <Kbd key="F7" size="sm" />
          <Kbd key="F8" size="sm" />
          <Kbd key="F9" size="sm" />
          <Kbd key="F10" size="sm" />
          <Kbd key="F11" size="sm" />
          <Kbd key="F12" size="sm" />
        </div>
        
        <div class="text-sm text-gray-600">
          Press <Kbd key="F5" size="xs" /> to refresh
        </div>
      </div>
    `})},c={render:()=>({components:{Kbd:e},template:`
      <div class="max-w-sm mx-auto">
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-4 text-center">Game Controls</h3>
          
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span>Move</span>
              <div class="flex gap-1">
                <Kbd key="W" size="sm" variant="primary" />
                <Kbd key="A" size="sm" variant="primary" />
                <Kbd key="S" size="sm" variant="primary" />
                <Kbd key="D" size="sm" variant="primary" />
              </div>
            </div>
            
            <div class="flex justify-between items-center">
              <span>Jump</span>
              <Kbd key="Space" size="sm" variant="accent" />
            </div>
            
            <div class="flex justify-between items-center">
              <span>Sprint</span>
              <Kbd key="Shift" size="sm" variant="secondary" />
            </div>
            
            <div class="flex justify-between items-center">
              <span>Interact</span>
              <Kbd key="E" size="sm" variant="accent" />
            </div>
            
            <div class="flex justify-between items-center">
              <span>Menu</span>
              <Kbd key="Esc" size="sm" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    key: 'Enter'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Kbd
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <Kbd key="A" />
        <Kbd key="B" />
        <Kbd key="C" />
        <Kbd key="1" />
        <Kbd key="2" />
        <Kbd key="3" />
        <Kbd key="Space" />
        <Kbd key="Enter" />
        <Kbd key="Tab" />
        <Kbd key="Esc" />
        <Kbd key="Shift" />
        <Kbd key="Ctrl" />
        <Kbd key="Alt" />
        <Kbd key="Cmd" />
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Kbd
    },
    template: \`
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span>Copy:</span>
          <Kbd key="Ctrl" />
          <span>+</span>
          <Kbd key="C" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Paste:</span>
          <Kbd key="Ctrl" />
          <span>+</span>
          <Kbd key="V" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Save:</span>
          <Kbd key="Ctrl" />
          <span>+</span>
          <Kbd key="S" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Select All:</span>
          <Kbd key="Ctrl" />
          <span>+</span>
          <Kbd key="A" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Undo:</span>
          <Kbd key="Ctrl" />
          <span>+</span>
          <Kbd key="Z" />
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Kbd
    },
    template: \`
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span>Extra Small:</span>
          <Kbd key="Ctrl" size="xs" />
          <span>+</span>
          <Kbd key="C" size="xs" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Small:</span>
          <Kbd key="Ctrl" size="sm" />
          <span>+</span>
          <Kbd key="C" size="sm" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Medium:</span>
          <Kbd key="Ctrl" size="md" />
          <span>+</span>
          <Kbd key="C" size="md" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Large:</span>
          <Kbd key="Ctrl" size="lg" />
          <span>+</span>
          <Kbd key="C" size="lg" />
        </div>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Kbd
    },
    template: \`
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span>Default:</span>
          <Kbd key="Enter" variant="default" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Primary:</span>
          <Kbd key="Enter" variant="primary" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Secondary:</span>
          <Kbd key="Enter" variant="secondary" />
        </div>
        
        <div class="flex items-center gap-2">
          <span>Accent:</span>
          <Kbd key="Enter" variant="accent" />
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Kbd
    },
    template: \`
      <div class="max-w-md">
        <h3 class="text-lg font-semibold mb-4">Keyboard Shortcuts</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center p-3 bg-base-200 rounded-lg">
            <span>New File</span>
            <div class="flex items-center gap-1">
              <Kbd key="Ctrl" size="sm" />
              <span class="text-xs">+</span>
              <Kbd key="N" size="sm" />
            </div>
          </div>
          
          <div class="flex justify-between items-center p-3 bg-base-200 rounded-lg">
            <span>Open File</span>
            <div class="flex items-center gap-1">
              <Kbd key="Ctrl" size="sm" />
              <span class="text-xs">+</span>
              <Kbd key="O" size="sm" />
            </div>
          </div>
          
          <div class="flex justify-between items-center p-3 bg-base-200 rounded-lg">
            <span>Find</span>
            <div class="flex items-center gap-1">
              <Kbd key="Ctrl" size="sm" />
              <span class="text-xs">+</span>
              <Kbd key="F" size="sm" />
            </div>
          </div>
          
          <div class="flex justify-between items-center p-3 bg-base-200 rounded-lg">
            <span>Find & Replace</span>
            <div class="flex items-center gap-1">
              <Kbd key="Ctrl" size="sm" />
              <span class="text-xs">+</span>
              <Kbd key="H" size="sm" />
            </div>
          </div>
          
          <div class="flex justify-between items-center p-3 bg-base-200 rounded-lg">
            <span>Command Palette</span>
            <div class="flex items-center gap-1">
              <Kbd key="Ctrl" size="sm" />
              <span class="text-xs">+</span>
              <Kbd key="Shift" size="sm" />
              <span class="text-xs">+</span>
              <Kbd key="P" size="sm" />
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Kbd
    },
    template: \`
      <div class="text-center space-y-4">
        <h4 class="text-lg font-semibold">Navigation Keys</h4>
        
        <div class="grid grid-cols-3 gap-2 w-40 mx-auto">
          <div></div>
          <Kbd key="↑" />
          <div></div>
          <Kbd key="←" />
          <Kbd key="↓" />
          <Kbd key="→" />
        </div>
        
        <div class="text-sm text-gray-600">
          Use arrow keys to navigate
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Kbd
    },
    template: \`
      <div class="space-y-4">
        <h4 class="text-lg font-semibold">Function Keys</h4>
        
        <div class="grid grid-cols-6 gap-2">
          <Kbd key="F1" size="sm" />
          <Kbd key="F2" size="sm" />
          <Kbd key="F3" size="sm" />
          <Kbd key="F4" size="sm" />
          <Kbd key="F5" size="sm" />
          <Kbd key="F6" size="sm" />
          <Kbd key="F7" size="sm" />
          <Kbd key="F8" size="sm" />
          <Kbd key="F9" size="sm" />
          <Kbd key="F10" size="sm" />
          <Kbd key="F11" size="sm" />
          <Kbd key="F12" size="sm" />
        </div>
        
        <div class="text-sm text-gray-600">
          Press <Kbd key="F5" size="xs" /> to refresh
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Kbd
    },
    template: \`
      <div class="max-w-sm mx-auto">
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-4 text-center">Game Controls</h3>
          
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span>Move</span>
              <div class="flex gap-1">
                <Kbd key="W" size="sm" variant="primary" />
                <Kbd key="A" size="sm" variant="primary" />
                <Kbd key="S" size="sm" variant="primary" />
                <Kbd key="D" size="sm" variant="primary" />
              </div>
            </div>
            
            <div class="flex justify-between items-center">
              <span>Jump</span>
              <Kbd key="Space" size="sm" variant="accent" />
            </div>
            
            <div class="flex justify-between items-center">
              <span>Sprint</span>
              <Kbd key="Shift" size="sm" variant="secondary" />
            </div>
            
            <div class="flex justify-between items-center">
              <span>Interact</span>
              <Kbd key="E" size="sm" variant="accent" />
            </div>
            
            <div class="flex justify-between items-center">
              <span>Menu</span>
              <Kbd key="Esc" size="sm" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const v=["Default","SingleKeys","KeyCombinations","Sizes","Variants","KeyboardShortcuts","ArrowKeys","FunctionKeys","GameControls"];export{r as ArrowKeys,s as Default,p as FunctionKeys,c as GameControls,a as KeyCombinations,d as KeyboardShortcuts,n as SingleKeys,t as Sizes,i as Variants,v as __namedExportsOrder,b as default};
