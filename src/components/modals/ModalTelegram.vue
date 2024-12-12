<template>
  <modal-default @close="setAsJoined" :modal-shown="showTelegramModal">
    <div class="content">
      <h2>Rejoins le télégram maintenant</h2>
      <h4>Si tu ne rejoins pas samos viendra dans tes rêves.</h4>

      <img src="/images/telegram-link.jpeg" alt="telegram link" />
      <a target="_blank" href="https://t.me/+ZSKuml6mYhNmZTU0">Ou via le lien</a>

      <footer>
        <button @click="setAsJoined" class="primary">J'ai rejoint là</button>
        <button @click="setAsJoined">Je suis déjà dessus</button>
      </footer>
    </div>
  </modal-default>
</template>

<script setup>
import ModalDefault from '@/components/ui/ModalDefault.vue'
import { ref } from 'vue'

const showTelegramModal = ref(localStorage.getItem("telegram_joined") !== "true");

function setAsJoined() {
  localStorage.setItem("telegram_joined", "true");
  showTelegramModal.value = false;
}
</script>

<style scoped>
div.content {
  display: flex;
  flex-direction: column;
  gap: .1em;
  justify-content: center;
  text-align: center;
  padding-top: 2em;
  padding-bottom: 1em;
}

img {
  margin: 1em auto;
  display: block;
  width: 20em;
  border-radius: 10px;
}
a {
  color: var(--gray-2);
  text-decoration: none;
  border-bottom: 2px solid var(--gray-2);
  padding: .1em;
  width: fit-content;
  margin: auto;
}

footer {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: .5em;

  &>button {
    border: 1px solid var(--gray-1);
    background-color: var(--black);
    color: var(--gray-2);
    cursor: pointer;

    transition: all .5s ease;

    &.primary {
      background-color: white;
      color: var(--black);
    }

    &:hover:not(.primary) {
      background-color: var(--gray-1);
      color: white;
    }

    font-family: "poppins-regular", sans-serif;
    padding: .5em .8em;
    font-size: 1.1em;
    border-radius: 10px;
  }
}
</style>
