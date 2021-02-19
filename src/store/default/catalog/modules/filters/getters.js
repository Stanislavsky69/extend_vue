export default {
    getFilter: state => id => {
        return state.filters.find(filter => filter.id === id)
    }
}
