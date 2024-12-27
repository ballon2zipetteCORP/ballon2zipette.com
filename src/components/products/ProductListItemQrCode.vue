<template>
  <modal-default @close="$emit('close')" :modal-shown="modalShown">
    <h2>Informations sur le flash</h2>

    <img
      alt="qrcode flash"
      :src="`https://api.ballon2zipette.com/products/qrcode/${productId}`"
    />
    <span>Scannez le qrcode pour obtenir des informations sur le flash.</span>
  </modal-default>
</template>

<script setup>
import ModalDefault from '@/components/ui/ModalDefault.vue'

defineProps({
  productId: {
    type: String,
    required: true
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
img {
  display: block;
  margin: 1em auto;
}
span {
  color: var(--gray-2);
  display: block;
  text-align: center;
}
</style>
