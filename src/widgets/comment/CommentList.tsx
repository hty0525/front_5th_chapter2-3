import { usePostStore } from "../../features/post/model/clientState/usePostStore"
import Comment from "./Comment"
import CommentHeader from "../../features/comment/ui/CommentHeader"
import { useGetCommentQuery } from "../../features/comment/model/serverState/useQuery"

const CommentList = () => {
  const { selectedPost } = usePostStore()
  const { data: commentList } = useGetCommentQuery(selectedPost?.id ?? null)

  if (!selectedPost) {
    return null
  }

  return (
    <div className="mt-2">
      <CommentHeader />
      <div className="space-y-1">
        {commentList?.comments?.map((comment) => <Comment key={comment.id} comment={comment} />)}
      </div>
    </div>
  )
}

export default CommentList
