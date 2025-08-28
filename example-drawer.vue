<template>
  <div class="min-h-screen bg-base-200 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">Drawer Component Example</h1>
      <p class="mb-8 text-lg">
        This example demonstrates the updated Drawer component using Vue 3.4's 
        <code class="bg-base-300 px-2 py-1 rounded">defineModel()</code> macro.
      </p>

      <!-- Basic Drawer Example -->
      <div class="card bg-base-100 shadow-xl mb-8">
        <div class="card-body">
          <h2 class="card-title">Basic Drawer</h2>
          <p>Simple drawer with v-model binding:</p>
          <div class="mt-4">
            <Drawer v-model="isBasicOpen">
              <template #content="{ toggle }">
                <div class="p-4">
                  <p class="mb-4">Drawer is {{ isBasicOpen ? 'open' : 'closed' }}</p>
                  <button @click="toggle" class="btn btn-primary">
                    {{ isBasicOpen ? 'Close' : 'Open' }} Drawer
                  </button>
                </div>
              </template>
              
              <template #drawer>
                <div class="p-6">
                  <h3 class="text-lg font-bold mb-4">Basic Drawer Content</h3>
                  <ul class="menu">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                  </ul>
                </div>
              </template>
            </Drawer>
          </div>
        </div>
      </div>

      <!-- Right Side Drawer Example -->
      <div class="card bg-base-100 shadow-xl mb-8">
        <div class="card-body">
          <h2 class="card-title">Right Side Drawer</h2>
          <p>Drawer that slides in from the right:</p>
          <div class="mt-4">
            <Drawer v-model="isRightOpen" position="right" width="lg">
              <template #content="{ toggle }">
                <div class="p-4">
                  <p class="mb-4">Right drawer is {{ isRightOpen ? 'open' : 'closed' }}</p>
                  <button @click="toggle" class="btn btn-secondary">
                    {{ isRightOpen ? 'Close' : 'Open' }} Right Drawer
                  </button>
                </div>
              </template>
              
              <template #drawer>
                <div class="p-6">
                  <h3 class="text-lg font-bold mb-4">Settings Panel</h3>
                  <div class="space-y-4">
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <span class="label-text">Dark Mode</span>
                        <input type="checkbox" class="toggle" />
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <span class="label-text">Notifications</span>
                        <input type="checkbox" class="toggle" checked />
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <span class="label-text">Auto-save</span>
                        <input type="checkbox" class="toggle" />
                      </label>
                    </div>
                  </div>
                </div>
              </template>
            </Drawer>
          </div>
        </div>
      </div>

      <!-- Drawer with Events Example -->
      <div class="card bg-base-100 shadow-xl mb-8">
        <div class="card-body">
          <h2 class="card-title">Drawer with Events</h2>
          <p>Listen to open/close events:</p>
          <div class="mt-4">
            <Drawer 
              v-model="isEventOpen" 
              @open="onDrawerOpen" 
              @close="onDrawerClose"
            >
              <template #content="{ toggle }">
                <div class="p-4">
                  <p class="mb-4">Event drawer is {{ isEventOpen ? 'open' : 'closed' }}</p>
                  <button @click="toggle" class="btn btn-accent">
                    {{ isEventOpen ? 'Close' : 'Open' }} Event Drawer
                  </button>
                  
                  <div class="mt-4">
                    <h4 class="font-bold mb-2">Event Log:</h4>
                    <div class="bg-base-300 p-3 rounded max-h-32 overflow-y-auto">
                      <div v-for="(event, index) in eventLog" :key="index" class="text-sm">
                        {{ event }}
                      </div>
                      <div v-if="eventLog.length === 0" class="text-sm opacity-50">
                        No events yet
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              
              <template #drawer>
                <div class="p-6">
                  <h3 class="text-lg font-bold mb-4">Event Demo</h3>
                  <p>Open and close this drawer to see events logged.</p>
                </div>
              </template>
            </Drawer>
          </div>
        </div>
      </div>

      <!-- Persistent Drawer Example -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Persistent Drawer</h2>
          <p>Drawer that cannot be closed by clicking outside (desktop layout):</p>
          <div class="mt-4">
            <Drawer v-model="isPersistentOpen" persistent>
              <template #content>
                <div class="p-4">
                  <p class="mb-4">Persistent drawer is {{ isPersistentOpen ? 'open' : 'closed' }}</p>
                  <p class="text-sm opacity-70 mb-4">
                    This drawer stays open and cannot be closed by clicking outside or pressing Escape.
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="card bg-base-200 shadow">
                      <div class="card-body">
                        <h3 class="card-title">Card 1</h3>
                        <p>Some content here</p>
                      </div>
                    </div>
                    <div class="card bg-base-200 shadow">
                      <div class="card-body">
                        <h3 class="card-title">Card 2</h3>
                        <p>More content here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              
              <template #drawer>
                <div class="p-6">
                  <h3 class="text-lg font-bold mb-4">Persistent Navigation</h3>
                  <ul class="menu">
                    <li><a class="active">📊 Dashboard</a></li>
                    <li><a>📈 Analytics</a></li>
                    <li><a>👥 Users</a></li>
                    <li><a>📄 Reports</a></li>
                    <li><a>⚙️ Settings</a></li>
                  </ul>
                </div>
              </template>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Using Vue 3.4 defineModel() - no need to import ref, it's auto-imported in Nuxt
const isBasicOpen = ref(false);
const isRightOpen = ref(false);
const isEventOpen = ref(false);
const isPersistentOpen = ref(true); // Start open for persistent example

const eventLog = ref<string[]>([]);

const onDrawerOpen = () => {
  eventLog.value.push(`Drawer opened at ${new Date().toLocaleTimeString()}`);
};

const onDrawerClose = () => {
  eventLog.value.push(`Drawer closed at ${new Date().toLocaleTimeString()}`);
};
</script>
