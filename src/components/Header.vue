<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <img src="/favicon.png" alt="App Icon" class="app-icon" />
        <h1>Movie Mosaic</h1>
      </div>
      <div class="menu-links">
        <!-- Ajoutez cette ligne -->
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <!-- Ajoutez cette ligne -->
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}

.app-icon {
  height: 40px;
  width: 40px;
}

.menu-links {
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: center;
  }
}
</style>
