import { Plus } from "lucide-react"
import { Button } from "../../../shared/ui"
import { useCommentStore } from "../model/clientState/useCommentStore"

const CreateCommentButton = () => {
  const { setShowAddCommentDialog } = useCommentStore()
  const onClickCreateCommentButton = () => {
    setShowAddCommentDialog(true)
  }

  return (
    <Button size="sm" onClick={onClickCreateCommentButton}>
      <Plus className="w-3 h-3 mr-1" />
      댓글 추가
    </Button>
  )
}

export default CreateCommentButton
