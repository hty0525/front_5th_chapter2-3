import { TableCell, TableRow } from "../../shared/ui/Table"

import type { PostWithAuthor } from "../../entities/post/model/apis"

import { HighlightText } from "../../shared/ui"
import DeletePostButton from "../../features/post/ui/DeletePostButton"
import EditPostButton from "../../features/post/ui/EditPostButton"
import OpenPostDetailButton from "../../features/post/ui/OpenPostDetailButton"
import Reaction from "../../entities/post/ui/Reaction"
import UserAvatar from "../../features/post/ui/UserAvatar"
import Tag from "../../features/post/ui/Tag"
import { useSearchFilter } from "../../features/searchFilter/model/useSearchFilter"

type Props = {
  post: PostWithAuthor
}

const Post = ({ post }: Props) => {
  const { id, title, tags, author, reactions } = post
  const { search } = useSearchFilter()

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <div className="space-y-1">
          <div>
            <HighlightText text={title} highlight={search} />
          </div>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </TableCell>
      <TableCell>{author && <UserAvatar {...author} />}</TableCell>
      <TableCell>
        <Reaction {...reactions} />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <OpenPostDetailButton post={post} />
          <EditPostButton post={post} />
          <DeletePostButton postId={id} />
        </div>
      </TableCell>
    </TableRow>
  )
}

export default Post
