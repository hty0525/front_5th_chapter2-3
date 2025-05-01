import SearchFilterInput from "../../features/searchFilter/ui/SearchFilterInput"
import SearchFilterSelectTag from "../../features/searchFilter/ui/SearchFilterSelectTag"
import SearchFilterSelectSortOrder from "../../features/searchFilter/ui/SearchFilterSelectSortOrder"
import SearchFilterSelectSortBy from "../../features/searchFilter/ui/SearchFilterSelectSortBy"

const SearchFilterBody = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <SearchFilterInput />
      </div>
      <SearchFilterSelectTag />
      <SearchFilterSelectSortBy />
      <SearchFilterSelectSortOrder />
    </div>
  )
}

export default SearchFilterBody
