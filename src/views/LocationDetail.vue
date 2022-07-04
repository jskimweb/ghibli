<template>
  <div class="container">
    <h2>{{ oneLocation.name }}</h2>
    <p>Terrain : {{ oneLocation.terrain }}</p>
    <p>Climate : {{ oneLocation.climate }}</p>
    <p>Surface Water : {{ oneLocation.surface_water }}%</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'LocationDetail',
  setup() {
    const store = useStore();
    const oneLocation = computed(() => {
      return store.state.oneLocation;
    });

    return {
      oneLocation,
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
