<template>
  <div>
    <header class="bg-gray-100">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <h1 class="font-bold text-lg">Hello Nuxt</h1>
        <ul class="flex gap-4 items-center">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="container mx-auto p-4">
      <slot />  
    </div> 
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    text-decoration: underline;
  }
</style>
