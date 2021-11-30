<template>
	<div class="container">
		<h2>{{ onePeople.name }}</h2>
		<p>Age : {{ onePeople.age ? onePeople.age : '?' }}</p>
		<p>Gender : {{ onePeople.gender }}</p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
  import store from '@/store/store.js'
	import { useRoute } from 'vue-router'

	export default {
		name: 'PeopleDetail',
		computed: {
			...mapGetters(['onePeople'])
		},
		setup() {
			const route = useRoute();
      store.dispatch('GET_ONEPEOPLE', route.params.id);
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