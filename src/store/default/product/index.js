import state from './state';
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import ProductProperty from './modules/property'
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules: {
        productProperty: new ProductProperty(),
    }
}
