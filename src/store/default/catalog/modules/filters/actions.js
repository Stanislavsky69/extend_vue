export default {
    setFilters({ commit }, data){
        commit('SET_FILTERS', data)
    },
    setCheckedFilter({ commit }, data){
        commit('UPDATE_STATE_FILTER' ,data)
    }
}
