<template>
  <div class="movie-item" @click="goToMovieDetail">
    <img
      v-if="movie.poster_path"
      class="movie-image"
      :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
      alt="Affiche du film"
    />
    <img v-else class="movie-image" src="/pasImage.png" alt="Image par défaut du film" />
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
<style scoped lang="scss">
.movie-item {
  position: relative;
  cursor: pointer;
  display: flex; /* Ajouté pour utiliser le layout flex */
  align-items: stretch;

  .movie-image {
    width: 100%; /* Ajouté pour s'assurer que l'image remplit toute la largeur */
    object-fit: cover; /* Ajouté pour conserver le rapport d'aspect de l'image */
  }

  &:hover {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 165, 0, 0.6); /* Orange semi-transparent */
      transition: background 0.3s ease-in-out;
    }
  }
}
</style>
