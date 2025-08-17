import{d as N,c as p,a as l,b as j,m,e as D,F as E,g as $,n as d,o,i as O,v as H,t as C}from"./iframe-DKx4txre.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const G=["onClick","onMouseenter","onMouseleave"],R=["src","alt"],W={key:0,class:"dock-divider"},T=N({__name:"Dock",props:{items:{},position:{default:"bottom"},size:{default:"md"},variant:{default:"default"},showTooltips:{type:Boolean,default:!0},activeItem:{},animated:{type:Boolean,default:!0}},emits:["itemClick","itemHover","itemLeave"],setup(t,{emit:r}){const a=t,y=r,M=p(()=>{const e=["dock"];return a.position==="bottom"?e.push("fixed","bottom-4","left-1/2","transform","-translate-x-1/2"):a.position==="top"?e.push("fixed","top-4","left-1/2","transform","-translate-x-1/2"):a.position==="left"?e.push("fixed","left-4","top-1/2","transform","-translate-y-1/2"):a.position==="right"&&e.push("fixed","right-4","top-1/2","transform","-translate-y-1/2"),e.push("z-50"),e.join(" ")}),_=p(()=>{const e=["dock-container","flex","items-center","gap-2"];return(a.position==="left"||a.position==="right")&&e.push("flex-col"),a.variant==="floating"?e.push("bg-base-100","shadow-lg","rounded-2xl","p-3","border","border-base-300"):a.variant==="glass"?e.push("bg-base-100/80","backdrop-blur-md","shadow-lg","rounded-2xl","p-3","border","border-base-300/50"):e.push("bg-base-200","rounded-xl","p-2"),e.join(" ")}),z=p(()=>{const e=["relative","flex","items-center","justify-center"];return a.size==="sm"?e.push("w-8","h-8"):a.size==="lg"?e.push("w-16","h-16"):e.push("w-12","h-12"),e.join(" ")}),I=p(()=>{const e=["absolute","-top-1","-right-1","badge","badge-sm","badge-primary"];return a.size==="sm"&&e.push("badge-xs"),e.join(" ")}),A=p(()=>{const e=["absolute","z-10","px-2","py-1","text-xs","font-medium","text-white","bg-black","rounded","opacity-0","pointer-events-none","transition-opacity","duration-200"];return a.position==="bottom"?e.push("-top-8","left-1/2","transform","-translate-x-1/2"):a.position==="top"?e.push("-bottom-8","left-1/2","transform","-translate-x-1/2"):a.position==="left"?e.push("left-full","top-1/2","transform","-translate-y-1/2","ml-2"):a.position==="right"&&e.push("right-full","top-1/2","transform","-translate-y-1/2","mr-2"),e.join(" ")}),B=(e,i)=>e.id!==void 0?e.id:i,V=e=>{const i=["dock-item","relative","flex","items-center","justify-center","cursor-pointer"];return a.size==="sm"?i.push("p-2"):a.size==="lg"?i.push("p-4"):i.push("p-3"),e.disabled?i.push("opacity-50","cursor-not-allowed"):(i.push("hover:bg-base-300","active:scale-95"),a.animated&&i.push("transition-all","duration-200")),S(e)?i.push("bg-primary","text-primary-content","rounded-lg"):i.push("rounded-lg"),i.push("group"),i.join(" ")},S=e=>a.activeItem!==void 0?e.id===a.activeItem:e.active===!0,L=(e,i,s)=>{e.disabled||(e.href&&!s.defaultPrevented&&(e.target==="_blank"?window.open(e.href,"_blank"):window.location.href=e.href),y("itemClick",e,i,s))},P=(e,i)=>{e.disabled||y("itemHover",e,i)},F=(e,i)=>{e.disabled||y("itemLeave",e,i)};return(e,i)=>(o(),l("div",{class:d(M.value)},[j("div",{class:d(_.value)},[(o(!0),l(E,null,$(e.items,(s,c)=>(o(),l("div",{key:B(s,c),class:d(V(s)),onClick:w=>L(s,c,w),onMouseenter:w=>P(s,c),onMouseleave:w=>F(s,c)},[D(e.$slots,"item",{item:s,index:c,isActive:S(s)},()=>[s.icon||s.avatar?(o(),l("div",{key:0,class:d(z.value)},[s.avatar?(o(),l("img",{key:0,src:s.avatar,alt:s.label||"",class:"w-full h-full object-cover rounded-full"},null,8,R)):s.icon?(o(),O(H(s.icon),{key:1,class:"w-6 h-6"})):m("",!0)],2)):m("",!0),s.badge?(o(),l("div",{key:1,class:d(I.value)},C(s.badge),3)):m("",!0)],!0),e.showTooltips&&s.label?(o(),l("div",{key:0,class:d(A.value)},C(s.label),3)):m("",!0)],42,G))),128)),e.$slots.divider?(o(),l("div",W,[D(e.$slots,"divider",{},void 0,!0)])):m("",!0),D(e.$slots,"additional",{},void 0,!0)],2)],2))}}),n=q(T,[["__scopeId","data-v-99ef69bb"]]);T.__docgenInfo={exportName:"default",displayName:"Dock",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:"DockItem"}]}},{name:"position",required:!1,type:{name:"union",elements:[{name:'"bottom"'},{name:'"top"'},{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"'bottom'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"floating"'},{name:'"glass"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"showTooltips",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"activeItem",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"animated",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"itemClick",type:{names:["DockItem"]}},{name:"itemHover",type:{names:["DockItem"]}},{name:"itemLeave",type:{names:["DockItem"]}}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"is-active",title:"binding"}]},{name:"divider"},{name:"additional"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Navigation/Dock.vue"]};const J={title:"Navigation/Dock",component:n,parameters:{layout:"fullscreen"},argTypes:{position:{control:{type:"select"},options:["bottom","top","left","right"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["default","floating","glass"]},showTooltips:{control:{type:"boolean"}},animated:{control:{type:"boolean"}}}},Q=[{id:"finder",label:"Finder",icon:"📁",active:!0},{id:"browser",label:"Browser",icon:"🌐"},{id:"terminal",label:"Terminal",icon:"⚡"},{id:"code",label:"Code Editor",icon:"💻",badge:"3"},{id:"mail",label:"Mail",icon:"📧",badge:"12"}],b={args:{items:Q,position:"bottom",size:"md",variant:"floating"}},g={render:()=>({components:{Dock:n},data(){return{items:[{id:1,label:"Home",icon:"🏠"},{id:2,label:"Search",icon:"🔍"},{id:3,label:"Settings",icon:"⚙️"},{id:4,label:"Profile",icon:"👤"}]}},template:`
      <div class="relative h-screen bg-base-200">
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">Dock Positions</h1>
          <p class="mb-4">Docks are positioned at different edges of the screen.</p>
          
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div class="bg-base-100 p-4 rounded-lg">
              <h3 class="font-semibold">Bottom Dock</h3>
              <p>Traditional macOS-style dock at the bottom</p>
            </div>
            <div class="bg-base-100 p-4 rounded-lg">
              <h3 class="font-semibold">Top Dock</h3>
              <p>Dock positioned at the top of the screen</p>
            </div>
            <div class="bg-base-100 p-4 rounded-lg">
              <h3 class="font-semibold">Left Dock</h3>
              <p>Vertical dock on the left side</p>
            </div>
            <div class="bg-base-100 p-4 rounded-lg">
              <h3 class="font-semibold">Right Dock</h3>
              <p>Vertical dock on the right side</p>
            </div>
          </div>
        </div>
        
        <!-- Docks at different positions -->
        <Dock :items="items" position="bottom" variant="floating" />
        <Dock :items="items" position="top" variant="glass" />
        <Dock :items="items" position="left" variant="default" />
        <Dock :items="items" position="right" variant="floating" />
      </div>
    `})},u={render:()=>({components:{Dock:n},data(){return{items:[{id:1,label:"Dashboard",icon:"📊"},{id:2,label:"Messages",icon:"💬",badge:"5"},{id:3,label:"Calendar",icon:"📅"},{id:4,label:"Photos",icon:"📸"},{id:5,label:"Music",icon:"🎵"}]}},template:`
      <div class="relative h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        <div class="p-8 text-white">
          <h1 class="text-3xl font-bold mb-4">Dock Variants</h1>
          <p class="mb-8 text-lg opacity-90">Different visual styles for the dock component</p>
          
          <div class="grid grid-cols-3 gap-6 text-sm">
            <div class="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <h3 class="font-semibold text-lg mb-2">Default</h3>
              <p>Simple background with minimal styling</p>
            </div>
            <div class="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <h3 class="font-semibold text-lg mb-2">Floating</h3>
              <p>Elevated appearance with shadow and border</p>
            </div>
            <div class="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <h3 class="font-semibold text-lg mb-2">Glass</h3>
              <p>Translucent with blur effect</p>
            </div>
          </div>
        </div>
        
        <!-- Show all variants -->
        <Dock :items="items" position="bottom" variant="default" style="bottom: 120px;" />
        <Dock :items="items" position="bottom" variant="floating" style="bottom: 70px;" />
        <Dock :items="items" position="bottom" variant="glass" style="bottom: 20px;" />
      </div>
    `})},h={render:()=>({components:{Dock:n},data(){return{items:[{id:1,label:"Small",icon:"🔹"},{id:2,label:"Medium",icon:"🔸"},{id:3,label:"Large",icon:"🔶"}]}},template:`
      <div class="relative h-screen bg-base-200">
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">Dock Sizes</h1>
          <p class="mb-4">Different sizes for the dock items</p>
        </div>
        
        <Dock :items="items" position="bottom" variant="floating" size="sm" style="bottom: 120px;" />
        <Dock :items="items" position="bottom" variant="floating" size="md" style="bottom: 70px;" />
        <Dock :items="items" position="bottom" variant="floating" size="lg" style="bottom: 20px;" />
      </div>
    `})},f={render:()=>({components:{Dock:n},data(){return{items:[{id:"mail",label:"Mail",icon:"📧",badge:"12"},{id:"messages",label:"Messages",icon:"💬",badge:"3"},{id:"notifications",label:"Notifications",icon:"🔔",badge:"99+"},{id:"updates",label:"Updates",icon:"🔄",badge:"1"},{id:"calendar",label:"Calendar",icon:"📅"}]}},methods:{handleItemClick(t,r){console.log("Clicked:",t.label,"at index:",r),t.badge&&(t.badge="",setTimeout(()=>{t.label==="Mail"?t.badge=Math.floor(Math.random()*10).toString():t.label==="Messages"&&(t.badge=Math.floor(Math.random()*5).toString())},2e3))}},template:`
      <div class="relative h-screen bg-base-200">
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">Dock with Badges</h1>
          <p class="mb-4">Click items to clear badges (they'll randomly reappear)</p>
        </div>
        
        <Dock 
          :items="items" 
          position="bottom" 
          variant="floating"
          @item-click="handleItemClick"
        />
      </div>
    `})},v={render:()=>({components:{Dock:n},data(){return{activeApp:"finder",applications:[{id:"finder",label:"Finder",icon:"📁",active:!0},{id:"safari",label:"Safari",icon:"🌐"},{id:"mail",label:"Mail",icon:"📧",badge:"7"},{id:"messages",label:"Messages",icon:"💬",badge:"2"},{id:"photos",label:"Photos",icon:"📸"},{id:"music",label:"Music",icon:"🎵"},{id:"terminal",label:"Terminal",icon:"⚡"},{id:"vscode",label:"VS Code",icon:"💻",badge:"3"},{id:"settings",label:"System Preferences",icon:"⚙️"}]}},computed:{dockItems(){return this.applications.map(t=>({...t,active:t.id===this.activeApp}))}},methods:{handleAppClick(t,r){this.activeApp=t.id,console.log("Launched:",t.label),setTimeout(()=>{alert(`Opening ${t.label}...`)},100)}},template:`
      <div class="relative h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')] bg-cover bg-center opacity-30"></div>
        
        <div class="relative z-10 p-8 text-white">
          <h1 class="text-4xl font-bold mb-4">macOS-style Application Dock</h1>
          <p class="text-lg mb-4 opacity-90">Click applications to launch them</p>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md">
            <h3 class="font-semibold mb-2">Active Application:</h3>
            <p class="text-xl">{{ applications.find(app => app.id === activeApp)?.label }}</p>
          </div>
        </div>
        
        <Dock 
          :items="dockItems" 
          position="bottom" 
          variant="glass"
          size="lg"
          @item-click="handleAppClick"
        />
      </div>
    `})},k={render:()=>({components:{Dock:n},data(){return{selectedTool:"select",tools:[{id:"select",label:"Select",icon:"↖️"},{id:"move",label:"Move",icon:"✋"},{id:"rotate",label:"Rotate",icon:"🔄"},{id:"scale",label:"Scale",icon:"📏"},{id:"pen",label:"Pen",icon:"✏️"},{id:"brush",label:"Brush",icon:"🖌️"},{id:"eraser",label:"Eraser",icon:"🧹"},{id:"text",label:"Text",icon:"📝"}]}},computed:{toolItems(){return this.tools.map(t=>({...t,active:t.id===this.selectedTool}))}},methods:{handleToolSelect(t,r){this.selectedTool=t.id,console.log("Selected tool:",t.label)}},template:`
      <div class="relative h-screen bg-gray-100">
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">Design Tool Toolbar</h1>
          <div class="bg-white rounded-lg p-6 shadow-sm max-w-md">
            <h3 class="font-semibold mb-2">Selected Tool:</h3>
            <div class="flex items-center gap-2">
              <span class="text-2xl">{{ tools.find(t => t.id === selectedTool)?.icon }}</span>
              <span class="text-lg">{{ tools.find(t => t.id === selectedTool)?.label }}</span>
            </div>
          </div>
          
          <div class="mt-8 bg-white rounded-lg p-6 shadow-sm">
            <h3 class="font-semibold mb-4">Canvas Area</h3>
            <div class="w-full h-64 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <p class="text-gray-500">Design workspace</p>
            </div>
          </div>
        </div>
        
        <Dock 
          :items="toolItems" 
          position="left" 
          variant="floating"
          size="md"
          @item-click="handleToolSelect"
        />
      </div>
    `})},x={render:()=>({components:{Dock:n},data(){return{socialApps:[{id:"twitter",label:"Twitter",icon:"🐦",href:"https://twitter.com",target:"_blank"},{id:"facebook",label:"Facebook",icon:"📘",href:"https://facebook.com",target:"_blank",badge:"3"},{id:"instagram",label:"Instagram",icon:"📷",href:"https://instagram.com",target:"_blank"},{id:"linkedin",label:"LinkedIn",icon:"💼",href:"https://linkedin.com",target:"_blank",badge:"12"},{id:"youtube",label:"YouTube",icon:"📺",href:"https://youtube.com",target:"_blank"},{id:"tiktok",label:"TikTok",icon:"🎵",href:"https://tiktok.com",target:"_blank",badge:"99+"}]}},methods:{handleSocialClick(t,r,a){console.log("Opening:",t.label),t.href&&(a.preventDefault(),alert(`Would open ${t.label} in new tab`))}},template:`
      <div class="relative h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600">
        <div class="p-8 text-white">
          <h1 class="text-3xl font-bold mb-4">Social Media Dock</h1>
          <p class="text-lg mb-8 opacity-90">Quick access to your favorite social platforms</p>
          
          <div class="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-lg">
            <h3 class="font-semibold text-xl mb-4">Features:</h3>
            <ul class="space-y-2">
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-white rounded-full"></span>
                <span>External links with target="_blank"</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-white rounded-full"></span>
                <span>Notification badges</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-white rounded-full"></span>
                <span>Hover tooltips</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-white rounded-full"></span>
                <span>Glass morphism design</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Dock 
          :items="socialApps" 
          position="bottom" 
          variant="glass"
          size="lg"
          @item-click="handleSocialClick"
        />
      </div>
    `})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    position: 'bottom',
    size: 'md',
    variant: 'floating'
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dock
    },
    data() {
      return {
        items: [{
          id: 1,
          label: 'Home',
          icon: '🏠'
        }, {
          id: 2,
          label: 'Search',
          icon: '🔍'
        }, {
          id: 3,
          label: 'Settings',
          icon: '⚙️'
        }, {
          id: 4,
          label: 'Profile',
          icon: '👤'
        }]
      };
    },
    template: \`
      <div class="relative h-screen bg-base-200">
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">Dock Positions</h1>
          <p class="mb-4">Docks are positioned at different edges of the screen.</p>
          
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div class="bg-base-100 p-4 rounded-lg">
              <h3 class="font-semibold">Bottom Dock</h3>
              <p>Traditional macOS-style dock at the bottom</p>
            </div>
            <div class="bg-base-100 p-4 rounded-lg">
              <h3 class="font-semibold">Top Dock</h3>
              <p>Dock positioned at the top of the screen</p>
            </div>
            <div class="bg-base-100 p-4 rounded-lg">
              <h3 class="font-semibold">Left Dock</h3>
              <p>Vertical dock on the left side</p>
            </div>
            <div class="bg-base-100 p-4 rounded-lg">
              <h3 class="font-semibold">Right Dock</h3>
              <p>Vertical dock on the right side</p>
            </div>
          </div>
        </div>
        
        <!-- Docks at different positions -->
        <Dock :items="items" position="bottom" variant="floating" />
        <Dock :items="items" position="top" variant="glass" />
        <Dock :items="items" position="left" variant="default" />
        <Dock :items="items" position="right" variant="floating" />
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dock
    },
    data() {
      return {
        items: [{
          id: 1,
          label: 'Dashboard',
          icon: '📊'
        }, {
          id: 2,
          label: 'Messages',
          icon: '💬',
          badge: '5'
        }, {
          id: 3,
          label: 'Calendar',
          icon: '📅'
        }, {
          id: 4,
          label: 'Photos',
          icon: '📸'
        }, {
          id: 5,
          label: 'Music',
          icon: '🎵'
        }]
      };
    },
    template: \`
      <div class="relative h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        <div class="p-8 text-white">
          <h1 class="text-3xl font-bold mb-4">Dock Variants</h1>
          <p class="mb-8 text-lg opacity-90">Different visual styles for the dock component</p>
          
          <div class="grid grid-cols-3 gap-6 text-sm">
            <div class="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <h3 class="font-semibold text-lg mb-2">Default</h3>
              <p>Simple background with minimal styling</p>
            </div>
            <div class="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <h3 class="font-semibold text-lg mb-2">Floating</h3>
              <p>Elevated appearance with shadow and border</p>
            </div>
            <div class="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
              <h3 class="font-semibold text-lg mb-2">Glass</h3>
              <p>Translucent with blur effect</p>
            </div>
          </div>
        </div>
        
        <!-- Show all variants -->
        <Dock :items="items" position="bottom" variant="default" style="bottom: 120px;" />
        <Dock :items="items" position="bottom" variant="floating" style="bottom: 70px;" />
        <Dock :items="items" position="bottom" variant="glass" style="bottom: 20px;" />
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dock
    },
    data() {
      return {
        items: [{
          id: 1,
          label: 'Small',
          icon: '🔹'
        }, {
          id: 2,
          label: 'Medium',
          icon: '🔸'
        }, {
          id: 3,
          label: 'Large',
          icon: '🔶'
        }]
      };
    },
    template: \`
      <div class="relative h-screen bg-base-200">
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">Dock Sizes</h1>
          <p class="mb-4">Different sizes for the dock items</p>
        </div>
        
        <Dock :items="items" position="bottom" variant="floating" size="sm" style="bottom: 120px;" />
        <Dock :items="items" position="bottom" variant="floating" size="md" style="bottom: 70px;" />
        <Dock :items="items" position="bottom" variant="floating" size="lg" style="bottom: 20px;" />
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dock
    },
    data() {
      return {
        items: [{
          id: 'mail',
          label: 'Mail',
          icon: '📧',
          badge: '12'
        }, {
          id: 'messages',
          label: 'Messages',
          icon: '💬',
          badge: '3'
        }, {
          id: 'notifications',
          label: 'Notifications',
          icon: '🔔',
          badge: '99+'
        }, {
          id: 'updates',
          label: 'Updates',
          icon: '🔄',
          badge: '1'
        }, {
          id: 'calendar',
          label: 'Calendar',
          icon: '📅'
        }]
      };
    },
    methods: {
      handleItemClick(item: {
        label: string;
        badge?: string;
      }, index: number) {
        console.log('Clicked:', item.label, 'at index:', index);

        // Simulate clearing badges
        if (item.badge) {
          item.badge = '';
          setTimeout(() => {
            // Simulate new notifications
            if (item.label === 'Mail') {
              item.badge = Math.floor(Math.random() * 10).toString();
            } else if (item.label === 'Messages') {
              item.badge = Math.floor(Math.random() * 5).toString();
            }
          }, 2000);
        }
      }
    },
    template: \`
      <div class="relative h-screen bg-base-200">
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">Dock with Badges</h1>
          <p class="mb-4">Click items to clear badges (they'll randomly reappear)</p>
        </div>
        
        <Dock 
          :items="items" 
          position="bottom" 
          variant="floating"
          @item-click="handleItemClick"
        />
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dock
    },
    data() {
      return {
        activeApp: 'finder',
        applications: [{
          id: 'finder',
          label: 'Finder',
          icon: '📁',
          active: true
        }, {
          id: 'safari',
          label: 'Safari',
          icon: '🌐'
        }, {
          id: 'mail',
          label: 'Mail',
          icon: '📧',
          badge: '7'
        }, {
          id: 'messages',
          label: 'Messages',
          icon: '💬',
          badge: '2'
        }, {
          id: 'photos',
          label: 'Photos',
          icon: '📸'
        }, {
          id: 'music',
          label: 'Music',
          icon: '🎵'
        }, {
          id: 'terminal',
          label: 'Terminal',
          icon: '⚡'
        }, {
          id: 'vscode',
          label: 'VS Code',
          icon: '💻',
          badge: '3'
        }, {
          id: 'settings',
          label: 'System Preferences',
          icon: '⚙️'
        }]
      };
    },
    computed: {
      dockItems() {
        return this.applications.map(app => ({
          ...app,
          active: app.id === this.activeApp
        }));
      }
    },
    methods: {
      handleAppClick(app: {
        id: string;
        label: string;
      }, _index: number) {
        this.activeApp = app.id;
        console.log('Launched:', app.label);

        // Simulate opening an application
        setTimeout(() => {
          alert(\`Opening \${app.label}...\`);
        }, 100);
      }
    },
    template: \`
      <div class="relative h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')] bg-cover bg-center opacity-30"></div>
        
        <div class="relative z-10 p-8 text-white">
          <h1 class="text-4xl font-bold mb-4">macOS-style Application Dock</h1>
          <p class="text-lg mb-4 opacity-90">Click applications to launch them</p>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md">
            <h3 class="font-semibold mb-2">Active Application:</h3>
            <p class="text-xl">{{ applications.find(app => app.id === activeApp)?.label }}</p>
          </div>
        </div>
        
        <Dock 
          :items="dockItems" 
          position="bottom" 
          variant="glass"
          size="lg"
          @item-click="handleAppClick"
        />
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dock
    },
    data() {
      return {
        selectedTool: 'select',
        tools: [{
          id: 'select',
          label: 'Select',
          icon: '↖️'
        }, {
          id: 'move',
          label: 'Move',
          icon: '✋'
        }, {
          id: 'rotate',
          label: 'Rotate',
          icon: '🔄'
        }, {
          id: 'scale',
          label: 'Scale',
          icon: '📏'
        }, {
          id: 'pen',
          label: 'Pen',
          icon: '✏️'
        }, {
          id: 'brush',
          label: 'Brush',
          icon: '🖌️'
        }, {
          id: 'eraser',
          label: 'Eraser',
          icon: '🧹'
        }, {
          id: 'text',
          label: 'Text',
          icon: '📝'
        }]
      };
    },
    computed: {
      toolItems() {
        return this.tools.map(tool => ({
          ...tool,
          active: tool.id === this.selectedTool
        }));
      }
    },
    methods: {
      handleToolSelect(tool: {
        id: string;
        label: string;
      }, _index: number) {
        this.selectedTool = tool.id;
        console.log('Selected tool:', tool.label);
      }
    },
    template: \`
      <div class="relative h-screen bg-gray-100">
        <div class="p-8">
          <h1 class="text-2xl font-bold mb-4">Design Tool Toolbar</h1>
          <div class="bg-white rounded-lg p-6 shadow-sm max-w-md">
            <h3 class="font-semibold mb-2">Selected Tool:</h3>
            <div class="flex items-center gap-2">
              <span class="text-2xl">{{ tools.find(t => t.id === selectedTool)?.icon }}</span>
              <span class="text-lg">{{ tools.find(t => t.id === selectedTool)?.label }}</span>
            </div>
          </div>
          
          <div class="mt-8 bg-white rounded-lg p-6 shadow-sm">
            <h3 class="font-semibold mb-4">Canvas Area</h3>
            <div class="w-full h-64 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <p class="text-gray-500">Design workspace</p>
            </div>
          </div>
        </div>
        
        <Dock 
          :items="toolItems" 
          position="left" 
          variant="floating"
          size="md"
          @item-click="handleToolSelect"
        />
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dock
    },
    data() {
      return {
        socialApps: [{
          id: 'twitter',
          label: 'Twitter',
          icon: '🐦',
          href: 'https://twitter.com',
          target: '_blank'
        }, {
          id: 'facebook',
          label: 'Facebook',
          icon: '📘',
          href: 'https://facebook.com',
          target: '_blank',
          badge: '3'
        }, {
          id: 'instagram',
          label: 'Instagram',
          icon: '📷',
          href: 'https://instagram.com',
          target: '_blank'
        }, {
          id: 'linkedin',
          label: 'LinkedIn',
          icon: '💼',
          href: 'https://linkedin.com',
          target: '_blank',
          badge: '12'
        }, {
          id: 'youtube',
          label: 'YouTube',
          icon: '📺',
          href: 'https://youtube.com',
          target: '_blank'
        }, {
          id: 'tiktok',
          label: 'TikTok',
          icon: '🎵',
          href: 'https://tiktok.com',
          target: '_blank',
          badge: '99+'
        }]
      };
    },
    methods: {
      handleSocialClick(app: {
        label: string;
        href?: string;
      }, _index: number, event: Event) {
        console.log('Opening:', app.label);

        // For demo purposes, prevent actual navigation
        if (app.href) {
          event.preventDefault();
          alert(\`Would open \${app.label} in new tab\`);
        }
      }
    },
    template: \`
      <div class="relative h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600">
        <div class="p-8 text-white">
          <h1 class="text-3xl font-bold mb-4">Social Media Dock</h1>
          <p class="text-lg mb-8 opacity-90">Quick access to your favorite social platforms</p>
          
          <div class="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-lg">
            <h3 class="font-semibold text-xl mb-4">Features:</h3>
            <ul class="space-y-2">
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-white rounded-full"></span>
                <span>External links with target="_blank"</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-white rounded-full"></span>
                <span>Notification badges</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-white rounded-full"></span>
                <span>Hover tooltips</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-2 h-2 bg-white rounded-full"></span>
                <span>Glass morphism design</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Dock 
          :items="socialApps" 
          position="bottom" 
          variant="glass"
          size="lg"
          @item-click="handleSocialClick"
        />
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};const X=["Default","Positions","Variants","Sizes","WithBadges","ApplicationDock","ToolbarDock","SocialMediaDock"];export{v as ApplicationDock,b as Default,g as Positions,h as Sizes,x as SocialMediaDock,k as ToolbarDock,u as Variants,f as WithBadges,X as __namedExportsOrder,J as default};
