/* eslint-disable */
<template>
  <div class="home">
    <div class="bg-yellow-50 rounded-xl overflow-hidden shadow-lg my-2">
      <div class="relative">
        <svg :class="country.isFavourite ? 'text-yellow-500' : 'text-gray-500'" class="absolute right-1 mt-2 mr-1 w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
      </div>
      <img class="w-full" :src="require(`../assets/${country.image}`)" :alt="country.name">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ country.name }}</div>
        <p class="h-32 country-description-style text-justify overflow-ellipsis text-grey-darker text-base">
          {{ country.description }}
        </p>
      </div>
      <div class="w-full flex justify-between px-6 py-4">
        <button @click="deleteCountry"
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
    deleteCountry() {
      this.$emit('delete-country', this.indexForDelete);
      },
    getCountryIndex() {
      this.indexForDelete = this.$store.getters.destinationIndexById(this.country.id)
    }
  },
  created() {
    this.getCountryIndex();
  }
};
</script>

<style scoped>

.country-description-style {
  position: relative;
  max-height: 7.1rem;
  overflow: hidden;
}

.favoriteClass {
  background-color: red;
}
</style>
