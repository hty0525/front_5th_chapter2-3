import { Button } from "../../../shared/ui"
import { Trash2 } from "lucide-react"
import { useDeletePostMutation } from "../model/serverState/useMutation"

type Props = {
  postId: number
}

const DeletePostButton = ({ postId }: Props) => {
  const { mutate } = useDeletePostMutation()

  const onClickDeletePostButton = () => {
    mutate(postId)
  }

  return (
    <Button variant="ghost" size="sm" onClick={onClickDeletePostButton}>
      <Trash2 className="w-4 h-4" />
    </Button>
  )
}

export default DeletePostButton
