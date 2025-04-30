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

const activeItemIndex = ref<number>(0);

// Mengupdate nilai active pada items
watch(activeItemIndex, (newIndex) => {
  items.value.forEach((item, index) => {
    item.active = index === newIndex;
  });
});

const observeSections = () => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        // Ambil ID dari section yang paling banyak terlihat
        const targetHash = visibleSections[0].target.id;
        activeItemIndex.value = items.value.findIndex(
          (item) => item.to.hash.slice(1) === targetHash
        );
      }
    },
    {
      threshold: 0.5, // Atur berapa persen section harus terlihat agar terdeteksi
    }
  );

  sections.forEach((section) => observer.observe(section));

  // Return cleanup function
  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
};

onMounted(() => {
  const cleanup = observeSections();
  onUnmounted(() => cleanup());
});
</script>

<template>
  <section
    class="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 w-full lg:w-1/2 px-4"
  >
    <div class="bg-neutral-800/30 backdrop-blur-sm p-4 rounded-xl">
      <div class="grid grid-cols-5 gap-4 w-full">
        <ULink
          v-for="(item, index) in items"
          :key="index"
          :to="{ hash: item.to.hash }"
          :class="`flex items-center justify-center text-center ${
            item.active ? 'text-primary font-bold' : 'text-neutral-400'
          }`"
        >
          <UIcon :name="item.icon" class="text-lg" />
          <span class="hidden lg:block pl-2 text-sm">
            {{ item.label }}
          </span>
        </ULink>
      </div>
    </div>
  </section>
</template>
