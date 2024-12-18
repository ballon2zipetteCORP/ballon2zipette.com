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
article {
  position: relative;

  &>img {
    width: 15em;
  }
}
</style>
