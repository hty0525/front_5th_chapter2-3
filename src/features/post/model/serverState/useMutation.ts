import { useMutation } from "@tanstack/react-query"

import { postApis } from "../../../../entities/post/api/apis"

import type { PostAddPostRequestBody, Post } from "../../../../entities/post/model/apis"

export function useAddPostMutation() {
  return useMutation({
    mutationFn: (post: PostAddPostRequestBody) => postApis.postCreatePost(post),
  })
}

export function useEditPostMutation() {
  return useMutation({
    mutationFn: (post: Post) => postApis.putUpdatePost(post),
  })
}

export function useDeletePostMutation() {
  return useMutation({
    mutationFn: (id: number) => postApis.deletePost(id),
  })
}
