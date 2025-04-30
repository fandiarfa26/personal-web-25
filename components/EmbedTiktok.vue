<template>
  <div v-if="error">
    <img src="~/assets/images/reading.gif" class="w-full rounded-xl" />
  </div>
  <div v-else-if="!embedHtml">
    <USkeleton class="w-full h-24" />
  </div>
  <div v-else>
    <div v-html="embedHtml" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const toast = useToast();

const embedHtml = ref("");
const error = ref("");

onMounted(async () => {
  try {
    const response = await fetch(
      `https://www.tiktok.com/oembed?url=${encodeURIComponent(props.url)}`
    );
    const data = await response.json();
    if (data.html) {
      embedHtml.value = data.html;

      nextTick(() => {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      });
    } else {
      error.value = "Failed to load TikTok video.";
      toast.error("Failed to load TikTok video.");
    }
  } catch (e) {
    console.error(e);
    error.value = "Something went wrong.";
    toast.error("Something went wrong.");
  }
});
</script>
