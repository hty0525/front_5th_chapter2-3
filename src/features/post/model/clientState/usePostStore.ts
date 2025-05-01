import { create } from "zustand"
import { Post } from "../../../../entities/post/model/apis"

type PostsState = {
  total: number
  selectedPost: Post | null
  showAddPostDialog: boolean
  showEditDialog: boolean
  showPostDetailDialog: boolean
}

type PostsAction = {
  setTotal: (total: number) => void
  setSelectedPost: (post: Post | null) => void
  setShowAddPostDialog: (show: boolean) => void
  setShowEditPostDialog: (show: boolean) => void
  setShowPostDetailDialog: (show: boolean) => void
}

export const usePostStore = create<PostsState & PostsAction>((set) => ({
  total: 0,
  selectedPost: null,
  showAddPostDialog: false,
  showEditDialog: false,
  showPostDetailDialog: false,

  setTotal: (total) => set({ total }),
  setSelectedPost: (post) => set({ selectedPost: post }),
  setShowAddPostDialog: (show) => set({ showAddPostDialog: show }),
  setShowEditPostDialog: (show) => set({ showEditDialog: show }),
  setShowPostDetailDialog: (show) => set({ showPostDetailDialog: show }),
}))
