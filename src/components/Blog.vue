<template>
    <div id="content">
      <div class="row_6">
        <div class="container">
          <div class="row blogpage">
            <!-- Main Blog Content -->
            <div class="col-lg-8 col-md-8 col-sm-8">
              <h2 class="padbot4">Blog</h2>
              <ul class="list-blog">
                <li v-for="(post, index) in blogPosts" :key="index" class="clearfix">
                  <div class="date clearfix">
                    <div class="extra-wrap">
                      <h3><a :href="post.link">{{ post.title }}</a></h3>
                      <h5 class="pull-left text-info2">
                        {{ post.date }} <span>Category: {{ post.category }}</span>
                        <span>Written by: <a href="#" class="btn-link4">Admin</a></span>
                        <span>Hits: {{ post.hits }}</span>
                      </h5>
                      <h5 class="pull-right text-info2">
                        <a href="#" class="btn-link4 mright1">
                          <img :src="post.commentIcon" alt="" />
                          {{ post.comments }} Comment(s)
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div class="clearfix">
                    <figure><img :src="post.image" alt="" /></figure>
                    <div class="blogcont">
                      <p>{{ post.description }}</p>
                      <a :href="post.link" class="btn btn-primary btn1">More Info</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
  
            <!-- Sidebar -->
            <div class="col-lg-4 col-md-4 col-sm-4">
              <h2 class="padbot4">Categories</h2>
              <ul class="list3 categories">
                <li v-for="(category, index) in categories" :key="index">
                  <img :src="category.icon" alt="" /><a :href="category.link">{{ category.name }}</a>
                </li>
              </ul>
  
              <h2 class="pad_bot2">Archive</h2>
              <ul class="list3 archives">
                <li v-for="(archive, index) in archives" :key="index">
                  <img :src="archive.icon" alt="" /><a :href="archive.link">{{ archive.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Blog",
    data() {
      return {
        blogPosts: [
          {
            title: "Donec ante leo, bibendum luctus enim in.",
            date: "02.03.2013",
            category: "posuere",
            hits: 64,
            comments: 12,
            link: "#",
            image: "../../assets/img/page4_img1.jpg",
            commentIcon: "img/page4_icon1.png",
            description: "Donec ante leo, bibendum luctus enim in, euismod condimentum leo? Donec vitae sapien mi. Proin semper, lorem a egestas dictum, eros libero porta ante, nec ultrices massa est vitae lectus.",
          },
          {
            title: "Etiam non hendrerit nunc. Vivamus hend.",
            date: "02.03.2013",
            category: "posuere",
            hits: 64,
            comments: 16,
            link: "#",
            image: "../../assets/img/page4_img2.jpg",
            commentIcon: "img/page4_icon1.png",
            description: "Donec ante leo, bibendum luctus enim in, euismod condimentum leo? Donec vitae sapien mi. Proin semper, lorem a egestas dictum, eros libero porta ante, nec ultrices massa est vitae lectus.",
          },
          {
            title: "Vivamus hendrerit eget tortor non vest.",
            date: "02.03.2013",
            category: "posuere",
            hits: 64,
            comments: 18,
            link: "#",
            image: "../../assets/img/page4_img3.jpg",
            commentIcon: "img/page4_icon1.png",
            description: "Donec ante leo, bibendum luctus enim in, euismod condimentum leo? Donec vitae sapien mi. Proin semper, lorem a egestas dictum, eros libero porta ante, nec ultrices massa est vitae lectus.",
          },
        ],
        categories: [
          { name: "Aliquam viverra sem eros, eu consectetur", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "Sed auctor porta felis in imperdiet", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "Donec felis erat placerat ut cursus ve", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "Quisque sagittis sagittis nunc", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "Eu bibendum felis fringilla et", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "Nullam non tellus sit amet magna mattis", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "Sodales condimentum sed sapien", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "Duis ut enim dictum ultricies justo non", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "Proin pellentesque velit id odio", link: "#", icon: "../../assets/img/bullet2.png" },
        ],
        archives: [
          { name: "May 2013", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "April 2013", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "March 2013", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "February 2013", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "January 2013", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "December 2012", link: "#", icon: "../../assets/img/bullet2.png" },
          { name: "November 2012", link: "#", icon: "../../assets/img/bullet2.png" },
        ],
      };
    },
  };
  </script>
  
  