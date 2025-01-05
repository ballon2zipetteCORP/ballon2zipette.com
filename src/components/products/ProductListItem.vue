<template>
  <template v-if="type === 'DRINKS'">
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
      :composition="item.attributes.composition"
      @close="showComposition = false"
      :modal-shown="showComposition"
    />

    <product-list-item-qr-code
      :product-id="item.id"
      :modal-shown="showQrCode"
      @close="showQrCode = false"
    />
  </template>
  <template v-else-if="type === 'GOODIES'">
    <article>
      <img
        :src="currentVariante.image"
        :alt="item.name"
      />
      <h3>{{ item.name }}</h3>
      <h4>Couleur: {{ currentVariante.color.label }}</h4>

      <ul class="variantes">
        <li
          :class="{'active': currentVariante === variante}"
          @click="currentVariante = variante"
          :style="{'background-color': variante.color.hexadecimal}"
          v-for="variante in item.attributes.variantes"
          :key="variante"
        />
      </ul>

      <ul class="sizes">
        <li
          :class="{'active': currentSize === size}"
          @click="currentSize = size"
          v-for="size in currentVariante.sizes"
          :key="size"
        >
          {{ size }}
        </li>
      </ul>

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
  </template>
</template>

<script setup>
import ProductListItemComposition from '@/components/products/ProductListItemComposition.vue'
import { ref } from 'vue'
import ProductListItemQrCode from '@/components/products/ProductListItemQrCode.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  type: {
    type: String, // DRINKS, GOODIES
    required: true
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

// only for goodies
const currentVariante = ref(props.item.attributes.variantes?.[0]);
const currentSize = ref(null);
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

  & > h4.popular {
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

  &>ul.variantes,
  &>ul.sizes {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;

    list-style: none;
    margin-top: .5em;

    &>li {
      cursor: pointer;
      transition: all .5s ease;

      &.active {
        color: var(--orange);
      }
    }
  }

  &>ul.variantes li {
    border-radius: 100px;
    width: 2em;
    height: 2em;
    &.active {
      opacity: .5;
    }
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
