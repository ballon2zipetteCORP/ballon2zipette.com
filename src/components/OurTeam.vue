<template>
  <h2>Notre équipe</h2>

  <section v-for="teams in Object.values(teamsMembers)" :key="teams">
    <card-person
      v-for="team in teams" :key="team"
      :post="team.post"
      :avatar="team.thumbnail"
      :video="team.video"
      :boycott-rate="team.boycottRate"
    />
  </section>
</template>

<script setup>

import { computed, onMounted, ref } from 'vue'
import { defineTitle } from '@/helpers/global.utils.js'
import CardPerson from '@/components/ui/CardPerson.vue'

const OUR_TEAM = ref([
  { thumbnail: "ballon2zipette.jpg", post: "CEO", video: "ballon2zipette.mov" },
  { thumbnail: "momoplansnap.jpg", post: "CEO" },
  { boycottRate: 2, thumbnail: "planBraquageMechant.jpg", post: "CEO", video: "planBraquage.mov" },
  { thumbnail: "panoramix.jpg", post: "Associé" },
  { thumbnail: "nourisse.jpg", post: "Associé" },
  { thumbnail: "panorapetite.jpg", post: "Associé" }
]);

const teamsMembers = computed(() => {
  return OUR_TEAM.value.reduce((res, team) => {
    if(!res[team.post])
      res[team.post] = [];
    res[team.post].push(team);
    return res;
  }, {});
});

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
  margin-bottom: 3em;
}
</style>
