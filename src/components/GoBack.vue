<template>
<span class="go-back flex cursor-pointer sticky top-6 text-white">
  <button @click="goBack" class="border-0">go back</button>
</span>
</template>

<script>
export default {
  name: "GoBack",
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>

</style>