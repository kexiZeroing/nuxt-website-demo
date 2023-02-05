<template>
  <div>
    <h2>About</h2>
    <div>data: {{ data }}</div>
  </div>
</template>

<script setup>
  // get
  const { data } = await useFetch('/api/test?name=James')
  // post
  // const { data } = await useFetch('/api/test', {
  //   method: 'post',
  //   body: { name: 'James' }
  // })
</script>

<style scoped>

</style>
