<template>
  <div class="home p-4 md:p-10">
    <DeleteModal v-if="showDeleteModal" @cancel-delete="cancelDelete" @confirm-delete="confirmDelete"/>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-12 items-center">
      <div class="grid justify-center w-96" v-for="(country, index) in favouriteDestinations" :key="index">
        <div class="home">
          <div :class="{favoriteClass: country.isFavourite}" class="bg-white rounded-xl overflow-hidden shadow-lg my-2">
            <img class="w-full" :src="require(`../assets/${country.image}`)" :alt="country.name">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ country.name }}</div>
              <p class="h-32 country-description-style text-justify overflow-ellipsis text-grey-darker text-base">
                {{ country.description }}
              </p>
            </div>
            <div class="w-full flex justify-center px-6 py-4">
              <button
                @click="toViewDetails(country)"
                class="w-24 focus:outline-none bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteModal from "./DeleteModal";

export default {
  name: "FavouriteList",
  components: {
    DeleteModal
  },
  data() {
    return {
      showDeleteModal: false,
      indexForDelete: "",
    }
  },
  computed: {
    favouriteDestinations() {
      return this.$store.getters.destinations.filter(item => {
        return item.isFavourite === true;
      });
    }
  },
  methods: {
    toViewDetails(country) {
      return this.$router.push({ path: `/country/${country.id}` });
    },
  }
};
</script>

<style scoped>

.country-description-style {
  position: relative;
  max-height: 7.4rem;
  overflow: hidden;
}

</style>