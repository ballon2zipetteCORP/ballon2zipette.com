<template>
  {{ data }}
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute();

const dataParam = ref(route?.query?.data);
const data = computed(() => {
  if(!dataParam.value) {
    return null;
  }
  try {
    return atob(dataParam.value);
  } catch(e) {
    console.error(e);
    return null;
  }
});

</script>
