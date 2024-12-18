<template>
  <nav>
    <ul>
      <li @click="() => changeTo('pago-flash')">Pago-Flash</li>
      <li @click="() => changeTo('braquage')">Braquage (Loading ...)</li>
    </ul>
  </nav>

  <keep-alive>
    <component :is="{ ...currentPage }" />
  </keep-alive>
</template>

<script setup>
import { ref } from 'vue'

import PagoFlash from '@/components/events/pago-flash/PagoFlash.vue'
import OurTeam from '@/components/OurTeam.vue'

const pages = {
  'pago-flash': PagoFlash,
  braquage: OurTeam,
}
const currentPage = ref(PagoFlash)

function changeTo(event) {
  const e = pages[event]
  if (!e) {
    throw new Error('Event not exists.')
  }
  currentPage.value = e
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 2em;
}

section {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
  margin-bottom: 3em;
}
</style>
