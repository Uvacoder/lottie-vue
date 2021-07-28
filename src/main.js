import { createApp } from 'vue';
import App from './App.vue';
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue'; // import lottie-vuejs

const app = createApp(App);

app.use(LottieAnimation);

app.config.productionTip = false;

app.mount('#app');
