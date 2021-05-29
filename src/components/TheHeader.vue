<template>
  <nav class="headerStyle bg-gray-800">
    <div class="relative flex items-center h-16">
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <button @click="toCountryPage"
                    class="focus:outline-none bg-gray-900 text-gray-100 px-3  py-2 rounded-md text-sm font-medium font-bold text-gray-300">
              Country List
            </button>
            <button @click="toFavouritePage"
                    class="focus:outline-none bg-gray-900 text-gray-100 px-3  py-2 rounded-md text-sm font-medium font-bold text-gray-300">
              Favourite Countries
            </button>
          </div>
        </div>
      </div>
      <div class="flex items-center sm:pr-0">
        <div class="ml-3 relative">
          <div>
            <button type="button"
                    class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <button @click="toCountryPage"
                class="focus:outline-none bg-gray-900 text-gray-100 px-3  py-2 rounded-md text-sm font-medium font-bold text-gray-300">
          Country List
        </button>
        <button @click="toFavouritePage"
                class="focus:outline-none bg-gray-900 text-gray-100 px-3  py-2 rounded-md text-sm font-medium font-bold text-gray-300">
          Favourite Countries
        </button>
      </div>
    </div>
  </nav>
</template>

<script>


export default {
  name: "TheHeader",
  components: {

  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    toCountryPage() {
      return this.$router.push("/");
    },
    toFavouritePage() {
      return this.$router.push("/favourite-countries");
    }
  }
};
</script>

<style scoped>

.headerStyle {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
}

</style>


<!-- Mobile menu button-->
<!--          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">-->
<!--            <span class="sr-only">Open main menu</span>-->
<!--            &lt;!&ndash;-->
<!--              Icon when menu is closed.-->

<!--              Heroicon name: outline/menu-->

<!--              Menu open: "hidden", Menu closed: "block"-->
<!--            &ndash;&gt;-->
<!--            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />-->
<!--            </svg>-->
<!--            &lt;!&ndash;-->
<!--              Icon when menu is open.-->

<!--              Heroicon name: outline/x-->

<!--              Menu open: "block", Menu closed: "hidden"-->
<!--            &ndash;&gt;-->
<!--            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />-->
<!--            </svg>-->
<!--          </button>-->


<!--
             Dropdown menu, show/hide based on menu state.

             Entering: "transition ease-out duration-100"
               From: "transform opacity-0 scale-95"
               To: "transform opacity-100 scale-100"
             Leaving: "transition ease-in duration-75"
               From: "transform opacity-100 scale-100"
               To: "transform opacity-0 scale-95"
           -->
<!--            <div class="origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">-->
<!--            <div class="origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">-->
<!--              &lt;!&ndash; Active: "bg-gray-100", Not Active: "" &ndash;&gt;-->
<!--              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>-->
<!--              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>-->
<!--              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>-->
<!--            </div>-->