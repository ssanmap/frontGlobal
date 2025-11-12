<script setup lang="ts">
const signupOpen = useState('signupOpen', () => false)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <SiteHeader />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <!-- Modal global -->
    <SignupModal v-model="signupOpen" />
  </div>
</template>
