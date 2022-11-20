<template>
  <div class="py-6">
    <NuxtPage />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'theme-color', content: '#294C70' },
  ]
})
</script>