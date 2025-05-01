import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui"
import { usePagination } from "../model/usePagination"

const PaginationSelectLimit = () => {
  const { limit, setLimit } = usePagination()

  const onChangeLimit = (value: string) => {
    setLimit(parseInt(value))
  }

  return (
    <Select value={limit.toString()} onValueChange={onChangeLimit}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="10" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="30">30</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default PaginationSelectLimit
