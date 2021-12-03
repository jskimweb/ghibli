<template>
	<div v-if="loading" class="spinner">
		<div class="spinner-border" role="status"></div>
	</div>
</template>

<script>
	export default {
		name: 'Spinner',
		props: {
			loading: {
				type: Boolean,
				required: true
			}
		}
	}
</script>
<style scoped>
	.spinner {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.spinner-border {
		width: 5rem;
		height: 5rem;
		color: #109CEB;
	}
</style>