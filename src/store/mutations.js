export default {
  SET_FILMS(state, payload) {
    state.filmsList = payload;
  },
  SET_PEOPLE(state, payload) {
    state.peopleList = payload;
  },
  SET_LOCATIONS(state, payload) {
    state.locationsList = payload;
  },
  SET_SPECIES(state, payload) {
    state.speciesList = payload;
  },
  SET_VEHICLES(state, payload) {
    state.vehiclesList = payload;
  },
  SET_ONEFILM(state, payload) {
    state.oneFilm = payload;
  },
  SET_ONEPEOPLE(state, payload) {
    state.onePeople = payload;
  },
  SET_ONELOCATION(state, payload) {
    state.oneLocation = payload;
  },
  SET_ONESPECIES(state, payload) {
    state.oneSpecies = payload;
  },
  SET_ONEVEHICLE(state, payload) {
    state.oneVehicle = payload;
  },
  startSpinner(state) {
    state.loadingStatus = true;
  },
  endSpinner(state) {
    state.loadingStatus = false;
  },
};
