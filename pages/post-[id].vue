<template>
  <div class="wrapper card">
    <div class="title">{{ currentTitle }}</div>
    <img height="200px" :src="currentImage" alt="">
    <div class="text">
      <p v-for="i in 5" :key="i">{{ currentPost?.content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import type { Post } from '~/content/post.type'
const { posts } = useStore()

export default defineComponent({
  props: ['post'],
  computed: {
    currentId(): number {
      return Number(this.$route.params.id)
    },
    currentPost(): Post | undefined {
      return posts.value.find((post: Post) => post.id === this.currentId)
    },
    currentTitle(): string {
      return String(this.currentPost?.title)
    },
    currentImage(): string {
      return String(this.currentPost?.image)
    }
  }
})
</script>

<style lang="scss" scoped>
.title {
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>