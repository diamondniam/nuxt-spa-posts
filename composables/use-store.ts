import { postsStore } from '#imports';
import { storeToRefs } from 'pinia';

export const useStore = () => {
  const pinia = usePinia()
  const store = postsStore(pinia)

  const { posts } = storeToRefs(store)
  const { addPost, getLength } = store

  return {
    posts,
    addPost,
    getLength
  }
}