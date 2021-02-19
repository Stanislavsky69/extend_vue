import state from './state';
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import Page from './modules/page/'
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules: {
        page: new Page()
    }
}
