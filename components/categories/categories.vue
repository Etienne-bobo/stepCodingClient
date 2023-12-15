<template>
  <div>
    <div class="mb-6 md:mb-12">
      <div
        class="
          grid
          md:grid-cols-6
          lg:grid-cols-6
          sm:grid-cols-4
          grid-cols-3
          max-w-7xl
        "
      >
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="lg:pt-3 pt-3 w-full px-2 text-center"
        >
          <router-link
            :to="{ name: 'categories-id', params: { id: category.slug } }"
          >
            <div
              class="
                min-w-0
                flex
                break-words
                hover:shadow-md
                bg-white
                w-full
                mb-6
                md:py-0 md:mb-0
                rounded-lg
                justify-center
                border
              "
            >
              <div class="">
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    px-2
                    py-2
                    md:py-3
                    rounded-full
                  "
                >
                  <img
                    v-if="category.image"
                    class="w-8 h-8 mr-1 rounded-full"
                    :src="category.image.url"
                    alt=""
                  />
                  <p class="md:text-sm text-xs font-normal">
                    {{ category.name }}
                  </p>
                </div>
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
