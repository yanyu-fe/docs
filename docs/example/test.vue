<template>
  <div>
    {{counter}}
    <button @click="add">增加</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const counter = ref(0);
const add = () => {
  counter.value ++ ;
}
</script>

