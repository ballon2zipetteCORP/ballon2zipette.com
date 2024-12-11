<template>
  <telegram-modal @close="showTelegramModal = false" :show-modal="showTelegramModal" />

  <main>
    <router-view />
  </main>
  <base-footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import BaseFooter from '@/components/layout/BaseFooter.vue'
import TelegramModal from '@/components/modals/ModalTelegram.vue'
import { ref } from 'vue'

const showTelegramModal = ref(localStorage.getItem("telegram_joined") !== "true");
</script>
