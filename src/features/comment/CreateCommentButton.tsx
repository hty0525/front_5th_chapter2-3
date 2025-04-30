import { Plus } from "lucide-react"
import { Button } from "../../shared/ui"

type Props = {
  onClick: () => void
}

const CreateCommentButton = ({ onClick }: Props) => {
  return (
    <Button size="sm" onClick={onClick}>
      <Plus className="w-3 h-3 mr-1" />
      댓글 추가
    </Button>
  )
}

export default CreateCommentButton
