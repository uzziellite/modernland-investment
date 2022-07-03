<template>
	<form @submit.prevent="book">
  	<div class="bg-white dark:bg-stone-700 p-2 shadow-md rounded-lg">
  		<h3 class="dark:text-white dark:font-black text-lg">
  			Book a free site visit
  		</h3>
  		<div class="relative w-full mb-3">
        <label
          class="block uppercase text-xs font-bold mb-2 dark:text-white"
          htmlFor="Name"
        >
          Name
          <span class="text-red-600 dark:text-white">
            * (Required)
          </span>
        </label>
        <input type="text" class="border-0 px-3 py-3 bg-sky-100 dark:bg-stone-900 rounded text-sm shadow-md focus:outline-none focus:ring dark:text-white w-full ease-linear transition-all duration-150 dark:placeholder:text-stone-300" required placeholder="Please enter your name" v-model="form.name">
      </div>
      <div class="relative w-full mb-3">
        <label
          class="block uppercase text-xs font-bold mb-2 dark:text-white"
          htmlFor="Phone"
        >
          Phone
          <span class="text-red-600 dark:text-white">
            * (Required)
          </span>
        </label>
        <input type="text" class="border-0 px-3 py-3 bg-sky-100 dark:bg-stone-900 rounded text-sm shadow-md focus:outline-none focus:ring dark:text-white w-full ease-linear transition-all duration-150 dark:placeholder:text-stone-300" required placeholder="0712345678" v-model="form.phone">
      </div>
      <div class="relative w-full mb-3">
        <label
          class="block uppercase text-xs font-bold mb-2 dark:text-white"
          htmlFor="date"
        >
          Date
          <span class="text-red-600 dark:text-white">
            * (Required)
          </span>
        </label>
        <input type="date" class="border-0 px-3 py-3 bg-sky-100 dark:bg-stone-900 rounded text-sm shadow-md focus:outline-none focus:ring dark:text-white w-full ease-linear transition-all duration-150 dark:placeholder:text-stone-300" required :min="minDate" v-model="form.date">
      </div>
      <div class="relative w-full mb-3">
        <label
          class="block uppercase text-xs font-bold mb-2 dark:text-white"
          htmlFor="location"
        >
          Location
          <span class="text-red-600 dark:text-white">
            * (Required)
          </span>
        </label>
        <select class="border-0 px-3 py-3 bg-sky-100 dark:bg-stone-900 rounded text-sm shadow-md focus:outline-none focus:ring dark:text-white w-full ease-linear transition-all duration-150 dark:placeholder:text-stone-300" required v-model="form.location">
        	<option>Joska, Goshen Gardens Phase II</option>
        </select>
      </div>
      <button class="bg-red-600 dark:bg-stone-700 text-white p-2 rounded-lg mt-2 flex space-x-2 place-content-center w-full" v-if="!booked">
        <span v-if="!loading">Book Now</span>
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="loading">
	        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
	        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
	      </svg>
      </button>
      <div :class="`mt-2 ${response_type ? 'text-green-600 dark:text-white' : 'text-red-600 dark:font-semibold'}`">
      	{{response}}
      </div>
  	</div>
	</form>
</template>

<script>
export default{
	data(){
		return{
			minDate: `${new Date().toJSON().substr(0,10)}`,
			response:"",
			response_type:true,
			form:{},
			loading: false,
			booked: false,
		}
	},
	methods:{
		book(){
			this.loading = true

			const data = {
    		name: this.form.name,
    		date: this.form.date,
    		phone: this.form.phone,
    		location: this.form.location
    	}

    	fetch(`${import.meta.env.PUBLIC_CMS_LOCATION}items/m_contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(() => {
    		this.loading = false
    		this.response_type = true
    		this.response = "Successfully booked. We will contact you soon"
    		this.booked = true
    	}).catch(() => {
    		this.loading = false
    		this.response_type = false
    		this.response = "Unable to book right now. Please try again later"
    		this.booked = false
        console.error('Unable to send booking data. Please check the network')
    	})
    }
	}
}
</script>