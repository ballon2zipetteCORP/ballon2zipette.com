<template>
  <article ref="articleRef">

    <img
      :alt="avatar"
      :src="'/images/calibres/gun.jpeg'"
    />

    <h5>{{ post }}</h5>
  </article>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  post: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  }
});

const articleRef = ref();
</script>

<style scoped>
article {
  position: relative;


  &>img {
    width: 15em;
    border-radius: 10px;
    transition: all .5s ease;
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
