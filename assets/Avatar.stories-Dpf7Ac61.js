import{_ as r}from"./Avatar-ChVWa20J.js";import"./iframe--6dECDSE.js";import"./preload-helper-D9Z9MdNV.js";import"./Badge-Dj2vUqwU.js";import"./Status-DOHks-7U.js";import"./Icon-Cyg07zqG.js";import"./x-CvlftGd-.js";const V={title:"Data Display/Avatar",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible avatar component with support for images, placeholders, presence indicators, badges, and loading states."}}},tags:["autodocs"],argTypes:{src:{type:"string",control:{type:"text"},description:"Image source URL",table:{type:{summary:"string"}}},alt:{type:"string",control:{type:"text"},description:"Alt text for image",table:{type:{summary:"string"}}},name:{type:"string",control:{type:"text"},description:"User name for generating initials",table:{type:{summary:"string"}}},placeholder:{type:"string",control:{type:"text"},description:"Placeholder text (shown when no image)",table:{type:{summary:"string"}}},initials:{type:"string",control:{type:"text"},description:"Custom initials to display",table:{type:{summary:"string"}}},size:{type:"string",control:{type:"select"},options:["xs","sm","md","lg","xl","2xl"],description:"Avatar size",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},shape:{type:"string",control:{type:"select"},options:["circle","square","rounded"],description:"Avatar shape",table:{type:{summary:"string"},defaultValue:{summary:"circle"}}},presence:{type:"string",control:{type:"select"},options:["online","offline","away","busy"],description:"Presence status",table:{type:{summary:"string"}}},showPresence:{type:"boolean",control:{type:"boolean"},description:"Show presence indicator",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},ring:{type:"boolean",control:{type:"boolean"},description:"Show ring around avatar",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},ringColor:{type:"string",control:{type:"select"},options:["bordered","ghost","primary","secondary","accent","info","success","warning","error","neutral"],description:"Ring color",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},badge:{type:"string",control:{type:"text"},description:"Badge text to display",table:{type:{summary:"string"}}},badgeVariant:{type:"string",control:{type:"select"},options:["bordered","ghost","primary","secondary","accent","info","success","warning","error","neutral"],description:"Badge variant",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},count:{type:"number",control:{type:"number"},description:"Count number to display as badge",table:{type:{summary:"number"}}},loading:{type:"boolean",control:{type:"boolean"},description:"Show loading state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},lazy:{type:"boolean",control:{type:"boolean"},description:"Enable lazy loading for image",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},fallbackColor:{type:"string",control:{type:"select"},options:["primary","secondary","accent","neutral","random"],description:"Background color for placeholder (random generates color from name)",table:{type:{summary:"string"},defaultValue:{summary:"neutral"}}},fallbackIcon:{type:"string",control:{type:"text"},description:"Icon to show when no image, name, or placeholder is provided",table:{type:{summary:"string"},defaultValue:{summary:"user"}}}}},t={args:{src:"https://i.pravatar.cc/150?img=1",alt:"User avatar"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},e={args:{placeholder:"JD"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},s={args:{src:"https://i.pravatar.cc/150?img=2",alt:"Online user",presence:"online"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},n={args:{src:"https://i.pravatar.cc/150?img=3",alt:"Offline user",presence:"offline"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},i={args:{src:"https://i.pravatar.cc/150?img=4",alt:"Away user",presence:"away"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},c={args:{src:"https://i.pravatar.cc/150?img=5",alt:"Busy user",presence:"busy"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},o={args:{src:"https://i.pravatar.cc/150?img=6",alt:"User with ring",ring:!0,ringColor:"primary"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},l={args:{src:"https://i.pravatar.cc/150?img=7",alt:"Square avatar",shape:"square"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},p={args:{src:"https://i.pravatar.cc/150?img=8",alt:"Large avatar",size:"xl"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},m={args:{src:"https://i.pravatar.cc/150?img=9",alt:"Small avatar",size:"xs"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},g={args:{name:"John Doe"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},d={args:{src:"https://i.pravatar.cc/150?img=10",alt:"User with badge",badge:"3",badgeVariant:"primary"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},v={args:{src:"https://i.pravatar.cc/150?img=11",alt:"User with count",count:42,badgeVariant:"success"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},u={args:{src:"https://i.pravatar.cc/150?img=12",alt:"User with large count",count:999,badgeVariant:"warning"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},h={args:{loading:!0},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},A={render:()=>({components:{Avatar:r},template:`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4 items-center">
          <Avatar name="John Doe" fallbackColor="primary" />
          <Avatar name="Jane Smith" fallbackColor="secondary" />
          <Avatar name="Bob Wilson" fallbackColor="accent" />
          <Avatar name="Alice Brown" fallbackColor="neutral" />
          <Avatar name="Charlie Davis" fallbackColor="random" />
        </div>
      </div>
    `})},b={render:()=>({components:{Avatar:r},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=1" size="xs" alt="XS" />
            <Avatar src="https://i.pravatar.cc/150?img=2" size="sm" alt="SM" />
            <Avatar src="https://i.pravatar.cc/150?img=3" size="md" alt="MD" />
            <Avatar src="https://i.pravatar.cc/150?img=4" size="lg" alt="LG" />
            <Avatar src="https://i.pravatar.cc/150?img=5" size="xl" alt="XL" />
            <Avatar src="https://i.pravatar.cc/150?img=6" size="2xl" alt="2XL" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Shapes</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=7" shape="circle" alt="Circle" />
            <Avatar src="https://i.pravatar.cc/150?img=8" shape="square" alt="Square" />
            <Avatar src="https://i.pravatar.cc/150?img=9" shape="rounded" alt="Rounded" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Presence</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=10" presence="online" alt="Online" />
            <Avatar src="https://i.pravatar.cc/150?img=11" presence="offline" alt="Offline" />
            <Avatar src="https://i.pravatar.cc/150?img=12" presence="away" alt="Away" />
            <Avatar src="https://i.pravatar.cc/150?img=13" presence="busy" alt="Busy" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Ring Colors</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=14" ring ringColor="primary" alt="Primary Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=15" ring ringColor="secondary" alt="Secondary Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=16" ring ringColor="accent" alt="Accent Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=17" ring ringColor="neutral" alt="Neutral Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=18" ring ringColor="success" alt="Success Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=19" ring ringColor="warning" alt="Warning Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=20" ring ringColor="error" alt="Error Ring" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Placeholders</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar placeholder="AB" />
            <Avatar name="John Doe" />
            <Avatar initials="JD" />
            <Avatar placeholder="CD" size="lg" />
            <Avatar placeholder="EF" shape="square" />
            <Avatar placeholder="GH" ring ringColor="accent" />
            <Avatar name="Alice Smith" fallbackColor="random" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Badges & Counts</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=21" badge="3" alt="With Badge" />
            <Avatar src="https://i.pravatar.cc/150?img=22" :count="42" alt="With Count" />
            <Avatar src="https://i.pravatar.cc/150?img=23" :count="999" alt="Large Count" />
            <Avatar src="https://i.pravatar.cc/150?img=24" badge="VIP" badgeVariant="warning" alt="VIP Badge" />
            <Avatar src="https://i.pravatar.cc/150?img=25" :count="5" badgeVariant="error" alt="Error Count" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Loading States</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar loading size="xs" />
            <Avatar loading size="md" />
            <Avatar loading size="xl" />
          </div>
        </div>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'JD'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    alt: 'Online user',
    presence: 'online'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Offline user',
    presence: 'offline'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=4',
    alt: 'Away user',
    presence: 'away'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    alt: 'Busy user',
    presence: 'busy'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=6',
    alt: 'User with ring',
    ring: true,
    ringColor: 'primary'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=7',
    alt: 'Square avatar',
    shape: 'square'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=8',
    alt: 'Large avatar',
    size: 'xl'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=9',
    alt: 'Small avatar',
    size: 'xs'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=10',
    alt: 'User with badge',
    badge: '3',
    badgeVariant: 'primary'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=11',
    alt: 'User with count',
    count: 42,
    badgeVariant: 'success'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'User with large count',
    count: 999,
    badgeVariant: 'warning'
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => ({
    components: {
      Avatar
    },
    setup() {
      return {
        args
      };
    },
    template: '<Avatar v-bind="args" />'
  })
}`,...h.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4 items-center">
          <Avatar name="John Doe" fallbackColor="primary" />
          <Avatar name="Jane Smith" fallbackColor="secondary" />
          <Avatar name="Bob Wilson" fallbackColor="accent" />
          <Avatar name="Alice Brown" fallbackColor="neutral" />
          <Avatar name="Charlie Davis" fallbackColor="random" />
        </div>
      </div>
    \`
  })
}`,...A.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Avatar
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=1" size="xs" alt="XS" />
            <Avatar src="https://i.pravatar.cc/150?img=2" size="sm" alt="SM" />
            <Avatar src="https://i.pravatar.cc/150?img=3" size="md" alt="MD" />
            <Avatar src="https://i.pravatar.cc/150?img=4" size="lg" alt="LG" />
            <Avatar src="https://i.pravatar.cc/150?img=5" size="xl" alt="XL" />
            <Avatar src="https://i.pravatar.cc/150?img=6" size="2xl" alt="2XL" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Shapes</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=7" shape="circle" alt="Circle" />
            <Avatar src="https://i.pravatar.cc/150?img=8" shape="square" alt="Square" />
            <Avatar src="https://i.pravatar.cc/150?img=9" shape="rounded" alt="Rounded" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Presence</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=10" presence="online" alt="Online" />
            <Avatar src="https://i.pravatar.cc/150?img=11" presence="offline" alt="Offline" />
            <Avatar src="https://i.pravatar.cc/150?img=12" presence="away" alt="Away" />
            <Avatar src="https://i.pravatar.cc/150?img=13" presence="busy" alt="Busy" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Ring Colors</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=14" ring ringColor="primary" alt="Primary Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=15" ring ringColor="secondary" alt="Secondary Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=16" ring ringColor="accent" alt="Accent Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=17" ring ringColor="neutral" alt="Neutral Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=18" ring ringColor="success" alt="Success Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=19" ring ringColor="warning" alt="Warning Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=20" ring ringColor="error" alt="Error Ring" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Placeholders</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar placeholder="AB" />
            <Avatar name="John Doe" />
            <Avatar initials="JD" />
            <Avatar placeholder="CD" size="lg" />
            <Avatar placeholder="EF" shape="square" />
            <Avatar placeholder="GH" ring ringColor="accent" />
            <Avatar name="Alice Smith" fallbackColor="random" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Badges & Counts</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=21" badge="3" alt="With Badge" />
            <Avatar src="https://i.pravatar.cc/150?img=22" :count="42" alt="With Count" />
            <Avatar src="https://i.pravatar.cc/150?img=23" :count="999" alt="Large Count" />
            <Avatar src="https://i.pravatar.cc/150?img=24" badge="VIP" badgeVariant="warning" alt="VIP Badge" />
            <Avatar src="https://i.pravatar.cc/150?img=25" :count="5" badgeVariant="error" alt="Error Count" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Loading States</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar loading size="xs" />
            <Avatar loading size="md" />
            <Avatar loading size="xl" />
          </div>
        </div>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};const W=["WithImage","WithPlaceholder","Online","Offline","Away","Busy","WithRing","Square","Large","Small","WithName","WithBadge","WithCount","WithLargeCount","Loading","WithFallbackColors","AllVariants"];export{b as AllVariants,i as Away,c as Busy,p as Large,h as Loading,n as Offline,s as Online,m as Small,l as Square,d as WithBadge,v as WithCount,A as WithFallbackColors,t as WithImage,u as WithLargeCount,g as WithName,e as WithPlaceholder,o as WithRing,W as __namedExportsOrder,V as default};
