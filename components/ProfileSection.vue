<script setup>
import socials from "~/assets/data/socials.json";
import photo from "~/assets/images/me-face.jpeg";
</script>

<template>
  <UCard variant="subtle" class="sticky top-12">
    <template #header />
    <div class="flex flex-col items-center gap-5">
      <img
        :src="photo"
        alt="Photo of Fandi's Face"
        class="w-40 h-40 rounded-full"
      />
      <h2 class="!text-2xl">M. Fandi Arfabuma</h2>
      <div class="flex flex-col items-center text-center gap-1">
        <span>Software Engineer</span>
        <span>(Frontend Web & Mobile)</span>
      </div>
    </div>
    <template #footer>
      <div class="space-y-3">
        <UButton
          href="mailto:arfabuma.987@gmail.com"
          icon="lucide:mail"
          color="neutral"
          variant="outline"
          size="lg"
          block
          :ui="{
            leadingIcon: 'text-primary',
          }"
          >arfabuma.987@gmail.com</UButton
        >
        <ul class="flex items-center justify-center gap-3">
          <li v-for="item in socials" :key="item.name">
            <ULink
              :href="item.url"
              target="_blank"
              class="text-2xl hover:text-primary"
            >
              <UIcon :name="item.icon" />
            </ULink>
          </li>
        </ul>
      </div>
    </template>
  </UCard>
</template>
