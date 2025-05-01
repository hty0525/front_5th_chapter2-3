export type GetCommentListResponse = {
  comments: CommentDetail[]
  total: number
  skip: number
  limit: number
}

export type PostCreateCommentRequestBody = Pick<CommentDetail, "body" | "postId"> & { userId: number }

export type PutUpdateCommentRequestBody = Pick<CommentDetail, "id" | "body">

export type PatchLikeCommentRequestBody = {
  likes: number
  id: number
}

export type CommentDetail = {
  id: number
  body: string
  postId: number
  likes: number
  user: CommentUser
}

export type CommentUser = {
  id: number
  username: string
  fullName: string
}
