/* eslint-disable */
<template>
  <div>
    <div class="md:flex">
      <div class="p-2 w-full md:w-1/2">
        <div class="flex items-center rounded-full shadow-xl">
          <input v-model="searchCountry" class="rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Search">
          <div class="p-4">
            <img class="w-7" src="../assets/search.png" alt="search">
          </div>
        </div>
      </div>
      <AddNewCountry />
    </div>
  <div class="home p-4 md:p-10">
    <DeleteModal v-if="showDeleteModal" @cancel-delete="cancelDelete" @confirm-delete="confirmDelete" />
    <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-12 items-center">
      <div class="grid justify-center" v-for="(destination, index) in filteredCountries" :key="index">
        <CountryItem @delete-country="deleteCountry" :country="destination" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import CountryItem from "./CountryItem";
import DeleteModal from "../components/DeleteModal";
import AddNewCountry from "../components/AddNewCountry";


export default {
  name: "Country List",
  components: {
    CountryItem,
    DeleteModal,
    AddNewCountry,

  },
  props: {},
  data() {
    return {
      showDeleteModal: false,
      indexForDelete: "",
      searchCountry: ""
    };
  },
  computed: {
    destinations() {
      return this.$store.getters.destinations;
    },
    filteredCountries: function() {
      return this.$store.state.destinations.filter((destination) => {
        return destination.name.toLowerCase().match(this.searchCountry.toLowerCase());
      });
    }

  },
  methods: {
    confirmDelete() {
      this.$store.dispatch("deleteCountry", this.indexForDelete);
      this.indexForDelete = "";
      this.showDeleteModal = !this.showDeleteModal;
    },
    cancelDelete() {
      this.showDeleteModal = !this.showDeleteModal;
    },
    deleteCountry(index) {
      this.showDeleteModal = !this.showDeleteModal;
      this.indexForDelete = index;
    }
  }
};
</script>
