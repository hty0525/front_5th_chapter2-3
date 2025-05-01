import { create } from "zustand"
import { CommentDetail } from "../../../../entities/comment/model/apis"

type CommentStore = {
  selectedComment: CommentDetail | null
  showAddCommentDialog: boolean
  showEditCommentDialog: boolean
}

type CommentAction = {
  setSelectedComment: (comment: CommentDetail | null) => void
  setShowAddCommentDialog: (show: boolean) => void
  setShowEditCommentDialog: (show: boolean) => void
}

export const useCommentStore = create<CommentStore & CommentAction>((set) => ({
  selectedComment: null,
  showAddCommentDialog: false,
  showEditCommentDialog: false,

  setSelectedComment: (comment) => set({ selectedComment: comment }),
  setShowAddCommentDialog: (show) => set({ showAddCommentDialog: show }),
  setShowEditCommentDialog: (show) => set({ showEditCommentDialog: show }),
}))
