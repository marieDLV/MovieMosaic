<template>
  <div class="movie-list-container">
    <div class="movie-list" @scroll="checkScroll">
      <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, nextTick } from 'vue'
import MovieItem from './MovieItem.vue'

const props = defineProps({
  movies: Array
})
</script>

<style scoped lang="scss">
.movie-list-container {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;

  .movie-item {
    flex: 0 0 auto;
    width: 200px;
  }
}
</style>
