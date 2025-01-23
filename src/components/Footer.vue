<template>
    <footer>
    <div class="container">
      <div class="footerrow">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="pull-right">
              <ul class="social_icons clearfix">
                <!-- Dynamically render social media icons -->
                <li v-for="(icon, index) in socialIcons" :key="index">
                  <a :href="icon.link" target="_blank" rel="noopener noreferrer">
                    <img :src="icon.src" :alt="icon.alt" />
                  </a>
                </li>
              </ul>
            </div>
            <p class="footerpriv">
              <strong>{{ copyrightText }}</strong>
              &copy; {{ year }}
              <img :src="separatorImage" alt="" />
              <router-link class="privacylink" :to="privacyPolicyLink">Privacy Policy</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent", // Component name
    data() {
      return {
        socialIcons: [
          {
            src: "/assets/img/follow_icon1.png", // Use the path starting from the root
            alt: "Social Media 1",
            link: "#", // Add actual social media links here
          },
          {
            src: "/assets/img/follow_icon2.png",
            alt: "Social Media 2",
            link: "#",
          },
          {
            src: "/assets/img/follow_icon3.png",
            alt: "Social Media 3",
            link: "#",
          },
          {
            src: "/assets/img/follow_icon4.png",
            alt: "Social Media 4",
            link: "#",
          },
        ],
        copyrightText: "VK SPU Nitra", // Customizable copyright text
        year: new Date().getFullYear(), // Dynamically displays the current year
        separatorImage: "/assets/img/imgline2.jpg", // Use the path starting from the root
        privacyPolicyLink: "/privacypolicy", // Update with actual privacy policy URL
      };
    },
  };
  </script>
  
  