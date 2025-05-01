import { fetchInstance } from "../../../shared/api/fetchInstance"
import type {
  GetPostListRequestParams,
  GetPostListResponse,
  GetPostTagListResponse,
  PostAddPostRequestBody,
  PutUpdatePostRequestBody,
} from "../model/apis"

const BASE_POST_URL = "/posts"

export const postApis = {
  getPostList: async ({
    limit,
    skip,
  }: Pick<GetPostListRequestParams, "skip" | "limit">): Promise<GetPostListResponse> => {
    return await fetchInstance(`${BASE_POST_URL}?limit=${limit}&skip=${skip}`)
  },
  getSearchPostList: async (search: string): Promise<GetPostListResponse> => {
    return await fetchInstance(`${BASE_POST_URL}/search?q=${search}`)
  },
  getSearchTagPostList: async (tag: string): Promise<GetPostListResponse> => {
    return await fetchInstance(`${BASE_POST_URL}/tag/${tag}`)
  },
  getPostTagList: async (): Promise<GetPostTagListResponse> => {
    return await fetchInstance(`${BASE_POST_URL}/tags`)
  },
  postCreatePost: async (requestBody: PostAddPostRequestBody) => {
    return await fetchInstance(`${BASE_POST_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
  },
  putUpdatePost: async (requestBody: PutUpdatePostRequestBody) => {
    return await fetchInstance(`${BASE_POST_URL}/${requestBody.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
  },
  deletePost: async (postId: number) => {
    return await fetchInstance(`${BASE_POST_URL}/${postId}`, {
      method: "DELETE",
    })
  },
}
