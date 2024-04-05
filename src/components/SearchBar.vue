<template>
  <div class="search-bar">
    <input type="text" v-model="query" @input="search" placeholder="Rechercher un film..." />
    <button v-if="searchQuery" @click="clearSearch" class="clear-icon">X</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { searchMovies } from '@/api/tmdb'
import { defineEmits } from 'vue'

const emit = defineEmits(['results'])
const query = ref('')

const search = async () => {
  // Only search if the query is at least 3 characters long
  const results = await searchMovies(query.value)

  emit('results', results)
  //emit('searchQuery', query.value)
}

const clearSearch = () => {
  query.value = ''
  emit('results', []) // Emit an empty array to clear the search results
  //emit('searchQuery', '')
}
</script>
<style scoped lang="scss">
.search-bar {
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: var(--color-background);
  position: relative;

  input {
    width: 50%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: var(--color-secondary);
    color: var(--color-text);
    font-size: 16px;
    transition: width 0.5s ease-in-out;

    ::placeholder {
      color: var(--color-text);
    }

    &:focus {
      width: 70%;
      outline: none;
      background-color: var(--color-secondary);
      color: var(--color-primary);

      ::placeholder {
        color: var(--color-primary);
      }
    }
  }
}
.clear-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}
</style>
