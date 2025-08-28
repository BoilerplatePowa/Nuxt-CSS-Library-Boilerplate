import{d as E,c as m,a as s,b as h,l,n as i,e as z,F as B,g as A,t as v,o as r,v as U}from"./iframe-C1Ystuve.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const G={class:"join"},H=["disabled"],R={key:0,class:"hidden sm:inline ml-2"},W=["onClick"],J=["disabled"],K={key:0,class:"hidden sm:inline mr-2"},Q={key:0,class:"text-sm text-base-content/70 mt-2 text-center"},D=E({__name:"Pagination",props:{currentPage:{},totalPages:{},totalItems:{},itemsPerPage:{default:10},disabled:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"default"},showPageNumbers:{type:Boolean,default:!0},showFirstLast:{type:Boolean,default:!0},showLabels:{type:Boolean,default:!1},showInfo:{type:Boolean,default:!1},maxVisiblePages:{default:5}},emits:["page-change"],setup(c,{emit:q}){const t=c,F=q,C=m(()=>{const e=["join-item","btn"];return t.size==="xs"?e.push("btn-xs"):t.size==="sm"?e.push("btn-sm"):t.size==="lg"&&e.push("btn-lg"),t.variant==="outline"?e.push("btn-outline"):t.variant==="ghost"&&e.push("btn-ghost"),e.join(" ")}),V=m(()=>{const e=["join-item","btn","btn-disabled","no-animation"];return t.size==="xs"?e.push("btn-xs"):t.size==="sm"?e.push("btn-sm"):t.size==="lg"&&e.push("btn-lg"),e.join(" ")}),T=m(()=>{const e=[],a=t.maxVisiblePages,n=t.currentPage,p=t.totalPages;if(p<=a)for(let g=1;g<=p;g++)e.push(g);else{const g=Math.floor(a/2);let u=Math.max(1,n-g),b=Math.min(p,n+g);b-u+1<a&&(u===1?b=Math.min(p,u+a-1):u=Math.max(1,b-a+1));for(let L=u;L<=b;L++)e.push(L)}return e}),N=m(()=>t.totalItems?(t.currentPage-1)*t.itemsPerPage+1:1),j=m(()=>t.totalItems?Math.min(t.currentPage*t.itemsPerPage,t.totalItems):t.itemsPerPage),$=e=>{const a=[...C.value];return e===t.currentPage&&a.push("btn-active"),a.join(" ")},d=e=>{e<1||e>t.totalPages||e===t.currentPage||t.disabled||F("page-change",e)};return(e,a)=>(r(),s(B,null,[h("div",G,[h("button",{class:i(C.value),disabled:e.currentPage<=1||e.disabled,onClick:a[0]||(a[0]=n=>d(e.currentPage-1))},[z(e.$slots,"prev-icon",{},()=>[a[4]||(a[4]=h("span",null,"«",-1))],!0),e.showLabels?(r(),s("span",R,"Previous")):l("",!0)],10,H),e.showPageNumbers?(r(),s(B,{key:0},[e.showFirstLast&&e.currentPage>3?(r(),s("button",{key:0,class:i($(1)),onClick:a[1]||(a[1]=n=>d(1))}," 1 ",2)):l("",!0),e.showFirstLast&&e.currentPage>4?(r(),s("span",{key:1,class:i(V.value)}," ... ",2)):l("",!0),(r(!0),s(B,null,A(T.value,n=>(r(),s("button",{key:n,class:i($(n)),onClick:p=>d(n)},v(n),11,W))),128)),e.showFirstLast&&e.currentPage<e.totalPages-3?(r(),s("span",{key:2,class:i(V.value)}," ... ",2)):l("",!0),e.showFirstLast&&e.currentPage<e.totalPages-2?(r(),s("button",{key:3,class:i($(e.totalPages)),onClick:a[2]||(a[2]=n=>d(e.totalPages))},v(e.totalPages),3)):l("",!0)],64)):l("",!0),h("button",{class:i(C.value),disabled:e.currentPage>=e.totalPages||e.disabled,onClick:a[3]||(a[3]=n=>d(e.currentPage+1))},[e.showLabels?(r(),s("span",K,"Next")):l("",!0),z(e.$slots,"next-icon",{},()=>[a[5]||(a[5]=h("span",null,"»",-1))],!0)],10,J)]),e.showInfo?(r(),s("div",Q,[z(e.$slots,"info",{current:e.currentPage,total:e.totalPages,start:N.value,end:j.value,totalItems:e.totalItems},()=>[U(" Showing "+v(N.value)+" to "+v(j.value)+" of "+v(e.totalItems)+" results ",1)],!0)])):l("",!0)],64))}}),o=O(D,[["__scopeId","data-v-e0f76078"]]);D.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"currentPage",required:!0,type:{name:"number"}},{name:"totalPages",required:!0,type:{name:"number"}},{name:"totalItems",required:!1,type:{name:"number"}},{name:"itemsPerPage",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"xs"'},{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"outline"'},{name:'"ghost"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"showPageNumbers",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showFirstLast",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showLabels",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showInfo",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxVisiblePages",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],events:[{name:"page-change",type:{names:["number"]}}],slots:[{name:"prev-icon"},{name:"next-icon"},{name:"info",scoped:!0,bindings:[{name:"current",title:"binding"},{name:"total",title:"binding"},{name:"start",title:"binding"},{name:"end",title:"binding"},{name:"totalItems",title:"binding"}]}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Navigation/Pagination.vue"]};const _={title:"Navigation/Pagination",component:o,parameters:{layout:"centered"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["default","bordered","ghost"]},showLabels:{control:{type:"boolean"}},showPageNumbers:{control:{type:"boolean"}},showFirstLast:{control:{type:"boolean"}},maxVisiblePages:{control:{type:"number"}},disabled:{control:{type:"boolean"}}}},P={args:{currentPage:3,totalPages:10},render:c=>({components:{Pagination:o},setup(){return{args:c}},template:`
      <Pagination 
        v-bind="args"
        @page-change="(page) => { args.currentPage = page; }"
      />
    `})},f={args:{currentPage:5,totalPages:20,showLabels:!0},render:c=>({components:{Pagination:o},setup(){return{args:c}},template:`
      <Pagination 
        v-bind="args"
        @page-change="(page) => { args.currentPage = page; }"
      />
    `})},x={render:()=>({components:{Pagination:o},data(){return{page1:2,page2:3,page3:4,page4:5}},template:`
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Extra Small</h3>
          <Pagination 
            :current-page="page1"
            :total-pages="8"
            size="xs"
            @page-change="page1 = $event"
          />
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Small</h3>
          <Pagination 
            :current-page="page2"
            :total-pages="8"
            size="sm"
            @page-change="page2 = $event"
          />
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Medium</h3>
          <Pagination 
            :current-page="page3"
            :total-pages="8"
            size="md"
            @page-change="page3 = $event"
          />
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Large</h3>
          <Pagination 
            :current-page="page4"
            :total-pages="8"
            size="lg"
            show-labels
            @page-change="page4 = $event"
          />
        </div>
      </div>
    `})},w={render:()=>({components:{Pagination:o},data(){return{page1:3,page2:3,page3:3}},template:`
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <Pagination 
            :current-page="page1"
            :total-pages="10"
            variant="default"
            @page-change="page1 = $event"
          />
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Bordered</h3>
          <Pagination 
            :current-page="page2"
            :total-pages="10"
            variant="bordered"
            @page-change="page2 = $event"
          />
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Ghost</h3>
          <Pagination 
            :current-page="page3"
            :total-pages="10"
            variant="ghost"
            @page-change="page3 = $event"
          />
        </div>
      </div>
    `})},y={render:()=>({components:{Pagination:o},data(){return{currentPage:25}},template:`
      <div class="text-center">
        <h3 class="text-lg font-bold mb-4">Large Dataset (100 pages)</h3>
        <Pagination 
          :current-page="currentPage"
          :total-pages="100"
          show-first-last
          show-labels
          @page-change="currentPage = $event"
        />
        
        <p class="mt-4 text-sm opacity-70">
          Current page: {{ currentPage }} of 100
        </p>
      </div>
    `})},k={render:()=>({components:{Pagination:o},data(){return{currentPage:4}},template:`
      <div class="text-center">
        <h3 class="text-lg font-bold mb-4">Custom Icons</h3>
        <Pagination 
          :current-page="currentPage"
          :total-pages="10"
          show-labels
          @page-change="currentPage = $event"
        >
          <template #prev-icon>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </template>
          
          <template #next-icon>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </template>
          
          <template #first-icon>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </template>
          
          <template #last-icon>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </template>
        </Pagination>
      </div>
    `})},I={render:()=>({components:{Pagination:o},data(){return{currentPage:1}},template:`
      <div class="text-center">
        <h3 class="text-lg font-bold mb-4">Minimal - Previous/Next Only</h3>
        <Pagination 
          :current-page="currentPage"
          :total-pages="5"
          :show-page-numbers="false"
          show-labels
          size="lg"
          @page-change="currentPage = $event"
        />
        
        <p class="mt-4 text-sm opacity-70">
          Page {{ currentPage }} of 5
        </p>
      </div>
    `})},M={render:()=>({components:{Pagination:o},template:`
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Normal State</h3>
          <Pagination 
            :current-page="3"
            :total-pages="10"
            show-labels
          />
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Disabled State</h3>
          <Pagination 
            :current-page="3"
            :total-pages="10"
            show-labels
            disabled
          />
        </div>
      </div>
    `})},S={render:()=>({components:{Pagination:o},data(){return{currentPage:1,itemsPerPage:10,totalItems:247}},computed:{totalPages(){return Math.ceil(this.totalItems/this.itemsPerPage)},startItem(){return(this.currentPage-1)*this.itemsPerPage+1},endItem(){return Math.min(this.currentPage*this.itemsPerPage,this.totalItems)}},template:`
      <div class="bg-base-100 rounded-lg shadow-lg overflow-hidden">
        <!-- Table Header -->
        <div class="bg-base-200 px-6 py-4">
          <h3 class="text-lg font-bold">User Management</h3>
          <p class="text-sm opacity-70">Manage your users and their permissions</p>
        </div>
        
        <!-- Mock Table -->
        <div class="p-6">
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in itemsPerPage" :key="i">
                  <td>{{ startItem + i - 1 }}</td>
                  <td>User {{ startItem + i - 1 }}</td>
                  <td>user{{ startItem + i - 1 }}@example.com</td>
                  <td>
                    <span class="badge badge-ghost">
                      {{ i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'Viewer' }}
                    </span>
                  </td>
                  <td>
                    <span :class="i % 4 === 0 ? 'badge badge-error' : 'badge badge-success'">
                      {{ i % 4 === 0 ? 'Inactive' : 'Active' }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- Pagination Footer -->
        <div class="bg-base-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div class="text-sm opacity-70">
            Showing {{ startItem }} to {{ endItem }} of {{ totalItems }} results
          </div>
          
          <Pagination 
            :current-page="currentPage"
            :total-pages="totalPages"
            show-first-last
            @page-change="currentPage = $event"
          />
        </div>
      </div>
    `})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 10
  },
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Pagination 
        v-bind="args"
        @page-change="(page) => { args.currentPage = page; }"
      />
    \`
  })
}`,...P.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 20,
    showLabels: true
  },
  render: args => ({
    components: {
      Pagination
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Pagination 
        v-bind="args"
        @page-change="(page) => { args.currentPage = page; }"
      />
    \`
  })
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    data() {
      return {
        page1: 2,
        page2: 3,
        page3: 4,
        page4: 5
      };
    },
    template: \`
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Extra Small</h3>
          <Pagination 
            :current-page="page1"
            :total-pages="8"
            size="xs"
            @page-change="page1 = $event"
          />
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Small</h3>
          <Pagination 
            :current-page="page2"
            :total-pages="8"
            size="sm"
            @page-change="page2 = $event"
          />
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Medium</h3>
          <Pagination 
            :current-page="page3"
            :total-pages="8"
            size="md"
            @page-change="page3 = $event"
          />
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Large</h3>
          <Pagination 
            :current-page="page4"
            :total-pages="8"
            size="lg"
            show-labels
            @page-change="page4 = $event"
          />
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    data() {
      return {
        page1: 3,
        page2: 3,
        page3: 3
      };
    },
    template: \`
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <Pagination 
            :current-page="page1"
            :total-pages="10"
            variant="default"
            @page-change="page1 = $event"
          />
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Bordered</h3>
          <Pagination 
            :current-page="page2"
            :total-pages="10"
            variant="bordered"
            @page-change="page2 = $event"
          />
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Ghost</h3>
          <Pagination 
            :current-page="page3"
            :total-pages="10"
            variant="ghost"
            @page-change="page3 = $event"
          />
        </div>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    data() {
      return {
        currentPage: 25
      };
    },
    template: \`
      <div class="text-center">
        <h3 class="text-lg font-bold mb-4">Large Dataset (100 pages)</h3>
        <Pagination 
          :current-page="currentPage"
          :total-pages="100"
          show-first-last
          show-labels
          @page-change="currentPage = $event"
        />
        
        <p class="mt-4 text-sm opacity-70">
          Current page: {{ currentPage }} of 100
        </p>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    data() {
      return {
        currentPage: 4
      };
    },
    template: \`
      <div class="text-center">
        <h3 class="text-lg font-bold mb-4">Custom Icons</h3>
        <Pagination 
          :current-page="currentPage"
          :total-pages="10"
          show-labels
          @page-change="currentPage = $event"
        >
          <template #prev-icon>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </template>
          
          <template #next-icon>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </template>
          
          <template #first-icon>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </template>
          
          <template #last-icon>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </template>
        </Pagination>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    data() {
      return {
        currentPage: 1
      };
    },
    template: \`
      <div class="text-center">
        <h3 class="text-lg font-bold mb-4">Minimal - Previous/Next Only</h3>
        <Pagination 
          :current-page="currentPage"
          :total-pages="5"
          :show-page-numbers="false"
          show-labels
          size="lg"
          @page-change="currentPage = $event"
        />
        
        <p class="mt-4 text-sm opacity-70">
          Page {{ currentPage }} of 5
        </p>
      </div>
    \`
  })
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    template: \`
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Normal State</h3>
          <Pagination 
            :current-page="3"
            :total-pages="10"
            show-labels
          />
        </div>
        
        <div class="text-center">
          <h3 class="text-lg font-bold mb-4">Disabled State</h3>
          <Pagination 
            :current-page="3"
            :total-pages="10"
            show-labels
            disabled
          />
        </div>
      </div>
    \`
  })
}`,...M.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Pagination
    },
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 10,
        totalItems: 247
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
      },
      startItem() {
        return (this.currentPage - 1) * this.itemsPerPage + 1;
      },
      endItem() {
        return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
      }
    },
    template: \`
      <div class="bg-base-100 rounded-lg shadow-lg overflow-hidden">
        <!-- Table Header -->
        <div class="bg-base-200 px-6 py-4">
          <h3 class="text-lg font-bold">User Management</h3>
          <p class="text-sm opacity-70">Manage your users and their permissions</p>
        </div>
        
        <!-- Mock Table -->
        <div class="p-6">
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in itemsPerPage" :key="i">
                  <td>{{ startItem + i - 1 }}</td>
                  <td>User {{ startItem + i - 1 }}</td>
                  <td>user{{ startItem + i - 1 }}@example.com</td>
                  <td>
                    <span class="badge badge-ghost">
                      {{ i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'Viewer' }}
                    </span>
                  </td>
                  <td>
                    <span :class="i % 4 === 0 ? 'badge badge-error' : 'badge badge-success'">
                      {{ i % 4 === 0 ? 'Inactive' : 'Active' }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- Pagination Footer -->
        <div class="bg-base-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div class="text-sm opacity-70">
            Showing {{ startItem }} to {{ endItem }} of {{ totalItems }} results
          </div>
          
          <Pagination 
            :current-page="currentPage"
            :total-pages="totalPages"
            show-first-last
            @page-change="currentPage = $event"
          />
        </div>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};const ee=["Default","WithLabels","Sizes","Variants","LargeDataset","CustomIcons","MinimalPagination","DisabledState","TablePagination"];export{k as CustomIcons,P as Default,M as DisabledState,y as LargeDataset,I as MinimalPagination,x as Sizes,S as TablePagination,w as Variants,f as WithLabels,ee as __namedExportsOrder,_ as default};
