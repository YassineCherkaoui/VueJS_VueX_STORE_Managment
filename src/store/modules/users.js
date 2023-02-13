// initial state
const state = () => ({
  userList: [{id:1,name:"yassine"}]
})

// getters
const getters = {
  users: (state, getters, rootState) => {
    return state.userList.map(({ id, name }) => {
      return {id: id, name:name}
    })
  },
}

// actions
const actions = {
  addUsers ({ state, commit }, user) {
    // send data to mutation
    commit('pushUsers', user)
  }
}

// mutations
const mutations = {
  pushUsers (state, user) {
    console.log(user);
    state.userList.push({id:user.id,name:user.name})
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
} 