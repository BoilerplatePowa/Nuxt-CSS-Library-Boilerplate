import{d as Z,r as ee,c as m,a as t,l as u,n as p,b as n,t as c,F,g as C,o as s,y as v,C as k,D as le,z as R}from"./iframe-CzrYmmIK.js";import"./preload-helper-D9Z9MdNV.js";const ae={class:"flex items-center justify-between"},te={class:"flex items-center gap-2"},se={key:0,class:"font-semibold"},re={key:1,class:"badge badge-primary badge-sm"},ne={class:"flex items-center gap-2"},oe={class:"flex flex-wrap gap-2"},ie=["onClick"],ce={key:0,class:"font-medium mb-2"},ue={key:0,class:"form-control"},de={key:0,class:"label label-text text-sm"},pe=["onUpdate:modelValue","placeholder"],he={key:1,class:"form-control"},ge={key:0,class:"label label-text text-sm"},me=["onUpdate:modelValue"],ve={value:""},be=["value"],ye={key:2,class:"form-control"},fe={key:0,class:"label label-text text-sm"},Fe={class:"space-y-1"},Ce=["value","onUpdate:modelValue"],ke={key:3,class:"form-control"},xe={key:0,class:"label label-text text-sm"},we={class:"flex items-center gap-2"},_e=["onUpdate:modelValue","placeholder"],Ae=["onUpdate:modelValue","placeholder"],Se={key:4,class:"form-control"},Ge={key:0,class:"label label-text text-sm"},Ve={class:"flex items-center gap-2"},ze=["onUpdate:modelValue"],Ue=["onUpdate:modelValue"],De={key:5,class:"form-control"},Me={class:"flex items-center gap-2 cursor-pointer"},Pe=["onUpdate:modelValue"],He={class:"text-sm"},b=Z({__name:"Filter",props:{filterGroups:{},title:{},showHeader:{type:Boolean,default:!0},showActiveFilters:{type:Boolean,default:!0},collapsible:{type:Boolean,default:!1},size:{default:"md"},variant:{default:"default"}},emits:["filterChange","filterClear","filterClearAll"],setup(d,{emit:y}){const o=d,f=y,h=ee(!1),I=m(()=>{const e=["filter","flex","flex-col","gap-2"];return o.variant==="bordered"?e.push("border","border-base-300","rounded-lg"):o.variant==="card"&&e.push("card","bg-base-100","shadow"),o.size==="sm"?e.push("p-3"):o.size==="lg"?e.push("p-6"):e.push("p-4"),e.join(" ")}),E=m(()=>{const e=["filter-header"];return o.variant==="card"&&e.push("card-header"),e.push("mb-4"),e.join(" ")}),N=m(()=>["active-filters","mb-4"].join(" ")),B=m(()=>{const e=["filter-controls"];return o.size==="sm"?e.push("space-y-3"):o.size==="lg"?e.push("space-y-6"):e.push("space-y-4"),e.join(" ")}),L=m(()=>["filter-group"].join(" ")),V=m(()=>{const e=[];return o.filterGroups.forEach(l=>{l.filters.forEach(r=>{P(r.value)&&e.push({key:r.key,label:r.label||r.key,value:Q(r)})})}),e}),z=m(()=>V.value.length),U=m(()=>{const e={};return o.filterGroups.forEach(l=>{l.filters.forEach(r=>{P(r.value)&&(e[r.key]=r.value)})}),e}),q=e=>{const l=[];return e.layout==="horizontal"?l.push("flex","flex-wrap","gap-4"):e.layout==="grid"?l.push("grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-4"):l.push("space-y-3"),l.join(" ")},$=e=>{const l=["filter-control"];return e.type==="boolean"&&l.push("flex","items-center"),l.join(" ")},T=e=>{const l=["input","input-bordered"];return e.size==="sm"?l.push("input-sm"):e.size==="lg"&&l.push("input-lg"),l.join(" ")},O=e=>{const l=["select","select-bordered"];return e.size==="sm"?l.push("select-sm"):e.size==="lg"&&l.push("select-lg"),l.join(" ")},D=e=>{const l=["input","input-bordered","flex-1"];return e.size==="sm"?l.push("input-sm"):e.size==="lg"&&l.push("input-lg"),l.join(" ")},M=e=>{const l=["input","input-bordered","flex-1"];return e.size==="sm"?l.push("input-sm"):e.size==="lg"&&l.push("input-lg"),l.join(" ")},P=e=>e==null||e===""?!1:Array.isArray(e)?e.length>0:typeof e=="object"?Object.values(e).some(l=>l!=null&&l!==""):!0,Q=e=>e.type==="multiselect"&&Array.isArray(e.value)?e.value.join(", "):e.type==="range"&&typeof e.value=="object"?`${e.value.min||""} - ${e.value.max||""}`:e.type==="daterange"&&typeof e.value=="object"?`${e.value.start||""} to ${e.value.end||""}`:e.type==="boolean"?e.value?"Yes":"No":e.value,K=e=>`${e.key}-${e.value}`,Y=()=>{h.value=!h.value},g=()=>{f("filterChange",U.value)},J=e=>{o.filterGroups.forEach(l=>{l.filters.forEach(r=>{r.key===e.key&&(r.type==="multiselect"?r.value=[]:r.type==="range"||r.type==="daterange"?r.value={}:r.type==="boolean"?r.value=!1:r.value="")})}),f("filterClear",e.key),f("filterChange",U.value)},W=()=>{o.filterGroups.forEach(e=>{e.filters.forEach(l=>{l.type==="multiselect"?l.value=[]:l.type==="range"||l.type==="daterange"?l.value={}:l.type==="boolean"?l.value=!1:l.value=""})}),f("filterClearAll"),f("filterChange",{})};return(e,l)=>(s(),t("div",{class:p(I.value)},[e.showHeader?(s(),t("div",{key:0,class:p(E.value)},[n("div",ae,[n("div",te,[e.title?(s(),t("h3",se,c(e.title),1)):u("",!0),z.value>0?(s(),t("span",re,c(z.value),1)):u("",!0)]),n("div",ne,[z.value>0?(s(),t("button",{key:0,onClick:W,class:"btn btn-ghost btn-xs"}," Clear All ")):u("",!0),e.collapsible?(s(),t("button",{key:1,onClick:Y,class:"btn btn-ghost btn-xs"},c(h.value?"Expand":"Collapse"),1)):u("",!0)])])],2)):u("",!0),e.showActiveFilters&&V.value.length>0?(s(),t("div",{key:1,class:p(N.value)},[n("div",oe,[(s(!0),t(F,null,C(V.value,r=>(s(),t("div",{key:K(r),class:"badge badge-outline gap-1"},[n("span",null,c(r.label)+": "+c(r.value),1),n("button",{onClick:H=>J(r),class:"btn btn-ghost btn-xs w-4 h-4 p-0 min-h-0"}," × ",8,ie)]))),128))])],2)):u("",!0),h.value?u("",!0):(s(),t("div",{key:2,class:p(B.value)},[(s(!0),t(F,null,C(e.filterGroups,(r,H)=>(s(),t("div",{key:H,class:p(L.value)},[r.title?(s(),t("h4",ce,c(r.title),1)):u("",!0),n("div",{class:p(q(r))},[(s(!0),t(F,null,C(r.filters,a=>(s(),t("div",{key:a.key,class:p($(a))},[a.type==="text"?(s(),t("div",ue,[a.label?(s(),t("label",de,c(a.label),1)):u("",!0),v(n("input",{"onUpdate:modelValue":i=>a.value=i,type:"text",placeholder:a.placeholder,class:p(T(a)),onInput:g},null,42,pe),[[k,a.value]])])):a.type==="select"?(s(),t("div",he,[a.label?(s(),t("label",ge,c(a.label),1)):u("",!0),v(n("select",{"onUpdate:modelValue":i=>a.value=i,class:p(O(a)),onChange:g},[n("option",ve,c(a.placeholder||"Select..."),1),(s(!0),t(F,null,C(a.options,i=>(s(),t("option",{key:i.value,value:i.value},c(i.label),9,be))),128))],42,me),[[le,a.value]])])):a.type==="multiselect"?(s(),t("div",ye,[a.label?(s(),t("label",fe,c(a.label),1)):u("",!0),n("div",Fe,[(s(!0),t(F,null,C(a.options,i=>(s(),t("label",{key:i.value,class:"flex items-center gap-2 cursor-pointer text-sm"},[v(n("input",{type:"checkbox",value:i.value,"onUpdate:modelValue":X=>a.value=X,class:"checkbox checkbox-sm",onChange:g},null,40,Ce),[[R,a.value]]),n("span",null,c(i.label),1)]))),128))])])):a.type==="range"?(s(),t("div",ke,[a.label?(s(),t("label",xe,c(a.label),1)):u("",!0),n("div",we,[v(n("input",{"onUpdate:modelValue":i=>a.value.min=i,type:"number",placeholder:a.minPlaceholder||"Min",class:p(D(a)),onInput:g},null,42,_e),[[k,a.value.min]]),l[0]||(l[0]=n("span",{class:"text-sm"},"to",-1)),v(n("input",{"onUpdate:modelValue":i=>a.value.max=i,type:"number",placeholder:a.maxPlaceholder||"Max",class:p(D(a)),onInput:g},null,42,Ae),[[k,a.value.max]])])])):a.type==="daterange"?(s(),t("div",Se,[a.label?(s(),t("label",Ge,c(a.label),1)):u("",!0),n("div",Ve,[v(n("input",{"onUpdate:modelValue":i=>a.value.start=i,type:"date",class:p(M(a)),onChange:g},null,42,ze),[[k,a.value.start]]),l[1]||(l[1]=n("span",{class:"text-sm"},"to",-1)),v(n("input",{"onUpdate:modelValue":i=>a.value.end=i,type:"date",class:p(M(a)),onChange:g},null,42,Ue),[[k,a.value.end]])])])):a.type==="boolean"?(s(),t("div",De,[n("label",Me,[v(n("input",{"onUpdate:modelValue":i=>a.value=i,type:"checkbox",class:"toggle toggle-sm",onChange:g},null,40,Pe),[[R,a.value]]),n("span",He,c(a.label),1)])])):u("",!0)],2))),128))],2)],2))),128))],2))],2))}});b.__docgenInfo={exportName:"default",displayName:"Filter",description:"",tags:{},props:[{name:"filterGroups",required:!0,type:{name:"Array",elements:[{name:"FilterGroup"}]}},{name:"title",required:!1,type:{name:"string"}},{name:"showHeader",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showActiveFilters",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"collapsible",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"card"'}]},defaultValue:{func:!1,value:"'default'"}}],events:[{name:"filterChange",type:{names:["Record"],elements:[{name:"string"},{name:"any"}]}},{name:"filterClear",type:{names:["string"]}},{name:"filterClearAll"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Filter.vue"]};const Ie={title:"Data Input/Filter",component:b,parameters:{layout:"centered",docs:{description:{component:"A flexible filter component supporting multiple input types including text, select, multi-select, range, date range, and boolean toggles."}}},argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","bordered","card"]},showHeader:{control:"boolean"},showActiveFilters:{control:"boolean"},collapsible:{control:"boolean"}}},j=[{title:"Basic Filters",layout:"vertical",filters:[{key:"search",label:"Search",type:"text",placeholder:"Search products...",value:""},{key:"category",label:"Category",type:"select",placeholder:"Select category",value:"",options:[{label:"Electronics",value:"electronics"},{label:"Clothing",value:"clothing"},{label:"Books",value:"books"},{label:"Home & Garden",value:"home"}]}]},{title:"Advanced Filters",layout:"grid",filters:[{key:"price",label:"Price Range",type:"range",value:{min:"",max:""},minPlaceholder:"Min price",maxPlaceholder:"Max price"},{key:"brands",label:"Brands",type:"multiselect",value:[],options:[{label:"Apple",value:"apple"},{label:"Samsung",value:"samsung"},{label:"Sony",value:"sony"},{label:"Nike",value:"nike"}]},{key:"dateRange",label:"Date Range",type:"daterange",value:{start:"",end:""}},{key:"inStock",label:"In Stock Only",type:"boolean",value:!1}]}],x={args:{filterGroups:j,title:"Product Filters",showHeader:!0,showActiveFilters:!0},render:d=>({components:{Filter:b},setup(){return{args:d,handleFilterChange:h=>{console.log("Filters changed:",h)},handleFilterClear:h=>{console.log("Filter cleared:",h)},handleFilterClearAll:()=>{console.log("All filters cleared")}}},template:`
      <div class="w-96 max-w-full">
        <Filter 
          v-bind="args" 
          @filter-change="handleFilterChange"
          @filter-clear="handleFilterClear"
          @filter-clear-all="handleFilterClearAll"
        />
      </div>
    `})},w={args:{filterGroups:j,title:"Collapsible Filters",showHeader:!0,showActiveFilters:!0,collapsible:!0},render:d=>({components:{Filter:b},setup(){return{args:d,handleFilterChange:o=>{console.log("Filters changed:",o)}}},template:`
      <div class="w-96 max-w-full">
        <Filter v-bind="args" @filter-change="handleFilterChange" />
      </div>
    `})},_={args:{filterGroups:[{title:"Quick Filters",layout:"horizontal",filters:[{key:"status",label:"Status",type:"select",size:"sm",value:"",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"},{label:"Pending",value:"pending"}]},{key:"priority",label:"Priority",type:"select",size:"sm",value:"",options:[{label:"High",value:"high"},{label:"Medium",value:"medium"},{label:"Low",value:"low"}]},{key:"urgent",label:"Urgent Only",type:"boolean",value:!1}]}],size:"sm",showHeader:!1,showActiveFilters:!0},render:d=>({components:{Filter:b},setup(){return{args:d,handleFilterChange:o=>{console.log("Filters changed:",o)}}},template:`
      <div class="w-full max-w-2xl">
        <Filter v-bind="args" @filter-change="handleFilterChange" />
      </div>
    `})},A={args:{filterGroups:[{title:"Search & Filter",filters:[{key:"search",label:"Search",type:"text",placeholder:"Search anything...",value:""},{key:"tags",label:"Tags",type:"multiselect",value:[],options:[{label:"Important",value:"important"},{label:"Urgent",value:"urgent"},{label:"Review",value:"review"},{label:"Archive",value:"archive"}]}]}],variant:"card",title:"Search Filters",showHeader:!0,showActiveFilters:!0},render:d=>({components:{Filter:b},setup(){return{args:d,handleFilterChange:o=>{console.log("Filters changed:",o)}}},template:`
      <div class="w-80">
        <Filter v-bind="args" @filter-change="handleFilterChange" />
      </div>
    `})},S={args:{filterGroups:[{title:"Date Filters",filters:[{key:"createdDate",label:"Created Date",type:"daterange",value:{start:"",end:""}},{key:"modifiedDate",label:"Modified Date",type:"daterange",value:{start:"",end:""}}]}],title:"Date Range Filters",showHeader:!0,showActiveFilters:!0},render:d=>({components:{Filter:b},setup(){return{args:d,handleFilterChange:o=>{console.log("Filters changed:",o)}}},template:`
      <div class="w-80">
        <Filter v-bind="args" @filter-change="handleFilterChange" />
      </div>
    `})},G={args:{filterGroups:[{title:"Basic Information",layout:"vertical",filters:[{key:"name",label:"Name",type:"text",placeholder:"Search by name...",value:""},{key:"type",label:"Type",type:"select",value:"",options:[{label:"User",value:"user"},{label:"Admin",value:"admin"},{label:"Guest",value:"guest"}]}]},{title:"Preferences",layout:"vertical",filters:[{key:"notifications",label:"Email Notifications",type:"boolean",value:!1},{key:"newsletter",label:"Newsletter Subscription",type:"boolean",value:!1}]},{title:"Statistics",layout:"grid",filters:[{key:"loginCount",label:"Login Count",type:"range",value:{min:"",max:""},minPlaceholder:"Min",maxPlaceholder:"Max"},{key:"score",label:"Score Range",type:"range",value:{min:"",max:""},minPlaceholder:"Min score",maxPlaceholder:"Max score"}]}],title:"User Filters",variant:"bordered",showHeader:!0,showActiveFilters:!0,collapsible:!0},render:d=>({components:{Filter:b},setup(){return{args:d,handleFilterChange:o=>{console.log("Filters changed:",o)}}},template:`
      <div class="w-96">
        <Filter v-bind="args" @filter-change="handleFilterChange" />
      </div>
    `})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    filterGroups: sampleFilterGroups,
    title: 'Product Filters',
    showHeader: true,
    showActiveFilters: true
  },
  render: args => ({
    components: {
      Filter
    },
    setup() {
      const handleFilterChange = (filters: Record<string, any>) => {
        console.log('Filters changed:', filters);
      };
      const handleFilterClear = (key: string) => {
        console.log('Filter cleared:', key);
      };
      const handleFilterClearAll = () => {
        console.log('All filters cleared');
      };
      return {
        args,
        handleFilterChange,
        handleFilterClear,
        handleFilterClearAll
      };
    },
    template: \`
      <div class="w-96 max-w-full">
        <Filter 
          v-bind="args" 
          @filter-change="handleFilterChange"
          @filter-clear="handleFilterClear"
          @filter-clear-all="handleFilterClearAll"
        />
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    filterGroups: sampleFilterGroups,
    title: 'Collapsible Filters',
    showHeader: true,
    showActiveFilters: true,
    collapsible: true
  },
  render: args => ({
    components: {
      Filter
    },
    setup() {
      const handleFilterChange = (filters: Record<string, any>) => {
        console.log('Filters changed:', filters);
      };
      return {
        args,
        handleFilterChange
      };
    },
    template: \`
      <div class="w-96 max-w-full">
        <Filter v-bind="args" @filter-change="handleFilterChange" />
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    filterGroups: [{
      title: 'Quick Filters',
      layout: 'horizontal' as const,
      filters: [{
        key: 'status',
        label: 'Status',
        type: 'select' as const,
        size: 'sm',
        value: '',
        options: [{
          label: 'Active',
          value: 'active'
        }, {
          label: 'Inactive',
          value: 'inactive'
        }, {
          label: 'Pending',
          value: 'pending'
        }]
      }, {
        key: 'priority',
        label: 'Priority',
        type: 'select' as const,
        size: 'sm',
        value: '',
        options: [{
          label: 'High',
          value: 'high'
        }, {
          label: 'Medium',
          value: 'medium'
        }, {
          label: 'Low',
          value: 'low'
        }]
      }, {
        key: 'urgent',
        label: 'Urgent Only',
        type: 'boolean' as const,
        value: false
      }]
    }],
    size: 'sm',
    showHeader: false,
    showActiveFilters: true
  },
  render: args => ({
    components: {
      Filter
    },
    setup() {
      const handleFilterChange = (filters: Record<string, any>) => {
        console.log('Filters changed:', filters);
      };
      return {
        args,
        handleFilterChange
      };
    },
    template: \`
      <div class="w-full max-w-2xl">
        <Filter v-bind="args" @filter-change="handleFilterChange" />
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    filterGroups: [{
      title: 'Search & Filter',
      filters: [{
        key: 'search',
        label: 'Search',
        type: 'text' as const,
        placeholder: 'Search anything...',
        value: ''
      }, {
        key: 'tags',
        label: 'Tags',
        type: 'multiselect' as const,
        value: [],
        options: [{
          label: 'Important',
          value: 'important'
        }, {
          label: 'Urgent',
          value: 'urgent'
        }, {
          label: 'Review',
          value: 'review'
        }, {
          label: 'Archive',
          value: 'archive'
        }]
      }]
    }],
    variant: 'card',
    title: 'Search Filters',
    showHeader: true,
    showActiveFilters: true
  },
  render: args => ({
    components: {
      Filter
    },
    setup() {
      const handleFilterChange = (filters: Record<string, any>) => {
        console.log('Filters changed:', filters);
      };
      return {
        args,
        handleFilterChange
      };
    },
    template: \`
      <div class="w-80">
        <Filter v-bind="args" @filter-change="handleFilterChange" />
      </div>
    \`
  })
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    filterGroups: [{
      title: 'Date Filters',
      filters: [{
        key: 'createdDate',
        label: 'Created Date',
        type: 'daterange' as const,
        value: {
          start: '',
          end: ''
        }
      }, {
        key: 'modifiedDate',
        label: 'Modified Date',
        type: 'daterange' as const,
        value: {
          start: '',
          end: ''
        }
      }]
    }],
    title: 'Date Range Filters',
    showHeader: true,
    showActiveFilters: true
  },
  render: args => ({
    components: {
      Filter
    },
    setup() {
      const handleFilterChange = (filters: Record<string, any>) => {
        console.log('Filters changed:', filters);
      };
      return {
        args,
        handleFilterChange
      };
    },
    template: \`
      <div class="w-80">
        <Filter v-bind="args" @filter-change="handleFilterChange" />
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    filterGroups: [{
      title: 'Basic Information',
      layout: 'vertical' as const,
      filters: [{
        key: 'name',
        label: 'Name',
        type: 'text' as const,
        placeholder: 'Search by name...',
        value: ''
      }, {
        key: 'type',
        label: 'Type',
        type: 'select' as const,
        value: '',
        options: [{
          label: 'User',
          value: 'user'
        }, {
          label: 'Admin',
          value: 'admin'
        }, {
          label: 'Guest',
          value: 'guest'
        }]
      }]
    }, {
      title: 'Preferences',
      layout: 'vertical' as const,
      filters: [{
        key: 'notifications',
        label: 'Email Notifications',
        type: 'boolean' as const,
        value: false
      }, {
        key: 'newsletter',
        label: 'Newsletter Subscription',
        type: 'boolean' as const,
        value: false
      }]
    }, {
      title: 'Statistics',
      layout: 'grid' as const,
      filters: [{
        key: 'loginCount',
        label: 'Login Count',
        type: 'range' as const,
        value: {
          min: '',
          max: ''
        },
        minPlaceholder: 'Min',
        maxPlaceholder: 'Max'
      }, {
        key: 'score',
        label: 'Score Range',
        type: 'range' as const,
        value: {
          min: '',
          max: ''
        },
        minPlaceholder: 'Min score',
        maxPlaceholder: 'Max score'
      }]
    }],
    title: 'User Filters',
    variant: 'bordered',
    showHeader: true,
    showActiveFilters: true,
    collapsible: true
  },
  render: args => ({
    components: {
      Filter
    },
    setup() {
      const handleFilterChange = (filters: Record<string, any>) => {
        console.log('Filters changed:', filters);
      };
      return {
        args,
        handleFilterChange
      };
    },
    template: \`
      <div class="w-96">
        <Filter v-bind="args" @filter-change="handleFilterChange" />
      </div>
    \`
  })
}`,...G.parameters?.docs?.source}}};const Ee=["Default","Collapsible","CompactLayout","CardVariant","DateRangeFilter","MultipleGroups"];export{A as CardVariant,w as Collapsible,_ as CompactLayout,S as DateRangeFilter,x as Default,G as MultipleGroups,Ee as __namedExportsOrder,Ie as default};
