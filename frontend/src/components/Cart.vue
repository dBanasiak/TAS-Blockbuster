<template>
  <v-layout column>
    <v-flex>
      <UserPanel class="movie-items" title="Cart">
        <div v-for="movie in movies" class="movie-panel" :key="movie.title">
          <div class="movie-left-panel">
            <div class="movie-rate">Rate: {{movie.rate}}</div>
            <div class="movie-description">
              <strong>Description:</strong>
              <div class="movie-block">{{movie.description}}</div>
            </div>
            <div class="movie-cast">
              <strong>Director:</strong>
              {{movie.director}}
              <span>|</span>
              <strong>Writers:</strong>
              {{movie.writers}}
              <br>
              <strong>Stars:</strong>
              {{movie.stars}}
            </div>
            <v-btn class="movie-button-remove" flat v-if="$store.state.isUserLogedIn">
              <i class="fas fa-plus"></i>
              Remove from cart
            </v-btn>
          </div>
          <div class="movie-right-panel">
            <div class="movie-status">{{movie.status}}</div>
            <img :src="movie.movieCoverUrl" class="movie-image">
            <h2 class="movie-title">
              {{movie.title}}
              <span class="movie-date">{{movie.date}}</span>
            </h2>
          </div>
        </div>
      </UserPanel>
    </v-flex>
  </v-layout>
</template>

<script>
import MoviesService from "@/services/MoviesService";
import UserPanel from "@/components/globals/UserPanel";
export default {
  components: {
    UserPanel
  },
  async mounted() {
    this.movies = (await MoviesService.index()).data;
  },
  data() {
    return {
      movies: null
    };
  }
};
</script>

<style scoped>
.movie-panel {
  display: grid;
  grid-template-areas: "movie-left-panel movie-right-panel";
  align-items: end;
  position: relative;
  grid-template-columns: 75% 25%;
  border-bottom: 2px solid #555;
  margin-bottom: 64px;
}

.movie-right-panel {
  padding: 16px;
  grid-area: movie-right-panel;
}

.movie-left-panel {
  padding: 16px;
  grid-area: movie-left-panel;
  text-align: left;
}

.movie-description {
  font-size: 1.4em;
  padding-bottom: 16px;
}

.movie-date {
  font-size: 0.8em;
  font-weight: 300;
}

.movie-rate {
  text-align: right;
  padding-right: 24px;
  font-size: 4em;
  position: absolute;
  top: 0;
  right: calc(25%);
}

.movie-items {
  width: 60vw;
  margin: 0 auto;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
}

.movie-button,
.movie-button-remove {
  color: black;
  font-family: "Roboto Condensed", sans-serif;
  margin: 16px 0;
  margin-right: 16px;
}

.movie-block {
  background-color: whitesmoke;
  padding: 8px;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
}

.movie-button-remove {
  background-color: darkred;
  color: white;
}

.movie-button {
  background-color: yellow;
}
</style>