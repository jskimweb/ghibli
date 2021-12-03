<template>
	<div class="container">
		<h2>{{ onePeople.name }}</h2>
		<p>Age : {{ onePeople.age ? onePeople.age : '?' }}</p>
		<p>Gender : {{ onePeople.gender }}</p>
		<p>Hair Color : {{ onePeople.hair_color }}</p>
		<p>Eye Color : {{ onePeople.eye_color }}</p>
		<router-link :to="`/species/${onePeople.species.split('/')[4]}`">"Check out the species."</router-link>
		<!-- <router-link :to="`/films/${onePeople.films[index].split('/')[4]}`"
			v-for="(item, index) in onePeople.films" :key="index">출연작품 {{ ++index }}</router-link> -->
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'PeopleDetail',
		computed: {
			...mapGetters(['onePeople'])
		}
	}
</script>

<style scoped>
	.container {
		text-align: center;
	}

	.container h2 {
		font-size: 3rem;
		margin-bottom: 5rem;
	}
</style>