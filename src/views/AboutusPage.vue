
<template>
  <div class="about-page">

    
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


    <!-- Hero section -->
    <main>

      <section class="hero-section">

        <div class="hero-content">
          <p class="welcome-label">GET TO KNOW US</p>

          <h1>
            Empowering Your Journey
            <span>Towards Career Success</span>
          </h1>

          <p class="hero-description">
            At DREAMJOB CONNECT, we believe that every individual
            has potential worth discovering. Our goal is to help
            job seekers take confident steps towards their
            professional ambitions.
          </p>

          <router-link to="/signup" class="primary-button">
            Start Your Journey <span>→</span>
          </router-link>
        </div>

        <div class="hero-image-section">
          <div class="image-decoration"></div>

          <img
            src="/images/graduation.png"
            alt="Graduate celebrating an academic achievement"
            class="hero-image"
          />

          <div class="floating-message">
            <span class="success-icon">✓</span>
            <div>
              <strong>Your future matters</strong>
              <p>Take the next step today.</p>
            </div>
          </div>
        </div>

      </section>

      <!-- Who we are -->
      <section class="who-we-are section-container">

        <div class="section-heading">
          <p class="welcome-label">WHO WE ARE</p>
          <h2>Welcome to DREAMJOB CONNECT</h2>
        </div>

        <p class="about-description">
          DREAMJOB CONNECT is a career-focused platform designed
          to encourage and support people as they pursue employment
          opportunities. We recognise that finding a job can be
          challenging, and we believe that preparation, perseverance,
          and access to useful resources can make a difference.

          Our platform aims to help job seekers take practical steps
          towards presenting their qualifications, developing their
          skills, and pursuing opportunities that align with their
          career goals.
        </p>

      </section>

      <!-- Mission and vision -->
      <section class="purpose-section">

        <div class="purpose-grid">

          <article class="purpose-card">
            <div class="purpose-icon">🎯</div>

            <h2>Our Mission</h2>

            <p>
              To empower job seekers by encouraging professional
              development, supporting effective job application
              preparation, and helping individuals pursue
              meaningful employment opportunities.
            </p>
          </article>

          <article class="purpose-card">
            <div class="purpose-icon">🌟</div>

            <h2>Our Vision</h2>

            <p>
              To become a trusted platform that inspires confidence,
              promotes continuous learning, and encourages people
              to pursue a brighter and more rewarding professional future.
            </p>
          </article>

          <article class="purpose-card">
            <div class="purpose-icon">🤝</div>

            <h2>Our Commitment</h2>

            <p>
              To provide an encouraging experience that values
              individual potential, promotes responsible career
              development, and motivates job seekers to keep moving
              forward.
            </p>
          </article>

        </div>

      </section>

      <!-- Core values -->
      <section class="values-section section-container">

        <div class="section-heading">
          <p class="welcome-label">WHAT GUIDES US</p>
          <h2>Our Core Values</h2>
          <p>
            The principles that inspire our approach to career support.
          </p>
        </div>

        <div class="values-grid">

          <article class="value-card">
            <div class="value-icon">💡</div>
            <h3>Growth</h3>
            <p>
              We encourage continuous learning, skill development,
              and personal improvement.
            </p>
          </article>

          <article class="value-card">
            <div class="value-icon">💜</div>
            <h3>Integrity</h3>
            <p>
              We value honesty, respect, and responsible
              communication throughout the job-seeking journey.
            </p>
          </article>

          <article class="value-card">
            <div class="value-icon">🚀</div>
            <h3>Empowerment</h3>
            <p>
              We encourage people to recognise their strengths
              and take action towards their goals.
            </p>
          </article>

          <article class="value-card">
            <div class="value-icon">🌱</div>
            <h3>Perseverance</h3>
            <p>
              We believe that resilience and determination are
              important when navigating career challenges.
            </p>
          </article>

        </div>

      </section>

      <!-- How we help -->
      <section class="how-we-help">

        <div class="section-heading">
          <p class="welcome-label">YOUR CAREER JOURNEY</p>
          <h2>How We Encourage Your Progress</h2>
          <p>
            Every great achievement starts with a decision to begin.
          </p>
        </div>

        <div class="steps-grid">

          <article class="step-card">
            <span class="step-number">01</span>
            <h3>Create Your Account</h3>
            <p>
              Get started by creating your account on our platform.
            </p>
          </article>

          <article class="step-card">
            <span class="step-number">02</span>
            <h3>Prepare Your Application</h3>
            <p>
              Organise your CV and present your qualifications,
              experience, and skills clearly.
            </p>
          </article>

          <article class="step-card">
            <span class="step-number">03</span>
            <h3>Move Forward</h3>
            <p>
              Continue learning, explore opportunities, and
              keep working towards your career ambitions.
            </p>
          </article>

        </div>

      </section>

      <!-- Final call to action -->
      <section class="closing-section">
        <p class="welcome-label">YOUR FUTURE STARTS HERE</p>

        <h2>Believe in Yourself. Take the Next Step.</h2>

        <p>
          Your skills matter. Your ambitions matter.
          Give yourself the opportunity to grow.
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
</script>

<style scoped>
/* Main page */
.about-page {
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
  padding: 70px 8%;
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
  margin-bottom: 30px;
  color: #6e657d;
  font-size: 16px;
  line-height: 1.9;
}

.primary-button,
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

.primary-button:hover,
.closing-button:hover {
  background: #5d3a98;
  transform: translateY(-3px);
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
  height: 390px;
  object-fit: contain;
  border: none;
}

.floating-message {
  position: absolute;
  z-index: 2;
  bottom: 20px;
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

/* Shared section styles */
.section-container {
  padding: 70px 8%;
}

.section-heading {
  max-width: 700px;
  margin: 0 auto 38px;
  text-align: center;
}

.section-heading h2 {
  margin: 0 0 15px;
  color: #302448;
  font-size: 32px;
  line-height: 1.4;
}

.section-heading > p:last-child {
  color: #746d80;
  font-size: 15px;
  line-height: 1.8;
}

/* Who we are */
.who-we-are {
  background: white;
}

.about-description {
  max-width: 900px;
  margin: 0 auto;
  color: #6e657d;
  font-size: 16px;
  line-height: 2;
  text-align: center;
}

/* Mission, vision and commitment */
.purpose-section {
  padding: 65px 8%;
  background: #f8f7fc;
}

.purpose-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
}

.purpose-card {
  padding: 30px 25px;
  border: 1px solid #eee7f7;
  border-radius: 15px;
  background: white;
  box-shadow: 0 8px 25px #33265308;
  transition: transform 0.25s, box-shadow 0.25s;
}

.purpose-card:hover,
.value-card:hover,
.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 30px #33265312;
}

.purpose-icon,
.value-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  margin-bottom: 20px;
  border-radius: 13px;
  background: #eee5ff;
  font-size: 26px;
}

.purpose-card h2 {
  margin: 0 0 14px;
  color: #392a57;
  font-size: 21px;
}

.purpose-card p,
.value-card p,
.step-card p {
  margin: 0;
  color: #756d83;
  font-size: 14px;
  line-height: 1.9;
}

/* Values */
.values-section {
  background: white;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.value-card {
  padding: 25px 20px;
  border: 1px solid #eee7f7;
  border-radius: 14px;
  background: #fcfbff;
  transition: transform 0.25s, box-shadow 0.25s;
}

.value-card h3 {
  margin: 0 0 12px;
  color: #392a57;
  font-size: 18px;
}

/* Career steps */
.how-we-help {
  padding: 70px 8%;
  background: #f8f7fc;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
}

.step-card {
  padding: 28px;
  border: 1px solid #eee7f7;
  border-radius: 14px;
  background: white;
  transition: transform 0.25s, box-shadow 0.25s;
}

.step-number {
  display: inline-block;
  margin-bottom: 20px;
  color: #7952bd;
  font-size: 29px;
  font-weight: 800;
}

.step-card h3 {
  margin: 0 0 12px;
  color: #392a57;
  font-size: 18px;
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
  .hero-section {
    gap: 30px;
    padding: 50px 5%;
  }

  .hero-image {
    height: 310px;
  }

  .purpose-section,
  .section-container,
  .how-we-help {
    padding: 55px 5%;
  }

  .purpose-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .values-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .steps-grid {
    gap: 15px;
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

  .navigation {
    flex-wrap: wrap;
    justify-content: center;
    gap: 18px;
  }

  .navigation a {
    font-size: 13px;
  }

  .hero-section {
    grid-template-columns: minmax(0, 1fr);
    padding: 40px 6%;
    gap: 30px;
  }

  .hero-content h1 {
    font-size: 36px;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-image {
    height: 280px;
  }

  .floating-message {
    left: 0;
    bottom: 10px;
    padding: 12px;
  }

  .floating-message strong {
    font-size: 11px;
  }

  .purpose-grid,
  .values-grid,
  .steps-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .section-heading h2,
  .closing-section h2 {
    font-size: 26px;
  }

  .purpose-section,
  .section-container,
  .how-we-help,
  .closing-section {
    padding: 45px 6%;
  }

  .footer-section {
    padding: 20px 15px;
  }
}
</style>
