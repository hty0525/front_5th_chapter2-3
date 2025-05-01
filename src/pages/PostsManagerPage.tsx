import { Card } from "../shared/ui"
import SearchFilterBar from "../widgets/searchFilter/SearchFilterBar"
import PostTable from "../widgets/post/PostTable"
import UserDetailModal from "../features/user/ui/UserDetailModal"
import PostDetailModal from "../widgets/post/PostDetailModal"
import EditCommentModal from "../features/comment/ui/EditCommentModal"
import AddCommentModal from "../features/comment/ui/AddCommentModal"
import { AddPostModal } from "../features/post/ui/AddPostModal"
import EditPostModal from "../features/post/ui/EditPostModal"

const PostsManager = () => {
  return (
    <>
      <Card className="w-full max-w-6xl mx-auto">
        <SearchFilterBar />
        <PostTable />
      </Card>
      <AddPostModal />
      <EditPostModal />
      <PostDetailModal />
      <UserDetailModal />
      <EditCommentModal />
      <AddCommentModal />
    </>
  )
}

export default PostsManager
