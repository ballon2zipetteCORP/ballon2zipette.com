<template>
  <template v-if="!isLoading">
    <article class="offers">
      <h2>{{ title }}</h2>

      <section>
        <product-list-item
          @add-quantity="addQuantity"
          @remove-quantity="removeQuantity"

          :item="item"
          :total-quantity="totalQuantity"
          :max-total-quantity="MAX_PRODUCTS_QUANTITY"

          v-for="item in products"
          :key="item"
        />
      </section>

      <button v-show="totalQuantity > 0" @click="handleOrderModal" class="icon order">
        Commander x{{totalQuantity}}
      </button>
    </article>

    <products-order
      @close="showOrderModal = false"
      :items="selectedProducts"
      :show-modal="showOrderModal"
    />
  </template>
  <template v-else>
    <loading-spinner />
  </template>
</template>

<script setup>
import { computed, ref } from 'vue'

import ProductListItem from '@/components/products/ProductListItem.vue';
import ProductsOrder from '@/components/products/ProductsOrder.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'

const MAX_PRODUCTS_QUANTITY = ref(2); // per persons
const props = defineProps({
  title: {
    type: String,
    default: "Nos offres",
    required: false
  },
  items: {
    type: [Array, undefined, null],
    required: true
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false
  }
});
const products = ref(
  props.items?.map((item) => {
    item.quantity = 0;
    return item;
  })
);

const totalQuantity = computed(() => {
  return products.value.reduce((acc, item) => acc+item.quantity, 0);
});
const selectedProducts = computed(() => {
  return products.value.filter(product => product.quantity > 0);
});

const showOrderModal = ref(false);

function handleOrderModal() {
  if(totalQuantity.value < 1)
    return;
  showOrderModal.value = true;
}

function addQuantity(name) {
  const product = products.value.find(p => p.name === name);
  if(!product) {
    return
  }
  if(product.quantity >= product.maxQuantity || totalQuantity.value >= MAX_PRODUCTS_QUANTITY.value) {
    return;
  }
  product.quantity++;
}
function removeQuantity(name) {
  const product = products.value.find(p => p.name === name);
  if(!product) {
    return
  }
  if(product.quantity < 1) {
    return;
  }
  product.quantity--;
}
</script>

<style scoped>
h2 {
  text-align: center;
  text-transform: uppercase;
  font-family: "poppins-bold", sans-serif;
}

section {
  display: flex;
  gap: 1em;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1em 0 2em;
}

button.order {
  display: block;
  width: fit-content;
  color: var(--black);
  font-size: 1.2em;
  background-color: var(--orange);
  border-radius: 100px;
  cursor: pointer;
  padding: 10px 2em 10px 20px;
  border: none;
  margin: auto;

  position: relative;

  &:hover {
    background-color: var(--orange-2);
  }

  &::before {
    content: "\F0054";
    position: absolute;
    top: 50%;
    right: 15px;

    transform: translateY(-50%);
  }
}
</style>
