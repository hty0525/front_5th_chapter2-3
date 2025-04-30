import { ThumbsUp, Edit2, Trash2 } from "lucide-react"
import { Button, HighlightText } from "../../shared/ui"

import type { CommentDetail } from "../../entities/comment/model/apis"

type Props = CommentDetail

const Comment = ({ id, user: { username }, body, postId, likes }: Props) => {
  return (
    <div key={id} className="flex items-center justify-between text-sm border-b pb-1">
      <div className="flex items-center space-x-2 overflow-hidden">
        <span className="font-medium truncate">{username}:</span>
        <span className="truncate">
          <HighlightText text={body} highlight="searchQuery" />
        </span>
      </div>
      <div className="flex items-center space-x-1">
        <Button variant="ghost" size="sm" onClick={() => {}}>
          <ThumbsUp className="w-3 h-3" />
          <span className="ml-1 text-xs">{likes}</span>
        </Button>
        <Button variant="ghost" size="sm" onClick={() => {}}>
          <Edit2 className="w-3 h-3" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => {}}>
          <Trash2 className="w-3 h-3" />
        </Button>
      </div>
    </div>
  )
}

export default Comment
