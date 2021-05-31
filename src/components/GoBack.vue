<template>
<span class="go-back flex cursor-pointer sticky justify-end top-0 mt-0 text-white">
  <button @click="goBack" class="mt-0 md:mt-3 mr-4 w-full inline-flex justify-center rounded-md border border-green-300 shadow-sm px-4 py-2 bg-green-200 text-base font-bold text-green-600 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">go back</button>
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