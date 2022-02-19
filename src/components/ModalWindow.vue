<template>
  <div v-if="isOpen" class="backdrop">
    <div class="popup">
      <h1>Add your comment</h1>
      <hr />
      <div style="display: flex">
        <h3>Title: &nbsp;</h3>
        <input type="text" v-model="title" />
      </div>
      <hr />
      <h3>Your comment: &nbsp;</h3>
      <textarea v-model="text" name="" cols="40" rows="10"></textarea>
      <div class="footer">
        <button @click="close">Cancel</button>
        &nbsp;
        <button @click="confirm">Ok</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    close() {
      this.$emit("closeWindow");
    },
    confirm() {
      if(!this.title || !this.text)
      return
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          body: this.text,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(response => response.json())
        .then(json =>
          this.$notify("Sent: {title:" + json.title + ", body: " + json.body + "}")
        );
      this.title = "",
       this.text = "";
      this.$emit("closeWindow");
    },
  },
};
</script>

<style scoped>
.popup {
  top: 50px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 101;
  background-color: white;
  border-radius: 10px;
}

.popup h1 {
  text-align: center;
  margin: 0;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

.footer {
  text-align: right;
}
</style>