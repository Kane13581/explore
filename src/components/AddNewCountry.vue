<template>
  <div class="w-full flex justify-center md:justify-end">
    <div class="flex h-10 mt-2" v-if="toggleAddCountry">
      <button
        @click="showAddCountry"
        class="w-36 focus:outline-none bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Add country
      </button>
    </div>
    <div v-else class="w-96">
      <form @submit.prevent="addNewCountry">
        <div class="2xl:flex 2xl:justify-end mt-2">
          <div class="flex justify-between sm:flex-row rounded-none md:rounded md:mt-0">
            <button
              @click="cancelAddCountry"
              class="w-24 focus:outline-none bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
              Cancel
            </button>
            <button
              class="w-24 focus:outline-none bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white ml-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Add
            </button>
          </div>
          <div class="flex justify-start mt-1 mr-2">
            <input v-model="countryName"
                   class="focus:outline-none w-96 bg-gray-200 hover:bg-gray-300 text-blue-700 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
                   type="text"
                   placeholder="Country Name">
          </div>
          <div class="flex justify-start mt-1 mr-2">
            <input v-model="countryDescription"
                   class="focus:outline-none w-96 bg-gray-200 hover:bg-gray-300 text-blue-700 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
                   type="text"
                   placeholder="Country Description">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewCountry",
  data() {
    return {
      showCountryInputs: false,
      countryName: "",
      countryDescription: "",
      toggleAddCountry: true
    };
  },
  methods: {
    addNewCountry() {
      const newAddedCountry = {
        name: this.countryName,
        slug: "brazil",
        image: "brazil.jpg",
        id: this.$store.getters.destinations.length + 1,
        description: this.countryDescription,
        experiences: [{
          name: "New Country new Experiences",
          slug: "Eden",
          image: "",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }]
      };
      this.$store.dispatch("addNewCountry", newAddedCountry);
    },
    showAddCountry() {
      this.toggleAddCountry = !this.toggleAddCountry;
    },
    cancelAddCountry() {
      this.toggleAddCountry = !this.toggleAddCountry;
    }
  }
};
</script>

<style scoped>

</style>