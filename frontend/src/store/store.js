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
      if(state.user.type === 'admin') {
        state.isAdmin = true;
      } else {
        state.isAdmin = false;
      }
    },
    addToCart (state, movie) {
      if(state.cart.length < 3){
        const index = state.cart.findIndex(m => m === movie)
        if(index == -1){
          state.cart.push (movie)
        }
      }
    },
    clearCart (state) {
      state.cart.length = 0
    },
    removeFromCart (state, movie) {
      const index = state.cart.findIndex(m => m === movie)
      if (index != -1) {
        state.cart.splice (index,1)
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
    },
    clearCart ({commit}) {
      commit('clearCart')
    },
    removeFromCart ({commit}, movie) {
      commit('removeFromCart', movie)
    }
  }
})