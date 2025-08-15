import{A as r}from"./Avatar-PjLelYGy.js";import"./iframe-B-dz0hg_.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={title:"Data Display/Avatar",component:r,parameters:{layout:"centered",docs:{description:{component:"A flexible avatar component with support for images, placeholders, and presence indicators."}}},tags:["autodocs"],argTypes:{src:{control:{type:"text"},description:"Image source URL"},alt:{control:{type:"text"},description:"Alt text for image"},placeholder:{control:{type:"text"},description:"Placeholder text (shown when no image)"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Avatar size"},shape:{control:{type:"select"},options:["circle","square"],description:"Avatar shape"},online:{control:{type:"boolean"},description:"Online presence indicator"},ring:{control:{type:"boolean"},description:"Show ring around avatar"},ringColor:{control:{type:"select"},options:["primary","secondary","accent","neutral"],description:"Ring color"}}},t={args:{src:"https://i.pravatar.cc/150?img=1",alt:"User avatar"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},e={args:{placeholder:"JD"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},s={args:{src:"https://i.pravatar.cc/150?img=2",alt:"Online user",online:!0},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},i={args:{src:"https://i.pravatar.cc/150?img=3",alt:"Offline user",online:!1},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},c={args:{src:"https://i.pravatar.cc/150?img=4",alt:"User with ring",ring:!0,ringColor:"primary"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},n={args:{src:"https://i.pravatar.cc/150?img=5",alt:"Square avatar",shape:"square"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},l={args:{src:"https://i.pravatar.cc/150?img=6",alt:"Large avatar",size:"xl"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},o={args:{src:"https://i.pravatar.cc/150?img=7",alt:"Small avatar",size:"xs"},render:a=>({components:{Avatar:r},setup(){return{args:a}},template:'<Avatar v-bind="args" />'})},p={render:()=>({components:{Avatar:r},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=1" size="xs" alt="XS" />
            <Avatar src="https://i.pravatar.cc/150?img=2" size="sm" alt="SM" />
            <Avatar src="https://i.pravatar.cc/150?img=3" size="md" alt="MD" />
            <Avatar src="https://i.pravatar.cc/150?img=4" size="lg" alt="LG" />
            <Avatar src="https://i.pravatar.cc/150?img=5" size="xl" alt="XL" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Shapes</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=6" shape="circle" alt="Circle" />
            <Avatar src="https://i.pravatar.cc/150?img=7" shape="square" alt="Square" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Presence</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=8" :online="true" alt="Online" />
            <Avatar src="https://i.pravatar.cc/150?img=9" :online="false" alt="Offline" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Ring Colors</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=10" ring ringColor="primary" alt="Primary Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=11" ring ringColor="secondary" alt="Secondary Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=12" ring ringColor="accent" alt="Accent Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=13" ring ringColor="neutral" alt="Neutral Ring" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Placeholders</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar placeholder="AB" />
            <Avatar placeholder="CD" size="lg" />
            <Avatar placeholder="EF" shape="square" />
            <Avatar placeholder="GH" ring ringColor="accent" />
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
    online: true
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Offline user',
    online: false
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
    src: 'https://i.pravatar.cc/150?img=4',
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
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=6',
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=7',
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
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Shapes</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=6" shape="circle" alt="Circle" />
            <Avatar src="https://i.pravatar.cc/150?img=7" shape="square" alt="Square" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Presence</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=8" :online="true" alt="Online" />
            <Avatar src="https://i.pravatar.cc/150?img=9" :online="false" alt="Offline" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Ring Colors</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar src="https://i.pravatar.cc/150?img=10" ring ringColor="primary" alt="Primary Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=11" ring ringColor="secondary" alt="Secondary Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=12" ring ringColor="accent" alt="Accent Ring" />
            <Avatar src="https://i.pravatar.cc/150?img=13" ring ringColor="neutral" alt="Neutral Ring" />
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Placeholders</h3>
          <div class="flex flex-wrap gap-4 items-center">
            <Avatar placeholder="AB" />
            <Avatar placeholder="CD" size="lg" />
            <Avatar placeholder="EF" shape="square" />
            <Avatar placeholder="GH" ring ringColor="accent" />
          </div>
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};const u=["WithImage","WithPlaceholder","Online","Offline","WithRing","Square","Large","Small","AllVariants"];export{p as AllVariants,l as Large,i as Offline,s as Online,o as Small,n as Square,t as WithImage,e as WithPlaceholder,c as WithRing,u as __namedExportsOrder,h as default};
