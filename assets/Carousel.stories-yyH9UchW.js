import{C as l}from"./Carousel-DuuojWFb.js";import"./iframe-BHqO8_ZB.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Data Display/Carousel",component:l,parameters:{layout:"centered",docs:{description:{component:"Interactive carousel component for displaying images and content with navigation controls."}}},argTypes:{items:{control:"object",description:"Array of carousel items"},autoplay:{control:"boolean",description:"Enable automatic slide progression"},autoplayInterval:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Autoplay interval in milliseconds"},showIndicators:{control:"boolean",description:"Show dot indicators"},showArrows:{control:"boolean",description:"Show navigation arrows"},loop:{control:"boolean",description:"Enable infinite loop"},variant:{control:{type:"select"},options:["default","full-width","center","vertical"],description:"Carousel variant"}},tags:["autodocs"]},i=[{image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",alt:"Mountain landscape",value:"1"},{image:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=400&fit=crop",alt:"Ocean waves",value:"2"},{image:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",alt:"Forest path",value:"3"},{image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",alt:"Desert dunes",value:"4"}],e={args:{items:i,showIndicators:!0,showArrows:!0}},t={args:{items:i,autoplay:!0,autoplayInterval:3e3,showIndicators:!0,showArrows:!0}},s={args:{items:i,showIndicators:!1,showArrows:!1}},a={args:{items:i,loop:!0,showIndicators:!0,showArrows:!0}},o={args:{items:[{value:"1",content:`
          <div class="flex flex-col items-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div class="w-32 h-32 bg-blue-500 rounded-full mb-4 flex items-center justify-center text-white text-4xl">
              📱
            </div>
            <h3 class="text-2xl font-bold mb-2">Smartphone</h3>
            <p class="text-gray-600 text-center">Latest technology with amazing features</p>
            <div class="text-3xl font-bold text-blue-600 mt-4">$699</div>
          </div>
        `},{value:"2",content:`
          <div class="flex flex-col items-center p-8 bg-gradient-to-br from-green-50 to-emerald-100">
            <div class="w-32 h-32 bg-green-500 rounded-full mb-4 flex items-center justify-center text-white text-4xl">
              💻
            </div>
            <h3 class="text-2xl font-bold mb-2">Laptop</h3>
            <p class="text-gray-600 text-center">Powerful performance for work and play</p>
            <div class="text-3xl font-bold text-green-600 mt-4">$1,299</div>
          </div>
        `},{value:"3",content:`
          <div class="flex flex-col items-center p-8 bg-gradient-to-br from-purple-50 to-violet-100">
            <div class="w-32 h-32 bg-purple-500 rounded-full mb-4 flex items-center justify-center text-white text-4xl">
              🎧
            </div>
            <h3 class="text-2xl font-bold mb-2">Headphones</h3>
            <p class="text-gray-600 text-center">Premium sound quality and comfort</p>
            <div class="text-3xl font-bold text-purple-600 mt-4">$199</div>
          </div>
        `}],showIndicators:!0,showArrows:!0}},r={args:{items:[{value:"1",content:`
          <div class="text-center p-8 max-w-md mx-auto">
            <div class="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-lg italic mb-6">"This product exceeded my expectations. Highly recommended!"</p>
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-blue-500 rounded-full mr-4"></div>
              <div>
                <div class="font-semibold">Sarah Johnson</div>
                <div class="text-sm text-gray-500">Verified Customer</div>
              </div>
            </div>
          </div>
        `},{value:"2",content:`
          <div class="text-center p-8 max-w-md mx-auto">
            <div class="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-lg italic mb-6">"Amazing customer service and fast delivery!"</p>
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-green-500 rounded-full mr-4"></div>
              <div>
                <div class="font-semibold">Mike Chen</div>
                <div class="text-sm text-gray-500">Happy Customer</div>
              </div>
            </div>
          </div>
        `},{value:"3",content:`
          <div class="text-center p-8 max-w-md mx-auto">
            <div class="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-lg italic mb-6">"Best purchase I've made this year!"</p>
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-purple-500 rounded-full mr-4"></div>
              <div>
                <div class="font-semibold">Emily Davis</div>
                <div class="text-sm text-gray-500">Regular Customer</div>
              </div>
            </div>
          </div>
        `}],autoplay:!0,autoplayInterval:4e3,showIndicators:!0,showArrows:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: imageItems,
    showIndicators: true,
    showArrows: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: imageItems,
    autoplay: true,
    autoplayInterval: 3000,
    showIndicators: true,
    showArrows: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: imageItems,
    showIndicators: false,
    showArrows: false
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: imageItems,
    loop: true,
    showIndicators: true,
    showArrows: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      value: '1',
      content: \`
          <div class="flex flex-col items-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div class="w-32 h-32 bg-blue-500 rounded-full mb-4 flex items-center justify-center text-white text-4xl">
              📱
            </div>
            <h3 class="text-2xl font-bold mb-2">Smartphone</h3>
            <p class="text-gray-600 text-center">Latest technology with amazing features</p>
            <div class="text-3xl font-bold text-blue-600 mt-4">$699</div>
          </div>
        \`
    }, {
      value: '2',
      content: \`
          <div class="flex flex-col items-center p-8 bg-gradient-to-br from-green-50 to-emerald-100">
            <div class="w-32 h-32 bg-green-500 rounded-full mb-4 flex items-center justify-center text-white text-4xl">
              💻
            </div>
            <h3 class="text-2xl font-bold mb-2">Laptop</h3>
            <p class="text-gray-600 text-center">Powerful performance for work and play</p>
            <div class="text-3xl font-bold text-green-600 mt-4">$1,299</div>
          </div>
        \`
    }, {
      value: '3',
      content: \`
          <div class="flex flex-col items-center p-8 bg-gradient-to-br from-purple-50 to-violet-100">
            <div class="w-32 h-32 bg-purple-500 rounded-full mb-4 flex items-center justify-center text-white text-4xl">
              🎧
            </div>
            <h3 class="text-2xl font-bold mb-2">Headphones</h3>
            <p class="text-gray-600 text-center">Premium sound quality and comfort</p>
            <div class="text-3xl font-bold text-purple-600 mt-4">$199</div>
          </div>
        \`
    }],
    showIndicators: true,
    showArrows: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      value: '1',
      content: \`
          <div class="text-center p-8 max-w-md mx-auto">
            <div class="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-lg italic mb-6">"This product exceeded my expectations. Highly recommended!"</p>
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-blue-500 rounded-full mr-4"></div>
              <div>
                <div class="font-semibold">Sarah Johnson</div>
                <div class="text-sm text-gray-500">Verified Customer</div>
              </div>
            </div>
          </div>
        \`
    }, {
      value: '2',
      content: \`
          <div class="text-center p-8 max-w-md mx-auto">
            <div class="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-lg italic mb-6">"Amazing customer service and fast delivery!"</p>
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-green-500 rounded-full mr-4"></div>
              <div>
                <div class="font-semibold">Mike Chen</div>
                <div class="text-sm text-gray-500">Happy Customer</div>
              </div>
            </div>
          </div>
        \`
    }, {
      value: '3',
      content: \`
          <div class="text-center p-8 max-w-md mx-auto">
            <div class="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-lg italic mb-6">"Best purchase I've made this year!"</p>
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-purple-500 rounded-full mr-4"></div>
              <div>
                <div class="font-semibold">Emily Davis</div>
                <div class="text-sm text-gray-500">Regular Customer</div>
              </div>
            </div>
          </div>
        \`
    }],
    autoplay: true,
    autoplayInterval: 4000,
    showIndicators: true,
    showArrows: false
  }
}`,...r.parameters?.docs?.source}}};const p=["Default","Autoplay","NoControls","InfiniteLoop","ProductShowcase","TestimonialCarousel"];export{t as Autoplay,e as Default,a as InfiniteLoop,s as NoControls,o as ProductShowcase,r as TestimonialCarousel,p as __namedExportsOrder,u as default};
