<template>
  <div id="app">
    <!-- <Lottie/> -->
    <LottieAnimated></LottieAnimated>
  </div>
</template>

<script>
import Lottie from './components/Lottie.vue'
import LottieAnimated from './components/LottieAnimated.vue'

export default {
  name: 'App',
  components: {
    Lottie,
    LottieAnimated
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
