<template>
  <h1>Joyeux anniversaire Ilan 1000M</h1>

  <img alt="pic 1" src="/images/events/ilan/pic_1.jpg" />

  <h2>Une gorgée à ta santé</h2>
  <img alt="pic 2" src="/images/events/ilan/pic_2.jpg" />

  <h2>Voici ton cadeau: brouette de yeager</h2>
  <img alt="pic 3" src="/images/events/ilan/pic_3.jpg" />
</template>

<style scoped>
img {
  width: 20em;
  display: block;
  margin: auto;
  border-radius: 10px;
}
h1, h2 {
  text-align: center;
  margin-bottom: 1em;
  margin-top: 1em;
  font-family: "poppins-bold";
  color: #d6d624;
}
</style>

<script setup>
import { balloons } from "balloons-js";

balloons();
</script>
