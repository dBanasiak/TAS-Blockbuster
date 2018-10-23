<template>
  <v-toolbar fixed dark class="blue">
    <v-toolbar-title class="mr-4">
      <span @click="navigateTo({
          name: 'home'})">
        Blockbuster
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn flat dark
        @click="navigateTo({
          name: 'login'})">
        Login
      </v-btn>
      <v-btn flat dark
        @click="navigateTo({
          name: 'register'})">
        Sign Up!
      </v-btn>
  </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
</style>
