<script setup>
definePageMeta({
  title: "M. Fandi Arfabuma - Frontend Developer",
  layout: "false",
});
</script>

<template>
  <div>
    <!-- Navbar -->
    <NavbarSection />
    <!-- Hero -->
    <HeroSection />
    <!-- About -->
    <AboutSection />
    <!-- Group -->
    <UContainer>
      <TheSeparator />
      <div class="flex flex-col lg:flex-row gap-10">
        <div class="w-full lg:w-1/3 lg:pt-10 order-last lg:order-first">
          <!-- Profile -->
          <ProfileSection />
        </div>
        <div class="w-full lg:w-2/3">
          <!-- Skills -->
          <SkillSection />
          <!-- Experiences -->
          <ExperienceSection />
          <!-- Activities -->
          <ActivitiesSection />
          <!-- Blog -->
          <BlogSection />
        </div>
      </div>
      <TheSeparator />
      <!-- Contact -->
      <ContactSection />
      <!-- Back to Top -->
      <BackToTop />
    </UContainer>
    <!-- Footer -->
    <FooterSection />
  </div>
</template>
