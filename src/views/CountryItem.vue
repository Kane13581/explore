/* eslint-disable */
<template>
  <div class="home">
    <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
      <img class="w-full" :src="require(`../assets/${country.image}`)" :alt="country.name">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ country.name }}</div>
        <p class="text-grey-darker text-base">
          {{country.description}}
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
      </div>
    </div>

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
