<template>
  <div>
    <nav-bar />
    <div class="absolute top-0 mt-24 inset-x-0 mx-auto">
      <Post :post="post" :similar-posts="similarPosts" />
      <div align="center">
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import { ApiService } from '../../common/config'
import NavBar from '../../layouts/NavBar.vue'
import Post from '../../components/posts/post.vue'
import Footer from '../../layouts/Footer.vue'

export default {
  components: {
    NavBar,
    Post,
    Footer,
  },
  async asyncData({ params }) {
    // post
    const response = await ApiService.get(`posts/${params.id}`)

    // Get related or similar posts
    const ids = {} // array of slugs
    response.data.categories.map(function (value, key) {
      ids[key] = value.slug
      return ids
    })
    const allCategoryPosts = []
    for (const id in ids) {
      const response2 = await ApiService.get(`categories/${ids[id]}`)
      allCategoryPosts.push(...response2.data.posts)
    }
    const slugs = []
    allCategoryPosts.map(function (value, key) {
      slugs[key] = value.slug

      return slugs
    })
    const relatedSlugs = slugs.filter((i) => i !== params.id) // remove current post from list
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index
    }
    const uniqueSlugs = relatedSlugs.filter(onlyUnique)
    const relatedBlogPosts = []
    for (const slug in uniqueSlugs) {
      const response3 = await ApiService.get(`posts/${uniqueSlugs[slug]}`)

      relatedBlogPosts.push(response3.data)
    }
    return {
      post: response.data,
      similarPosts: relatedBlogPosts.slice(0, 3),
    }
  },
}
</script>
