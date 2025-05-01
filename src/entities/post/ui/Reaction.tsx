import { ThumbsUp, ThumbsDown } from "lucide-react"
import type { Reaction } from "../model/apis"

type Props = Reaction

const Reaction = ({ likes, dislikes }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <ThumbsUp className="w-4 h-4" />
      <span>{likes || 0}</span>
      <ThumbsDown className="w-4 h-4" />
      <span>{dislikes || 0}</span>
    </div>
  )
}

export default Reaction
