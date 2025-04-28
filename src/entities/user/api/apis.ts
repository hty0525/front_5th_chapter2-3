import { fetchInstance } from "../../../shared/api/fetchInstance"

import type { GetUserListResponse, GetUserResponse } from "../model/apis"

const BASE_USER_URL = "/users"

export const userApis = {
  getUserList: async (): Promise<GetUserListResponse> => {
    const response = await fetchInstance(`${BASE_USER_URL}?limit=0&select=username,image`)
    return await response.json()
  },
  getUser: async (userId: number): Promise<GetUserResponse> => {
    const response = await fetchInstance(`${BASE_USER_URL}/${userId}`)
    return await response.json()
  },
}
