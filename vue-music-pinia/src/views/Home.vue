<script setup>
import {songsCollection} from "@/includes/firebase";
import {ref, onBeforeUnmount} from "vue";
import SongItem from "@/components/SongItem.vue";

const songs = ref([])
const maxPerPage = ref(10)
const pendingRequest = ref(false)

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  const {scrollTop, offsetHeight} = document.documentElement;
  const {innerHeight} = window;
  const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

  if (bottomOfWindow) {
    getSongs()
  }
}

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

async function getSongs() {

  if (pendingRequest.value) {
    return;
  }

  pendingRequest.value = true

  let snapshots;

  if (songs.value.length) {
    const lastDoc = await songsCollection
        .doc(songs.value[songs.value.length - 1].docID)
        .get()

    snapshots = await songsCollection
        .orderBy('modified_name')
        .startAfter(lastDoc)
        .limit(maxPerPage.value)
        .get();
  } else {
    snapshots = await songsCollection
        .orderBy('modified_name')
        .limit(maxPerPage.value)
        .get();
  }


  snapshots.forEach(document => {
    songs.value.push({
      docID: document.id,
      ...document.data()
    })
  })

  pendingRequest.value = false;

}

getSongs()

</script>

<template>
  <!-- Introduction -->
  <section class="mb-8 py-20 text-white text-center relative">
    <div
        class="absolute inset-0 w-full h-full bg-contain introduction-bg"
        style="background-image: url(../assets/img/header_new.png)"
    ></div>
    <div class="container mx-auto">
      <div class="text-white main-header-content">
        <h1 class="font-bold text-5xl mb-5 bg-black bg-opacity-60 inline-block p-3">Feel the Beat, Live the Music!</h1>
        <p class="w-full md:w-8/12 mx-auto text-xl">
          "Feel the Beat" encapsulates the essence of our music service, where every note and rhythm connects you to the
          heart of the music.
        </p>
      </div>
    </div>
    <img
        class="relative block mx-auto w-auto max-w-full"
        src="/assets/img/introduction-music.png"
    />
  </section>

  <!-- Main Content -->
  <section class="container mx-auto">
    <div
        class="bg-white rounded border border-gray-200 relative flex flex-col"
    >
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <span class="card-title">Songs</span>
        <!-- Icon -->
        <i
            class="fa fa-headphones-alt float-right text-green-400 text-xl"
        ></i>
      </div>
      <!-- Playlist -->
      <ol id="playlist">
        <song-item v-for="song in songs" :key="song.docID" :song="song"/>
      </ol>
      <!-- .. end Playlist -->
    </div>
  </section>
</template>

<style scoped>

</style>