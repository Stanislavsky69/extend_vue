import state from './state';
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import Filters from './modules/filters'
import Products from './modules/products'
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules: {
        filters: new Filters(),
        products: new Products()
    }
}
