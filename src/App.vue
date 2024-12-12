<template>
  <modal-telegram />
  <modal-advertisement />

  <main>
    <router-view />
  </main>
  <base-footer />
</template>

<script setup>
import { RouterView } from 'vue-router'

import BaseFooter from '@/components/layout/BaseFooter.vue'

import ModalAdvertisement from '@/components/modals/ModalAdvertisement.vue'
import ModalTelegram from '@/components/modals/ModalTelegram.vue'
</script>
