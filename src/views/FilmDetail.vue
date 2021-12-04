<template>
	<div class="container">
		<img :src=oneFilm.movie_banner alt="movie_banner">
		<div class="title-wrap">
			<h2>{{ oneFilm.title }}</h2>
			<h3>{{ oneFilm.original_title }}</h3>
			<h4>{{ oneFilm.original_title_romanised }}</h4>
		</div>
		<p class="desc">{{ oneFilm.description }}</p>
		<ul>
			<li>Director : {{ oneFilm.director }}</li>
			<li>Producer : {{ oneFilm.producer }}</li>
			<li>Release year : {{ oneFilm.release_date }}</li>
			<li>Rotten Tomato score : {{ oneFilm.rt_score }}</li>
			<li>Running time : {{ oneFilm.running_time }} minutes</li>
		</ul>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'FilmDetail',
		computed: {
			...mapGetters(['oneFilm'])
		}
	}
</script>

<style scoped>
	.container {
		text-align: center;
	}

	.container img {
		width: 100%;
	}

	.container .title-wrap {
		margin: 5rem 0;
	}

	.container .title-wrap h2 {
		font-size: 5rem;
	}

	.container .title-wrap h3 {
		font-size: 2.5rem;
		font-weight: 300;
		margin-top: 1rem;
	}

	.container .title-wrap h4 {
		font-size: 2rem;
		font-weight: 300;
		margin-top: 1rem;
	}

	.container .desc {
		font-weight: 300;
	}

	.container ul {
		margin-top: 5rem;
	}
</style>