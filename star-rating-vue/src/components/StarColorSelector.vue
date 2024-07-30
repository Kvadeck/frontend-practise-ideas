<script setup>

import utils from "@/utils";
import {computed, defineEmits} from 'vue'

const emit = defineEmits(['change-star-color'])

function changeStarColorEmit(event) {
  emit('change-star-color', event)
}

const selected = computed(() => {
  return utils.getLocalStorage('star-color', 'star-gold')
})

</script>

<template>
  <div class="theme-wrapper">
    <label class="theme-label">
      <select v-model="selected" class="theme-selector" @change="changeStarColorEmit">
        <option value="star-gold">Gold</option>
        <option value="star-red">Red</option>
        <option value="star-green">Green</option>
      </select>
      <svg class="arrow-down">
        <use xlink:href="#select-arrow-down"/>
      </svg>
    </label>

    <svg class="sprites">
      <symbol id="select-arrow-down" viewBox="0 0 10 6">
        <polyline points="1 1 5 5 9 1"/>
      </symbol>
    </svg>
  </div>
</template>

<style scoped>

.theme-wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}

.theme-label {
  position: relative;
  min-width: 160px;
}

.theme-selector {
  -webkit-appearance: none;
  padding: 7px 40px 7px 12px;
  width: 100%;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all 150ms ease;
}

.arrow-down {
  position: absolute;
  right: 12px;
  top: calc(50% - 3px);
  width: 10px;
  height: 6px;
  stroke-width: 2px;
  stroke: #9098a9;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

.theme-selector option {
  color: #223254;
}

.theme-selector:hover + svg {
  stroke: #07f;
}

.sprites {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}

.theme-selector:focus {
  outline: none;
  border-color: #07f;
  box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
}
</style>