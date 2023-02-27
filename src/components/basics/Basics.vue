<!-- eslint-disable unused-imports/no-unused-imports -->
<script setup lang="ts">
const basics = getSectionComputedData('basics')
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
    </div>
    <div class="basics-contact-container">
      <a
        v-if="basics.email"
        :href="`mailto:${basics.email}`"
        class="basics-contact-icon-text"
      >
        <i-mdi:email />
        <span>
          {{ basics.email }}
        </span>
      </a>
      <a
        v-if="basics.phone"
        :href="`tel:${basics.phone}`"
        class="basics-contact-icon-text"
      >
        <i-material-symbols:phone-enabled />
        <span>
          {{ basics.phone }}
        </span>
      </a>
      <a
        v-if="basics.url"
        :href="basics.url"
        class="basics-contact-icon-text"
      >
        <i-mdi:account-circle />
        <span>
          {{ basics.url }}
        </span>
      </a>
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
        v-for="item in basics.profiles"
        :key="item.network"
        :username="item.username"
        :network="item.network"
        :url="item.url"
      />
    </div>
  </div>
</template>

<style src="@/styles/basics.css" />
