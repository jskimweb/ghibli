import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import Films from '@/views/Films.vue'
import People from '@/views/People.vue'
import FilmDetail from '@/views/FilmDetail.vue'
import PeopleDetail from '@/views/PeopleDetail.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/films',
			name: 'Films',
			component: Films
		},
		{
			path: '/people',
			name: 'People',
			component: People
		},
		{
			path: '/films/:id',
			name: 'FilmDetail',
			component: FilmDetail
		},
		{
			path: '/people/:id',
			name: 'PeopleDetail',
			component: PeopleDetail
		},
		{
			path: '/:pathMatch(.*)*',
			component: Home
		}
	]
});

export default router;