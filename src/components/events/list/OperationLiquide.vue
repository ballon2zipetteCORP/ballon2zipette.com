<template>
  <div class="hero-header">
    <img src="/images/events/operation-liquide/wanted-poster.jpg" alt="wanted plan-braquage" />
  </div>

  <h2 class="total-stolen-count">Montant du butin: 10 000€</h2>

  <product-list
    title="Ce que le bandit a volé"
    :is-loading="isLoading"
    :items="response?.products ?? null"
  />
</template>

<script setup>

import { onMounted, ref } from 'vue'
import { defineTitle } from '@/helpers/global.utils.js'

import useAPIRequest from '@/composables/useAPIRequest.js'
import ProductList from '@/components/products/ProductList.vue'

const eventId = ref("operation-liquide");
const {isLoading, response, handle} = useAPIRequest({
  endpoint: "/products/event/"+eventId.value
})

onMounted(() => {
  defineTitle("Opération liquide");
  handle();
});

</script>

<style scoped>
div.hero-header {
  width: fit-content;
  margin: 1em auto;
  text-align: center;

  &>img {
    width: 20em;
    border-radius: 10px;
    display: block;
    margin: auto auto .5em;
  }
}
h2.total-stolen-count {
  width: fit-content;
  margin: 1em auto;

  padding: .5em .8em;
  background-color: var(--orange);
  color: var(--black);
  border-radius: 10px;
}
</style>
