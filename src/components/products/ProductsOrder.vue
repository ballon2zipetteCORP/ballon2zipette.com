<template>
  <modal-default @close="emit('close')" :modal-shown="showModal">
    <div class="content">
      <h2>Votre commande</h2>
      <ul>
        <li v-for="item of items" :key="item.name">
          <div>
            <img :src="item.image" :alt="item.name" />
            <h4>{{ item.name }}</h4>
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

      <!-- TODO: being more RGPD compliant -->

      <button @click="handle" :disabled="isDisabled">
        {{ buttonLabel }}
      </button>
    </div>
  </modal-default>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

import ModalDefault from '@/components/ui/ModalDefault.vue'
import useAPIRequest from '@/composables/useAPIRequest.js'

const emit = defineEmits(["close"]);
const props = defineProps({
  showModal: {
    type: Boolean,
    required: true
  },
  items: {
    type: Object,
    required: true
  }
});

const givenName = ref("");
const familyName = ref("");
const commentText = ref("");

const {isLoading, response, handle} = useAPIRequest({
  endpoint: "/order",
  method: "POST",
  body: {
    customer: {
      givenName: givenName.value,
      familyName: familyName.value,
    },
    order: props.items?.map(({id, quantity}) => ({productId: id, quantity})),
    message: commentText.value
  }
})

const isDisabled = computed(() =>
  !givenName.value.trim() || !familyName.value.trim() || isLoading.value
);

const buttonLabel = computed(() =>
  isLoading.value ? "Envoi en cours..." : "Je commande"
);

watch(response, () => {
  emit('close');
});
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
