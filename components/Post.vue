<template>
  <div class="wrapper0" >
    <div class="title">{{ post.content }}</div>
    <NuxtLink class="button" :to="pageUrl" :post="post">More</NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['post'],
  computed: {
    pageUrl() {
      return `/post-${this.post.id}`
    }
  }
})
</script>