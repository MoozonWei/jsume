<script setup lang="ts">
const store = useStore()
const order = store.order

const resumeIsLoading = computed(
  () => store.gistIsLoading || store.localIsLoading,

)
</script>

<template>
  <Loading v-if="resumeIsLoading" />
  <div
    v-else
    class="container"
  >
    <Basics />
    <div class="right-page">
      <SectionComponentIs
        v-for="comp in order"
        :key="comp"
        :name="comp"
      />
    </div>
    <LangSelector class="fixed right-5 top-5 text-neutral-600" />
  </div>
</template>

<style scoped>
.container {
  @apply mx-auto p-4 lg:px-16 xl:px-48 grid grid-cols-[15fr_50fr] lt-sm:block;
}

.right-page {
  @apply py-8 sm:px-6 md:px-8 max-w-screen-md;
}
</style>
