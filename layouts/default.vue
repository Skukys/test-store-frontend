<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: Navbar
}
</script>

<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .container{
    margin: 60px auto;
  }
</style>