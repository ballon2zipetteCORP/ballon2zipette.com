<template>
  <telegram-modal />

  <main>
    <router-view />
  </main>
  <base-footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import BaseFooter from '@/components/layout/BaseFooter.vue'
import TelegramModal from '@/components/modals/ModalTelegram.vue'
</script>
