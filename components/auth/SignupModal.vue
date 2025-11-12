<script setup lang="ts">
const open = defineModel<boolean>({ default: false })
const name  = ref('')
const email = ref('')
const loading = ref(false)
const error   = ref('')
const success = ref(false)

const { post } = useApi()

async function submit() {
  error.value = ''; success.value = false
  if (!name.value || !email.value) { error.value = 'Completa nombre y correo.'; return }

  loading.value = true
  try {
    await post('/api/subscribe', { name: name.value, email: email.value })
    success.value = true
    // Limpia y cierra después de un pequeño delay
    setTimeout(() => { open.value = false; name.value=''; email.value=''; success.value=false }, 1000)
  } catch (e: any) {
    error.value = e?.data?.message || 'Ocurrió un error al crear la cuenta.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Modal v-model="open" title="Crear cuenta">
    <form @submit.prevent="submit" class="space-y-4">
      <div>
        <label class="text-sm font-medium text-slate-700">Nombre</label>
        <input v-model="name" type="text" class="mt-1 w-full rounded-lg border px-3 py-2 outline-none ring-brand/20 focus:ring-2" />
      </div>
      <div>
        <label class="text-sm font-medium text-slate-700">Email</label>
        <input v-model="email" type="email" class="mt-1 w-full rounded-lg border px-3 py-2 outline-none ring-brand/20 focus:ring-2" />
      </div>

      <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
      <p v-if="success" class="text-sm text-emerald-600">¡Cuenta creada! Te enviamos un correo de confirmación.</p>

      <div class="flex justify-end gap-3 pt-1">
        <button type="button" class="rounded-full border px-4 py-2 hover:bg-slate-50" @click="open=false">Cancelar</button>
        <button type="submit" :disabled="loading" class="rounded-full bg-[#2557D6] px-4 py-2 text-white hover:bg-[#1f4cc0] disabled:opacity-60">
          {{ loading ? 'Creando…' : 'Crear cuenta' }}
        </button>
      </div>
    </form>
  </Modal>
</template>
