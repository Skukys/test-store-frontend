<script setup lang="ts">
const route = useRoute()
let vendorAlias = route.params.vendor_alias
let modelAlias = route.params.model_alias
let productAlias = route.params.product_alias
const { data } = await useFetch(`http://localhost:8000/api/product-single?fabricator=${vendorAlias}&model=${modelAlias}&product=${productAlias}`)
</script>

<template>
  <h1>{{data.name}}</h1>
  <hr>
  <div class="cards">
    <div class="card">
      <h3>{{data.name}}</h3>
      <span>Alias: {{data.alias}}</span>
      <i>Width: {{data.width}}</i>
      <i>Height: {{data.height}}</i>
      <i>Diameter: {{data.diameter}}</i>
    </div>
  </div>
</template>

<style scoped>

</style>