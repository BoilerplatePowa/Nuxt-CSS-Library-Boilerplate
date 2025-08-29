import{d as de,r as p,c as E,a as u,b as h,e as N,u as W,n as c,f as D,o as m,t as H,F as pe,g as ue}from"./iframe-CzrYmmIK.js";import{_ as ce}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const me=["tabindex","aria-expanded","aria-controls","aria-disabled"],fe=["id","tabindex","aria-hidden"],ge=["href","tabindex","aria-disabled","onClick"],be=["tabindex","disabled","aria-disabled","onClick"],G=de({__name:"Dropdown",props:{items:{default:()=>[]},triggerText:{},position:{default:"bottom"},align:{default:"start"},hover:{type:Boolean,default:!1},forceOpen:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"ghost"},closeOnSelect:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0}},emits:["item-click","open","close","update:open"],setup(o,{expose:L,emit:v}){let O=0;const U=()=>`dropdown-${++O}`,t=o,f=v,r=p(!1),i=p(-1),q=U(),J=p(),T=p(),Q=p(),M=p([]),V=(e,n)=>{e&&"$el"in e?M.value[n]=e.$el:e&&(M.value[n]=e)},X=E(()=>{const e=["dropdown"];return t.position==="top"?e.push("dropdown-top"):t.position==="left"?e.push("dropdown-left"):t.position==="right"&&e.push("dropdown-right"),t.align==="end"&&e.push("dropdown-end"),t.hover&&e.push("dropdown-hover"),(t.forceOpen||r.value)&&e.push("dropdown-open"),e.join(" ")}),Y=E(()=>{const e=["btn","flex","items-center"];return t.size==="xs"?e.push("btn-xs"):t.size==="sm"?e.push("btn-sm"):t.size==="lg"&&e.push("btn-lg"),t.variant==="primary"?e.push("btn-primary"):t.variant==="secondary"?e.push("btn-secondary"):t.variant==="accent"?e.push("btn-accent"):t.variant==="ghost"?e.push("btn-ghost"):t.variant==="outline"&&e.push("btn-outline"),t.disabled&&e.push("btn-disabled"),e.join(" ")}),Z=E(()=>["dropdown-content","menu","bg-base-100","rounded-box","z-[1]","w-52","p-2","shadow"].join(" ")),g=()=>t.items.filter(e=>!e.disabled),w=e=>{const n=g();if(e>=0&&e<n.length){i.value=e;const a=t.items.findIndex(b=>b===n[e]);D(()=>{M.value[a]?.focus()})}},F=()=>w(0),ee=()=>w(g().length-1),ne=()=>{const e=g(),n=(i.value+1)%e.length;w(n)},te=()=>{const e=g(),n=i.value<=0?e.length-1:i.value-1;w(n)},z=()=>{t.disabled||(r.value=!0,i.value=-1,f("open"),f("update:open",!0),t.autoFocus&&D(()=>{F()}))},d=()=>{r.value&&(r.value=!1,i.value=-1,f("close"),f("update:open",!1),D(()=>{T.value?.focus()}))},B=()=>{t.disabled||(r.value?d():z())},ae=async e=>{await D(),e.currentTarget.contains(document.activeElement)||d()},oe=e=>{if(r.value)switch(e.key){case"Escape":e.preventDefault(),d();break;case"ArrowDown":e.preventDefault(),ne();break;case"ArrowUp":e.preventDefault(),te();break;case"Home":e.preventDefault(),F();break;case"End":e.preventDefault(),ee();break}},re=e=>{switch(e.key){case"Enter":case" ":e.preventDefault(),B();break;case"ArrowDown":e.preventDefault(),z();break;case"Escape":e.preventDefault(),d();break}},se=()=>{},K=e=>{switch(e.key){case"Enter":case" ":e.preventDefault(),e.target.click();break}},le=e=>{const n=e.target;n.hasAttribute("disabled")||n.classList.contains("menu-title")||t.closeOnSelect&&d()},R=(e,n)=>{if(e.disabled){n.preventDefault();return}f("item-click",e,n),t.closeOnSelect&&d()},ie=e=>typeof e=="string"?e:e.value?.toString()||e.label,j=e=>typeof e=="string"?e:e.label,P=e=>{if(typeof e!="string")return e.href},A=e=>typeof e=="string"?!1:e.disabled||!1,$=e=>{const n=["transition-colors","duration-150"];return typeof e=="object"&&(e.active&&n.push("active","bg-primary","text-primary-content"),e.disabled&&n.push("disabled","opacity-50","cursor-not-allowed")),g().findIndex(s=>s===e)===i.value&&n.push("bg-base-200","focus"),n.join(" ")};return L({open:z,close:d,toggle:B,focus:()=>T.value?.focus()}),(e,n)=>(m(),u("div",{ref_key:"dropdownRef",ref:J,class:c(X.value),onFocusout:ae,onKeydown:oe},[h("div",{ref_key:"triggerRef",ref:T,tabindex:e.disabled?-1:0,role:"button",class:c(Y.value),"aria-haspopup":!0,"aria-expanded":r.value,"aria-controls":W(q),"aria-disabled":e.disabled,onClick:B,onKeydown:re},[N(e.$slots,"trigger",{},()=>[h("span",null,H(e.triggerText||"Dropdown"),1),(m(),u("svg",{class:c(["w-2.5 h-2.5 ml-2.5 transition-transform duration-200",{"rotate-180":r.value}]),"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},n[0]||(n[0]=[h("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 4 4 4-4"},null,-1)]),2))],!0)],42,me),h("ul",{ref_key:"menuRef",ref:Q,id:W(q),role:"menu",tabindex:r.value?0:-1,class:c(Z.value),"aria-hidden":!r.value,onClick:le,onKeydown:se},[N(e.$slots,"default",{},()=>[(m(!0),u(pe,null,ue(e.items,(a,b)=>(m(),u("li",{key:ie(a),role:"none"},[P(a)?(m(),u("a",{key:0,ref_for:!0,ref:s=>V(s,b),href:P(a),class:c($(a)),role:"menuitem",tabindex:r.value?0:-1,"aria-disabled":A(a),onClick:s=>R(a,s),onKeydown:K},H(j(a)),43,ge)):(m(),u("button",{key:1,ref_for:!0,ref:s=>V(s,b),type:"button",class:c($(a)),role:"menuitem",tabindex:r.value?0:-1,disabled:A(a),"aria-disabled":A(a),onClick:s=>R(a,s),onKeydown:K},H(j(a)),43,be))]))),128))],!0)],42,fe)],34))}}),l=ce(G,[["__scopeId","data-v-43970a3b"]]);G.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},expose:[{name:"open"},{name:"close"},{name:"toggle"},{name:"focus"}],props:[{name:"items",required:!1,type:{name:"Array",elements:[{name:"DropdownItem"}]},defaultValue:{func:!1,value:"() => []"}},{name:"triggerText",required:!1,type:{name:"string"}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"bottom"'},{name:'"top"'},{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'bottom'"}},{name:"align",required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"end"'}]},defaultValue:{func:!1,value:"'start'"}},{name:"hover",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"forceOpen",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"accent"'},{name:'"ghost"'},{name:'"outline"'}]},defaultValue:{func:!1,value:"'ghost'"}},{name:"closeOnSelect",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"autoFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"item-click",type:{names:["DropdownItem"]}},{name:"open"},{name:"close"},{name:"update:open",type:{names:["boolean"]}}],slots:[{name:"trigger"},{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/Dropdown.vue"]};const De={title:"Actions/Dropdown",component:l,parameters:{layout:"centered",docs:{description:{component:"Interactive dropdown menu component with customizable trigger and positioning."}}},argTypes:{triggerText:{control:"text",description:"Text for the default trigger button"},position:{control:{type:"select"},options:["bottom","top","left","right"],description:"Position of the dropdown relative to trigger"},align:{control:{type:"select"},options:["start","end"],description:"Alignment of the dropdown"},hover:{control:"boolean",description:"Open dropdown on hover instead of click"},forceOpen:{control:"boolean",description:"Force dropdown to stay open"},disabled:{control:"boolean",description:"Disable the dropdown"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Dropdown size"},variant:{control:{type:"select"},options:["primary","secondary","accent","ghost","outline"],description:"Dropdown variant"}},tags:["autodocs"]},I={args:{triggerText:"Click me",variant:"primary"},render:o=>({components:{Dropdown:l},setup(){return{args:o}},template:`
      <Dropdown v-bind="args">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </Dropdown>
    `})},y={args:{},render:o=>({components:{Dropdown:l},setup(){return{args:o}},template:`
      <Dropdown v-bind="args">
        <template #trigger>
          <button>Menu ▼</button>
        </template>
        <li><a>📧 Messages</a></li>
        <li><a>⚙️ Settings</a></li>
        <li><a>👤 Profile</a></li>
        <li><hr class="my-1"></li>
        <li><a class="text-error">🚪 Logout</a></li>
      </Dropdown>
    `})},k={render:()=>({components:{Dropdown:l},template:`
      <div class="flex gap-4 flex-wrap">
        <Dropdown position="bottom">
          <template #trigger>
            <button>Bottom</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="top">
          <template #trigger>
            <button>Top</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="left">
          <template #trigger>
            <button>Left</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="right">
          <template #trigger>
            <button>Right</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
      </div>
    `})},x={args:{hover:!0},render:o=>({components:{Dropdown:l},setup(){return{args:o}},template:`
      <Dropdown v-bind="args">
        <template #trigger>
          <button>Hover me</button>
        </template>
        <li><a>Hover Item 1</a></li>
        <li><a>Hover Item 2</a></li>
        <li><a>Hover Item 3</a></li>
      </Dropdown>
    `})},C={args:{disabled:!0,triggerText:"Disabled Dropdown"},render:o=>({components:{Dropdown:l},setup(){return{args:o}},template:`
      <Dropdown v-bind="args">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </Dropdown>
    `})},S={args:{triggerText:"Select Action",items:[{label:"Edit",value:"edit"},{label:"Delete",value:"delete"},{label:"Archive",value:"archive",disabled:!0},{label:"Share",value:"share"}]},render:o=>({components:{Dropdown:l},setup(){return{args:o,handleItemClick:(v,O)=>{console.log("Item clicked:",v),alert(`Clicked: ${v.label}`)}}},template:`
      <Dropdown v-bind="args" @item-click="handleItemClick" />
    `})},_={args:{},render:o=>({components:{Dropdown:l},setup(){return{args:o}},template:`
      <Dropdown v-bind="args">
        <template #trigger>
          <button>
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
    `})};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
          <button>Menu ▼</button>
        </template>
        <li><a>📧 Messages</a></li>
        <li><a>⚙️ Settings</a></li>
        <li><a>👤 Profile</a></li>
        <li><hr class="my-1"></li>
        <li><a class="text-error">🚪 Logout</a></li>
      </Dropdown>
    \`
  })
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dropdown
    },
    template: \`
      <div class="flex gap-4 flex-wrap">
        <Dropdown position="bottom">
          <template #trigger>
            <button>Bottom</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="top">
          <template #trigger>
            <button>Top</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="left">
          <template #trigger>
            <button>Left</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
        
        <Dropdown position="right">
          <template #trigger>
            <button>Right</button>
          </template>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </Dropdown>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
          <button>Hover me</button>
        </template>
        <li><a>Hover Item 1</a></li>
        <li><a>Hover Item 2</a></li>
        <li><a>Hover Item 3</a></li>
      </Dropdown>
    \`
  })
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
          <button>
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
}`,..._.parameters?.docs?.source}}};const Ie=["Default","WithIcons","Positions","HoverMode","Disabled","WithItems","CustomTrigger"];export{_ as CustomTrigger,I as Default,C as Disabled,x as HoverMode,k as Positions,y as WithIcons,S as WithItems,Ie as __namedExportsOrder,De as default};
