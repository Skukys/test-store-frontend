<script setup lang="ts">
const route = useRoute()
let alias = route.params.vendor_alias
const config = useRuntimeConfig()
const { data } = await useFetch(config.public.baseURL + '/model?fabricator='+alias)
</script>

<template>
  <h1>Модели</h1>
  <hr>
  <div class="cards">
    <nuxt-link :to="`/${alias}/${item.alias}`" class="card" v-for="item in data">
      <h3>{{item.name}}</h3>
      <span>Alias: {{item.alias}}</span>
      <p>{{item.description}}</p>
    </nuxt-link>
  </div>
</template>

<style scoped>

</style>