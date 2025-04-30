import { User } from "../../user/model/apis"

export type GetPostListRequestParams = {
  limit: number
  skip: number
}

export type GetPostListResponse = {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

export type Post = {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: Reaction
  views: number
  userId: number
}

export type Reaction = {
  likes: number
  dislikes: number
}

export type GetPostTagListResponse = Tag[]

export type Tag = {
  slug: string
  name: string
  url: string
}

export type PostAddPostRequestBody = Pick<Post, "title" | "body" | "userId">

export type PutUpdatePostRequestBody = Post

export type PostWithAuthor = Post & {
  author?: User
}
