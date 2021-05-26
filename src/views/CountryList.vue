/* eslint-disable */
<template>
  <div class="home">
    <h1>Country List</h1>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-6">
    <div v-for="(destination, index) in destinations" :key="index">
      <CountryItem :country="destination"/>
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
  }
};
</script>
