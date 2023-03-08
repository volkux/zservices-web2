<template>
  <div class="home-container">
    <app-navbar rootClassName="navbar-root-class-name"></app-navbar>
    <section class="home-section">
      <header class="home-header">
        <header class="home-left">
          <span class="section-head">
            <span>What is this</span>
            <br />
          </span>
          <h2 class="section-heading">
            <span>
              This extension allows you, the viewer, to get streamer points on
              select streamers.
            </span>
            <br />
          </h2>
        </header>
        <div class="home-right">
          <p class="home-paragraph section-description">
            It is easy to use once your favorite YouTuber signs up all you have to
            do is watch with the extension installed
          </p>
        </div>
      </header>
      <main class="home-cards">
        <app-card rootClassName="card-root-class-name"></app-card>
      </main>
    </section>
    <section class="home-section2">
      <div class="home-cube">
        <div class="home-top side"></div>
        <div class="home-front side"></div>
        <div class="home-left1 side"></div>
      </div>
      <div class="home-help">
        <span class="home-text04">
          <span>Need any help?</span>
          <br />
        </span>
        <div class="home-contact-support">
          <p class="home-text07">Contact support -&gt;</p>
        </div>
      </div>
    </section>
    <footer class="home-footer">
      <div class="home-content">
        <main class="home-main-content">
          <div class="home-content1">
            <header class="home-main">
              <div class="home-header1">
                <img
                  alt="image"
                  src="/playground_assets/zservicesw-200h.png"
                  class="home-branding"
                />
                <span class="home-text08">
                  ZServices brought to you by zshoopy and volkux.
                </span>
              </div>
            </header>
            <header class="home-categories"></header>
          </div>
          <section class="home-copyright">
            <span class="home-text09">
              © 2022 ZServices. All Rights Reserved.
            </span>
          </section>
        </main>
        <section class="home-copyright1">
          <span class="home-text10">© 2022 latitude. All Rights Reserved.</span>
        </section>
      </div>
    </footer>
  </div>
</template>

<script>
import AppNavbar from '../components/navbar'
import AppCard from '../components/card'

export default {
  name: 'Home',
  components: {
    AppNavbar,
    AppCard,
  },
  metaInfo: {
    title: 'zservices-web',
    meta: [
      {
        property: 'og:title',
        content: 'zservices-web',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
}
.home-section {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 120px;
  border-color: #51515A;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
  border-top-width: 1px;
}
.home-header {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-left {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-right {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-paragraph {
  width: 100%;
  max-width: 480px;
}
.home-cards {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-section2 {
  gap: var(--dl-space-space-threeunits);
  flex: 1;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: center;
}
.home-cube {
  right: -150px;
  width: 210px;
  bottom: -80px;
  height: 210px;
  margin: auto;
  display: flex;
  position: absolute;
  transform: rotateX(240deg) rotateY(50deg) rotateZ(-110deg);
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transform-style: preserve-3d;
}
.home-top {
  transform: translateZ(-210px);
  background-image: linear-gradient(270deg, rgb(253, 253, 253) 0.00%,rgb(178, 178, 178) 100.00%);
}
.home-front {
  transform: rotateX(90deg);
  background: grey;
  background-image: linear-gradient(90deg, rgb(247, 247, 247) 0.00%,rgb(203, 203, 203) 100.00%);
  transform-origin: bottom;
}
.home-left1 {
  width: 210px;
  transform: translateZ(-210px) rotateY(90deg);
  background-image: linear-gradient(90deg, rgb(247, 247, 247) 0.00%,rgb(203, 203, 203) 100.00%);
  transform-origin: right;
}
.home-help {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.home-text04 {
  color: #ffffff;
  font-family: Poppins;
  line-height: 24px;
}
.home-contact-support {
  gap: var(--dl-space-space-oneandhalfunits);
  cursor: pointer;
  display: flex;
  transition: 0.3s;
  align-items: center;
  border-color: #80FF44;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: center;
  border-bottom-width: 1px;
}
.home-contact-support:hover {
  opacity: 0.5;
}
.home-text07 {
  color: rgb(128, 255, 68);
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}
.home-footer {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 120px;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: center;
}
.home-content {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.home-main-content {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-content1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.home-main {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-header1 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.home-branding {
  width: 256px;
  height: 47px;
  object-fit: cover;
}
.home-text08 {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 14px;
  max-width: 260px;
  font-family: Poppins;
  line-height: 21px;
}
.home-categories {
  gap: var(--dl-space-space-fourunits);
  flex: 1;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.home-copyright {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text09 {
  color: rgb(196, 196, 196);
  width: 100%;
  font-size: 14px;
  font-family: Poppins;
  line-height: 21px;
}
.home-copyright1 {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text10 {
  color: #C4C4C4;
  width: 100%;
  font-size: 14px;
  font-family: Poppins;
  line-height: 21px;
}
@media(max-width: 991px) {
  .home-section {
    gap: var(--dl-space-space-threeunits);
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .home-header {
    gap: var(--dl-space-space-unit);
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .home-cards {
    gap: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
  }
  .home-content {
    gap: var(--dl-space-space-threeunits);
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .home-copyright {
    display: none;
  }
  .home-copyright1 {
    display: flex;
  }
}
@media(max-width: 767px) {
  .home-left {
    gap: var(--dl-space-space-unit);
  }
  .home-cube {
    right: -250px;
  }
  .home-help {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .home-content1 {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .home-main {
    gap: var(--dl-space-space-twounits);
  }
  .home-categories {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}
</style>
