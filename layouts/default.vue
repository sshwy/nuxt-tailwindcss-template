<script setup lang="ts">
const links = [
  [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'Meshes',
    icon: 'i-heroicons-cube',
    to: '/mesh'
  }, {
    label: 'Tags',
    icon: 'i-heroicons-tag',
    to: '/tags'
  }, {
    label: 'Background Jobs',
    icon: 'i-heroicons-server-stack',
    to: '/jobs'
  }, {
    label: 'McMaster',
    icon: 'i-heroicons-puzzle-piece',
    to: '/ext/mcm/home'
  }], [{
    label: 'Settings',
    icon: 'i-heroicons-cog',
    to: '/settings'
  }, {
    label: 'About',
    icon: 'i-heroicons-information-circle',
    to: '/about'
  }]
]
</script>

<template>
  <div class="w-full">
    <div class="w-full flex border-b border-gray-200 dark:border-gray-700 px-2">
      <div class="py-3.5 px-2 font-semibold text-nowrap"><span class="text-primary">Proto</span>Toat</div>
      <UHorizontalNavigation :links="links" />
    </div>
    <NuxtPage />
    <UNotifications />
  </div>
</template>