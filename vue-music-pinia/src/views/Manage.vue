<script setup>

import Upload from "@/components/Upload.vue";
import {onBeforeRouteLeave} from 'vue-router'
import {ref} from "vue";
import {songsCollection, auth} from "@/includes/firebase";
import CompositionItem from "@/components/CompositionItem.vue";

const childUpload = ref(null);
const songs = ref([])
const unsavedFlag = ref(false)

onBeforeRouteLeave((to, from, next) => {
  if (!unsavedFlag.value) {
    next()
  } else {
    const leave = confirm('You have unsaved changes! Are you sure you want to leave?');
    next(leave)
  }

})

onBeforeRouteLeave((to, from, next) => {
  callUploadFunction()
  next()
})

async function getSongs() {
  const snapshot = await songsCollection.where('uid', '==', auth.currentUser.uid).get()
  snapshot.forEach(addSong)
}

getSongs()

const callUploadFunction = () => {
  if (childUpload.value) {
    childUpload.value.cancelUpload();
  }
};

function updateSong(i, values) {
  songs.value[i].modified_name = values.modified_name
  songs.value[i].genre = values.genre
}

function removeSong(i) {
  songs.value.splice(i, 1)
}

function addSong(document) {
  const song = {
    ...document.data(),
    docID: document.id
  }

  songs.value.push(song)
}

function updateUnsaveFlag(value) {
  unsavedFlag.value = value
}

</script>

<template>
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <upload ref="childUpload" :addSong="addSong"/>
      </div>
      <div class="col-span-2">
        <div
            class="bg-white rounded border border-gray-200 relative flex flex-col"
        >
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i
                class="fa fa-compact-disc float-right text-green-400 text-2xl"
            ></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
            <composition-item :updateUnsaveFlag="updateUnsaveFlag" :removeSong="removeSong" v-for="(song, i) in songs"
                              :key="song.docID" :song="song"
                              :index="i" :updateSong="updateSong"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>