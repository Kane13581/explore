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
    destinationIndexById: (state) => (id) => {
      return state.destinations.findIndex((destination) => destination.id.toString() === id.toString());
    },
  },
  mutations: {
    add_NewEditedCountry: (state, newCountry) => {
      let index = state.destinations.findIndex((destination) => destination.id.toString() === newCountry.id.toString());
      state.destinations.splice(index, 1, newCountry);
    },
    delete_country: (state, index) => {
      state.destinations.splice(index, 1);
    },
    add_newCountry: (state, newAddedCountry) => {
      state.destinations.unshift(newAddedCountry);
    },
    add_toFavourites: (state, favouriteCountry) => {
      let index = state.destinations.findIndex((destination) => destination.id.toString() === favouriteCountry.id.toString());
      state.destinations.splice(index, 1, favouriteCountry)
    }
  },
  actions: {
    addNewEditedCountry(context, newCountry) {
      context.commit('add_NewEditedCountry', newCountry)
    },
    deleteCountry(context, index) {
      context.commit('delete_country', index)
    },
    addNewCountry(context, newAddedCountry) {
      context.commit('add_newCountry', newAddedCountry)
    },
    addToFavourites(context, favouriteCountry) {
      context.commit('add_toFavourites', favouriteCountry)
    }
  },
  modules: {},
});
