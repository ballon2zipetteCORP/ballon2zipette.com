<template>
  <div class="general">
    <a href="https://casino2zipette.online">
      <img src="/images/casino/logo-roulette-clean.png" alt="Casino" id="roulette">
    </a>
    <card-game :description="'VAS JOUER AU JEU QUI REND TOUT LE MONDE GUEDIN'" :path="'/images/casino/kaarisPlane.png'" :title="'Jeu de la Fusée'" :link="'https://casino2zipette.online/games/aviator-crash'"></card-game>
  </div>

</template>

<script setup>

import CardGame from '@/components/ui/CardGame.vue'
</script>

<style scoped>

#roulette {
  width:15%;
  display: block;
  margin: 2em auto;
  transition: transform 0.3s ease;

}
a{
  width: fit-content;
  text-align: center;
}

#roulette:hover {
  transform: scale(1.1);
}

#roulette:active {
  transform: scale(0.95);
}

.general{
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5em;


}

</style>
