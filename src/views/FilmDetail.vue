<template>
	<div class="container">
		<img :src=oneFilm.movie_banner alt="movie_banner">
		<h2>{{ oneFilm.title }}</h2>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
  import store from '@/store/store.js'
	import { useRoute } from 'vue-router'

	export default {
		name: 'FilmDetail',
		computed: {
			...mapGetters(['oneFilm'])
		},
		setup() {
			const route = useRoute();
      store.dispatch('GET_ONEFILM', route.params.id);
		}
	}
</script>

<style scoped>
	.container {
		text-align: center;
	}
</style>