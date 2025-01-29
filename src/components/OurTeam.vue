<template>
  <h2>Notre équipe</h2>

  <section v-for="teams in Object.values(teamsMembers)" :key="teams">
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
  <section>
    <card-calibre
      v-for="gun in OUR_GUNS" :key="gun"
      :post="gun.post"
      :path="'/images/calibres/'+gun.path"
      :title="gun.title"
    />
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { defineTitle } from '@/helpers/global.utils.js'

import CardPerson from '@/components/ui/cards/CardPerson.vue'
import CardCalibre from '@/components/ui/cards/CardDefault.vue'

const OUR_TEAM = ref([
  { thumbnail: "ballon2zipette.jpg", post: "CEO", video: ["ballon2zipette.mov", "ballon2zipette-2.mp4"]},
  { thumbnail: "momoplansnap.jpg", post: "CEO", video: "momoplansnap.mp4" },
  { thumbnail: "planBraquageMechant.jpg", post: "CEO", video: ["plan-braquage.mov", "plan-braquage-2.mp4"], boycottRate: 1, boycottReason: "Casse les couilles avec ses snaps à la montagne"},
  { thumbnail: "panoramix.jpg", post: "Associé.e", video: "panoramix.mp4", boycottRate: 1, boycottReason: "complice de planbraquage" },
  { thumbnail: "nourisse.jpg", post: "Associé.e" },
  { thumbnail: "panorapetite.jpg", post: "Associé.e", video: "panorapetite.mp4" },
  { thumbnail: "astronaute.jpg", post: "Associé.e" }
]);

const OUR_GUNS = ref([
  { path: "gun.jpeg", title: "GLOCK 18 - 9mm collab avec Drake", post : "small" },
  { path: "batte-de-baseball.jpg", title: "Batte de baseball - édition limitée", post : "xxl" },
  { path: "sword.jpg", title : "Arme de l'ancien - ALEX BOUYAVE ILAN", post:"standard"}
]);

const teamsMembers = computed(() => {
  return OUR_TEAM.value.reduce((res, team) => {
    if(!res[team.post])
      res[team.post] = [];

    team.video = team.video
      ? (
        Array.isArray(team.video)
          ? team.video.map(v => `/videos/our-team/`+v)
          : `/videos/our-team/`+team.video
      ) : undefined;

    team.thumbnail = '/images/our-team/'+team.thumbnail;

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
  margin-bottom: 1em;
}

section {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: center;
  margin-bottom: 3em;
}
</style>
