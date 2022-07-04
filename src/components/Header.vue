<template>
  <div class="header">
    <span class="logo" />
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarNavAltMarkup"
        class="collapse navbar-collapse justify-content-center"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              :class="{ 'color-active': routeName === 'FilmDetail' }"
              to="/films"
              class="nav-link"
              >Films</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :class="{ 'color-active': routeName === 'PeopleDetail' }"
              to="/people"
              class="nav-link"
              >People</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :class="{ 'color-active': routeName === 'LocationDetail' }"
              to="/locations"
              class="nav-link"
              >Locations
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :class="{ 'color-active': routeName === 'SpeciesDetail' }"
              to="/species"
              class="nav-link"
              >Species
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :class="{ 'color-active': routeName === 'VehicleDetail' }"
              to="/vehicles"
              class="nav-link"
              >Vehicles
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const routeName = computed(() => route.name);
</script>

<style lang="scss" scoped>
.header {
  background-color: #109ceb;
  box-shadow: 0 0.1rem 1rem 0.5rem rgba(0, 0, 0, 0.2);
  .logo {
    display: block;
    width: 10rem;
    height: 10rem;
    background: url('../../public/img/icons/logo.png') no-repeat center;
    background-size: cover;
    margin: 0 auto;
  }
  .navbar {
    justify-content: flex-end;
    background-color: white;
  }
}

.color-active {
  color: #109ceb !important;
}

.router-link-exact-active {
  color: #109ceb !important;
}
</style>
