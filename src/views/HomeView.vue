<template>
  <SearchBar @results="updateResults" />
  <div class="full-width">
    <MovieList :movies="searchResults.length > 0 ? searchResults : topRatedMovies" />
  </div>
</template>

<script setup lang="ts">
import SearchBar from '../components/SearchBar.vue'
import MovieList from '../components/MovieList.vue'

import { onMounted, ref, computed } from 'vue'
import { getTopRatedMovies } from '../api/tmdb'

let page = 1
const searchResults = ref([]) // Added to store search results
const topRatedMovies = ref([])

const loadMoreMovies = async () => {
  const moreMovies = await getTopRatedMovies(page)
  topRatedMovies.value.push(...moreMovies) // Changed to push to topRatedMovies
  page += 1
}

const checkScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    loadMoreMovies()
  }
}

const updateResults = (results) => {
  searchResults.value = results // Update search results when a search is performed
  //movies.value = results
}

onMounted(async () => {
  await loadMoreMovies()
  window.addEventListener('scroll', checkScroll)
})
</script>

<style scoped lang="scss">
.full-width {
  width: 100%;
  min-height: 100vh;
}
.searchContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
