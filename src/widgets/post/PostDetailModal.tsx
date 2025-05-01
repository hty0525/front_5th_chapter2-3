import CommentList from "../comment/CommentList"
import { usePostStore } from "../../features/post/model/clientState/usePostStore"
import { useSearchFilter } from "../../features/searchFilter/model/useSearchFilter"
import { Dialog, DialogContent, DialogHeader, DialogTitle, HighlightText } from "../../shared/ui"

const PostDetailModal = () => {
  const { selectedPost, showPostDetailDialog, setShowPostDetailDialog } = usePostStore()
  const { search } = useSearchFilter()

  if (!selectedPost) {
    return null
  }

  return (
    <Dialog open={showPostDetailDialog} onOpenChange={setShowPostDetailDialog}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            <HighlightText text={selectedPost?.title} highlight={search} />
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            <HighlightText text={selectedPost?.body} highlight={search} />
          </p>
          <CommentList />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PostDetailModal
