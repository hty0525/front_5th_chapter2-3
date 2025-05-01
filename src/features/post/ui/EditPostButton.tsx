import { Edit2 } from "lucide-react"
import { Button } from "../../../shared/ui"

import type { Post } from "../../../entities/post/model/apis"
import { usePostStore } from "../model/clientState/usePostStore"

type Props = {
  post: Post
}

const EditPostButton = ({ post }: Props) => {
  const { setSelectedPost, setShowEditPostDialog } = usePostStore()

  const onClickEditPostButton = () => {
    setSelectedPost(post)
    setShowEditPostDialog(true)
  }

  return (
    <Button variant="ghost" size="sm" onClick={onClickEditPostButton}>
      <Edit2 className="w-4 h-4" />
    </Button>
  )
}

export default EditPostButton
