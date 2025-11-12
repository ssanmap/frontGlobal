<script setup lang="ts">
const props = defineProps<{ code: 'CLP'|'PEN'|'USD'; class?: string }>()
const srcMap = {
  CLP: '/assets/clp.svg',
  PEN: '/assets/pen.svg',
  USD: '/assets/usd.svg',
}
</script>

<template>
  <img
    :src="srcMap[props.code]"
    :alt="`Flag of ${props.code}`"
    :class="['rounded-[2px] ring-1 ring-slate-300 object-cover', props.class]"
  />
</template>
