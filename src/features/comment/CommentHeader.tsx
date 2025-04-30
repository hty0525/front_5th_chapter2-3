import { Plus } from "lucide-react"
import { Button } from "../../shared/ui"

const CommentHeader = () => {
  return (
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-semibold">댓글</h3>
      <Button size="sm" onClick={() => {}}>
        <Plus className="w-3 h-3 mr-1" />
        댓글 추가
      </Button>
    </div>
  )
}

export default CommentHeader
