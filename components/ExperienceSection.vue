<script setup lang="ts">
import experiences from "~/assets/data/experiences.json";

const items = experiences.map((exp) => ({
  label: exp.name,
  icon: exp.type === "Course" ? "lucide:laptop" : "lucide:building",
  content: exp,
}));
</script>

<template>
  <section id="experiences" class="pt-10">
    <h2 class="mb-2">What have I done?</h2>
    <p class="mb-5 text-lg">My journey in pursuing a career</p>
    <UAccordion :items="items" default-value="0">
      <template #content="{ item }">
        <div class="p-1">
          <UCard>
            <div class="space-y-3">
              <h3 class="text-lg text-primary">
                {{ item.content?.role ?? "?" }}
              </h3>
              <UBadge color="neutral" variant="outline">{{
                item.content?.type ?? "?"
              }}</UBadge>
              <p class="flex items-center gap-2">
                <UIcon
                  name="lucide:calendar-clock"
                  class="size-6 text-primary"
                />
                <span class="w-full">{{ item.content?.time ?? "?" }} </span>
              </p>
              <ul class="list-disc pl-5">
                <li v-for="(note, index) in item.content.notes" :key="index">
                  {{ note }}
                </li>
              </ul>
            </div>
          </UCard>
        </div>
      </template>
    </UAccordion>
    <TheSeparator />
  </section>
</template>
