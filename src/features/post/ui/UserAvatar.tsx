import { User } from "../../../entities/user/model/apis"
import { useUserStore } from "../../user/model/clientState/useUserStore"

type Props = User

const UserAvatar = ({ image, username, id }: Props) => {
  const { setSelectedUserId } = useUserStore()

  const onClickUser = () => {
    setSelectedUserId(id)
  }

  return (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={onClickUser}>
      <img src={image} alt={username} className="w-8 h-8 rounded-full" />
      <span>{username}</span>
    </div>
  )
}

export default UserAvatar
