/* eslint-disable */
<template>
  <div class="home">
    <DeleteModal @cancel-delete="cancelDelete" @confirm-delete="confirmDelete" v-if="showDeleteModal"/>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-6 items-center">
    <div class="grid justify-center" v-for="(destination, index) in destinations" :key="index">
      <CountryItem @delete-country="deleteCountry" :country="destination"/>
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
    DeleteModal,
  },
  props: {

  },
  data() {
    return  {
      showDeleteModal: false,
      baseValue: true,
    }
  },
  computed: {
    destinations() {
      return this.$store.getters.destinations;
    }
  },
  methods: {
    confirmDelete() {
      this.baseValue = false;
    },
    cancelDelete() {
      this.baseValue = true;
    },
    deleteCountry(index) {
        this.destinations.splice(index, 1);
      }
    },
};
</script>
