import { useState } from "react"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "../../../shared/ui"
import { usePostStore } from "../model/clientState/usePostStore"
import { useEditPostMutation } from "../model/serverState/useMutation"

const EditPostModal = () => {
  const { showEditDialog, setShowEditPostDialog, selectedPost, setSelectedPost } = usePostStore()
  const [updatePost, setUpdatePost] = useState({ title: selectedPost?.title ?? "", body: selectedPost?.body ?? "" })
  const { title, body } = updatePost

  const { mutate } = useEditPostMutation()

  const onChangeUpdatePostInput = <T extends HTMLInputElement | HTMLTextAreaElement>({
    target: { value, name },
  }: React.ChangeEvent<T>) => {
    setUpdatePost((prev) => ({ ...prev, [name]: value }))
  }

  const onClickUpdatePostButton = () => {
    if (!selectedPost) {
      return
    }
    mutate({ ...selectedPost, ...updatePost })
    setUpdatePost({ title: "", body: "" })
    setShowEditPostDialog(false)
    setSelectedPost(null)
  }

  return (
    <Dialog open={showEditDialog} onOpenChange={setShowEditPostDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="제목" name="title" value={title} onChange={onChangeUpdatePostInput} />
          <Textarea rows={15} placeholder="내용" name="body" value={body} onChange={onChangeUpdatePostInput} />
          <Button onClick={onClickUpdatePostButton}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditPostModal
