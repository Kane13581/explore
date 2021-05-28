/* eslint-disable */
<template>
  <div>
    <div class="bg-gray-800 h-12 flex items-center">
      <input v-model="searchCountry" class="h-8 w-full md:w-96 md:ml-12 focus:outline-none rounded bg-gray-300" type="text" placeholder="Search for country">
    </div>
  <div class="home p-4 md:p-10">
    <DeleteModal @cancel-delete="cancelDelete" @confirm-delete="confirmDelete" v-if="showDeleteModal" />
    <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-12 items-center">
      <div class="grid justify-center" v-for="(destination, index) in filteredCountries" :key="index">
        <CountryItem @delete-country="deleteCountry" :country="destination" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CountryItem from "./CountryItem";
import DeleteModal from "../components/DeleteModal";

export default {
  name: "Country List",
  components: {
    CountryItem,
    DeleteModal
  },
  props: {},
  data() {
    return {
      showDeleteModal: false,
      indexForDelete: '',
      searchCountry: '',
    };
  },
  computed: {
    destinations() {
      return this.$store.getters.destinations;
    },
    filteredCountries: function() {
      return this.$store.state.destinations.filter((destination) => {
        return destination.name.toLowerCase().match(this.searchCountry.toLowerCase());
      })
    }
  },
  methods: {
    confirmDelete() {
      this.destinations.splice(this.indexForDelete, 1);
      this.indexForDelete = "";
      this.showDeleteModal = !this.showDeleteModal;
    },
    cancelDelete() {
      this.showDeleteModal = !this.showDeleteModal;
    },
    deleteCountry(index) {
      this.showDeleteModal = !this.showDeleteModal;
      this.indexForDelete = index;
    },
  },
};
</script>
