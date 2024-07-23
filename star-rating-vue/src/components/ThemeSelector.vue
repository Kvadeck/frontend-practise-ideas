<script>
export default {
  name: "ThemeSelector"
}
</script>

<template>
  <div class="theme-wrapper">
    <p class="theme-title">Stars color:</p>
    <label class="theme-label">
      <select id="theme-selector" class="theme-selector" name="theme-selector">
        <option value="default" disabled>Select option</option>
        <option value="gold">Gold</option>
        <option value="red">Red</option>
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

.theme-title {
  font-size: 16px;
  user-select: none;
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