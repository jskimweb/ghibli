<template>
  <div v-if="loadingStatus" class="spinner">
    <div class="spinner-border" role="status" />
  </div>
</template>

<script>
import { computed } from 'vue';
import store from '@/store/store';

export default {
  setup() {
    const loadingStatus = computed(() => {
      return store.getters.loadingStatus;
    });

    return {
      loadingStatus,
    };
  },
};
</script>

<style scoped>
.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.spinner-border {
  width: 5rem;
  height: 5rem;
  color: #109ceb;
}
</style>
