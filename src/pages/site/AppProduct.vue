<template>
  <b-container>
    <h1 class="h2 mb-5">{{ properties.h1 }}</h1>
    <b-row>
      <b-col cols="4">
        <b-img :src="properties.image" fluid alt="" />
      </b-col>
      <b-col cols="8">
        <p class="text-secondary h4">SKU: {{ properties.sku }}</p>
        <p class="h4 mb-5">Цена: {{ properties.price }}</p>
        <p class="h4">Описание</p>
        <div v-html="properties.description"></div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Product from "@/pages/default/AppProduct";
export default {
  name: 'AppProduct',
  extends: Product,
  beforeMount() {
    this.$store.dispatch('Product/productProperty/updateProductProp',{
      h1: 'Смеситель hansgrohe Focus для раковины двухрычажный, хром 31937000',
      price: 22430,
      image: 'https://shop.hansgrohe.ru/media/catalog/product/cache/29/thumbnail/600x/163b81649b7ef7bc8a00b0066e59ae0a/1/5/154__hpa00779_tif.png',
      description: '<p>• ComfortZone 100<br>• скорость потока при 3 бар: 5 л / мин<br>• обычная струя<br>• расход воды: 5 л/мин<br>• керамические клапаны горячий / холодный 90 °<br>• подходит для проточных водонагревателей<br>• набор для всплывающих отходов G 1¼<br>• размер соединения: DN15</p>',
      sku: '31937000'
    })
  }
}
</script>
