<template>
  <div>
    <nav-bar />
    <Header :categories="categories" :posts="posts" />
  </div>
</template>

<script>
import { ApiService } from '../common/config'
import NavBar from '../layouts/NavBar.vue'
import Header from '../layouts/Header.vue'
import getMeta from '~/utils/meta.util.js'

export default {
  components: { NavBar, Header },
  async asyncData({ params }) {
    const response = await ApiService.get('categories')
    const postsResponse = await ApiService.get('posts')
    return {
      categories: response.data,
      posts: postsResponse.data.reverse().slice(0.3),
    }
  },
  head() {
    return {
      title: 'step coding',
      description: 'find here articles at the cutting edge of the technology ',

      meta: getMeta({
        title: 'step coding',
        description:
          'find here articles at the cutting edge of the technology ',
      }),
    }
  },
}
</script>
