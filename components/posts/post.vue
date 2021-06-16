<template>
  <div class="mx-4">
    <div class="mt-12 mx-auto max-w-7xl">
      <div class="flex flex-row justify-center">
        <div
          v-for="category in post.categories"
          :key="category.id"
          class="text-xl text-indigo-800 mx-2 font-bold"
        >
          {{ category.name }}
        </div>
        <div v-if="post.published_at" class="mx-4">
          {{ $dateFns.format(post.published_at, 'dd-MM-yyyy') }}
        </div>
      </div>

      <div
        class="
          flex
          justify-center
          text-2xl
          md:text-5xl
          text-indigo-800
          font-bold
          mx-auto
          px-4
          text-center
          mt-8
          mb-4
        "
      >
        <span>{{ post.title }}</span>
      </div>
      <div class="max-w-4xl mx-auto text-center text-lg mb-8">
        <span>{{ post.description }}</span>
      </div>
      <div v-if="post.cover" class="">
        <img class="mb-12 w-full" :src="post.cover.url" />
      </div>
      <div class="max-w-6xl content mx-auto px-4 mb-8">
        <article
          v-if="post.content"
          id="content"
          class="opacity-80 l"
          v-html="$md.render(post.content || '')"
        ></article>
      </div>
      <div>
        <footer
          v-if="post.author"
          class="flex items-center justify-between leading-none"
        >
          <div class="flex items-center no-underline text-black">
            <img
              alt="A"
              class="block rounded-full h-12 w-12"
              :src="apiUrl + post.author.image.url"
            />
            <div class="ml-2 text-lg text-indigo-800 font-bold">
              {{ post.author.name }}
              <p class="text-sm text-indigo-500 font-bold">
                {{ post.author.role }}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
    <similar-posts :similar-posts="similarPosts" />
  </div>
</template>
<script>
import Prism from '../../plugins/prism'
import SimilarPosts from './relatedPosts'
export default {
  components: {
    SimilarPosts,
  },
  props: {
    post: {
      type: Object,
      default() {},
    },
    similarPosts: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      apiUrl: process.env.strapiBaseUri,
    }
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>
