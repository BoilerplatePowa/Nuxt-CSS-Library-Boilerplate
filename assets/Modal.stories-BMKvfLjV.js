import{d as ae,r as s,c as d,w as se,h as ne,i as re,j as de,k as ie,T as ce,l as ue,o as b,a as y,m as B,u as x,n as u,b as p,p as pe,e as S,t as me,f as I}from"./iframe-DKx4txre.js";import{_ as fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as v}from"./Button-865Q5n9Z.js";import"./preload-helper-D9Z9MdNV.js";const ve=["aria-labelledby","aria-describedby","aria-hidden"],Me=["id"],be=["id"],R=ae({__name:"Modal",props:{modelValue:{type:Boolean},title:{},size:{default:"md"},closable:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1},trapFocus:{type:Boolean,default:!0},returnFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},zIndex:{default:50}},emits:["update:modelValue","close","open","escape","before-open","after-open","before-close","after-close"],setup(o,{expose:t,emit:f}){let r=0;const V=()=>`modal-${++r}`,l=o,n=f,i=s(),j=s(),M=s(),L=s(),_=s(),A=V(),q=V();let T=null;const H=d(()=>typeof window>"u"?!1:document.body!==null),P=d(()=>{const e=["fixed","inset-0","flex","items-center","justify-center","bg-black/50","backdrop-blur-sm","overscroll-contain"];return l.zIndex>=50?e.push("z-50"):l.zIndex>=40?e.push("z-40"):l.zIndex>=30?e.push("z-30"):l.zIndex>=20?e.push("z-20"):e.push("z-10"),e}),N=d(()=>{const e=["modal-box","bg-base-100","text-base-content","rounded-lg","shadow-xl","max-h-[90vh]","overflow-hidden","flex","flex-col","relative"];switch(l.size){case"sm":e.push("max-w-sm");break;case"md":e.push("max-w-md");break;case"lg":e.push("max-w-lg");break;case"xl":e.push("max-w-xl");break;case"full":e.push("max-w-full","w-full","h-full","m-4");break}return e.join(" ")}),$=d(()=>["flex","items-center","justify-between","p-6","border-b","border-base-200"]),W=d(()=>["text-lg","font-semibold","text-base-content"]),X=d(()=>["absolute","top-4","right-4","z-10","btn","btn-sm","btn-ghost","btn-circle","text-base-content/70","hover:text-base-content","hover:bg-base-200","transition-all","duration-200"]),Y=d(()=>["flex-1","p-6","overflow-y-auto"]),K=d(()=>["flex","items-center","justify-end","gap-3","p-6","border-t","border-base-200"]),F=()=>{if(!i.value)return[];const e=["button:not([disabled])","[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'];return Array.from(i.value.querySelectorAll(e.join(", "))).filter(c=>!c.classList.contains("sr-only")&&c!==L.value&&c!==_.value&&!c.hasAttribute("data-focus-trap"))},g=()=>{if(!l.trapFocus)return;const e=F();e.length>0?e[0].focus():M.value?M.value.focus():i.value&&i.value.focus()},U=()=>{if(!l.trapFocus)return;const e=F();e.length>0?e[e.length-1].focus():M.value?M.value.focus():i.value&&i.value.focus()},G=()=>{n("before-open"),T=document.activeElement,n("update:modelValue",!0),n("open")},h=()=>{l.persistent||(n("before-close"),n("update:modelValue",!1),n("close"))};t({open:G,close:h,focus:g});const J=()=>{l.closeOnOverlay&&h()},Q=e=>{if(e.key==="Escape"&&l.closeOnEsc){e.preventDefault(),n("escape"),h();return}if(e.key==="Tab"&&l.trapFocus){const a=F();if(a.length===0)return;const c=a[0],D=a[a.length-1];e.shiftKey?document.activeElement===c&&(e.preventDefault(),D.focus()):document.activeElement===D&&(e.preventDefault(),c.focus())}},Z=()=>{document.body.style.overflow="hidden",document.body.style.paddingRight=le()+"px"},ee=()=>{I(()=>{l.autoFocus&&g()}),n("after-open")},oe=()=>{document.body.style.overflow="",document.body.style.paddingRight=""},te=()=>{l.returnFocus&&T instanceof HTMLElement&&T.focus(),n("after-close")},le=()=>{if(typeof window>"u")return 0;const e=document.createElement("div");e.style.cssText="width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);const a=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),a};return se(()=>l.modelValue,e=>{e&&I(()=>{l.autoFocus&&g()})}),ne(()=>{document.body.style.overflow="",document.body.style.paddingRight=""}),(e,a)=>(b(),re(ue,{to:"body",disabled:!H.value},[de(ce,{name:"modal",onEnter:Z,onAfterEnter:ee,onLeave:oe,onAfterLeave:te},{default:ie(()=>[e.modelValue?(b(),y("div",{key:0,ref_key:"overlayRef",ref:j,class:u(P.value),role:"dialog","aria-modal":!0,"aria-labelledby":x(A),"aria-describedby":x(q),"aria-hidden":!e.modelValue,onClick:J,onKeydown:Q},[p("div",{ref_key:"modalRef",ref:i,class:u(N.value),tabindex:"-1",onClick:a[0]||(a[0]=pe(()=>{},["stop"]))},[p("div",{ref_key:"firstFocusableElement",ref:L,tabindex:"0",onFocus:U,class:"sr-only","data-focus-trap":"first"}," Start of modal ",544),e.closable?(b(),y("button",{key:0,ref_key:"closeButtonRef",ref:M,type:"button",class:u(X.value),"aria-label":"Close modal",onClick:h},a[1]||(a[1]=[p("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)):B("",!0),e.$slots.header||e.title?(b(),y("header",{key:1,class:u($.value)},[S(e.$slots,"header",{},()=>[p("h2",{id:x(A),class:u(W.value)},me(e.title),11,Me)],!0)],2)):B("",!0),p("div",{id:x(q),class:u(Y.value)},[S(e.$slots,"default",{},void 0,!0)],10,be),e.$slots.footer?(b(),y("footer",{key:2,class:u(K.value)},[S(e.$slots,"footer",{},void 0,!0)],2)):B("",!0),p("div",{ref_key:"lastFocusableElement",ref:_,tabindex:"0",onFocus:g,class:"sr-only","data-focus-trap":"last"}," End of modal ",544)],2)],42,ve)):B("",!0)]),_:3})],8,["disabled"]))}}),m=fe(R,[["__scopeId","data-v-7378b1c3"]]);R.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},expose:[{name:"open"},{name:"close"},{name:"focus"}],props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"title",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"closable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnOverlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnEsc",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"trapFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"returnFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"autoFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"zIndex",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"50"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"close"},{name:"open"},{name:"escape"},{name:"before-open"},{name:"after-open"},{name:"before-close"},{name:"after-close"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/Modal.vue"]};const xe={title:"Actions/Modal",component:m,parameters:{layout:"centered",docs:{description:{component:"A flexible modal component with accessibility features, keyboard navigation, and customizable sizes."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Modal size"},title:{control:{type:"text"},description:"Modal title"},closable:{control:{type:"boolean"},description:"Show close button"},closeOnOverlay:{control:{type:"boolean"},description:"Close when clicking overlay"},closeOnEsc:{control:{type:"boolean"},description:"Close when pressing Escape"},persistent:{control:{type:"boolean"},description:"Prevent closing"}}},O={render:o=>({components:{Modal:m,Button:v},setup(){const t=s(!1);return{args:o,isOpen:t,openModal:()=>{console.log("Opening modal"),t.value=!0}}},template:`
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
    `})},k={render:o=>({components:{Modal:m,Button:v},setup(){const t=s(!1);return{args:o,isOpen:t,openModal:()=>{t.value=!0},closeModal:()=>{t.value=!1}}},template:`
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
    `})},w={render:o=>({components:{Modal:m,Button:v},setup(){const t=s(!1);return{args:o,isOpen:t,openModal:()=>{t.value=!0},closeModal:()=>{t.value=!1}}},template:`
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
    `})},C={render:()=>({components:{Modal:m,Button:v},setup(){const o=s({sm:!1,md:!1,lg:!1,xl:!1,full:!1});return{modals:o,openModal:r=>{o.value[r]=!0},closeModal:r=>{o.value[r]=!1}}},template:`
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
    `})},z={render:()=>({components:{Modal:m,Button:v},setup(){const o=s(!1);return{isOpen:o,toggle:()=>{console.log("Before toggle:",o.value),o.value=!o.value,console.log("After toggle:",o.value)}}},template:`
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
    `})},E={render:o=>({components:{Modal:m,Button:v},setup(){const t=s(!1);return{args:o,isOpen:t,openModal:()=>{t.value=!0},closeModal:()=>{t.value=!1}}},template:`
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
    `})};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const Oe=["Default","WithFooter","CustomHeader","Sizes","Debug","Persistent"];export{w as CustomHeader,z as Debug,O as Default,E as Persistent,C as Sizes,k as WithFooter,Oe as __namedExportsOrder,xe as default};
