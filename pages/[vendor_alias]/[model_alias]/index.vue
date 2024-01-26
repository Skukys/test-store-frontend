<script setup lang="ts">
const route = useRoute()
let vendorAlias = route.params.vendor_alias
let modelAlias = route.params.model_alias
const { data } = await useFetch(`http://localhost:8000/api/product-page?fabricator=${vendorAlias}&model=${modelAlias}`)
</script>

<template>
  <h1>Товары</h1>
  <hr>
  <div class="cards">
    <nuxt-link :to="`/${vendorAlias}/${modelAlias}/${item.alias}`" class="card" v-for="item in data">
      <h3>{{item.name}}</h3>
      <span>Alias: {{item.alias}}</span>
        <i>Width: {{item.width}}</i>
        <i>Height: {{item.height}}</i>
        <i>Diameter: {{item.diameter}}</i>
    </nuxt-link>
  </div>
</template>

<style scoped>

</style>