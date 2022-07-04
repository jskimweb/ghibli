<template>
  <div class="container">
    <h2>{{ oneVehicle.name }}</h2>
    <p class="desc">{{ oneVehicle.description }}</p>
    <p>Classification : {{ oneVehicle.vehicle_class }}</p>
    <p>Length: {{ oneVehicle.length }} feet</p>
    <router-link :to="`/people/${oneVehicle.pilot.split('/')[4]}`"
      >"Check out the pilot."</router-link
    >
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'VehicleDetail',
  setup() {
    const store = useStore();
    const oneVehicle = computed(() => {
      return store.state.oneVehicle;
    });

    return {
      oneVehicle,
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

.container .desc {
  font-weight: 300;
  margin-bottom: 5rem;
}

.container a {
  color: #109ceb !important;
  text-decoration: underline;
}
</style>
