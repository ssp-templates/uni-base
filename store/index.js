import Vue from 'vue'
import Vuex from 'vuex'
import system from './modules/system'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    system,
  },
  getters
})

export default store