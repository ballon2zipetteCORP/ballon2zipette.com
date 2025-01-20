<template>
  <div class="hero-header">
    <img src="/images/events/operation-liquide/wanted-poster.jpg" alt="wanted plan-braquage" />
    <div class="braquageFootage">
      <card-person

        post="Braquage footage"
        :video="['/videos/events/operation-liquide/carDrive.mp4']"
        :avatar="'/images/events/operation-liquide/carBroke.jpg'"

      />
    </div>

  </div>

  <h2 class="total-stolen-count">Montant du butin: 10 000€</h2>

  <product-list
    title="Ce que le bandit a volé"
    :is-loading="isDrinksLoading"
    type="DRINKS"
    :items="drinks?.products ?? null"
  />
</template>

<script setup>

import { onMounted, ref } from 'vue'
import { defineTitle } from '@/helpers/global.utils.js'

import useAPIRequest from '@/composables/useAPIRequest.js'
import ProductList from '@/components/products/ProductList.vue'
import CardPerson from '@/components/ui/cards/CardPerson.vue'

const eventId = ref("operation-liquide");
const {isLoading: isDrinksLoading, response: drinks, handle: handleDrinks} = useAPIRequest({
  endpoint: "/products/event/"+eventId.value+"?type=DRINKS"
})

onMounted(() => {
  defineTitle("Opération liquide");
  handleDrinks();
});

</script>

<style scoped>
div.hero-header {
  width: fit-content;
  margin: 1em auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &>img {
    width: 20em;
    border-radius: 10px;
    display: block;
    margin: auto auto .5em;
  }

  & > div{
    position: relative;

    margin-top: 40px;
    width: 240px;
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
