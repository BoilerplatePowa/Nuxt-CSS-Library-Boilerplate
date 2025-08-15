import{d as u,c as b,a as m,e as d,n as T,o as f}from"./iframe-B-dz0hg_.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const v=["data-tip"],l=u({__name:"Tooltip",props:{tip:{},position:{default:"top"},variant:{},open:{type:Boolean}},setup(n){const o=n,c=b(()=>{const t=["tooltip"];return o.position==="bottom"?t.push("tooltip-bottom"):o.position==="left"?t.push("tooltip-left"):o.position==="right"&&t.push("tooltip-right"),o.variant==="primary"?t.push("tooltip-primary"):o.variant==="secondary"?t.push("tooltip-secondary"):o.variant==="accent"?t.push("tooltip-accent"):o.variant==="info"?t.push("tooltip-info"):o.variant==="success"?t.push("tooltip-success"):o.variant==="warning"?t.push("tooltip-warning"):o.variant==="error"&&t.push("tooltip-error"),o.open&&t.push("tooltip-open"),t.join(" ")});return(t,y)=>(f(),m("div",{class:T(c.value),"data-tip":t.tip},[d(t.$slots,"default",{},void 0,!0)],10,v))}}),e=g(l,[["__scopeId","data-v-9af84fb7"]]);l.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"tip",required:!0,type:{name:"string"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'},{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'top'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"info"'},{name:'"success"'},{name:'"warning"'},{name:'"error"'}]}},{name:"open",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Feedback/Tooltip.vue"]};const S={title:"Feedback/Tooltip",component:e,parameters:{layout:"centered"},argTypes:{position:{control:{type:"select"},options:["top","bottom","left","right"]},variant:{control:{type:"select"},options:["primary","secondary","accent","info","success","warning","error"]},open:{control:{type:"boolean"}}}},i={args:{tip:"This is a tooltip"},render:n=>({components:{Tooltip:e},setup(){return{args:n}},template:`
      <Tooltip v-bind="args">
        <button class="btn">Hover me</button>
      </Tooltip>
    `})},s={render:()=>({components:{Tooltip:e},template:`
      <div class="flex flex-col gap-8 items-center">
        <Tooltip tip="Top tooltip" position="top">
          <button class="btn">Top</button>
        </Tooltip>
        
        <div class="flex gap-8 items-center">
          <Tooltip tip="Left tooltip" position="left">
            <button class="btn">Left</button>
          </Tooltip>
          
          <Tooltip tip="Right tooltip" position="right">
            <button class="btn">Right</button>
          </Tooltip>
        </div>
        
        <Tooltip tip="Bottom tooltip" position="bottom">
          <button class="btn">Bottom</button>
        </Tooltip>
      </div>
    `})},a={render:()=>({components:{Tooltip:e},template:`
      <div class="flex flex-wrap gap-4">
        <Tooltip tip="Primary tooltip" variant="primary">
          <button class="btn btn-primary">Primary</button>
        </Tooltip>
        
        <Tooltip tip="Secondary tooltip" variant="secondary">
          <button class="btn btn-secondary">Secondary</button>
        </Tooltip>
        
        <Tooltip tip="Accent tooltip" variant="accent">
          <button class="btn btn-accent">Accent</button>
        </Tooltip>
        
        <Tooltip tip="Info tooltip" variant="info">
          <button class="btn btn-info">Info</button>
        </Tooltip>
        
        <Tooltip tip="Success tooltip" variant="success">
          <button class="btn btn-success">Success</button>
        </Tooltip>
        
        <Tooltip tip="Warning tooltip" variant="warning">
          <button class="btn btn-warning">Warning</button>
        </Tooltip>
        
        <Tooltip tip="Error tooltip" variant="error">
          <button class="btn btn-error">Error</button>
        </Tooltip>
      </div>
    `})},r={args:{tip:"This tooltip is always visible",open:!0},render:n=>({components:{Tooltip:e},setup(){return{args:n}},template:`
      <Tooltip v-bind="args">
        <button class="btn">Always visible tooltip</button>
      </Tooltip>
    `})},p={args:{tip:"This is a very long tooltip text that demonstrates how tooltips handle longer content gracefully"},render:n=>({components:{Tooltip:e},setup(){return{args:n}},template:`
      <Tooltip v-bind="args">
        <button class="btn">Long tooltip</button>
      </Tooltip>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tip: 'This is a tooltip'
  },
  render: args => ({
    components: {
      Tooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Tooltip v-bind="args">
        <button class="btn">Hover me</button>
      </Tooltip>
    \`
  })
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip
    },
    template: \`
      <div class="flex flex-col gap-8 items-center">
        <Tooltip tip="Top tooltip" position="top">
          <button class="btn">Top</button>
        </Tooltip>
        
        <div class="flex gap-8 items-center">
          <Tooltip tip="Left tooltip" position="left">
            <button class="btn">Left</button>
          </Tooltip>
          
          <Tooltip tip="Right tooltip" position="right">
            <button class="btn">Right</button>
          </Tooltip>
        </div>
        
        <Tooltip tip="Bottom tooltip" position="bottom">
          <button class="btn">Bottom</button>
        </Tooltip>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tooltip
    },
    template: \`
      <div class="flex flex-wrap gap-4">
        <Tooltip tip="Primary tooltip" variant="primary">
          <button class="btn btn-primary">Primary</button>
        </Tooltip>
        
        <Tooltip tip="Secondary tooltip" variant="secondary">
          <button class="btn btn-secondary">Secondary</button>
        </Tooltip>
        
        <Tooltip tip="Accent tooltip" variant="accent">
          <button class="btn btn-accent">Accent</button>
        </Tooltip>
        
        <Tooltip tip="Info tooltip" variant="info">
          <button class="btn btn-info">Info</button>
        </Tooltip>
        
        <Tooltip tip="Success tooltip" variant="success">
          <button class="btn btn-success">Success</button>
        </Tooltip>
        
        <Tooltip tip="Warning tooltip" variant="warning">
          <button class="btn btn-warning">Warning</button>
        </Tooltip>
        
        <Tooltip tip="Error tooltip" variant="error">
          <button class="btn btn-error">Error</button>
        </Tooltip>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tip: 'This tooltip is always visible',
    open: true
  },
  render: args => ({
    components: {
      Tooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Tooltip v-bind="args">
        <button class="btn">Always visible tooltip</button>
      </Tooltip>
    \`
  })
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tip: 'This is a very long tooltip text that demonstrates how tooltips handle longer content gracefully'
  },
  render: args => ({
    components: {
      Tooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Tooltip v-bind="args">
        <button class="btn">Long tooltip</button>
      </Tooltip>
    \`
  })
}`,...p.parameters?.docs?.source}}};const _=["Default","Positions","Variants","AlwaysOpen","LongText"];export{r as AlwaysOpen,i as Default,p as LongText,s as Positions,a as Variants,_ as __namedExportsOrder,S as default};
