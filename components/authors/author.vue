<template>
  <div>
    <navbar-component></navbar-component>
    <main class="profile-page absolute top-0 inset-x-0">
      <section class="relative block" style="height: 350px">
        <div
          class="absolute top-0 w-full bg-gray-200 h-full bg-center bg-cover"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="
            top-auto
            bottom-0
            left-0
            right-0
            w-full
            absolute
            pointer-events-none
            overflow-hidden
          "
          style="height: 70px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16">
        <div class="container mx-auto max-w-7xl lg:px-0 px-4">
          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              bg-white
              w-full
              mb-6
              shadow-md
              rounded-lg
              -mt-64
            "
          >
            <div class="px-6 pb-4">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                      v-if="author.image"
                      alt="..."
                      :src="author.image.url"
                      class="
                        shadow-xl
                        rounded-full
                        lg:h-36
                        h-32
                        w-32
                        lg:w-36
                        align-middle
                        justify-center
                        border-none
                        absolute
                        -m-16
                        -ml-16
                        lg:-ml-16
                      "
                      style="max-width: 150px"
                    />
                  </div>
                </div>
                <div
                  class="
                    w-full
                    lg:w-4/12
                    px-4
                    lg:order-3 lg:text-right lg:self-center
                  "
                >
                  <div class="py-6 px-3 flex justify-center mt-32 sm:mt-0">
                    <a :href="author.linkedin" target="_blank">
                      <button
                        class="
                          bg-indigo-500
                          text-white
                          font-bold
                          hover:shadow-md
                          shadow
                          text-md
                          px-4
                          py-2
                          rounded
                          outline-none
                          focus:outline-none
                          sm:mr-2
                          flex
                          mb-1
                        "
                        type="button"
                        style="transition: all 0.15s ease 0s"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-2"
                        >
                          <path
                            d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z"
                            fill="#2E3A59"
                          ></path>
                        </svg>
                        <span class="">LinkedIn</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-4">
                    <div class="mr-4 p-3 text-center">
                      <!-- <span
                        class="
                          text-xl
                          font-bold
                          block
                          uppercase
                          tracking-wide
                          text-gray-700
                        "
                        >Team</span
                      > -->
                      <a class="text-indigo-500" href="https://byteslabs.dev"
                        ><span class="text-sm text-gray-500">France</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center md:mt-12">
                <h3
                  class="
                    text-xl
                    font-semibold
                    leading-normal
                    mb-2
                    text-gray-800
                  "
                >
                  {{ author.name }}
                </h3>
                <div
                  class="
                    text-sm
                    leading-normal
                    mt-0
                    mb-2
                    text-gray-500
                    font-bold
                    uppercase
                  "
                >
                  <i
                    class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                  ></i>
                  {{ author.role }}
                </div>
                <!-- <div class="mb-2 text-gray-700 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                  >France
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="mb-8">
          <div class="max-w-7xl mx-auto">
            <p class="text-indigo-500 text-xl px-4 my-4 font-bold">
              My articles
            </p>
            <div
              v-if="author.posts"
              class="flex flex-wrap mx-auto md:px-0 my-12"
            >
              <!-- Column -->

              <div
                v-for="post in author.posts"
                :key="post.id"
                class="mlg:pt-12 pt-8 w-full md:w-4/12 px-4"
              >
                <!-- Article -->
                <nuxt-link
                  :to="{ name: 'posts-id', params: { id: post.slug } }"
                >
                  <div
                    class="
                      overflow-hidden
                      smallHeight
                      cardHeight
                      hover:shadow-md
                      border
                      focus:outline-none
                      rounded-lg
                    "
                  >
                    <!-- <img
                      v-if="post.image"
                      alt="Placeholder"
                      class="block h-64 w-full"
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
                          class="
                            line-clamp-2
                            text-xl
                            textt-indigo-800
                            font-bold
                            mb-3
                          "
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
        <div class="mb-16 max-w-7xl mx-auto">
          <p class="text-indigo-500 px-4 text-xl my-4 font-bold">My Projects</p>
          <div class="flex flex-wrap max-w-7xl">
            <div
              v-for="(project, index) in author.projects"
              :key="index"
              class="lg:pt-12 pt-8 w-full md:w-4/12 px-4"
            >
              <a :href="project.link" target="_blank" rel="noopener noreferrer">
                <div
                  class="
                    relative
                    flex flex-col
                    min-w-0
                    smallHeightProject
                    break-words
                    bg-white
                    w-full
                    border border-gray-300
                    hover:shadow-md
                    rounded-lg
                  "
                >
                  <div class="px-4 py-5 flex-auto">
                    <span class="text-lg font-semibold">{{
                      project.name
                    }}</span>
                    <p class="text-sm mt-3 font-normal">
                      {{ project.description }}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="mx-4">
        <footer-component></footer-component>
      </div>
    </main>
  </div>
</template>
<script>
import NavbarComponent from '../../layouts/NavBar.vue'
import FooterComponent from '../../layouts/Footer.vue'
import getMeta from '../../utils/meta.util'
export default {
  name: 'ProfilePage',
  components: {
    NavbarComponent,
    FooterComponent,
  },
  props: {
    author: {
      type: Object,
      default() {},
    },
  },
  head() {
    if (this.author.name) {
      return {
        title: this.author.name + ' - step coding',
        description: this.author.role,

        meta: getMeta({
          title: this.author.name + ' - step coding',
          description: this.author.role,
        }),
      }
    }
  },
}
</script>
<style scoped>
.smallHeight {
  height: 200px;
}
.smallHeightProject {
  height: 130px;
}
@media (min-width: 768px) {
  .cardHeight {
    height: 200px;
  }
  .smallHeightProject {
    height: 130px;
  }
}
</style>
