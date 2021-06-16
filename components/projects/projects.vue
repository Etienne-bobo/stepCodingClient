<template>
  <div>
    <div class="mb-16">
      <div class="flex flex-wrap max-w-7xl">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="lg:pt-12 pt-8 w-full md:w-4/12 px-4"
        >
          <a :href="project.link" target="_blank" rel="noopener noreferrer">
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
                <span class="text-lg font-semibold">{{ project.name }}</span>
                <p class="text-sm mt-3 font-normal">
                  {{ project.description }}
                </p>
              </div>
              <p v-if="project.author" class="text-indigo-500 pb-4">
                by {{ project.author.name }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    projects: {
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
