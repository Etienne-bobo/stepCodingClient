<template>
  <div>
    <Navbar />
    <div class="absolute top-0 mt-6 inset-x-0 mx-auto">
      <Posts :posts="posts" />
    </div>
  </div>
</template>
<script>
import { ApiService } from '../../common/config'
import Navbar from '../../layouts/NavBar.vue'
import Posts from '../../components/posts/posts.vue'
export default {
  components: {
    Navbar,
    Posts,
  },
  async asyncData({ params }) {
    const response = await ApiService.get(`posts`)
    return {
      posts: response.data.reverse(),
    }
  },
}
</script>
