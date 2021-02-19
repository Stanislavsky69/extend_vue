export default {
    filters: [{
        id: 'typeMontazh',
        groupName: 'Тип монтажа',
        checkboxes: [{
            text: 'Отдельностоящие',
            value: 'checkboxOne'
        },{
            text: 'Пристенные',
            value: 'checkboxTwo'
        }]
    }],
    priceRange: {
        name: 'Цена',
        from: 0.00,
        to: 20000
    }
}
