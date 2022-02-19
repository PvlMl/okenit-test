<template>
  <div>
    <select
      class="my_select"
      v-model="selectedUser"
      @change="getPostsOfOneUser(selectedUser)"
    >
      <option disabled>Выберите пользователя</option>
      <option :value="''">Все пользователи</option>
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>
    <template v-for="post in filteredPosts" :key="post.id">
      <router-link
        tag="div"
        :to="{ name: 'OnePost', params: {id: post.id} }"
        class="card mx-auto mt-5 w-50 border-2 border-success btn btn-light"
      >
        <div class="card-body">
          <h5 class="card-title">
            {{ post.title }}
          </h5>
          <p class="card-text">
            {{ post.body }}
          </p>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
  users: Array,
  posts: Array
  },
  data() {
    return {
      selectedUser: "",
      filteredPostsFromData: []
    };
  },
  computed: {
     filteredPosts(){
       return !this.selectedUser ? this.posts : this.filteredPostsFromData
     } 
},
  methods: {
    getPostsOfOneUser(id) {
      if (this.selectedUser) {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .then(r => r.json())
          .then(r => this.filteredPostsFromData = r);
      } else {
        this.filteredPostsFromData = this.posts;
      }
    },
  },
};
</script>
<style scoped>
.my_select {
  position: fixed;
  margin-left: 7%;
}
</style>


