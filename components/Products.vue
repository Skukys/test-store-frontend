<script setup>
const links = ref([])
let getPath = () => {
  const route = useRoute()
  let parameters = route.params.parameters
  let path = ''
  if (parameters?.length > 0) {
    parameters.forEach((item, id) => {
      let firstLetter = item.substring(0, 1)
      let num = item.substring(1)
      path += '&' + firstLetter + '=' + num
    })
  }
  return path
}
const page = ref(1);
const pending = ref(false)
const products = ref([])
const config = useRuntimeConfig()
const loadProducts = () => {
  pending.value = true

  $fetch( `/product?perPage=30${getPath()}`, {
    method: 'GET',
    baseURL: config.public.baseURL,
    params: {
      pageNumber: page.value,
    }
  }).then(response => {
    products.value = response.data
    pending.value = false;
    links.value = response.links
  });
}

onMounted(() => {
  loadProducts()
})

let perPage = () => {
  if (page.value !== 1) page.value--
  loadProducts()
}
let nextPage = (last) => {
  if (page.value < last) page.value++
  loadProducts()
}
let openPage = (label) => {
  if (label !== '...') page.value = label
  loadProducts()
}

</script>

<template>
  <div class="pagination">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-for="(link, id) in links">
          <button v-if="id === 0" @click="perPage()" class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
          <button class="page-link" @click="nextPage(links[links.length - 2].label)"
                  v-else-if="id === links.length - 1" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
          <button :class="['page-link', page == link.label ? 'active' : '']" v-else @click="openPage(link.label)" href="#">{{ link.label }}</button>
        </li>
      </ul>
    </nav>
  </div>
  <div class="cards">
    <div class="card" :key="item.id" v-for="item in products">
      <h3>{{ item.name }}</h3>
      <span>Alias: {{ item.alias }}</span>
      <i>Width: {{ item.width }}</i>
      <i>Height: {{ item.height }}</i>
      <i>Diameter: {{ item.diameter }}</i>
    </div>
  </div>
</template>

<style scoped>

</style>