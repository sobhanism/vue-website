import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type {
  ProfileData,
  AboutData,
  PortfolioItem,
  SkillCategory,
  ContactInfo,
  NavigationItem,
  SocialMediaItem,
} from '@/types'

export const useAppStore = defineStore('app', () => {
  // Loading state
  const isLoading = ref(false)

  // Theme state
  const isDarkMode = ref(false)

  // Profile Data
  const profileData = ref<ProfileData>({
    name: 'Samira Sobhani',
    title: 'Frontend Developer',
    subtitle: 'Creating beautiful, functional web experiences',
    image: '/logo.jpg',
    resume: '/resume.pdf',
  })

  // About Data
  const aboutData = ref<AboutData>({
    title: 'About Me',
    description: `I'm a passionate frontend developer with over 5 years of experience creating
      digital solutions that make a difference. I specialize in modern web technologies and have
      a keen eye for design, ensuring that every project I work on is both functional and beautiful.`,
    highlights: [
      '5+ years of web development experience',
      'Specialized in Vue.js, React, and Node.js',
      'UI/UX design with modern tools',
      'Agile development methodologies',
    ],
    image: '/01.jpg',
  })

  // Portfolio Items
  const portfolioItems = ref<PortfolioItem[]>([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A complete e-commerce solution built with Vue.js and Node.js',
      image: '/01.jpg',
      //technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe API'],
      technologies: ['Vue.js', 'MongoDB'],
      link: 'https://github.com/sobhanism',
      demo: 'https://demo.example.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      image: '/01.jpg',
      //technologies: ['React', 'Socket.io', 'PostgreSQL', 'Docker'],
      technologies: ['Socket.io', 'PostgreSQL', 'Docker'],
      link: 'https://github.com/sobhanism',
      demo: 'https://demo.example.com',
    },
    {
      id: 3,
      title: 'Design System Library',
      description: 'Comprehensive UI component library for consistent design',
      image: '/01.jpg',
      // technologies: ['Vue 3', 'TypeScript', 'Storybook', 'Sass'],
      technologies: ['Vue 3', 'TypeScript', 'Sass'],
      link: 'https://github.com/sobhanism',
      demo: 'https://demo.example.com',
    },
  ])

  // Skills Data
  const skills = ref<SkillCategory[]>([
    {
      category: 'Frontend',
      items: [
        { name: 'Vue.js', level: 90 },
        // { name: 'React', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'Sass/SCSS', level: 90 },
      ],
    },
    // {
    //   category: 'Backend',
    //   items: [
    //     { name: 'Node.js', level: 85 },
    //     { name: 'Python', level: 78 },
    //     { name: 'PostgreSQL', level: 80 },
    //     { name: 'MongoDB', level: 75 },
    //   ],
    // },
    {
      category: 'Design & Tools',
      items: [
        { name: 'Figma', level: 70 },
        { name: 'Git', level: 80 },
        { name: 'Docker', level: 70 },
      ],
    },
  ])

  // Contact Information
  const contactInfo = ref<ContactInfo>({
    email: 'sobhani.sm@gmail.com',
    location: 'Tehran, Iran',
    availability: 'Available for freelance work',
    phone: '+98 912 414 3892',
  })

  // Navigation Items
  const navigationItems = ref<NavigationItem[]>([
    { id: 1, label: 'Home', href: '#home', onClick: () => scrollToSection('home') },
    { id: 2, label: 'About', href: '#about', onClick: () => scrollToSection('about') },
    { id: 3, label: 'Portfolio', href: '#portfolio', onClick: () => scrollToSection('portfolio') },
    { id: 4, label: 'Skills', href: '#skills', onClick: () => scrollToSection('skills') },
    { id: 5, label: 'Contact', href: '#contact', onClick: () => scrollToSection('contact') },
  ])

  // Social Media Items
  const socialMediaItems = ref<SocialMediaItem[]>([
    {
      id: 1,
      name: 'Instagram',
      icon: '/icon/outlined/instagram-brand-outlined.svg',
      href: 'https://instagram.com/sobhani.sm',
      color: '#E4405F',
    },
    {
      id: 2,
      name: 'Telegram',
      icon: '/icon/outlined/telegram-brand-outlined.svg',
      href: 'https://t.me/samira1990s',
      color: '#0088CC',
    },
    {
      id: 3,
      name: 'WhatsApp',
      icon: '/icon/outlined/whatsapp-brand-outlined.svg',
      href: 'https://wa.me/989124143892',
      color: '#25D366',
    },
    {
      id: 4,
      name: 'LinkedIn',
      icon: '/icon/outlined/linkedin-brand-outlined.svg',
      href: 'https://www.linkedin.com/in/samirasobhani',
      color: '#0A66C2',
    },
    {
      id: 5,
      name: 'GitHub',
      icon: '/icon/outlined/github.svg',
      href: 'https://github.com/sobhanism',
      color: '#333',
    },
  ])

  // Computed properties
  const totalProjects = computed(() => portfolioItems.value.length)
  const totalSkills = computed(() =>
    skills.value.reduce((acc, category) => acc + category.items.length, 0),
  )
  const currentYear = computed(() => new Date().getFullYear())

  // Actions
  function setLoading(loading: boolean) {
    isLoading.value = loading
  }

  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value
  }

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }

  function updateProfile(data: Partial<ProfileData>) {
    profileData.value = { ...profileData.value, ...data }
  }

  function addPortfolioItem(item: PortfolioItem) {
    portfolioItems.value.push(item)
  }

  function removePortfolioItem(id: number) {
    const index = portfolioItems.value.findIndex((item) => item.id === id)
    if (index > -1) {
      portfolioItems.value.splice(index, 1)
    }
  }

  // Return all state and actions
  return {
    // State
    isLoading,
    isDarkMode,
    profileData,
    aboutData,
    portfolioItems,
    skills,
    contactInfo,
    navigationItems,
    socialMediaItems,

    // Computed
    totalProjects,
    totalSkills,
    currentYear,

    // Actions
    setLoading,
    toggleTheme,
    scrollToSection,
    updateProfile,
    addPortfolioItem,
    removePortfolioItem,
  }
})
