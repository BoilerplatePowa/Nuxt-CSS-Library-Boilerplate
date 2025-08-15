import{d as se,r as h,w as le,c as g,a as n,b as v,m as V,n as f,y as q,B as I,F as D,g as w,t as b,e as ne,o as r}from"./iframe-DJmXHO36.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const oe={class:"flex items-center justify-between"},de=["disabled"],ie={class:"flex items-center gap-2"},ce=["disabled"],ue=["value"],me={key:1,class:"font-semibold"},pe=["disabled"],ve=["value"],ge={key:3,class:"font-semibold"},fe=["disabled"],he=["disabled","onClick"],ye={key:0,class:"flex justify-center mt-1"},be={class:"flex gap-0.5"},De=["disabled"],N=se({__name:"Calendar",props:{modelValue:{},size:{default:"md"},variant:{default:"default"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},minDate:{},maxDate:{},disabledDates:{},events:{},allowMonthSelect:{type:Boolean,default:!0},allowYearSelect:{type:Boolean,default:!0},showToday:{type:Boolean,default:!0},yearRange:{default:()=>[new Date().getFullYear()-10,new Date().getFullYear()+10]},locale:{default:"en-US"}},emits:["update:modelValue","dayClick","monthChange"],setup(d,{emit:c}){const a=d,u=c,m=new Date,l=h(m.getMonth()),i=h(m.getFullYear());le(()=>a.modelValue,e=>{if(e){const s=new Date(e);isNaN(s.getTime())||(l.value=s.getMonth(),i.value=s.getFullYear())}},{immediate:!0});const L=g(()=>{const e=["calendar","bg-base-100"];return a.variant==="bordered"?e.push("border","border-base-300","rounded-lg"):a.variant==="filled"&&e.push("bg-base-200","rounded-lg"),a.size==="sm"?e.push("text-sm"):a.size==="lg"&&e.push("text-lg"),a.disabled&&e.push("opacity-60","pointer-events-none"),e.join(" ")}),O=g(()=>["calendar-header","p-4","border-b","border-base-300"].join(" ")),E=g(()=>["days-header","grid","grid-cols-7","gap-1","p-2","border-b","border-base-300"].join(" ")),A=g(()=>["calendar-grid","grid","grid-cols-7","gap-1","p-2"].join(" ")),P=g(()=>["calendar-footer","p-2","border-t","border-base-300","text-center"].join(" ")),$=g(()=>{const e=["btn","btn-ghost","btn-circle"];return a.size==="sm"?e.push("btn-sm"):a.size==="lg"&&e.push("btn-lg"),e.join(" ")}),B=g(()=>{const e=["select","select-ghost"];return a.size==="sm"?e.push("select-sm"):a.size==="lg"&&e.push("select-lg"),e.join(" ")}),j=g(()=>{const e=new Intl.DateTimeFormat(a.locale,{month:"long"});return Array.from({length:12},(s,t)=>e.format(new Date(2024,t,1)))}),W=g(()=>{const e=new Intl.DateTimeFormat(a.locale,{weekday:"short"}),s=[];for(let t=0;t<7;t++){const o=new Date(2024,0,t),p=o.getDay();s[p]=e.format(o)}return s}),U=g(()=>{const[e,s]=a.yearRange;return Array.from({length:s-e+1},(t,o)=>e+o)}),H=g(()=>{const e=[],s=new Date(i.value,l.value,1),t=new Date(s);t.setDate(t.getDate()-t.getDay());for(let o=0;o<42;o++){const p=new Date(t);p.setDate(t.getDate()+o);const _=p.toISOString().split("T")[0],te=a.events?.[_]||[];e.push({day:p.getDate(),date:new Date(p),isCurrentMonth:p.getMonth()===l.value,isToday:F(p,m),isSelected:a.modelValue?F(p,new Date(a.modelValue)):!1,isDisabled:R({date:p}),events:te})}return e}),K=e=>{const s=["day-button","relative","w-full","h-10","flex","flex-col","items-center","justify-center","rounded","hover:bg-base-200","transition-colors"];return e.isCurrentMonth||s.push("opacity-40"),e.isToday&&s.push("ring-2","ring-primary","ring-offset-1"),e.isSelected&&s.push("bg-primary","text-primary-content","hover:bg-primary"),e.isDisabled&&s.push("opacity-50","cursor-not-allowed"),a.size==="sm"?s.push("h-8","text-xs"):a.size==="lg"&&s.push("h-12","text-lg"),s.join(" ")},G=e=>{const s=["w-1.5","h-1.5","rounded-full"],t={primary:"bg-primary",secondary:"bg-secondary",accent:"bg-accent",success:"bg-success",warning:"bg-warning",error:"bg-error",info:"bg-info"};return s.push(t[e.color||"primary"]),s.join(" ")},F=(e,s)=>{const t=new Date(e),o=new Date(s);return t.getFullYear()===o.getFullYear()&&t.getMonth()===o.getMonth()&&t.getDate()===o.getDate()},R=e=>a.minDate&&e.date<new Date(a.minDate)||a.maxDate&&e.date>new Date(a.maxDate)?!0:a.disabledDates?a.disabledDates.some(s=>F(e.date,s)):!1,J=e=>{a.readonly||a.disabled||e.isDisabled||(u("update:modelValue",e.date),u("dayClick",e))},Q=()=>{l.value===0?(l.value=11,i.value--):l.value--,u("monthChange",l.value,i.value)},X=()=>{l.value===11?(l.value=0,i.value++):l.value++,u("monthChange",l.value,i.value)},Z=()=>{l.value=m.getMonth(),i.value=m.getFullYear(),a.readonly||u("update:modelValue",new Date(m))},ee=()=>{u("monthChange",l.value,i.value)},ae=()=>{u("monthChange",l.value,i.value)};return(e,s)=>(r(),n("div",{class:f(L.value)},[v("div",{class:f(O.value)},[v("div",oe,[v("button",{onClick:Q,class:f($.value),disabled:e.disabled},s[2]||(s[2]=[v("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1)]),10,de),v("div",ie,[e.allowMonthSelect?q((r(),n("select",{key:0,"onUpdate:modelValue":s[0]||(s[0]=t=>l.value=t),class:f(B.value),disabled:e.disabled,onChange:ee},[(r(!0),n(D,null,w(j.value,(t,o)=>(r(),n("option",{key:o,value:o},b(t),9,ue))),128))],42,ce)),[[I,l.value]]):(r(),n("h3",me,b(j.value[l.value]),1)),e.allowYearSelect?q((r(),n("select",{key:2,"onUpdate:modelValue":s[1]||(s[1]=t=>i.value=t),class:f(B.value),disabled:e.disabled,onChange:ae},[(r(!0),n(D,null,w(U.value,t=>(r(),n("option",{key:t,value:t},b(t),9,ve))),128))],42,pe)),[[I,i.value]]):(r(),n("h3",ge,b(i.value),1))]),v("button",{onClick:X,class:f($.value),disabled:e.disabled},s[3]||(s[3]=[v("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)]),10,fe)])],2),v("div",{class:f(E.value)},[(r(!0),n(D,null,w(W.value,t=>(r(),n("div",{key:t,class:"text-center text-sm font-medium opacity-70"},b(t),1))),128))],2),v("div",{class:f(A.value)},[(r(!0),n(D,null,w(H.value,(t,o)=>(r(),n("button",{key:o,class:f(K(t)),disabled:e.disabled||R(t),onClick:p=>J(t)},[v("span",null,b(t.day),1),t.events&&t.events.length>0?(r(),n("div",ye,[v("div",be,[(r(!0),n(D,null,w(t.events.slice(0,3),(p,_)=>(r(),n("div",{key:_,class:f(G(p))},null,2))),128))])])):V("",!0)],10,he))),128))],2),e.showToday||e.$slots.footer?(r(),n("div",{key:0,class:f(P.value)},[ne(e.$slots,"footer",{},()=>[e.showToday?(r(),n("button",{key:0,onClick:Z,class:"btn btn-ghost btn-sm",disabled:e.disabled}," Today ",8,De)):V("",!0)],!0)],2)):V("",!0)],2))}}),y=re(N,[["__scopeId","data-v-f11f17b3"]]);N.__docgenInfo={exportName:"default",displayName:"Calendar",description:"",tags:{},props:[{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"string"},{name:"null"}]}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"filled"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"minDate",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"string"}]}},{name:"maxDate",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"string"}]}},{name:"disabledDates",required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:"Date"}]},{name:"Array",elements:[{name:"string"}]}]}},{name:"events",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"Array",elements:[{name:"CalendarEvent"}]}]}},{name:"allowMonthSelect",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"allowYearSelect",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showToday",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"yearRange",required:!1,type:{name:"tuple",elements:[{name:"number"},{name:"number"}]},defaultValue:{func:!1,value:"() => [new Date().getFullYear() - 10, new Date().getFullYear() + 10]"}},{name:"locale",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'en-US'"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"Date"},{name:"null"}]}},{name:"dayClick",type:{names:["CalendarDay"]}},{name:"monthChange",type:{names:["number"]}}],slots:[{name:"footer"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Calendar.vue"]};const xe={title:"DataInput/Calendar",component:y,parameters:{layout:"centered",docs:{description:{component:"A flexible calendar component for date selection with support for events, date ranges, and various display options."}}},argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","bordered","filled"]},allowMonthSelect:{control:"boolean"},allowYearSelect:{control:"boolean"},showToday:{control:"boolean"},disabled:{control:"boolean"},readonly:{control:"boolean"}}},C={args:{size:"md",variant:"default",allowMonthSelect:!0,allowYearSelect:!0,showToday:!0},render:d=>({components:{Calendar:y},setup(){const c=h(null);return{args:d,selectedDate:c,handleDayClick:m=>{console.log("Day clicked:",m)},handleMonthChange:(m,l)=>{console.log("Month changed:",{month:m,year:l})}}},template:`
      <div class="space-y-4">
        <Calendar 
          v-bind="args" 
          v-model="selectedDate"
          @day-click="handleDayClick"
          @month-change="handleMonthChange"
        />
        <div v-if="selectedDate" class="text-sm text-center opacity-70">
          Selected: {{ selectedDate.toLocaleDateString() }}
        </div>
      </div>
    `})},S={args:{size:"md",variant:"bordered",allowMonthSelect:!0,allowYearSelect:!0,showToday:!0},render:d=>({components:{Calendar:y},setup(){const c=h(null),a=new Date,u={[`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-05`]:[{title:"Team Meeting",color:"primary"},{title:"Code Review",color:"secondary"}],[`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-10`]:[{title:"Project Deadline",color:"error"}],[`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-15`]:[{title:"Birthday Party",color:"success"}],[`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-20`]:[{title:"Conference",color:"warning"},{title:"Workshop",color:"info"}]};return{args:{...d,events:u},selectedDate:c}},template:`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <div class="text-sm space-y-1">
          <h4 class="font-semibold">Legend:</h4>
          <div class="flex flex-wrap gap-2 text-xs">
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 bg-primary rounded-full"></div>
              <span>Meetings</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 bg-error rounded-full"></div>
              <span>Deadlines</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 bg-success rounded-full"></div>
              <span>Personal</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 bg-warning rounded-full"></div>
              <span>Events</span>
            </div>
          </div>
        </div>
      </div>
    `})},x={args:{size:"md",variant:"bordered",allowMonthSelect:!0,allowYearSelect:!0,showToday:!0},render:d=>({components:{Calendar:y},setup(){const c=h(null),a=new Date,u=new Date(a);u.setDate(a.getDate()-7);const m=new Date(a);m.setDate(a.getDate()+30);const l=[new Date(a.getFullYear(),a.getMonth(),a.getDate()+5),new Date(a.getFullYear(),a.getMonth(),a.getDate()+12),new Date(a.getFullYear(),a.getMonth(),a.getDate()+19)];return{args:{...d,minDate:u.toISOString().split("T")[0],maxDate:m.toISOString().split("T")[0],disabledDates:l.map(i=>i.toISOString().split("T")[0])},selectedDate:c}},template:`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <div class="text-sm space-y-1 opacity-70">
          <p>• Dates available: 7 days ago to 30 days from now</p>
          <p>• Some specific dates are disabled</p>
          <p>• Today is highlighted with a ring</p>
        </div>
      </div>
    `})},M={args:{size:"md",variant:"default",readonly:!0,allowMonthSelect:!1,allowYearSelect:!1,showToday:!0},render:d=>({components:{Calendar:y},setup(){const c=h(new Date);return{args:d,selectedDate:c}},template:`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <p class="text-sm text-center opacity-70">
          Read-only calendar view
        </p>
      </div>
    `})},Y={args:{size:"md",variant:"bordered",disabled:!0,allowMonthSelect:!0,allowYearSelect:!0,showToday:!0},render:d=>({components:{Calendar:y},setup(){const c=h(null);return{args:d,selectedDate:c}},template:`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <p class="text-sm text-center opacity-70">
          Disabled calendar
        </p>
      </div>
    `})},k={render:()=>({components:{Calendar:y},setup(){return{dates:h({sm:null,md:null,lg:null})}},template:`
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Small Size</h3>
          <Calendar v-model="dates.sm" size="sm" variant="bordered" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Medium Size (Default)</h3>
          <Calendar v-model="dates.md" size="md" variant="bordered" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Large Size</h3>
          <Calendar v-model="dates.lg" size="lg" variant="bordered" />
        </div>
      </div>
    `})},z={render:()=>({components:{Calendar:y},setup(){return{dates:h({default:null,bordered:null,filled:null})}},template:`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Default</h3>
          <Calendar v-model="dates.default" variant="default" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Bordered</h3>
          <Calendar v-model="dates.bordered" variant="bordered" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Filled</h3>
          <Calendar v-model="dates.filled" variant="filled" />
        </div>
      </div>
    `})},T={args:{size:"md",variant:"bordered",allowMonthSelect:!0,allowYearSelect:!0,showToday:!0,yearRange:[2020,2030]},render:d=>({components:{Calendar:y},setup(){const c=h(null);return{args:d,selectedDate:c}},template:`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <p class="text-sm text-center opacity-70">
          Year range: 2020 - 2030
        </p>
      </div>
    `})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true
  },
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const selectedDate = ref<Date | null>(null);
      const handleDayClick = (day: any) => {
        console.log('Day clicked:', day);
      };
      const handleMonthChange = (month: number, year: number) => {
        console.log('Month changed:', {
          month,
          year
        });
      };
      return {
        args,
        selectedDate,
        handleDayClick,
        handleMonthChange
      };
    },
    template: \`
      <div class="space-y-4">
        <Calendar 
          v-bind="args" 
          v-model="selectedDate"
          @day-click="handleDayClick"
          @month-change="handleMonthChange"
        />
        <div v-if="selectedDate" class="text-sm text-center opacity-70">
          Selected: {{ selectedDate.toLocaleDateString() }}
        </div>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'bordered',
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true
  },
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const selectedDate = ref<Date | null>(null);

      // Sample events for the current month
      const today = new Date();
      const events = {
        [\`\${today.getFullYear()}-\${String(today.getMonth() + 1).padStart(2, '0')}-05\`]: [{
          title: 'Team Meeting',
          color: 'primary' as const
        }, {
          title: 'Code Review',
          color: 'secondary' as const
        }],
        [\`\${today.getFullYear()}-\${String(today.getMonth() + 1).padStart(2, '0')}-10\`]: [{
          title: 'Project Deadline',
          color: 'error' as const
        }],
        [\`\${today.getFullYear()}-\${String(today.getMonth() + 1).padStart(2, '0')}-15\`]: [{
          title: 'Birthday Party',
          color: 'success' as const
        }],
        [\`\${today.getFullYear()}-\${String(today.getMonth() + 1).padStart(2, '0')}-20\`]: [{
          title: 'Conference',
          color: 'warning' as const
        }, {
          title: 'Workshop',
          color: 'info' as const
        }]
      };
      return {
        args: {
          ...args,
          events
        },
        selectedDate
      };
    },
    template: \`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <div class="text-sm space-y-1">
          <h4 class="font-semibold">Legend:</h4>
          <div class="flex flex-wrap gap-2 text-xs">
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 bg-primary rounded-full"></div>
              <span>Meetings</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 bg-error rounded-full"></div>
              <span>Deadlines</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 bg-success rounded-full"></div>
              <span>Personal</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="w-2 h-2 bg-warning rounded-full"></div>
              <span>Events</span>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'bordered',
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true
  },
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const selectedDate = ref<Date | null>(null);

      // Set min and max dates
      const today = new Date();
      const minDate = new Date(today);
      minDate.setDate(today.getDate() - 7); // 7 days ago

      const maxDate = new Date(today);
      maxDate.setDate(today.getDate() + 30); // 30 days from now

      // Disabled specific dates
      const disabledDates = [new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5), new Date(today.getFullYear(), today.getMonth(), today.getDate() + 12), new Date(today.getFullYear(), today.getMonth(), today.getDate() + 19)];
      return {
        args: {
          ...args,
          minDate: minDate.toISOString().split('T')[0],
          maxDate: maxDate.toISOString().split('T')[0],
          disabledDates: disabledDates.map(d => d.toISOString().split('T')[0])
        },
        selectedDate
      };
    },
    template: \`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <div class="text-sm space-y-1 opacity-70">
          <p>• Dates available: 7 days ago to 30 days from now</p>
          <p>• Some specific dates are disabled</p>
          <p>• Today is highlighted with a ring</p>
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default',
    readonly: true,
    allowMonthSelect: false,
    allowYearSelect: false,
    showToday: true
  },
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const selectedDate = ref(new Date());
      return {
        args,
        selectedDate
      };
    },
    template: \`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <p class="text-sm text-center opacity-70">
          Read-only calendar view
        </p>
      </div>
    \`
  })
}`,...M.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'bordered',
    disabled: true,
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true
  },
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const selectedDate = ref<Date | null>(null);
      return {
        args,
        selectedDate
      };
    },
    template: \`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <p class="text-sm text-center opacity-70">
          Disabled calendar
        </p>
      </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Calendar
    },
    setup() {
      const dates = ref({
        sm: null,
        md: null,
        lg: null
      });
      return {
        dates
      };
    },
    template: \`
      <div class="space-y-8">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Small Size</h3>
          <Calendar v-model="dates.sm" size="sm" variant="bordered" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Medium Size (Default)</h3>
          <Calendar v-model="dates.md" size="md" variant="bordered" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Large Size</h3>
          <Calendar v-model="dates.lg" size="lg" variant="bordered" />
        </div>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Calendar
    },
    setup() {
      const dates = ref({
        default: null,
        bordered: null,
        filled: null
      });
      return {
        dates
      };
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Default</h3>
          <Calendar v-model="dates.default" variant="default" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Bordered</h3>
          <Calendar v-model="dates.bordered" variant="bordered" />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Filled</h3>
          <Calendar v-model="dates.filled" variant="filled" />
        </div>
      </div>
    \`
  })
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'bordered',
    allowMonthSelect: true,
    allowYearSelect: true,
    showToday: true,
    yearRange: [2020, 2030]
  },
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const selectedDate = ref<Date | null>(null);
      return {
        args,
        selectedDate
      };
    },
    template: \`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <p class="text-sm text-center opacity-70">
          Year range: 2020 - 2030
        </p>
      </div>
    \`
  })
}`,...T.parameters?.docs?.source}}};const Me=["Default","WithEvents","DateRestrictions","ReadonlyCalendar","DisabledCalendar","DifferentSizes","DifferentVariants","CustomYearRange"];export{T as CustomYearRange,x as DateRestrictions,C as Default,k as DifferentSizes,z as DifferentVariants,Y as DisabledCalendar,M as ReadonlyCalendar,S as WithEvents,Me as __namedExportsOrder,xe as default};
