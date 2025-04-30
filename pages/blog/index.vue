<script setup lang="ts">
definePageMeta({
  layout: "inside",
});

const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("blog").order("date", "DESC").all()
);
</script>

<template>
  <section>
    <UContainer>
      <h1 class="mb-2 text-4xl">My Blog</h1>
      <p class="mb-5 text-lg">
        I have created
        <span class="font-bold text-primary">{{ posts?.length ?? 0 }}</span>
        articles as documentation of my learning.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <ULink v-for="post in posts" :key="post.id" :to="post.path">
          <UCard class="hover:bg-primary-500/5">
            <h2 class="mb-2 !text-2xl">{{ post.title }}</h2>
            <p>{{ formatDate(post.date) }}</p>
          </UCard>
        </ULink>
      </div>
    </UContainer>
  </section>
</template>
