<template>
  <div>
    <GoBack />
    <div class="imageStyle grid justify-center xl:justify-self-start">
      <div class="relative">
        <svg :class="country.isFavourite ? 'text-yellow-500' : 'text-white'" class="absolute right-1 mt-2 mr-1 w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
      </div>
      <img class="xl:h-96 border-double border-8 border-gray-400" :src="require(`../assets/${country.image}`)"
           :alt="country.name">
    </div>
    <div v-if="!showEditInput">
      <div class="flex justify-center p-4">
        <h1 class="text-3xl rounded-xl w-1/5 text-4xl font-serif">{{ country.name }}</h1>
      </div>
    </div>
<!--      <input v-model="newTitle"-->
<!--             class="w-64 mt-4 border-double border-8 border-gray-400 focus:outline-none h-14 text-2xl text-center bg-yellow-100 rounded-2xl"-->
<!--             type="text" placeholder="New Country Name">-->
<!--    </div>-->
<!--    <div class="flex">-->
      <div v-if="!showEditInput" class="flex md:w-1/4">
        <button
          class="font-bold w-36 ml-4 focus:outline-none bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          @click="toggleInput">Edit Country
        </button>
      </div>
<!--      <div v-else class="absolute w-full bottom-10 flex justify-between md:justify-around">-->
<!--        <button @click="saveEditedCountry()"-->
<!--                class="w-24 focus:outline-none bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">-->
<!--          Save-->
<!--        </button>-->
<!--        <button @click="cancelEditing"-->
<!--                class="w-24 focus:outline-none bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">-->
<!--          Cancel-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
    <div class="flex md:p-6 justify-center">
      <div v-if="!showEditInput"
           class="descriptionStyle w-4/5 md:w-2/5 border-double border-8 border-gray-400 grid justify-center text-justify ">
        <p class="flex justify-center pt-1 p-3">{{ country.description }}</p>
      </div>
<!--      <div v-else class="w-full">-->
<!--        <div class="h-32 w-full">-->
<!--          <textarea style="overflow: hidden"-->
<!--                    class="h-32 w-3/4 md:w-3/6 p-2 text-justify border-double border-8 border-gray-400 focus:outline-none text-center bg-yellow-100 rounded-2xl"-->
<!--                    v-model="newDescription"-->
<!--                    placeholder="New Country Description"></textarea>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div v-if="!country.isFavourite" class="w-full flex justify-center items-end h-24">
      <button
        class="w-44 h-11 focus:outline-none bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click="addToFavourites">
        Add to favourites
      </button>
    </div>
    <div v-else class="w-full flex justify-center items-end h-24">
      <RemoveFavouriteButton @removeFromFavourite="RemoveFromFavourite" />
    </div>
    <EditCountry @countryInfo="saveEditedCountry" :country="country" :countryId="countryId" />
  </div>
</template>

<script>
import GoBack from "./GoBack";
import RemoveFavouriteButton from "./RemoveFavouriteButton";
import EditCountry from "./EditCountry";

export default {
  name: "CountryDetails",
  components: {
    GoBack,
    RemoveFavouriteButton,
    EditCountry,
  },
  props: {},
  data() {
    return {
      countryId: this.$route.params.id,
      destination: this.$store.state.destination,
      country: null,
      showEditInput: false,
      newTitle: "",
      newDescription: ""
    };
  },
  methods: {
    getCountry() {
      this.country = this.$store.getters.destination(this.countryId);
    },
    toggleInput() {
      this.showEditInput = !this.showEditInput;
      this.newTitle = this.country.name;
      this.newDescription = this.country.description;

    },
    // cancelEditing() {
    //   this.showEditInput = !this.showEditInput;
    //   this.newTitle = "";
    //   this.newDescription = "";
    // },
    saveEditedCountry(newCountry) {
      // const newCountry = {
      //   name: this.newTitle,
      //   slug: "brazil",
      //   image: "brazil.jpg",
      //   id: this.countryId,
      //   description: this.newDescription,
      //   experiences: [{
      //     name: "New Country new Experiences",
      //     slug: "Eden",
      //     image: "",
      //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      //   }]
      // };
      this.$store.dispatch("addNewEditedCountry", newCountry);
      this.showEditInput = !this.showEditInput;
      this.getCountry();
      console.log(newCountry, this.$store.state.destinations, this.countryId);
    },
    addToFavourites() {
      const favouriteCountry = { ...this.country, isFavourite: true };
      this.$store.dispatch("addToFavourites", favouriteCountry);
      console.log(favouriteCountry);
      this.getCountry();
    },
    RemoveFromFavourite() {
      this.country.isFavourite = !this.country.isFavourite;
    }
  },
  created() {
    this.getCountry();
  }
};
</script>

<style scoped>

.favoriteClass {
  background-color: red;
}

</style>
