import { CardHeader, CardTitle } from "../../shared/ui"
import OpenAddPostModalButton from "../../features/searchFilter/ui/OpenAddPostModalButton"

const SearchFilterHeader = () => {
  return (
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>게시물 관리자</span>
        <OpenAddPostModalButton />
      </CardTitle>
    </CardHeader>
  )
}

export default SearchFilterHeader
