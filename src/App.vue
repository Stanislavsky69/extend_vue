<template>
  <div id="app">
    <b-navbar fixed>
      <b-navbar-nav>
        <b-nav-item :to="{name: 'Catalog'}">Каталог</b-nav-item>
        <b-nav-item :to="{name: 'Product'}" >Продукт</b-nav-item>
        <b-nav-item :to="{name: 'Delivery'}">Статичная страница</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>
<script>
export default {
  beforeMount() {

  }
}
</script>
<style lang="scss">

</style>
