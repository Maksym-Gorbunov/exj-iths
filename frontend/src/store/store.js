import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)
Vue.use(Vuex);


import countryStore from './modules/countryStore.js';
import countriesStore from './modules/countriesStore.js';
import userStore from './modules/userStore.js';
import apiStore from './modules/apiStore.js'


export default new Vuex.Store({
  modules: {
    apiStore,
    countryStore,
    countriesStore,
    userStore
  }
});
