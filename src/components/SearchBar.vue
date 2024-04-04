<template>
  <div class="search-bar">
    <input type="text" v-model="query" @keyup.enter="search" placeholder="Rechercher un film..." />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { searchMovies } from '@/api/tmdb'
import { defineEmits } from 'vue'

const emit = defineEmits(['results'])
const query = ref('')

const search = async () => {
  const results = await searchMovies(query.value)
  console.log(results)
  emit('results', results)
}
</script>
