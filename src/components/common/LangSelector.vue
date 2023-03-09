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
        class="rounded-full p-2 w-10 aspect-square cursor-pointer backdrop-filter bg-black/5 backdrop-blur"
      >
        {{ store.lang }}
      </ListboxButton>
      <ListboxOptions
        class="text-xs backdrop-filter bg-black/5 backdrop-blur mt-2 rounded-full flex flex-col"
      >
        <ListboxOption
          v-for="item in langArray"
          :key="item.id"
          :value="item.lang"
          class="text-center leading-10 w-10 aspect-square rounded-full cursor-pointer hover:bg-neutral-500/15 trans"
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
