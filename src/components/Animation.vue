<template>
    <div>
        <lottie-animation
            path="lottie/login.json"
            :loop="true"
            :autoPlay="true"
            :speed="1"
            :width="256"
            :height="256"
        />
    </div>
</template>

<script>

import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
    name: 'AnimationLottie',
    components: {
        LottieAnimation
    }
}
</script>