<template>
  <div v-if="loadingStatus" class="spinner">
    <div class="spinner-border" role="status" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const loadingStatus = computed(() => store.state.loadingStatus);
</script>

<style lang="scss" scoped>
.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .spinner-border {
    width: 5rem;
    height: 5rem;
    color: #109ceb;
  }
}
</style>
