import { Suspense } from "react"

import { Table, CardContent } from "../../shared/ui"

import Pagination from "../pagination/Pagination"
import PostTableHeader from "./PostTableHeader"
import PostTableBody from "./PostTableBody"

const PostTable = () => {
  return (
    <CardContent>
      <div className="flex flex-col gap-4">
        <Suspense fallback={<div className="flex justify-center p-4">로딩 중...</div>}>
          <Table>
            <PostTableHeader />
            <PostTableBody />
          </Table>
        </Suspense>
        <Pagination />
      </div>
    </CardContent>
  )
}

export default PostTable
