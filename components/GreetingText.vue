<script setup>
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/all";

gsap.registerPlugin(ScrambleTextPlugin);

const textRef = ref(null);
let scrambling = null;

function greeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greetingText;

  if (currentHour < 12) {
    greetingText = "Morning";
  } else if (currentHour < 18) {
    greetingText = "Afternoon";
  } else {
    greetingText = "Evening";
  }

  return greetingText;
}

onMounted(() => {
  scrambling = gsap.to(textRef.value, {
    duration: 3,
    scrambleText: greeting(),
  });
});

onBeforeUnmount(() => {
  if (scrambling) scrambling.kill();
});
</script>

<template>
  <label class="text-xl lg:text-4xl text-center"
    >Good <span ref="textRef">?</span>, everyone!</label
  >
</template>
