import { Trash2 } from "lucide-react"
import { Button } from "../../../shared/ui"
import { useDeleteCommentMutation } from "../model/serverState/useMutation"

type Props = {
  commentId: number
}

const CommentDeleteButton = ({ commentId }: Props) => {
  const { mutate } = useDeleteCommentMutation()

  const onClickDeleteCommentButton = () => {
    mutate(commentId)
  }

  return (
    <Button variant="ghost" size="sm" onClick={onClickDeleteCommentButton}>
      <Trash2 className="w-3 h-3" />
    </Button>
  )
}

export default CommentDeleteButton
