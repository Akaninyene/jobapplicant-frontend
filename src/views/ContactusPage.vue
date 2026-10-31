
<template>
  <div class="contact-page">

    
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


    <!-- Contact hero -->
    <main>

      <section class="hero-section">

        <div class="hero-content">
          <p class="welcome-label">WE WOULD LOVE TO HEAR FROM YOU</p>

          <h1>
            Let's Start a
            <span>Conversation!</span>
          </h1>

          <p class="hero-description">
            Have a question, suggestion, or need assistance with
            your career journey? We are here to help. Send us a
            message and take the next step towards your goals.
          </p>

          <div class="hero-note">
            <span class="note-icon">✦</span>
            <p>
              Every great opportunity begins with a conversation.
              Don't hesitate to get in touch.
            </p>
          </div>
        </div>

        <!-- Decorative image -->
        <div class="hero-image-section">
          <div class="image-decoration"></div>

          <img
            src="/images/graduation.png"
            alt="Graduate celebrating academic and career achievements"
            class="hero-image"
          />

          <div class="floating-message">
            <span class="success-icon">✓</span>
            <div>
              <strong>We're here to help</strong>
              <p>Your journey matters to us.</p>
            </div>
          </div>
        </div>

      </section>

      <!-- Contact section -->
      <section class="contact-section">

        <!-- Contact information -->
        <div class="contact-information">

          <p class="welcome-label">GET IN TOUCH</p>

          <h2>We'd Love to Hear From You</h2>

          <p class="information-description">
            Whether you have a question about our platform,
            need assistance, or want to share feedback,
            please use the contact form.
          </p>

          <div class="contact-cards">

            <article class="contact-card">
              <div class="contact-icon">✉</div>
              <div>
                <h3>Email Us</h3>
                <p>Send us your questions or enquiries.</p>
                <span class="contact-detail">
                  Use the message form
                </span>
              </div>
            </article>

            <article class="contact-card">
              <div class="contact-icon">💬</div>
              <div>
                <h3>General Enquiries</h3>
                <p>
                  Questions, suggestions, or feedback
                  about our platform.
                </p>
              </div>
            </article>

            <article class="contact-card">
              <div class="contact-icon">🎯</div>
              <div>
                <h3>Career Support</h3>
                <p>
                  Tell us how we can improve your experience
                  as a job seeker.
                </p>
              </div>
            </article>

          </div>

          <div class="encouragement-card">
            <h3>Your Voice Matters!</h3>
            <p>
              Your feedback can help us make DREAMJOB CONNECT
              more useful for people pursuing their career goals.
            </p>
          </div>

        </div>

        <!-- Contact form -->
        <div class="form-section">

          <div class="form-heading">
            <div class="form-icon">✉</div>
            <h2>Send Us a Message</h2>
            <p>Fill in the details below to get in touch.</p>
          </div>

          <form class="contact-form" @submit.prevent="submitMessage">

            <!-- Full name -->
            <label for="fullName">
              Full Name <span class="required">*</span>

              <input
                id="fullName"
                type="text"
                v-model.trim="fullName"
                placeholder="Enter your full name"
                maxlength="100"
                autocomplete="name"
                required
              />
            </label>

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

            <!-- Subject -->
            <label for="subject">
              Subject <span class="required">*</span>

              <select
                id="subject"
                v-model="subject"
                required
              >
                <option value="" disabled>Select a subject</option>
                <option value="General enquiry">General enquiry</option>
                <option value="Technical support">Technical support</option>
                <option value="CV and applications">CV and applications</option>
                <option value="Feedback or suggestion">Feedback or suggestion</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <!-- Message -->
            <label for="message">
              Your Message <span class="required">*</span>

              <textarea
                id="message"
                v-model.trim="message"
                placeholder="How can we help you?"
                rows="5"
                maxlength="2000"
                required
              ></textarea>
            </label>

            <p class="character-count">
              {{ message.length }} / 2000 characters
            </p>

            <!-- Feedback -->
            <p
              v-if="feedbackMessage"
              :class="['feedback-message', feedbackType]"
              role="status"
            >
              {{ feedbackMessage }}
            </p>

            <!-- Submit -->
            <button type="submit" class="submit-button">
              Send Message <span>→</span>
            </button>

            <p class="privacy-note">
              Please do not include passwords or other sensitive
              personal information in your message.
            </p>

          </form>

        </div>

      </section>

      <!-- Final call to action -->
      <section class="closing-section">
        <p class="welcome-label">YOUR FUTURE STARTS HERE</p>

        <h2>Keep Believing in Your Potential.</h2>

        <p>
          Keep learning, keep growing, and keep taking steps
          towards the career you deserve.
        </p>

        <router-link to="/signup" class="closing-button">
          Join Us Today →
        </router-link>
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

const fullName = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const feedbackMessage = ref('')
const feedbackType = ref('')

function submitMessage() {
  feedbackMessage.value = ''
  feedbackType.value = ''

  if (
    !fullName.value ||
    !email.value ||
    !subject.value ||
    !message.value
  ) {
    feedbackMessage.value = 'Please complete all required fields.'
    feedbackType.value = 'error'
    return
  }

  // The contact form is not connected to a backend yet.
  // Connect it to your Spring Boot API to send and store messages.
  feedbackMessage.value =
    'Your message has been validated, but it has not been sent yet. Please connect the contact API.'
  feedbackType.value = 'info'
}
</script>

<style scoped>
/* Main page */
.contact-page {
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
  white-space: nowrap;
}

.brand span {
  color: #d6b8ff;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 22px;
}

.navigation a {
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.navigation a:hover,
.navigation .active-link {
  color: #d6b8ff;
}

.navigation .nav-button {
  padding: 12px 20px;
  border-radius: 8px;
  background: white;
  color: #49346f;
  font-weight: bold;
}

.navigation .nav-button:hover {
  background: #e9ddff;
  color: #332653;
}

/* Hero */
.hero-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: 55px;
  padding: 65px 8%;
  background: linear-gradient(135deg, #f8f7fc, #eee7fb);
  overflow: hidden;
}

.hero-content {
  max-width: 600px;
}

.welcome-label {
  color: #7650b4;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0 0 18px;
}

.hero-content h1 {
  margin: 0 0 23px;
  font-size: clamp(35px, 4vw, 52px);
  line-height: 1.2;
  letter-spacing: -1px;
}

.hero-content h1 span {
  display: block;
  color: #7952bd;
}

.hero-description {
  margin-bottom: 25px;
  color: #6e657d;
  font-size: 16px;
  line-height: 1.9;
}

.hero-note {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 17px;
  border: 1px solid #e3d7f6;
  border-radius: 12px;
  background: #ffffffb8;
}

.note-icon {
  color: #7952bd;
  font-size: 23px;
}

.hero-note p {
  margin: 0;
  color: #625671;
  font-size: 14px;
  line-height: 1.8;
}

/* Hero image */
.hero-image-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  padding: 15px;
}

.image-decoration {
  position: absolute;
  width: 85%;
  height: 90%;
  background: #d9c9f5;
  border-radius: 45% 45% 25% 25%;
  transform: rotate(-5deg);
}

.hero-image {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  max-width: 460px;
  height: 370px;
  object-fit: contain;
  border: none;
}

.floating-message {
  position: absolute;
  z-index: 2;
  bottom: 15px;
  left: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 12px 35px #2920441c;
}

.success-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #e5f7ec;
  color: #16834b;
  font-size: 20px;
  font-weight: bold;
}

.floating-message strong {
  color: #332653;
  font-size: 13px;
}

.floating-message p {
  margin: 5px 0 0;
  color: #777083;
  font-size: 12px;
}

/* Contact layout */
.contact-section {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr);
  align-items: start;
  gap: 55px;
  padding: 75px 8%;
  background: white;
}

.contact-information,
.form-section {
  min-width: 0;
}

.contact-information h2 {
  margin: 0 0 17px;
  color: #302448;
  font-size: 32px;
  line-height: 1.35;
}

.information-description {
  margin-bottom: 30px;
  color: #756d83;
  font-size: 15px;
  line-height: 1.9;
}

/* Contact information cards */
.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-card {
  display: flex;
  align-items: flex-start;
  gap: 17px;
  padding: 20px;
  border: 1px solid #eee7f7;
  border-radius: 13px;
  background: #fcfbff;
  transition: transform 0.25s, box-shadow 0.25s;
}

.contact-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px #33265310;
}

.contact-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #eee5ff;
  font-size: 23px;
}

.contact-card h3 {
  margin: 0 0 7px;
  color: #392a57;
  font-size: 17px;
}

.contact-card p {
  margin: 0;
  color: #756d83;
  font-size: 13px;
  line-height: 1.8;
}

.contact-detail {
  display: inline-block;
  margin-top: 8px;
  color: #7650b4;
  font-size: 13px;
  font-weight: bold;
}

.encouragement-card {
  margin-top: 22px;
  padding: 22px;
  border-radius: 13px;
  background: #eee7fb;
}

.encouragement-card h3 {
  margin: 0 0 10px;
  color: #49346f;
  font-size: 18px;
}

.encouragement-card p {
  margin: 0;
  color: #6e657d;
  font-size: 14px;
  line-height: 1.8;
}

/* Contact form card */
.form-section {
  padding: 35px;
  border: 1px solid #eee7f7;
  border-radius: 20px;
  background: white;
  box-shadow: 0 18px 50px #33265312;
}

.form-heading {
  margin-bottom: 28px;
  text-align: center;
}

.form-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  margin: 0 auto 15px;
  border-radius: 15px;
  background: #eee5ff;
  color: #7650b4;
  font-size: 26px;
}

.form-heading h2 {
  margin: 0 0 10px;
  color: #332653;
  font-size: 27px;
}

.form-heading p {
  margin: 0;
  color: #81788d;
  font-size: 14px;
  line-height: 1.8;
}

/* Form fields */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form label {
  display: block;
  color: #403452;
  font-size: 14px;
  font-weight: 700;
}

.required {
  color: #d9485f;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 9px;
  padding: 14px;
  border: 1px solid #ded6eb;
  border-radius: 9px;
  outline: none;
  background: #fcfbff;
  color: #302448;
  font-family: inherit;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  border-color: #7952bd;
  box-shadow: 0 0 0 3px #7952bd1c;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #aaa2b7;
}

.contact-form textarea {
  resize: vertical;
  min-height: 130px;
  line-height: 1.7;
}

.character-count {
  margin: -14px 0 0;
  color: #81788d;
  text-align: right;
  font-size: 12px;
}

/* Feedback messages */
.feedback-message {
  margin: 0;
  padding: 12px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.7;
}

.feedback-message.error {
  background: #fff0f1;
  color: #b42336;
}

.feedback-message.info {
  background: #f0eaff;
  color: #49346f;
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

.privacy-note {
  margin: -5px 0 0;
  color: #81788d;
  font-size: 12px;
  line-height: 1.8;
  text-align: center;
}

/* Final call to action */
.closing-section {
  padding: 65px 8%;
  text-align: center;
  background: #eee7fb;
}

.closing-section h2 {
  margin: 0 0 15px;
  color: #302448;
  font-size: 31px;
  line-height: 1.4;
}

.closing-section > p:not(.welcome-label) {
  max-width: 650px;
  margin: 0 auto 25px;
  color: #6e657d;
  font-size: 15px;
  line-height: 1.9;
}

.closing-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 15px 24px;
  border-radius: 9px;
  background: #7650b4;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  transition: background 0.25s, transform 0.25s;
}

.closing-button:hover {
  background: #5d3a98;
  transform: translateY(-3px);
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
  .header-section {
    padding: 20px 5%;
  }

  .navigation {
    gap: 14px;
  }

  .navigation a {
    font-size: 13px;
  }

  .hero-section {
    gap: 30px;
    padding: 50px 5%;
  }

  .hero-image {
    height: 300px;
  }

  .contact-section {
    gap: 30px;
    padding: 55px 5%;
  }

  .form-section {
    padding: 25px;
  }
}

/* Mobile */
@media (max-width: 700px) {
  .header-section {
    flex-direction: column;
    gap: 18px;
    padding: 20px;
  }

  .brand {
    font-size: 20px;
  }

  .navigation {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  .navigation a {
    font-size: 12px;
  }

  .hero-section {
    grid-template-columns: minmax(0, 1fr);
    gap: 30px;
    padding: 40px 6%;
  }

  .hero-content h1 {
    font-size: 36px;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-image {
    height: 270px;
  }

  .floating-message {
    left: 0;
    bottom: 8px;
    padding: 12px;
  }

  .floating-message strong {
    font-size: 11px;
  }

  .contact-section {
    grid-template-columns: minmax(0, 1fr);
    gap: 35px;
    padding: 45px 6%;
  }

  .contact-information h2 {
    font-size: 28px;
  }

  .form-section {
    padding: 25px 20px;
    border-radius: 15px;
  }

  .form-heading h2 {
    font-size: 24px;
  }

  .closing-section {
    padding: 45px 6%;
  }

  .closing-section h2 {
    font-size: 26px;
  }

  .footer-section {
    padding: 20px 15px;
  }
}
</style>
