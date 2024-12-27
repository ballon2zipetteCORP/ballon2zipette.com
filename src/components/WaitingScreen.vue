<template>
  <h1>ça arrive 🌍...</h1>
  <div class="globe" ref="globeRef" />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import Globe from "globe.gl";
import { defineTitle } from '@/helpers/global.utils.js'

const globeRef = ref(null);

watch(globeRef, val => {
  const world = new Globe(val, { animateIn: false })
    .backgroundColor('rgba(0, 0, 0, 0)')
    .width(400)
    .height(400)
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');

  world.controls().autoRotate = true;
  world.controls().autoRotateSpeed = .90;
  world.controls().enabled = false;
})

onMounted(() => {
  defineTitle("ça arrive 🌍...");
})
</script>

<style scoped>
h1 {
  font-size: 2em;
  text-align: center;
  text-transform: uppercase;

  font-family: "poppins-bold", sans-serif;
}

div.globe {
  margin: auto;
  width: fit-content;
}
</style>
