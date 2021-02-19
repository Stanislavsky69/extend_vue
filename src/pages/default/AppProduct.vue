<template>
    <b-container>
        <b-row>
          <b-col cols="4">
            <b-img :src="properties.image" fluid alt="" />
          </b-col>
          <b-col cols="8">
            <h1 class="h2 mb-5">{{ properties.h1 }}</h1>
            <p class="text-secondary h4">SKU: {{ properties.sku }}</p>
            <p class="h4 mb-5">Цена: {{ properties.price }}</p>
            <p class="h4">Описание</p>
            <div v-html="properties.description"></div>
          </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
  name: 'AppProduct',
  computed: {
    properties(){
      return this.$store.state.Product.productProperty;
    }
  }
}
</script>
