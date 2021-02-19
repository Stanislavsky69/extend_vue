<script>
import AppCatalogDefault from "@/pages/default/AppCatalog.vue";
export default {
  name: 'AppCatalogSite',
  extends: AppCatalogDefault,
  data(){
    return {
      h1: 'Каталог Dewalt'
    }
  },
  beforeMount() {
    this.$store.dispatch('Catalog/products/setProducts',[{
      sku: 'DCM571X1-QW',
      name: 'Аккумуляторная коса-кусторез DEWALT FLEXVOLT DCM571X1, 18/54 В',
      introtext: '',
      price: 38990,
      image: 'https://shop.dewalt.ru/media/catalog/product/cache/27/small_image/300x/a4e40ebdc3e371adff845072e1c73f37/d/c/dcm571x1-qw-1.jpg'
    },{
      sku: 'DCM571N-XJ',
      name: 'Коса аккумуляторная профессиональная 54 Вольта DEWALT DCM571N без аккумулятора и ЗУ',
      introtext: '',
      price: 21990,
      image: 'https://shop.dewalt.ru/media/catalog/product/cache/27/small_image/300x/a4e40ebdc3e371adff845072e1c73f37/_/2/_2019-03-26_19.28.34.png'
    }])
  }
}
</script>
