<template>
  <div class="container">
    <h2>{{ oneSpecies.name }}</h2>
    <p>Classification : {{ oneSpecies.classification }}</p>
    <p>Hair Colors : {{ oneSpecies.hair_colors }}</p>
    <p>Eye Colors : {{ oneSpecies.eye_colors }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const oneSpecies = computed(() => store.state.oneSpecies);
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
