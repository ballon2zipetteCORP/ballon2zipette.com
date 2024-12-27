<template>
  <header>
    <custom-dropdown
      :items="items"
      label="Selectionner l'évènement"
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

const PAGES = ref({
  'pago-flash': {
    title: "Pago Flash",
    component: PagoFlash
  },
  'braquage-flash': {
    title: "Braquage Flash",
    component: null,
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
  margin: 1em auto;
}
</style>
