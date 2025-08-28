import{d as te,m as L,h as oe,r as a,c as m,w as se,i as ae,j as V,b as p,k as le,n as f,a as H,l as T,e as D,p as ne,u as R,T as re,o as M,t as ie,q as de,f as ce}from"./iframe-BHDwIEoY.js";import{_ as n}from"./Button-6vfuvNKj.js";import{_ as ue}from"./Icon-VsDADTjQ.js";import"./preload-helper-D9Z9MdNV.js";import"./x-BilxkClB.js";const me=["open"],pe=["id"],fe=["id"],r=te({__name:"Modal",props:L({title:{},size:{default:"md"},closable:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1},trapFocus:{type:Boolean,default:!0},returnFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},zIndex:{default:50}},{modelValue:{type:Boolean,default:!1},modelModifiers:{}}),emits:L(["close","open","escape","before-open","after-open","before-close","after-close"],["update:modelValue"]),setup(o,{expose:t,emit:l}){let I=0;const z=()=>`modal-${++I}`,b=oe(o,"modelValue"),s=o,d=l,A=a(),c=a(),v=a(),_=a(),N=a(),P=z(),U=z();let E=null;const $=m(()=>typeof window>"u"?!1:document.body!==null),j=m(()=>{const e=["modal"];return s.zIndex>=50?e.push("z-50"):s.zIndex>=40?e.push("z-40"):s.zIndex>=30?e.push("z-30"):s.zIndex>=20?e.push("z-20"):e.push("z-10"),e}),K=m(()=>{const e=["modal-box","bg-base-100","text-base-content","max-h-[90vh]","overflow-hidden","flex","flex-col","relative","overscroll-contain","focus:outline-none"];switch(s.size){case"sm":e.push("max-w-sm");break;case"md":e.push("max-w-md");break;case"lg":e.push("max-w-lg");break;case"xl":e.push("max-w-xl");break;case"full":e.push("max-w-full","w-full","h-full","m-4");break}return e.push("mx-4","md:mx-0","max-h-[calc(100vh-2rem)]","md:max-h-[90vh]"),e.join(" ")}),X=m(()=>["flex","items-center","justify-between","p-4","border-b","border-base-200"]),Y=m(()=>["text-lg","font-semibold","text-base-content"]),G=m(()=>["flex-1","p-4","overflow-y-auto"]),W=m(()=>["flex","items-center","justify-end","gap-3","p-4","border-t","border-base-200"]),C=()=>{if(!c.value)return[];const e=["button:not([disabled])","[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])'];return Array.from(c.value.querySelectorAll(e.join(", "))).filter(u=>!u.classList.contains("sr-only")&&u!==_.value&&u!==N.value&&!u.hasAttribute("data-focus-trap"))},S=()=>{if(!s.trapFocus)return;const e=C();e.length>0?e[0].focus():v.value?v.value.focus():c.value&&c.value.focus()},Z=()=>{if(!s.trapFocus)return;const e=C();e.length>0?e[e.length-1].focus():v.value?v.value.focus():c.value&&c.value.focus()},J=()=>{d("before-open"),E=document.activeElement,b.value=!0,d("open")},h=()=>{s.persistent||(d("before-close"),b.value=!1,d("close"))};t({open:J,close:h,focus:S});const Q=e=>{s.closeOnOverlay&&e.target===A.value&&h()},ee=e=>{if(e.key==="Escape"&&s.closeOnEsc){e.preventDefault(),d("escape"),h();return}if(e.key==="Tab"&&s.trapFocus){const i=C();if(i.length===0)return;const u=i[0],q=i[i.length-1];e.shiftKey?document.activeElement===u&&(e.preventDefault(),q.focus()):document.activeElement===q&&(e.preventDefault(),u.focus())}};return se(()=>b.value,e=>{e?(ce(()=>{s.autoFocus&&S()}),d("after-open")):(s.returnFocus&&E instanceof HTMLElement&&E.focus(),d("after-close"))}),ae(()=>{}),(e,i)=>(M(),V(re,{to:"body",disabled:!$.value},[p("dialog",{ref_key:"dialogRef",ref:A,class:f(j.value),open:b.value,onClick:Q,onKeydown:ee},[p("div",{ref_key:"modalRef",ref:c,class:f(K.value),tabindex:"-1",onClick:i[0]||(i[0]=le(()=>{},["stop"]))},[p("div",{ref_key:"firstFocusableElement",ref:_,tabindex:"0",onFocus:Z,class:"sr-only","data-focus-trap":"first"}," Start of modal ",544),e.$slots.header||e.title?(M(),H("header",{key:0,class:f(X.value)},[D(e.$slots,"header",{},()=>[p("h2",{id:R(P),class:f(Y.value)},ie(e.title),11,pe)]),e.closable?(M(),V(n,{key:0,ref_key:"closeButtonRef",ref:v,variant:"ghost",size:"xs",circle:"","aria-label":"Close modal",onClick:h},{default:ne(()=>[de(ue,{name:"x",size:"sm"})]),_:1},512)):T("",!0)],2)):T("",!0),p("div",{id:R(U),class:f(G.value)},[D(e.$slots,"default")],10,fe),e.$slots.footer?(M(),H("footer",{key:1,class:f(W.value)},[D(e.$slots,"footer")],2)):T("",!0),p("div",{ref_key:"lastFocusableElement",ref:N,tabindex:"0",onFocus:S,class:"sr-only","data-focus-trap":"last"}," End of modal ",544)],2)],42,me)],8,["disabled"]))}});r.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},expose:[{name:"open"},{name:"close"},{name:"focus"}],props:[{name:"title",required:!1,type:{name:"string"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'},{name:'"xl"'},{name:'"full"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"closable",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnOverlay",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"closeOnEsc",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"persistent",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"trapFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"returnFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"autoFocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"zIndex",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"50"}}],events:[{name:"close"},{name:"open"},{name:"escape"},{name:"before-open"},{name:"after-open"},{name:"before-close"},{name:"after-close"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Actions/Modal.vue"]};const ye={title:"Actions/Modal",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible modal component built on DaisyUI's native modal system. Uses the HTML dialog element with DaisyUI modal classes for consistent styling and behavior. Features Button and Icon components for the close button. Supports Vue 3.5+ `defineModel()` for two-way binding."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Modal size - responsive design with mobile-first approach"},title:{control:{type:"text"},description:"Modal title displayed in the header"},closable:{control:{type:"boolean"},description:"Show close button in the top-right corner"},closeOnOverlay:{control:{type:"boolean"},description:"Close when clicking the backdrop overlay"},closeOnEsc:{control:{type:"boolean"},description:"Close when pressing the Escape key"},persistent:{control:{type:"boolean"},description:"Prevent modal from being closed (overrides other close behaviors)"},trapFocus:{control:{type:"boolean"},description:"Trap focus within the modal for accessibility"},returnFocus:{control:{type:"boolean"},description:"Return focus to the previous element when modal closes"},autoFocus:{control:{type:"boolean"},description:"Automatically focus the first focusable element when modal opens"},zIndex:{control:{type:"number",min:10,max:100,step:10},description:"Z-index for modal layering"}}},g={render:o=>({components:{Modal:r,Button:n},setup(){const t=a(!1);return{args:o,isOpen:t,openModal:()=>{console.log("Opening modal"),t.value=!0}}},template:`
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
    `}),args:{size:"md",closable:!0,closeOnOverlay:!0,closeOnEsc:!0,persistent:!1,trapFocus:!0,returnFocus:!0,autoFocus:!0,zIndex:50}},y={render:()=>({components:{Button:n},setup(){return{showModal:()=>{const t=document.getElementById("my_modal_1");t&&t.showModal()}}},template:`
      <div>
        <Button @click="showModal">Open DaisyUI Native Modal</Button>
        
        <dialog id="my_modal_1" class="modal">
          <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <Button variant="primary">Close</Button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    `}),parameters:{docs:{description:{story:"This example shows the traditional DaisyUI modal pattern using the native HTML dialog element with showModal() method."}}}},O={render:o=>({components:{Modal:r,Button:n},setup(){const t=a(!1);return{args:o,isOpen:t,openModal:()=>{t.value=!0}}},template:`
      <div>
        <Button @click="openModal">Open Modal with Footer</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Confirm Action"
        >
          <p>Are you sure you want to perform this action? This cannot be undone.</p>
          
          <template #footer>
            <Button variant="outline" @click="isOpen = false">Cancel</Button>
            <Button variant="primary" @click="isOpen = false">Confirm</Button>
          </template>
        </Modal>
      </div>
    `}),args:{size:"md",closable:!0,closeOnOverlay:!0,closeOnEsc:!0,persistent:!1}},x={render:o=>({components:{Modal:r,Button:n},setup(){const t=a(!1);return{args:o,isOpen:t,openModal:()=>{t.value=!0}}},template:`
      <div>
        <Button @click="openModal">Open Modal with Custom Header</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
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
    `}),args:{size:"md",closable:!0,closeOnOverlay:!0,closeOnEsc:!0,persistent:!1}},B={render:()=>({components:{Modal:r,Button:n},setup(){const o=a({sm:!1,md:!1,lg:!1,xl:!1,full:!1});return{modals:o,openModal:l=>{o.value[l]=!0}}},template:`
      <div class="space-x-2">
        <Button @click="openModal('sm')">Small</Button>
        <Button @click="openModal('md')">Medium</Button>
        <Button @click="openModal('lg')">Large</Button>
        <Button @click="openModal('xl')">Extra Large</Button>
        <Button @click="openModal('full')">Full Screen</Button>
        
        <Modal v-model="modals.sm" size="sm" title="Small Modal">
          <p>This is a small modal perfect for simple confirmations or brief messages.</p>
        </Modal>
        
        <Modal v-model="modals.md" size="md" title="Medium Modal">
          <p>This is a medium modal - the default size for most use cases.</p>
        </Modal>
        
        <Modal v-model="modals.lg" size="lg" title="Large Modal">
          <p>This is a large modal with more content space for forms or detailed information.</p>
        </Modal>
        
        <Modal v-model="modals.xl" size="xl" title="Extra Large Modal">
          <p>This is an extra large modal with even more content space for complex forms, detailed information, or rich content displays.</p>
        </Modal>
        
        <Modal v-model="modals.full" size="full" title="Full Screen Modal">
          <p>This is a full screen modal that takes up the entire viewport. Perfect for complex workflows, detailed forms, or immersive experiences.</p>
        </Modal>
      </div>
    `})},k={render:o=>({components:{Modal:r,Button:n},setup(){const t=a(!1);return{args:o,isOpen:t,openModal:()=>{t.value=!0}}},template:`
      <div>
        <Button @click="openModal">Open Accessible Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Accessibility Features"
        >
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold mb-2">Keyboard Navigation</h3>
              <ul class="text-sm space-y-1">
                <li>• <kbd class="kbd kbd-sm">Tab</kbd> - Navigate between focusable elements</li>
                <li>• <kbd class="kbd kbd-sm">Shift + Tab</kbd> - Navigate backwards</li>
                <li>• <kbd class="kbd kbd-sm">Escape</kbd> - Close modal (if enabled)</li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-semibold mb-2">Screen Reader Support</h3>
              <ul class="text-sm space-y-1">
                <li>• Proper ARIA attributes</li>
                <li>• Focus trap for keyboard users</li>
                <li>• Descriptive labels and roles</li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-semibold mb-2">Focus Management</h3>
              <ul class="text-sm space-y-1">
                <li>• Auto-focus on first element</li>
                <li>• Return focus when closed</li>
                <li>• Focus trap within modal</li>
              </ul>
            </div>
          </div>
          
          <template #footer>
            <Button variant="primary" @click="isOpen = false">Got it!</Button>
          </template>
        </Modal>
      </div>
    `}),args:{size:"lg",closable:!0,closeOnOverlay:!0,closeOnEsc:!0,persistent:!1,trapFocus:!0,returnFocus:!0,autoFocus:!0}},w={render:o=>({components:{Modal:r,Button:n},setup(){const t=a(!1);return{args:o,isOpen:t,openModal:()=>{t.value=!0}}},template:`
      <div>
        <Button @click="openModal">Open Persistent Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Persistent Modal"
        >
          <p>This modal cannot be closed by clicking outside, pressing Escape, or using the X button. You must use the Close button below.</p>
          
          <template #footer>
            <Button variant="primary" @click="isOpen = false">Close Modal</Button>
          </template>
        </Modal>
      </div>
    `}),args:{size:"md",closable:!1,closeOnOverlay:!1,closeOnEsc:!1,persistent:!0,trapFocus:!0,returnFocus:!0,autoFocus:!0}},F={render:o=>({components:{Modal:r,Button:n},setup(){const t=a(!1),l=a({name:"",email:"",message:""});return{args:o,isOpen:t,openModal:()=>{t.value=!0},formData:l,submitForm:()=>{console.log("Form submitted:",l.value),t.value=!1,l.value={name:"",email:"",message:""}}}},template:`
      <div>
        <Button @click="openModal">Open Form Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Contact Form"
        >
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium mb-1">Name</label>
              <input 
                id="name"
                v-model="formData.name"
                type="text" 
                class="input input-bordered w-full" 
                required
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium mb-1">Email</label>
              <input 
                id="email"
                v-model="formData.email"
                type="email" 
                class="input input-bordered w-full" 
                required
              />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium mb-1">Message</label>
              <textarea 
                id="message"
                v-model="formData.message"
                class="textarea textarea-bordered w-full h-24" 
                required
              ></textarea>
            </div>
          </form>
          
          <template #footer>
            <Button variant="outline" @click="isOpen = false">Cancel</Button>
            <Button variant="primary" @click="submitForm">Submit</Button>
          </template>
        </Modal>
      </div>
    `}),args:{size:"lg",closable:!0,closeOnOverlay:!1,closeOnEsc:!0,persistent:!1,trapFocus:!0,returnFocus:!0,autoFocus:!0}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
  }),
  args: {
    size: 'md',
    closable: true,
    closeOnOverlay: true,
    closeOnEsc: true,
    persistent: false,
    trapFocus: true,
    returnFocus: true,
    autoFocus: true,
    zIndex: 50
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    setup() {
      const showModal = () => {
        const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
        if (modal) {
          modal.showModal();
        }
      };
      return {
        showModal
      };
    },
    template: \`
      <div>
        <Button @click="showModal">Open DaisyUI Native Modal</Button>
        
        <dialog id="my_modal_1" class="modal">
          <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <Button variant="primary">Close</Button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This example shows the traditional DaisyUI modal pattern using the native HTML dialog element with showModal() method.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
      return {
        args,
        isOpen,
        openModal
      };
    },
    template: \`
      <div>
        <Button @click="openModal">Open Modal with Footer</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Confirm Action"
        >
          <p>Are you sure you want to perform this action? This cannot be undone.</p>
          
          <template #footer>
            <Button variant="outline" @click="isOpen = false">Cancel</Button>
            <Button variant="primary" @click="isOpen = false">Confirm</Button>
          </template>
        </Modal>
      </div>
    \`
  }),
  args: {
    size: 'md',
    closable: true,
    closeOnOverlay: true,
    closeOnEsc: true,
    persistent: false
  }
}`,...O.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      return {
        args,
        isOpen,
        openModal
      };
    },
    template: \`
      <div>
        <Button @click="openModal">Open Modal with Custom Header</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
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
  }),
  args: {
    size: 'md',
    closable: true,
    closeOnOverlay: true,
    closeOnEsc: true,
    persistent: false
  }
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
      return {
        modals,
        openModal
      };
    },
    template: \`
      <div class="space-x-2">
        <Button @click="openModal('sm')">Small</Button>
        <Button @click="openModal('md')">Medium</Button>
        <Button @click="openModal('lg')">Large</Button>
        <Button @click="openModal('xl')">Extra Large</Button>
        <Button @click="openModal('full')">Full Screen</Button>
        
        <Modal v-model="modals.sm" size="sm" title="Small Modal">
          <p>This is a small modal perfect for simple confirmations or brief messages.</p>
        </Modal>
        
        <Modal v-model="modals.md" size="md" title="Medium Modal">
          <p>This is a medium modal - the default size for most use cases.</p>
        </Modal>
        
        <Modal v-model="modals.lg" size="lg" title="Large Modal">
          <p>This is a large modal with more content space for forms or detailed information.</p>
        </Modal>
        
        <Modal v-model="modals.xl" size="xl" title="Extra Large Modal">
          <p>This is an extra large modal with even more content space for complex forms, detailed information, or rich content displays.</p>
        </Modal>
        
        <Modal v-model="modals.full" size="full" title="Full Screen Modal">
          <p>This is a full screen modal that takes up the entire viewport. Perfect for complex workflows, detailed forms, or immersive experiences.</p>
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
      return {
        args,
        isOpen,
        openModal
      };
    },
    template: \`
      <div>
        <Button @click="openModal">Open Accessible Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Accessibility Features"
        >
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold mb-2">Keyboard Navigation</h3>
              <ul class="text-sm space-y-1">
                <li>• <kbd class="kbd kbd-sm">Tab</kbd> - Navigate between focusable elements</li>
                <li>• <kbd class="kbd kbd-sm">Shift + Tab</kbd> - Navigate backwards</li>
                <li>• <kbd class="kbd kbd-sm">Escape</kbd> - Close modal (if enabled)</li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-semibold mb-2">Screen Reader Support</h3>
              <ul class="text-sm space-y-1">
                <li>• Proper ARIA attributes</li>
                <li>• Focus trap for keyboard users</li>
                <li>• Descriptive labels and roles</li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-semibold mb-2">Focus Management</h3>
              <ul class="text-sm space-y-1">
                <li>• Auto-focus on first element</li>
                <li>• Return focus when closed</li>
                <li>• Focus trap within modal</li>
              </ul>
            </div>
          </div>
          
          <template #footer>
            <Button variant="primary" @click="isOpen = false">Got it!</Button>
          </template>
        </Modal>
      </div>
    \`
  }),
  args: {
    size: 'lg',
    closable: true,
    closeOnOverlay: true,
    closeOnEsc: true,
    persistent: false,
    trapFocus: true,
    returnFocus: true,
    autoFocus: true
  }
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
      return {
        args,
        isOpen,
        openModal
      };
    },
    template: \`
      <div>
        <Button @click="openModal">Open Persistent Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Persistent Modal"
        >
          <p>This modal cannot be closed by clicking outside, pressing Escape, or using the X button. You must use the Close button below.</p>
          
          <template #footer>
            <Button variant="primary" @click="isOpen = false">Close Modal</Button>
          </template>
        </Modal>
      </div>
    \`
  }),
  args: {
    size: 'md',
    closable: false,
    closeOnOverlay: false,
    closeOnEsc: false,
    persistent: true,
    trapFocus: true,
    returnFocus: true,
    autoFocus: true
  }
}`,...w.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      const isOpen = ref(false);
      const formData = ref({
        name: '',
        email: '',
        message: ''
      });
      const openModal = () => {
        isOpen.value = true;
      };
      const submitForm = () => {
        console.log('Form submitted:', formData.value);
        isOpen.value = false;
        // Reset form
        formData.value = {
          name: '',
          email: '',
          message: ''
        };
      };
      return {
        args,
        isOpen,
        openModal,
        formData,
        submitForm
      };
    },
    template: \`
      <div>
        <Button @click="openModal">Open Form Modal</Button>
        
        <Modal 
          v-model="isOpen" 
          v-bind="args"
          title="Contact Form"
        >
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium mb-1">Name</label>
              <input 
                id="name"
                v-model="formData.name"
                type="text" 
                class="input input-bordered w-full" 
                required
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium mb-1">Email</label>
              <input 
                id="email"
                v-model="formData.email"
                type="email" 
                class="input input-bordered w-full" 
                required
              />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium mb-1">Message</label>
              <textarea 
                id="message"
                v-model="formData.message"
                class="textarea textarea-bordered w-full h-24" 
                required
              ></textarea>
            </div>
          </form>
          
          <template #footer>
            <Button variant="outline" @click="isOpen = false">Cancel</Button>
            <Button variant="primary" @click="submitForm">Submit</Button>
          </template>
        </Modal>
      </div>
    \`
  }),
  args: {
    size: 'lg',
    closable: true,
    closeOnOverlay: false,
    closeOnEsc: true,
    persistent: false,
    trapFocus: true,
    returnFocus: true,
    autoFocus: true
  }
}`,...F.parameters?.docs?.source}}};const Oe=["Default","DaisyUINative","WithFooter","CustomHeader","Sizes","Accessibility","Persistent","FormExample"];export{k as Accessibility,x as CustomHeader,y as DaisyUINative,g as Default,F as FormExample,w as Persistent,B as Sizes,O as WithFooter,Oe as __namedExportsOrder,ye as default};
