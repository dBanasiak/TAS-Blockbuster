<template>
  <panel title="Tags">
    <v-btn dark class="darkgrey" @click="available">Available movies</v-btn>
  </panel>
</template>

<script>
import _ from "lodash";
export default {
  methods: {
    available() {
      const route = {
        name: "movies"
      };
      route.query = {
        search: "Available"
      };
      this.$router.push(route);
    }
  }
};
</script>

<style>
</style>