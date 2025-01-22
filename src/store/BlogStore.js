// src/stores/blogStore.js
import { defineStore } from "pinia";

export const useBlogStore = defineStore("Blog", {
  state: () => ({
    blogPosts: [
      {
        id: 1,
        title: "Donec ante leo, bibendum luctus enim in.",
        date: "02.03.2013",
        category: "posuere",
        likes: 0,
        comments: 12,
        link: "#",
        image: "../../assets/img/page4_img1.jpg",
        description: "Donec ante leo, bibendum luctus enim in, euismod condimentum leo? Donec vitae sapien mi.",
      },
      {
        id: 2,
        title: "Etiam non hendrerit nunc. Vivamus hend.",
        date: "02.03.2013",
        category: "posuere",
        likes: 0,
        comments: 16,
        link: "#",
        image: "../../assets/img/page4_img2.jpg",
        description: "Donec ante leo, bibendum luctus enim in, euismod condimentum leo? Donec vitae sapien mi.",
      },
      {
        id: 3,
        title: "Vivamus hendrerit eget tortor non vest.",
        date: "02.03.2013",
        category: "posuere",
        likes: 0,
        comments: 18,
        link: "#",
        image: "../../assets/img/page4_img3.jpg",
        description: "Donec ante leo, bibendum luctus enim in, euismod condimentum leo? Donec vitae sapien mi.",
      },
    ],
    categories: [
      { name: "Aliquam viverra sem eros, eu consectetur", link: "#", icon: "../../assets/img/bullet2.png" },
      { name: "Sed auctor porta felis in imperdiet", link: "#", icon: "../../assets/img/bullet2.png" },
    ],
    archives: [
      { name: "May 2013", link: "#", icon: "../../assets/img/bullet2.png" },
      { name: "April 2013", link: "#", icon: "../../assets/img/bullet2.png" },
    ],
  }),
  actions: {
    incrementLikes(postId) {
      const post = this.blogPosts.find((post) => post.id === postId);
      if (post) {
        post.likes += 1;
      }
    },
    addPost(newPost) {
        const id = this.blogPosts.length
          ? this.blogPosts[this.blogPosts.length - 1].id + 1
          : 1;
        this.blogPosts.push({ ...newPost, id, likes: 0 });
      },
      removePost(postId) {
        this.blogPosts = this.blogPosts.filter((post) => post.id !== postId);
      },
    },
  });