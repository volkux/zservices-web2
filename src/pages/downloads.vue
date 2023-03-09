<template>
  <div class="downloads-container">
    <app-navbar rootClassName="navbar-root-class-name1"></app-navbar>
    <section class="downloads-section">
      <main class="downloads-content">
        <header class="downloads-header">
          <h2 class="downloads-heading section-heading">
            Download the crazy cool extension
          </h2>
          <div class="downloads-buttons">
            <div class="downloads-ios button">
              <img
                alt="image"
                src="/playground_assets/firefox-200h.png"
                class="downloads-icon"
              />
              <span class="downloads-text">Download for Firefox</span>
            </div>
            <div class="downloads-android button">
              <img
                alt="image"
                src="/playground_assets/chrome-200h.png"
                class="downloads-icon1"
              />
              <span class="downloads-text1">Download for Chrome</span>
            </div>
          </div>
        </header>
        <img
          alt="image"
          src="/playground_assets/screenshot%202023-01-23%201702191-1200w.png"
          class="downloads-image"
        />
      </main>
    </section>
    <footer class="downloads-footer">
      <div class="downloads-content1">
        <main class="downloads-main-content">
          <div class="downloads-content2">
            <header class="downloads-main">
              <div class="downloads-header1">
                <img
                  alt="image"
                  src="/playground_assets/zservicesw-200h.png"
                  class="downloads-branding"
                />
                <span class="downloads-text2">
                  ZServices brought to you by zshoopy and volkux.
                </span>
              </div>
            </header>
            <header class="downloads-categories"></header>
          </div>
          <section class="downloads-copyright">
            <span class="downloads-text3">
              © 2022 ZServices. All Rights Reserved.
            </span>
          </section>
        </main>
      </div>
    </footer>
    <div>
      <DangerousHTML
        html="<script>
      /*
  Accordion - Code Embed
  */
  
  /* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
  the Accordions will still work*/
  
  const listenForUrlChangesAccordion = () => {
        let url = location.href;
        document.body.addEventListener(
          'click',
          () => {
            requestAnimationFrame(() => {
              if (url !== location.href) {
                runAccordionCodeEmbed();
                url = location.href;
              }
            });
          },
          true
        );
      };
  
  
  const runAccordionCodeEmbed = () => {
      const accordionContainers = document.querySelectorAll('[data-role='accordion-container']'); // All accordion containers
      const accordionContents = document.querySelectorAll('[data-role='accordion-content']'); // All accordion content
      const accordionIcons = document.querySelectorAll('[data-role='accordion-icon']'); // All accordion icons
  
      accordionContents.forEach((accordionContent) => {
          accordionContent.style.display = 'none'; //Hides all accordion contents
      });
  
      accordionContainers.forEach((accordionContainer, index) => {
          accordionContainer.addEventListener('click', () => {
              accordionContents.forEach((accordionContent) => {
              accordionContent.style.display = 'none'; //Hides all accordion contents
              });
  
              accordionIcons.forEach((accordionIcon) => {
                  accordionIcon.style.transform = 'rotate(0deg)'; // Resets all icon transforms to 0deg (default)
              });
  
              accordionContents[index].style.display = 'flex'; // Shows accordion content
              accordionIcons[index].style.transform = 'rotate(180deg)'; // Rotates accordion icon 180deg
          });
      });
  }
  
  runAccordionCodeEmbed()
  listenForUrlChangesAccordion()
  
  /*
  Here's what the above is doing:
      1. Selects all accordion containers, contents, and icons
      2. Hides all accordion contents
      3. Adds an event listener to each accordion container
      4. When an accordion container is clicked, it:
          - Hides all accordion contents
          - Resets all icon transforms to 0deg (default)
          - Checks if this container has class 'accordion-open'
              - If it does, it removes class 'accordion-open'
              - If it doesn't, it:
                  - Removes class 'accordion-open' from all containers
                  - Adds class 'accordion-open' to this container
                  - Shows accordion content
                  - Rotates accordion icon 180deg
  */
  </script>"
      ></DangerousHTML>
    </div>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/dist/vue/lib.mjs'

import AppNavbar from '../components/navbar'

export default {
  name: 'Downloads',
  components: {
    AppNavbar,
    DangerousHTML,
  },
  metaInfo: {
    title: 'Downloads - zservices-web',
    meta: [
      {
        property: 'og:title',
        content: 'Downloads - zservices-web',
      },
    ],
  },
}
</script>

<style scoped>
.downloads-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
}
.downloads-section {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 120px;
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  justify-content: center;
  background-color: #292929;
}
.downloads-content {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 1200px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.downloads-header {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 120px;
  justify-content: flex-start;
}
.downloads-heading {
  text-align: left;
}
.downloads-buttons {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.downloads-ios {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  flex-direction: row;
  background-color: #0F0F0F;
}
.downloads-icon {
  width: var(--dl-size-size-small);
  object-fit: cover;
}
.downloads-text {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.downloads-android {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  flex-direction: row;
  background-color: #0F0F0F;
}
.downloads-icon1 {
  width: var(--dl-size-size-small);
  object-fit: cover;
}
.downloads-text1 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.downloads-image {
  right: 0px;
  width: 485px;
  bottom: 0px;
  height: 480px;
  position: absolute;
  object-fit: cover;
}
.downloads-footer {
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
.downloads-content1 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.downloads-main-content {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.downloads-content2 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.downloads-main {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.downloads-header1 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.downloads-branding {
  width: 256px;
  height: 47px;
  object-fit: cover;
}
.downloads-text2 {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 14px;
  max-width: 260px;
  font-family: Poppins;
  line-height: 21px;
}
.downloads-categories {
  gap: var(--dl-space-space-fourunits);
  flex: 1;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.downloads-copyright {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.downloads-text3 {
  color: rgb(196, 196, 196);
  width: 100%;
  font-size: 14px;
  font-family: Poppins;
  line-height: 21px;
}
.downloads-copyright1 {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.downloads-text4 {
  color: #C4C4C4;
  width: 100%;
  font-size: 14px;
  font-family: Poppins;
  line-height: 21px;
}
@media(max-width: 991px) {
  .downloads-content {
    align-items: center;
    flex-direction: column;
  }
  .downloads-buttons {
    width: 100%;
  }
  .downloads-ios {
    flex: 1;
    justify-content: center;
  }
  .downloads-android {
    flex: 1;
    justify-content: center;
  }
  .downloads-image {
    position: static;
  }
  .downloads-content1 {
    gap: var(--dl-space-space-threeunits);
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .downloads-copyright {
    display: none;
  }
  .downloads-copyright1 {
    display: flex;
  }
}
@media(max-width: 767px) {
  .downloads-section {
    padding-top: var(--dl-space-space-fourunits);
  }
  .downloads-header {
    padding-bottom: var(--dl-space-space-fiveunits);
  }
  .downloads-buttons {
    flex-direction: column;
  }
  .downloads-ios {
    flex: 0 0 auto;
    width: 100%;
  }
  .downloads-android {
    flex: 0 0 auto;
    width: 100%;
  }
  .downloads-content2 {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .downloads-main {
    gap: var(--dl-space-space-twounits);
  }
  .downloads-categories {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}
@media(max-width: 479px) {
  .downloads-image {
    width: 100%;
  }
}
</style>
