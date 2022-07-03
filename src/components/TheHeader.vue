<template>
  <nav class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-green-700 dark:bg-stone-800 shadow text-white">
    <div class="block grid w-full">
      <div class="justify-self-end mr-20 hidden xl:flex space-x-8 text-sm relative">
        <a href="/book" class="absolute bg-yellow-600 px-2 py-1 text-white xl:text-lg rounded-md -mt-2 -left-28 top-0">
          Book Now
        </a>
        <div class="flex space-x-4 text-amber-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          <span class="font-semibold xl:text-lg">
            0701 123 456 / 0701 333 999
          </span>
        </div>
        <div class="flex space-x-4 text-amber-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
          <span class="font-semibold xl:text-lg">
            info@modernlandinvestment.co.ke
          </span>
        </div>
      </div>
    </div>
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between xl:w-auto xl:static xl:block xl:justify-start">
        <a
          class="text-xl lg:text-4xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase flex"
          href="/"
        >
          <img src="/images/logo.webp" class="w-8 lg:w-12 bg-white rounded-full" width="100px" height="100px">
          <p class="text-xs lg:text-base pl-1 mt-2 md:mt-2 lg:mt-3 dark:text-white font-semibold uppercase">
            {{name}}
          </p>
        </a>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block xl:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
      <div
        class="xl:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row lg:space-x-2 list-none lg:ml-auto uppercase text-stone-800 font-semibold xl:text-lg">
          <li class="flex items-center">
            <a
              class="text-white px-3 py-2 flex items-center"
              exact-active-class="border-b-2 border-yellow-400"
              href="/">
              Home
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="text-white px-3 py-2 flex items-center"
              exact-active-class="border-b-2 border-yellow-400"
              href="/properties"
            >
              Properties
            </a>
          </li>
          <li class="flex items-center">
            <div class="text-white px-3 py-2 flex items-center"
              exact-active-class="border-b-2 border-yellow-400">
              <div class="relative" @mouseover="blogActive = true" @mouseleave="blogActive = false">
                <button type="button" class="group rounded-md inline-flex items-center text-white px-3 py-2 flex items-center uppercase" :aria-expanded="blogActive ? 'true' : 'false'">
                  <span class="font-semibold">Blog</span>
                  <svg class="text-white ml-2 h-5 w-5 group-hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div :class="`absolute z-10 -ml-6 mt-0 transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 ${blogActive ? '' : 'hidden'} shadow-lg`" @mouseover="blogActive = true" @mouseleave="blogActive = false">
                  <div class="shadow-lg overflow-hidden">
                    <div class="relative grid gap-2 bg-white dark:bg-stone-800 p-1 lg:p-2">
                      <a :href="`${item.id}`" v-for="item in bloglinks" :key="item.id" class="text-stone-800 dark:text-white px-3 py-2 flex items-center capitalize bg-stone-200 dark:bg-stone-700 text-sm"
                      @click="blogActive = ! blogActive, setNavbarOpen()">
                        {{item.name}}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="flex items-center">
            <a
              class="text-white px-3 py-2 flex items-center"
              exact-active-class="border-b-2 border-yellow-400"
              href="/testimonials"
            >
              Testimonials
            </a>
          </li>
          <li class="flex items-center">
            <div class="text-white px-3 py-2 flex items-center"
              exact-active-class="border-b-2 border-yellow-400">
              <div class="relative" @mouseover="aboutActive = true" @mouseleave="aboutActive = false">
                <button type="button" class="group rounded-md inline-flex items-center text-white px-3 py-2 flex items-center uppercase" :aria-expanded="aboutActive ? 'true' : 'false'">
                  <span class="font-semibold">About</span>
                  <svg class="text-white ml-2 h-5 w-5 group-hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div :class="`absolute z-10 -ml-6 mt-0 transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 ${aboutActive ? '' : 'hidden'} shadow-lg`" @mouseover="aboutActive = true" @mouseleave="aboutActive = false">
                  <div class="shadow-lg overflow-hidden">
                    <div class="relative grid gap-2 bg-white dark:bg-stone-800 p-1 lg:p-2">
                      <a :href="`${item.id}`" v-for="item in aboutlinks" :key="item.id" class="text-stone-800 dark:text-white px-3 py-2 flex items-center capitalize bg-stone-200 dark:bg-stone-700 text-sm"
                      @click="aboutActive = ! aboutActive, setNavbarOpen()">
                        {{item.name}}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarOpen: false,
      loggedIn: false,
      name: 'Modern Land Investment',
      blogActive:false,
      bloglinks:[
        {
          "name":"Media",
          "id":"/media"
        },
        {
          "name":"Newsletter",
          "id":"/blog"
        },
      ],
      aboutActive:false,
      aboutlinks:[
        {
          "name":"About",
          "id":"/about"
        },
        {
          "name":"Diaspora",
          "id":"/blog/diaspora-announcement"
        }
      ],
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  }
}
</script>
