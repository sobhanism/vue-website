<template>
  <section id="portfolio" class="portfolio">
    <div class="portfolio__container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">My Portfolio</h2>
        <p class="section-subtitle">Check out some of my recent work</p>
        <div class="section-divider"></div>
      </div>

      <!-- Portfolio Grid -->
      <div class="portfolio__grid">
        <article
          v-for="(item, index) in portfolioItems"
          :key="item.id"
          class="portfolio__card"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="portfolio__card-inner">
            <!-- Image Container -->
            <div class="portfolio__image-container">
              <img :src="item.image" :alt="item.title" class="portfolio__image" />
              <div class="portfolio__overlay">
                <div class="portfolio__actions">
                  <a
                    :href="item.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="portfolio__action-btn portfolio__action-btn--demo"
                    title="View Demo"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fill-rule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="portfolio__action-btn portfolio__action-btn--code"
                    title="View Code"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265L11.83 9.736a1 1 0 11-1.898-.632l1.12-3.367a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="portfolio__content">
              <h3 class="portfolio__title">{{ item.title }}</h3>
              <p class="portfolio__description">{{ item.description }}</p>

              <!-- Technologies -->
              <div class="portfolio__technologies">
                <span v-for="tech in item.technologies" :key="tech" class="portfolio__tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- View More Button -->
      <div class="portfolio__more">
        <a
          href="https://github.com/sobhanism"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--outline btn--large"
        >
          View More on GitHub
          <svg viewBox="0 0 20 20" fill="currentColor" class="btn__icon">
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PortfolioItem {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  demo: string
}

interface Props {
  portfolioItems: PortfolioItem[]
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.portfolio {
  padding: 6rem 0;
  background: var(--color-white);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, rgba(34, 197, 94, 0.08) 0%, transparent 100%);
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

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-bottom: 4rem;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    @media (max-width: 480px) {
      gap: 1.5rem;
    }
  }

  &__card {
    background: var(--color-white);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid var(--color-accent-cream);
    box-shadow: var(--shadow-soft);
    transition: all 0.3s ease;
    animation: fadeInUp 0.8s ease both;

    &:hover {
      transform: translateY(-10px);
      box-shadow: var(--shadow-accent);
      border-color: var(--color-accent-rose);
    }
  }

  &__card-inner {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__image-container {
    position: relative;
    height: 250px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-gradient-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;

    .portfolio__card:hover & {
      opacity: 1;
    }
  }

  &__actions {
    display: flex;
    gap: 1rem;
  }

  &__action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: rgba(177, 171, 134, 0.15);
    border: 2px solid var(--color-primary);
    color: var(--color-white);
    border-radius: 50%;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);

    svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      background: var(--color-accent-coral);
      border-color: var(--color-accent-burgundy);
      color: var(--color-white);
      transform: scale(1.1);
      box-shadow: var(--shadow-warm);
    }
  }

  &__content {
    padding: 2rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--color-accent-burgundy);
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  &__description {
    color: var(--color-accent-coral);
    line-height: 1.7;
    margin-bottom: 1.5rem;
    flex-grow: 1;
    font-weight: 500;
  }

  &__technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  &__tech-tag {
    padding: 0.4rem 1rem;
    background: var(--color-accent-cream);
    color: var(--color-accent-burgundy);
    border: 1px solid var(--color-accent-coral);
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background: var(--color-accent-coral);
      color: var(--color-white);
      border-color: var(--color-accent-burgundy);
      transform: translateY(-2px);
      box-shadow: var(--shadow-warm);
    }
  }

  &__more {
    text-align: center;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: var(--color-green-dark);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--color-gray);
  font-weight: 700;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.section-divider {
  width: 80px;
  height: 4px;
  background: var(--color-green-gradient-bright);
  margin: 0 auto;
  border-radius: 2px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &--outline {
    background: transparent;
    color: var(--color-primary-dark);
    border: 2px solid var(--color-primary-dark);

    &:hover {
      background: var(--color-gradient-accent);
      color: var(--color-white);
      border-color: var(--color-accent-coral);
      transform: translateY(-2px);
      box-shadow: var(--shadow-accent);
    }
  }

  &--large {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
  }

  &__icon {
    width: 20px;
    height: 20px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
