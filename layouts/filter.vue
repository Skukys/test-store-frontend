<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: Navbar,
  data(){
    return {
      formData: {
        h: null,
        w: null,
        d: null,
      }
    }
  },
  methods: {
    filter(){
      let path = ''
      for (let key in this.formData) {
        if(this.formData[key] && !isNaN(this.formData[key])) path += '/' + key + this.formData[key]
      }
      this.$router.push('/filter' + path)
    },
    clearFilter(){
      for (let key in this.formData) this.formData[key] = null
      this.$router.push('/filter')
    }
  },
  mounted() {
    const route = useRoute()
    let parameters = route.params.parameters
    if(parameters?.length > 0) {
      parameters.forEach(item => {
        let firstLetter = item.substring(0,1)
        let num = item.substring(1)
        this.formData[firstLetter] = num
      })
    }
  }
}
</script>

<template>
  <div>
    <Navbar></Navbar>
    <form @submit.prevent="filter()" class="filter">
      <label>
        Ширина
        <input type="number" v-model="formData.w">
      </label>
      <label>
        Высота
        <input type="number" v-model="formData.h">
      </label>
      <label>
        Диаметр
        <input type="number" v-model="formData.d">
      </label>
      <div class="filter-buttons">
        <button class="btn btn-primary m-1">Поиск</button>
        <button class="btn btn-danger" @click.prevent="clearFilter()">Сброс</button>
      </div>
    </form>

    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container{
  margin: 60px auto;
}

.filter{
  max-width: 936px;
  display: flex;
  flex-direction: column;
  margin: 60px auto;
}

.filter input{
  margin: 10px 0;
}
</style>