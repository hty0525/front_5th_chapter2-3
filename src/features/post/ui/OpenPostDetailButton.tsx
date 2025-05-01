import { Button } from "../../../shared/ui"
import { MessageSquare } from "lucide-react"
import type { Post } from "../../../entities/post/model/apis"
import { usePostStore } from "../model/clientState/usePostStore"

type Props = {
  post: Post
}

const OpenPostDetailButton = ({ post }: Props) => {
  const { setSelectedPost, setShowPostDetailDialog } = usePostStore()

  const onClickPostDetailButton = () => {
    setSelectedPost(post)
    setShowPostDetailDialog(true)
  }

  return (
    <Button variant="ghost" size="sm" onClick={onClickPostDetailButton}>
      <MessageSquare className="w-4 h-4" />
    </Button>
  )
}

export default OpenPostDetailButton
