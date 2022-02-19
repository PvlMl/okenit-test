<template>

<modal-window
:isOpen="isWindowOpen"
@closeWindow="closeWindow"
 />
<h1 class="text-center mt-5" >{{userData.name}}</h1>
<div class="card w-50 mx-auto mt-5 border-danger border-3">
  <div class="card-body">
    <h5 class="card-title">{{post.title}}</h5>
    <p class="card-text">{{post.body}}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Username <h5>{{userData.username}}</h5></li>
    <li class="list-group-item">Email <h5>{{userData.email}}</h5></li>
    <li class="list-group-item">Website 
      <a :href="`http://${userData.website}`" target="_blank" class="card-link">
        {{userData.website}}</a></li>
  </ul>
  <div class="card-body">
    <p><span>Address: </span> 
    {{userData.address.street}},
    {{userData.address.suite}},
    {{userData.address.city}}
    </p>
    <p><span>Company: </span>
     {{userData.company.name}},
     {{userData.company.catchPhrase}}
     </p>
  </div>
</div>
<div>
<button class="my_btn"
@click="openWindow"
>Add Comment</button>
</div>
<comments-of-post
v-for="comment in commentsOfThisPost"
:key="comment.id"
:header="comment.name"
:text="comment.body"
:email="comment.email"
 />

</template>

<script>
import CommentsOfPost from '../components/CommentsOfPost'
import ModalWindow from '../components/ModalWindow'
export default {
  components: {
     CommentsOfPost,
     ModalWindow
   },
  props: {
    id: String,
    users: Array,
    posts: Array,
    comments: Array
  },
  data(){
    return{
      isWindowOpen: false
    }
  },
  computed: {
    post(){
    return this.posts.find(p => p.id == this.id);
    },
    userIdFromPostId(){
    return this.post.userId;
    },
    userData(){
    return this.users.find(u => u.id == this.userIdFromPostId);
    },
    // Здесь можно было бы сделать запрос к API с параметрами id и получить комменты только этого юзера,
    // но я решил сделать один запрос ко всем комментам и потом фильтровать их, т.к. все необходимые данные уже есть.
    commentsOfThisPost(){
      return this.comments.filter(c => c.postId == this.id)
    }
  },
  methods: {
    openWindow(){
      this.isWindowOpen = true;
    },
    closeWindow(){
      this.isWindowOpen = false;
    }
  }
  
}
</script>
<style>
.list-group-item{
 display: flex;
 justify-content: space-between;
}
span{
  font-weight: bold;
}
.my_btn {
position: fixed;
margin-left: 100px;
padding: 10px;
border-radius: 15px;
background-color:blue;
color:aliceblue;
}
</style>