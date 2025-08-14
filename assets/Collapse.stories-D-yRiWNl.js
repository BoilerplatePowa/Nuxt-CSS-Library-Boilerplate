import{C as e}from"./Collapse-BXtoGWim.js";import"./iframe-D8bQcoLX.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Data Display/Collapse",component:e,parameters:{layout:"centered",docs:{description:{component:"Expandable content container with smooth animations and customizable styling."}}},argTypes:{title:{control:"text",description:"Title displayed in the collapse header"},modelValue:{control:"boolean",description:"Whether the collapse is open by default"},forceOpen:{control:"boolean",description:"Force the collapse to stay open"},disabled:{control:"boolean",description:"Disable the collapse interaction"},variant:{control:{type:"select"},options:["default","arrow","plus"],description:"Visual style variant"}},tags:["autodocs"]},a={args:{title:"Click to expand",modelValue:!1},render:s=>({components:{Collapse:e},setup(){return{args:s}},template:`
      <div class="w-96">
        <Collapse v-bind="args">
          <p>This is the collapsible content. It can contain any type of content including text, images, forms, or other components.</p>
        </Collapse>
      </div>
    `})},n={args:{title:"This is open by default",modelValue:!0},render:s=>({components:{Collapse:e},setup(){return{args:s}},template:`
      <div class="w-96">
        <Collapse v-bind="args">
          <div class="space-y-4">
            <p>This collapse starts in an open state.</p>
            <div class="alert alert-info">
              <span>You can include any content here!</span>
            </div>
          </div>
        </Collapse>
      </div>
    `})},t={render:()=>({components:{Collapse:e},template:`
      <div class="space-y-4 w-96">
        <Collapse title="Default Variant" variant="default">
          <p>This is the default collapse variant with standard styling.</p>
        </Collapse>
        
        <Collapse title="Bordered Variant" variant="bordered">
          <p>This collapse has a border around the entire component.</p>
        </Collapse>
        
        <Collapse title="Ghost Variant" variant="ghost">
          <p>This is a minimal ghost variant with subtle styling.</p>
        </Collapse>
      </div>
    `})},o={render:()=>({components:{Collapse:e},template:`
      <div class="space-y-4 w-96">
        <Collapse title="Arrow Icon" icon="arrow">
          <p>This collapse uses an arrow icon indicator.</p>
        </Collapse>
        
        <Collapse title="Plus Icon" icon="plus">
          <p>This collapse uses a plus/minus icon indicator.</p>
        </Collapse>
        
        <Collapse title="Chevron Icon" icon="chevron">
          <p>This collapse uses a chevron icon indicator.</p>
        </Collapse>
      </div>
    `})},l={render:()=>({components:{Collapse:e},template:`
      <div class="w-96">
        <Collapse title="Main Category">
          <div class="space-y-2">
            <p>This is the main category content.</p>
            
            <Collapse title="Subcategory 1" variant="ghost">
              <p>Content for subcategory 1 with more detailed information.</p>
            </Collapse>
            
            <Collapse title="Subcategory 2" variant="ghost">
              <div class="space-y-2">
                <p>Content for subcategory 2.</p>
                <Collapse title="Sub-subcategory" variant="ghost">
                  <p>Even deeper nested content is possible!</p>
                </Collapse>
              </div>
            </Collapse>
          </div>
        </Collapse>
      </div>
    `})},i={args:{title:"📊 Project Statistics",modelValue:!0},render:s=>({components:{Collapse:e},setup(){return{args:s}},template:`
      <div class="w-96">
        <Collapse v-bind="args">
          <div class="space-y-4">
            <div class="stats stats-vertical lg:stats-horizontal shadow">
              <div class="stat">
                <div class="stat-title">Downloads</div>
                <div class="stat-value">31K</div>
                <div class="stat-desc">Jan 1st - Feb 1st</div>
              </div>
              <div class="stat">
                <div class="stat-title">Users</div>
                <div class="stat-value">4,200</div>
                <div class="stat-desc">↗︎ 400 (22%)</div>
              </div>
            </div>
            
            <div class="flex gap-2">
              <button class="btn btn-primary btn-sm">View Details</button>
              <button class="btn btn-ghost btn-sm">Export Data</button>
            </div>
          </div>
        </Collapse>
      </div>
    `})},r={render:()=>({components:{Collapse:e},template:`
      <div class="space-y-2 w-96">
        <h3 class="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
        
        <Collapse title="What is your return policy?" variant="bordered">
          <p>We offer a 30-day return policy for all items. Items must be in their original condition and packaging.</p>
        </Collapse>
        
        <Collapse title="How long does shipping take?" variant="bordered">
          <div class="space-y-2">
            <p><strong>Standard Shipping:</strong> 3-5 business days</p>
            <p><strong>Express Shipping:</strong> 1-2 business days</p>
            <p><strong>International:</strong> 7-14 business days</p>
          </div>
        </Collapse>
        
        <Collapse title="Do you offer customer support?" variant="bordered">
          <div class="space-y-2">
            <p>Yes! Our customer support team is available:</p>
            <ul class="list-disc list-inside space-y-1">
              <li>Email: support@example.com</li>
              <li>Phone: 1-800-123-4567</li>
              <li>Live Chat: Available 24/7</li>
            </ul>
          </div>
        </Collapse>
        
        <Collapse title="Can I track my order?" variant="bordered">
          <p>Yes! Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.</p>
        </Collapse>
      </div>
    `})},p={args:{title:"This collapse is disabled",disabled:!0},render:s=>({components:{Collapse:e},setup(){return{args:s}},template:`
      <div class="w-96">
        <Collapse v-bind="args">
          <p>This content cannot be accessed because the collapse is disabled.</p>
        </Collapse>
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Click to expand',
    modelValue: false
  },
  render: args => ({
    components: {
      Collapse
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-96">
        <Collapse v-bind="args">
          <p>This is the collapsible content. It can contain any type of content including text, images, forms, or other components.</p>
        </Collapse>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'This is open by default',
    modelValue: true
  },
  render: args => ({
    components: {
      Collapse
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-96">
        <Collapse v-bind="args">
          <div class="space-y-4">
            <p>This collapse starts in an open state.</p>
            <div class="alert alert-info">
              <span>You can include any content here!</span>
            </div>
          </div>
        </Collapse>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Collapse
    },
    template: \`
      <div class="space-y-4 w-96">
        <Collapse title="Default Variant" variant="default">
          <p>This is the default collapse variant with standard styling.</p>
        </Collapse>
        
        <Collapse title="Bordered Variant" variant="bordered">
          <p>This collapse has a border around the entire component.</p>
        </Collapse>
        
        <Collapse title="Ghost Variant" variant="ghost">
          <p>This is a minimal ghost variant with subtle styling.</p>
        </Collapse>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Collapse
    },
    template: \`
      <div class="space-y-4 w-96">
        <Collapse title="Arrow Icon" icon="arrow">
          <p>This collapse uses an arrow icon indicator.</p>
        </Collapse>
        
        <Collapse title="Plus Icon" icon="plus">
          <p>This collapse uses a plus/minus icon indicator.</p>
        </Collapse>
        
        <Collapse title="Chevron Icon" icon="chevron">
          <p>This collapse uses a chevron icon indicator.</p>
        </Collapse>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Collapse
    },
    template: \`
      <div class="w-96">
        <Collapse title="Main Category">
          <div class="space-y-2">
            <p>This is the main category content.</p>
            
            <Collapse title="Subcategory 1" variant="ghost">
              <p>Content for subcategory 1 with more detailed information.</p>
            </Collapse>
            
            <Collapse title="Subcategory 2" variant="ghost">
              <div class="space-y-2">
                <p>Content for subcategory 2.</p>
                <Collapse title="Sub-subcategory" variant="ghost">
                  <p>Even deeper nested content is possible!</p>
                </Collapse>
              </div>
            </Collapse>
          </div>
        </Collapse>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: '📊 Project Statistics',
    modelValue: true
  },
  render: args => ({
    components: {
      Collapse
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-96">
        <Collapse v-bind="args">
          <div class="space-y-4">
            <div class="stats stats-vertical lg:stats-horizontal shadow">
              <div class="stat">
                <div class="stat-title">Downloads</div>
                <div class="stat-value">31K</div>
                <div class="stat-desc">Jan 1st - Feb 1st</div>
              </div>
              <div class="stat">
                <div class="stat-title">Users</div>
                <div class="stat-value">4,200</div>
                <div class="stat-desc">↗︎ 400 (22%)</div>
              </div>
            </div>
            
            <div class="flex gap-2">
              <button class="btn btn-primary btn-sm">View Details</button>
              <button class="btn btn-ghost btn-sm">Export Data</button>
            </div>
          </div>
        </Collapse>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Collapse
    },
    template: \`
      <div class="space-y-2 w-96">
        <h3 class="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
        
        <Collapse title="What is your return policy?" variant="bordered">
          <p>We offer a 30-day return policy for all items. Items must be in their original condition and packaging.</p>
        </Collapse>
        
        <Collapse title="How long does shipping take?" variant="bordered">
          <div class="space-y-2">
            <p><strong>Standard Shipping:</strong> 3-5 business days</p>
            <p><strong>Express Shipping:</strong> 1-2 business days</p>
            <p><strong>International:</strong> 7-14 business days</p>
          </div>
        </Collapse>
        
        <Collapse title="Do you offer customer support?" variant="bordered">
          <div class="space-y-2">
            <p>Yes! Our customer support team is available:</p>
            <ul class="list-disc list-inside space-y-1">
              <li>Email: support@example.com</li>
              <li>Phone: 1-800-123-4567</li>
              <li>Live Chat: Available 24/7</li>
            </ul>
          </div>
        </Collapse>
        
        <Collapse title="Can I track my order?" variant="bordered">
          <p>Yes! Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.</p>
        </Collapse>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'This collapse is disabled',
    disabled: true
  },
  render: args => ({
    components: {
      Collapse
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-96">
        <Collapse v-bind="args">
          <p>This content cannot be accessed because the collapse is disabled.</p>
        </Collapse>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};const h=["Default","OpenByDefault","Variants","DifferentIcons","NestedCollapses","WithRichContent","FAQ","Disabled"];export{a as Default,o as DifferentIcons,p as Disabled,r as FAQ,l as NestedCollapses,n as OpenByDefault,t as Variants,i as WithRichContent,h as __namedExportsOrder,m as default};
