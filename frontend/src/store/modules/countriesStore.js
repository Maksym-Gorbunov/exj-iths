/* eslint-disable */
import axios from "axios";
import userStore from "./userStore";
/* eslint-enable */
// eslint-disable-next-line no-unused-vars

const host = "http://localhost:7000"
//const host = "http://13.53.139.53:7000"


const state = {
  countries: [],
  detailed: false,
  total: {},
  dailyByDate: {},
  dailyByName: {},
  dailyByCode: {}
};


const getters = {
  countries: state => state.countries,
  detailed: state => state.detailed,
  total: state => state.total,
  dailyByDate: state => state.dailyByDate,
  dailyByName: state => state.dailyByName,
  dailyByCode: state => state.dailyByCode
};


const actions = {
  async fetchCountries({ commit }) {
    const response = await axios.get(`${host}/covid19/country`)
    commit("setCountries", response.data)
  },
  async fetchCountriesDetailed({ commit }) {
    const response = await axios.get(`${host}/covid19/country/*`)
    commit("setCountries", response.data)
  },
  async deleteCountryAction({ commit }, id) {
    axios({
      method: 'delete',
      url: `${host}/covid19/country/100`,
      config: {
          headers: {
            'Access-Control-Allow-Origin': `${host}/*`,
            'origin':"*"
          }
      }
   })
    commit("deleteCounty", id)
  },
  async latestTotalsAction({ commit }) {
    const response = await axios.get(`${host}/covid19/api/total/*`)
    commit("setTotal", response.data[0])
  },
  async dailyByDateAction({ commit }, date) {
    const response = await axios.get(`${host}/covid19/api/countries/date/${date}/name/any/*`)
    commit("setDailyByDate", response.data[0])
  },
  async dailyByNameAction({ commit }, name) {
    const response = await axios.get(`${host}/covid19/api/countries//name/${name}/*`)
    commit("setDailyByName", response.data[0])
  },
  async dailyByCodeAction({ commit }, code) {
    const response = await axios.get(`${host}/covid19/api/countries/code/${code}/*`)
    commit("setDailyByCode", response.data[0])
  },
  setStatus({commit}, status){
    commit("setDetailed", status)
  },
};


const mutations = {
  setDailyByDate: (state, data) => state.dailyByDate = data,
  setDailyByName: (state, data) => state.dailyByName = data,
  setDailyByCode: (state, data) => state.dailyByCode = data,
  setTotal: (state, total) => state.total = total,
  setCountries: (state, data) => state.countries = data,
  setDetailed: (state, status) => state.detailed = status,
  deleteCountry: (state, id) => state.countries = state.countries.filter(c => c.id != id)
};


export default {
  state,
  getters,
  actions,
  mutations
};
