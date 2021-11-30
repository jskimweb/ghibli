<template>
	<div class="header">
		<ul class="nav justify-content-center">
			<li class="nav-item">
				<router-link to="/" class="nav-link active">Home</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/films" class="nav-link">Films</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/people" class="nav-link">People</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style scoped>
	.header {
		background-color: #109CEB;
		box-shadow: 0 .1rem 1rem .5rem rgba(0, 0, 0, 0.2);
	}

	.header ul li a {
		color: white;
	}

	.router-link-exact-active {
		color: black !important;
	}
</style>