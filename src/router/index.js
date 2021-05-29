import { createRouter, createWebHashHistory } from "vue-router";
import CountryList from "../views/CountryList.vue";
import CountryDetails from "../components/CountryDetails";
import FavouriteList from "../components/FavouriteList";

const routes = [
  {
    path: "/",
    name: "CountryList",
    component: CountryList,
  },
  {
    path: "/country/:id",
    name: "CountryDetails",
    component: CountryDetails,
  },
  {
    path: "/favourite-countries",
    name: "FavouriteList",
    component: FavouriteList,
  },
  {
    path: "/country-item",
    name: "CountryItem",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CountryItem"),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
