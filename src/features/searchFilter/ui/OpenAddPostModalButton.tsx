import { Plus } from "lucide-react"
import { Button } from "../../../shared/ui"
import { usePostStore } from "../../post/model/clientState/usePostStore"

const OpenAddPostModalButton = () => {
  const { setShowAddPostDialog } = usePostStore()

  const onClickOpenAddPostModalButton = () => {
    setShowAddPostDialog(true)
  }
  return (
    <Button onClick={onClickOpenAddPostModalButton}>
      <Plus className="w-4 h-4 mr-2" />
      게시물 추가
    </Button>
  )
}

export default OpenAddPostModalButton
