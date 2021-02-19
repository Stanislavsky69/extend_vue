import ConfigDefault from './config.theme.default'
import PageSite from './src/store/site/staticPage/modules/page'
import FiltersSite from "@/store/site/catalog/modules/filters";


let CopyConfig = Object.assign({}, ConfigDefault)

CopyConfig.store.modules.StaticPage.modules.page = new PageSite()
CopyConfig.store.modules.Catalog.modules.filters = new FiltersSite()

CopyConfig.vueRouterConfig.routes[0].component = () => import('./src/pages/site/AppProduct')
CopyConfig.vueRouterConfig.routes[1].component = () => import('./src/pages/site/AppCatalog')


export default CopyConfig
