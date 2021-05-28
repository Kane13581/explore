<template>
  <div class="">
    <form @submit.prevent="addNewCountry">
      <div class="grid sm:grid-flow-row md:grid-cols-2">
        <div class="grid sm:grid-flow-row md:grid-cols-2">
          <div>
            <input v-model="countryName"
                   class="bg-gray-900 text-gray-100 px-3 py-2 rounded-md text-sm font-medium font-bold text-gray-300"
                   type="text"
                   placeholder="Country Name">
          </div>
          <div>
            <input v-model="countryDescription"
                   class="bg-gray-900 text-gray-100 px-3  py-2 rounded-md text-sm font-medium font-bold text-gray-300"
                   type="text"
                   placeholder="Country Description">
          </div>
        </div>
        <div class="rounded bg-gray-900 sm:mt-1 md:mt-0">
          <button class="bg-gray-900 text-gray-100 px-3  py-2 rounded-md text-sm font-medium font-bold text-gray-300">
            Add Country
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddNewCountry",
  data() {
    return {
      showCountryInputs: false,
      countryName: "",
      countryDescription: ""
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
      this.$store.dispatch('addNewCountry', newAddedCountry);
    }
  }
};
</script>

<style scoped>

</style>