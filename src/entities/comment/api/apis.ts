import { fetchInstance } from "../../../shared/api/fetchInstance"

import type {
  GetCommentListResponse,
  PatchLikeCommentRequestBody,
  PostCreateCommentRequestBody,
  PutUpdateCommentRequestBody,
} from "../model/apis"

const BASE_COMMENT_URL = "/comments"

export const commentApis = {
  getCommentList: async (postId: number): Promise<GetCommentListResponse> => {
    return await fetchInstance(`${BASE_COMMENT_URL}/post/${postId}`)
  },
  postCreateComment: async (requestBody: PostCreateCommentRequestBody) => {
    return await fetchInstance(`${BASE_COMMENT_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
  },
  putUpdateComment: async ({ id, body }: PutUpdateCommentRequestBody) => {
    return await fetchInstance(`${BASE_COMMENT_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body }),
    })
  },
  deleteComment: async (commentId: number) => {
    return await fetchInstance(`${BASE_COMMENT_URL}/${commentId}`, {
      method: "DELETE",
    })
  },
  patchLikeComment: async ({ id, likes }: PatchLikeCommentRequestBody) => {
    return await fetchInstance(`${BASE_COMMENT_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes }),
    })
  },
}
