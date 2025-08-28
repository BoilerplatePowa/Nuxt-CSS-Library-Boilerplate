import{_ as n}from"./Button-Cr1KVEgd.js";import"./iframe--6dECDSE.js";import"./preload-helper-D9Z9MdNV.js";import"./Icon-Cyg07zqG.js";import"./x-CvlftGd-.js";const T={title:"Actions/Button",component:n,parameters:{layout:"centered",docs:{description:{component:"A flexible button component with multiple variants, sizes, loading states, and accessibility features."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","accent","neutral","ghost","outline","link","info","success","warning","error"],description:"Button variant"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Disabled state"},loading:{control:{type:"boolean"},description:"Loading state"},loadingText:{control:{type:"text"},description:"Text to show during loading"},hideTextOnLoading:{control:{type:"boolean"},description:"Hide button text during loading"},type:{control:{type:"select"},options:["button","submit","reset"],description:"Button type"},fullWidth:{control:{type:"boolean"},description:"Full width"},circle:{control:{type:"boolean"},description:"Circle shape"},square:{control:{type:"boolean"},description:"Square shape"},glass:{control:{type:"boolean"},description:"Glass effect"},noAnimation:{control:{type:"boolean"},description:"Disable animations"},confirmAction:{control:{type:"boolean"},description:"Show confirmation dialog on click"},confirmText:{control:{type:"text"},description:"Confirmation dialog text"},debounceMs:{control:{type:"number"},description:"Debounce click events (milliseconds)"},autoFocus:{control:{type:"boolean"},description:"Auto focus on mount"},ariaLabel:{control:{type:"text"},description:"Accessibility label"},ariaPressed:{control:{type:"boolean"},description:"Pressed state for accessibility"},ariaExpanded:{control:{type:"boolean"},description:"Expanded state for accessibility"},ariaDescribedby:{control:{type:"text"},description:"Element ID that describes the button"},iconLeft:{control:{type:"select"},options:["heart","star","settings","user","home","search","mail","phone","calendar","download","upload","edit","delete","plus","minus","check","x","arrow-left","arrow-right","arrow-up","arrow-down","menu","info","alert-circle","check-circle","x-circle","help-circle","eye","eye-off","lock","unlock","zap","chevron-down","chevron-up","chevron-left","chevron-right","filter","sort-asc","sort-desc","refresh-cw","rotate-ccw","rotate-cw","zoom-in","zoom-out","maximize","minimize","external-link","link","copy","share","bookmark","flag","thumbs-up","thumbs-down","message-circle","message-square","bell","shield","award","gift","shopping-cart","credit-card","dollar-sign","percent","trending-up","trending-down","activity","bar-chart","pie-chart","line-chart","database","server","monitor","smartphone","tablet","laptop","printer","camera","video","music","file","folder","archive","trash-2","save","download-cloud","upload-cloud","cloud","wifi","bluetooth","battery","power","volume","volume1","volume2","volume-x","mic","mic-off","headphones","speaker","radio","tv","gamepad-2","mouse","keyboard","hard-drive","cpu","thermometer","droplets","sun","moon","cloud-rain","cloud-snow","wind","umbrella","snowflake","flame","sparkles","ice-cream","heart-off","star-off","settings-2","users","building","map","navigation","globe","mail-open","phone-call","phone-incoming","phone-outgoing","calendar-days","calendar-range","clock-1","clock-2","clock-3","clock-4","clock-5","clock-6","clock-7","clock-8","clock-9","clock-10","clock-11","clock-12","map-pin-off","navigation-2","navigation-off","edit-2","edit-3","trash","plus-circle","minus-circle","x-square","alert-triangle","alert-octagon"],description:"Left icon name"},iconRight:{control:{type:"select"},options:["heart","star","settings","user","home","search","mail","phone","calendar","download","upload","edit","delete","plus","minus","check","x","arrow-left","arrow-right","arrow-up","arrow-down","menu","info","alert-circle","check-circle","x-circle","help-circle","eye","eye-off","lock","unlock","zap","chevron-down","chevron-up","chevron-left","chevron-right","filter","sort-asc","sort-desc","refresh-cw","rotate-ccw","rotate-cw","zoom-in","zoom-out","maximize","minimize","external-link","link","copy","share","bookmark","flag","thumbs-up","thumbs-down","message-circle","message-square","bell","shield","award","gift","shopping-cart","credit-card","dollar-sign","percent","trending-up","trending-down","activity","bar-chart","pie-chart","line-chart","database","server","monitor","smartphone","tablet","laptop","printer","camera","video","music","file","folder","archive","trash-2","save","download-cloud","upload-cloud","cloud","wifi","bluetooth","battery","power","volume","volume1","volume2","volume-x","mic","mic-off","headphones","speaker","radio","tv","gamepad-2","mouse","keyboard","hard-drive","cpu","thermometer","droplets","sun","moon","cloud-rain","cloud-snow","wind","umbrella","snowflake","flame","sparkles","ice-cream","heart-off","star-off","settings-2","users","building","map","navigation","globe","mail-open","phone-call","phone-incoming","phone-outgoing","calendar-days","calendar-range","clock-1","clock-2","clock-3","clock-4","clock-5","clock-6","clock-7","clock-8","clock-9","clock-10","clock-11","clock-12","map-pin-off","navigation-2","navigation-off","edit-2","edit-3","trash","plus-circle","minus-circle","x-square","alert-triangle","alert-octagon"],description:"Right icon name"},iconSize:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl"],description:"Icon size"},onClick:{action:"clicked",description:"Click event"}}},e={args:{variant:"primary"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Primary Button</Button>'})},o={args:{variant:"secondary"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Secondary Button</Button>'})},a={args:{variant:"accent"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Accent Button</Button>'})},r={args:{variant:"ghost"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Ghost Button</Button>'})},s={args:{variant:"outline"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Outline Button</Button>'})},i={args:{variant:"link"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Link Button</Button>'})},c={args:{variant:"neutral"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Neutral Button</Button>'})},u={args:{variant:"info"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Info Button</Button>'})},l={args:{variant:"success"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Success Button</Button>'})},d={args:{variant:"warning"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Warning Button</Button>'})},p={args:{variant:"error"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Error Button</Button>'})},m={args:{size:"sm"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Small Button</Button>'})},B={args:{size:"lg"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Large Button</Button>'})},g={args:{disabled:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Disabled Button</Button>'})},v={args:{loading:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Loading...</Button>'})},h={args:{loading:!0,loadingText:"Processing..."},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Submit</Button>'})},f={args:{loading:!0,hideTextOnLoading:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Submit</Button>'})},b={args:{confirmAction:!0,confirmText:"Are you sure you want to delete this item?"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Delete Item</Button>'})},x={args:{debounceMs:500},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Debounced Button (500ms)</Button>'})},y={args:{fullWidth:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Full Width Button</Button>'})},w={render:t=>({components:{Button:n},setup(){return{args:t}},template:`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <Button v-bind="args">
            <template #icon-left>
              <span>←</span>
            </template>
            With Left Icon
          </Button>
          <Button v-bind="args">
            With Right Icon
            <template #icon-right>
              <span>→</span>
            </template>
          </Button>
          <Button v-bind="args">
            <template #icon-left>
              <span>←</span>
            </template>
            Both Icons
            <template #icon-right>
              <span>→</span>
            </template>
          </Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button circle>
            <span>♥</span>
          </Button>
          <Button square>
            <span>★</span>
          </Button>
        </div>
      </div>
    `})},L={args:{iconLeft:"heart",iconRight:"arrow-right"},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">Button with Icon Props</Button>'})},S={render:()=>({components:{Button:n},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Left Icons</h3>
          <div class="flex flex-wrap gap-2">
            <Button iconLeft="heart">Like</Button>
            <Button iconLeft="star">Favorite</Button>
            <Button iconLeft="download">Download</Button>
            <Button iconLeft="upload">Upload</Button>
            <Button iconLeft="plus">Add New</Button>
            <Button iconLeft="search">Search</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Right Icons</h3>
          <div class="flex flex-wrap gap-2">
            <Button iconRight="arrow-right">Continue</Button>
            <Button iconRight="external-link">Open Link</Button>
            <Button iconRight="share">Share</Button>
            <Button iconRight="copy">Copy</Button>
            <Button iconRight="download">Download</Button>
            <Button iconRight="settings">Settings</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Both Icons</h3>
          <div class="flex flex-wrap gap-2">
            <Button iconLeft="arrow-left" iconRight="arrow-right">Navigate</Button>
            <Button iconLeft="mail" iconRight="send">Send Email</Button>
            <Button iconLeft="edit" iconRight="check">Edit & Save</Button>
            <Button iconLeft="trash" iconRight="alert-triangle">Delete</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Icon Sizes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Button iconLeft="heart" iconSize="xs">XS Icon</Button>
            <Button iconLeft="heart" iconSize="sm">SM Icon</Button>
            <Button iconLeft="heart" iconSize="md">MD Icon</Button>
            <Button iconLeft="heart" iconSize="lg">LG Icon</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Icon Only Buttons</h3>
          <div class="flex flex-wrap gap-2">
            <Button circle iconLeft="heart" />
            <Button circle iconLeft="star" />
            <Button circle iconLeft="settings" />
            <Button circle iconLeft="user" />
            <Button circle iconLeft="search" />
            <Button circle iconLeft="menu" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Different Variants with Icons</h3>
          <div class="flex flex-wrap gap-2">
            <Button variant="primary" iconLeft="check">Primary</Button>
            <Button variant="secondary" iconLeft="star">Secondary</Button>
            <Button variant="accent" iconLeft="heart">Accent</Button>
            <Button variant="ghost" iconLeft="settings">Ghost</Button>
            <Button variant="outline" iconLeft="download">Outline</Button>
            <Button variant="link" iconLeft="external-link">Link</Button>
          </div>
        </div>
      </div>
    `})},k={args:{circle:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">○</Button>'})},A={args:{square:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">■</Button>'})},z={args:{glass:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<div class="p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"><Button v-bind="args">Glass Button</Button></div>'})},I={args:{noAnimation:!0},render:t=>({components:{Button:n},setup(){return{args:t}},template:'<Button v-bind="args">No Animation Button</Button>'})},D={render:()=>({components:{Button:n},template:`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-3">Accessibility Features</h3>
          <div class="flex flex-wrap gap-2">
            <Button ariaLabel="Custom label">Custom Label</Button>
            <Button :ariaPressed="true">Pressed State</Button>
            <Button :ariaExpanded="true">Expanded State</Button>
            <Button ariaDescribedby="description">Described Button</Button>
            <div id="description" class="text-sm text-gray-600">This button has a description</div>
          </div>
        </div>
      </div>
    `})},R={render:()=>({components:{Button:n},template:`
      <div class="space-y-8 p-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Button Animations</h3>
          <p class="text-sm text-gray-600 mb-4">Click buttons to see hover, focus, and active state animations</p>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary" class="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Hover Scale Effect
            </Button>
            <Button variant="secondary" class="transition-all duration-300 hover:bg-opacity-80">
              Smooth Hover
            </Button>
            <Button variant="accent" class="transform transition-transform duration-150 active:scale-95">
              Click Scale
            </Button>
            <Button variant="outline" class="transition-all duration-200 hover:border-1 hover:border-primary">
              Border Animation
            </Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Loading Animations</h3>
          <div class="flex flex-wrap gap-4">
            <Button loading variant="primary">Loading Primary</Button>
            <Button loading variant="secondary">Loading Secondary</Button>
            <Button loading variant="accent">Loading Accent</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Custom Animation Classes</h3>
          <p class="text-sm text-gray-600 mb-4">Buttons with custom CSS animations</p>
          <div class="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              class="animate-pulse"
            >
              Pulse Animation
            </Button>
            <Button 
              variant="secondary" 
              class="transform transition-all duration-500 hover:rotate-3"
            >
              Rotate on Hover
            </Button>
            <Button 
              variant="accent" 
              class="transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50"
            >
              Shadow Glow
            </Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Animation Comparison</h3>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary">
              Normal Button
            </Button>
            <Button variant="primary" noAnimation>
              No Animation
            </Button>
          </div>
        </div>
      </div>
    `})},C={render:()=>({components:{Button:n},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Variants</h3>
          <div class="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="neutral">Neutral</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Status Colors</h3>
          <div class="flex flex-wrap gap-2">
            <Button variant="info">Info</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="error">Error</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="md">MD</Button>
            <Button size="lg">LG</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Shapes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Button circle size="sm">○</Button>
            <Button square size="sm">■</Button>
            <Button circle size="lg">○</Button>
            <Button square size="lg">■</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">States</h3>
          <div class="flex flex-wrap gap-2">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button glass>Glass</Button>
            <Button noAnimation>No Animation</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">With Icons</h3>
          <div class="flex flex-wrap gap-2">
            <Button iconLeft="heart">Like</Button>
            <Button iconRight="arrow-right">Continue</Button>
            <Button iconLeft="download" iconRight="external-link">Download</Button>
            <Button circle iconLeft="settings" />
          </div>
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Primary Button</Button>'
  })
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Secondary Button</Button>'
  })
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Accent Button</Button>'
  })
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Ghost Button</Button>'
  })
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Outline Button</Button>'
  })
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Link Button</Button>'
  })
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Neutral Button</Button>'
  })
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Info Button</Button>'
  })
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Success Button</Button>'
  })
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Warning Button</Button>'
  })
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Error Button</Button>'
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Small Button</Button>'
  })
}`,...m.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Large Button</Button>'
  })
}`,...B.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Disabled Button</Button>'
  })
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Loading...</Button>'
  })
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    loadingText: 'Processing...'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Submit</Button>'
  })
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    hideTextOnLoading: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Submit</Button>'
  })
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    confirmAction: true,
    confirmText: 'Are you sure you want to delete this item?'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Delete Item</Button>'
  })
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    debounceMs: 500
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Debounced Button (500ms)</Button>'
  })
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Full Width Button</Button>'
  })
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="flex flex-wrap gap-2">
          <Button v-bind="args">
            <template #icon-left>
              <span>←</span>
            </template>
            With Left Icon
          </Button>
          <Button v-bind="args">
            With Right Icon
            <template #icon-right>
              <span>→</span>
            </template>
          </Button>
          <Button v-bind="args">
            <template #icon-left>
              <span>←</span>
            </template>
            Both Icons
            <template #icon-right>
              <span>→</span>
            </template>
          </Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button circle>
            <span>♥</span>
          </Button>
          <Button square>
            <span>★</span>
          </Button>
        </div>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    iconLeft: 'heart',
    iconRight: 'arrow-right'
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">Button with Icon Props</Button>'
  })
}`,...L.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Left Icons</h3>
          <div class="flex flex-wrap gap-2">
            <Button iconLeft="heart">Like</Button>
            <Button iconLeft="star">Favorite</Button>
            <Button iconLeft="download">Download</Button>
            <Button iconLeft="upload">Upload</Button>
            <Button iconLeft="plus">Add New</Button>
            <Button iconLeft="search">Search</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Right Icons</h3>
          <div class="flex flex-wrap gap-2">
            <Button iconRight="arrow-right">Continue</Button>
            <Button iconRight="external-link">Open Link</Button>
            <Button iconRight="share">Share</Button>
            <Button iconRight="copy">Copy</Button>
            <Button iconRight="download">Download</Button>
            <Button iconRight="settings">Settings</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Both Icons</h3>
          <div class="flex flex-wrap gap-2">
            <Button iconLeft="arrow-left" iconRight="arrow-right">Navigate</Button>
            <Button iconLeft="mail" iconRight="send">Send Email</Button>
            <Button iconLeft="edit" iconRight="check">Edit & Save</Button>
            <Button iconLeft="trash" iconRight="alert-triangle">Delete</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Icon Sizes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Button iconLeft="heart" iconSize="xs">XS Icon</Button>
            <Button iconLeft="heart" iconSize="sm">SM Icon</Button>
            <Button iconLeft="heart" iconSize="md">MD Icon</Button>
            <Button iconLeft="heart" iconSize="lg">LG Icon</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Icon Only Buttons</h3>
          <div class="flex flex-wrap gap-2">
            <Button circle iconLeft="heart" />
            <Button circle iconLeft="star" />
            <Button circle iconLeft="settings" />
            <Button circle iconLeft="user" />
            <Button circle iconLeft="search" />
            <Button circle iconLeft="menu" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Different Variants with Icons</h3>
          <div class="flex flex-wrap gap-2">
            <Button variant="primary" iconLeft="check">Primary</Button>
            <Button variant="secondary" iconLeft="star">Secondary</Button>
            <Button variant="accent" iconLeft="heart">Accent</Button>
            <Button variant="ghost" iconLeft="settings">Ghost</Button>
            <Button variant="outline" iconLeft="download">Outline</Button>
            <Button variant="link" iconLeft="external-link">Link</Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    circle: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">○</Button>'
  })
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    square: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">■</Button>'
  })
}`,...A.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    glass: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<div class="p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"><Button v-bind="args">Glass Button</Button></div>'
  })
}`,...z.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    noAnimation: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args">No Animation Button</Button>'
  })
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-3">Accessibility Features</h3>
          <div class="flex flex-wrap gap-2">
            <Button ariaLabel="Custom label">Custom Label</Button>
            <Button :ariaPressed="true">Pressed State</Button>
            <Button :ariaExpanded="true">Expanded State</Button>
            <Button ariaDescribedby="description">Described Button</Button>
            <div id="description" class="text-sm text-gray-600">This button has a description</div>
          </div>
        </div>
      </div>
    \`
  })
}`,...D.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="space-y-8 p-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Button Animations</h3>
          <p class="text-sm text-gray-600 mb-4">Click buttons to see hover, focus, and active state animations</p>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary" class="transform transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Hover Scale Effect
            </Button>
            <Button variant="secondary" class="transition-all duration-300 hover:bg-opacity-80">
              Smooth Hover
            </Button>
            <Button variant="accent" class="transform transition-transform duration-150 active:scale-95">
              Click Scale
            </Button>
            <Button variant="outline" class="transition-all duration-200 hover:border-1 hover:border-primary">
              Border Animation
            </Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Loading Animations</h3>
          <div class="flex flex-wrap gap-4">
            <Button loading variant="primary">Loading Primary</Button>
            <Button loading variant="secondary">Loading Secondary</Button>
            <Button loading variant="accent">Loading Accent</Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Custom Animation Classes</h3>
          <p class="text-sm text-gray-600 mb-4">Buttons with custom CSS animations</p>
          <div class="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              class="animate-pulse"
            >
              Pulse Animation
            </Button>
            <Button 
              variant="secondary" 
              class="transform transition-all duration-500 hover:rotate-3"
            >
              Rotate on Hover
            </Button>
            <Button 
              variant="accent" 
              class="transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50"
            >
              Shadow Glow
            </Button>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Animation Comparison</h3>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary">
              Normal Button
            </Button>
            <Button variant="primary" noAnimation>
              No Animation
            </Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Variants</h3>
          <div class="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="neutral">Neutral</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Status Colors</h3>
          <div class="flex flex-wrap gap-2">
            <Button variant="info">Info</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="error">Error</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Sizes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="md">MD</Button>
            <Button size="lg">LG</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">Shapes</h3>
          <div class="flex flex-wrap gap-2 items-center">
            <Button circle size="sm">○</Button>
            <Button square size="sm">■</Button>
            <Button circle size="lg">○</Button>
            <Button square size="lg">■</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">States</h3>
          <div class="flex flex-wrap gap-2">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button glass>Glass</Button>
            <Button noAnimation>No Animation</Button>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-3">With Icons</h3>
          <div class="flex flex-wrap gap-2">
            <Button iconLeft="heart">Like</Button>
            <Button iconRight="arrow-right">Continue</Button>
            <Button iconLeft="download" iconRight="external-link">Download</Button>
            <Button circle iconLeft="settings" />
          </div>
        </div>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}};const q=["Primary","Secondary","Accent","Ghost","Outline","Link","Neutral","Info","Success","Warning","Error","Small","Large","Disabled","Loading","LoadingWithText","LoadingHideText","ConfirmAction","Debounced","FullWidth","WithIcons","WithIconProps","IconExamples","Circle","Square","Glass","NoAnimation","Accessibility","AnimationDemo","AllVariants"];export{a as Accent,D as Accessibility,C as AllVariants,R as AnimationDemo,k as Circle,b as ConfirmAction,x as Debounced,g as Disabled,p as Error,y as FullWidth,r as Ghost,z as Glass,S as IconExamples,u as Info,B as Large,i as Link,v as Loading,f as LoadingHideText,h as LoadingWithText,c as Neutral,I as NoAnimation,s as Outline,e as Primary,o as Secondary,m as Small,A as Square,l as Success,d as Warning,L as WithIconProps,w as WithIcons,q as __namedExportsOrder,T as default};
