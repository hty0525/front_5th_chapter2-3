import { useQuery, useSuspenseQuery } from "@tanstack/react-query"
import { postApis } from "../../../../entities/post/api/apis"
import { userApis } from "../../../../entities/user/api/apis"

import type { GetPostListRequestParams, GetPostListResponse } from "../../../../entities/post/model/apis"

export const usePostListQuery = ({ skip, limit, search, tag }: GetPostListRequestParams) => {
  return useSuspenseQuery<GetPostListResponse>({
    queryKey: ["posts", { skip, limit, search, tag }],
    queryFn: () => {
      if (search) {
        return postApis.getSearchPostList(search)
      } else if (tag !== "all" && !!tag) {
        return postApis.getSearchTagPostList(tag)
      }
      return postApis.getPostList({ skip, limit })
    },
  })
}

export function useUserListQuery() {
  return useSuspenseQuery({
    queryKey: ["userList"],
    queryFn: userApis.getUserList,
    select: ({ users }) => users,
  })
}

export function useTagsQuery() {
  return useQuery({
    queryKey: ["tags"],
    queryFn: postApis.getPostTagList,
  })
}
