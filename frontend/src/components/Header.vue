<template>
  <v-toolbar fixed dark class="black">
    <v-toolbar-items>
      <v-btn class="logo" :to="{ 
        name: 'home'
        }">Blockbuster</v-btn>
      <v-btn
        flat
        dark
        v-if="$store.state.isAdmin && $store.state.isUserLogedIn"
        :to="{
        name: 'movies-add'
        }"
        class="addMovie"
      >Add movie</v-btn>
      <v-btn flat dark :to="{
        name: 'movies'
        }" class="movies">Movies</v-btn>
      <v-btn
        flat
        dark
        v-if="!$store.state.isUserLogedIn"
        :to="{
          name: 'login'
          }"
        class="login"
      >Login</v-btn>
      <v-btn
        flat
        dark
        v-if="!$store.state.isUserLogedIn"
        :to="{
          name: 'register'
          }"
        class="register"
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
        <span id="cartCounter">0</span>
      </v-btn>
      <v-btn
        flat
        dark
        v-if="$store.state.isUserLogedIn"
        @click="logout({
          name: 'home'})"
        class="logout"
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
      this.$store.dispatch("clearCart");
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

@media only screen and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  .logo,
  .logo:hover,
  .movies,
  .addMovie,
  .logout,
  .register,
  .login {
    font-size: 0;
    text-align: center;
  }

  .logo::after {
    content: "\f015";
  }

  .movies::after {
    content: "\f008";
  }

  .addMovie::after {
    content: "\f0fe";
  }

  .logout::after {
    content: "\f2f5";
  }

  .login::after {
    content: "\f2f6";
  }

  .register::after {
    content: "\f234";
  }

  .logo::after,
  .register::after,
  .logout::after,
  .login::after,
  .addMovie::after,
  .movies::after {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 30px;
    color: white;
  }

  .v-btn {
    min-width: 0;
  }

  .cart-icon {
    font-size: 20px;
  }
}
</style>
