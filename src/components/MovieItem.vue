<template>
  <div class="movie-item">
    <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" height="100px" alt="" />
    <h2>{{ movie.title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  movie: Object
})
</script>
