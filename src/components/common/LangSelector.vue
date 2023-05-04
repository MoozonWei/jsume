<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

const store = useStore()
const { locale } = useI18n()

const langArray = [
  { id: 1, name: 'en', lang: 'en' },
  { id: 2, name: '中文', lang: 'zh' },
].filter(item => _.includes(store.jsonLangs, item.lang))

watchEffect(() => {
  locale.value = store.lang
})
</script>

<template>
  <div v-if="store.jsonLangs.length > 1">
    <Listbox v-model="store.lang">
      <ListboxButton
        class="aspect-square w-10 cursor-pointer rounded-full bg-black/5 p-2 backdrop-blur backdrop-filter"
      >
        {{ store.lang }}
      </ListboxButton>
      <ListboxOptions
        class="mt-2 flex flex-col rounded-full bg-black/5 text-xs backdrop-blur backdrop-filter"
      >
        <ListboxOption
          v-for="item in langArray"
          :key="item.id"
          :value="item.lang"
          class="trans aspect-square w-10 cursor-pointer rounded-full text-center leading-10 hover:bg-neutral-500/15"
        >
          {{ item.name }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>

<style scoped>
button {
  font-family: Raleway, "Helvetica Neue", Helvetica, Arial, 'Noto Sans SC', sans-serif;
  @apply text-neutral-600;
}
</style>
