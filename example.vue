<template>
  <div class="p-8 space-y-8">
    <h1 class="text-3xl font-bold">Accordion openItem Example</h1>
    
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Currently open item: {{ openItem || 'None' }}</h2>
      
      <div class="flex gap-2">
        <button 
          v-for="item in accordionItems" 
          :key="item.value"
          @click="openItem = item.value"
          :class="[
            'btn btn-sm',
            openItem === item.value ? 'btn-primary' : 'btn-outline'
          ]"
        >
          {{ item.title }}
        </button>
        <button 
          @click="openItem = null"
          class="btn btn-sm btn-ghost"
        >
          Close All
        </button>
      </div>
      
      <Accordion 
        v-model="openItem"
        :items="accordionItems"
        @item-toggle="handleItemToggle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Accordion from './src/components/DataDisplay/Accordion.vue';

const openItem = ref('1');

const accordionItems = [
  {
    value: '1',
    title: 'What is your return policy?',
    content: 'We offer a 30-day return policy for all unused items in original packaging. Return shipping is free for defective items.',
  },
  {
    value: '2',
    title: 'How long does shipping take?',
    content: 'Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.',
  },
  {
    value: '3',
    title: 'Do you ship internationally?',
    content: 'Yes, we ship to over 50 countries worldwide. International shipping times vary by location.',
  },
];

const handleItemToggle = (item: any, index: number, isOpen: boolean) => {
  console.log('Item toggled:', item.title, 'Index:', index, 'Is open:', isOpen);
};
</script>
