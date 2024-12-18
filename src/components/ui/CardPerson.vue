<template>
  <article ref="articleRef">
    <span @mouseenter="showBoycottReason = true" @mouseleave="showBoycottReason = false" class="boycotted" v-if="boycottRate > 0">
        <span class="boycott-reason" v-if="showBoycottReason">
          {{ boycottReason }}
        </span>

      {{ "Boycotté 🙅‍" }}
    </span>
    <img
      :style="{filter: `blur(${boycottRate}px)`}"
      :alt="avatar"
      :src="'/images/our-team/'+avatar"
    />
    <video
      v-if="video"
      :style="{filter: `blur(${boycottRate}px)`}"
      :src="`/videos/our-team/${video}`"
      loop
      muted
    />

    <h5>{{ post }}</h5>
  </article>
</template>

<script setup>
import { ref, watch } from 'vue'

defineProps({
  post: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  video: {
    type: String,
    required: false
  },
  boycottReason: {
    type: String,
    required: false,
    default: "Aucune en vrai"
  },
  boycottRate: {
    type: Number,
    required: false,
    default: 0
  }
});

const articleRef = ref();
const showBoycottReason = ref(false);

watch(articleRef, (article) => {
  const video = article.querySelector('video');
  if(!video)
    return;
  article.onclick = () => {
    video.muted = !video.muted;
  }
  article.onmouseenter = () => {
    video.play();
  }
  article.onmouseleave = () => {
    video.pause();
    video.currentTime = 0;
  }
})
</script>

<style scoped>
article {
  position: relative;

  &:has(video):hover img {
    opacity: 0;
  }
  &:has(video):hover video {
    opacity: 1;
  }

  &>img {
    width: 15em;
    border-radius: 10px;
    transition: all .5s ease;
  }

  &>video {
    opacity: 0;
    width: 15em;
    border-radius: 10px;

    position: absolute;
    transition: all .5s ease;
    top: 0;
    left: 0;
  }

  &>span.boycotted>span.boycott-reason {
    position: absolute;
    top: -2.5em;
    left: 50%;

    background-color: rgba(0, 0, 0, .8);
    border-radius: 10px;
    padding: .5em .8em;
    width: 10em;

    transform: translate(-50%, -50%);
    z-index: 2;
  }

  &>span.boycotted {
    position: absolute;
    top: 50%;
    left: 50%;

    text-align: center;

    z-index: 2;
    background-color: var(--red);
    padding: .2em .8em;
    border-radius: 100px;

    transform: translate(-50%, -50%);
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
