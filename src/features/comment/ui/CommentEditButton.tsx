import { Edit2 } from "lucide-react"
import { Button } from "../../../shared/ui"
import { useCommentStore } from "../model/clientState/useCommentStore"
import { CommentDetail } from "../../../entities/comment/model/apis"

type Props = {
  comment: CommentDetail
}

const CommentEditButton = ({ comment }: Props) => {
  const { setSelectedComment, setShowEditCommentDialog } = useCommentStore()

  const onClickEditCommentButton = () => {
    setSelectedComment(comment)
    setShowEditCommentDialog(true)
  }

  return (
    <Button variant="ghost" size="sm" onClick={onClickEditCommentButton}>
      <Edit2 className="w-3 h-3" />
    </Button>
  )
}

export default CommentEditButton
