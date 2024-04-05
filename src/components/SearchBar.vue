<template>
  <div class="search-bar-container">
    <div class="search-bar">
      <input
        type="text"
        class="search-input"
        v-model="query"
        @input="search"
        placeholder="Rechercher un film..."
      />
      <button v-if="query" @click="clearSearch" class="clear-icon">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
    </div>
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
.search-bar-container {
  display: flex;
  justify-content: center;

  .search-bar {
    position: relative;
    width: 100%;
    max-width: 40%;
    background-color: var(--color-secondary);
    border-radius: 50px;
    padding: 10px 20px;

    /* Media Query pour les écrans jusqu'à 600px de large */
    @media (max-width: 600px) {
      max-width: 90%;
    }

    input {
      background-color: transparent;
      border: none;
      color: var(--color-text);
      font-size: 1rem;
      width: 100%;
      margin-left: 10px;
      padding-right: 30px;

      &::placeholder {
        color: var(--color-text);
      }

      &:focus {
        outline: none;
        background-color: var(--color-secondary);
        color: var(--color-primary);

        &::placeholder {
          color: var(--color-primary);
        }
      }
    }

    .clear-icon {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
