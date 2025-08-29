import{d as m,c as h,a as u,e as k,x as S,n as g,o as f}from"./iframe-CzrYmmIK.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const c=m({__name:"Skeleton",props:{variant:{default:"text"},width:{},height:{},lines:{default:1},animated:{type:Boolean,default:!0}},setup(p){const e=p,x=h(()=>{const t=["skeleton"];return e.variant==="text"?t.push("skeleton-text"):e.variant==="circular"?t.push("skeleton-circular"):e.variant==="rectangular"?t.push("skeleton-rectangular"):e.variant==="rounded"&&t.push("skeleton-rounded"),e.animated||t.push("skeleton-no-animation"),t.join(" ")}),v=h(()=>{const t={};return e.width&&(t.width=typeof e.width=="number"?`${e.width}px`:e.width),e.height&&(t.height=typeof e.height=="number"?`${e.height}px`:e.height),t});return(t,b)=>(f(),u("div",{class:g(x.value),style:S(v.value)},[k(t.$slots,"default",{},void 0,!0)],6))}}),n=w(c,[["__scopeId","data-v-fd0ff5c9"]]);c.__docgenInfo={exportName:"default",displayName:"Skeleton",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"text"'},{name:'"circular"'},{name:'"rectangular"'},{name:'"rounded"'}]},defaultValue:{func:!1,value:"'text'"}},{name:"width",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"height",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"lines",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"animated",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Feedback/Skeleton.vue"]};const C={title:"Feedback/Skeleton",component:n,parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["text","circular","rectangular","rounded"]},width:{control:{type:"text"}},height:{control:{type:"text"}},lines:{control:{type:"number"}},animated:{control:{type:"boolean"}}}},a={args:{variant:"text",width:"100%"}},i={render:()=>({components:{Skeleton:n},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Text Skeleton</h3>
          <div class="space-y-2">
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Circular Skeleton</h3>
          <div class="flex gap-4">
            <Skeleton variant="circular" width="40px" height="40px" />
            <Skeleton variant="circular" width="60px" height="60px" />
            <Skeleton variant="circular" width="80px" height="80px" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Rectangular Skeleton</h3>
          <Skeleton variant="rectangular" width="200px" height="120px" />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Rounded Skeleton</h3>
          <Skeleton variant="rounded" width="200px" height="120px" />
        </div>
      </div>
    `})},d={render:()=>({components:{Skeleton:n},template:`
      <div class="max-w-sm mx-auto">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <!-- Avatar and text -->
            <div class="flex items-center space-x-4 mb-4">
              <Skeleton variant="circular" width="48px" height="48px" />
              <div class="flex-1">
                <Skeleton variant="text" width="100%" height="16px" />
                <Skeleton variant="text" width="60%" height="14px" />
              </div>
            </div>
            
            <!-- Image placeholder -->
            <Skeleton variant="rounded" width="100%" height="200px" />
            
            <!-- Text content -->
            <div class="mt-4 space-y-2">
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="text" width="70%" />
            </div>
            
            <!-- Actions -->
            <div class="flex gap-2 mt-4">
              <Skeleton variant="rounded" width="80px" height="32px" />
              <Skeleton variant="rounded" width="80px" height="32px" />
            </div>
          </div>
        </div>
      </div>
    `})},r={render:()=>({components:{Skeleton:n},template:`
      <div class="max-w-md mx-auto space-y-4">
        <h3 class="text-lg font-bold">Loading List Items...</h3>
        
        <!-- List item skeletons -->
        <div v-for="i in 5" :key="i" class="flex items-center space-x-4 p-4 border rounded-lg">
          <Skeleton variant="circular" width="40px" height="40px" />
          <div class="flex-1">
            <Skeleton variant="text" width="100%" height="16px" />
            <Skeleton variant="text" width="70%" height="14px" />
          </div>
          <Skeleton variant="rounded" width="60px" height="24px" />
        </div>
      </div>
    `})},o={render:()=>({components:{Skeleton:n},template:`
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td>
                <div class="flex items-center space-x-3">
                  <Skeleton variant="circular" width="32px" height="32px" />
                  <Skeleton variant="text" width="120px" />
                </div>
              </td>
              <td>
                <Skeleton variant="text" width="150px" />
              </td>
              <td>
                <Skeleton variant="rounded" width="80px" height="20px" />
              </td>
              <td>
                <Skeleton variant="rounded" width="60px" height="24px" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `})},l={render:()=>({components:{Skeleton:n},template:`
      <div class="max-w-md mx-auto space-y-6">
        <h3 class="text-lg font-bold">Loading Form...</h3>
        
        <!-- Form field skeletons -->
        <div class="form-control">
          <Skeleton variant="text" width="80px" height="16px" />
          <Skeleton variant="rounded" width="100%" height="48px" />
        </div>
        
        <div class="form-control">
          <Skeleton variant="text" width="60px" height="16px" />
          <Skeleton variant="rounded" width="100%" height="48px" />
        </div>
        
        <div class="form-control">
          <Skeleton variant="text" width="70px" height="16px" />
          <Skeleton variant="rounded" width="100%" height="96px" />
        </div>
        
        <div class="flex gap-2">
          <Skeleton variant="rounded" width="100px" height="40px" />
          <Skeleton variant="rounded" width="80px" height="40px" />
        </div>
      </div>
    `})},s={render:()=>({components:{Skeleton:n},template:`
      <div class="space-y-4">
        <h3 class="text-lg font-bold">Without Animation</h3>
        
        <div class="space-y-2">
          <Skeleton variant="text" width="100%" :animated="false" />
          <Skeleton variant="text" width="80%" :animated="false" />
          <Skeleton variant="text" width="60%" :animated="false" />
        </div>
        
        <div class="flex items-center space-x-4">
          <Skeleton variant="circular" width="48px" height="48px" :animated="false" />
          <div class="flex-1 space-y-1">
            <Skeleton variant="text" width="100%" :animated="false" />
            <Skeleton variant="text" width="70%" :animated="false" />
          </div>
        </div>
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: '100%'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Skeleton
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Text Skeleton</h3>
          <div class="space-y-2">
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Circular Skeleton</h3>
          <div class="flex gap-4">
            <Skeleton variant="circular" width="40px" height="40px" />
            <Skeleton variant="circular" width="60px" height="60px" />
            <Skeleton variant="circular" width="80px" height="80px" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Rectangular Skeleton</h3>
          <Skeleton variant="rectangular" width="200px" height="120px" />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Rounded Skeleton</h3>
          <Skeleton variant="rounded" width="200px" height="120px" />
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Skeleton
    },
    template: \`
      <div class="max-w-sm mx-auto">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <!-- Avatar and text -->
            <div class="flex items-center space-x-4 mb-4">
              <Skeleton variant="circular" width="48px" height="48px" />
              <div class="flex-1">
                <Skeleton variant="text" width="100%" height="16px" />
                <Skeleton variant="text" width="60%" height="14px" />
              </div>
            </div>
            
            <!-- Image placeholder -->
            <Skeleton variant="rounded" width="100%" height="200px" />
            
            <!-- Text content -->
            <div class="mt-4 space-y-2">
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="text" width="70%" />
            </div>
            
            <!-- Actions -->
            <div class="flex gap-2 mt-4">
              <Skeleton variant="rounded" width="80px" height="32px" />
              <Skeleton variant="rounded" width="80px" height="32px" />
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Skeleton
    },
    template: \`
      <div class="max-w-md mx-auto space-y-4">
        <h3 class="text-lg font-bold">Loading List Items...</h3>
        
        <!-- List item skeletons -->
        <div v-for="i in 5" :key="i" class="flex items-center space-x-4 p-4 border rounded-lg">
          <Skeleton variant="circular" width="40px" height="40px" />
          <div class="flex-1">
            <Skeleton variant="text" width="100%" height="16px" />
            <Skeleton variant="text" width="70%" height="14px" />
          </div>
          <Skeleton variant="rounded" width="60px" height="24px" />
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Skeleton
    },
    template: \`
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td>
                <div class="flex items-center space-x-3">
                  <Skeleton variant="circular" width="32px" height="32px" />
                  <Skeleton variant="text" width="120px" />
                </div>
              </td>
              <td>
                <Skeleton variant="text" width="150px" />
              </td>
              <td>
                <Skeleton variant="rounded" width="80px" height="20px" />
              </td>
              <td>
                <Skeleton variant="rounded" width="60px" height="24px" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Skeleton
    },
    template: \`
      <div class="max-w-md mx-auto space-y-6">
        <h3 class="text-lg font-bold">Loading Form...</h3>
        
        <!-- Form field skeletons -->
        <div class="form-control">
          <Skeleton variant="text" width="80px" height="16px" />
          <Skeleton variant="rounded" width="100%" height="48px" />
        </div>
        
        <div class="form-control">
          <Skeleton variant="text" width="60px" height="16px" />
          <Skeleton variant="rounded" width="100%" height="48px" />
        </div>
        
        <div class="form-control">
          <Skeleton variant="text" width="70px" height="16px" />
          <Skeleton variant="rounded" width="100%" height="96px" />
        </div>
        
        <div class="flex gap-2">
          <Skeleton variant="rounded" width="100px" height="40px" />
          <Skeleton variant="rounded" width="80px" height="40px" />
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Skeleton
    },
    template: \`
      <div class="space-y-4">
        <h3 class="text-lg font-bold">Without Animation</h3>
        
        <div class="space-y-2">
          <Skeleton variant="text" width="100%" :animated="false" />
          <Skeleton variant="text" width="80%" :animated="false" />
          <Skeleton variant="text" width="60%" :animated="false" />
        </div>
        
        <div class="flex items-center space-x-4">
          <Skeleton variant="circular" width="48px" height="48px" :animated="false" />
          <div class="flex-1 space-y-1">
            <Skeleton variant="text" width="100%" :animated="false" />
            <Skeleton variant="text" width="70%" :animated="false" />
          </div>
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};const F=["Default","Variants","CardSkeleton","ListSkeleton","TableSkeleton","FormSkeleton","WithoutAnimation"];export{d as CardSkeleton,a as Default,l as FormSkeleton,r as ListSkeleton,o as TableSkeleton,i as Variants,s as WithoutAnimation,F as __namedExportsOrder,C as default};
