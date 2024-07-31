<script setup>

import {defineProps, computed, defineEmits} from 'vue'

const props = defineProps({
  selected: {
    type: Boolean,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['set-selected', 'click-star'])

function setSelectedStar() {
  emit('set-selected', props.id)
}

function clickStar() {
  emit('click-star')
}

const isSelected = computed(() => {
  return (props.selected) ? 'star-selected' : 'star-not-selected'
})

</script>

<template>
  <div @click="clickStar" @mouseenter="setSelectedStar" class="star star-initial" :class="isSelected">
    <span class="top-left-top-square-line"/>
    <span class="top-left-middle-square-line"/>
    <span class="top-right-top-square-line"/>
    <span class="top-right-middle-square-line"/>

    <span class="bottom-left-top-square-line"/>
    <span class="bottom-left-bottom-square-line"/>
    <span class="bottom-right-top-square-line"/>
    <span class="bottom-right-bottom-square-line"/>

    <span class="bottom-left-square-line"/>
    <span class="bottom-right-square-line"/>
  </div>
</template>

<style scoped>
.star {
  position: relative;
  cursor: pointer;
  width: 70px;
  height: 67px;
  transform: scale(.7);
}

.star:hover {
  transform: scale(.8);
}

.star-gold .star {
  background: #febf00;
}

.star-red .star {
  background: red;
}

.star-green .star {
  background: green;
}

.star-selected,
.star-not-selected {
  transition: opacity .2s linear, transform .2s linear;
}

.star-not-selected {
  opacity: .3;
}

.star-selected {
  opacity: 1;
}

.top-left-top-square-line,
.top-left-middle-square-line,
.top-right-top-square-line,
.top-right-middle-square-line,
.bottom-left-top-square-line,
.bottom-left-bottom-square-line,
.bottom-right-top-square-line,
.bottom-right-bottom-square-line,
.bottom-left-square-line,
.bottom-right-square-line {
  display: block;
  position: absolute;
  background: white;
  cursor: default;
  pointer-events: none;
}

.top-left-top-square-line {
  width: 25px;
  height: 25px;
  left: 5px;
  top: -7px;
  transform: rotate(25deg);
}

.top-left-middle-square-line {
  width: 25px;
  height: 26px;
  left: -3px;
  top: -2px;
  transform: rotate(-7deg);
}

.top-right-top-square-line {
  width: 25px;
  height: 25px;
  left: 39px;
  top: -7px;
  transform: rotate(67deg);
}

.top-right-middle-square-line {
  width: 26px;
  height: 25px;
  left: 46px;
  top: -2px;
  transform: rotate(5deg);
}

.bottom-left-top-square-line {
  width: 27px;
  height: 25px;
  left: -16px;
  top: 29px;
  transform: rotate(44deg);
}

.bottom-left-bottom-square-line {
  width: 26px;
  height: 27px;
  left: -12px;
  top: 40px;
  transform: rotate(9deg);
}

.bottom-right-top-square-line {
  width: 30px;
  height: 25px;
  left: 58px;
  top: 31px;
  transform: rotate(45deg);
}

.bottom-right-bottom-square-line {
  width: 26px;
  height: 27px;
  left: 55px;
  top: 40px;
  transform: rotate(-8deg);
}

.bottom-left-square-line {
  width: 30px;
  height: 27px;
  left: 12px;
  top: 62px;
  transform: rotate(-29deg);
}

.bottom-right-square-line {
  width: 32px;
  height: 31px;
  left: 24px;
  top: 62px;
  transform: rotate(-62deg);
}
</style>