/* eslint-disable */
import axios from "axios";
/* eslint-enable */
// eslint-disable-next-line no-unused-vars

//const covid19Url1 = "https://covid-19-data.p.rapidapi.com"
const host = "http://localhost:7000"
//const host = "http://13.53.139.53:7000"

const state = {
  apiResponse: {
    data: {},
    description: {}
  },
  processing: false
};


const getters = {
  apiResponse: state => state.apiResponse,
  processing: state => state.processing
};


const actions = {
    
    async getListOfCountries({ commit }) {
        state.processing = true
        const response = await axios.get(`${host}/covid19/api/countries/*`)
        var description = "Get a Name, Alpha-2 code, Alpha-3 code, Latitude and Longitude for every country."
        commit("setApiResponseDescription", description)
        commit("setApiResponse", response.data)
    },

    async OpenAPIDocumentation({ commit }) {
        state.processing = true
        const response = await axios.get(`${host}/covid19/api/docs/*`)
        var description = "Get OpenAPI Specification in JSON format"
        commit("setApiResponseDescription", description)
        commit("setApiResponse", response.data)
    },

    async getLatestTotals({ commit }) {
        state.processing = true
        const response = await axios.get(`${host}/covid19/api/total/*`)
        var description = "Get latest data for whole world."
        commit("setApiResponseDescription", description)
        commit("setApiResponse", response.data)
    },
    
    async getDailyReportTotals({ commit }) {
        state.processing = true
        const response = await axios.get(`${host}/covid19/api/total/date/2020-04-01/*`)
        var description = "Get daily report data for the whole world. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter."
        commit("setApiResponseDescription", description)
        commit("setApiResponse", response.data)
    },

    async getDailyReportByCountryName({ commit }) {
        state.processing = true
        const response = await axios.get(`${host}/covid19/api/countries/date/2020-04-02/name/italy/*`)
        var description = "Get a daily report for a specific country by country name. Parameters name and date are mandatory. Date format is by ISO 8601 standard, but you can provide different format with"
        commit("setApiResponseDescription", description)
        commit("setApiResponse", response.data)
    },

    async getLatestAllCountries({ commit }) {
      state.processing = true
      var description = "Get latest data for all countries."
      var data = "NOT ALLOWED!!! The plan you are subscribed to does not allow access to this endpoint. Please upgrade your plan or contact API Provider"
      commit("setApiResponseDescription", description)
      commit("setApiResponse", data)
    },

    async getLatestCountryDataByCode({ commit }) {
        state.processing = true
        const response = await axios.get(`${host}/covid19/api/countries/code/it/*`)
        var description = "Get the latest data for a specific country. Parameter code is mandatory. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type."
        commit("setApiResponseDescription", description)
        commit("setApiResponse", response.data)
    },

    async getLatestCountryDataByName({ commit }) {
        state.processing = true
        const response = await axios.get(`${host}/covid19/api/countries/name/usa/*`)
        var description = "Get latest data for specific country. Country Name And Format Are In Query."
        commit("setApiResponseDescription", description)
        commit("setApiResponse", response.data)
    },

    async getDailyReportByCountryCode({ commit }) {
        state.processing = true
        const response = await axios.get(`${host}/covid19/api/countries/date/2020-04-01/code/it/*`)
        var description = "Get a daily report for a specific country by country code. Parameters code and date are mandatory. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter. In a few days will be provided a stable version of this endpoint, for now, if you have any suggestions you can put on a discussion board."
        commit("setApiResponseDescription", description)
        commit("setApiResponse", response.data)
    },

    async getDailyReportAllCountries({ commit }) {
      state.processing = true
      var description = "Get a daily report for all countries. Parameter date is mandatory. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter. In a few days will be provided a stable version of this endpoint, for now, if you have any suggestions you can put on a discussion board."
      var data = "NOT ALLOWED!!! The plan you are subscribed to does not allow access to this endpoint. Please upgrade your plan or contact API Provider"
      commit("setApiResponseDescription", description)
      commit("setApiResponse", data)
  },
};


const mutations = {
  setApiResponse: (state, data) => {
    state.apiResponse.data = data
    state.processing = false
  },
  setApiResponseDescription: (state, description) => (state.apiResponse.description = description),
  setProcessing:(state, status) => (state.processing = status)
};


export default {
  state,
  getters,
  actions,
  mutations
};
