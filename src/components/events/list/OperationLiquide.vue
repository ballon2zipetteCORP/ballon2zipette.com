<template>
  <div class="hero-header">
    <img src="/images/events/operation-liquide/wanted-poster.jpg" alt="wanted plan-braquage" />
  </div>
</template>

<script setup>

import { onMounted } from 'vue'
import { defineTitle } from '@/helpers/global.utils.js'

onMounted(() => {
  defineTitle("Opération liquide");
});

</script>

<style scoped>
div.hero-header {
  width: fit-content;
  margin: auto;
  text-align: center;

  &>img {
    width: 20em;
    border-radius: 10px;
    display: block;
    margin: auto auto .5em;
  }
}
</style>
