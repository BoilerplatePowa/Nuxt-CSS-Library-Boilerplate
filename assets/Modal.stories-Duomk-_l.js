import{d as D,r,c as t,h as K,i as R,j as W,k as G,T as J,l as Q,o as u,a as v,m as h,p as U,u as g,n,b as p,q as Z,e as O,t as ee,g as S}from"./iframe-TBEUVV-G.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as m}from"./Button-D-RL2Dy1.js";import"./preload-helper-D9Z9MdNV.js";const le=["aria-labelledby","aria-describedby"],ae=["id"],te=["id"],E=D({__name:"Modal",props:{modelValue:{type:Boolean},title:{},size:{default:"md"},closable:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1}},emits:["update:modelValue","close","open","escape"],setup(l,{expose:e,emit:s}){let a=0;const C=()=>`modal-${++a}`,c=l,d=s,w=r(),z=C(),T=C(),V=t(()=>["fixed","inset-0","z-50","flex","items-center","justify-center","bg-black","bg-opacity-50","backdrop-blur-sm"]),L=t(()=>{const o=["modal-box","bg-white","rounded-lg","shadow-xl","max-h-[90vh]","overflow-hidden","flex","flex-col"];switch(c.size){case"sm":o.push("max-w-sm");break;case"md":o.push("max-w-md");break;case"lg":o.push("max-w-lg");break;case"xl":o.push("max-w-xl");break;case"full":o.push("max-w-full","w-full","h-full","m-4");break}return o.join(" ")}),_=t(()=>["flex","items-center","justify-between","p-6","border-b","border-gray-200"]),A=t(()=>["text-lg","font-semibold","text-gray-900"]),F=t(()=>["p-1","text-gray-400","hover:text-gray-600","transition-colors","duration-200"]),P=t(()=>["flex-1","p-6","overflow-y-auto"]),j=t(()=>["flex","items-center","justify-end","gap-3","p-6","border-t","border-gray-200"]),q=()=>{d("update:modelValue",!0),d("open")},f=()=>{c.persistent||(d("update:modelValue",!1),d("close"))};e({open:q,close:f});const H=()=>{c.closeOnOverlay&&f()},N=()=>{c.closeOnEsc&&(d("escape"),f())},$=()=>{document.body.style.overflow="hidden"},I=()=>{S(()=>{w.value?.focus()}),d("open")},X=()=>{document.body.style.overflow=""},Y=()=>{};return K(()=>c.modelValue,o=>{o&&S(()=>{w.value?.focus()})}),(o,M)=>(u(),R(Q,{to:"body"},[W(J,{name:"modal",onEnter:$,onAfterEnter:I,onLeave:X,onAfterLeave:Y},{default:G(()=>[o.modelValue?(u(),v("div",{key:0,class:n(V.value),role:"dialog","aria-modal":!0,"aria-labelledby":g(z),"aria-describedby":g(T),onClick:H,onKeydown:U(N,["esc"])},[p("div",{ref_key:"modalRef",ref:w,class:n(L.value),onClick:M[0]||(M[0]=Z(()=>{},["stop"]))},[o.$slots.header||o.title?(u(),v("header",{key:0,class:n(_.value)},[O(o.$slots,"header",{},()=>[p("h2",{id:g(z),class:n(A.value)},ee(o.title),11,ae)],!0),o.closable?(u(),v("button",{key:0,type:"button",class:n(F.value),"aria-label":"Close modal",onClick:f},M[1]||(M[1]=[p("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)):h("",!0)],2)):h("",!0),p("div",{id:g(T),class:n(P.value)},[O(o.$slots,"default",{},void 0,!0)],10,te),o.$slots.footer?(u(),v("footer",{key:1,class:n(j.value)},[O(o.$slots,"footer",{},void 0,!0)],2)):h("",!0)],2)],42,le)):h("",!0)]),_:3})]))}}),i=oe(E,[["__scopeId","data-v-9373c12e"]]);E.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},expose:[{name:"open"},{name:"close"}],props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"closable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnOverlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnEsc",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"close"},{name:"open"},{name:"escape"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/Modal.vue"]};const ie={title:"Actions/Modal",component:i,parameters:{layout:"centered",docs:{description:{component:"A flexible modal component with accessibility features, keyboard navigation, and customizable sizes."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Modal size"},title:{control:{type:"text"},description:"Modal title"},closable:{control:{type:"boolean"},description:"Show close button"},closeOnOverlay:{control:{type:"boolean"},description:"Close when clicking overlay"},closeOnEsc:{control:{type:"boolean"},description:"Close when pressing Escape"},persistent:{control:{type:"boolean"},description:"Prevent closing"}}},b={render:l=>({components:{Modal:i,Button:m},setup(){const e=r(!1);return{args:l,isOpen:e,openModal:()=>{e.value=!0},closeModal:()=>{e.value=!1}}},template:`
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
    `})},y={render:l=>({components:{Modal:i,Button:m},setup(){const e=r(!1);return{args:l,isOpen:e,openModal:()=>{e.value=!0},closeModal:()=>{e.value=!1}}},template:`
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
    `})},B={render:l=>({components:{Modal:i,Button:m},setup(){const e=r(!1);return{args:l,isOpen:e,openModal:()=>{e.value=!0},closeModal:()=>{e.value=!1}}},template:`
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
    `})},k={render:()=>({components:{Modal:i,Button:m},setup(){const l=r({sm:!1,md:!1,lg:!1,xl:!1,full:!1});return{modals:l,openModal:a=>{l.value[a]=!0},closeModal:a=>{l.value[a]=!1}}},template:`
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
    `})},x={render:l=>({components:{Modal:i,Button:m},setup(){const e=r(!1);return{args:l,isOpen:e,openModal:()=>{e.value=!0},closeModal:()=>{e.value=!1}}},template:`
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
    `})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const ce=["Default","WithFooter","CustomHeader","Sizes","Persistent"];export{B as CustomHeader,b as Default,x as Persistent,k as Sizes,y as WithFooter,ce as __namedExportsOrder,ie as default};
