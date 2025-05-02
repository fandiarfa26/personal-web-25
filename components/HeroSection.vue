<script setup>
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const nameText = ref(null);
const bioText = ref(null);
let nameTextSplit = null;
let bioTextSplit = null;

onMounted(() => {
  const nameSplit = new SplitText(nameText.value, {
    type: "chars, lines",
    charsClass: "char",
  });

  nameTextSplit = gsap.from(nameSplit.lines, {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "back.inOut",
  });

  const bioSplit = new SplitText(bioText.value, {
    type: "words",
    wordsClass: "word",
  });

  bioTextSplit = gsap.from(bioSplit.words, {
    opacity: 0,
    x: 50,
    duration: 1,
    rotation: "random(-80, 80)",
    stagger: 0.15,
    ease: "back.inOut",
    onComplete: () => bioSplit.revert(),
  });
});

onBeforeUnmount(() => {
  if (nameTextSplit) nameTextSplit.kill();
  if (bioTextSplit) bioTextSplit.kill();
});
</script>

<template>
  <UContainer>
    <section
      id="intro"
      class="h-screen flex flex-col justify-center items-center gap-10 lg:gap-20"
    >
      <GreetingText />
      <h1 ref="nameText" class="lg:!text-8xl uppercase text-center">
        M. Fandi Arfabuma
      </h1>
      <div class="flex flex-col items-center lg:flex-row gap-10">
        <div
          class="w-full lg:w-1/4 order-last lg:order-first flex justify-center"
        >
          <RotatingClover />
        </div>
        <p
          ref="bioText"
          class="text-lg lg:w-2/3 lg:text-3xl self-end text-center lg:text-justify"
        >
          I'm a Frontend Developer who's passionate about creating seamless and
          user-friendly digital experiences. From design to code, I focus on
          building interactive interfaces and optimizing websites and mobile
          apps.
        </p>
      </div>
      <div />
    </section>
  </UContainer>
</template>
