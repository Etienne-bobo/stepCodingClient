<template>
  <div>
    <div class="mb-16">
      <div class="grid md:grid-cols-4 grid-cols-2 max-w-7xl">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="lg:pt-12 pt-8 w-full px-4 text-center"
        >
          <router-link
            :to="{ name: 'categories-id', params: { id: category.slug } }"
          >
            <div
              class="
                min-w-0
                flex
                items-center
                justify-center
                break-words
                hover:shadow-md
                bg-white
                w-full
                mb-6
                py-1
                md:py-0 md:mb-0
                rounded-lg
                border
              "
            >
              <div class="">
                <div
                  class="
                    flex
                    items-center
                    px-4
                    py-3
                    md:py-6
                    justify-center
                    rounded-full
                  "
                >
                  <img
                    v-if="category.image"
                    class="
                      w-14
                      h-14
                      p-1
                      mr-20
                      md:mr-32
                      border border-gray-200
                      mb-20
                      absolute
                      shadow-md
                      rounded-full
                    "
                    :src="category.image.url"
                    alt=""
                  />
                  <p class="text-xl font-normal">{{ category.name }}</p>
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
