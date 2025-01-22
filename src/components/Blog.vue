<template>
  <div id="content">
    <!-- Existing Blog Content -->
    <div class="row_6">
      <div class="container">
        <div class="row blogpage">
          <div class="col-lg-8 col-md-8 col-sm-8">
            <h2 class="padbot4">Blog</h2>
            <ul class="list-blog">
              <li v-for="(post, index) in blogPosts" :key="index" class="clearfix">
                <div class="date clearfix">
                  <div class="extra-wrap">
                    <h3><a :href="post.link">{{ post.title }}</a></h3>
                    <h5 class="pull-left text-info2">
                      {{ post.date }} <span>Category: {{ post.category }}</span>
                      <span>Likes: {{ post.likes }}</span>
                    </h5>
                    <button class="btn btn-success" @click="incrementLikes(post.id)">👍 Like</button>
                    <button class="btn btn-danger" color="error" @click="removePost(post.id)">Remove post</button>
                  </div>
                </div>
                <figure><img :src="post.image" alt="" /></figure>
                <div class="blogcont">
                  <p>{{ post.description }}</p>
                  <a :href="post.link" class="btn btn-primary btn1">More Info</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <h2>Add New Post</h2>
            <form @submit.prevent="addNewPost">
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" v-model="newPost.title" id="title" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="date">Date</label>
                <input type="date" v-model="newPost.date" id="date" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="category">Category</label>
                <input type="text" v-model="newPost.category" id="category" class="form-control" />
              </div>
              <div class="form-group">
                <label for="image">Image URL</label>
                <input type="text" v-model="newPost.image" id="image" class="form-control" />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="newPost.description" id="description" class="form-control"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Add Post</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
import { useBlogStore } from "../store/BlogStore";
import { computed } from "vue";
import { ref } from "vue";

export default {
  name: "Blog",
  setup() {
    const BlogStore = useBlogStore();
    const newPost = ref({
      title: "",
      date: "",
      category: "",
      image: "",
      description: "",
    });

    // Computed properties for state
    const blogPosts = computed(() => BlogStore.blogPosts);
    const categories = computed(() => BlogStore.categories);
    const archives = computed(() => BlogStore.archives);

    // Action for incrementing likes
    const incrementLikes = (postId) => {
      BlogStore.incrementLikes(postId);
    };
  
    
    const addNewPost = () => {
      if (newPost.value.title) {
        BlogStore.addPost(newPost.value);
        Object.keys(newPost.value).forEach((key) => (newPost.value[key] = ""));
      } else {
        alert("Title is required to add a new post.");
      }
    };
     // Method to remove post
     const removePost = (postId) => {
      BlogStore.removePost(postId);
    };

    return {
      blogPosts,
      categories,
      archives,
      incrementLikes,
      addNewPost,
      newPost,
      removePost,
    };
  },
};
</script>