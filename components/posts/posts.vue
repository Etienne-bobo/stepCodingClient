<template>
  <div class="mx-4 block inset-x-0 justify-center absolute top-0">
    <div class="max-w-7xl mt-28 my-12 mx-auto lg:px-0">
      <div
        class="text-2xl md:text-4xl text-start mb-6 font-bold text-indigo-900"
      >
        <span class="text-xl md:text-2xl mb-6 font-bold text-indigo-900"
          >Articles
          <span class="border border-gray-500 px-3 py-1 rounded-full">{{
            posts.length
          }}</span></span
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
        <i class="ci-chevron_left text-2xl"></i>
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
        <i class="ci-chevron_right text-2xl"></i>
      </button>
    </div>
    <div>
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
    posts: {
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
      return this.posts.slice(start, end)
    },
    pageCount() {
      const l = this.posts.length
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
