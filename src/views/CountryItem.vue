/* eslint-disable */
<template>
  <div class="home">
    <div class="bg-blue-100 rounded-xl overflow-hidden shadow-lg my-2">
      <img class="w-full" :src="require(`../assets/${country.image}`)" :alt="country.name">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ country.name }}</div>
        <p class="h-32 country-description-style text-justify overflow-ellipsis text-grey-darker text-base">
          {{ country.description }}
        </p>
      </div>
      <div class="w-full flex justify-between px-6 py-4">
        <button @click="deleteCountry(country)"
          class="w-24 focus:outline-none bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
          Delete
        </button>
        <button
          @click="toViewDetails"
          class="w-24 focus:outline-none bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          View
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import router from "../router";

export default {
  name: "CountryItem",
  components: {
  },
  props: {
    country: Object
  },
  data() {
    return {
    }
  },
  computed: {
    destinations() {
      return this.$store.getters.destinations;
    }
  },
  methods: {
    toViewDetails() {
      return this.$router.push({ path: `/country/${this.country.id}` });
    },
    deleteCountry(country) {
      this.$emit('delete-country');
      this.$store.dispatch('deleteCountry', country)
      },
    // getCountryIndex() {
    //   this.indexForDelete = this.$store.getters.destinationIndexById()
    //   console.log(this.indexForDelete);
    // }
  },
  // created() {
  //   this.getCountryIndex();
  // }
};
</script>

<style scoped>

.country-description-style {
  position: relative;
  max-height: 7.1rem;
  overflow: hidden;
}



</style>
