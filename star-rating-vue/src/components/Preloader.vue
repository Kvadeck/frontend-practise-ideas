<script>
export default {
  name: "PreLoader"
}
</script>

<script setup>

import {defineProps} from "vue";

const props = defineProps({
  color: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="preloader-wrapper" :class="props.color">
    <div class="preloader"></div>
  </div>
</template>

<style scoped>
.preloader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 67px;
  margin-bottom: 15px;
}

.preloader {
  position: relative;
  width: 25px;
  height: 25px;
  background: #febf00;
  animation: spin 2s linear infinite;
}

.star-gold .preloader {
  background: #febf00;
}

.star-red .preloader {
  background: red;
}

.star-green .preloader {
  background: green;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>