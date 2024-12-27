<template>
  <modal-default @close="$emit('close')" :modal-shown="modalShown">
    <h2>Composition du flash</h2>

    <ul>
      <li v-for="line in composition" :key="line">{{line}}</li>
    </ul>
  </modal-default>
</template>

<script setup>
import ModalDefault from '@/components/ui/ModalDefault.vue'

defineProps({
  composition: {
    type: Array,
    required: true,
  },
  modalShown: {
    type: Boolean,
    required: true
  }
});
</script>

<style scoped>
h2 {
  font-family: "poppins-bold", sans-serif;
}
ul {
  list-style: "- ";
  padding-left: 1em;
  &>li {
    margin: .5em 0;
  }
}
</style>
