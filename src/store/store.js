import { createStore } from 'vuex'
import { getFilms, getPeople, getOneFilm, getOnePeople } from '@/api/api.js'

const store = createStore({
	state: {
		filmsList: [],
		peopleList: [],
		oneFilm: {},
		onePeople: {}
	},
	getters: {
		filmsList(state) {
			return state.filmsList;
		},
		peopleList(state) {
			return state.peopleList;
		},
		oneFilm(state) {
			return state.oneFilm;
		},
		onePeople(state) {
			return state.onePeople;
		}
	},
	mutations: {
		SET_FILMS(state, payload) {
			state.filmsList = payload;
		},
		SET_PEOPLE(state, payload) {
			state.peopleList = payload;
		},
		SET_ONEFILM(state, payload) {
			state.oneFilm = payload;
		},
		SET_ONEPEOPLE(state, payload) {
			state.onePeople = payload;
		}
	},
	actions: {
		async GET_FILMS({ commit	}) {
			const response = await getFilms();
			console.log(response.data);
			commit('SET_FILMS', response.data);
			return response;
		},
		async GET_PEOPLE({ commit }) {
			const response = await getPeople();
			console.log(response.data);
			commit('SET_PEOPLE', response.data);
			return response;
		},
		async GET_ONEFILM({ commit	}, filmId) {
			const response = await getOneFilm(filmId);
			console.log(response.data);
			commit('SET_ONEFILM', response.data);
			return response;
		},
		async GET_ONEPEOPLE({ commit }, peopleId) {
			const response = await getOnePeople(peopleId);
			console.log(response.data);
			commit('SET_ONEPEOPLE', response.data);
			return response;
		}
	}
});

export default store