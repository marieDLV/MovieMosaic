<template>
  <SearchBar @results="updateResults" />
  <SearchResult :movies="movies" />
  <div v-if="topRatedMovies">
    <h1>Meilleurs films du moment</h1>
    <MovieList :movies="topRatedMovies" />
  </div>
</template>

<script setup lang="ts">
import SearchBar from '../components/SearchBar.vue'
import SearchResult from '../components/SearchResult.vue'
import MovieList from '../components/MovieList.vue'

import { onMounted, ref } from 'vue'
import { getTopRatedMovies } from '../api/tmdb'

const movies = ref([])
const topRatedMovies = ref([])

const updateResults = (results) => {
  movies.value = results
}

onMounted(async () => {
  topRatedMovies.value = await getTopRatedMovies()
})
</script>
