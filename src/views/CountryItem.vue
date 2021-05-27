/* eslint-disable */
<template>
  <div class="home mt-12">
<!--    <DeleteModal v-if="showDeleteModal" />-->
    <div class="max-w-xs bg-blue-100 rounded-xl overflow-hidden shadow-lg my-2">
      <img class="w-full" :src="require(`../assets/${country.image}`)" :alt="country.name">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ country.name }}</div>
        <p class="country-description-style text-justify overflow-ellipsis text-grey-darker text-base">
          {{ country.description }}
        </p>
      </div>
      <div class="card-buttons px-6 py-4 grid grid-cols-2">
        <button
          class="w-24 ml-5 self-center bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
          <button @click="deleteCountry(index)">
          Delete
          </button>
        </button>
        <button
          @click="toViewDetails"
          class="w-24 ml-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          View
        </button>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import DeleteModal from "../components/DeleteModal";

// import router from "../router";

export default {
  name: "CountryItem",
  components: {
    // DeleteModal,
  },
  props: {
    country: Object
  },
  data() {
    return {
      showDeleteModal: false,
    }
  },
  computed: {
    destinations() {
      return this.$store.getters.destinations;
    }
  },
  methods: {
    toViewDetails() {
      return this.$router.push({ path: "/country/:id" });
    },
    deleteCountry(index) {
      this.$emit('delete-country', index);
    }
  },

};
</script>

<style scoped>

.country-description-style {
  position: relative;
  max-height: 7.1rem;
  overflow: hidden;
}

.card-buttons {
  display: grid;
  justify-content: center;
}

</style>
