import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui"
import { useSearchFilter } from "../model/useSearchFilter"

const SearchFilterSelectSortBy = () => {
  const { sortBy, setSortBy } = useSearchFilter()

  const onChangeSelectSortBy = (value: string) => {
    setSortBy(value)
  }

  return (
    <Select value={sortBy} onValueChange={onChangeSelectSortBy}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 기준" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">없음</SelectItem>
        <SelectItem value="id">ID</SelectItem>
        <SelectItem value="title">제목</SelectItem>
        <SelectItem value="reactions">반응</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SearchFilterSelectSortBy
