<script setup lang="ts">
const store = useStore()
const order = store.order
</script>

<template>
  <div
    class="container"
  >
    <Basics />
    <div class="py-8">
      <SectionComponentIs
        v-for="comp in order"
        :key="comp"
        :name="comp"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  @apply mx-auto py-4 px-6 grid grid-cols-[15fr,50fr] <sm:block gap-5;
}
</style>
