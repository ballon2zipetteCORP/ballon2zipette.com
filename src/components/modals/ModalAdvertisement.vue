<template>
  <modal-default @close="setAsAdvertised" :modal-shown="showAdvertisementModal">
    <div class="content">
      <h2>️️⚠ Avertissement ⚠</h2>
      <p>
        Ce site a été créé à but humoristique. Il n'a aucunement pour but de faire la promotion de la drogue, arme ou quoi que ce soit d'autre (Cela inclut aussi le télégramme).
      </p>

      <button @click="setAsAdvertised" class="primary">
        J'ai compris
      </button>
    </div>
  </modal-default>
</template>

<script setup>
import { ref } from 'vue'

import ModalDefault from '@/components/ui/ModalDefault.vue'

const showAdvertisementModal = ref(localStorage.getItem("client_advertised") !== "true");

function setAsAdvertised() {
  localStorage.setItem("client_advertised", "true");
  showAdvertisementModal.value = false;
}
</script>

<style scoped>
div.content {
  display: flex;
  flex-direction: column;
  gap: .1em;
  justify-content: center;
  text-align: center;
  padding-top: 2em;
  padding-bottom: 1em;

  width: 23em;
}

h2 {
  color: var(--orange);
}

p {
  margin: 1em 0;
}

button {
  margin-top: 1em;
  border: 1px solid var(--gray-1);
  background-color: var(--black);
  color: var(--gray-2);
  cursor: pointer;

  transition: all .5s ease;

  &.primary {
    background-color: var(--orange);
    color: var(--black);
  }

  font-family: "poppins-regular", sans-serif;
  padding: .5em .8em;
  font-size: 1.1em;
  border-radius: 10px;
}
</style>
