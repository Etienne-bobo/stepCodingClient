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
}
</script>
