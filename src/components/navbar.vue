<template>
  <nav class="navbar-navbar" v-bind:class="rootClassName">
    <router-link to="/" class="navbar-navlink">
      <img :alt="image_alt2" :src="image_src2" class="navbar-branding-logo" />
    </router-link>
    <div class="navbar-nav-content">
      <div class="navbar-nav-links"><span class="nav-link">Contact Us</span></div>
      <router-link to="/downloads" class="navbar-navlink1">
        <div class="navbar-get-started get-started">
          <span class="navbar-text">Get the Extension</span>
        </div>
      </router-link>
    </div>
    <div>
      <DangerousHTML
        html="<script>
      /*
  Mobile menu - Code Embed
  */
  
  /* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
  the mobile menu will still work*/
  
  const listenForUrlChangesMobileMenu = () => {
      let url = location.href;
      document.body.addEventListener('click', () => {
          requestAnimationFrame(() => {
              if (url !== location.href) {
                  runMobileMenuCodeEmbed();
                  url = location.href;
              }
          });
      },
      true
      );
  };
  
  const runMobileMenuCodeEmbed = () => {
      // Mobile menu
      const mobileMenu = document.querySelector('#mobile-menu')
  
      // Buttons
      const closeButton = document.querySelector('#close-mobile-menu')
      const openButton = document.querySelector('#open-mobile-menu')
  
      // On openButton click, set the mobileMenu position left to -100vw
      openButton && openButton.addEventListener('click', function() {
          mobileMenu.style.transform = 'translateX(0%)'
      })
  
      // On closeButton click, set the mobileMenu position to 0vw
      closeButton && closeButton.addEventListener('click', function() {
          mobileMenu.style.transform = 'translateX(100%)'
      })
  }
  
  runMobileMenuCodeEmbed()
  listenForUrlChangesMobileMenu()
  </script>"
      ></DangerousHTML>
    </div>
  </nav>
</template>

<script>
import DangerousHTML from 'dangerous-html/dist/vue/lib.mjs'

export default {
  name: 'Navbar',
  props: {
    image_src2: {
      type: String,
      default: '/playground_assets/zservicesw-200h.png',
    },
    image_alt2: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
  },
  components: {
    DangerousHTML,
  },
}
</script>

<style scoped>
.navbar-navbar {
  width: 100%;
  display: flex;
  z-index: 1000;
  position: relative;
  max-width: 1200px;
  align-self: auto;
  align-items: center;
  flex-shrink: 1;
  padding-top: var(--dl-space-space-twounits);
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  padding-bottom: var(--dl-space-space-fiveunits);
}
.navbar-navlink {
  display: contents;
}
.navbar-branding-logo {
  width: 158px;
  height: 33px;
  object-fit: cover;
  text-decoration: none;
}
.navbar-nav-content {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: center;
  margin-left: auto;
  flex-direction: row;
  justify-content: flex-start;
}
.navbar-nav-links {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  border-color: transparent;
}
.navbar-navlink1 {
  display: contents;
}
.navbar-get-started {
  text-decoration: none;
}
.navbar-text {
  color: rgb(255, 255, 255);
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Poppins;
  font-weight: 500;
  font-stretch: normal;
  text-decoration: none;
}


@media(max-width: 767px) {
  .navbar-navbar {
    padding-bottom: var(--dl-space-space-fourunits);
  }
  .navbar-nav-links {
    display: none;
  }
}
@media(max-width: 479px) {
  .navbar-nav-links {
    display: none;
  }
  .navbar-get-started {
    display: flex;
  }
}
</style>
