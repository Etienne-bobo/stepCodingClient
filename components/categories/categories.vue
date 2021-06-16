<template>
  <div>
    <div class="mb-16">
      <div class="flex flex-wrap max-w-7xl">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="lg:pt-12 pt-8 w-full md:w-4/12 px-4 text-center"
        >
          <router-link
            :to="{ name: 'categories-id', params: { id: category.slug } }"
          >
            <div
              class="
                relative
                flex flex-col
                min-w-0
                break-words
                bg-white
                w-full
                mb-8
                shadow-sm
                rounded-lg
                border
              "
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="
                    text-white text-center
                    inline-flex
                    items-center
                    justify-center
                    mb-5
                    shadow-sm
                    bg-gray-100
                    rounded-full
                  "
                >
                  <img
                    v-if="category.image"
                    class="w-14 h-14 rounded-full"
                    :src="category.image.url"
                    alt=""
                  />
                </div>
                <p class="text-xl font-normal">{{ category.name }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    categories: {
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
