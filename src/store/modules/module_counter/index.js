
// set state
const state = {
  count: 0
}

// set getters
const getters = {
  getCount: (state) => {
    return state.count
  }
}

// set actions to call mutations based on function on mutation
const actions = {
  doIncrement: ({ commit }) => {
    commit("increment")
  },
  doDecrement: ({ commit }) => {
    commit("decrement")
  }
}

// set mutations
const mutations = {
  increment: state => {
    state.count++
  },
  decrement: state => {
    if (state.count > 0) {
      state.count--
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
