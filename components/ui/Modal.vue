<script setup lang="ts">
const props = withDefaults(defineProps<{ modelValue: boolean; title?: string }>(), {
  modelValue: false,
  title: ''
})
const emit = defineEmits<{ (e:'update:modelValue', v:boolean):void }>()

function close() { emit('update:modelValue', false) }
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 z-[100]">
      <div class="absolute inset-0 bg-black/40" @click="close"></div>

      <div
        role="dialog" aria-modal="true"
        class="absolute left-1/2 top-1/2 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl">
        <div class="flex items-center justify-between px-5 py-4 border-b">
          <h3 class="text-base font-semibold">{{ title }}</h3>
          <button class="p-1.5 rounded-md hover:bg-slate-100" @click="close">✕</button>
        </div>
        <div class="p-5">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>
