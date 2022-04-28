<template>
  <div>
    <Navbar />
    <div class="mt-24 max-w-7xl absolute top-0 inset-x-0 mx-auto">
      <p
        class="
          text-xl text-start
          px-4
          lg:text-2xl
          text-gray-800
          font-semibold
          mt-8
        "
      >
        Projects
      </p>
      <div align="center">
        <projects :projects="projects" />
      </div>
      <div class="mx-4">
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import { ApiService } from '../common/config'
import Navbar from '../layouts/NavBar.vue'
import projects from '../components/projects/projects.vue'
import Footer from '../layouts/Footer.vue'
import getMeta from '~/utils/meta.util.js'

export default {
  components: {
    Navbar,
    projects,
    Footer,
  },
  async asyncData({ params }) {
    const response = await ApiService.get(`projects`)
    return {
      projects: response.data.reverse(),
    }
  },
  head() {
    return {
      title: 'Projects - stepCoding',
      description: 'My projects',

      meta: getMeta({
        title: 'Projects - stepCoding',
        description: 'My projects',
      }),
    }
  },
}
</script>
