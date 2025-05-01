import { useQuery } from "@tanstack/react-query"
import { userApis } from "../../../../entities/user/api/apis"

export const useGetUserQuery = (userId: number | null) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => userApis.getUser(userId!),
    enabled: !!userId,
  })
}
