import { usePost } from "../../features/post/model/usePost"
import { TableBody } from "../../shared/ui"
import Post from "./Post"

const PostTableBody = () => {
  const { postList } = usePost()
  return (
    <TableBody>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </TableBody>
  )
}

export default PostTableBody
