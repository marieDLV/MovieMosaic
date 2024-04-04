<template>
  <div class="movie-item" @click="goToMovieDetail">
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" height="100px" alt="" />
    <h2>{{ movie.title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  movie: Object
})

const goToMovieDetail = () => {
  console.log(props.movie.id)

  if (props.movie.id) {
    router.push({ name: 'MovieDetail', params: { id: props.movie.id } })
  }
}
</script>
