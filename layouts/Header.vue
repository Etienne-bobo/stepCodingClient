<template>
  <div
    aligin="center"
    class="
      items-center
      block
      inset-x-0
      justify-center
      absolute
      top-0
      solo
      max-w-7xl
      mx-auto
    "
  >
    <div class="lg:mt-12 mt-28 mx-auto">
      <div class="pb-12 max-w-7xl px-6 justify-center pt-32 md:mt-8 -mt-32">
        <h1
          class="
            lg:text-5xl
            text-gray-800 text-2xl
            font-bold
            flex
            justify-center
            text-center
          "
        >
          Find here articles at the cutting edge of technology
        </h1>
        <p
          class="
            mt-8
            text-center
            lg:text-xl
            text-md text-gray-800
            flex
            justify-center
          "
        >
          posts on tips, techniques, and shortcuts regarding
          programming,robotics. It includes C, Java, PHP, Python, arduno, catia,
          matlab, machine learning...
        </p>
        <div class="flex flex-wrap justify-center mt-8 lg:mb-8">
          <nuxt-link to="/posts">
            <div class="bg-indigo-400 rounded-md w-3/4 md:w-64 px-2 md:mr-4">
              <div
                class="h-14 text-md text-white flex items-center justify-center"
              >
                Get recents Articles<i class="ci-airplay text-lg ml-2 flex">
                </i>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <categories :categories="categories" />
    <recent-posts :posts="posts" />
    <div class="mx-4">
      <Footer />
    </div>
  </div>
</template>
<script>
import categories from '../components/categories/categories.vue'
import recentPosts from '../components/posts/recentsPosts.vue'
import Footer from './Footer.vue'
export default {
  components: {
    categories,
    recentPosts,
    Footer,
  },
  props: {
    categories: {
      type: Array,
      default() {
        return []
      },
    },
    posts: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style scoped>
.heighte {
  height: 500px;
}
</style>
