<template>
  <section id="contact" class="contact">
    <div class="contact__container">
      <!-- Section Header -->
      <div class="section-header">
        <h2 class="section-title">Let's Work Together</h2>
        <p class="section-subtitle">
          Ready to start your next project? Let's discuss how I can help.
        </p>
        <div class="section-divider"></div>
      </div>

      <div class="contact__grid">
        <!-- Contact Info -->
        <div class="contact__info">
          <div class="contact__info-card">
            <h3 class="contact__info-title">Get In Touch</h3>
            <p class="contact__info-description">
              I'm always interested in new opportunities and collaborations. Whether you have a
              project in mind or just want to connect, I'd love to hear from you.
            </p>

            <!-- Contact Details -->
            <div class="contact__details">
              <div class="contact__detail">
                <div class="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    ></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="contact__detail-content">
                  <h4>Email</h4>
                  <a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a>
                </div>
              </div>

              <!-- <div class="contact__detail">
                <div class="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                </div>
                <div class="contact__detail-content">
                  <h4>Phone</h4>
                  <a :href="`tel:${contactInfo.phone}`">{{ contactInfo.phone }}</a>
                </div>
              </div> -->

              <div class="contact__detail">
                <div class="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="contact__detail-content">
                  <h4>Location</h4>
                  <span>{{ contactInfo.location }}</span>
                </div>
              </div>

              <div class="contact__detail">
                <div class="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6"></path>
                    <path d="m9 9 3-3 3 3"></path>
                    <path d="m9 15 3 3 3-3"></path>
                  </svg>
                </div>
                <div class="contact__detail-content">
                  <h4>Availability</h4>
                  <span class="contact__availability">{{ contactInfo.availability }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact__form-container">
          <form class="contact__form" @submit.prevent="handleSubmit">
            <div class="contact__form-header">
              <h3>Send Message</h3>
              <p>Fill out the form below and I'll get back to you soon.</p>
            </div>

            <div class="contact__form-group">
              <input
                v-model="form.name"
                type="text"
                id="name"
                required
                placeholder=" "
                class="contact__input"
              />
              <label for="name" class="contact__label">Your Name</label>
            </div>

            <div class="contact__form-group">
              <input
                v-model="form.email"
                type="email"
                id="email"
                required
                placeholder=" "
                class="contact__input"
              />
              <label for="email" class="contact__label">Email Address</label>
            </div>

            <div class="contact__form-group">
              <input
                v-model="form.subject"
                type="text"
                id="subject"
                required
                placeholder=" "
                class="contact__input"
              />
              <label for="subject" class="contact__label">Subject</label>
            </div>

            <div class="contact__form-group">
              <textarea
                v-model="form.message"
                id="message"
                required
                rows="5"
                placeholder=" "
                class="contact__input contact__textarea"
              ></textarea>
              <label for="message" class="contact__label">Your Message</label>
            </div>

            <button type="submit" class="contact__submit-btn" :disabled="isSubmitting">
              <span v-if="!isSubmitting">
                Send Message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9"></polygon>
                </svg>
              </span>
              <span v-else>
                <svg
                  class="contact__loading-spinner"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
                Sending...
              </span>
            </button>

            <!-- Success/Error Messages -->
            <div v-if="submitStatus.message" class="contact__message" :class="submitStatus.type">
              {{ submitStatus.message }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface ContactInfo {
  email: string
  phone: string
  location: string
  availability: string
}

interface Props {
  contactInfo: ContactInfo
}

defineProps<Props>()

// Form data
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Form state
const isSubmitting = ref(false)
const submitStatus = reactive({
  type: '',
  message: '',
})

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.message = ''

  try {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    Object.keys(form).forEach((key) => {
      form[key as keyof typeof form] = ''
    })

    submitStatus.type = 'success'
    submitStatus.message = 'Thank you! Your message has been sent successfully.'
  } catch {
    submitStatus.type = 'error'
    submitStatus.message = 'Sorry, there was an error sending your message. Please try again.'
  } finally {
    isSubmitting.value = false

    // Clear message after 5 seconds
    setTimeout(() => {
      submitStatus.message = ''
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.contact {
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
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;

    @media (max-width: 1024px) {
      gap: 3rem;
    }

    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    @media (max-width: 480px) {
      gap: 2rem;
    }
  }

  &__info-card {
    background: linear-gradient(135deg, var(--color-white) 0%, var(--color-accent-cream) 100%);
    padding: 3rem;
    border-radius: 20px;
    border: 1px solid var(--color-accent-rose);
    box-shadow: var(--shadow-accent);
    height: fit-content;

    @media (max-width: 768px) {
      padding: 2rem;
    }
  }

  &__info-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-accent-burgundy);
    margin-bottom: 1rem;
  }

  &__info-description {
    color: var(--color-gray);
    line-height: 1.7;
    margin-bottom: 2.5rem;
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__detail {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__detail-icon {
    width: 50px;
    height: 50px;
    background: var(--color-gradient-accent);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    svg {
      width: 24px;
      height: 24px;
      color: white;
    }
  }

  &__detail-content {
    h4 {
      font-weight: 600;
      color: var(--color-accent-burgundy);
      margin-bottom: 0.25rem;
    }

    a,
    span {
      color: var(--color-accent-coral);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--color-accent-rose);
    }
  }

  &__availability {
    color: #22c55e !important;
    font-weight: 500;
  }

  &__form-container {
    background: white;
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      padding: 2rem;
    }
  }

  &__form-header {
    text-align: center;
    margin-bottom: 2.5rem;

    h3 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-green-dark);
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--color-gray);
    }
  }

  &__form-group {
    position: relative;
    margin-bottom: 2rem;
  }

  &__input {
    width: 100%;
    padding: 1.25rem 1rem 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 1rem;
    background: #f9fafb;
    transition: all 0.3s ease;
    resize: vertical;

    &:focus {
      outline: none;
      border-color: var(--color-accent-rose);
      background: white;
      box-shadow: 0 0 0 3px rgba(171, 134, 177, 0.1);
    }

    &:focus + .contact__label,
    &:not(:placeholder-shown) + .contact__label {
      transform: translateY(-0.75rem) scale(0.9);
      color: var(--color-accent-coral);
      background: white;
      padding: 0 0.5rem;
    }
  }

  &__textarea {
    min-height: 120px;
    resize: vertical;
  }

  &__label {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: var(--color-gray);
    font-size: 1rem;
    transition: all 0.3s ease;
    pointer-events: none;
    transform-origin: left top;
  }

  &__submit-btn {
    width: 100%;
    padding: 1.25rem;
    background: var(--color-gradient-accent);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px color-mix(in srgb, var(--color-green) 30%, transparent);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &__loading-spinner {
    animation: spin 1s linear infinite;
  }

  &__message {
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;

    &.success {
      background: #d1fae5;
      color: var(--color-green-dark);
      border: 1px solid #a7f3d0;
    }

    &.error {
      background: #fee2e2;
      color: var(--color-green-dark);
      border: 1px solid #fca5a5;
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

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
