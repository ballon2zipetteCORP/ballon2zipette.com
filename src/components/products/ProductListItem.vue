<template>
  <article>
    <button @click="showQrCode = true" class="icon qr-code" />
    <img
      :src="item.image"
      :alt="item.name"
    />
    <h3>{{ item.name }}</h3>

    <span @click="showComposition = true" class="composition">
      Voir la composition
    </span>

    <footer>
      <div class="quantity-selector">
        <button
          @click="$emit('removeQuantity', item.name)"
          :disabled="item.quantity < 1"
        >
          -
        </button>
        <span>{{ item.quantity }}</span>
        <button
          @click="$emit('addQuantity', item.name)"
          :disabled="totalQuantity >= item.maxQuantity || item.maxQuantity < 1 || totalQuantity >= maxTotalQuantity"
        >
          +
        </button>
      </div>
    </footer>
  </article>

  <product-list-item-composition
    :composition="item.composition"
    @close="showComposition = false"
    :modal-shown="showComposition"
  />

  <product-list-item-qr-code
    :product-id="item.id"
    :modal-shown="showQrCode"
    @close="showQrCode = false"
  />
</template>

<script setup>
import ProductListItemComposition from '@/components/products/ProductListItemComposition.vue'
import { ref } from 'vue'
import ProductListItemQrCode from '@/components/products/ProductListItemQrCode.vue'

defineProps({
  item: {
    type: Object,
    required: true,
    validator: prop => {
      return prop.name !== undefined &&
        prop.image !== undefined;
    }
  },
  maxTotalQuantity: {
    type: Number,
    required: true
  },
  totalQuantity: {
    type: Number,
    required: true
  }
});

defineEmits(["addQuantity", "removeQuantity"]);

const showComposition = ref(false);
const showQrCode = ref(false);
</script>


<style scoped>
article {
  background-color: var(--black-2);
  flex-basis: 10em;

  border-radius: 15px;
  text-align: center;
  position: relative;
  padding: 1em 2em 4em;

  &>button.icon.qr-code {
    position: absolute;
    top: 10px;
    right: 10px;

    background-color: var(--black);
    border: 1px solid var(--gray-1);
    padding: .5em .6em;

    &::before {
      font-size: 1.7em;
      content: "\F0432";
      color: white;
    }
  }

  & > h4 {
    position: absolute;
    top: -23px;
    left: 50%;

    transform: translateX(-50%);

    background-color: var(--orange);
    color: var(--black);

    padding: 0.5em 0.8em;
    border-radius: 100px;
  }

  &>span.composition {
    color: var(--orange);
    text-decoration: underline;
    cursor: pointer;
  }

  & > img {
    width: 15em;
    height: 15em;
    margin-bottom: 0.5em;
  }

  & > h3 {
    font-family: 'poppins-bold', sans-serif;
  }

  & > footer {
    margin-top: 0.5em;
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;

    & > div.quantity-selector {
      display: flex;
      align-items: center;
      gap: 1em;
      justify-content: center;
      user-select: none;

      & > button {
        padding: 0.5em 0.8em;
        background-color: var(--black);
        color: white;

        border: 1px solid var(--gray-1);
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
        transition: all 0.5s ease;

        &:disabled {
          opacity: 0.5;
          cursor: unset;
        }

        &:not(:disabled):hover {
          background-color: var(--black-2);
        }
      }
    }
  }
}
</style>
