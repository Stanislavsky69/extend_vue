<template>
  <b-card :img-src="image" :title="title">
    <span class="text-secondary">{{ sku }}</span>
    <b-card-text><slot name="description"></slot></b-card-text>
    <b-button variant="primary" @click="$emit('click', $props.sku)">Купить</b-button>
  </b-card>
</template>
<script>
export default {
  name: 'AppProduct',
  props: {
    sku: {
      type: [Number, String],
      default: null
    },
    title: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default:  null
    }
  }
}
</script>
