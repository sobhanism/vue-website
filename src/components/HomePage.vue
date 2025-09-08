<template>
  <div class="home-page">
    <!-- Navigation -->
    <NavbarComponent
      :navigation-items="appStore.navigationItems"
      :social-media-items="appStore.socialMediaItems"
      :is-scrolled="isScrolled"
    />

    <!-- Hero Section -->
    <HeroSection :profile-data="appStore.profileData" />

    <!-- About Section -->
    <AboutSection id="about" :about-data="appStore.aboutData" />

    <!-- Portfolio Section -->
    <PortfolioSection id="portfolio" :portfolio-items="appStore.portfolioItems" />

    <!-- Skills Section -->
    <SkillsSection id="skills" :skills="appStore.skills" />

    <!-- Contact Section -->
    <ContactSection id="contact" :contact-info="appStore.contactInfo" />

    <!-- Footer -->
    <FooterComponent
      :navigation-items="appStore.navigationItems"
      :social-media-items="appStore.socialMediaItems"
    />

    <!-- Scroll to top button -->
    <ScrollToTop v-if="showScrollTop" @click="scrollToTop" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/stores/counter'
import NavbarComponent from './layout/NavbarComponent.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import PortfolioSection from './sections/PortfolioSection.vue'
import SkillsSection from './sections/SkillsSection.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterComponent from './layout/FooterComponent.vue'
import ScrollToTop from './common/ScrollToTop.vue'

// Store
const appStore = useAppStore()

// Reactive data
const isScrolled = ref(false)
const showScrollTop = ref(false)

// Methods
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const handleScroll = () => {
  const scrollY = window.scrollY
  isScrolled.value = scrollY > 50
  showScrollTop.value = scrollY > 500
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Set initial loading state
  appStore.setLoading(false)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
