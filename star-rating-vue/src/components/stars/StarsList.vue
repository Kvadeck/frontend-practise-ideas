<!-- TODO: Complete the mouse leave event -->
<!-- TODO: Don't send request when change same stars -->

<script setup>
import StarsItem from "@/components/stars/StarsItem.vue";
import {defineProps, reactive, onMounted} from "vue";
import api from '../../api/index'
import PreLoader from "@/components/Preloader.vue";

const props = defineProps({
  color: {
    type: String,
    required: true
  }
})

onMounted(() => {
  loadStars()
})

let state = reactive({
      stars: null,
      isLoading: false,
      error: false
    }
)

async function loadStars() {
  state.isLoading = true
  try {
    const response = await api.loadStars()
    if (response.data) {
      state.stars = response.data
      state.initialStars = JSON.parse(JSON.stringify(response.data))
    } else {
      state.error = true
    }
  } catch (error) {
    state.error = error.message
  }
  state.isLoading = false
}

function returnStarHandler() {
  state.stars = JSON.parse(JSON.stringify(state.initialStars))
}

function changeHoverStarHandler(id) {
  // Reset all selected property's
  for (const index in state.stars) {
    state.stars[index]['selected'] = false
  }
  // Set selected by mouseenter id
  for (let i = 0; i <= id; i++) {
    state.stars[i]['selected'] = true
  }
}

function clickStarHandler() {
  api.saveStars(state.stars)
  loadStars()
}

</script>

<template>
  <div :class="props.color">
    <div class="stars-wrapper">

      <div v-if="state.isLoading">
        <pre-loader :color="props.color"></pre-loader>
      </div>

      <div class="error-is-shown-outer" v-else-if="state.error">
        <div class="error">No stars found!</div>
      </div>

      <div v-else class="stars-outer" @mouseleave="returnStarHandler">
        <stars-item
            v-for="star in state.stars"
            :key="star.id"
            :id="star.id"
            :selected="star.selected"
            @set-selected="changeHoverStarHandler"
            @click-star="clickStarHandler"
        ></stars-item>
      </div>

    </div>
  </div>
</template>

<style scoped>
.stars-wrapper {
  display: flex;
  justify-content: center;
  flex-flow: column;
  text-align: center;
  height: 67px;
  margin-top: 10px;
}

.stars-outer {
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  overflow: hidden;
  opacity: 0;
  animation: appear .3s linear forwards;
}

.error,
.no-found {
  margin: 0;
  font-size: 19px;
}

.not-changed-outer,
.error-is-shown-outer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.not-changed {
  margin: 0;
  font-size: 16px;
  opacity: 0;
  position: absolute;
  animation: appear .2s linear forwards;
}

.error {
  color: #c44141;
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}
</style>