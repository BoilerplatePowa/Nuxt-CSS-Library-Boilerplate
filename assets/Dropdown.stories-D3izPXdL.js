import{d as O,r as P,c as y,a as l,b as c,e as z,n as i,o as d,t as I,F,f as N,g as W}from"./iframe-Cy2SohGF.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const K=["tabindex","aria-disabled"],R=["href","onClick"],G=["disabled","onClick"],_=O({__name:"Dropdown",props:{items:{default:()=>[]},triggerText:{},position:{default:"bottom"},align:{default:"start"},hover:{type:Boolean,default:!1},forceOpen:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"ghost"}},emits:["item-click","open","close"],setup(t,{emit:k}){const n=t,p=k,s=P(!1),B=y(()=>{const e=["dropdown"];return n.position==="top"?e.push("dropdown-top"):n.position==="left"?e.push("dropdown-left"):n.position==="right"&&e.push("dropdown-right"),n.align==="end"&&e.push("dropdown-end"),n.hover&&e.push("dropdown-hover"),(n.forceOpen||s.value)&&e.push("dropdown-open"),e.join(" ")}),H=y(()=>{const e=["btn","flex","items-center"];return n.size==="xs"?e.push("btn-xs"):n.size==="sm"?e.push("btn-sm"):n.size==="lg"&&e.push("btn-lg"),n.variant==="primary"?e.push("btn-primary"):n.variant==="secondary"?e.push("btn-secondary"):n.variant==="accent"?e.push("btn-accent"):n.variant==="ghost"?e.push("btn-ghost"):n.variant==="outline"&&e.push("btn-outline"),n.disabled&&e.push("btn-disabled"),e.join(" ")}),L=y(()=>["dropdown-content","menu","bg-base-100","rounded-box","z-[1]","w-52","p-2","shadow"].join(" ")),x=()=>{n.disabled||(s.value=!s.value,s.value?p("open"):p("close"))},h=()=>{s.value&&(s.value=!1,p("close"))},q=async e=>{await W(),e.currentTarget.contains(document.activeElement)||h()},A=e=>{e.key==="Enter"||e.key===" "?(e.preventDefault(),x()):e.key==="Escape"&&h()},V=e=>{const o=e.target;o.hasAttribute("disabled")||o.classList.contains("menu-title")||h()},C=(e,o)=>{if(e.disabled){o.preventDefault();return}p("item-click",e,o)},j=e=>typeof e=="string"?e:e.value?.toString()||e.label,S=e=>typeof e=="string"?e:e.label,T=e=>{if(typeof e!="string")return e.href},E=e=>typeof e=="string"?!1:e.disabled||!1,M=e=>{const o=[];return typeof e=="object"&&(e.active&&o.push("active"),e.disabled&&o.push("disabled")),o.join(" ")};return(e,o)=>(d(),l("div",{class:i(B.value),onFocusout:q},[c("div",{tabindex:e.disabled?-1:0,role:"button",class:i(H.value),onClick:x,onKeydown:A,"aria-disabled":e.disabled},[z(e.$slots,"trigger",{},()=>[c("span",null,I(e.triggerText||"Dropdown"),1),(d(),l("svg",{class:i(["w-2.5 h-2.5 ml-2.5 transition-transform",{"rotate-180":s.value}]),"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},o[0]||(o[0]=[c("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 4 4 4-4"},null,-1)]),2))],!0)],42,K),c("ul",{tabindex:"0",class:i(L.value),onClick:V},[z(e.$slots,"default",{},()=>[(d(!0),l(F,null,N(e.items,a=>(d(),l("li",{key:j(a)},[T(a)?(d(),l("a",{key:0,href:T(a),class:i(M(a)),onClick:D=>C(a,D)},I(S(a)),11,R)):(d(),l("button",{key:1,type:"button",class:i(M(a)),disabled:E(a),onClick:D=>C(a,D)},I(S(a)),11,G))]))),128))],!0)],2)],34))}}),r=$(_,[["__scopeId","data-v-9283d52d"]]);_.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"items",required:!1,type:{name:"Array",elements:[{name:"DropdownItem"}]},defaultValue:{func:!1,value:"() => []"}},{name:"triggerText",required:!1,type:{name:"string"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"bottom"'},{name:'"top"'},{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'bottom'"}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"end"'}]},defaultValue:{func:!1,value:"'start'"}},{name:"hover",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"forceOpen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"ghost"'},{name:'"outline"'}]},defaultValue:{func:!1,value:"'ghost'"}}],events:[{name:"item-click",type:{names:["DropdownItem"]}},{name:"open"},{name:"close"}],slots:[{name:"trigger"},{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/Dropdown.vue"]};const X={title:"Actions/Dropdown",component:r,parameters:{layout:"centered",docs:{description:{component:"Interactive dropdown menu component with customizable trigger and positioning."}}},argTypes:{triggerText:{control:"text",description:"Text for the default trigger button"},position:{control:{type:"select"},options:["bottom","top","left","right"],description:"Position of the dropdown relative to trigger"},align:{control:{type:"select"},options:["start","end"],description:"Alignment of the dropdown"},hover:{control:"boolean",description:"Open dropdown on hover instead of click"},forceOpen:{control:"boolean",description:"Force dropdown to stay open"},disabled:{control:"boolean",description:"Disable the dropdown"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Dropdown size"},variant:{control:{type:"select"},options:["primary","secondary","accent","ghost","outline"],description:"Dropdown variant"}},tags:["autodocs"]},u={args:{triggerText:"Click me",variant:"primary"},render:t=>({components:{Dropdown:r},setup(){return{args:t}},template:`
      <Dropdown v-bind="args">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </Dropdown>
    `})},m={args:{},render:t=>({components:{Dropdown:r},setup(){return{args:t}},template:`
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
    `})},g={render:()=>({components:{Dropdown:r},template:`
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
    `})},b={args:{hover:!0},render:t=>({components:{Dropdown:r},setup(){return{args:t}},template:`
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-secondary">Hover me</button>
        </template>
        <li><a>Hover Item 1</a></li>
        <li><a>Hover Item 2</a></li>
        <li><a>Hover Item 3</a></li>
      </Dropdown>
    `})},f={args:{disabled:!0,triggerText:"Disabled Dropdown"},render:t=>({components:{Dropdown:r},setup(){return{args:t}},template:`
      <Dropdown v-bind="args">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </Dropdown>
    `})},v={args:{triggerText:"Select Action",items:[{label:"Edit",value:"edit"},{label:"Delete",value:"delete"},{label:"Archive",value:"archive",disabled:!0},{label:"Share",value:"share"}]},render:t=>({components:{Dropdown:r},setup(){return{args:t,handleItemClick:(n,p)=>{console.log("Item clicked:",n),alert(`Clicked: ${n.label}`)}}},template:`
      <Dropdown v-bind="args" @item-click="handleItemClick" />
    `})},w={args:{},render:t=>({components:{Dropdown:r},setup(){return{args:t}},template:`
      <Dropdown v-bind="args">
        <template #trigger>
          <button class="btn btn-circle btn-ghost">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </template>
        <li><a>📧 Messages</a></li>
        <li><a>⚙️ Settings</a></li>
        <li><a>👤 Profile</a></li>
        <li><hr class="my-1"></li>
        <li><a class="text-error">🚪 Logout</a></li>
      </Dropdown>
    `})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    triggerText: 'Click me',
    variant: 'primary'
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
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </Dropdown>
    \`
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    disabled: true,
    triggerText: 'Disabled Dropdown'
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
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </Dropdown>
    \`
  })
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    triggerText: 'Select Action',
    items: [{
      label: 'Edit',
      value: 'edit'
    }, {
      label: 'Delete',
      value: 'delete'
    }, {
      label: 'Archive',
      value: 'archive',
      disabled: true
    }, {
      label: 'Share',
      value: 'share'
    }]
  },
  render: args => ({
    components: {
      Dropdown
    },
    setup() {
      const handleItemClick = (item: {
        label: string;
        value: string;
      }, _event: Event) => {
        console.log('Item clicked:', item);
        alert(\`Clicked: \${item.label}\`);
      };
      return {
        args,
        handleItemClick
      };
    },
    template: \`
      <Dropdown v-bind="args" @item-click="handleItemClick" />
    \`
  })
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
          <button class="btn btn-circle btn-ghost">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </template>
        <li><a>📧 Messages</a></li>
        <li><a>⚙️ Settings</a></li>
        <li><a>👤 Profile</a></li>
        <li><hr class="my-1"></li>
        <li><a class="text-error">🚪 Logout</a></li>
      </Dropdown>
    \`
  })
}`,...w.parameters?.docs?.source}}};const Y=["Default","WithIcons","Positions","HoverMode","Disabled","WithItems","CustomTrigger"];export{w as CustomTrigger,u as Default,f as Disabled,b as HoverMode,g as Positions,m as WithIcons,v as WithItems,Y as __namedExportsOrder,X as default};
