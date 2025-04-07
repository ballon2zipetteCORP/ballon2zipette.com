<template>
  <div class="general">
    <a href="https://casino2zipette.online">
      <img src="/images/casino/logo-roulette-clean.png" alt="Casino" id="roulette">
    </a>

    <h1>Jeu de la fusée</h1>

  </div>

</template>

<script setup>

</script>

<style scoped>

#roulette {
  width: 30%;
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
