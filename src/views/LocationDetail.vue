<template>
	<div class="container">
		<h2>{{ oneLocation.name }}</h2>
		<p>Terrain : {{ oneLocation.terrain }}</p>
		<p>Climate : {{ oneLocation.climate }}</p>
		<p>Surface Water : {{ oneLocation.surface_water }}%</p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'LocationDetail',
		computed: {
			...mapGetters(['oneLocation'])
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