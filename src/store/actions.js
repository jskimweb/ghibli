import {
	getFilms,
	getOneFilm,
	getPeople,
	getOnePeople,
	getLocations,
	getOneLocation,
	getSpecies,
	getOneSpecies,
	getVehicles,
	getOneVehicle
} from '@/api/api.js'

export default {
	async GET_FILMS({	commit }) {
		const {	data } = await getFilms();
		commit('SET_FILMS', data);
		return data;
	},
	async GET_ONEFILM({	commit }, filmId) {
		const {	data } = await getOneFilm(filmId);
		commit('SET_ONEFILM', data);
		return data;
	},
	async GET_PEOPLE({ commit }) {
		const {	data } = await getPeople();
		commit('SET_PEOPLE', data);
		return data;
	},
	async GET_ONEPEOPLE({	commit }, peopleId) {
		const {	data } = await getOnePeople(peopleId);
		commit('SET_ONEPEOPLE', data);
		return data;
	},
	async GET_LOCATIONS({ commit }) {
		const {	data } = await getLocations();
		commit('SET_LOCATIONS', data);
		return data;
	},
	async GET_ONELOCATION({	commit }, locationId) {
		const {	data } = await getOneLocation(locationId);
		commit('SET_ONELOCATION', data);
		return data;
	},
	async GET_SPECIES({ commit }) {
		const {	data } = await getSpecies();
		commit('SET_SPECIES', data);
		return data;
	},
	async GET_ONESPECIES({ commit }, speciesId) {
		const {	data } = await getOneSpecies(speciesId);
		commit('SET_ONESPECIES', data);
		return data;
	},
	async GET_VEHICLES({ commit }) {
		const {	data } = await getVehicles();
		commit('SET_VEHICLES', data);
		return data;
	},
	async GET_ONEVEHICLE({	commit }, vehicleId) {
		const {	data } = await getOneVehicle(vehicleId);
		commit('SET_ONEVEHICLE', data);
		return data;
	}
}