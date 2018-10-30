<template>
  <v-toolbar fixed dark class="black">
    <v-toolbar-title class="mr-4">
      <span class="logo" @click="navigateTo({
          name: 'home'})">
        Blockbuster
      </span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark @click="navigateTo({
        name: 'movies'})">Movies
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn flat dark v-if="!$store.state.isUserLogedIn"
        @click="navigateTo({
          name: 'login'})">
        Login
      </v-btn>
      <v-btn flat dark v-if="!$store.state.isUserLogedIn"
        @click="navigateTo({
          name: 'register'})">
        Sign Up!
      </v-btn>
      <v-btn flat dark v-if="$store.state.isUserLogedIn" class="cart-icon" @click="navigateTo({
          name: 'cart'})">
        <i class="fas fa-shopping-cart"></i>
      </v-btn>
      <v-btn flat dark v-if="$store.state.isUserLogedIn"
        @click="logout({
          name: 'home'})">
        Log Out
      </v-btn>
  </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout (route) {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
.logo {
  cursor: pointer;
  transition-duration: .3s;
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
