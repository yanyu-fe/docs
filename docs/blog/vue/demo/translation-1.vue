<template>
  <div>
    <button @click="onClick">动画</button>
    <Transition name="my">
      <div v-if="show">Hello</div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const show = ref(false);
const onClick = () => {
  // TODO
  show.value = !show.value;
};
</script>

<style>
.my-enter-active,
.my-leave-active {
  transition: opacity 0.5s ease;
}

.my-enter-from,
.my-leave-to {
  opacity: 0;
}
</style>
