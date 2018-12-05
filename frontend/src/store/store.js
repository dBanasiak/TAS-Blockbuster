import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLogedIn: false, 
    isAdmin: false,
    cart: []
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLogedIn = true
      } else {
        state.isUserLogedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    addToCart (state, movie) {
    if(state.cart.length < 3){
      state.cart.push (movie)
    }
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, token) {
      commit('setUser', token)
    },
    addToCart ({ commit }, movie) {
      commit('addToCart', movie)
    }
  }
})