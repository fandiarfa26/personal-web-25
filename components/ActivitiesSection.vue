<script setup lang="ts">
import projects from "~/assets/data/projects.json";

const { data: posts } = await useAsyncData("activity-blogs", () =>
  queryCollection("blog").all()
);
</script>

<template>
  <section id="activities" class="pt-10">
    <h2 class="mb-2">What am I doing?</h2>
    <p class="mb-5 text-lg">Some things that have been created</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <ActivityCard
        title="Projects"
        detail-url="/projects"
        :count="projects?.length ?? 0"
        label="websites/apps"
      />
      <ActivityCard
        title="Blog"
        detail-url="/blog"
        :count="posts?.length ?? 0"
        label="articles"
      />
    </div>
    <TheSeparator />
  </section>
</template>
