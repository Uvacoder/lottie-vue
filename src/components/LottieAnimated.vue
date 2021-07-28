<template>
  <div>
    <div>
      <lottie-animation
        id="firstLottie"
        :controls="true"
        :autoPlay="true"
        :path="lottiePath"
        :loop="true"
        @AnimControl="setAnimController"
      />
      Frame : {{ currentFrame }} / {{ nbOfFrames }}
    </div>
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; 
import {create} from '@lottiefiles/lottie-interactivity';

export default {
  name: "LottieAnimated",
  components: {
    LottieAnimation,
  },
  filters:{
    noDigits: function(numb: number) {
      return numb as Integer
    }
  },
  methods: {
    playXtoY: function(x, y, now = false) {
      this.lottie.playSegments([x,y], now)
      if(now)
        this.nbOfFrames = y-x
    },
    setInteractivity: function(animation) {
      create({
          mode: 'cursor',
          player: animation,
          actions: [
            {
              position: { x: [0, 1], y: [0, 1] },
              type: 'seek',
              frames: [0, 300]
            },
            {
              position: { x: -1, y: -1 },
              type: 'stop',
              frames: [0]
            },
          ],
        });
    },
    setAnimController: function (animation) {
      console.log("lottie")
      this.lottie = animation
      this.totalFrames = this.lottie.getDuration(true)
      this.playXtoY(0,290, true)
      this.playXtoY(290,415)

      this.lottie.addEventListener("enterFrame", (frame)=>{
        this.currentFrame = this.lottie.currentRawFrame
      })
      this.lottie.onComplete = () => console.log("animation finished");
      this.lottie.onLoopComplete = () => {
        console.log("animation looped" + this.lottie.currentRawFrame);
        this.nbOfFrames = this.lottie.getDuration(true)
      }
    },
  },
  data() {
    return {
      lottie: Object,
      //lottiePath: "/assets9.lottiefiles.com/packages/lf20_i9mxcD.json",
      lottiePath: "/assets5.lottiefiles.com/packages/lf20_9gmlwgi8.json",
      currentFrame: 0,
      totalFrames: 0, 
      nbOfFrames: 0
    };
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: Roboto;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.bodymovinanim {
  width: 90%;
  max-width: 50px;
  margin-bottom: 30px;
  cursor: pointer;
}

p {
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.6;
  letter-spacing: 2px;
}

.showmore {
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 16px;
  color: white;
  text-decoration: none;
  background-color: #1991eb;
  padding: 16px 35px;
  border-radius: 4px;
  line-height: 26px;
  text-align: center;
}
</style>
