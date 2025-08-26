<template>
  <div class="p-8 space-y-8">
    <h1 class="text-3xl font-bold">Swap isOn Example</h1>
    
    <div class="space-y-6">
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Theme Toggle</h2>
        <div class="flex items-center gap-4">
          <Swap v-model="isThemeOn">
            <template #on>
              <div class="text-4xl">🌞</div>
            </template>
            <template #off>
              <div class="text-4xl">🌙</div>
            </template>
          </Swap>
          <span class="text-lg">Theme: {{ isThemeOn ? 'Light' : 'Dark' }}</span>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Volume Control</h2>
        <div class="flex items-center gap-4">
          <Swap v-model="isVolumeOn" variant="rotate">
            <template #on>
              <div class="text-3xl">🔊</div>
            </template>
            <template #off>
              <div class="text-3xl">🔇</div>
            </template>
          </Swap>
          <span class="text-lg">Volume: {{ isVolumeOn ? 'On' : 'Muted' }}</span>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Like Button</h2>
        <div class="flex items-center gap-4">
          <Swap v-model="isLiked">
            <template #on>
              <div class="text-4xl text-red-500">❤️</div>
            </template>
            <template #off>
              <div class="text-4xl text-gray-400">🤍</div>
            </template>
          </Swap>
          <span class="text-lg">Liked: {{ isLiked ? 'Yes' : 'No' }}</span>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">External Controls</h2>
        <div class="flex gap-2">
          <button 
            @click="isThemeOn = true"
            class="btn btn-sm btn-outline"
          >
            Set Light Theme
          </button>
          <button 
            @click="isThemeOn = false"
            class="btn btn-sm btn-outline"
          >
            Set Dark Theme
          </button>
          <button 
            @click="isVolumeOn = !isVolumeOn"
            class="btn btn-sm btn-outline"
          >
            Toggle Volume
          </button>
          <button 
            @click="isLiked = !isLiked"
            class="btn btn-sm btn-outline"
          >
            Toggle Like
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swap from './src/components/Actions/Swap.vue';

const isThemeOn = ref(false);
const isVolumeOn = ref(true);
const isLiked = ref(false);
</script>
