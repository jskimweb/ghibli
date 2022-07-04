<template>
  <div class="container">
    <div
      v-for="item in itemList"
      :key="item"
      class="card"
      :class="{ 'card--films': route.name === 'Films' }"
    >
      <router-link :to="`${route.path}/${item.id}`">
        <img
          v-if="route.name === 'Films'"
          :src="item.image"
          class="card-img-top"
          alt="film_image"
        />
        <div class="card-body">
          <h3 class="card-title">{{ item.name }}</h3>
          <div v-if="route.name === 'Films'" style="overflow: hidden">
            <h3 class="card-title">{{ item.title }}</h3>
            <p>{{ item.original_title }}</p>
            <p>{{ item.running_time }} minutes</p>
            <button
              :class="{ 'button--films': route.name === 'Films' }"
              class="btn btn-link"
            >
              Read More
            </button>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

const routeName = computed(() => route.name);
const itemList = computed(() => {
  let listName = '';
  if (routeName.value === 'Films') listName = 'filmsList';
  else if (routeName.value === 'People') listName = 'peopleList';
  else if (routeName.value === 'Locations') listName = 'locationsList';
  else if (routeName.value === 'Species') listName = 'speciesList';
  else if (routeName.value === 'Vehicles') listName = 'vehiclesList';
  else return false;
  return store.state[listName];
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 25%;
  &.card--films {
    width: 33.3333% !important;
  }
  .card-body {
    h3 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 0;
    }
    p {
      font-size: 1.5rem;
      font-weight: 300;
    }
  }
  .button--films {
    font-size: 1.5rem;
    float: right;
  }
}
</style>
