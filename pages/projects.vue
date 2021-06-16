<template>
  <div>
    <Navbar />
    <div align="center" class="mt-24 absolute top-0 inset-x-0 mx-auto">
      <p class="text-xl lg:text-2xl text-gray-800 font-semibold mt-8">
        All Projects list
      </p>
      <projects :projects="projects" />
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
}
</script>
