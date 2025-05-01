import { useState } from "react"
import { Button, Dialog, DialogContent, DialogHeader, DialogTitle, Input, Textarea } from "../../../shared/ui"
import { usePostStore } from "../model/clientState/usePostStore"
import { useAddPostMutation } from "../model/serverState/useMutation"

export const AddPostModal = () => {
  const [newPost, setNewPost] = useState(DEFAULT_POST)

  const { showAddPostDialog, setShowAddPostDialog } = usePostStore()
  const { mutate } = useAddPostMutation()

  const onChangeNewPostInput = <T extends HTMLInputElement | HTMLTextAreaElement>({
    target: { value, name },
  }: React.ChangeEvent<T>) => {
    setNewPost((prev) => ({ ...prev, [name]: value }))
  }

  const onClickAddPostButton = () => {
    mutate(newPost)
    setNewPost(DEFAULT_POST)
    setShowAddPostDialog(false)
  }

  return (
    <Dialog open={showAddPostDialog} onOpenChange={setShowAddPostDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 게시물 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input placeholder="제목" name={"title"} value={newPost.title} onChange={onChangeNewPostInput} />
          <Textarea rows={30} name="body" placeholder="내용" value={newPost.body} onChange={onChangeNewPostInput} />
          <Input
            type="number"
            name="userId"
            placeholder="사용자 ID"
            value={newPost.userId}
            onChange={onChangeNewPostInput}
          />
          <Button onClick={onClickAddPostButton}>게시물 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const DEFAULT_POST = { title: "", body: "", userId: 0 }
