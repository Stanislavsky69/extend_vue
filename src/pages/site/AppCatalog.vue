<script>
import AppCatalogDefault from "@/pages/default/AppCatalog.vue";
export default {
  name: 'AppCatalogSite',
  extends: AppCatalogDefault,
  data(){
    return {
      h1: 'Каталог Hansgrohe'
    }
  },
  beforeMount() {
    this.$store.dispatch('Catalog/products/setProducts',[{
      sku: 'DCM571X1-QW',
      name: 'HG Термостат Ecostat E, 37 л/мин, СМ 15705000',
      introtext: '',
      price: 21040,
      image: 'https://shop.hansgrohe.ru/media/catalog/product/cache/29/small_image/300x/163b81649b7ef7bc8a00b0066e59ae0a/3/7/37__hpa01438_tif.jpg'
    },{
      sku: '15737600',
      name: 'HG Термостат ShowerSelect, черный/хром 15737600',
      introtext: '',
      price: 60020,
      image: 'https://shop.hansgrohe.ru/media/catalog/product/cache/29/small_image/300x/163b81649b7ef7bc8a00b0066e59ae0a/3/7/37__hpa01675_tif.jpg'
    }])
  }
}
</script>
