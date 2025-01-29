<template>
  <div v-if="isLoading">
    <loading-spinner />
  </div>
  <div v-else>
    <h1>Commandes ({{ orders.length }})</h1>

    <ul class="orders">
      <li v-for="order in orders" :key="order.id">
        <ul>
          <li>{{ order.customer.givenName.toUpperCase() }} {{ order.customer.familyName }}</li>
          <li v-for="product in order.products" :key="product.id+order.id">
            {{ product.name }} x{{ product.quantity }}
          </li>
        </ul>
      </li>
    </ul>

    <h2>Total par ingrédients</h2>
    <ul class="totals-per-ingredients">
      <li v-for="ingredient in totalPerIngredient" :key="ingredient.name">
        {{ ingredient.name }} : {{ ingredient.quantity }}cl
      </li>
    </ul>
  </div>
</template>

<script setup>

import useAPIRequest from "@/composables/useAPIRequest.js";
import {computed, onMounted} from "vue";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";
import {defineTitle} from "@/helpers/global.utils.js";

const {isLoading, response, handle} = useAPIRequest({
  endpoint: "/orders/DRINKS"
});
const orders = computed(() => response.value?.orders ?? [])
const totalPerIngredient = computed(() => {
  const productsPerOrder = orders.value.map(o => o.products).flat();
  const ingredients = productsPerOrder.reduce((acc, p) => {
    const composition = p.attributes.composition;
    for(const ingredient of composition) {
      if(!acc[ingredient.label]) {
        acc[ingredient.label] = 0;
      }
      acc[ingredient.label] += ingredient.quantity;
    }
    return acc;
  }, {});
  return Object.entries(ingredients).map(([name, quantity]) => ({name, quantity}));
})

onMounted(() => {
  handle()
  defineTitle("Les commandes")
});

</script>

<style scoped>


</style>
