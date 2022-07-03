<template>
	<div class="hidden relative pt-16 pb-4 lg:flex content-center items-center justify-center">
    <template v-for="(item,key) in images">
      <div :class="`absolute top-0 lg:top-24 lg:mt-1 w-full h-full lg:h-96 bg-cover ${key == index ? '' : 'hidden'}`" :style="`background-image: url(${item})`">
        <span
          id="blackOverlay"
          class="w-full h-full absolute bg-black bg-opacity-10"
        ></span>
      </div>
    </template>
    <svg @click="loadNextBanner" class="hidden w-12 h-12 absolute left-2 text-white cursor-pointer" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    <svg @click="loadNextBanner" class="hidden w-12 h-12 absolute right-2 text-white cursor-pointer" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
    <div class="container relative mx-auto lg:h-96">
      <div class="grid place-items-center place-content-center gap-4 lg:mt-1 h-full">
        <div class="px-4 col-span-3">
          <div class="md:pr-12 mt-6 lg:mt-2 rounded-md p-2 bg-opacity-60">
            <template v-for="(a,b) in titles">
              <h1 :class="`hidden text-white font-extrabold text-2xl md:text-3xl lg:text-4xl uppercase lg:py-3 text-center animate-text-left ${b == index ? '' : 'hidden'}`">
                {{titles[index]}}
              </h1>
            </template>
            <template v-for="(c,d) in texts">
              <p :class="`hidden text-lg text-white text-center ${d == index ? '' : 'hidden'}`">
                {{texts[index]}}
              </p>
            </template>
          </div>
          <div class="hidden grid place-items-center">
            <a href="/properties">
              <button class="bg-amber-600 text-white p-2 font-semibold shadow-md rounded-full px-4 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">
                View Property
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="lg:hidden grid relative pt-16 pb-4 place-content-center place-items-center h-96">
    <template v-for="(item,key) in images">
      <div :class="`absolute top-0 lg:top-24 lg:mt-1 w-full h-full lg:h-96 bg-cover ${key == index ? '' : 'hidden'}`" :style="`background-image: url(${item})`">
        <span
          id="blackOverlay"
          class="w-full h-full absolute bg-black bg-opacity-10"
        ></span>
      </div>
    </template>
    <div class="container relative mx-auto lg:h-96">
      <div class="grid place-items-center place-content-center gap-4 lg:mt-1 h-full">
        <div class="px-4 col-span-3">
          <div class="md:pr-12 mt-6 lg:mt-2 rounded-md p-2 bg-opacity-60">
            <template v-for="(a,b) in titles">
              <h1 :class="`hidden text-white font-extrabold text-2xl md:text-3xl lg:text-4xl uppercase lg:py-3 text-center animate-text-top ${b == index ? '' : 'hidden'}`">
                {{titles[index]}}
              </h1>
            </template>
            <template v-for="(c,d) in texts">
              <p :class="`hidden text-lg text-white text-center ${d == index ? '' : 'hidden'}`">
                {{texts[index]}}
              </p>
            </template>
          </div>
          <div class="hidden grid place-items-center">
            <a href="/properties">
              <button class="bg-amber-600 text-white p-2 font-semibold shadow-md rounded-full px-4 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">
                View Property
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      images:[
        `${import.meta.env.PUBLIC_CMS_LOCATION}assets/82c1dd32-4e1e-4ab7-a26d-595270c16afc`,
        `${import.meta.env.PUBLIC_CMS_LOCATION}assets/0588685a-4b75-4d31-9293-637ff0d96d5c`,
        `${import.meta.env.PUBLIC_CMS_LOCATION}assets/33f90d05-8cf8-4fd9-9bbf-516fc9f0f8d3`
      ],
      texts:[
        'We avail only the highest quality property to our clients',
        'For only 100k start building your life-long dream',
        'Jiinue na ploti from Modern Land Investment limited. An investment in land lasts a life time',
      ],
      titles:[
        'Welcome to Modern Land investment limited',
        'Pay 100k and start building',
        'Tembea na Modern, Boresha Maisha',
      ],
      index:0,
    }
  },
  methods:{
    loadNextBanner(){
      const max = 2
      const nindex = this.index + 1
      if(nindex > max){
        this.index = 0
      }else{
        this.index += 1
      }
    }
  },
  mounted(){
    setInterval( () => {
      this.loadNextBanner()
    },7000)
  }
}
</script>

<style>
.animate-text-left {
  animation-duration: 1s;
  animation-name: slidetop;
  animation-timing-function: linear;
}

.animate-text-right {
  animation-duration: 1s;
  animation-name: slidetop;
  animation-timing-function: linear;
}

.animate-text-top {
  animation-duration: 1s;
  animation-name: slidetop;
  animation-timing-function: linear;
}

@keyframes slideleft {
  from {
    margin-right: -1%;
  }

  to {
    margin-left: 0%;
  }
}

@keyframes slideright {
  from {
    margin-left: -1%;
  }

  to {
    margin-right: 0%;
  }
}

@keyframes slidetop {
  from {
    margin-top: -15%;
  }

  to {
    margin-top: 0%;
  }
}
</style>