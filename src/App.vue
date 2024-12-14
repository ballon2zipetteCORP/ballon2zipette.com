<template>
  <modal-telegram />
  <modal-advertisement />

  <base-header />
  <base-container />
  <base-footer />
</template>

<script setup>
import BaseFooter from '@/components/layout/BaseFooter.vue'

import ModalAdvertisement from '@/components/modals/ModalAdvertisement.vue'
import ModalTelegram from '@/components/modals/ModalTelegram.vue'
import BaseHeader from '@/components/layout/BaseHeader.vue'
import BaseContainer from '@/components/layout/BaseContainer.vue'
</script>
