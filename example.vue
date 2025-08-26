<template>
  <div class="p-8 space-y-8">
    <h1 class="text-3xl font-bold">Carousel v-model Example</h1>
    
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Current slide: {{ currentSlide + 1 }}</h2>
      
      <div class="flex gap-2">
        <button 
          v-for="(item, index) in carouselItems" 
          :key="index"
          @click="currentSlide = index"
          :class="[
            'btn btn-sm',
            currentSlide === index ? 'btn-primary' : 'btn-outline'
          ]"
        >
          {{ index + 1 }}
        </button>
      </div>
      
      <Carousel 
        v-model="currentSlide"
        :items="carouselItems"
        @slide-change="handleSlideChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Carousel from './src/components/DataDisplay/Carousel.vue';

const currentSlide = ref(0);

const carouselItems = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
    alt: 'Mountain landscape',
    value: '1',
  },
  {
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=400&fit=crop',
    alt: 'Ocean waves',
    value: '2',
  },
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
    alt: 'Forest path',
    value: '3',
  },
];

const handleSlideChange = (index: number, item: any) => {
  console.log('Slide changed to:', index + 1, 'Item:', item);
};
</script>
