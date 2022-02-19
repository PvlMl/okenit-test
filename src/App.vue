<template>
<notifications position="bottom right" width="500px"/>
  <router-view 
  :users="users"
  :posts="posts"
  :comments="comments"
  />
</template>

<script>
export default {
  data(){
    return {
      users: [],
      posts: [],
      comments: []
    }
  },
  mounted() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(r => r.json())
        .then(r => this.users = r);
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(r => r.json())
        .then(r => this.posts = r);
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(r => r.json())
        .then(r => this.comments = r);
  },
  watch:{
    $route (to){
        this.$notify('Current route: ' + to.fullPath)
    }
} 
}
</script>

<style>

</style>
