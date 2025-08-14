import{d as x,c as p,a as y,b as m,e as C,n as g,o as T,s as w,t as S}from"./iframe-BrsdVXSx.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-D9Z9MdNV.js";const v=x({__name:"CodeMockup",props:{code:{default:'console.log("Hello, World!");'},variant:{default:"default"},language:{},showLineNumbers:{type:Boolean,default:!1}},setup(b){const t=b,f=p(()=>{const e=["mockup-code"];return t.variant==="border"?e.push("border"):t.variant==="bg"&&(e.push("bg-primary"),e.push("text-primary-content")),e.join(" ")}),h=p(()=>{const e=[];return t.showLineNumbers&&e.push("line-numbers"),t.language&&e.push(`language-${t.language}`),e.join(" ")});return(e,k)=>(T(),y("div",{class:g(f.value)},[m("pre",{class:g(h.value)},[m("code",null,[C(e.$slots,"default",{},()=>[w(S(e.code),1)],!0)])],2)],2))}}),u=E(v,[["__scopeId","data-v-e5130da3"]]);v.__docgenInfo={exportName:"default",displayName:"CodeMockup",description:"",tags:{},props:[{name:"code",required:!1,type:{name:"string"},defaultValue:{func:!1,value:`'console.log("Hello, World!");'`}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"border"'},{name:'"bg"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"language",required:!1,type:{name:"string"}},{name:"showLineNumbers",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/Nuxt-CSS-Library-Boilerplate/Nuxt-CSS-Library-Boilerplate/src/components/Mockup/CodeMockup.vue"]};const U={title:"Mockup/CodeMockup",component:u,parameters:{layout:"padded"},argTypes:{variant:{control:{type:"select"},options:["default","border","bg"]},language:{control:{type:"text"}},showLineNumbers:{control:{type:"boolean"}}}},s={args:{code:`function hello() {
  console.log("Hello, World!");
}`}},o={args:{language:"javascript",code:`// Vue 3 Composition API Example
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    
    function increment() {
      count.value++
    }
    
    return {
      count,
      doubleCount,
      increment
    }
  }
}`}},a={args:{language:"typescript",code:`interface User {
  id: number
  name: string
  email: string
  isActive: boolean
}

class UserService {
  private users: User[] = []
  
  addUser(user: User): void {
    this.users.push(user)
  }
  
  findUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id)
  }
  
  getActiveUsers(): User[] {
    return this.users.filter(user => user.isActive)
  }
}`}},n={args:{language:"html",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Vue App</title>
</head>
<body>
  <div id="app">
    <header class="navbar">
      <h1>{{ title }}</h1>
    </header>
    
    <main class="container">
      <section v-for="item in items" :key="item.id">
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
      </section>
    </main>
  </div>
  
  <script src="/src/main.js"><\/script>
</body>
</html>`}},r={args:{language:"css",code:`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .container {
    padding: 0 0.5rem;
  }
}`}},i={render:()=>({components:{CodeMockup:u},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <CodeMockup 
            language="python"
            :code="\`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))\`"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Border</h3>
          <CodeMockup 
            variant="border"
            language="sql"
            :code="\`SELECT users.name, COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE users.created_at >= '2024-01-01'
GROUP BY users.id, users.name
ORDER BY order_count DESC;\`"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Background</h3>
          <CodeMockup 
            variant="bg"
            language="bash"
            :code="\`# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test\`"
          />
        </div>
      </div>
    `})},d={args:{language:"vue",showLineNumbers:!0,code:`<template>
  <div class="user-profile">
    <img :src="user.avatar" :alt="user.name" class="avatar" />
    <div class="user-info">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <badge :variant="user.status">{{ user.status }}</badge>
    </div>
    <button @click="toggleFollow" :class="buttonClass">
      {{ isFollowing ? 'Unfollow' : 'Follow' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Badge from './Badge.vue'

interface User {
  id: number
  name: string
  email: string
  avatar: string
  status: 'online' | 'offline' | 'away'
}

const props = defineProps<{
  user: User
}>()

const isFollowing = ref(false)

const buttonClass = computed(() => ({
  'btn': true,
  'btn-primary': !isFollowing.value,
  'btn-outline': isFollowing.value
}))

function toggleFollow() {
  isFollowing.value = !isFollowing.value
}
<\/script>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  flex: 1;
}
</style>`}},l={render:()=>({components:{CodeMockup:u},template:`
      <div class="space-y-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-bold mb-4">Frontend (Vue)</h3>
            <CodeMockup 
              language="vue"
              :code="\`<template>
  <div class="todo-app">
    <input 
      v-model="newTodo" 
      @keyup.enter="addTodo"
      placeholder="Add a todo..."
    />
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const todos = ref([])
const newTodo = ref('')

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value
    })
    newTodo.value = ''
  }
}
<\/script>\`"
            />
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-4">Backend (Node.js)</h3>
            <CodeMockup 
              language="javascript"
              :code="\`const express = require('express')
const app = express()

app.use(express.json())

let todos = []

app.get('/api/todos', (req, res) => {
  res.json(todos)
})

app.post('/api/todos', (req, res) => {
  const todo = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  }
  todos.push(todo)
  res.status(201).json(todo)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})\`"
            />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Database (SQL)</h3>
          <CodeMockup 
            language="sql"
            variant="border"
            :code="\`CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_todos_completed ON todos(completed);

INSERT INTO todos (text) VALUES 
  ('Learn Vue 3'),
  ('Build a todo app'),
  ('Deploy to production');\`"
          />
        </div>
      </div>
    `})},c={render:()=>({components:{CodeMockup:u},template:`
      <div class="max-w-4xl mx-auto space-y-8">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-4">Building a Vue Component</h2>
          <p class="text-gray-600">Step-by-step guide to creating a reusable button component</p>
        </div>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-bold mb-3">Step 1: Basic Template</h3>
            <CodeMockup 
              language="vue"
              :code="\`<template>
  <button class="btn">
    <slot />
  </button>
</template>\`"
            />
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-3">Step 2: Add Props</h3>
            <CodeMockup 
              language="vue"
              :code="\`<template>
  <button :class="buttonClasses" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false
})
<\/script>\`"
            />
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-3">Step 3: Add Computed Classes</h3>
            <CodeMockup 
              language="vue"
              :code="\`<script setup lang="ts">
import { computed } from 'vue'

// ... props definition

const buttonClasses = computed(() => {
  const classes = ['btn']
  
  // Variant classes
  if (props.variant === 'primary') {
    classes.push('btn-primary')
  } else if (props.variant === 'secondary') {
    classes.push('btn-secondary')
  } else if (props.variant === 'outline') {
    classes.push('btn-outline')
  }
  
  // Size classes
  if (props.size === 'sm') {
    classes.push('btn-sm')
  } else if (props.size === 'lg') {
    classes.push('btn-lg')
  }
  
  return classes.join(' ')
})
<\/script>\`"
            />
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-3">Step 4: Usage Example</h3>
            <CodeMockup 
              language="vue"
              :code="\`<template>
  <div class="demo">
    <Button variant="primary" size="lg">
      Primary Button
    </Button>
    
    <Button variant="outline" @click="handleClick">
      Outline Button
    </Button>
    
    <Button variant="secondary" :disabled="loading">
      {{ loading ? 'Loading...' : 'Submit' }}
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from './Button.vue'

const loading = ref(false)

function handleClick() {
  console.log('Button clicked!')
}
<\/script>\`"
            />
          </div>
        </div>
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    code: \`function hello() {
  console.log("Hello, World!");
}\`
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'javascript',
    code: \`// Vue 3 Composition API Example
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    
    function increment() {
      count.value++
    }
    
    return {
      count,
      doubleCount,
      increment
    }
  }
}\`
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'typescript',
    code: \`interface User {
  id: number
  name: string
  email: string
  isActive: boolean
}

class UserService {
  private users: User[] = []
  
  addUser(user: User): void {
    this.users.push(user)
  }
  
  findUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id)
  }
  
  getActiveUsers(): User[] {
    return this.users.filter(user => user.isActive)
  }
}\`
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'html',
    code: \`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Vue App</title>
</head>
<body>
  <div id="app">
    <header class="navbar">
      <h1>{{ title }}</h1>
    </header>
    
    <main class="container">
      <section v-for="item in items" :key="item.id">
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
      </section>
    </main>
  </div>
  
  <script src="/src/main.js"><\/script>
</body>
</html>\`
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'css',
    code: \`.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .container {
    padding: 0 0.5rem;
  }
}\`
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CodeMockup
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Default</h3>
          <CodeMockup 
            language="python"
            :code="\\\`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))\\\`"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Border</h3>
          <CodeMockup 
            variant="border"
            language="sql"
            :code="\\\`SELECT users.name, COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE users.created_at >= '2024-01-01'
GROUP BY users.id, users.name
ORDER BY order_count DESC;\\\`"
          />
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">With Background</h3>
          <CodeMockup 
            variant="bg"
            language="bash"
            :code="\\\`# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test\\\`"
          />
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'vue',
    showLineNumbers: true,
    code: \`<template>
  <div class="user-profile">
    <img :src="user.avatar" :alt="user.name" class="avatar" />
    <div class="user-info">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <badge :variant="user.status">{{ user.status }}</badge>
    </div>
    <button @click="toggleFollow" :class="buttonClass">
      {{ isFollowing ? 'Unfollow' : 'Follow' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Badge from './Badge.vue'

interface User {
  id: number
  name: string
  email: string
  avatar: string
  status: 'online' | 'offline' | 'away'
}

const props = defineProps<{
  user: User
}>()

const isFollowing = ref(false)

const buttonClass = computed(() => ({
  'btn': true,
  'btn-primary': !isFollowing.value,
  'btn-outline': isFollowing.value
}))

function toggleFollow() {
  isFollowing.value = !isFollowing.value
}
<\/script>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  flex: 1;
}
</style>\`
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CodeMockup
    },
    template: \`
      <div class="space-y-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-bold mb-4">Frontend (Vue)</h3>
            <CodeMockup 
              language="vue"
              :code="\\\`<template>
  <div class="todo-app">
    <input 
      v-model="newTodo" 
      @keyup.enter="addTodo"
      placeholder="Add a todo..."
    />
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const todos = ref([])
const newTodo = ref('')

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value
    })
    newTodo.value = ''
  }
}
<\/script>\\\`"
            />
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-4">Backend (Node.js)</h3>
            <CodeMockup 
              language="javascript"
              :code="\\\`const express = require('express')
const app = express()

app.use(express.json())

let todos = []

app.get('/api/todos', (req, res) => {
  res.json(todos)
})

app.post('/api/todos', (req, res) => {
  const todo = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  }
  todos.push(todo)
  res.status(201).json(todo)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})\\\`"
            />
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-4">Database (SQL)</h3>
          <CodeMockup 
            language="sql"
            variant="border"
            :code="\\\`CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_todos_completed ON todos(completed);

INSERT INTO todos (text) VALUES 
  ('Learn Vue 3'),
  ('Build a todo app'),
  ('Deploy to production');\\\`"
          />
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CodeMockup
    },
    template: \`
      <div class="max-w-4xl mx-auto space-y-8">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-4">Building a Vue Component</h2>
          <p class="text-gray-600">Step-by-step guide to creating a reusable button component</p>
        </div>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-bold mb-3">Step 1: Basic Template</h3>
            <CodeMockup 
              language="vue"
              :code="\\\`<template>
  <button class="btn">
    <slot />
  </button>
</template>\\\`"
            />
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-3">Step 2: Add Props</h3>
            <CodeMockup 
              language="vue"
              :code="\\\`<template>
  <button :class="buttonClasses" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false
})
<\/script>\\\`"
            />
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-3">Step 3: Add Computed Classes</h3>
            <CodeMockup 
              language="vue"
              :code="\\\`<script setup lang="ts">
import { computed } from 'vue'

// ... props definition

const buttonClasses = computed(() => {
  const classes = ['btn']
  
  // Variant classes
  if (props.variant === 'primary') {
    classes.push('btn-primary')
  } else if (props.variant === 'secondary') {
    classes.push('btn-secondary')
  } else if (props.variant === 'outline') {
    classes.push('btn-outline')
  }
  
  // Size classes
  if (props.size === 'sm') {
    classes.push('btn-sm')
  } else if (props.size === 'lg') {
    classes.push('btn-lg')
  }
  
  return classes.join(' ')
})
<\/script>\\\`"
            />
          </div>
          
          <div>
            <h3 class="text-lg font-bold mb-3">Step 4: Usage Example</h3>
            <CodeMockup 
              language="vue"
              :code="\\\`<template>
  <div class="demo">
    <Button variant="primary" size="lg">
      Primary Button
    </Button>
    
    <Button variant="outline" @click="handleClick">
      Outline Button
    </Button>
    
    <Button variant="secondary" :disabled="loading">
      {{ loading ? 'Loading...' : 'Submit' }}
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from './Button.vue'

const loading = ref(false)

function handleClick() {
  console.log('Button clicked!')
}
<\/script>\\\`"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const L=["Default","JavaScript","TypeScript","HTML","CSS","Variants","WithLineNumbers","MultipleLanguages","CodeTutorial"];export{r as CSS,c as CodeTutorial,s as Default,n as HTML,o as JavaScript,l as MultipleLanguages,a as TypeScript,i as Variants,d as WithLineNumbers,L as __namedExportsOrder,U as default};
