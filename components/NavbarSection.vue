<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "About",
    icon: "lucide:smile",
    to: { hash: "#about" },
    active: false,
  },
  {
    label: "Skills",
    icon: "lucide:brain",
    to: { hash: "#skills" },
    active: false,
  },
  {
    label: "Experiences",
    icon: "lucide:trophy",
    to: { hash: "#experiences" },
    active: false,
  },
  {
    label: "Projects",
    icon: "lucide:laptop-minimal-check",
    to: { hash: "#activities" },
    active: false,
  },
  {
    label: "Contact",
    icon: "lucide:send",
    to: { hash: "#contact" },
    active: false,
  },
]);
</script>

<template>
  <section
    class="fixed bottom-10 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-50 bg-neutral-800/30 backdrop-blur-sm p-4 rounded-xl"
  >
    <UNavigationMenu :items="items" :active="false" />
  </section>
</template>
