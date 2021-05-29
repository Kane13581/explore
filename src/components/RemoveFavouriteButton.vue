<template>
<div>
  <button class="w-44 focus:outline-none bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" @click="removeFavourite">Remove from favourites</button>
</div>
</template>

<script>
export default {
  name: "RemoveFavouriteButton",
  methods: {
    removeFavourite() {
      this.$emit('removeFromFavourite');
    }
  }

};
</script>

<style scoped>

</style>