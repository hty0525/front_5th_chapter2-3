import { CardHeader } from "../../shared/ui"
import SearchFilterHeader from "./SearchFilterHeader"
import SearchFilterBody from "./SearchFilterBody"

const SearchFilterBar = () => {
  return (
    <CardHeader>
      <SearchFilterHeader />
      <SearchFilterBody />
    </CardHeader>
  )
}

export default SearchFilterBar
