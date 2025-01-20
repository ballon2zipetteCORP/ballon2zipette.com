<template>
  <article>
    <img loading="lazy" :alt="title" :src="path" />
    <h5>{{ post }}</h5>
    <h6>{{ title }}</h6>
  </article>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
section{
  display: flex;
  justify-content: center;
}
article {
  position: relative;
  margin: 30px;
  &>img {
    width: 15em;
    border-radius: 20px;

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

  &>h6{
    position: absolute;
    left: 50%;

    transform: translateX(-50%);
    text-align: center;
    background-color: var(--blue);
    color: var(--black);
    width: 100%;
    margin: auto;
    margin-top: .5em;
    padding: .5em .8em;

    border-radius: 100px;
    font-family: "poppins-bold", sans-serif;
  }
}
</style>
