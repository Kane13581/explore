/* eslint-disable */

import { createStore } from "vuex";
import store from "../countryStore";

export default createStore({
  state: {
    destinations: store.destinations,
  },
  getters: {
    destinations: (state) => {
      return state.destinations;
    },
    destination: (state) => (id) => {
      return state.destinations.find((destination) => destination.id.toString() === id.toString());
      },
    // destinationIndexById:
  },
  mutations: {},
  actions: {},
  modules: {},
});
