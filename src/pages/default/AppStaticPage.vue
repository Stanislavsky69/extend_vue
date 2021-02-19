<template>
    <b-container>
          <h1>{{ h1 }}</h1>
          <div v-html="content"></div>
    </b-container>
</template>
<script>
export default {
  name: 'AppStaticPage',
  computed: {
    h1(){
      return this.$store.state.StaticPage.page.h1;
    },
    content(){
      return this.$store.state.StaticPage.page.content;
    }
  }
}
</script>
