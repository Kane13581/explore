/* eslint-disable */
<template>
  <div class="home bg-red-400">
    {{country.name}}
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: "CountryItem",
  props: {
    country: Object,
  },
  components: {

  },
  computed: {
    destinations() {
      return this.$store.getters.destinations;
    }
  }
};
</script>
