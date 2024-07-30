<script setup>

import ThemeSelector from "@/components/StarColorSelector.vue";
import StarsList from "@/components/stars/StarsList.vue";
import utils from "@/utils";

import {reactive} from 'vue'

const star = reactive({
  color: utils.getLocalStorage('star-color', 'star-gold')
})

function changeStarColorHandler({target}) {
  star.color = target.value;
  utils.setLocalStorage('star-color', target.value)
}

</script>

<template>
  <div class="app">
    <div class="wrapper">
      <h1 class='title'>Star rating with API</h1>
      <theme-selector @change-star-color="changeStarColorHandler"/>
      <stars-list :color="star.color"></stars-list>
    </div>
  </div>
</template>

<style>

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 5px solid #F44336;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

.wrapper {
  display: flex;
  justify-content: center;
  flex-flow: column;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.title {
  color: #f44336;
  white-space: nowrap;
  height: 37px;
  user-select: none;
  text-transform: uppercase;
}


</style>
