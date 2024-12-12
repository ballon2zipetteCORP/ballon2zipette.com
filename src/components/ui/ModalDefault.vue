<template>
  <div ref="modalRef" v-show="modalShown" class="modal" role="dialog">
    <div class="middle">
      <button @click="closeModal" class="close">
        &times;
      </button>
      <slot :close-modal="closeModal" />
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {triggerWhenParentFound} from "@/helpers/global.utils.js";

defineProps({
  modalShown: {
    type: Boolean,
    required: true
  }
});

const modalRef = ref(null);

const emit = defineEmits(["close"]);

function closeModal() {
  modalRef.value?.classList?.add("close");
  setTimeout(() => {
    modalRef.value?.classList?.remove("close");
    emit("close");
  }, 5e2/2);
}

window.addEventListener("click", ({target}) => {
  triggerWhenParentFound(target, modalRef.value, isFound => {
    if(isFound)
      closeModal()
  })
})
</script>

<style scoped>
@keyframes modal-opened {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modal-closed {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}


div.modal[role="dialog"] {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  z-index: 999;

  animation: modal-opened .5s forwards;

  &.close {
    animation: modal-closed .5s forwards;
  }
  background-color: rgba(0, 0, 0, .5);

  &>div.middle {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    background-color: var(--black);
    border-radius: 10px;
    min-width: 30em;
    padding: 1em 2em;

    max-height: 80%;
    overflow: auto;

    &>button.close {
      background-color: transparent;
      border: unset;

      color: white;
      cursor: pointer;

      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 2em;
    }
  }
}

/* RESPONSIVE */
@media screen and (max-width: 518px) {
  div.modal[role="dialog"]>div.middle {
      min-width: 19em;
  }
}
</style>
