<template>
  <template v-if="images.type == 'photo'">
    <svg @click="pic_key -= 1" v-if="pic_key > 0" class="w-12 h-12 absolute left-2 text-white cursor-pointer" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
  	<template v-for="(item,index) in images.files">
  		<img :src="`${link}assets/${item.directus_files_id}?fit=cover&height=420&width=1080&format=webp`" alt="Gallery image" height="720" width="1280" :class="`bg-cover ${index == pic_key ? '' : 'hidden'}`" v-if="item">
  	</template>
  	<svg @click="pic_key += 1" v-if="!end_slider" class="w-12 h-12 absolute right-2 text-white cursor-pointer" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
  	<div class="absolute left-2 top-2 bg-white bg-opacity-70">
  		<span class="p-2 text-lg font-bold">
  			{{pic_key + 1}} / {{total_pics}}
  		</span>
  	</div>
  </template>
  <template v-if="!images.type">
    <svg @click="pic_key -= 1" v-if="pic_key > 0" class="w-12 h-12 absolute left-2 text-white cursor-pointer" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    <template v-for="(item,index) in images.files">
      <img :src="`${link}assets/${item.directus_files_id}?fit=cover&height620&width=1080&format=webp`" alt="Gallery image" height="620" width="1080" :class="`bg-cover ${index == pic_key ? '' : 'hidden'}`" v-if="item">
    </template>
    <svg @click="pic_key += 1" v-if="!end_slider" class="w-12 h-12 absolute right-2 text-white cursor-pointer" style="top:50%;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
    <div class="absolute left-2 top-2 bg-white bg-opacity-70">
      <span class="p-2 text-lg font-bold">
        {{pic_key + 1}} / {{total_pics}}
      </span>
    </div>
  </template>
  <div class="container mx-auto my-6" v-if="images.type == 'video'">
  	<div class="mt-0">
      <video class="w-full md:h-96" controls @contextmenu.prevent v-if="images.files[0]" :poster="`${link}assets/${images.featured_image}`">
        <source :src="`${link}assets/${images.files[0].directus_files_id}`" type="video/mp4">
        Your browser does not support HTML video.
      </video>
    </div>
  </div>
</template>

<script>
export default{
  props:{
    images: Object | Array,
    link: String
  },
  data(){
    return{
      pic_key:0,
      img_index:0,
      end_slider: false,
      total_pics: 0,
    }
  },
  watch:{
    pic_key(val){
      this.img_index = val
      const total = this.images.files.length - 1
      if(val == total || total == -1){
        this.end_slider = true
      }else{
        this.end_slider = false
      }
    }
  },
  created(){
    this.total_pics = this.images.files.length

    if(this.total_pics == 1){
      this.end_slider = true
    }else{
      this.end_slider = false
    }
  }
}
</script>
