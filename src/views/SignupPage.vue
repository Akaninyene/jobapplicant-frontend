
<template>
  <div class="signup-page">

    
<!-- Header -->
<header class="header-section">
  <router-link to="/" class="brand" aria-label="DreamJob Connect home">
    <span class="brand-name">
      DREAMJOB <span class="brand-highlight">CONNECT</span>
    </span>

    <span class="brand-slogan">
      Bridging the Gap Between You and Your Dream Job.
    </span>
  </router-link>

  <nav class="navigation" aria-label="Main navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/aboutus">About Us</router-link>
    <router-link to="/contactus">Contact Us</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/signup" class="nav-button">
      Sign Up
    </router-link>
  </nav>
</header>


    <!-- Main content -->
    <main class="content-section">

      <!-- Left side: Welcome message and image -->
      <section class="left-page">

        <p class="welcome-label">YOUR FUTURE STARTS HERE</p>

        <h1>
          You Are One Step Closer to
          <span>Your Dream Job!</span>
        </h1>

        <p class="intro-text">
          Create your account today and take the next step
          towards building a brighter professional future.
          Your skills, experience, and ambition deserve an opportunity.
        </p>

        <div class="image-container">
          <img
            src="/images/graduation.png"
            alt="Graduate celebrating academic achievement and career success"
            class="left-page-image"
          />
        </div>

        <p class="motivation">
          Keep learning. Keep growing. Keep improving your skills.
          Most importantly, never stop believing in yourself.
        </p>

      </section>

      <!-- Right side: Sign-up form -->
      <section class="form-section">

        <div class="form-heading">
          <div class="form-icon">✦</div>

          <h2>Create Your Account</h2>

          <p>Start your journey towards your dream career.</p>
        </div>

        <form class="signup-form" @submit.prevent="submitForm">

          <!-- First and last name -->
          <div class="name-row">

            <label>
              First Name <span class="required">*</span>

              <input
                type="text"
                v-model.trim="firstName"
                placeholder="Enter first name"
                required
                maxlength="100"
                autocomplete="given-name"
              />
            </label>

            <label>
              Last Name <span class="required">*</span>

              <input
                type="text"
                v-model.trim="lastName"
                placeholder="Enter last name"
                required
                maxlength="100"
                autocomplete="family-name"
              />
            </label>

          </div>

          <!-- Email -->
          <label>
            Email Address <span class="required">*</span>

            <input
              type="email"
              v-model.trim="email"
              placeholder="Enter your email address"
              required
              autocomplete="email"
            />
          </label>

          <!-- Password -->
          <label>
            Password <span class="required">*</span>

            <div class="password-wrapper">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="Create a password"
                required
                minlength="8"
                autocomplete="new-password"
              />

              <button
                type="button"
                class="toggle-password"
                @click="showPassword = !showPassword"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
              >
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>

            <small class="field-hint">
              Use at least 8 characters.
            </small>
          </label>

          <!-- Confirm password -->
          <label>
            Confirm Password <span class="required">*</span>

            <div class="password-wrapper">
              <input
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="confirmPassword"
                placeholder="Enter your password again"
                required
                minlength="8"
                autocomplete="new-password"
              />

              <button
                type="button"
                class="toggle-password"
                @click="showConfirmPassword = !showConfirmPassword"
                :aria-label="showConfirmPassword ? 'Hide password' : 'Show password'"
              >
                {{ showConfirmPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
          </label>

          <!-- Terms and conditions -->
          <label class="terms-label">
            <input
              type="checkbox"
              v-model="acceptedTerms"
              required
            />

            <span>
              I agree to the terms and conditions and privacy policy.
            </span>
          </label>

          <!-- Error message -->
          <p v-if="errorMessage" class="error-message" role="alert">
            {{ errorMessage }}
          </p>

          <!-- Submit -->
          <button type="submit" class="submit-button">
            Create My Account <span>→</span>
          </button>

          <p class="login-prompt">
            Already have an account?
            <router-link to="/login">Sign in here</router-link>
          </p>

        </form>
      </section>

    </main>

    <!-- Footer -->
    <footer class="footer-section">
      <p>© 2026 DREAMJOB CONNECT. All rights reserved.</p>
      <p>Empowering people. Inspiring careers. Building futures.</p>
    </footer>

  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const acceptedTerms = ref(false)
const errorMessage = ref('')

async function submitForm() {
  errorMessage.value = ''

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Your passwords do not match.'
    return
  }

  if (!acceptedTerms.value) {
    errorMessage.value =
      'Please accept the terms and conditions.'
    return
  }

  try {
    const response = await axios.post(
      'http://localhost:8080/api/auth/register',
      {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        acceptedTerms: acceptedTerms.value
      }
    )

    localStorage.setItem(
      'authToken',
      response.data.token
    )

    await router.push('/tutorial-applicantdashboard')

  } catch (error) {
    errorMessage.value =
      error.response?.data?.detail ||
      error.response?.data?.message ||
      'Registration failed. Please try again.'
  }
}

</script>

<style scoped>
/* Main page */
.signup-page {
  min-height: 100vh;
  background: #f8f7fc;
  color: #302448;
  font-family: Arial, Helvetica, sans-serif;
}



/* Professional header */
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 20px 7%;
  background: #332653;
  color: white;
}

/* Brand name and slogan */
.brand {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  flex-shrink: 0;
  color: white;
  text-decoration: none;
}

.brand-name {
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1.2;
}

.brand-highlight {
  color: #d6b8ff;
}

.brand-slogan {
  max-width: 340px;
  color: #eee7fb;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.2px;
}

/* Navigation links */
.navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 25px;
}

.navigation a {
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navigation a:hover,
.navigation a.router-link-exact-active:not(.nav-button) {
  color: #d6b8ff;
}

.navigation .nav-button {
  background: white;
  color: #49346f;
  padding: 11px 20px;
  border-radius: 8px;
  font-weight: 700;
}

.navigation .nav-button:hover {
  background: #e9ddff;
  color: #332653;
}


.brand {
  color: white;
  text-decoration: none;
  font-size: 23px;
  font-weight: 800;
  letter-spacing: 1px;
}

.brand span {
  color: #d6b8ff;
}

.navigation {
  display: flex;
  gap: 28px;
  align-items: center;
}

.navigation a {
  color: white;
  text-decoration: none;
  font-size: 15px;
}

.navigation a:hover {
  color: #d6b8ff;
}

/* Main two-column layout */
.content-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  align-items: center;
  gap: 65px;
  padding: 65px 8%;
  background: linear-gradient(135deg, #f8f7fc, #eee7fb);
}

/* Left section */
.left-page {
  min-width: 0;
}

.welcome-label {
  margin-bottom: 18px;
  color: #7650b4;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
}

.left-page h1 {
  margin: 0 0 22px;
  font-size: clamp(34px, 3.5vw, 49px);
  line-height: 1.2;
  letter-spacing: -1px;
}

.left-page h1 span {
  display: block;
  color: #7952bd;
}

.intro-text {
  color: #6e657d;
  font-size: 16px;
  line-height: 1.9;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  background: #e6daf9;
  border-radius: 45% 45% 25% 25%;
  overflow: hidden;
}

.left-page-image {
  display: block;
  width: 100%;
  max-width: 440px;
  height: 300px;
  object-fit: contain;
  border: none;
}

.motivation {
  color: #5f5273;
  font-size: 15px;
  line-height: 1.9;
  font-style: italic;
}

/* Form card */
.form-section {
  min-width: 0;
  padding: 38px;
  background: #ffffff;
  border: 1px solid #eee7f7;
  border-radius: 20px;
  box-shadow: 0 18px 50px #33265312;
}

.form-heading {
  text-align: center;
  margin-bottom: 28px;
}

.form-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  margin: 0 auto 15px;
  background: #eee5ff;
  color: #7650b4;
  border-radius: 15px;
  font-size: 30px;
}

.form-heading h2 {
  margin: 0 0 10px;
  color: #332653;
  font-size: 29px;
}

.form-heading p {
  margin: 0;
  color: #81788d;
  font-size: 14px;
  line-height: 1.7;
}

/* Form fields */
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 19px;
}

.name-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
}

.signup-form label {
  display: block;
  color: #403452;
  font-size: 14px;
  font-weight: 700;
}

.required {
  color: #d9485f;
}

.signup-form input:not([type="checkbox"]) {
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 9px;
  padding: 14px;
  color: #302448;
  background: #fcfbff;
  border: 1px solid #ded6eb;
  border-radius: 9px;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.signup-form input:not([type="checkbox"]):focus {
  border-color: #7952bd;
  box-shadow: 0 0 0 3px #7952bd1c;
}

.signup-form input::placeholder {
  color: #aaa2b7;
}

/* Password visibility */
.password-wrapper {
  position: relative;
}

.password-wrapper input:not([type="checkbox"]) {
  padding-right: 65px;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-25%);
  border: none;
  background: transparent;
  color: #7650b4;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
}

.field-hint {
  display: block;
  margin-top: 7px;
  color: #81788d;
  font-size: 12px;
  font-weight: normal;
}

/* Terms */
.signup-form .terms-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #746b82;
  font-size: 12px;
  line-height: 1.7;
  font-weight: normal;
}

.terms-label input[type="checkbox"] {
  width: 16px;
  height: 16px;
  margin-top: 2px;
  accent-color: #7650b4;
  flex-shrink: 0;
}

/* Error message */
.error-message {
  margin: 0;
  color: #c62840;
  font-size: 13px;
  line-height: 1.6;
}

/* Submit button */
.submit-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 9px;
  background: #7650b4;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 8px 20px #7650b426;
  transition: background 0.25s, transform 0.25s;
}

.submit-button:hover {
  background: #5d3a98;
  transform: translateY(-2px);
}

.login-prompt {
  margin: 0;
  color: #746b82;
  text-align: center;
  font-size: 13px;
  line-height: 1.8;
}

.login-prompt a {
  color: #7650b4;
  font-weight: bold;
  text-decoration: none;
}

.login-prompt a:hover {
  text-decoration: underline;
}

/* Footer */
.footer-section {
  padding: 23px 7%;
  background: #332653;
  color: #eee7fb;
  text-align: center;
}

.footer-section p {
  margin: 5px 0;
  font-size: 13px;
  line-height: 1.8;
}

/* Tablet */
@media (max-width: 950px) {
  .content-section {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 30px;
    padding: 45px 5%;
  }

  .form-section {
    padding: 25px;
  }

  .left-page-image {
    height: 250px;
  }

  .name-row {
    grid-template-columns: 1fr;
  }
}

/* Mobile */
@media (max-width: 680px) {
  .header-section {
    flex-direction: column;
    padding: 20px;
    gap: 18px;
  }

  .brand {
    font-size: 20px;
  }

  .content-section {
    grid-template-columns: minmax(0, 1fr);
    padding: 35px 18px;
    gap: 30px;
  }

  .left-page h1 {
    font-size: 36px;
  }

  .left-page-image {
    height: 250px;
  }

  .form-section {
    padding: 25px 20px;
    border-radius: 15px;
  }

  .form-heading h2 {
    font-size: 25px;
  }

  .name-row {
    grid-template-columns: 1fr;
  }

  .footer-section {
    padding: 20px 15px;
  }
}
</style>
