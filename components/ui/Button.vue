<script setup lang="ts">
const props = withDefaults(defineProps<{ variant?: 'primary'|'outline'; as?: string }>(), {
  variant: 'outline',
  as: 'button'
})
</script>

<template>
  <component
    :is="props.as"
    class="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition"
    :class="{
      'bg-white text-[#2557D6] hover:bg-slate-50': props.variant==='primary',
      'border border-slate-400 text-slate-900 hover:bg-slate-50': props.variant==='outline'
    }"
  >
    <slot />
  </component>
</template>
