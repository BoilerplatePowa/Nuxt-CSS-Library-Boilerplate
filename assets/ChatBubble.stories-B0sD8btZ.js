import{C as c}from"./ChatBubble-CLGMf3Af.js";import"./iframe-BrsdVXSx.js";import"./preload-helper-D9Z9MdNV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Data Display/ChatBubble",component:c,parameters:{layout:"padded",docs:{description:{component:"Chat message bubble component with sender positioning and styling options."}}},argTypes:{message:{control:"text",description:"The chat message content"},position:{control:{type:"select"},options:["left","right"],description:"Message position (left for others, right for user)"},name:{control:"text",description:"Sender name"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Chat bubble size"},avatar:{control:"text",description:"Avatar image URL"},timestamp:{control:"text",description:"Message timestamp"},variant:{control:{type:"select"},options:["primary","secondary","accent","info","success","warning","error"],description:"Chat bubble color variant"}},tags:["autodocs"]},e={args:{message:"Hello! How are you doing today?",position:"left"}},t={args:{message:"I am doing great, thanks for asking!",position:"right"}},a={args:{message:"Hey there! Nice to meet you.",position:"left",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"}},s={args:{message:"This message has a timestamp",position:"right",timestamp:"2:30 PM"}},o={render:()=>({components:{ChatBubble:c},template:`
      <div class="space-y-4 max-w-md">
        <ChatBubble 
          message="Primary color message" 
          position="left" 
          variant="primary"
        />
        <ChatBubble 
          message="Secondary color message" 
          position="right" 
          variant="secondary"
        />
        <ChatBubble 
          message="Accent color message" 
          position="left" 
          variant="accent"
        />
        <ChatBubble 
          message="Success message" 
          position="right" 
          variant="success"
        />
        <ChatBubble 
          message="Warning message" 
          position="left" 
          variant="warning"
        />
        <ChatBubble 
          message="Error message" 
          position="right" 
          variant="error"
        />
      </div>
    `})},n={render:()=>({components:{ChatBubble:c},template:`
      <div class="space-y-4 max-w-lg mx-auto">
        <ChatBubble 
          message="Hey! Are you free for lunch today?" 
          position="left"
          avatar="https://images.unsplash.com/photo-1494790108755-2616b612b05e?w=40&h=40&fit=crop&crop=face"
          timestamp="11:30 AM"
        />
        <ChatBubble 
          message="Yes! I'd love to. Where do you want to go?" 
          position="right"
          timestamp="11:32 AM"
        />
        <ChatBubble 
          message="How about that new Italian place downtown?" 
          position="left"
          avatar="https://images.unsplash.com/photo-1494790108755-2616b612b05e?w=40&h=40&fit=crop&crop=face"
          timestamp="11:33 AM"
        />
        <ChatBubble 
          message="Perfect! Let's meet there at 12:30" 
          position="right"
          timestamp="11:35 AM"
        />
        <ChatBubble 
          message="Great! See you there 😊" 
          position="left"
          avatar="https://images.unsplash.com/photo-1494790108755-2616b612b05e?w=40&h=40&fit=crop&crop=face"
          timestamp="11:36 AM"
        />
      </div>
    `})},r={args:{message:"This is a much longer message to demonstrate how the chat bubble handles multiple lines of text. It should wrap nicely and maintain proper spacing and readability even with extended content.",position:"left",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",timestamp:"3:45 PM"}},i={render:()=>({components:{ChatBubble:c},template:`
      <div class="space-y-4 max-w-md mx-auto">
        <div class="text-center">
          <div class="inline-block bg-base-200 text-base-content px-4 py-2 rounded-full text-sm">
            John joined the conversation
          </div>
        </div>
        <ChatBubble 
          message="Welcome to the team chat!" 
          position="left"
          avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
        />
        <div class="text-center">
          <div class="inline-block bg-base-200 text-base-content px-4 py-2 rounded-full text-sm">
            Sarah is typing...
          </div>
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Hello! How are you doing today?',
    position: 'left'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'I am doing great, thanks for asking!',
    position: 'right'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Hey there! Nice to meet you.',
    position: 'left',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'This message has a timestamp',
    position: 'right',
    timestamp: '2:30 PM'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ChatBubble
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <ChatBubble 
          message="Primary color message" 
          position="left" 
          variant="primary"
        />
        <ChatBubble 
          message="Secondary color message" 
          position="right" 
          variant="secondary"
        />
        <ChatBubble 
          message="Accent color message" 
          position="left" 
          variant="accent"
        />
        <ChatBubble 
          message="Success message" 
          position="right" 
          variant="success"
        />
        <ChatBubble 
          message="Warning message" 
          position="left" 
          variant="warning"
        />
        <ChatBubble 
          message="Error message" 
          position="right" 
          variant="error"
        />
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ChatBubble
    },
    template: \`
      <div class="space-y-4 max-w-lg mx-auto">
        <ChatBubble 
          message="Hey! Are you free for lunch today?" 
          position="left"
          avatar="https://images.unsplash.com/photo-1494790108755-2616b612b05e?w=40&h=40&fit=crop&crop=face"
          timestamp="11:30 AM"
        />
        <ChatBubble 
          message="Yes! I'd love to. Where do you want to go?" 
          position="right"
          timestamp="11:32 AM"
        />
        <ChatBubble 
          message="How about that new Italian place downtown?" 
          position="left"
          avatar="https://images.unsplash.com/photo-1494790108755-2616b612b05e?w=40&h=40&fit=crop&crop=face"
          timestamp="11:33 AM"
        />
        <ChatBubble 
          message="Perfect! Let's meet there at 12:30" 
          position="right"
          timestamp="11:35 AM"
        />
        <ChatBubble 
          message="Great! See you there 😊" 
          position="left"
          avatar="https://images.unsplash.com/photo-1494790108755-2616b612b05e?w=40&h=40&fit=crop&crop=face"
          timestamp="11:36 AM"
        />
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'This is a much longer message to demonstrate how the chat bubble handles multiple lines of text. It should wrap nicely and maintain proper spacing and readability even with extended content.',
    position: 'left',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    timestamp: '3:45 PM'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ChatBubble
    },
    template: \`
      <div class="space-y-4 max-w-md mx-auto">
        <div class="text-center">
          <div class="inline-block bg-base-200 text-base-content px-4 py-2 rounded-full text-sm">
            John joined the conversation
          </div>
        </div>
        <ChatBubble 
          message="Welcome to the team chat!" 
          position="left"
          avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
        />
        <div class="text-center">
          <div class="inline-block bg-base-200 text-base-content px-4 py-2 rounded-full text-sm">
            Sarah is typing...
          </div>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};const d=["Default","UserMessage","WithAvatar","WithTimestamp","ColorVariants","Conversation","LongMessage","SystemMessage"];export{o as ColorVariants,n as Conversation,e as Default,r as LongMessage,i as SystemMessage,t as UserMessage,a as WithAvatar,s as WithTimestamp,d as __namedExportsOrder,g as default};
