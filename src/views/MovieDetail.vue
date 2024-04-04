<template>
  <div class="movie-detail">
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie poster" />
    <h1>{{ movie.title }}</h1>
    <p>{{ movie.overview }}</p>
    <p>Rating: {{ movie.vote_average }}</p>
    <p>Release date: {{ movie.release_date }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getMovieDetails } from '../api/tmdb'

const props = defineProps({
  id: String
})
const route = useRoute()
const movie = ref({})
const movieId = route.params.id

onMounted(async () => {
  movie.value = await getMovieDetails(movieId)
})
</script>
