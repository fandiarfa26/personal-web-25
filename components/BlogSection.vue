<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("blog").all()
);
</script>

<template>
  <section class="pt-10">
    <h2 class="mb-2">What have I written lately?</h2>
    <p class="mb-5 text-lg">Some articles that can increase your knowledge</p>
    <div class="p-3">
      <UCarousel
        v-slot="{ item }"
        loop
        arrows
        :autoplay="{ delay: 5000 }"
        :items="posts"
        :ui="{ item: 'basis-1/3' }"
      >
        <NuxtLink :to="item.path">
          <UCard variant="subtle">
            <h3 class="text-2xl">{{ item.title }}</h3>
            <p class="text-sm">{{ formatDate(item.date) }}</p>
          </UCard>
        </NuxtLink>
      </UCarousel>
    </div>
    <TheSeparator />
  </section>
</template>
