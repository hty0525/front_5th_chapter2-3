import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui"
import { useSearchFilter } from "../model/useSearchFilter"

const SearchFilterSelectSortOrder = () => {
  const { sortOrder, setSortOrder } = useSearchFilter()

  const onChangeSortOrder = (value: string) => {
    setSortOrder(value)
  }

  return (
    <Select value={sortOrder} onValueChange={onChangeSortOrder}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="정렬 순서" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="asc">오름차순</SelectItem>
        <SelectItem value="desc">내림차순</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SearchFilterSelectSortOrder
