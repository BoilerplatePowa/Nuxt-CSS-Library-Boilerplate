import{d as X,r as d,c as t,h as Y,i as D,j as K,k as R,T as W,l as G,o as c,a as M,m as v,p as J,u as h,n,b as u,q as Q,e as O,t as U,g as T}from"./iframe-DxBZQA7Y.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as p}from"./Button-BsZWADOI.js";import"./preload-helper-D9Z9MdNV.js";const ee=["aria-labelledby","aria-describedby"],oe=["id"],le=["id"],S=X({__name:"Modal",props:{modelValue:{type:Boolean},title:{},size:{default:"md"},closable:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1}},emits:["update:modelValue","close","open","escape"],setup(l,{emit:e}){let s=0;const a=()=>`modal-${++s}`,i=l,m=e,x=d(),C=a(),z=a(),E=t(()=>["fixed","inset-0","z-50","flex","items-center","justify-center","bg-black","bg-opacity-50","backdrop-blur-sm"]),V=t(()=>{const o=["modal-box","bg-white","rounded-lg","shadow-xl","max-h-[90vh]","overflow-hidden","flex","flex-col"];switch(i.size){case"sm":o.push("max-w-sm");break;case"md":o.push("max-w-md");break;case"lg":o.push("max-w-lg");break;case"xl":o.push("max-w-xl");break;case"full":o.push("max-w-full","w-full","h-full","m-4");break}return o.join(" ")}),L=t(()=>["flex","items-center","justify-between","p-6","border-b","border-gray-200"]),_=t(()=>["text-lg","font-semibold","text-gray-900"]),A=t(()=>["p-1","text-gray-400","hover:text-gray-600","transition-colors","duration-200"]),F=t(()=>["flex-1","p-6","overflow-y-auto"]),P=t(()=>["flex","items-center","justify-end","gap-3","p-6","border-t","border-gray-200"]),w=()=>{i.persistent||(m("update:modelValue",!1),m("close"))},j=()=>{i.closeOnOverlay&&w()},q=()=>{i.closeOnEsc&&(m("escape"),w())},H=()=>{document.body.style.overflow="hidden"},N=()=>{T(()=>{x.value?.focus()}),m("open")},$=()=>{document.body.style.overflow=""},I=()=>{};return Y(()=>i.modelValue,o=>{o&&T(()=>{x.value?.focus()})}),(o,f)=>(c(),D(G,{to:"body"},[K(W,{name:"modal",onEnter:H,onAfterEnter:N,onLeave:$,onAfterLeave:I},{default:R(()=>[o.modelValue?(c(),M("div",{key:0,class:n(E.value),role:"dialog","aria-modal":!0,"aria-labelledby":h(C),"aria-describedby":h(z),onClick:j,onKeydown:J(q,["esc"])},[u("div",{ref_key:"modalRef",ref:x,class:n(V.value),onClick:f[0]||(f[0]=Q(()=>{},["stop"]))},[o.$slots.header||o.title?(c(),M("header",{key:0,class:n(L.value)},[O(o.$slots,"header",{},()=>[u("h2",{id:h(C),class:n(_.value)},U(o.title),11,oe)],!0),o.closable?(c(),M("button",{key:0,type:"button",class:n(A.value),"aria-label":"Close modal",onClick:w},f[1]||(f[1]=[u("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)):v("",!0)],2)):v("",!0),u("div",{id:h(z),class:n(F.value)},[O(o.$slots,"default",{},void 0,!0)],10,le),o.$slots.footer?(c(),M("footer",{key:1,class:n(P.value)},[O(o.$slots,"footer",{},void 0,!0)],2)):v("",!0)],2)],42,ee)):v("",!0)]),_:3})]))}}),r=Z(S,[["__scopeId","data-v-d367ad4c"]]);S.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"closable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnOverlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnEsc",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"close"},{name:"open"},{name:"escape"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/Modal.vue"]};const de={title:"Actions/Modal",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible modal component with accessibility features, keyboard navigation, and customizable sizes."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Modal size"},title:{control:{type:"text"},description:"Modal title"},closable:{control:{type:"boolean"},description:"Show close button"},closeOnOverlay:{control:{type:"boolean"},description:"Close when clicking overlay"},closeOnEsc:{control:{type:"boolean"},description:"Close when pressing Escape"},persistent:{control:{type:"boolean"},description:"Prevent closing"}}},g={render:l=>({components:{Modal:r,Button:p},setup(){const e=d(!1);return{args:l,isOpen:e,openModal:()=>{e.value=!0},closeModal:()=>{e.value=!1}}},template:`
      <div>
        <Button @click="openModal">Open Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Modal Title"
          @close="closeModal"
        >
          <p>This is a basic modal with some content. You can close it by clicking the X button, pressing Escape, or clicking outside the modal.</p>
        </Modal>
      </div>
    `})},b={render:l=>({components:{Modal:r,Button:p},setup(){const e=d(!1);return{args:l,isOpen:e,openModal:()=>{e.value=!0},closeModal:()=>{e.value=!1}}},template:`
      <div>
        <Button @click="openModal">Open Modal with Footer</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Confirm Action"
          @close="closeModal"
        >
          <p>Are you sure you want to perform this action? This cannot be undone.</p>
          
          <template #footer>
            <Button variant="outline" @click="closeModal">Cancel</Button>
            <Button variant="primary" @click="closeModal">Confirm</Button>
          </template>
        </Modal>
      </div>
    `})},y={render:l=>({components:{Modal:r,Button:p},setup(){const e=d(!1);return{args:l,isOpen:e,openModal:()=>{e.value=!0},closeModal:()=>{e.value=!1}}},template:`
      <div>
        <Button @click="openModal">Open Modal with Custom Header</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          @close="closeModal"
        >
          <template #header>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>
              <h2 class="text-lg font-semibold">Custom Header</h2>
            </div>
          </template>
          
          <p>This modal has a custom header with an icon and styling.</p>
        </Modal>
      </div>
    `})},B={render:()=>({components:{Modal:r,Button:p},setup(){const l=d({sm:!1,md:!1,lg:!1,xl:!1,full:!1});return{modals:l,openModal:a=>{l.value[a]=!0},closeModal:a=>{l.value[a]=!1}}},template:`
      <div class="space-x-2">
        <Button @click="openModal('sm')">Small</Button>
        <Button @click="openModal('md')">Medium</Button>
        <Button @click="openModal('lg')">Large</Button>
        <Button @click="openModal('xl')">Extra Large</Button>
        <Button @click="openModal('full')">Full Screen</Button>
        
        <Modal v-model="modals.sm" size="sm" title="Small Modal" @close="closeModal('sm')">
          <p>This is a small modal.</p>
        </Modal>
        
        <Modal v-model="modals.md" size="md" title="Medium Modal" @close="closeModal('md')">
          <p>This is a medium modal.</p>
        </Modal>
        
        <Modal v-model="modals.lg" size="lg" title="Large Modal" @close="closeModal('lg')">
          <p>This is a large modal with more content space.</p>
        </Modal>
        
        <Modal v-model="modals.xl" size="xl" title="Extra Large Modal" @close="closeModal('xl')">
          <p>This is an extra large modal with even more content space for complex forms or detailed information.</p>
        </Modal>
        
        <Modal v-model="modals.full" size="full" title="Full Screen Modal" @close="closeModal('full')">
          <p>This is a full screen modal that takes up the entire viewport. Perfect for complex workflows or detailed forms.</p>
        </Modal>
      </div>
    `})},k={render:l=>({components:{Modal:r,Button:p},setup(){const e=d(!1);return{args:l,isOpen:e,openModal:()=>{e.value=!0},closeModal:()=>{e.value=!1}}},template:`
      <div>
        <Button @click="openModal">Open Persistent Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Persistent Modal"
          :persistent="true"
          :closable="false"
          :close-on-overlay="false"
          :close-on-esc="false"
          @close="closeModal"
        >
          <p>This modal cannot be closed by clicking outside, pressing Escape, or using the X button. You must use the Close button below.</p>
          
          <template #footer>
            <Button variant="primary" @click="closeModal">Close Modal</Button>
          </template>
        </Modal>
      </div>
    `})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      const isOpen = ref(false);
      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };
      return {
        args,
        isOpen,
        openModal,
        closeModal
      };
    },
    template: \`
      <div>
        <Button @click="openModal">Open Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Modal Title"
          @close="closeModal"
        >
          <p>This is a basic modal with some content. You can close it by clicking the X button, pressing Escape, or clicking outside the modal.</p>
        </Modal>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      const isOpen = ref(false);
      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };
      return {
        args,
        isOpen,
        openModal,
        closeModal
      };
    },
    template: \`
      <div>
        <Button @click="openModal">Open Modal with Footer</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Confirm Action"
          @close="closeModal"
        >
          <p>Are you sure you want to perform this action? This cannot be undone.</p>
          
          <template #footer>
            <Button variant="outline" @click="closeModal">Cancel</Button>
            <Button variant="primary" @click="closeModal">Confirm</Button>
          </template>
        </Modal>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      const isOpen = ref(false);
      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };
      return {
        args,
        isOpen,
        openModal,
        closeModal
      };
    },
    template: \`
      <div>
        <Button @click="openModal">Open Modal with Custom Header</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          @close="closeModal"
        >
          <template #header>
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>
              <h2 class="text-lg font-semibold">Custom Header</h2>
            </div>
          </template>
          
          <p>This modal has a custom header with an icon and styling.</p>
        </Modal>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Modal,
      Button
    },
    setup() {
      const modals = ref({
        sm: false,
        md: false,
        lg: false,
        xl: false,
        full: false
      });
      const openModal = (size: string) => {
        modals.value[size as keyof typeof modals.value] = true;
      };
      const closeModal = (size: string) => {
        modals.value[size as keyof typeof modals.value] = false;
      };
      return {
        modals,
        openModal,
        closeModal
      };
    },
    template: \`
      <div class="space-x-2">
        <Button @click="openModal('sm')">Small</Button>
        <Button @click="openModal('md')">Medium</Button>
        <Button @click="openModal('lg')">Large</Button>
        <Button @click="openModal('xl')">Extra Large</Button>
        <Button @click="openModal('full')">Full Screen</Button>
        
        <Modal v-model="modals.sm" size="sm" title="Small Modal" @close="closeModal('sm')">
          <p>This is a small modal.</p>
        </Modal>
        
        <Modal v-model="modals.md" size="md" title="Medium Modal" @close="closeModal('md')">
          <p>This is a medium modal.</p>
        </Modal>
        
        <Modal v-model="modals.lg" size="lg" title="Large Modal" @close="closeModal('lg')">
          <p>This is a large modal with more content space.</p>
        </Modal>
        
        <Modal v-model="modals.xl" size="xl" title="Extra Large Modal" @close="closeModal('xl')">
          <p>This is an extra large modal with even more content space for complex forms or detailed information.</p>
        </Modal>
        
        <Modal v-model="modals.full" size="full" title="Full Screen Modal" @close="closeModal('full')">
          <p>This is a full screen modal that takes up the entire viewport. Perfect for complex workflows or detailed forms.</p>
        </Modal>
      </div>
    \`
  })
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      const isOpen = ref(false);
      const openModal = () => {
        isOpen.value = true;
      };
      const closeModal = () => {
        isOpen.value = false;
      };
      return {
        args,
        isOpen,
        openModal,
        closeModal
      };
    },
    template: \`
      <div>
        <Button @click="openModal">Open Persistent Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Persistent Modal"
          :persistent="true"
          :closable="false"
          :close-on-overlay="false"
          :close-on-esc="false"
          @close="closeModal"
        >
          <p>This modal cannot be closed by clicking outside, pressing Escape, or using the X button. You must use the Close button below.</p>
          
          <template #footer>
            <Button variant="primary" @click="closeModal">Close Modal</Button>
          </template>
        </Modal>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};const re=["Default","WithFooter","CustomHeader","Sizes","Persistent"];export{y as CustomHeader,g as Default,k as Persistent,B as Sizes,b as WithFooter,re as __namedExportsOrder,de as default};
