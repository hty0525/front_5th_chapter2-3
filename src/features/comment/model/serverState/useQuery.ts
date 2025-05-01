import { useQuery } from "@tanstack/react-query"
import { commentApis } from "../../../../entities/comment/api/apis"

export function useGetCommentQuery(postId: number | null) {
  return useQuery({
    queryKey: ["comment", postId],
    queryFn: () => commentApis.getCommentList(postId!),
    enabled: !!postId,
  })
}
