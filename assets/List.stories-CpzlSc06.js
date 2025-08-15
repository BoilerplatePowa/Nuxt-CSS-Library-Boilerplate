import{L as i}from"./List-C7ENOG1Y.js";import"./iframe-CO79KBgr.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={title:"DataDisplay/List",component:i,parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["default","bordered","hover","zebra"]},size:{control:{type:"select"},options:["sm","md","lg"]},clickable:{control:{type:"boolean"}},selectable:{control:{type:"boolean"}},showEmpty:{control:{type:"boolean"}},dividers:{control:{type:"boolean"}}}},s={args:{items:[{id:1,title:"John Doe",subtitle:"Software Engineer",description:"Building amazing web applications with Vue.js",avatar:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"},{id:2,title:"Jane Smith",subtitle:"UX Designer",description:"Creating beautiful and intuitive user experiences",avatar:"https://daisyui.com/images/stock/photo-1580489944761-15a19d654956.jpg"},{id:3,title:"Mike Johnson",subtitle:"Product Manager",description:"Leading product development and strategy",avatar:"https://daisyui.com/images/stock/photo-1507003211169-0a1dd7228f2d.jpg"}]}},a={render:()=>({components:{List:i},data(){return{sampleItems:[{id:1,title:"First Item",subtitle:"Subtitle text",description:"Description of the first item"},{id:2,title:"Second Item",subtitle:"Another subtitle",description:"Description of the second item"},{id:3,title:"Third Item",subtitle:"Third subtitle",description:"Description of the third item"}]}},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <div class="max-w-md">
            <List :items="sampleItems" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Bordered</h3>
          <div class="max-w-md">
            <List :items="sampleItems" variant="bordered" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Hover Effect</h3>
          <div class="max-w-md">
            <List :items="sampleItems" variant="hover" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Zebra Striping</h3>
          <div class="max-w-md">
            <List :items="sampleItems" variant="zebra" />
          </div>
        </div>
      </div>
    `})},o={render:()=>({components:{List:i},data(){return{sampleItems:[{id:1,title:"Sample Item",subtitle:"With subtitle",description:"And some description text",avatar:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"},{id:2,title:"Another Item",subtitle:"Different subtitle",description:"More description content",avatar:"https://daisyui.com/images/stock/photo-1580489944761-15a19d654956.jpg"}]}},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Small</h3>
          <div class="max-w-md">
            <List :items="sampleItems" size="sm" variant="bordered" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Medium (Default)</h3>
          <div class="max-w-md">
            <List :items="sampleItems" size="md" variant="bordered" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Large</h3>
          <div class="max-w-md">
            <List :items="sampleItems" size="lg" variant="bordered" />
          </div>
        </div>
      </div>
    `})},d={render:()=>({components:{List:i},data(){return{itemsWithActions:[{id:1,title:"Invitation from John",subtitle:"Team collaboration request",description:"John has invited you to join the development team",meta:"2 hours ago",badge:"New",actions:[{label:"Accept",variant:"primary",size:"sm"},{label:"Decline",variant:"ghost",size:"sm"}]},{id:2,title:"Payment Received",subtitle:"Invoice #12345",description:"Payment of $150.00 has been processed successfully",meta:"1 day ago",actions:[{label:"View",variant:"outline",size:"sm"},{label:"Download",variant:"ghost",size:"sm"}]},{id:3,title:"System Update",subtitle:"Version 2.1.0 available",description:"New features and bug fixes are ready to install",meta:"3 days ago",actions:[{label:"Update",variant:"secondary",size:"sm"},{label:"Later",variant:"ghost",size:"sm"}]}]}},methods:{handleActionClick(t,e,c){console.log("Action clicked:",{action:t.label,item:e.title,index:c}),alert(`${t.label} clicked for "${e.title}"`)}},template:`
      <div class="max-w-lg mx-auto">
        <h3 class="text-lg font-bold mb-4">Notifications with Actions</h3>
        <List 
          :items="itemsWithActions" 
          variant="bordered"
          @action-click="handleActionClick"
        />
      </div>
    `})},l={render:()=>({components:{List:i},data(){return{selectedItems:new Set,contactItems:[{id:1,title:"Alice Johnson",subtitle:"alice@example.com",description:"Online",avatar:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",selectable:!0},{id:2,title:"Bob Smith",subtitle:"bob@example.com",description:"Away",avatar:"https://daisyui.com/images/stock/photo-1580489944761-15a19d654956.jpg",selectable:!0},{id:3,title:"Carol Davis",subtitle:"carol@example.com",description:"Offline",avatar:"https://daisyui.com/images/stock/photo-1507003211169-0a1dd7228f2d.jpg",selectable:!0,disabled:!0},{id:4,title:"David Wilson",subtitle:"david@example.com",description:"Online",avatar:"https://daisyui.com/images/stock/photo-1472099645785-5658abf4ff4e.jpg",selectable:!0}]}},computed:{computedItems(){return this.contactItems.map(t=>({...t,selected:this.selectedItems.has(t.id)}))}},methods:{handleItemClick(t,e){t.disabled||(this.selectedItems.has(t.id)?this.selectedItems.delete(t.id):this.selectedItems.add(t.id),console.log("Item clicked:",{item:t.title,index:e,selected:this.selectedItems.has(t.id)}))}},template:`
      <div class="max-w-md mx-auto space-y-4">
        <div>
          <h3 class="text-lg font-bold mb-2">Select Contacts</h3>
          <p class="text-sm opacity-70 mb-4">Click to select/deselect contacts</p>
        </div>
        
        <List 
          :items="computedItems"
          variant="bordered"
          selectable
          @item-click="handleItemClick"
        />
        
        <div class="mt-4 p-4 bg-base-200 rounded">
          <h4 class="font-semibold mb-2">Selected Items:</h4>
          <div v-if="selectedItems.size === 0" class="text-sm opacity-60">
            No items selected
          </div>
          <div v-else class="space-y-1">
            <div 
              v-for="item in computedItems.filter(i => selectedItems.has(i.id))" 
              :key="item.id"
              class="text-sm"
            >
              • {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    `})},n={render:()=>({components:{List:i},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default Empty State</h3>
          <div class="max-w-md">
            <List :items="[]" variant="bordered" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Custom Empty State</h3>
          <div class="max-w-md">
            <List :items="[]" variant="bordered">
              <template #empty>
                <div class="text-center py-12">
                  <div class="text-6xl mb-4">📝</div>
                  <h3 class="text-lg font-semibold mb-2">No tasks yet</h3>
                  <p class="text-sm opacity-60 mb-4">Create your first task to get started</p>
                  <button class="btn btn-primary btn-sm">Add Task</button>
                </div>
              </template>
            </List>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Hidden Empty State</h3>
          <div class="max-w-md">
            <List :items="[]" variant="bordered" :show-empty="false" />
            <p class="text-sm opacity-60 mt-2">Empty state is hidden</p>
          </div>
        </div>
      </div>
    `})},m={render:()=>({components:{List:i},data(){return{complexItems:[{id:1,title:"Project Alpha",subtitle:"Web Development",description:"Building a modern e-commerce platform with Vue.js and Node.js",avatar:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",meta:"Due: Dec 15",badge:"High Priority",actions:[{label:"View",variant:"primary",size:"xs"},{label:"Edit",variant:"ghost",size:"xs"}]},{id:2,title:"Mobile App Redesign",subtitle:"UI/UX Design",description:"Complete redesign of the mobile application interface",avatar:"https://daisyui.com/images/stock/photo-1580489944761-15a19d654956.jpg",meta:"Due: Jan 20",badge:"Medium",actions:[{label:"Review",variant:"outline",size:"xs"},{label:"Approve",variant:"secondary",size:"xs"}]},{id:3,title:"API Documentation",subtitle:"Documentation",description:"Update and maintain comprehensive API documentation",avatar:"https://daisyui.com/images/stock/photo-1507003211169-0a1dd7228f2d.jpg",meta:"Due: Nov 30",badge:"Low",disabled:!0,actions:[{label:"Edit",variant:"ghost",size:"xs",disabled:!0}]}]}},methods:{handleItemClick(t,e){console.log("Project clicked:",t.title,e)},handleActionClick(t,e){console.log("Action:",t.label,"for project:",e.title)}},template:`
      <div class="max-w-2xl mx-auto">
        <h3 class="text-lg font-bold mb-4">Project Management Dashboard</h3>
        <List 
          :items="complexItems"
          variant="bordered"
          size="lg"
          clickable
          @item-click="handleItemClick"
          @action-click="handleActionClick"
        />
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 1,
      title: 'John Doe',
      subtitle: 'Software Engineer',
      description: 'Building amazing web applications with Vue.js',
      avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
    }, {
      id: 2,
      title: 'Jane Smith',
      subtitle: 'UX Designer',
      description: 'Creating beautiful and intuitive user experiences',
      avatar: 'https://daisyui.com/images/stock/photo-1580489944761-15a19d654956.jpg'
    }, {
      id: 3,
      title: 'Mike Johnson',
      subtitle: 'Product Manager',
      description: 'Leading product development and strategy',
      avatar: 'https://daisyui.com/images/stock/photo-1507003211169-0a1dd7228f2d.jpg'
    }]
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      List
    },
    data() {
      return {
        sampleItems: [{
          id: 1,
          title: 'First Item',
          subtitle: 'Subtitle text',
          description: 'Description of the first item'
        }, {
          id: 2,
          title: 'Second Item',
          subtitle: 'Another subtitle',
          description: 'Description of the second item'
        }, {
          id: 3,
          title: 'Third Item',
          subtitle: 'Third subtitle',
          description: 'Description of the third item'
        }]
      };
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <div class="max-w-md">
            <List :items="sampleItems" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Bordered</h3>
          <div class="max-w-md">
            <List :items="sampleItems" variant="bordered" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Hover Effect</h3>
          <div class="max-w-md">
            <List :items="sampleItems" variant="hover" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Zebra Striping</h3>
          <div class="max-w-md">
            <List :items="sampleItems" variant="zebra" />
          </div>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      List
    },
    data() {
      return {
        sampleItems: [{
          id: 1,
          title: 'Sample Item',
          subtitle: 'With subtitle',
          description: 'And some description text',
          avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
        }, {
          id: 2,
          title: 'Another Item',
          subtitle: 'Different subtitle',
          description: 'More description content',
          avatar: 'https://daisyui.com/images/stock/photo-1580489944761-15a19d654956.jpg'
        }]
      };
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Small</h3>
          <div class="max-w-md">
            <List :items="sampleItems" size="sm" variant="bordered" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Medium (Default)</h3>
          <div class="max-w-md">
            <List :items="sampleItems" size="md" variant="bordered" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Large</h3>
          <div class="max-w-md">
            <List :items="sampleItems" size="lg" variant="bordered" />
          </div>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      List
    },
    data() {
      return {
        itemsWithActions: [{
          id: 1,
          title: 'Invitation from John',
          subtitle: 'Team collaboration request',
          description: 'John has invited you to join the development team',
          meta: '2 hours ago',
          badge: 'New',
          actions: [{
            label: 'Accept',
            variant: 'primary',
            size: 'sm'
          }, {
            label: 'Decline',
            variant: 'ghost',
            size: 'sm'
          }]
        }, {
          id: 2,
          title: 'Payment Received',
          subtitle: 'Invoice #12345',
          description: 'Payment of $150.00 has been processed successfully',
          meta: '1 day ago',
          actions: [{
            label: 'View',
            variant: 'outline',
            size: 'sm'
          }, {
            label: 'Download',
            variant: 'ghost',
            size: 'sm'
          }]
        }, {
          id: 3,
          title: 'System Update',
          subtitle: 'Version 2.1.0 available',
          description: 'New features and bug fixes are ready to install',
          meta: '3 days ago',
          actions: [{
            label: 'Update',
            variant: 'secondary',
            size: 'sm'
          }, {
            label: 'Later',
            variant: 'ghost',
            size: 'sm'
          }]
        }]
      };
    },
    methods: {
      handleActionClick(action: {
        label: string;
      }, item: {
        title: string;
      }, index: number) {
        console.log('Action clicked:', {
          action: action.label,
          item: item.title,
          index
        });
        alert(\`\${action.label} clicked for "\${item.title}"\`);
      }
    },
    template: \`
      <div class="max-w-lg mx-auto">
        <h3 class="text-lg font-bold mb-4">Notifications with Actions</h3>
        <List 
          :items="itemsWithActions" 
          variant="bordered"
          @action-click="handleActionClick"
        />
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      List
    },
    data() {
      return {
        selectedItems: new Set(),
        contactItems: [{
          id: 1,
          title: 'Alice Johnson',
          subtitle: 'alice@example.com',
          description: 'Online',
          avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          selectable: true
        }, {
          id: 2,
          title: 'Bob Smith',
          subtitle: 'bob@example.com',
          description: 'Away',
          avatar: 'https://daisyui.com/images/stock/photo-1580489944761-15a19d654956.jpg',
          selectable: true
        }, {
          id: 3,
          title: 'Carol Davis',
          subtitle: 'carol@example.com',
          description: 'Offline',
          avatar: 'https://daisyui.com/images/stock/photo-1507003211169-0a1dd7228f2d.jpg',
          selectable: true,
          disabled: true
        }, {
          id: 4,
          title: 'David Wilson',
          subtitle: 'david@example.com',
          description: 'Online',
          avatar: 'https://daisyui.com/images/stock/photo-1472099645785-5658abf4ff4e.jpg',
          selectable: true
        }]
      };
    },
    computed: {
      computedItems() {
        return this.contactItems.map(item => ({
          ...item,
          selected: this.selectedItems.has(item.id)
        }));
      }
    },
    methods: {
      handleItemClick(item: {
        id: number;
        title: string;
      }, index: number) {
        if (item.disabled) return;
        if (this.selectedItems.has(item.id)) {
          this.selectedItems.delete(item.id);
        } else {
          this.selectedItems.add(item.id);
        }
        console.log('Item clicked:', {
          item: item.title,
          index,
          selected: this.selectedItems.has(item.id)
        });
      }
    },
    template: \`
      <div class="max-w-md mx-auto space-y-4">
        <div>
          <h3 class="text-lg font-bold mb-2">Select Contacts</h3>
          <p class="text-sm opacity-70 mb-4">Click to select/deselect contacts</p>
        </div>
        
        <List 
          :items="computedItems"
          variant="bordered"
          selectable
          @item-click="handleItemClick"
        />
        
        <div class="mt-4 p-4 bg-base-200 rounded">
          <h4 class="font-semibold mb-2">Selected Items:</h4>
          <div v-if="selectedItems.size === 0" class="text-sm opacity-60">
            No items selected
          </div>
          <div v-else class="space-y-1">
            <div 
              v-for="item in computedItems.filter(i => selectedItems.has(i.id))" 
              :key="item.id"
              class="text-sm"
            >
              • {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      List
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default Empty State</h3>
          <div class="max-w-md">
            <List :items="[]" variant="bordered" />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Custom Empty State</h3>
          <div class="max-w-md">
            <List :items="[]" variant="bordered">
              <template #empty>
                <div class="text-center py-12">
                  <div class="text-6xl mb-4">📝</div>
                  <h3 class="text-lg font-semibold mb-2">No tasks yet</h3>
                  <p class="text-sm opacity-60 mb-4">Create your first task to get started</p>
                  <button class="btn btn-primary btn-sm">Add Task</button>
                </div>
              </template>
            </List>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Hidden Empty State</h3>
          <div class="max-w-md">
            <List :items="[]" variant="bordered" :show-empty="false" />
            <p class="text-sm opacity-60 mt-2">Empty state is hidden</p>
          </div>
        </div>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      List
    },
    data() {
      return {
        complexItems: [{
          id: 1,
          title: 'Project Alpha',
          subtitle: 'Web Development',
          description: 'Building a modern e-commerce platform with Vue.js and Node.js',
          avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
          meta: 'Due: Dec 15',
          badge: 'High Priority',
          actions: [{
            label: 'View',
            variant: 'primary',
            size: 'xs'
          }, {
            label: 'Edit',
            variant: 'ghost',
            size: 'xs'
          }]
        }, {
          id: 2,
          title: 'Mobile App Redesign',
          subtitle: 'UI/UX Design',
          description: 'Complete redesign of the mobile application interface',
          avatar: 'https://daisyui.com/images/stock/photo-1580489944761-15a19d654956.jpg',
          meta: 'Due: Jan 20',
          badge: 'Medium',
          actions: [{
            label: 'Review',
            variant: 'outline',
            size: 'xs'
          }, {
            label: 'Approve',
            variant: 'secondary',
            size: 'xs'
          }]
        }, {
          id: 3,
          title: 'API Documentation',
          subtitle: 'Documentation',
          description: 'Update and maintain comprehensive API documentation',
          avatar: 'https://daisyui.com/images/stock/photo-1507003211169-0a1dd7228f2d.jpg',
          meta: 'Due: Nov 30',
          badge: 'Low',
          disabled: true,
          actions: [{
            label: 'Edit',
            variant: 'ghost',
            size: 'xs',
            disabled: true
          }]
        }]
      };
    },
    methods: {
      handleItemClick(item: {
        title: string;
      }, index: number) {
        console.log('Project clicked:', item.title, index);
      },
      handleActionClick(action: {
        label: string;
      }, item: {
        title: string;
      }) {
        console.log('Action:', action.label, 'for project:', item.title);
      }
    },
    template: \`
      <div class="max-w-2xl mx-auto">
        <h3 class="text-lg font-bold mb-4">Project Management Dashboard</h3>
        <List 
          :items="complexItems"
          variant="bordered"
          size="lg"
          clickable
          @item-click="handleItemClick"
          @action-click="handleActionClick"
        />
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};const u=["Default","Variants","Sizes","WithActions","Interactive","EmptyState","ComplexLayout"];export{m as ComplexLayout,s as Default,n as EmptyState,l as Interactive,o as Sizes,a as Variants,d as WithActions,u as __namedExportsOrder,h as default};
