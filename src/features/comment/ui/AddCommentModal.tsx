import { useState } from "react"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "../../../shared/ui"
import { useCommentStore } from "../model/clientState/useCommentStore"
import { useAddCommentMutation } from "../model/serverState/useMutation"

const AddCommentModal = () => {
  const { selectedComment, showAddCommentDialog, setShowAddCommentDialog } = useCommentStore()
  const [commentBody, setCommentBody] = useState("")

  const { mutate } = useAddCommentMutation()

  const onChangeCommentBody = ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentBody(value)
  }

  const onClickAddCommentButton = () => {
    if (!selectedComment) {
      return
    }
    const {
      postId,
      user: { id: userId },
    } = selectedComment

    mutate({ body: commentBody, postId, userId })
    setCommentBody("")
    setShowAddCommentDialog(false)
  }

  return (
    <Dialog open={showAddCommentDialog} onOpenChange={setShowAddCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea placeholder="댓글 내용" value={commentBody} onChange={onChangeCommentBody} />
          <Button onClick={onClickAddCommentButton}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddCommentModal
