import{d as ae,r as s,c as r,w as se,h as ne,i as de,j as re,k as ie,T as ce,l as ue,o as M,a as h,m as y,u as x,n as c,b as u,p as pe,e as F,t as me,f as q}from"./iframe-CO79KBgr.js";import{_ as fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as f}from"./Button-BHMDO6AI.js";import"./preload-helper-D9Z9MdNV.js";const ve=["aria-labelledby","aria-describedby","aria-hidden"],Me=["id"],be=["id"],D=ae({__name:"Modal",props:{modelValue:{type:Boolean},title:{},size:{default:"md"},closable:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1},trapFocus:{type:Boolean,default:!0},returnFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},zIndex:{default:50}},emits:["update:modelValue","close","open","escape","before-open","after-open","before-close","after-close"],setup(o,{expose:l,emit:m}){let d=0;const S=()=>`modal-${++d}`,t=o,n=m,i=s(),I=s(),v=s(),R=s(),j=s(),V=S(),L=S();let E=null;const H=r(()=>typeof window>"u"?!1:document.body!==null),P=r(()=>{const e=["fixed","inset-0","flex","items-center","justify-center","bg-black/50","backdrop-blur-sm","overscroll-contain"];return t.zIndex>=50?e.push("z-50"):t.zIndex>=40?e.push("z-40"):t.zIndex>=30?e.push("z-30"):t.zIndex>=20?e.push("z-20"):e.push("z-10"),e}),N=r(()=>{const e=["modal-box","bg-base-100","text-base-content","rounded-lg","shadow-xl","max-h-[90vh]","overflow-hidden","flex","flex-col","relative"];switch(t.size){case"sm":e.push("max-w-sm");break;case"md":e.push("max-w-md");break;case"lg":e.push("max-w-lg");break;case"xl":e.push("max-w-xl");break;case"full":e.push("max-w-full","w-full","h-full","m-4");break}return e.join(" ")}),W=r(()=>["flex","items-center","justify-between","p-6","border-b","border-base-200"]),$=r(()=>["text-lg","font-semibold","text-base-content"]),X=r(()=>["absolute","top-4","right-4","z-10","btn","btn-sm","btn-ghost","btn-circle","text-base-content/70","hover:text-base-content","hover:bg-base-200","transition-all","duration-200"]),Y=r(()=>["flex-1","p-6","overflow-y-auto"]),K=r(()=>["flex","items-center","justify-end","gap-3","p-6","border-t","border-base-200"]),T=()=>{if(!i.value)return[];const e=["button:not([disabled])","[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'];return Array.from(i.value.querySelectorAll(e.join(", ")))},b=()=>{if(!t.trapFocus)return;const e=T();e.length>0?e[0].focus():v.value?v.value.focus():i.value&&i.value.focus()},U=()=>{if(!t.trapFocus)return;const e=T();e.length>0?e[e.length-1].focus():v.value?v.value.focus():i.value&&i.value.focus()},G=()=>{n("before-open"),E=document.activeElement,n("update:modelValue",!0),n("open")},g=()=>{t.persistent||(n("before-close"),n("update:modelValue",!1),n("close"))};l({open:G,close:g,focus:b});const J=()=>{t.closeOnOverlay&&g()},Q=e=>{if(e.key==="Escape"&&t.closeOnEsc){e.preventDefault(),n("escape"),g();return}if(e.key==="Tab"&&t.trapFocus){const a=T();if(a.length===0)return;const A=a[0],_=a[a.length-1];e.shiftKey?document.activeElement===A&&(e.preventDefault(),_.focus()):document.activeElement===_&&(e.preventDefault(),A.focus())}},Z=()=>{document.body.style.overflow="hidden",document.body.style.paddingRight=te()+"px"},ee=()=>{q(()=>{t.autoFocus&&b()}),n("after-open")},oe=()=>{document.body.style.overflow="",document.body.style.paddingRight=""},le=()=>{t.returnFocus&&E instanceof HTMLElement&&E.focus(),n("after-close")},te=()=>{if(typeof window>"u")return 0;const e=document.createElement("div");e.style.cssText="width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const a=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),a};return se(()=>t.modelValue,e=>{e&&q(()=>{t.autoFocus&&b()})}),ne(()=>{document.body.style.overflow="",document.body.style.paddingRight=""}),(e,a)=>(M(),de(ue,{to:"body",disabled:!H.value},[re(ce,{name:"modal",onEnter:Z,onAfterEnter:ee,onLeave:oe,onAfterLeave:le},{default:ie(()=>[e.modelValue?(M(),h("div",{key:0,ref_key:"overlayRef",ref:I,class:c(P.value),role:"dialog","aria-modal":!0,"aria-labelledby":x(V),"aria-describedby":x(L),"aria-hidden":!e.modelValue,onClick:J,onKeydown:Q},[u("div",{ref_key:"modalRef",ref:i,class:c(N.value),tabindex:"-1",onClick:a[0]||(a[0]=pe(()=>{},["stop"]))},[u("div",{ref_key:"firstFocusableElement",ref:R,tabindex:"0",onFocus:U,class:"sr-only"}," Start of modal ",544),e.closable?(M(),h("button",{key:0,ref_key:"closeButtonRef",ref:v,type:"button",class:c(X.value),"aria-label":"Close modal",onClick:g},a[1]||(a[1]=[u("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)):y("",!0),e.$slots.header||e.title?(M(),h("header",{key:1,class:c(W.value)},[F(e.$slots,"header",{},()=>[u("h2",{id:x(V),class:c($.value)},me(e.title),11,Me)],!0)],2)):y("",!0),u("div",{id:x(L),class:c(Y.value)},[F(e.$slots,"default",{},void 0,!0)],10,be),e.$slots.footer?(M(),h("footer",{key:2,class:c(K.value)},[F(e.$slots,"footer",{},void 0,!0)],2)):y("",!0),u("div",{ref_key:"lastFocusableElement",ref:j,tabindex:"0",onFocus:b,class:"sr-only"}," End of modal ",544)],2)],42,ve)):y("",!0)]),_:3})],8,["disabled"]))}}),p=fe(D,[["__scopeId","data-v-10773198"]]);D.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},expose:[{name:"open"},{name:"close"},{name:"focus"}],props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"closable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnOverlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnEsc",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"trapFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"returnFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"autoFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"zIndex",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"50"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"close"},{name:"open"},{name:"escape"},{name:"before-open"},{name:"after-open"},{name:"before-close"},{name:"after-close"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/Modal.vue"]};const Be={title:"Actions/Modal",component:p,parameters:{layout:"centered",docs:{description:{component:"A flexible modal component with accessibility features, keyboard navigation, and customizable sizes."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Modal size"},title:{control:{type:"text"},description:"Modal title"},closable:{control:{type:"boolean"},description:"Show close button"},closeOnOverlay:{control:{type:"boolean"},description:"Close when clicking overlay"},closeOnEsc:{control:{type:"boolean"},description:"Close when pressing Escape"},persistent:{control:{type:"boolean"},description:"Prevent closing"}}},B={render:o=>({components:{Modal:p,Button:f},setup(){const l=s(!1);return{args:o,isOpen:l,openModal:()=>{console.log("Opening modal"),l.value=!0}}},template:`
      <div>
        <Button @click="openModal">Open Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Modal Title"
        >
          <p>This is a basic modal with some content. You can close it by clicking the X button, pressing Escape, or clicking outside the modal.</p>
          <p class="mt-2 text-sm text-gray-500">Modal state: {{ isOpen ? 'Open' : 'Closed' }}</p>
        </Modal>
      </div>
    `})},O={render:o=>({components:{Modal:p,Button:f},setup(){const l=s(!1);return{args:o,isOpen:l,openModal:()=>{l.value=!0},closeModal:()=>{l.value=!1}}},template:`
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
    `})},k={render:o=>({components:{Modal:p,Button:f},setup(){const l=s(!1);return{args:o,isOpen:l,openModal:()=>{l.value=!0},closeModal:()=>{l.value=!1}}},template:`
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
    `})},w={render:()=>({components:{Modal:p,Button:f},setup(){const o=s({sm:!1,md:!1,lg:!1,xl:!1,full:!1});return{modals:o,openModal:d=>{o.value[d]=!0},closeModal:d=>{o.value[d]=!1}}},template:`
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
    `})},C={render:()=>({components:{Modal:p,Button:f},setup(){const o=s(!1);return{isOpen:o,toggle:()=>{console.log("Before toggle:",o.value),o.value=!o.value,console.log("After toggle:",o.value)}}},template:`
      <div>
        <div class="mb-4">
          <Button @click="toggle">Toggle Modal ({{ isOpen ? 'Close' : 'Open' }})</Button>
          <p class="text-sm mt-2">Current state: {{ isOpen ? 'Open' : 'Closed' }}</p>
        </div>
        
        <Modal v-model="isOpen" title="Debug Modal">
          <p>This is a debug modal to test functionality.</p>
          <p class="mt-2">Current state inside modal: {{ isOpen ? 'Open' : 'Closed' }}</p>
        </Modal>
      </div>
    `})},z={render:o=>({components:{Modal:p,Button:f},setup(){const l=s(!1);return{args:o,isOpen:l,openModal:()=>{l.value=!0},closeModal:()=>{l.value=!1}}},template:`
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
        >
          <p>This modal cannot be closed by clicking outside, pressing Escape, or using the X button. You must use the Close button below.</p>
          
          <template #footer>
            <Button variant="primary" @click="closeModal">Close Modal</Button>
          </template>
        </Modal>
      </div>
    `})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      const isOpen = ref(false);
      const openModal = () => {
        console.log('Opening modal');
        isOpen.value = true;
      };

      // Remove the closeModal handler - let v-model handle it
      return {
        args,
        isOpen,
        openModal
      };
    },
    template: \`
      <div>
        <Button @click="openModal">Open Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Modal Title"
        >
          <p>This is a basic modal with some content. You can close it by clicking the X button, pressing Escape, or clicking outside the modal.</p>
          <p class="mt-2 text-sm text-gray-500">Modal state: {{ isOpen ? 'Open' : 'Closed' }}</p>
        </Modal>
      </div>
    \`
  })
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Modal,
      Button
    },
    setup() {
      const isOpen = ref(false);
      const toggle = () => {
        console.log('Before toggle:', isOpen.value);
        isOpen.value = !isOpen.value;
        console.log('After toggle:', isOpen.value);
      };
      return {
        isOpen,
        toggle
      };
    },
    template: \`
      <div>
        <div class="mb-4">
          <Button @click="toggle">Toggle Modal ({{ isOpen ? 'Close' : 'Open' }})</Button>
          <p class="text-sm mt-2">Current state: {{ isOpen ? 'Open' : 'Closed' }}</p>
        </div>
        
        <Modal v-model="isOpen" title="Debug Modal">
          <p>This is a debug modal to test functionality.</p>
          <p class="mt-2">Current state inside modal: {{ isOpen ? 'Open' : 'Closed' }}</p>
        </Modal>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
        >
          <p>This modal cannot be closed by clicking outside, pressing Escape, or using the X button. You must use the Close button below.</p>
          
          <template #footer>
            <Button variant="primary" @click="closeModal">Close Modal</Button>
          </template>
        </Modal>
      </div>
    \`
  })
}`,...z.parameters?.docs?.source}}};const Oe=["Default","WithFooter","CustomHeader","Sizes","Debug","Persistent"];export{k as CustomHeader,C as Debug,B as Default,z as Persistent,w as Sizes,O as WithFooter,Oe as __namedExportsOrder,Be as default};
