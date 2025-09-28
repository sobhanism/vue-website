<template>
  <section id="skills" class="skills">
    <div class="skills__container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Skills & Expertise</h2>
        <p class="section-subtitle">Technologies and tools I work with</p>
        <div class="section-divider"></div>
      </div>

      <!-- Skills Grid -->
      <div class="skills__grid">
        <div
          v-for="(category, index) in skills"
          :key="category.category"
          class="skills__category"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="skills__category-header">
            <h3 class="skills__category-title">{{ category.category }}</h3>
            <div class="skills__category-icon">
              <component
                :is="getCategoryIcon(category.category)"
                v-if="getCategoryIcon(category.category)"
              />
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="m12 17h.01"></path>
              </svg>
            </div>
          </div>

          <div class="skills__items">
            <div v-for="skill in category.items" :key="skill.name" class="skills__item">
              <div class="skills__item-header">
                <span class="skills__item-name">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="skills__info">
        <div class="skills__info-card">
          <div class="skills__info-icon">🚀</div>
          <h4>Always Learning</h4>
          <p>
            I'm constantly updating my skills and learning new technologies to stay current with
            industry trends.
          </p>
        </div>
        <div class="skills__info-card">
          <div class="skills__info-icon">🎯</div>
          <h4>Problem Solver</h4>
          <p>
            I enjoy tackling complex challenges and finding elegant solutions through code and
            design.
          </p>
        </div>
        <div class="skills__info-card">
          <div class="skills__info-icon">🤝</div>
          <h4>Team Player</h4>
          <p>
            I collaborate effectively with designers, developers, and stakeholders to deliver great
            results.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  category: string
  items: Skill[]
}

interface Props {
  skills: SkillCategory[]
}

defineProps<Props>()

// Icon components using render functions
const FrontendIcon = defineComponent({
  name: 'FrontendIcon',
  render() {
    return h(
      'svg',
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [h('polyline', { points: '16 18 22 12 16 6' }), h('polyline', { points: '8 6 2 12 8 18' })],
    )
  },
})

const BackendIcon = defineComponent({
  name: 'BackendIcon',
  render() {
    return h(
      'svg',
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('rect', { x: '2', y: '3', width: '20', height: '14', rx: '2', ry: '2' }),
        h('line', { x1: '8', y1: '21', x2: '16', y2: '21' }),
        h('line', { x1: '12', y1: '17', x2: '12', y2: '21' }),
      ],
    )
  },
})

const DatabaseIcon = defineComponent({
  name: 'DatabaseIcon',
  render() {
    return h(
      'svg',
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }),
        h('path', { d: 'm3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5' }),
        h('path', { d: 'M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3' }),
      ],
    )
  },
})

const ToolsIcon = defineComponent({
  name: 'ToolsIcon',
  render() {
    return h(
      'svg',
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('path', {
          d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
        }),
      ],
    )
  },
})

const DesignIcon = defineComponent({
  name: 'DesignIcon',
  render() {
    return h(
      'svg',
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('path', { d: 'm9 9 5 12 1.774-5.226L21 14 9 9z' }),
        h('path', { d: 'm16.071 16.071 4.243 4.243' }),
        h('path', {
          d: 'm7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122',
        }),
      ],
    )
  },
})

const MobileIcon = defineComponent({
  name: 'MobileIcon',
  render() {
    return h(
      'svg',
      {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
      },
      [
        h('rect', { x: '5', y: '2', width: '14', height: '20', rx: '2', ry: '2' }),
        h('line', { x1: '12', y1: '18', x2: '12.01', y2: '18' }),
      ],
    )
  },
})

const getCategoryIcon = (category: string) => {
  console.log('Category:', category) // برای debug
  switch (category.toLowerCase()) {
    case 'frontend':
      return FrontendIcon
    case 'backend':
      return BackendIcon
    case 'database':
      return DatabaseIcon
    case 'tools':
      return ToolsIcon
    case 'design':
    case 'design & tools':
    case 'tools & other':
    case 'other':
      return DesignIcon
    case 'mobile':
      return MobileIcon
    default:
      console.warn('Unknown category:', category)
      return FrontendIcon
  }
}
</script>

<style lang="scss" scoped>
.skills {
  padding: 6rem 0;
  background: var(--color-gray-light);
  position: relative;
  color: var(--color-black);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-bottom: 5rem;

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

  &__category {
    background: var(--color-white);
    border: 1px solid var(--color-green-light);
    border-radius: 20px;
    padding: 2rem;
    transition: transform 0.3s ease;
    animation: fadeInUp 0.8s ease both;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 24px 0 color-mix(in srgb, var(--color-green) 15%, transparent);
    }
  }

  &__category-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  &__category-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-green-dark);
  }

  &__category-icon {
    width: 40px;
    height: 40px;
    background: var(--color-green-light);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 24px;
      height: 24px;
      color: var(--color-green-dark);
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__item {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    &-name {
      font-weight: 600;
      color: var(--color-black);
    }

    &-level {
      font-size: 0.9rem;
      color: var(--color-green-dark);
      font-weight: 500;
    }
  }

  &__progress {
    height: 8px;
    background: var(--color-green-light);
    border-radius: 4px;
    overflow: hidden;
  }

  &__progress-bar {
    height: 100%;
    background: var(--color-green-gradient-bright);
    border-radius: 4px;
    transition: width 2s ease;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      animation: shimmer 2s infinite;
    }
  }

  &__info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__info-card {
    background: var(--color-white);
    border: 1px solid var(--color-green-light);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 24px 0 color-mix(in srgb, var(--color-green) 15%, transparent);
    }

    h4 {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 1rem 0;
      color: var(--color-green-dark);
    }

    p {
      color: var(--color-gray);
      line-height: 1.6;
    }
  }

  &__info-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: var(--color-green-dark);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--color-gray);
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

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}
</style>
