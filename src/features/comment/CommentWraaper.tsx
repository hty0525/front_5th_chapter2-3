import CommentHeader from "./CommentHeader"

const CommentWrapper = () => {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between mb-2">
        <CommentHeader />
      </div>
      <div className="space-y-1"></div>
    </div>
  )
}

export default CommentWrapper
