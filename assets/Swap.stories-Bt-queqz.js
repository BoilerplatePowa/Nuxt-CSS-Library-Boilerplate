import{d as _,c as S,a as n,b as B,m as o,e as r,n as N,o as s,s as i,t as p}from"./iframe-D8bQcoLX.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const q=["checked"],$={key:0,class:"swap-on"},D={key:1,class:"swap-off"},F={key:2,class:"swap-on"},L={key:3,class:"swap-off"},T={key:4,class:"swap-indeterminate"},W={key:5,class:"swap-on"},A={key:6,class:"swap-off"},b=_({__name:"Swap",props:{modelValue:{type:Boolean,default:!1},variant:{default:"rotate"},size:{default:"md"},onContent:{default:"🌞"},offContent:{default:"🌚"},indeterminateContent:{default:"🌤️"},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(t,{emit:y}){const a=t,w=y,h=S(()=>a.modelValue),V=S(()=>{const e=["swap"];return a.variant==="rotate"?e.push("swap-rotate"):a.variant==="flip"?e.push("swap-flip"):a.variant==="indeterminate"&&e.push("swap-indeterminate"),a.size==="xs"?e.push("text-xs"):a.size==="sm"?e.push("text-sm"):a.size==="lg"&&e.push("text-lg"),a.disabled&&e.push("swap-disabled","opacity-50","cursor-not-allowed"),e.join(" ")}),C=e=>{if(a.disabled)return;const g=e.target.checked;w("update:modelValue",g),w("change",g)};return(e,k)=>(s(),n("label",{class:N(V.value)},[B("input",{type:"checkbox",checked:h.value,onChange:C},null,40,q),e.variant==="rotate"?(s(),n("div",$,[r(e.$slots,"on",{},()=>[i(p(e.onContent),1)],!0)])):o("",!0),e.variant==="rotate"?(s(),n("div",D,[r(e.$slots,"off",{},()=>[i(p(e.offContent),1)],!0)])):o("",!0),e.variant==="flip"?(s(),n("div",F,[r(e.$slots,"on",{},()=>[i(p(e.onContent),1)],!0)])):o("",!0),e.variant==="flip"?(s(),n("div",L,[r(e.$slots,"off",{},()=>[i(p(e.offContent),1)],!0)])):o("",!0),e.variant==="indeterminate"?(s(),n("div",T,[r(e.$slots,"indeterminate",{},()=>[i(p(e.indeterminateContent),1)],!0)])):o("",!0),e.variant==="indeterminate"?(s(),n("div",W,[r(e.$slots,"on",{},()=>[i(p(e.onContent),1)],!0)])):o("",!0),e.variant==="indeterminate"?(s(),n("div",A,[r(e.$slots,"off",{},()=>[i(p(e.offContent),1)],!0)])):o("",!0)],2))}}),l=z(b,[["__scopeId","data-v-0a463d1e"]]);b.__docgenInfo={exportName:"default",displayName:"Swap",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"rotate"'},{name:'"flip"'},{name:'"indeterminate"'}]},defaultValue:{func:!1,value:"'rotate'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"onContent",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'🌞'"}},{name:"offContent",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'🌚'"}},{name:"indeterminateContent",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'🌤️'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"change",type:{names:["boolean"]}}],slots:[{name:"on"},{name:"off"},{name:"indeterminate"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/Swap.vue"]};const R={title:"Actions/Swap",component:l,parameters:{layout:"centered",docs:{description:{component:"Animated swap component for toggling between two states with smooth transitions."}}},argTypes:{modelValue:{control:"boolean",description:"Current swap state"},variant:{control:{type:"select"},options:["rotate","flip","indeterminate"],description:"Swap animation variant"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Swap size"},onContent:{control:"text",description:"Content for on state"},offContent:{control:"text",description:"Content for off state"},disabled:{control:"boolean",description:"Disable the swap interaction"}},tags:["autodocs"]},d={args:{modelValue:!1},render:t=>({components:{Swap:l},setup(){return{args:t}},template:`
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl">🌞</div>
        </template>
        <template #off>
          <div class="text-4xl">🌙</div>
        </template>
      </Swap>
    `})},m={args:{modelValue:!1,variant:"rotate"},render:t=>({components:{Swap:l},setup(){return{args:t}},template:`
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl">▶️</div>
        </template>
        <template #off>
          <div class="text-4xl">⏸️</div>
        </template>
      </Swap>
    `})},c={args:{modelValue:!1,variant:"flip"},render:t=>({components:{Swap:l},setup(){return{args:t}},template:`
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl">😊</div>
        </template>
        <template #off>
          <div class="text-4xl">😴</div>
        </template>
      </Swap>
    `})},v={args:{modelValue:!1},render:t=>({components:{Swap:l},setup(){return{args:t}},template:`
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl text-red-500">❤️</div>
        </template>
        <template #off>
          <div class="text-4xl text-gray-400">🤍</div>
        </template>
      </Swap>
    `})},u={args:{modelValue:!1,variant:"rotate"},render:t=>({components:{Swap:l},setup(){return{args:t}},template:`
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
    `})},f={render:()=>({components:{Swap:l},data(){return{states:[!1,!1,!1,!1]}},template:`
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
    `})},x={args:{modelValue:!1,disabled:!0},render:t=>({components:{Swap:l},setup(){return{args:t}},template:`
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl opacity-50">🌞</div>
        </template>
        <template #off>
          <div class="text-4xl opacity-50">🌙</div>
        </template>
      </Swap>
    `})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          <div class="text-4xl">🌞</div>
        </template>
        <template #off>
          <div class="text-4xl">🌙</div>
        </template>
      </Swap>
    \`
  })
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      <Swap v-bind="args">
        <template #on>
          <div class="text-4xl opacity-50">🌞</div>
        </template>
        <template #off>
          <div class="text-4xl opacity-50">🌙</div>
        </template>
      </Swap>
    \`
  })
}`,...x.parameters?.docs?.source}}};const j=["Default","WithRotation","WithFlip","LikeButton","VolumeControl","Multiple","Disabled"];export{d as Default,x as Disabled,v as LikeButton,f as Multiple,u as VolumeControl,c as WithFlip,m as WithRotation,j as __namedExportsOrder,R as default};
