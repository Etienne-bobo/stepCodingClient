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
    <div class="md:mt-12 mt-28 mx-auto">
      <div>
        <h1
          class="
            max-w-7xl
            px-6
            lg:text-4xl
            text-indigo-800 text-xl
            font-bold
            flex
            justify-center
            text-center
            md:mt-32
          "
        >
          Find here articles at the cutting edge of technology
        </h1>
      </div>
      <div>
        <img class="h-full w-full" src="../assets/images/header.jpg" alt="" />
      </div>
      <div class="pb-12 max-w-7xl px-4 justify-center pt-4 md:mt-8">
        <p
          class="
            mt-6
            text-center
            lg:text-xl
            max-w-4xl
            mx-auto
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
          <div
            class="
              bg-indigo-400
              hover:bg-indigo-600
              rounded-md
              w-3/4
              md:w-64
              px-2
              md:mr-4
            "
          >
            <a href="/posts">
              <div
                class="h-14 text-md text-white flex items-center justify-center"
              >
                Get recents Articles<i class="ci-airplay text-lg ml-2 flex">
                </i>
              </div>
            </a>
          </div>
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
