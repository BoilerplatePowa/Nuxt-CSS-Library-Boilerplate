import{A as d}from"./Accordion-cKc8F3GM.js";import"./iframe-CzrYmmIK.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Data Display/Accordion",component:d,parameters:{layout:"centered",docs:{description:{component:"Collapsible content component with customizable panels and smooth animations. Supports v-model for controlled state management with explicit openItem naming."}}},argTypes:{items:{control:"object",description:"Array of accordion items with title and content"},multiple:{control:"boolean",description:"Allow multiple panels to be open simultaneously"},variant:{control:{type:"select"},options:["default","bordered","compact"],description:"Accordion variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Accordion size"},disabled:{control:"boolean",description:"Disable the accordion"},id:{control:"text",description:"Custom ID for the accordion (for accessibility and testing)"}},tags:["autodocs"]},e=[{value:"1",title:"What is your return policy?",content:"We offer a 30-day return policy for all unused items in original packaging. Return shipping is free for defective items."},{value:"2",title:"How long does shipping take?",content:"Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery."},{value:"3",title:"Do you ship internationally?",content:"Yes, we ship to over 50 countries worldwide. International shipping times vary by location."}],t={args:{items:e}},a={render:()=>({components:{Accordion:d},data(){return{selectedValue:"2",items:e}},template:`
      <div class="space-y-4">
        <div class="text-sm">
          <strong>Selected value:</strong> {{ selectedValue || 'None' }}
        </div>
        <Accordion 
          v-model="selectedValue"
          :items="items"
        />
        <div class="flex gap-2">
          <button 
            class="btn btn-sm btn-outline"
            @click="selectedValue = '1'"
          >
            Select Item 1
          </button>
          <button 
            class="btn btn-sm btn-outline"
            @click="selectedValue = '2'"
          >
            Select Item 2
          </button>
          <button 
            class="btn btn-sm btn-outline"
            @click="selectedValue = '3'"
          >
            Select Item 3
          </button>
          <button 
            class="btn btn-sm btn-outline"
            @click="selectedValue = null"
          >
            Close All
          </button>
        </div>
      </div>
    `})},o={args:{items:e,multiple:!0}},i={args:{items:e,variant:"bordered"}},s={args:{items:e,variant:"compact"}},n={args:{items:[{value:"1",title:"🚀 Getting Started",content:`
          <div class="space-y-4">
            <p>Welcome to our platform! Here's how to get started:</p>
            <ol class="list-decimal list-inside space-y-2">
              <li>Create your account</li>
              <li>Verify your email</li>
              <li>Complete your profile</li>
              <li>Start exploring!</li>
            </ol>
            <div class="alert alert-info">
              <span>💡 Tip: Check out our tutorial videos for a quick overview!</span>
            </div>
          </div>
        `},{value:"2",title:"💳 Billing & Payments",content:`
          <div class="space-y-4">
            <p>We accept the following payment methods:</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="card bg-base-200 p-4">
                <h4 class="font-semibold">Credit Cards</h4>
                <p class="text-sm">Visa, MasterCard, American Express</p>
              </div>
              <div class="card bg-base-200 p-4">
                <h4 class="font-semibold">Digital Wallets</h4>
                <p class="text-sm">PayPal, Apple Pay, Google Pay</p>
              </div>
            </div>
          </div>
        `}]}},l={args:{items:[{value:"1",title:"Privacy Policy",content:`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        `},{value:"2",title:"Terms of Service",content:`
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        `}]}},r={render:()=>({components:{Accordion:d},data(){return{faqValue:"faq-1",productValue:"product-1"}},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">FAQ Section</h3>
          <Accordion 
            id="faq-accordion"
            v-model="faqValue"
            :items="[
              {
                value: 'faq-1',
                title: 'How do I reset my password?',
                content: 'Click on the &quot;Forgot Password&quot; link on the login page and follow the instructions sent to your email.'
              },
              {
                value: 'faq-2',
                title: 'Can I change my subscription plan?',
                content: 'Yes, you can upgrade or downgrade your subscription plan at any time from your account settings.'
              }
            ]"
          />
          <div class="mt-2 text-sm text-gray-600">
            Selected FAQ: {{ faqValue || 'None' }}
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Product Information</h3>
          <Accordion 
            id="product-accordion"
            v-model="productValue"
            variant="bordered"
            :items="[
              {
                value: 'product-1',
                title: 'Product Specifications',
                content: 'Detailed technical specifications and features of our products.'
              },
              {
                value: 'product-2',
                title: 'Installation Guide',
                content: 'Step-by-step installation instructions and requirements.'
              }
            ]"
          />
          <div class="mt-2 text-sm text-gray-600">
            Selected Product: {{ productValue || 'None' }}
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Support</h3>
          <Accordion 
            id="support-accordion"
            variant="compact"
            multiple
            :items="[
              {
                value: 'support-1',
                title: 'Contact Information',
                content: 'Email: support@example.com | Phone: 1-800-123-4567'
              },
              {
                value: 'support-2',
                title: 'Business Hours',
                content: 'Monday - Friday: 9 AM - 6 PM EST'
              },
              {
                value: 'support-3',
                title: 'Emergency Support',
                content: 'For urgent issues, please call our 24/7 emergency line.'
              }
            ]"
          />
        </div>
      </div>
    `})},c={render:()=>({components:{Accordion:d},data(){return{selectedValue:null,lastEvent:null,items:e}},methods:{handleItemToggle(u,m,p){this.lastEvent={item:u.title,index:m,isOpen:p}}},template:`
      <div class="space-y-4">
        <div class="text-sm">
          <strong>Selected value:</strong> {{ selectedValue || 'None' }}
        </div>
        <Accordion 
          v-model="selectedValue"
          :items="items"
          @item-toggle="handleItemToggle"
        />
        <div v-if="lastEvent" class="alert alert-info">
          <span>
            Last event: {{ lastEvent.item }} (index: {{ lastEvent.index }}) - {{ lastEvent.isOpen ? 'Opened' : 'Closed' }}
          </span>
        </div>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Accordion
    },
    data() {
      return {
        selectedValue: '2',
        items: sampleItems
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="text-sm">
          <strong>Selected value:</strong> {{ selectedValue || 'None' }}
        </div>
        <Accordion 
          v-model="selectedValue"
          :items="items"
        />
        <div class="flex gap-2">
          <button 
            class="btn btn-sm btn-outline"
            @click="selectedValue = '1'"
          >
            Select Item 1
          </button>
          <button 
            class="btn btn-sm btn-outline"
            @click="selectedValue = '2'"
          >
            Select Item 2
          </button>
          <button 
            class="btn btn-sm btn-outline"
            @click="selectedValue = '3'"
          >
            Select Item 3
          </button>
          <button 
            class="btn btn-sm btn-outline"
            @click="selectedValue = null"
          >
            Close All
          </button>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    multiple: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: 'bordered'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: 'compact'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      value: '1',
      title: '🚀 Getting Started',
      content: \`
          <div class="space-y-4">
            <p>Welcome to our platform! Here's how to get started:</p>
            <ol class="list-decimal list-inside space-y-2">
              <li>Create your account</li>
              <li>Verify your email</li>
              <li>Complete your profile</li>
              <li>Start exploring!</li>
            </ol>
            <div class="alert alert-info">
              <span>💡 Tip: Check out our tutorial videos for a quick overview!</span>
            </div>
          </div>
        \`
    }, {
      value: '2',
      title: '💳 Billing & Payments',
      content: \`
          <div class="space-y-4">
            <p>We accept the following payment methods:</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="card bg-base-200 p-4">
                <h4 class="font-semibold">Credit Cards</h4>
                <p class="text-sm">Visa, MasterCard, American Express</p>
              </div>
              <div class="card bg-base-200 p-4">
                <h4 class="font-semibold">Digital Wallets</h4>
                <p class="text-sm">PayPal, Apple Pay, Google Pay</p>
              </div>
            </div>
          </div>
        \`
    }]
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      value: '1',
      title: 'Privacy Policy',
      content: \`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        \`
    }, {
      value: '2',
      title: 'Terms of Service',
      content: \`
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        \`
    }]
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Accordion
    },
    data() {
      return {
        faqValue: 'faq-1',
        productValue: 'product-1'
      };
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">FAQ Section</h3>
          <Accordion 
            id="faq-accordion"
            v-model="faqValue"
            :items="[
              {
                value: 'faq-1',
                title: 'How do I reset my password?',
                content: 'Click on the &quot;Forgot Password&quot; link on the login page and follow the instructions sent to your email.'
              },
              {
                value: 'faq-2',
                title: 'Can I change my subscription plan?',
                content: 'Yes, you can upgrade or downgrade your subscription plan at any time from your account settings.'
              }
            ]"
          />
          <div class="mt-2 text-sm text-gray-600">
            Selected FAQ: {{ faqValue || 'None' }}
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Product Information</h3>
          <Accordion 
            id="product-accordion"
            v-model="productValue"
            variant="bordered"
            :items="[
              {
                value: 'product-1',
                title: 'Product Specifications',
                content: 'Detailed technical specifications and features of our products.'
              },
              {
                value: 'product-2',
                title: 'Installation Guide',
                content: 'Step-by-step installation instructions and requirements.'
              }
            ]"
          />
          <div class="mt-2 text-sm text-gray-600">
            Selected Product: {{ productValue || 'None' }}
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Support</h3>
          <Accordion 
            id="support-accordion"
            variant="compact"
            multiple
            :items="[
              {
                value: 'support-1',
                title: 'Contact Information',
                content: 'Email: support@example.com | Phone: 1-800-123-4567'
              },
              {
                value: 'support-2',
                title: 'Business Hours',
                content: 'Monday - Friday: 9 AM - 6 PM EST'
              },
              {
                value: 'support-3',
                title: 'Emergency Support',
                content: 'For urgent issues, please call our 24/7 emergency line.'
              }
            ]"
          />
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Accordion
    },
    data() {
      return {
        selectedValue: null,
        lastEvent: null,
        items: sampleItems
      };
    },
    methods: {
      handleItemToggle(item: any, index: number, isOpen: boolean) {
        this.lastEvent = {
          item: item.title,
          index,
          isOpen
        };
      }
    },
    template: \`
      <div class="space-y-4">
        <div class="text-sm">
          <strong>Selected value:</strong> {{ selectedValue || 'None' }}
        </div>
        <Accordion 
          v-model="selectedValue"
          :items="items"
          @item-toggle="handleItemToggle"
        />
        <div v-if="lastEvent" class="alert alert-info">
          <span>
            Last event: {{ lastEvent.item }} (index: {{ lastEvent.index }}) - {{ lastEvent.isOpen ? 'Opened' : 'Closed' }}
          </span>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const h=["Default","WithVModel","Multiple","Bordered","Compact","WithRichContent","Large","MultipleAccordions","WithEventHandling"];export{i as Bordered,s as Compact,t as Default,l as Large,o as Multiple,r as MultipleAccordions,c as WithEventHandling,n as WithRichContent,a as WithVModel,h as __namedExportsOrder,y as default};
