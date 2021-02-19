import Product from './src/store/default/product'
import Catalog from './src/store/default/catalog'
import StaticPage from './src/store/default/staticPage'

export default {
    vueRouterConfig: {
        mode: 'history',
        base: process.env.BASE_URL,
        linkActiveClass: 'active',
        linkExactActiveClass: 'active',
        routes: [
            {
                path: '/product',
                name: 'Product',
                component: () => import('@/pages/default/AppProduct'),
            },{
                path: '/catalog',
                name: 'Catalog',
                component: () => import('@/pages/default/AppCatalog'),
            },{
                path: '/delivery',
                name: 'Delivery',
                component: () => import('@/pages/default/AppStaticPage'),

            }
        ],
    },
    store: {
        modules: {
            Catalog,
            Product,
            StaticPage
        }
    }
}


