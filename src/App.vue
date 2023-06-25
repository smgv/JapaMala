<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar'
import Home from '@/components/Home'
import { ref } from 'vue'

const audioRef = ref<HTMLAudioElement | null>(null)
const isMusicStop = ref(true)

const playMusic = () => {
  isMusicStop.value = !isMusicStop.value
  if (audioRef.value) {
    audioRef.value.paused ? audioRef.value?.play() : audioRef.value?.pause()
  }
}
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <NavBar :is-music-stop="isMusicStop" @on-stop="playMusic" />
  <main class="p-6">
    <Home />
    <p class="text-sm text-center mt-4">@copyright 2023 - Created by Ganesh Patra</p>
  </main>
  <audio ref="audioRef" src="../public//audioSource.mp3" loop autoplay></audio>
</template>

<style scoped></style>
