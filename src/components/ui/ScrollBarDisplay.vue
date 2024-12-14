<template>
  <div role="banner">
    <div class="content">
      <h4 v-for="j in Array(3).fill(null)" :key="j + 1">
        {{ message }}
      </h4>
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
@keyframes scrolling-text {
  to {
    transform: translateX(-100%);
  }
}

div[role='banner'] {
  background-color: var(--orange);

  padding: 0.5em 0;
  font-size: 30px;
  overflow: hidden;

  & > div.content {
    display: flex;
    gap: 0.5em;
    align-items: center;
    overflow: hidden;

    & > * {
      white-space: nowrap;

      display: flex;
      gap: 0.5em;
      flex-shrink: 0;
      align-items: center;

      transform: translateX(0);
      animation: scrolling-text 4s linear infinite;
    }
  }
}
</style>
