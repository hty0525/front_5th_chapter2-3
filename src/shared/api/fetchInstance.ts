export const fetchInstance = async (url: string, options?: RequestInit) => {
  const response = await fetch(`/api${url}`, options)
  return await response.json()
}
