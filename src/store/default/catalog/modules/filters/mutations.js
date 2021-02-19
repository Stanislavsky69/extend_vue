export default {
    SET_FILTERS(state, filters){
        state.filters = filters
    },
    UPDATE_STATE_FILTER(state, data){
        const { id, status } = data
        state.filters.find(el => el.id === id).status = status
    }
}
