<script setup lang="ts">
const emits = defineEmits(['onStop'])

withDefaults(
  defineProps<{
    isMusicStop: boolean
  }>(),
  { isMusicStop: false }
)
</script>

<template>
  <nav class="flex items-center justify-between px-6 py-3 bg-orange-300 text-gray-950">
    <h1 class="text-2xl">JapaMala</h1>
    <ul class="flex items-center gap-5">
      <!-- <li class="text-base font-semibold">Home</li> -->
      <!-- <li class="text-base font-semibold">Mantras</li>
      <li class="text-base font-semibold">History</li> -->
      <li class="text-base font-semibold">
        <button @click="emits('onStop')">{{ isMusicStop ? 'Play Mantra' : 'Stop Mantra' }}</button>
      </li>
    </ul>
  </nav>
</template>
