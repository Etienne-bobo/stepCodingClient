<template>
  <div>
    <nav
      :class="{ scrolled: !view.atTopOfPage }"
      class="
        fixed
        flex
        w-full
        bg-white
        items-center
        justify-between
        flex-wrap
        py-1
        lg:py-3
        m-auto
        px-4
        top-0
        animated
        shadow-sm
      "
    >
      <div
        class="
          container
          mx-auto
          max-w-7xl
          flex flex-wrap
          items-center
          justify-between
        "
      >
        <div
          class="
            w-full
            relative
            flex
            justify-between
            lg:w-auto lg:static lg:block lg:justify-start
          "
        >
          <a
            href="/"
            class="
              flex
              text-xl
              mr-12
              font-bold
              text-white
              leading-relaxed
              hover:text-indigo-900
              py-2
              whitespace-no-wrap
            "
          >
            <img
              class="font-bold h-16"
              src="../assets/images/logo.png"
              alt=""
            />
          </a>
          <ul class="flex lg:hidden flex-row list-none lg:ml-auto">
            <button
              class="
                flex
                px-5
                rounded-md
                items-center
                text-md
                font-medium
                text-gray-800
                my-2
                focus:outline-none
                bg-gray-100
                hover:bg-gray-300
              "
              @click="showModal"
            >
              <i class="ci-search"></i>
              <i class="ml-2">Search</i>
            </button>
          </ul>
        </div>
        <div
          class="
            lg:flex
            flex-grow
            items-center
            bg-white
            lg:bg-transparent lg:shadow-none
          "
          :class="{ hidden: !showMenu, block: showMenu }"
        >
          <ul class="flex flex-col lg:flex-row list-none mr-auto">
            <li class="flex items-center">
              <a href="/posts">
                <div>
                  <div class="dropdown inline-block relative">
                    <button
                      :class="{
                        'text-indigo-800': $route.path == '/posts',
                        'text-indigo-500': $route.path != '/posts',
                      }"
                      class="
                        font-semibold
                        focus:outline-none
                        hover:text-indigo-900
                        py-2
                        px-4
                        rounded
                        inline-flex
                        items-center
                      "
                    >
                      <span class="">Articles</span>
                    </button>
                  </div>
                </div>
              </a>
            </li>
            <li class="flex items-center">
              <a href="/about-us">
                <button
                  :class="{
                    'text-indigo-800': $route.path == '/about-us',
                    'text-indigo-500': $route.path != '/about-us',
                  }"
                  class="
                    font-semibold
                    hover:text-indigo-900
                    py-2
                    focus:outline-none
                    px-4
                    rounded
                    inline-flex
                    items-center
                  "
                >
                  <span class="mr-1">About us</span>
                </button>
              </a>
            </li>
            <li class="flex items-center">
              <a href="/projects">
                <button
                  :class="{
                    'text-indigo-800': $route.path == '/projects',
                    'text-indigo-500': $route.path != '/projects',
                  }"
                  class="
                    font-semibold
                    py-2
                    px-4
                    hover:text-indigo-900
                    focus:outline-none
                    rounded
                    inline-flex
                    items-center
                  "
                >
                  <span class="mr-1">Projects</span>
                </button>
              </a>
            </li>
            <!-- <li class="flex items-center">
              <a href="#contact">
                <div class="dropdown inline-block relative">
                  <button
                    class="
                      font-semibold
                      text-white
                      hover:text-indigo-900
                      py-2
                      px-4
                      focus:outline-none
                      rounded
                      inline-flex
                      items-center
                    "
                  >
                    Contact
                  </button>
                </div>
              </a>
            </li> -->
          </ul>
          <ul class="flex sm:block flex-row list-none lg:ml-auto">
            <button
              class="
                flex
                px-8
                py-3
                rounded-md
                items-center
                text-sm
                font-medium
                focus:outline-none
                text-gray-800
                bg-gray-100
                border border-gray-300
                hover:bg-gray-300
              "
              @click="showModal"
            >
              <i class="ci-search text-lg"></i>
              <i class="text-sm sm:text-base ml-2">Search</i>
            </button>
          </ul>
        </div>
      </div>
      <search-modal v-show="isModalVisible" @close="isModalVisible = false" />
    </nav>
    <div class="w-full lg:hidden h-screen">
      <!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
      <section
        id="bottom-navigation"
        class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
      >
        <div id="tabs" class="flex justify-between py-3 shadow-lg">
          <a
            href="/"
            :class="{
              'text-white bg-indigo-500 rounded-md': $route.path == '/',
              'text-gray-800 hover:text-indigo-400': $route.path != '/',
            }"
            class="
              w-full
              focus:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
          >
            <i class="ci-home_alt_outline text-xl"></i>

            <span class="tab tab-whishlist block text-xs">Home</span>
          </a>
          <a
            href="/posts"
            :class="{
              'text-white bg-indigo-500 rounded-md': $route.path == '/posts',
              'text-gray-800 hover:text-indigo-400': $route.path != '/posts',
            }"
            class="
              w-full
              focus:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
          >
            <i class="ci-chat text-xl"></i>

            <span class="tab tab-home block text-xs">Articles</span>
          </a>
          <a
            href="/projects"
            :class="{
              'text-white bg-indigo-500 rounded-md': $route.path == '/projects',
              'text-gray-800 hover:text-indigo-400': $route.path != '/projects',
            }"
            class="
              w-full
              focus:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
          >
            <i class="ci-laptop text-xl"></i>

            <span class="tab tab-kategori block text-xs">My Projects</span>
          </a>
          <a
            href="/about-us"
            :class="{
              'text-white bg-indigo-500 rounded-md': $route.path == '/about-us',
              'text-gray-800 hover:text-indigo-400': $route.path != '/about-us',
            }"
            class="
              w-full
              focus:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
          >
            <i class="ci-group text-xl"></i>

            <span class="tab tab-explore block text-xs">About us</span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { createPopper } from '@popperjs/core'
import SearchModal from '../components/search/searchModal.vue'
export default {
  components: {
    SearchModal,
  },
  data() {
    return {
      isActive: '',
      showMenu: false,
      isOpen: false,
      popoverShow: false,
      isModalVisible: false,
      view: {
        atTopOfPage: true,
      },
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) {
            document.body.style.setProperty('overflow', 'hidden')
          } else {
            document.body.style.removeProperty('overflow')
          }
        }
      },
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && this.isOpen) {
        this.isOpen = false
      }
    })
  },

  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) {
          this.view.atTopOfPage = false
        }
      } else {
        // user is at top of page
        // eslint-disable-next-line no-lonely-if
        if (!this.view.atTopOfPage) {
          this.view.atTopOfPage = true
        }
      }
    },
    togglePopover() {
      if (this.popoverShow) {
        this.popoverShow = false
      } else {
        this.popoverShow = true
        createPopper(this.$refs.btnRef, this.$refs.popoverRef, {
          placement: 'bottom',
        })
      }
    },
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>
<style scoped>
nav {
  z-index: 10;
}

nav.scrolled {
  @apply shadow-lg;
  border-bottom: 0px;
}
.svg-icon {
  width: 1em;
  height: 1em;
  margin: 0px 10px;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #4691f6;
}

.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
