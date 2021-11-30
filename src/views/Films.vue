<template>
	<div class="container">
		<div v-for="(item, index) in filmsList" :key="index" class="card">
			<router-link :to="`/films/${item.id}`">
				<img :src="item.image" class="card-img-top" alt="">
				<div class="card-body">
					<h3 class="card-title">{{ item.title }}</h3>
					<p>{{ item.original_title }}</p>
					<p>{{ item.running_time }} minutes</p>
					<button class="btn btn-info">Read More</button>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
  import store from '@/store/store.js'

	export default {
		name: 'Films',
		computed: {
			...mapGetters(['filmsList'])
		},
		setup() {
      store.dispatch('GET_FILMS');
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
    flex-wrap: wrap;
	}

	.container .card {
		width: 33.3333%;
	}

	.container .card .card-body {
		overflow: hidden;
	}

	.container .card .card-body h3 {
		font-size: 2rem;
		font-weight: 500;
		white-space: nowrap;
	}

	.container .card .card-body p {
		font-size: 1.5rem;
		font-weight: 300;
	}

	.container .card .card-body a {
		font-size: 1.3rem;
		font-weight: 300;
	}

	.container .card .card-body button {
		font-size: 1.5rem;
		float: right;
	}
</style>