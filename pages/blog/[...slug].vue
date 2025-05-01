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
    <template v-if="post">
      <div class="flex flex-col lg:flex-row lg:gap-10">
        <div class="flex-1">
          <h1 class="mb-2">{{ post.title }}</h1>
          <p class="text-lg mb-10">{{ formatDate(post.date) }}</p>
          <ContentRenderer :value="post" class="content" />
        </div>
        <div>
          <EmbedTiktok
            v-if="post.tiktok"
            :url="post.tiktok"
            class="sticky top-10"
          />
        </div>
      </div>
    </template>
    <template v-else>
      <h1 class="mb-2">Not Found</h1>
      <p class="text-lg mb-10">The page you are looking for was not found.</p>
    </template>
  </UContainer>
</template>
