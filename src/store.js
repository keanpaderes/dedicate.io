/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cameraStatus: false,
  },
  getters: {
    getCameraStatus(state) {
      return state.cameraStatus;
    },
  },
  mutations: {
    toggleCameraStatus(state) {
      state.cameraStatus = !state.cameraStatus;
    },
  },
  actions: {
    toggleCameraStatusAction({ commit }) {
      commit('toggleCameraStatus');
    },
  },
});
