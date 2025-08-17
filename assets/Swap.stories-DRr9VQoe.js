import{d as z,c as w,a as s,b as q,m as o,e as i,n as B,o as l,q as r,t as d}from"./iframe-DKx4txre.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const I=["id","name","checked","disabled"],T={key:0,class:"swap-on"},_={key:1,class:"swap-off"},$={key:2,class:"swap-on"},A={key:3,class:"swap-off"},F={key:4,class:"swap-indeterminate"},L={key:5,class:"swap-on"},W={key:6,class:"swap-off"},h=z({__name:"Swap",props:{modelValue:{type:Boolean,default:!1},variant:{default:"rotate"},size:{default:"md"},onContent:{default:"🌞"},offContent:{default:"🌚"},indeterminateContent:{default:"🌤️"},disabled:{type:Boolean,default:!1},name:{default:void 0},id:{default:void 0}},emits:["update:modelValue","change"],setup(t,{emit:y}){const a=t,b=y,V=w(()=>a.modelValue),C=w(()=>a.id||`swap-${Math.random().toString(36).substr(2,9)}`),k=w(()=>{const e=["swap"];return a.variant==="rotate"?e.push("swap-rotate"):a.variant==="flip"?e.push("swap-flip"):a.variant==="indeterminate"&&e.push("swap-indeterminate"),a.size==="xs"?e.push("text-xs"):a.size==="sm"?e.push("text-sm"):a.size==="lg"&&e.push("text-lg"),a.disabled&&e.push("swap-disabled","opacity-50","cursor-not-allowed","pointer-events-none"),e.join(" ")}),N=e=>{if(a.disabled)return;const S=e.target.checked;b("update:modelValue",S),b("change",S)};return(e,D)=>(l(),s("label",{class:B(k.value)},[q("input",{type:"checkbox",id:C.value,name:e.name,checked:V.value,disabled:e.disabled,onChange:N},null,40,I),e.variant==="rotate"?(l(),s("div",T,[i(e.$slots,"on",{},()=>[r(d(e.onContent),1)],!0)])):o("",!0),e.variant==="rotate"?(l(),s("div",_,[i(e.$slots,"off",{},()=>[r(d(e.offContent),1)],!0)])):o("",!0),e.variant==="flip"?(l(),s("div",$,[i(e.$slots,"on",{},()=>[r(d(e.onContent),1)],!0)])):o("",!0),e.variant==="flip"?(l(),s("div",A,[i(e.$slots,"off",{},()=>[r(d(e.offContent),1)],!0)])):o("",!0),e.variant==="indeterminate"?(l(),s("div",F,[i(e.$slots,"indeterminate",{},()=>[r(d(e.indeterminateContent),1)],!0)])):o("",!0),e.variant==="indeterminate"?(l(),s("div",L,[i(e.$slots,"on",{},()=>[r(d(e.onContent),1)],!0)])):o("",!0),e.variant==="indeterminate"?(l(),s("div",W,[i(e.$slots,"off",{},()=>[r(d(e.offContent),1)],!0)])):o("",!0)],2))}}),n=E(h,[["__scopeId","data-v-dd8b83c3"]]);h.__docgenInfo={exportName:"default",displayName:"Swap",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"rotate"'},{name:'"flip"'},{name:'"indeterminate"'}]},defaultValue:{func:!1,value:"'rotate'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"onContent",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'🌞'"}},{name:"offContent",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'🌚'"}},{name:"indeterminateContent",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'🌤️'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"change",type:{names:["boolean"]}}],slots:[{name:"on"},{name:"off"},{name:"indeterminate"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/Swap.vue"]};const j={title:"Actions/Swap",component:n,parameters:{layout:"centered",docs:{description:{component:"Animated swap component for toggling between two states with smooth transitions."}}},argTypes:{modelValue:{control:"boolean",description:"Current swap state"},variant:{control:{type:"select"},options:["rotate","flip","indeterminate"],description:"Swap animation variant"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Swap size"},onContent:{control:"text",description:"Content for on state"},offContent:{control:"text",description:"Content for off state"},disabled:{control:"boolean",description:"Disable the swap interaction"},name:{control:"text",description:"Name attribute for the input element"},id:{control:"text",description:"ID attribute for the input element"}},tags:["autodocs"]},p={args:{modelValue:!1,onContent:"🌞",offContent:"🌙"},render:t=>({components:{Swap:n},setup(){return{args:t}},template:`
      <Swap v-bind="args" />
    `})},m={args:{modelValue:!1,variant:"rotate"},render:t=>({components:{Swap:n},setup(){return{args:t}},template:`
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl">▶️</div>
        </template>
        <template #off>
          <div class="text-4xl">⏸️</div>
        </template>
      </Swap>
    `})},c={args:{modelValue:!1,variant:"flip"},render:t=>({components:{Swap:n},setup(){return{args:t}},template:`
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl">😊</div>
        </template>
        <template #off>
          <div class="text-4xl">😴</div>
        </template>
      </Swap>
    `})},v={args:{modelValue:!1},render:t=>({components:{Swap:n},setup(){return{args:t}},template:`
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl text-red-500">❤️</div>
        </template>
        <template #off>
          <div class="text-4xl text-gray-400">🤍</div>
        </template>
      </Swap>
    `})},f={args:{modelValue:!1,variant:"rotate"},render:t=>({components:{Swap:n},setup(){return{args:t}},template:`
      <div class="flex items-center gap-4">
        <span class="text-sm">Volume:</span>
        <Swap v-bind="args">
          <template #on>
            <div class="text-2xl">🔊</div>
          </template>
          <template #off>
            <div class="text-2xl">🔇</div>
          </template>
        </Swap>
      </div>
    `})},u={render:()=>({components:{Swap:n},data(){return{states:[!1,!1,!1,!1]}},template:`
      <div class="flex gap-6 items-center">
        <div class="text-center">
          <div class="mb-2 text-sm">Theme</div>
          <Swap v-model="states[0]">
            <template #on>
              <div class="text-3xl">🌞</div>
            </template>
            <template #off>
              <div class="text-3xl">🌙</div>
            </template>
          </Swap>
        </div>
        
        <div class="text-center">
          <div class="mb-2 text-sm">Sound</div>
          <Swap v-model="states[1]" variant="rotate">
            <template #on>
              <div class="text-3xl">🔊</div>
            </template>
            <template #off>
              <div class="text-3xl">🔇</div>
            </template>
          </Swap>
        </div>
        
        <div class="text-center">
          <div class="mb-2 text-sm">Notifications</div>
          <Swap v-model="states[2]" variant="flip">
            <template #on>
              <div class="text-3xl">🔔</div>
            </template>
            <template #off>
              <div class="text-3xl">🔕</div>
            </template>
          </Swap>
        </div>
        
        <div class="text-center">
          <div class="mb-2 text-sm">Favorite</div>
          <Swap v-model="states[3]">
            <template #on>
              <div class="text-3xl text-yellow-500">⭐</div>
            </template>
            <template #off>
              <div class="text-3xl text-gray-400">☆</div>
            </template>
          </Swap>
        </div>
      </div>
    `})},x={args:{modelValue:!1,disabled:!0},render:t=>({components:{Swap:n},setup(){return{args:t}},template:`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Disabled with Slots</h3>
          <Swap v-bind="args">
            <template #on>
              <div class="text-4xl">🌞</div>
            </template>
            <template #off>
              <div class="text-4xl">🌙</div>
            </template>
          </Swap>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Disabled with Props</h3>
          <Swap 
            v-bind="args"
            on-content="🌞"
            off-content="🌙"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Enabled for Comparison</h3>
          <Swap 
            :model-value="args.modelValue"
            :variant="args.variant"
            :size="args.size"
            :disabled="false"
            on-content="🌞"
            off-content="🌙"
          />
        </div>
        
        <p class="text-sm text-gray-600">Try clicking on the disabled swaps - they should not animate or change state.</p>
      </div>
    `})},g={args:{modelValue:!1,name:"theme-toggle",id:"theme-swap"},render:t=>({components:{Swap:n},setup(){return{args:t}},template:`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Accessible Swap with ID and Name</h3>
          <Swap v-bind="args">
            <template #on>
              <div class="text-4xl">🌞</div>
            </template>
            <template #off>
              <div class="text-4xl">🌙</div>
            </template>
          </Swap>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Form Integration Example</h3>
          <form class="space-y-2">
            <label for="notifications-swap" class="block text-sm font-medium">
              Enable Notifications
            </label>
            <Swap 
              v-model="args.modelValue"
              name="notifications"
              id="notifications-swap"
            >
              <template #on>
                <div class="text-2xl">🔔</div>
              </template>
              <template #off>
                <div class="text-2xl">🔕</div>
              </template>
            </Swap>
          </form>
        </div>
        
        <p class="text-sm text-gray-600">
          These swaps have proper id and name attributes for accessibility and form integration.
        </p>
      </div>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    onContent: '🌞',
    offContent: '🌙'
  },
  render: args => ({
    components: {
      Swap
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Swap v-bind="args" />
    \`
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    variant: 'rotate'
  },
  render: args => ({
    components: {
      Swap
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl">▶️</div>
        </template>
        <template #off>
          <div class="text-4xl">⏸️</div>
        </template>
      </Swap>
    \`
  })
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    variant: 'flip'
  },
  render: args => ({
    components: {
      Swap
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl">😊</div>
        </template>
        <template #off>
          <div class="text-4xl">😴</div>
        </template>
      </Swap>
    \`
  })
}`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false
  },
  render: args => ({
    components: {
      Swap
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl text-red-500">❤️</div>
        </template>
        <template #off>
          <div class="text-4xl text-gray-400">🤍</div>
        </template>
      </Swap>
    \`
  })
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    variant: 'rotate'
  },
  render: args => ({
    components: {
      Swap
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex items-center gap-4">
        <span class="text-sm">Volume:</span>
        <Swap v-bind="args">
          <template #on>
            <div class="text-2xl">🔊</div>
          </template>
          <template #off>
            <div class="text-2xl">🔇</div>
          </template>
        </Swap>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Swap
    },
    data() {
      return {
        states: [false, false, false, false]
      };
    },
    template: \`
      <div class="flex gap-6 items-center">
        <div class="text-center">
          <div class="mb-2 text-sm">Theme</div>
          <Swap v-model="states[0]">
            <template #on>
              <div class="text-3xl">🌞</div>
            </template>
            <template #off>
              <div class="text-3xl">🌙</div>
            </template>
          </Swap>
        </div>
        
        <div class="text-center">
          <div class="mb-2 text-sm">Sound</div>
          <Swap v-model="states[1]" variant="rotate">
            <template #on>
              <div class="text-3xl">🔊</div>
            </template>
            <template #off>
              <div class="text-3xl">🔇</div>
            </template>
          </Swap>
        </div>
        
        <div class="text-center">
          <div class="mb-2 text-sm">Notifications</div>
          <Swap v-model="states[2]" variant="flip">
            <template #on>
              <div class="text-3xl">🔔</div>
            </template>
            <template #off>
              <div class="text-3xl">🔕</div>
            </template>
          </Swap>
        </div>
        
        <div class="text-center">
          <div class="mb-2 text-sm">Favorite</div>
          <Swap v-model="states[3]">
            <template #on>
              <div class="text-3xl text-yellow-500">⭐</div>
            </template>
            <template #off>
              <div class="text-3xl text-gray-400">☆</div>
            </template>
          </Swap>
        </div>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    disabled: true
  },
  render: args => ({
    components: {
      Swap
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Disabled with Slots</h3>
          <Swap v-bind="args">
            <template #on>
              <div class="text-4xl">🌞</div>
            </template>
            <template #off>
              <div class="text-4xl">🌙</div>
            </template>
          </Swap>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Disabled with Props</h3>
          <Swap 
            v-bind="args"
            on-content="🌞"
            off-content="🌙"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Enabled for Comparison</h3>
          <Swap 
            :model-value="args.modelValue"
            :variant="args.variant"
            :size="args.size"
            :disabled="false"
            on-content="🌞"
            off-content="🌙"
          />
        </div>
        
        <p class="text-sm text-gray-600">Try clicking on the disabled swaps - they should not animate or change state.</p>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    name: 'theme-toggle',
    id: 'theme-swap'
  },
  render: args => ({
    components: {
      Swap
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Accessible Swap with ID and Name</h3>
          <Swap v-bind="args">
            <template #on>
              <div class="text-4xl">🌞</div>
            </template>
            <template #off>
              <div class="text-4xl">🌙</div>
            </template>
          </Swap>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Form Integration Example</h3>
          <form class="space-y-2">
            <label for="notifications-swap" class="block text-sm font-medium">
              Enable Notifications
            </label>
            <Swap 
              v-model="args.modelValue"
              name="notifications"
              id="notifications-swap"
            >
              <template #on>
                <div class="text-2xl">🔔</div>
              </template>
              <template #off>
                <div class="text-2xl">🔕</div>
              </template>
            </Swap>
          </form>
        </div>
        
        <p class="text-sm text-gray-600">
          These swaps have proper id and name attributes for accessibility and form integration.
        </p>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};const O=["Default","WithRotation","WithFlip","LikeButton","VolumeControl","Multiple","Disabled","Accessible"];export{g as Accessible,p as Default,x as Disabled,v as LikeButton,u as Multiple,f as VolumeControl,c as WithFlip,m as WithRotation,O as __namedExportsOrder,j as default};
