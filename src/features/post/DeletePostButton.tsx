import { Button } from "../../shared/ui"
import { Trash2 } from "lucide-react"

type Props = {
  onClick: () => void
}

const DeletePostButton = ({ onClick }: Props) => {
  return (
    <Button variant="ghost" size="sm" onClick={onClick}>
      <Trash2 className="w-4 h-4" />
    </Button>
  )
}

export default DeletePostButton
