<script setup>
const title = "M. Fandi Arfabuma";
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${title}` : title;
  },
  meta: [
    { name: "description", content: "M. Fandi Arfabuma's Personal Website" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
