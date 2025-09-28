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
    description: `I'm Samira Sobhani, a Frontend Developer specializing in Vue.js with over 5 years of experience in designing and implementing modern, responsive web applications. Throughout various projects, I've utilized Quasar, TypeScript, Pinia, and Vue Router to build professional and scalable user interfaces.

My expertise in development tools such as Git, Linux, and Windows, along with experience working with Node.js and SQL Server, enables me to deliver complex projects with high quality and clean code architecture.

I'm passionate about learning new technologies, problem-solving, and team collaboration. Beyond technical skills, I possess strong communication abilities, positive thinking, and adaptability to new challenges and technologies.`,
    highlights: [
      '5+ years of frontend development experience',
      'Vue.js expert with Quasar, TypeScript, and Pinia mastery',
      'Proficient in Node.js, C#, and SQL Server development',
      'Strong communication, problem-solving, and adaptability skills',
      'Experience with Git, Linux, and modern development workflows',
      'Canvas API and Regular Expressions implementation expertise',
    ],
    image: '/01.jpg',
  })

  // Portfolio Items
  const portfolioItems = ref<PortfolioItem[]>([
    {
      id: 1,
      title: 'Vue Personal Website',
      description:
        'Modern personal portfolio website built with Vue 3, TypeScript, and responsive design principles',
      image: '/vue-website-preview.jpg',
      technologies: ['Vue 3', 'TypeScript', 'SCSS', 'Vite', 'Pinia'],
      link: 'https://github.com/sobhanism/vue-website',
      demo: 'https://sobhanism.github.io',
    },
    {
      id: 2,
      title: 'Tapsi Landing Page Clone',
      description:
        'Pixel-perfect recreation of Tapsi ride-sharing service landing page with modern CSS techniques',
      image: '/tapsi-project-preview.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'FontAwesome'],
      link: 'https://github.com/sobhanism/tapsi-project',
      demo: 'https://sobhanism.github.io/tapsi-project',
    },
    {
      id: 3,
      title: 'Business Website Template',
      description:
        'Professional business website template with modern UI/UX design and interactive components',
      image: '/business-website-preview.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Grid', 'Animation'],
      link: 'https://github.com/sobhanism/website',
      demo: 'https://sobhanism.github.io/website',
    },
  ])

  // Skills Data
  const skills = ref<SkillCategory[]>([
    {
      category: 'Frontend',
      items: [
        { name: 'Vue 3', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Quasar', level: 85 },
        { name: 'Pinia', level: 90 },
        { name: 'Vue Router', level: 90 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'C#', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'WebSocket', level: 75 },
      ],
    },
    {
      category: 'Tools & Other',
      items: [
        { name: 'Git', level: 90 },
        { name: 'Linux', level: 80 },
        { name: 'Windows', level: 90 },
        { name: 'Scrum', level: 85 },
        { name: 'Regular Expressions', level: 80 },
        { name: 'Canvas API', level: 75 },
      ],
    },
    {
      category: 'Design',
      items: [
        { name: 'Figma', level: 85 },
        { name: 'Photoshop', level: 80 },
        { name: 'InDesign', level: 75 },
      ],
    },
    {
      category: 'Soft Skills',
      items: [
        { name: 'Communication', level: 95 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Adaptability', level: 90 },
        { name: 'Learning & Development', level: 95 },
        { name: 'Positive Thinking', level: 90 },
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
