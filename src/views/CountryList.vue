/* eslint-disable */
<template>
  <div class="home">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-6 items-center">
    <div class="grid justify-center" v-for="(destination, index) in destinations" :key="index">
      <CountryItem @delete-country="deleteCountry" :country="destination"/>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "../components/HelloWorld";


import CountryItem from "./CountryItem";
export default {
  name: "Country List",
  components: {
    CountryItem
    // HelloWorld,
  },
  computed: {
    destinations() {
      return this.$store.getters.destinations;
    }
  },
  methods: {
    deleteCountry(index) {
      this.destinations.splice(index, 1);
    }
  }
};
</script>
