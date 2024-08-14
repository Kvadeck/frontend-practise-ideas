<script setup>
import {usePlayerStore} from "@/stores/player";
import {computed} from "vue";

const playerStore = usePlayerStore()

const playing = computed(() => {
  return playerStore.playing
})

const duration = computed(() => {
  return playerStore.duration
})

const seek = computed(() => {
  return playerStore.seek
})

const playerProgress = computed(() => {
  return playerStore.playerProgress
})

const current_song = computed(() => {
  return playerStore.current_song
})

</script>

<template>
  <!-- Player -->
  <div class="fixed bottom-0 left-0 bg-white px-4 py-4 w-full">
    <!-- Track Info -->
    <div class="text-center" v-if="current_song.modified_name">
      <span class="song-title font-bold">{{ current_song.modified_name }}</span> by
      <span class="song-artist">{{ current_song.display_name }}</span>
    </div>
    <div class="flex flex-nowrap gap-4 items-center">
      <!-- Play/Pause Button -->
      <button type="button" @click.prevent="playerStore.toggleAudio()">

        <i :class="{'fa-play':!playing, 'fa-pause': playing }" class="fa  text-gray-500 text-xl"></i>

      </button>
      <!-- Current Position -->
      <div class="player-currenttime">{{ seek }}</div>
      <!-- Scrub Container  -->
      <div @click.prevent="playerStore.updateSeek" class="w-full h-2 rounded bg-gray-200 relative cursor-pointer">
        <!-- Player Ball -->
        <span
            class="absolute -top-2.5 -ml-2.5 text-gray-800 text-lg"
            :style="{left: playerProgress}"
        >
            <i class="fas fa-circle"></i>
          </span>
        <!-- Player Progress Bar-->
        <span
            class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400"
            :style="{width: playerProgress}"
        ></span>
      </div>
      <!-- Duration -->
      <div class="player-duration">{{ duration }}</div>
    </div>
  </div>
</template>

<style scoped>

</style>