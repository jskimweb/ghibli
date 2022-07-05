<template>
  <div class="container">
    <h2>{{ onePeople.name }}</h2>
    <p>Age : {{ onePeople.age ? onePeople.age : '?' }}</p>
    <p>Gender : {{ onePeople.gender }}</p>
    <p>Hair Color : {{ onePeople.hair_color }}</p>
    <p>Eye Color : {{ onePeople.eye_color }}</p>
    <router-link :to="`/species/${onePeople.species.split('/')[4]}`">
      "Check out the species."
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const onePeople = computed(() => store.state.onePeople);
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  h2 {
    font-size: 3rem;
    margin-bottom: 5rem;
  }
  a {
    color: #109ceb !important;
    text-decoration: underline;
  }
}
</style>
