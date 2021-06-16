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
import getMeta from '~/utils/meta.util.js'

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
  head() {
    return {
      title: 'Articles - stepCoding',
      description: 'find here articles at the cutting edge of the technology ',

      meta: getMeta({
        title: 'Articles - stepCoding',
        description:
          'find here articles at the cutting edge of the technology ',
      }),
    }
  },
}
</script>
