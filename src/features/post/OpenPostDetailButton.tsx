import { Button } from "../../shared/ui"
import { MessageSquare } from "lucide-react"

type Props = {
  onClick: () => void
}

const OpenPostDetailButton = ({ onClick }: Props) => {
  return (
    <Button variant="ghost" size="sm" onClick={onClick}>
      <MessageSquare className="w-4 h-4" />
    </Button>
  )
}

export default OpenPostDetailButton
