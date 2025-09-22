<template>
  <section id="home" class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <div class="hero__text">
          <h1 class="hero__name fade-in-up">
            Hi, I'm <span class="hero__highlight">{{ profileData.name }}</span>
          </h1>
          <h2 class="hero__title fade-in-up" style="animation-delay: 0.2s">
            {{ profileData.title }}
          </h2>
          <p class="hero__subtitle fade-in-up" style="animation-delay: 0.4s">
            {{ profileData.subtitle }}
          </p>
          <div class="hero__actions fade-in-up" style="animation-delay: 0.6s">
            <button class="btn btn--primary" @click="scrollToContact">Get In Touch</button>
            <a
              :href="profileData.resume"
              class="btn btn--outline"
              download="Samira_Sobhani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
        <div class="hero__image-container fade-in-up" style="animation-delay: 0.8s">
          <div class="hero__image-wrapper">
            <img :src="profileData.image" :alt="profileData.name" class="hero__image" />
            <div class="hero__image-bg"></div>
          </div>
          <div class="hero__floating-card hero__floating-card--1">
            <div class="hero__card-content">
              <div class="hero__card-icon">💼</div>
              <span>5+ Projects</span>
            </div>
          </div>
          <div class="hero__floating-card hero__floating-card--2">
            <div class="hero__card-content">
              <div class="hero__card-icon">⭐</div>
              <span>UI/UX Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Animated Background Elements -->
    <div class="hero__bg-elements">
      <div class="hero__bg-circle hero__bg-circle--1"></div>
      <div class="hero__bg-circle hero__bg-circle--2"></div>
      <div class="hero__bg-circle hero__bg-circle--3"></div>
    </div>

    <!-- Scroll Indicator -->
    <div class="hero__scroll-indicator">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-wheel"></div>
      </div>
      <span>Scroll Down</span>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ProfileData {
  name: string
  title: string
  subtitle: string
  image: string
  resume: string
}

interface Props {
  profileData: ProfileData
}

defineProps<Props>()

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: var(--color-green-gradient);
  overflow: hidden;
  padding-top: 80px;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
    z-index: 2;
    position: relative;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    min-height: calc(100vh - 160px);

    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
      padding: 2rem 0;
    }

    @media (max-width: 768px) {
      gap: 2rem;
      padding: 1rem 0;
    }
  }

  &__text {
    color: var(--color-white);
    text-shadow: none;

    @media (max-width: 768px) {
      order: 2;
    }
  }

  &__name {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.2;
    letter-spacing: -1px;
    color: var(--color-white);
    text-shadow: none;
  }

  &__highlight {
    color: var(--color-white);
    font-weight: 900;
  }

  &__title {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    opacity: 1;
    color: var(--color-white);
    text-shadow: none;
  }

  &__subtitle {
    font-size: 1.15rem;
    margin-bottom: 2.5rem;
    opacity: 1;
    line-height: 1.7;
    color: var(--color-white);
    text-shadow: none;
  }

  &__actions {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    @media (max-width: 968px) {
      justify-content: center;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      
      .btn {
        width: 100%;
        max-width: 280px;
      }
    }
  }

  &__image-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      order: 1;
    }
  }

  &__image-wrapper {
    position: relative;
    width: 350px;
    height: 350px;

    @media (max-width: 968px) {
      width: 300px;
      height: 300px;
    }

    @media (max-width: 768px) {
      width: 250px;
      height: 250px;
    }

    @media (max-width: 480px) {
      width: 220px;
      height: 220px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.2);
    position: relative;
    z-index: 2;
  }

  &__image-bg {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }

  &__floating-card {
    position: absolute;
    background: var(--color-accent-cream);
    backdrop-filter: blur(10px);
    border: 1px solid var(--color-accent-rose);
    border-radius: 12px;
    padding: 1rem 1.5rem;
    box-shadow: var(--shadow-accent);
    animation: float 3s ease-in-out infinite;
    color: var(--color-accent-burgundy);

    &--1 {
      top: 20%;
      left: -10%;
      animation-delay: 0s;
    }

    &--2 {
      bottom: 20%;
      right: -10%;
      animation-delay: 1.5s;
    }

    @media (max-width: 768px) {
      padding: 0.8rem 1rem;
      font-size: 0.85rem;
      
      &--1 {
        top: -10px;
        left: -10px;
        transform: scale(0.9);
      }

      &--2 {
        bottom: -10px;
        right: -10px;
        transform: scale(0.9);
      }
    }

    @media (max-width: 480px) {
      display: none; // مخفی کردن کارت‌ها در صفحات خیلی کوچک
    }
  }

  &__card-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    color: var(--color-green-dark);

    // سبز تیره برای هر دو کارت
    .hero__floating-card--1 &,
    .hero__floating-card--2 & {
      color: var(--color-green-dark) !important;
    }
  }

  &__card-icon {
    font-size: 1.5rem;
  }

  &__bg-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
  }

  &__bg-circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    animation: float 6s ease-in-out infinite;

    &--1 {
      width: 200px;
      height: 200px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }

    &--2 {
      width: 300px;
      height: 300px;
      top: 60%;
      right: 10%;
      animation-delay: 2s;
    }

    &--3 {
      width: 150px;
      height: 150px;
      bottom: 10%;
      left: 20%;
      animation-delay: 4s;
    }
  }

  &__scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    animation: bounce 2s infinite;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__scroll-mouse {
    width: 24px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 12px;
    position: relative;
  }

  &__scroll-wheel {
    width: 4px;
    height: 8px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 2px;
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll-wheel 1.5s infinite;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 140px;

  &--primary {
    background: var(--color-white);
    color: var(--color-primary-darkest);
    border: 2px solid var(--color-white);

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-soft);
      filter: brightness(0.95);
    }
  }

  &--outline {
    background: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-white);

    &:hover {
      background: var(--color-white);
      border-color: var(--color-white);
      color: var(--color-primary-darkest);
      transform: translateY(-2px);
      box-shadow: var(--shadow-soft);
    }
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@keyframes scroll-wheel {
  0% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateX(-50%) translateY(12px);
    opacity: 0;
  }
  100% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
}
</style>
