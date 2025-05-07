<script setup lang="ts">
const { data: posts } = await useAsyncData("blog-section", () =>
  queryCollection("blog").order("date", "DESC").limit(5).all()
);
</script>

<template>
  <section class="pt-10">
    <h2 class="mb-2">What have I written lately?</h2>
    <p class="mb-5 text-lg">Some articles that can increase your knowledge</p>
    <div class="p-2">
      <UCarousel
        v-slot="{ item }"
        loop
        dots
        :autoplay="{ delay: 5000 }"
        :items="posts"
        :ui="{
          item: 'basis-full lg:basis-1/3',
        }"
        class="items-stretch"
      >
        <NuxtLink :to="item.path">
          <UCard variant="subtle">
            <h3 class="text-2xl flex-shrink-0">{{ item.title }}</h3>
            <p class="text-sm flex-shrink-0 mt-auto">
              {{ formatDate(item.date) }}
            </p>
          </UCard>
        </NuxtLink>
      </UCarousel>
    </div>
  </section>
</template>
