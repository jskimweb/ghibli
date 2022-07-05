import { createStore } from 'vuex';
import { defineStore } from 'pinia';
import state from './state';
import mutations from './mutations';
import actions from './actions';

const store = createStore({
  state,
  mutations,
  actions,
});

export const useStore = defineStore('main', {
  state: () => {
    return {
      filmsList: [],
      peopleList: [],
      locationsList: [],
      speciesList: [],
      vehiclesList: [],
      oneFilm: {},
      onePeople: {},
      oneLocation: {},
      oneSpecies: {},
      oneVehicle: {},
      loadingStatus: false,
    };
  },
  mutations,
  actions,
});

export default store;
