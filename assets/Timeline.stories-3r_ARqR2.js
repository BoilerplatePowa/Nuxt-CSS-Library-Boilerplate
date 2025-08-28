import{_ as i}from"./Timeline-C5SQ_pT6.js";import"./iframe--6dECDSE.js";import"./preload-helper-D9Z9MdNV.js";const g={title:"Data Display/Timeline",component:i,parameters:{layout:"centered",docs:{description:{component:"A timeline component that shows a list of events in chronological order using DaisyUI's timeline structure. Supports optional custom icons and complex content variants."}}},argTypes:{direction:{control:"select",options:["vertical","horizontal"]},compact:{control:"boolean"},snapIcon:{control:"boolean"},variant:{control:"select",options:["simple","complex"]}}},p=[{id:1,title:"1984 - First Macintosh computer"},{id:2,title:"1998 - iMac"},{id:3,title:"2001 - iPod"},{id:4,title:"2007 - iPhone"},{id:5,title:"2015 - Apple Watch"}],u=[{id:1,title:"User Registration",icon:"👤"},{id:2,title:"Email Verification",icon:"✉️"},{id:3,title:"Profile Setup",icon:"📝"},{id:4,title:"First Purchase",icon:"🛒"},{id:5,title:"Loyalty Program",icon:"⭐"}],v=[{id:1,timestamp:"1984",title:"First Macintosh computer",description:"The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse."},{id:2,timestamp:"1998",title:"iMac",description:"iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms"},{id:3,timestamp:"2001",title:"iPod",description:"The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple"},{id:4,timestamp:"2007",title:"iPhone",description:"iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share"},{id:5,timestamp:"2015",title:"Apple Watch",description:"The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services"}],t={args:{items:p,direction:"vertical",compact:!1,snapIcon:!1,variant:"simple"},render:e=>({components:{Timeline:i},setup(){return{args:e}},template:`
      <div class="w-full max-w-2xl">
        <Timeline v-bind="args" />
      </div>
    `})},s={args:{items:p.slice(0,4),direction:"horizontal",compact:!1,snapIcon:!1,variant:"simple"},render:e=>({components:{Timeline:i},setup(){return{args:e}},template:`
      <div class="w-full max-w-4xl">
        <Timeline v-bind="args" />
      </div>
    `})},a={args:{items:p,direction:"vertical",compact:!0,snapIcon:!1,variant:"simple"},render:e=>({components:{Timeline:i},setup(){return{args:e}},template:`
      <div class="w-full max-w-md">
        <h3 class="font-semibold mb-4">Compact Timeline</h3>
        <Timeline v-bind="args" />
      </div>
    `})},n={args:{items:v,direction:"vertical",variant:"complex"},render:e=>({components:{Timeline:i},setup(){return{args:e}},template:`
      <div class="w-full max-w-6xl">
        <h3 class="font-semibold mb-4">Complex Timeline with Rich Content</h3>
        <Timeline v-bind="args" />
      </div>
    `})},o={args:{items:[{id:1,title:"1984",description:"First Macintosh computer"},{id:2,title:"1998",description:"iMac"},{id:3,title:"2001",description:"iPod"},{id:4,title:"2007",description:"iPhone"},{id:5,title:"2015",description:"Apple Watch"}],direction:"vertical",compact:!1,snapIcon:!1,variant:"simple"},render:e=>({components:{Timeline:i},setup(){return{args:e}},template:`
      <div class="w-full max-w-3xl">
        <h3 class="font-semibold mb-4">Timeline with Custom Content</h3>
        <Timeline v-bind="args">
          <template #start="{ item }">
            <time class="font-mono italic">{{ item.title }}</time>
          </template>
          <template #end="{ item }">
            <div class="text-lg font-black">{{ item.description }}</div>
          </template>
        </Timeline>
      </div>
    `})},l={args:{items:u,direction:"vertical",compact:!1,snapIcon:!1,variant:"simple"},render:e=>({components:{Timeline:i},setup(){return{args:e}},template:`
      <div class="w-full max-w-2xl">
        <h3 class="font-semibold mb-4">Timeline with Emoji Icons</h3>
        <Timeline v-bind="args" />
      </div>
    `})},r={args:{items:[{id:1,title:"Default Icon"},{id:2,title:"Emoji Icon",icon:"🚀"},{id:3,title:"Another Default"},{id:4,title:"Custom Emoji",icon:"🎉"}],direction:"vertical",compact:!1,snapIcon:!1,variant:"simple"},render:e=>({components:{Timeline:i},setup(){return{args:e}},template:`
      <div class="w-full max-w-2xl">
        <h3 class="font-semibold mb-4">Timeline with Mixed Icons</h3>
        <Timeline v-bind="args" />
      </div>
    `})},m={args:{items:[{id:1,title:"1984",description:"First Macintosh computer"},{id:2,title:"1998",description:"iMac"},{id:3,title:"2001",description:"iPod"},{id:4,title:"2007",description:"iPhone"},{id:5,title:"2015",description:"Apple Watch"}],direction:"vertical",compact:!1,snapIcon:!1,variant:"simple"},render:e=>({components:{Timeline:i},setup(){return{args:e}},template:`
      <div class="w-full max-w-4xl">
        <h3 class="font-semibold mb-4 text-center">Alternating Timeline Layout</h3>
        <Timeline v-bind="args">
          <template #start="{ item, index }" v-if="index % 2 === 0">
            <div class="mb-10 md:text-end">
              <time class="font-mono italic">{{ item.title }}</time>
              <div class="text-lg font-black">{{ item.description }}</div>
            </div>
          </template>
          <template #end="{ item, index }" v-if="index % 2 === 1">
            <div class="md:mb-10">
              <time class="font-mono italic">{{ item.title }}</time>
              <div class="text-lg font-black">{{ item.description }}</div>
            </div>
          </template>
        </Timeline>
      </div>
    `})},c={args:{items:p.slice(0,3),direction:"vertical",compact:!1,snapIcon:!0,variant:"simple"},render:e=>({components:{Timeline:i},setup(){return{args:e}},template:`
      <div class="w-full max-w-2xl">
        <h3 class="font-semibold mb-4">Timeline with Snap Icon</h3>
        <Timeline v-bind="args" />
      </div>
    `})},d={render:()=>({components:{Timeline:i},setup(){return{items:[{id:1,title:"Event 1"},{id:2,title:"Event 2"},{id:3,title:"Event 3"}]}},template:`
      <div class="space-y-8">
        <div>
          <h3 class="font-semibold mb-4">Vertical Timeline (Default)</h3>
          <Timeline :items="items" direction="vertical" />
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Horizontal Timeline</h3>
          <Timeline :items="items" direction="horizontal" />
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Compact Timeline</h3>
          <Timeline :items="items" :compact="true" />
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Snap Icon Timeline</h3>
          <Timeline :items="items" :snap-icon="true" />
        </div>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleTimelineItems,
    direction: 'vertical',
    compact: false,
    snapIcon: false,
    variant: 'simple'
  },
  render: args => ({
    components: {
      Timeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-2xl">
        <Timeline v-bind="args" />
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleTimelineItems.slice(0, 4),
    // Fewer items for horizontal display
    direction: 'horizontal',
    compact: false,
    snapIcon: false,
    variant: 'simple'
  },
  render: args => ({
    components: {
      Timeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-4xl">
        <Timeline v-bind="args" />
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleTimelineItems,
    direction: 'vertical',
    compact: true,
    snapIcon: false,
    variant: 'simple'
  },
  render: args => ({
    components: {
      Timeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-md">
        <h3 class="font-semibold mb-4">Compact Timeline</h3>
        <Timeline v-bind="args" />
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: complexTimelineItems,
    direction: 'vertical',
    variant: 'complex'
  },
  render: args => ({
    components: {
      Timeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-6xl">
        <h3 class="font-semibold mb-4">Complex Timeline with Rich Content</h3>
        <Timeline v-bind="args" />
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      title: '1984',
      description: 'First Macintosh computer'
    }, {
      id: 2,
      title: '1998',
      description: 'iMac'
    }, {
      id: 3,
      title: '2001',
      description: 'iPod'
    }, {
      id: 4,
      title: '2007',
      description: 'iPhone'
    }, {
      id: 5,
      title: '2015',
      description: 'Apple Watch'
    }],
    direction: 'vertical',
    compact: false,
    snapIcon: false,
    variant: 'simple'
  },
  render: args => ({
    components: {
      Timeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-3xl">
        <h3 class="font-semibold mb-4">Timeline with Custom Content</h3>
        <Timeline v-bind="args">
          <template #start="{ item }">
            <time class="font-mono italic">{{ item.title }}</time>
          </template>
          <template #end="{ item }">
            <div class="text-lg font-black">{{ item.description }}</div>
          </template>
        </Timeline>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: timelineItemsWithIcons,
    direction: 'vertical',
    compact: false,
    snapIcon: false,
    variant: 'simple'
  },
  render: args => ({
    components: {
      Timeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-2xl">
        <h3 class="font-semibold mb-4">Timeline with Emoji Icons</h3>
        <Timeline v-bind="args" />
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      title: 'Default Icon'
    }, {
      id: 2,
      title: 'Emoji Icon',
      icon: '🚀'
    }, {
      id: 3,
      title: 'Another Default'
    }, {
      id: 4,
      title: 'Custom Emoji',
      icon: '🎉'
    }],
    direction: 'vertical',
    compact: false,
    snapIcon: false,
    variant: 'simple'
  },
  render: args => ({
    components: {
      Timeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-2xl">
        <h3 class="font-semibold mb-4">Timeline with Mixed Icons</h3>
        <Timeline v-bind="args" />
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      title: '1984',
      description: 'First Macintosh computer'
    }, {
      id: 2,
      title: '1998',
      description: 'iMac'
    }, {
      id: 3,
      title: '2001',
      description: 'iPod'
    }, {
      id: 4,
      title: '2007',
      description: 'iPhone'
    }, {
      id: 5,
      title: '2015',
      description: 'Apple Watch'
    }],
    direction: 'vertical',
    compact: false,
    snapIcon: false,
    variant: 'simple'
  },
  render: args => ({
    components: {
      Timeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-4xl">
        <h3 class="font-semibold mb-4 text-center">Alternating Timeline Layout</h3>
        <Timeline v-bind="args">
          <template #start="{ item, index }" v-if="index % 2 === 0">
            <div class="mb-10 md:text-end">
              <time class="font-mono italic">{{ item.title }}</time>
              <div class="text-lg font-black">{{ item.description }}</div>
            </div>
          </template>
          <template #end="{ item, index }" v-if="index % 2 === 1">
            <div class="md:mb-10">
              <time class="font-mono italic">{{ item.title }}</time>
              <div class="text-lg font-black">{{ item.description }}</div>
            </div>
          </template>
        </Timeline>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleTimelineItems.slice(0, 3),
    direction: 'vertical',
    compact: false,
    snapIcon: true,
    variant: 'simple'
  },
  render: args => ({
    components: {
      Timeline
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-2xl">
        <h3 class="font-semibold mb-4">Timeline with Snap Icon</h3>
        <Timeline v-bind="args" />
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Timeline
    },
    setup() {
      const items = [{
        id: 1,
        title: 'Event 1'
      }, {
        id: 2,
        title: 'Event 2'
      }, {
        id: 3,
        title: 'Event 3'
      }];
      return {
        items
      };
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="font-semibold mb-4">Vertical Timeline (Default)</h3>
          <Timeline :items="items" direction="vertical" />
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Horizontal Timeline</h3>
          <Timeline :items="items" direction="horizontal" />
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Compact Timeline</h3>
          <Timeline :items="items" :compact="true" />
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">Snap Icon Timeline</h3>
          <Timeline :items="items" :snap-icon="true" />
        </div>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};const T=["Default","Horizontal","Compact","Complex","WithCustomContent","WithEmojiIcons","WithMixedIcons","AlternatingLayout","SnapIcon","AllVariants"];export{d as AllVariants,m as AlternatingLayout,a as Compact,n as Complex,t as Default,s as Horizontal,c as SnapIcon,o as WithCustomContent,l as WithEmojiIcons,r as WithMixedIcons,T as __namedExportsOrder,g as default};
