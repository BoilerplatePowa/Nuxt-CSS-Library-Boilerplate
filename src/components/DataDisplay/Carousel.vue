<template>
  <div :class="wrapperClasses">
    <!-- Top Controls -->
    <div v-if="showArrows && controllerPosition === 'top'" class="carousel-controls carousel-controls-top">
      <div class="carousel-nav prev" @click="goToPrevious">
        <slot name="prev-arrow">
          <button :class="getArrowButtonClasses()">❮</button>
        </slot>
      </div>
      <div class="carousel-nav next" @click="goToNext">
        <slot name="next-arrow">
          <button :class="getArrowButtonClasses()">❯</button>
        </slot>
      </div>
    </div>

    <!-- Main Carousel Container -->
    <div :class="carouselClasses">
      <!-- Side Controls -->
      <div v-if="showArrows && controllerPosition === 'sides'" class="carousel-controls-sides">
        <div class="carousel-nav prev" @click="goToPrevious">
          <slot name="prev-arrow">
            <button class="carousel-side-btn">❮</button>
          </slot>
        </div>
        <div class="carousel-nav next" @click="goToNext">
          <slot name="next-arrow">
            <button class="carousel-side-btn">❯</button>
          </slot>
        </div>
      </div>

      <!-- Carousel Content -->
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
    </div>

    <!-- Pagination Indicators -->
    <div v-if="showIndicators" class="carousel-pagination-external">
      <!-- Numbers Pagination -->
      <div v-if="paginationType === 'numbers'" class="carousel-pagination-numbers">
        <button
          v-for="(item, index) in items"
          :key="`pagination-${index}`"
          :class="getPaginationClasses(index)"
          @click="goToSlide(index)"
        >
          {{ index + 1 }}
        </button>
      </div>

      <!-- Dots Pagination -->
      <div v-else-if="paginationType === 'dots'" class="carousel-pagination-dots">
        <button
          v-for="(item, index) in items"
          :key="`pagination-${index}`"
          :class="getDotClasses(index)"
          @click="goToSlide(index)"
        >
          <span class="sr-only">Go to slide {{ index + 1 }}</span>
        </button>
      </div>

      <!-- Line Pagination -->
      <div v-else-if="paginationType === 'line'" class="carousel-pagination-line">
        <div class="pagination-line-container">
          <div
            v-for="(item, index) in items"
            :key="`pagination-${index}`"
            :class="getLineClasses(index)"
            @click="goToSlide(index)"
          >
            <div class="pagination-line-fill" :style="getLineFillStyle(index)"></div>
          </div>
        </div>
      </div>

      <!-- Default Indicators (fallback) -->
      <div v-else class="carousel-indicators">
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

    <!-- Bottom Controls -->
    <div v-if="showArrows && controllerPosition === 'bottom'" class="carousel-controls carousel-controls-bottom">
      <div class="carousel-nav prev" @click="goToPrevious">
        <slot name="prev-arrow">
          <button :class="getArrowButtonClasses()">❮</button>
        </slot>
      </div>
      
      <div class="carousel-nav next" @click="goToNext">
        <slot name="next-arrow">
          <button :class="getArrowButtonClasses()">❯</button>
        </slot>
      </div>
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
  controllerPosition?: 'top' | 'bottom' | 'sides';
  paginationType?: 'numbers' | 'dots' | 'line' | 'default';
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
  controllerPosition: 'bottom',
  paginationType: 'dots',
});

const emit = defineEmits<{
  'update:modelValue': [value: number];
  'slide-change': [index: number, item: CarouselItem];
  'item-click': [item: CarouselItem, index: number, event: Event];
}>();

const currentIndex = ref(props.modelValue);
let autoplayTimer: NodeJS.Timeout | null = null;

const wrapperClasses = computed(() => {
  const baseClasses = ['carousel-wrapper', 'relative'];

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

const getArrowButtonClasses = (): string => {
  return 'btn btn-sm btn-square';
};

const getPaginationClasses = (index: number): string => {
  const classes = ['btn', 'btn-xs', 'btn-circle'];

  if (index === currentIndex.value) {
    classes.push('btn-active');
  } else {
    classes.push('btn-outline');
  }

  return classes.join(' ');
};

const getDotClasses = (index: number): string => {
  const classes = ['btn', 'btn-circle', 'btn-xs'];

  if (index === currentIndex.value) {
    classes.push('btn-active');
  } else {
    classes.push('btn-outline');
  }

  return classes.join(' ');
};

const getLineClasses = (index: number): string => {
  const classes = ['pagination-line'];

  if (index === currentIndex.value) {
    classes.push('bg-primary');
  }

  return classes.join(' ');
};

const getLineFillStyle = (index: number) => {
  if (index === currentIndex.value) {
    return { width: '100%' };
  } else if (index < currentIndex.value) {
    return { width: '100%' };
  } else {
    return { width: '0%' };
  }
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

<!-- Styles are now in src/assets/css/carousel.css -->
