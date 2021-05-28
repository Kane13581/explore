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
    },
    delete_country: (state, country) => {
      let index = state.destinations.findIndex((destination) => destination.id.toString() === country.id.toString());
      this.state.destinations.splice(index, 1);
      console.log(country);
    },
    add_newCountry: (state, newAddedCountry) => {
      state.destinations.unshift(newAddedCountry);
    }
  },
  actions: {
    addNewEditedCountry(context, newCountry) {
      context.commit('add_NewEditedCountry', newCountry)
    },
    deleteCountry(context, country) {
      context.commit('delete_country', country)
      console.log(country);
    },
    addNewCountry(context, newAddedCountry) {
      context.commit('add_newCountry', newAddedCountry)
    }
  },
  modules: {},
});
