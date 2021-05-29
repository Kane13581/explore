<template>
  <div id="nav" class="bg-gradient-to-r from-green-100 to-blue-200 min-h-screen">
    <div>
      <TheHeader />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";

export default {
  name: "App",
  components: {
    TheHeader,
  }
}

</script>
<style>

html {
  overflow: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: visible;
}

#nav {

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
