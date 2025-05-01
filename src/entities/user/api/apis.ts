import { fetchInstance } from "../../../shared/api/fetchInstance"

import type { GetUserListResponse, GetUserResponse } from "../model/apis"

const BASE_USER_URL = "/users"

export const userApis = {
  getUserList: async (): Promise<GetUserListResponse> => {
    return await fetchInstance(`${BASE_USER_URL}?limit=0&select=username,image`)
  },
  getUser: async (userId: number): Promise<GetUserResponse> => {
    return await fetchInstance(`${BASE_USER_URL}/${userId}`)
  },
}
