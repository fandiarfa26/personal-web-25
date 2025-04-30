<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  detailUrl: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  label: {
    type: String,
    default: "items",
  },
});
</script>

<template>
  <UCard>
    <div class="space-y-3">
      <div class="flex justify-between">
        <h3 class="text-xl">{{ props.title }}</h3>
        <UButton
          trailing-icon="i-lucide-arrow-right"
          variant="outline"
          color="neutral"
          size="md"
          class="self-end"
          :to="props.detailUrl"
          >Detail</UButton
        >
      </div>
      <div class="flex items-center gap-2">
        <p class="text-6xl">{{ props.count }}</p>
        <div class="flex flex-col gap-2">
          <span class="text-xl">{{ props.label }}</span>
        </div>
      </div>
    </div>
  </UCard>
</template>
