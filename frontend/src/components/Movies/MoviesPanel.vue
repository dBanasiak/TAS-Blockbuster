<template>
  <panel title="Movies">
    <v-btn
      slot="action"
      :to="{
        name: 'movie-create'
      }"
      class="cyan accent-2"
      light
      medium
      absolute
      right
      middle
      fab>
      <v-icon>add</v-icon>
    </v-btn>

    <div 
      v-for="movie in Movies"
      class="movie"
      :key="movie.id">

      <v-layout>
        <v-flex xs6>
          <div class="movie-title">
            {{movie.title}}
          </div>
          <div class="movie-director">
            {{movie.director}}
          </div>
          <div class="movie-writers">
            {{movie.writers}}
          </div>
          <div class="movie-stars">
            {{movie.stars}}
          </div>

          <!-- <v-btn
            dark
            class="cyan"
            :to="{
              name: 'movie', 
              params: {
                movieId: movie.id
              }
            }">
            View
          </v-btn> -->
        </v-flex>

        <v-flex xs6>
          <img class="movie-image" :src="movie.movieCoverUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import MoviesService from '@/services/MoviesService'
export default {
  data () {
    return {
      movies: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.movies = (await MovieService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>