import { Search } from "lucide-react"
import { Input } from "../../../shared/ui"
import { useSearchFilter } from "../model/useSearchFilter"
import { useState } from "react"

const SearchFilterInput = () => {
  const { search, setSearch } = useSearchFilter()

  const [searchKey, setSearchKey] = useState(search)

  const onChangeSearchKeyInput = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(value)
  }

  const onSubmitSearchKey = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch(searchKey)
  }

  return (
    <form className="relative" onSubmit={onSubmitSearchKey}>
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        name="searchKey"
        placeholder="게시물 검색..."
        className="pl-8"
        value={searchKey}
        onChange={onChangeSearchKeyInput}
      />
    </form>
  )
}

export default SearchFilterInput
