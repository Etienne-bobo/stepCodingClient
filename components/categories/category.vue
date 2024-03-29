<template>
  <div class="mx-4 block inset-x-0 justify-center absolute top-0">
    <div class="max-w-7xl mt-28 my-12 mx-auto lg:px-0">
      <div class="text-xl md:text-2xl text-left mb-6 font-bold text-indigo-900">
        <span
          >Articles in
          <span class="text-indigo-500"> {{ category.name }}</span></span
        >
        <span
          class="text-xl md:text-2xl text-center mb-6 font-bold text-indigo-900"
          >categorie</span
        >
        <span class="border rounded-full px-3 py-1">{{
          category.posts.length
        }}</span>
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
                hover:shadow-md
                border
                focus:outline-none
                cardHeight
                smallHeight
              "
            >
              <!-- <img
                v-if="post.image"
                alt="Placeholder"
                class="block h-56 md:h-64 w-full"
                :src="post.image.url"
              /> -->
              <div v-if="post.tags">
                <div class="flex flex-row">
                  <button
                    v-for="(tag, index) in post.tags"
                    :key="index"
                    class="bg-indigo-500 text-white px-4"
                  >
                    # {{ tag.name }}
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
                  Published on
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
          pb-1
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
        <i class="ci-chevron_left pb-1 text-2xl"></i>
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
          w-10
          h-10
          text-white
          mx-2
          pb-1
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
        <i class="ci-chevron_right pb-1 text-2xl"></i>
      </button>
    </div>
    <div align="center">
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from '../../layouts/Footer.vue'
import getMeta from '../../utils/meta.util'

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
  head() {
    if (this.category.title) {
      return {
        title: this.category.title + ' - step coding',
        description: this.category.description,

        meta: getMeta({
          title: this.category.title + ' - step coding',
          description: this.category.description,
        }),
      }
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
.smallHeight {
  height: 200px;
}
@media (min-width: 768px) {
  .cardHeight {
    height: 230px;
  }
}
</style>
