import{d as F,r as j,c as h,a as s,b as u,w as A,e as S,n as l,v as E,o as i,t as D,F as N,f as P,g as K}from"./iframe-BrsdVXSx.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const W=["href","onClick"],$=["disabled","onClick"],_=F({__name:"Dropdown",props:{items:{default:()=>[]},triggerText:{},position:{default:"bottom"},align:{default:"start"},hover:{type:Boolean,default:!1},forceOpen:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"ghost"}},emits:["item-click","open","close"],setup(a,{emit:B}){const t=a,d=B,r=j(!1),H=h(()=>{const e=["dropdown"];return t.position==="top"?e.push("dropdown-top"):t.position==="left"?e.push("dropdown-left"):t.position==="right"&&e.push("dropdown-right"),t.align==="end"&&e.push("dropdown-end"),t.hover&&e.push("dropdown-hover"),(t.forceOpen||r.value)&&e.push("dropdown-open"),e.join(" ")}),z=h(()=>{const e=["btn","flex","items-center"];return t.size==="xs"?e.push("btn-xs"):t.size==="sm"?e.push("btn-sm"):t.size==="lg"&&e.push("btn-lg"),t.variant==="primary"?e.push("btn-primary"):t.variant==="secondary"?e.push("btn-secondary"):t.variant==="accent"?e.push("btn-accent"):t.variant==="ghost"?e.push("btn-ghost"):t.variant==="outline"&&e.push("btn-outline"),t.disabled&&e.push("btn-disabled"),e.join(" ")}),T=h(()=>["dropdown-content","menu","bg-base-100","rounded-box","z-[1]","w-52","p-2","shadow"]),y=()=>{t.disabled||(r.value=!r.value,r.value?d("open"):d("close"))},w=()=>{r.value&&(r.value=!1,d("close"))},q=async e=>{await K(),e.currentTarget.contains(document.activeElement)||w()},L=e=>{e.key==="Enter"||e.key===" "?(e.preventDefault(),y()):e.key==="Escape"&&w()},V=e=>{const n=e.target;n.hasAttribute("disabled")||n.classList.contains("menu-title")||w()},I=(e,n)=>{if(e.disabled){n.preventDefault();return}d("item-click",e,n)},O=e=>typeof e=="string"?e:e.value?.toString()||e.label,k=e=>typeof e=="string"?e:e.label,x=e=>{if(typeof e!="string")return e.href},M=e=>typeof e=="string"?!1:e.disabled||!1,C=e=>{const n=[];return typeof e=="object"&&(e.active&&n.push("active"),e.disabled&&n.push("disabled")),n.join(" ")};return(e,n)=>(i(),s("div",{class:l(H.value),onFocusout:q},[u("div",{tabindex:"0",role:"button",class:l(z.value),onClick:y,onKeydown:L},[S(e.$slots,"trigger",{},()=>[u("span",null,D(e.triggerText||"Dropdown"),1),(i(),s("svg",{class:l(["w-2.5 h-2.5 ml-2.5 transition-transform",{"rotate-180":r.value}]),"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},n[0]||(n[0]=[u("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 4 4 4-4"},null,-1)]),2))],!0)],34),A(u("ul",{tabindex:"0",class:l(T.value),onClick:V},[S(e.$slots,"default",{},()=>[(i(!0),s(N,null,P(e.items,o=>(i(),s("li",{key:O(o)},[x(o)?(i(),s("a",{key:0,href:x(o),class:l(C(o)),onClick:v=>I(o,v)},D(k(o)),11,W)):(i(),s("button",{key:1,type:"button",class:l(C(o)),disabled:M(o),onClick:v=>I(o,v)},D(k(o)),11,$))]))),128))],!0)],2),[[E,r.value]])],34))}}),p=R(_,[["__scopeId","data-v-c74100d2"]]);_.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"items",required:!1,type:{name:"Array",elements:[{name:"DropdownItem"}]},defaultValue:{func:!1,value:"() => []"}},{name:"triggerText",required:!1,type:{name:"string"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"bottom"'},{name:'"top"'},{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'bottom'"}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"end"'}]},defaultValue:{func:!1,value:"'start'"}},{name:"hover",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"forceOpen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"ghost"'},{name:'"outline"'}]},defaultValue:{func:!1,value:"'ghost'"}}],events:[{name:"item-click",type:{names:["DropdownItem"]}},{name:"open"},{name:"close"}],slots:[{name:"trigger"},{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/Dropdown.vue"]};const U={title:"Actions/Dropdown",component:p,parameters:{layout:"centered",docs:{description:{component:"Interactive dropdown menu component with customizable trigger and positioning."}}},argTypes:{triggerText:{control:"text",description:"Text for the default trigger button"},position:{control:{type:"select"},options:["bottom","top","left","right"],description:"Position of the dropdown relative to trigger"},align:{control:{type:"select"},options:["start","end"],description:"Alignment of the dropdown"},hover:{control:"boolean",description:"Open dropdown on hover instead of click"},forceOpen:{control:"boolean",description:"Force dropdown to stay open"},disabled:{control:"boolean",description:"Disable the dropdown"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Dropdown size"},variant:{control:{type:"select"},options:["primary","secondary","accent","ghost","outline"],description:"Dropdown variant"}},tags:["autodocs"]},c={args:{},render:a=>({components:{Dropdown:p},setup(){return{args:a}},template:`
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-primary">Click me</button>
        </template>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </Dropdown>
    `})},m={args:{},render:a=>({components:{Dropdown:p},setup(){return{args:a}},template:`
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-ghost">Menu ▼</button>
        </template>
        <li><a>📧 Messages</a></li>
        <li><a>⚙️ Settings</a></li>
        <li><a>👤 Profile</a></li>
        <li><hr class="my-1"></li>
        <li><a class="text-error">🚪 Logout</a></li>
      </Dropdown>
    `})},g={render:()=>({components:{Dropdown:p},template:`
      <div class="flex gap-4 flex-wrap">
        <Dropdown position="bottom">
          <template #trigger>
            <button class="btn btn-outline">Bottom</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="top">
          <template #trigger>
            <button class="btn btn-outline">Top</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="left">
          <template #trigger>
            <button class="btn btn-outline">Left</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="right">
          <template #trigger>
            <button class="btn btn-outline">Right</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
      </div>
    `})},b={args:{hover:!0},render:a=>({components:{Dropdown:p},setup(){return{args:a}},template:`
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-secondary">Hover me</button>
        </template>
        <li><a>Hover Item 1</a></li>
        <li><a>Hover Item 2</a></li>
        <li><a>Hover Item 3</a></li>
      </Dropdown>
    `})},f={args:{disabled:!0},render:a=>({components:{Dropdown:p},setup(){return{args:a}},template:`
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-disabled">Disabled Dropdown</button>
        </template>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </Dropdown>
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Dropdown
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-primary">Click me</button>
        </template>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </Dropdown>
    \`
  })
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Dropdown
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-ghost">Menu ▼</button>
        </template>
        <li><a>📧 Messages</a></li>
        <li><a>⚙️ Settings</a></li>
        <li><a>👤 Profile</a></li>
        <li><hr class="my-1"></li>
        <li><a class="text-error">🚪 Logout</a></li>
      </Dropdown>
    \`
  })
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dropdown
    },
    template: \`
      <div class="flex gap-4 flex-wrap">
        <Dropdown position="bottom">
          <template #trigger>
            <button class="btn btn-outline">Bottom</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="top">
          <template #trigger>
            <button class="btn btn-outline">Top</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="left">
          <template #trigger>
            <button class="btn btn-outline">Left</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="right">
          <template #trigger>
            <button class="btn btn-outline">Right</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    hover: true
  },
  render: args => ({
    components: {
      Dropdown
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-secondary">Hover me</button>
        </template>
        <li><a>Hover Item 1</a></li>
        <li><a>Hover Item 2</a></li>
        <li><a>Hover Item 3</a></li>
      </Dropdown>
    \`
  })
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => ({
    components: {
      Dropdown
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-disabled">Disabled Dropdown</button>
        </template>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </Dropdown>
    \`
  })
}`,...f.parameters?.docs?.source}}};const X=["Default","WithIcons","Positions","HoverMode","Disabled"];export{c as Default,f as Disabled,b as HoverMode,g as Positions,m as WithIcons,X as __namedExportsOrder,U as default};
