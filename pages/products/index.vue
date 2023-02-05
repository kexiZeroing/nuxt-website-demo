<template>
  <div>
    <h2 class="font-bold mb-5">All Products</h2>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })
  
  const { data: products } = await useFetch('https://fakestoreapi.com/products')

  useHead({
    title: 'Hello Nuxt | Products',
  })
</script>

<style scoped>

</style>
