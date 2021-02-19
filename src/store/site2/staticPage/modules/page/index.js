import PageDefault from '@/store/default/staticPage/modules/page';

export default class Page extends PageDefault {
    constructor() {
        super();
        this.state = Object.assign(this.state, {
            content: '<ul>\n' +
                '            <li><a href="#1">Доставка по Москве</a></li>\n' +
                '            <li><a href="#2">Самовывоз из магазина в Москве</a></li>\n' +
                '            <li><a href="#3">Доставка по России</a></li>\n' +
                '            <li><a href="#4">Самовывоз из пунктов выдачи заказов</a></li>\n' +
                '        </ul><p>Для вашего удобства, у нас работает система, которая автоматически определяет ваше местоположение и, исходя из этого, рассчитывает стоимость доставки. Стоимость доставки вы сможете увидеть в карточке интересующего вас товара.</p>',
            h1: 'Способы и стоимость доставки Dewalt'
        })
    }
}
