<template>
<span class="go-back flex cursor-pointer sticky justify-end top-0 mt-0 text-white">
  <button @click="goBack" class="w-24 focus:outline-none bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 mt-2 border border-blue-500 hover:border-transparent rounded">go back</button>
</span>
</template>

<script>
export default {
  name: "GoBack",
  methods: {
    goBack() {
      return this.$router.push('/')
    }
  }
};
</script>

<style scoped>

</style>