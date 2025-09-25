<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__container">
      <!-- Logo -->
      <div class="navbar__logo">
        <img src="../../../public/logo.jpg" alt="Samira Sobhani" class="navbar__logo-img" />
        <span class="navbar__logo-text">Samira Sobhani</span>
      </div>

      <!-- Desktop Navigation -->
      <ul class="navbar__menu" :class="{ 'navbar__menu--active': isMenuOpen }">
        <li v-for="item in navigationItems" :key="item.id" class="navbar__item">
          <a :href="item.href" class="navbar__link" @click.prevent="item.onClick && item.onClick()">
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Social Links -->
      <div class="navbar__social">
        <a
          v-for="social in socialMediaItems.slice(0, 3)"
          :key="social.id"
          :href="social.href"
          class="navbar__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="social.icon" :alt="social.name" class="navbar__social-icon" />
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="navbar__toggle"
        @click="toggleMenu"
        :class="{ 'navbar__toggle--active': isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMenuOpen" class="navbar__overlay">
      <div class="navbar__mobile-menu">
        <button class="navbar__close-btn" @click="closeMenu" aria-label="بستن منو" type="button">
          <img
            src="../../../public/icon/outlined/close.svg"
            alt="بستن منو"
            width="24"
            height="24"
          />
        </button>
        <ul class="navbar__mobile-list">
          <li v-for="item in navigationItems" :key="item.id" class="navbar__mobile-item">
            <a
              :href="item.href"
              class="navbar__mobile-link"
              @click.prevent="handleMobileClick(item.onClick)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        <div class="navbar__mobile-social">
          <a
            v-for="social in socialMediaItems"
            :key="social.id"
            :href="social.href"
            class="navbar__mobile-social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="social.icon" :alt="social.name" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
  isScrolled?: boolean
}

withDefaults(defineProps<Props>(), {
  navigationItems: () => [],
  socialMediaItems: () => [],
  isScrolled: false,
})

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleMobileClick = (onClick?: () => void) => {
  if (onClick) {
    onClick()
  }
  closeMenu()
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &--scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--color-accent-burgundy);
    text-decoration: none;

    &-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    &-text {
      @media (max-width: 480px) {
        display: none;
      }
    }
  }

  &__menu {
    display: flex;
    list-style: none;
    gap: 2.5rem;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__link {
    text-decoration: none;
    color: var(--color-accent-coral);
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-accent-burgundy);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--color-green-dark);
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  &__social {
    display: flex;
    gap: 1rem;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }

    &-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #f8f9fa;
      transition: all 0.3s ease;

      &:hover {
        background: var(--color-green);
        transform: translateY(-2px);

        .navbar__social-icon {
          filter: brightness(0) invert(1);
        }
      }
    }

    &-icon {
      width: 18px;
      height: 18px;
      object-fit: contain;
    }
  }

  &__toggle {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    @media (max-width: 768px) {
      display: flex;
    }

    span {
      width: 100%;
      height: 3px;
      background: #333;
      border-radius: 10px;
      transition: all 0.3s ease;
      transform-origin: 1px;
    }

    &--active {
      span:first-child {
        transform: rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
        transform: translateX(20px);
      }

      span:nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 999;
  }

  &__mobile-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background: white;
    padding: 2rem;
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
    animation: slideInRight 0.3s ease;

    @media (max-width: 480px) {
      width: 280px;
    }
  }

  &__mobile-list {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
  }

  &__mobile-item {
    margin-bottom: 1.5rem;
  }

  &__mobile-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-green);
    }
  }

  &__mobile-social {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #eee;

    &-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #f8f9fa;
      transition: all 0.3s ease;

      &:hover {
        background: var(--color-green);
        transform: translateY(-2px);

        img {
          filter: brightness(0) invert(1);
        }
      }

      img {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }
    }
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
