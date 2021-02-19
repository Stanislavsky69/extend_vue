import FiltersDefault from '@/store/default/catalog/modules/filters/index';

export default class Filters extends FiltersDefault {
    constructor() {
        super();
        this.state.filters = []
        this.state =Object.assign(this.state, {
            filtersSelect: [{
                id: 'style',
                name: 'Стили',
                options: [{
                    text: 'Modern',
                    value: 'modern'
                },{
                    text: 'Classic',
                    value: 'classic'
                }]
            }]
        })
    }
}
