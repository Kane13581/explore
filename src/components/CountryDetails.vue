<template>
  <div>
    <h1 class="text-3xl mt-12 ">All about {{ country.name }}</h1>
    <div class="grid md:grid-cols-2 mt-12 ">
      <div class="imageStyle grid justify-center xl:justify-self-start ">
        <img class="xl:h-96" :src="require(`../assets/${country.image}`)" :alt="country.name">
      </div>
      <div class="descriptionStyle ml-12 grid justify-center text-justify ">
        {{ country.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryDetails",
  components: {},
  props: {},
  data() {
    return {
      countryId: this.$route.params.id,
      country: null,
    };
  },
  // computed: {
  //   countryTwo() {
  //     return this.$store.getters.destination(this.countryId);
  //   }
  // },
  methods: {
    getCountry() {
      this.country = this.$store.getters.destination(this.countryId);
      /* eslint-disable */

    }
  },
  mounted() {
    this.getCountry();
    /* eslint-disable */

  },
};
</script>

<style scoped>

</style>