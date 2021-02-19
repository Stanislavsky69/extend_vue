import ProductDefault from '@/store/default/staticPage/modules/page';

export default class ProductProperty extends ProductDefault {
    constructor() {
        super();
        this.state = Object.assign(this.state, {
            h1: null
        })
    }
}
