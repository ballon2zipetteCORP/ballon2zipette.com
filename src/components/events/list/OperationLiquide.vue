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

  <h2 class="total-stolen-count">Montant du butin: 10 000 000€</h2>

  <product-list
    title="Ce que le bandit a volé"
    :is-loading="isDrinksLoading"
    type="DRINKS"
    :items="drinks?.products ?? null"
  />

  <h2 class="title">Les officiers sur l'affaire</h2>

  <section class="officers">
    <article v-for="officer in officers" :key="officer.name">
      <img :alt="officer.name" :src="`/images/events/operation-liquide/${officer.image}`" />
      <h4>{{ officer.name }}</h4>
    </article>
  </section>
</template>

<script setup>

import { onMounted, ref } from 'vue'
import { defineTitle } from '@/helpers/global.utils.js'

import useAPIRequest from '@/composables/useAPIRequest.js'
import ProductList from '@/components/products/ProductList.vue'
import CardPerson from '@/components/ui/cards/CardPerson.vue'

const eventId = ref("operation-liquide");
const {isLoading: isDrinksLoading, response: drinks, handle} = useAPIRequest({
  endpoint: "/products/event/"+eventId.value+"?type=DRINKS"
})

const officers = ref([
  { name: "Inspecteur Zipette ❄️", image: "police-card-baloon.jpg" },
  { name: "Inspecteur PlanSnap 👻", image: "police-card-momo.jpg" }
]);

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

h2.title {
  text-align: center;
  text-transform: uppercase;
  font-family: "poppins-bold", sans-serif;
  margin-bottom: .5em;
}

section.officers {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: .5em;

  & > article {
    & > h4 {
      text-align: center;
    }
    
    & > img {
      width: 30em;
      border-radius: 10px;
    }
  }
}

/* resp */
@media screen and (max-width: 490px) {
  section.officers article img {
    width: 25em;
  }
}
</style>
