/* eslint-disable */
<template>
  <div class="home p-4 md:p-10">
    <DeleteModal @cancel-delete="cancelDelete" @confirm-delete="confirmDelete" v-if="showDeleteModal" />
    <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-12 items-center">
      <div class="grid justify-center" v-for="(destination, index) in destinations" :key="index">
        <CountryItem @delete-country="deleteCountry" :country="destination" />
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
    };
  },
  computed: {
    destinations() {
      return this.$store.getters.destinations;
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

  }
};
</script>
