import { Button } from "../../../shared/ui"
import { usePagination } from "../model/usePagination"

const PaginationPrevButton = () => {
  const { skip, limit, setSkip } = usePagination()

  const onClickPrevButton = () => {
    setSkip(Math.max(0, skip - limit))
  }

  return (
    <Button disabled={skip === 0} onClick={onClickPrevButton}>
      이전
    </Button>
  )
}

export default PaginationPrevButton
