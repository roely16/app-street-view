<template>
    <div>
        <lottie-animation
            ref="anim"
            :animationData="require('@/assets/lottie/loading.json')"
            :loop="true"
            :autoPlay="true"
            :speed="1"
            width="100"
            height="100"
        />
    </div>
</template>

<script>

import LottieAnimation from 'lottie-web-vue'

export default {
    name: 'AnimationLottie',
    props: {
        path: String
    },
    components: {
        LottieAnimation
    }
}
</script>