<template>
<div>
  <div class="flex">
    <div>
      <input v-model="newTitle"
             class="w-64 mt-4 border-double border-8 border-gray-400 focus:outline-none h-14 text-2xl text-center bg-yellow-100 rounded-2xl"
             type="text" placeholder="New Country Name">
    </div>
    <div class="w-full">
      <div class="h-32 w-full">
          <textarea style="overflow: hidden"
                    class="h-32 w-3/4 md:w-3/6 p-2 text-justify border-double border-8 border-gray-400 focus:outline-none text-center bg-yellow-100 rounded-2xl"
                    v-model="newDescription"
                    placeholder="New Country Description"></textarea>
      </div>
    </div>
    <div class="flex md:w-1/4">
      <button
          class="font-bold w-36 ml-4 focus:outline-none bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          @click="toggleInput">Edit Country
      </button>
    </div>
    <div v-else class="absolute w-full bottom-10 flex justify-between md:justify-around">
      <button @click="sendCountryInfo"
              class="w-24 focus:outline-none bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
        Save
      </button>
      <button @click="cancelEditing"
              class="w-24 focus:outline-none bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
        Cancel
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "EditCountry",
  props: {

  },
  data() {
    return {
      newTitle: '',
      newDescription: '',
    }
  },
  methods: {
    toggleInput() {
      this.showEditInput = !this.showEditInput;
      this.newTitle = this.country.name;
      this.newDescription = this.country.description;
    },
    cancelEditing() {
      this.showEditInput = !this.showEditInput;
      this.newTitle = "";
      this.newDescription = "";
    },
    sendCountryInfo() {
      const newCountry = {
        name: this.newTitle,
        slug: "brazil",
        image: "brazil.jpg",
        id: this.countryId,
        description: this.newDescription,
        experiences: [{
          name: "New Country new Experiences",
          slug: "Eden",
          image: "",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }]
      };
    }
  }
}
</script>

<style scoped>

</style>