
<template>
  <div class="login-page">

    
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


    <!-- Main two-column section -->
    <main class="content-section">

      <!-- Left side: Welcome message -->
      <section class="left-page">

        <p class="welcome-label">WELCOME BACK</p>

        <h1>
          Your Dream Job Is
          <span>Worth Pursuing!</span>
        </h1>

        <p class="intro-text">
          Welcome back to DREAMJOB CONNECT.
          Sign in to continue your journey towards new
          opportunities and a brighter professional future.
        </p>

        <!-- Graduation image -->
        <div class="image-container">
          <img
            src="/images/graduation.png"
            alt="Graduate celebrating academic achievement and career success"
            class="left-page-image"
          />
        </div>

        <p class="motivation">
          Keep learning. Keep growing. Keep believing
          in yourself. Your next opportunity could be closer
          than you think.
        </p>

      </section>

      <!-- Right side: Login form -->
      <section class="form-section">

        <div class="form-heading">
          <div class="form-icon">✦</div>

          <h2>Welcome Back!</h2>

          <p>Enter your details to access your account.</p>
        </div>

        <form class="login-form" @submit.prevent="login">

          <!-- Email -->
          <label for="email">
            Email Address <span class="required">*</span>

            <input
              id="email"
              type="email"
              v-model.trim="email"
              placeholder="Enter your email address"
              autocomplete="email"
              required
            />
          </label>

          <!-- Password -->
          <label for="password">
            Password <span class="required">*</span>

            <div class="password-wrapper">
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="Enter your password"
                autocomplete="current-password"
                required
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
          </label>

          <!-- Forgot password -->
          <div class="form-options">
            <router-link to="/forgot-password">
              Forgot password?
            </router-link>
          </div>

          <!-- Error message -->
          <p v-if="errorMessage" class="error-message" role="alert">
            {{ errorMessage }}
          </p>

          <!-- Login button -->
          <button type="submit" class="submit-button">
            Sign In <span>→</span>
          </button>

          <!-- Sign up link -->
          <p class="signup-prompt">
            Don't have an account?
            <router-link to="/signup">
              Create an account
            </router-link>
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

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const errorMessage = ref('')

async function login() {
  errorMessage.value = ''

  try {
    const response = await axios.post(
      'http://localhost:8080/api/auth/login',
      {
        email: email.value,
        password: password.value
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
      'Login failed. Please check your details.'
  }
}

</script>


<style scoped>
/* Main page */
.login-page {
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
  align-items: center;
  gap: 25px;
}

.navigation a {
  color: white;
  text-decoration: none;
  font-size: 15px;
}

.navigation a:hover {
  color: #d6b8ff;
}

.navigation .nav-button {
  padding: 12px 22px;
  border-radius: 8px;
  background: white;
  color: #49346f;
  font-weight: bold;
}

.navigation .nav-button:hover {
  background: #e9ddff;
  color: #332653;
}

/* Main layout */
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
  margin: 25px 0;
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

/* Login card */
.form-section {
  min-width: 0;
  padding: 38px;
  background: white;
  border: 1px solid #eee7f7;
  border-radius: 20px;
  box-shadow: 0 18px 50px #33265312;
}

.form-heading {
  text-align: center;
  margin-bottom: 32px;
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
.login-form {
  display: flex;
  flex-direction: column;
  gap: 23px;
}

.login-form label {
  display: block;
  color: #403452;
  font-size: 14px;
  font-weight: 700;
}

.required {
  color: #d9485f;
}

.login-form input {
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 9px;
  padding: 15px;
  border: 1px solid #ded6eb;
  border-radius: 9px;
  background: #fcfbff;
  color: #302448;
  outline: none;
  font-family: inherit;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.login-form input:focus {
  border-color: #7952bd;
  box-shadow: 0 0 0 3px #7952bd1c;
}

.login-form input::placeholder {
  color: #aaa2b7;
}

/* Show/hide password */
.password-wrapper {
  position: relative;
}

.password-wrapper input {
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

/* Forgot password */
.form-options {
  display: flex;
  justify-content: flex-end;
  margin-top: -12px;
}

.form-options a {
  color: #7650b4;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
}

.form-options a:hover,
.signup-prompt a:hover {
  text-decoration: underline;
}

/* Error message */
.error-message {
  margin: -8px 0 0;
  color: #c62840;
  font-size: 13px;
  line-height: 1.7;
}

/* Sign-in button */
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

/* Sign-up prompt */
.signup-prompt {
  margin: 0;
  color: #746b82;
  text-align: center;
  font-size: 13px;
  line-height: 1.8;
}

.signup-prompt a {
  color: #7650b4;
  font-weight: bold;
  text-decoration: none;
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
    gap: 30px;
    padding: 45px 5%;
  }

  .form-section {
    padding: 25px;
  }

  .left-page-image {
    height: 250px;
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

  .footer-section {
    padding: 20px 15px;
  }
}
</style>
