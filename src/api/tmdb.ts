import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3'
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzBkMjIwNmMzYTc1MzM4YzllZjc0M2UxM2IzYjJjNSIsInN1YiI6IjVkODllZjNlNmMxZTA0MDAyMWFiZWUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gpKHhxE6yHWr7SnzZ4x_1mIBvRgps4fq-sz_luRbVN4'

const tmdb = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// Fonction pour récupérer les détails d'un film
export async function getMovieDetails(movieId: number) {
  try {
    const response = await tmdb.get(`/movie/${movieId}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Fonction pour rechercher des films
export async function searchMovies(query: string) {
  try {
    const response = await tmdb.get(`/search/movie`, {
      params: {
        query: query
      }
    })
    return response.data.results
  } catch (error) {
    console.error(error)
  }
}

export async function getTopRatedMovies() {
  try {
    const response = await tmdb.get(`/movie/top_rated`)
    return response.data.results
  } catch (error) {
    console.error(error)
  }
}
