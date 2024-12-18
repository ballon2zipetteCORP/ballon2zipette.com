<template>
  <h2>Notre équipe</h2>

  <section v-for="teams in Object.values(teamsMembers)" :key="teams">
    <card-person
      v-for="team in teams" :key="team"
      :post="team.post"
      :avatar="'/images/our-team/'+team.thumbnail"
      :video="team.video"
      :boycott-rate="team.boycottRate"
      :boycott-reason="team.boycottReason"
    />
  </section>
  <h2>Nos Calibres</h2>
  <section>
    <card-calibre
      v-for="gun in OUR_GUNS" :key="gun"
      :path="'/images/calibres/'+gun.path"
      :title="gun.title"
    />
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { defineTitle } from '@/helpers/global.utils.js'
import CardPerson from '@/components/ui/CardPerson.vue'
import CardCalibre from '@/components/ui/CardCalibre.vue'

const OUR_TEAM = ref([
  { thumbnail: "ballon2zipette.jpg", post: "CEO", video: "ballon2zipette.mov" },
  { thumbnail: "momoplansnap.jpg", post: "CEO" },
  { boycottRate: 1, boycottReason: "Vente d'arme 🔫", thumbnail: "planBraquageMechant.jpg", post: "CEO", video: "planBraquage.mov" },
  { thumbnail: "panoramix.jpg", post: "Associé.e" },
  { thumbnail: "nourisse.jpg", post: "Associé.e" },
  { thumbnail: "panorapetite.jpg", post: "Associé.e" }
]);

const OUR_GUNS = ref([
  { path: "gun.jpeg", title: "9mm small edition collab avec Drake" }
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
