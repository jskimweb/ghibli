<template>
	<div class="container">
		<div v-for="(item, index) in List" :key="index" class="card" :class="{'card--films': $route.name === 'Films'}">
			<router-link :to="`${$route.path}/${item.id}`">
				<img v-if="$route.name === 'Films'" :src="item.image" class="card-img-top" alt="film_image">
				<div class="card-body">
					<h3 class="card-title">{{ item.name }}</h3>
					<div v-if="$route.name === 'Films'" style="overflow: hidden">
						<h3 class="card-title">{{ item.title }}</h3>
						<p>{{ item.original_title }}</p>
						<p>{{ item.running_time }} minutes</p>
						<button :class="{'button--films': $route.name === 'Films'}" class="btn btn-link">Read More</button>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	import { useRoute } from 'vue-router'

	export default {
		name: 'TextCard',
		setup() {
			const store = useStore();
			const route = useRoute();
			const List = computed(() => {
				const routeName = route.name;
				if (routeName === 'Films') {
					return store.getters.filmsList;
				} else if (routeName === 'People') {
					return store.getters.peopleList;
				} else if (routeName === 'Locations') {
					return store.getters.locationsList;
				} else if (routeName === 'Species') {
					return store.getters.speciesList;
				} else if (routeName === 'Vehicles') {
					return store.getters.vehiclesList;
				} else {
					return false;
				}
			});

			return {
				List
			}
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

	.card--films {
		width: 33.3333% !important;
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

	.button--films {
		font-size: 1.5rem;
		float: right;
	}
</style>