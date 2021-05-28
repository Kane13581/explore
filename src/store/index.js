/* eslint-disable */

import { createStore } from "vuex";
import store from "../countryStore";

export default createStore({
  state: {
    destinations: store.destinations,
    countryId: store.destinations.id,
  },
  getters: {
    destinations: (state) => {
      return state.destinations;
    },
    destination: (state) => (id) => {
      return state.destinations.find((destination) => destination.id.toString() === id.toString());
      },
    destinationIndexById: (state) => (id) => {
      return state.destinations.findIndex((destination) => destination.id == id);
    }
  },
  mutations: {
    add_NewEditedCountry: (state, newCountry) => {
      let index = state.destinations.findIndex((destination) => destination.id.toString() === newCountry.id.toString());
      state.destinations.splice(index, 1, newCountry);
      console.log(newCountry);
    }
  },
  actions: {
    addNewEditedCountry(context, newCountry) {
      context.commit('add_NewEditedCountry', newCountry)
      console.log(newCountry);
    }
  },
  modules: {},
});
