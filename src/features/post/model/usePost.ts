import { useEffect } from "react"

import { usePostListQuery, useUserListQuery } from "./serverState/useQuery"
import { usePostStore } from "./clientState/usePostStore"
import { useSearchFilter } from "../../searchFilter/model/useSearchFilter"
import { usePagination } from "../../pagination/model/usePagination"

export const usePost = () => {
  const { search, tag } = useSearchFilter()
  const { skip, limit } = usePagination()
  const { setTotal } = usePostStore()
  const { data: postList, isSuccess } = usePostListQuery({ skip, limit, search, tag })
  const { data: userList } = useUserListQuery()

  const { posts, total = 0 } = postList ?? {}

  useEffect(() => {
    if (isSuccess) {
      setTotal(total)
    }
  }, [isSuccess])

  return { postList: posts.map((post) => ({ ...post, author: userList.find((user) => user.id === post.userId) })) }
}
