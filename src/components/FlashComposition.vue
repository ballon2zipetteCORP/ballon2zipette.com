<template>
  <div class="composition">
    <div class="middle">
      <template v-if="!isLoading && !errorMessage && product">
        <h1>Informations sur le flash</h1>

        <span :class="`icon flash-alcohol ${product.attributes.alcoholise ? 'alcoholise' : 'non-alcoholise'}`">
          {{ product.attributes.alcoholise ? "Contient de l'alcool" : 'Ne contient pas d\'alcool' }}
        </span>

        <img :alt="product.name" :src="product.image" />
        <h2>{{ product.name }}</h2>

        <h4>Description</h4>
        <p>{{ product.description }}</p>

        <h4>Composition du flash</h4>
        <ul>
          <li v-for="line in product.attributes.composition" :key="line">
            {{ line }}
          </li>
        </ul>

        <aside>
          <span class="icon info" />
          Si vous n'êtes pas sûr de la composition demandez à nos fournisseurs.
        </aside>
      </template>
      <template v-else-if="isLoading && !errorMessage">
        <loading-spinner />
      </template>
      <template v-else>
        <h2>Le flash que vous avez scanné n'est pas trouvable !</h2>
        <h3>Veuillez scanner à nouveau ou demander conseil à nos fournisseurs.</h3>
        <router-link :to="{name: 'home'}">Retour à l'acceuil</router-link>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted, ref, watch } from 'vue'
import { defineTitle } from '@/helpers/global.utils.js'

import useAPIRequest from '@/composables/useAPIRequest.js'

import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'

const route = useRoute();
const productId = ref(route?.params?.id);

const {isLoading, errorMessage, response, handle} = useAPIRequest({
  endpoint: "/products/get/"+productId.value
});

const product = computed(() => response.value?.product ?? null);

watch(product, (val) => {
  if(val) {
    defineTitle(`Composition ${val.name}`);
  }
})

onMounted(() => handle());
</script>

<style scoped>
div.composition {
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  background-color: var(--black);

  &>div.middle {
    position: absolute;
    margin-top: 5em;
    left: 50%;

    transform: translateY(-50%);

    &>img {
      display: block;
      margin: auto;
    }

    &>h1 {
      font-family: "poppins-bold", sans-serif;
      margin-bottom: .5em;
      text-align: center;
    }

    &>h2 {
      font-family: "poppins-bold", sans-serif;
      text-align: center;
    }

    &>h4 {
      margin: .5em 0;
      color: var(--orange);
    }

    &>ul {
      list-style: "- ";
      padding-left: 1em;
      &>li {
        margin: .5em 0;
      }
    }

    &>span.flash-alcohol {
      padding: .7em 1.2em;
      border-radius: 100px;

      font-family: "poppins-bold", sans-serif;

      margin: auto;
      width: fit-content;
      margin-bottom: .5em;

      display: flex;
      gap: .5em;
      align-items: center;

      &::before {
        font-size: 1.2em;
      }

      &.alcoholise {
        background-color: var(--orange);
        color: var(--black);

        &::before { content: "\F0026"; }
      }
      &.non-alcoholise {
        background-color: var(--green);
        color: var(--black);
        &::before { content: "\F0E1E"; }
      }
    }

    &>a {
      display: block;
      margin: auto;
      margin-top: .5em;

      width: fit-content;
      text-decoration: none;

      font-size: 1.3em;

      color: var(--orange);
      border-bottom: 1px solid var(--orange);
    }

    &>aside {
      background-color: var(--blue);
      color: var(--black);

      display: flex;
      gap: 1em;
      align-items: center;

      padding: 1em 1em;
      border-radius: 10px;
      margin-top: 1em;

      &>span.info {
        display: block;
        font-family: "poppins-semibold", sans-serif;
        &::before {
          content: "\F02FC";
          font-size: 1.8em;
        }
      }
    }
  }
}
</style>
