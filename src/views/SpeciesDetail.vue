<template>
  <div class="container">
    <h2>{{ oneSpecies.name }}</h2>
    <p>Classification : {{ oneSpecies.classification }}</p>
    <p>Hair Colors : {{ oneSpecies.hair_colors }}</p>
    <p>Eye Colors : {{ oneSpecies.eye_colors }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'SpeciesDetail',
  setup() {
    const store = useStore();
    const oneSpecies = computed(() => {
      return store.getters.oneSpecies;
    });

    return {
      oneSpecies,
    };
  },
};
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
