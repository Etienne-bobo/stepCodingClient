<template>
  <div class="mx-4 block inset-x-0 justify-center absolute top-0">
    <div class="max-w-7xl mt-28 my-12 mx-auto lg:px-0">
      <div
        class="text-2xl md:text-4xl text-center mb-6 font-bold text-indigo-900"
      >
        <span
          >All articles in
          <span class="text-indigo-500"> {{ category.name }}</span></span
        >
        <span
          class="
            text-2xl
            md:text-4xl
            text-center
            mb-6
            font-bold
            text-indigo-900
          "
          >categorie</span
        >
      </div>
      <div class="flex flex-wrap">
        <!-- Column -->
        <div
          v-for="post in paginatedData"
          :key="post.id"
          class="my-1 px-1 md:mx-0 mx-auto w-96 md:w-1/2 lg:w-1/3"
        >
          <!-- Article -->
          <nuxt-link :to="{ name: 'posts-id', params: { id: post.slug } }">
            <article
              class="
                overflow-hidden
                rounded-lg
                border
                focus:outline-none
                cardHeight
              "
            >
              <img
                v-if="post.image"
                alt="Placeholder"
                class="block h-64 w-full"
                :src="post.image.url"
              />
              <div v-if="post.tags">
                <div class="flex flex-row">
                  <button
                    v-for="(tag, index) in post.tags"
                    :key="index"
                    class="bg-indigo-500 text-white px-4"
                  >
                    # {{ tag }}
                  </button>
                </div>
              </div>
              <header
                class="
                  flex
                  items-center
                  justify-between
                  leading-tight
                  p-2
                  md:p-4
                "
              >
                <p class="text-grey-darker text-sm">
                  Publie le
                  {{ $dateFns.format(post.published_at, 'dd-MM-yyyy') }}
                </p>
              </header>

              <footer
                class="
                  flex
                  items-center
                  justify-between
                  leading-none
                  p-2
                  md:p-4
                "
              >
                <div>
                  <h1
                    class="line-clamp-2 text-xl textt-indigo-800 font-bold mb-3"
                  >
                    {{ post.title }}
                  </h1>
                  <h6 class="line-clamp-2 text-sm mb-4">
                    {{ post.description }}
                  </h6>
                </div>
              </footer>
            </article>
          </nuxt-link>
          <!-- END Article -->
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-center mb-16">
      <button
        :class="{
          'bg-gray-400 cursor-not-allowed': pageNumber === 0,
          'bg-indigo-500': pageNumber != 0,
        }"
        :disabled="pageNumber === 0"
        class="
          p-0
          w-10
          h-10
          text-white
          mx-2
          pt-2
          rounded-full
          active:shadow-lg
          mouse
          shadow
          transition
          ease-in
          duration-200
          focus:outline-none
        "
        @click="prevPage"
      >
        <i class="material-icons text-xl">chevron_left</i>
      </button>
      <button
        :disabled="pageNumber === 0"
        class="
          p-0
          w-10
          h-10
          bg-indigo-800
          text-white
          mx-2
          rounded-full
          active:shadow-lg
          mouse
          shadow
          transition
          ease-in
          duration-200
          focus:outline-none
        "
      >
        {{ pageNumber + 1 }}
      </button>
      <button
        :class="{
          'bg-gray-400 cursor-not-allowed': pageNumber >= pageCount - 1,
          'bg-indigo-500': pageNumber < pageCount - 1,
        }"
        :disabled="pageNumber >= pageCount - 1"
        class="
          p-0
          w-10
          h-10
          text-white
          mx-2
          pt-2
          rounded-full
          active:shadow-lg
          mouse
          shadow
          transition
          ease-in
          duration-200
          focus:outline-none
        "
        @click="nextPage"
      >
        <i class="material-icons text-xl">chevron_right</i>
      </button>
    </div>
    <div align="center">
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from '../../layouts/Footer.vue'
export default {
  components: {
    Footer,
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 6,
    },
    category: {
      type: Object,
      default() {},
    },
    categoryPosts: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      pageNumber: 0,
    }
  },
  computed: {
    paginatedData() {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.categoryPosts.slice(start, end)
    },
    pageCount() {
      const l = this.categoryPosts.length
      const s = this.size
      return Math.ceil(l / s)
    },
  },

  methods: {
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    },
  },
}
</script>
<style scoped>
.cardHeight {
  height: 480px;
}
</style>
