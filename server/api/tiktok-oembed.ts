export default defineEventHandler(async (event) => {
  const { url } = getQuery(event);

  if (!url) {
    throw createError({ statusCode: 400, statusMessage: "URL is required" });
  }

  const response = await $fetch(
    `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`
  );
  return response;
});
