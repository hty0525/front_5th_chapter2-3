import PaginationNextButton from "../../features/pagination/ui/PaginationNextButton"
import PaginationPrevButton from "../../features/pagination/ui/PaginationPrevButton"
import PaginationSelectLimit from "../../features/pagination/ui/PaginationSelectLimit"

const Pagination = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span>표시</span>
        <PaginationSelectLimit />
        <span>항목</span>
      </div>
      <div className="flex gap-2">
        <PaginationPrevButton />
        <PaginationNextButton />
      </div>
    </div>
  )
}

export default Pagination
