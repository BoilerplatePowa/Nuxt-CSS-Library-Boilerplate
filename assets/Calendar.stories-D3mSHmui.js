import{d as be,m as ee,h as ge,r as c,c as r,w as ye,a as m,n as g,b as i,l as z,F as _,g as U,q as V,u as q,v as me,o as p,t as B,s as Me,i as Te,f as he}from"./iframe-B8bctOEb.js";import{C as Ve,a as ke,b as Ye,X as ze,c as Fe,d as Re}from"./x-D8wxfldR.js";import"./preload-helper-D9Z9MdNV.js";const Ae={class:"calendar-header flex items-center justify-between mb-4"},Ie={key:0,class:"flex items-center gap-2"},qe=["value","disabled"],Ne=["value"],Be=["value","disabled"],Le=["value"],$e={class:"flex items-center gap-1"},Ee=["disabled"],_e=["disabled"],Ue=["aria-label"],je={class:"calendar-weekdays grid grid-cols-7 gap-1 mb-2"},Oe=["aria-label"],Pe={class:"calendar-days grid grid-cols-7 gap-1"},We=["onClick","onKeydown","disabled","aria-label","aria-selected","aria-current"],Ke={key:0,class:"calendar-time mt-4 pt-4 border-t border-base-300"},He={class:"flex items-center gap-4"},Je={class:"flex-1"},Xe={class:"label"},Ge={class:"label-text flex items-center gap-2"},Qe=["value","step","disabled"],Ze={key:1,class:"calendar-actions mt-4 pt-4 border-t border-base-300"},ea={class:"flex items-center justify-between"},aa=["disabled"],ta=["disabled"],pe=be({__name:"CalendarContent",props:ee({range:{type:Boolean,default:!1},minDate:{},maxDate:{},disabledDates:{},locale:{default:"en-US"},format:{default:"YYYY-MM-DD"},showTime:{type:Boolean,default:!1},timeStep:{default:15},size:{default:"md"},variant:{default:"default"},allowMonthSelect:{type:Boolean,default:!0},allowYearSelect:{type:Boolean,default:!0},yearRange:{default:()=>[new Date().getFullYear()-10,new Date().getFullYear()+10]},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:ee(["close"],["update:modelValue"]),setup(d,{emit:v}){const l=d,n=ge(d,"modelValue"),M=v,o=c(new Date().getMonth()),D=c(new Date().getFullYear()),S=c("12:00"),b=r(()=>{const e=["calendar-content"];return l.size==="sm"?e.push("text-sm"):l.size==="lg"&&e.push("text-lg"),e.join(" ")}),k=r(()=>{const e=["select","select-bordered"];return l.size==="sm"?e.push("select-sm"):l.size==="lg"&&e.push("select-lg"),e.join(" ")}),F=r(()=>["btn","btn-ghost","btn-sm","p-1"].join(" ")),ae=r(()=>["text-center","text-sm","font-medium","text-base-content","opacity-70"]),te=r(()=>{const e=["input","input-bordered","w-full"];return l.size==="sm"?e.push("input-sm"):l.size==="lg"&&e.push("input-lg"),e.join(" ")}),L=r(()=>["btn","btn-sm"].join(" ")),le=r(()=>new Intl.DateTimeFormat(l.locale,{month:"long"}).format(new Date(D.value,o.value,1))),ne=r(()=>{const e=new Intl.DateTimeFormat(l.locale,{weekday:"short"}),t=[],s=new Intl.DateTimeFormat(l.locale,{weekday:"short"}).format(new Date(2024,0,1)),u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(s);for(let y=0;y<7;y++){const f=(u+y)%7;t.push(e.format(new Date(2024,0,f+1)))}return t}),se=r(()=>{const e=new Intl.DateTimeFormat(l.locale,{month:"long"});return Array.from({length:12},(t,s)=>e.format(new Date(2024,s,1)))}),re=r(()=>{const[e,t]=l.yearRange;return Array.from({length:t-e+1},(s,u)=>e+u)}),de=r(()=>{const e=[],t=new Date(D.value,o.value,1),s=new Date(t);s.setDate(s.getDate()-t.getDay());const u=new Date;u.setHours(0,0,0,0);for(let y=0;y<42;y++){const f=new Date(s);f.setDate(s.getDate()+y);const Se=f.getDate(),Ce=f.getMonth()===o.value,ve=f.getTime()===u.getTime(),fe=ce(f),we=ue(f),xe=I(f);e.push({key:`${f.getFullYear()}-${f.getMonth()}-${f.getDate()}`,date:f,dayNumber:Se,isCurrentMonth:Ce,isToday:ve,isSelected:fe,isInRange:we,disabled:xe,ariaLabel:`${f.toLocaleDateString(l.locale)}${ve?" (Today)":""}${fe?" (Selected)":""}`})}return e}),R=r(()=>{if(!n.value)return S.value;const e=Array.isArray(n.value)?n.value[0]:n.value;return e?`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`:S.value}),A=r(()=>{if(!l.minDate)return!1;const e=new Date(l.minDate);return new Date(D.value,o.value,1)<=e}),oe=r(()=>{if(!l.maxDate)return!1;const e=new Date(l.maxDate);return new Date(D.value,o.value+1,0)>=e}),ie=r(()=>!l.range||!Array.isArray(n.value)?!0:n.value.length===2),ce=e=>{if(!n.value)return!1;const t=e.getTime();return Array.isArray(n.value)?n.value.some(s=>s.getTime()===t):n.value.getTime()===t},ue=e=>{if(!l.range||!Array.isArray(n.value)||n.value.length!==2)return!1;const[t,s]=n.value,u=e.getTime(),y=t.getTime(),f=s.getTime();return u>=Math.min(y,f)&&u<=Math.max(y,f)},I=e=>{if(l.minDate&&e<new Date(l.minDate)||l.maxDate&&e>new Date(l.maxDate))return!0;if(l.disabledDates){const t=e.toISOString().split("T")[0];return l.disabledDates.some(s=>{const u=new Date(s).toISOString().split("T")[0];return t===u})}return!1},Y=e=>{const t=["btn","btn-sm","h-8","w-8","p-0","text-xs"];return e.isCurrentMonth||t.push("opacity-40"),e.isToday&&t.push("ring-2","ring-primary"),e.isSelected?t.push("btn-primary"):e.isInRange?t.push("bg-primary","text-primary-content","opacity-70"):e.disabled?t.push("opacity-50","cursor-not-allowed"):t.push("btn-ghost"),t.join(" ")},$=e=>{if(l.disabled||I(e))return;let t;if(l.range)if(!Array.isArray(n.value)||n.value.length===0)t=[e];else if(n.value.length===1){const[s]=n.value;e<s?t=[e,s]:t=[s,e]}else t=[e];else t=e;n.value=t},E=(e,t)=>{switch(e.key){case"Enter":case" ":e.preventDefault(),$(t);break}},a=e=>{const t=e.target;o.value=parseInt(t.value)},h=e=>{const t=e.target;D.value=parseInt(t.value)},T=e=>{const t=e.target;if(S.value=t.value,n.value){const[s,u]=t.value.split(":").map(Number),y=new Date(Array.isArray(n.value)?n.value[0]:n.value);y.setHours(s,u),l.range&&Array.isArray(n.value)?n.value=[y,n.value[1]]:n.value=y}},x=()=>{o.value===0?(o.value=11,D.value--):o.value--},C=()=>{o.value===11?(o.value=0,D.value++):o.value++},N=()=>{n.value=null},De=()=>{M("close")};return ye(()=>n.value,e=>{if(e){const t=Array.isArray(e)?e[0]:e;o.value=t.getMonth(),D.value=t.getFullYear()}},{immediate:!0}),(e,t)=>(p(),m("div",{class:g(b.value)},[i("div",Ae,[e.allowMonthSelect||e.allowYearSelect?(p(),m("div",Ie,[e.allowMonthSelect?(p(),m("select",{key:0,value:o.value,onChange:a,class:g(k.value),disabled:e.disabled,"aria-label":"Select month"},[(p(!0),m(_,null,U(se.value,(s,u)=>(p(),m("option",{key:u,value:u},B(s),9,Ne))),128))],42,qe)):z("",!0),e.allowYearSelect?(p(),m("select",{key:1,value:D.value,onChange:h,class:g(k.value),disabled:e.disabled,"aria-label":"Select year"},[(p(!0),m(_,null,U(re.value,s=>(p(),m("option",{key:s,value:s},B(s),9,Le))),128))],42,Be)):z("",!0)])):z("",!0),i("div",$e,[i("button",{onClick:x,class:g(F.value),disabled:e.disabled||A.value,"aria-label":"Previous month",type:"button"},[V(q(Ve),{class:"w-4 h-4"})],10,Ee),i("button",{onClick:C,class:g(F.value),disabled:e.disabled||oe.value,"aria-label":"Next month",type:"button"},[V(q(ke),{class:"w-4 h-4"})],10,_e)])]),i("div",{class:"calendar-grid",role:"grid","aria-label":`Calendar for ${le.value} ${D.value}`},[i("div",je,[(p(!0),m(_,null,U(ne.value,s=>(p(),m("div",{key:s,class:g(ae.value),role:"columnheader","aria-label":s},B(s),11,Oe))),128))]),i("div",Pe,[(p(!0),m(_,null,U(de.value,s=>(p(),m("button",{key:s.key,onClick:u=>$(s.date),onKeydown:u=>E(u,s.date),class:g(Y(s)),disabled:s.disabled||e.disabled,"aria-label":s.ariaLabel,"aria-selected":s.isSelected,"aria-current":s.isToday?"date":void 0,role:"gridcell",type:"button",tabindex:"0"},B(s.dayNumber),43,We))),128))])],8,Ue),e.showTime?(p(),m("div",Ke,[i("div",He,[i("div",Je,[i("label",Xe,[i("span",Ge,[V(q(Ye),{class:"w-4 h-4"}),t[0]||(t[0]=me(" Time ",-1))])]),i("input",{value:R.value,onInput:T,type:"time",step:e.timeStep,class:g(te.value),disabled:e.disabled},null,42,Qe)])])])):z("",!0),e.range?(p(),m("div",Ze,[i("div",ea,[i("button",{onClick:N,class:g(L.value),disabled:e.disabled,type:"button"},[V(q(ze),{class:"w-4 h-4 mr-1"}),t[1]||(t[1]=me(" Clear ",-1))],10,aa),i("button",{onClick:De,class:g(L.value),disabled:e.disabled||!ie.value,type:"button"},[V(q(Fe),{class:"w-4 h-4 mr-1"}),t[2]||(t[2]=me(" Apply ",-1))],10,ta)])])):z("",!0)],2))}});pe.__docgenInfo={exportName:"default",displayName:"CalendarContent",description:"",tags:{},props:[{name:"range",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"minDate",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"string"}]}},{name:"maxDate",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"string"}]}},{name:"disabledDates",required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:"Date"}]},{name:"Array",elements:[{name:"string"}]}]}},{name:"locale",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'en-US'"}},{name:"format",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'YYYY-MM-DD'"}},{name:"showTime",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"timeStep",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"filled"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"allowMonthSelect",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"allowYearSelect",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"yearRange",required:!1,type:{name:"tuple",elements:[{name:"number"},{name:"number"}]},defaultValue:{func:!1,value:"() => [new Date().getFullYear() - 10, new Date().getFullYear() + 10]"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/CalendarContent.vue"]};const la={key:0,class:"relative"},na={class:"relative"},sa=["value","placeholder","disabled","readonly","aria-label","aria-describedby","aria-invalid","aria-expanded","aria-controls"],ra={class:"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"},da=["disabled","aria-label"],oa=["id"],ia={key:1,class:"calendar-inline"},w=be({__name:"Calendar",props:ee({mode:{default:"input"},range:{type:Boolean,default:!1},placeholder:{default:"Select date..."},format:{default:"YYYY-MM-DD"},locale:{default:"en-US"},size:{default:"md"},variant:{default:"default"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},minDate:{},maxDate:{},disabledDates:{},showTime:{type:Boolean,default:!1},timeStep:{default:15},allowMonthSelect:{type:Boolean,default:!0},allowYearSelect:{type:Boolean,default:!0},yearRange:{default:()=>[new Date().getFullYear()-10,new Date().getFullYear()+10]},errorMessage:{}},{modelValue:{},modelModifiers:{}}),emits:ee(["select","focus","blur","close","error"],["update:modelValue"]),setup(d,{emit:v}){const l=d,n=ge(d,"modelValue"),M=v,o=c(),D=c(),S=c(!1),b=c(null),k=r(()=>!!l.errorMessage),F=r(()=>`calendar-popover-${Math.random().toString(36).substr(2,9)}`),ae=r(()=>{const a=["calendar-container","relative"];return l.disabled&&a.push("opacity-60","pointer-events-none"),a.join(" ")}),te=r(()=>{const a=["input","w-full","pr-10"];return l.size==="sm"?a.push("input-sm"):l.size==="md"?a.push("input-md"):l.size==="lg"&&a.push("input-lg"),l.variant==="bordered"?a.push("input-bordered"):l.variant==="filled"&&a.push("bg-base-200"),k.value&&a.push("input-error"),a.join(" ")}),L=r(()=>["absolute","inset-0","w-full","h-full","bg-transparent","border-0","p-0","cursor-pointer"].join(" ")),le=r(()=>["absolute","top-full","left-0","z-50","mt-1","bg-base-100","border","border-base-300","rounded-lg","shadow-lg","p-4","min-w-[320px]"]),ne=r(()=>["text-error","text-sm","mt-1"]),se=r(()=>b.value?Array.isArray(b.value)?b.value.length===0?"":b.value.length===1?R(b.value[0]):`${R(b.value[0])} - ${R(b.value[1])}`:R(b.value):""),re=r(()=>l.range?"Select date range":"Select date"),de=r(()=>k.value?`${F.value}-error`:void 0),R=a=>a?new Intl.DateTimeFormat(l.locale,{year:"numeric",month:"2-digit",day:"2-digit",...l.showTime&&{hour:"2-digit",minute:"2-digit",hour12:!1}}).format(a):"",A=a=>{if(!a)return null;const h=new Date(a);return isNaN(h.getTime())?null:h},oe=a=>{const T=a.target.value;if(l.range){const x=T.split("-").map(C=>C.trim()).filter(C=>C);if(x.length===1){const C=A(x[0]);C&&(b.value=[C],n.value=[C])}else if(x.length===2){const C=A(x[0]),N=A(x[1]);C&&N&&(b.value=[C,N],n.value=[C,N])}}else{const x=A(T);x&&(b.value=x,n.value=x)}},ie=a=>{M("focus",a),l.mode==="input"&&he(()=>{S.value=!0})},ce=a=>{M("blur",a),setTimeout(()=>{o.value?.contains(a.relatedTarget)||Y()},150)},ue=a=>{switch(a.key){case"Enter":a.preventDefault(),I();break;case"Escape":a.preventDefault(),Y();break;case"ArrowDown":S.value||(a.preventDefault(),I());break}},I=()=>{l.disabled||l.readonly||(S.value=!S.value,S.value&&he(()=>{D.value?.focus()}))},Y=()=>{S.value=!1,M("close")},$=a=>{M("select",a),l.mode==="input"&&!l.range&&Y()};ye(()=>n.value,a=>{if(typeof a=="string"){const h=new Date(a);b.value=isNaN(h.getTime())?null:h}else b.value=a||null;a&&(a instanceof Date||Array.isArray(a))&&$(a)},{immediate:!0});const E=a=>{o.value&&!o.value.contains(a.target)&&Y()};return Me(()=>{document.addEventListener("click",E)}),Te(()=>{document.removeEventListener("click",E)}),(a,h)=>(p(),m("div",{class:g(ae.value),ref_key:"calendarRef",ref:o},[a.mode==="input"?(p(),m("div",la,[i("div",na,[i("input",{ref_key:"inputRef",ref:D,value:se.value,onInput:oe,onFocus:ie,onBlur:ce,onKeydown:ue,class:g(te.value),placeholder:a.placeholder,disabled:a.disabled,readonly:a.readonly,"aria-label":re.value,"aria-describedby":de.value,"aria-invalid":k.value,role:"combobox","aria-expanded":S.value,"aria-haspopup":!0,"aria-controls":F.value},null,42,sa),i("div",ra,[V(q(Re),{class:"w-4 h-4 text-base-content opacity-70"})]),i("button",{onClick:I,class:g(L.value),disabled:a.disabled,"aria-label":`${S.value?"Close":"Open"} calendar`,type:"button"},h[2]||(h[2]=[i("span",{class:"sr-only"},"Open calendar",-1)]),10,da)]),S.value?(p(),m("div",{key:0,id:F.value,class:g(le.value),role:"dialog","aria-label":"Calendar popover","aria-modal":!0},[V(pe,{modelValue:n.value,"onUpdate:modelValue":h[0]||(h[0]=T=>n.value=T),range:a.range,"min-date":a.minDate,"max-date":a.maxDate,"disabled-dates":a.disabledDates,locale:a.locale,format:a.format,"show-time":a.showTime,"time-step":a.timeStep,size:a.size,variant:a.variant,"allow-month-select":a.allowMonthSelect,"allow-year-select":a.allowYearSelect,"year-range":a.yearRange,onClose:Y},null,8,["modelValue","range","min-date","max-date","disabled-dates","locale","format","show-time","time-step","size","variant","allow-month-select","allow-year-select","year-range"])],10,oa)):z("",!0)])):(p(),m("div",ia,[V(pe,{modelValue:n.value,"onUpdate:modelValue":h[1]||(h[1]=T=>n.value=T),range:a.range,"min-date":a.minDate,"max-date":a.maxDate,"disabled-dates":a.disabledDates,locale:a.locale,format:a.format,"show-time":a.showTime,"time-step":a.timeStep,size:a.size,variant:a.variant,"allow-month-select":a.allowMonthSelect,"allow-year-select":a.allowYearSelect,"year-range":a.yearRange},null,8,["modelValue","range","min-date","max-date","disabled-dates","locale","format","show-time","time-step","size","variant","allow-month-select","allow-year-select","year-range"])])),k.value&&a.errorMessage?(p(),m("div",{key:2,class:g(ne.value),role:"alert"},B(a.errorMessage),3)):z("",!0)],2))}});w.__docgenInfo={exportName:"default",displayName:"Calendar",description:"",tags:{},props:[{name:"mode",required:!1,type:{name:"union",elements:[{name:'"input"'},{name:'"inline"'}]},defaultValue:{func:!1,value:"'input'"}},{name:"range",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Select date...'"}},{name:"format",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'YYYY-MM-DD'"}},{name:"locale",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'en-US'"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"bordered"'},{name:'"filled"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"minDate",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"string"}]}},{name:"maxDate",required:!1,type:{name:"union",elements:[{name:"Date"},{name:"string"}]}},{name:"disabledDates",required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:"Date"}]},{name:"Array",elements:[{name:"string"}]}]}},{name:"showTime",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"timeStep",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"15"}},{name:"allowMonthSelect",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"allowYearSelect",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"yearRange",required:!1,type:{name:"tuple",elements:[{name:"number"},{name:"number"}]},defaultValue:{func:!1,value:"() => [new Date().getFullYear() - 10, new Date().getFullYear() + 10]"}},{name:"errorMessage",required:!1,type:{name:"string"}}],events:[{name:"select",type:{names:["union"],elements:[{name:"Date"},{name:"Array",elements:[{name:"Date"}]}]}},{name:"focus",type:{names:["FocusEvent"]}},{name:"blur",type:{names:["FocusEvent"]}},{name:"close"},{name:"error",type:{names:["string"]}}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/DataInput/Calendar.vue"]};const pa={title:"Data Input/Calendar",component:w,parameters:{layout:"centered",docs:{description:{component:"A comprehensive calendar component with date selection, range selection, time picker, and full accessibility support. Built with DaisyUI and Tailwind CSS. Uses Vue 3.4 defineModel() for optimal v-model handling."}}},argTypes:{mode:{control:"select",options:["input","inline"],description:"Display mode - input with popover or inline calendar"},range:{control:"boolean",description:"Enable date range selection"},size:{control:"select",options:["sm","md","lg"],description:"Size of the calendar component"},variant:{control:"select",options:["default","bordered","filled"],description:"Visual variant of the component"},showTime:{control:"boolean",description:"Show time picker in addition to date selection"},allowMonthSelect:{control:"boolean",description:"Show month selector dropdown"},allowYearSelect:{control:"boolean",description:"Show year selector dropdown"},disabled:{control:"boolean",description:"Disable the calendar component"},readonly:{control:"boolean",description:"Make the calendar read-only"},placeholder:{control:"text",description:"Placeholder text for input mode"},locale:{control:"text",description:"Locale for date formatting"},timeStep:{control:"number",description:"Time step in minutes for time picker"}}},j={args:{mode:"input",size:"md",variant:"default",placeholder:"Select a date...",locale:"fr-FR",allowMonthSelect:!0,allowYearSelect:!0},render:d=>({components:{Calendar:w},setup(){const v=c(null);return{args:d,selectedDate:v,handleSelect:n=>{console.log("Date selected:",n)}}},template:`
      <div class="space-y-4">
        <Calendar 
          v-bind="args" 
          v-model="selectedDate"
          @select="handleSelect"
        />
        <div v-if="selectedDate" class="text-sm text-center opacity-70">
          Selected: {{ selectedDate.toLocaleDateString() }}
        </div>
        <div class="text-sm text-center opacity-70">
          <p>• Uses Vue 3.4 defineModel() for v-model</p>
          <p>• Two-way binding with parent component</p>
          <p>• Automatic prop/emit handling</p>
        </div>
      </div>
    `})},O={args:{mode:"inline",size:"md",variant:"bordered",allowMonthSelect:!0,allowYearSelect:!0},render:d=>({components:{Calendar:w},setup(){const v=c(null);return{args:d,selectedDate:v}},template:`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <div class="text-sm text-center opacity-70">
          <p>• Inline calendar display</p>
          <p>• No popover, always visible</p>
          <p>• Perfect for dashboard widgets</p>
        </div>
      </div>
    `})},P={args:{mode:"input",range:!0,size:"md",variant:"bordered",placeholder:"Select date range...",allowMonthSelect:!0,allowYearSelect:!0},render:d=>({components:{Calendar:w},setup(){const v=c(null);return{args:d,selectedRange:v}},template:`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedRange" />
        <div v-if="selectedRange && selectedRange.length === 2" class="text-sm text-center opacity-70">
          Range: {{ selectedRange[0].toLocaleDateString() }} - {{ selectedRange[1].toLocaleDateString() }}
        </div>
        <div class="text-sm text-center opacity-70">
          <p>• Select start and end dates</p>
          <p>• Visual range highlighting</p>
          <p>• Apply/Clear buttons for range selection</p>
        </div>
      </div>
    `})},W={args:{mode:"input",showTime:!0,timeStep:15,size:"md",variant:"bordered",placeholder:"Select date and time...",allowMonthSelect:!0,allowYearSelect:!0},render:d=>({components:{Calendar:w},setup(){const v=c(null);return{args:d,selectedDateTime:v}},template:`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDateTime" />
        <div v-if="selectedDateTime" class="text-sm text-center opacity-70">
          Selected: {{ selectedDateTime.toLocaleString() }}
        </div>
        <div class="text-sm text-center opacity-70">
          <p>• Date and time selection</p>
          <p>• Configurable time step (15 minutes)</p>
          <p>• 24-hour format</p>
        </div>
      </div>
    `})},K={render:()=>({components:{Calendar:w},setup(){return{dates:c({small:null,medium:null,large:null})}},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Small Size</h3>
          <Calendar 
            v-model="dates.small" 
            mode="input" 
            size="sm"
            variant="bordered"
            placeholder="Small calendar..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Medium Size (Default)</h3>
          <Calendar 
            v-model="dates.medium" 
            mode="input" 
            size="md"
            variant="bordered"
            placeholder="Medium calendar..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Large Size</h3>
          <Calendar 
            v-model="dates.large" 
            mode="input" 
            size="lg"
            variant="bordered"
            placeholder="Large calendar..."
          />
        </div>
      </div>
    `})},H={render:()=>({components:{Calendar:w},setup(){return{dates:c({default:null,bordered:null,filled:null})}},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Default Variant</h3>
          <Calendar 
            v-model="dates.default" 
            mode="input" 
            variant="default"
            placeholder="Default style..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Bordered Variant</h3>
          <Calendar 
            v-model="dates.bordered" 
            mode="input" 
            variant="bordered"
            placeholder="Bordered style..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Filled Variant</h3>
          <Calendar 
            v-model="dates.filled" 
            mode="input" 
            variant="filled"
            placeholder="Filled style..."
          />
        </div>
      </div>
    `})},J={args:{mode:"input",size:"md",variant:"bordered",placeholder:"Select date...",minDate:new Date("2024-01-01"),maxDate:new Date("2024-12-31"),disabledDates:[new Date("2024-01-01"),new Date("2024-07-04"),new Date("2024-12-25")],allowMonthSelect:!0,allowYearSelect:!0},render:d=>({components:{Calendar:w},setup(){const v=c(null);return{args:d,selectedDate:v}},template:`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDate" />
        <div class="text-sm text-center opacity-70">
          <p>• Min date: January 1, 2024</p>
          <p>• Max date: December 31, 2024</p>
          <p>• Disabled: New Year, Independence Day, Christmas</p>
        </div>
      </div>
    `})},X={args:{mode:"input",size:"md",variant:"bordered",placeholder:"Select date...",allowMonthSelect:!0,allowYearSelect:!0},render:d=>({components:{Calendar:w},setup(){const v=c(null);return{args:d,selectedDate:v,handleFocus:o=>{console.log("Calendar focused")},handleBlur:o=>{console.log("Calendar blurred")},handleClose:()=>{console.log("Calendar closed")}}},template:`
      <div class="space-y-4">
        <Calendar 
          v-bind="args" 
          v-model="selectedDate"
          @focus="handleFocus"
          @blur="handleBlur"
          @close="handleClose"
        />
        <div class="text-sm text-center opacity-70">
          <p>• Full keyboard navigation support</p>
          <p>• ARIA labels and roles</p>
          <p>• Screen reader compatible</p>
          <p>• Focus management</p>
        </div>
      </div>
    `})},G={render:()=>({components:{Calendar:w},setup(){return{dates:c({english:null,french:null,spanish:null})}},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="font-semibold mb-2">English (en-US)</h3>
          <Calendar 
            v-model="dates.english" 
            mode="input" 
            locale="en-US"
            variant="bordered"
            placeholder="Select date..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">French (fr-FR)</h3>
          <Calendar 
            v-model="dates.french" 
            mode="input" 
            locale="fr-FR"
            variant="bordered"
            placeholder="Sélectionner une date..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Spanish (es-ES)</h3>
          <Calendar 
            v-model="dates.spanish" 
            mode="input" 
            locale="es-ES"
            variant="bordered"
            placeholder="Seleccionar fecha..."
          />
        </div>
      </div>
    `})},Q={render:()=>({components:{Calendar:w},setup(){const d=c(null),v=c(null),l=c(null);return{date1:d,date2:v,date3:l,handleDateChange:(M,o)=>{console.log(`${o} changed to:`,M)}}},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Vue 3.4 defineModel() Demo</h3>
          <p class="text-sm opacity-70 mb-4">Demonstrating automatic two-way binding with defineModel()</p>
        </div>
        
        <div class="text-center">
          <h4 class="font-medium mb-2">Calendar 1</h4>
          <Calendar 
            v-model="date1" 
            mode="input" 
            variant="bordered"
            placeholder="Select date 1..."
            @select="(date) => handleDateChange(date, 'Calendar 1')"
          />
          <div v-if="date1" class="text-xs mt-1 opacity-70">
            Value: {{ date1.toLocaleDateString() }}
          </div>
        </div>
        
        <div class="text-center">
          <h4 class="font-medium mb-2">Calendar 2</h4>
          <Calendar 
            v-model="date2" 
            mode="input" 
            variant="bordered"
            placeholder="Select date 2..."
            @select="(date) => handleDateChange(date, 'Calendar 2')"
          />
          <div v-if="date2" class="text-xs mt-1 opacity-70">
            Value: {{ date2.toLocaleDateString() }}
          </div>
        </div>
        
        <div class="text-center">
          <h4 class="font-medium mb-2">Calendar 3 (Inline)</h4>
          <Calendar 
            v-model="date3" 
            mode="inline" 
            variant="bordered"
            @select="(date) => handleDateChange(date, 'Calendar 3')"
          />
          <div v-if="date3" class="text-xs mt-1 opacity-70">
            Value: {{ date3.toLocaleDateString() }}
          </div>
        </div>
        
        <div class="text-sm text-center opacity-70">
          <p>• Each calendar uses defineModel() for automatic v-model handling</p>
          <p>• No manual prop/emit setup required</p>
          <p>• Type-safe two-way binding</p>
          <p>• Check console for change events</p>
        </div>
      </div>
    `})},Z={render:()=>({components:{Calendar:w},setup(){return{dates:c({normal:null,disabled:null,readonly:null,error:null})}},template:`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Normal State</h3>
          <Calendar 
            v-model="dates.normal" 
            mode="input" 
            variant="bordered"
            placeholder="Normal calendar..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Disabled State</h3>
          <Calendar 
            v-model="dates.disabled" 
            mode="input" 
            variant="bordered"
            placeholder="Disabled calendar..."
            :disabled="true"
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Readonly State</h3>
          <Calendar 
            v-model="dates.readonly" 
            mode="input" 
            variant="bordered"
            placeholder="Readonly calendar..."
            :readonly="true"
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Error State</h3>
          <Calendar 
            v-model="dates.error" 
            mode="input" 
            variant="bordered"
            placeholder="Error calendar..."
            error-message="Please select a valid date"
          />
        </div>
      </div>
    `})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'input',
    size: 'md',
    variant: 'default',
    placeholder: 'Select a date...',
    locale: 'fr-FR',
    allowMonthSelect: true,
    allowYearSelect: true
  },
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const selectedDate = ref<Date | null>(null);
      const handleSelect = (date: Date) => {
        console.log('Date selected:', date);
      };
      return {
        args,
        selectedDate,
        handleSelect
      };
    },
    template: \`
      <div class="space-y-4">
        <Calendar 
          v-bind="args" 
          v-model="selectedDate"
          @select="handleSelect"
        />
        <div v-if="selectedDate" class="text-sm text-center opacity-70">
          Selected: {{ selectedDate.toLocaleDateString() }}
        </div>
        <div class="text-sm text-center opacity-70">
          <p>• Uses Vue 3.4 defineModel() for v-model</p>
          <p>• Two-way binding with parent component</p>
          <p>• Automatic prop/emit handling</p>
        </div>
      </div>
    \`
  })
}`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'inline',
    size: 'md',
    variant: 'bordered',
    allowMonthSelect: true,
    allowYearSelect: true
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
        <div class="text-sm text-center opacity-70">
          <p>• Inline calendar display</p>
          <p>• No popover, always visible</p>
          <p>• Perfect for dashboard widgets</p>
        </div>
      </div>
    \`
  })
}`,...O.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'input',
    range: true,
    size: 'md',
    variant: 'bordered',
    placeholder: 'Select date range...',
    allowMonthSelect: true,
    allowYearSelect: true
  },
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const selectedRange = ref<Date[] | null>(null);
      return {
        args,
        selectedRange
      };
    },
    template: \`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedRange" />
        <div v-if="selectedRange && selectedRange.length === 2" class="text-sm text-center opacity-70">
          Range: {{ selectedRange[0].toLocaleDateString() }} - {{ selectedRange[1].toLocaleDateString() }}
        </div>
        <div class="text-sm text-center opacity-70">
          <p>• Select start and end dates</p>
          <p>• Visual range highlighting</p>
          <p>• Apply/Clear buttons for range selection</p>
        </div>
      </div>
    \`
  })
}`,...P.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'input',
    showTime: true,
    timeStep: 15,
    size: 'md',
    variant: 'bordered',
    placeholder: 'Select date and time...',
    allowMonthSelect: true,
    allowYearSelect: true
  },
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const selectedDateTime = ref<Date | null>(null);
      return {
        args,
        selectedDateTime
      };
    },
    template: \`
      <div class="space-y-4">
        <Calendar v-bind="args" v-model="selectedDateTime" />
        <div v-if="selectedDateTime" class="text-sm text-center opacity-70">
          Selected: {{ selectedDateTime.toLocaleString() }}
        </div>
        <div class="text-sm text-center opacity-70">
          <p>• Date and time selection</p>
          <p>• Configurable time step (15 minutes)</p>
          <p>• 24-hour format</p>
        </div>
      </div>
    \`
  })
}`,...W.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Calendar
    },
    setup() {
      const dates = ref({
        small: null,
        medium: null,
        large: null
      });
      return {
        dates
      };
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Small Size</h3>
          <Calendar 
            v-model="dates.small" 
            mode="input" 
            size="sm"
            variant="bordered"
            placeholder="Small calendar..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Medium Size (Default)</h3>
          <Calendar 
            v-model="dates.medium" 
            mode="input" 
            size="md"
            variant="bordered"
            placeholder="Medium calendar..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Large Size</h3>
          <Calendar 
            v-model="dates.large" 
            mode="input" 
            size="lg"
            variant="bordered"
            placeholder="Large calendar..."
          />
        </div>
      </div>
    \`
  })
}`,...K.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Default Variant</h3>
          <Calendar 
            v-model="dates.default" 
            mode="input" 
            variant="default"
            placeholder="Default style..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Bordered Variant</h3>
          <Calendar 
            v-model="dates.bordered" 
            mode="input" 
            variant="bordered"
            placeholder="Bordered style..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Filled Variant</h3>
          <Calendar 
            v-model="dates.filled" 
            mode="input" 
            variant="filled"
            placeholder="Filled style..."
          />
        </div>
      </div>
    \`
  })
}`,...H.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'input',
    size: 'md',
    variant: 'bordered',
    placeholder: 'Select date...',
    minDate: new Date('2024-01-01'),
    maxDate: new Date('2024-12-31'),
    disabledDates: [new Date('2024-01-01'),
    // New Year
    new Date('2024-07-04'),
    // Independence Day
    new Date('2024-12-25') // Christmas
    ],
    allowMonthSelect: true,
    allowYearSelect: true
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
        <div class="text-sm text-center opacity-70">
          <p>• Min date: January 1, 2024</p>
          <p>• Max date: December 31, 2024</p>
          <p>• Disabled: New Year, Independence Day, Christmas</p>
        </div>
      </div>
    \`
  })
}`,...J.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'input',
    size: 'md',
    variant: 'bordered',
    placeholder: 'Select date...',
    allowMonthSelect: true,
    allowYearSelect: true
  },
  render: args => ({
    components: {
      Calendar
    },
    setup() {
      const selectedDate = ref<Date | null>(null);
      const handleFocus = (event: FocusEvent) => {
        console.log('Calendar focused');
      };
      const handleBlur = (event: FocusEvent) => {
        console.log('Calendar blurred');
      };
      const handleClose = () => {
        console.log('Calendar closed');
      };
      return {
        args,
        selectedDate,
        handleFocus,
        handleBlur,
        handleClose
      };
    },
    template: \`
      <div class="space-y-4">
        <Calendar 
          v-bind="args" 
          v-model="selectedDate"
          @focus="handleFocus"
          @blur="handleBlur"
          @close="handleClose"
        />
        <div class="text-sm text-center opacity-70">
          <p>• Full keyboard navigation support</p>
          <p>• ARIA labels and roles</p>
          <p>• Screen reader compatible</p>
          <p>• Focus management</p>
        </div>
      </div>
    \`
  })
}`,...X.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Calendar
    },
    setup() {
      const dates = ref({
        english: null,
        french: null,
        spanish: null
      });
      return {
        dates
      };
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="font-semibold mb-2">English (en-US)</h3>
          <Calendar 
            v-model="dates.english" 
            mode="input" 
            locale="en-US"
            variant="bordered"
            placeholder="Select date..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">French (fr-FR)</h3>
          <Calendar 
            v-model="dates.french" 
            mode="input" 
            locale="fr-FR"
            variant="bordered"
            placeholder="Sélectionner une date..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Spanish (es-ES)</h3>
          <Calendar 
            v-model="dates.spanish" 
            mode="input" 
            locale="es-ES"
            variant="bordered"
            placeholder="Seleccionar fecha..."
          />
        </div>
      </div>
    \`
  })
}`,...G.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Calendar
    },
    setup() {
      const date1 = ref<Date | null>(null);
      const date2 = ref<Date | null>(null);
      const date3 = ref<Date | null>(null);
      const handleDateChange = (value: Date | null, label: string) => {
        console.log(\`\${label} changed to:\`, value);
      };
      return {
        date1,
        date2,
        date3,
        handleDateChange
      };
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Vue 3.4 defineModel() Demo</h3>
          <p class="text-sm opacity-70 mb-4">Demonstrating automatic two-way binding with defineModel()</p>
        </div>
        
        <div class="text-center">
          <h4 class="font-medium mb-2">Calendar 1</h4>
          <Calendar 
            v-model="date1" 
            mode="input" 
            variant="bordered"
            placeholder="Select date 1..."
            @select="(date) => handleDateChange(date, 'Calendar 1')"
          />
          <div v-if="date1" class="text-xs mt-1 opacity-70">
            Value: {{ date1.toLocaleDateString() }}
          </div>
        </div>
        
        <div class="text-center">
          <h4 class="font-medium mb-2">Calendar 2</h4>
          <Calendar 
            v-model="date2" 
            mode="input" 
            variant="bordered"
            placeholder="Select date 2..."
            @select="(date) => handleDateChange(date, 'Calendar 2')"
          />
          <div v-if="date2" class="text-xs mt-1 opacity-70">
            Value: {{ date2.toLocaleDateString() }}
          </div>
        </div>
        
        <div class="text-center">
          <h4 class="font-medium mb-2">Calendar 3 (Inline)</h4>
          <Calendar 
            v-model="date3" 
            mode="inline" 
            variant="bordered"
            @select="(date) => handleDateChange(date, 'Calendar 3')"
          />
          <div v-if="date3" class="text-xs mt-1 opacity-70">
            Value: {{ date3.toLocaleDateString() }}
          </div>
        </div>
        
        <div class="text-sm text-center opacity-70">
          <p>• Each calendar uses defineModel() for automatic v-model handling</p>
          <p>• No manual prop/emit setup required</p>
          <p>• Type-safe two-way binding</p>
          <p>• Check console for change events</p>
        </div>
      </div>
    \`
  })
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Calendar
    },
    setup() {
      const dates = ref({
        normal: null,
        disabled: null,
        readonly: null,
        error: null
      });
      return {
        dates
      };
    },
    template: \`
      <div class="space-y-6">
        <div class="text-center">
          <h3 class="font-semibold mb-2">Normal State</h3>
          <Calendar 
            v-model="dates.normal" 
            mode="input" 
            variant="bordered"
            placeholder="Normal calendar..."
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Disabled State</h3>
          <Calendar 
            v-model="dates.disabled" 
            mode="input" 
            variant="bordered"
            placeholder="Disabled calendar..."
            :disabled="true"
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Readonly State</h3>
          <Calendar 
            v-model="dates.readonly" 
            mode="input" 
            variant="bordered"
            placeholder="Readonly calendar..."
            :readonly="true"
          />
        </div>
        
        <div class="text-center">
          <h3 class="font-semibold mb-2">Error State</h3>
          <Calendar 
            v-model="dates.error" 
            mode="input" 
            variant="bordered"
            placeholder="Error calendar..."
            error-message="Please select a valid date"
          />
        </div>
      </div>
    \`
  })
}`,...Z.parameters?.docs?.source}}};const va=["Default","Inline","DateRange","WithTimePicker","DifferentSizes","Variants","WithConstraints","Accessibility","Localization","Vue34DefineModel","States"];export{X as Accessibility,P as DateRange,j as Default,K as DifferentSizes,O as Inline,G as Localization,Z as States,H as Variants,Q as Vue34DefineModel,J as WithConstraints,W as WithTimePicker,va as __namedExportsOrder,pa as default};
