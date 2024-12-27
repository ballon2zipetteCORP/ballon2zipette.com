<template>
  <!--<div class="hero-header">
    <img src="/images/events/operation-liquide/wanted-poster.jpg" alt="wanted plan-braquage" />
  </div>-->

  <product-list
    :items="[{
      id: 'eb4c785d-fc83-4547-a3fd-8981bb685f6',
      name: 'Le bandito',
      maxQuantity: 10,
      image: 'https://api.ballon2zipette.com/static/f04f33c2-ebfd-4215-9b23-ff770c52c93a.png'
    },
    {
      id: 'eb4c785d-fc83-4547-a3fd-8981bb685f6',
      name: 'La kitcha',
      maxQuantity: 10,
      image: 'https://api.ballon2zipette.com/static/f04f33c2-ebfd-4215-9b23-ff770c52c93a.png'
    }]"
  />
</template>

<script setup>

import { onMounted } from 'vue'
import { defineTitle } from '@/helpers/global.utils.js'
import ProductList from '@/components/products/ProductList.vue'

onMounted(() => {
  defineTitle("Opération liquide");
});

</script>

<style scoped>
div.hero-header {
  width: fit-content;
  margin: auto;
  text-align: center;

  &>img {
    width: 20em;
    border-radius: 10px;
    display: block;
    margin: auto auto .5em;
  }
}
</style>
