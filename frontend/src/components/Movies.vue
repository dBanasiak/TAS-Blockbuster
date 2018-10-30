<template>
  <v-layout column>
    <v-flex>
       <UserPanel title="Movies">
         <div v-for="movie in movies" :key="movie.title">
           {{movie.title}}
           {{movie.date}}
           {{movie.description}}
         </div>
       </UserPanel>
    </v-flex>
  </v-layout>
</template>

<script>
import MoviesService from '@/services/MoviesService'
import UserPanel from '@/components/UserPanel'
export default {
  components: {
    UserPanel
  },
  async mounted () {
    this.movies = await MoviesService.getAllMovies()
  },
  data () {
    return {
      movies: null
    }
  }
}

</script>

<style scoped>
</style>