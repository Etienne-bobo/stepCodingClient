<template>
  <div class="mx-4 mb-32">
    <div class="max-w-7xl mx-auto">
      <p class="text-indigo-500 text-2xl md:px-0 my-12 font-bold">
        Popular articles
      </p>
      <div class="flex flex-wrap mx-auto md:px-0 my-12">
        <!-- Column -->

        <div
          v-for="post in posts"
          :key="post.id"
          class="my-1 px-1 md:w-1/2 md:mx-0 mx-auto w-96 lg:w-1/3"
        >
          <!-- Article -->
          <nuxt-link :to="{ name: 'posts-id', params: { id: post.slug } }">
            <div
              class="
                overflow-hidden
                cardHeight
                smallHeight
                hover:shadow-md
                border
                focus:outline-none
                rounded-lg
              "
            >
              <img
                v-if="post.image"
                alt="Placeholder"
                class="block md:h-64 h-56 w-full"
                :src="post.image.url"
              />
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
            </div>
          </nuxt-link>
          <!-- END Article -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
.smallHeight {
  height: 420px;
}
@media (min-width: 768px) {
  .cardHeight {
    height: 480px;
  }
}
</style>
