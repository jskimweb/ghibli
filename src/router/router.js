import { createRouter, createWebHistory } from 'vue-router';
import store from '../stores/index.js';
import Films from '@/views/Films.vue';
import People from '@/views/People.vue';
import Locations from '@/views/Locations.vue';
import Species from '@/views/Species.vue';
import Vehicles from '@/views/Vehicles.vue';
import FilmDetail from '@/views/FilmDetail.vue';
import PeopleDetail from '@/views/PeopleDetail.vue';
import LocationDetail from '@/views/LocationDetail.vue';
import SpeciesDetail from '@/views/SpeciesDetail.vue';
import VehicleDetail from '@/views/VehicleDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/films',
    },
    {
      path: '/films',
      name: 'Films',
      component: Films,
      beforeEnter: async (to, from, next) => {
        store.commit('startSpinner');
        await store.dispatch('GET_FILMS');
        store.commit('endSpinner');
        next();
      },
    },
    {
      path: '/people',
      name: 'People',
      component: People,
      beforeEnter: async (to, from, next) => {
        store.commit('startSpinner');
        await store.dispatch('GET_PEOPLE');
        store.commit('endSpinner');
        next();
      },
    },
    {
      path: '/locations',
      name: 'Locations',
      component: Locations,
      beforeEnter: async (to, from, next) => {
        store.commit('startSpinner');
        await store.dispatch('GET_LOCATIONS');
        store.commit('endSpinner');
        next();
      },
    },
    {
      path: '/species',
      name: 'Species',
      component: Species,
      beforeEnter: async (to, from, next) => {
        store.commit('startSpinner');
        await store.dispatch('GET_SPECIES');
        store.commit('endSpinner');
        next();
      },
    },
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: Vehicles,
      beforeEnter: async (to, from, next) => {
        store.commit('startSpinner');
        await store.dispatch('GET_VEHICLES');
        store.commit('endSpinner');
        next();
      },
    },
    {
      path: '/films/:id',
      name: 'FilmDetail',
      component: FilmDetail,
      beforeEnter: async (to, from, next) => {
        store.commit('startSpinner');
        await store.dispatch('GET_ONEFILM', to.params.id);
        store.commit('endSpinner');
        next();
      },
    },
    {
      path: '/people/:id',
      name: 'PeopleDetail',
      component: PeopleDetail,
      beforeEnter: async (to, from, next) => {
        store.commit('startSpinner');
        await store.dispatch('GET_ONEPEOPLE', to.params.id);
        store.commit('endSpinner');
        next();
      },
    },
    {
      path: '/locations/:id',
      name: 'LocationDetail',
      component: LocationDetail,
      beforeEnter: async (to, from, next) => {
        store.commit('startSpinner');
        await store.dispatch('GET_ONELOCATION', to.params.id);
        store.commit('endSpinner');
        next();
      },
    },
    {
      path: '/species/:id',
      name: 'SpeciesDetail',
      component: SpeciesDetail,
      beforeEnter: async (to, from, next) => {
        store.commit('startSpinner');
        await store.dispatch('GET_ONESPECIES', to.params.id);
        store.commit('endSpinner');
        next();
      },
    },
    {
      path: '/vehicles/:id',
      name: 'VehicleDetail',
      component: VehicleDetail,
      beforeEnter: async (to, from, next) => {
        store.commit('startSpinner');
        await store.dispatch('GET_ONEVEHICLE', to.params.id);
        store.commit('endSpinner');
        next();
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: Films,
    },
  ],
});

export default router;
