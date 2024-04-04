<template>
  <div class="movie-list">
    <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import MovieItem from './MovieItem.vue'

const props = defineProps({
  movies: Array
})
</script>
