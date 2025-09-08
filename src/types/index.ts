// Global type definitions for the application

export interface NavigationItem {
  id: string | number
  label: string
  href: string
  onClick?: () => void
}

export interface SocialMediaItem {
  id: string | number
  name: string
  icon: string
  href: string
  color?: string
}

export interface ProfileData {
  name: string
  title: string
  subtitle: string
  image: string
  resume: string
}

export interface AboutData {
  title: string
  description: string
  highlights: string[]
  image: string
}

export interface PortfolioItem {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  demo: string
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  category: string
  items: Skill[]
}

export interface ContactInfo {
  email: string
  location: string
  availability: string
} //phone: string

export interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface SubmitStatus {
  type: 'success' | 'error' | ''
  message: string
}

// Animation and UI types
export interface AnimationDelay {
  delay: string
}

export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
}

// SEO and Meta types
export interface SEOMeta {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  url: string
}

// Component Props Interfaces
export interface HeroSectionProps {
  profileData: ProfileData
}

export interface AboutSectionProps {
  aboutData: AboutData
}

export interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[]
}

export interface SkillsSectionProps {
  skills: SkillCategory[]
}

export interface ContactSectionProps {
  contactInfo: ContactInfo
}

export interface NavbarProps {
  navigationItems: NavigationItem[]
  socialMediaItems: SocialMediaItem[]
  isScrolled: boolean
}

export interface FooterProps {
  navigationItems: NavigationItem[]
  socialMediaItems: SocialMediaItem[]
}
