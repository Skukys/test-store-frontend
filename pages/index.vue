<script setup lang="ts">
const { data } = await useFetch('http://localhost:8000/api/fabricator')
</script>

<template>
  <h1>Производители</h1>
  <hr>
  <div class="cards">
    <nuxt-link :to="`/${item.alias}`" class="card" v-for="item in data">
      <h3>{{item.name}}</h3>
      <span>Alias: {{item.alias}}</span>
      <p>{{item.description}}</p>
    </nuxt-link>
  </div>
</template>

<style>
  .cards{
    display: flex;
    flex-wrap: wrap;
  }

  .card{
    width: 200px;
    height: 200px;
    border: none;
    padding: 20px;
    box-shadow: 2px 2px 20px rgba(192, 192, 192, 0.73);
    border-radius: 15px;
    cursor: pointer;
    margin: 20px 10px;
    text-decoration: none !important;
    overflow: hidden;
  }

  .card h3{
    font-size: 20px;
    min-height: 75px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;
  }

  .card span{
    font-size: 10px;
  }

  .card p{
    font-size: 12px;
  }
</style>