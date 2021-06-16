<template>
  <div>
    <Navbar />
    <CategoryPosts :category-posts="categoryPosts" :category="category" />
  </div>
</template>
<script>
import { ApiService } from '../../common/config'
import Navbar from '../../layouts/NavBar.vue'
import CategoryPosts from '../../components/categories/category.vue'
export default {
  components: {
    Navbar,
    CategoryPosts,
  },
  async asyncData({ params }) {
    const response = await ApiService.get(`categories/${params.id}`)
    return {
      category: response.data,
      categoryPosts: response.data.posts,
    }
  },
}
</script>
