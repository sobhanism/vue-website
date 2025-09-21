<template>
  <section id="about" class="about">
    <div class="about__container">
      <div class="about__content">
        <!-- Section Header -->
        <div class="section-header">
          <h2 class="section-title">{{ aboutData.title }}</h2>
          <div class="section-divider"></div>
        </div>

        <div class="about__grid">
          <!-- About Text -->
          <div class="about__text">
            <p class="about__description">
              {{ aboutData.description }}
            </p>

            <div class="about__highlights">
              <h3 class="about__highlights-title">What I Bring</h3>
              <ul class="about__highlights-list">
                <li
                  v-for="highlight in aboutData.highlights"
                  :key="highlight"
                  class="about__highlight-item"
                >
                  <svg class="about__check-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {{ highlight }}
                </li>
              </ul>
            </div>

            <!-- Stats -->
            <div class="about__stats">
              <div class="about__stat">
                <div class="about__stat-number">5+</div>
                <div class="about__stat-label">Years Experience</div>
              </div>
              <div class="about__stat">
                <div class="about__stat-number">50+</div>
                <div class="about__stat-label">Projects Completed</div>
              </div>
              <div class="about__stat">
                <div class="about__stat-number">30+</div>
                <div class="about__stat-label">Happy Clients</div>
              </div>
            </div>
          </div>

          <!-- About Image -->
          <div class="about__image-container">
            <div class="about__image-wrapper">
              <img :src="aboutData.image" :alt="aboutData.title" class="about__image" />
              <div class="about__image-overlay"></div>
            </div>

            <!-- Experience Badge -->
            <div class="about__experience-badge">
              <div class="about__badge-content">
                <span class="about__badge-number">5</span>
                <span class="about__badge-text">Years of<br />Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface AboutData {
  title: string
  description: string
  highlights: string[]
  image: string
}

interface Props {
  aboutData: AboutData
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.about {
  padding: 6rem 0;
  background: var(--color-gray-light);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 25%),
      radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.05) 0%, transparent 25%);
    pointer-events: none;
  }

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  &__content {
    position: relative;
    z-index: 2;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: center;

    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }
  }

  &__text {
    @media (max-width: 968px) {
      order: 2;
    }
  }

  &__description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--color-gray);
    margin-bottom: 2.5rem;
  }

  &__highlights {
    margin-bottom: 3rem;

    &-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--color-green-dark);
      margin-bottom: 1.5rem;
    }

    &-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }

  &__highlight-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: var(--color-gray);

    @media (max-width: 968px) {
      justify-content: center;
    }
  }

  &__check-icon {
    width: 20px;
    height: 20px;
    color: var(--color-accent-coral);
    flex-shrink: 0;
  }

  &__stats {
    display: flex;
    gap: 2rem;

    @media (max-width: 968px) {
      justify-content: center;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  &__stat {
    text-align: center;
    padding: 1.5rem;
    background: var(--color-gradient-warm);
    border-radius: 16px;
    border: 1px solid var(--color-accent-coral);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-warm);
    }

    &-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-accent-burgundy);
      line-height: 1;
    }

    &-label {
      font-size: 0.9rem;
      color: var(--color-accent-coral);
      margin-top: 0.5rem;
    }
  }

  &__image-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 968px) {
      order: 1;
    }
  }

  &__image-wrapper {
    position: relative;
    width: 400px;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);

    @media (max-width: 768px) {
      width: 300px;
      height: 380px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--color-green) 20%, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;

    .about__image-wrapper:hover & {
      opacity: 1;
    }
  }

  &__experience-badge {
    position: absolute;
    bottom: -2rem;
    right: -2rem;
    width: 120px;
    height: 120px;
    background: var(--color-green-gradient-bright);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 15px 35px color-mix(in srgb, var(--color-green) 30%, transparent);
    animation: pulse 2s infinite;

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
      bottom: -1.5rem;
      right: -1.5rem;
    }
  }

  &__badge-content {
    text-align: center;
    color: white;
  }

  &__badge-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  &__badge-text {
    font-size: 0.8rem;
    opacity: 0.9;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.section-divider {
  width: 80px;
  height: 4px;
  background: var(--color-green-gradient-bright);
  margin: 0 auto;
  border-radius: 2px;
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
</style>
