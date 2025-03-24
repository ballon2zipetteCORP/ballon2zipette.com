<template>
  <label v-if="label" class="label">
    {{ label }}
  </label>
  <div ref="dropdownRef" class="dropdown">
    <button @click="dropdownToggled = !dropdownToggled">
      <span class="label">{{  selection?.label ?? selectionLabel ?? items[0].label ?? "Selectionner" }}</span>
      <span class="icon dropdown" />
    </button>
    <ul v-show="dropdownToggled">
      <li
        @click="() => select(item)"
        v-for="item in items"
        :key="item"
        :class="{
          'icon': true,
          'disabled': item.disabled,
          'selected': selection.label === item.label
        }"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { triggerWhenParentFound } from '@/helpers/global.utils.js'

const props = defineProps({
  label: {
    type: String,
    required: false
  },
  selectionLabel: {
    type: String,
    required: false
  },
  items: {
    type: Array,
    required: true
  },
  selectionItem : {
    type: String,
    required: false
  }
});
console.log(props.items)
const selection = defineModel();

if (props.selectionItem) {
  selection.value = props.items.find(item => item.value === props.selectionItem);
}

const dropdownRef = ref(null);
const dropdownToggled = ref(false);

onMounted(() => {
  window.onclick = ({target}) => {
    triggerWhenParentFound(target, dropdownRef.value, isFound => {
      if(!isFound) {
        dropdownToggled.value = false;
      }
    })
  }
});

function select(item) {
  if(item.disabled) {
    return;
  }
  selection.value = item;
  dropdownToggled.value = false;
}
</script>

<style scoped>
label {
  display: block;
  margin-bottom: .5em;
  color: var(--gray-2);
}
div.dropdown {
  position: relative;

  &>button {
    min-width: 20em;

    padding: 0.5em 0.8em;
    background-color: var(--black);
    color: white;

    border: 1px solid var(--gray-1);
    border-radius: 10px;
    cursor: pointer;
    font-size: 1em;
    transition: all 0.5s ease;

    &:hover {
      background-color: var(--black-2);
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .2em;

    &>span {
      display: block;
    }
    &>span.icon.dropdown {
      font-size: 1.5em;
      &::before {
        content: "\F035D";
      }
      &.opened::before {
        content: "\F0360";
      }
    }
  }

  &>ul {
    position: absolute;
    top: 4em;

    background-color: var(--black);
    color: white;

    max-height: 15em;
    overflow: auto;

    border: 1px solid var(--gray-1);
    border-radius: 10px;
    list-style: none;

    width: 100%;

    &>li {
      padding: 1em;
      transition: all .5s ease;
      cursor: pointer;

      position: relative;

      &.selected {
        &, &::before {
          color: var(--orange);
        }
        &::before {
          content: "\F0E1E";
          position: absolute;
          top: 50%;
          right: 15px;

          transform: translateY(-50%);
        }
      }

      &.disabled {
        opacity: .5;
        cursor: not-allowed;
      }
      &:not(.disabled):hover {
        background-color: var(--black-2);
      }

      &:first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      &:last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      &:not(:last-child) {
        border-bottom: 1px solid var(--gray-1);
      }
    }

  }
}
</style>
