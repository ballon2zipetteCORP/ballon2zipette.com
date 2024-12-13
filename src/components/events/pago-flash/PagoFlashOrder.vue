<template>
  <modal-default @close="emit('close')" :modal-shown="showModal">
    <div class="content">
      <h2>Votre commande</h2>
      <ul>
        <li v-for="item of data" :key="item.title">
          <div>
            <img :src="'images/pago-flash/thumbnails/'+item.thumbnail+'.png'" :alt="item.title" />
            <h4>{{ item.title }}</h4>
          </div>
          <h5>Quantité: {{ item.quantity }}</h5>
        </li>
      </ul>

      <div class="form-field">
        <label class="required" for="given-name">Prénom</label>
        <input type="text" id="given-name" v-model="givenName">
      </div>
      <div class="form-field">
        <label class="required" for="family-name">Nom</label>
        <input type="text" id="family-name" v-model="familyName">
      </div>
      <div class="form-field">
        <label class="required" for="command-text">Commentaire</label>
        <textarea id="command-text" v-model="commentText"></textarea>
      </div>

      <button @click="sendCommand" :disabled="isDisabled">
        {{ buttonLabel }}
      </button>
    </div>
  </modal-default>
</template>

<script setup>
import { computed, ref } from 'vue'

import ModalDefault from '@/components/ui/ModalDefault.vue'
import emailjs from '@emailjs/browser';

const emit = defineEmits(["close"]);

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true
  },
  data: { // refers to the customer's order
    type: Object,
    required: true
  }
});

const givenName = ref("");
const familyName = ref("");
const commentText = ref("");
const isSending = ref(false);

const isDisabled = computed(() => {
  return !givenName.value.trim() || !familyName.value.trim() || isSending.value;
}
);

const buttonLabel = computed(() => {
  return isSending.value ? "Envoi en cours..." : "Je commande";
});

const commandText = computed(() => props.data.map(item => item.title + " x" + item.quantity).join("\n"));

emailjs.init("VRcmXpRSmU6Ge9i1M");

const sendCommand = () => {
    const serviceID = 'service_rro8bfb';
    const templateID = 'template_8zsu4e8';

    const templateParams = {
      name: givenName.value,
      familyName: familyName.value,
      commentText: commentText.value,
      command: commandText.value
    }

    isSending.value = true;
    emailjs.send(serviceID, templateID, templateParams)
    .then(() => {
        alert('Commande envoyé !');
        givenName.value = "";
        familyName.value = "";
        commentText.value = "";
        emit("close", { done: true });
    }).catch((err) => {
        alert(JSON.stringify(err));
    })
    .finally(() => {
      isSending.value = false;
    });
}

</script>

<style scoped>
h2 {
  margin-top: .8em;
}

ul {
  list-style: none;
  margin: 1.5em 0;

  display: flex;
  flex-direction: column;
  gap: 1em;

  border-bottom: 1px solid var(--gray-2);
  padding-bottom: 1em;

  &>li {
    background-color: var(--black-2);
    border-radius: 10px;
    padding: 1em 2em;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &>div {
      display: flex;
      align-items: center;
      gap: 1em;

      &>img {
        width: 3em;
      }
      &>h4 {
        width: 10em;
      }
    }

    &>h5 {
      color: var(--gray-2);
    }
  }
}

div.form-field {
  margin: .5em 0;
  &>textarea {
    background-color: var(--black-2);
    border: 1px solid var(--gray-1);
    color: white;
    padding: .7em 1em;
    border-radius: 10px;
    font-family: "poppins-regular", sans-serif;
    width: 100%;
    resize: none;
    height: 6rem; 
  }
}

button {
  width: 100%;
  margin-top: 1em;
  background-color: var(--orange);
  margin-bottom: .5em;
}
</style>
