<template>
  <SearchBar @results="updateResults" />
  <SearchResult v-if="movies" :movies="movies" />
</template>

<script setup lang="ts">
import SearchBar from '../components/SearchBar.vue'
import SearchResult from '../components/SearchResult.vue'

import { ref } from 'vue'

const movies = ref([])

const updateResults = (results) => {
  movies.value = results
}
</script>
