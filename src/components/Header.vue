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
              :class="{ 'color-active': activeFilmMenu }"
              to="/films"
              class="nav-link"
              >Films</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :class="{ 'color-active': activePeopleMenu }"
              to="/people"
              class="nav-link"
              >People</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :class="{ 'color-active': activeLocationsMenu }"
              to="/locations"
              class="nav-link"
              >Locations
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :class="{ 'color-active': activeSpeciesMenu }"
              to="/species"
              class="nav-link"
              >Species
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :class="{ 'color-active': activeVehiclesMenu }"
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

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const activeFilmMenu = computed(() => {
      if (route.name === 'FilmDetail') {
        return true;
      } else {
        return false;
      }
    });
    const activePeopleMenu = computed(() => {
      if (route.name === 'PeopleDetail') {
        return true;
      } else {
        return false;
      }
    });
    const activeLocationsMenu = computed(() => {
      if (route.name === 'LocationDetail') {
        return true;
      } else {
        return false;
      }
    });
    const activeSpeciesMenu = computed(() => {
      if (route.name === 'SpeciesDetail') {
        return true;
      } else {
        return false;
      }
    });
    const activeVehiclesMenu = computed(() => {
      if (route.name === 'VehicleDetail') {
        return true;
      } else {
        return false;
      }
    });

    return {
      activeFilmMenu,
      activePeopleMenu,
      activeLocationsMenu,
      activeSpeciesMenu,
      activeVehiclesMenu,
    };
  },
};
</script>

<style scoped>
.color-active {
  color: #109ceb !important;
}

.header {
  background-color: #109ceb;
  box-shadow: 0 0.1rem 1rem 0.5rem rgba(0, 0, 0, 0.2);
}

.header .logo {
  display: block;
  width: 10rem;
  height: 10rem;
  background: url('../../public/img/icons/logo.png') no-repeat center;
  background-size: cover;
  margin: 0 auto;
}

.header .navbar {
  justify-content: flex-end;
  background-color: white;
}

.router-link-exact-active {
  color: #109ceb !important;
}
</style>
