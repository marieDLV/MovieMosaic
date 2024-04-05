<template>
  <div class="movie-detail">
    <router-link to="/">Retour</router-link>
    <div class="movie-content">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        alt="Movie poster"
        class="movie-poster"
      />
      <div class="movie-info">
        <h1>{{ movie.title }}</h1>
        <p>{{ movie.overview }}</p>
        <p>Rating: {{ movie.vote_average }}</p>
        <p>Release date: {{ movie.release_date }}</p>
      </div>
    </div>
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
  movie.value = await getMovieDetails(Number(movieId))
})
</script>

<style scoped lang="scss">
.movie-detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.back-link {
  margin-bottom: 20px;
}

.movie-content {
  display: flex;
  gap: 20px;
}

.movie-poster {
  flex: 1 0 auto;
}

.movie-info {
  flex: 2 0 auto;
  max-width: 800px;
  word-wrap: break-word;
}
</style>
