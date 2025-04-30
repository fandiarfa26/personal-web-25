<script setup>
definePageMeta({
  layout: "inside",
});

const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
});
</script>

<template>
  <UContainer>
    <div class="flex gap-10">
      <div class="flex-1">
        <h1 class="mb-2">{{ post.title }}</h1>
        <p class="text-lg mb-10">{{ formatDate(post.date) }}</p>
        <ContentRenderer :value="post" />
      </div>
      <div>
        <EmbedTiktok v-if="post.tiktok" :url="post.tiktok" />
      </div>
    </div>
  </UContainer>
</template>
