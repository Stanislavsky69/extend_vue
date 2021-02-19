import FiltersDefault from '@/store/default/catalog/modules/filters/index';

export default class Filters extends FiltersDefault {
    constructor() {
        super();
        this.state.filters = []
        this.state.filters.push({
            id: 'typeInstrument',
            groupName: 'Тип инструмента',
            checkboxes: [{
                text: 'Кусторез',
                value: 'custorez'
            },{
                text: 'Аккумуляторная коса-кусторез',
                value: 'akk-custorez'
            }]
        })
    }
}
