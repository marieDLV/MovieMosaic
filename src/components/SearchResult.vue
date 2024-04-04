<template>
  <div class="search-results">
    <MovieList :movies="movies" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import MovieList from './MovieList.vue'

const props = defineProps({
  movies: Array
})
</script>
