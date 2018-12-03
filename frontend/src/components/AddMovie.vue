<template>
  <v-layout column>
    <v-flex>
      <UserPanel class="movie-items" title="Add new movie">
        <v-text-field label="Title" required :rules="[required]" v-model="movie.title"></v-text-field>
        <v-text-field label="Date" required :rules="[required]" v-model="movie.date"></v-text-field>
        <v-text-field label="Description" required :rules="[required]" v-model="movie.description"></v-text-field>
        <v-text-field label="Director" required :rules="[required]" v-model="movie.director"></v-text-field>
        <v-text-field label="Writers" required :rules="[required]" v-model="movie.writers"></v-text-field>
        <v-text-field label="Stars" required :rules="[required]" v-model="movie.stars"></v-text-field>
        <v-text-field label="Rate" required :rules="[required]" v-model="movie.rate"></v-text-field>
        <v-text-field label="Cover URL" required :rules="[required]" v-model="movie.movieCoverUrl"></v-text-field>
        <div class="danger-alert">{{error }}</div>
        <v-btn dark class="darkgrey" @click="addMovie">Add movie</v-btn>
      </UserPanel>
    </v-flex>
  </v-layout>
</template>

<script>
import UserPanel from "@/components/globals/UserPanel";
import MoviesService from "@/services/MoviesService";

export default {
  data() {
    return {
      movie: {
        title: null,
        date: null,
        description: null,
        status: "Available",
        director: null,
        writers: null,
        stars: null,
        rate: null,
        movieCoverUrl: null
      },
      error: null,
      required: value => !!value || "Required"
    };
  },
  components: {
    UserPanel
  },
  methods: {
    async addMovie() {
      this.error = null;
      const checkAllFields = Object.keys(this.movie).every(
        key => !!this.movie[key]
      );

      if (!checkAllFields) {
        this.error = "Fill all the required fields!";
        return;
      }

      try {
        await MoviesService.post(this.movie);
        this.$router.push({
          name: "movies"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped>
</style>
