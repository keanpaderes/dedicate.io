import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Hello World',
  },
  getters: {
    getTitle(state) {
      return state.title
    },
  },
  mutations: {
  },
  actions: {
  }
})
