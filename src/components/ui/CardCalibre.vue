<template>
  <article>
    <img :alt="title" :src="path" />
    <h5>{{ title }}</h5>
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

  &>img {
    width: 15em;
    border-radius: 20px;

  }
}
</style>
