<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Main Footer Content -->
      <div class="footer__content">
        <!-- Brand Section -->
        <div class="footer__brand">
          <div class="footer__logo">
            <img src="../../../public/logo.jpg" alt="Samira Sobhani" class="footer__logo-img" />
            <span class="footer__logo-text">Samira Sobhani</span>
          </div>
          <p class="footer__description">
            Frontend Developer specialized in Vue.js, passionate about creating modern, responsive
            web applications with excellent user experience and clean code.
          </p>
          <div class="footer__social">
            <a
              v-for="social in socialMediaItems"
              :key="social.id"
              :href="social.href"
              class="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              :title="social.name"
            >
              <img :src="social.icon" :alt="social.name" />
            </a>
          </div>
        </div>

        <!-- Navigation Section -->
        <div class="footer__nav">
          <h4 class="footer__nav-title">Quick Links</h4>
          <ul class="footer__nav-list">
            <li v-for="item in navigationItems" :key="item.id" class="footer__nav-item">
              <a
                :href="item.href"
                class="footer__nav-link"
                @click.prevent="item.onClick && item.onClick()"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services Section -->
        <div class="footer__services">
          <h4 class="footer__services-title">Services</h4>
          <ul class="footer__services-list">
            <li class="footer__service-item">
              <a href="#" class="footer__service-link">Web Development</a>
            </li>
            <!-- <li class="footer__service-item">
              <a href="#" class="footer__service-link">UI/UX Design</a>
            </li> -->
            <li class="footer__service-item">
              <a href="#" class="footer__service-link">Frontend Development</a>
            </li>
            <!-- <li class="footer__service-item">
              <a href="#" class="footer__service-link">Backend Development</a>
            </li> -->
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer__contact">
          <h4 class="footer__contact-title">Get In Touch</h4>
          <div class="footer__contact-info">
            <a href="mailto:sobhani.sm@gmail.com" class="footer__contact-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                ></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              sobhani.sm@gmail.com
            </a>
            <a href="tel:+989124143892" class="footer__contact-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
              +98 912 414 3892
            </a>
            <div class="footer__contact-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Tehran, Iran
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer__bottom">
        <div class="footer__copyright">
          <p>&copy; {{ currentYear }} Samira Sobhani. All rights reserved.</p>
        </div>
        <div class="footer__links">
          <a href="#" class="footer__link">Privacy Policy</a>
          <a href="#" class="footer__link">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface NavigationItem {
  id: string | number
  label: string
  href: string
  onClick?: () => void
}

interface SocialMediaItem {
  id: string | number
  name: string
  icon: string
  href: string
  color?: string
}

interface Props {
  navigationItems?: NavigationItem[]
  socialMediaItems?: SocialMediaItem[]
}

withDefaults(defineProps<Props>(), {
  navigationItems: () => [],
  socialMediaItems: () => [],
})

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
.footer {
  background: var(--color-green-gradient);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 40%);
    pointer-events: none;
  }

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem 2rem;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      padding: 3rem 1rem 2rem;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 3rem;
    margin-bottom: 3rem;

    @media (max-width: 968px) {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }
  }

  &__brand {
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      justify-content: center;
    }

    &-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    &-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
    }
  }

  &__description {
    color: white;
    line-height: 1.7;
    margin-bottom: 2rem;
    max-width: 300px;

    @media (max-width: 768px) {
      max-width: none;
      margin: 0 auto 2rem;
    }
  }

  &__social {
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
      justify-content: center;
    }

    &-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid var(--color-green); /* سبز ملایم */
      border-radius: 12px;
      transition: all 0.3s ease;

      &:hover {
        background: var(--color-accent-burgundy);
        border-color: var(--color-accent-burgundy);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(74, 12, 10, 0.4);
      }

      img {
        width: 20px;
        height: 20px;
        object-fit: contain;
        filter: brightness(0) invert(1) sepia(1) hue-rotate(70deg) saturate(3); /* سبز */
      }
    }
  }

  &__nav,
  &__services {
    &-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: white;
    }

    &-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &-item,
    &-item {
      margin-bottom: 0.75rem;
    }

    &-link {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: var(--color-accent-burgundy);
      }
    }
  }

  &__services {
    &-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: white;
    }

    &-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &-item {
      margin-bottom: 0.75rem;
    }

    &-link {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: var(--color-accent-burgundy);
      }
    }
  }
  .footer__service-link {
    color: white !important;
    text-decoration: none !important;
    &:hover {
      color: var(--color-accent-burgundy) !important;
    }
  }

  &__contact {
    &-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: white;
    }

    &-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      @media (max-width: 768px) {
        justify-content: center;
      }

      svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
      }

      &:hover {
        color: var(--color-accent-burgundy);
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }

  &__copyright {
    color: white;
    font-size: 0.9rem;
  }

  &__links {
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      gap: 1rem;
    }
  }

  &__link {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-accent-burgundy);
    }
  }

  &__back-to-top {
    position: static;
    margin: 2rem auto 0 auto;
    width: 48px;
    height: 48px;
    background: var(--color-green-gradient-bright);
    border: none;
    border-radius: 12px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px var(--color-green-light);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 18px var(--color-green-light);
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
