import { create } from "zustand"

type UserState = {
  selectedUserId: number | null
}

type UserAction = {
  setSelectedUserId: (userId: number | null) => void
}

export const useUserStore = create<UserState & UserAction>((set) => ({
  selectedUserId: null,
  setSelectedUserId: (userId) => set({ selectedUserId: userId }),
}))
