<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <v-container fluid>
          <router-view/>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from "@/components/Header.vue";
export default {
  name: "app",
  components: {
    PageHeader
  }
};
</script>

<style>
/* 
font-family: 'Roboto Condensed', sans-serif;
font-family: 'Chakra Petch', sans-serif;
*/
#app {
  font-family: "Chakra Petch", sans-serif;
  text-align: center;
  color: #3e3e3e;
  margin-top: 60px;
  background-color: whitesmoke;
}

.error-text {
  background-color: transparent;
  color: red;
  font-size: 1.2em;
}
</style>
