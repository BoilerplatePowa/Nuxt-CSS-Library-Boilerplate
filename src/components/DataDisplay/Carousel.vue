<template>
  <div :class="carouselClasses">
    <div v-if="showArrows" class="carousel-nav prev" @click="goToPrevious">
      <slot name="prev-arrow">
        <button class="btn btn-circle btn-sm">❮</button>
      </slot>
    </div>

    <div class="carousel-container" :style="carouselStyle">
      <slot>
        <div
          v-for="(item, index) in items"
          :key="getItemKey(item, index)"
          :class="getItemClasses(index)"
          @click="handleItemClick(item, index, $event)"
        >
          <slot
            :name="`item-${index}`"
            :item="item"
            :index="index"
            :isActive="index === currentIndex"
          >
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.alt || `Slide ${index + 1}`"
              class="w-full h-full object-cover"
            />
            <div v-else class="flex items-center justify-center h-full bg-base-200">
              <span class="text-base-content/70">{{ item.content || `Slide ${index + 1}` }}</span>
            </div>
          </slot>
        </div>
      </slot>
    </div>

    <div v-if="showArrows" class="carousel-nav next" @click="goToNext">
      <slot name="next-arrow">
        <button class="btn btn-circle btn-sm">❯</button>
      </slot>
    </div>

    <div v-if="showIndicators" class="carousel-indicators">
      <button
        v-for="(item, index) in items"
        :key="`indicator-${index}`"
        :class="getIndicatorClasses(index)"
        @click="goToSlide(index)"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

interface CarouselItem {
  image?: string;
  content?: string;
  alt?: string;
  value?: string | number;
  href?: string;
}

interface Props {
  items?: CarouselItem[];
  modelValue?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  loop?: boolean;
  showArrows?: boolean;
  showIndicators?: boolean;
  variant?: 'default' | 'full-width' | 'center' | 'vertical';
  itemWidth?: string;
  itemHeight?: string;
  gap?: string;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  modelValue: 0,
  autoplay: false,
  autoplayInterval: 3000,
  loop: true,
  showArrows: true,
  showIndicators: true,
  variant: 'default',
  itemWidth: '100%',
  itemHeight: '16rem',
  gap: '1rem',
});

const emit = defineEmits<{
  'update:modelValue': [value: number];
  'slide-change': [index: number, item: CarouselItem];
  'item-click': [item: CarouselItem, index: number, event: Event];
}>();

const currentIndex = ref(props.modelValue);
let autoplayTimer: NodeJS.Timeout | null = null;

const carouselClasses = computed(() => {
  const baseClasses = ['carousel', 'relative'];

  // Variant classes
  if (props.variant === 'full-width') {
    baseClasses.push('w-full');
  } else if (props.variant === 'center') {
    baseClasses.push('carousel-center');
  } else if (props.variant === 'vertical') {
    baseClasses.push('carousel-vertical');
  }

  // Layout classes
  baseClasses.push('overflow-hidden', 'rounded-box');

  return baseClasses.join(' ');
});

const carouselStyle = computed(() => {
  const style: Record<string, string> = {
    display: 'flex',
    transition: 'transform 0.3s ease-in-out',
    height: props.itemHeight,
  };

  if (props.variant === 'vertical') {
    style.flexDirection = 'column';
    style.transform = `translateY(-${currentIndex.value * 100}%)`;
  } else {
    style.transform = `translateX(-${currentIndex.value * 100}%)`;
    style.gap = props.gap;
  }

  return style;
});

const getItemClasses = (index: number): string => {
  const classes = ['carousel-item', 'flex-shrink-0'];

  if (props.variant === 'full-width') {
    classes.push('w-full');
  } else {
    classes.push('min-w-full');
  }

  if (index === currentIndex.value) {
    classes.push('carousel-item-active');
  }

  return classes.join(' ');
};

const getIndicatorClasses = (index: number): string => {
  const classes = ['btn', 'btn-xs'];

  if (index === currentIndex.value) {
    classes.push('btn-active');
  } else {
    classes.push('btn-outline');
  }

  return classes.join(' ');
};

const getItemKey = (item: CarouselItem, index: number): string => {
  return item.value?.toString() || index.toString();
};

const goToSlide = (index: number) => {
  if (index < 0 || index >= props.items.length) return;

  currentIndex.value = index;
  emit('update:modelValue', index);
  emit('slide-change', index, props.items[index]);
  
  resetAutoplay();
};

const goToNext = () => {
  let nextIndex = currentIndex.value + 1;
  
  if (nextIndex >= props.items.length) {
    nextIndex = props.loop ? 0 : props.items.length - 1;
  }
  
  goToSlide(nextIndex);
};

const goToPrevious = () => {
  let prevIndex = currentIndex.value - 1;
  
  if (prevIndex < 0) {
    prevIndex = props.loop ? props.items.length - 1 : 0;
  }
  
  goToSlide(prevIndex);
};

const handleItemClick = (item: CarouselItem, index: number, event: Event) => {
  emit('item-click', item, index, event);
};

const startAutoplay = () => {
  if (!props.autoplay || props.items.length <= 1) return;
  
  autoplayTimer = setInterval(() => {
    goToNext();
  }, props.autoplayInterval);
};

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
};

const resetAutoplay = () => {
  stopAutoplay();
  startAutoplay();
};

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault();
      goToPrevious();
      break;
    case 'ArrowRight':
      event.preventDefault();
      goToNext();
      break;
  }
};

onMounted(() => {
  if (props.autoplay) {
    startAutoplay();
  }
  
  // Add keyboard event listener
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  stopAutoplay();
  window.removeEventListener('keydown', handleKeydown);
});

// Watch for external model value changes
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== currentIndex.value) {
      goToSlide(newValue);
    }
  }
);
</script>

<style scoped lang="postcss">
/* DaisyUI handles most carousel styling */
.carousel-nav {
  @apply absolute top-1/2 transform -translate-y-1/2 z-10;
}

.carousel-nav.prev {
  @apply left-2;
}

.carousel-nav.next {
  @apply right-2;
}

.carousel-indicators {
  @apply absolute bottom-4 left-1/2 transform -translate-x-1/2;
  @apply flex gap-2;
}

.carousel-container {
  @apply w-full;
}
</style>
