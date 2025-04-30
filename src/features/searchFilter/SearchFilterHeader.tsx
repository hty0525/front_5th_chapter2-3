import { Plus } from "lucide-react"
import { CardHeader, CardTitle, Button } from "../../shared/ui"

const SearchFilterHeader = () => {
  return (
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>게시물 관리자</span>
        <Button onClick={() => {}}>
          <Plus className="w-4 h-4 mr-2" />
          게시물 추가
        </Button>
      </CardTitle>
    </CardHeader>
  )
}

export default SearchFilterHeader
