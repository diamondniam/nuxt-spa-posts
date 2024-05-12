<template>
  <div class="wrapper posts">
    <Post v-for="post in posts" :key="post" :post="post"/>
  </div>
</template>

<script setup lang="ts">
const { posts } = useStore()
</script>

<style lang="scss" scoped>
.wrapper .posts {
  .post-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>