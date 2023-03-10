<template>
  <div class="contact-container">
    <app-navbar rootClassName="navbar-root-class-name2"></app-navbar>
    <section class="contact-section">
      <h1 class="contact-text">EMAIL ZSERVICE</h1>
      <main class="contact-content">
        <div class="contact-buttons">
          <a href="mailto:volkux@zservices.tech?subject=" class="contact-link">
            <div class="contact-ios button">
              <span class="contact-text1">Email volkux</span>
            </div>
          </a>
          <a href="mailto:zshoopy@zservices.tech?subject=" class="contact-link1">
            <div class="contact-android button">
              <span class="contact-text2">Email zshoopy</span>
            </div>
          </a>
        </div>
      </main>
    </section>
    <footer class="contact-footer">
      <div class="contact-content1">
        <main class="contact-main-content">
          <div class="contact-content2">
            <header class="contact-main">
              <div class="contact-header">
                <img
                  alt="image"
                  src="/playground_assets/zservicesw-200h.png"
                  class="contact-branding"
                />
                <span class="contact-text3">
                  ZServices brought to you by zshoopy and volkux.
                </span>
              </div>
            </header>
            <header class="contact-categories"></header>
          </div>
          <section class="contact-copyright">
            <span class="contact-text4">
              © 2022 ZServices. All Rights Reserved.
            </span>
          </section>
        </main>
        <section class="contact-copyright1">
          <span class="contact-text5">© 2022 ZServices. All Rights Reserved.</span>
        </section>
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
  name: 'Contact',
  components: {
    AppNavbar,
    DangerousHTML,
  },
  metaInfo: {
    title: 'Contact - zservices-web',
    meta: [
      {
        property: 'og:title',
        content: 'Contact - zservices-web',
      },
    ],
  },
}
</script>

<style scoped>
.contact-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  background-color: #0F0F0F;
}
.contact-section {
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
.contact-text {
  color: #ffffff;
  font-size: 3em;
}
.contact-content {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 1200px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.contact-buttons {
  gap: var(--dl-space-space-unit);
  width: 1290px;
  height: 89px;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: center;
}
.contact-link {
  display: contents;
}
.contact-ios {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  flex-direction: row;
  text-decoration: none;
  background-color: #0F0F0F;
}
.contact-text1 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.contact-link1 {
  display: contents;
}
.contact-android {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  flex-direction: row;
  text-decoration: none;
  background-color: #0F0F0F;
}
.contact-text2 {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  line-height: 24px;
}
.contact-footer {
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
.contact-content1 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.contact-main-content {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.contact-content2 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.contact-main {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.contact-header {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.contact-branding {
  width: 256px;
  height: 47px;
  object-fit: cover;
}
.contact-text3 {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 14px;
  max-width: 260px;
  font-family: Poppins;
  line-height: 21px;
}
.contact-categories {
  gap: var(--dl-space-space-fourunits);
  flex: 1;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.contact-copyright {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.contact-text4 {
  color: rgb(196, 196, 196);
  width: 100%;
  font-size: 14px;
  font-family: Poppins;
  line-height: 21px;
}
.contact-copyright1 {
  gap: var(--dl-space-space-fiveunits);
  flex: 1;
  width: 100%;
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.contact-text5 {
  color: #C4C4C4;
  width: 100%;
  font-size: 14px;
  font-family: Poppins;
  line-height: 21px;
}
@media(max-width: 991px) {
  .contact-content {
    align-items: center;
    flex-direction: column;
  }
  .contact-buttons {
    width: 100%;
  }
  .contact-ios {
    flex: 1;
    justify-content: center;
  }
  .contact-android {
    flex: 1;
    justify-content: center;
  }
  .contact-content1 {
    gap: var(--dl-space-space-threeunits);
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }
  .contact-copyright {
    display: none;
  }
  .contact-copyright1 {
    display: flex;
  }
}
@media(max-width: 767px) {
  .contact-section {
    padding-top: var(--dl-space-space-fourunits);
  }
  .contact-buttons {
    flex-direction: column;
  }
  .contact-ios {
    flex: 0 0 auto;
    width: 100%;
  }
  .contact-android {
    flex: 0 0 auto;
    width: 100%;
  }
  .contact-content2 {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .contact-main {
    gap: var(--dl-space-space-twounits);
  }
  .contact-categories {
    gap: var(--dl-space-space-twounits);
    flex-direction: column;
  }
}
</style>
