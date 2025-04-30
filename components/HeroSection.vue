<script setup>
function greeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greetingText;

  if (currentHour < 12) {
    greetingText = "Good Morning";
  } else if (currentHour < 18) {
    greetingText = "Good Afternoon";
  } else {
    greetingText = "Good Evening";
  }

  return greetingText;
}
</script>

<template>
  <UContainer>
    <section
      id="intro"
      class="h-screen flex flex-col justify-center items-center gap-10 lg:gap-20"
    >
      <label class="text-xl lg:text-4xl text-center"
        >{{ greeting() }}, everyone!</label
      >
      <h1 class="lg:!text-8xl uppercase text-center">M. Fandi Arfabuma</h1>
      <div class="flex flex-col items-center lg:flex-row gap-10">
        <div
          class="w-full lg:w-1/4 order-last lg:order-first flex justify-center"
        >
          <img src="~/assets/images/clover.svg" class="w-24 lg:w-48" />
        </div>
        <p
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
