import CreateCommentButton from "./CreateCommentButton"

const CommentHeader = () => {
  return (
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-semibold">댓글</h3>
      <CreateCommentButton />
    </div>
  )
}

export default CommentHeader
