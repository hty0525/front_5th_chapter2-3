import { HighlightText } from "../../shared/ui"

import { CommentLikeButton } from "../../features/comment/ui/CommentLikeButton"
import CommentEditButton from "../../features/comment/ui/CommentEditButton"
import CommentDeleteButton from "../../features/comment/ui/CommentDeleteButton"

import { useSearchFilter } from "../../features/searchFilter/model/useSearchFilter"

import type { CommentDetail } from "../../entities/comment/model/apis"

type Props = { comment: CommentDetail }

const Comment = ({ comment }: Props) => {
  const { search } = useSearchFilter()
  const {
    id,
    user: { username },
    body,
    likes,
  } = comment

  return (
    <div key={id} className="flex items-center justify-between text-sm border-b pb-1">
      <div className="flex items-center space-x-2 overflow-hidden">
        <span className="font-medium truncate">{username}:</span>
        <span className="truncate">
          <HighlightText text={body} highlight={search} />
        </span>
      </div>
      <div className="flex items-center space-x-1">
        <CommentLikeButton likes={likes} id={id} />
        <CommentEditButton comment={comment} />
        <CommentDeleteButton commentId={id} />
      </div>
    </div>
  )
}

export default Comment
