
<template>
  <div class="welcome-page">
       

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
    <main class="hero-section">

      <!-- Left side: Welcome message -->
      <section class="hero-content">
        <p class="welcome-label">
          YOUR FUTURE STARTS HERE
        </p>

        <h1>
          You Are One Step Closer to
          <span>Your Dream Job!</span>
        </h1>

        <p class="hero-description">
          Your talent deserves an opportunity. Take the next step
          in your career journey with confidence. Let us help you
          prepare, apply, and move closer to the future you deserve.
        </p>

        <div class="hero-buttons">
          <router-link to="/signup" class="primary-button">
            Get Started
            <span>→</span>
          </router-link>

          <router-link to="/login" class="secondary-button">
            Sign In
          </router-link>
        </div>

        <p class="encouragement">
          Keep learning. Keep growing. Keep believing in yourself.
        </p>
      </section>

      <!-- Right side: Image -->
      <section class="hero-image-section">
        <div class="image-decoration"></div>

        <img
          src="/images/graduation.png"
          alt="Graduate celebrating academic achievement and career success"
          class="hero-image"
        />

        <div class="floating-message">
          <span class="success-icon">✓</span>
          <div>
            <strong>Your next chapter begins here</strong>
            <p>Believe in your potential.</p>
          </div>
        </div>
      </section>

    </main>

    <!-- Benefits section -->
    <section class="benefits-section">
      <div class="section-heading">
        <p class="welcome-label">YOUR CAREER, YOUR FUTURE</p>
        <h2>What Are You Waiting For?</h2>
        <p>
          Every great career begins with a single step.
          Make yours count.
        </p>
      </div>

      <div class="benefit-cards">

        <article class="benefit-card">
          <div class="benefit-icon">📄</div>
          <h3>Prepare Your CV</h3>
          <p>
            Present your skills, qualifications, and experience
            in a professional way.
          </p>
        </article>

        <article class="benefit-card">
          <div class="benefit-icon">🎯</div>
          <h3>Discover Opportunities</h3>
          <p>
            Take a proactive step towards finding opportunities
            that match your career goals.
          </p>
        </article>

        <article class="benefit-card">
          <div class="benefit-icon">🚀</div>
          <h3>Build Your Future</h3>
          <p>
            Keep developing your skills and move forward
            with confidence and determination.
          </p>
        </article>

      </div>
    </section>

    <!-- Final call to action -->
    <section class="closing-section">
      <h2>Your Dream Job Could Be Your Next Opportunity.</h2>
      <p>
        Take action today. Your journey towards a brighter
        professional future starts now.
      </p>

      <router-link to="/signup" class="closing-button">
        Create Your Account →
      </router-link>
    </section>

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
/* General page styling */
.welcome-page {
  min-height: 100vh;
  background: #f8f7fc;
  color: #25213b;
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
  font-size: 23px;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: 1px;
}

.brand span {
  color: #d6b8ff;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 28px;
}

.navigation a {
  color: white;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s ease;
}

.navigation a:hover {
  color: #d6b8ff;
}

.navigation .nav-button {
  background: #ffffff;
  color: #49346f;
  padding: 12px 22px;
  border-radius: 8px;
  font-weight: bold;
}

.navigation .nav-button:hover {
  background: #e9ddff;
  color: #332653;
}

/* Main hero section */
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 55px;
  padding: 75px 8% 85px;
  background: linear-gradient(135deg, #f8f7fc, #eee7fb);
  overflow: hidden;
}

.hero-content {
  max-width: 590px;
}

.welcome-label {
  color: #7650b4;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 18px;
}

.hero-content h1 {
  font-size: clamp(36px, 4vw, 57px);
  line-height: 1.15;
  letter-spacing: -1.5px;
  margin: 0 0 24px;
  color: #2d2445;
}

.hero-content h1 span {
  display: block;
  color: #7952bd;
}

.hero-description {
  font-size: 17px;
  line-height: 1.9;
  color: #666174;
  margin-bottom: 30px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.primary-button,
.secondary-button,
.closing-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 15px 25px;
  border-radius: 9px;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  transition: transform 0.25s ease,
              background 0.25s ease;
}

.primary-button {
  color: white;
  background: #7650b4;
  box-shadow: 0 8px 20px #7650b433;
}

.primary-button:hover {
  background: #5d3a98;
  transform: translateY(-3px);
}

.secondary-button {
  color: #49346f;
  border: 1px solid #b9a5d9;
  background: white;
}

.secondary-button:hover {
  background: #f0e8ff;
  transform: translateY(-3px);
}

.encouragement {
  margin-top: 28px;
  color: #6d627e;
  font-size: 14px;
  font-style: italic;
  line-height: 1.7;
}

/* Image section */
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
  max-width: 480px;
  height: 430px;
  object-fit: contain;
  border: none;
  border-radius: 0;
}

.floating-message {
  position: absolute;
  z-index: 2;
  bottom: 25px;
  left: -5px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 12px 35px #2920441c;
}

.success-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #e5f7ec;
  color: #16834b;
  font-weight: bold;
  font-size: 20px;
  flex-shrink: 0;
}

.floating-message strong {
  display: block;
  font-size: 13px;
  color: #332653;
}

.floating-message p {
  margin: 5px 0 0;
  font-size: 12px;
  color: #777083;
}

/* Benefits section */
.benefits-section {
  padding: 70px 8%;
  background: white;
}

.section-heading {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 40px;
}

.section-heading h2 {
  font-size: 32px;
  margin: 0 0 14px;
  color: #302448;
}

.section-heading > p:last-child {
  color: #746d80;
  line-height: 1.8;
}

.benefit-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
}

.benefit-card {
  padding: 30px 25px;
  border: 1px solid #eee7f7;
  border-radius: 14px;
  background: #fcfbff;
  transition: transform 0.3s ease,
              box-shadow 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px #33265312;
}

.benefit-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: #eee5ff;
  border-radius: 12px;
  font-size: 27px;
  margin-bottom: 20px;
}

.benefit-card h3 {
  color: #392a57;
  font-size: 19px;
  margin-bottom: 12px;
}

.benefit-card p {
  color: #756d83;
  font-size: 14px;
  line-height: 1.9;
  margin-bottom: 0;
}

/* Final call to action */
.closing-section {
  padding: 65px 8%;
  text-align: center;
  background: #eee7fb;
}

.closing-section h2 {
  font-size: 30px;
  color: #302448;
  line-height: 1.4;
  margin: 0 0 15px;
}

.closing-section p {
  max-width: 650px;
  margin: 0 auto 25px;
  color: #6e657d;
  line-height: 1.8;
}

.closing-button {
  background: #7650b4;
  color: white;
}

.closing-button:hover {
  background: #5d3a98;
  transform: translateY(-3px);
}

/* Footer */
.footer-section {
  padding: 25px 7%;
  text-align: center;
  background: #332653;
  color: #eee7fb;
}

.footer-section p {
  font-size: 13px;
  line-height: 1.8;
  margin: 5px 0;
}

/* Responsive layout for tablets and phones */
@media (max-width: 850px) {
  .header-section {
    padding: 20px 5%;
  }

  .brand {
    font-size: 19px;
  }

  .navigation {
    gap: 15px;
  }

  .hero-section {
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 55px 7%;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-image-section {
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
  }

  .hero-image {
    height: 350px;
  }

  .floating-message {
    left: 0;
    bottom: 15px;
  }

  .benefit-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .header-section {
    flex-direction: column;
    gap: 18px;
  }

  .navigation {
    gap: 18px;
  }

  .navigation a {
    font-size: 13px;
  }

  .navigation .nav-button {
    padding: 10px 14px;
  }

  .hero-section {
    padding: 45px 6%;
  }

  .hero-content h1 {
    font-size: 36px;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-buttons {
    align-items: stretch;
  }

  .primary-button,
  .secondary-button {
    padding: 14px 18px;
  }

  .hero-image {
    height: 280px;
  }

  .floating-message {
    padding: 12px;
  }

  .floating-message strong {
    font-size: 11px;
  }

  .section-heading h2,
  .closing-section h2 {
    font-size: 25px;
  }

  .benefits-section {
    padding: 50px 6%;
  }

  .closing-section {
    padding: 50px 6%;
  }
}
</style>
