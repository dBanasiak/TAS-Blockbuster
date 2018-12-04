<template>
  <v-toolbar fixed dark class="black">
    <v-toolbar-title class="mr-4">
      <router-link class="logo" :to="{ 
        name: 'home'
        }">Blockbuster</router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        v-if="$store.state.isUserLogedIn"
        :to="{
        name: 'movies-add'
        }"
      >Add movie</v-btn>
      <v-btn flat dark :to="{
        name: 'movies'
        }">Movies</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        v-if="!$store.state.isUserLogedIn"
        :to="{
          name: 'login'
          }"
      >Login</v-btn>
      <v-btn
        flat
        dark
        v-if="!$store.state.isUserLogedIn"
        :to="{
          name: 'register'
          }"
      >Sign Up!</v-btn>
      <v-btn
        flat
        dark
        v-if="$store.state.isUserLogedIn"
        class="cart-icon"
        :to="{
          name: 'cart'
          }"
      >
        <i class="fas fa-shopping-cart"></i>
      </v-btn>
      <v-btn
        flat
        dark
        v-if="$store.state.isUserLogedIn"
        @click="logout({
          name: 'home'})"
      >Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout(route) {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "movies"
      });
    }
  }
};
</script>
<style scoped>
.logo {
  cursor: pointer;
  color: white;
  text-decoration: none;
  transition-duration: 0.3s;
}

.logo:hover {
  font-size: 1.1em;
  color: yellow;
  font-weight: 700;
}

.cart-icon {
  font-size: 2.1em;
}
</style>
