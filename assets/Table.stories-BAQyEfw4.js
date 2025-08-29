import{T as i}from"./Table-DEN2yTeu.js";import"./iframe-CzrYmmIK.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"Data Display/Table",component:i,parameters:{layout:"padded"},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg"]},variant:{control:{type:"select"},options:["default","zebra","compact","bordered"]},selectable:{control:{type:"boolean"}},hoverable:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},showHeader:{control:{type:"boolean"}}}},a=[{key:"id",title:"ID",sortable:!0,format:"number"},{key:"name",title:"Name",sortable:!0},{key:"email",title:"Email"},{key:"role",title:"Role"},{key:"status",title:"Status",align:"center"},{key:"salary",title:"Salary",sortable:!0,format:"currency",align:"right"}],e=[{id:1,name:"John Doe",email:"john@example.com",role:"Developer",status:"Active",salary:75e3},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Designer",status:"Active",salary:68e3},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Manager",status:"Inactive",salary:85e3},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Developer",status:"Active",salary:72e3},{id:5,name:"Charlie Wilson",email:"charlie@example.com",role:"Analyst",status:"Active",salary:65e3}],s={args:{columns:a,data:e}},r={args:{columns:a,data:e,variant:"zebra"}},o={args:{columns:a,data:e,variant:"compact"}},t={args:{columns:a,data:e,variant:"bordered"}},n={args:{columns:a,data:e,size:"sm"}},l={args:{columns:a,data:e,size:"lg"}},m={args:{columns:a,data:[],loading:!0}},c={args:{columns:a,data:[]}},p={args:{columns:a,data:e,showHeader:!1}},d={args:{columns:a,data:e,selectable:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData,
    variant: 'zebra'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData,
    variant: 'compact'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData,
    variant: 'bordered'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData,
    size: 'sm'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData,
    size: 'lg'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: [],
    loading: true
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: []
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData,
    showHeader: false
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    data: sampleData,
    selectable: true
  }
}`,...d.parameters?.docs?.source}}};const D=["Default","Zebra","Compact","Bordered","SmallSize","LargeSize","Loading","Empty","NoHeader","Selectable"];export{t as Bordered,o as Compact,s as Default,c as Empty,l as LargeSize,m as Loading,p as NoHeader,d as Selectable,n as SmallSize,r as Zebra,D as __namedExportsOrder,S as default};
