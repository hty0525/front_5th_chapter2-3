import { TableCell, TableRow } from "../../shared/ui/Table"

import type { PostWithAuthor } from "../../entities/post/model/apis"
import OpenPostDetailButton from "./OpenPostDetailButton"
import EditPostButton from "./EditPostButton"
import DeletePostButton from "./DeletePostButton"
import UserAvatar from "./UserAvatar"
import Tag from "./Tag"
import Reaction from "./Reaction"

import { HighlightText } from "../../shared/ui"

type Props = PostWithAuthor

const Post = ({ id, tags, title, author, reactions }: Props) => {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <div className="space-y-1">
          <div>
            <HighlightText text={title} highlight="" />
          </div>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => {
              const isSelected = true
              return <Tag isSelected={isSelected} tag={tag} onClick={() => {}} />
            })}
          </div>
        </div>
      </TableCell>
      <TableCell>{author && <UserAvatar {...author} onClick={() => {}} />}</TableCell>
      <TableCell>
        <Reaction {...reactions} />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <OpenPostDetailButton onClick={() => {}} />
          <EditPostButton onClick={() => {}} />
          <DeletePostButton onClick={() => {}} />
        </div>
      </TableCell>
    </TableRow>
  )
}

export default Post
