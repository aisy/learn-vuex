import Vue from 'vue'
import Vuex from 'vuex'

// load modules
import modules_Login from './modules/module_counter/index';

Vue.use(Vuex)

export default new Vuex.Store({
  // set modules 
  modules: {
    login: modules_Login,
  },
})
