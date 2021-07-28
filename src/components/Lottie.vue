<template>
  <div>
    <h1>{{ msg }}</h1>
    <lottie-player
      id="firstLottie"
      controls
        autoplay
        loop
        ref="lottie"
        src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
        style="width: 320px;">
    </lottie-player>
  </div>
</template>

<script>
  import "@lottiefiles/lottie-player";
  import { create } from '@lottiefiles/lottie-interactivity';

  export default {
    name: 'Lottie',
    props: {
      msg: String
    },

    mounted() {
      //console.log("mounted", this.$refs.lottie)
      //2. listen for player load. See lottie player repo for other events
      this.$refs.lottie.addEventListener('load', function() {
        console.log("lootie loaded")
        // 3. configure the interactivity library
        create({
          mode: 'cursor',
          player: '#firstLottie',
          actions: [
            {
              position: { x: [0, 1], y: [0, 1] },
              type: 'stop',
              frames: [0, 100]
            },
          ],
        });
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
