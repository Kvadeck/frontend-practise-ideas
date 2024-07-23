<script>
import StarsItem from "@/components/stars/StarsItem.vue";

export default {
  name: "StarsList",
  props: {
    color: {
      type: String,
      required: true
    },
  },
  components: {StarsItem},
  methods: {}
}
</script>

<template>
  <div :class="color">
    <div class="stars-wrapper">
      <div class="stars-outer">
        <stars-item></stars-item>
      </div>
      <div class="not-changed-outer">
        <div class="not-changed">Please select the new rating!</div>
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
}

.stars-outer {
  display: flex;
  height: 67px;
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

.not-changed-outer {
  position: relative;
  min-height: 30px;
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