<template>
  <div class="mt-7 mx-auto text-center">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-5xl">Ooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn my-7" @click="handleError">Go Home</button>
  </div>
</template>

<script setup>
  defineProps(['error'])

  const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>