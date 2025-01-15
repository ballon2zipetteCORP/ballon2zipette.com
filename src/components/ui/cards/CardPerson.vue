<template>
  <article ref="articleRef">
    <span class="boycotted" v-if="boycottRate > 0">
      <span class="boycott-reason">
        {{ boycottReason }}
      </span>

      {{ 'Boycotté 🙅‍' }}
    </span>
    <img loading="lazy" :style="{ filter: `blur(${boycottRate}px)` }" :alt="avatar" :src="avatar" />
    <span v-if="video" class="icon" :class="isVideoMuted ? 'muted' : 'volume'"></span>
    <video
      class="video"
      v-if="video"
      :style="{ filter: `blur(${boycottRate}px)` }"
      :src="Array.isArray(video) ? video[0] : video"
      loop
      muted
    />

    <h5>{{ post }}</h5>
  </article>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  post: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  video: {
    type: [Array, String],
    required: false,
  },
  boycottReason: {
    type: [String, undefined],
    required: false,
    default: 'Aucune en vrai',
  },
  boycottRate: {
    type: [Number, undefined],
    required: false,
    default: 0,
  },
})

const articleRef = ref()

const isVideoMuted = ref(true)

watch(articleRef, (article) => {
  const video = article.querySelector('video')
  if (!video) return
  article.onclick = () => {
    video.muted = !video.muted
    isVideoMuted.value = !isVideoMuted.value
  }
  article.onmouseenter = () => {
    if (Array.isArray(props.video)) {
      video.src = props.video[Math.floor(Math.random() * props.video.length) % props.video.length]
    }

    video.play()
  }
  article.onmouseleave = () => {
    video.pause()
    video.currentTime = 0
  }
})
</script>

<style scoped>
.icon {
  opacity: 0;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 100;
  width: 42px;
  height: 42px;
  padding: 0.2em;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    font-size: 2.5em;
  }
  &.muted::before {
    content: '\F075F';
  }

  &.volume::before {
    content: '\F057E';
  }
}

article {
  position: relative;

  &:has(video):hover img {
    opacity: 0;
  }
  &:has(video):hover video,
  &:has(video):hover span {
    opacity: 1;
  }

  & > img {
    width: 15em;
    border-radius: 10px;
    transition: all 0.5s ease;

  }

  & > video {
    opacity: 0;
    width: 15em;
    border-radius: 10px;
    position: absolute;
    transition: all 0.5s ease;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  & > span.boycotted > span.boycott-reason {
    position: absolute;
    top: -2.5em;
    left: 50%;

    display: none;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    padding: 0.5em 0.8em;
    width: 10em;

    transform: translate(-50%, -50%);
    z-index: 2;
  }

  & > span.boycotted {
    &:hover > span.boycott-reason {
      display: block;
    }

    position: absolute;
    top: 50%;
    left: 50%;

    text-align: center;

    z-index: 2;
    background-color: var(--red);
    padding: 0.2em 0.8em;
    border-radius: 100px;

    transform: translate(-50%, -50%);
  }

  & > h4 {
    margin-top: 0.5em;
    text-align: center;
  }

  & > h5 {
    position: absolute;
    top: -20px;
    left: 50%;

    transform: translateX(-50%);

    background-color: var(--orange);
    color: var(--black);
    width: fit-content;
    margin: auto;
    margin-top: 0.5em;
    padding: 0.5em 0.8em;

    border-radius: 100px;
    font-family: 'poppins-bold', sans-serif;
  }
}
</style>
