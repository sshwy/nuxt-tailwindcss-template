<script setup lang="ts">
const mode = useDarkMode()

const switchMode = () => {
  if (mode.value === 'auto') mode.value = 'dark'
  else if (mode.value === 'dark') mode.value = 'light'
  else if (mode.value === 'light') mode.value = 'auto'
  else mode.value = 'auto'
  console.log(mode.value)
}
</script>
<template>
  <UContainer class="prose my-4 dark:prose-invert">
    <h1>Settings</h1>

    <div class="my-5 flex gap-x-2 items-center">
      <UButton @click="switchMode">Switch Color Mode</UButton>
      <span>{{ mode }}</span>
    </div>
  </UContainer>
</template>