import { Edit2 } from "lucide-react"
import { Button } from "../../shared/ui"

type Props = {
  onClick: () => void
}

const EditPostButton = ({ onClick }: Props) => {
  return (
    <Button variant="ghost" size="sm" onClick={onClick}>
      <Edit2 className="w-4 h-4" />
    </Button>
  )
}

export default EditPostButton
