<template>
	<div class="container">
		<div v-for="(item, index) in peopleList" :key="index" class="card">
			<router-link :to="`/people/${item.id}`">
				<!-- <img :src="item.image" class="card-img-top" alt=""> -->
				<div class="card-body">
					<h3 class="card-title">{{ item.name }}</h3>
					<!-- <p>{{ item.original_title }}</p> -->
					<!-- <p>{{ item.running_time }} minutes</p> -->
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
			...mapGetters(['peopleList'])
		},
		setup() {
      store.dispatch('GET_PEOPLE');
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
    flex-wrap: wrap;
	}

	.container .card {
		width: 25%;
	}

	.container .card .card-body h3 {
		font-size: 2rem;
		font-weight: 500;
		margin-bottom: 0;
	}

	.container .card .card-body p {
		font-size: 1.5rem;
		font-weight: 300;
	}
</style>