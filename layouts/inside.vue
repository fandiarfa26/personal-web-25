<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

useHead({
  meta: [
    {
      property: "og:title",
      content: `M. Fandi Arfabuma - ${route.meta.title}`,
    },
  ],
});

const navItems = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    icon: "lucide:home",
    to: "/",
  },
  {
    label: "Projects",
    icon: "lucide:laptop-minimal-check",
    to: "/projects",
  },
  {
    label: "Blog",
    icon: "lucide:newspaper",
    to: "/blog",
  },
]);
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <header class="py-1 px-4 fixed backdrop-blur-2xl top-0 w-full z-10">
      <UContainer>
        <div class="flex items-center justify-between">
          <UIcon name="lucide:clover" size="24" />
          <UNavigationMenu :items="navItems" />
        </div>
      </UContainer>
    </header>
    <main class="flex-1 pt-20">
      <slot />
    </main>
    <FooterSection />
  </div>
</template>
