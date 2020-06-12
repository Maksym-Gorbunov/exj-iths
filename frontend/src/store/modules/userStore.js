/* eslint-disable */
/* eslint-enable */

const state = {
  user: {
    email: "Maksym.Gorbunov@iths.se",
    pass: ""
  },
  page: "home"

};

const getters = {
  user: state => state.user,
  page: state => state.page
};

const actions = {
  async setPage({ commit }, page) {
    commit("setPage", page)
  },
};

const mutations = {
  setPage: (state, page) => state.page = page
};

export default {
  state,
  getters,
  actions,
  mutations
};
