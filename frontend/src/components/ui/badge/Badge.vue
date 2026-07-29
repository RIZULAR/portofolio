<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20',
        secondary: 'border-slate-700 bg-slate-800/80 text-slate-300 hover:bg-slate-700',
        outline: 'border-slate-700 text-slate-300',
        gradient: 'border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

interface Props {
  variant?: VariantProps<typeof badgeVariants>['variant'];
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), props.class)">
    <slot />
  </div>
</template>
