<template>
  <div class="container">
    <h2>{{ oneLocation.name }}</h2>
    <p>Terrain : {{ oneLocation.terrain }}</p>
    <p>Climate : {{ oneLocation.climate }}</p>
    <p>Surface Water : {{ oneLocation.surface_water }}%</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const oneLocation = computed(() => store.state.oneLocation);
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  h2 {
    font-size: 3rem;
    margin-bottom: 5rem;
  }
}
</style>
