<template>
  <section
    id="contact"
    class="flex flex-col lg:flex-row items-center gap-5 h-96 justify-between pt-10"
  >
    <div class="flex flex-col gap-5">
      <h2 class="mb-2">Want to know more?</h2>
      <p class="mb-2 text-3xl">Thank you</p>
      <p class="mb-5 text-lg">
        If you have any questions, my email is always open to anyone. <br />
        We can discuss and we can collaborate.
      </p>
      <div>
        <UButton size="xl" trailing-icon="lucide:send">Contact Me</UButton>
      </div>
    </div>
    <div class="hidden lg:block w-1/3">
      <img
        src="~/assets/images/bye.gif"
        alt="Bye gif"
        class="w-full rounded-xl"
      />
    </div>
  </section>
</template>
