<template>
  <article ref="articleRef">

    <img
      :style="{filter: `blur(${boycottRate}px)`}"
      :alt="avatar"
      :src="'/images/calibres/'+avatar"
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
  boycottRate: {
    type: Number,
    required: false,
    default: 0
  }
});

const articleRef = ref();

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

  &>span.boycotted {
    position: absolute;
    top: 50%;
    left: 50%;

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
