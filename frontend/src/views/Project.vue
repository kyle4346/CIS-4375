<template>
  <div class="Project">
    <WBS :filterPosts="filterPosts" :search="search" :posts="posts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WBS from "../components/WBS.vue";
import db from "../../db.json";

export default {
  name: "Project",
  components: {
    WBS,
  },
  data() {
    return {
      posts: db,
    };
  },
  methods: {
    filterPosts(phaseName) {
      this.resetPosts();
      if (phaseName !== "All") {
        this.posts = this.posts.filter((post) => {
          return post.Phase === phaseName;
        });
      }
    },
    search(term) {
      this.resetPosts();
      this.posts = this.posts.filter((post) => {
        return post.Category.toLowerCase().includes(term.toLowerCase());
      });
    },
    resetPosts() {
      this.posts = db;
    },
  },
};
</script>
