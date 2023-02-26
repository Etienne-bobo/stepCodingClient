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
        <div class="container mx-auto px-4">
          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              bg-white
              w-full
              mb-6
              border
              rounded-lg
              -mt-64
            "
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                      alt="..."
                      src="../assets/images/profile.jpeg"
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
                  <div class="py-6 px-3 flex justify-center mt-24 lg:mt-0">
                    <a
                      href="https://www.linkedin.com/in/efoé-etienne-blavo-486a6918a"
                      target="_blank"
                    >
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
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="
                          text-xl
                          font-bold
                          block
                          uppercase
                          tracking-wide
                          text-gray-700
                        "
                        >Team</span
                      ><a class="text-indigo-500" href="https://byteslabs.dev"
                        ><span class="text-sm text-gray-500"
                          >byteslabs.dev</span
                        ></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-6">
                <h3
                  class="
                    text-4xl
                    font-semibold
                    leading-normal
                    mb-2
                    text-gray-800
                  "
                >
                  Etienne Blavo
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
                  Full Stack Dev, Data Science
                </div>
                <div class="mb-2 text-gray-700 mt-10">
                  <i class="ci-location_outline text-lg"></i>
                  <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                  >France
                </div>
                <!-- <div class="mb-2 text-gray-700">
                  <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                  >Computer Science
                </div> -->
              </div>
              <div
                class="
                  mt-10
                  py-10
                  border-t border-gray-300
                  justify-between
                  flex
                "
              >
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-gray-800">
                      Computer engineering student and I am very passionate
                      about programming and new techs. I love everything related
                      to
                      <span class="text-indigo-500">
                        web development , machine learning.</span
                      >
                      I maintain this website, write tutorials and publish
                      articles .I am a developer at the start-up
                      <span class="text-indigo-500">BytesLabs</span>
                      in which me and my colleagues are working on projects for
                      the development of mobile applications, websites and IT
                      system architecture.
                    </p>
                  </div>
                </div>
              </div>
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
import NavbarComponent from '../layouts/NavBar.vue'
import FooterComponent from '../layouts/Footer.vue'
import getMeta from '~/utils/meta.util.js'

export default {
  name: 'ProfilePage',
  components: {
    NavbarComponent,
    FooterComponent,
  },
  head() {
    return {
      title: 'About - step coding',
      description: 'about me',

      meta: getMeta({
        title: 'About - step coding',
        description: 'about me ',
      }),
    }
  },
}
</script>
