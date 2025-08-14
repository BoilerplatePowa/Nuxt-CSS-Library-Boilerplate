import{d as m,c as u,a as f,e as x,n as D,o as y,s as h,t as C}from"./iframe-D9U34DAu.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const v=m({__name:"Divider",props:{text:{},orientation:{default:"horizontal"},variant:{default:"neutral"},position:{default:"center"}},setup(p){const n=p,l=u(()=>{const e=["divider"];return n.orientation==="vertical"?e.push("divider-vertical"):e.push("divider-horizontal"),n.variant==="primary"?e.push("divider-primary"):n.variant==="secondary"?e.push("divider-secondary"):n.variant==="accent"?e.push("divider-accent"):n.variant==="success"?e.push("divider-success"):n.variant==="warning"?e.push("divider-warning"):n.variant==="info"?e.push("divider-info"):n.variant==="error"?e.push("divider-error"):n.variant==="neutral"&&e.push("divider-neutral"),n.orientation==="horizontal"&&(n.position==="start"?e.push("divider-start"):n.position==="end"&&e.push("divider-end")),e.join(" ")});return(e,b)=>(y(),f("div",{class:D(l.value)},[x(e.$slots,"default",{},()=>[h(C(e.text),1)],!0)],2))}}),t=g(v,[["__scopeId","data-v-23c9e30f"]]);v.__docgenInfo={exportName:"default",displayName:"Divider",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"}},{name:"orientation",required:!1,type:{name:"union",elements:[{name:'"horizontal"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'horizontal'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"neutral"'},{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"success"'},{name:'"warning"'},{name:'"info"'},{name:'"error"'}]},defaultValue:{func:!1,value:"'neutral'"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"center"'},{name:'"end"'}]},defaultValue:{func:!1,value:"'center'"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Layout/Divider.vue"]};const P={title:"Layout/Divider",component:t,parameters:{layout:"padded"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},variant:{control:{type:"select"},options:["neutral","primary","secondary","accent","success","warning","info","error"]},position:{control:{type:"select"},options:["start","center","end"]}}},i={render:()=>({components:{Divider:t},template:`
      <div>
        <p>Content above the divider</p>
        <Divider />
        <p>Content below the divider</p>
      </div>
    `})},r={args:{text:"OR"},render:p=>({components:{Divider:t},setup(){return{args:p}},template:`
      <div>
        <p>Login with your account</p>
        <Divider v-bind="args" />
        <p>Create a new account</p>
      </div>
    `})},a={render:()=>({components:{Divider:t},template:`
      <div class="flex items-center h-32">
        <div class="flex-1 text-center">
          <p>Left content</p>
        </div>
        <Divider orientation="vertical" />
        <div class="flex-1 text-center">
          <p>Right content</p>
        </div>
      </div>
    `})},o={render:()=>({components:{Divider:t},template:`
      <div class="flex items-center h-32">
        <div class="flex-1 text-center">
          <p>Section A</p>
        </div>
        <Divider orientation="vertical" text="OR" />
        <div class="flex-1 text-center">
          <p>Section B</p>
        </div>
      </div>
    `})},s={render:()=>({components:{Divider:t},template:`
      <div class="space-y-8">
        <div>
          <p>Content above</p>
          <Divider text="Start Position" position="start" />
          <p>Content below</p>
        </div>
        
        <div>
          <p>Content above</p>
          <Divider text="Center Position" position="center" />
          <p>Content below</p>
        </div>
        
        <div>
          <p>Content above</p>
          <Divider text="End Position" position="end" />
          <p>Content below</p>
        </div>
      </div>
    `})},d={render:()=>({components:{Divider:t},template:`
      <div class="space-y-6">
        <div>
          <Divider text="Primary" variant="primary" />
        </div>
        <div>
          <Divider text="Secondary" variant="secondary" />
        </div>
        <div>
          <Divider text="Accent" variant="accent" />
        </div>
        <div>
          <Divider text="Success" variant="success" />
        </div>
        <div>
          <Divider text="Warning" variant="warning" />
        </div>
        <div>
          <Divider text="Info" variant="info" />
        </div>
        <div>
          <Divider text="Error" variant="error" />
        </div>
      </div>
    `})},c={render:()=>({components:{Divider:t},template:`
      <div>
        <p>Custom content in divider</p>
        <Divider>
          <span class="bg-base-100 px-4 text-sm font-medium">🎉 Custom Content 🎉</span>
        </Divider>
        <p>More content below</p>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider
    },
    template: \`
      <div>
        <p>Content above the divider</p>
        <Divider />
        <p>Content below the divider</p>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'OR'
  },
  render: args => ({
    components: {
      Divider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <p>Login with your account</p>
        <Divider v-bind="args" />
        <p>Create a new account</p>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider
    },
    template: \`
      <div class="flex items-center h-32">
        <div class="flex-1 text-center">
          <p>Left content</p>
        </div>
        <Divider orientation="vertical" />
        <div class="flex-1 text-center">
          <p>Right content</p>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider
    },
    template: \`
      <div class="flex items-center h-32">
        <div class="flex-1 text-center">
          <p>Section A</p>
        </div>
        <Divider orientation="vertical" text="OR" />
        <div class="flex-1 text-center">
          <p>Section B</p>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider
    },
    template: \`
      <div class="space-y-8">
        <div>
          <p>Content above</p>
          <Divider text="Start Position" position="start" />
          <p>Content below</p>
        </div>
        
        <div>
          <p>Content above</p>
          <Divider text="Center Position" position="center" />
          <p>Content below</p>
        </div>
        
        <div>
          <p>Content above</p>
          <Divider text="End Position" position="end" />
          <p>Content below</p>
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider
    },
    template: \`
      <div class="space-y-6">
        <div>
          <Divider text="Primary" variant="primary" />
        </div>
        <div>
          <Divider text="Secondary" variant="secondary" />
        </div>
        <div>
          <Divider text="Accent" variant="accent" />
        </div>
        <div>
          <Divider text="Success" variant="success" />
        </div>
        <div>
          <Divider text="Warning" variant="warning" />
        </div>
        <div>
          <Divider text="Info" variant="info" />
        </div>
        <div>
          <Divider text="Error" variant="error" />
        </div>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Divider
    },
    template: \`
      <div>
        <p>Custom content in divider</p>
        <Divider>
          <span class="bg-base-100 px-4 text-sm font-medium">🎉 Custom Content 🎉</span>
        </Divider>
        <p>More content below</p>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const V=["Default","WithText","Vertical","VerticalWithText","Positions","Variants","CustomContent"];export{c as CustomContent,i as Default,s as Positions,d as Variants,a as Vertical,o as VerticalWithText,r as WithText,V as __namedExportsOrder,P as default};
