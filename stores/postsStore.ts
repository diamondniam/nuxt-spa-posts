import type { Post } from "~/content/post.type"
import posts from "~/content/posts"

export const postsStore = defineStore(('postsStore'), {
  state: () => ({ posts: posts }),
  actions: {
    addPost(data: Post) {
      this.posts.push(data)
    },
    getLength(): number {
      return this.posts.length
    }
  }
})