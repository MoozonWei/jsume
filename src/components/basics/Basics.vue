<!-- eslint-disable unused-imports/no-unused-imports -->
<script setup lang="ts">
const store = useStore()
const basics = store.basics
const profiles = [...basics.profiles]
</script>

<template>
  <div class="basics-container">
    <div class="basics-title">
      <div class="basics-name">
        {{ basics.name }}
      </div>
      <div
        v-if="basics.label"
        class="basics-label"
      >
        {{ basics.label }}
      </div>
      <div v-if="basics.image">
        {{ basics.image }}
      </div>
    </div>
    <div class="basics-contact-container">
      <div
        v-if="basics.email"
        class="basics-contact-icon-text"
      >
        <i-mdi:email />
        <span>
          {{ basics.email }}
        </span>
      </div>
      <div
        v-if="basics.phone"
        class="basics-contact-icon-text"
      >
        <i-material-symbols:phone-enabled />
        <span>
          {{ basics.phone }}
        </span>
      </div>
      <div
        v-if="basics.url"
        class="basics-contact-icon-text"
      >
        <i-mdi:web />
        <span>
          {{ basics.url }}
        </span>
      </div>
      <div
        v-if="basics.location"
        class="basics-contact-icon-text"
      >
        <i-material-symbols:location-on />
        <span>
          {{ basics.location.city }}, {{ basics.location.countryCode }}
        </span>
      </div>
    </div>
    <div
      v-if="basics.profiles"
      class="basics-profiles-container"
    >
      <ProfileIcons
        v-for="item in profiles"
        :key="item.network"
        :username="item.username"
        :network="item.network"
        :url="item.url"
      />
    </div>
  </div>
</template>

<style src="@/styles/basics.css" />
