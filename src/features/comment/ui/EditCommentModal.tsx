import { useState } from "react"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Textarea } from "../../../shared/ui"
import { useCommentStore } from "../model/clientState/useCommentStore"
import { useEditCommentMutation } from "../model/serverState/useMutation"

const EditCommentModal = () => {
  const { selectedComment, showEditCommentDialog, setShowEditCommentDialog } = useCommentStore()

  const [commentBody, setCommentBody] = useState(selectedComment?.body || "")

  const { mutate } = useEditCommentMutation()

  const onChangeCommentBody = ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentBody(value)
  }

  const onClickUpdateCommentButton = () => {
    if (!selectedComment) {
      return
    }
    mutate({ ...selectedComment, body: commentBody })
    setCommentBody("")
    setShowEditCommentDialog(false)
  }

  return (
    <Dialog open={showEditCommentDialog} onOpenChange={setShowEditCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea placeholder="댓글 내용" value={commentBody} onChange={onChangeCommentBody} />
          <Button onClick={onClickUpdateCommentButton}>댓글 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditCommentModal
