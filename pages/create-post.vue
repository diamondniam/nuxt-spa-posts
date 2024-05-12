<template>
  <div class="wrapper create-post">
    <div class="title">New Post</div>
    <div v-show="error !== ''" class="error">{{ error }}</div>
    <div class="input-title">
      <div class="title">Title:</div>
      <input v-model="title" @input="error = ''" type="text" placeholder="Title">
    </div>
    <div class="input-text">
      <div class="title">Text:</div>
      <textarea v-model="text" @input="error = ''" placeholder="Type text..."></textarea>
    </div>
    <button @click="pushPosts()">Submit</button>
  </div>
</template>

<script lang="ts">
const { posts, getLength, addPost } = useStore()

export default defineComponent({
  data() {
    return {
      title: '', text: '', error: ''
    }
  },
  computed: {
    currentId():number {
      return getLength() + 1
    }
  },
  methods: {
    pushPosts() {
      if (this.text.length > 0 || this.text.length > 0) { 
        addPost({ id: this.currentId, title: this.title, content: this.text, file: `content/posts/${this.currentId}.md`, image: `_nuxt/assets/images/1.svg`})
        this.text = ''
        this.title = ''
      } else {
        this.error = '! Inputs must be filled...'
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.create-post {
  width: 100%;

  .title {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .error {
    color: rgb(239, 59, 59);
  }
  
  .input-text, .input-title {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .title {
      font-size: 20px;
      font-weight: 600;
      text-transform: none;
    }

    textarea {
      height: 100px;
    }
  }
}
</style>