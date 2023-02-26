<template>
  <div>
    <Navbar />
    <div align="center" class="mt-24 absolute top-0 inset-x-0 mx-auto">
      <p class="text-xl lg:text-2xl text-gray-800 font-semibold mt-8">
        All categories list
      </p>
      <categories :categories="categories" />
      <div class="mx-4">
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import { ApiService } from '../../common/config'
import Navbar from '../../layouts/NavBar.vue'
import categories from '../../components/categories/categories.vue'
import Footer from '../../layouts/Footer.vue'
import getMeta from '~/utils/meta.util.js'

export default {
  components: {
    Navbar,
    categories,
    Footer,
  },
  async asyncData({ params }) {
    const response = await ApiService.get(`categories`)
    return {
      categories: response.data,
    }
  },
  head() {
    return {
      title: 'Categories - step coding',
      description: 'categories list',

      meta: getMeta({
        title: 'Categories - step coding',
        description: 'categories list',
      }),
    }
  },
}
</script>
