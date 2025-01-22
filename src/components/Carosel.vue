<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div 
          v-for="(item, index) in slides" 
          :key="index" 
          class="carousel-item" 
          :class="{ active: index === 0 }"
        >
          <img :src="item.imgSrc" class="d-block w-100" :alt="item.alt">
          <div class="carousel-caption d-none d-md-block">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
      <button 
        class="carousel-control-prev" 
        type="button" 
        data-bs-target="#carouselExampleControls" 
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button 
        class="carousel-control-next" 
        type="button" 
        data-bs-target="#carouselExampleControls" 
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Carousel",
    data() {
      return {
        slides: [
          {
            imgSrc: "/assets/img/picture1.jpg",
            alt: "Welcome to SPU Nitra",
            title: "Welcome to SPU Nitra",
            description: "Discover the excitement of volleyball with our passionate team.",
          },
          {
            imgSrc: "/assets/img/picture2.jpg",
            alt: "Teamwork at Its Best",
            title: "Teamwork at Its Best",
            description: "Join us on our journey to excellence.",
          },
          {
            imgSrc: "/assets/img/picture3.jpg",
            alt: "Unleash Your Potential",
            title: "Unleash Your Potential",
            description: "Reach new heights with our dedicated team.",
          },
        ],
      };
    },
  };
  </script>
  
  <style>
  .carousel img {
    height: 500px; /* Adjust based on requirements */
    object-fit: cover;
  }
  
  .carousel-caption {
    background: rgba(0, 0, 0, 0.6); /* Semi-transparent black background */
    padding: 15px;
    border-radius: 8px;
  }
  
  .carousel-caption h2 {
    font-size: 2rem;
    color: #fff;
  }
  
  .carousel-caption p {
    font-size: 1.25rem;
    color: #ddd;
  }
  </style>
  
  
  

  