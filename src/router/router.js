import { createRouter, createWebHistory } from 'vue-router';
import Films from '@/views/Films.vue'
import FilmDetail from '@/views/FilmDetail.vue'
import People from '@/views/People.vue'
import PeopleDetail from '@/views/PeopleDetail.vue'
import Locations from '@/views/Locations.vue'
import LocationDetail from '@/views/LocationDetail.vue'
import Species from '@/views/Species.vue'
import SpeciesDetail from '@/views/SpeciesDetail.vue'
import Vehicles from '@/views/Vehicles.vue'
import VehicleDetail from '@/views/VehicleDetail.vue'
import store from '@/store/store.js'

const router = createRouter({
	history: createWebHistory(),
	routes: [{
			path: '/',
			redirect: '/films'
		},
		{
			path: '/films',
			name: 'Films',
			component: Films,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_FILMS').then(() => {
					store.commit('endSpinner');
					next();
				}). catch(error => {
					console.log(error);
				});
			}
		},
		{
			path: '/films/:id',
			name: 'FilmDetail',
			component: FilmDetail,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_ONEFILM', to.params.id).then(() => {
					store.commit('endSpinner');
					next();
				}).catch(error => {
					console.log(error);
				});
			}
		},
		{
			path: '/people',
			name: 'People',
			component: People,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_PEOPLE').then(() => {
					store.commit('endSpinner');
					next();
				}).catch(error => {
					console.log(error);
				});
			}
		},
		{
			path: '/people/:id',
			name: 'PeopleDetail',
			component: PeopleDetail,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_ONEPEOPLE', to.params.id).then(() => {
					store.commit('endSpinner');
					next();
				}).catch(error => {
					console.log(error);
				});
			}
		},
		{
			path: '/locations',
			name: 'Locations',
			component: Locations,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_LOCATIONS').then(() => {
					store.commit('endSpinner');
					next();
				}).catch(error => {
					console.log(error);
				});
			}
		},
		{
			path: '/locations/:id',
			name: 'LocationDetail',
			component: LocationDetail,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_ONELOCATION', to.params.id).then(() => {
					store.commit('endSpinner');
					next();
				}).catch(error => {
					console.log(error);
				});
			}
		},
		{
			path: '/species',
			name: 'Species',
			component: Species,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_SPECIES').then(() => {
					store.commit('endSpinner');
					next();
				}).catch(error => {
					console.log(error);
				});
			}
		},
		{
			path: '/species/:id',
			name: 'SpeciesDetail',
			component: SpeciesDetail,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_ONESPECIES', to.params.id).then(() => {
					store.commit('endSpinner');
					next();
				}).catch(error => {
					console.log(error);
				});
			}
		},
		{
			path: '/vehicles',
			name: 'Vehicles',
			component: Vehicles,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_VEHICLES').then(() => {
					store.commit('endSpinner');
					next();
				}).catch(error => {
					console.log(error);
				});
			}
		},
		{
			path: '/vehicles/:id',
			name: 'VehicleDetail',
			component: VehicleDetail,
			beforeEnter: (to, from, next) => {
				store.commit('startSpinner');
				store.dispatch('GET_ONEVEHICLE', to.params.id).then(() => {
					store.commit('endSpinner');
					next();
				}).catch(error => {
					console.log(error);
				});
			}
		},
		{
			path: '/:pathMatch(.*)*',
			component: Films
		}
	]
});

export default router;