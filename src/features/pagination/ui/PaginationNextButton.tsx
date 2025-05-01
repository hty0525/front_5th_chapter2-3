import { Button } from "../../../shared/ui"
import { usePostStore } from "../../post/model/clientState/usePostStore"

import { usePagination } from "../model/usePagination"

const PaginationNextButton = () => {
  const { skip, limit, setSkip } = usePagination()
  const { total } = usePostStore()

  const onClickNextButton = () => {
    setSkip(Math.max(0, skip - limit))
  }

  return (
    <Button disabled={skip + limit >= total} onClick={onClickNextButton}>
      다음
    </Button>
  )
}

export default PaginationNextButton
