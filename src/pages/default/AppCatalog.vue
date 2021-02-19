<template>
  <b-container class="mt-5">
    <h1 class="mb-5">{{ h1 }}</h1>
    <b-row>
      <b-col :cols="3">
        <AppSidebar></AppSidebar>
      </b-col>
      <b-col :cols="9">
        <b-row>
            <b-col cols="4"  v-for="product of products" :key="product.sku">
                <AppProduct :sku="product.sku"  :image="product.image" :title="product.name">
                  <template v-slot:description>
                    {{ product.introtext }}
                  </template>
                </AppProduct>
            </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'AppCatalog',
  data(){
    return {
      h1: 'Каталог Roca'
    }
  },
  components: {
    AppSidebar: () => import(`@/components/${process.env.VUE_APP_THEME}/AppSidebar.vue`).catch(() => {
      return import(`@/components/default/AppSidebar.vue`)
    }),
    AppProduct: () => import(`@/components/${process.env.VUE_APP_THEME}/AppProduct.vue`).catch(() => {
      return import('@/components/default/AppProduct.vue')
    }),
  },
  computed: {
    products(){
      return this.$store.state.Catalog.products.products;
    }
  },
}
</script>
