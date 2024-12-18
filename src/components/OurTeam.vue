<template>
  <h2>Notre équipe</h2>

  <section v-for="teams in Object.values(teamsMembers)" :key="teams" class="team">
    <card-person
      v-for="team in teams" :key="team"
      :post="team.post"
      :avatar="team.thumbnail"
      :video="team.video"
      :boycott-rate="team.boycottRate"
      :boycott-reason="team.boycottReason"
    />
  </section>
  <h2>Nos Calibres</h2>
  <section v-for="calibre in Object.values(calibres)" :key="calibre" class = "guns">
    <card-calibre
      v-for="calibre in calibres" :key="calibre"
      :post="calibre.post"
      :avatar="calibre.thumbnail"
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
  { boycottRate: 1, boycottReason: "Vente d'arme 🔫", thumbnail: "planBraquageMechant.jpg", post: "CEO", video: "planBraquage.mov" },
  { thumbnail: "panoramix.jpg", post: "Associé.e" },
  { thumbnail: "nourisse.jpg", post: "Associé.e" },
  { thumbnail: "panorapetite.jpg", post: "Associé.e" }
]);

const OUR_GUNS = ref([
  { thumbnail: "gun.jpeg", post: "SMALL" }
]);

const teamsMembers = computed(() => {
  return OUR_TEAM.value.reduce((res, team) => {
    if(!res[team.post])
      res[team.post] = [];
    res[team.post].push(team);
    return res;
  }, {});
});


const calibres = computed(() => {
  return OUR_GUNS.value.reduce((res, calibre) => {
    if(!res[calibre.post])
      res[calibre.post] = [];
    res[calibre.post].push(calibre);
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

section.team {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
  margin-bottom: 3em;
}
</style>
