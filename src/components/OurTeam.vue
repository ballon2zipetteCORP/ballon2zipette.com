<template>
  <h2>Notre équipe</h2>

  <section>
    <article v-for="team in OUR_TEAM" :key="team.title">
      <img :alt="team.title" :src="'/images/our-team/'+team.thumbnail" />
      <h4>{{ team.title }}</h4>
      <h5>{{ team.post }}</h5>
    </article>
  </section>
</template>

<script setup>

import { onMounted, ref } from 'vue'
import { defineTitle } from '@/helpers/global.utils.js'

const OUR_TEAM = ref([
  { title: "Ballon2Zipette ❄️🔪", thumbnail: "ballon2zipette.jpg", post: "CEO", video: "ballon2zipette.mov" },
  { title: "MomoPlanSnap 👻", thumbnail: "momoplansnap.jpg", post: "CEO" },
  { title: "Plan Braquage 💰", thumbnail: "planBraquageMechant.jpg", post: "CEO", video: "planBraquage.mov" }
]);

onMounted(() => {
  defineTitle("Notre équipe");
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
}

article {
  position: relative;

  &>img {
    width: 15em;
    border-radius: 10px;
  }

  &>h4 {
    margin-top: .5em;
    text-align: center;
  }

  &>h5 {
    position: absolute;
    top: -20px;
    left: 50%;

    transform: translateX(-50%);

    background-color: var(--orange);
    color: var(--black);
    width: fit-content;
    margin: auto;
    margin-top: .5em;
    padding: .5em .8em;

    border-radius: 100px;
    font-family: "poppins-bold", sans-serif;
  }
}
</style>
