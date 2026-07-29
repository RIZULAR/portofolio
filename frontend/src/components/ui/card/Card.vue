<script setup lang="ts">
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl text-slate-100 shadow-xl transition-all hover:border-slate-700/80',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
