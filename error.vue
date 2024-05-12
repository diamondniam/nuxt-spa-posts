<script setup lang="ts">
import type { NuxtError } from 'vue'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error-wrapper">
    <h2>{{ error.statusCode }}</h2>
    <button @click="handleError">Clear errors</button>
  </div>
</template>

<style lang="scss" scoped>
.error-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: $green-2;
  height: 100vh;
}
</style>