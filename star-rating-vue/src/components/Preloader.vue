<script>
export default {
  name: "PreLoader"
}
</script>

<template>
  <div class="preloader-wrapper theme-red theme-gold">
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

.theme-gold,
.theme-red {
  position: relative;
}

.theme-gold .preloader {
  background: #febf00;
}

.theme-red .preloader {
  background: red;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>