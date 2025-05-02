<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const image = ref(null);
let rotationTween = null;

onMounted(() => {
  // animasi rotasi otomatis
  rotationTween = gsap.to(image.value, {
    rotation: 360,
    repeat: -1,
    ease: "none",
    duration: 10, // durasi 1 putaran
    transformOrigin: "50% 50%",
  });
});

onBeforeUnmount(() => {
  if (rotationTween) rotationTween.kill();
});
</script>

<template>
  <img
    ref="image"
    src="~/assets/images/clover.svg"
    class="w-24 lg:w-48"
    draggable="false"
  />
</template>

<style scoped>
img {
  user-select: none;
}
</style>
