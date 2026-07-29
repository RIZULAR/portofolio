<script setup lang="ts">
import { computed } from 'vue';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40',
        destructive: 'bg-red-500 text-white hover:bg-red-600 shadow-md shadow-red-500/20',
        outline: 'border border-slate-700 bg-slate-900/60 backdrop-blur-md text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-500',
        secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700',
        ghost: 'text-slate-300 hover:bg-slate-800/80 hover:text-white',
        link: 'text-cyan-400 underline-offset-4 hover:underline',
        glow: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        sm: 'h-9 rounded-lg px-3 text-xs',
        lg: 'h-12 rounded-xl px-8 text-base',
        icon: 'h-10 w-10 rounded-xl'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

interface Props {
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
  class?: string;
  as?: string;
  href?: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button'
});

const comp = computed(() => (props.href ? 'a' : props.as));
</script>

<template>
  <component
    :is="comp"
    :href="props.href"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </component>
</template>
