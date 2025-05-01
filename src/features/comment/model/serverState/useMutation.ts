import { useMutation } from "@tanstack/react-query"
import { commentApis } from "../../../../entities/comment/api/apis"

import type {
  CommentDetail,
  PatchLikeCommentRequestBody,
  PostCreateCommentRequestBody,
} from "../../../../entities/comment/model/apis"

export function useEditCommentMutation() {
  return useMutation({
    mutationFn: (reqBody: CommentDetail) => commentApis.putUpdateComment(reqBody),
  })
}

export function useDeleteCommentMutation() {
  return useMutation({
    mutationFn: (commentId: number) => commentApis.deleteComment(commentId),
  })
}

export function useLikeCommentMutation() {
  return useMutation({
    mutationFn: (requestBody: PatchLikeCommentRequestBody) => commentApis.patchLikeComment(requestBody),
  })
}

export function useAddCommentMutation() {
  return useMutation({
    mutationFn: (requestBody: PostCreateCommentRequestBody) => commentApis.postCreateComment(requestBody),
  })
}
