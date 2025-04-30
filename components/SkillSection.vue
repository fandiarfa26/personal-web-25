<script setup>
import skills from "~/assets/data/skills.json";

const softskills = [
  "Adaptive",
  "Collaborative",
  "Curious",
  "Detail-oriented",
  "Flexible",
  "Hard-working",
  "Honest",
  "Independent",
  "Innovative",
  "Motivated",
  "Passionate",
  "Self-disciplined",
  "Sincere",
];
</script>

<template>
  <section id="skills" class="pt-10">
    <h2 class="mb-2">What can I do?</h2>
    <p class="mb-5 text-lg">Some of the technologies that have been tried</p>
    <div class="flex flex-wrap lg:grid lg:grid-cols-5 gap-3">
      <UButton
        v-for="item in skills"
        :key="item.label"
        :avatar="{
          src: `/logo/${item.icon}`,
        }"
        size="lg"
        color="neutral"
        variant="outline"
      >
        {{ item.label }}
      </UButton>
    </div>
    <p class="my-5 text-lg">Ability to support work</p>
    <div class="flex flex-wrap gap-3">
      <UButton
        v-for="item in softskills"
        :key="item"
        size="lg"
        color="neutral"
        variant="outline"
        >{{ item }}</UButton
      >
    </div>
    <TheSeparator />
  </section>
</template>
