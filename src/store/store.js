import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    productCounts: 0
  },
  getters: {
    productCounts: state => {
      return state.productCounts
    }
  },
  mutations: {
    addToCart: (state, payload) => {
      return state.productCounts++
    }
  }

})
