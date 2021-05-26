/* eslint-disable */
<template>
  <div class="home bg-red-400">
    <h1>Country List</h1>
    <div v-for="(destination, index) in destinations" :key="index">
      <CountryItem :country="destination"/>
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
