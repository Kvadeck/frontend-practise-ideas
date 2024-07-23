<template>
  <div class="app">
    <div class="wrapper">
      <h1 class='title'>Star rating component</h1>
      <theme-selector></theme-selector>
    </div>
  </div>
</template>

<script>

import ThemeSelector from "@/components/ThemeSelector.vue";

export default {
  name: 'App',
  components: {ThemeSelector}
}
</script>

<style>

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
