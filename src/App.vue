<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const setCount = (value: number) => {
  count.value = value;
};
</script>

<template>
  <div>
    <h2>This is Vue</h2>
    <button @click="() => setCount(count + 1)">count is {{ count }}</button>
  </div>
</template>
