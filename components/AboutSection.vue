<script setup lang="ts">
const open = ref(true);
</script>

<template>
  <section id="about" class="space-y-8 lg:space-y-16">
    <div
      class="h-48 lg:h-96 bg-primary bg-fixed bg-blend-multiply bg-cover bg-center"
      style="background-image: url('/bgme.jpg')"
    />

    <h2 class="text-center">Who am I?</h2>

    <UContainer>
      <UCollapsible v-model:open="open" class="flex flex-col gap-2">
        <UButton
          class="group lg:hidden"
          :label="open ? 'Hide the story' : 'Tell the story'"
          color="neutral"
          variant="subtle"
          trailing-icon="i-lucide-chevron-down"
          :ui="{
            trailingIcon:
              'group-data-[state=open]:rotate-180 transition-transform duration-200',
          }"
          block
        />
        <template #content>
          <div class="flex flex-col lg:flex-row gap-5 lg:gap-10 items-center">
            <div class="w-full lg:w-1/3 flex flex-col gap-2.5 lg:gap-5">
              <img
                src="~/assets/images/tell-story.gif"
                alt="Tell story gif"
                class="w-full rounded-xl"
              />
            </div>
            <div
              class="text-lg lg:text-xl space-y-2.5 lg:space-y-5 w-full lg:w-2/3 text-center lg:text-justify"
            >
              <p>
                Hi! I'm Fandi from Indonesia. I'm really passionate about
                programming and design.
              </p>
              <p>
                I first got into programming back in 2013 when I was studying at
                vocational high school. Why do I love it? Because to me, coding
                feels like playing a really fun logic game.
              </p>
              <p>
                I started getting into web development during my internship at a
                software house, where I got my first real project: building an
                online exam platform for schools.
              </p>
              <p>
                After graduating, I continued my studies in Informatics. That's
                where I discovered the world of Artificial Intelligence, Machine
                Learning, and Data Mining — challenging stuff, but incredibly
                interesting!
              </p>
              <p>
                Even before I officially graduated, I was already working at an
                institution that focuses on developing innovative apps and
                media.
              </p>
              <p>
                Right now, I'm mainly focusing on frontend development, while
                still learning backend to someday become a well-rounded and
                reliable software engineer.
              </p>
            </div>
          </div>
        </template>
      </UCollapsible>
    </UContainer>
  </section>
</template>
