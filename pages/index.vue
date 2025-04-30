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
      <div class="flex gap-10">
        <div class="w-1/3 pt-10">
          <!-- Profile -->
          <ProfileSection />
        </div>
        <div class="w-2/3">
          <!-- Skills -->
          <SkillSection />
          <!-- Experiences -->
          <ExperienceSection />
          <!-- Activities -->
          <ActivitiesSection />
        </div>
      </div>
      <TheSeparator />
      <!-- Blog -->
      <BlogSection />
      <!-- Contact -->
      <ContactSection />
      <!-- Back to Top -->
      <BackToTop />
    </UContainer>
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
