<template>
  <nav>
    <ul>
      <li
        v-for="[key, page] in Object.entries(PAGES)"
        :key="page.title"
        @click="() => changeTo(key)"
      >
        {{page.title}}
      </li>
    </ul>
  </nav>

  <keep-alive>
    <component :is="{ ...currentPage }" />
  </keep-alive>
</template>

<script setup>
import { ref } from 'vue'

import PagoFlash from '@/components/events/list/PagoFlash.vue'

const PAGES = ref({
  'pago-flash': {
    title: "Pago Flash",
    component: PagoFlash
  }
});
const currentPage = ref(Object.values(PAGES.value)[0].component);

function changeTo(event) {
  const e = PAGES.value[event]
  if (!e) {
    throw new Error('Event not exists.')
  }
  currentPage.value = e.component;
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

nav {
  text-align: center;

  &>ul {
    list-style: none;
    display: flex;
    justify-content: center;

    &>li {
      padding: .5em .8em;
      cursor: pointer;

      border-bottom: 2px solid var(--orange);
    }
  }
}
</style>
