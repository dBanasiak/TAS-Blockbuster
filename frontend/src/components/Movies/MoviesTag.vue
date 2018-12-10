<template>
  <panel title="Tags">
    <v-btn dark class="black" @click="tags('')">All</v-btn>
    <v-btn dark class="darkgrey" @click="tags('Available')">Available movies</v-btn>
    <v-btn dark class="black" @click="tags('Drama')">Drama</v-btn>
    <v-btn dark class="darkgrey" @click="tags('Biography')">Biography</v-btn>
    <v-btn dark class="black" @click="tags('Action')">Action</v-btn>
    <v-btn dark class="darkgrey" @click="tags('Crime')">Crime</v-btn>
    <v-btn dark class="black" @click="tags('Western')">Western</v-btn>
    <v-btn dark class="darkgrey" @click="tags('Comedy')">Comedy</v-btn>
    <v-btn dark class="black" @click="tags('Sci-Fi')">Sci-Fi</v-btn>
    <v-btn dark class="darkgrey" @click="tags('Fantasy')">Fantasy</v-btn>
    <v-btn dark class="black" @click="tags('Adventure')">Adventure</v-btn>
    <v-btn dark class="darkgrey" @click="tags('History')">History</v-btn>
  </panel>
</template>

<script>
import _ from "lodash";
export default {
  methods: {
    tags(tag) {
      const route = {
        name: "movies"
      };
      route.query = {
        search: tag
      };
      this.$router.push(route);
    }
  }
};
</script>

<style>
</style>