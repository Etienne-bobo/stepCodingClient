<template>
  <div>
    <Navbar />
    <div align="center" class="mt-24 absolute top-0 inset-x-0 mx-auto">
      <p class="text-xl lg:text-2xl text-gray-800 font-semibold mt-8">
        All authors list
      </p>
      <authors :authors="authors" />
      <div class="mx-4">
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import { ApiService } from '../../common/config'
import Navbar from '../../layouts/NavBar.vue'
import authors from '../../components/authors/authors.vue'
import Footer from '../../layouts/Footer.vue'
import getMeta from '~/utils/meta.util.js'

export default {
  components: {
    Navbar,
    authors,
    Footer,
  },
  async asyncData({ params }) {
    const response = await ApiService.get(`authors`)
    return {
      authors: response.data,
    }
  },
  head() {
    return {
      title: 'authors - step coding',
      description: 'authors list',

      meta: getMeta({
        title: 'authors - step coding',
        description: 'authors list',
      }),
    }
  },
}
</script>
