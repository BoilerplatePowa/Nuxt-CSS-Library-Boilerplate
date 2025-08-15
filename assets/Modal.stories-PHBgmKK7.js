import{d as le,r as n,c,w as te,h as ae,i as ne,j as se,k as re,T as de,l as ce,o as v,a as y,m as g,u as x,n as i,b as u,p as ie,e as F,t as ue,f as q}from"./iframe-BEoDMSxF.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as M}from"./Button-D1kDCqg6.js";import"./preload-helper-D9Z9MdNV.js";const me=["aria-labelledby","aria-describedby","aria-hidden"],fe=["id"],ve=["id"],A=le({__name:"Modal",props:{modelValue:{type:Boolean},title:{},size:{default:"md"},closable:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1},trapFocus:{type:Boolean,default:!0},returnFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},zIndex:{default:50}},emits:["update:modelValue","close","open","escape","before-open","after-open","before-close","after-close"],setup(l,{expose:o,emit:p}){let s=0;const T=()=>`modal-${++s}`,t=l,r=p,d=n(),j=n(),f=n(),H=n(),P=n(),S=T(),V=T();let z=null;const R=c(()=>["fixed","inset-0",`z-${t.zIndex}`,"flex","items-center","justify-center","bg-black","bg-opacity-50","backdrop-blur-sm","overscroll-contain"]),D=c(()=>{const e=["modal-box","bg-white","rounded-lg","shadow-xl","max-h-[90vh]","overflow-hidden","flex","flex-col"];switch(t.size){case"sm":e.push("max-w-sm");break;case"md":e.push("max-w-md");break;case"lg":e.push("max-w-lg");break;case"xl":e.push("max-w-xl");break;case"full":e.push("max-w-full","w-full","h-full","m-4");break}return e.join(" ")}),I=c(()=>["flex","items-center","justify-between","p-6","border-b","border-gray-200"]),N=c(()=>["text-lg","font-semibold","text-gray-900"]),$=c(()=>["p-1","text-gray-400","hover:text-gray-600","transition-colors","duration-200"]),W=c(()=>["flex-1","p-6","overflow-y-auto"]),X=c(()=>["flex","items-center","justify-end","gap-3","p-6","border-t","border-gray-200"]),E=()=>{if(!d.value)return[];const e=["button:not([disabled])","[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'];return Array.from(d.value.querySelectorAll(e.join(", ")))},b=()=>{if(!t.trapFocus)return;const e=E();e.length>0?e[0].focus():f.value?f.value.focus():d.value&&d.value.focus()},Y=()=>{if(!t.trapFocus)return;const e=E();e.length>0?e[e.length-1].focus():f.value?f.value.focus():d.value&&d.value.focus()},K=()=>{r("before-open"),z=document.activeElement,r("update:modelValue",!0),r("open")},h=()=>{t.persistent||(r("before-close"),r("update:modelValue",!1),r("close"))};o({open:K,close:h,focus:b});const U=()=>{t.closeOnOverlay&&h()},G=e=>{if(e.key==="Escape"&&t.closeOnEsc){e.preventDefault(),r("escape"),h();return}if(e.key==="Tab"&&t.trapFocus){const a=E();if(a.length===0)return;const L=a[0],_=a[a.length-1];e.shiftKey?document.activeElement===L&&(e.preventDefault(),_.focus()):document.activeElement===_&&(e.preventDefault(),L.focus())}},J=()=>{document.body.style.overflow="hidden",document.body.style.paddingRight=oe()+"px"},Q=()=>{q(()=>{t.autoFocus&&b()}),r("after-open")},Z=()=>{document.body.style.overflow="",document.body.style.paddingRight=""},ee=()=>{t.returnFocus&&z instanceof HTMLElement&&z.focus(),r("after-close")},oe=()=>{if(typeof window>"u")return 0;const e=document.createElement("div");e.style.cssText="width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const a=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),a};return te(()=>t.modelValue,e=>{e&&q(()=>{t.autoFocus&&b()})}),ae(()=>{document.body.style.overflow="",document.body.style.paddingRight=""}),(e,a)=>(v(),ne(ce,{to:"body"},[se(de,{name:"modal",onEnter:J,onAfterEnter:Q,onLeave:Z,onAfterLeave:ee},{default:re(()=>[e.modelValue?(v(),y("div",{key:0,ref_key:"overlayRef",ref:j,class:i(R.value),role:"dialog","aria-modal":!0,"aria-labelledby":x(S),"aria-describedby":x(V),"aria-hidden":!e.modelValue,onClick:U,onKeydown:G},[u("div",{ref_key:"modalRef",ref:d,class:i(D.value),tabindex:"-1",onClick:a[0]||(a[0]=ie(()=>{},["stop"]))},[u("div",{ref_key:"firstFocusableElement",ref:H,tabindex:"0",onFocus:Y,class:"sr-only"}," Start of modal ",544),e.$slots.header||e.title?(v(),y("header",{key:0,class:i(I.value)},[F(e.$slots,"header",{},()=>[u("h2",{id:x(S),class:i(N.value)},ue(e.title),11,fe)],!0),e.closable?(v(),y("button",{key:0,ref_key:"closeButtonRef",ref:f,type:"button",class:i($.value),"aria-label":"Close modal",onClick:h},a[1]||(a[1]=[u("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)):g("",!0)],2)):g("",!0),u("div",{id:x(V),class:i(W.value)},[F(e.$slots,"default",{},void 0,!0)],10,ve),e.$slots.footer?(v(),y("footer",{key:1,class:i(X.value)},[F(e.$slots,"footer",{},void 0,!0)],2)):g("",!0),u("div",{ref_key:"lastFocusableElement",ref:P,tabindex:"0",onFocus:b,class:"sr-only"}," End of modal ",544)],2)],42,me)):g("",!0)]),_:3})]))}}),m=pe(A,[["__scopeId","data-v-2a454b94"]]);A.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},expose:[{name:"open"},{name:"close"},{name:"focus"}],props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"closable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnOverlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnEsc",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"trapFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"returnFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"autoFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"zIndex",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"50"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"close"},{name:"open"},{name:"escape"},{name:"before-open"},{name:"after-open"},{name:"before-close"},{name:"after-close"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/Modal.vue"]};const ge={title:"Actions/Modal",component:m,parameters:{layout:"centered",docs:{description:{component:"A flexible modal component with accessibility features, keyboard navigation, and customizable sizes."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Modal size"},title:{control:{type:"text"},description:"Modal title"},closable:{control:{type:"boolean"},description:"Show close button"},closeOnOverlay:{control:{type:"boolean"},description:"Close when clicking overlay"},closeOnEsc:{control:{type:"boolean"},description:"Close when pressing Escape"},persistent:{control:{type:"boolean"},description:"Prevent closing"}}},B={render:l=>({components:{Modal:m,Button:M},setup(){const o=n(!1);return{args:l,isOpen:o,openModal:()=>{o.value=!0},closeModal:()=>{o.value=!1}}},template:`
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
    `})},k={render:l=>({components:{Modal:m,Button:M},setup(){const o=n(!1);return{args:l,isOpen:o,openModal:()=>{o.value=!0},closeModal:()=>{o.value=!1}}},template:`
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
    `})},w={render:l=>({components:{Modal:m,Button:M},setup(){const o=n(!1);return{args:l,isOpen:o,openModal:()=>{o.value=!0},closeModal:()=>{o.value=!1}}},template:`
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
    `})},O={render:()=>({components:{Modal:m,Button:M},setup(){const l=n({sm:!1,md:!1,lg:!1,xl:!1,full:!1});return{modals:l,openModal:s=>{l.value[s]=!0},closeModal:s=>{l.value[s]=!1}}},template:`
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
    `})},C={render:l=>({components:{Modal:m,Button:M},setup(){const o=n(!1);return{args:l,isOpen:o,openModal:()=>{o.value=!0},closeModal:()=>{o.value=!1}}},template:`
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
    `})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const xe=["Default","WithFooter","CustomHeader","Sizes","Persistent"];export{w as CustomHeader,B as Default,C as Persistent,O as Sizes,k as WithFooter,xe as __namedExportsOrder,ge as default};
