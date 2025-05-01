import { Button } from "../../../shared/ui"
import { ThumbsUp } from "lucide-react"
import { useLikeCommentMutation } from "../model/serverState/useMutation"
import { PatchLikeCommentRequestBody } from "../../../entities/comment/model/apis"

type Props = PatchLikeCommentRequestBody

export const CommentLikeButton = ({ likes, id }: Props) => {
  const { mutate } = useLikeCommentMutation()

  const onClickLikeButton = () => {
    mutate({ id, likes: likes + 1 })
  }

  return (
    <Button variant="ghost" size="sm" onClick={onClickLikeButton}>
      <ThumbsUp className="w-3 h-3" />
      <span className="ml-1 text-xs">{likes}</span>
    </Button>
  )
}
