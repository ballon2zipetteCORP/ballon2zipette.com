<template>
  <header>
    <custom-dropdown
      :items="items"
      label="Séléctionner un évènement"
      v-model="selection"
    />
  </header>

  <keep-alive>
    <component :is="{ ...currentPage }" />
  </keep-alive>
</template>

<script setup>
import { computed, ref } from 'vue'

import PagoFlash from '@/components/events/list/PagoFlash.vue'
import CustomDropdown from '@/components/ui/CustomDropdown.vue'
import OperationLiquide from '@/components/events/list/OperationLiquide.vue'
import TravauxALaChiche from './list/TravauxALaChiche.vue';
import WackyParty from './list/WackyParty.vue';

const PAGES = ref({
  'pago-flash': {
    title: "Pago Flash",
    component: PagoFlash
  },
  'operation-liquide': {
    title: "Opération liquide",
    component: OperationLiquide
  },
  'travaux-a-la-chiche': {
      title: 'Travaux à la chiche',
      component: TravauxALaChiche
  },
  'wacky-party': {
    title: "Wacky party",
    component: WackyParty,
  },
  'tir-aux-ballons': {
    title: "Tir aux ballons",
    isComing: true
  },
  'mmkhapta': {
    title: "MMKhapta",
    isComing: true
  },
  'jardinage-a-la-chiche': {
    title: 'Jardinage à la chiche',
    isComing: true
  },
  'casino-a-la-chiche': {
    title: 'Casino à la chiche',
    isComing: true
  }
});


const items = computed(() =>
  Object.entries(PAGES.value).map(([key, { title, isComing }]) => ({
    label: title, value: key, disabled: isComing
  }))
);
const selection = ref(items.value[0]);

const currentPage = computed(() => {
  const page = selection.value.value
  return PAGES.value[page]?.component;
});
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

header {
  width: fit-content;
  margin: auto;
}
</style>
