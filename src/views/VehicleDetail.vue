<template>
  <div class="container">
    <h2>{{ oneVehicle.name }}</h2>
    <p class="desc">{{ oneVehicle.description }}</p>
    <p>Classification : {{ oneVehicle.vehicle_class }}</p>
    <p>Length: {{ oneVehicle.length }} feet</p>
    <router-link :to="`/people/${oneVehicle.pilot.split('/')[4]}`">
      "Check out the pilot."
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const oneVehicle = computed(() => store.state.oneVehicle);
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  h2 {
    font-size: 3rem;
    margin-bottom: 5rem;
  }
  .desc {
    font-weight: 300;
    margin-bottom: 5rem;
  }
  a {
    color: #109ceb !important;
    text-decoration: underline;
  }
}
</style>
