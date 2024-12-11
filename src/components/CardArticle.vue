<script setup>
import { ref } from 'vue';
const props = defineProps({initialSize: Number});

const counter = ref(props.initialSize);

const increment = () => {
    counter.value++;
}

</script>

<template>
    <div class="counter">
        {{ counter }}
        <button @click="increment" class="btn">Clique</button>
    </div>
</template>

<style scoped>
    .counter {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 400px;
        background: red;
    }

    .btn {
        width: 100px;
        height: 75px;
        background: blue;
    }
</style>