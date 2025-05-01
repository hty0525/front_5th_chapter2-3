import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui"
import { useTagsQuery } from "../../post/model/serverState/useQuery"
import { useSearchFilter } from "../model/useSearchFilter"

const SearchFilterSelectTag = () => {
  const { tag, setTag } = useSearchFilter()

  const { data: tagList } = useTagsQuery()

  const onChangeSelectTag = (value: string) => {
    setTag(value)
  }

  return (
    <Select value={tag} onValueChange={onChangeSelectTag}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tagList?.map((tag) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SearchFilterSelectTag
