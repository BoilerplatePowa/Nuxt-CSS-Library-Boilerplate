import{d as q,m as S,h as B,c as w,a as t,l as o,b as z,t as R,F as E,g as N,n as k,o as s,r as x}from"./iframe--6dECDSE.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const D={class:"form-control"},L={key:0,class:"label"},O={class:"label-text"},T=["checked"],P=["name","value","checked","disabled","onChange"],F={key:1,class:"text-xs text-base-content/70 mt-1"},A={key:2,class:"text-xs text-error mt-1",role:"alert"},V=q({__name:"Rating",props:S({maxRating:{default:5},label:{},helpText:{},errorMessage:{},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},allowEmpty:{type:Boolean,default:!0},size:{default:"md"},variant:{default:"star"},name:{}},{modelValue:{default:0},modelModifiers:{}}),emits:S(["change"],["update:modelValue"]),setup(l,{emit:M}){const a=l,b=B(l,"modelValue"),C=M,_=w(()=>{const e=["rating"];return a.size==="xs"?e.push("rating-xs"):a.size==="sm"?e.push("rating-sm"):a.size==="lg"&&e.push("rating-lg"),e.push("gap-1"),e.join(" ")}),j=w(()=>{const e=["mask"];return a.variant==="star"?e.push("mask-star-2","bg-orange-400"):a.variant==="heart"?e.push("mask-heart","bg-red-400"):a.variant==="mask"&&e.push("mask-star","bg-primary"),e.join(" ")}),f=e=>{a.disabled||a.readonly||(b.value=e,C("change",e))};return(e,h)=>(s(),t("div",D,[e.label?(s(),t("label",L,[z("span",O,R(e.label),1)])):o("",!0),z("div",{class:k(_.value)},[e.allowEmpty?(s(),t("input",{key:0,type:"radio",name:"rating",value:0,checked:b.value===0,class:"rating-hidden",onChange:h[0]||(h[0]=r=>f(0))},null,40,T)):o("",!0),(s(!0),t(E,null,N(e.maxRating,r=>(s(),t("input",{key:r,type:"radio",name:e.name||"rating",value:r,checked:b.value===r,class:k(j.value),disabled:e.disabled||e.readonly,onChange:H=>f(r)},null,42,P))),128))],2),e.helpText&&!e.errorMessage?(s(),t("p",F,R(e.helpText),1)):o("",!0),e.errorMessage?(s(),t("p",A,R(e.errorMessage),1)):o("",!0)]))}}),n=I(V,[["__scopeId","data-v-9444c441"]]);V.__docgenInfo={exportName:"default",displayName:"Rating",description:"",tags:{},props:[{name:"maxRating",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"label",required:!1,type:{name:"string"}},{name:"helpText",required:!1,type:{name:"string"}},{name:"errorMessage",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowEmpty",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"star"'},{name:'"heart"'},{name:'"mask"'}]},defaultValue:{func:!1,value:"'star'"}},{name:"name",required:!1,type:{name:"string"}}],events:[{name:"change",type:{names:["number"]}}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Rating.vue"]};const G={title:"Data Input/Rating",component:n,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["star","heart","mask"]},disabled:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},allowEmpty:{control:{type:"boolean"}}}},i={args:{label:"Rate this product",modelValue:0,maxRating:5}},d={args:{label:"Customer Rating",modelValue:4,maxRating:5,readonly:!0}},m={render:()=>({components:{Rating:n},setup(){return{rating:x(3)}},template:`
      <div class="space-y-4">
        <Rating 
          v-model="rating"
          label="Rate your experience" 
          :max-rating="5"
          allow-empty
        />
        <p class="text-sm text-gray-600">
          Current rating: {{ rating }} star{{ rating !== 1 ? 's' : '' }}
        </p>
      </div>
    `})},c={render:()=>({components:{Rating:n},template:`
      <div class="space-y-6">
        <Rating label="Extra Small" :model-value="4" size="xs" readonly />
        <Rating label="Small" :model-value="4" size="sm" readonly />
        <Rating label="Medium" :model-value="4" size="md" readonly />
        <Rating label="Large" :model-value="4" size="lg" readonly />
      </div>
    `})},p={render:()=>({components:{Rating:n},template:`
      <div class="space-y-4">
        <Rating label="Star" :model-value="4" variant="star" readonly />
        <Rating label="Heart" :model-value="4" variant="heart" readonly />
        <Rating label="Mask" :model-value="4" variant="mask" readonly />
      </div>
    `})},u={render:()=>({components:{Rating:n},template:`
      <div class="space-y-4">
        <Rating label="3 Stars Max" :model-value="2" :max-rating="3" readonly />
        <Rating label="5 Stars Max" :model-value="4" :max-rating="5" readonly />
        <Rating label="10 Stars Max" :model-value="7" :max-rating="10" readonly />
      </div>
    `})},g={render:()=>({components:{Rating:n},setup(){return{normalRating:x(3)}},template:`
      <div class="space-y-6">
        <Rating 
          v-model="normalRating"
          label="Normal (Interactive)" 
          :max-rating="5"
        />
        
        <Rating 
          label="Read Only" 
          :model-value="4" 
          :max-rating="5"
          readonly
        />
        
        <Rating 
          label="Disabled" 
          :model-value="2" 
          :max-rating="5"
          disabled
        />
      </div>
    `})},v={render:()=>({components:{Rating:n},setup(){return{rating:x(0)}},template:`
      <div class="space-y-4">
        <Rating 
          v-model="rating"
          label="Rate with empty option" 
          :max-rating="5"
          allow-empty
        />
        <p class="text-sm text-gray-600">
          Rating: {{ rating === 0 ? 'Not rated' : rating + ' stars' }}
        </p>
      </div>
    `})},y={render:()=>({components:{Rating:n},template:`
      <div class="bg-base-200 p-6 rounded-lg max-w-md">
        <h3 class="text-lg font-semibold mb-4">Product Review</h3>
        
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm">Overall</span>
            <Rating :model-value="4" size="sm" readonly />
          </div>
          
          <div class="flex items-center justify-between">
            <span class="text-sm">Quality</span>
            <Rating :model-value="5" size="sm" readonly />
          </div>
          
          <div class="flex items-center justify-between">
            <span class="text-sm">Value</span>
            <Rating :model-value="4" size="sm" readonly />
          </div>
          
          <div class="flex items-center justify-between">
            <span class="text-sm">Shipping</span>
            <Rating :model-value="3" size="sm" readonly />
          </div>
        </div>
        
        <div class="mt-4 pt-3 border-t">
          <p class="text-xs text-gray-500">Based on 127 reviews</p>
        </div>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rate this product',
    modelValue: 0,
    maxRating: 5
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Customer Rating',
    modelValue: 4,
    maxRating: 5,
    readonly: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Rating
    },
    setup() {
      const rating = ref(3);
      return {
        rating
      };
    },
    template: \`
      <div class="space-y-4">
        <Rating 
          v-model="rating"
          label="Rate your experience" 
          :max-rating="5"
          allow-empty
        />
        <p class="text-sm text-gray-600">
          Current rating: {{ rating }} star{{ rating !== 1 ? 's' : '' }}
        </p>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Rating
    },
    template: \`
      <div class="space-y-6">
        <Rating label="Extra Small" :model-value="4" size="xs" readonly />
        <Rating label="Small" :model-value="4" size="sm" readonly />
        <Rating label="Medium" :model-value="4" size="md" readonly />
        <Rating label="Large" :model-value="4" size="lg" readonly />
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Rating
    },
    template: \`
      <div class="space-y-4">
        <Rating label="Star" :model-value="4" variant="star" readonly />
        <Rating label="Heart" :model-value="4" variant="heart" readonly />
        <Rating label="Mask" :model-value="4" variant="mask" readonly />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Rating
    },
    template: \`
      <div class="space-y-4">
        <Rating label="3 Stars Max" :model-value="2" :max-rating="3" readonly />
        <Rating label="5 Stars Max" :model-value="4" :max-rating="5" readonly />
        <Rating label="10 Stars Max" :model-value="7" :max-rating="10" readonly />
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Rating
    },
    setup() {
      const normalRating = ref(3);
      return {
        normalRating
      };
    },
    template: \`
      <div class="space-y-6">
        <Rating 
          v-model="normalRating"
          label="Normal (Interactive)" 
          :max-rating="5"
        />
        
        <Rating 
          label="Read Only" 
          :model-value="4" 
          :max-rating="5"
          readonly
        />
        
        <Rating 
          label="Disabled" 
          :model-value="2" 
          :max-rating="5"
          disabled
        />
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Rating
    },
    setup() {
      const rating = ref(0);
      return {
        rating
      };
    },
    template: \`
      <div class="space-y-4">
        <Rating 
          v-model="rating"
          label="Rate with empty option" 
          :max-rating="5"
          allow-empty
        />
        <p class="text-sm text-gray-600">
          Rating: {{ rating === 0 ? 'Not rated' : rating + ' stars' }}
        </p>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Rating
    },
    template: \`
      <div class="bg-base-200 p-6 rounded-lg max-w-md">
        <h3 class="text-lg font-semibold mb-4">Product Review</h3>
        
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-sm">Overall</span>
            <Rating :model-value="4" size="sm" readonly />
          </div>
          
          <div class="flex items-center justify-between">
            <span class="text-sm">Quality</span>
            <Rating :model-value="5" size="sm" readonly />
          </div>
          
          <div class="flex items-center justify-between">
            <span class="text-sm">Value</span>
            <Rating :model-value="4" size="sm" readonly />
          </div>
          
          <div class="flex items-center justify-between">
            <span class="text-sm">Shipping</span>
            <Rating :model-value="3" size="sm" readonly />
          </div>
        </div>
        
        <div class="mt-4 pt-3 border-t">
          <p class="text-xs text-gray-500">Based on 127 reviews</p>
        </div>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};const J=["Default","WithValue","Interactive","Sizes","Variants","MaxRatings","States","AllowEmpty","ProductRating"];export{v as AllowEmpty,i as Default,m as Interactive,u as MaxRatings,y as ProductRating,c as Sizes,g as States,p as Variants,d as WithValue,J as __namedExportsOrder,G as default};
