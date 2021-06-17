<template>
  <div>
    <nav
      :class="{ scrolled: !view.atTopOfPage }"
      class="
        fixed
        flex
        w-full
        bg-indigo-500
        items-center
        justify-between
        flex-wrap
        py-1
        lg:py-4
        m-auto
        px-4
        top-0
        animated
      "
    >
      <div
        class="container mx-auto flex flex-wrap items-center justify-between"
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
              class="font-bold h-12"
              src="../assets/images/logo.png"
              alt=""
            />
          </a>
          <ul class="flex lg:hidden flex-row list-none lg:ml-auto">
            <li class="relative mx-auto flex items-center text-gray-600">
              <div class="">
                <div class="w-full text-center">
                  <button
                    ref="btnRef"
                    class="
                      bg-indigo-500
                      text-white
                      font-bold
                      text-sm
                      flex
                      px-6
                      py-3
                      rounded
                      shadow
                      hover:shadow-lg
                      outline-none
                      focus:outline-none
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                    @click="togglePopover()"
                  >
                    <i class="ci-search text-lg font-semibold"> </i>
                    <i class="ml-2 mt-1 font-semibold">search</i>
                  </button>
                </div>
              </div>
            </li>
            <div
              ref="popoverRef"
              :class="{
                hidden: !popoverShow,
                block: popoverShow,
              }"
            >
              <li class="pt-2 relative mx-auto text-gray-600">
                <input
                  class="
                    border-2 border-gray-300
                    bg-white
                    px-5
                    pb-4
                    pt-3
                    pr-16
                    rounded-lg
                    text-sm
                    focus:outline-none
                  "
                  type="search"
                  name="search"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  class="
                    absolute
                    bg-gray-400
                    text-white
                    px-4
                    pt-4
                    pb-2
                    rounded-md
                    right-0
                    top-0
                    mt-2
                  "
                >
                  <i class="ci-search text-lg"></i>
                </button>
              </li>
            </div>
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
                      class="
                        font-semibold
                        text-white
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
                  class="
                    font-semibold
                    text-white
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
                  class="
                    font-semibold
                    text-white
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
            <li class="flex items-center">
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
            </li>
          </ul>
          <ul class="flex sm:block flex-row list-none lg:ml-auto">
            <li class="pt-2 relative flex items-center mx-auto text-gray-600">
              <input
                class="
                  border-2 border-gray-300
                  bg-white
                  h-10
                  px-5
                  pr-16
                  rounded-lg
                  text-sm
                  focus:outline-none
                "
                type="search"
                name="search"
                placeholder="Search"
              />
              <button type="submit" class="absolute right-0 top-0 mt-4 mr-4">
                <i class="ci-search text-xl"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="w-full lg:hidden h-screen">
      <!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
      <section
        id="bottom-navigation"
        class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
      >
        <div id="tabs" class="flex justify-between py-3 shadow-lg">
          <a
            href="/posts"
            class="
              w-full
              focus:text-teal-500
              hover:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
          >
            <i class="ci-chat text-xl text-indigo-900"></i>

            <span class="tab tab-home block text-xs">Articles</span>
          </a>
          <a
            href="/projects"
            class="
              w-full
              focus:text-teal-500
              hover:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
          >
            <i class="ci-laptop text-xl text-indigo-900"></i>

            <span class="tab tab-kategori block text-xs">My Projects</span>
          </a>
          <a
            href="/about-us"
            class="
              w-full
              focus:text-teal-500
              hover:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
          >
            <i class="ci-group text-xl text-indigo-900"></i>

            <span class="tab tab-explore block text-xs">About us</span>
          </a>
          <a
            href="#contact"
            class="
              w-full
              focus:text-teal-500
              hover:text-teal-500
              justify-center
              inline-block
              text-center
              pt-2
              pb-1
            "
          >
            <i class="ci-mail_open text-xl text-indigo-900"></i>

            <span class="tab tab-whishlist block text-xs">Contact us</span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { createPopper } from '@popperjs/core'
export default {
  data() {
    return {
      isActive: '',
      showMenu: false,
      isOpen: false,
      abitaUrl: process.env.abita,
      helpUrl: process.env.help,
      webUrl: process.env.web,
      popoverShow: false,
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
