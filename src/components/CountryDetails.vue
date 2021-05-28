<template>
  <div>
    <GoBack />
    <div v-if="!showEditInput">
      <h1 class="text-3xl mt-12 ">All about {{ country.name }}</h1>
    </div>
    <div v-else>
      <h1 class="text-2xl">Insert your Country name below:</h1>
      <input v-model="newTitle" class="w-64 bg-gray-300 rounded" type="text" placeholder="New Country Name">
    </div>
    <div class="grid md:p-6 md:grid-cols-2 mt-12 ">
      <div class="imageStyle xl:ml-6 grid justify-center xl:justify-self-start ">
        <img class="xl:h-96" :src="require(`../assets/${country.image}`)" :alt="country.name">
      </div>
      <div v-if="!showEditInput" class="descriptionStyle md:ml-12 grid justify-center text-justify ">
        <p class="flex justify-center pt-0 p-6">{{ country.description }}</p>
      </div>
      <div v-else>
        <h1 class="text-2xl">Insert your country description below:</h1>
        <textarea class="w-96 bg-gray-300 rounded" v-model="newDescription" placeholder="New Country Description"></textarea>
      </div>
    </div>
    <div class="">
      <button v-if="!showEditInput" class="text-2xl" @click="toggleInput"  >Edit Country</button>
      <div v-else class="flex justify-around">
        <button @click="saveEditedCountry()" class="w-24 focus:outline-none bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Save</button>
        <button @click="cancelEditing" class="w-24 focus:outline-none bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Cancel</button>
      </div>
    </div>
    <div>
      <button class="w-44 focus:outline-none bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="addToFavourites">
      Add to favourites
      </button>
    </div>
  </div>
</template>

<script>
import GoBack from "./GoBack";

export default {
  name: "CountryDetails",
  components: {
    GoBack
  },
  props: {},
  data() {
    return {
      countryId: this.$route.params.id,
      country: null,
      showEditInput: false,
      newTitle: "",
      newDescription: "",
    };
  },
  methods: {
    getCountry() {
      this.country = this.$store.getters.destination(this.countryId);
    },
    toggleInput() {
      this.showEditInput = !this.showEditInput;
    },
    cancelEditing() {
      this.showEditInput = !this.showEditInput;
      this.newTitle = "";
      this.newDescription = "";
    },
    saveEditedCountry() {
      const newCountry = {
        name: this.newTitle,
        slug: 'brazil',
        image: 'brazil.jpg',
        id: this.countryId,
        description: this.newDescription,
        experiences: [{
          name: 'New Country new Experiences',
          slug: 'Eden',
          image: '',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }],
      }
      this.$store.dispatch('addNewEditedCountry', newCountry);
      this.showEditInput = !this.showEditInput;
      this.getCountry();
    },
    addToFavourites() {

    }
  },
  created() {
    this.getCountry();
    /* eslint-disable */

  }
};
</script>

<style scoped>

</style>
