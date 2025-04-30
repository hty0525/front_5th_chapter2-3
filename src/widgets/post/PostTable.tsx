import { Table, TableBody } from "../../shared/ui/Table"

import PostTableHeader from "./PostTableHeader"

const PostTable = () => {
  return (
    <Table>
      <PostTableHeader />
      <TableBody></TableBody>
    </Table>
  )
}

export default PostTable
